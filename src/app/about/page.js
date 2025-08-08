
import React from 'react'
// import { useState } from 'react/cjs/react.development';
// import { useState } from 'react/cjs/react.production';

async function TakeTime(){
  await new Promise((resolve)=>{
    setTimeout(resolve,4000);
    throw new Error("Hello something went wrong")
  })
}
async function page() {
  await TakeTime();
  // let [Count,setCount]=useState(0)
  
  return (
    <>
    <h1>{Count}</h1>
<h1 className="text-2xl text-amber-300">Hello I am about page</h1>
{/* <h1 className="text-2xl text-amber-300"></h1> */}
      </>
  ) 
}

export default page
