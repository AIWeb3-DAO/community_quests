'use client'
import React, {useState, useEffect, useRef} from 'react'
import Input from '../common/inputs/Input'
import Button from '../common/Button'
import { createClient } from '@/utils/supabase/client'
import { FaRegUser } from "react-icons/fa";
import { BsDiscord, BsTwitterX } from 'react-icons/bs'
import { IoCloudUploadOutline } from "react-icons/io5";

 type  Props = {
    user_id : any
 }
export default function ProfileDta({user_id} : Props) {
    const [name, setname] = useState<any>()
    const [profileUrl, setprofileUrl] = useState<any>()
    const [walletAddress, setwalletAddress] = useState<any>()
    const [isUpdating, setisUpdating] = useState(false)
    const [updatingError, setupdatingError] = useState()
    const [updateData, setupdateData] = useState()
    const [isUpdatingError, setisUpdatingError] = useState(false)
    const [wallet, setwallet] = useState("")
     const [profileBanner, setprofileBanner] = useState()
     const [profileAvatar, setprofileAvatar] = useState()

       const bannerSelector = useRef(null)
       const avatarSelector = useRef(null)

     const supabase = createClient()

      

      const  handleUpdateProfile = async ()  => {
        setisUpdating(true)
       try {
        
const { data, error } = await supabase
.from('users')
.update({ name: name, avataar_url : profileUrl, wallet_address : walletAddress })
.eq('user_id', user_id)
.select()
setupdateData(data)
     setisUpdating(false)   
       } catch (error) {
        setisUpdating(false)
        setupdatingError(error)
       }
      }

       console.log("the updated data")
  return (
    <div className='   mx-auto   rounded-xl'>
        <h1 className='text-xl font-medium text-center my-3'>Fill your  profile details</h1>

          <div className='relative'>
             <div className='border border-gray-700 h-36 rounded-xl flex items-center justify-center'>
                 
             </div>
              <div className='border border-dashed w-24 h-24 rounded-full absolute top-10 flex items-center justify-center border-gray-700 cursor-pointer'>
              <IoCloudUploadOutline  className='w-7 h-7' onClick={() => avatarSelector.current.click()}  />
              
              <input  type='file' accept='image/*' ref={avatarSelector} onChange={(e) => setprofileAvatar(e.target?.files[0])}
              hidden
              />

              </div>
          </div>


         <div className='mt-6'>
          <div className='flex border border-gray-700 items-center space-x-3 py-1.5 px-2 rounded-xl'>
          
             <FaRegUser   />
             <input value={name} onChange={(e) => setname(e.target.value)} 
             placeholder='name'
             className='w-full bg-inherit focus:outline-none'
             />
          </div>

            
            <div>
            <p className='font-medium text-sm text-blue-600 my-5'>Link Identities</p>
          </div>
          <div className='flex border border-gray-700 items-center space-x-3 py-1.5 px-2 rounded-xl'>
          
          <FaRegUser   />
          <input value={wallet} onChange={(e) => setwallet(e.target.value)} 
          placeholder='wallet'
          className='w-full bg-inherit focus:outline-none'
          />

          <Button className='py-0.5 px-2 rounded-xl bg-blue-600'>Link</Button>
       </div>
          <div className='flex justify-center cursor-pointer bg-gradient-to-r from-blue-500 to-blue-600 items-center space-x-3 py-2 px-2 rounded-xl my-4'>
        
          <BsTwitterX  />
          <p className='text-sm'>Link Your Twitter</p>
       </div>

       <div className='flex justify-center cursor-pointer bg-gradient-to-r from-blue-500 to-blue-600 items-center space-x-3 py-2 px-2 rounded-xl my-4'>
        
          <BsDiscord  />
          <p className='text-sm'>Link Your Discord</p>
       </div>
         </div>

  <Button className='w-full bg-pink-500 text-white my-6'
   disabled={! user_id || ! name || ! walletAddress || isUpdating}
   loadingText='Saving'
   isLoading={isUpdating}
   onClick={handleUpdateProfile}
  >Save</Button>


  <p>{isUpdating  ?  "Upaditing ": isUpdatingError ? "Something went wrong" : updateData ? "updated succefully" : ""}</p>
    </div>
  )
}
