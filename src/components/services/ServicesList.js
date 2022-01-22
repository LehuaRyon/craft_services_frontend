import React from 'react'
import {ServiceCard} from './ServiceCard'

export const ServicesList = ({services}) => {
    const servicesCards = services.map(service => <ServiceCard key={service.id} service={service} />)
    // have a list of services objects
    // services is an array, map it, for each service object, render service card component

    return (
        <div>
            <h2>Services Offered</h2>
            <div>
            {/* <div style={{display: "flex", flexWrap: "wrap"}}> */}
                {servicesCards}
            </div>
        </div>
    )
}
