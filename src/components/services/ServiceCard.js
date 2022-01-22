import React from 'react'
import {TypeCard} from './TypeCard'

export const ServiceCard = ({service}) => {
     const typeCard = service.type.map(type => <TypeCard key={type.id} type={type} />)

    return (
        <div style={{border: "solid", width: "97%", margin: "auto" }}>
            <h3>{service.name}</h3>
            <h4>{service.description}</h4>
            {typeCard}
        </div>
    )
}
