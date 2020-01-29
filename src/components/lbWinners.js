import React, { Component } from "react";
import Header from "./reusable/header";
import LbBanner from "./lbBanner";
import BannerTextHead from "./reusable/bannerTextHead";
import Footer from "./reusable/footer";
import AboutEvent from "./leaderboard/aboutEvent";
import MegaRewaSuccSlab from "./reusable/megaRewaSuccSlab";
import LeaderboardTextSearch from "./leaderboard/leaderboardTextSearch";
import MegaRewards from "./leaderboard/megaRewards";

export default class LbWinners extends Component {
  render() {
    // console.log(this.props);
    const { stateData } = this.props;
    // console.log(stateData.competitions);
    const megaRewards =
      "ngo_of_the_week|NGO of the Week|2019-08-25T18:30:00.000Z|2019-09-01T18:29:59.000Z";
    // console.log(stateData.competitions[megaRewards]);
    const megaRewardsData = stateData.competitions[megaRewards];
    console.log(megaRewardsData);
    return (
      <div>
        <Header />
        <LbBanner />
        <main>
          <BannerTextHead />
          <div className="about-event-wrapper">
            <AboutEvent />
            <MegaRewaSuccSlab />
            <LeaderboardTextSearch />
            <MegaRewards megaRewardsData={megaRewardsData} />
          </div>
        </main>

        <Footer />
      </div>
    );
  }
}
