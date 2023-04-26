import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import { Fade, Slide, SnackbarContent } from '@mui/material';
import './procard.css';
import { Button } from 'uikit-react';

export default function SnackBar(props) {

    const vertical = 'top';
    const horizontal = 'right';
    const handleClose = () => props.closeSnack();

    const goToCart = () => {
        window.location.pathname = '/cart';
    }
    

    const action = (
            <div className="uk-card uk-card-default" style={{width:'inherit'}}>
                <div className="uk-card-header">
                        <p style={{color:'black', fontFamily:'Schibsted Grotesk'}} > <span uk-icon='icon: check'></span> Item added to cart.</p>
                        <button onClick={handleClose} type="button" aria-label="Close" data-uk-close style={{color:'black',position:'absolute', top:'5px', right:'15px'}} />

                    <div className="uk-grid-small uk-flex-middle" data-uk-grid>
                        <div className="uk-width-auto">
                            <img width="40" height="40" src={props.img} alt="Avatar" />
                        </div>
                        <div className="uk-width-expand">
                            <h3 className="uk-card-title uk-margin-remove-bottom" style={{fontFamily:'Josefin Sans'}} >{props.title}</h3>
                        </div>
                    </div>
                </div>
                <div className="uk-card-body">
                    <div className='btn-cont-card'>
                        <Button id='buynow' variant='outlined' onClick={goToCart} style={{fontFamily:'Schibsted Grotesk'}}  > View Cart </Button>
                        <Button id='tocart' variant='outlined'  style={{fontFamily:'Schibsted Grotesk'}} > Check Out </Button>
                      </div>
                </div>
                <div className="uk-card-footer">
                    <button onClick={handleClose} className="uk-button" style={{ fontFamily:'Schibsted Grotesk', display: 'block', margin:'auto',padding:0,textDecoration:'underline',background:'none', color:'black',textTransform:'capitalize'}} > Continue Shopping </button>
                </div>
            </div>
    );

    return (
        <div>
        <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={props.open}
            TransitionComponent={Fade}
            transitionDuration={450}
            onClose={handleClose}
            message="I love snacks"
            key={vertical+ horizontal}
        >
          <SnackbarContent message={action} style={{ display:'block',background:'none', borderRadius:0, padding:0, minWidth:'300px'}} />
        </Snackbar>
        </div>
    );
}