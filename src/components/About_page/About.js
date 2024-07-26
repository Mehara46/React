import React from 'react'
import './About.css';
import Header from '../Header';

function About() {
  return (
    <div>
        <div className="aboutsection">
     <Header/>
     </div> 




  <div className='mx-2 mt-2 px-5'>
      <div className='row'>
        <div className='col-lg-6 py-5 para'>
          <h6 className="text-left text-secondary"> About Us</h6> 
           <p>We pride ourselves on delivering exceptional quality and unparalleledservice in every event we manage. Our 
              commitment to excellence is evident in our meticulous attention to detail, innovative solutions, and 
              dedication to client satisfaction. We believe that every event, whether large or small, should be a 
              masterpiece, crafted with precision and care. From the initial consultation to the final farewell, we ensure
              that every aspect of your event exceeds expectations, creating unforgettable experiences for you and your
               guests.
           </p>
         </div>

        <div className="col-lg-6">
          <img src="images/image9.jpg" alt="team" className='rounded my-5 img-fluid' />
        </div>
      </div>


     <div className='row'>
        <div className="col-lg-6">
          <img src="images/image5.jpg" alt="building" className='rounded my-5 img-fluid'/>
        </div>

        <div className='col-lg-6 py-5 para'>
          <p>Aurora Moments was founded in 2015 with a vision to revolutioniz with a passion for creating memorable 
              events has grown into a leading event management company known for its creativity, reliability,and 
              professionalism. Over the years, we have expanded our servic and expertise, embracing the latest trends and
              technologies to offer innovative solutions for all types of events. Our journey is marked by numerous 
              milestones, including successful collaborations with top-tier clients, award-winning events, and a reputation for
             excellence that continues to grow.
          </p>
         </div>
      </div>


     <div className='row'>
        <div className='col-lg-6 py-5 para'>
        <h6 className="text-left text-secondary"> Our Team</h6> 
          <p>Our team is comprised of dedicated professionals with diverse expertise in event planning, design, 
              production, and management.Each member brings a wealth of experience and creativity to the table, ensuring 
              that every event we handle is executed flawlessly.From our skilled planners and coordinators to our talented
              designers and production staff, everyone is committed to making your events a spectacular success. Together,
              we work collaboratively to bring your vision to life, paying attention to every detail and going above and
              beyond to deliver exceptional results.
           </p>
        </div>

        <div className="col-lg-6">
          <img src="images/image3.jpg" alt="team1" className='rounded my-5 img-fluid'/>
        </div>
     </div>



    <div className='row'>
       <div className="col-lg-6">
          <img src="images/image5.jpg" alt="building" className='rounded my-5 img-fluid'/>
       </div>

       <div className='col-lg-6 py-5 para'>
         <p>Aurora Moments was founded in 2015 with a vision to revolutioniz with a passion for creating memorable 
              events has grown into a leading event management company known for its creativity, reliability,and 
              professionalism. Over the years, we have expanded our servic and expertise, embracing the latest trends and
              technologies to offer innovative solutions for all types of events. Our journey is marked by numerous 
              milestones, including successful collaborations with top-tier clients, award-winning events, and a reputation for
              excellence that continues to grow.
          </p>
       </div>
    </div>  
</div>
</div>
      
   
  )
}

export default About