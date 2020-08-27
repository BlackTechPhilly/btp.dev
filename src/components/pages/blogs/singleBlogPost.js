import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Jumbotron, Container, Col } from 'react-bootstrap'
import { useParams, useRouteMatch } from 'react-router-dom'





const SingleBlog = () => {

    const blog = JSON.stringify(useParams())
    const [ singleBlog, setBlog ] = useState();

    useEffect(()=>{
        axios.get(`https://btpblog.herokuapp.com/tech-posts/${blog}`).then((response) => 
        {
            const content = response.data
            console.log(content)
            setBlog({content})
        })}, 
        [setBlog]
    )

    console.log(blog)
    console.log(singleBlog)
    



    // function styles(body){
    //     if( body.length > 100   ) return new Col 
    // }

    //style = { styles(content) }


    return (
        <div>
            {/* {singleBlog.map((techBlog) => { */}
    return (
        <div id="single_blog">
            <Jumbotron>
                <Container>
                    {/* <div className="blog_title">
                        <h1> { techBlog.title } Title  </h1>
                        <h2> { techBlog.subtitle } </h2>
                    </div>
                        <a> Posted: { techBlog.createdAt } Written By: { techBlog.author }</a> */}
                    <Col >
                       
                    </Col>

                    <h1> Blogs !! </h1>
                </Container>
            </Jumbotron>
        </div>
        )
    {/* })}      */}
        </div>
    )
}

export default SingleBlog