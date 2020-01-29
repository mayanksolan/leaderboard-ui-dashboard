import React from "react";
import MegaRewaSuccSlab from "../reusable/megaRewaSuccSlab";

function LbBannerTextDetails() {
  return (
    <div>
      <div className="about-event">
        <h1>Begin 2020 with a BANG!</h1>
        <p>
          The biggest fundraising festival is back! GiveIndia Fundraising
          Challenge 2020 (February 3rd- March 31st) presents an unmissable
          opportunity to non-profits to close their financial year on a high.
          It's an extravaganza designed to enable charities of all scales and
          causes to win rewards on all the fundraising efforts they make
        </p>
      </div>
      <div className="what-we-have">
        <div className="title">
          <h2>Ensuring Mega Success for all...</h2>
          <p>
            Since we believe that each non-profit should have a fair chance at
            campaigning for their cause, the GiveIndia Fundraising Challenge
            2020 comes packed with opportunities that promise a rewarding
            experience for everyone
          </p>
        </div>
        <MegaRewaSuccSlab />
      </div>
    </div>
  );
}

export default LbBannerTextDetails;
