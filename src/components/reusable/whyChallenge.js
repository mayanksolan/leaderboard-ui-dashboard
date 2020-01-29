import React from "react";

function WhyChallenge() {
  return (
    <div className="why-letz-wrapper">
      <div className="title">
        <h1>Why GiveIndia Fundraising Challenge?</h1>
        <p>
          A fundraising festival for charities to celebrate their spirit and
          encourage them to expand their support system through dedicated
          crowdfunding efforts
        </p>
      </div>
      <div className="why-letz">
        <div className="reason">
          <h3>Focused on non-profits</h3>
          <img
            src={require("../../assets/images/everyone-icon.fa72184.png")}
            alt="Its for everyone"
          />
        </div>
        <div className="reason-detail">
          <p>
            At GiveIndia, we strive to provide a one-stop solution to all the
            fundraising queries of our partners. Through the challenge, the aim
            is to cover all aspects and provide a 360-degree fundraising support
            including contemporary tools, marketing and technical services.
          </p>
        </div>
      </div>
      <div className="why-letz">
        <div className="reason">
          <h3>Peer-to-peer fundraising to increase your donor base</h3>
          <img
            src={require("../../assets/images/peertopeer-icon.9a6eeef.png")}
            alt="Peer to peer fundraising"
          />
        </div>
        <div className="reason-detail">
          <p>
            A potent mechanism that allows active donors to spread the word
            about the cause/non-profit they care for, peer-to-peer fundraising
            reaches out to potential donors, who can leverage their social
            connections and help raise funds for charities.
          </p>
        </div>
      </div>
      <div className="why-letz">
        <div className="reason">
          <h3>Tools to help you go the extra mile</h3>
          <img
            src={require("../../assets/images/helptool-icon.ec7185a.png")}
            alt="TOOLS to help"
          />
        </div>
        <div className="reason-detail">
          <p>
            Exclusively tailored tools and services to help organizations make
            more efforts in the competition include:
          </p>
          <strong>
            <i className="fa fa-angle-right"></i> Marketing Assistance
          </strong>
          <p>
            From customized e-mailers to effectively designed creatives, we help
            you in effectively reaching out to potential donors.
          </p>
          <strong>
            <i className="fa fa-angle-right"></i> Relationship Manager
          </strong>
          <p>
            A dedicated Relationship Manager, whom you can contact anytime
            during the challenge for technical and marketing support.
          </p>
          <strong>
            <i className="fa fa-angle-right"></i> Live Dashboard
          </strong>
          <p>
            A non-profit dashboard, enabling you to track donations received in
            real-time, along with other necessary details about the funds
            raised.
          </p>
          <strong>
            <i className="fa fa-angle-right"></i> Zero Registration Fee
          </strong>
          <p>
            No registration fee for participating in GiveIndia Fundraising
            Challenge 2020. The platform retains upto 4% from all donations
            received + 3% payment processing charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhyChallenge;
