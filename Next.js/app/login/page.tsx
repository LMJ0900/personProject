'use client'
import axios from "axios"
import { useRouter } from "next/navigation"
import { stringify } from "querystring"
import { useState } from "react"
const SERVER = 'http://localhost:8080'
export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const handleUsername = (e: any) => {
        setUsername(e.target.value)
    }
    const handlePassword = (e: any) => {
        setPassword(e.target.value)
    }
    const router = useRouter();
    const handleSubmit = () => {
        const url = `${SERVER}/api/login`
        const data = { username, password }
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
                const messege = res.data.로그인성공여부
                alert(messege)
                if(messege === 'SUCCESS'){
                    router.push("/articles/new-article")
                 }else if (messege === 'FAIL'){
                 }else if (messege === 'WRONG.PASSWORD'){
                 }else{
                 }
                }
                )}
    return (<>
        <h2>로그인 하세요</h2>
        <h3>아이디를 입력하세요</h3>
        <input type="text" onChange={handleUsername} />
        <h3>비밀번호를 입력하세요</h3>
        <input type="text" onChange={handlePassword} /><br />
        <button onClick={handleSubmit}>전송</button>
    </>)
}