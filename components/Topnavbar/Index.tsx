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

export default function Index() {
  const {user} = useProfileContext()
   const [isShow, setisShow] = useState(false)
  const supabase = createClient()

   const handleSignOut = async () =>  {
     
 const res =  await supabase.auth.signOut()
 console.log("the sign out ", res)
   }
 
  return (

    <div className='flex py-2 px-7 items-center bg-gray-950 justify-between z-20 border-b border-gray-800 sticky top-0 h-[60px] mb-10'>
        <div>
          <Link href={`/`}>
          <p>Logo</p>
          </Link>
            
        </div>
         <div className=' flex'>
            {/*} <Link href={`/login`} className='bg-pink-500 text-white py-2 px-4 rounded-xl font-semibold'>connect to dako</Link>*/}
             { user &&
              <ProfileCard  />
             }
              <Button onClick={() => setisShow(! isShow)} className={`bg-blue-600 rounded-xl py-1 px-3 md:py-1.5 md:px-4 text-white ${user &&  "hidden" }`}>sign in</Button>
              <AuthModal   isOpen={isShow} closeModal={() => setisShow(! isShow)} withCloseButton withFooter>
                <SignIn   />
              </AuthModal>
          {/*} <button className='bg-red-500 text-white py-2 px-4 ' onClick={handleSignOut}>Sign out </button>*/}
         </div>
    </div>

  )
}
