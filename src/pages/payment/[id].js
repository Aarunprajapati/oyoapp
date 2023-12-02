import axios from 'axios'
import { useRouter } from 'next/router';
import Script from 'next/script';
import React, { useEffect } from 'react'

const  payment = () => {
  const router = useRouter()
    const makepayment = async()=>{
      const val = {
        id:router.query?.id,
      }
    const {data} = await axios.post(`/api/razorpay`, val);
    console.log(data);


    const option = {
        key: process.env.RAZOREPAY_KEY,
        name:"ARUN",
        description:"Payment for hotel",
        currency:data.currency,
        amount:data.amount,
        order_id: data.id,
        handler:function(response){},
        prefill:{
            name:"Arun",
            email:"lovearun010@gmail.com",
            contact:8502066002,
        },
    }
        const paymentObj = new window.Razorpay(option);
        paymentObj.open();
}
    useEffect(()=>{
        makepayment();
    },[])

  return (
    <>
      <Script src='http://checkout.razorpay.com/v1/checkout.js'/>
    </>
  )
}

export default payment 
