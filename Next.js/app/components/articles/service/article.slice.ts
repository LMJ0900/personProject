import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { createSlice } from "@reduxjs/toolkit";
import { initialState } from './article.init';
import { findAllArticles, findArticleById } from './article.service';



const articleThunks = [findAllArticles]

const status = {
    pending: 'pending',
    fulfilled: 'fulfilled',
    rejected: 'rejected'
}

const handleFulfilled =  (state: any, {payload}: any) => {state.array = payload}


const handlePending = (state: any) => {
  
}

const handleRejected = (state: any) => {
  
}



export const articleSlice = createSlice({
    name: "articles",
    initialState,
    reducers: {},
    extraReducers: builder => {
        const {pending, rejected} = status;

        builder
        .addCase(findAllArticles.fulfilled, (state: any, {payload}: any) => {state.array = payload})
        .addCase(findArticleById.fulfilled, (state: any, {payload}: any) => {state.json = payload})
        
    }
})
export const getAllArticles = (state: any) => {
    return state.article.array;
}
export const getArticleById = (state: any) => {
    return state.article.json;
};

export const {} = articleSlice.actions
export default articleSlice.reducer;