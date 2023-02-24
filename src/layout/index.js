import React, { Component } from "react";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";

class PageLayout extends Component {
  render() {
    return (
      <>
        <Navbar />
        {this.props.children}
        <NewsLetter />
      </>
    );
  }
}

export default PageLayout;
