import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import { Offcanvas } from "react-bootstrap"
import logo from "../blood_alley_tours_images/gassy_jack.PNG"
import "../index.css"

// import { NavDropdown } from "react-bootstrap"
const Header = () => {
    return(

        <>
        {/* <Navbar bg="light" expand={'md'} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand> */}
        <Navbar bg="dark" variant="dark" expand={'md'} >
            <Container fluid>
                <Navbar.Brand href="/">
                    <img src={logo} className="logo ms-3" alt="logo"/>
                </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-md`}
              aria-labelledby={`offcanvasNavbarLabel-expand-md`}
              placement="end"
            >
              <Offcanvas.Body>
                <Nav className="justify-content-end">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/new_booking">Book Now</Nav.Link>
                    <Nav.Link href="/contact_us">Contact</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>        
        </>
    )
}

export default Header