import React, { useEffect } from 'react'
import './Home.css'
import Header from '../Header';
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <div>

      <div className="homesection">
        <Header />
        <div className="d-flex px-5 justify-content-md-center">
          <div className="headertag  text-left text-white" >
            <h2 className="heading">Life Is An Event<br />Make It Memorable</h2>
            <p>Transforming spaces into stunning environments that captivate your guests.Creating cohesive themes that
              reflect your style and vision.</p>
            <button type="button" className="btn btn-outline-light">Learn More</button>
          </div>
        </div>
      </div>

      <div className="mt-2  px-5">


        <div className="py-5 row">
          <div className="col-lg-6">
            <h6 className="text-left text-secondary">About Us</h6>
            <h3 className="text-left my-3">We Help Corporate to <br />Manage Event</h3>
            <p className='para'>At Aurora Moments,we specialize in transforming your dreams into reality through
              meticulously planned and flawlessly executed events.Whether it's a grand celebration, an intimate gathering, or a
              corporatefunction,we bring creativity, precision, and passion to every project.We believe that every event is a
              unique opportunity to create lasting memories. Our approach combines innovative design, seamless coordination, and
              personalized service to ensure your event is nothing short of spectacular.
            </p>
          </div>

          <div className="col-lg-6">
            <img src="images/image4.png" alt="event_image" className='rounded img-fluid'  />
          </div>
        </div>


        <div data-aos="zoom-y-out">
          <div className="container py-5">
            <h6 className="text-secondary">Popular Works</h6>
            <h3>OUR FEATURED WORKS</h3>
            <p>Transforming spaces into stunning environments that captivate your guests.Creating cohesive themes that
              reflect your style and vision.Providing a range of decor options, from classic to contemporary. Crafting
              bespoke decor elements to make your event unique.</p>
          </div>


          <div className="row py-4 text-secondary">
            <div className="col-lg-4 text-left">
              <img className='img-fluid' alt="frst" src="images/ann3.jpg"/>
              <h6 className='mt-2'>HM Factory Open Day</h6>
            </div>
            <div className="col-lg-4 text-left">
              <img className='img-fluid' alt="secnd" src="images/wed6.jpg"/>
              <h6 className='mt-2'>Enforco Global Product Launch</h6>
            </div>
            <div className="col-lg-4 text-left">
              <img className='img-fluid' alt="secnd" src="images/ann2.jpg"/>
              <h6 className='mt-2'> Aghstia's Anniversary</h6>
            </div>
          </div>

          <div className="row py-4 text-secondary">
            <div className="col-lg-4 text-left">
              <img className='img-fluid' alt="frst" src="images/fwork3.jpg"></img>
              <h6 className='mt-2'>Baislin Energy Press Event</h6>
            </div>
            <div className="col-lg-4 text-left">
              <img className='img-fluid' alt="secnd" src="images/wed5.jpg"></img>
              <h6 className='mt-2'>Zambark Wedding</h6>
            </div>
            <div className="col-lg-4 text-left">
              <img className='img-fluid' alt="secnd" src="images/wed2.jpg"></img>
              <h6 className='mt-2'>Hextraton Company Open Day</h6>
            </div>
          </div>
        </div>


        <div className="py-5" data-aos="fade-up" data-aos-duration="2000">
          <h6 className="text-secondary"> Services</h6>
          <h3>OUR PROCESS</h3></div>
        <div className="row py-5" data-aos="fade-up" data-aos-duratio="2000">

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

          <div className="col-lg-4 text-left grid">
            <h6 className='text-secondary'>03</h6>
            <h3>Walktrough</h3>
            <p>Transforming spaces into stunning environments that captivate your guests.Creating cohesive themes that
              reflect your style and vision.Providing a range of decor options, from classic to contemporary. </p>
          </div>
        </div>


        <div className="row py-5" data-aos="fade-up" data-aos-duration="2000">
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

        <div className="review_div mb-5">
          <h3 className='py-3' >OUR CUSTOMERS LOVE</h3>
          <div className="row">


            <div className="col-md-3" data-aos="flip-right">
              <div className="card  p-3 text-center">
                <div className="user-image">
                  <img src="images/img1.jpg" width="80" alt="event_image" className="rounded-circle img-fluid"></img>
                </div>
                <div>
                  <h5>Jones Klein</h5><br />
                  <p className='review'>Aurora Moments made our wedding day truly magical.From the initial planning stages
                    to the final execution,their team was incredibly professional and attentive to every detail.They
                    transformed our vision into a reality, and we couldn't have asked for a more perfect day.
                  </p>
                </div>
                <div className="ratings">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
              </div>
            </div>



            <div className="col-md-3" data-aos="flip-right">
              <div className="card p-3 text-center">
                <div className="user-image">
                  <img src="images/img2.jpg" alt="home_image" width="80" className="rounded-circle img-fluid"></img>
                </div>
                <div>
                  <h5>Lopez Mason</h5> <br />
                  <p className="review">We engaged Aurora Moments to manage our annual corporate gala, and the results were
                    outstanding and amazing. Their team handled everything , ensuring that our event ran
                    smoothly and impressed our guests and we received numerous compliments.
                  </p>
                </div>
                <div className="ratings">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
              </div>
            </div>


            <div className="col-md-3" data-aos="flip-right">
              <div className="card p-3 text-center">
                <div className="user-image">
                  <img src="images/img3.jpg" alt="card1" width="80" className="rounded-circle img-fluid"></img>
                </div>
                <div>
                  <h5 >Alexandra</h5><br />
                  <p className='review' >
                    From the lighting to the entertainment,was exceptional. Our executives and
                    clients had a wonderful time,and we received numerous compliments. Aurora Moments exceeded our
                    expectations, and we look forward to working with them again in the future.
                  </p>
                </div>
                <div className="ratings">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
              </div>
            </div>


            <div className="col-md-3" data-aos="flip-right">
              <div className="card p-3 text-center">
                <div className="user-image">
                  <img src="images/img4.jpg" alt="card2" width="80" className="rounded-circle img-fluid"></img>
                </div>
                <div>
                  <h5 >Yakub Zafar</h5><br />
                  <p className='review'> Celebrating our 25th anniversary with Aurora Moments was an incredible experience.
                    They took care of every aspect of the party,on the auspicious evening .The amazing
                    ambiance they created was enchanting, and the personalized touches made it feel so special.
                  </p>
                </div>
                <div className="ratings">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home