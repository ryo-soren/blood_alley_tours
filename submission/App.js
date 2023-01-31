import './App.css';
import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import NewBookingPage from "./components/NewBookingPage";
import Footer from "./components/Footer";
import { Booking } from "./requests";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const App = () => {
  const stripeKey = loadStripe("pk_test_51MC4lkLD1jX0t9yxmT7kR1kxjH7HUq9k1qEXC0Ugxf2AYoUB7uSUav8ttFDCz0O749MGVtBhYrRVAZLRzF08crFz00wLokXzd8")

  return(
    <>
    {/* {console.log(stripeKey)} */}
    <div className="fill bg-dark">

      <Header/>

      <Routes>

        <Route exact path="/" element={
          <HomePage/>
        }/>
        <Route exact path="/new_booking" element={
          <Elements stripe={stripeKey}>
            <NewBookingPage/>
          </Elements>
        }/>
        <Route exact path="/about_us" element={
          <AboutPage/>
        }/>
        <Route exact path="contact_us" element={
          <ContactPage/>
        }/>

      </Routes>
      <Footer/>
    </div>
    </>
  )
}
export default App;
