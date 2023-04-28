import React from "react";
import axios from "axios";

export default function RPay() {

    const paymentHandler = async (e) => {
        const API_URL = 'https://boutique-scpw.onrender.com/user/'
        e.preventDefault();

        const orderUrl = `${API_URL}checkout`;
        const response = await axios({
            method: 'post',
            url: orderUrl,
            data: {
              "productId":['64496558a099e229f22cf1c5', '64496554a099e229f22cf1c3', '64496554a099e229f22cf1c3', '64496554a099e229f22cf1c3']
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
        <button onClick={paymentHandler}>
          Upgrade
        </button>
      </div>
    );
}
