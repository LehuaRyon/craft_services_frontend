import React, { Component } from 'react'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {NavLink} from 'react-router-dom'

export const ServiceShow = () => {
   const[chosenService, setChosenService] = useState([])
   const routeId = useParams().id

    const fetchService = async (id) => {
        try {
            const resp = await fetch(`http://localhost:3001/services/${id}`)
            const data = await resp.json()
            setChosenService(data)
        } catch (error) {
            alert(error)
        }
        
    }

    useEffect(() => {
        fetchService(routeId)
    }, [routeId])
    

    return (
        <div>
            <h2>on service show page</h2>
            <NavLink
            activeStyle={{
                fontWeight: "bolder",
                color: "darkgreen"
            }}
                exact
                // style={style}
                to={`/services/${parseInt(routeId) + 1}`}
            >See Next Service</NavLink>
        </div>
    )
}
