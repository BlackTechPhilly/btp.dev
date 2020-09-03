import React, { useEffect, useState } from "react";
import axios from "axios";
import { Jumbotron, Container, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import reactStringReplace from "react-string-replace";

const SingleBlog = () => {
  const blog = useParams();
  const blogId = blog.blogId;
  const [singleBlog, setBlog] = useState([]);

  useEffect(() => {
    axios
      .get(`https://btpblog.herokuapp.com/tech-posts/${blogId}`)
      .then((response) => {
        const content = response.data;
        setBlog(content);
      });
  }, [blogId, setBlog]);

  const created = new Date(singleBlog.createdAt).toLocaleDateString();

  return (
    <div style={{}}>
      <Jumbotron>
        <Container style={{ textAlign: "center" }}>
          <div>
            <h1 style={{ fontSize: "50px" }}>{singleBlog.title} </h1>
            <h3> {singleBlog.subtitle} </h3>
            <>
              <i>
                Written By: {singleBlog.author} on {created}
              </i>
            </>
          </div>

          <Row>
            <Col>
              <div>
                <div>
                  <p
                    style={{
                      fontFamily: "Eina01-Regular",
                      fontSize: "15px",
                      padding: "4px",
                      textAlign: "center",
                    }}
                  >
                    {reactStringReplace(
                      singleBlog.body,
                      /(\^)/g,
                      (match, i) => (
                        <p key={i}>{match}</p>
                      )
                    )}
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default SingleBlog;
