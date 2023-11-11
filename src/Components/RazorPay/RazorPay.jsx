import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";

export default function RPay(props) {

    const cartItems = useSelector((state) => state.cart.cartItems);
    const itemIDs = [];
  
    cartItems.forEach(element => {
        for(let i=0; i<element.cartQuantity; i++){ 
          console.log(element);
          const singleItem = { productID: element.id, size: element.size }
          itemIDs.push(singleItem);
        }
    });    

    const paymentHandler = async (e) => {

      console.log(itemIDs);

      const API_URL = 'https://boutique-scpw.onrender.com/user/'
        e.preventDefault();

        const orderUrl = `${API_URL}checkout`;
        const response = await axios({
            method: 'post',
            url: orderUrl,
            data: {
              "checkoutArray":itemIDs
            }
        });
        const { data } = response;
        console.log(data);

        const options = {
          key: process.env.REACT_APP_RAZOR_PAY_KEY_ID,
          name: "Urja - The Dying Studio",
          description: "Some Description",
          order_id: data.id,
          
          handler: async (response) => {
            try {
             const paymentId = response.razorpay_payment_id;
             const url = `${API_URL}capture/${paymentId}`;
             const captureResponse = await axios.post(url, {})
             console.log(captureResponse.data);
            } catch (err) {
              console.log(err);
            }
          },

          theme: {
            color: "#686CFD",
          },
        };
        const rzp1 = new window.Razorpay(options);
        rzp1.open();
        };

    return (
      <div>
        <button onClick={paymentHandler} id='checkout-btn' disabled={props.disabled} className="uk-button uk-button-secondary">
            Place Order
        </button>
      </div>
    );
}
