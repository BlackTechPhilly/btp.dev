import React, { Component } from "react";
import { Tab, Tabs } from "react-bootstrap";
import MemberForm from "./forms/MemberForm";
import SponsorForm from "./forms/SponsorForm";
import style from "../styles/formStyle.module.css";

class Connect extends Component {
  render() {
    return (
      <Tabs id="uncontrolled-tab-example">
        <Tab
          eventKey="onSelect"
          title="Become a Member"
          tabClassName={style.member}
          onSelect
        >
          <MemberForm />
        </Tab>

        <Tab
          eventKey="Sponsors"
          title="Become a Sponsor"
          tabClassName="sponsor"
        >
          <SponsorForm />
        </Tab>
      </Tabs>
    );
  }
}
export default Connect;
