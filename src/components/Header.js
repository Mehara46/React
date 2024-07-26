import './Home_page/Home.css'
import { Link, } from 'react-router-dom';
import React from 'react'

function Header() {

  return (

    <div className="bg-transparent">
     <nav className="navbar navbar-expand-md navbar-light ">
          <img src="images/logo.jpg" alt="first_image" className='rounded-circle' height="50px" width="50px" />

          <p className="navbar-brand txt text-white  m-4">AURORA MOMENTS </p>
          <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-align-justify"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg>
                    </button> 

          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ml-auto ">
              <Link to="/" className="nav-item nav-link text-white txt" >HOME</Link>
              <Link to="About" className="nav-item nav-link text-white txt ">ABOUT</Link>
              <Link to="Service" className="nav-item nav-link text-white tx">SERVICES</Link>
              <Link to="Events" className="nav-item nav-link text-white  txt">EVENTS</Link>
              <Link to="Contact" className="nav-item nav-link text-white  txt">CONTACT </Link>
            </div>
          </div>
        </nav>
      </div>



  )
}

export default Header;