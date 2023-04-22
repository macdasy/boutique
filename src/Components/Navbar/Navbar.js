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


export default function Navbar(props) {

  const nav = window.location.pathname;
  console.log(nav);

  const goToHome = (e) => {
    if(nav!=='/') window.location.pathname = '/';
  }

  const goToShop = (e) => {
    if(nav!=='/collections') window.location.pathname = '/collections';
  }

  const goToContact = (e) => {
    if(nav!=='/contact') window.location.pathname = '/contact';
  }


  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar style={{ color:'black', boxShadow:'none', borderBottom:"1px solid #F0EEE7" }} id='appbar'  >
          <Toolbar style={{ padding:'1.5% 5%', gap:"20px", justifyContent: 'space-between' }}>

            <>
            <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
              <button class="uk-button uk-button-link" type="button">  
                <span uk-icon="icon: menu"></span>                
              </button>
                  <div uk-dropdown="mode: click">
                      <ul class="uk-nav uk-dropdown-nav">
                          <li class="uk-nav-header">Pages</li>
                          <li class="uk-active">
                            <a href='.'> Home </a>
                          </li>
                          <li class="uk-active">
                            <a href='/collections'> Collections </a>
                          </li>
                          <li class="uk-active">
                            <a href='.'> About </a>
                          </li>
                          <li class="uk-nav-divider"></li>
                          <li class="uk-nav-header">Others</li>
                          <li><a href="#"> Terms & Conditions </a></li>
                          <li><a href="#"> Intructions </a></li>
                          <li><a href="#"> Policy </a></li>
                      </ul>
                  </div>
              </Box>

            <Box sx={{ margin: { xs: 'auto', sm:'0', md:'0' } }} >
              <img src={logo} alt='' style={{ width:'8vh' }} />
            </Box>

            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <Button disableRipple disableFocusRipple disableElevation disableTouchRipple onClick={goToHome} id='nav-btn' style={{ color: nav==='/' ? '#b0c17d' : 'grey' , textDecoration: nav==='/' ? 'underline' : 'none'  }} > Home </Button>
                <Button disableRipple disableFocusRipple disableElevation disableTouchRipple onClick={goToShop} id='nav-btn' style={{ color: nav==='/collections' ? '#b0c17d' : 'grey' , textDecoration: nav==='/collections' ? 'underline' : 'none' }}  > Shop </Button>
                <Button disableRipple disableFocusRipple disableElevation disableTouchRipple onClick={goToContact} id='nav-btn' style={{ color: nav==='/contact' ? '#b0c17d' : 'grey' , textDecoration: nav==='/contact' ? 'underline' : 'none' }}  > Contact </Button>
            </Box>
            </>

            <Box sx={{ display: { xs: 'flex', sm:'none', md: 'none' }, gap:"20px" }}>
              <a href="" class="uk-icon-link" data-uk-icon="info"></a>
              <a href="" class="uk-icon-link" data-uk-icon="bag"></a>
            </Box>

            <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap:"20px" }}>
              <a href="" className="uk-icon-link act-btn" data-uk-icon="info"></a>
              <a href="" className="uk-icon-link act-btn" data-uk-icon="bag"></a>
            </Box>

          </Toolbar>
        </AppBar>
        </HideOnScroll>
      <Toolbar />
        <Box pb={7} sx={{ pb:7 }} />
    </React.Fragment>
  );
}
