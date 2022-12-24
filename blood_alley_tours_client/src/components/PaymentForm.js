import React, {useState} from 'react';
import { CardElement, useElements, useStripe  } from '@stripe/react-stripe-js';

export default function PaymentForm(){

    const [success, setSuccess] = useState(false)
    const stripe = useStripe()
    const elements = useElements()
    
    const handleSubmit = async (event) => {
        event.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod({
                type: "card",
                card: elements.getElement(CardElement)
            })
            
            if (error) {
                console.log("Error creating payment method:", error);
                return;
            }
            setSuccess(true)
            console.log("Payment method created", paymentMethod);
    }

    return(
        <div>

        </div>
    )
}