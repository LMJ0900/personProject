'use client';
import { useEffect, useState } from "react";
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import { useRouter } from "next/navigation";
import {Box, Button, Input } from '@mui/material';
import { API } from "@/app/atoms/enums/API";
import AxiosConfig from "@/app/organisms/configs/axios-config";


interface IArticle {
    id: number,
    title: string,
    content: string,
    writer: string
    registerDate: string
}



export default function Articles() {
    const [articles, setArticles] = useState([]);
    const router = useRouter();

    const url = `${API.SERVER}/articles`
    
useEffect(()=>{
    axios.get(url,AxiosConfig())
    .then(res => {
        const message = res.data.message
        console.log(message)
        if(message === 'SUCCESS'){
            console.log('게시글이 있습니다');
            const arr = res.data.result

            for (let i of arr) {
                console.log(i)
            }
            setArticles(res.data.result)

        }else if(message === 'FAIL'){
            console.log("게시글이 없습니다");
        }else {
            console.log("지정되지 않은값");
        }
    })

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