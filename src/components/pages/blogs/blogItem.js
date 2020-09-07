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

const BlogItem = (props) => {
  const { blogs } = props;
  console.log(blogs);
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
                  <Card.Subtitle style={{ fontFamily: "Eina01-Regular" }}>
                    {" "}
                    {blog.subtitle}{" "}
                  </Card.Subtitle>
                  <Accordion defaultActiveKey="0">
                    <Accordion.Toggle
                      as={Card.Header}
                      variant="link"
                      eventKey="1"
                      style={{ color: "#FFD355" }}
                    >
                      expand
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                      <Card.Text>
                        <div
                          className="blog_body"
                          style={{ fontFamily: "Eina01-Regular" }}
                        >
                          {setCol(blog.body)}

                          <Link to={`/item/${blog.id}`}>
                            <Button
                              variant="link"
                              size="lg"
                              block
                              style={{
                                color: "white",
                                fontFamily: "DINCondensed-Bold",
                              }}
                            >
                              Read more
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
