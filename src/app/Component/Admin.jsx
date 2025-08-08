
"use client"
import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from './Store'
import Fotter from './Fotter';
import axios from 'axios';
import {FaXmark,FaCheckDouble, FaCheck} from "react-icons/fa6"
import { toast } from 'react-toastify';

function Admin() {
  let [SelectTab,setSelectTab]=useState("Show Task")
  let {darkMode,IsLogin}=useContext(AppContext);
  let [name,setname]=useState("")
  let [description,setdescription]=useState("")
  
  let [date,setdate]=useState()
  let [userid,setuserid]=useState()
  let [userdata,setuserdata]=useState()
  let [TaskData,setTaskData]=useState([])
  async function HandleTaskAdd(){

  }
  async function getuser(){
    let {data}=await axios.get(`http://localhost:3000/Api/User/${localStorage.getItem("UserEmail")}`);
    // console.log(data.msg._id)
    setuserdata(data.msg)
    setuserid(data.msg._id)

    // Getting all the task of user
     let data1=await axios.get(`http://localhost:3000/Api/Works/${data.msg._id}`);
    console.log(data1.data.msg);
    setTaskData(data1.data.msg)
 
    // GetAllTask();
  }
  useEffect(()=>{  
    getuser();
  },[])
  async function HandleTaskAdd(e){
    e.preventDefault();
    let {data}=await axios.post("http://localhost:3000/Api/Works",{name,description,date,userid})
    console.log(data);
    if(data.success){
      toast.success(data.msg);
      setname("");
      setdescription("");
      setdate("");
    }
    else {
      toast.error(data.msg)
    }

  }
  async function GetAllTask(){
    alert(userid)
    let {data}=await axios.get(`http://localhost:3000/Api/Works/${userid}`);
    console.log(data.msg);
    setTaskData(data.msg)
  }
  async function HandleTaskComplete(TaskId){
    // alert(userid)
    let {data}=await axios.post(`http://localhost:3000/Api/Works/${userid}/${TaskId}`)
    console.log(data)
    getuser();
    
  }
  async function HandleTaskDelete(TaskId){
    // alert(userid)
    let {data}=await axios.delete(`http://localhost:3000/Api/Works/${userid}/${TaskId}`)
    console.log(data)
    getuser();
    
  }
  return (
    <>
    <div className="bada_container flex flex-col relative top-[35px] h-[90vh] items-center justify-center w-[100%]">
<div className="mydiv  flex md:hidden items-center gap-4 pl-2  justify-start w-[100%] sm:w-[80%]   ">
<button onClick={()=>{setSelectTab("Add Task")}} className={SelectTab=="Add Task"?'bg-[#155DFC] text-white  text-sm font-bold rounded-md px-2 py-2':' text-white  text-sm font-bold rounded-md px-2 py-2'}>Add Task</button>
<button onClick={()=>{setSelectTab("Show Task")}} className={SelectTab=="Show Task"?'bg-[#155DFC] text-white  text-sm font-bold rounded-md px-2 py-2':' text-white  text-sm font-bold rounded-md px-2 py-2'}>Show Task</button>
</div>
    <div className={darkMode==false?' h-[90vh] mt-2 sm:w-[80%] border-2 border-amber-300   w-[100% bg-white flex items-center justify-center md:py-3 md:px-4 gap-[10px]':' h-[90vh]  sm:w-[80%] w-[100%] bg-gray-800 mt-2 flex items-center justify-center md:py-3 md:px-4 gap-[10px]'}>
<div className="left hidden md:block w-[20%] border-green-700 h-[100%]">
  <ul className='flex items-start  flex-col justify-center gap-5 h-[100%] w-[100%]'>
    <li onClick={()=>setSelectTab("Add Task")} className={SelectTab=="Add Task"?'font-bold pl-8  py-3 w-[100%] bg-[#d9e3f9cc] border-r-4 border-r-[#155DFC]':'font-bold pl-8 cursor-pointer py-3 w-[100%]'}>Add Task</li>
    <li onClick={()=>{setSelectTab("Show Task")
      getuser();
    }} className={SelectTab=="Show Task"?'font-bold pl-8  py-3 w-[100%] bg-[#d9e3f9cc] border-r-4 border-r-[#155DFC]':'font-bold pl-8 cursor-pointer py-3 w-[100%]'}>Show Task</li>
  </ul>

</div>
<div className={darkMode?"right  overflow-y-scroll md:w-[80%] w-[100%] text-white h-[100%]":" md:w-[80%] w-[100%]  h-[100%] overflow-y-scroll"}>
{SelectTab=="Add Task"?<section className='add_task w-[100vw] sm:w-[100%]  px-4 py-4'>
  <form onSubmit={HandleTaskAdd} action="" className={'flex  flex-col gap-4 '}>
    <h1 className='font-bold text-xl'>Add Your Task Here!!!!!!</h1>
    <input value={name} onChange={(e)=>setname(e.target.value)} className='md:w-[80%] w-[100%] border-2  rounded-md px-4 py-2' type="text" name="name" id="name" placeholder='Task Name...' />
    <textarea value={description} onChange={(e)=>setdescription(e.target.value)} name="message" id="message" className='md:w-[80%] w-[100%] h-[300px]  rounded-md px-4 py-2 border-2' placeholder='Description'></textarea>
    <input type="date" className='lg:w-[20%] md:w-[40%] w-[80%] border-2  px-4 py-2 rounded-md' value={date} onChange={(e)=>setdate(e.target.value)} name="date" id="date" />

    <button className='md:w-[20%] w-[40%] border-2 py-1 rounded-md cursor-pointer bg-[#6b99fd] font-bold'>Add Task</button>
  </form>

</section>:null}
{SelectTab=="Show Task"?<section className='show_task px-4 py-4'>
  <div className="my_container   w-[100%]  border-amber-300">
  
    {
      TaskData?.length==0 &&IsLogin?<h1 className='font-bold text-2xl'>No Task is added!!!!</h1>:
      TaskData.map((item,index)=>{
        return <div id={index} className={item.status!="Complete"?"Task_card my-2 relative flex flex-col gap-2 md:w-[80%] w-[100%] px-3 py-3 bg-gray-400 rounded-md":"Task_card my-2 relative flex flex-col gap-2 md:w-[80%] w-[100%] px-3 py-3 bg-green-400 rounded-md"}>
               <h1 className='font-bold md:text-xl'>{item.name}</h1>
               <p className='md:font-semibold text-sm'>{item.description}</p>
               <div className="action w-[100%]  flex gap-5 items-center justify-between">
               <span className='bg-gray-600 text-white w-[100px] flex items-center rounded-md pb-1 justify-center'>{item.status}</span>
               <div className="buttons  flex items-center gap-3 justify-center">
                
                  <button onClick={()=>{
                    HandleTaskComplete(item._id);
                  }} className={item.status!="Complete"?'bg-green-100 px-3 py-1 rounded-md text-green-700 cursor-pointer':"hidden"}><FaCheck/></button>
                  <button onClick={()=>{
                    HandleTaskDelete(item._id);
                  }}  className='bg-red-100 px-3 py-1 rounded-md text-red-700 cursor-pointer'><FaXmark/></button>
                  
               </div>

               </div>
        </div>      
        })
    }
    
  </div>
</section>:null}
</div>
      </div>
     
    </div>
    </>

  )

}

export default Admin
