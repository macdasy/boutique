
import '../Navbar/nav.css';

export default function Lost(props){

    return(
        <section id='lost' data-uk-scrollspy="cls: uk-animation-fade; target: #lander h2, #lander button; delay: 500;">
            <div id='lost-div'>
                <h2 style={{ fontFamily:'Schibsted Grotesk', color:"black", fontSize:"6vh" }}> You've been lost! </h2> 
                <div style={{display:'flex', gap:'20px'}}>
                    <button className='uk-button' style={{background:'#7d875f', fontFamily:'Schibsted Grotesk',color:"white", textTransform:'capitalize'}} onClick={()=>{window.location.pathname='/shop'}}> Shop Now </button>
                    <button className='uk-button uk-button-secondary' style={{ textTransform:'capitalize',fontFamily:'Schibsted Grotesk' }} onClick={()=>{window.location.pathname='/'}}> Go Home </button>
                </div>
                <p style={{ fontSize:"small", marginBottom:0, color:'grey', fontFamily:'Schibsted Grotesk'}}> &#169;2023, Urja - The Dying Studio. </p>
            </div>
        </section>
    )

}