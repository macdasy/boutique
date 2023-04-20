import { Box, Button, Container } from '@mui/material';
import './Lander.css';

import landImg from '../../../Stacks/land.png';


export default function Lander(props){

    const scroll = () => {
        const section = document.querySelector( '#collections' );
        let position = section.getBoundingClientRect();
        window.scrollTo(position.left, position.top + window.scrollY - 100);
      };

    return(
        <section id='lander' data-uk-scrollspy="cls: uk-animation-fade; target: #lander h2, #lander button; delay: 500;">
            <h2 style={{ fontFamily:'Josefin Sans', color:"white", fontSize:"7vh" }}> Find More divine clothes </h2> 
            <Button id='land-btn' variant='contained' onClick={scroll} > Shop Now </Button>
        </section>
    )

}