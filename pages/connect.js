import { Card, Jumbotron, Container, Col, Button, Row } from "react-bootstrap";

import style from "../styles/bootstrapUi.module.css";
import Fade from "react-reveal/Fade";

import Image from "next/image";

export default function Connect() {
  return (
    <div>
      <Fade top>
        <Container style={{ textAlign: "center",fontFamily: "DINCondensed-Bold"}}>
          <h1>Connect </h1>
        </Container>
      </Fade>
    </div>
  );
}