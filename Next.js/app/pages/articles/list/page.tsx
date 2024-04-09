'use client'


import ArticleColumns from "@/app/components/articles/module/colums"
import { findAllArticles } from "@/app/components/articles/service/article.service"
import { getAllArticles } from "@/app/components/articles/service/article.slice"
import { StyledDataGrid } from "@/app/components/common/style/board"
import { DataGrid } from "@mui/x-data-grid"
import { NextPage } from "next"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"



const Articlepage: NextPage =  () => {
    const [pageSize, setPageSize] = useState(5); // 4-1
    const dispatch = useDispatch()
    const [articles, setArticles] = useState([])

    const allArticles: [] = useSelector(getAllArticles)
    if(allArticles !== undefined){
        console.log('allArticles is not undefined')
        
        console.log('length is '+ allArticles.length)
        for(let i=0; i< allArticles.length; i++){
            console.log(JSON.stringify(allArticles[i]))
        }
    }else{
        console.log('allArticles is undefined')
    }

useEffect(()=>{
    dispatch(findAllArticles(1))
},[])
  
return(<>
<h2>게시글 목록</h2>
        <div style={{ height: "100%", width: "100%" }}>
  {allArticles && <DataGrid // 🔥 4
        rows={allArticles}
        columns={ArticleColumns()}
        pageSizeOptions={[5,10,20]} // 4-1
        checkboxSelection
      />}
    </div>
</>)
}
export default Articlepage;
