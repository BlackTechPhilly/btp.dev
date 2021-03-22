import { Nav, Container, Row, Col } from "react-bootstrap";
import { FaYoutube, FaLinkedin, FaTwitter, FaBookOpen } from "react-icons/fa";
import style from "../styles/bootstrapUi.module.css";

const Footer = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Nav
              className={style.footer}
              style={{
                textAlign: "center",
                display: "block",
              }}
            >
              <Nav.Item style={{ display: "inline-block" }}>
                <Nav.Link href="">
                  Twitter
                  <FaTwitter
                    style={{
                      marginLeft: "5px",
                      height: "20px",
                      width: "20px",
                      color: "",
                    }}
                  />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item style={{ display: "inline-block" }}>
                <Nav.Link href="">
                  LinkedIn
                  <FaLinkedin
                    style={{
                      marginLeft: "5px",
                      height: "20px",
                      width: "20px",
                      color: "",
                    }}
                  />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item style={{ display: "inline-block" }}>
                <Nav.Link href="">
                  YouTube
                  <FaYoutube
                    style={{
                      marginLeft: "5px",
                      height: "20px",
                      width: "20px",
                      color: "red",
                    }}
                  />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item style={{ display: "inline-block" }}>
                <Nav.Link href="">
                  Code of Conduct
                  <FaBookOpen
                    style={{
                      marginLeft: "5px",
                      height: "20px",
                      width: "20px",
                      color: "black",
                    }}
                  />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item style={{ display: "inline-block" }}>
                <Nav.Link disabled>Black Tech Philly &copy; 2020</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
