import React, { Component } from "react";
import request from "superagent";
import { Link } from "react-router-dom";
import moment from "moment";
import { Card, Row, Col } from "react-bootstrap";

class Events extends Component {
  constructor() {
    super();
    this.state = {
      events: [],
      eventOne: [],
      eventTwo: [],
      eventThree: [],
      eventFour: [],
    };
  }

  componentDidMount = () => {
    const calendarId = process.env.REACT_APP_CALENDAR_ID;

    const googleKey = process.env.REACT_APP_GOOGLE_KEY;

    let url = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${googleKey}`;
    request.get(url).end((err, res) => {
      if (err) {
        console.log("err");
      } else {
        // Returns most recent event- but only one event
        // JSON.parse(res.text).items.map((event) => {
        //   // console.log(event.summary);
        //   // console.log(event.description);
        //   // console.log(event.start);
        //   // console.log(event.end);
        //   // console.log(event.hangoutLink);

        //   this.setState({
        //     events: [event],
        //     eventOne: [event[0]],
        //     eventOne: [event[1]],
        //     eventThree: [event[2]],
        //   });
        //   console.log(this.state.events);
        //   let one = this.state.events[0];
        //   console.log(one);
        // });

        console.log(res);
        this.setState({
          eventOne: res.body.items[0],
          eventTwo: res.body.items[1],
          eventThree: res.body.items[2],
          eventFour: res.body.items[3],
        });
      }
    });
  };

  render() {
    return (
      <div
        style={{
          textAlign: "center",
          height: "auto",
          width: "auto",
          fontSize: "12px",
        }}
      >
        {/* maps data but only returns one*/}
        {/* {this.state.events.map((event, index) => (
          <div key={index}>
            <h2>{event.summary}</h2>
            {moment(event.start.dateTime).format("MMMM Do YYYY, h:mm:ss a")}-
            {moment(event.end.dateTime).format("h:mm:ss a")}
            <p>{event.description}</p>{" "}
            <button>
              <a
                href={event.hangoutLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Hangout Link
              </a>
            </button>
          </div>
        ))} */}
        <Col
          sm="auto"
          md={6}
          lg={6}
          style={{
            height: "auto",
            display: "inline-block",
          }}
        >
          <Card
            style={{
              width: "auto",
              height: "auto",
            }}
          >
            <Card.Body style={{}}>
              <Card.Title> {this.state.eventFour.summary}</Card.Title>
              {/* <Card.Subtitle className="mb-2 text-muted">
              {moment().format("MMMM Do YYYY, h:mm:ss a")}-
              {moment().format("h:mm:ss a")}
            </Card.Subtitle> */}
              <Card.Text>{this.state.eventFour.description}</Card.Text>
              <Card.Link
                href={this.state.eventFour.hangoutLink}
                target="_blank"
                rel="noreferrer"
              >
                Google Hangouts Link
              </Card.Link>
            </Card.Body>
          </Card>

          <Card
            style={{
              width: "auto",
              height: "auto",
            }}
          >
            <Card.Body style={{}}>
              <Card.Title> {this.state.eventThree.summary}</Card.Title>
              <Card.Text>{this.state.eventThree.description}</Card.Text>
              <Card.Link
                href={this.state.eventThree.hangoutLink}
                target="_blank"
                rel="noreferrer"
              >
                Google Hangouts Link
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>

        <Col
          sm="auto"
          md={6}
          lg={6}
          style={{
            height: "auto",
            display: "inline-block",
          }}
        >
          <Card
            style={{
              width: "auto",
              height: "auto",
            }}
          >
            <Card.Body style={{}}>
              <Card.Title> {this.state.eventTwo.summary}</Card.Title>
              <Card.Text>{this.state.eventTwo.description}</Card.Text>
              <Card.Link
                href={this.state.eventTwo.hangoutLink}
                target="_blank"
                rel="noreferrer"
              >
                Google Hangouts Link
              </Card.Link>
            </Card.Body>
          </Card>

          <Card style={{ width: "auto", height: "auto" }}>
            <Card.Body style={{}}>
              <Card.Title> {this.state.eventOne.summary}</Card.Title>
              <Card.Text>{this.state.eventOne.description}</Card.Text>
              <Card.Link
                href={this.state.eventOne.hangoutLink}
                target="_blank"
                rel="noreferrer"
              >
                Google Hangouts Link
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </div>
    );
  }
}

export default Events;
