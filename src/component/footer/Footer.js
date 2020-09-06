import React from "react";
import Logo from "../logo/Logo";
import Expertise from "../../assets/images/expertise.png";
import Goodfirm from "../../assets/images/goodfirm.png";
import Clutch from "../../assets/images/clutch.png";
import Localagency from "../../assets/images/localagency.png";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <figure>
        <Logo width="300px" />
      </figure>
      <section>
        <div className="contact-box">
          <div className="inner-box">
            <h3>RALEIGH (Headquarters)</h3>
            <p>
              8801 Fast Park Dr Suite 301 
              <br />
              Raleigh, NC 27617
            </p>
          </div>
          <div className="inner-box">
            <h3>CARY</h3>
            <p>
              8801 Fast Park Dr Suite 301
              <br />
              Raleigh, NC 27617
            </p>
          </div>
          <div className="inner-box">
            <h3>RALEIGH (Headquarters)</h3>
            <p>
              8801 Fast Park Dr Suite 301
              <br />
              Raleigh, NC 27617
            </p>
          </div>
        </div>
        <div className="service-box">
          <div className="customer-box">
            <div className="box">
              <ul>
                <h3>ABOUT</h3>
                <li>
                  <a href="#">Who we are</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
              <ul>
                <h3>SERVICES</h3>
                <li>
                  <a href="#">Mobile Application Development</a>
                </li>
                <li>
                  <a href="#">web Application development</a>
                </li>
                <li>
                  <a href="#">Enterprise Web Design</a>
                </li>
                <li>
                  <a href="#">Emerging Technologies</a>
                </li>
              </ul>
              <ul>
                <h3>RESOURCES</h3>
                <li>
                  <a href="#">Our Work</a>
                </li>
                <li>
                  <a href="#">Sitemap</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
            <div className="client-box">
            <a href="#">
              <img alt="Expertise" src={Expertise} />
            </a>
            <a href="#">
              <img alt="Goodfirm" src={Goodfirm} />
            </a>
            <a href="#">
              <img alt="Clutch" src={Clutch} />
            </a>
            <a href="#">
              <img alt="Localagency" src={Localagency} />
            </a>
          </div>
          
          </div>
         
          <div className="social-box">
              <ul>
                <li>
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  <span>919-568-1960</span>
                </li>
                <li>
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  <span>sales@imaginovation.net</span>                 
                </li>
              </ul>
              <div className="footer-social-links">
              <a href="#">
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-youtube-play" aria-hidden="true"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                    </a>
              </div>
              
            </div>
        </div>
      </section>
      <p>
        All content, web design and development, layouts are © Copyright 2020
        Imaginovation.net. All rights reserved. Reproduction in whole or in part
        or in any form or medium without written permission is prohibited!
      </p>
    </footer>
  );
}

export default Footer;
