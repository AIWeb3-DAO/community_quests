'use client'

import React, {useState, useEffect} from 'react'
import Input from '../common/inputs/Input'
import Step from '../tutorial/Step'
import Steps from '../Stepper/Steps'
import QuestType from '../quests/QuestType'
import QuestInfo from '../quests/QuestInfo'


export default function CreateQuest() {
  const [currentPosition, setcurrentPosition] = useState(0)
  const [totalSteps, settotalSteps] = useState(2)
  const [questTitle, setquestTitle] = useState("")
  const [questCover, setquestCover] = useState("")
  const [questDescription, setquestDescription] = useState()
  const [cateory, setcateory] = useState('polkadot')
  const [questLavel, setquestLavel] = useState("")
   


  /*const handleNext = () =>  {
    if(currentPosition < 2 )
    setcurrentPosition(currentPosition +1)
  }

  const handlePrev = () =>  {
    if(currentPosition > 0) {
      setcurrentPosition(currentPosition -1)
    }
  }

   const handleTotalStepsChange = (e) =>  {
     settotalSteps(e.target.value)
   }


   const getCurrentPosition = () =>  {
    if(currentPosition === 0) {
      return(
       <QuestType totalSteps={totalSteps} onTotalStepsChange={(e) => handleTotalStepsChange(e) }
         handleNext={handleNext} handlePrev={handlePrev}
       />
      )
    }else if(currentPosition === 1) {
      return(
        <QuestInfo title={questTitle} description={questDescription} 
          cover={questCover} category={cateory} onTitleChange={(e) => setquestTitle(e.target.value)}
          onCoverChange={(e) => setquestCover(e.target.value)}
          onDescriptionChange={(e) => setquestDescription(e.target.value)}
          handleNext={handleNext} handlePrev={handlePrev}
          onCategoryChange={(e) => setcateory(e.target.value)}
        />
      )
    }else if(currentPosition === 2){
      return(
        <Steps totalSteps={totalSteps}   />
      )
    }
   }*/
  return (
    <div className=' max-w-7xl mx-auto'>
       <h1 className='font-extrabold text-4xl text-center my-3'>Create Quest</h1>
<Steps  />
      
    </div>
  )
}
