"use client"
import { createContext, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import Navbar from "./Navbar";

const user={name:"Ravi"}
export const AppContext=createContext({
  

  
  
  
})
export const AppProvider=({chidren})=>{
 
     const [darkMode, setDarkMode] = useState(false);
     const [IsLogin, setIsLogin] = useState(false);

  return (
    <AppContext.Provider value={{user,darkMode,setDarkMode,IsLogin,setIsLogin}}>
     <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
{chidren}
<ToastContainer theme="dark"/>
    </AppContext.Provider>
  )
}