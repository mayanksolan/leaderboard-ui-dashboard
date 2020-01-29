import React, { Component } from "react";

export default class BannerTextHead extends Component {
  render() {
    return (
      <div className="time-count-wrapper">
        <div className="title">
          <p className="value">170</p>
          <p className="text">CHARITIES</p>
        </div>
        <div className="title">
          <p className="value">4,64,61,039</p>
          <p className="text">AMOUNT RAISED</p>
        </div>
        <div className="title">
          <p className="value">8,008</p>
          <p className="text">SUPPORTERS</p>
        </div>
      </div>
    );
  }
}
