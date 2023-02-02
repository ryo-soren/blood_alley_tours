import { useState } from "react";
import { Booking } from "../requests";
import { useNavigate } from "react-router-dom";
import {useStripe } from '@stripe/react-stripe-js';
import NewBookingForm from "./NewBookingForm";
import Header from "./Header";

function NewBookingPage() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [partySize, setPartySize] = useState(2)
    const [date, setDate] = useState(new Date())
    const [time, setTime] = useState()
    const [amount, setAmount] = useState(28)
    const [errors, setErrors] = useState([])
    const [step, setStep] = useState(1)

    const stripe = useStripe()
    const navigate = useNavigate()

    const nextStep = () => {
        setStep(step+1)
    }

    // const prevStep = () => {
    //     setStep(step-1)
    // }

    const newBooking = async (event) => {

        const result = await stripe.createToken(event.card);
        
        const params = {
            first_name: event.first_name,
            last_name: event.last_name,
            phone_number: event.phone_number,
            email: event.email,
            party_size: event.party_size,
            date: event.date,
            time: event.time,
            amount: event.amount,
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

    switch (step) {
        case 1:
            return (
                <NewBookingForm 
                handleSubmit={(params)=>newBooking(params)}
                nextStep={()=>nextStep()}
                errors={errors}

                firstName={firstName}
                setFirstName={(event)=>setFirstName(event)}

                lastName={lastName}
                setLastName={(event)=>setLastName(event)}

                phoneNumber={phoneNumber}
                setPhoneNumber={(event)=>setPhoneNumber(event)}

                email={email}
                setEmail={(event)=>setEmail(event)}

                partySize={partySize}
                setPartySize={(event)=>setPartySize(event)}

                date={date}
                setDate={(event)=>setDate(event)}

                time={time}
                setTime={(event)=>setTime(event)}

                amount={amount}
                setAmount={(event)=>setAmount(event)}
                /> 
            );
        case 2:
            return(
                <Header />
            );
              
        default:
            return;
    }

}

export default NewBookingPage; 