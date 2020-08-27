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
                <div>
                    <BlogItem blogs={this.state.techBlogs} />
                    {console.log(this.state.techBlogs)}
                </div>
            </div>
        )
    }
}

export default Blogs; 