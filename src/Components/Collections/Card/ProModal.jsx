import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Button, Chip, DialogContentText } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import './procard.css';
import Suggestion from './Suggestions';
import Footer from '../../Footer/Footer';
import SnackBar from './Snackbar';
import {
  addToCart
} from "../../../Slices/cartSlice";
import { useDispatch, useSelector } from 'react-redux';
import RPay from '../../RazorPay/RazorPay';

export default function ProModal(props) {

  const { items: products, state } = useSelector((state) => state.products);
  const dispatch = useDispatch();

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


  const img = props.img;

  const [openCart, handleSnack] = React.useState(false);
  const closeSnack = () => handleSnack(false);


  const [activeS, setAS] = React.useState(String(props.lSize));
  // console.log(String(props.lSize));

  function handleSizePrice(e) {
    setAS( e.target.id || e.target.innerHTML );
    // console.log (e.target.id ? e.target.id : e.target.innerHTML );
  }

  const handleCart = () =>{

    const product = {
      id:props.id,
      img: props.img,
      price: props.price[activeS],
      size: activeS,
      name:props.title
    };

    console.log(product);

    handleSnack(true);
    dispatch(addToCart(product));
  }

  const sortBy = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  const price = props.price;
  const size  = props.size.sort((a,b) => sortBy.indexOf(a) - sortBy.indexOf(b)) ;

  // console.log(size);
  // console.log(props.price[activeS]);
  // console.log(props.price);
  // console.log(activeS);
  // const price = {
  //   'S' : 1200,
  //   'M' : 1500,
  //   'L' : 1800
  // }
  // const size = ['S','M','L'];

  // console.log(price, size);


  return (
    <div>
        <Dialog
            open={props.open}
            onClose={handleClose}
            scroll={'paper'}
            fullScreen
        >
            <div style={{ display:'flex', justifyContent:'end', background:"transparent" }}>

              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
            </div>
            <DialogContent  style={{padding:0}}>
            <DialogContentText
                style={{ padding:"5%" }}
                id="scroll-dialog-description"
                ref={descriptionElementRef}
                tabIndex={-1}
            >
               <Box style={{ width: '100%' }}>
                  <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 10 }}>
                    <Grid item xs={12} md={6} style={{justifyContent:'flex-start', display:'flex', flexDirection:"column"}}>
                      <div id='card-img-cont'>
                        <img src={img} alt='' id='hover-point-img'/>
                      </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <div>
                        <h1 style={{ fontFamily:'Josefin Sans', fontSize:'4em' }}> {props.title} </h1>
                        <p style={{ fontSize:'1.3em', color:'#000', marginBottom:0, fontFamily:'Josefin Sans'}}> Rs. <span style={{color:'#7d875f', fontSize:'2em'}}> {price[activeS]}  </span></p> 
                        <p style={{ fontSize:"small", fontFamily:'Josefin Sans', marginTop:0}}> <span style={{ color:'#7d875f', borderBottom:'1px #7d875f solid' }}>shipping</span> amount varies. </p>
                      </div>

                      <div>
                        <h4 style={{ fontFamily:'Josefin Sans', marginTop:'7%' }} > Available Sizes </h4>

                          { size.map((s, i) => {
                             return <Chip 
                                      style={{ marginRight:'2%', padding:'0 1%' }}
                                      label={s} 
                                      variant={ (s!==activeS) ? "outlined" : " " }  
                                      clickable={s!==activeS}
                                      id={s} 
                                      onClick={ s!==activeS && handleSizePrice}
                                    />
                          })}

                      </div>

                      <div>
                        <h4 style={{ fontFamily:'Josefin Sans', marginTop:'7%' }} > Available Colors </h4>

                          { props.color.map((c, i) => {
                             return <Chip 
                                      style={{ marginRight:'2%', padding:'0 1%', background:c }}
                                      label={c}
                                    />
                          })}

                      </div>

                      <div className='btn-cont'>
                        <Button id='buynow' variant='outlined'> Buy Now </Button>
                        {/* <RPay /> */}
                        
                        {/* <Button id='tocart' variant='outlined' onClick={handleAddToCart(props)} > Add to Cart </Button> */}
                        <Button id='tocart' variant='outlined' onClick={handleCart} > Add to Cart </Button>
                      </div>

                      <p>
                        This anti fit top is meant to make you feel liberated in every way. Fashion that hold meaning and is effortless.
                      </p>
                    </Grid>
                  </Grid>
                  <SnackBar open={openCart} closeSnack={closeSnack} img={img} title={props.title}  />
                </Box>
                <Suggestion />

            </DialogContentText>
              <Footer />
            </DialogContent>
        </Dialog>
    </div>
  );
}
