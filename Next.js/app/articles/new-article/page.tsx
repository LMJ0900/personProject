'use client'
import axios from "axios"
import { useRouter } from "next/navigation"
import { Main } from "next/document";

const SERVER = 'http://localhost:8080'
const router = useRouter();

interface IArticle{
    id : number,
    title: string,
    content: string,
    writer: string
    registerDate : string
}
const Article = (props: IArticle) => {
    return(
        <tr key = {props.id} > 
            <td>{props.title}</td>
            <td>{props.content}</td>
            <td>{props.writer}</td>
            <td>{props.registerDate}</td>
        </tr>
    );
};



export default function Articles(){
    const url = `${SERVER}/api/login`
        const config = {
            headers: {
                "Cache-Control": "no-cache",
                "Content-Type": "application/json",
                Authorization: `Bearer blah ~`,
                "Access-Control-Allow-Origin": "*",
            }
        }
        axios.get(url, config)
            .then(res => {
                const messege = res.data.로그인성공여부
                alert(messege)
                if(messege === 'SUCCESS'){
                   alert("게시글이 있습니다")
                 }else if (messege === 'FAIL'){
                    alert("게시글이 없습니다")}
                    else{alert("지정되지 않은 값")
                 }
                })
                

   const names =[{id : 0, title : '', content : '', writer : '', registerDate : ''}
   ]
   const nameList = names.map((v) => (<Article {...v}/>))
   
    return(<>
    <h2>HTML Table</h2>

<table border={1}>
    <thead>
    <tr>
    <th>제목</th>
    <th>내용</th>
    <th>작성자</th>
    <th>등록일</th>
  </tr>   
    </thead>
  <tbody>
    {nameList}
  </tbody>
  </table>
  </>
    )
}