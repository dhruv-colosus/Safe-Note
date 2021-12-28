import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Form";
import { Link, useHistory } from "react-router-dom";
import ErrorMessage from "../../Components/ErrorMessage";
import Loading from "../../Components/Loading";
import MainScreen from "../../Components/MainScreen";

import { login } from "../../actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import "./LoginPage.css";
const LoginPage = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const submitHandler = async (e) => {
    e.preventDefault();

    dispatch(login(email, password));

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
      <MainScreen title={"Login"}>
        {error ? <ErrorMessage variant="danger">{error}</ErrorMessage> : ""}
        {loading ? <Loading /> : ""}
        <Form className="login_container">
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
          <Form.Group
            className="mb-3"
            controlId="formBasicCheckbox"
          ></Form.Group>
          <Button
            className="login_btn"
            variant="primary"
            type="submit"
            onClick={submitHandler}
          >
            Login
          </Button>
        </Form>
        <Row className="py-3">
          <Col>
            New Customer?{" "}
            <Link className="register_here" to="/register">
              Register Here
            </Link>
          </Col>
        </Row>
      </MainScreen>
    </div>
  );
};

export default LoginPage;
