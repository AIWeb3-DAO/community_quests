"use client"

import React, {useState} from 'react'
import Button from './common/Button'
import Modal from './common/Modal'
export default function TestCom() {
    const [toggler, settoggler] = useState(false)

    const  togger = () =>  {
        settoggler(! toggler)
     }
  return (
    <div>
             <Button type="button" onClick={togger}>Open Modal</Button>
     <Modal isOpen={toggler} closeModal={togger}>
       <h1>Hello  my  boss he is  just  testing out hahaha </h1>
     </Modal>
    </div>
  )
}
