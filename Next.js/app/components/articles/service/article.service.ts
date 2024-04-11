import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
import { findAllArticlesAPI, findArticleByIdAPI } from "./article.api";

export const findAllArticles: any = createAsyncThunk(
    'articles/findAllArticles',
    async (page: number)=>{const data:any = await  findAllArticlesAPI(1);
        return data
    })
    export const findArticleById: any = createAsyncThunk(
        'articles/findArticleById',
        async (id: number)=>{const data:any = await  findArticleByIdAPI(id);
            return data
        })