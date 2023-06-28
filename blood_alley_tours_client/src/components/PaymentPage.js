import { React } from "react";
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Spinner from 'react-bootstrap/Spinner'
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
// import FormErrors from './FormErrors';


const PaymentPage = props => {

    const stripe = useStripe()
    const elements = useElements()

    const {
        errors, loading, setLoading,
        handleSubmit, prevStep, firstName, 
        lastName, phoneNumber, email, 
        partySize, date, time, 
        price
    } = props


    const getDataAndSubmit = (event) => {

        event.preventDefault()
        
        setLoading(true)

        if (!stripe || !elements) {
            return;
        }
        
        const params = {
            card: elements.getElement(CardElement)
        }
        handleSubmit(params)
    }

    return(
        <Container className="py-3 mx-auto">
            <Card className="mb-5">

                <Card.Header className="bg-dark text-white">
                        <p className="h3">Payment</p>
                        <strong className="">Please confirm your personal details</strong>
                </Card.Header>

                <Card.Body className="bg-dark text-white">

                    <Row>
                        <div className="mx-auto border-bottom d-flex">
                            <Col xs={6} sm={6}>
                                <div className="p-5 text-center">
                                    First Name: {firstName}
                                </div>                        
                            </Col>

                            <Col xs={6} sm={6}>
                                <div className="p-5 text-center">
                                    Last Name: {lastName}
                                </div>
                            </Col>
                        </div>
                    </Row>

                    <Row>
                        <div className="mx-auto border-bottom d-flex">
                            <Col xs={6} sm={6}>
                                <div className="py-5 text-center">
                                    Phone Number: {phoneNumber}
                                </div>                        
                            </Col>

                            <Col xs={6} sm={6}>
                                <div className="py-5 text-center">
                                    Email: {email}
                                </div>
                            </Col>
                        </div>
                    </Row>

                    <Row>
                        <div className="mx-auto border-bottom d-flex">
                            <Col xs={6} sm={6}>
                                <div className="mx-auto p-5 text-center">
                                    Date: {date.toDateString()}
                                </div>
                            </Col>

                            <Col xs={6} sm={6}>
                                <div className="mx-auto p-5 text-center">
                                    Time: {time}
                                </div>
                            </Col>
                        </div>
                    </Row>

                    <Row>
                        <div className="mx-auto border-bottom d-flex">
                            <Col xs={6} sm={6}>
                                <div className="mx-auto p-5 text-center">
                                    Guests: {partySize}
                                </div>
                            </Col>

                            <Col xs={6} sm={6}>
                                <div className="mx-auto p-5 text-center">
                                    Price: {`$${price}`}
                                </div>
                            </Col>
                        </div>
                    </Row>

                    <Form.Group className="mx-auto my-3" controlId="creditCard">
                        <Form.Label className='text-muted'>Credit Card</Form.Label>
                        <CardElement className="form-control"/>
                        {/* <FormErrors forField="creditCard" errors={errors}/> */}

                        {
                            errors ? (
                                <div className="error-message">{errors}</div>
                                ) : (
                                false
                            )
                        }
                    <Button variant="outline-primary" type="submit" className="my-3"
                        onClick={() => prevStep()}
                    >
                        Return
                    </Button>

                    {
                        loading ? (
                            <Button variant="primary" type="submit" className="mx-1 my-3" disabled
                            >
                                <Spinner
                                as="span"
                                animation="border"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                                />
                                <span className="mx-1">
                                    Processing
                                </span>
                            </Button>
                        ) : (
                            <Button variant="primary" type="submit" className="mx-1 my-3"
                            onClick={(event) => getDataAndSubmit(event)}
                            >
                                Confirm
                            </Button>
                        )
                    }
                    </Form.Group>


                </Card.Body>

            </Card>
        </Container>

    )

}

export default PaymentPage;