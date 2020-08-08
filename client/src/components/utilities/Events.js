import React, { Component } from "react";
import request from "superagent";
import { Link } from "react-router-dom";
import moment from "moment";

class Events extends Component {
  constructor() {
    super();
    this.state = {
      events: [],
    };
  }

  componentDidMount = () => {
    const CALENDAR_ID = "fjd3b20u598vf32o1bt0t9g04s@group.calendar.google.com";
    const API_KEY = "AIzaSyBkyOEi4HGYZvrf-oa4460FpQFflcx4PO8";
    let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`;

    request.get(url).end((err, res) => {
      if (err) {
        console.log("err");
      } else {
        JSON.parse(res.text).items.map((event) => {
          //   console.log(event.summary);
          //   console.log(event.description);
          //   console.log(event.start);
          //   console.log(event.end);
          //   console.log(event.hangoutLink);

          this.setState({
            events: [event],
          });
          console.log(this.state.events);
        });
      }
    });
  };

  render() {
    return (
      <div>
        {this.state.events.map((event, index) => (
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
        ))}

        {/* {this.state.events.map((event, i) => {
          return <div key={i}>{event}</div>;

        })} */}
      </div>
    );
  }
}

export default Events;
