import React from "react";

function PrevEvent() {
  return (
    <div className="previously-wrapper">
      <div className="previously-content">
        <h1>Previously at GiveIndia Fundraising Challenge</h1>
        <p>
          Since the year of its inception, the GiveIndia Fundraising Challenge
          (previously LetzChange Fundraising Challenge) has turned out to be a
          tremendously successful event, with the list of charities benefitting
          from it growing forever. We have seen charities return to the
          following editions with replenished vigour, approaching the challenge
          as a festival.
          <br />
          This positive approach has led to charities raising a cumulative of ₹
          12.5+ Crore during all the editions and we hope to keep serving our
          partner non-profits in the best way we can.
        </p>
        <div className="previously-score">
          <div className="raised-by-you">
            <small>Raised by you in 4 years</small>
            <strong>₹ 12.5 crore</strong>
          </div>
          <div className="driven-by-letz">
            <small>Matched by GiveIndia</small>
            <strong>₹ 3.0 crore</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrevEvent;
