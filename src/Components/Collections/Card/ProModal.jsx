import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Button, ButtonGroup, DialogContentText } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import './procard.css';
import Suggestion from './Suggestions';
import Footer from '../../Footer/Footer';

export default function ProModal(props) {


//   const [open, setOpen] = React.useState( props.open ? props.open : false );

  const handleClose = () => {
    props.handleClose(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (props.open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [props.open]);


  const [quantity, setQuant] = React.useState(1);
  const img = props.img;

  function increaseQ(){setQuant(quantity+1);}
  function decreaseQ(){setQuant(quantity-1);}

  return (
    <div>
        <Dialog
            open={props.open}
            onClose={handleClose}
            scroll={'paper'}
            fullScreen
        >
            <div style={{ display:'flex', justifyContent:'end' }}>

              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
            </div>
            <DialogContent style={{ padding:"5%" }}>
            <DialogContentText
                id="scroll-dialog-description"
                ref={descriptionElementRef}
                tabIndex={-1}
            >
               <Box style={{ width: '100%' }}>
                  <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 10 }}>
                    <Grid item xs={12} md={6} style={{justifyContent:'center', display:'flex', flexDirection:"column"}}>
                      <div id='card-img-cont'>
                        <img src={img} alt=''/>
                      </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <div>
                        <h1 style={{ fontFamily:'Josefin Sans', fontSize:'4em' }}> Onefir Requima </h1>
                        <p style={{ fontSize:'2em', color:'#7d875f', marginBottom:0, fontFamily:'Josefin Sans'}}> Rs.2599 </p> 
                        <p style={{ fontSize:"small", fontFamily:'Josefin Sans', marginTop:0}}> <span style={{ color:'#7d875f', borderBottom:'1px #7d875f solid' }}>shipping</span> amount varies. </p>
                        <p style={{ fontSize:'1.5em', color:"black", fontFamily:'Josefin Sans', marginTop:"10%" ,marginBottom:'1%'}}> Quantity </p>
                        <ButtonGroup variant="contained" aria-label="outlined primary button group" style={{borderRadius:0}}>
                          <Button variant="text" onClick={decreaseQ} style={{ background:"none", color:'black', border:'none'}}><span style={{width:'50%'}} uk-icon="minus"></span></Button>
                          <Button variant="text" disabled style={{ color:'black', border:'none'}}> {quantity} </Button>
                          <Button variant="text" onClick={increaseQ}  style={{ background:"none", color:'black', border:'none', borderRadius:0}}><span style={{width:'50%'}} uk-icon="plus"></span></Button>
                        </ButtonGroup>
                      </div>

                      <div className='btn-cont'>
                        <Button id='buynow' variant='outlined'> Buy Now </Button>
                        <Button id='tocart' variant='outlined'> Add to Cart </Button>
                      </div>

                      <p>
                        This anti fit top is meant to make you feel liberated in every way. Fashion that hold meaning and is effortless.
                      </p>
                    </Grid>
                  </Grid>
                </Box>
                <Suggestion />

                <Footer />
            </DialogContentText>
            </DialogContent>
        </Dialog>
    </div>
  );
}
