import React, { Component } from 'react'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {NavLink} from 'react-router-dom'
import {ChosenServiceTypeCard} from './ChosenServiceTypeCard'

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { green } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export const ServiceShow = () => {
    // const[chosenService, setChosenService] = useState([])
    const[chosenService, setChosenService] = useState({})
    const[chosenServiceType, setChosenServiceType] = useState([])
    const routeId = useParams().id
    // const chosenServiceTypeCard = chosenService.type.map(type => <ChosenServiceTypeCard key={type.id} type={type} />)

    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {setExpanded(!expanded);}

    const ExpandMore = styled((props) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
        })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    }));

    const fetchService = async (id) => {
        try {
            const resp = await fetch(`http://localhost:3001/services/${id}`)
            const data = await resp.json()
            setChosenService(data)
            setChosenServiceType(data.type)
        } catch (error) {
            alert(error)
        }
    }

    useEffect(() => {
        fetchService(routeId)
    }, [routeId])


  return (
    // <Card sx={{ maxWidth: 345 }}>
    <Card sx={{ minWidth: 275 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: green[900] }} aria-label={chosenService.id}>
            {chosenService.id}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={chosenService.name}
        subheader={chosenService.description}
      />
      <NavLink
            activeStyle={{
                fontWeight: "bolder",
                color: "darkgreen"
            }}
                exact
                // style={style}
                to={`/services/${parseInt(routeId) + 1}`}
            >See Next Service</NavLink><br></br>
    <NavLink
            activeStyle={{
                fontWeight: "bolder",
                color: "darkgreen"
            }}
                exact
                // style={style}
                to={`/services/${parseInt(routeId) - 1}`}
            >See Previous Service</NavLink>
      <CardMedia
        component="img"
        height="400"
        // image="/images/graphicdesign.jpg"
        image={chosenService.image}
        alt="Graphic Design Image"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon /></ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {/* <Typography paragraph>{chosenServiceType.map(type => <ChosenServiceTypeCard key={type.id} type={type} />)}</Typography> */}
           <Typography paragraph><ChosenServiceTypeCard types={chosenServiceType} /></Typography>
          {/* <Typography paragraph>{chosenServiceTypeCard}</Typography> */}
        </CardContent>
      </Collapse>
    </Card>
  )
}

//     return (
//         <div>
//             <h2>on service show page</h2>
//             <NavLink
//             activeStyle={{
//                 fontWeight: "bolder",
//                 color: "darkgreen"
//             }}
//                 exact
//                 // style={style}
//                 to={`/services/${parseInt(routeId) + 1}`}
//             >See Next Service</NavLink>
//         </div>
//     )
// }