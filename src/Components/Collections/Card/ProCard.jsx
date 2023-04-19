import { Button, IconButton } from '@mui/material';
import './procard.css';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ProModal from './ProModal';
import { useEffect, useState } from 'react';

export default function ProCard(props){

    const name = props.title;
    const price = props.price;
    const img = props.img;
    const handleFav = props.handleFav;

    const [open, setOpen] = useState(false);

    const handleOpen = () => { setOpen(true); };
    const handleClose = () => { setOpen(false) };    

    useEffect(()=>{ console.log(open) })

    return(
        <section id="pro-card">

            <div class="procontainer">
                <div id='card-img-cont'>
                    <img src={img} alt="" className='pro-img' onClick={handleOpen} style={{ cursor:'pointer' }}/>
                </div>

                <div id="bot-wrap">
                    <div style={{ display:'flex', flexDirection:'column', alignItems:'start' }}>
                        <h5 style={{ fontFamily:'Josefin Sans', marginBottom:0 }}> {name} </h5>
                        <p style={{ fontFamily:'Josefin Sans', marginTop:0 }}> Rs. {price} </p>  
                    </div>
                    <ul class="uk-iconnav">
                        <li><a style={{color:'black'}} onClick={handleFav} data-uk-icon="icon: heart"></a></li>
                        <li><a style={{color:'black'}} uk-icon="icon: social"></a></li>
                    </ul>
                </div>
            </div>

            { open && <ProModal img={props.img} open={open}  handleClose={handleClose} /> }

        </section>
    )

}