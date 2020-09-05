import React from "react";
import Webdev from "../../assets/images/WebDev.png";
import Button from "../button/Button";
function WebDev() {
  return (
    <div className="webdev">
      <div className="inner-content">
        <div className="left-content">
          <img src={Webdev} />
        </div>
        <div className="right-content">
          <h2>Web Design and Development</h2>
          <p>
            Websites are the gateways that convert prospects into actual
            customers. We at Imaginovation build great-looking websites that
            align to individual business goals. We develop attractive websites
            and web applications for businesses ranging from startups to
            large-scale enterprises in any industry.
          </p>
          <p>
            Creating a website is very easy, but it needs special skills and
            experience to develop a POWERFUL website. We are an award-winning
            team of web developers with in-depth knowledge and experience of
            building websites and robust web applications that look great on any
            device, load fast, and get found by search engines much quicker.
          </p>
          <p>
            We take an idea and turn it into an engaging and modern business
            appearance online. Over the years, we have helped numerous companies
            establish a strong online presence, drive more visitors, and
            increase sales through our enterprise web design and development
            services. Click on the button below to learn more about our
            specialties and projects we’ve worked on. on.
          </p>
          <Button className="button readMore" text="Read More"></Button>
        </div>

      </div>
    </div>
  );
}

export default WebDev;
