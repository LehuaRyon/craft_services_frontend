// import React from 'react'
// import {TypeCard} from './TypeCard'
// import './Service.css'

// export const ServiceCard = ({service}) => {
//      const typeCard = service.type.map(type => <TypeCard key={type.id} type={type} />)

//     return (
//         <div className="service-card">
//             <h3>{service.name}</h3>
//             <h4>{service.description}</h4>
//             {typeCard}
//         </div>
//     )
// }

import React from 'react'
import {TypeCard} from './TypeCard'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {NavLink} from 'react-router-dom'
// import {useState, useEffect} from 'react'

export const ServiceCard = ({service}) => {
     const id = service.id
    //  const id = service.match.params.id
    //  console.log(id)
     const typeCard = service.type.map(type => <TypeCard key={type.id} type={type} />)

    //  const[chosenService, setChosenService] = useState([])
     
    // useEffect(() => {
    //     const id = chosenService.match.params.id
    //     setChosenService(id)
    // }, [])

const card = (
  <React.Fragment>
    <CardContent>
      {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Word of the Day
      </Typography> */}
      <Typography variant="h5" component="div">
        <NavLink
            activeStyle={{
                fontWeight: "bolder",
                color: "darkgreen"
            }}
                exact
                // style={style}
                to={`services/${id}`}
            >{service.name}</NavLink>
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {service.description}
      </Typography>
      <Typography variant="body2">
        {typeCard}
      </Typography>
    </CardContent>
    {/* <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions> */}
  </React.Fragment>
);

    return (
        <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">{card}</Card>
        </Box>
    )
}
