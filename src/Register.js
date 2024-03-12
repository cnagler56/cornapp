import { Form, Button, Modal } from "react-bootstrap";
import { useState, useRef,  useEffect } from "react";
import {useDispatch} from 'react-redux';
import "./index.css";
import {postUsers, USERS, fetchUsers, getList, addUser} from "./module/reducer"



const Register = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");  
  const [password, setPassword] = useState("");
  const [city, setCity] = useState('')
  const [state, setState] = useState("");
  const [interest, setInterest] = useState("")
 const dispatch= useDispatch()
  const [show, setShow] = useState(false)

  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);
  const userRef = useRef(null);

  // useEffect (() => {
  //   userRef.current.focus()
  // },[firstname])n

  
  function onSubmit() {
closeModal()
console.log(firstname, lastname, email, password,city, state,interest)
dispatch(addUser(firstname, lastname, email, password,city, state,interest));
  // dispatch(postUsers(firstname, lastname, email, password,city, state,interest))
  // dispatch({type:USERS, data: id})
  }

  return (
    <>
      <Button
        variant="success"
        className="btn btn-dark"
        onClick={openModal}
        style={{ float: "right" }}
        data-bs-target="#staticBackdrop"
      >
        Sign Up
      </Button>
   
      <Modal show={show} onHide={closeModal} className="modal fade">
        <Modal.Header style={{fontWeight:"bold", textAlign:"center"}}>Please sign up here</Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="forms">
              <Form.Label>First Name</Form.Label>
              <Form.Control
              className="boxsize"
                ref={userRef}
                style={{minWidth:"100%" ,border: "1px solid black"}}
                 type="text"
                
                onChange={(e) => setFirstname(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="forms">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                style={{minWidth:"100%" ,border: "1px solid black"}}
                type="text"
                className="boxsize"
                onChange={(e) => setLastname(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="forms">
              <Form.Label>Email</Form.Label>
              <Form.Control
                style={{minWidth:"100%" ,border: "1px solid black"}}
                type="text"
                className="boxsize"
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group className="forms">
              <Form.Label>Set Password</Form.Label>
              <Form.Control
                style={{minWidth:"100%" ,border: "1px solid black"}}
                type="password"
                className="boxsize"
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="forms">
              <Form.Label>City</Form.Label>
              <Form.Control
                style={{minWidth:"100%" ,border: "1px solid black"}}
                type="text"
                className="boxsize"
                onChange={(e) => setCity(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="forms">
              <Form.Label>State</Form.Label>

              <Form.Select  style={{border: "1px solid black"}} onChange={(e) => setState(e.target.value)}>
                          <option value={"AL"}>AL - Alabama</option>
                         <option value={"AK"}>AK - Alaska</option>                        
                         <option value={"AZ"}>AZ - Arizona</option>
                         <option value={"AR"}>AR - Arkansas</option>
                         <option value={"CA"}>CA - California</option>
                         <option value={"CO"}>CO - Colorado</option>
                         <option value={"CT"}>CT - Connecticut</option>
                         <option value={"DE"}>DE - Delaware</option>
                         <option value={"DC"}>DC - District of Columbia</option>
                         <option value={"FL"}>FL - Florida</option>
                         <option value={"GA"}>GA - Georgia</option>
                         <option value={"HI"}>HI - Hawaii</option>
                         <option value={"ID"}>ID - Idaho</option>
                         <option value={"IL"}>IL - Illinois</option>
                         <option value={"IN"}>IN - Indiana</option>
                         <option value={"IA"}>IA - Iowa</option>
                         <option value={"KS"}>KS - Kansas</option>
                         <option value={"KY"}>Ky - Kentucky</option>
                         <option value={"LA"}>LA - Louisiana</option>
                         <option value={"ME"}>ME - Maine</option>
                         <option value={"MD"}>MD - Maryland</option>
                         <option value={"MA"}>MA - Massachusetts</option>
                         <option value={"MI"}>MI - Michigan</option>
                         <option value={"MN"}>MN - Minnesota</option>
                         <option value={"MS"}>MS - Mississippi</option>
                         <option value={"MO"}>MO - Missouri</option>
                         <option value={"MT"}>MT - Montana</option>
                         <option value={"NE"}>NE - Nebraska</option>
                         <option value={"NV"}>NV - Nevada</option>
                         <option value={"NH"}>NH - New Hampshire</option>
                         <option value={"NJ"}>NJ - New Jersey</option>
                         <option value={"NM"}>NM - New Mexico</option>
                         <option value={"NY"}>NY - New York</option>
                         <option value={"NC"}>NC - North Carolina</option>
                         <option value={"ND"}>ND - North Dakota</option>
                         <option value={"OH"}>OH - Ohio</option>
                         <option value={"OK"}>OK - Oklahoma</option>
                         <option value={"OR"}>OR - Oregon</option>
                         <option value={"PA"}>PA - Pennsylvania</option>
                         <option value={"RI"}>RI - Rhode Island</option>
                         <option value={"SC"}>SC - South Carolina</option>
                         <option value={"SD"}>SD - South Dakota</option>
                         <option value={"TN"}>TN - Tennessee</option>
                         <option value={"TX"}>TX - Texas</option>
                         <option value={"UT"}>UT - Utah</option>
                         <option value={"VT"}>VT - Vermont</option>
                         <option value={"VA"}>VA - Virginia</option>
                         <option value={"WA"}>WA - Washington</option>
                         <option value={"WV"}>WV - West Virgina</option>
                         <option value={"WI"}>WI - Wisconsin</option>
                         <option value={"WY"}>WY - Wyoming</option>
                         </Form.Select>
            </Form.Group>
            <Form.Group className="forms">
              <Form.Label>Interest</Form.Label>
              <Form.Select style={{border: "1px solid black"}} onChange={(e) => setInterest(e.target.value)}>
                         <option value={"Farmer"}>Farmer</option>
                         <option value={"Analyst"}>Analyst</option>
                         <option value={"Trader"}>Trader/Investor</option>
                         <option value={"Other"}>Other</option>
                         </Form.Select>

            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onSubmit} className="btn btn-success">
            Submit
          </Button>
          <Button
            variant="success"
            className="btn btn-danger"
            onClick={closeModal}
          >
            Exit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Register;