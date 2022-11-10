import { Link } from "react-router-dom";
import './index.scss'
const Footer = () => {
    return (
      <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
  <div className="container py-5">
    <div className="row g-5">
      <div className="col-lg-4 col-md-6">
        <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Company</h4>
        <Link className="btn btn-link" to="/">Home</Link>
        <Link className="btn btn-link" to="contact">Contact Us</Link>
        <Link className="btn btn-link" to="gallery">Gallery</Link>
        <a className="btn btn-link" >Privacy Policy</a>
        <a className="btn btn-link" >Terms &amp; Condition</a>
      </div>
      <div className="col-lg-4 col-md-6">
        <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Contact</h4>
        <p className="mb-2 text-start"><i className="fa fa-map-marker-alt me-3" />108 Bunda St, Canberra ACT 2601</p>
        <p className="mb-2 text-start"><i className="fa fa-phone-alt me-3" />(02) 5100 3324</p>
        <p className="mb-2 text-start"><i className="fa fa-mobile me-3" />0426915881</p>
        {/* <div class="d-flex pt-2">
                      <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-twitter"></i></a>
                      <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-facebook-f"></i></a>
                      <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-youtube"></i></a>
                      <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-linkedin-in"></i></a>
                  </div> */}
      </div>
      <div className="col-lg-4 col-md-6">
        <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Opening</h4>
        <h5 className="text-light fw-normal">Monday - Tuesday</h5>
        <p>11AM - 10:30PM</p>
        <h5 className="text-light fw-normal">Thurday - Friday</h5>
        <p>11AM - 10:30PM</p>
        <h5 className="text-light fw-normal">Saturday - Sunday</h5>
        <p>11:30AM - 11:30PM</p>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="copyright">
      <div className="row">
        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
       
          ©  <Link className="border-bottom" to="/">Tasting China</Link>, All Right Reserved.
          {/* Designed By <a className="border-bottom" href="https://htmlcodex.com">HTML Codex</a>  */}
        </div>
        <div className="col-md-6 text-center text-md-end">
          <div className="footer-menu">
            <Link to="/">Home</Link>
            <a >Cookies</a>
            <a >Help</a>
            <a >FQAs</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    )
  }
  export default Footer