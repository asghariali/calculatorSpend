import React, { Component } from "react";
import logo from "../logo.svg";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
          Calculate spends
        </a>
      </nav>
    );
  }
}

export default Navbar;
