import React from 'react'
import {useState, useEffect} from 'react'
import {ServicesList} from '../components/services/ServicesList'
import {ServicesFilter} from '../components/services/ServicesFilter'

// contains list of services, ServicesList
// contains search or filter bar and needs list of services, ServicesFilter
// every time fetch, gonna use state to store data

export const ServicesContainer = () => {
    const[services, setServices] = useState([])

    // const fetchData = () => {
    //     fetch("http://localhost:3001/services")
    //     // fires http request, get promise
    //     .then(response => response.json())
    //     // when promise resolves, hten have response object
    //     // returns a promise
    //     .then(data => setServices(data))
    //     // when promise resolves, then get data wanted
    // }

    const fetchData = async () => {
        const resp = await fetch("http://localhost:3001/services")
        //  try to fetch something & wait until having something befoe storing inside the resp variable
        const data = await resp.json()
        setServices(data)
    }

    useEffect(() => {
        // hook, function, takes 2 arguments
        // automatically sync
        // like componentDidMount
        fetchData()
    }, [])

    return (
        <div>
            <ServicesFilter />
            <ServicesList />
        </div>
    )
}
