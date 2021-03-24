import { Form, Jumbotron, Col, Button } from "react-bootstrap";

/* Form validation API setup and confirmation message when sent successfully*/
const sponsorForm = () => {
  return (
    <div>
      <Jumbotron style={{ backgroundColor: "transparent" }}>
        <h2> Building Together</h2>
        <p>
        Connect with Us
Interested in becoming a member or sponsor? Or just have a general question? Please complete the form below and we'll reach back out to you very soon.
        </p>
        {/* <ul style={{ textAlign: "left" }}>
          <li></li>
          <li></li>
          <li></li>
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
              <option>I Would like to be a sponsor of Black Tech Philly</option>
       
            </Form.Control>
          </Form.Row>

          <Form.Row style={{ marginTop: "10px" }}>
            <Form.Control
              as="textarea"
              rows={6}
              style={{ backgroundColor: "transparent" }}
              placeholder="Your text here..."
            />
          </Form.Row>
        </Form>
        <br />
        <Button>Send</Button>
      </Jumbotron>
    </div>
  );
};
export default sponsorForm;
