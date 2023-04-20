import { Grid } from '@mui/material'
import './sec.css'

export default function Secondary(props){

    return(
        <section id='secondary' data-uk-scrollspy="cls: uk-animation-fade; target: #sec-data; delay: 500;">
            <div style={{display:'flex', justifyContent:'space-between' ,alignItems:'baseline'}}>
                <h2> Today's Special </h2>
                <div style={{ display:'flex', flexDirection:'column', textAlign:"center" }}>
                    <h2 id='td-name'> Hydri's Diuae </h2>
                    <h5 id='td-price'>  Rs. <span style={{textDecoration:'line-through'}}>3000</span>  2599 </h5>
                </div>
                <a href='/' id='sn'>  Shop Now <span id='arrow' uk-icon="arrow-right"></span> </a>
            </div>
            <Grid container spacing={2} style={{ padding:'2% 10% 5%' }}>
                
                <Grid item xs={12} md={6} style={{width:"100%", alignItems:'center'}}>
                    <div id='sec-img-cont' style={{ display:"flex", justifyContent:"center" }}>
                        <img src='https://shaye.co.in/media/catalog/product/cache/94fdec3544d7f69f1b23d5186eb10bb6/a/a/aa03-2_1.jpg' alt='' />
                    </div>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Grid container spacing={1} id='sec-img-cont-2'>
                     <Grid item xs={12} md={6} lg={12} style={{height:"50%"}}>
                        <div id='gal-2' style={{ background:'url(https://shaye.co.in/media/catalog/product/cache/94fdec3544d7f69f1b23d5186eb10bb6/a/a/aa03-2_1.jpg)' }} > </div>
                     </Grid>

                     <Grid item xs={12} md={6} lg={12} style={{height:"50%"}}>
                        <div id='gal-3' style={{ background:'url(https://shaye.co.in/media/catalog/product/cache/94fdec3544d7f69f1b23d5186eb10bb6/a/a/aa03-2_1.jpg)' }} > </div>
                     </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </section>
    )

}