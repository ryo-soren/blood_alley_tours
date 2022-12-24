import React from 'react';

function Footer(){

return(
    <>
        <div className='mt-5'>

        <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <p className="col-md-4 mb-0 text-muted">© 2022 Blood Alley Tours, Inc</p>

            <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
            <svg className="bi me-2" width="40" height="32"></svg>
            </a>

            <ul className="nav col-md-4 justify-content-end">
            <li className="nav-item"><a href="/" className="nav-link px-2 text-primary">Home</a></li>
            <li className="nav-item"><a href="/new_booking" className="nav-link px-2 text-primary">Book Now</a></li>
            <li className="nav-item"><a href="/contact_us" className="nav-link px-2 text-primary">Contact Us</a></li>
            </ul>
            <p className='mx-5 mt-5 text-muted'>Our experiences take place on the unceded ancestral territories of the xʷməθkʷəy̓əm (Musqueam), Sḵwx̱wú7mesh (Squamish), and səlilwətaɬ (Tsleil-Waututh) Nations.</p>
        </footer>
        </div>
        </div>
    </>
)

}

export default Footer