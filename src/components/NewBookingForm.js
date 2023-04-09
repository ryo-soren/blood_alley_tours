import React, { useState } from 'react';
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
require('react-datepicker/dist/react-datepicker.css')

const NewBookingForm = props => {
    const [validated, setValidated] = useState(false);

    const {
        // errors, time, 
        nextStep, firstName, setFirstName, 
        lastName, setLastName, phoneNumber, setPhoneNumber, email, setEmail, 
        partySize, setPartySize, date, setDate, setTime, 
        price, setPrice
    } = props

    const handleSubmit = (event) => {
        
        const form = event.currentTarget;
        if ((new Date().getDate() === date.getDate() && new Date().getMonth() === date.getMonth()) || form.checkValidity() === false) {
            event.preventDefault();
            if (new Date().getDate() === date.getDate() && new Date().getMonth() === date.getMonth()) {
                setDate('')
            }
            event.stopPropagation();
        }else{
            console.log(date);
            nextStep()
        }
                
        setValidated(true);
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
                        <strong>Fill out the info below to book a tour</strong>
                </Card.Header>

                <Card.Body className="bg-dark text-white">

                        <Form noValidate validated={validated} onSubmit={handleSubmit}>

                            <Form.Group className="mb-3" controlId="firstName">
                                <Form.Label className='text-muted'>First Name *</Form.Label>
                                <Form.Control 
                                required 
                                type="text"
                                placeholder="First Name" 
                                value={firstName} 
                                onChange={event => setFirstName(event.currentTarget.value)} />
                                <Form.Control.Feedback type="invalid">
                                    First name is required 
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="lastName">
                                <Form.Label className='text-muted'>Last Name *</Form.Label>
                                <Form.Control 
                                required 
                                type="text" 
                                placeholder="Last Name" 
                                value={lastName} 
                                onChange={event => setLastName(event.currentTarget.value)}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Last name is required
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="phoneNumber">
                                <Form.Label className='text-muted'>Phone Number</Form.Label>
                                <PhoneInput 
                                 
                                className="form-control" 
                                placeholder="Enter phone number" 
                                value={phoneNumber}
                                onChange={setPhoneNumber}
                                />
   
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="email">
                                <Form.Label className='text-muted'>Email Address *</Form.Label>
                                <Form.Control 
                                required 
                                type="email" 
                                placeholder="Enter email" 
                                value={email} 
                                onChange={event => setEmail(event.currentTarget.value)}
                                />
                                <Form.Text className="text-muted">
                                    This will be used to send receipts and confirm appointments
                                </Form.Text>
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid email 
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Row>

                                <Col sm={6}>

                                    <Form.Group className="mb-3" controlId="date">
                                        <Form.Label className='text-muted'>Date *</Form.Label>
                                        <DatePicker 
                                        required
                                        className="form-control"
                                        selected={date} 
                                        placeholderText="dd/mm/yyyy"
                                        filterDate={isWeekend}
                                        todayButton="Return to Today"
                                        minDate={new Date()}
                                        value={date}
                                        onChange={date => {setDate(date)}}
                                        />
                                        {
                                            date ? (
                                                    false
                                                ) : (
                                                    <div className='error-message'>Please choose a valid date</div>
                                            )
                                        }
                                    </Form.Group>

                                </Col>

                                <Col sm={6}>

                                    <Form.Group className="mb-3" controlId="time">
                                        <Form.Label className='text-muted'>Time *</Form.Label>
                                        <Row>

                                            <Col sm={6}>
                                                {["10:00 AM", "11:00 AM"].map((hour) => {
                                                    return(
                                                        <Form.Check
                                                        required
                                                        type='radio' 
                                                        name="hour"
                                                        key={hour}
                                                        id={hour}
                                                        value={hour}
                                                        label={hour}
                                                        onChange={event => setTime(event.target.value)}
                                                        />
                                                    )
                                                })}
                                                <Form.Check 
                                                    required
                                                    type='radio' 
                                                    name="hour"
                                                    key={"12:00 PM"}
                                                    id={"12:00 PM"}
                                                    value={"12:00 PM"}
                                                    label={"12:00 PM"}
                                                    onChange={event => setTime(event.target.value)}
                                                    feedback="Please choose a time"
                                                    feedbackType="invalid"
                                                />
                                            </Col>

                                            <Col sm={6}>
                                                {["1:00 PM", "2:00 PM", "3:00 PM"].map((hour) => {
                                                    return(
                                                        <Form.Check 
                                                        required
                                                        type='radio' 
                                                        name="hour"
                                                        key={hour}
                                                        id={hour}
                                                        value={hour}
                                                        label={hour}
                                                        onChange={event => setTime(event.target.value)}
                                                        />
                                                    )
                                                })}
                                            </Col>

                                        </Row>
                                    </Form.Group>

                                </Col>

                            </Row>

                            <Row className='mb-3'>

                                <Col sm={6}>
                                    <Form.Group className="mb-3" controlId="partySize">
                                        <Form.Label className='text-muted'>Guests - $14/guest</Form.Label>
                                        <Form.Select 
                                        required
                                        value={partySize} 
                                        onChange={event => {
                                            setPartySize(event.currentTarget.value)
                                            setPrice(Math.round(event.currentTarget.value*12.50*1.12))
                                        }}
                                        >
                                            <option value={1}>1</option>
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
                                    </Form.Group>
                                </Col>   

                                <Col sm={6}>
                                <fieldset disabled>
                                    <Form.Group className="mb-3" controlId="price">
                                        <Form.Label className='text-muted'>Price - Tax Included</Form.Label>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Text>$</InputGroup.Text>
                                            <Form.Control aria-label="price (to the nearest dollar)" value={price}/>
                                        </InputGroup>
                                    </Form.Group>
                                </fieldset>
                                </Col>

                            </Row>

                            <Button variant="primary" type="submit" className=""
                            >
                                Proceed to Payment
                            </Button>

                        </Form>
                        
                </Card.Body>

            </Card>
        </Container>
    )
}

export default NewBookingForm
