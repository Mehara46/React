import React from 'react'
import './service.css'
import Header from '../Header';


function Service() {
  return(
    <div >

     <div className="servicesection">
      <Header/>
     </div> 
     <div className="container p-5">
     <h6 className="text-secondary"> Our Services</h6> 
     <h3 className="my-3">CORPORATE EVENT MANAGEMENT</h3>
     <p>Transforming spaces into stunning environments that captivate your guests.Creating cohesive themes that 
                  reflect your style and vision.Providing a range of decor options, from classic to contemporary. Crafting
                  bespoke decor elements to make your event unique.</p>
     </div>

  <div className="px-5">
      <div className="row py-5">
        <div className="col-lg-6 text-left">
      
          <img src="images/about3.jpg" alt="img" className="card-image-top img-fluid"/>
          <h4 className="my-2">Event Planning & Coordination</h4>
          <p  className="my-2 ">From concept to execution, we handle every detail to ensure your event is seamless and spectacular.
                   Personalized meetings to understand your vision, preferences, and requirements.Creating and managing a
                    detailed budget to keep expenses on track.</p>
       </div>

       <div className="col-lg-6 text-left">
          <img src="images/ann3.jpg" alt="img" className="card-image-top img-fluid"/>
          <h4 className="my-2 ">Venue Selection & Management</h4>
          <p> Finding the perfect venue is crucial for a memorable event.Identifying and visiting potential venues 
                  based on your criteria.Ensuring you get the best terms and value for your chosen venue.Managing 
                  venue-related logistics such as layout, seating arrangements, and more.</p>
       </div>
       </div>

       <div className="row py-5">
       <div className="col-lg-6 text-left">
          <img src="images/wed2.jpg" alt="img" className="card-image-top img-fluid"/>
          <h4 className="my-2">Design & Decor</h4>
          <p>Transforming spaces into stunning environments that captivate your guests.Creating cohesive themes that 
                  reflect your style and vision.Providing a range of decor options, from classic to contemporary. Crafting
                  bespoke decor elements to make your event unique.</p>
       </div>
       <div className="col-lg-6 text-left">
        <img src="images/wed5.jpg" alt="img" className="card-image-top img-fluid"/>
        <h4 className="my-2">Entertainment & Production</h4>
        <p  className="my-2">Keeping your guests engaged and entertained throughout the event. Arranging live bands, DJs, 
                    performers, and more.Providing cutting-edge AV equipment and technical support.Enhancing ambiance with
                    professional lighting solutions.</p>
      </div>
       </div>



    <div className="row py-5">
      

      <div className="col-lg-6 text-left">
         <img src="images/ann2.jpg" height="250px" alt="img" width="100%" className="card-image-top img-fluid"/>
         <h4 className="my-2 ">Catering & Menu Planning</h4>
        <p> Offering delectable cuisine tailored to your event.Collaborating with top chefs to create custom menus.
              Organizing tastings to ensure the menu meets your expectations.Managing food and beverage service, including
              special dietary requirements.</p>
      </div>

     <div className="col-lg-6 text-left">
         <img src="images/ann6.jpg" alt="img" className="card-image-top img-fluid"/>
         <h4 className="my-2 ">Food & Beverages</h4>
         <p>From concept to execution, we handle every detail to ensure your event is seamless and spectacular.
                   Personalized meetings to understand your vision, preferences, and requirements.Creating and managing a
                    detailed budget to keep expenses on track.</p>
     </div>
   </div>

   <div className='p-5'>
     <h3>OUR PROCESS</h3></div>
     <div className="row px-5">
 
      <div className="col-lg-4 text-left grid">
        <h6 className='text-secondary'>01</h6>
        <h3>Initial Inquiry</h3>
        <p>From concept to execution, we handle every detail to ensure your event is seamless and spectacular.
       Personalized meetings to understand your vision, preferences, and requirements.</p>
     </div>

     <div className="col-lg-4 text-left grid">
       <h6 className='text-secondary'>02</h6>
       <h3>Pre-Production</h3>
       <p>Finding the perfect venue is crucial for a memorable event.Identifying and visiting potential venues 
        based on your criteria.Ensuring you get the best terms and value for your chosen venue.</p>
     </div>

    <div className="col text-left grid">
      <h6 className='text-secondary'>03</h6>
      <h3>Walktrough</h3>
      <p>Transforming spaces into stunning environments that captivate your guests.Creating cohesive themes that 
      reflect your style and vision.Providing a range of decor options, from classic to contemporary. </p>
   </div>
</div>


 <div className="row p-5">
  <div className="col-lg-4 text-left grid">
    <h6 className='text-secondary'>04</h6>
    <h3>Quote</h3>
    <p>Finding the perfect venue is crucial for a memorable event.Identifying and visiting potential venues 
    based on your criteria.Ensuring you get the best terms and value for your chosen venue.</p>
  </div>

  <div className="col-lg-4 text-left grid">
    <h6 className='text-secondary'>05</h6>
    <h3>Production</h3>
    <p>ransforming spaces into stunning environments that captivate your guests.Creating cohesive themes that 
    reflect your style and vision.Providing a range of decor options, from classic to contemporary.</p>
  </div>

  <div className="col text-left grid">
    <h6 className='text-secondary'>06</h6>
    <h3>Deliver</h3>
    <p>From concept to execution, we handle every detail to ensure your event is seamless and spectacular.
    Personalized meetings to understand your vision, preferences, and requirements.</p>
  </div>
</div>


</div>
</div>
)
}

export default Service