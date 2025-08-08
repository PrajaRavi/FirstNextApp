import Link from 'next/link'
import React, { useContext, useRef, useState } from 'react'
import { AppContext } from './Store'
import { toast } from 'react-toastify';
import { FaBars,FaXmark } from 'react-icons/fa6';

function Navbar({darkMode,setDarkMode}) {
  let {IsLogin}=useContext(AppContext);
  let [SelectTab,setSelectTab]=useState("Cross")
  let menu=useRef();
  const HandleLogOut=()=>{
    localStorage.clear("UserEmail");
    localStorage.clear("Username");
    // toast.error("Logout successfully")
    window.location.reload()
    
  }
  return (
    <>
    <div className="bada_container flex items-center justify-center mt-7 w-[100%]">

      <header className={`${darkMode ? 'bg-gray-800 fixed w-[100%]' : 'bg-white fixed w-[100%]'} shadow-md`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">WorkManager</h1>
          <nav className={darkMode?"space-x-4 md:flex items-center text-white hidden ":"space-x-4 md:flex items-center hidden "}>
            <Link  href="/" className="hover:text-blue-500">Home</Link>
            <Link href="#features" className="hover:text-blue-500">Features</Link>
            <Link href="#contact" className="hover:text-blue-500">Contact</Link>
            {IsLogin==false?<Link href={"/signup"}  className="hover:text-blue-500">signup</Link>:null}
            {IsLogin?<Link href='/admin' className="hover:text-blue-500">Admin</Link>:null}
            {IsLogin?<button onClick={HandleLogOut}  className="hover:text-blue-500 cursor-pointer">Logout</button>:null}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded text-sm"
            >
              {darkMode ? '☀️ Light' : '🌙 Dark'}
            </button>
          </nav>
          <button onClick={()=>{setSelectTab("bar")
menu.current.style.top="5%";


          }} className={SelectTab!="bar"?'md:hidden flex items-center justify-center text-2xl text-[#155DFC] cursor-pointer':"hidden"}><FaBars/></button>
          <button onClick={()=>{setSelectTab("Cross")
menu.current.style.top="-100%";


          }} className={SelectTab!="Cross"?'md:hidden flex items-center justify-center text-2xl text-[#155DFC] cursor-pointer':"hidden"}><FaXmark/></button>
        </div>
      </header>
      {/* top-8% */}
      <div ref={menu} className="menu  z-50 border-red-700 bg-gray-500 w-[100%] fixed  top-[-100%] py-4 transition-all duration-500">
         <nav className={darkMode?"space-x-4 flex flex-col py-3  gap-4 items-center text-white  ":"space-x-4 flex flex-col items-center bg-gray-500 gap-4 py-3"}>
            <Link onClick={()=>{
menu.current.style.top="-100%";
setSelectTab("Cross");
              
            }} href="/" className="hover:text-blue-500">Home</Link>
            <Link onClick={()=>{
menu.current.style.top="-100%";
// setSelectTab("bar");
setSelectTab("Cross");

              
            }}  href="#features" className="hover:text-blue-500">Features</Link>
            <Link onClick={()=>{
menu.current.style.top="-100%";
// setSelectTab("bar");
setSelectTab("Cross");

              
            }}  href="#contact" className="hover:text-blue-500">Contact</Link>
            {IsLogin==false?<Link href={"/signup"}  className="hover:text-blue-500">signup</Link>:null}
            {IsLogin?<Link onClick={()=>{
menu.current.style.top="-100%";
// setSelectTab("bar");
setSelectTab("Cross");

              
            }}  href='/admin' className="hover:text-blue-500">Admin</Link>:null}
            {IsLogin?<button onClick={HandleLogOut}  className="hover:text-blue-500 cursor-pointer">Logout</button>:null}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded text-sm"
            >
              {darkMode ? '☀️ Light' : '🌙 Dark'}
            </button>
          </nav>
         

      </div>
    </div>

    </>


  )
}

export default Navbar
