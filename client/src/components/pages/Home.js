import React from "react";
import { Jumbotron, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/images/transparent_BTP_Logo_color.png";
import style from "../styles/landingStyle.module.css";

const Home = () => (
  <div>
    <Jumbotron className={style.landingImage}>
      <Container className={style.homeTextContainer}>
        <img className={style.logo} src={logo} />
        <div
          style={{
            textAlign: "center",
            color: "white",
            position: "relative",
            top: "5.5em",
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
      </Container>
    </Jumbotron>
  </div>
);

export default Home;
