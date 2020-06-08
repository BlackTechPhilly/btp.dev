import React from "react";
import { Jumbotron, Container, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/images/btp.png";
import style from "../styles/landingStyle.module.css";

// Confirmation that changes have been pushed

const Home = () => (
  <div>
    <Jumbotron className={style.landingImage}>
      <Container className={style.homeTextContainer}>
        <Row>
          <img
            className={style.logo}
            src={logo}
            alt="Black Tech Philly Color Logo"
          />

          <div
            style={{
              textAlign: "center",
              color: "white",
              margin: "auto",
              padding: "10px",
            }}
          >
            <h1>Welcome to Black Tech Philly</h1>
            <p style={{ fontFamily: "Eina01-Regular" }}>
              Philadelphia's Virtual Community for Black Tech Professionals
            </p>
            <Link to="/mission">
              <Button className={style.moreInfoBtn}>Learn More</Button>
            </Link>
          </div>
        </Row>
      </Container>
    </Jumbotron>
  </div>
);

export default Home;
