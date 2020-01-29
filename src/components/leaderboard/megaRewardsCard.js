import React, { Component, Fragment } from "react";

export default class MegaRewardsCard extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {};
  //   }

  //   componentDidUpdate(prevProps) {
  //     prevProps !== this.props &&
  //       this.setState(
  //         {
  //           entry: this.props.entry
  //         },
  //         () => console.log("entry", this.state.entry)
  //       );
  //   }

  render() {
    const {
      nonprofit,
      raised_amount,
      supporters,
      //   reward_eligible_amount,
      reward_amount
    } = this.props.entry;
    console.log(this.props.key);
    return (
      <Fragment key={this.props.key}>
        <h6>Won ₹{reward_amount}</h6>
        <div className="lb-widget reward-box-light">
          <div className="widget-top">
            <div className="which-ngo">
              <div className="ngo-logo">
                <img src={nonprofit.image} alt="" />
              </div>
              <div className="ngo-name">
                <h5>{nonprofit.name}</h5>
                {/* <h6>Chennai, Tamil Nadu</h6> */}
              </div>
            </div>
          </div>
          <div className="ngo-stats">
            <div className="stats-small">
              <span className="figure">{supporters}</span>
              <span className="title">Supporters</span>
            </div>
            <div className="stats-big">
              <span className="figure">₹ {raised_amount}</span>
              <span className="title">Amount Raised</span>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
