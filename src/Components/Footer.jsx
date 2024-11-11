import React, { useEffect } from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';


const Footer = () => {
  const location = useLocation();
  useEffect(()=>{
    window.scrollTo(0,0);
  },[location]);
  return (
    <>
    <footer className='text-center bg-dark text-white py-4' >
    <div className='container'>
        <div className='row'>
            <div className=' col-md-4 mb-4'>
                <h5>About us</h5>
                <p>We are Provide Travel Blogs of Kashmir India.
                You can find different activities to do in this region.</p>
            </div>
            <div className='col-md-4 mb-4 text-center'>
            <h5>Quick Links</h5>
            <ul className='list-unstyled d-flex flex-column'>
              <li><Link to="/" className='text-decoration-none footer-link text-light mx-3'>Home</Link></li>
              <li><Link to="/Aboutus" className='text-decoration-none footer-link text-light mx-3'>AboutUs</Link></li>
              <li><Link to="/Farming" className=' text-decoration-none footer-link text-light mx-3'>Farming</Link></li>
            </ul>
         </div>
          
            <div className= 'col-md-4 mb-4'>
                <h5>Contact us</h5>
                <p>123 Lajpat Nagar <br/>Alwar, Rajasthan, 301001<br/>Email: mkblogapp@gmail.com</p>
            </div>
            </div>  
            <div className='text-center my-3'>
             <p> Follow us on: </p>
            <div className="social-links d-flex justify-content-center">
              <Link to="https://facebook.com" target='_blank' className="text-light mx-2"><FaFacebookF /></Link>
              <Link to="https://twitter.com" target='_blank' className="text-light mx-2"><FaTwitter /></Link>
              <Link to="https://instagram.com" target='_blank' className="text-light mx-2"><FaInstagram /></Link>
              <Link to="https://linkedin.com" target='_blank' className="text-light mx-2"><FaLinkedinIn /></Link>
            </div>
            </div>
            
    <div className='text-center mt-3'>
       <p className='small'>&copy; {new Date().getFullYear()} MK Blog App. All Rights Reserved</p>
    </div>
            </div>
    </footer>
    </>
  )
}

export default Footer