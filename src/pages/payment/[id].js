import axios from 'axios';
import { useRouter } from 'next/router';
import Script from 'next/script';
import React, { useEffect } from 'react';

const Payment = () => {
  const router = useRouter();

  const makePayment = async () => {
    try {
      const val = {
        id: router.query?.id,
      };

      const { data } = await axios.post(`/api/razorpay`, val);
      console.log(data);

      const options = {
        key: process.env.RAZOREPAY_KEY,
        name: 'ARUN',
        description: 'Payment for hotel',
        currency: data.currency,
        amount: data.amount,
        order_id: data.id,
        handler: function (response) {
          // Handle the response as needed
          console.log(response);
        },
        prefill: {
          name: 'Arun',
          email: 'lovearun010@gmail.com',
          contact: 8502066002,
        },
      };

      const paymentObj = new window.Razorpay(options);
      paymentObj.open();
    } catch (error) {
      console.error('Error making payment:', error);
    }
  };

  useEffect(() => {
    makePayment();
  }); // Ensure the useEffect runs only once on component mount

  return (
    <>
      <Script src={`https://checkout.razorpay.com/v1/checkout.js`} />
    </>
  );
};

export default Payment;
