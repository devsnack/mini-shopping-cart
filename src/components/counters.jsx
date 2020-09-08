import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Counter from "./counter";
class Counters extends Component {
  render() {
    return (
      <React.Fragment>
        <button className="btn btn-warning" onClick={this.props.onreset}>
          reset
        </button>
        {this.props.counters.map((c) => (
          <Counter
            counter={c}
            key={c.id}
            ondelete={this.props.handledelete}
            onicr={this.props.oninc}
            ondcr={this.props.ondnc}
          ></Counter>
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
