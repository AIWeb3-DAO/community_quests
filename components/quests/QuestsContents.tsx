import React, {useCallback} from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { steps } from '@/utils/constants'
import ContentCard from './ContentCard'
import QuestFooter from './QuestFooter'
import { IoCloseCircleOutline } from 'react-icons/io5'
import QuestFooter2 from './QuestFooter2'
  type Props = {
     slides : any
     selectedSlide : any
     closeModal : any
  }
export default function QuestsContents({slides, selectedSlide, closeModal} : Props) {

  console.log("the slideds", slides)
    const [emblaRef, emblaApi] = useEmblaCarousel({
        axis: "y",
    skipSnaps: true,
    loop: false
        })

        const scrollPrev = useCallback(() => {
            if (emblaApi) emblaApi.scrollPrev()
          }, [emblaApi])
        //embla__slide
          const scrollNext = useCallback(() => {
            if (emblaApi) emblaApi.scrollNext()
          }, [emblaApi])
 
  return (
    <div className='flex  w-full   '>
      <div className='absolute top-[10px] left-3  '>
      <IoCloseCircleOutline  className='w-7 h-7 my-2 mx-3 cursor-pointer text-gray-400' onClick={closeModal}  />

      </div>
    
    <div className={`embla w-4/6  `} ref={emblaRef}>
    <div className="embla__container ">
      {slides.map((slide, i) => (
        <div className={``} key={i}>
            <ContentCard title={slide.task_title} description={slide.task_description} type={slide.task_type} cover={slide.task_cover} />
            <p>{slide.quest_title}</p>
         </div>
      ))}
    </div>

    </div>

<QuestFooter2 next={scrollNext} prev={scrollPrev} verify={false}  />
</div>

  )
}
