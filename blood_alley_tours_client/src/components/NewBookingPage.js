import { useState } from "react";
import { Booking } from "../requests";
import { useNavigate } from "react-router-dom";
import {useStripe } from '@stripe/react-stripe-js';
import NewBookingForm from "./NewBookingForm";

function NewBookingPage() {
    
    const [errors, setErrors] = useState([])
    const stripe = useStripe()
    const navigate = useNavigate()

    const newBooking = async (event) => {

        const {first_name, last_name, phone_number, email, party_size, date, time, amount, card} = event
        
        const result = await stripe.createToken(card);
        
        const params = {
            first_name: first_name,
            last_name: last_name,
            phone_number: phone_number,
            email: email,
            party_size: party_size,
            date: date,
            time: time,
            amount: amount,
            token: result.token.id
        }

        if (result.error) {
            setErrors([...errors, result.error.message])
        } else {
            Booking.create(params).then(booking => {
                if (booking.status === 422) {
                    setErrors(booking.errors)
                } else{
                    navigate(`/`)
                }
            })
        }
    }

    return (

        <NewBookingForm 
        errors={errors} 
        handleSubmit={(params)=>newBooking(params)} 
        />

    );  
}

export default NewBookingPage; 