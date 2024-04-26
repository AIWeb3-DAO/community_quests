import Link from 'next/link'
import React, {useState} from 'react'
import { useProfileContext } from '../ProfileContext'
import { truncateText } from '@/lib/truncateTxt'
import { MdOutlineNotificationsActive } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlineToken } from "react-icons/md";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
 
export default function ProfileCard() {
  const {user, userInfo} = useProfileContext()
  const [isShowNotifications, setisShowNotifications] = useState(false)

    console.log("the user", user)
  return (
    <div className='bg-gray-950 py-2 px-4 rounded-xl flex space-x-3 items-center justify-center'>
      <Popover>
      <PopoverTrigger asChild>
       <div className='w-7 h-7 bg-gray-800 hidden md:flex items-center justify-center rounded-full'>
       <IoIosNotificationsOutline  className='w-5 h-5 cursor-pointer' />
        </div>
        </PopoverTrigger>
        <PopoverContent className="w-80">
           <div className='w-full h-[70vh] bg-gray-950 border border-gray-700 flex items-center justify-center'>
             <p>empty</p>
           </div>
           </PopoverContent>
       </Popover>
      <div className=' font-medium flex items-center space-x-1 '><p className='text-sm text-gray-400'>{userInfo && userInfo?.points}</p> <MdOutlineToken className='text-blue-500' /></div>
      <p className='font-medium text-gray-400'>{user && userInfo && truncateText(userInfo?.user_email, 12)}</p>
       
     
      </div>
  )
}
