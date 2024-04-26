import React from 'react'
import Button from '../common/Button'
import { useSlideContext } from '../QuestStepsContext'

type Props = {
   title : string
   description : string
   cover ? : any
   type ? : any
   completed ? : any
   userLavel ? : any
   totalLavel ?  : any
   taskOptional : any
}
export default function ContentCard({description, type, cover, title, userLavel, totalLavel, taskOptional} : Props) {
  const {isLoading, verifyStep, verificationType, isVerifyState} = useSlideContext()

  
  return (
    <div className={`w-full bg-gray-800 h-[65vh] my-5 rounded-xl p-4 flex items-center justify-center`}>
       <h2>my type : {taskOptional === "true" ?  "optional" : "manadatory"}</h2>
        <h1>Your lavel : {userLavel}</h1>
        <h1>total lavel : {totalLavel}</h1>
      <h1 className={`${type === "text" ?  "text-5xl text-center font-semibold leading-snug" : 'hidden' }`}>{description}</h1>
       {type === "verify"   ?  (
          <div className='flex flex-col items-center justify-center'> 
            <img  src={cover} className='w-32 h-32 rounded-xl' />
            <div className='my-3 flex flex-col items-center justify-center'>
             <h1 className='text-2xl font-semibold leading-10 capitalize text-center '>{title}</h1>
              <p className='capitalize w-3/6 text-center leading-relaxed'>{description}</p>

                <Button className='bg-gray-700 text-gray-300 my-3' >Open steller swap</Button>
             </div>
            
           </div>
       ) : type === "action" ? (

          <div> 
            <h2 className='text-2xl font-semibold leading-10 capitalize text-center'>Action content displayed here </h2>
           </div>
       ) : type === "claim" ? (
   <div> 
                <h2 className='text-2xl font-semibold leading-10 capitalize text-center'>Claim your  rewards </h2>

     </div>
       ) : ""}
    </div>
  )
}
