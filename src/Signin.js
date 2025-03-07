import { Form, Button } from "react-bootstrap";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import "./index.css";
import Register from "./Register.js";

const LOGIN_URL = "/login";
const USER_INFO_URL = "/user";

const Signin = ({ handleLogin }) => {
  const userRef = useRef(null);
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current?.focus();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    setErrMsg("");

    try {
      const response = await axios.post(
        LOGIN_URL,
        { email, password },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.status == 200) {
        const userResponse = await axios.get(USER_INFO_URL, { withCredentials: true });
        handleLogin(userResponse)
        return
        // if (userResponse.status === 200) {

        //   if(Array.isArray(userResponse)) {
        //     userResponse = userResponse[0]
        //   }

        //   localStorage.setItem("user", JSON.stringify(userResponse.data));
        //   handleLogin(userResponse.data);  
        // }
      }
    } catch (error) {
      setErrMsg("Invalid email or password.");
    }
  };

  return (
    <>
      <div className="contain">
        <Form onSubmit={onSubmit}>
          <Form.Group style={{ marginBottom: "40px" }}>
            <Form.Label style={{ fontWeight: "bold", marginTop: "40px" }}>
              Email
            </Form.Label>
            <Form.Control
              style={{ minWidth: "100%" }}
              ref={userRef}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="boxsize"
              type="text"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label style={{ fontWeight: "bold" }}>Password</Form.Label>
            <Form.Control
              className="boxsize"
              style={{ minWidth: "100%" }}
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>
          {errMsg && <p style={{ color: "red" }}>{errMsg}</p>}
          <div className="buttons" style={{ padding: "5px", marginTop: "25px" }}>
            <Button type="submit" className="btn btn-success">
              Submit
            </Button>
            <Register />
          </div>
        </Form>
      </div>
    </>
  );
};

export default Signin;
