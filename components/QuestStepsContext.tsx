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
  

      const handleToggleExpand = (index : any) =>  {
        setIshowModal(! isShowModal)
         setSelectedSlideIndex(index)
      }

        const  toggleIsVerifyStep = (_verificationType : any) =>  {
          setIsVerifyState(! isVerifyState) 
          setverificationType(_verificationType)
        }

       const  verifyStep = (type , url) =>  {
         setIsLoading(true)
          if(type === "TWITTER"){
          
              const twitterRegex = /^https?:\/\/twitter\.com\/\w+\/status\/\d+$/;
              return twitterRegex.test(url);
            
          } else if(type === "DISCORD"){
            const discordRegex = /^https?:\/\/discord\.com\/channels\/\d+\/\d+\/\d+$/;
            return discordRegex.test(url);
          }
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
      verificationType

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