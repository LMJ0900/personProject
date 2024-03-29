import { createSlice } from "@reduxjs/toolkit";

interface IUser{
    id : number
    username : string
    password : string
    name : string
    phoneNumber : string
    job : string
    height : number
    weight : number
}

const initialState:IUser = {
    id : 0,
    username : '',
    password : '',
    name : '',
    phoneNumber : '',
    job : '',
    height : 0,
    weight : 0
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {}
})

