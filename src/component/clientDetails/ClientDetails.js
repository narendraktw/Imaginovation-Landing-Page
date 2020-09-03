import React from "react";
import Nestle from "../../assets/images/Nestle.png";
import Perambroke from "../../assets/images/Perambroke.png";
import CA from "../../assets/images/CA.png";
import Cree from "../../assets/images/Cree.png";
import CS from "../../assets/images/CS.png";
import Murg from "../../assets/images/Murg.png";
import SML from "../../assets/images/SML.png";
import Metlife from "../../assets/images/Metlife.png";
import "./ClientDetails.css";

function ClientDetails() {
  return (
    <div className="clientDetails">
      <div className="wrapper">
        <h1>CLIENTS WE WORKED WITH</h1>
        <div className="clientDetails_logos">
          <div className="brand firstRow">
            <div className="bbox">
              <img src={Nestle}></img>
            </div>

            <div className="bbox">
              <img src={Metlife}></img>
            </div>

            <div className="bbox">
              <img src={CA}></img>
            </div>

            <div className="bbox">
              <img src={Cree}></img>
            </div>
          </div>
          <div className="brand secondRow">
            <div className="bbox">
              <img src={Perambroke}></img>
            </div>

            <div className="bbox">
              <img src={SML}></img>
            </div>

            <div className="bbox">
              <img src={Murg}></img>
            </div>

            <div className="bbox">
              <img src={CS}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientDetails;
