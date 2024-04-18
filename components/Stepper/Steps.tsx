import React, {useState, useEffect} from 'react'
//import Step from '../tutorial/Step';
import Step from './Step';
import Button from '../common/Button';
import QuestPage from '../quests/QuestPage';
import QuestInfo from '../quests/QuestInfo';
import QuestType from '../quests/QuestType';
import { createClient } from '@/utils/supabase/client';

  type Props = {
    totalSteps : any
  }
export default function Steps() {
  const [totalSteps, settotalSteps] = useState(2)
  const supabase = createClient()
  const [isSubmitting, setisSubmitting] = useState(false)

  const [currentStep, setCurrentStep] = useState(0)
    let stepsArray = Array.from({ length: totalSteps }, (_, index) => index + 1);

    const [stepsState, setStepsState] = useState(Array.from({ length: totalSteps }, () => ({
      title: "",
      description: "",
      isOptional: false,
      type: "text",
      cover: undefined,
      icon: ""
    })));

    
    
  useEffect(() => {
    setStepsState(Array.from({ length: totalSteps }, () => ({
      title: "",
      description: "",
      isOptional: false,
      type: "text",
      cover: undefined,
      icon: ""
    })));
  }, [totalSteps]); // Update stepsState when totalSteps changes


    const [currentPosition, setcurrentPosition] = useState(0)
    const [questTitle, setquestTitle] = useState("")
    const [questCover, setquestCover] = useState("")
    const [questDescription, setquestDescription] = useState()
    const [cateory, setcateory] = useState('polkadot')
    const [questLavel, setquestLavel] = useState("")
    const [difculty, setdifculty] = useState("begginer")
    const [reward, setreward] = useState(0)
     
  
  
    const handleNext = () =>  {
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



     const handleTitleChange = (index, value) => {
      setStepsState(prevState => {
        const newState = [...prevState];
        newState[index].title = value;
        return newState;
      });
    };

    const handleDescriptionChange = (index, value) => {
      setStepsState(prevState => {
        const newState = [...prevState];
        newState[index].description = value;
        return newState;
      });
    };

    const handleIconChange = (index, value) => {
      setStepsState(prevState => {
        const newState = [...prevState];
        newState[index].icon = value;
        return newState;
      });
    };

    const handleTypeChange = (index, value) => {
      setStepsState(prevState => {
        const newState = [...prevState];
        newState[index].type = value;
        return newState;
      });
    };

    const handleCoverChange = (index, value) => {
      setStepsState(prevState => {
        const newState = [...prevState];
        newState[index].cover = value;
        return newState;
      });
    };

    const handleIsOptionalChange = (index, value) => {
      setStepsState(prevState => {
        const newState = [...prevState];
        newState[index].isOptional = value;
        return newState;
      });
    };

    const handleNextStep = () => {
      setCurrentStep(prevStep => Math.min(prevStep + 1, totalSteps - 1));
    };

    const handlePrevStep = () => {
      setCurrentStep(prevStep => Math.max(prevStep - 1, 0));
    };



  
  
    const handleSubmit  = async  () => {
     

      try {
        setisSubmitting(true)

        const questTasks = stepsState.map(step => ({
          task_title: step.title,
          task_description: step.description,
          task_icon: step.icon,
          task_cover: step.cover,
          task_type: step.type,
          task_isOptional: step.isOptional,
        }));

        const { error } = await supabase
.from('quests')
.insert({
   quest_type: "quest", 
   total_tasks: totalSteps,
   quest_title : questTitle,
   quest_cover : questCover,
   quest_decription : questDescription,
   quest_category : cateory,
   xp_reward : reward,
   lavel : difculty,
   quest_tasks :questTasks

  
  })

   console.log("the actual error", error)
      setisSubmitting(false)  
      } catch (error) {
        setisSubmitting(false)
        console.log("something went wrong", error)
      }

    };
  
  
     const getCurrentPosition = () =>  {
      if(currentPosition === 0) {
        return(
       
         <QuestType totalSteps={totalSteps} onTotalStepsChange={(e) => settotalSteps(e.target.value) }
           handleNext={handleNext} handlePrev={handlePrev}
           rewards={reward}
           lavel={difculty}
           onLavelChange={(e) => setdifculty(e.target.value)}
           onRewardChange={(e) => setreward(e.target.value)}
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
          <div className='w-3/6 border border-gray-700 mx-auto rounded-xl p-3'>
      

<div>
      <div>
        <h2 className='my-3 font-semibold text-xl'>Task No: {currentStep + 1}</h2>
    
    <Step
    index={currentStep}
    onTitleChange={(e) => handleTitleChange(currentStep, e.target.value)}
     title={stepsState[currentStep]?.title}
     description={stepsState[currentStep]?.description}
     isOptional={stepsState[currentStep]?.isOptional}
     type={stepsState[currentStep]?.type}
     cover={stepsState[currentStep]?.cover}
     icon={stepsState[currentStep]?.icon}
     onDescriptionChange={(e) => handleDescriptionChange(currentStep, e.target.value)}
     onCoverChange={(e) => handleCoverChange(currentStep, e.target.value)}
     onIsOptionalChange={(e) => handleIsOptionalChange(currentStep, e.target.value)}
     onTypeChange={(e) => handleTypeChange(currentStep, e.target.value)}
   onTaskIconChange={(e) => handleIconChange(currentStep, e.target.value)}
      />
        {/* Render other inputs for other state variables */}
      </div>
      <div className=' mt-5 flex justify-between px-4'>
        <button className={`py-1.5 px-3 rounded-xl font-semibold border border-gray-600 cursor-pointer`} onClick={handlePrevStep} disabled={currentStep === 0}>Previous</button>
        <button className={`py-1.5 px-3 rounded-xl font-semibold border border-gray-600 cursor-pointer ${currentStep === totalSteps - 1 && "hidden"}`} onClick={handleNextStep} disabled={currentStep === totalSteps - 1}>Next</button>
        {currentStep === totalSteps - 1 && <Button className={`py-2 px-3 rounded-xl font-semibold  bg-pink-600 w-[300px] cursor-pointer`} onClick={handleSubmit} isLoading={isSubmitting} disabled={isSubmitting}>Submit</Button>}
      </div>
    </div>

       
      
        
        </div>
        )
      }
     }
 

  return (
   <>
   {getCurrentPosition()}
   </>
  )
}
