"use client"
import React, {useState} from 'react'
import { CiSearch } from "react-icons/ci";
export default function Search() {
    const [searchTxt, setsearchTxt] = useState("")
  return (
    <div className='border border-zinc-800 w-full bg-zinc-800 hidden lg:flex space-x-3 items-center  py-1 px-2 p-1 rounded-xl '>
        <input    className='w-full h-full p-1 rounded-xl bg-inherit focus:outline-none'  
         placeholder='Search'
        /> 
        <CiSearch className='w-5 h-5' />
    </div>
  )
}
