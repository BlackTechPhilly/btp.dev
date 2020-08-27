import React from 'react';
import { Link } from "react-router-dom";
import { Accordion, Container, Card, Button } from 'react-bootstrap'; 


 


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
                          <Accordion.Toggle as={Card.Header} variant="link" eventKey="1"> 
                            <img alt ='arrow' src={require('../../../components/assets/images/down_arrow.png')} width='15' height='15'/> 
                          </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                          <Card.Text>
                            
                            { blog.body }

                            <Link to= {`/single_blog/${blog.id}`}>
                              <Button block variant="link" height='150%'>read more</Button> 
                            </Link> 
                        
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