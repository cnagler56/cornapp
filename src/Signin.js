import { Form, Button } from "react-bootstrap";
import { useState, useRef, useEffect } from "react";
import {useDispatch} from 'react-redux'
import "./index.css";
import Register from "./Register.js";
import {auth} from './UserFeatures/usersSlice'




const LOGIN_URL = '/login' 

const Signin = () => {
const dispatch = useDispatch()
const userRef = useRef(null);
const errRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState('');
  
  useEffect (() => {
    userRef.current.focus()
  },[email])
 



  // useEffect(() => {
  //   setErrMsg('');
  // },[email,password])

  function onSubmit(e) {
    e.preventDefault()
    console.log(password)
    dispatch(auth(email,password))
  }



  return (
    <>
    <div  className="contain">
<Form>
<Form.Group style={{marginBottom: "40px"}}>
  <Form.Label style={{ fontWeight: "bold" }}>Email</Form.Label>
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
<div className = "buttons" style={{ padding: "5px", marginTop: "16px" }}>
  <Button type="submit" onClick={onSubmit} className="btn btn-success">
    Submit
  </Button>
  <Register></Register>
</div>
</Form>
</div>
</>
);
};

export default Signin;