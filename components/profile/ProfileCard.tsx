import Link from 'next/link'
import React, {useState} from 'react'
import { useProfileContext } from '../ProfileContext'
import { truncateText } from '@/lib/truncateTxt'
import { MdOutlineNotificationsActive } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlineToken } from "react-icons/md";
import { IoDiamondOutline } from "react-icons/io5";
import { MdOutlineNotificationImportant } from "react-icons/md";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
 
export default function ProfileCard() {
  const {user, userInfo} = useProfileContext()
  const [isShowNotifications, setisShowNotifications] = useState(false)

    console.log("the user", user)
  return (
    <div className='bg-gray-950 py-2 px-4 rounded-xl flex space-x-4 items-center  justify-end'>
            <div className=' font-medium flex items-center space-x-1 '><p className=' text-gray-400'>{userInfo && userInfo?.points}</p> <IoDiamondOutline  className=' w-5 h-5' /></div>

      <Popover>
      <PopoverTrigger asChild>
       <div className='w-7 h-7 bg-gray-800 hidden md:flex items-center justify-center rounded-full'>
       <IoIosNotificationsOutline  className='w-5 h-5 cursor-pointer' />
        </div>
        </PopoverTrigger>
        <PopoverContent className="w-80">
           <div className='w-full h-[70vh] bg-gray-950 border border-gray-700 flex items-center justify-center rounded-xl'>
             <div className='flex flex-col space-y-3 items-center justify-center'>
               <h2 className='font-semibold'>No notification</h2>
               <MdOutlineNotificationImportant className='w-7 h-7' />
             </div>
           </div>
           </PopoverContent>
       </Popover>
       <Avatar className='w-7 h-7'>
       <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
       </Avatar>
     
      </div>
  )
}
