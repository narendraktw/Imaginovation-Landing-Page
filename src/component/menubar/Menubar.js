import classnames from "classnames";
import React, { useState } from "react";
import "./Menubar.css";

function Menubar() {
  const [toggle, setToggle] = useState({});

  const handleClick = (e) => {
    e.preventDefault();

    const id = e.target.parentNode.getAttribute("data-label");

    const updatedState = {
      ...toggle,
      [id]: !toggle[id],
    };

    setToggle(updatedState);
  };

  return (
    <section className="cover">
      <div className="nav-menu">
        <ul>
          <li>
            <a href="https://www.imaginovation.net/">Home</a>
          </li>
          <li>
            <a href="https://www.imaginovation.net/about/">About</a>
          </li>
          <li
            data-label="services"
            className={classnames("multi-menu", {
              'selected': !!toggle["services"],
            })}
          >
            <a
              onClick={handleClick}
              href="https://www.imaginovation.net/services/"
            >
              Services <i className="fa fa-angle-up"></i>
            </a>
            <ul className="sub-menu">
              <li>
                <a href="#">Mobile App Development</a>
              </li>
              <li>
                <a href="#">Web App Development</a>
              </li>
              <li>
                <a href="#">Enterprize Web Design</a>
              </li>
              <li>
                <a href="#">Emerging Technologies</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="https://www.imaginovation.net/case-studies/">Our Work</a>
          </li>
          <li>
            <a href="https://www.imaginovation.net/contact/">Contact</a>
          </li>
          <li>
            <a href="https://www.imaginovation.net/our-team/">Leadership</a>
          </li>
          <li>
            <a href="https://www.imaginovation.net/blog/">Blog</a>
          </li>
          <li>
            <a href="https://www.imaginovation.net/careers/">Careers</a>
          </li>
        </ul>
      </div>
      <div className="contact-details">
        <ul>
          <li>
            <i className="fa fa-phone" aria-hidden="true"></i>
            <a href="tel:919-568-1960">919-568-1960</a>
          </li>
          <li>
            <i className="fa fa-envelope" aria-hidden="true"></i>
            <a href="mailto:SALES@IMAGINOVATION.NET">sales@imaginovation.net</a>
          </li>
        </ul>
        <div className="site-add">
          <div className="title">RALEIGH (Headquarters)</div>
          <div className="site-content">
            <p>8801 Fast Park Dr Suite 301</p>
            <p>Raleigh, NC 27617</p>
          </div>
        </div>
        <div className="site-add">
          <div className="title">Cary</div>
          <div className="site-content">
            <p>1903 N. Harrison Avenue, Suite 200</p>
            <p>Cary, NC 27513</p>
          </div>
        </div>
        <div className="site-add">
          <div className="title">Charlotte</div>
          <div className="site-content">
            <p>15720 Brixham Hill Avenue, Suite 300</p>
            <p>Charlotte NC 28277</p>
          </div>
        </div>
        <div className="social-links">
          <ul>
            <li>
              <a
                href="https://www.facebook.com/pages/Imaginovation/245733655479674?ref=hl"
                rel="noopener noreferrer"
                target="_blank"
                title="facebook"
              >
                <i className="fa fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/ImaginovationCo"
                rel="noopener noreferrer"
                target="_blank"
                title="twitter"
              >
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/Imaginovation"
                rel="noopener noreferrer"
                target="_blank"
                title="youtube"
              >
                <i className="fa fa-youtube"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/imaginovation-llc"
                rel="noopener noreferrer"
                target="_blank"
                title="linkedin"
              >
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/imaginovation/"
                rel="noopener noreferrer"
                target="_blank"
                title="instagram"
              >
                <i className="fa fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Menubar;
