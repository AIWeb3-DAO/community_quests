'use client'
import React, {useState, useEffect} from 'react'
import Input from '../common/inputs/Input'
import Button from '../common/Button'
import { createClient } from '@/utils/supabase/client'

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
    <div className='border border-gray-700 w-11/12 h-[60vh] mx-auto  md:w-2/5 md:h-[74vh] p-4 rounded-xl'>
        <h1 className='text-2xl font-semibold text-center my-3'>Fill your  profile details</h1>
         <Input
        value={name}
 onChange={e => setname(e.target.value)}
  placeholder='eg kabugu'
  label='name'
   className=''
   color='pink'
/>

<Input
        value={profileUrl}
 onChange={e => setprofileUrl(e.target.value)}
  placeholder='eg https://p..'
  label='Yor profile pic link'
   className=''
   color='pink'
   labelClassName='mt-6'
/>
<Input
        value={walletAddress}
 onChange={e => setwalletAddress(e.target.value)}
  placeholder='Your subtrate address'
  label='wallet address'
   className=''
   color='pink'
   labelClassName='mt-6'
/>

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
