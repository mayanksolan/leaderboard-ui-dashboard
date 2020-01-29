import React, { Component } from "react";
import "../assets/style.css";

class LbBanner extends Component {
  render() {
    return (
      <div className="micro-video-wrapper">
        <div className="desktop-banner">
          <img src={require("../assets/images/lfc-banner.png")} alt="" />
        </div>
        <div className="mobile-banner">
          <img src={require("../assets/images/lfc-banner.png")} alt="" />
        </div>
      </div>
    );
  }
}

export default LbBanner;
