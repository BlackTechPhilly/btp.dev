import React, { Component } from "react";
import axios from "axios";

import LoadingBlog from "./LoadingBlog";
import BlogItem from "./BlogItem";

const BlogsLoading = LoadingBlog(BlogItem);

export class Blogs extends Component {

  state = {
    isLoading: false,
    techBlogs: [],
  };

  componentDidMount() {
    this.setState({ isLoading: true });

    axios.get("https://btpblog.herokuapp.com/tech-posts").then((response) => {
      const content = response.data;
      this.setState({ isLoading: false, techBlogs: content });
    });
  }

  render() {
    return (
      <div>
        <BlogsLoading
          isLoading={this.state.isLoading}
          blogs={this.state.techBlogs}
        />
      </div>
    );
  }
}

export default Blogs;
