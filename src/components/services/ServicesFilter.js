import React from 'react'
import {useState} from 'react'

export const ServicesFilter = () => {
    const [search, setSearch] = useState("")

    const handleChange = (e) => {
        setSearch(e.target.value)
    }
    

    return (
        <div>
            <input type="text" placeholder="Search for a service..." value={search} onChange={handleChange}/>
        </div>
    )
}
