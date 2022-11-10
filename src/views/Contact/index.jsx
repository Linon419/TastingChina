import React from 'react';
import { Link } from "react-router-dom";
import './index.scss'
const Contact = () => {
  return (<div>
    <div className="container-xxl py-5 bg-dark hero-header mb-5">
      <div className="container text-center my-5 pt-5 pb-4">
        <h1 className="display-3 text-white mb-3 animated slideInDown">Contact</h1>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb justify-content-center text-uppercase">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
              </li>
            <li className="breadcrumb-item text-white active" aria-current="page">Contact</li>
          </ol>
        </nav>
      </div>
    </div>

    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h3 className="section-title ff-secondary text-center text-primary fw-normal">Contact Us</h3>
          <h1 className="mb-5">Contact For Any Query</h1>
        </div>
        <div className="row g-4">
          <div className="col-md-6 wow fadeIn" data-wow-delay="0.1s">
            <iframe className="position-relative rounded w-100 h-100" src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13028.42976064204!2d149.12395036977537!3d-35.27845489999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b164d6608f72e55%3A0x67f763b48a3d168e!2s108%20Bunda%20St%2C%20Canberra%20ACT%202601!5e0!3m2!1szh-CN!2sau!4v1664100436774!5m2!1szh-CN!2sau"} style={{ minHeight: 350, border: 0 }} allowFullScreen aria-hidden="false" tabIndex={0} />
          </div>
          <div className="col-md-6">
            <div className="wow fadeInUp" data-wow-delay="0.2s">
              <div>
                <div className="contact">
                  <h3 className="section-title ff-secondary fw-normal text-start text-primary">Landline
                  </h3>
                  <p><i className="fa fa-envelope-open text-primary me-2" />(02) 5100 3324</p>
                </div>
                <div className="contact">
                  <h3 className="section-title ff-secondary fw-normal text-start text-primary">Phone</h3>
                  <p><i className="fa fa-envelope-open text-primary me-2" /> 0426915881</p>
                </div>
                <div className="contact">
                  <h3 className="section-title ff-secondary fw-normal text-start text-primary">Address
                  </h3>
                  <p><i className="fa fa-envelope-open text-primary me-2" />108 Bunda St, Canberra ACT
                    2601</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  )
}
export default Contact