import { Button } from "@mui/material";
import './bag.css';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


export default function Cart(props){


    return(
        <section id="wishlist">
           <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image="https://cdn.dribbble.com/users/5107895/screenshots/14532312/media/a7e6c2e9333d0989e3a54c95dd8321d7.gif"
            />
            <CardContent style={{ padding:'10%' }}>
                <Typography gutterBottom variant="h5" component="div" style={{ textAlign:'center', fontFamily:'Josefin Sans', fontWeight:'bolder' }}>
                 Cart is empty
                </Typography>
                <Typography variant="body2" color="text.secondary" style={{ textAlign:'center', fontFamily:"Tilt Neon" }}>
                    Your shoplist is empty. Items will be added in cart once you added them!
                </Typography>
            </CardContent>
            <CardActions style={{ justifyContent:'center', gap:"10px" }}>
                <a href="/collections"> <Button size="small" id="w-shop" > Shop </Button> </a>
                <a href="/favourites"> <Button size="small" id="w-cart" > Wishlist </Button> </a>
            </CardActions>
            </Card>
        </section>
    )

}


