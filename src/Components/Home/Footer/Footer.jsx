import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import RateReviewIcon from '@mui/icons-material/RateReview';
import './footer.css';
import { useState } from 'react';

export default function Footer(props){

    const [value, setValue] = useState();

    return(
        <section id='footer'>
            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12} md={6}  style={{ textAlign: 'center', padding:'5%'}}>
                        <p> 
                           "Imbibed deep within the roots of the early block printing history, 
                            melded with contemporary influences of Night and Daywear, the vision 
                            of Papaya Whims comes alive.contemporary influences of Night and Daywear, the vision 
                        of Papaya Whims comes alive.of Papaya Whims comes alive.of Papaya Whim"
                        </p>
                    </Grid> 
                    <Grid item xs={12} md={6} style={{ textAlign: 'center',  padding:'5%'}}>
                        <h2 id='bottom-brand'> 
                            Boutique
                        </h2>
                        <p id='since'> Since 2000 </p>
                        <BottomNavigation
                            showLabels
                            value={value}
                            onChange={(event, newValue) => {
                            setValue(newValue);
                            }}
                        >
                            <BottomNavigationAction label="Collections" icon={<CheckroomIcon />} className='bottom-icon'/>
                            <BottomNavigationAction label="Contact" icon={<RateReviewIcon />}  className='bottom-icon'/>
                            <BottomNavigationAction label="Find Stores" icon={<LocationOnIcon />}  className='bottom-icon'/>
                        </BottomNavigation>
                    </Grid>
                </Grid>

                
             </Box>
        </section>
    )

}