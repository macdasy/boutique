import About from './About/About';
import Collections from './Collections/Collections';
import Customers from './Customers/Customers';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Secondary from './Secondary/Secondary';
import './Home.css';
import Lander from './Lander/Lander';

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";

export default function Home(prpos){

    return(
        <section id='home'>
            <Navbar />
            <Lander />
            <About />
            <Collections />
            <Secondary />
             <section id='customers-section' data-uk-scrollspy="cls: uk-animation-fade; target: .swipeCard; delay: 500;">
                <h2 id='cust'> Our Happy Customers <hr></hr> </h2>
                <Customers />
            </section>
            <Footer />
        </section>
    )

}