import About from './About/About';
import Collections from './Collections/Collections';
import Customers from './Customers/Customers';
import Footer from './Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Secondary from './Secondary/Secondary';
import './Home.css';
import Lander from './Lander/Lander';



export default function Home(prpos){

    return(
        <section id='home'>
            <Navbar />
            <Lander />
            <About />
            <Collections />
            <Secondary />
            <Customers />
            <Footer />
        </section>
    )

}