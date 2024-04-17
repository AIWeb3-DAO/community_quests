'use client'

import React, {useState, useEffect, useContext, createContext} from 'react'
import { createClient } from '@/utils/supabase/client'

 const ProfileContext = createContext()

 

  type ProviderProps = {
    children : any
  }
 const ProfileContextProvider = ({children} : ProviderProps) => {
    const [userSession, setuserSession] = useState()
    const [user, setuser] = useState()
    const [userInfo, setuserInfo] = useState()
    const [loadingInfo, setloadingInfo] = useState(false)
    const [userInfoError, setuserInfoError] = useState()
   const supabase = createClient()

     const handFetchUserInfo = async  () => {
        setloadingInfo(true)
        const {
            data: { user },
          } = await supabase.auth.getUser();
          const {
            data: { session },
          } = await supabase.auth.getSession();
          setloadingInfo(false)
          setuserInfo(user)
          setuserSession(session)
     }
  useEffect(() => {
      handFetchUserInfo()
  }, [])

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
     if(user){
        handleGetUserInfo()
     }
    }, [user])

      const values = {
         userInfo,
         user,
         userSession,
         loadingInfo,
         userInfoError
      }

      return (
         <ProfileContext.Provider value={values}>
            {children}
         </ProfileContext.Provider>
      )
    
  
 }

 const useProfileContext = () => {
    return useContext(ProfileContext)
 }
 export  {ProfileContextProvider, useProfileContext}

