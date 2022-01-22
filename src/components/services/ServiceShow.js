import React, { Component } from 'react'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

export const ServiceShow = () => {
   const[chosenService, setChosenServices] = useState([])
   const routeId = useParams().id

    const fetchService = async (id) => {
        try {
            const resp = await fetch(`http://localhost:3001/services/${routeId}`)
            const data = await resp.json()
            setChosenServices(data)
        } catch (error) {
            alert(error)
        }
        
    }

    useEffect(() => {
        // hook, function, takes 2 arguments
        // automatically sync
        // like componentDidMount
        fetchService()
    }, [])

    return (
        <div>
            <h2>on service show page</h2>
        </div>
    )
}
