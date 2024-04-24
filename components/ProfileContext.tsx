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
    const [isFetchingUser, setisFetchingUser] = useState(false)
    const [userInfoError, setuserInfoError] = useState()
    const [userIdentities, setuserIdentities] = useState()
    const [isFetchingIdentities, setisFetchingIdentities] = useState(false)
   const supabase = createClient()

     const handleFetchUser = async  () => {
        setisFetchingUser(true)
        const {
            data: { user },
          } = await supabase.auth.getUser();
          const {
            data: { session },
          } = await supabase.auth.getSession();
          setisFetchingUser(false)
          setuser(user)
          setuserSession(session)
     }
  useEffect(() => {
      handleFetchUser()
  }, [])

   const handleFetchIdenties = async () =>  {
      try {
         setisFetchingIdentities(true)
         const {
            data, error
          } = await supabase.auth.getUserIdentities()
          setuserIdentities(data)
     setisFetchingIdentities(false)
         
      } catch (error) {
         setisFetchingIdentities(false)
        console.log("the error fetching user data", error) 
      }
     
        
   }

    useEffect(() => {
      if(user) {
       handleFetchIdenties()
      }
    }, [user])
    

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

      console.log("the user from context", userInfo)
      const values = {
         userInfo,
         user,
         userSession,
         isFetchingUser,
         userInfoError,
         userIdentities
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

