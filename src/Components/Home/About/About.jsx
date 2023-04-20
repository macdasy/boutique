import { Button, Stack } from '@mui/material';
import './about.css';

export default function  About(props){

    return(
        <section id='about-section'>

            <h4 id='about'> About Us  </h4>

            <p style={{padding:'0% 7%', fontFamily: 'Schibsted Grotesk', textAlign:"center" }}>
                URJA is a home-grown brand from india that majorly focusues on natural dyeing and eco-printing.
                Our brand was officially launched in 2023, although we have been in practice estimated in 2021. It took
                us almost 2 years of continuous learning , exploration and experimentation to begin dyeing professionally.
                Urja takes great pride upon embarking on a mindful and a sustainable journey by foraging colours from
                nature and ethically sourcing materials. We ensure that our products are curated putting forth the
                environment as a responsible aspect in all of our processes. Being a slow fashion brand, each product is pre-treated, 
                naturally-dyed, post-treated and cured by hand with absolute labor of love.
               <p style={{paddingTop:"3%"}}>
                Our processes include using botanicals from plants such as leaves, flowers and roots to extract colours or create prints on textiles.
                A lot of thought, care and research has been invested upon URJA- offering the best of eco-friendly, slow-crafted
                and hand-curated products. So choose URJA and be a part of this sustainable journey.
               </p>
            </p>

            <Stack spacing={2} direction="row" style={{justifyContent:"center"}}>
                <Button disableElevation disableFocusRipple disableRipple disableTouchRipple className='abt-btn' variant="text"> Instructions </Button>
                <Button disableElevation disableFocusRipple disableRipple disableTouchRipple className='abt-btn' variant="text"> Policies </Button>
            </Stack>

        </section>
    )

}