import React from 'react'
import {useSelector} from 'react-redux'
import { useUser } from "./UserContext";
import { getEstimates } from './selectors';
import moment from 'moment';
import { Button } from "react-bootstrap";
import {useNavigate} from 'react-router-dom'

const History = () => {
    const { user } = useUser();
    const list = useSelector(getEstimates) || []
    const userId = user?.userId
    const filteredItems = userId ? list.filter((data) => data.userId === userId) : [];
    const navigate = useNavigate();

    const handleSubmit = () => {
      navigate(-1);
    }

  return (
    <div className="history" >
        <h1>Guesstimate History</h1>
        <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
        <table 
       
       style={{width:"50vw"}}
       className="table table-dark table-striped">
                <thead style={{ fontWeight: 'bold' }}>
                  <tr>
                    <td>Crop</td>
                    <td>Estimate</td>
                    <td>Date</td>
                  </tr>
                </thead>
                <tbody>
                  {filteredItems
                          .slice()
                          .sort((a, b) => moment(b.date, "YYYY-MM-DD HH:mm:ss").valueOf() - moment(a.date, "YYYY-MM-DD HH:mm:ss").valueOf())
                          .map(item => (
                    <tr key={item.id}>
                      <td>{item.grain}</td>
                      <td>{item.yiel}</td>

                      <td>{moment(item.date, "YYYY-MM-DD HH:mm:ss").format("MMMM DD, YYYY")}</td>

                    </tr>
                  ))}
                </tbody>
                
              </table>
        </div>
        <Button className="back" onClick={handleSubmit}>Back</Button>
      
    </div>
  )
}

export default History
