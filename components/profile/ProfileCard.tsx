import Link from 'next/link'
import React from 'react'

export default function ProfileCard() {
  return (
    <div className='bg-gray-800/95 py-2 px-4 rounded-xl flex space-x-5 items-center'>
      <p className='font-semibold'>kabugu</p>
       <p>300 XP</p>
       <Link href={"/create"} className='ml-4'>Create</Link>
      </div>
  )
}
