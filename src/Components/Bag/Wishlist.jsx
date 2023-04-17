import { Button } from "@mui/material";
import './bag.css';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


export default function Wishlist(props){


    return(
        <section id="wishlist">
           <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image="https://cdn.dribbble.com/users/860366/screenshots/6364054/desolazione_empty_1.gif"
                title="green iguana"
            />
            <CardContent style={{ padding:'10%' }}>
                <Typography gutterBottom variant="h5" component="div" style={{ textAlign:'center', fontFamily:'Josefin Sans', fontWeight:'bolder' }}>
                 Wishlist is empty
                </Typography>
                <Typography variant="body2" color="text.secondary" style={{ textAlign:'center', fontFamily:"Tilt Neon" }}>
                    Your shoplist is empty. Items will be added in wishlist once you like them!
                </Typography>
            </CardContent>
            <CardActions style={{ justifyContent:'center', gap:"10px" }}>
                <a href="/collections"> <Button size="small" id="w-shop" > Shop </Button> </a>
                <a href="/cart"> <Button size="small" id="w-cart" > Cart </Button> </a>
            </CardActions>
            </Card>
        </section>
    )

}


