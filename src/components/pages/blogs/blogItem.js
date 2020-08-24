import React from 'react';
// import { Link, withRouter } from "react-router-dom";
import { Accordion, Container, Card, Button } from 'react-bootstrap'; 

import SingleBlog from './singleBlogPost'; 


const BlogItem = (props) => {

    const { blogs } = props; 

    console.log(blogs); 



    return (
        <div>
          {blogs.map((blog) => {
              return (
                <div>
                    <Container>
                      <Card key={blog.id}>
                        <Card.Img variant="top" src={blog.featuredImage} />
                        <Card.Body>
                          <Card.Title> { blog.title } </Card.Title>
                          <Card.Subtitle> { blog.subtitle } </Card.Subtitle>
                        <Accordion defaultActiveKey="0">
                          <Accordion.Toggle as={Card.Header} variant="link" eventKey="1"> cool button icon thing </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                          <Card.Text>

                            { blog.body }
                            {/* <Link variant="link" to="/singleblog"> read more </Link>  */}

                          </Card.Text>
                        </Accordion.Collapse> 
                        </Accordion>                     
                        </Card.Body>
                      </Card>
                    </Container>
                </div>
              )
          })}
        </div>
        )
}

export default BlogItem; 