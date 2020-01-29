import React from "react";

function LeaderboardTextSearch() {
  return (
    <div className="about-event lb-search">
      <h1>Leaderboard</h1>
      <p>
        On a daily basis, more and more organisations are beginning their
        journeys in GFC 2020. Take a look at an overview of how different NGOs
        are leveraging this opportunity
      </p>
      <div className="search-wrapper">
        <input type="text" placeholder="Search for Charity" />
        <i className="fa fa-search"></i>
      </div>
    </div>
  );
}

export default LeaderboardTextSearch;
