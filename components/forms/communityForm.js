import { Form, Col, Button, Jumbotron, Container } from "react-bootstrap";
import { Component } from "react";
import { sendMsg } from "../../api/form";
import style from "../../styles/bootstrapUi.module.css";

/* Form validation API setup and confirmation message when sent successfully*/
class communityForm extends Component {
  state = {
    to: "blacktechphilly@gmail.com",
    name: "",
    from: "",
    subject: "",
    text: "",
    error: "",
    confirmSent: false,
  };

  handleChange = (name) => (event) => {
    this.setState({ error: "" });
    this.setState({ [name]: event.target.value });
  };
  submit = (event) => {
    event.preventDefault();
    const { to, from, subject, text } = this.state;
    const msg = {
      to,
      from,
      subject,
      text,
    };
    sendMsg(msg).then((msg) => {
      if (msg.error) this.setState({ eror: msg.error });
      else
        this.setState({
          error: "",
          from: "",
          subject: "",
          text: "",
        });
    });
    this.setState({ confirmSent: true });
  };
  communityForm = (name, from, text, subject) => (
    <div>
      <Jumbotron style={{ backgroundColor: "transparent" }}>
        <h2>Connecting the Community</h2>
        <p>
       Looking for technical guidance on launching your dream product or service? Let's us start a conversation and answer your questions 
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
                onChange={this.handleChange("name")}
                value={name}
                style={{ backgroundColor: "transparent" }}
              />
            </Col>

            <Col>
              <Form.Control
                type="text"
                placeholder="email"
                onChange={this.handleChange("from")}
                value={from}
                style={{ backgroundColor: "transparent" }}
              />
            </Col>
          </Form.Row>

          <Form.Row style={{ marginTop: "10px" }}>
            <Form.Control
              as="select"
              style={{ backgroundColor: "transparent" }}
              onChange={this.handleChange("subject")}
              value={text}
            >
              <option>Please Select an Option</option>
              <option>General inquiry</option>
              <option>Looking for guidance on starting a website for my product service</option>
              <option> Looking to get into Tech and would like to know how and where to start</option>
            </Form.Control>
          </Form.Row>

          <Form.Row style={{ marginTop: "10px" }}>
            <Form.Control
              as="textarea"
              rows={6}
              style={{ backgroundColor: "transparent" }}
              placeholder="Your message here..."
              onChange={this.handleChange("text")}
              value={subject}
            />
          </Form.Row>
        </Form>
        <br />
        <Button onClick={this.submit}>Send</Button>
      </Jumbotron>
    </div>
  );

  render() {
    const { name, from, subject, text } = this.state;
    if (this.state.confirmSent === false) {
      return <div>{this.communityForm(name, from, subject, text)}</div>;
    } else if (this.state.confirmSent === true) {
      return (
        <div>
          <h2>Thank you for your message. We'll be in touch soon</h2>
        </div>
      );
    }
  }
}
export default communityForm;
