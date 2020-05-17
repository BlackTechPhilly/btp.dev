import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class SponsorForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      to: "ian.kimble571@gmail.com",
      from: "",
      subject: "",
      text: "",
      error: "",
      confirmSent: false,
    };
  }

  handleChange = (name) => (event) => {
    this.setState({ error: "" });
    this.setState({ [name]: event.target.value });
  };

  handleChange = (name) => (event) => {
    this.setState({ error: "" });
    this.setState({ [name]: event.target.value });
  };

  contactForm = (name, from, subject, text) => (
    <div>
      <div>
        <h1>Sponsors</h1>
        <p> For inquiries or general questions please send a message below !</p>
        <Form
          style={{
            marginLeft: "60px",
            marginRight: "60px",
            borderStyle: "solid",
            borderWidth: "1px",
            padding: "20px",
          }}
        >
          <Form.Group controlId="formBasicEmail">
            <Form.Label></Form.Label>
            <Form.Control
              type="text"
              placeholder="Name"
              onChange={this.handleChange("name")}
              value={name}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label> </Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              onChange={this.handleChange("from")}
              value={from}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label></Form.Label>
            <Form.Control
              type="text"
              placeholder="Subject"
              onChange={this.handleChange("subject")}
              value={subject}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label></Form.Label>
            <Form.Control
              as="textarea"
              rows="5"
              placeholder="Your message..."
              onChange={this.handleChange("text")}
              value={text}
            />
          </Form.Group>
          <Button
            variant="primary"
            size="lg"
            type="Send"
            style={{ backgroundColor: "#006666", border: "none" }}
            onClick={this.submit}
          >
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );

  render() {
    const { name, from, subject, text } = this.state;
    if (this.state.confirmSent === false) {
      return <div>{this.contactForm(name, from, subject, text)}</div>;
    } else if (this.state.confirmSent === true) {
      return (
        <div
          style={{
            textAlign: "center",
            fontSize: "40px",
            fontFamily: "Gelasio",
            marginTop: "15px",
          }}
        >
          <h2> Thank you!</h2>
          <p
            style={{
              fontSize: "14px",
            }}
          >
            Thank you for your message. We'll be in touch very soon!
          </p>
        </div>
      );
    }
  }
}
export default SponsorForm;
