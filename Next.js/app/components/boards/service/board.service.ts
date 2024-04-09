import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
import { findAllBoardsAPI } from "./board.api";


export const findAllBoards: any = createAsyncThunk(
    'boards/findAllboards',
    async (page: number)=>{
        console.log('findAllboards page : '+ page)
        const data:any = await  findAllBoardsAPI(1);

        const {message, result}:any = data
        // console.log('----- API 를 사용한 경우 -----')
        // console.log('message : '+ message)
        // console.log(JSON.stringify(result))
        return data
    }
)