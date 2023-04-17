import { Button, IconButton } from '@mui/material';
import './procard.css';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

export default function ProCard(props){

    const name = props.title;
    const price = props.price;
    const img = props.img;
    const handleFav = props.handleFav;

    return(
        <section id="pro-card">

            <div class="procontainer">
                <img src={img} alt="" />

                <IconButton color="secondary" className='fav-icon' onClick={handleFav}>
                    <FavoriteBorderOutlinedIcon id='1' />
                </IconButton>

                <div id="bot-wrap">
                    <div style={{ display:'flex', flexDirection:'column', alignItems:'start' }}>
                        <h5 style={{ fontFamily:'Josefin Sans', marginBottom:0 }}> {name} </h5>
                        <p style={{ fontFamily:'Josefin Sans', marginTop:0 }}> Rs. {price} </p>  
                    </div>
                    <Button id='addtocart'> Add To Cart </Button>
                </div>
            </div>

        </section>
    )

}