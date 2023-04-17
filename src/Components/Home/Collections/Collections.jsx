import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import './collections.css';

export default function  Collections(props){

    const goCltns = (e) => {
        window.location.pathname = '/collections';
    }

    return(
        <section id='collections-section'>

            <h4 id='collections'> Collections </h4>
            <Box sx={{ width: '100%' }} data-uk-scrollspy="cls: uk-animation-fade; target: #coll-row; delay: 500;">
                <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }} id='coll-row'>
                    <Grid item xs={12} md={4}  style={{ textAlign: 'center'}}>
                            <img className='col-img' src='https://cdn.shopify.com/s/files/1/0570/6543/9392/products/women-woven-design-cotton-blend-ethereal-embroidery-kurta-set-330160_650x.jpg?v=1659360083' alt=''/>
                            <p className='collct'> Kurtas </p>
                            <Button id='collbtn' onClick={goCltns}> View Collections </Button>
                    </Grid>
                    <Grid item xs={12} md={4}  style={{ textAlign: 'center'}}>
                        <img className='col-img' src='https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/18960910/2022/7/18/662aad9f-3356-4690-8ea2-412df19d24421658137700086-Anouk-Women-Kurta-Sets-2521658137699547-1.jpg' alt=''/>
                        <p className='collct'> Kurta Sets </p>
                        <Button id='collbtn' onClick={goCltns}> View Collections </Button>
                    </Grid>
                    <Grid item xs={12} md={4}  style={{ textAlign: 'center'}}>
                        <img className='col-img' src='https://img.tatacliq.com/images/i8/437Wx649H/MP000000013860940_437Wx649H_202207211525131.jpeg' alt=''/>
                        <p className='collct'> Tops </p>
                        <Button id='collbtn' onClick={goCltns}> View Collections </Button>
                    </Grid>
                </Grid>
             </Box>

        </section>
    )

}
