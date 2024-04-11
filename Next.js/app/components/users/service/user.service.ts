import { createAsyncThunk } from "@reduxjs/toolkit";
import { findAllUsersAPI, findUserByIdAPI } from "./user.api";

export const findAllUsers : any = createAsyncThunk(
    'users/findAllUsers',
    async (page: number) => {
        console.log('findAllUsers' + page)
        const data:any = await findAllUsersAPI(1);
        return data
    }
)
export const findUserById : any = createAsyncThunk(
    'users/findUserById',
    async (id: number) => {
        const data:any = await findUserByIdAPI(id);
        return data
    }
)