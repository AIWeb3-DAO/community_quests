'use client'
import React, {useState, useEffect, useInsertionEffect} from 'react'
import Input from '../common/inputs/Input'
import Button from '../common/Button'
import { redirect } from 'next/navigation'

 type Props = {
  session : any
  user? : any
 }
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
  } from "@/components/ui/input-otp"
  import  {User} from '@supabase/supabase-js'
  import { createClient } from '@/utils/supabase/client'
import ProfileDta from './ProfileDta'

  
export default  function LoginPage({session, user} : Props) {
    const [email, setemail] = useState('')
    const [otp, setOtp] = useState("")
    const [requestingOtp, setrequestingOtp] = useState(false)
    const [otpData, setotpData] = useState()
    const [otpError, setotpError] = useState()
    const [testTruth, settestTruth] = useState(true)
    const [value, setValue] = React.useState("")
    const [verfyngOtp, setverfyngOtp] = useState(false)
    const [verifyngError, setverifyngError] = useState(false)
    const [userInfo, setuserInfo] = useState()
    const [userInfoError, setuserInfoError] = useState()
  //  const [user, setuser] = useState()
  const supabase = createClient()

const handleGetUserInfo = async () => {
try {
  const { data, error } = await supabase
  .from('users')
  .select()
  .eq('user_id', user.id)
  .single()
  setuserInfo(data)
  
} catch (error) {
  setuserInfoError(error)
}
 
}

 useEffect(() => {
   handleGetUserInfo()

     if(user && session && userInfo?.name ){
      return redirect("/")
     }
 }, [userInfo])


 
 
     


     console.log("the otp data", otpData)
     console.log("the sesion", session)
     console.log("the user info", userInfo)
       const  handReqOtp = async () =>  {
         try {
          setrequestingOtp(true)
          const { data, error } = await supabase.auth.signInWithOtp({
            email: email,
            options: {
              // set this to false if you do not want the user to be automatically signed up
              shouldCreateUser: true,
            },
          })
          setotpData(data)
          setrequestingOtp(false)
         }catch (error) {
           setotpError(error)
         }
        }

         const handleVerifyOtp = async () =>  {
           setverfyngOtp(true)
           try {
            const {
              data: { session },
              error,
            } = await supabase.auth.verifyOtp({
              email,
              token: value,
              type: 'email',
              options : {
                redirectTo : "/welcome"
              }
            })
             setverfyngOtp(false)
           } catch (error) {
             setverifyngError(true)
           }
       
          
         }
   //  otpData && ! requestingOtp
      if(otpData && ! requestingOtp){

        return(
             <div>
                 <h2 className='font-extrabold text-3xl my-3'>Check your email</h2>
                 <h2 className='text-lg font-semibold text-gray-400'>We've sent a code to {email}.  Please <br /> enter the code immediately, as it will soon expire.</h2>
                 <div className="mt-6">
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
           <Button className='w-full bg-pink-500 text-white font-semibold my-5'
 disabled={! otpData || requestingOtp || otpError }
 isLoading={verfyngOtp}
 onClick={handleVerifyOtp}
 >Verify Otp</Button>
           </div>
      
      </div>
    </div>
             </div>
        )
      }

      // Display  set user  data

       if(user && session  )  {
          return(
            <ProfileDta user_id={user?.id} />
          )
       }
        const getAuthState = () =>  {
            // Display  set user  data

       if(user && session )  {
        return(
          <ProfileDta user_id={user?.id} />
        )
     }else if(! user || ! session  ){
      return(
        <div className='w-[400px] mx-auto'>

        <h1 className='text-3xl font-extrabold'>Create your dako account</h1>
        <h2 className='text-xl font-bold text-gray-400 my-2'>Join the movement!</h2>

        <div className='my-7'>
  <Input
label='email'
value={email}
onChange={(e) => setemail(e.target.value)}
placeholder='your email'
/>

 <Button className='w-full bg-pink-500 text-white font-semibold my-5'
 disabled={! email || requestingOtp}
 isLoading={requestingOtp}
 onClick={handReqOtp}
 >Continue with email</Button>
        </div></div>
      )
     }  else if( otpData && ! requestingOtp){
      <div>
                 <h2 className='font-extrabold text-3xl my-3'>Check your email</h2>
                 <h2 className='text-lg font-semibold text-gray-400'>We've sent a code to {email}.  Please <br /> enter the code immediately, as it will soon expire.</h2>
                 <div className="mt-6">
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
           <Button className='w-full bg-pink-500 text-white font-semibold my-5'
 disabled={! otpData || requestingOtp || otpError }
 isLoading={verfyngOtp}
 onClick={handleVerifyOtp}
 >Verify Otp</Button>
           </div>
      
      </div>
    </div>
             </div>
     }
        }
  return (
    <div className=''>

<h1 className='text-3xl font-extrabold'>Create your dako account</h1>
        <h2 className='text-xl font-bold text-gray-400 my-2'>Join the movement!</h2>

        <div className='my-7'>
  <Input
label='email'
value={email}
onChange={(e) => setemail(e.target.value)}
placeholder='your email'
/>

 <Button className='w-full bg-pink-500 text-white font-semibold my-5'
 disabled={! email || requestingOtp}
 isLoading={requestingOtp}
 onClick={handReqOtp}
 >Continue with email</Button>
        </div>
    </div>
  )
}

