import React from 'react'
import {useSelector} from 'react-redux'

const History = () => {
    
    const list = useSelector(state => state.cornguess)
    const user = useSelector(state => state.loggedin)
    const userId = user.userId
    const filteredItems = list.filter(data => data.userId === userId);

  return (
    <div className="history">
        <h1>Guesstimate History</h1>
       <table 
       style={{width:"50vw"}}
       className="table table-striped table-hover table-responsive">
                <thead style={{ fontWeight: 'bold' }}>
                  <tr>
                    <td>Crop</td>
                    <td>Estimate</td>
                    <td>Date</td>
                  </tr>
                </thead>
                <tbody>
                {filteredItems.map(item => (
                  <tr key={item.id}>
                    <td>{item.grain}</td>
                    <td>{item.yiel}</td>

                    {/* <td>{new Date(item.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</td> */}
                    {/* <td>{format(new Date(item.date), 'MM/dd/yyyy')}</td> */}
                    <td>{item.date}</td>
                  </tr>
                  ))}
                </tbody>
              </table>
      
    </div>
  )
}

export default History
