import React, { useEffect, useState } from 'react'
import { Jumbotron, Container, Col } from 'react-bootstrap'



const SingleBlog = (props) => {

    const { blog } = props

    const title = blog.title
    const subtitle = blog.title
    const author = blog.author
    const created = blog.createdAt
    const content = JSON.stringify(blog.body)

    console.log(content)



    // function styles(body){
    //     if( body.length > 100   ) return new Col 
    // }

    return (
        <div id="single_blog">
            <Jumbotron>
                <Container>
                    {/* <div className="blog_title">
                        <h1> { title }  </h1>
                        <h2> { subtitle } </h2>
                    </div>
                        <a> Posted: { created } Written By: { author }</a>
                    <Col style = { styles(content) }>
                       
                    </Col> */}

                    <h1> Blogs !! </h1>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default SingleBlog; 