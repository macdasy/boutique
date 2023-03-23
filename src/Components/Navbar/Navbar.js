import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import { Button, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import './nav.css';

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const navItems = ['Home', 'About', 'Contact'];

export default function ElevateAppBar(props) {

  const scroll = () => {
    const section = document.querySelector( '#collections' );
    let position = section.getBoundingClientRect();
    window.scrollTo(position.left, position.top + window.scrollY - 100);
  };


  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar style={{ color:'black' }} id='appbar'  >
          <Toolbar style={{ justifyContent: 'space-between', padding:'2% 10%' }}>
            <Typography variant="h6" component="div" style={{ fontSize:'1.8em', color:'#F5AF65', fontWeight:'bold', fontFamily:'Kanit, sans-serif' }}>
              Boutique
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} id='nav-btn' >
                {item}
              </Button>
            ))}
          </Box>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <Container style={{ margin:0, padding:0, maxWidth:'100%', height:'100vh' }}  >
        <Box sx={{ my: 2 }} style={{ height:'inherit', marginTop:'0' }}>
         <div id='landing-bg' style={{ height:'inherit' }}> 
              <div id='landing-banner'>
                 <h4 id='opening'> Good Clothes open all the doors </h4>
                 <Button id='collection' onClick={scroll}> View Collections </Button>
              </div>
         </div>
        </Box>
      </Container>
    </React.Fragment>
  );
}
