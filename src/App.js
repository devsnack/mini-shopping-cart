import React, { Component } from "react";
import Counters from "./components/counters";
import Nav from "./components/nav";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 6 },
      { id: 2, value: 5 },
      { id: 3, value: 2 },
    ],
  };
  deletei = (counter) => {
    const counters = this.state.counters.filter((c) => c.id !== counter.id);
    this.setState({ counters });
  };
  reset = () => {
    const counters = this.state.counters;
    counters.map((x) => (x.value = 0));
    this.setState({ counters });
  };
  dcr = (counter) => {
    const counters = this.state.counters;
    counters[
      counters
        .map(function (e) {
          return e.id;
        })
        .indexOf(counter.id)
    ].value--;
    this.setState({ counters });
    /*console.log(counters);
    this.setState({ counters });*/
  };
  icr = (counter) => {
    const counters = this.state.counters;
    counters[
      counters
        .map(function (e) {
          return e.id;
        })
        .indexOf(counter.id)
    ].value++;
    this.setState({ counters });
  };
  render() {
    return (
      <React.Fragment>
        <Nav
          total={this.state.counters.filter((c) => c.value > 0).length}
        ></Nav>
        <Counters
          counters={this.state.counters}
          handledelete={this.deletei}
          onreset={this.reset}
          oninc={this.icr}
          ondnc={this.dcr}
        ></Counters>
      </React.Fragment>
    );
  }
}

export default App;
