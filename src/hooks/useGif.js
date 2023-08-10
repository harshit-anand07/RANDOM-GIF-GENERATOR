import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;

const useGif = (tag) => {
    const tagMemeUrl= `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
const randomMemeurl= `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const [gif,setGif]=useState('')
    const [loading,setLoading]=useState(false)
   async function fetchData(tag){
    setLoading(true)
    
    const {data}=await axios.get(tag?tagMemeUrl:randomMemeurl)
    console.log(data)
    const image=data?.data?.images?.downsized?.url;
    setGif(image);
    setLoading(false)
   }
    useEffect(()=>{fetchData('car');},[]);
    return {gif,loading,fetchData};
    
  
}
export default useGif