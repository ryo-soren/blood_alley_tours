import {useState} from "react"
import { Booking } from "../requests"
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Spinner from "react-bootstrap/Spinner";
import { useNavigate } from "react-router-dom";
import FormErrors from './FormErrors';

const ContactPage = () => {
    const [email, setEmail] = useState('')
    const [body, setBody] = useState('')
    const [errors, setErrors] = useState([])
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault()
        setLoading(true)
        const params = {
            email: email,
            body: body
        }

        Booking.contact(params).then(contact_req => {
            setLoading(false)
            if (contact_req.status === 422) {
                    console.log(`Errors: ${contact_req.errors}`, contact_req.errors);
                    setErrors(contact_req.errors)
            } else if(contact_req.id){
                navigate('/')
            }
        })
    }
    return(
        <>
        <Container className="py-3 mx-auto">
            <Card className="mb-5">
            <Card.Header className="bg-dark text-white">
                    <p className="h3">Contact Us</p>
                    <strong className="">Have any questions? Let us know below</strong>
            </Card.Header>
            <Card.Body className="bg-dark text-white">
                <Form className="mx-3" onSubmit={handleSubmit}>

                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" onChange={event => {setEmail(event.currentTarget.value)}}/>
                        <FormErrors forField="email" errors={errors}/>                       
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="body">
                        <Form.Label>Body</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="We will reach out to you shortly by email" onChange={event => {setBody(event.currentTarget.value)}}/>
                        <FormErrors forField="body" errors={errors}/>                       
                    </Form.Group>

                {
                    loading ? (
                        <Button className="ms-3" type="submit" variant="primary" Disabled>
                            <Spinner
                                as="span"
                                animation="border"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                                /> 
                                <span className="mx-1">
                                    Loading
                                </span>
                        </Button>
                    ):(
                        <Button className="ms-3" type="submit" variant="primary">Submit</Button>
                    )
                }
                </Form>
            </Card.Body>
            </Card>
        </Container>

        <div className="block">
        </div>
        </>
    )
}

export default ContactPage