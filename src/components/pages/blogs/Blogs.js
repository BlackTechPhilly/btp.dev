<<<<<<< HEAD
import React, { Component } from 'react'; 
import axios from 'axios'; 


import BlogItem from './blogItem'; 

export class Blogs extends Component {

  
    state = {
        techBlogs: []
    }
    

    componentDidMount(){
        axios.get('https://btpblog.herokuapp.com/tech-posts')
        .then(response => {
        const content = response.data
        this.setState({ techBlogs: content })
        console.log(content)
    })
    }

    render(){
        return(
            <div>
                <BlogItem blogs={this.state.techBlogs} />
            </div>
        )
    }
}

export default Blogs; 
=======
import React, { Component } from "react";
import axios from "axios";
import BlogItem from "./blogItem";

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
>>>>>>> 3be4439a35a84256f623188f563fe8fe41d91a7c
