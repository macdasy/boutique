import "./bag.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Grid from '@mui/material/Grid';
import { Box, Button, ButtonGroup } from "@mui/material";
import Suggestions from '../Collections/Card/Suggestions';
import { useDispatch, useSelector } from "react-redux";
import { addToCart, clearCart, decreaseCart, removeFromCart } from "../../Slices/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function Cart(props) {

    
    const dispatch = useDispatch();

    function increaseQ(props){
        dispatch(addToCart({id:props.id}));
    }

    function deleteFromCart(props) {
        dispatch(removeFromCart({id:props.id}));
    }

    function emptyCart(props){ 
        dispatch(clearCart());
    }

    const count = useSelector((state) => state.cart.cartItems);
    const cartTotalAmount = useSelector((state) => state.cart.cartTotalAmount);

  return (
    <section id="cart">
      <Navbar />

      <div id="cart-sec">
        <h2 style={{fontFamily:"Josefin Sans", color:'#7d875f'}}> Cart </h2>

        <hr />
        
        { (count.length===0) ? ( 
            <Box sx={{ flexGrow: 1 }} style={{ margin:'auto', textAlign:'center', padding:"3%" }}>
                <h1 style={{fontFamily:"Josefin Sans"}} > Your cart is empty </h1>  
                <button onClick={()=>{ window.location.pathname='/shop' }} className="uk-button uk-button-secondary" style={{textTransform:"none", fontFamily:"Schibsted Grotesk"}}> Continue Shopping </button>
            </Box> 
            ) : (
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} style={{ paddingBottom:'1%' }} >
                     <Grid item xs={6} md={6}>
                        <div>
                            <h6> Product(s) </h6>
                            <hr />
                        </div>
                    </Grid>

                    <Grid item xs={1} md={3}>
                        <Box sx={{ display:{ xs:'none', sm: 'none', md:'block' } }}>
                            <h6> Quantity </h6>
                            <hr />
                        </Box>
                    </Grid>
                    <Grid item xs={5} md={3}>
                        <div style={{textAlign:"end"}}>
                                <h6> Total </h6>
                                <hr />
                        </div>
                    </Grid>
                </Grid>

                <Grid container spacing={2} style={{ paddingBottom:'5%', borderBottom:'1px solid #e5e5e5' }} >

            {count.map((d, index) => (
                    <>
                    <Grid item xs={6} md={6}>
                        <div>
                            <div style={{ display:"flex", gap:'30px' }}>
                                <img style={{width:"50px", height:'50px'}} src={d.img} alt='' />
                                <div style={{ display:"flex", flexDirection:"column" }}>
                                    <h5 id="cart-pro-name">  {d.name} </h5>
                                    <h6 id="cart-pro-price">  Rs. {d.price}  </h6>
                                    <Box sx={{ display:{ xs:'block', sm: 'block', md:'none' } }}>
                                        <h6> Quantity </h6>
                                        <div>
                                            <ButtonGroup variant="contained" aria-label="outlined primary button group" style={{ width:'100%', justifyContent: 'space-around', borderRadius:0}}>
                                                <Button variant="text" disableRipple onClick={()=>{ dispatch(decreaseCart({id:d.id})) }} style={{ background:"none", color:'black', border:'none'}}><span style={{width:'50%'}} uk-icon="minus"></span></Button>
                                                <Button variant="text"  disabled style={{ color:'black', border:'none'}}> {d.cartQuantity} </Button>
                                                <Button variant="text" disableRipple onClick={()=>{ dispatch(addToCart({id:d.id} )) }}  style={{ background:"none", color:'black', border:'none', borderRadius:0}}><span style={{width:'50%'}} uk-icon="plus"></span></Button>
                                            </ButtonGroup>
                                            <button className="uk-button uk-button-secondary" 
                                                onClick={()=>{ dispatch(removeFromCart({id:d.id} )) }}
                                                style={{ width:'100%', marginTop:'5%', textTransform:"none", fontFamily:"Schibsted Grotesk"}}> Remove </button>
                                            
                                        </div>

                                    </Box>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    
                    <Grid item xs={1} md={3}>
                        <Box sx={{ display:{ xs:'none', sm: 'none', md:'block' } }}>
                            <div>
                                <ButtonGroup variant="contained" aria-label="outlined primary button group" style={{borderRadius:0}}>
                                <Button variant="text" disableRipple onClick={()=>{ dispatch(decreaseCart({id:d.id})) }} style={{ background:"none", color:'black', border:'none'}}><span style={{width:'50%'}} uk-icon="minus"></span></Button>
                                <Button variant="text"  disabled style={{ color:'black', border:'none'}}> {d.cartQuantity} </Button>
                                <Button variant="text" disableRipple onClick={()=>{ dispatch(addToCart({id:d.id} ));}}  style={{ background:"none", color:'black', border:'none', borderRadius:0}}><span style={{width:'50%'}} uk-icon="plus"></span></Button>
                                </ButtonGroup>
                                <span onClick={()=>{ dispatch(removeFromCart({id:d.id} )) }}  style={{marginLeft:"5%", cursor:'pointer'}} uk-icon="icon: trash"></span>
                            </div>
                        </Box>
                    </Grid>
                    <Grid item xs={5} md={3}>
                        <div style={{textAlign:"end"}}>
                            <h5> Rs.{ (d.price)*(d.cartQuantity) } </h5>
                        </div>
                    </Grid>
                    <hr />
                </>
            ))}
                </Grid>

                <Box sx={{ padding:'5vh 5%', paddingRight:0, textAlign: 'right' }}>
                    <p style={{ marginBottom:'1%', fontSize:'medium', fontFamily:"Schibsted Grotesk" }}> Grand Total  <span style={{ paddingLeft:'1%', color:'#7d875f',fontSize:'x-large' }}>  Rs.{cartTotalAmount}  </span>  </p>
                    <p style={{ marginTop:0, marginBottom:'1%', fontSize:'small'}} > <span style={{textDecoration:'underline', color:'#7d875f', textDecorationColor:'#7d875f'}}>  shipping</span> charges will be calculated at the time of order placement. </p>
                    <button className="uk-button uk-button-secondary" 
                        onClick={ ()=>{window.location.pathname='/buynow'} }
                        style={{ background:'#7d875f', fontSize:'medium', textTransform:"none", fontFamily:"Schibsted Grotesk"}}> Check out 
                    </button>
                </Box>

                <Box sx={{marginTop:'5vh'}}>
                    <h2 style={{ marginBottom:'0%', fontFamily:"Josefin Sans", color:'#7d875f'}}> Continue Shopping </h2>
                    <p style={{ marginTop:0, fontFamily:"Josefin Sans"}}> Join the world of fashion! </p>
                    <Suggestions fromCart />
                </Box>
            </Box>
            )

        }
      </div>
      <Footer />
    </section>
  );
}
