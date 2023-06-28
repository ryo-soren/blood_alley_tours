import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import logo from "../blood_alley_tours_images/gassy_jack.PNG"
import "../index.css"

const Header = () => {
    return(

        <>
        <Navbar bg="dark" variant="dark">
            <Container fluid>
                <Navbar.Brand href="/">
                    <img src={logo} className="logo ms-3" alt="logo"/>
                </Navbar.Brand>
                <Nav className="me-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/new_booking">Book Now</Nav.Link>
                  <Nav.Link href="/contact_us">Contact</Nav.Link>
                </Nav>
          </Container>
        </Navbar>        
        </>
    )
}

export default Header