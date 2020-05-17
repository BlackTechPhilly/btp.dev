import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import Logo from "../assets/images/White_transparent_BTP_Logo.png";

class NavBar extends React.Component {
  render() {
    return (
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        style={{
          backgroundColor: "#008be0",
          height: "auto",
        }}
      >
        <Navbar.Brand style={{ fontSize: "25px" }}>
          <img
            src={Logo}
            style={{
              height: "100px",
              width: "100px",
              marginRight: "1px",
              padding: "1px",
            }}
          />

          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            Black Tech Philly
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle areia-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link>
              <Link
                to="/mission"
                style={{ color: "white", textDecoration: "none" }}
              >
                Mission
              </Link>
            </Nav.Link>

            <Nav.Link>
              <Link
                to="codeofconduct"
                style={{ color: "white", textDecoration: "none" }}
              >
                Code of Conduct
              </Link>
            </Nav.Link>

            <Nav.Link>
              <Link
                to="connect"
                style={{ color: "white", textDecoration: "none" }}
              >
                Connect
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default withRouter(NavBar);
