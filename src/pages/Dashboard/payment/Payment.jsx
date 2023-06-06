import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe(import.meta.env.VITE_Stripe_payment)
const Payment = () => {
    const booking = useLoaderData();
    return (
        <div className='p-5'>
            <h3 className="text-3xl">Payment for {booking.treatment}</h3>
            <p>please pay ${booking.price} for your appointment on {booking.selectedDate} at {booking.slot}</p>
        <div className='w-96 my-12'>
        <Elements stripe={stripePromise}>
      <CheckoutForm  booking={booking}/>
    </Elements>
        </div>
        </div>
    );
};

export default Payment;