import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useState } from 'react';

const CheackOutForm = ({handlePayment}) => {
    const [paymentData,setPaymentData] = useState([])
    const [success,setSuccess] = useState(false)
    const [payError,setPayError] = useState(null)
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const cardElement = elements.getElement(CardElement);

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            console.log('[error]', error);
            setPayError(error.message)
            setSuccess(false)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            const payIn = {
                payId:paymentMethod.id,
                methodMethod:paymentMethod.card.brand
            }
            setPaymentData(payIn)
            handlePayment(payIn)
            setSuccess(true)
            setPayError(null)
        }
    };
     console.log(paymentData);
    return (
        <form>
            <br />
            <CardElement 
                    options={{
                        style: {
                          base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                              color: '#aab7c4',
                            },
                          },
                          invalid: {
                            color: '#9e2146',
                          },
                        },
                      }}
            />
            <br />
            <button className="btn login-button" onClick={handleSubmit} type="submit" disabled={!stripe}>
                Pay
            </button>
            <div className="p-4 text-center ">
                {
                    success && <p className=" h6 text-success" > Thank You for Your Booking Service </p>
                }
                {
                    payError&& <p className=" h6 text-danger" >{payError}</p>
                }
            </div>
        </form>
    );
};

export default CheackOutForm;