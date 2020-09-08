import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">
          items <p className="badge badge-success">{this.props.total}</p>
        </span>
      </nav>
    );
  }
}

export default Nav;
