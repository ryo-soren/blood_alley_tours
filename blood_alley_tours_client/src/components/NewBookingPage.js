import { useState } from "react";
import { Booking } from "../requests";
import { useNavigate } from "react-router-dom";
import {useStripe } from '@stripe/react-stripe-js';
import NewBookingForm from "./NewBookingForm";
import PaymentPage from "./PaymentPage";

function NewBookingPage() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('number')
    const [partySize, setPartySize] = useState(2)
    const [date, setDate] = useState(new Date())
    const [time, setTime] = useState()
    const [price, setPrice] = useState(28)
    const [errors, setErrors] = useState()
    const [step, setStep] = useState(1)

    const stripe = useStripe()
    const navigate = useNavigate()

    const nextStep = () => {
        setStep(step+1)
    }

    const prevStep = () => {
        setStep(step-1)
    }

    const newBooking = async (event) => {

        const result = await stripe.createToken(event.card);

        if (result.error) {
            console.log(result);
            console.log(errors);
            setErrors(result.error.message)
            console.log(errors);
        } else {
            const params = {
                first_name: firstName,
                last_name: lastName,
                phone_number: phoneNumber,
                email: email,
                party_size: partySize,
                date: date.toDateString(),
                time: time,
                price: price,
                token: result.token.id
            }

            Booking.create(params).then(booking => {
                console.log(booking);
                if (booking.errors) {
                    console.log(errors)
                    setErrors(booking.errors[0].message)
                    console.log(errors);
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
                price={price}
                setPrice={(event)=>setPrice(event)}
                /> 
            );
        case 2:
            return(
                <PaymentPage
                handleSubmit={(params)=>newBooking(params)}
                prevStep={()=>prevStep()}
                errors={errors}
                firstName={firstName}
                lastName={lastName}
                phoneNumber={phoneNumber}
                email={email}
                partySize={partySize}
                date={date}
                time={time}
                price={price}
                />
            );
              
        default:
            return;
    }

}

export default NewBookingPage;