import React from 'react'
import {Card} from "../component/Card"

export default function Cards({animals}) {

    const cardsToRender = animals.map((animal) => {
       return <Card key={animal.id} animal={animal}  />
    })



  return (
    <div>
        {cardsToRender}
    </div>
  )
}

