import { Card, Jumbotron, Container, Col, Button, Row } from "react-bootstrap";

import style from "../styles/bootstrapUi.module.css";
import Fade from "react-reveal/Fade";

import Image from "next/image";

export default function Programs() {
  return (
    <div>
      <Fade top>
        <Container
          style={{ textAlign: "center", fontFamily: "DINCondensed-Bold" }}
        >
          <h1>Programs</h1>
          <Row>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Libero nunc consequat interdum varius sit amet mattis. Lorem
                ipsum dolor sit amet consectetur adipiscing. Enim lobortis
                scelerisque fermentum dui faucibus. Sodales ut eu sem integer
                vitae justo. Enim sed faucibus turpis in eu mi. Turpis in eu mi
                bibendum neque egestas congue quisque egestas. Scelerisque in
                dictum non consectetur a erat nam at. Eget nulla facilisi etiam
                dignissim. Morbi tristique senectus et netus et malesuada fames
                ac. Nibh sit amet commodo nulla facilisi nullam.
              </p>
            </div>
          </Row>

          <Row>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Libero nunc consequat interdum varius sit amet mattis. Lorem
                ipsum dolor sit amet consectetur adipiscing. Enim lobortis
                scelerisque fermentum dui faucibus. Sodales ut eu sem integer
                vitae justo. Enim sed faucibus turpis in eu mi. Turpis in eu mi
                bibendum neque egestas congue quisque egestas. Scelerisque in
                dictum non consectetur a erat nam at. Eget nulla facilisi etiam
                dignissim. Morbi tristique senectus et netus et malesuada fames
                ac. Nibh sit amet commodo nulla facilisi nullam.
              </p>
            </div>
          </Row>
          <Row>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Libero nunc consequat interdum varius sit amet mattis. Lorem
                ipsum dolor sit amet consectetur adipiscing. Enim lobortis
                scelerisque fermentum dui faucibus. Sodales ut eu sem integer
                vitae justo. Enim sed faucibus turpis in eu mi. Turpis in eu mi
                bibendum neque egestas congue quisque egestas. Scelerisque in
                dictum non consectetur a erat nam at. Eget nulla facilisi etiam
                dignissim. Morbi tristique senectus et netus et malesuada fames
                ac. Nibh sit amet commodo nulla facilisi nullam.
              </p>
            </div>
          </Row>
        </Container>
      </Fade>
    </div>
  );
}
