import React, { Component } from "react";
import MegaRewardsCard from "./megaRewardsCard";

function sort_by_key(array, key) {
  return array.sort(function(a, b) {
    var x = a[key];
    var y = b[key];
    return x > y ? -1 : x > y ? 1 : 0;
  });
}

export default class MegaRewards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      all: false
    };
  }

  componentDidUpdate(prevProps) {
    prevProps !== this.props &&
      this.setState(
        {
          entries: this.props.megaRewardsData.entries
        },
        () => {
          const len = this.state.entries && this.state.entries.length;

          const newArrRA = [...this.state.entries];
          const sort_raised_amount_arr = sort_by_key(newArrRA, "raised_amount");
          const newArrS = [...this.state.entries];
          const sort_supporters_arr = sort_by_key(newArrS, "supporters");
          this.setState(
            {
              sort_raised_amount_arr: sort_raised_amount_arr,
              sort_supporters_arr: sort_supporters_arr,
              len: len
            },
            () => console.log(this.state)
          );
        }
      );
  }
  clickTop3 = () => {
    console.log("Clicked top 3");
  };
  clickAll = () => {
    this.setState({
      all: true
    });
  };
  render() {
    const raisedAmountData =
      this.state.sort_raised_amount_arr &&
      this.state.sort_raised_amount_arr.map((entry, id) => (
        <MegaRewardsCard key={id} entry={entry} />
      ));
    // this.state.sort_raised_amount_arr && this.state.all
    //   ? this.state.sort_raised_amount_arr
    //       .slice(0, this.state.len ? this.state.len : 3)
    //       .map((entry, id) => <MegaRewardsCard key={id} entry={entry} />)
    //   : this.state.sort_raised_amount_arr
    //       .slice(0, 3)
    //       .map((entry, id) => <MegaRewardsCard key={id} entry={entry} />);

    const supportersData =
      this.state.sort_supporters_arr &&
      this.state.sort_supporters_arr.map((entry, id) => (
        <MegaRewardsCard key={id} entry={entry} />
      ));
    // this.state.sort_supporters_arr && this.state.all
    //   ? this.state.sort_supporters_arr
    //       .slice(0, this.state.len ? this.state.len : 3)
    //       .map((entry, id) => <MegaRewardsCard key={id} entry={entry} />)
    //   : this.state.sort_supporters_arr
    //       .slice(0, 3)
    //       .map((entry, id) => <MegaRewardsCard key={id} entry={entry} />);

    return (
      <div className="we-have-detail">
        <div className="whd-border-top rewards-bg"></div>
        <div className="whd-icon lb-icon rewards-bg">
          <img src={require("../../assets/images/rewards.png")} alt="" />
        </div>
        <div className="whd-content lb-content">
          <h2>Mega Rewards</h2>
          <p>
            Bumper rewards for organizations that bring in the maximum amount
            and supporters during the event
          </p>
          <div className="lb-sort">
            <button
              className="sort-btn sort-left active"
              onClick={this.clickTop3}
            >
              Top 3
            </button>
            <button className="sort-btn sort-right" onClick={this.clickAll}>
              All
            </button>
          </div>
          <div className="lb-wrapper">
            <div className="lb-list-wrapper">
              <div className="lb-list">{raisedAmountData}</div>
            </div>
            <div className="lb-list-wrapper lb-right">
              <div className="lb-list">{supportersData}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
