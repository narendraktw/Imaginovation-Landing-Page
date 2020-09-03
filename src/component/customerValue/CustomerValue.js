import React from "react";
import TeamImage from "../../assets/images/yourvalue.jpg";
import "./CustomerValue.css";

function CustomerValue() {
  return (
    <div className="customervalue">
      <div className="wrapper">
        <h1>YOUR CUSTOMER VALUE</h1>
        <div className="customervalue_content">
          <div className="customervalue_img">
            <img src={TeamImage}></img>
          </div>
          <div className="customervalue_Info">
            <div className="info_top">
              <ul>
                <li>
                  We design websites and applications with the most intuitive
                  user experience in mind
                </li>
                <li>
                  We dive deep to understand your business so we can speak your
                  language and communicate more effectively
                </li>
                <li>
                  We communicate regularly with you and are only a phone call
                  away for anything you need
                </li>
                <li>
                  Extremely versatile and dynamic regarding our technology
                  capabilities and expertise
                </li>
                <li>Our response times are exceptionally fast</li>
                <li>
                  Once your project is completed, you own all of the
                  intellectual property
                </li>
              </ul>
            </div>
            <div className="info_bottom">
              <div className="info_bottom-left">
                <p>
                  "Imaginovation’s communication was stellar from the beginning
                  and continued throughout the project and they took a genuine
                  interest in my project. I highly recommend working with this
                  team of experts. They transformed the look of my existing
                  website and built a complex web application within a short
                  time frame. I HIGHLY recommend Imaginovation!"
                </p>
                <p>
                  <strong>
                    – Allison Siebern (Founder of{" "}
                    <a href="http://www.sleepfitness.com" target="_blank">
                      SleepFitness
                    </a>
                    )
                  </strong>
                  <br />
                  <a
                    href="https://clutch.co/profile/imaginovation#review-1203447"
                    target="_blank"
                  >
                    <em>Click Here To Read The Full Review</em>
                  </a>
                </p>
              </div>
              <div className="info_bottom-right">
                <a
                  href="https://clutch.co/press-releases/new-report-highlights-top-development-companies-26-us-states"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img
                    src="https://www.imaginovation.net/wp-content/uploads/2019/08/clutch.png"
                    alt="clutch.png"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerValue;
