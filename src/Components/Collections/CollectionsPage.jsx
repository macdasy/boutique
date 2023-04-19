
import { Button } from '@mui/material';
import { useState } from 'react';
import './CollectionsPage.css';
import ColorSelection from './Filters/ColorSelection';
import Menu from './MobileMenu';
import Products from './Card/Products';
import CheckmarkSelect from './Filters/Select1';
import ChipSelection from './Filters/Select2';
import CollecNav from './CollNav';

const sizes = ['s', 'm', 'l', 'xl', 'xxl'];
const colors = ['black', 'blue', 'yellow', 'green', 'white'];


export default function CollectionsPage() {

  const [value, setValue] = useState(5);

  return (
    <section id="cPage">
      <CollecNav />

      <div id='cheader' style={{ padding:"10vh 3% 2vh" }}>
        <h1 id='brand'> Boutique </h1>
        <h1 id='sub-t'> Find what you like among our best ! </h1>
      </div>

      <div id='input-field'>
        <CheckmarkSelect />
        <ChipSelection id='size' values={sizes} />
        <ColorSelection id='color' colors={colors}/>
      </div>

      <div id='mobile'>
        <CheckmarkSelect />
        <Menu/>
      </div>

      <Products num={value} />
      
      <div
        style={{ 
          margin:'5%',
          display:'flex',
          justifyContent:'center'
        }}
      >  
        <Button variant='outlined' style={{ borderColor:'black', background:'none', color:"black", borderRadius:0, textTransform:'none' }} onClick={()=>{setValue(value+5)}}  > Load More </Button>
      </div>

    </section>
  );
}
