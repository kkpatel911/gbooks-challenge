import React, { Component } from "react";
import "./header.css"

export default class header extends Component {
  render() {
    return (
      <header className="showCase">
        <div className="show-top">
          <img src={require("../../images/logo.png")} alt="logo" />
        </div>
        <div className="show-content">
          <h1>Welcome to our</h1>
          <p>Google Book Store</p>
        </div>
      </header>
    );
  }
}
