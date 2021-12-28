import React from "react";
import "./Header.css";
import note from "../../images/notes.png";
import { Link, useHistory } from "react-router-dom";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/userAction";

function Header({ setSearch }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  const logOutHandle = () => {
    dispatch(logout());
    history.push("/");
  };
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
            {userInfo ? (
              <Form className="d-flex">
                <FormControl
                  style={{ width: "20vw" }}
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  onChange={searchHandler}
                />
              </Form>
            ) : (
              ""
            )}
          </Nav>
          <Nav
            className="mr-5 my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {userInfo ? (
              <>
                {" "}
                <Nav.Link href="/mynotes" className="active">
                  My Notes
                </Nav.Link>
                <NavDropdown
                  className="active"
                  title={userInfo ? `${userInfo.name}` : "Login"}
                  id="navbarScrollingDropdown"
                >
                  <NavDropdown.Item href="/profile">Profile </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    onClick={() => {
                      logOutHandle();
                    }}
                  >
                    LogOut
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            ) : (
              <Nav.Link href="/login" className="active">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
