import React from 'react'

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';


// export const ChosenServiceTypeCard = ({type}) => {
export const ChosenServiceTypeCard = ({types}) => {

    return (
    //  <ImageList sx={{ width: 500, height: 450 }}>
    //   {/* <ImageListItem key="Subheader" cols={4}></ImageListItem> */}
    //     <ImageListItem key={type.image}>
    //       <img
    //         src={`${type.image}?w=248&fit=crop&auto=format`}
    //         srcSet={`${type.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
    //         alt={type.name}
    //         loading="lazy"
    //       />
    //       <ImageListItemBar title={type.name}/>
    //     </ImageListItem>
    // </ImageList>

        <ImageList sx={{ width: "auto", height: "auto" }}>
            <ImageListItem key="Subheader" cols={2}></ImageListItem>
                {types.map((type) => (
                    <ImageListItem key={type.name}>
                    <img
                        src={`${type.image}?w=248&fit=crop&auto=format`}
                        srcSet={`${type.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={type.name}
                        loading="lazy"
                    />
                    <ImageListItemBar title={type.name}/>
                    </ImageListItem>
                ))}
        </ImageList>
    )
}
