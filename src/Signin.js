import { Form, Button } from "react-bootstrap";
import { useState, useRef, useEffect } from "react";
import {useDispatch} from 'react-redux'
import "./index.css";
import Register from "./Register.js";
import {auth, getInto} from './Slices/loginslice'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'


const LOGIN_URL = '/login' 

const Signin = () => {
const dispatch = useDispatch()
const userRef = useRef(null);
const navigate = useNavigate()
const errRef = useRef();


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [errMsg, setErrMsg] = useState('');
   const URL = 'http://localhost:8081'
  
  useEffect (() => {
    userRef.current.focus()
  },[email])
 

  const onSubmit =  (e,{ onLogin } ) => {
    e.preventDefault();
    try {
      dispatch(auth({email,password}))
      // onLogin();
      navigate('/')
    } catch (err) {
      console.log(err)
    }

  }
  // const getIn = async (e) => {
  //      e.preventDefault();
  //     console.log(username)
  //      dispatch(getInto({username,password}))
  //     navigate('/')
    

  //    };


  return (
    <>
    <div  className="contain">
<Form>
{/* <Form.Group style={{marginBottom: "40px"}}>
  <Form.Label style={{ fontWeight: "bold", marginTop:"40px" }}>Username</Form.Label>
  <Form.Control
   style={{minWidth:"100%"}}  
  ref={userRef}
    onChange={(e) => setUsername(e.target.value)}
    className="boxsize"
  ></Form.Control>
</Form.Group> */}
<Form.Group style={{marginBottom: "40px"}}>
  <Form.Label style={{ fontWeight: "bold", marginTop:"40px" }}>Email</Form.Label>
  <Form.Control
   style={{minWidth:"100%"}}  
  ref={userRef}
    onChange={(e) => setEmail(e.target.value)}
    className="boxsize"
  ></Form.Control>
</Form.Group>
<Form.Group>
  <Form.Label style={{ fontWeight: "bold"}}>Password</Form.Label>
  <Form.Control
    className="boxsize"
    style={{minWidth:"100%"}}
    type="password"
    onChange={(e) => setPassword(e.target.value)}
  ></Form.Control>
</Form.Group>
<div className = "buttons" style={{ padding: "5px", marginTop: "25px" }}>
  <Button 
  disabled={!email || !password}
  style = {{marginBottom: "25px" }}type="submit" onClick={onSubmit} className="btn btn-success">
    Submit
  </Button>
  {/* <Button
   
   type="submit"
  onClick={getIn}
  className="btn btn-danger"
  >Get In</Button> */}
  <Register></Register>
  {errMsg && <div>{errMsg}</div>}
</div>
</Form>
</div>
</>
);
};

export default Signin;