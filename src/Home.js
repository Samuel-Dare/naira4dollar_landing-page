import React from "react";

const Home = () => {
  return (
    <div className="div">
      <div className="header-box">
        <div className="text-box">
          <h3 className="header-text">
            Your peace of <br /> mind is very <br /> important to us
          </h3>
          <p className="sub-text">
            <span className="text">Do you need a reliable X' change?</span>
            <span className="text">Do you need fast funding?</span>
            <span className="text">Do you need an accessible company?</span>
          </p>

          <img
          className="website-mobile-view-img-1"
          src="naira4dollar_images/naira4dollar mobile-view photo4.png"
          alt=""
        />

          <div className="sign-up-box">
            <input
              className="input input-email"
              placeholder="Enter your email"
            />
            <button className="btn btn-signup">Sign Up</button>
          </div>
        </div>
        <div className="btn-go-to-website-div">
          <button className="btn btn-go-to-website">Continue to website</button>
        </div>

      </div>

      <img
          className="website-mobile-view-img-2"
          src="naira4dollar_images/naira4dollar mobile-view photo4.png"
          alt=""
        />
    </div>
  );
};

export default Home;
