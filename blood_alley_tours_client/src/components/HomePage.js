import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import steamClock from "../blood_alley_tours_images/steam_clock.jpeg"
import gassyJack from "../blood_alley_tours_images/gassy_jack.jpeg"
import harbourCenter from "../blood_alley_tours_images/harbour_center.jpeg"
import waterSt from "../blood_alley_tours_images/water_st.jpeg"

const HomePage = () => {
    return (
        <>
        <Container className='text-white'>
            <h3 className='text-center m-5'>Blood Alley Tours</h3>
            <Row>
                <Col>
                <p className='mx-5'>Gastown is the historic neighbourhood in with a rich history. 
                As the first downtown core of the city, the neighbourhood has transitioned into a 
                centre of innovation and truly memorable experiences, for locals and tourists alike, 
                while maintaining a strong connection to its history. Containing something for 
                everyone, Gastown offers a diverse mix of retail and dining options housed 
                within authentic heritage architecture, alongside a vibrant creative and tech 
                scene.</p>
                </Col>

                <Col>
                <p className="my-auto mx-5">We will be taking you on a 1 hour long tour of various 
                attractions gastown has to offer. This includes sites such as the steam clock
                We will be starting off at the waterfront station where we will all meet, then make
                our way over to the sea wall to start. </p>
                </Col>
            </Row>
            <Container className='mt-5'>
                <Row>
                    <Col>
                        <img src={steamClock} className="img-fluid mb-5" alt="Responsive"/>
                        <img src={harbourCenter} className="img-fluid mb-5" alt="Responsive"/>
                    </Col>

                    <Col>
                        <img src={waterSt} className="img-fluid mb-5" alt="Responsive"/>
                        <img src={gassyJack} className="img-fluid mb-5" alt="Responsive"/>
                    </Col>

                </Row>
            </Container>
            <Button variant='primary' className='fixed' size="lg" href="/new_booking">Book Now</Button>
        </Container>
        </>   
    )
}

export default HomePage