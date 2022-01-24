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
          <Avatar sx={{ bgcolor: green[900] }} aria-label="recipe">
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
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{chosenServiceType.map(type => <ChosenServiceTypeCard key={type.id} type={type} />)}</Typography>
          {/* <Typography paragraph>{chosenServiceTypeCard}</Typography> */}
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
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