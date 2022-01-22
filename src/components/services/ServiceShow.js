import React, { Component } from 'react'
import {useState, useEffect} from 'react'

import React from 'react'

export const ServiceShow = () => {
    const[chosenService, setChosenService] = useState([])
     
    useEffect(() => {
        const id = chosenService.match.params.id
        setChosenService(id)
    }, [])

    return (
        <div>
            
        </div>
    )
}
