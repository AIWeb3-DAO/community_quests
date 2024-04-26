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
export default function QuestFooter2({next, prev, verify, lavel, totalLavels, isUpdatingProgress, slides } : Props) {
const {selectedSlideIndex, toggleIsVerifyStep, isVerified, verifiedIndex} = useSlideContext()
    const supabase = createClient()
      console.log("the slide from footer", slides)
    

        const  getNextBtn = () =>  {
           if(slides[selectedSlideIndex]?.task_isOptional === "true" || isVerified ){
            return(
              <Button className='border border-pink-600 text-white font-semibold' onClick={next} isLoading={isUpdatingProgress} disabled={lavel === slides?.length}>Next</Button>
            )
           }else if(slides[selectedSlideIndex]?.task_isOptional !== "true") {
            return(
              <Button className='border border-pink-600 text-white font-semibold' onClick={() =>toggleIsVerifyStep("twitter")} isLoading={isUpdatingProgress} >Verify</Button>
)
           }else if([selectedSlideIndex]?.task_isOptional === "true" || isVerified){
            console.log("we zombi")
           }
        }
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
                                <p>{selectedSlideIndex}</p>
                                <p>verified index : {verifiedIndex}</p>
                                <p>{slides[selectedSlideIndex]?.task_isOptional === "true" ?  "Optional" : "not optional"}</p>
                               
                               </div>
                             </div>
  </div>

   <div className='space-x-5'>
     
     <Button className='border border-blue-500 text-white font-semibold rounded-xl py-2'  onClick={prev} >Prev</Button>
      {
        slides[selectedSlideIndex]?.task_isOptional === "true" ||  isVerified || verifiedIndex === selectedSlideIndex?  (
          <Button className='border border-pink-600 text-white font-semibold' onClick={next} isLoading={isUpdatingProgress} disabled={lavel === slides?.length}>Next</Button>

        ) : (
          <Button className='border border-pink-600 text-white font-semibold' onClick={() =>toggleIsVerifyStep("twitter")} isLoading={isUpdatingProgress} >Verify</Button>

        )
      }

      
  


   </div>
   </div>
    </div>
  )
}
