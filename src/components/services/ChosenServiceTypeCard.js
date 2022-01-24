import React from 'react'

export const ChosenServiceTypeCard = ({type}) => {
    return (
        <>
            <h4>{type.name}</h4>
            <img src={type.image} alt={`{type.image} image`}/>
        </>
    )
}
