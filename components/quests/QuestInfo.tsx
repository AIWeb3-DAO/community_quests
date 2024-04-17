import React from 'react'
import Input from '../common/inputs/Input'


type  Props = {
    title : any
    description : any
    cover : any
    category : any
    handleNext : any
    handlePrev : any
    onTitleChange : any
    onDescriptionChange : any
    onCoverChange : any
    onCategoryChange : any

}
export default function QuestInfo({
    title,
    description,
    category,
    cover,
    handleNext,
    handlePrev,
    onCoverChange,
    onDescriptionChange,
    onTitleChange,
    onCategoryChange
} : Props) {
  return (
    <div className='w-3/6 border h-[94vh] border-gray-700 mx-auto rounded-xl p-3'>
          <h1 className='text-3xl font-semibold text-center '>Quest Details</h1>

       <div className='w-full h-[77vh] flex flex-col items-center justify-center '>
         <Input 
            value={title}
            label='title'
            className='w-full ring-gray-700'
            onChange={onTitleChange}
         
         />

<Input 
            value={cover}
            label='cover url'
            className='w-full ring-gray-700'
            onChange={onCoverChange}
            labelClassName='mb-0 mt-4'
         
         />

<Input 
            value={category}
            label='category'
            className='w-full ring-gray-700'
            onChange={onCategoryChange}
            labelClassName='mb-0 mt-4'
         
         />

         <div className='w-full my-3 '>
             <h1>Quest description</h1>
              <textarea 
  value={description}
  onChange={onDescriptionChange}
  className='w-full h-28 resize-none bg-inherit border border-gray-700 focus:outline-none rounded-xl p-3'

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
