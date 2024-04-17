import { Plus } from 'lucide-react'
import React from 'react'
import Input from '../common/inputs/Input'


type Props = {
    handleNext : any
    handlePrev : any
    totalSteps : any
    onTotalStepsChange : any
     rewards : any
     lavel : any
     onRewardChange : any
     onLavelChange : any
}
export default function QuestType({
 handleNext,
 handlePrev,
 totalSteps,
 onTotalStepsChange,
 lavel,
 rewards,
 onLavelChange,
 onRewardChange

} : Props) {
  return (
    <div className='w-3/6 border h-[93vh] border-gray-700 mx-auto rounded-xl p-3'>
    
  <h1 className='text-3xl font-semibold text-center '>Quest type</h1>
   <div className='w-full h-[77vh] flex flex-col items-center justify-center '>
      <div className='flex space-x-6 my-4'>
         <div className='w-[170px] h-[130px] p-3 border border-gray-600 hover:bg-gray-800 hover:border-gray-700 flex flex-col items-center justify-center rounded-xl cursor-pointer'>
            <Plus  />
             <h1 className='font-bold text-lg my-3'>Quest</h1>
             <p>Create New quest</p>
         </div>

         <div className='w-[170px] h-[130px] p-3 border border-gray-800 hover:bg-gray-800 hover:border-gray-700 flex flex-col items-center justify-center rounded-xl cursor-pointer'>
            <Plus  />
             <h1 className='font-bold text-lg my-3'>Poll</h1>
             <p>Create New Poll</p>
         </div>
      </div>
      <div className='mt-3 w-full'>
      <Input   value={rewards}  onChange={onRewardChange}
    placeholder=' eg  30 xp'
     className='w-full ring-gray-700 placeholder:text-gray-500 placeholder:text-sm'
     label='Quest reward'
     labelClassName='text-gray-500 text-sm'
     
    />
      <div className='w-full my-2'>
          <p className='text-sm mb-1 text-gray-500'>Difculty lavel</p>
          <select value={lavel} onChange={onLavelChange} className='bg-gray-900 w-full h-12 rounded-xl px-3 focus:outline-none border border-gray-700'>
            <option value={"begginer"}>Begginer</option>
            <option value={"expirienced"}>Experienced</option>
          </select>
      </div>
      <Input   value={totalSteps}  onChange={onTotalStepsChange}
    placeholder='total tasks  eg  6'
     className='w-full ring-gray-700 placeholder:text-gray-500 placeholder:text-sm'
     label='Total tasks'
     labelClassName='text-gray-500 text-sm mt-3'
     
    />
    
      </div>
 

   </div>

  
       <div className='w-full flex items-center justify-between px-3'>

       <button onClick={handlePrev} className={`border border-gray-700 py-1.5 px-3 rounded-lg`}>Prev</button>  
    <button onClick={handleNext} className={`border border-gray-700 py-1.5 px-3 rounded-lg`}> Next</button> 
        </div> 
   
        </div>
  )
}
