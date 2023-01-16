import React from "react";
// import { Link } from "react-router-dom";
import "./Navbar.css";
import "../node_modules/jquery/dist/jquery.min.js";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

const Navbar = () => {
  return (
// window.addEventListener("scroll", function(){
//   const nav = this.document.querySelector("nav")
// })

    <div className="bg-light">
      <nav
        // style={{ position: "fixed" }}
        className="navbar navbar-expand-lg navbar-light bg-white"
      >
        {/* <Link to=""> */}
        <img
          className="ms-4"
          alt="logo"
          src="naira4dollar_images/background_image.png"
        />
        {/* </Link> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          style={{ gap: "50px" }}
          className="collapse navbar-collapse"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav ms-auto">
            {/* <Link to=""> */}
            <a className="nav-link nav-item pe-2" href="#">
              Home
            </a>
            {/* </Link> */}
            {/* <Link to=""> */}
            <a className="nav-item nav-link pe-3" href="#">
              Our Offices
            </a>
            {/* </Link> */}
            {/* <Link to=""> */}
            <a className="nav-item nav-link pe-3" href="#">
              Contact Us
            </a>
            {/* </Link> */}
            {/* <Link to=""> */}
            <a className="nav-item nav-link pe-3" href="#">
              Reviews
            </a>
            {/* </Link> */}
            {/* <Link to=""> */}
            <a className="nav-item nav-link nav-about pe-3" href="#">
              About
            </a>
            {/* </Link> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
