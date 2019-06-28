import React, { Component } from 'react'
import Header from "./Header/header"
import Details from "./BookDetails/bookDetails"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Render from "./homePage"

export default class App extends Component {
    render() {
        return (
            <Router>
                <Route path="/" exact component={Header} />
                <Route path="/" exact component={Render} />
                <Route path="/book/:id" exact component={Details} />
            </Router>
        )
    }
}
