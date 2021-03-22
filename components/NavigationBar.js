import { useState } from "react";
import Link from "next/link";
import {
  Nav,
  Navbar,
  Form,
  FormControl,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import style from "../styles/bootstrapUi.module.css";
import Image from "next/image";
import { FaSearch, FaRegMoon } from "react-icons/fa";

const NavigationBar = () => {
  return (
    <div>
      <Navbar expand="lg" className={style.nav}>
        <Image
          width={70}
          height={70}
          className=""
          src="/White_transparent_BTP_Logo.png"
          alt="BTP logo"
          style={{ margin: "5px" }}
        />
        <Navbar.Brand bsPrefix={style.brandLink}>
          <Link href="/">Black Tech Philly</Link>
          <br />
          <div
            style={{
              fontSize: "10px",
              color: "white",
              fontStyle: "italic",
              fontFamily: "Eina01-Regular",
            }}
          >
            No Code switching-Just code
          </div>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav className={style.navLinks}>
              <Link href="/blog">Blog</Link>
            </Nav>
            <Nav className={style.navLinks}>
              <Link href="/about">About</Link>
            </Nav>
            <Nav className={style.navLinks}>
              <Link href="/contact">Contact</Link>
            </Nav>
            {/* <Nav className={style.navLinks}>
              <Link href="/subscribe">Subscribe</Link>
            </Nav> */}
            {/* <Nav className={style.navLinks}>
              <Link href="/conductpolicy">Subscribe</Link>
            </Nav> */}
          </Nav>
        </Navbar.Collapse>
        {/* <Form inline>
          <Col>
            <FormControl type="text" placeholder="Search BTP blog" />
          </Col>

          <Button className={style.srchBtn}>
            <FaSearch />
          </Button>
        </Form> */}
      </Navbar>
    </div>
  );
};

export default NavigationBar;
