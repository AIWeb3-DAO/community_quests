'use client'
import { upcomings } from '@/utils/constants'
import React, {useState, useEffect} from 'react'
import FeedCard from './FeedCard'
import { createClient } from '@/utils/supabase/client'
import { useProfileContext } from '../ProfileContext'
export default function Feed() {
  const [qestsData, setqestsData] = useState()
  const [fetchError, setfetchError] = useState()
  const [isFetching, setisFetching] = useState(false)
  const [isFetchingError, setisFetchingError] = useState(false)
  const [selectedImg, setselectedImg] = useState()
  const [imageData, setimageData] = useState()
  const [imageUrl, setimageUrl] = useState(null)
  const supabase = createClient()
  const {userIdentities} = useProfileContext()

    const handleUpload = async () =>  {
      const fileExt = selectedImg?.name?.split('.').pop()
      const fileName = `${Math.random()}.${fileExt}`
      const filePath = `${fileName}`
      const { data, error } = await supabase.storage.from('quests_platform').upload(filePath, selectedImg)
      if (error) {
          console.log("something went wrong uploading", error)
      } else {
        setimageData(data)
        console.log("the image data", data)
      }
    }

     // DOUWNLOAD_IMAGE

     async function downloadImage(path : any) {
      try {
        const { data, error } = await supabase.storage.from('quest_images').download(imageData?.fullPath)
        if (error) {
         console.error("error  downloading image", error)
        }
        const url = URL.createObjectURL(data)
        setimageUrl(url)
      } catch (error) {
        console.log('Error downloading image: ', error?.message)
      }
    }

   useEffect(() => {
    if(imageData){
     
    downloadImage(imageUrl)
    console.log("the  new  image url", imageUrl)
    }
   }, [imageData])
   

   console.log("the user identity is here", userIdentities)
    console.log("the selected image", selectedImg)
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
        console.log("the actual error", error)
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

             <div className='my-4 border'>
              <h1>select image</h1>

              <div className='bg-yellow-300 py-3 px-4'>
                <input type='file' onChange={(e) => setselectedImg(e.target.files[0])}   />

                {selectedImg && <img  src={URL.createObjectURL(selectedImg)}   />  }

                 <button className='bg-green-500 p-4 rounded-xl' onClick={handleUpload}>Upload image</button>
                </div>
             </div>
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
