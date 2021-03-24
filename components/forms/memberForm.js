import { Form, Col, Button, Jumbotron } from "react-bootstrap";

/* Form validation API setup and confirmation message when sent successfully*/
const memberForm = () => {
  return (
    <div>
      <Jumbotron style={{ backgroundColor: "transparent" }}>
        <h2>Breaking the Code</h2>
        <p>
        Interested in becoming a member or sponsor? Or just have a general question? Please complete the form below and we'll reach back out to you very soon.
        </p>
        {/* <ul style={{ textAlign: "left" }}>
          <li> selling point 1</li>
          <li> selling point 2</li>
          <li> selling point 3</li>
        </ul> */}
        <Form>
          <Form.Row>
            <Col>
              <Form.Control
                type="text"
                placeholder="Name"
                style={{ backgroundColor: "transparent" }}
              />
            </Col>

            <Col>
              <Form.Control
                type="text"
                placeholder="email"
                style={{ backgroundColor: "transparent" }}
              />
            </Col>
          </Form.Row>

          <Form.Row style={{ marginTop: "10px" }}>
            <Form.Control
              as="select"
              style={{ backgroundColor: "transparent" }}
            >
              <option>Please Select an Option</option>
              <option>General inquiry</option>
              <option>I would like to learn more about Black Tech Philly</option>
              <option>I'm a developer and have a project idea</option>
          
            </Form.Control>
          </Form.Row>

          <Form.Row style={{ marginTop: "10px" }}>
            <Form.Control
              as="textarea"
              rows={6}
              style={{ backgroundColor: "transparent" }}
              placeholder="Your message here..."
            />
          </Form.Row>
        </Form>
        <br />
        <Button>Send</Button>
      </Jumbotron>
    </div>
  );
};
export default memberForm;
