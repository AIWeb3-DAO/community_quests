'use client'

import React, {useState} from 'react'
import Link from 'next/link'
import { useProfileContext, ProfileContextProvider } from '../ProfileContext'
import ProfileCard from '../profile/ProfileCard'
import Button from '../common/Button'
import AuthModal from '../common/AuthModal'
import SignIn from '../Login/SignIn'
import { createClient } from '@/utils/supabase/client'
import { userInfo } from 'os'
import logo from '../../app/logo.jpg'
import Search from '../Search'

export default function Index() {
  const {user} = useProfileContext()
   const [isShow, setisShow] = useState(false)
  const supabase = createClient()

   const handleSignOut = async () =>  {
     
 const res =  await supabase.auth.signOut()
 console.log("the sign out ", res)
   }
 
  return (

    <div className='flex py-2 px-2 md:px-7 items-center bg-gray-950/85 justify-between z-20 border-b border-gray-900 sticky top-0 h-[60px] mb-10'>
        <div>
          <Link href={`/`}>
          <div className='flex space-x-1 items-center'>
          <img   src={logo.src}  className='w-10 h-10 rounded-full object-cover'  />
           <p className=' text-lg uppercase'>quests</p>
          </div>
          </Link>
            
        </div>
         <div className=' flex min-w-2/5 space-x-3 justify-end '>
           <Search  />
            {/*} <Link href={`/login`} className='bg-pink-500 text-white py-2 px-4 rounded-xl font-semibold'>connect to dako</Link>*/}
             { user &&
              <ProfileCard  />
             }
              <Button className={`bg-white w-40 text-gray-900 ${user &&  "hidden" }`} onClick={() => setisShow(! isShow)}>Sign in</Button> 

              <AuthModal   isOpen={isShow} closeModal={() => setisShow(! isShow)} withCloseButton withFooter>
                <SignIn   />
              </AuthModal>
          {/*} <button className='bg-red-500 text-white py-2 px-4 ' onClick={handleSignOut}>Sign out </button>*/}
         </div>
    </div>

  )
}
