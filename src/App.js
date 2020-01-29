import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from "axios";
import LbIndex from "./components/lbIndex";
import LbWinners from "./components/lbWinners";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      competitions: {},
      nonprofits: {}
    };
  }

  async componentDidMount() {
    const res = await axios.get(
      "https://staging.letzchange.org/api/events/housie19"
    );
    this.setState({
      competitions: res.data.meta.competitions,
      nonprofits: res.data.meta.nonprofits
    });
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route
              exact
              path="/"
              render={() => <LbWinners stateData={this.state} />}
            />
            <Route exact path="/rules" component={LbIndex} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
