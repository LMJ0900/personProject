'use client'

import { useState } from "react"
import axios from 'axios';
import Link from "next/link";
import { Button } from "@mui/material";
const SERVER = 'http://localhost:8080'

export default function Home() {
  const [name, setName] = useState('')
  const handleChange = (e: any) => {
    setName(e.target.value)
  }

  const handleClick = () => {
    alert('입력완료' + name)
    const url = `${SERVER}/name`
    const data = { name }
    const config = {
      headers: {
        "Cache-Control": "no-cache",
        "Content-Type": "application/json",
        Authorization: `Bearer blah ~`,
        "Access-Control-Allow-Origin": "*",
      }
    }
    axios.post(url, data, config)
      .then(res => {
        alert("리스펀스가 가져온이름 : " + JSON.stringify(res.data))
      })
  }

  return (<div className='text-center'>
     <div>welcom to react world !</div><br />
    <h3 className='text-red-500'>이름을 입력하세요</h3>
    <input className = 'board-black-500' type="text" onChange={handleChange} /> <br />
    <Button onClick={handleClick}>완료</Button><br /><br />
    <Link href={"/login"} >로그인</Link> <br />
    <Link href={"/join"}>회원가입</Link> <br />
    <Link href={"/mui-demo"}>MUI 데모</Link> <br />
    <Link href={"/articles/new-article"}> 게시판 </Link> <br />
  </div>)
  
}