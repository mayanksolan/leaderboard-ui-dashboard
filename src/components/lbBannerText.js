import React, { Component } from "react";
import BannerTextHead from "./reusable/bannerTextHead";
import LbBannerTextDetails from "./lbBannerText/lbBannerTextDetails";
import LbBannerTextMegaSuccess from "./lbBannerText/lbBannerTextMegaSuccess";
import LbBannerTextSuccessSlab from "./lbBannerText/lbBannerTextSuccessSlab";
import WhyChallenge from "./reusable/whyChallenge";
import PrevEvent from "./reusable/prevEvent";
import VisitLC from "./reusable/visitLC";
import "../assets/style.css";

class LbBannerText extends Component {
  render() {
    return (
      <main>
        <BannerTextHead />
        <div className="about-event-wrapper">
          <LbBannerTextDetails />
          <LbBannerTextMegaSuccess />
          <LbBannerTextSuccessSlab />
          <WhyChallenge />
          <PrevEvent />
          <VisitLC />
        </div>
      </main>
    );
  }
}

export default LbBannerText;
