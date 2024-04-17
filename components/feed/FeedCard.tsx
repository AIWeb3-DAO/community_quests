import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
type Props = {
     cover : string
     title : string
     description : string
     rewards : string
}
export default function FeedCard({cover, title, description, rewards}: Props) {
  return (
    <Link href={`/quests/2`}>
    <div className='w-[220px  border border-gray-700 p-2 rounded-xl bg-gray-800 hover:bg-gray-700 cursor-pointer '>
         <img
    src={cover}
    width={300}
    height={300}
    alt='cover'
   className='w-full h-[150px] object-cover rounded-lg'
/>

<div className='my-3'>
    <h1 className=' w-4/5 text-lg font-semibold'>{title}</h1>
    <p className='my-3 text-gray-400 text-sm'>Astar</p>

    <div className='flex space-x-2'>
                               <div className='ring ring-yellow-500 rounded-full p-0.5 flex items-center justify-center '>
                                   <p className='text-xs'>XP</p>
                               </div>
                               <p className='text-xs'>{rewards}</p>
                               </div>
</div>
    </div>
    </Link>
  )
}
