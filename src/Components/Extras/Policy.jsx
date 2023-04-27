import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import './extra.css';
import { About, Contact, FN, PP, RRP, SHP, TNC, WNC } from './Extras';

export default function Policy(props) {

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
 
  const handleClose = () => props.handleClose();

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={props.open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        style={{borderRadius:'0px'}}
      >
        <DialogTitle id="responsive-dialog-title">
          {
            props.tag === 'fn' ? "Founder's Note":
            props.tag === 'rrp' ? "Return & Refund Policy":
            props.tag === 'shp' ? "Shipping Policy":
            props.tag === 'wnc' ? "Wash & Care Instructions":
            props.tag === 'tnc' ? "Terms & Conditions":
            props.tag === 'pp' ? "Privacy Policy":
            props.tag === 'contact' ? "Contact":
            "About"
          }
        </DialogTitle>
        <DialogContent dividers>
          <DialogContentText>
            <div id='e-cont' style={{padding:0}}>
            {
                props.tag === 'fn' ? <FN />:
                props.tag === 'rrp' ? <RRP />:
                props.tag === 'shp' ? <SHP />:
                props.tag === 'wnc' ? <WNC />:
                props.tag === 'tnc' ? <TNC />:
                props.tag === 'pp' ? <PP />:
                props.tag === 'contact' ? <Contact />:
                <About />
            }
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <button onClick={handleClose} className='uk-button uk-button-secondary' style={{textTransform:'capitalize'}}>
            Understood
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
