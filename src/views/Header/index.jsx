import React from 'react';
import { NavLink,Link } from "react-router-dom";
import './index.scss'

const Header = () => {

   
  return (
    <div>
      {/* Spinner Start */}
      {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div className="spinner-border text-primary" style={{ width: '3rem', height: '3rem' }} role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div> */}
      {/* Spinner End */}
      {/* Navbar & Hero Start */}
      <div className="container-xxl position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
        <Link to="/" className="navbar-brand p-0">
        <img src={"assets/img/logo.png"} alt="Logo" />
        </Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="fa fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0 pe-4">
            <NavLink  className={"nav-item nav-link"} to='/' >Home</NavLink>
            <NavLink  className={"nav-item nav-link"} to='/gallery'>Gallery</NavLink>
            <NavLink  className={"nav-item nav-link"} to='/menu'>Baquet Menu</NavLink>
              {/* <a href="contact.html" class="nav-item nav-link">Contact</a> */}
            </div>
            <NavLink className={"btn btn-primary py-2 px-4"} to='/contact'>Book A Table</NavLink>
          </div>
        </nav>

      </div>
      {/* Navbar & Hero End */}
    </div>

  )
}
export default Header