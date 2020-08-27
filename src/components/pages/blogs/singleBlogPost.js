import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Jumbotron, Container, Col } from 'react-bootstrap'
import { useParams, useRouteMatch } from 'react-router-dom'





const SingleBlog = () => {

    const blog = useParams()
    const blogId = blog.blogId
    const [ singleBlog, setBlog ] = useState([]);

    useEffect(()=>{
        axios.get(`https://btpblog.herokuapp.com/tech-posts/${blogId}`).then((response) => 
        {
            const content = response.data
            setBlog(content)
        })},[setBlog])
    
        
        
    const body = JSON.stringify(singleBlog.body)
    // const text = body.split(' ')

    console.log(body)
    // console.log(body.split(' '))


    // function styles(words){
    //     if( words.length > 100   ) return new Col 
    // }

    //style = { styles(content) }

    return (
        <div id="single_blog">
            <Jumbotron>
                <Container key={singleBlog.id}>
                            <h1> Blogs !! </h1>
                        <div className="blog_title">
                            <h1> { singleBlog.title } Title  </h1>
                            <h2> { singleBlog.subtitle } </h2>
                        </div>
                            <a> Posted: { singleBlog.createdAt } Written By: { singleBlog.author }</a>
                        {/* <Col style={styles({body})}> 
                            <p> { body } </p>        
                        </Col> */}
                        </Container>
                    </Jumbotron>
                </div>
                )
      
}

export default SingleBlog