import React from 'react'
import {EstimateWrapper} from './styledComponents'
import {getEstimates} from './selectors'
import {useSelector} from 'react-redux'
import {Form,Button} from 'react-bootstrap'
import GuessBox from './GuessBox'


const GuessScroll = () => {
const databack = useSelector(getEstimates)

var data = databack.slice().sort(function(a, b) {
    return b.date - a.date;
});    


  return (
    <EstimateWrapper>
       <div style={{ overflow: 'scroll', maxHeight: '15em' }}>
         
             <Form>
              <table className="table table-striped table-hover table-responsive">
                <thead style={{ fontWeight: 'bold' }}>
                  <tr>
                    <td>Crop</td>
                    <td>Estimate</td>
                    <td>Name</td>
                    <td>State</td>
                    <td>Interest</td>
                    <td>Date</td>
                  </tr>
                </thead>
                <tbody>
                {data.map(item => (
                  <tr key={item.id}>
                    <td>{item.grain}</td>
                    <td>{item.yiel}</td>
                    <td>{item.name}</td>
                    <td>{item.state}</td>
                    <td>{item.interest}</td>
                    <td>{item.date}</td>

                  </tr>
                  ))}
                </tbody>
              </table>
             </Form>
           
          
        </div>
    
    </EstimateWrapper>
     
  )
}

export default GuessScroll
