import React, { Component } from "react";
import "./bookDetails.css"

export default class bookDetails extends Component {
  constructor() {
    super();
    this.state = {
      bookDetails: [],
      images: []
    };
    this.renderData = this.renderData.bind(this);
  }

  componentDidMount() {
    fetch(
      `https://www.googleapis.com/books/v1/volumes/${
        this.props.match.params.id
      }`
    )
      .then(data => data.json())
      .then(data => {
        this.setState({
          bookDetails: data,
          images: data.volumeInfo.imageLinks.large
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  renderData() {
    var item = this.state.bookDetails;
    return (
      <div class="container">
        <div class="container_image">
          <img
            alt={"BookCover"}
            src={
              this.state.images
                ? this.state.images
                : "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"
            }
          />
        </div>
        <div class="container_content">
          <h2 class="detail_title detail">{item.volumeInfo.title}</h2>
          <h3 class="detail_subtitle detail">{item.volumeInfo.subtitle}</h3>
          <h3 class="detail_published detail">
            PublishedDate:- {item.volumeInfo.publishedDate}
          </h3>
          <h3 class="detail_authors detail">
            Authors:-{" "}
            {!item.volumeInfo.authors
              ? "No Author"
              : item.volumeInfo.authors.join(", ")}
          </h3>
          <h3 class="detail des">Description:-</h3>
          <p
            class="detail_description detail"
            dangerouslySetInnerHTML={{ __html: item.volumeInfo.description }}
          />
          <h3 class="detail_button">
            <a href={item.volumeInfo.previewLink}>Get Book</a>
          </h3>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div>
        <header class="header">
          <div class="header_top">
            <a href="/">
              <img src={require("../../images/logo.png")} alt="logo" />
            </a>
          </div>
        </header>
        {this.state.bookDetails.volumeInfo ? this.renderData() : "Loading...."}
      </div>
    );
  }
}
