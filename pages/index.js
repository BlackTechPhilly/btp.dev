import { Jumbotron, Container, Button, Card, Col, Row } from "react-bootstrap";

import style from "../styles/bootstrapUi.module.css";
import Fade from "react-reveal/Fade";

import Image from "next/image";
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <div>
        <Fade bottom>
          <Jumbotron
            fluid
            style={{
              textAlign: "center",
              height: "auto",
              backgroundColor: "transparent",
            }}
            // className={style.landingImg}
          >
            <Container>

              <h1
                style={{ fontSize: "150px", fontFamily: "DINCondensed-Bold" }}
              >
                Black Tech Philly
              </h1>
              <Image
                variant="top"
                src="/transparent_BTP_Logo_color.png"
                height="400px"
                width="400px"
              />
              <h3 style={{ fontSize: "50px", fontFamily: "Eina01-Regular" }}>
                <i>"No code switching, just code"</i>
              </h3>
              <p style={{ fontSize: "20px", fontFamily: "Eina01-Regular" }}>
                Philadelphia's Virtual Community for Black Tech Professionals
              </p>
              <Button className={style.buttonStyle}>Learn More</Button>
            </Container>
          </Jumbotron>
        </Fade>
      </div>

      {/* <hr /> */}
      {/*blog cards*/}
      {/* <Fade bottom>
        <Jumbotron fluid className={style.jumbotrons}>
          <Container style={{ textAlign: "center" }}>
            <h1 style={{ fontFamily: "DINCondensed-Bold", fontSize: "75px" }}>
              Recent Posts
            </h1>
            <Card
              className={style.homeBlogCard}
              style={{ width: "18rem", display: "inline-block", margin: "5px" }}
            >
              <Card.Img variant="top" src="" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary" className={style.secondaryButton}>
                  Go somewhere
                </Button>
              </Card.Body>
            </Card>
            <Card
              className={style.homeBlogCard}
              style={{ width: "18rem", display: "inline-block", margin: "5px" }}
            >
              <Card.Img variant="top" src="" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary" className={style.secondaryButton}>
                  Go somewhere
                </Button>
              </Card.Body>
            </Card>
            <Card
              className={style.homeBlogCard}
              style={{ width: "18rem", display: "inline-block", margin: "5px" }}
            >
              <Card.Img variant="top" src="" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary" className={style.secondaryButton}>
                  Go somewhere
                </Button>
              </Card.Body>
            </Card>
            <br />
            <br />
            <Button className={style.buttonStyle}>View Blog</Button>
          </Container>
        </Jumbotron>
      </Fade> */}
      <hr />
      {/*call to action for members*/}

      <Fade Bottom>
        <Jumbotron fluid className={style.jumbotrons}>
          <Container style={{ textAlign: "center" }}>
            <h1 style={{ fontFamily: "DINCondensed-Bold", fontSize: "75px" }}>
              For our Members
            </h1>
            <p>
              Black Tech Philly is a virtual inclusive space for black tech professionals of all career levels and disciplines to connect. Follow the link below to learn more.
            </p>
            <Link href='/about'>
            <Button className={style.buttonStyle}>Learn More</Button>
            </Link>
          </Container>
        </Jumbotron>
        <hr />
        {/*call to action for communitt*/}

        <Jumbotron fluid className={style.jumbotrons}>
          <Container style={{ textAlign: "center" }}>
            <h1 style={{ fontFamily: "DINCondensed-Bold", fontSize: "75px" }}>
              For the community
            </h1>
            <p>
              A main component to our mission is to uplift our community by demistifiying preconcieved ideas about technology. Follow the link below to learn more.
            </p>
            <Link href='/about'>
            <Button className={style.buttonStyle}>Learn More</Button>
            </Link>
          </Container>
        </Jumbotron>
        <hr />
        {/*call to action for sponsors*/}
        {/* <Jumbotron fluid className={style.jumbotrons}>
          <Container style={{ textAlign: "center" }}>
            <h1 style={{ fontFamily: "DINCondensed-Bold", fontSize: "75px" }}>
              Our Sponsors
            </h1>
            <Row>
              <Col xs={6} md={4}>
                <Image src="" thumbnail />
              </Col>

              <Col xs={6} md={4}>
                <Image src="" thumbnail />
              </Col>
              <Col xs={6} md={4}>
                <Image src="" thumbnail />
              </Col>
            </Row>
            <p>
              This is a modified jumbotron that occupies the entire horizontal
              space of its parent.
            </p>
          </Container>
        </Jumbotron> */}
      </Fade>
    </div>
  );
}
