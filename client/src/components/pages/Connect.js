import React, { Component } from "react";
import { Tab, Tabs, Jumbotron, Container } from "react-bootstrap";
import MemberForm from "./forms/MemberForm";
import SponsorForm from "./forms/SponsorForm";
import style from "../styles/formStyle.module.css";

class Connect extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <Jumbotron fluid style={{ margin: "10px" }}>
          <Container>
            <h1 style={{ textAlign: "center" }}>Connect with Us</h1>
            <p
              style={{
                fontFamily: "Eina01-Regular",
                fontSize: "20px",
                padding: "4px",
                textAlign: "center",
              }}
            >
              {" "}
              Interested in becoming a member or sponsor? Or just have a
              general question? Please complete the form below and we'll reach
              back out to you very soon.
            </p>
          </Container>
        </Jumbotron>

        <Tabs className={style.tabHeader} onSelect={this.handleSelect}>
          <Tab
            style={{}}
            eventKey={1}
            title="Become a Member"
            tabClassName={style.member}
            activeKey="1"
          >
            <MemberForm />
          </Tab>
          <Tab
            eventKey={2}
            title="Become a Sponsor"
            tabClassName={style.sponsor}
            activeKey="2"
          >
            <SponsorForm />
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default Connect;
