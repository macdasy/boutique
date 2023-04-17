import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { IconButton, Slide, useScrollTrigger } from '@mui/material';


import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}


function DrawerAppBar(props) {

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar component="nav" style={{ background:'white', padding:'1%5%', boxShadow:'none', borderBottom:"0.5px solid #00000040" }}>
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
              style={{ fontFamily:'Josefin Sans', color:'black' }}
            >
              Boutique
            </Typography>
            <Box>
              <a href='/favourites' > <IconButton style={{ color:'black', marginRight: '3vh' }}>  <FavoriteIcon /> </IconButton> </a>
              <a href='/cart' > <IconButton style={{ color:'black', marginRight: '3vh' }}>  <ShoppingCartIcon /> </IconButton> </a>
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Box component="main" sx={{ p: 3 }} md={{ p:5 }} >
      </Box>
    </Box>
  );
}

export default DrawerAppBar;