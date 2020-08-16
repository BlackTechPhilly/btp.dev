import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div
        style={{
          borderTop: "solid",
          borderWidth: "2px",
          borderColor: "lightgray",
          margin: "10px",
          color: "lightgray",
          fontSize: "20px",
          textAlign: "center",
          marginTop: "50px",
        }}
      >
        &copy; Black Tech Philly 2020
      </div>
    );
  }
}
export default Footer;
