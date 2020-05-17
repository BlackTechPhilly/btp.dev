import React, { Component } from "react";
import { Tab, Tabs } from "react-bootstrap";
import MemberForm from "./forms/MemberForm";
import SponsorForm from "./forms/SponsorForm";

class Connect extends Component {
  render() {
    return (
      <Tabs id="uncontrolled-tab-example">
        <Tab eventKey="Members" title="Become a Member">
          <MemberForm />
        </Tab>

        <Tab eventKey="Sponsors" title="Become a Sponsor">
          <SponsorForm />
        </Tab>
      </Tabs>
    );
  }
}
export default Connect;
