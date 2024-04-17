'use client'
import React, {useState, useCallback} from 'react'
import Autoplay from "embla-carousel-autoplay"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import { BsBox } from "react-icons/bs";
  import { upcomings } from '@/utils/constants'
  import useEmblaCarousel from 'embla-carousel-react'
import Button from '../common/Button'
export default function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel()

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])
  return (
    <div className='w-full flex items-center justify-center flex-col'>
     <h1 className='text-start text-2xl font-extrabold my-2'>Featured</h1>
        <Carousel className="w-10/12 "
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
            <CarouselItem>
                <div className='w-full h-[80vh]  rounded-xl p-3 relative'>
                     <div className='absolute top-2 h-full w-full flex items-center justify-center  left-0 p-3 rounded-xl border border-gray-800'>
                      <div className='flex-1  h-full w-6/12'>
                      <div className="w-full h-full flex flex-col items-center justify-center bg-gray-800 ">
                          <div className='flex items-center justify-center flex-col'>
                             <h1 className='font-extrabold text-2xl text-center my-1'>{item.title}</h1>
                             <p className='font-semibold w-9/12 my-1 text-center'>{item.description}</p>
                             <div className='flex items-center space-x-4'>
                             <BsBox className='w-6 h-6 ring ring-yellow-500 rounded-full p-0.5 my-2' />
                              
                              <div className='flex items-end justify-end space-x-2'>
                               <div className='ring ring-yellow-500 rounded-full p-0.5 flex items-center justify-center '>
                                   <p className='text-sm'>XP</p>
                               </div>
                               <p className='text-xs'>{item.rewards}</p>
                               </div>
                             </div>
                              <Button className='bg-pink-600 my-3 w-6/12' size="sm">Begin</Button>
                          </div>
                      </div>
                      </div>
                      <div className='flex-1 bg-indigo-500 h-full w-6/12'>
                        <img src={item.cover} className='w-full h-full object-cover'    />
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
