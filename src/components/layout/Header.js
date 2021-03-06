import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import {NavLink} from 'react-router-dom'

// const pages = ['Products', 'Pricing', 'Blog'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export const Header = ({storeName}) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar sx={{ bgcolor: "#33691e" }} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            color="Platinum"
            fontWeight="bold"
          >
            {storeName}
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {/* {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))} */}
              <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"><NavLink activeStyle={{fontWeight: "bolder", color: "darkgreen"}} exact style={{color: "saddlebrown"}} to="/">Home</NavLink></Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"><NavLink activeStyle={{fontWeight: "bolder", color: "darkgreen"}} exact style={{color: "saddlebrown"}} to="/about">About</NavLink></Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"><NavLink activeStyle={{fontWeight: "bolder", color: "darkgreen"}} exact style={{color: "saddlebrown"}} to="/services">Services</NavLink></Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"><NavLink activeStyle={{fontWeight: "bolder", color: "darkgreen"}} exact style={{color: "saddlebrown"}} to="/commissions">Comissions</NavLink></Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"><NavLink activeStyle={{fontWeight: "bolder", color: "darkgreen"}} exact style={{color: "saddlebrown"}} to="/contact">Contact</NavLink></Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"><NavLink activeStyle={{fontWeight: "bolder", color: "darkgreen"}} exact style={{color: "saddlebrown"}} to="/gallery">Gallery</NavLink></Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"><NavLink activeStyle={{fontWeight: "bolder", color: "darkgreen"}} exact style={{color: "saddlebrown"}} to="/shop">Shop</NavLink></Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            color="Platinum"
            fontWeight="bold"
          >
            {storeName}
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {/* {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))} */}
            <Button onClick={handleCloseNavMenu}>
              <NavLink activeStyle={{ fontWeight: "bolder", color: "#c5e1a5"}} exact style={{color: "lightgrey", textDecoration: "none"}} to="/">Home</NavLink>
            </Button>
            <Button onClick={handleCloseNavMenu}>
              <NavLink activeStyle={{ fontWeight: "bolder", color: "#c5e1a5"}} exact style={{color: "lightgrey", textDecoration: "none"}} to="/about">About</NavLink>
            </Button>
            <Button onClick={handleCloseNavMenu}>
              <NavLink activeStyle={{ fontWeight: "bolder", color: "#c5e1a5"}} exact style={{color: "lightgrey", textDecoration: "none"}} to="/services">Services</NavLink>
            </Button>
            <Button onClick={handleCloseNavMenu}>
              <NavLink activeStyle={{ fontWeight: "bolder", color: "#c5e1a5"}} exact style={{color: "lightgrey", textDecoration: "none"}} to="/commissions">Commissions</NavLink>
            </Button>
            <Button onClick={handleCloseNavMenu}>
              <NavLink activeStyle={{ fontWeight: "bolder", color: "#c5e1a5"}} exact style={{color: "lightgrey", textDecoration: "none"}} to="/contact">Contact</NavLink>
            </Button>
            <Button onClick={handleCloseNavMenu}>
              <NavLink activeStyle={{ fontWeight: "bolder", color: "#c5e1a5"}} exact style={{color: "lightgrey", textDecoration: "none"}} to="/gallery">Gallery</NavLink>
            </Button>
            <Button onClick={handleCloseNavMenu}>
              <NavLink activeStyle={{ fontWeight: "bolder", color: "#c5e1a5"}} exact style={{color: "lightgrey", textDecoration: "none"}} to="/shop">Shop</NavLink>
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {/* <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip> */}
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {/* {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))} */}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};



