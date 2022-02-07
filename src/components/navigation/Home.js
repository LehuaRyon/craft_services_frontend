// import React from 'react'

// export const Home = () => {
//     return (
//         <div>
//             <div className="background">
//                 <img src='images/crochet.jpg' alt='home image' style={{height: "50%", width: "50%"}}/>
//                 {/* <img src={window.location.origin + "/images/crochet.jpeg"} alt="crochet" style={{width: "60%"}}/> */}
//             </div>
//         </div>
//     )
// }

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import { createSvgIcon } from '@mui/material/utils';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Header} from '..//layout/Header'
import {Footer} from '../layout/Footer'

const theme = createTheme();

const HomeIcon = createSvgIcon(
  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />,
  'Home',
);

export const Home = () => {

  return (      
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1587775772893-c6e4dfaa35bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square bgcolor='#212121'>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ width: 56, height: 56, bgcolor: '#c5e1a5'}}>
                <HomeIcon sx={{ color: '#6d4c41'}}/>
            </Avatar>
            <Typography component="div" variant="h4" color='#c5e1a5'>
                <br></br>
                Hello, I'm Mariah Ryon and I'm a innovative craftswoman.  
                <br></br>
                <br></br>
                I want to help people create or revamp their brand so that they express what really really value and what they are working towards.  
                <br></br>
                <br></br>
                I am open to collaboration as well as experimentation in making specific products that are not listed in my offered services.
            </Typography>
            {/* <Typography variant="h2" gutterBottom component="div">
                h2. Heading
            </Typography> */}
          </Box>
        </Grid>
        <Footer />
      </Grid>
    </ThemeProvider>
  );
}