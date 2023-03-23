import { Button } from '@mui/material'
import './sec.css'

export default function Secondary(props){

    return(
        <section id='secondary'>
            <div id='sec-data'>
                <h1> Boutique </h1>
                <p id='sec-text' > Let us comfort you completely </p>
                <Button id='sec-btn' > Show Now </Button>
            </div>
        </section>
    )

}