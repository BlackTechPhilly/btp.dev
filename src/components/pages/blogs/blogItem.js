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
                            <p style={{
                              fontFamily: "Eina01-Regular",
                              fontSize: "13px",
                              padding: "4px",
                              textAlign: "center"}}>
                              { setCol(blog.body) }
                             </p> 

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