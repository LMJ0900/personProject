import { createSlice } from "@reduxjs/toolkit";
import { findAllUsers, findUserById } from "./user.service";
import {initialState} from './user.init'

const status ={
    pending: 'pending',
    fullfilled: 'fullfilled',
    rejected: 'rejected'
}

export const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: builder => {
        const{pending, rejected} = status;

        builder
        .addCase(findAllUsers.fulfilled, (state: any, {payload}: any) =>{state.array = payload})
        .addCase(findUserById.fulfilled, (state: any, {payload}: any) =>{state.json = payload})
    }
})

const handleFulfilled = (state: any, {payload}: any) =>{state.array = payload}
export const getAllUsers = (state: any) => {
    return state.user.array;
}
export const getUserById = (state: any) => {
    return state.user.json;
}

export const {} = userSlice.actions

export default userSlice.reducer;