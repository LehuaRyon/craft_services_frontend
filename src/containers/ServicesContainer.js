import React from 'react'
import {useState, useEffect} from 'react'
import {ServicesList} from '../components/services/ServicesList'
import {ServicesFilter} from '../components/services/ServicesFilter'

// contains list of services, ServicesList
// contains search or filter bar and needs list of services, ServicesFilter
// every time fetch, gonna use state to store data

export const ServicesContainer = () => {

    
    return (
        <div>
            <ServicesFilter />
            <ServicesList />
        </div>
    )
}
