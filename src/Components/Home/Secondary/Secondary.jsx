import { Button } from '@mui/material'
import './sec.css'

export default function Secondary(props){

    return(
        <section id='secondary' data-uk-scrollspy="cls: uk-animation-fade; target: #sec-data; delay: 500;">
            <div id='sec-data'>
                <h1> Boutique </h1>
                <p id='sec-text' style={{ letterSpacing:'5px' }} > Let us comfort you completely </p>
                <Button id='sec-btn' > Browse </Button>
            </div>
        </section>
    )

}