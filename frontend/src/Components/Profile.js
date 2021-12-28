import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Form";
import { useHistory, Link } from "react-router-dom";
import ErrorMessage from "./ErrorMessage";
import Loading from "./Loading";
import MainScreen from "./MainScreen";
import { updateProfile } from "../actions/userAction";

import { useDispatch, useSelector } from "react-redux";

function Profile() {
  const history = useHistory();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const [name, setName] = useState(userInfo.name);
  const [email, setEmail] = useState(userInfo.email);
  const [password, setPassword] = useState("");
  const [cpassword, setcPassword] = useState("");
  const [ooperr, setooperr] = useState("");

  const userUpdate = useSelector((state) => state.userUpdate);
  const { loading, error, success } = userUpdate;

  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();

    if (password === cpassword) {
      dispatch(updateProfile({ name, email, password }));
      setooperr("");
    } else {
      return setooperr("Passwords Do Not Match");
    }
  };
  useEffect(() => {
    if (!userInfo) {
      history.push("/");
    }
  }, [history]);
  return (
    <div>
      <div className="login_flex">
        <MainScreen title={"Update Profile"}>
          {error ? <ErrorMessage variant="danger">{error}</ErrorMessage> : ""}
          {ooperr ? <ErrorMessage variant="danger">{ooperr}</ErrorMessage> : ""}
          {loading ? <Loading /> : ""}
          {success ? (
            <ErrorMessage variant="success">SuccessFully Updated</ErrorMessage>
          ) : (
            ""
          )}
          <Form className="login_container">
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                value={name}
                type="text"
                placeholder="Update Name"
                onChange={(e) => setName(e.target.value)}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                value={email}
                type="email"
                placeholder="Update email"
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
                placeholder="Update Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label> Confirm Password</Form.Label>
              <Form.Control
                type="password"
                value={cpassword}
                placeholder="Update Password"
                onChange={(e) => setcPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
            ></Form.Group>
            <div
              style={{ display: "flex", justifyContent: "space-between" }}
              className="flex_btnsss"
            >
              <Button
                className="login_btn"
                variant="primary"
                type="submit"
                onClick={submitHandler}
              >
                Update Profile
              </Button>
              {success ? (
                <Link to="/mynotes">
                  <Button
                    style={{ backgroundColor: "Green", textAlign: "center" }}
                    className="login_btn"
                    variant="primary"
                    type="submit"
                  >
                    Go Back
                  </Button>
                </Link>
              ) : (
                ""
              )}
            </div>
          </Form>
        </MainScreen>
      </div>
    </div>
  );
}

export default Profile;
