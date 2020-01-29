import React, { Component } from "react";
import Header from "./reusable/header";
import LbBanner from "./lbBanner";
import LbBannerText from "./lbBannerText";
import Footer from "./reusable/footer";

export default class LbIndex extends Component {
  render() {
    return (
      <div>
        <Header />
        <LbBanner />
        <LbBannerText />
        <Footer />
      </div>
    );
  }
}
