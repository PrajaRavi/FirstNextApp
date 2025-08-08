"use client"
import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from './Store';
import { toast } from 'react-toastify';
import axios from 'axios';
import { DBConnect } from '@/helper/db';
import Fotter from './Fotter';
function Home() {
   let {user,darkMode,setDarkMode,setIsLogin,IsLogin}=useContext(AppContext)
   let [name,setname]=useState("")
   let [email,setemail]=useState("")
   let [message,setmessage]=useState("")

useEffect(()=>{  
  console.log(user);
  
},[])

async function HandleSubmit(e){
  // alert("hello")
  e.preventDefault();
  let {data}=await axios.post(`http://localhost:3000/Api/Contact`,{name,email,message});
  // console.log(data);
  if(data.success){
    toast.success(data.msg)
    setname("");
    setemail("");
    setmessage("");
  }
  else  {
    toast.error(data.msg)
  }

}

useEffect(()=>{  
  if(localStorage.getItem("UserEmail")){
    setIsLogin(true)
    }
},[])
   return(
    <div className={darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}>
      {/* Header */}
     
      {/* Hero */}
      <section className="py-20 px-6 text-center bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-4xl mx-auto">
          {IsLogin?<h1 className={darkMode?"text-lg md:text-xl ":"text-lg md:text-xl text-white "}>Hello, <span>{localStorage.getItem("username")}</span></h1>:<h1 className={darkMode?"text-lg md:text-xl ":"text-lg md:text-xl text-white "}>Hello <span>Signup please</span></h1>}
          <h2 className={darkMode?"text-4xl  md:text-5xl font-bold mb-6":"text-4xl  md:text-5xl text-white font-bold mb-6"}>Organize Your Work Like a Pro</h2>
          <p className={darkMode?"text-lg md:text-xl mb-8":"text-lg md:text-xl text-white mb-8"}>Manage tasks, deadlines, and team collaboration all in one place.</p>
          <a href="#" className="bg-blue-600 text-white px-6 py-3 rounded text-lg hover:bg-blue-700 transition">Get Started</a>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          {[
            { title: "Task Management", text: "Track tasks and set priorities." },
            { title: "Team Collaboration", text: "Assign tasks and share progress." },
            { title: "Analytics & Reports", text: "Gain insights with charts." }
          ].map((item, i) => (
            <div key={i}>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className={darkMode?"py-20 px-6   bg-blue-50 dark:bg-gray-800":"py-20 px-6  bg-blue-50 dark:bg-gray-800 text-white"}>
        <div className="max-w-5xl mx-auto ">
          <h2 className="text-3xl font-bold  text-center mb-10">Pricing Plans</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { plan: "Free", price: "₹0", features: ["Basic Task Management", "Single User"] },
              { plan: "Pro", price: "₹499/mo", features: ["Team Collaboration", "Priority Support"] },
              { plan: "Enterprise", price: "Contact Us", features: ["Custom Solutions", "Dedicated Support"] },
            ].map((item, i) => (
              <div key={i} className="border  p-6 rounded shadow hover:shadow-lg transition dark:bg-gray-900">
                <h3 className="text-xl font-semibold mb-2">{item.plan}</h3>
                <p className="text-2xl font-bold mb-4">{item.price}</p>
                <ul className="text-left mb-4">
                  {item.features.map((f, j) => (
                    <li key={j}>✅ {f}</li>
                  ))}
                </ul>
                <button className="bg-blue-600 text-white px-4 py-2 rounded">Choose</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
          <form onSubmit={HandleSubmit} className={darkMode?"space-y-4 text-white":"space-y-4 text-white"}>
            <input
              type="text"
              value={name}
              onChange={(e)=>{setname(e.target.value)}}
              placeholder="Your Name"
              className="w-full px-4 py-2 border rounded dark:bg-gray-800 dark:border-gray-700"
              required
            />
            <input
              type="email"
              value={email}
              onChange={(e)=>{setemail(e.target.value)}}
              placeholder="Your Email"
              className="w-full px-4 py-2 border rounded dark:bg-gray-800 dark:border-gray-700"
              required
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              value={message}
              onChange={(e)=>{setmessage(e.target.value)}}
              className="w-full px-4 py-2 border rounded dark:bg-gray-800 dark:border-gray-700"
              required
            />
            <button className="bg-blue-600 text-white px-6 py-2 rounded">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <Fotter/>
      </div>
  ); 
}

export default Home
