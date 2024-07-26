import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <div className=' container-fluid footer text-white  mt-3 ' >
    <div className=' justify-content-between'>
         
     <div className='row'>

      <div className='col-md-4'>
        <h5 className='p-4'>AURORA MOMENTS</h5>
        <p>At Aurora Moments,we specialize in transforming your dreams into reality through
          meticulously planned and flawlessly executed events.Whether it's a grand celebration, an intimate gathering, or a
          corporatefunction,we bring creativity, precision, and passion to every project. </p>
      </div>

      <div className='col-md-4'>
        <h5 className='p-4'>QUICK LINK</h5>
              <Link to="/" className="active text-white">Home</Link><br/>
              <Link to="About" className="text-white">About</Link><br/>
              <Link to="Service" className="text-white">Services</Link><br/>
              <Link to="Events" className=" text-white">Events</Link><br/>
              <Link to="Contact" className="text-white">Contact</Link>

       </div>

      <div className='col-md-4'>
        <h5 className='p-4'>CONTACT</h5>
        <p>7/a, Gautam View, 4 Bubglows<br/>Andheri (west)<br/>Mumbai</p>
        <i className="bi bi-telephone"></i><span>+918978653317</span><br/>
        <i className="bi bi-envelope"> </i><span>auroramoments@gmail.com</span>
      </div>
    </div>
   </div>

   <hr />

   <div className='d-flex justify-content-between pb-3'>
      <div>
        <h6 >copyright@gmail.com</h6>
      </div>

      <div>
        <i className="bi bi-instagram ml-2"></i>
        <i className="bi bi-facebook ml-2"></i>
        <i className="bi bi-twitter ml-2"></i>
      </div>
   </div>

   
</div>
  )
}

export default Footer
