import React, { useState, useEffect } from 'react';
import { Accordion, Container, Card, Col, Row } from 'react-bootstrap'; 

const BlogItem = (props) => {

    const { blogs } = props; 

    // const [ blogList, setBlogList ] = useState({

    // }); 


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
                          <Card.Subtitle> authored by ____ </Card.Subtitle>
                        <Accordion defaultActiveKey="0">
                          <Accordion.Toggle as={Card.Header} variant="link" eventKey="1"> read more </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                          <Card.Text>
                            { blog.content }
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