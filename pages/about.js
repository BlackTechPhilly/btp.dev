import { Card, Jumbotron, Container, Col, Button, Row } from "react-bootstrap";

import style from "../styles/bootstrapUi.module.css";
import Fade from "react-reveal/Fade";

import Image from "next/image";

export default function About() {
  return (
    <div>
      <Fade top>
        <Container style={{ textAlign: "center",fontFamily: "DINCondensed-Bold"  }}>
          <h1>About BTP</h1>
 
        </Container>

        <Container style={{ textAlign: "center" }}>
          <h2 style={{fontFamily: "DINCondensed-Bold" }}>Team</h2>
          <Card
            className={style.homeCard}
            style={{
              height: "600px",
              width: "350px",
              display: "inline-block",
            }}
          >
            <Image
              variant="top"
              src="/ian_profile_img.png"
              height="350px"
              width="350px"
              style={{
                margin: "15px",
              }}
            />
            <Card.Body>
              <Card.Title style={{fontFamily: "DINCondensed-Bold" }}>Ian Kimble | (He, Him)</Card.Title>
              <Card.Text>Co-Founder | Executive Director</Card.Text>
            </Card.Body>
          </Card>
          <Card
            className={style.homeCard}
            style={{
              height: "600px",
              width: "350px",
              display: "inline-block",
            }}
          >
            <Image
              variant="top"
              src="/khalil_profile_img.png"
              height="350px"
              width="350px"
              style={{
                margin: "15px",
              }}
            />
            <Card.Body>
              <Card.Title style={{fontFamily: "DINCondensed-Bold" }}>Khalil Saboor | (He, Him)</Card.Title>
              <Card.Text>Co-Founder | Treasurer </Card.Text>
            </Card.Body>
          </Card>
          <Card
            className={style.homeCard}
            style={{
              height: "600px",
              width: "350px",
              display: "inline-block",
            }}
          >
            <Image
              variant="top"
              src="/ryan_profile_img.png"
              height="350px"
              width="350px"
              style={{
                margin: "15px",
              }}
            />
            <Card.Body>
              <Card.Title style={{fontFamily: "DINCondensed-Bold" }}>Ryan Small | (He, Him)</Card.Title>
              <Card.Text>Co-Founder | | Secretary </Card.Text>
            </Card.Body>
          </Card>
        </Container>
        {/* </Jumbotron> */}
      </Fade>
      <hr />
      <Container style={{ textAlign: "center" }}>
        <h1 style={{fontFamily: "DINCondensed-Bold" }}>Our Mission </h1>
        <p>
          Black Tech Philly is a predominantly virtual, inclusive space where
          Black tech professionals can discuss technology, share knowledge and
          experiences, find industry related opportunities, and work
          collaboratively on open source, community driven projects for the
          benefit of the denizens of Philadelphia and the surrounding areas.
        </p>
      </Container>
      <hr />
      {/*For Members */}
      <Fade right>
        <Container style={{ textAlign: "center" }}>
          <Row>
            <Col>
              <h3 style={{fontFamily: "DINCondensed-Bold" }}>Breaking the Code To serve our Members</h3>
          
              <p style={{fontFamily: "Eina01-Regular" }}>
              BTP is an inclusive space for Black tech professionals to network and build bonds, but we’re also a welcoming community for tech professionals of all colors, creeds, sexual orientation, gender identification and levels of career experience. No code switching necessary here- Just code.
              </p>
              <p style={{fontFamily: "Eina01-Regular" }}>
              BTP is a program dedicated to solidarity through learning. We strive to help our members reach their career goals as tech professionals through mentoring, tutoring, and career oriented programming, as well as provide real world experience via coding projects.
              </p>
      <p style={{fontFamily: "Eina01-Regular"}}>
        
{/* BTP’s primary mission is to get more Black people into professional tech roles. With our web development projects and related programming we aim to provide our members with the opportunity to not only reinforce their portfolios with robust projects and experience but help them land employment opportunities through our relationships with employers across the city and surrounding areas. */}
      </p>
              
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </Fade>
      <hr />
      {/*For Community*/}
      <Fade left>
        <Container style={{ textAlign: "center" }}>
          <Row>
            <Col></Col>
            <Col>
              <h3 style={{fontFamily: "DINCondensed-Bold" }}>Connecting the Community To serve our city</h3>
            
              <p style={{fontFamily: "Eina01-Regular"}}>
                We believe the foundation of successful community infastructure is preparation and education.
                Black Tech Philly aims to provide educational resources to those seeking to learn more about technology to achieve their non-technological goals;  
                More specifically, providing entrepreneurs and local businesses with guidance on web technologies and practices as well as starting discussions with communities to demistify certain preconceived notions about technology and the ethics of certain technologies and how they impact our neighborhoods. 
              </p>
            </Col>
          </Row>
        </Container>
      </Fade>
      <hr />
      {/*For Sponsors*/}
      <Fade right>
        <Container style={{ textAlign: "center" }}>
          <Row>
            <Col>
              <h3 style={{fontFamily: "DINCondensed-Bold" }}>Building Together with our Sponsors</h3>
              
              <p style={{fontFamily: "Eina01-Regular"}}>
                In conjunction with our community and local leaders we look to build relationships with tech conmpanies across the city to help promote our mission to uplift our communities. 
              </p>
              <p>To learn more, please reach out to us via email at <a href="blacktechphilly@gmail.com">blacktechphilly@gmail.com</a></p>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </Fade>
    </div>
  );
}
