import { testArray2 } from '@/utils/constants'
import React from 'react'
import { Skeleton } from '../ui/skeleton'

export default function HomePageSkeletons() {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center space-x-3 space-y-3  w-full mx-auto p-3'>
           {testArray2.map((item, i) =>  (
            <div className='border border-gray-800 p-2 rounded-xl' key={i}>
           
            <Skeleton className='aspect-[16/9]    p-2 rounded-xl bg-gray-800 '     />
             <Skeleton className='w-[80%] my-3 h-4 bg-gray-800 rounded-xl' />
             <div className='flex items-center space-x-3'> 
                <Skeleton  className='w-6 h-6 rounded-full bg-gray-800' />
                <Skeleton  className='w-6 h-6 rounded-full bg-gray-800' />
             </div>
            </div>))}
        </div>
  )
}
