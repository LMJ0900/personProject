'use client'
import { useState } from "react"
import axios from "axios"
import { useRouter } from "next/navigation"
import { API } from "@/app/atoms/enums/API"
import AxiosConfig from "@/app/organisms/configs/axios-config"
export default function Join() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [addressId, setAddressId] = useState('')
  const [job, setJob] = useState('')
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const handleUsername = (e: any) => {
    setUsername(e.target.value)
  }
  const handlePassword = (e: any) => {
    setPassword(e.target.value)
  }
  const handleName = (e: any) => {
    setName(e.target.value)
  }
  const handlePhone = (e: any) => {
    setPhone(e.target.value)
  }
  const handleAddressId = (e: any) => {
    setAddressId(e.target.value)
  }
  const handleJob = (e: any) => {
    setJob(e.target.value)
  }
  const handleHeight = (e: any) => {
    setHeight(e.target.value)
  }
  const handleWeight = (e: any) => {
    setWeight(e.target.value)
  }
  const router = useRouter();
  const handleSubmit = (e : any) => {
    e.preventDefault()
    const data = { username, password,name,phone,addressId,job,height,weight}
    
    axios.post(`${API.SERVER}/api/users`, data, AxiosConfig())
        .then(res => { alert(JSON.stringify(res.data))
        router.push("/login")
        })
}
  return (<>
    <div className="container">
      <h1>Sign Up</h1>
      <p>Please fill in this form to create an account.</p>
      <hr />
      <label htmlFor="username"><b>Username</b></label><br />
      <input type="text" placeholder="Enter Username" name="username" onChange={handleUsername} required /><br /><br />
      <label htmlFor="password"><b>Password</b></label><br />
      <input type="password" placeholder="Enter Password" name="password" onChange={handlePassword} required /><br /><br />
      <label htmlFor="name"><b>Name</b></label><br />
      <input type="text" placeholder="Enter name" name="name" onChange={handleName} required /><br /><br />
      <label htmlFor="phone"><b>PhoneNumber</b></label><br />
      <input type="text" placeholder="Enter phoneNumber" name="phone" onChange={handlePhone} required /><br /><br />
      <label htmlFor="addressId"><b>Address</b></label><br />
      <input type="text" placeholder="Enter address" name="addressId" onChange={handleAddressId} required /><br /><br />
      <label htmlFor="job"><b>Job</b></label><br />
      <input type="text" placeholder="Enter job" name="job" onChange={handleJob} required /><br /><br />
      <label htmlFor="height"><b>Height</b></label><br />
      <input type="text" placeholder="Enter height" name="height" onChange={handleHeight} required /><br /><br />
      <label htmlFor="weight"><b>Weight</b></label><br />
      <input type="text" placeholder="Enter weight" name="weight" onChange={handleWeight} required /><br /><br />
      <label>
        <input type="checkbox" checked={true} name="remember" style={{ marginBottom: '15px' }} /> Remember me
      </label><br />
      <p>By creating an account you agree to our <a href="#" style={{ color: 'dodgerblue' }}>Terms & Privacy</a>.</p>
      <div className="clearfix">
        <button type="button" className="cancelbtn">Cancel</button>
        <button type="submit" className="signupbtn" onClick={handleSubmit}>Sign Up</button>
      </div>
    </div>
  </>)
}