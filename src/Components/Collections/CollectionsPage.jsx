
import { Button } from '@mui/material';
import { useState } from 'react';
import './CollectionsPage.css';
import ColorSelection from './Filters/ColorSelection';
import Menu from './MobileMenu';
import Products from './Card/Products';
import CheckmarkSelect from './Filters/Select1';
import ChipSelection from './Filters/Select2';
import CollecNav from './CollNav';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const sizes = ['s', 'm', 'l', 'xl', 'xxl'];
const colors = ['black', 'blue', 'yellow', 'green', 'white'];


export default function CollectionsPage() {

  const [value, setValue] = useState(5);

  return (
    <section id="cPage">
      <Navbar />

      {/* <div id='cheader' style={{ padding:"10vh 3% 2vh" }}>
        <h1 id='brand'> Urja </h1>
        <h1 id='sub-t'> Find what you like among our best ! </h1>
      </div> */}
      {/* <div id='input-field'>
        <CheckmarkSelect />
        <ChipSelection id='size' values={sizes} />
        <ColorSelection id='color' colors={colors}/>
      </div>

      <div id='mobile'>
        <CheckmarkSelect />
        <Menu/>
      </div> */}

    <div style={{padding:'5%5%1%'}}>
          <div id='filters' onClick={console.log('clicked')}>
            <h2 
            style={{ fontFamily:'Josefin Sans',     
                      borderBottom: '#000000 0.8px solid',
                      display: 'inline-block',
                      fontSize: '1.7em' 
                  }}>  Collections </h2>
            <div>
              <button className="uk-button uk-button-link" id='type-btn' type="button"> <a id='f-icon' href="" uk-icon="icon:settings"></a> </button>

              <div className="uk-card uk-card-body uk-card-default uk-width-large" data-uk-drop="mode: click">
                <div className="uk-drop-grid uk-child-width-1-2@m" data-uk-grid style={{marginBottom:'7%'}}>
                    <div>
                        <h5> Type </h5>
                        <p> <label><input class="uk-checkbox" type="checkbox" /> Kurta </label> </p>
                        <p> <label><input class="uk-checkbox" type="checkbox" /> Kurta Set </label> </p>
                        <p> <label><input class="uk-checkbox" type="checkbox" /> Tops </label> </p>
                    </div>
                    <div>
                        <h5> Color </h5>
                        <p> <label><input class="uk-checkbox" type="checkbox" /> Blue </label> </p>
                        <p> <label><input class="uk-checkbox" type="checkbox" /> Black </label> </p>
                        <p> <label><input class="uk-checkbox" type="checkbox" /> Purple </label> </p>
                        <p> <label><input class="uk-checkbox" type="checkbox" /> Yellow </label> </p>
                        <p> <label><input class="uk-checkbox" type="checkbox" /> Green </label> </p>
                    </div>
                </div>
                  <button className='uk-button uk-button-primary' id='applybtn' onClick={()=>{  }} > Apply </button>
              </div>
            </div>
            
          </div>

        <Products num={value} />
    </div>
    <Footer />
    </section>
  );
}
