import { createSlice } from "@reduxjs/toolkit"
import { initialState } from "./board.init"
import { findAllBoards } from "./board.service"






const boardThunks = [findAllBoards]

const status = {
    pending: 'pending',
    fulfilled: 'fulfilled',
    rejected: 'rejected'
}

const handleFulfilled =  (state: any, {payload}: any) => {
    console.log('------------------ conclusion ---------------')
    state.array = payload
    console.log(state.array)

}


const handlePending = (state: any) => {
  
}

const handleRejected = (state: any) => {
  
}



export const boardSlice = createSlice({
    name: "boards",
    initialState,
    reducers: {},
    extraReducers: builder => {
        const {pending, rejected} = status;

        builder
        .addCase(findAllBoards.fulfilled, handleFulfilled)

    }
})
export const getAllBoards = (state: any) => {
    console.log('------------------ Before useSelector ---------------')
    console.log(JSON.stringify(state.board.array.result))
    return state.board.array;
}

export const {} = boardSlice.actions

export default boardSlice.reducer;