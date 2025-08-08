"use client"
import axios from 'axios'
import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify'
import { AppContext } from './Store'
import { useRouter } from 'next/navigation'
function SignUp() {
  const router=useRouter();
  let [username,setusername]=useState()
  let [email,setemail]=useState()
  let [password,setpassword]=useState()
  let {IsLogin,setIsLogin}=useContext(AppContext);
  async function HandleSubmit(e){
    e.preventDefault();
    let {data}=await axios.post("https://firstnextapp-c89c.onrender.com/Api/User",{username,email,password});
    console.log(data);
    if(data.success){
      toast.success(data.msg);
      setusername("");
      setemail("");
      setpassword("");
      localStorage.setItem("UserEmail",email)
      localStorage.setItem("username",username)
      
      setIsLogin(true);
      router.push("/")
    }
    else if(data.success==false){
      toast.error(data.msg)
    }
  }
  return (
    <div className='w-[100%] flex items-center h-[80vh] my-6 bg-white justify-center  border-red-700'>
<form onSubmit={HandleSubmit} action="" className={'flex w-[50%] py-5 flex-col gap-4 '}>
    <h1 className='font-bold text-xl'>SignUp  Here!!!!!!</h1>

  <input type="text" value={username} onChange={(e)=>{setusername(e.target.value)}}  name="name" id="name" className='w-[80%] border-2 rounded-md px-4 py-2' placeholder='name...' />
  <input type="email" name="email" id="email " value={email} onChange={(e)=>{setemail(e.target.value)}} className='w-[80%] border-2 rounded-md px-4 py-2' placeholder='email...' />
  <input type="password" name="password" id="pass" value={password} onChange={(e)=>{setpassword(e.target.value)}} className='w-[80%] border-2 rounded-md px-4 py-2' placeholder='password...' />
    <button className='w-[20%] border-2 py-1 rounded-md cursor-pointer bg-[#6b99fd] font-bold'>Sign Up</button>

</form>
    </div>
  )
}

export default SignUp
