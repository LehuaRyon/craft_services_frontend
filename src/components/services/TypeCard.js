import React from 'react'

export const TypeCard = ({type}) => {
    return (
        <div>
            <h4>{type.name}</h4>
            {/* <img src={type.image} alt={`{type.name} image`}/> */}
        </div>
    )
}
