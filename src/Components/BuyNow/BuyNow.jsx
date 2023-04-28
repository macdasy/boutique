import "./buynow.css";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Slide } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import CheckOutCard from "./CheckOutCard";
import { forwardRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";


export default function BuyNow(props) {

  const [submit, canSubmit] = useState(false);
  const [submitted, isSubmitted] = useState(false);

  const [ fName, setFName ] = useState('');
  const [ sName, setSName ] = useState('');
  const [ address, setAddress ] = useState('');
  const [ city, setCity ] = useState('');
  const [ state, setState ] = useState('');
  const [ pcode, setPCode ] = useState(Number);

  const [modal, openM] = useState(false);

  const handleSubmit = ()=> { console.log('helo'); isSubmitted(true) };
  useEffect(()=>{ console.log(submitted); })

  useEffect(()=>{
    if( fName && sName && address && city && state && pcode && !submitted ) canSubmit(true);
    else canSubmit(false);
  })

  const count = useSelector((state) => state.cart.cartItems);
  const cartTotalAmount = useSelector((state) => state.cart.cartTotalAmount);
  
  return (
    <section id="buynow-sec">
      <Navbar />
      <Grid container rowSpacing={6} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} sm={12} md={12} lg={8} style={{padding:'5%', paddingTop:0}}>
          <h3 style={{marginBottom:0}} > Shipping Address </h3>
          <p style={{marginTop:'1%',fontSize:'small'}}> <span style={{color:'#8bb900', opacity:1}}> Note: </span> Once you have submitted the address, it can not be edited! </p>
          <form class="uk-grid-small" data-uk-grid>

              <div class="uk-width-1-2@s">
                  <label class="uk-form-label" for="fname">First Name*</label>
                  <input disabled={submitted} class="uk-input" id='fname' type="text" aria-label="100" value={fName} onChange={(e)=>{setFName(e.target.value)}} />
              </div>
              <div class="uk-width-1-2@s">
                  <label class="uk-form-label" for="lname">Last Name</label>
                  <input disabled={submitted} class="uk-input" id="lname" type="text"  aria-label="50" value={sName} onChange={(e)=>{setSName(e.target.value)}}  />
              </div>
              <div class="uk-width-3-4@s">
                  <label class="uk-form-label" for="address">Address</label>
                  <input disabled={submitted} class="uk-input" id='address' type="text"  aria-label="25" value={address} onChange={(e)=>{setAddress(e.target.value)}} />
              </div>
              <div class="uk-width-1-4@s">
                  <label class="uk-form-label" for="city">City</label>
                  <input disabled={submitted} class="uk-input" id='city' type="text"  aria-label="25" value={city} onChange={(e)=>{setCity(e.target.value)}} />
              </div>
              <div class="uk-width-1-2@s">
                <label class="uk-form-label" for="state">State</label>
                  <input disabled={submitted} class="uk-input" id='state' type="text"  aria-label="50" value={state} onChange={(e)=>{setState(e.target.value)}}/>
              </div>
              <div class="uk-width-1-2@s">
                  <label class="uk-form-label" for="pcode">Postal Code</label>
                  <input disabled={submitted} class="uk-input" id='pcode' type="number"
                          onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
                          aria-label="50" value={pcode} onChange={(e)=>{setPCode(e.target.value)}} />
              </div>
          </form>
          <div style={{textAlign:'end'}}>
            <button className="uk-button uk-button-secondary" onClick={()=>{openM(true);}} disabled={!submit} style={{textAlign:'center', marginTop:'3%', textTransform:'capitalize'}}> Submit </button>
            <AlertDialogSlide open={modal} close={()=>{openM(false)}} submit={handleSubmit} />
          </div>
          </Grid>

        <Grid item xs={12} sm={12} md={12} lg={4} style={{padding:0}}>
          <CheckOutCard isSubmitted={submitted} count={count} />
        </Grid>
      </Grid>
    </section>
  );
}

function AlertDialogSlide(props) {

  const handleSubmit = () => { props.close(); props.submit(); };

  return (
    <div>
      <Dialog
        open={props.open}
        transitionDuration={500}
        keepMounted
        onClose={()=>{props.close()}}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button disableRipple style={{textAlign:'center', borderRadius:0, border:'1px solid #7d875f', color:'#7d875f', padding:'3%4%', textTransform:'capitalize'}} onClick={()=>{props.close()}}>Cancel</Button>
            <Button style={{textAlign:'center', borderRadius:0, background:'#7d875f', color:'white', padding:'3%4%', textTransform:'capitalize'}} onClick={handleSubmit}>Confirm</Button> 
        </DialogActions>
      </Dialog>
    </div>
  );
}