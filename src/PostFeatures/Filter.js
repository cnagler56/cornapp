import React from 'react'
import { Form, Button } from "react-bootstrap";
import {useState} from 'react'
// import useDispatch from 'react-redux'

export const Filter = () => {

    const [title, setTitle] = useState("All")
    const [state, setState] = useState("All")
    // const dispatch = useDispatch

const titleChoice = () => {
   console.log(title, state)
//    dispatch()
}

  return (
    <div className="filter">
    <Form>
      <span>
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Select style={{width:'100px'}} onChange={(e) => setTitle(e.target.value)}>
                     <option value={"All"}>All</option>
                    <option value={"Planting"}>Planting</option>                       
                     <option value={"Weather"}>Weather</option>
                     <option value={"Harvest"}>Harvest</option>
                     <option value={"Marketing"}>Marketing</option>
                     <option value={"Other"}>Other</option>
        </Form.Select>
      </Form.Group>
      <Form.Group>
        <Form.Label>State</Form.Label>
        <Form.Select style={{width:'100px'}} onChange={(e) => setState(e.target.value)}>
                     <option value={"All"}>All</option>
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
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control  style={{width:'200px'}} type="text"></Form.Control>
      </Form.Group>
      </span>
    </Form>
    <Button style={{marginTop:'10px'}} onClick={titleChoice}>Submit</Button>
    </div>
  )
}

export default Filter;
