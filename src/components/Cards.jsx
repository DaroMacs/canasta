import React from 'react'
import Card from './Card'

const Cards = (persons) => {
    return (
        <>            
            {persons.data?.map(person => (
                <Card
                key={person.id}
                person = {person}
                />
            ))}
        </>
            ) 
}

export default Cards
