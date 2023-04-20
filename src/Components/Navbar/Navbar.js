import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import { Button, Slide } from '@mui/material';
import './nav.css';

import logo from '../../Stacks/logo.png';

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


export default function ElevateAppBar(props) {

  const nav = window.location.pathname;
  console.log(nav);

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar style={{ color:'black', boxShadow:'none', borderBottom:"1px solid #F0EEE7" }} id='appbar'  >
          <Toolbar style={{ padding:'1.5% 5%', gap:"20px" }}>

            <img src={logo} alt='' style={{ width:'10vh' }} />

            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <Button id='nav-btn' style={{   }} > Home </Button>
                <Button id='nav-btn' style={{ textDecoration: nav==='/collections' ? 'underline' : 'none' }}  > Shop </Button>
                <Button id='nav-btn' style={{ textDecoration: nav==='/contact' ? 'underline' : 'none' }}  > Contact </Button>
            </Box>

            <Box sx={{ display: { xs: 'flex', sm:'none', md: 'none' }, gap:"20px" }} style={{marginLeft: 'auto'}}>
              <a href="" class="uk-icon-link" data-uk-icon="heart"></a>
              <a href="" class="uk-icon-link" data-uk-icon="cart"></a>
            </Box>

            <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap:"30px" }} style={{marginLeft: 'auto'}}>
              <a href="" className="uk-icon-link act-btn" data-uk-icon="heart"></a>
              <a href="" className="uk-icon-link act-btn" data-uk-icon="cart"></a>
            </Box>

          </Toolbar>
        </AppBar>
        </HideOnScroll>
      <Toolbar />
        <Box pb={7} sx={{ pb:7 }} />
    </React.Fragment>
  );
}
