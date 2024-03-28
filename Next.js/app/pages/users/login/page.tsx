'use client'
import { API } from "@/app/atoms/enums/API"
import AxiosConfig from "@/app/organisms/configs/axios-config"
import axios from "axios"
import { useRouter } from "next/navigation"
import { stringify } from "querystring"
import { useState } from "react"
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
        const data = { username, password }
       
        axios.post(`${API.SERVER}/api/login`, data, AxiosConfig())
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