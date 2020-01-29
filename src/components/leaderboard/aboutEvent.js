import React from "react";
import { Link } from "react-router-dom";

function AboutEvent() {
  return (
    <div className="about-event lb-title">
      <h1>Ensuring Mega Success for all...</h1>
      <p>
        At GiveIndia, we believe that each non-profit should be provided with
        opportunities to campaigning for their cause and be rewarded for the
        efforts. GiveIndia Fundraising Challenge 2020 (February 3rd- March 31st)
        promises an overwhelmingly rewarding crowdfunding experience for all
        NGOs, irrespective of their scale and vision
      </p>
      <div className="btn-wrapper">
        <Link to="/rules">
          <button className="btn-fill">More about GFC 2020</button>
        </Link>
      </div>
    </div>
  );
}

export default AboutEvent;
