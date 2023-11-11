import './procard.css';
import ProModal from './ProModal';
import { useEffect, useState } from 'react';

import {addToCart} from "../../../Slices/cartSlice";
import { useDispatch } from 'react-redux';
import SnackBar from './Snackbar';
import RPay from '../../RazorPay/RazorPay';


export default function ProCard(props){

    const name = props.title;
    const price = props.price;
    const allPrices =  Object.values(price).map(Number);
    const minetype = 'img/png';
    const img = props.ex_img ? props.ex_img : `data:${minetype};base64,${props.img}`;
    const size = props.size;

    const [open, setOpen] = useState(false);

    const handleOpen = () => { setOpen(true); };
    const handleClose = () => { setOpen(false) };    

    useEffect(()=>{ console.log(open) })

    const product = {
        id: props.id,
        img: img,
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

    console.log( price );
    console.log( Object.keys(price).find( key => price[key] === String(Math.min(...allPrices))) );

    return(
        <section id="pro-card">

            <div class="procontainer">
                <div id='card-img-cont'>
                    <img src={img} alt="" className='pro-img' onClick={handleOpen} style={{ cursor:'pointer' }}/>
                </div>

                <div id="bot-wrap">
                    <div style={{ display:'flex', flexDirection:'column', alignItems:'start', cursor:'pointer' }} onClick={handleOpen}>
                        <h5 style={{ fontFamily:'Schibsted Grotesk', marginBottom:0, fontSize:'1.7em', fontWeight:'bold' }}> {name} </h5>
                        <p style={{ fontFamily:'Josefin Sans', marginTop:0, marginBottom:0 }}> Starts from,  <span style={{color:'#7d875f', fontSize:'larger'}}> Rs. { Math.min(...allPrices) } </span> </p>  
                    </div>
                    <ul class="uk-iconnav">
                        <li><a style={{color:'black', cursor:'pointer'}} onClick={handleOpen} data-uk-icon="icon: eye; ratio:1.5"></a></li>
                    </ul>
                </div>
            </div>

            { open && <ProModal id={props.id} size={size}  title={name} img={img} open={open} price={price} color={props.color}
                                lSize={ Object.keys(price).find( key => price[key] === String(Math.min(...allPrices))) } 
                                handleClose={handleClose} 
                        /> }
            <SnackBar open={openCart} closeSnack={closeSnack} img={img} title={props.title}  />
            
        </section>
    )

}