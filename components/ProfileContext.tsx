//@ts-nocheck
'use client'

import React, {useState, useEffect, useContext, createContext} from 'react'
import { createClient } from '@/utils/supabase/client'


interface ProfileProps  {
   userSession : any
   user : any
   userInfo : any
   isFetchingUser : any  
   isUserInfoError : any
   userIdentities : any
   isFetchingIdentities : any
}
// const ProfileContext = createContext(undefined)
const ProfileContext = createContext<ProfileProps | undefined>(undefined);

 // 

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

 const useProfileContext = (): ProfileProps => {
   const context = useContext(ProfileContext);
   if (!context) {
      throw new Error('useSlideContext must be used within a SlideProvider');
    }
    return context
 }
 export  {ProfileContextProvider, useProfileContext}

