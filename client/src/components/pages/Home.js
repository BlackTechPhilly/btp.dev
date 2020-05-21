import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
// Looks good
const Home = () => (
  <div>
    <Jumbotron>
      <Container>
        <h1 style={{ textAlign: "center" }}>Welcome to Black Tech Philly</h1>
        <p
          style={{
            fontFamily: "Eina01-Regular",
            fontSize: "20px",
            padding: "4px",
            textAlign: "center",
          }}
        >
          Philadelphia's Community for Black Tech Professionals
        </p>
      </Container>
    </Jumbotron>
  </div>
);

export default Home;
