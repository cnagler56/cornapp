import React from 'react'
import {Button} from 'react-bootstrap'
import {GuessView} from './styledComponents'
import {submitCornGuess} from './Slices/CornSlice'
import {useDispatch} from 'react-redux'
import { fetchCornEstimate } from './Slices/CornGuessSlice'
import {useNavigate} from 'react-router-dom'

const GuessBox = (props) => {
    const dispatch = useDispatch()
    const yiel = props.yield
     const name = props.logged.name
    const state = props.logged.state
    const interest = props.logged.interest
    const userId = props.logged.userId
    const grain = props.grain
    const navigate = useNavigate()

    let content = props.yield ?
    (  <p>Guesstimate: {props.yield} </p>) :
    ( <p>Use the chart to calculate your estimate of the National Corn Yield</p>)

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
        // dispatch(fetchCornEstimate()) 
        navigate('/History')
       
    }
    

  return (<>
  <GuessView>
    <div>
      <p>""</p>
      {content}
    </div>
    <div>
{/* <Button disabled={!props.yield || !name} onClick={onSubmit}>Submit My Estimate</Button> */}
<Button disabled={!props.yield || !name} onClick={onSubmit}>{(!props.yield) ? "Calculate your Estimate" :
(!name) ? "Please Log In" : "Submit My Estimate"}</Button>
</div>
</GuessView>
    </>
  )
}

export default GuessBox
