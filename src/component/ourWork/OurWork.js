import React from "react";
import "./OurWork.css";
import Img1 from '../../assets/images/Certeklogo.png';
import Img2 from '../../assets/images/LogoStrive.png';

function OurWork() {
  return (
    <div className="ourwork">
      <div className="wrapper">
        <h1>Our Work</h1>
      </div>
      <div className="ourwork_content">
        <div className="left-box">
          <div className="left-box-bg img">
            <div className="logo-img">
              <img
                src={Img1}
                alt="certek"
              />
              <a
                href="https://www.imaginovation.net/case-study/certek/"
                className="left"
              >
                <i className="fa fa-arrow-left" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="right-box">
          <div className="right-box-bg img">
            <div className="logo-img">
              <img
                src={Img2}
                alt="strive"
              />
              <a
                href="https://www.imaginovation.net/case-study/strive/"
                className="right"
              >
                <i className="fa fa-arrow-right" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="ourwork-btn">
        <a href="https://www.imaginovation.net/case-studies/">View Our Work</a>
      </div>
    </div>
  );
}

export default OurWork;
