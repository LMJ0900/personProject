'use client'


import { BoardColums } from "@/app/components/boards/model/board-colums"
import BoardColumns from "@/app/components/boards/module/colums"
import { findAllBoards } from "@/app/components/boards/service/board.service"
import { getAllBoards } from "@/app/components/boards/service/board.slice"
import { DataGrid } from "@mui/x-data-grid"
import { NextPage } from "next"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"



const Boardpage: NextPage =  () => {
    const dispatch = useDispatch()
    const allBoards: [] = useSelector(getAllBoards)

    if(allBoards !== undefined){
        console.log('allBoards is not undefined')
        
        console.log('length is '+ allBoards.length)
        for(let i=0; i< allBoards.length; i++){
            console.log(JSON.stringify(allBoards[i]))
        }
    }else{
        console.log('allBoards is undefined')
    }

useEffect(()=>{
    dispatch(findAllBoards(1))
},[])
  
return(<>
<h2>게시판 목록</h2>
        <div style={{ height: "100%", width: "100%" }}>
  {allBoards && <DataGrid // 🔥 4
        rows={allBoards}
        columns={BoardColumns()}
        pageSizeOptions={[5,10,20]} // 4-1
        checkboxSelection
      />}
    </div>
</>)
}
export default Boardpage;

