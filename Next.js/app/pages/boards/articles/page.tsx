'use client';
import { useEffect, useState } from "react";
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import { useRouter } from "next/navigation";
import {Box, Button, Input } from '@mui/material';
import { API } from "@/redux/common/enums/API";
import {useSelector,useDispatch} from 'react-redux'
import AxiosConfig from "@/redux/common/configs/axios-config";
import { NextPage } from "next";
import {getAllArticles} from "@/redux/features/articles/article.service";


interface IArticle {
    id: number,
    title: string,
    content: string,
    writer: string
    registerDate: string
}



const ArticlesPage: NextPage =  () => {
    const dispatch = useDispatch()
    const [articles, setArticles] = useState([]);
    const router = useRouter();

    const url = `${API.SERVER}/articles`
    
useEffect(()=>{
    dispatch(getAllArticles())
},[])



    // return (<>
    //     <h2>게시글 목록</h2>

    //     <Box sx={{ height: 400, width: '100%' }}>
    //   <DataGrid
    //     rows={rows}
    //     columns={columns}
    //     initialState={{
    //       pagination: {
    //         paginationModel: {
    //           pageSize: 5,
    //         },
    //       },
    //     }}
    //     pageSizeOptions={[5]}
    //     checkboxSelection
    //     disableRowSelectionOnClick
    //   />
    // </Box>
    // </>
    // )
    return (<>
        <h2>개인페이지 Article</h2>
        <table border={1}>
            <thead>
                <tr>
                    <th>title</th>
                    <th>content</th>
                    <th>writer</th>
                    <th>registerDate</th>
                </tr>
            </thead>
            <tbody>
                {articles.map((props: IArticle) => (
                    <tr key={props.id}>
                        <td>{props.title}</td>
                        <td>{props.content}</td>
                        <td>{props.writer}</td>
                        <td>{props.registerDate}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>)
}
export default ArticlesPage;