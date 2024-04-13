import React from 'react'
import {Button} from 'react-bootstrap'
import {GuessView} from './styledComponents'
import {submitCornGuess} from './Slices/CornSlice'
import {useDispatch} from 'react-redux'
import { fetchCornEstimate } from './Slices/CornGuessSlice'
import GuessScroll from './GuessScroll'

const GuessBox = (props) => {
    const dispatch = useDispatch()
    console.log(props.logged)
    const yiel = props.yield
     const name = props.logged.name
    const state = props.logged.state
    const interest = props.logged.interest
    const userId = props.logged.userId
    const grain = props.grain

    let content = props.yield ?
    (  <p>Guesstimate: {props.yield} </p>) :
    ( <p>Use the chart to calculate your estimate of the National Corn Yield</p>)

    const onSubmit = () => {
      const currentDate = new Date()
      const year = currentDate.getFullYear();
      const month = String(currentDate.getMonth() + 1).padStart(2, '0'); 
      const day = String(currentDate.getDate()).padStart(2, '0');
      const formattedDate = `${year}-${month}-${day}`;
        dispatch(submitCornGuess({grain,yiel, name, state, interest, userId, date: formattedDate}))   
    }
    

  return (<>
  <GuessView>
    <div>
      {content}
    </div>
    <div>
<Button disabled={!props.yield} onClick={onSubmit}>Submit My Estimate</Button>
</div>
</GuessView>
    </>
  )
}

export default GuessBox
