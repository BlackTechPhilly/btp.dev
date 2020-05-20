import React, { Component } from "react";
import { Tab, Tabs } from "react-bootstrap";
import MemberForm from "./forms/MemberForm";
import SponsorForm from "./forms/SponsorForm";
import style from "../styles/formStyle.module.css";

class Connect extends Component {
  constructor() {
    super();
    this.state = {};
  }
  // doSomthing = (eventKey) => {
  //   // alert(`selected ${eventKey}`);
  //   // this.setState = { active: true };
  //   this.setState({
  //     activeTab: selectedTab,
  //   });
  // };

  render() {
    return (
      <Tabs
        className={style.tabHeader}
        onSelect={this.handleSelect}
        // activeKey={this.state.activeTab}
        // onSelect={this.doSomthing}
      >
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
    );
  }
}

export default Connect;
