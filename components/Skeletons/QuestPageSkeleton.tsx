import React from 'react'
import { Skeleton } from '../ui/skeleton'
import { testArray } from '@/utils/constants'

export default function QuestPageSkeleton() {
  return (
    <div className='w-full'>
      <div className='flex items-center flex-col mt-3 md:mt-4 '>
       <Skeleton  className=' w-11/12 md:w-80 h-64 bg-gray-700 rounded-lg'    />
         <Skeleton  className='h-5 w-96 bg-slate-700 my-3 rounded-xl' />
         <Skeleton   className='h-4 w-64 bg-slate-700 my-3 rounded-lg' />
         <div className='flex space-x-8 my-4'>
           <div className='flex items-center space-x-2'>
             <Skeleton  className='w-14 h-14 rounded-xl bg-gray-700' />
              <div>
                 <Skeleton  className='w-16 h-2 bg-gray-700' />
                 <Skeleton  className='w-16 h-1 bg-gray-700 my-2' />
              </div>
           </div>
           <div className='flex items-center space-x-2'>
             <Skeleton  className='w-14 h-14 rounded-xl bg-gray-700' />
              <div>
                 <Skeleton  className='w-16 h-2 bg-gray-700' />
                 <Skeleton  className='w-16 h-1 bg-gray-700 my-2' />
              </div>
           </div>
         </div>

          
       </div>

        <div className='w-11/12 mx-auto max-w-7xl'>
       {testArray.map((item, i) => (
          <Skeleton className='w-full bg-gray-800 h-16 my-2 rounded-xl' />
       ))}
        </div>

      
    </div>
  )
}
