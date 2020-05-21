import React from "react";
import { Jumbotron, Container } from "react-bootstrap";

const CodeOfConduct = () => (
  <div>
    <Jumbotron fluid>
      <Container>
        <h1 style={{ textAlign: "center" }}>Code of Conduct</h1>
        <h3
          style={{
            fontFamily: "Eina01-Regular",
            fontSize: "20px",
            padding: "4px",
            textAlign: "center",
          }}
        >
          <b>
            <i>
              “Stay true to your brand- We don’t want you to code switch-we want
              you to code.”
            </i>
          </b>
        </h3>
        <br />
        <p
          style={{
            fontFamily: "Eina01-Regular",
            fontSize: "20px",
            padding: "4px",
            textAlign: "center",
          }}
        >
          <b>
            We encourage our members to be their beautifully unique selves but
            also ask them to recognize and respect the program and its members.
          </b>
          The following codes of conduct are integral to fulfilling our mission
          of creating a welcoming and inclusive network for tech professionals
          of color. There will be a zero-tolerance for those who do not abide by
          our codes, and anyone found violating any of the rules lists will be
          reprimanded, which will be expressed in a verbal conversation and
          warning, and if deemed necessary, potentially escalate to expulsion
          from Black Tech Philly.
        </p>
        <p
          style={{
            fontFamily: "Eina01-Regular",
            fontSize: "20px",
            padding: "4px",
            textAlign: "center",
          }}
        >
          <b>Be respectful</b> - Facilitating a safe environment for Black tech
          professionals to meet, learn, network, and work together on projects
          is a core value of Black Tech Philly. We ask that our members do not
          partake in any behavior that can be received as sexist, ageist,
          racist, homophobic, transphobic, xenophobia, or bigoted in any way
          shape, or form. Discrimination based on any of these things as well as
          offenses based on a members political or religious belief we will not
          be tolerated. Any member caught violating this rule will be addressed
          privately as a corrective measure, and if deemed necessary will be
          removed from the group.
        </p>
        <p
          style={{
            fontFamily: "Eina01-Regular",
            fontSize: "20px",
            padding: "4px",
            textAlign: "center",
          }}
        >
          <b>Conduct yourself with integrity and be considerate</b> - Working
          collaboratively can be a very rewarding experience, but there are
          instances where some engagements don’t work. The reasons can vary but
          Black Tech Philly takes a strong stance on protecting our members.
          Bullying and threats of violence, gossip, unwelcome sexual advances,
          and harassment in any shape or form will not be tolerated. If a member
          feels threatened we ask that they report the incident to
          <a href="blacktechphilly@gmail.com"> blacktechphilly@gmail.com</a> for
          further invesitagation and resolution.
          <br />
        </p>
      </Container>
    </Jumbotron>
  </div>
);

export default CodeOfConduct;
