import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import ProCard from './ProCard';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Suggestion(props){

    return(
        <section id="suggestions" style={{ marginTop:"5%" }}>

            <h3 style={{ fontFamily:'Josefin Sans' }}> You might also like </h3>

            <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
                <Grid item xs={6} md={3}>
                    <ProCard size={{}} title='Lehnga' img={'https://cdn.shopify.com/s/files/1/0610/4393/3368/products/Advitiya23993E_360x.jpg?v=1675854664'} price={2900} />
                </Grid>
                <Grid item xs={6} md={3}>
                    <ProCard size={{}} title='Jeship skaio' img={'https://cdn.shopify.com/s/files/1/0610/4393/3368/products/Ciceroni29417E_360x.jpg?v=1643274141'} price={2900} />
                    
                </Grid>
                <Grid item xs={6} md={3}>
                    <ProCard size={{}} title='edhio iogn' img={'https://cdn.shopify.com/s/files/1/0610/4393/3368/products/Advitiya23975E_360x.jpg?v=1675853786'} price={2900} />
                </Grid>
                <Grid item xs={6} md={3}>
                    <ProCard size={{}} title='wasd ewoi' img={'https://cdn.shopify.com/s/files/1/0610/4393/3368/products/152009912138_360x.jpg?v=1646725540'} price={2900} />
                
                </Grid>
            </Grid>
            </Box>


        </section>
    )

}