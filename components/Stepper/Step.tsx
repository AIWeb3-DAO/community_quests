import React from 'react'
import Input from '../common/inputs/Input'

type StepProps = {
     index : any
    title : any
    description : any
    isOptional : any
    type : any
    cover : any
    icon : any
    onTitleChange : any
    onDescriptionChange : any
    onCoverChange : any
    onIsOptionalChange : any
    onTypeChange  : any
    onTaskIconChange : any
}
export default function Step({
  index, title,
    onTitleChange,
    description, onDescriptionChange,
     onCoverChange, cover,
     isOptional,
     onIsOptionalChange,
     onTypeChange,
     type,
     onTaskIconChange,
     icon

    } : StepProps) {

        console.log("the optional value", isOptional)
  return (
    <div className=''>
    
<Input 
      value={title}
       onChange={onTitleChange}
       label='Task title'
       className=' border border-gray-600 ring-gray-600'
       placeholder='Task title'
    
    />
   <div className='my-3'>
    <h1 className='font-semibold my-2 capitalize'>description</h1>
     <textarea value={description}
       onChange={onDescriptionChange}
       placeholder='Description'
       className='w-full resize-none bg-inherit border border-gray-600 rounded-xl p-2 h-28 focus:outline-none'
     />
</div>

  <div>
   <Input
    value={cover}
    onChange={onCoverChange}
    label='Cover url'
    placeholder='cover url'
    labelClassName='mb-0'
    className='border border-gray-600 ring-gray-600'

  />
  </div>
 <div className='my-3'>
 <h1 className='font-semibold my-2 capitalize'>is Optional ?</h1>
  <select value={isOptional} onChange={onIsOptionalChange} className='w-full bg-gray-900 py-2 px-4 rounded-xl border border-gray-600 focus:outline-none'>
     <option value={false} className=''>optional</option>
     <option value={true}>Required</option>
  </select>
 </div>

 <div className='my-3'>
 <h1 className='font-semibold my-2 capitalize'>Task type</h1>
  <select value={type} onChange={onTypeChange} className='w-full bg-gray-900 py-2 px-4 rounded-xl border border-gray-600 focus:outline-none'>
     <option value={"text"} className=''>Text</option>
     <option value={"action"}>Action</option>
  </select>
 </div>

 <div className='my-3'>
 <h1 className='font-semibold my-2 capitalize'>Task icon</h1>
  <select value={icon} onChange={onTaskIconChange} className='w-full bg-gray-900 py-2 px-4 rounded-xl border border-gray-600 focus:outline-none'>
     <option value={"🦍"} className=''>🦍</option>
     <option value={"📕"}>📕</option>
     <option value={"🔥"}>🔥</option>
     <option value={"😊"}>😊</option>
     <option value={"🐴"}>🐴</option>
  </select>
 </div>
     
    </div>
  )
}
