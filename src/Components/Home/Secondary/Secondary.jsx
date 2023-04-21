import { Grid } from '@mui/material'
import './sec.css'
import ProModal from '../../Collections/Card/ProModal'
import { useState } from 'react';

export default function Secondary(props){

    const [open, setOpen] = useState(false);

    const handleOpen = () => { setOpen(true); };
    const handleClose = () => { setOpen(false) };   

    return(
        <section id='secondary' data-uk-scrollspy="cls: uk-animation-fade; target: #sec-data; delay: 500;">
            <div style={{display:'flex', justifyContent:'space-between' ,alignItems:'baseline', margin:'7% 5% auto'}}>
                <h2> Today's Special </h2>
                <a id='sn' onClick={handleOpen}>  Shop Now <span id='arrow' uk-icon="arrow-right"></span> </a>
            </div>
            <div style={{ display:'flex', flexDirection:'column', textAlign:"center", paddingTop:'3%' }}>
                    <h2 id='td-name'> Hydri's Diuae </h2>
                    <h5 id='td-price'>  Rs. <span style={{textDecoration:'line-through'}}>3000</span>  2599 </h5>
            </div>
            <Grid container spacing={2} style={{ padding:'2% 10% 5%' }}>
                
                <Grid item xs={12} md={6} style={{width:"100%", alignItems:'center'}}>
                    <div id='sec-img-cont' style={{ display:"flex", justifyContent:"center" }}>
                        <img src='https://shaye.co.in/media/catalog/product/cache/94fdec3544d7f69f1b23d5186eb10bb6/a/a/aa03-2_1.jpg' alt='' />
                    </div>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Grid container spacing={1} id='sec-img-cont-2'>
                     <Grid item xs={6} md={12} lg={12} style={{height:"50%"}}>
                        <div id='gal-2' style={{ background:'url(https://shaye.co.in/media/catalog/product/cache/94fdec3544d7f69f1b23d5186eb10bb6/a/a/aa03-2_1.jpg)' }} > </div>
                     </Grid>

                     <Grid item xs={6} md={12} lg={12} style={{height:"50%"}}>
                        <div id='gal-3' style={{ background:'url(https://shaye.co.in/media/catalog/product/cache/94fdec3544d7f69f1b23d5186eb10bb6/a/a/aa03-2_1.jpg)' }} > </div>
                     </Grid>
                    </Grid>
                </Grid>

            </Grid>

            { open && <ProModal img={'https://shaye.co.in/media/catalog/product/cache/94fdec3544d7f69f1b23d5186eb10bb6/a/a/aa03-2_1.jpg'} open={open}  handleClose={handleClose} /> }

        </section>
    )

}