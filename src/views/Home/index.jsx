import React,{useEffect} from 'react';  
import { Link } from "react-router-dom";
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import WOW from 'wowjs';
import './index.scss'

const Home = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  }, [])

  const options_testimonial = {
    autoplay: true,
    smartSpeed: 1000,
    center: true,
    margin: 24,
    dots: true,
    loop: true,
    nav : false,
    responsive: {
        0:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        }
    }
  }

  const options_dish = {
    loop:true,
    margin:10,
    responsiveClass:true,
    dots:true,
    autoplay: true,
    autoplayTimeout:2000,
    autoplayHoverPause: true,
    responsive:{
        0: {
            items: 3
        },
        800: {
            items: 3
        },
        576: {
            items: 3
        },
        991: {
            items: 6
        }
    }
  }

  return (  
  <div>
        <div className="container-xxl py-5 bg-dark hero-header mb-5">
      <div className="container my-5 py-5">
        <div className="row align-items-center g-5">
          <div className="col-lg-6 text-center text-lg-start">
            <h1 className="display-3 text-white animated slideInLeft headFont">Enjoy Our<br />Delicious Meal</h1>
            <p className="text-white animated slideInLeft mb-4 pb-2 headFont">An authentic Chinese experience in the heart of the Capital</p>
            <Link to="/contact" className="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft">Book A Table</Link>
          </div>
          <div className="col-lg-6 text-center text-lg-end overflow-hidden">
            <img className="img-fluid" src={"assets/img/bar.png"} alt={"bar"} />
          </div>
        </div>
      </div>
    </div>
    {/* slider start */}
    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="text-center">
        <h3 className="section-title ff-secondary text-center text-primary fw-normal">Our <span>Dishes</span></h3>
      </div>
      <OwlCarousel {...options_dish}
           >  
           <div className="item"> <img src={"assets/img/gallery/10.jpg"} alt={"dish"}/> </div> 
           <div className="item"> <img src={"assets/img/gallery/11.jpg"} alt={"dish"}/> </div> 
           <div className="item"> <img src={"assets/img/gallery/12.jpg"} alt={"dish"}/> </div> 
           <div className="item"> <img src={"assets/img/gallery/13.jpg"} alt={"dish"}/> </div> 
           <div className="item"> <img src={"assets/img/gallery/14.jpg"} alt={"dish"}/> </div> 
           <div className="item"> <img src={"assets/img/gallery/15.jpg"} alt={"dish"}/> </div> 
           <div className="item"> <img src={"assets/img/gallery/16.jpg"} alt={"dish"}/> </div> 

      </OwlCarousel>  
      <div className=" heading_container heading_center">
      <Link className="btn btn-primary py-2 px-4" to="/gallery">Discover More</Link>
      </div>
    </div>
    {/* About Start */}
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <div className="row g-3">
              <div className="col-6 text-start">
                <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.1s" src={"assets/img/about-1.jpg"} />
              </div>
              <div className="col-6 text-start">
                <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.3s" src={"assets/img/about-2.jpg"} style={{marginTop: '25%'}} />
              </div>
              <div className="col-6 text-end">
                <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.5s" src={"assets/img/about-3.jpg"} />
              </div>
              <div className="col-6 text-end">
                <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.7s" src={"assets/img/about-4.jpg"} />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <h3 className="section-title ff-secondary text-start text-primary fw-normal">About Us</h3>
            <h1 className="mb-4">Welcome to Tasting China</h1>
            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.</p>
            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
            <div className="row g-4 mb-4">
              <div className="col-sm-6">
                <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                  <h1 className="flex-shrink-0 display-5 text-primary mb-0" data-toggle="counter-up">15</h1>
                  <div className="ps-4">
                    <p className="mb-0">Years of</p>
                    <h6 className="text-uppercase mb-0">Experience</h6>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                  <h1 className="flex-shrink-0 display-5 text-primary mb-0" data-toggle="counter-up">50</h1>
                  <div className="ps-4">
                    <p className="mb-0">Popular</p>
                    <h6 className="text-uppercase mb-0">Master Chefs</h6>
                  </div>
                </div>
              </div>
            </div>
            <Link className="btn btn-primary py-3 px-5 mt-2" to="/contact">Read More</Link>
          </div>
        </div>
      </div>
    </div>
    {/* About End */}
    {/* Team Start */}
    <div className="container-xxl pt-5 pb-3">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h3 className="section-title ff-secondary text-center text-primary fw-normal">Team Members</h3>
          <h1 className="mb-5">Our Master Chef</h1>
        </div>
        <div className="row g-2">
          <div className="col-lg-5 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="team-item text-center rounded overflow-hidden">
              <div className="rounded-circle overflow-hidden m-4">
                <img className="img-fluid" src={"assets/img/chef.png"} alt={"chef"} />
              </div>
              <h5 className="mb-0">Sean</h5>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="chef">
              <h2>Experience</h2>
              <ul>
                <li>Over 20 years of chef experience</li>
                <li>International 5-star hotel chef and team manager</li>
                <li>Joined the Australian Parliament's State Banquet Team in 2008</li>
                <li>Member of the banqueting group during the visit of Chinese, American and British heads of state to Australia</li>
              </ul>
              <p />
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Team End */}
    {/* Testimonial Start */}
    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container">
        <div className="text-center">
          <h3 className="section-title ff-secondary text-center text-primary fw-normal">Testimonial</h3>
          <h1 className="mb-5">Our Clients Say!!!</h1>
        </div>
        <OwlCarousel 
        {...options_testimonial}
         className="testimonial-carousel">
          <div className="testimonial-item bg-transparent border rounded p-4">
            <i className="fa fa-quote-left fa-2x text-primary mb-3" />
            <p>The best Chinese food in Canberra, especially recommend the braised pork, spicy hot pot, lobster tail, abalone and hot pot. Well worth a try!</p>
            <div className="d-flex align-items-center">
              <img className="img-fluid flex-shrink-0 rounded-circle" src="assets/img/testimonial-1.jpg" style={{width: 50, height: 50}} />
              <div className="ps-3">
                <h5 className="mb-1">Li Jiarui</h5>
                <small>Profession</small>
              </div>
            </div>
          </div>
          <div className="testimonial-item bg-transparent border rounded p-4">
            <i className="fa fa-quote-left fa-2x text-primary mb-3" />
            <p>They let me charging phone in the bar when bartender knew I’m close to one of her friend.</p>
            <div className="d-flex align-items-center">
              <img className="img-fluid flex-shrink-0 rounded-circle" src="assets/img/testimonial-2.jpg" style={{width: 50, height: 50}} />
              <div className="ps-3">
                <h5 className="mb-1">Xiran Li</h5>
                <small>Profession</small>
              </div>
            </div>
          </div>
          <div className="testimonial-item bg-transparent border rounded p-4">
            <i className="fa fa-quote-left fa-2x text-primary mb-3" />
            <p>Good service, delicious food. Friend child hat left there for most of the year can still find, very thoughtful, recommended.</p>
            <div className="d-flex align-items-center">
              <img className="img-fluid flex-shrink-0 rounded-circle" src="assets/img/testimonial-3.jpg" style={{width: 50, height: 50}} />
              <div className="ps-3">
                <h5 className="mb-1">Jeff Wang</h5>
                <small>Profession</small>
              </div>
            </div>
          </div>
          <div className="testimonial-item bg-transparent border rounded p-4">
            <i className="fa fa-quote-left fa-2x text-primary mb-3" />
            <p> Dishes were well presented, nice sized portions and very flavourful. Customer service was very good despite a mix up with one of the dishes. </p>
            <div className="d-flex align-items-center">
              <img className="img-fluid flex-shrink-0 rounded-circle" src="assets/img/testimonial-4.jpg" style={{width: 50, height: 50}} />
              <div className="ps-3">
                <h5 className="mb-1">Ole Nimeton</h5>
                <small>Profession</small>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </div>
    {/* Testimonial End */}
  </div>
  
  );

  }
  export default Home