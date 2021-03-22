import {
  Form,
  Col,
  Container,
  Button,
  Row,
  Jumbotron,
  Card,
} from "react-bootstrap";

import style from "../styles/bootstrapUi.module.css";
import Fade from "react-reveal/Fade";

import Image from "next/image";

const subscribe = () => {
  return (
    <div>
      <Container>
        <Fade top>
          <Jumbotron
            style={{
              textAlign: "center",
              height: "700px",
            }}
            className={style.homeCard}
          >
            <h1>Subscribe</h1>

            <Row>
              <Card style={{ height: "400px", backgroundColor: "transparent" }}>
                <Col>
                  <Image
                    variant="top"
                    src="/transparent_BTP_Logo_color.png"
                    height="150px"
                    width="150px"
                  />
                  <br />
                  <br />
                  <br />
                  <h2>BTP Newsletter</h2>
                  <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                    scelerisque ante sollicitudin commodo. Cras purus odio,
                    vestibulum in vulputate at, tempus viverra turpis. Fusce
                    condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                    congue felis in faucibus.
                  </p>

                  <Form inline="true"></Form>
                  <Form.Row>
                    <Col></Col>
                    <Col>
                      <Form.Control
                        type="text"
                        placeholder="email"
                        style={{
                          backgroundColor: "transparent",
                          color: "white",
                        }}
                      />
                    </Col>
                    <Button>Subscribe</Button>
                    <Col></Col>
                  </Form.Row>
                </Col>
              </Card>
            </Row>
          </Jumbotron>
        </Fade>
      </Container>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default subscribe;
