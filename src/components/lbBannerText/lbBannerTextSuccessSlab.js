import React from "react";

function LbBannerTextSuccessSlab() {
  return (
    <div className="we-have-detail">
      <div className="whd-border-top slabs-bg"></div>
      <div className="whd-content">
        <h2>Success Slabs</h2>
        <p>
          Achievable targets and bountiful incentives, the Success Slabs act as
          reward ladders for all participating organizations{" "}
        </p>
        <div className="whd-icon slabs-bg">
          <img src={require("../../assets/images/slabs.png")} alt="" />
        </div>
        <div className="whd-list-wrapper">
          <div className="whd-list single-widget">
            <div className="whd-list-box reward-box-light">
              <p>
                Reward of <span>₹ 6,50,000</span>
              </p>
              <div className="whd-lb-term">
                <i className="fa fa-circle whd-dot reward-txt-light"></i>
                on raising 30,00,000 or above
              </div>
            </div>
            <div className="whd-list-box reward-box-light">
              <p>
                Reward of <span>₹ 4,00,000</span>
              </p>
              <div className="whd-lb-term">
                <i className="fa fa-circle whd-dot reward-txt-light"></i>
                On raising 20,00,000 or above
              </div>
            </div>
            <div className="whd-list-box reward-box-light">
              <p>
                Reward of <span>₹ 1,90,000</span>
              </p>
              <div className="whd-lb-term">
                <i className="fa fa-circle whd-dot reward-txt-light"></i>
                On raising 10,00,000 or above
              </div>
            </div>
            <div className="whd-list-box reward-box-light">
              <p>
                Reward of <span>₹ 90,000</span>
              </p>
              <div className="whd-lb-term">
                <i className="fa fa-circle whd-dot reward-txt-light"></i>
                On raising 5,00,000 or above
              </div>
            </div>
            <div className="whd-list-box reward-box-light">
              <p>
                Reward of <span>₹ 40,000</span>
              </p>
              <div className="whd-lb-term">
                <i className="fa fa-circle whd-dot reward-txt-light"></i>
                On raising 2,50,000 or above
              </div>
            </div>
            <div className="whd-list-box reward-box-light">
              <p>
                Reward of <span>₹ 15,000</span>
              </p>
              <div className="whd-lb-term">
                <i className="fa fa-circle whd-dot reward-txt-dark"></i>
                On raising 1,00,000 or above
              </div>
            </div>
            <div className="whd-list-box reward-box-light">
              <p>
                Reward of <span>₹ 7,000</span>
              </p>
              <div className="whd-lb-term">
                <i className="fa fa-circle whd-dot reward-txt-dark"></i>
                On raising 50,000 or above
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LbBannerTextSuccessSlab;
