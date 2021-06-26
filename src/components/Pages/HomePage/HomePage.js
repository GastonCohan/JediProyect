import React from "react";
import "semantic-ui-css/semantic.min.css"

// COMPONENTS

import NavBarComponent from "../../NavBar/NavBarComponent"
import CuerpoComponent from "../../Body/CuerpoComponent"

// RENDER

function HomeScreen() {
  return (
  <div className="PageContainer">
    <div id="NavBar" >
      <NavBarComponent/>
    </div>
    <div className="BodyContainer">
      <CuerpoComponent/>
    </div>
  </div>
  );
}

export default HomeScreen;