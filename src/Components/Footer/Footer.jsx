
import Grid from '@mui/material/Grid';
import { Facebook, Instagram, WhatsApp } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';

import logo from '../../Stacks/logo1.png';

export default function Footer(props){

    return(
        <div id='modal-footer' style={{ padding:'5% 0% 0%' }} >
                  <hr style={{marginBottom:'3%'}} />
                <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                  <Grid item xs={12} md={4} style={{  paddingLeft:'7%' }}>
                    <h4 style={{ fontFamily:'Josefin Sans', color:'#7d875f' }}> Urja </h4> 
                    <div style={{lineHeight:2}} id='atagcont' >
                      <a href='./collections'> Collections </a> <br/>
                      <a href='./about'> About </a> <br/>
                      <a href='./contact'> Contact </a> <br/>
                      <a href='./policy'> Privacy Policy </a> <br/>
                    </div>
                  </Grid>

                  <Grid item xs={12} md={4} style={{ paddingLeft:'7%' }}>
                    <h4 style={{ fontFamily:'Josefin Sans', color:'#7d875f' }}> Shop Details </h4> 
                    <div id='addcont'>
                        <p> 12/24 </p>
                        <p> Vascodagam Street, </p>
                        <p> Jillianh, </p>
                        <p> Bangalore, </p>
                        <IconButton style={{paddingLeft:0, background:'none'}} >
                          <Instagram style={{ color: '#7d875f' }} />
                        </IconButton>
                        <IconButton style={{ background:'none'}}>
                          <Facebook style={{ color: '#7d875f' }} />                        
                        </IconButton>
                        <IconButton style={{ background:'none'}}>
                          <WhatsApp style={{ color: '#7d875f' }} />                    
                        </IconButton>
                      </div>
                  </Grid>

                  <Grid item xs={12} md={4}  style={{ textAlign:'center' }}>
                    <img src={logo} alt='' style={{ width:"60%" }}/>
                  </Grid>
                </Grid>
                <hr style={{marginBottom:'3%'}} />

                </div>
    )

}