
import Grid from '@mui/material/Grid';
import { Facebook, Instagram, WhatsApp } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import './procard.css';

export default function ProFooter(props){

    return(
        <div id='modal-footer' style={{ marginTop:"8%" }} >
                  <hr style={{marginBottom:'3%'}} />
                <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                  <Grid item xs={12} md={6}>
                    <h4 style={{ fontFamily:'Josefin Sans' }}> Boutique </h4> 
                    <div style={{lineHeight:2}} id='atagcont' >
                      <a href='./collections'> Collections </a> <br/>
                      <a href='./about'> About </a> <br/>
                      <a href='./contact'> Contact </a> <br/>
                      <a href='./policy'> Privacy Policy </a> <br/>
                    </div>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <h4 style={{ fontFamily:'Josefin Sans' }}> Shop Details </h4> 
                    <div id='addcont'>
                        <p> 12/24 </p>
                        <p> Vascodagam Street, </p>
                        <p> Jillianh, </p>
                        <p> Bangalore, </p>
                        <IconButton style={{paddingLeft:0, background:'none'}} >
                          <Instagram style={{ color: 'grey' }} />
                        </IconButton>
                        <IconButton style={{ background:'none'}}>
                          <Facebook style={{ color: 'grey' }} />                        
                        </IconButton>
                        <IconButton style={{ background:'none'}}>
                          <WhatsApp style={{ color: 'grey' }} />                    
                        </IconButton>
                      </div>
                  </Grid>
                </Grid>
                </div>
    )

}