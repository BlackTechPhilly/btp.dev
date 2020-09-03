import React, { Component } from 'react'; 
import axios from 'axios'; 

import withBlogsLoading from './withBlogsLoading'
import BlogItem from './blogItem'; 

const BlogsLoading = withBlogsLoading(BlogItem);

export class Blogs extends Component {
  state = {
    techBlogs: [],
  };

  
    state = {
        isLoading: false, 
        techBlogs: []
    }
    
    

    componentDidMount(){
        this.setState({ isLoading: true })
        
        axios.get('https://btpblog.herokuapp.com/tech-posts')
        .then(response => {
        const content = response.data
        this.setState({ isLoading: false, techBlogs: content })
        console.log(content)
    })
    }
  vbn
    render(){
        return(
            <div>
                <BlogsLoading isLoading={this.state.isLoading} blogs={this.state.techBlogs} />
            </div>
        )
    }
}

export default Blogs;
