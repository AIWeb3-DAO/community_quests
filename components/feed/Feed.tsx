'use client'
import { upcomings } from '@/utils/constants'
import React, {useState, useEffect} from 'react'
import FeedCard from './FeedCard'
import { createClient } from '@/utils/supabase/client'
import { useProfileContext } from '../ProfileContext'
import HomePageSkeletons from '../Skeletons/HomePageSkeletons'
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
  const [truth, settruth] = useState(true)

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
setisFetching(false)
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

       if(isFetching){
        return(
          <div className='h-screen w-full flex'>
             <HomePageSkeletons  />
          </div>
        )
       }
      
  return (
    <div className='my-3'>
       <h1 className='font-extrabold ml-7 mt-7'>Quests</h1>   

       

          <div>

            
           
            <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center space-x-3 space-y-3  w-full mx-auto p-3'>

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
