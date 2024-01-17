"use client"
import React, { useState } from 'react'

const page = () => {
  //Using Hook
  const [first, setFirst] = useState("")
  const [desc, setDesc] = useState("")
  
  const [maintask, SetMaintask] = useState([])


  const submitHandler =(e)=>{
   e.preventDefault()
   SetMaintask([...maintask, {first, desc}]) //storing data
   setFirst("")
   setDesc("")
  }
  
  let renderTask = <h2>NO TASK ADDED</h2>

  
 if (maintask.length>0){
  renderTask=  maintask.map((t, i)=>{
    return (
<li>
  <div className='flex justify-between mb-3'>
      {/* <p> your Task and adescription resestor here</p> */}
      {/* you can give classname in h5 and  */}
      <h5>{t.first}</h5>
      <h6>{t.desc}</h6> 
    </div>
    </li>
    );
  })
 }
  return (
    <>
      {/* <h1>abhineet</h1> */}
      <h1 className='bg-black text-white p-2 rounded-lg text-center justify-center m-2 font-bold text-xl'>Chalo shuru kare🤣🤣</h1>

      <form onSubmit={submitHandler}>
        <input 
        type="text" 
        className="border-black border-2 text-sm rounded m-5 px-4 py-2 font-bold" 
        placeholder='set your task'
        value={first} 
        onChange={(e)=>{
          setFirst(e.target.value)
        }}
        />
        
        <input 
        type="text" 
        className="border-black border-2 text-sm rounded m-5 px-4 py-2 font-semibold" 
        placeholder='set description here' 
        value={desc} 
        onChange={(e)=>{
        setDesc(e.target.value)
        }}
        />
        
        <button 
        className='bg-black text-slate-100 px-4 py-2 text-lg rounded-3xl m-5'
      >Add Task
        </button>
      </form>
      <hr />
      <div className="p-8 bg-slate-200">
        <ul>{renderTask}</ul>
      </div>
    </>
  )
}

export default page
