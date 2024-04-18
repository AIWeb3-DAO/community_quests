'use client'

import React, {useState, useCallback, useEffect} from 'react'
import QuestFooter from './QuestFooter'
import { steps } from '@/utils/constants'
import { IoCheckmarkDone, IoCloseCircleOutline } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import { CheckCheck, LockIcon } from 'lucide-react';
import ContentCard from './ContentCard';
import QuestsContents from './QuestsContents';
import useEmblaCarousel from 'embla-carousel-react'
import { createClient } from '@/utils/supabase/client';
import { useProfileContext } from '../ProfileContext';
import { usePathname, useRouter } from 'next/navigation';
import { IoBarChartOutline } from "react-icons/io5";
import { CiShoppingTag } from "react-icons/ci";

export default function QuestPage() {
   const [showMod, setshowMod] = useState(false)
   const [selectedSlide, setselectedSlide] = useState()
   const [isJoining, setisJoining] = useState(false)
   const [isSaving, setisSaving] = useState(false)
   const [hasJoined, sethasJoined] = useState(false)
     const [userLavel, setuserLavel] = useState()
     const [isFetchingUserLavelError, setisFetchingUserLavelError] = useState(false)
     const [fetchingLavelError, setfetchingLavelError] = useState()
     const [questParticipants, setquestParticipants] = useState()
     const [questContents, setquestContents] = useState()
     const [isFetchingQuestContents, setisFetchingQuestContents] = useState(false)
     const [fetchingQuestError, setfetchingQuestError] = useState()
     const [isFecthingQuestContentsError, setisFecthingQuestContentsError] = useState(false)
     const [isClaimingRewards, setisClaimingRewards] = useState(false)
     const [isClaimingRewardsError, setisClaimingRewardsError] = useState(false)
     const [climingError, setclimingError] = useState()
     const [isTaskCompleted, setisTaskCompleted] = useState(false)
   const {userInfo, user} = useProfileContext()
   const currentUser = user?.id
       console.log("whaaaf", currentUser)
   const router = usePathname()

   //const fullPath = '/quests/2deee952-3410-4071-9659-6cf1036d672e';
   const pathId = router.split('/').pop(); // Splitting the string by '/' and taking the last part
   console.log("the path id", pathId); // Output: 2deee952-3410-4071-9659-6cf1036d672e

    console.log("the router object", router)
        
       const testingQuestId = "e6fefc9e-e500-4e36-b331-fa51b5cae94f"
   
    const supabase = createClient()

    //  FETCH_USER_LAVEL

      const handleFetchUserLavel =  async (userId: any, qestId : any)  => {
       try {
        const { data, error } = await supabase
        .from('quest_progress')
        .select()
        .eq('user_id', userId)
        .eq('quest_uid', qestId)

        setuserLavel(data)

         if(error) {
   setisFetchingUserLavelError(true)
       setfetchingLavelError(error)
       console.log("the error when fetchiing", fetchingLavelError)
         }
        
       } catch (error) {
        console.log("the error", error)
       }
      
      }

        // get_all_ participants

        const handleFetchParticipants = async () =>  {
   try {
    
const { data, error } = await supabase
.from('participants')
.select()
setquestParticipants(data)
if(error) {
  console.log("something went wrong fetching participants", error)
}
   } catch (error) {
    console.log("the error", error)
   }
        }


          // handleCheck  if current user  has joined  the  quest

            const  handleCheckuserStatus = () =>  {

              console.log("i was hooked")
              // I'll write  the s cript here 
              questParticipants?.forEach(row => {
                // Extract the user ID from the current row
                const rowUserID = row.user_id;
               
                // Check if the current user ID matches the user ID from the row
                if (currentUser === rowUserID) {
                    // Assign a role to the user
                    // Example: Setting a role property on the row object
                    //row.role = 'user_role';
                    // Alternatively, you can perform any other actions here
                    sethasJoined(true)
                    console.log("the row id", rowUserID)
                }
            });
            }

             // track user progress

             const  stepsLength = questContents && questContents[0]?.total_tasks
             const  theQuestId = questContents && questContents[0]?.id
             
               console.log("the total tasks", theQuestId)
     const progressTracker = async (step : any, total: any) =>  {
        
      try {
        setisSaving(true)
        const { error } = await supabase
        .from('quest_progress')
        .insert({
           step: step,
           total_steps : total,
           quest_uid : theQuestId
        
        })
     if(error) {
      console.log("the actual error", error)
     }
           
        
      } catch (error) {
        console.log("the error", error)
      }

     }
        // JOIN THE QUEST

         console.log("is the user joined", hasJoined)

     const joinQuest =  async (quest_id : any) =>  {
      try {
        setisJoining(true)
        const { error } = await supabase
.from('participants')
.insert({
  joined : true,
  quest_id : quest_id
})

    setisJoining(false) 
    sethasJoined(true)  
     console.log("the actual error", error) 
      } catch (error) {
        console.log("error", error)
      }
        

     }


       // HANDLE JOIN 

       const handleJoinQuest = async (quest_id_p, step, total_steps, quest_id) =>  {
          await joinQuest(quest_id_p)
          await progressTracker(step, total_steps)

       }
    

       // FETCH QUEST BUY ID 
    
        const handleFtechQuestById =  async (id: any) =>  {
         try {
          setisFetchingQuestContents(true)
          const { data, error } = await supabase
          .from('quests')
          .select()
          .eq('id', id) 
  setquestContents(data)
           if(error)  {
            setisFecthingQuestContentsError(true)
          setfetchingQuestError(error)
           }
         } catch (error) {
          setisFetchingQuestContents(false)
          
         }
        }
        const  questId = questContents && questContents[0]?.id

          const handleClaimXp = async (points : any) =>  {
            try {
              setisClaimingRewards(true)
const { error } = await supabase
.from('users')
.insert({
   points: points
   })

    if(error) {
      setisClaimingRewardsError(true)
      climingError(error)
    }
              
            } catch (error) {
              console.log("the actual error", error)
            }
          }

          console.log("the quest", questContents)

         useEffect(() => {
            // FETCH_QUEST_CONTENTS
            handleFtechQuestById(pathId)
           //  FETCH_ALL PARTICIPANTS 
           handleFetchParticipants()
  
            // FETCH_USER_DATA
          //  handleFetchUserLavel(currentUser, questId)
            

         }, [pathId])

        useEffect(() => {
           

            // CHECK_USER_STATUS
            handleCheckuserStatus()
         }, [questParticipants])

         useEffect(() => {
          
          handleFetchUserLavel(currentUser, questId)
         
           
         }, [currentUser, questId])
         

         console.log("all participants", questParticipants)
         console.log("participant lavel", userLavel)

         

           //const  allSteps = questContents[0]?.quest_tasks
         
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

                <h1 className='font-extrabold text-3xl my-3'>{ questContents && questContents[0]?.quest_title}</h1>
                <p className='text-lg text-gray-400'>{ questContents && questContents[0]?.quest_decription}</p>
             </div>

             <div className='flex gap-8 my-5 items-center justify-center'>
                 <div className='flex items-center gap-3 border-r border-gray-800'>
                     <div className='w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center'>
                     <IoBarChartOutline  className='text-pink-500 w-6 h-6' />
                     </div>
          <div className=' pr-6'>
            <h1 className=''>Lavel</h1>
             <p className='text-sm text-gray-400'>{ questContents && questContents[0].lavel}</p>
          </div>
                 </div>

                 <div className='flex items-center gap-3'>
                     <div className='w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center'>
                     <CiShoppingTag className='text-pink-500 w-7 h-7' />
                     </div>
          <div className=' pr-6'>
            <h1 className=''>Chain</h1>
             <p className='text-sm text-gray-400'>{ questContents && questContents[0]?.quest_category}</p>
          </div>
                 </div>
             </div>
             </div>

              
         </div>

    </div>
    <div className=' max-w-6xl w-full  mx-auto'>
                 <h1 className='text-xl text-start font-semibold capitalize'>steps {questContents && questContents[0]?.total_tasks}</h1>

                 <div className=' mb-24'>
                 { questContents && questContents[0]?.quest_tasks?.map((step, i) =>  (
                   <div className=' bg-gray-800 hover:bg-gray-700 my-3 p-3 rounded-xl h-20 flex items-center justify-between cursor-pointer ' onClick={() => toggelExpand(i)}>
                     <div className='flex items-center space-x-2'>
                    <p>{step?.task_icon}</p>
                    <p className='text-lg font-semibold'>{step?.task_title}</p>
                    </div>

                     <div className='flex items-center gap-4'> 
                        <div> {step.task_isOptional  === "true" && (
                           <div> 
                              <span className='text-xs p-1 border border-pink-500 rounded-md'>Optional</span>
                            </div>
                        )} </div>
                         {isTaskCompleted ? (
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
                          <QuestsContents slides={questContents && questContents[0]?.quest_tasks} selectedSlide={selectedSlide} closeModal={toggelExpand} 
                           unlock={progressTracker}
                          />
                           
                            </div>
                      </div>
                  )
                 }
              </div>
              <div className={`${hasJoined ?  "hidden" : "flex"}`}>
              <QuestFooter next={scrollNext} prev={scrollPrev} join={handleJoinQuest} 
               isJoining={isJoining}
                quest_id={questContents && questContents[0]?.id}
                isSaving={isSaving}
                totalQuests={stepsLength}
                questId={theQuestId}
              />
              </div>

         
    </div>
  )
}
