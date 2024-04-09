'use client'

import { useRouter } from "next/navigation"
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from "react"
import {Box, Button, Input, Typography} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'
import { NextPage } from "next";
import Columns from "@/app/components/articles/module/colums";
import { getAllArticles } from "@/app/components/articles/service/article.slice";
import { findAllArticles } from "@/app/components/articles/service/article.service";
import { Rowdies } from "next/font/google";
// import React from "react";




// export default function BoardDetailPage(props:any) {
    

    
// useEffect(()=>{
//     dispatch(findBoardById(props.params.id))
// },[])

//     return (<>
//     게시판 상세
//         <span>ID</span> <Typography textAlign="center" sx={{fontSize:"1.5rem"}}>  {props.prams.id}</Typography>
//         <span>게시판이름</span><Typography textAlign="center" sx={{fontSize:"1.5rem"}}>  {props.prams.boardName}</Typography>
//         <span>게시판타입</span><Typography textAlign="center" sx={{fontSize:"1.5rem"}}>  {props.prams.boardType}</Typography>
//     </>
// )

// }
