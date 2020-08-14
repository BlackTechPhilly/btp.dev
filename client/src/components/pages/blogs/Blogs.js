import React, { Component } from "react";
import axios from "axios";

import BlogItem from "./blogItem";

export class Blogs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [],
    };
  }

  //   componentDidMount() {
  //     axios.get("http://localhost:1337/testblogs").then(blogs);
  //     const blogs = blogs.data;
  //     setState({ blogs: blogs });
  //   }

  componentDidMount() {
    fetch("http://localhost:1337/testblogs")
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("could not return data");
        }
        return response.json();
      })
      .then((blogs) => {
        console.log(blogs);
        this.setState({ blogs: blogs });
      });
  }

  render() {
    return <div>{<BlogItem blogs={this.state.blogs} />}</div>;
  }
}

export default Blogs;
