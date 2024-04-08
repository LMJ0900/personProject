'use client'

import UserColumns from "@/app/components/users/columns"
import { IUser } from "@/app/components/users/model/user.model"
import { fetchAllUsers } from "@/app/components/users/service/user.service"
import { getAllUsers } from "@/app/components/users/service/users.slice"
import { DataGrid } from "@mui/x-data-grid"
import { NextPage } from "next"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"



const Userpage: NextPage =  () => {
    const [pageSize, setPageSize] = useState(5); // 4-1
    const dispatch = useDispatch()
    const [users, setUsers] = useState([])

    const allUsers: [] = useSelector(getAllUsers)
    if(allUsers !== undefined){
        console.log('allUsers is not undefined')
        
        console.log('length is '+ allUsers.length)
        for(let i=0; i< allUsers.length; i++){
            console.log(JSON.stringify(allUsers[i]))
        }
    }else{
        console.log('allUsers is undefined')
    }

useEffect(()=>{
    dispatch(fetchAllUsers(1))
},[])

  const rows = [ 
    { id: 1, username: "Snow", name: "Jon", phoneNumber: 35 },
    { id: 2, username: "Lannister", name: "Cersei", phoneNumber: 42 },
    { id: 3, username: "Lannister", name: "Jaime", agphoneNumbere: 45 },
    { id: 4, username: "Stark", name: "Arya", phoneNumber: 16 },
    { id: 5, username: "Targaryen", name: "Daenerys", phoneNumber: null },
    { id: 6, username: "Melisandre", name: null, phoneNumber: 150 },
    { id: 7, username: "Clifford", name: "Ferrara", phoneNumber: 44 },
    { id: 8, username: "Frances", name: "Rossini", phoneNumber: 36 },
    { id: 9, username: "Roxie", name: "Harvey", phoneNumber: 65 },
  ];

  
return(<>
<h2>유저 목록</h2>
        <div style={{ height: 400, width: "100%" }}>
      <DataGrid // 🔥 4
        rows={allUsers}
        columns={UserColumns()}
        pageSizeOptions={[5,10,20]} // 4-1
        checkboxSelection
      />
    </div>
</>)
}
export default Userpage;

