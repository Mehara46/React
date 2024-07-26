import React, { useState } from 'react'
import './Event.css';
import Header from '../Header';


const Events = () => {
  const [eventVariable, setEventVariable] = useState('wedding');

  const Event = (data) => {
    setEventVariable(data);
    console.log(data);
  };

  return (
    <div >

      <div className="eventsection">
        <Header/>
      </div>

      <div className="container p-5">
        <h6 className="text-secondary">Our Popular Works</h6>
        <h3>EVENT MANAGEMENT</h3>
        <p>Transforming spaces into stunning environments that captivate your guests.Creating cohesive themes that
          reflect your style and vision.Providing a range of decor options, from classic to contemporary. Crafting
          bespoke decor elements to make your event unique.From concept to execution, we handle every detail to ensure your event is seamless and spectacular.
          Personalized meetings to understand your vision, preferences, and requirements.</p>
      </div>
      <div className=''>

        <button type="button" onClick={() => Event('wedding')} className="btn btn-outline-secondary m-3">Wedding
        </button>

        <button type="button" onClick={() => Event('birthday')} className="btn btn-outline-secondary mx-2 ">Birthday
        </button>

        <button type="button" onClick={() => Event('anniversary')} className="btn btn-outline-secondary mx-2 ">Anniversary
        </button>


        {eventVariable === 'wedding' && (
          <div className="row px-5 mx-2">
            <div className="col-lg-6 pb-4">
            <img src="images/wed1.jpg" alt="First Slide"  className='img-fluid'/>
            </div>
            <div className="col-lg-6 pb-4">
            <img src="images/wed2.jpg" alt="second Slide"  className='img-fluid'/>
            </div>
            <div className="col-lg-6 pb-4">
            <img src="images/wed3.jpg" alt="First Slide"  className='img-fluid'/>
            </div>
            <div className="col-lg-6 pb-4">
            <img src="images/ann3.jpg" alt="second Slide"  className='img-fluid'/>
            </div>
            <div className="col-lg-6 pb-4">
            <img src="images/wed5.jpg" alt="First Slide"  className='img-fluid'/>
            </div>
            <div className="col-lg-6 pb-4">
            <img src="images/wed6.jpg" alt="second Slide"  className='img-fluid'/>
            </div>
            </div>
        
        )}

        {eventVariable === 'birthday' && (
          <div className="row px-5 mx-2">
          <div className="col-lg-6 pb-4">
          <img src="images/birth1.jpg" alt="First Slide"  className='img-fluid'/>
          </div>
          <div className="col-lg-6 pb-4">
          <img src="images/birth2.jpg" alt="second Slide"  className='img-fluid'/>
          </div>
          <div className="col-lg-6 pb-4">
          <img src="images/birth3.jpg" alt="First Slide"  className='img-fluid'/>
          </div>
          <div className="col-lg-6 pb-4">
          <img src="images/ann3.jpg" alt="second Slide"  className='img-fluid'/>
          </div>
          <div className="col-lg-6 pb-4">
          <img src="images/birth5.jpg" alt="First Slide"  className='img-fluid'/>
          </div>
          <div className="col-lg-6 pb-4">
          <img src="images/birth6.jpg" alt="second Slide"  className='img-fluid'/>
          </div>
          </div>


        )}

        {eventVariable === 'anniversary' && (
          <div className="row px-5 mx-2">
          <div className="col-lg-6 pb-4">
          <img src="images/ann1.jpg" alt="First Slide"  className='img-fluid'/>
          </div>
          <div className="col-lg-6 pb-4">
          <img src="images/ann2.jpg" alt="second Slide"  className='img-fluid'/>
          </div>
          <div className="col-lg-6 pb-4">
          <img src="images/ann3.jpg" alt="First Slide"  className='img-fluid'/>
          </div>
          <div className="col-lg-6 pb-4">
          <img src="images/ann3.jpg" alt="second Slide"  className='img-fluid'/>
          </div>
          <div className="col-lg-6 pb-4">
          <img src="images/ann5.jpg" alt="First Slide"  className='img-fluid'/>
          </div>
          <div className="col-lg-6 pb-4">
          <img src="images/ann6.jpg" alt="second Slide"  className='img-fluid'/>
          </div>
          </div>

        )}

        <button type="button" onClick={() => Event('tap to top')} className="btn btn-outline-secondary m-3">TAP TO TOP
        </button>
      </div>

    </div>
  )
}

export default Events