import React from 'react'
import { useState,useEffect } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const Tag = () => {
  const [tag,setTag]=useState('car')
  const {gif,loading,fetchData}=useGif(tag);
  
    
   
  return (
     <div className='w-1/2  bg-green-500 rounded-lg border border-black
      flex flex-col items-center gap-y-5 mt-[15px]'>
        <h2 className='text-3xl font-bold uppercase underline'> A Random {tag} Gif</h2>
       {loading?<Spinner/>: <img src={gif} alt="" width="450"/>}
        <input className='text-center bg-whites w-10/12 rounded-md' 
        type="text" value={tag} name="text" id="text" onChange={(event)=>setTag(event.target.value)} />
       <button onClick={()=>{fetchData()}}
         className='w-10/12 bg-white py-2 rounded-lg text-lg uppercase mb-[20px]'
         >Generate</button>
     </div>
  )
}

export default Tag