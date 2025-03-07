import React from 'react'
import {Button} from 'react-bootstrap'
import {GuessView} from './styledComponents'
import {submitCornGuess} from './Slices/CornSlice'
import {useDispatch} from 'react-redux'
import { fetchCornEstimate } from './Slices/CornGuessSlice'
import {useNavigate} from 'react-router-dom'
import { useUser } from "./UserContext";
import { Link } from "react-router-dom";

const GuessBox = (props) => {
  const navigate = useNavigate()
  const { user, loggedIn, login } = useUser(); 

    const dispatch = useDispatch()
    const yiel = props.yield
    let name, state, interest, userId, grain = props.grain;

    if (user) {
      name = user?.firstName + " " + user?.lastName;
      state = user?.state
      interest = user.interest
      userId = user.userId
      grain = props.grain

} 

    let content = props.yield ?
    (  <p>Guesstimate: {props.yield} </p>) :
    ( <p></p>)

    const onSubmit = () => {
      const currentDate = new Date()
      const year = currentDate.getFullYear();
      const month = String(currentDate.getMonth() + 1).padStart(2, '0'); 
      const day = String(currentDate.getDate()).padStart(2, '0');    
      const hours = String(currentDate.getHours()).padStart(2, '0');
      const minutes = String(currentDate.getMinutes()).padStart(2, '0');
      const seconds = String(currentDate.getSeconds()).padStart(2, '0');

      const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
       
      dispatch(submitCornGuess({grain,yiel, name, state, interest, userId, date: formattedDate})) 
        dispatch(fetchCornEstimate()) 
        navigate(0)
       
    }
    

  return (<>
  <GuessView>
    <div>
      <p></p>
      {content}
    </div>
    <div>

<div>
{(!loggedIn) ?
 (
  <Link to="/Signin">
    <Button>Please Log In</Button>
  </Link>
) :
  (<Button onClick={onSubmit}>Submit My Estimate

  </Button>)}
  <Link to='/History'>
  <Button style = {{marginLeft:'25px'}}>My History</Button>
  </Link>
  </div>    
</div>
</GuessView>
    </>
  )
}

export default GuessBox
