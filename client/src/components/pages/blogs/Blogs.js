import React, { Component } from 'react'; 
import axios from 'axios'; 

import BlogItem from './blogItem'; 

export class Blogs extends Component {

    constructor(props) {
        super(props); 
        state = {
            blogs: [], 
        }
    }

    componentDidMount(){
        axios.get().then(blogs)
        const blogs = blogs.data
        setState({blogs: blogs})
    }

    render(){
        return(
            <div>
                <BlogItem blogs={blogs} />
            </div>
        )
    }



}