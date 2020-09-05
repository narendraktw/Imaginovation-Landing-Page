import React from "react";
import Dotted from "../../assets/images/dotted.svg";
import AI from "../../assets/images/H-AI.png";

function EmgTech() {
  return (
    <div className="emgtech">
      <div id="et1" className="et">
        <h3>Artificial Intelligence</h3>
        <div className="et-img">
          <img src={Dotted} />
          <img src={AI} className="techIcon" />
        </div>
      </div>
      <div id="et2" className="et">
        <h3>Internet of Things</h3>
        <div className="et-img">
          <img src={Dotted} />
          <img src={AI} className="techIcon" />
        </div>
      </div>
      <div id="et3" className="et">
        <h3>Augmented Reality</h3>
        <div className="et-img">
          <img src={Dotted} />
          <img src={AI} className="techIcon" />
        </div>
      </div>
      <div id="et4" className="et">
        <h3>Virtual Reality</h3>
        <div className="et-img">
          <img src={Dotted} />
          <img src={AI} className="techIcon" />
        </div>
      </div>
      <div id="et5" className="et">
        <h3>Block Chain</h3>
        <div className="et-img">
          <img src={Dotted} />
          <img src={AI} className="techIcon" />
        </div>
      </div>
    </div>
  );
}

export default EmgTech;
