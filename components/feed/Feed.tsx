'use client'
import { upcomings } from '@/utils/constants'
import React, {useState, useEffect} from 'react'
import FeedCard from './FeedCard'
import { createClient } from '@/utils/supabase/client'
export default function Feed() {
  const [qestsData, setqestsData] = useState()
  const [fetchError, setfetchError] = useState()
  const [isFetching, setisFetching] = useState(false)
  const [isFetchingError, setisFetchingError] = useState(false)
  const supabase = createClient()

    const handleFetchQuests = async () => {
      try {
        setisFetching(true)
const { data, error } = await supabase
.from('quests')
.select()
setqestsData(data)
if(error) {
setisFetchingError(true)
setfetchError(error)
setisFetching(false)
}
      } catch (error) {
        setisFetching(false)
        setisFetchingError(true)
        console.log("the actual error")
      }
    }
    console.log("the quests error", qestsData)

      useEffect(() => {
       if(supabase){
        handleFetchQuests()
       }
      }, [])
      
  return (
    <div className='my-3'>
       <h1 className='font-extrabold ml-7 mt-7'>Quests</h1>   

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center space-x-3 space-y-3  w-full mx-auto p-3'>
             {upcomings.map((item,i) => (
                <FeedCard  cover={item.cover} title={item.title} description={item.description} rewards={item.rewards} id={1} />
             ))}
        </div>

          <div>
            <h1>real quests</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center space-x-3 space-y-3  w-full mx-auto p-3'>

              {qestsData?.map((item,i) =>  (
                <FeedCard  cover={item?.quest_cover} 
                title={item?.quest_title}
                description={item?.quest_decription}
                rewards={item?.xp_reward}
                id={item?.id}
                key={i}
                />
              ))}
          </div>
          </div>
    </div>

  )
}
