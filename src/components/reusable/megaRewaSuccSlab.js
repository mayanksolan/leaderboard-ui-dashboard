import React from "react";

function MegaRewaSuccSlab() {
  return (
    <div className="we-have">
      <div className="first">
        <h6>Mega Rewards</h6>
        <p>Mega Rewards for the leading NGOs in the Challenge</p>
      </div>
      <div className="middle">
        <img
          src={require("../../assets/images/we-have.png")}
          alt="LetzChange Fundraising Challenge 2019"
        />
      </div>
      <div className="last">
        <h6>Success Slabs</h6>
        <p>
          Modest targets and guaranteed incentives once they are achieved, for
          all charities{" "}
        </p>
      </div>
    </div>
  );
}

export default MegaRewaSuccSlab;
