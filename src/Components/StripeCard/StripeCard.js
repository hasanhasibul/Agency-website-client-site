import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheackOutForm from './CheackOutForm';


const stripePromise = loadStripe('pk_test_51GvUxmHspu8WL2jGr3e9tOUJoUOPAoe9ZDu7QuIcnvpRmKGqHaIDe44CRiyIQ1fXiCr3Z9TMiFmEo9dlsl3C70hM00TIi5qYyB');

const StripeCard = ({handlePayment}) => {
    return (
        <Elements stripe={stripePromise}>
           <CheackOutForm handlePayment={handlePayment} ></CheackOutForm> 
        </Elements>
    );
};

export default StripeCard;