import React from "react";
import "./Header.css";
import note from "../../images/notes.png";
import { Link } from "react-router-dom";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
function Header() {
  return (
    <Navbar style={{ backgroundColor: "black" }} variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand className="header_title ml-5 ">
          <Link to="/">
            <img
              src={note}
              style={{ width: "1.6rem", marginRight: "10px" }}
              alt="n"
            />
            Safe Note
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="m-auto">
            <Form className="d-flex">
              <FormControl
                style={{ width: "20vw" }}
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>
          </Nav>
          <Nav
            className="mr-5 my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/mynotes" className="active">
              My Notes
            </Nav.Link>
            <NavDropdown
              className="active"
              title="Dhruv Deora"
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item>Profile </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>LogOut </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
