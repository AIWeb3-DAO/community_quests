//@ts-nocheck
import React, {useState, useEffect} from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaDiscord } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";
import { MdMarkEmailUnread } from "react-icons/md";
import Button from '../common/Button';
import { createClient } from '@/utils/supabase/client';
import { useProfileContext } from '../ProfileContext';

import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
  } from "@/components/ui/input-otp"
import ProfileDta from './ProfileDta';
import UserInformation from './UserInformation';

export default function SignIn() {
    const [usermail, setusermail] = useState("")
    const [currentStep, setcurrentStep] = useState("HOME_STATE")
    const [value, setValue] = React.useState("")
    const [requestingOtp, setrequestingOtp] = useState(false)
    const [otpData, setotpData] = useState()
    const [otpError, setotpError] = useState()
    const [verfyngOtp, setverfyngOtp] = useState(false)
    const [verifyngError, setverifyngError] = useState(false)

     const {user} = useProfileContext()

       console.log("the current user from modal", user)
    const supabase = createClient()

     const handleLoginWithX = async () =>  {
      supabase.auth.signInWithOAuth({
        provider: 'twitter',
      })
      
     }

     const handleLoginWithG = async () =>  {
      supabase.auth.signInWithOAuth({
        provider: 'google',
      })
      
     }
     const handleLoginWithD = async () =>  {
      supabase.auth.signInWithOAuth({
        provider: 'discord',
      })
      
     }

     const switchSteps = (step : any)  =>  {
        setcurrentStep(step)
     }

     useEffect(() => {
          if(user  && currentStep === "HOME_STATE"){
            setcurrentStep("USER_STATE_DATA")
          }else if(otpData && ! user) {
            setcurrentStep("OTP_STATE")
          }
      }, [user, currentStep, otpData])
      
// HOME_STATE
      const getCurrentStep = () =>  {
          if(currentStep  === "HOME_STATE"){
            return(
       <>
         <div className=''>
             <h1 className='text-center text-2xl font-medium text-zinc-50'>Welcome to Dot Quests
The Polkadot Marketing Hub</h1>

<p className='font-thin text-center text-sm my-4'>Sign up or log in to discover community-vetted  compagns  and games, earn rewards, and be part of a community actively shaping the Web3 future!</p>
         </div>

          <div>
 <div className='border border-blue-400 py-2 px-3 flex items-center rounded-xl space-x-3 justify-center cursor-pointer my-6' onClick={handleLoginWithG}>
   <FcGoogle  className='w-6 h-6 text-sm text-slate-300'   />  
   <p className=''>Continue with google</p>
 </div>

 <div className='  py-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-600 hover:to-blue-400 px-3 flex items-center rounded-xl space-x-3 justify-center cursor-pointer my-6' onClick={handleLoginWithD}>
   <FaDiscord className='w-6 h-6 text-sm text-slate-300'   />  
   <p className=''>Continue with Discord</p>
 </div>

 <div className=' bg-gradient-to-r from-blue-500 to-blue-400 hover:from-blue-600 hover:to-blue-400 py-2 px-3 flex items-center rounded-xl space-x-3 justify-center cursor-pointer my-6' onClick={handleLoginWithX}>
   <RiTwitterXLine  className='w-6 h-6 text-sm '   />  
   <p className=''>Continue with X</p>
 </div>

  <div className='flex items-center justify-center space-x-2'>
     <div className='h-[1px] bg-gray-600 w-6/12'></div>
      <p>Or</p>
      <div className='h-[1px] bg-gray-600 w-6/12'></div>
  </div>

   <div className=' py-2 px-2 rounded-xl flex justify-between items-center space-x-2 mt-3 border-gray-700 border '>
    <div className='flex items-center space-x-2 border border-gray-900 py-1 px-2 rounded-xl'>
        <MdOutlineMail    />
     <input value={usermail} onChange={(e) => setusermail(e.target.value)} 
     placeholder='Email'
     className='bg-inherit focus:outline-none '
     />
     </div>

     <Button className='bg-blue-600 rounded-xl px-3 py-1' disabled={! usermail}>Continue</Button>
   </div>
          </div>
   
    </>
            )
          }  else if(currentStep === "OTP_STATE"){
            return(
                <div className='flex items-center justify-center flex-col'>
                     <MdMarkEmailUnread  className='w-20 h-20'  />
                     <h2 className='text-2xl font-medium'>Check your email</h2>
                     <p className='font-thin my-3 text-center'>We've sent a code to ee. Please
enter the code immediately, as it will soon expire.</p>

 <div>
 <InputOTP
        maxLength={6}
        value={value}
        onChange={(value) => setValue(value)}
        className=''
      >
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
      <div className="text-center text-sm">
        
         <div> 
           <Button className='w-full bg-blue-500 text-white font-semibold my-5'
 disabled={! otpData || requestingOtp || otpError }
 isLoading={verfyngOtp}
 
 >Verify Otp</Button>
 </div>
                </div>
                </div></div>
            )
          }else if(currentStep === "USER_STATE_DATA"){
            return(
          <ProfileDta  />
            )
          }
      }
  return (
    <div  className=' w-full md:w-11/12 lg:w-10/12 mx-auto  p-1 mt-12'>
  {getCurrentStep()}
        </div>
   
  )
}
