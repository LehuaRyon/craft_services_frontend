import React from 'react'
import {useState} from 'react'

// export const ServicesFilter = ({handleSearch}) => {
//     const [search, setSearch] = useState("")

//     const handleChange = (e) => {
//         setSearch(e.target.value)
//         handleSearch(search)
//     }
    
//     return (
//         <div>
//             <input type="text" placeholder="Search for a service..." value={search} onChange={handleChange}/>
//         </div>
//     )
// }

export const ServicesFilter = ({handleSearch}) => {
    return (
        <div>
            <input type="text" placeholder="Search for a service..." onChange={(e) => handleSearch(e.target.value)}/>
        </div>
    )
}
