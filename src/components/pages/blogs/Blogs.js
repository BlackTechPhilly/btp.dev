import React, { Component } from "react";
import axios from "axios";
import BlogItem from "./BlogItem";

export class Blogs extends Component {
  state = {
    techBlogs: [],
  };

  componentDidMount() {
    axios.get("https://btpblog.herokuapp.com/tech-posts").then((response) => {
      const content = response.data;
      this.setState({ techBlogs: content });
    });
  }

  render() {
    return (
      <div style={{ margin: "15px" }}>
        <BlogItem blogs={this.state.techBlogs} />
      </div>
    );
  }
}

export default Blogs;
