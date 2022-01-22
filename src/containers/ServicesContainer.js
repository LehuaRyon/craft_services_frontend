import React from 'react'
import {useState, useEffect} from 'react'
import {ServicesList} from '../components/services/ServicesList'
import {ServicesFilter} from '../components/services/ServicesFilter'

// contains list of services, ServicesList
// contains search or filter bar and needs list of services, ServicesFilter
// every time fetch, gonna use state to store data

export const ServicesContainer = () => {
    const[services, setServices] = useState([])
    const[searchedServices, setSearchedServices] = useState(services)

    // const fetchServices = () => {
    //     fetch("http://localhost:3001/services")
    //     // fires http request, get promise
    //     .then(response => response.json())
    //     // when promise resolves, hten have response object
    //     // returns a promise
    //     .then(data => setServices(data))
    //     // when promise resolves, then get data wanted
    // }

    const fetchServices = async () => {
        // should always have a catch
        try {
            const resp = await fetch("http://localhost:3001/services")
            //  try to fetch something & wait until having something befoe storing inside the resp variable
            const data = await resp.json()
            setServices(data)
            setSearchedServices(data)
        } catch (error) {
            alert(error)
        }
        
    }

    useEffect(() => {
        // hook, function, takes 2 arguments
        // automatically sync
        // like componentDidMount
        fetchServices()
    }, [])

    const handleSearch = (searchValue) => {
        // recieve what user typed in input
        const searchedServices = services.filter(service => service.name.toLowerCase().startsWith(searchValue.toLowerCase()) || service.description.toLowerCase().includes(searchValue.toLowerCase()))
        // filter full list based from that
        // console.log(filteredServices)
        // update searchedServices using array returned by filter
        setSearchedServices(searchedServices)
    }

    return (
        <div>
            <ServicesFilter handleSearch={handleSearch}/>
            <ServicesList services={searchedServices}/>
        </div>
    )
}
