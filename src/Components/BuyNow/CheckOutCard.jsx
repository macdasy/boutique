import { useSelector } from 'react-redux';
import './buynow.css';
import RPay from '../RazorPay/RazorPay';

export default function CheckOutCard(props){
    const count = props.count;
    const cartTotalAmount = useSelector((state) => state.cart.cartTotalAmount);
    const shipAmount = 300;

    return(
        <div class="uk-card uk-card-default">
            <div class="uk-card-header">
                { count.map((d, index) => (
                    <div class="uk-grid-small uk-flex-middle" data-uk-grid>
                        <div class="uk-width-auto">
                            <img width="40" height="40" src={d.img} alt="Avatar" />
                        </div>
                        <div class="uk-width-expand">
                            <h3 class="uk-card-title uk-margin-remove-bottom"> {d.name} <span style={{fontSize:'small'}}>({d.cartQuantity})</span> </h3>
                            <p style={{fontSize:'small', color:'grey'}} class="uk-text-meta uk-margin-remove-top"><time datetime="2016-04-01T19:00">XL</time></p>
                        </div>
                        <div>
                            <p class="uk-margin-remove-bottom amount"> <span style={{fontSize:'small'}}> {d.cartQuantity}x</span> Rs. {d.price}</p>
                        </div>
                    </div>
                ))}
                
                
            </div>
            <div class="uk-card-body" id='check-amount'>
                <div>
                    <p> Subtotal </p>
                    <p className='amount' > Rs.{cartTotalAmount} </p>
                </div>
                <div>
                    <p> Shipping </p>
                    <p className='amount'> Rs.{shipAmount} </p>
                </div>
                <hr />
                <div id='check-total-amount'>
                    <p id='total'> Total </p>
                    <p className='amount' id='total-amout'> Rs.{cartTotalAmount+shipAmount} </p>
                </div> 
            </div>
            
            <div id='checkout-foo' class="uk-card-footer" style={{textAlign:'center'}}>
                { (!props.isSubmitted) && <p style={{fontSize:'small', marginTop:'2%', color:'grey', fontFamily:'Schibsted Grotesk'}}> Verify the address section first! </p> }  
                { (props.isSubmitted) && <p style={{fontSize:'small', marginTop:'2%', color:'grey', fontFamily:'Schibsted Grotesk'}}> 
                    Your address has been verified successfully and can't be edited for this order!
                 </p> }  
                <RPay disabled={!props.isSubmitted} />
            </div>
        </div>

    )

}