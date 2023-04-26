import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import './collections.css';

import Procard from '../../Collections/Card/ProCard';

export default function  Collections(props){

    const goCltns = (e) => {
        window.location.pathname = '/collections';
    }

    return(
        <section id='collections-section'>

            <h4 id='collections'> Collections </h4>
            <Box sx={{ width: '100%' }} data-uk-scrollspy="cls: uk-animation-fade; target: #coll-row; delay: 500;">
                <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }} id='coll-row'>
                    <Grid item xs={6} md={6} lg={3} style={{ textAlign: 'center'}}>
                        <Procard id='1' title='Lehanga' price={2000} img='https://cdn.shopify.com/s/files/1/1231/6442/products/cottonworld-women-s-kurtis-women-s-cotton-blue-regular-fit-kurta-14295359750197.jpg?v=1586401406' alt='' />
                    </Grid>
                    <Grid item xs={6} md={6} lg={3} style={{ textAlign: 'center'}}>
                        <Procard id='2' title='Multicolor Tops' price={2300} img='https://shaye.co.in/media/catalog/product/cache/94fdec3544d7f69f1b23d5186eb10bb6/a/a/aa03-2_1.jpg' alt='' />
                    </Grid>
                    <Grid item xs={6} md={6} lg={3} style={{ textAlign: 'center'}}>
                        <Procard id='3' title='A-Line Kurta' price={1599} img='https://assets.ajio.com/medias/sys_master/root/20220405/ixIt/624c4b1eaeb26921af0bd093/-473Wx593H-464124181-white-MODEL.jpg' alt='' />
                    </Grid>
                    <Grid item xs={6} md={6} lg={3} style={{ textAlign: 'center'}}>
                        <Procard id='4' title='Kurta Set' price={3000} img='https://img.tatacliq.com/images/i9/437Wx649H/MP000000016265472_437Wx649H_202301291513431.jpeg' alt='' />
                    </Grid>
                </Grid>
                <button onClick={goCltns} id='shopall' class="uk-button uk-button-secondary">View All</button>
             </Box>

        </section>
    )

}
