import { useState } from 'react';
import './CollectionsPage.css';
import Products from './Card/Products';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';


export default function CollectionsPage() {
  

  let colors = [], sizes = [];

  const addColors = (e) =>{
    if(colors.includes(e)) colors = colors.filter(item => item !== e)
    else colors.push(e);
    console.log(colors);
  }

  const addSizes = (e) =>{
    if(sizes.includes(e)) sizes = sizes.filter(item => item !== e)
    else sizes.push(e);
    console.log(sizes);
  }

  function setZIndex(){
    const canvas = document.querySelector('#offcanvas-usage');
    canvas.style.zIndex = 99999;
  }

  return (
    <section id="cPage">
      <Navbar />
          <p id='welcome'> Welcome to the world of Urja </p>  

    <div style={{padding:'5%5%1%'}}>
          <div id='filters' onClick={console.log('clicked')}>
            <h2 
              style={{ fontFamily:'Josefin Sans',     
                        borderBottom: '#7d875f 0.8px solid',
                        display: 'inline-block',
                        fontSize: '1.7em' ,
                        color:  '#8e996b'
                    }}>  Collections 
            </h2>

            <button onClick={setZIndex} id='type-btn' class="uk-button uk-button-link uk-margin-small-right" type="button" data-uk-toggle="target: #offcanvas-usage"><a id='f-icon' href="" uk-icon="icon:settings"></a></button>

              <div id="offcanvas-usage" data-uk-offcanvas="overlay: true;flip: true" style={{zIndex:'1210'}}>
                  <div class="uk-offcanvas-bar">

                      <button class="uk-offcanvas-close" type="button" data-uk-close></button>

                      <h3>Filter</h3>

                      <div id='f-color'>
                        <h4> Color </h4>
                          <div className="uk-drop-grid uk-child-width-1-2@m" data-uk-grid style={{marginBottom:'7%'}}>
                              <div>
                                  <p> <label><input class="uk-checkbox" type="checkbox" onClick={()=>{addColors('blue')}} /> Blue </label> </p>
                                  <p> <label><input class="uk-checkbox" type="checkbox" onClick={()=>{addColors('back')}} /> Black </label> </p>
                                  <p> <label><input class="uk-checkbox" type="checkbox" onClick={()=>{addColors('purple')}} /> Purple </label> </p>
                                  <p> <label><input class="uk-checkbox" type="checkbox" onClick={()=>{addColors('yellow')}} /> Yellow </label> </p>
                                  <p> <label><input class="uk-checkbox" type="checkbox" onClick={()=>{addColors('green')}} /> Green </label> </p>
                              </div>
                          </div>
                      </div>

                      <hr />
                      <div id='f-size'>
                        <h4> Size </h4>
                          <div className="uk-drop-grid uk-child-width-1-2@m" data-uk-grid style={{marginBottom:'7%'}}>
                              <div>
                                  <p> <label><input class="uk-checkbox" type="checkbox" onClick={()=>{addSizes('xs')}} /> XS </label> </p>
                                  <p> <label><input class="uk-checkbox" type="checkbox" onClick={()=>{addSizes('s')}}/> S </label> </p>
                                  <p> <label><input class="uk-checkbox" type="checkbox" onClick={()=>{addSizes('m')}}/> M </label> </p>
                                  <p> <label><input class="uk-checkbox" type="checkbox" onClick={()=>{addSizes('l')}}/> L </label> </p>
                                  <p> <label><input class="uk-checkbox" type="checkbox" onClick={()=>{addSizes('xl')}}/> XL </label> </p>
                              </div>
                          </div>
                      </div>
                      <button className='uk-button uk-button-primary' id='applybtn' class="uk-offcanvas-close" onClick={()=>{  }} > Apply </button>
                  </div>
              </div>
            
          </div>

        <Products/>
    </div>
    <Footer />
    </section>
  );
}

