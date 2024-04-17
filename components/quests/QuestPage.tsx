'use client'

import React, {useState, useCallback} from 'react'
import QuestFooter from './QuestFooter'
import { steps } from '@/utils/constants'
import { IoCheckmarkDone, IoCloseCircleOutline } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import { CheckCheck, LockIcon } from 'lucide-react';
import ContentCard from './ContentCard';
import QuestsContents from './QuestsContents';
import useEmblaCarousel from 'embla-carousel-react'
import { createClient } from '@/utils/supabase/client';
export default function QuestPage() {
   const [showMod, setshowMod] = useState(false)
   const [selectedSlide, setselectedSlide] = useState()
   const [isJoining, setisJoining] = useState(false)
   const [isSaving, setisSaving] = useState(false)

    const supabase = createClient()

     const joinQuest =  async () =>  {
      try {
        setisJoining(true)
        const { error } = await supabase
.from('participants')
.insert({
  joined : true
})
    setisJoining(false)   
     console.log("the actual error", error) 
      } catch (error) {
        console.log("error", error)
      }
        

     }

     const orogressTracker = async (step : any) =>  {
        
      try {
        setisSaving(true)
        const { error } = await supabase
        .from('quest_progress')
        .insert({
           step: step,
        
        })

           console.log("the actual error", error)
        
      } catch (error) {
        console.log("the error", error)
      }

     }
   const [emblaRef, emblaApi] = useEmblaCarousel({
      axis: "y",
  skipSnaps: true,
  loop: true
      })

      const scrollPrev = useCallback(() => {
         if (emblaApi) emblaApi.scrollPrev()
       }, [emblaApi])
     //embla__slide
       const scrollNext = useCallback(() => {
         if (emblaApi) emblaApi.scrollNext()
       }, [emblaApi])

    const toggelExpand = (i : any) => {
      setshowMod(! showMod)
      setselectedSlide(i)
    }
  return (
    <div className='w-full min-h-screen'>
    <div className='flex items-center justify-center  h-full '>
         <div className='flex flex-col items-center justify-center mt-3 '>
            <div>
             <div  className='flex flex-col items-center justify-center'>
                 <img
src='https://l3img.b-cdn.net/ipfs/Qmbx1i4dhJGdYkpxzGsre66VPLHHweK3HeSNXiF9Nvtdn5?width=410&optimizer=image'
className='w-[200px] object-cover rounded-lg'

                />

                <h1 className='font-extrabold text-3xl my-3'>DeFi Essentials on Linea</h1>
                <p className='text-lg text-gray-400'>Explore Linea's robust DeFi applications.</p>
             </div>

             <div className='flex gap-8 my-5 items-center justify-center'>
                 <div className='flex items-center gap-3 border-r border-gray-800'>
                     <div className='w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center'>
                        LFGL
                     </div>
          <div className=' pr-6'>
            <h1 className=''>Chain</h1>
             <p className='text-sm text-gray-400'>Astar</p>
          </div>
                 </div>

                 <div className='flex items-center gap-3'>
                     <div className='w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center'>
                        LFGLPL
                     </div>
          <div className=' pr-6'>
            <h1 className=''>Difculty</h1>
             <p className='text-sm text-gray-400'>Begginer</p>
          </div>
                 </div>
             </div>
             </div>

              
         </div>

    </div>
    <div className=' max-w-6xl w-full  mx-auto'>
                 <h1 className='text-xl text-start font-semibold capitalize'>steps 3</h1>

                 <div className=' mb-24'>
                 {steps.map((step, i) =>  (
                   <div className=' bg-gray-800 hover:bg-gray-700 my-3 p-3 rounded-xl h-20 flex items-center justify-between cursor-pointer ' onClick={() => toggelExpand(i)}>
                     <div className='flex items-center space-x-2'>
                    <p>{step.icon}</p>
                    <p className='text-lg font-semibold'>{step.title}</p>
                    </div>

                     <div className='flex items-center gap-4'> 
                        <div> {step.optional && (
                           <div> 
                              <span className='text-xs p-1 border border-pink-500 rounded-md'>Optional</span>
                            </div>
                        )} </div>
                         {step.completed ? (
                            <CheckCheck  />
                         ) : (
                           <LockIcon  />
                         )}
                         </div>
                    </div>
                 ))}
               
               </div>  

                 {
                  showMod &&  (
                      <div className='fixed w-full h-screen bg-gray-900 top-[60px] left-0  '> 
                     
                        <div className='w-full h-[70vh]  flex items-center justify-center  '> 
                          <QuestsContents slides={steps} selectedSlide={selectedSlide} closeModal={toggelExpand} />
                           
                            </div>
                      </div>
                  )
                 }
              </div>
            {/*}  <QuestFooter next={scrollNext} prev={scrollPrev}  />*/}

         
    </div>
  )
}
