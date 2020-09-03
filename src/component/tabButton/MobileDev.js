import React from "react";
import Mobdev from "../../assets/images/MobileDEV.png";
import Button from "../button/Button";
function MobileDev() {
  return (
    <div className="webdev">
      <div className="inner-content">
        <div className="left-content">
          <img src={Mobdev} />
        </div>
        <div className="right-content">
          <h2>MOBILE APP DEVELOPMENT</h2>
          <p>
          We have a very strong mobile app development team for both iOS and Android that have worked with many brands across the US. 
          </p>
          <p>
          From conceptualization to development, we drive the entire mobile development process step by step based on your business and creative needs. Our ability to develop high-tech apps for Android and iOS stems from our team of experienced mobile developers. 
          </p>
          <p>
          We offer custom mobile app development solutions after analyzing the market, user expectations, competition, and target platform. 
          </p>
          <p>
          Over the years, we’ve gained vast experience of how users interact with mobile apps. This helps us in developing highly intuitive applications that provide a high ROI.
          </p>
          <p>
          We use state-of-the-art development techniques, coding practices, and device-specific technologies to build high quality and end-user targeted products. Click below to check out our specialties and the innovative apps we have developed so far.
          </p>
          <Button styleClass="button readMore" text="Read More"></Button>
        </div>

      </div>
    </div>
  );
}

export default MobileDev;
