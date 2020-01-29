import React from "react";

function VisitLC() {
  return (
    <div className="visit-letz-wrapper">
      <h1>Because future is in our hands</h1>
      <section>
        <div className="section-box">
          <h6>Align with Online</h6>
          <p>
            When the world is going digital, why should the charity sector stay
            behind? The most powerful medium to reach out to the world, internet
            is the most futuristic way of fundraising
          </p>
        </div>
        <div className="section-box">
          <h6>Entail with Retail</h6>
          <p>
            Why rely on a handful of donors for funds when you can create a
            loyal community of supporters? Retail donations allow charities to
            establish a sustainable network of impact investors
          </p>
        </div>
      </section>
      <section>
        <div className="visit-title">
          Your gateway to the world of giving, GiveIndia Fundraisers blends the
          best of both to present a one-stop fundraising solution for all
          committed Indian charities
        </div>
        <a
          href="https://fundraisers.giveindia.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit GiveIndia Fundraisers
        </a>
      </section>
      <img src={require("../../assets/images/website-screen.png")} alt="" />
    </div>
  );
}

export default VisitLC;
