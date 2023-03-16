import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './CollectionsPage.css';
import { Box, Grid } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Container from '@mui/material/Container';

function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
};

export default function CollectionsPage(props){

    return(
        <section id='CollectionsPage'>

<React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar>
            <Typography variant="h6" component="div">
              Scroll to elevate App bar
            </Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <Container>
      <Box sx={{ my: 2 }}>

                <Box sx={{ width: '100%' }}>
                    <Grid container rowSpacing={10} columnSpacing={{ xs: 1, sm: 2, md: 10 }}>
                        <Grid item xs={12} md={4}  style={{ textAlign: 'center'}}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardHeader
                                style={{ textAlign:'left' }}
                                action={
                                <IconButton aria-label="settings">
                                    <FavoriteIcon />
                                </IconButton>
                                }
                                title="Shrimp and Chorizo"
                                subheader="September 14, 2016"
                            />
                            <CardMedia
                                component="img"
                                height="200"
                                image="https://img.tatacliq.com/images/i8/437Wx649H/MP000000013860940_437Wx649H_202207211525131.jpeg"
                                alt="Paella dish"
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                This impressive paella is a perfect party dish and a fun meal to cook
                                together with your guests. Add 1 cup of frozen peas along with the mussels,
                                if you like.
                                </Typography>
                            </CardContent>
                        </Card>
                        </Grid>

                        <Grid item xs={12} md={4}  style={{ textAlign: 'center'}}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardHeader
                                style={{ textAlign:'left' }}
                                action={
                                <IconButton aria-label="settings">
                                    <FavoriteIcon />
                                </IconButton>
                                }
                                title="Shrimp and Chorizo"
                                subheader="September 14, 2016"
                            />
                            <CardMedia
                                component="img"
                                height="200"
                                image="https://img.tatacliq.com/images/i8/437Wx649H/MP000000013860940_437Wx649H_202207211525131.jpeg"
                                alt="Paella dish"
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                This impressive paella is a perfect party dish and a fun meal to cook
                                together with your guests. Add 1 cup of frozen peas along with the mussels,
                                if you like.
                                </Typography>
                            </CardContent>
                        </Card>
                        </Grid>

                        <Grid item xs={12} md={4}  style={{ textAlign: 'center'}}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardHeader
                                style={{ textAlign:'left' }}
                                action={
                                <IconButton aria-label="settings">
                                    <FavoriteIcon />
                                </IconButton>
                                }
                                title="Shrimp and Chorizo"
                                subheader="September 14, 2016"
                            />
                            <CardMedia
                                component="img"
                                height="200"
                                image="https://img.tatacliq.com/images/i8/437Wx649H/MP000000013860940_437Wx649H_202207211525131.jpeg"
                                alt="Paella dish"
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                This impressive paella is a perfect party dish and a fun meal to cook
                                together with your guests. Add 1 cup of frozen peas along with the mussels,
                                if you like.
                                </Typography>
                            </CardContent>
                        </Card>
                        </Grid>

                        <Grid item xs={12} md={4}  style={{ textAlign: 'center'}}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardHeader
                                style={{ textAlign:'left' }}
                                action={
                                <IconButton aria-label="settings">
                                    <FavoriteIcon />
                                </IconButton>
                                }
                                title="Shrimp and Chorizo"
                                subheader="September 14, 2016"
                            />
                            <CardMedia
                                component="img"
                                height="200"
                                image="https://img.tatacliq.com/images/i8/437Wx649H/MP000000013860940_437Wx649H_202207211525131.jpeg"
                                alt="Paella dish"
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                This impressive paella is a perfect party dish and a fun meal to cook
                                together with your guests. Add 1 cup of frozen peas along with the mussels,
                                if you like.
                                </Typography>
                            </CardContent>
                        </Card>
                        </Grid>


                        <Grid item xs={12} md={4}  style={{ textAlign: 'center'}}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardHeader
                                style={{ textAlign:'left' }}
                                action={
                                <IconButton aria-label="settings">
                                    <FavoriteIcon />
                                </IconButton>
                                }
                                title="Shrimp and Chorizo"
                                subheader="September 14, 2016"
                            />
                            <CardMedia
                                component="img"
                                height="200"
                                image="https://img.tatacliq.com/images/i8/437Wx649H/MP000000013860940_437Wx649H_202207211525131.jpeg"
                                alt="Paella dish"
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                This impressive paella is a perfect party dish and a fun meal to cook
                                together with your guests. Add 1 cup of frozen peas along with the mussels,
                                if you like.
                                </Typography>
                            </CardContent>
                        </Card>
                        </Grid>



                        <Grid item xs={12} md={4}  style={{ textAlign: 'center'}}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardHeader
                                style={{ textAlign:'left' }}
                                action={
                                <IconButton aria-label="settings">
                                    <FavoriteIcon />
                                </IconButton>
                                }
                                title="Shrimp and Chorizo"
                                subheader="September 14, 2016"
                            />
                            <CardMedia
                                component="img"
                                height="200"
                                image="https://img.tatacliq.com/images/i8/437Wx649H/MP000000013860940_437Wx649H_202207211525131.jpeg"
                                alt="Paella dish"
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                This impressive paella is a perfect party dish and a fun meal to cook
                                together with your guests. Add 1 cup of frozen peas along with the mussels,
                                if you like.
                                </Typography>
                            </CardContent>
                        </Card>
                        </Grid>


                        <Grid item xs={12} md={4}  style={{ textAlign: 'center'}}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardHeader
                                style={{ textAlign:'left' }}
                                action={
                                <IconButton aria-label="settings">
                                    <FavoriteIcon />
                                </IconButton>
                                }
                                title="Shrimp and Chorizo"
                                subheader="September 14, 2016"
                            />
                            <CardMedia
                                component="img"
                                height="200"
                                image="https://img.tatacliq.com/images/i8/437Wx649H/MP000000013860940_437Wx649H_202207211525131.jpeg"
                                alt="Paella dish"
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                This impressive paella is a perfect party dish and a fun meal to cook
                                together with your guests. Add 1 cup of frozen peas along with the mussels,
                                if you like.
                                </Typography>
                            </CardContent>
                        </Card>
                        </Grid>

                        <Grid item xs={12} md={4}  style={{ textAlign: 'center'}}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardHeader
                                style={{ textAlign:'left' }}
                                action={
                                <IconButton aria-label="settings">
                                    <FavoriteIcon />
                                </IconButton>
                                }
                                title="Shrimp and Chorizo"
                                subheader="September 14, 2016"
                            />
                            <CardMedia
                                component="img"
                                height="200"
                                image="https://img.tatacliq.com/images/i8/437Wx649H/MP000000013860940_437Wx649H_202207211525131.jpeg"
                                alt="Paella dish"
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                This impressive paella is a perfect party dish and a fun meal to cook
                                together with your guests. Add 1 cup of frozen peas along with the mussels,
                                if you like.
                                </Typography>
                            </CardContent>
                        </Card>
                        </Grid>

                        <Grid item xs={12} md={4}  style={{ textAlign: 'center'}}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardHeader
                                style={{ textAlign:'left' }}
                                action={
                                <IconButton aria-label="settings">
                                    <FavoriteIcon />
                                </IconButton>
                                }
                                title="Shrimp and Chorizo"
                                subheader="September 14, 2016"
                            />
                            <CardMedia
                                component="img"
                                height="200"
                                image="https://img.tatacliq.com/images/i8/437Wx649H/MP000000013860940_437Wx649H_202207211525131.jpeg"
                                alt="Paella dish"
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                This impressive paella is a perfect party dish and a fun meal to cook
                                together with your guests. Add 1 cup of frozen peas along with the mussels,
                                if you like.
                                </Typography>
                            </CardContent>
                        </Card>
                        </Grid>


                    </Grid>
                </Box>
                </Box>
      </Container>
    </React.Fragment>
        </section>
    )

}
