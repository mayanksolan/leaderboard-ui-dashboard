import React from "react";

function LbBannerTextMegaSuccess() {
  return (
    <div className="we-have-detail">
      <div className="whd-border-top rewards-bg"></div>
      <div className="whd-content">
        <h2>Mega Rewards</h2>
        <p>
          The Mega Rewards are aimed at accelerating the reach-out programme of
          NGOs and encourage their stakeholders to come forward and work towards
          raising a big amount.{" "}
        </p>
        <div className="whd-icon rewards-bg">
          <img src={require("../../assets/images/rewards.png")} alt="" />
        </div>
        <div className="whd-list-wrapper">
          <div className="whd-list">
            <div className="whd-list-box reward-box-light">
              <h5 className="reward-txt-light">
                Rewards based on amount raised
              </h5>
              <p>
                <span>₹ 25 LAKH</span>
              </p>
              <div className="whd-lb-term">
                <i className="fa fa-circle whd-dot reward-txt-light"></i>
                for NGOs raising more than ₹ 1 Crore
              </div>
              <p>
                <span>₹ 12.5 LAKH</span>
              </p>
              <div className="whd-lb-term">
                <i className="fa fa-circle whd-dot reward-txt-light"></i>
                for NGOs raising more than ₹50,00,000
              </div>
            </div>
          </div>
          <div className="whd-list">
            <div className="whd-list-box reward-box-dark">
              <h5 className="reward-txt-dark">Rewards based on supporters</h5>
              <p>
                <span>₹ 5 LAKH</span>
              </p>
              <div className="whd-lb-term">
                <i className="fa fa-circle whd-dot reward-txt-dark"></i>
                for NGOs bringing in more than 1500 supporters
              </div>
              <p>
                <span>₹ 1 LAKH</span>
              </p>
              <div className="whd-lb-term">
                <i className="fa fa-circle whd-dot reward-txt-dark"></i>
                for NGOs bringing in more than 500 supporters
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LbBannerTextMegaSuccess;
