import React from 'react'
import {Button} from 'react-bootstrap'
import {GuessView} from './styledComponents'
import {submitCornGuess} from './Slices/CornSlice'
import {useDispatch} from 'react-redux'

const GuessBox = (props) => {
    const dispatch = useDispatch()

    const yiel = props.yield
    const name = props.logged.name
    const state = props.logged.state
    const interest = props.logged.interest
    const userId = props.logged.userId
    const grain = "Corn"

    let content = props.yield ?
    (  <p>Guesstimate: {props.yield} </p>) :
    ( <p>Use the chart to calculate your estimate of the National Corn Yield</p>)

    const onSubmit = () => {
      const currentDate = new Date()
      const formatDate = currentDate.toLocaleDateString('en-US',{ month:'long', day: 'numeric', year: 'numeric'})
      const datum = "LetsGOOO"

        dispatch(submitCornGuess({grain,yiel, name, state, interest, userId,datum}))
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
