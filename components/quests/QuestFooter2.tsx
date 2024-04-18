import React from 'react'
import { BsBox } from "react-icons/bs";
import Button from '../common/Button';


type Props = {
  next : any
  prev : any
}
export default function QuestFooter2({next, prev} : Props) {
  return (
    <div className='bg-gray-800 fixed bottom-0 w-full h-20 p-3 border-t border-gray-600'>
   <div className='max-w-6xl  mx-auto h-full flex items-center justify-between'>
  <div className='flex items-center gap-3'>
     <h1 className='font-semibold'>Rewards</h1>
     <div className='flex items-center space-x-4'>
                             <BsBox className='w-6 h-6 ring ring-yellow-500 rounded-full p-0.5 my-2' />
                              
                              <div className='flex items-end justify-end space-x-2'>
                               <div className='ring ring-yellow-500 rounded-full p-0.5 flex items-center justify-center '>
                                   <p className='text-sm'>XP</p>
                               </div>
                               <p className='text-xs'>10</p>
                               </div>
                             </div>
  </div>

   <div className='space-x-5'>
     <Button className='border border-pink-600 text-white font-semibold' onClick={next}>Next</Button>
     <Button className='border border-pink-500 text-white font-semibold' onClick={prev}>Prev</Button>

   </div>
   </div>
    </div>
  )
}
