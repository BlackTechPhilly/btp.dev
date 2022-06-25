import { Jumbotron, Container, Button, Card, Col, Row } from "react-bootstrap";
import style from "../styles/bootstrapUi.module.css";
import Fade from "react-reveal/Fade";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>
        <Fade bottom>
          <div
            style={{
              textAlign: "center",
              height: "auto",
              backgroundColor: "transparent",
            }}
          >
            <Container style={{ marginTop: "25px" }}>
              <Row>
                <Col>
                  <div
                    style={{
                      height: "85px",
                      fontSize: "75px",
                      fontFamily: "DINCondensed-Bold",
                    }}
                  >
                    Black Tech Philly
                  </div>
                  <div
                    style={{ fontSize: "25px", fontFamily: "Eina01-Regular" }}
                  >
                    <i>"No code switching, just code"</i>
                  </div>
                  <Image
                    variant="top"
                    src="/transparent_BTP_Logo_color.png"
                    height="350px"
                    width="350px"
                  />

                  {/* <p style={{ fontSize: "20px", fontFamily: "Eina01-Regular" }}>
                    Philadelphia's Space for Black Tech Professionals and
                    Enthusists
                  </p> */}
                </Col>
                <Col>
                  <div>
                    <p style={{ marginTop: "25px", fontSize:'20px' }}>
                      <div
                        style={{
                          height: "55px",
                          fontSize: "35px",
                          fontFamily: "DINCondensed-Bold",
                        }}
                      >
                        Demo Text
                      </div>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Libero nunc consequat interdum varius sit amet
                      mattis. Lorem ipsum dolor sit amet consectetur adipiscing.
                      Enim lobortis scelerisque fermentum dui faucibus. Sodales
                      ut eu sem integer vitae justo. Enim sed faucibus turpis in
                      eu mi.
                    </p>
                  </div>
                  <Button className={style.buttonStyle}>Learn More</Button>
                </Col>
              </Row>
            </Container>
          </div>
        </Fade>
      </div>
    </div>
  );
}
