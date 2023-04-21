
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './contact.css';


export default function Contact(props){

    return(
        <section id='contact-page'>
            <Navbar />

            <div id='form-contact'>

                <div class="uk-text-center" data-uk-grid>
                    <div class="uk-width-1-5@m uk-width-1-4@l"></div>

                    <div class="uk-width-expand">
                        <h2 style={{textAlign:"left"}}> Contact </h2>  
                        <form class="uk-grid-small" data-uk-grid>
                            <div class="uk-width-1-2@s">
                                <input class="uk-input" type="text" placeholder="Fisrt Name" aria-label="50" />
                            </div>
                            <div class="uk-width-1-2@s">
                                <input class="uk-input" type="text" placeholder="Last Name" aria-label="50" />
                            </div>
                            <div class="uk-width-1-1">
                                <input class="uk-input" type="text" placeholder="Phone Number" aria-label="100" />
                            </div>
                            <div class="uk-width-1-1">
                                <textarea class="uk-textarea" rows="5" placeholder="Message" aria-label="Textarea"></textarea>
                            </div>
                            <button className='uk-button contact-submit'> Submit </button>
                        </form>
                    </div>

                    <div class="uk-width-1-5@m uk-width-1-4@l"></div>
                </div>

            </div>

            <Footer />
        </section>
    )

}

