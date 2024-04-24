'use client'
import { SlideProvider } from '@/components/QuestStepsContext'
import QuestPage from '@/components/quests/QuestPage'
import React from 'react'

export default function page() {
  return (
    <div className='min-h-screen '>
      <SlideProvider>
         <QuestPage  />
         </SlideProvider>
    </div>
  )
}
