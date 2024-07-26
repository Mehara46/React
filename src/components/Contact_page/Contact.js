import React, { useState } from 'react'
import './Contact.css';
import Header from '../Header';



function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

  };

  return (
    <div>
      <div className="contactsection">
        <Header/>
      </div>

      <div className="mt-2 mx-2 px-5">
        <div className='py-4 container justify-content-center'>
          <h6 className="text-secondary">Contact Us</h6>
          <h3>Get In Touch</h3>
          <p className='px-5'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some
            form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a
            passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
          <i className="bi bi-facebook pr-2"></i>
          <i className="bi bi-twitter pr-2"></i>
          <i className="bi bi-instagram pr-2"></i>
          <i className="bi bi-youtube pr-2"></i>
        </div>

        <div className='py-5 row'>

          <div className='col-lg-4'>
            <i className="bi bi-geo-alt-fill"></i>
            <h4><b>Our Location</b></h4>
            <p>7/a, Gautam View, 4 Bubglows<br/>
            Andheri (west),Mumbai</p>
          </div>
          <div className='col-lg-4'>
            <i className="bi bi-telephone-fill"></i>
            <h4><b>Call Us</b></h4>
            <p>+929876542456<br/>
            +912567456478</p>
          </div>
          <div className='col-lg-4'>
            <i className="bi bi-envelope-fill"></i>
            <h4><b>Email Us</b></h4>
            <p>aurora@gmail.com<br/>
            auroramoments@gmail.com</p>
          </div>

        </div>


        <div className='row  overflow-hidden'>
          <div className="col-lg-6 " width="100%" >
            <div className=' formborder p-5 bg-dark text-white'>
              <form onSubmit={handleSubmit}>
                <h2>Contact </h2>
                <div className=' row'>
                  <div className="mb-3 col">
                    <label htmlFor="firstName" className="form-label">First Name:</label>
                    <input type="text" className="form-control" id="firstName" name="firstName" value={formData.firstName}
                      onChange={handleChange} required />
                  </div>

                  <div className="mb-3 col">
                    <label htmlFor="lastName" className="form-label">Last Name:</label>
                    <input type="text" className="form-control" id="lastName" name="lastName" value={formData.lastName}
                      onChange={handleChange} required />
                  </div>
                </div>

                <div className='row'>
                  <div className="mb-3 col">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input type="email" className="form-control" id="email" name="email" value={formData.email}
                      onChange={handleChange} required />
                  </div>

                  <div className="mb-3 col">
                    <label htmlFor="phone" className="form-label">Phone Number:</label>
                    <input type="tel" className="form-control" id="phone" name="phone" value={formData.phone}
                      onChange={handleChange} required />
                  </div>
                </div>


                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message:</label>
                  <textarea className="form-control" id="message" name="message" value={formData.message}
                    onChange={handleChange} rows="4" required />
                </div>

                <button type="submit" className="btn btn-light">Submit</button>
              </form>
            </div>

          </div>

          <div className="col-lg-6">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.366220565626!2d76.29211287407747!3d9.98657687326752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d38724119a9%3A0x16e1e0ac3256fc6d!2sSt%20Francis%20Xavier%20Church%20Rd%2C%20Kathrikadavu%2C%20Kaloor%2C%20Ernakulam%2C%20Kochi%2C%20Kerala%20682017!5e0!3m2!1sen!2sin!4v1720508641944!5m2!1sen!2sin" title="Description of iframe content" width="100%" height="515" loading="lazy" referrerolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>

  )
}


export default Contact