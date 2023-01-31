import { useState } from "react";
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import DatePicker from "react-datepicker";
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup';
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import FormErrors from './FormErrors';
import moment from "moment"

const NewBookingForm = props => {
    
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [partySize, setPartySize] = useState(2)
    const [date, setDate] = useState(new Date())
    const [time, setTime] = useState()

    const [amount, setAmount] = useState(28)

    const stripe = useStripe()
    const elements = useElements()

    const {handleSubmit, errors} = props

    const getDataAndSubmit = (event) => {

        event.preventDefault()

        if (!stripe || !elements) {
            return;
        }
        
        const card = elements.getElement(CardElement);
        
        const params = {
            first_name: firstName,
            last_name: lastName,
            phone_number: phoneNumber,
            email: email,
            party_size: partySize,
            date: moment(date).format('MMM Do YYYY'),
            time: time,
            amount: amount,
            card: card
        }

        handleSubmit(params)

    }

    const isWeekend = (date) => {
        const day = date.getDay()
        return day === 0 || day === 5 || day === 6
    }

    return(

        <Container className="py-3 mx-auto">
        <Card className="mb-5">
        <Card.Header className="bg-dark text-white">
                <p className="h3">Booking Info</p>
                <strong className="">Fill out the info below to book a date</strong>
        </Card.Header>
        <Card.Body className="bg-dark text-white">

        <Row>
            <Col className="m-auto">
                <Form className='m-4' onSubmit={getDataAndSubmit}>

                    <Form.Group className="mb-3" controlId="firstName">
                        <Form.Label className='text-muted'>First Name</Form.Label>
                        <Form.Control type="text" placeholder="First Name" onChange={event => {setFirstName(event.currentTarget.value)}} />
                        <FormErrors forField="first_name" errors={errors}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="lastName">
                        <Form.Label className='text-muted'>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Last Name" onChange={event => {setLastName(event.currentTarget.value)}}/>
                        <FormErrors forField="last_name" errors={errors}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="phoneNumber">
                        <Form.Label className='text-muted'>Phone Number</Form.Label>
                        <PhoneInput className="form-control" placeholder="Enter phone number" onChange={setPhoneNumber}/>
                        <FormErrors forField="phone_number" errors={errors}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label className='text-muted'>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={event => {setEmail(event.currentTarget.value)}}/>
                        <FormErrors forField="email" errors={errors}/>
                        <Form.Text className="text-muted">
                        This will be used to send receipts and confirm appointments
                        </Form.Text>
                    </Form.Group>

                    <Row>

                    <Col sm={6}>
                            <Form.Group className="mb-3" controlId="date">
                                <Form.Label className='text-muted'>Date</Form.Label>
                                <DatePicker 
                                className="form-control"
                                selected={date} 
                                dateFormat="dd-MM-yyyy" 
                                placeholderText="dd-mm-yyyy"
                                filterDate={isWeekend}
                                onChange={date => {setDate(date)}}
                                />
                                <FormErrors forField="date" errors={errors}/>
                            </Form.Group>
                        </Col>
                        <Col sm={6}>
                            <Form.Group className="mb-3" controlId="lastName">
                                <Form.Label className='text-muted'>Time</Form.Label>

                                <Row>                                
                                    <Col sm={6}>
                                    {["10:00 AM", "11:00 AM", "12:00 PM"].map((time) => {
                                        return(
                                            <Form.Check
                                            type='radio' 
                                            name="time"
                                            key={time}
                                            id={time}
                                            value={time}
                                            label={time}
                                            onChange={event => setTime(event.target.value)}
                                            />
                                        )
                                    })}
                                    </Col>
                                    <Col sm={6}>
                                    {["1:00 PM", "2:00 PM", "3:00 PM"].map((time) => {
                                        return(
                                            <Form.Check
                                            type='radio' 
                                            name="time"
                                            key={time}
                                            id={time}
                                            value={time}
                                            label={time}
                                            onChange={event => setTime(event.target.value)}
                                            />
                                        )
                                    })}
                                    </Col>
                                </Row>
                                <FormErrors forField="time" errors={errors}/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={6}>
                            <Form.Group className="mb-3" controlId="partySize">
                                <Form.Label className='text-muted'>Party Size - $14/guest</Form.Label>
                                <Form.Select aria-label="Default select example" onChange={event => {
                                    setPartySize(event.currentTarget.value)
                                    setAmount(Math.round(100*(event.currentTarget.value*12.50*1.12))/100)
                                }}>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                    <option value={6}>6</option>
                                    <option value={7}>7</option>
                                    <option value={8}>8</option>
                                    <option value={9}>9</option>
                                    <option value={10}>10</option>
                                </Form.Select> 
                                <FormErrors forField="party_size" errors={errors}/>                       
                            </Form.Group>
                        </Col>                             
                        <Col sm={6}>
                        <fieldset disabled>
                            <Form.Group className="mb-3" controlId="price">
                                <Form.Label className='text-muted'>Price - Tax Included</Form.Label>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text>$</InputGroup.Text>
                                    <Form.Control aria-label="Amount (to the nearest dollar)" value={amount}/>
                                </InputGroup>
                            </Form.Group>
                        </fieldset>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="creditCard">
                                <Form.Label className='text-muted'>Credit Card</Form.Label>
                                <CardElement className="form-control"/>
                                <FormErrors forField="creditCard" errors={errors}/>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Button variant="primary" type="submit" className="ms-3">
                        Book Now
                    </Button>
                </Form>
            </Col>
        </Row>
        </Card.Body>
        </Card>
    </Container>
    )
}

export default NewBookingForm