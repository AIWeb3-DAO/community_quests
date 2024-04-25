import React from 'react'
import { BsBox } from "react-icons/bs";
import Button from '../common/Button';
import { createClient } from '@/utils/supabase/client';
import { useProfileContext } from '../ProfileContext';


type Props = {
  next : any
  prev : any
  join : any
  quest_id : any
  isJoining : any
  isSaving : any
  totalQuests : any 
  questId : any
}
export default function QuestFooter({next, prev, join, quest_id, isJoining, isSaving, totalQuests, questId} : Props) {
  const {user, userInfo} = useProfileContext()

    console.log("the fucck**N user", userInfo)
  const supabase = createClient()

  const handleLinkX =  async () =>  {
    const { data, error } = await supabase.auth.linkIdentity({
      provider: 'twitter',
    })
    
     console.log("the linking data", data)
     console.log("the linking error", error)
  }

  const handleLinkD =  async () =>  {
    const { data, error } = await supabase.auth.linkIdentity({
      provider: 'discord',
    })
    
     console.log("the linking data", data)
     console.log("the linking error", error)
  }
  return (
    <div className='bg-gray-800 fixed bottom-0 w-full h-20 p-3 border-t border-gray-600'>
   <div className='max-w-6xl  mx-auto h-full flex items-center justify-between'>
  <div className='flex items-center gap-3'>
     <h1 className='font-semibold'>Rewards</h1>
     <div className='flex items-center space-x-4'>
                             <BsBox className='w-6 h-6 ring ring-yellow-500 rounded-full p-0.5 my-2' />
                              
                              <div className='flex items-end justify-end space-x-2'>
                               <div className='ring ring-yellow-500 rounded-full p-0.5 flex items-center justify-center '>
                                   <p className='text-sm'>XP</p>
                               </div>
                               <p className='text-xs'>10</p>
                               </div>
                             </div>
  </div>

   <div className='flex space-x-2'>
   <Button className='border border-pink-500 text-white font-semibold' onClick={handleLinkX}>Link twitter</Button>
     <Button className='border border-pink-500 text-white font-semibold' onClick={handleLinkD}>Link discord</Button>
     <Button className='bg-pink-600 text-white font-semibold' onClick={() => join(quest_id, 0, totalQuests -1)} disabled={isJoining || ! quest_id || isSaving} isLoading={isJoining || isSaving}>Begin</Button>
    

   </div>
   </div>
    </div>
  )
}
