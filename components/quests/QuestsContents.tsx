//@ts-nocheck
"use client"
import React, {useCallback, useState, useEffect} from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { steps } from '@/utils/constants'
import ContentCard from './ContentCard'
import QuestFooter from './QuestFooter'
import { IoCloseCircleOutline } from 'react-icons/io5'
import QuestFooter2 from './QuestFooter2'
import { useSlideContext } from '../QuestStepsContext'
import Button from '../common/Button'
import { Verified } from 'lucide-react'
  type Props = {
     slides : any
     selectedSlide : any
     closeModal : any
     unlock : any
     userLavel : any
     totalLavels : any
     isUpdatingProgress : any
  }
export default function QuestsContents({slides, selectedSlide, closeModal,userLavel, totalLavels, isUpdatingProgress, unlock } : Props) {
 const {setSelectedSlideIndex, isVerifyState, toggleIsVerifyStep, verifyStep, setIsVerifyState, isLoading, isVerified, setIsVerified, selectedSlideIndex, verifiedIndex, setVerifiedIndex} = useSlideContext()
 const [verificationUrl, setverificationUrl] = useState("")
  console.log("the slideds", slides)
    const [emblaRef, emblaApi] = useEmblaCarousel({
        axis: "y",
    skipSnaps: true,
    loop: false,
    watchDrag : false,
  
    
        })

       
  let  twitterTest = "https://twitter.com/SubsocialChain"
  let discordTest = "https://discord.com/channels/@me/1225343728789622805/1233291494266503248"
        const scrollPrev = useCallback(() => {
            if (emblaApi)  {
              emblaApi.scrollPrev()
              //console.log("the current slide in view", emblaApi?.selectedScrollSnap())
                setSelectedSlideIndex(emblaApi?.selectedScrollSnap())
            } 
          }, [emblaApi])
        //embla__slide
          const scrollNext  = useCallback(() => {
            //unlock()
            if (emblaApi) {
               emblaApi.scrollNext()
              // console.log("the current slide in view", emblaApi?.slidesInView())
               setSelectedSlideIndex(emblaApi?.selectedScrollSnap())

            }
          }, [emblaApi])

          const handleUnlockStep = async () =>  {
            unlock()
            scrollNext()
           
           
          }
 
         
          if(isVerifyState){
            return(
              <div className='flex  w-full h-full md:h-[80vh]   '>
              <div className='absolute top-[80px] md:top-[10px] left-3   '>
              <IoCloseCircleOutline  className='w-7 h-7 my-2 mx-3 cursor-pointer text-gray-400' onClick={toggleIsVerifyStep}  />
              </div>
              <div className=' w-11/12 mt-20 md:w-4/6  mx-auto p-4 rounded-xl'>
                 <h1 className='font-medium my-2 text-center text-2xl'>Verify</h1>
                  <div className=' w-full border border-gray-600 h-[50%]'>
                    description video 
                  </div>
              

               <div className='my-4 w-full'>
                  <p className='mb-3 text-gray-400'>Paste Link</p>
                  <input  value={verificationUrl} onChange={(e) => setverificationUrl(e.target.value)} 
                    placeholder='link'
                    className='w-full focus:outline-none bg-inherit border border-gray-600 py-2 px-4 rounded-xl'
                  />
                  <div className='flex justify-center'>
    <p>{isVerified ? "VERIFIED" : "NOT VERIFIED"}</p>
                   <Button className='bg-blue-600 my-4 w-4/6 mx-auto rounded-xl' onClick={() =>    verifyStep("DISCORD", verificationUrl, selectedSlideIndex)} isLoading={isLoading} disabled={!verificationUrl}>Verify Action</Button>
                   </div>
               </div>
        
               </div>
              </div>
              
            )
          }
  return (
    <div className='flex  w-full    '>
      <div className='absolute top-[70px] md:top-[10px] left-3  z-20  '>
      <IoCloseCircleOutline  className='w-7 h-7 my-2 mx-3 cursor-pointer text-gray-400' onClick={closeModal}  />

      </div>
    
    <div className={`embla w-11/12 md:w-4/6  `} ref={emblaRef}>
    <div className="embla__container ">
      {slides.map((slide, i) => (
        <div className={``} key={i}>
            <ContentCard title={slide.task_title} description={slide.task_description} type={slide.task_type} cover={slide.task_cover}
              userLavel={userLavel} totalLavel={totalLavels} taskOptional ={slide?.task_isOptional}
            />
            <p>{slide.quest_title}</p>

         </div>
      ))}
    </div>

    </div>

    <QuestFooter2 next={handleUnlockStep} prev={scrollPrev} verify={true} lavel={userLavel} totalLavels={totalLavels} isUpdatingProgress={isUpdatingProgress}
slides={slides}
/>
</div>

  )
}
