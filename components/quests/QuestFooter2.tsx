import React from 'react'
import { BsBox } from "react-icons/bs";
import Button from '../common/Button';
import { createClient } from '@/utils/supabase/client';
import { useSlideContext } from '../QuestStepsContext';
type Props = {
  next : any
  prev : any
  verify : any,
  lavel : any,
  totalLavels : any
  isUpdatingProgress : any
  slides : any
}
export default function QuestFooter2({next, prev, verify, lavel, totalLavels, isUpdatingProgress, slides} : Props) {
const {selectedSlideIndex} = useSlideContext()
    const supabase = createClient()
    
    
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
                                <p>selcted index  : {selectedSlideIndex}</p>
                                 <p>The title  {slides[selectedSlideIndex]?.task_title}</p>
                               </div>
                             </div>
  </div>

   <div className='space-x-5'>
     
     <Button className='border border-blue-500 text-white font-semibold rounded-xl py-2' disabled={lavel === 1} onClick={prev} >Prev</Button>
     <Button className='border border-pink-600 text-white font-semibold' onClick={next} isLoading={isUpdatingProgress} disabled={lavel === slides?.length}>Next</Button>

      
  


   </div>
   </div>
    </div>
  )
}
