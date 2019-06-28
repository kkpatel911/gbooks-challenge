import React, { Component } from "react";
import "../styles/main.css";
import Bookcard from "./Bookcard/bookcard";
import { Link } from "react-router-dom";

export default class Render extends Component {
  constructor() {
    super();
    this.state = {
      bookData: [],
      text: "",
      submit: ""
    };
    this.renderData = this.renderData.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.searchForBooks = this.searchForBooks.bind(this);
  }

  componentDidMount() {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=billionaire&key=AIzaSyBLUQESlOYf2g6Aqav4dkMckQOs0ryZJIo`
    )
      .then(data => data.json())
      .then(data => {
        this.setState({
          bookData: data.items
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    });
  }
  searchForBooks(e) {
    e.preventDefault();
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${
        this.state.text
      }&key=AIzaSyBLUQESlOYf2g6Aqav4dkMckQOs0ryZJIo`
    )
      .then(data => data.json())
      .then(data => {
        this.setState({
          bookData: data.items
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  renderData() {
    return this.state.bookData.map(data => {
      return (
        <Link
          to={`book/${data.id}`}
          style={{ textDecoration: "none" }}
          key={data.id}
        >
          <Bookcard
            title={data.volumeInfo.title}
            bookType={data.volumeInfo.printType}
            rating={
              data.volumeInfo.averageRating
                ? Math.round(data.volumeInfo.averageRating)
                : 5
            }
            image={
              data.volumeInfo.imageLinks
                ? data.volumeInfo.imageLinks.thumbnail
                : "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"
            }
          />
        </Link>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="main_content">
          <form className="form_content" onSubmit={this.searchForBooks}>
            <input
              type="text"
              placeholder="Search"
              value={this.state.text}
              onChange={this.handleChange}
            />
            <button type="submit">Submit</button>
          </form>
          <div className="main_card">
            {this.state.bookData ? (
              this.renderData()
            ) : (
              <h1 className="error">This is not valid search term</h1>
            )}
          </div>
        </div>
      </div>
    );
  }
}
