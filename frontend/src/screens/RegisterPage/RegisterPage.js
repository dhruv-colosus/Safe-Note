import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Form";
import { Link, useHistory } from "react-router-dom";
import ErrorMessage from "../../Components/ErrorMessage";
import Loading from "../../Components/Loading";
import { useDispatch, useSelector } from "react-redux";

import MainScreen from "../../Components/MainScreen";
import "./RegisterPage.css";
import { register } from "../../actions/userAction";

const RegisterPage = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setconfirmPassword] = useState("");
  // eslint-disable-next-line
  const [pic, setPic] = useState(
    "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
  );
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);

  const { loading, error, userInfo } = userRegister;

  const submitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmpassword) {
      setMessage("Passwords do not match");
    } else {
      dispatch(register(name, email, password, pic));
    }

    // setPassword("");
    // setEmail("");
  };
  useEffect(() => {
    if (userInfo) {
      history.push("/mynotes");
    }
  }, [history, userInfo]);

  return (
    <div className="login_flex">
      <MainScreen title={"Register User"}>
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}

        {message ? <ErrorMessage variant="danger">{message}</ErrorMessage> : ""}
        {loading ? <Loading /> : ""}

        <Form className="login_container">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              value={name}
              type="text"
              placeholder="Enter Your Name"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              value={email}
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              value={confirmpassword}
              placeholder="Confirm Password"
              onChange={(e) => setconfirmPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Upload Your Pic</Form.Label>
            <Form.Control type="file" />
          </Form.Group>

          <Button
            className="login_btn"
            variant="primary"
            type="submit"
            onClick={submitHandler}
          >
            Register
          </Button>
        </Form>
        <Row className="py-3">
          <Col>
            Have an Account ?
            <Link className="register_here" to="/login">
              &nbsp;Login Here
            </Link>
          </Col>
        </Row>
      </MainScreen>
    </div>
  );
};

export default RegisterPage;
