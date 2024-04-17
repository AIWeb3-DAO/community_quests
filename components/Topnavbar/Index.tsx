import React from 'react'
import Link from 'next/link'
import { useProfileContext, ProfileContextProvider } from '../ProfileContext'
import ProfileCard from '../profile/ProfileCard'

export default function Index() {
 
  return (

    <div className='flex py-2 px-7 items-center bg-gray-900 justify-between z-20 border-b border-gray-600 sticky top-0 h-[60px]'>
        <div>
          <Link href={`/`}>
          <p>Logo</p>
          </Link>
            
        </div>
         <div>
            {/*} <Link href={`/login`} className='bg-pink-500 text-white py-2 px-4 rounded-xl font-semibold'>connect to dako</Link>*/}
              <ProfileCard  />
         </div>
    </div>

  )
}
