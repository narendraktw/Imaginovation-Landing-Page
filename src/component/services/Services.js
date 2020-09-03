import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import MyTabs from "../tabButton/MyTabs";
import "./Services.css";

function Services() {
  return (
    <div className="services">
        <div className="wrapper">
            <div className="myTabs">
                <MyTabs />
            </div>
            
        </div>
     
    </div>
  );
}

export default Services;
