import React from "react";
import {Elements} from "@stripe/react-stripe-js"
import {loadStripe} from "@stripe/stripe-js"
import { Booking } from "../requests";

const stripeTestPromise = loadStripe(Booking.key())

export default function StripeContainer(){
    return(
        <PaymentForm />
    )   

}