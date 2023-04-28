import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import './shop.css';

export default function Shop() {

    return(
        <>
       <Navbar />
        <section id="shop">
            <h4> Collections </h4>
            <div class="shop-grid uk-child-width-1-3@m uk-grid-small uk-grid-match" data-uk-grid data-uk-scrollspy="target: > div; cls: uk-animation-slide-left-small; delay: 500">
            <div className="shop-card" onClick={()=>{window.location.pathname='/collections'}}>
                <div class="uk-card-media-top">
                    <div></div>
                </div>
                <div style={{cursor:'pointer'}} class="uk-card uk-card-default uk-card-hover uk-card-body">
                    <h3 class="uk-card-title"  onClick={()=>{window.location.pathname='/collections'}}>Tops <span uk-icon="arrow-right"></span> </h3>
                </div>
            </div>
            <div className="shop-card" onClick={()=>{window.location.pathname='/collections'}}>
                 <div class="uk-card-media-top-2">
                 <div></div>
                </div>
                <div style={{cursor:'pointer'}}  class="uk-card uk-card-default uk-card-hover uk-card-body">
                    <h3 class="uk-card-title" onClick={()=>{window.location.pathname='/collections'}} >Kurta <span uk-icon="arrow-right"></span> </h3>
                </div>
            </div>
            <div className="shop-card" onClick={()=>{window.location.pathname='/collections'}}>
                <div class="uk-card-media-top-3">
                <div></div>
                </div>
                <div style={{cursor:'pointer'}} class="uk-card uk-card-default uk-card-hover uk-card-body">
                    <h3 class="uk-card-title" onClick={()=>{window.location.pathname='/collections'}} >Kurta Sets <span uk-icon="arrow-right"></span> </h3>
                </div>
            </div>
            </div>
        </section>
        <Footer />
        </>
    )

}