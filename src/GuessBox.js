import React from 'react'
import {Button} from 'react-bootstrap'
import {GuessView} from './styledComponents'
import {submitCornGuess} from './Slices/CornSlice'
import {useDispatch} from 'react-redux'

const GuessBox = (props) => {
    const dispatch = useDispatch()
    let content = props.yield ?
    (  <div>Guesstimate: {props.yield} </div>) :
    ( <p>Use the chart to calculate your estimate of the National Corn Yield</p>)

    const onSubmit = () => {
        console.log(props.yield)
        console.log(props.logged.state)
        dispatch(submitCornGuess(props.yield, props.logged.name, props.logged.state, props.logged.interest))
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
