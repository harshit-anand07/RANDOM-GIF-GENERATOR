import React from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';
const Random= () => {
  const {gif,loading,fetchData} =useGif();
    
  return (
     <div className='w-1/2  bg-green-500 rounded-lg border border-black
      flex flex-col items-center gap-y-5 mt-[15px]'>
        <h2 className='text-3xl font-bold uppercase underline'> A Random Gif</h2>
       {loading?<Spinner/>: <img src={gif} alt="" width="450"/>}
       <button onClick={()=>{fetchData()}}
         className='w-10/12 bg-white py-2 rounded-lg text-lg uppercase mb-[20px]'
         >Generate</button>
     </div>
  )
}

export default Random