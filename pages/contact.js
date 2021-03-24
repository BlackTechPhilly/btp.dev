import MemberForm from "../components/forms/memberForm";
import SponsorForm from "../components/forms/sponsorForm";
import CommunityForm from "../components/forms/communityForm";
import {
  Tab,
  Tabs,
  Container,
  Jumbotron,
  Nav,
  Row,
  Col,
} from "react-bootstrap";
import style from "../styles/bootstrapUi.module.css";
import Fade from "react-reveal/Fade";

export default function Contact() {
  return (
    <div>
      <Container>
        <Fade top>
          <Jumbotron
            fluid
            style={{
              textAlign: "center",
              height: "700px",
              backgroundColor: "transparent",
            }}
          >
            <h1>Contact Us</h1>
            <Tabs fill style={{ backgroundColor: "transparent" }}>
              <Tab eventKey={1} title="Become a Member" activekey="1">
                <MemberForm />
              </Tab>
              <Tab eventKey={2} title="Become a Sponsor" activekey="2">
                <SponsorForm />
              </Tab>
              <Tab
                eventKey={3}
                title="Community Outreach"
                activekey="3"
                style={{ backgroundColor: "transparent" }}
              >
                <CommunityForm />
              </Tab>
            </Tabs>
          </Jumbotron>
        </Fade>
      </Container>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
