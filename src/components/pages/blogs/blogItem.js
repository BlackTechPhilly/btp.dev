<<<<<<< HEAD
import React from 'react';
import { Link } from "react-router-dom";
import { Accordion, Container, Card, Button } from 'react-bootstrap'; 



function setCol(words){
  var columns = words.slice(0, 500)
        console.log(columns)    
        return( 
          <div>
            {columns}  
            <br></br>
            <p>...</p> 
          </div>
        )
  }


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
                            <div className="blog_body">
                              { setCol(blog.body) }

                            <Link to= {`/single_blog/${blog.id}`}>
                              <Button variant="link" size="lg" block>read more</Button> 
                            </Link> 

                            </div>
                            
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
=======
import React from "react";
import { Link } from "react-router-dom";
import { Accordion, Container, Card, Button } from "react-bootstrap";

function setCol(words) {
  var columns = words.slice(0, 500);
  return (
    <div>
      {columns}
      <br></br>
      <p>...</p>
    </div>
  );
}

// Get next number of posts
const nextPage = () => {};

// Get previous number of posts
const prevPage = () => {};

const BlogItem = (props) => {
  const { blogs } = props;

  return (
    <div>
      {blogs.map((blog) => {
        return (
          <div>
            <Container>
              <Card
                key={blog.id}
                style={{
                  width: "auto%",
                  height: "auto",
                  color: "white",
                  fontSize: "20px",
                  backgroundColor: "#008BE0",
                  margin: "5px",
                }}
              >
                <Card.Img variant="top" src={blog.featuredImage} />
                <Card.Body>
                  <Card.Title> {blog.title} </Card.Title>
                  <Card.Subtitle> {blog.subtitle} </Card.Subtitle>
                  <Accordion defaultActiveKey="0">
                    <Accordion.Toggle
                      as={Card.Header}
                      variant="link"
                      eventKey="1"
                      style={{ color: "#FFD355" }}
                    >
                      Expand
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                      <Card.Text>
                        <div className="blog_body">
                          {setCol(blog.body)}

                          <Link to={`/single_blog/${blog.id}`}>
                            <Button
                              variant="link"
                              size="lg"
                              block
                              style={{ color: "white" }}
                            >
                              read more
                            </Button>
                          </Link>
                        </div>
                      </Card.Text>
                    </Accordion.Collapse>
                  </Accordion>
                </Card.Body>
              </Card>
            </Container>
          </div>
        );
      })}
    </div>
  );
};

export default BlogItem;
>>>>>>> 3be4439a35a84256f623188f563fe8fe41d91a7c
