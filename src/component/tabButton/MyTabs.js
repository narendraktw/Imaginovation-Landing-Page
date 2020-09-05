import React, { useState } from "react";
import { Tabs, Tab} from "@material-ui/core";
import WebDev from "../services/WebDev";
import MobileDev from "../services/MobileDev";
import EmgTech from "../services/EmgTech";
import "./MyTabs.css";

function MyTabs() {
  const [selectedTab, setSelectedTab] = useState(0);
  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  return (
    <>
      <Tabs
      TabIndicatorProps={{
        style: {
          height:"0px",
        }
      }}
        value={selectedTab}
        onChange={handleChange}       
      >
        <Tab label="Web Development" />
        <Tab label="Mobile Development" />
        <Tab label="Emerging Technologies" />
      </Tabs>

      {selectedTab == 0 && <WebDev />}
      {selectedTab == 1 && <MobileDev />}
      {selectedTab == 2 && <EmgTech />}
    </>
  );
}

export default MyTabs;
