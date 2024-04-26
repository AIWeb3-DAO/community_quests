'use client'
import React, {useState, useCallback} from 'react'
import Autoplay from "embla-carousel-autoplay"
import { useCarousel } from '@/components/ui/carousel'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  
  
  import { BsBox } from "react-icons/bs";
  import { RiNftLine } from "react-icons/ri";
  import { upcomings } from '@/utils/constants'
  import useEmblaCarousel from 'embla-carousel-react'
import Button from '../common/Button'
import { AspectRatio } from '@radix-ui/react-aspect-ratio'
export default function Hero() {
  //const [emblaRef, emblaApi] = useEmblaCarousel()


  
  return (
    <div className='w-full flex  flex-col  items-center justify-center'>
      <div className='w-full'>
  
</div>
    
       <Carousel 

className="w-10/12 "
opts={{
 align: "start",
 loop: true,
}}
plugins={[
 Autoplay({
   delay: 2000,
 }),
]}
      >
       <CarouselPrevious  />
        
      <CarouselContent> 
          {upcomings.map((item,i) =>  (
            <CarouselItem key={i}>
                <div className='w-full h-[70vh] md:h-[65vh]    rounded-xl p-5 relative'>
                     <div className='absolute top-2 h-full w-full flex  items-center justify-center flex-col-reverse md:flex-row  left-0 p-1  rounded-xl '>
                      <div className=' flex-1   h-[270px] md:h-full w-full md:w-6/12'>
                      <div className="w-full h-full flex flex-col  justify-center  p-2 ">
                          <div className='flex  flex-col'>
                            <div className='w-full my-2 px-2'>
                             <h1 className='font-extrabold text-xl md:text-2xl my-1  md:my-3'>{item.title}</h1>
                             <p className='font-semibold w-9/12 my-2 '>{item.description}</p>
                             </div>
                             <div className='flex items-center space-x-4 bg-gray-800 w-full px-3 py-1 rounded-xl justify-between'>
                              <p>Rewards</p>
                              <div className='flex space-x-3 items-center justify-center'>
                             <BsBox className='w-6 h-6 ring ring-yellow-500 rounded-full p-0.5 my-2' />
                             <RiNftLine className='w-6 h-6 ring ring-yellow-500 rounded-full p-0.5 my-2' />
                              <div className='flex items-end justify-end space-x-2'>
                               <div className='ring ring-yellow-500 rounded-full p-0.5 flex items-center justify-center '>
                                   <p className='text-sm'>XP</p>
                               </div>
                               <p className='text-xs'>{item.rewards}</p>
                               </div>
                                                     </div>
                             </div>
                              <Button className='bg-blue-500 my-3 w-6/12 px-3' size="sm">Begin</Button>
                          </div>
                          
                      </div>
                      </div>
                      <div className='flex-1 bg-indigo-500 h-[10px] md:h-full w-full md:w-6/12'>
                         
                        <img src={item.cover} className=' h-full w-full max-h-full object-cover'    />
                     
                      </div>

                     </div>
                </div>
                
            </CarouselItem>
          ))}
     </CarouselContent>
        <CarouselNext  />
        </Carousel>



    </div>
  )
}
