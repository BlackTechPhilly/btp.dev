import React, { Component } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { MemberForm } from "./forms/MemberForm";

class Connect extends Component {
  render() {
    return (
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        <Tab eventKey="home" title="Sponsors">
          <MemberForm />
        </Tab>

        <Tab eventKey="profile" title="Members">
          <SponsorForm />
        </Tab>
      </Tabs>
    );
  }
}
export default Connect;
