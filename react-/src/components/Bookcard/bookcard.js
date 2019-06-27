import React, { Component } from "react";
import "./bookcard.css"

export default class bookcard extends Component {
  render() {
    return (
      <div className="card">
        <img className="card_image" src={this.props.image} alt="" />
        <h3 className="card_title">{this.props.title}</h3>
        <p className="card_type">{this.props.bookType}</p>
        <p className="card_rating">
          <i className="fas fa-star" />
          {this.props.rating}
        </p>
      </div>
    );
  }
}
