import React, { createContext, useState, useContext } from 'react';

interface SlideContextType {
    selectedSlideIndex: number | null;
    setSelectedSlideIndex: React.Dispatch<React.SetStateAction<number | null>>;
    isShowModal : boolean;
    setIshowModal : React.Dispatch<React.SetStateAction<boolean >>;
    handleToggleExpand : any
  }

  const SlideContext = createContext<SlideContextType | undefined>(undefined);

  export const SlideProvider = ({ children  } ) => {
    const [selectedSlideIndex, setSelectedSlideIndex] = useState<number | null>(null);
    const [isShowModal, setIshowModal] = useState(false)
  

      const handleToggleExpand = (index : any) =>  {
        setIshowModal(! isShowModal)
         setSelectedSlideIndex(index)
      }
    const value: SlideContextType = {
      selectedSlideIndex,
      setSelectedSlideIndex,
      isShowModal,
      setIshowModal,
      handleToggleExpand

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