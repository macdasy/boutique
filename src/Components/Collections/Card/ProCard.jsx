import { Button, IconButton } from '@mui/material';
import './procard.css';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ProModal from './ProModal';
import { useEffect, useState } from 'react';

import {addToCart} from "../../../Slices/cartSlice";
import { useDispatch, useSelector } from 'react-redux';
import SnackBar from './Snackbar';


export default function ProCard(props){

    const name = props.title;
    const price = props.price;
    const img = props.img;
    const size = props.size;

    const [open, setOpen] = useState(false);

    const handleOpen = () => { setOpen(true); };
    const handleClose = () => { setOpen(false) };    

    useEffect(()=>{ console.log(open) })

    const product = {
        id: props.id,
        img: props.img,
        price: props.price,
        name:props.title
    };

    const [openCart, handleSnack] = useState(false);
    const closeSnack = () => handleSnack(false);

    const dispatch = useDispatch();
    const handleAddToCart = () => {
        handleSnack(true);
        dispatch(addToCart(product));
    };

    return(
        <section id="pro-card">

            <div class="procontainer">
                <div id='card-img-cont'>
                    <img src={img} alt="" className='pro-img' onClick={handleOpen} style={{ cursor:'pointer' }}/>
                </div>

                <div id="bot-wrap">
                    <div style={{ display:'flex', flexDirection:'column', alignItems:'start' }}>
                        <h5 style={{ fontFamily:'Josefin Sans', marginBottom:0 }}> {name} </h5>
                        <p style={{ color:'#7d875f', fontFamily:'Josefin Sans', marginTop:0 }}> Rs. {price} </p>  
                    </div>
                    <ul class="uk-iconnav">
                        <li><a style={{color:'black'}} onClick={handleAddToCart} data-uk-icon="icon: bag"></a></li>
                    </ul>
                </div>
            </div>

            { open && <ProModal size={size}  title={name} img={props.img} open={open}  handleClose={handleClose} /> }
            <SnackBar open={openCart} closeSnack={closeSnack} img={img} title={props.title}  />
            
        </section>
    )

}