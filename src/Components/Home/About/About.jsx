import { Button, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './about.css';


const details = {
    0: ['Comfort', 'Find what comforts you!', 'https://media.istockphoto.com/id/1164504532/vector/illustration-of-a-sad-girl-in-a-yellow-raincoat-vector-a-woman-under-an-umbrella-in-rainy.jpg?s=612x612&w=0&k=20&c=xUADieghGLlxzUJzgSBT9J5TXw4gnhaWP5uzpBcnilM='],
    1: ['Elegant', 'That is our special!', 'https://cdn.dribbble.com/users/1731254/screenshots/13960747/media/e0bb9ddb0154a4df37c9d48b1613f43f.png?compress=1&resize=400x300'],
    2: ['Price', 'As you wish!', 'https://img.freepik.com/free-vector/sales-promotion-cartoon-web-icon-marketing-strategy-rebate-advertising-discount-offer-low-price-idea-clearance-sale-customer-attraction-vector-isolated-concept-metaphor-illustration_335657-2752.jpg?w=2000'],
}


export default function  About(props){

    return(
        <section id='about-section'>

            <h4 id='about'> About Us  </h4>

            <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }} columns={{ xs: 1, sm: 6, md: 12 }} style={{ padding:'3% 0' }}>
            {Object.keys(details).map((d, index) => (
                <Grid item xs={2} sm={4} md={4} key={index} style={{padding:'3% 2%'}}>
                    <Card sx={{ maxWidth: '100%' }} id='about-card' style={{padding:'7%10%'}}>
                    <CardMedia
                        sx={{ height: 300 }}
                        image={details[d][2]}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" style={{ fontFamily: 'Rowdies' }}>
                            {details[d][0]}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" style={{ fontFamily: 'Tilt Neon' }}>
                            {details[d][1]}
                        </Typography>
                    </CardContent>
                    </Card>
                </Grid>
            ))}
            </Grid>
            {/* <p> <Button id='about-btn'> Know More </Button> </p> */}

        </section>
    )

}