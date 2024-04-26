//@ts-nocheck
import React, { createContext, useState, useContext } from 'react';

interface SlideContextType {
    selectedSlideIndex: number | null;
    setSelectedSlideIndex: React.Dispatch<React.SetStateAction<number | null>>;
    isShowModal : boolean;
    setIshowModal : React.Dispatch<React.SetStateAction<boolean >>;
    handleToggleExpand : any
    isVerifyState : any
    setIsVerifyState : any
    verifyStep : any
    verificationType : any
    setverificationType : any
    isVerified : any
    setIsVerified : any
    isLoading : any
    setIsLoading : any
    toggleIsVerifyStep : any
    verifiedIndex : any
    setVerifiedIndex : any
  }

  type VerifyProps = {
    type : "TWITTER" | "DISCORD" | "ONCHIAN"
    url : string
  }

  const SlideContext = createContext<SlideContextType | undefined>(undefined);

  export const SlideProvider = ({ children  } : any ) => {
    const [selectedSlideIndex, setSelectedSlideIndex] = useState<number | null>(null);
    const [isShowModal, setIshowModal] = useState(false)
    const [isVerifyState, setIsVerifyState] = useState(false)
    const [isVerified, setIsVerified] = useState(false)
    const [verificationType, setverificationType] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [verifiedIndex, setVerifiedIndex] = useState(0)
  

      const handleToggleExpand = (index : any) =>  {
        setIshowModal(! isShowModal)
         setSelectedSlideIndex(index)
      }

        const  toggleIsVerifyStep = (_verificationType : any) =>  {
          setIsVerifyState(! isVerifyState) 
          setverificationType(_verificationType)
        }


          // TWITTER  CHECKER  
          function isValidTwitterUrl(url) {
            const twitterRegex = /^https?:\/\/twitter\.com\/\w+\/status\/\d+$/;
            return twitterRegex.test(url);
          }

          // DISCORD  CHECKER

          function isValidDiscordUrl(url) {
            const discordRegex = /^https?:\/\/discord\.com\/channels\/@me\/\d+\/\d+$/;
            return discordRegex.test(url);
          }

       const  verifyStep = (type , url, index) =>  {
         setIsLoading(true)
         setTimeout(() => {
          // Perform validation check here
          // Replace isValidTwitterUrl and isValidDiscordUrl with your validation functions
        
          

            if(type === "TWITTER"){
              const isValidTwitter = isValidTwitterUrl(url);
              
               if(isValidTwitter){
                setIsVerified(true)
                setIsVerifyState(false)
                console.log("validation results", isValidTwitter)
                setVerifiedIndex(index)
               }else {
                setIsVerified(false)
               }
              
            }else if(type === "DISCORD") {
              const isValidDiscord = isValidDiscordUrl(url);
            
              if(isValidDiscord){
                setIsVerified(true)
                setIsVerifyState(false)
                setVerifiedIndex(index)
                console.log("validation results", isValidDiscord)
              }else if( ! isValidDiscord){
                setIsVerified(false)
              }
            }else {
              console.log("no verificaton type")
            }
          
          setIsLoading(false);
        }, 3000); // 3 seconds delay
        
       }
    const value: SlideContextType = {
      selectedSlideIndex,
      setSelectedSlideIndex,
      isShowModal,
      setIshowModal,
      handleToggleExpand,
      isVerifyState,
      setIsVerifyState,
      verifyStep,
      isLoading,
      setIsLoading,
      isVerified,
      setIsVerified,
      setverificationType,
      toggleIsVerifyStep,
      verificationType,
      verifiedIndex,
      setVerifiedIndex

    };
  
    return <SlideContext.Provider value={value}>{children}</SlideContext.Provider>;
  };
  
  export const useSlideContext = (): SlideContextType => {
    const context = useContext(SlideContext);
    if (!context) {
      throw new Error('useSlideContext must be used within a SlideProvider');
    }
    return context;
  };