import { Card, Jumbotron, Container, Col, Button, Row } from "react-bootstrap";

import style from "../styles/bootstrapUi.module.css";
import Fade from "react-reveal/Fade";

import Image from "next/image";

export default function About() {
  return (
    <div>
      <Fade top>
        <Container
          style={{ textAlign: "center", fontFamily: "DINCondensed-Bold", marginTop:'25px'}}
        >
          <h1>Our Mission </h1>
          <Row>
            <Col>
              <p>
                Black Tech Philly’s primary focus is to inspire and provide our
                communities with the information and tools necessary to help
                them pursue, jumpstart and advance their careers in technology.
              </p>
            </Col>
            <Col></Col>
          </Row>

          <h1>Board Members and Officers</h1>
          <Row>
            <Col>
            <div>
            Ian Kimble
            <br/>
            Executive officer | Lead Program coordinator
            </div>
            </Col>
            <Col>Diamond Kenney</Col>
            <Col>Khalil Saboor</Col>
            <Col>Ryan Small</Col>
            <Col>Eric Murchinson</Col>
          </Row>
          <Row>
            <Col></Col>
            <Col></Col>
            <Col></Col>
          </Row>
        </Container>
      </Fade>
    </div>
  );
}
