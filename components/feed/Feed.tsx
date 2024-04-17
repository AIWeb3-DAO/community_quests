import { upcomings } from '@/utils/constants'
import React from 'react'
import FeedCard from './FeedCard'

export default function Feed() {
  return (
    <div className='my-3'>
       <h1 className='font-extrabold ml-7 mt-7'>Quests</h1>   

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center space-x-3 space-y-3  w-full mx-auto p-3'>
             {upcomings.map((item,i) => (
                <FeedCard  cover={item.cover} title={item.title} description={item.description} rewards={item.rewards} />
             ))}
        </div>
    </div>

  )
}
