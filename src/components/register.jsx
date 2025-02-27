import Logo from '../img/Royal bank logo.png'
import axios from 'axios';
import { useState } from "react"
import { Button } from "react-bootstrap"
export default function Register(){
    let [name,setName]=useState()
    let [gmail,setGmail]=useState()
    let [pass,setPass]=useState()
    let [amount,setAmount]=useState(0)

    function handleSubmit(e){
        e.preventDefault();

        let item={name:name,email:gmail,password:pass,amount:amount}
        axios.post('https://bank-server-hvtc.onrender.com/Create',item)
        
    }
    return(<>
    <div id='reg'>
    <img src={Logo} alt="" />
    <form action="" onSubmit={handleSubmit} >
    <h1>Register</h1>
    <label htmlFor="">Name : </label><br />
    <input type="text" placeholder='Name' onChange={(e)=>setName(e.target.value)}/><br /><br />
    <label htmlFor="">Name : </label><br />
    <input type="text" placeholder='Gmail' onChange={(e)=>setGmail(e.target.value)} /><br /><br />
    <label htmlFor="">Name : </label><br /> 
    <input type="password" placeholder='Password' onChange={(e)=>setPass(e.target.value)}/><br /><br />
    <label htmlFor="">Name : </label><br />
    <input type="number" placeholder='Amount' onChange={(e)=>setAmount(e.target.value)}/><br /><br /><br />
    <Button type="submit">submit</Button>
    </form>
    </div>
    </>)
}