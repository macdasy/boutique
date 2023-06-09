
import { useState } from 'react';
import logo from '../../Stacks/logo.png';
import Policy from '../Extras/Policy';
import './footer.css';

export default function Footer(props){

    const [open, setOpen] = useState(false);
    const [tag, setTag] = useState('');

    function handleOpen(e) { 
      setTag(e);
      setOpen(true);
    }
    function handleClose() { setOpen(false); }

    return(
        <div id='footer'>
              <Policy open={open} handleClose={handleClose} tag={tag}/>
              <div id='joinus' style={{textAlign:'center', marginBottom:"15vh"}} >
                <h2 style={{ fontFamily:'Schibsted Grotesk', marginBottom:'1%'}}> Admire the world with Urja </h2>
                <h4 style={{ marginTop:0, marginBottom:'4vh', opacity:'0.7', fontFamily:'Schibsted Grotesk' }} > Join us and start attracting! </h4>
                <button className='uk-button uk-button-secondary' style={{ textTransform:'none', fontFamily:'Schibsted Grotesk' }}> Shop Now </button>
              </div>

              <div id='foo-sec'>
                <div class="uk-child-width-1-2@s uk-child-width-1-5@m uk-text-center" data-uk-grid 
                  style={{borderTop:'1px solid white', borderBottom:'1px solid white', padding:'3% 8%', margin:0}}>
                    
                    <div>
                      <div class="foo-link-sec uk-width-1-2@s uk-width-2-5@m">
                          <ul class="uk-nav uk-nav-default">
                              <li class="uk-active"><a > Links </a></li>
                              <li><a href="."> Home </a></li>
                              <li><a href="/collections"> Collections </a></li>
                              <li><a href="/cart"> Cart </a></li>
                          </ul>
                      </div>
                    </div>

                    <div>
                      <div class="foo-link-sec uk-width-1-2@s uk-width-2-5@m">
                          <ul class="uk-nav uk-nav-default">
                              <li class="uk-active"><a > Company </a></li>
                              <li onClick={()=>{handleOpen('about')}}><a> About </a></li>
                              <li onClick={()=>{handleOpen('fn')}}><a> Founder's Note </a></li>
                          </ul>
                      </div>
                    </div>

                    <div>
                      <div class="foo-link-sec uk-width-1-2@s uk-width-2-5@m">
                          <ul class="uk-nav uk-nav-default">
                              <li class="uk-active"><a >Policy</a></li>
                              <li onClick={()=>{handleOpen('rrp')}}><a > Return & Refund </a></li>
                              <li onClick={()=>{handleOpen('shp')}}><a > Shipping Policy </a></li>
                              <li onClick={()=>{handleOpen('pp')}}><a > Privacy Policy </a></li>
                          </ul>
                      </div>
                    </div>

                    <div>
                      <div class="foo-link-sec uk-width-1-2@s uk-width-2-5@m">
                          <ul class="uk-nav uk-nav-default">
                              <li class="uk-active"><a > Important Links </a></li>
                              <li onClick={()=>{handleOpen('tnc')}}><a > Term & Conditions </a></li>
                              <li onClick={()=>{handleOpen('wnc')}}><a > Wash & Care Instruction </a></li>
                          </ul>
                      </div>
                    </div>

                    <div>
                      <div class="foo-link-sec uk-width-1-2@s uk-width-2-5@m">
                          <ul class="uk-nav uk-nav-default">
                              <li class="uk-active"><a > Support </a></li>
                              <li><a onClick={()=>{handleOpen('contact')}}> Contact </a></li>
                              <li><a > Forum </a></li>
                          </ul>
                        </div>                      
                    </div>
                </div>

                <div id='foo-contact'>
                  <div class="foo-link-sec uk-child-width-1-2@s uk-text-center" data-uk-grid>
                    <ul class="uk-nav uk-nav-default" style={{textAlign:'center'}}>
                      <li class="uk-active"><a  className='foo-mail'> Urja - The Dying Studio </a></li>
                      <li><a  className='foo-mail-1'> urja@gmail.com </a></li>
                    </ul>

                    <div id='foo-icon-sec' style={{paddingRight:"5%"}} >
                        <a href="" class="uk-icon-button uk-margin-small-right" uk-icon="twitter"></a>
                        <a href="" class="uk-icon-button uk-margin-small-right" uk-icon="facebook"></a>
                        <a href="" class="uk-icon-button uk-margin-small-right" uk-icon="instagram"></a>
                    </div>
                  </div>
                </div>

                <div style={{textAlign:'center', padding:'3vh'}}>
                    <p style={{ fontSize:"small", marginBottom:0, color:'grey', fontFamily:'Schibsted Grotesk'}}> &#169;2023, Urja - The Dying Studio. </p>
                </div>


              </div>
                
        </div>
    )

}