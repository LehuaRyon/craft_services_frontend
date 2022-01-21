import React from 'react'
import {TypeCard} from './TypeCard'

export const ServiceCard = ({service}) => {
     const typeCard = service.type.map(type => <TypeCard key={type.id} type={type} />)

    return (
        <div>
            <h3>{service.name}</h3>
            <h4>{service.description}</h4>
            {/* {service.type.map(type => 
                <li>{type.name} {type.image}</li>
            )} */}
            {typeCard}
        </div>
    )
}
