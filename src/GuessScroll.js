import React from 'react';
import { EstimateWrapper } from './styledComponents';
import { getEstimates } from './selectors';
import { useSelector } from 'react-redux';
import { Form } from 'react-bootstrap';
import moment from 'moment';

const GuessScroll = () => {
  const databack = useSelector(getEstimates);

  const data = (databack && databack.length > 0 ? databack : []);
  return (
    <EstimateWrapper>
      <div>
        <h2 className="dark">Yield Estimates</h2>
      </div>
      <div style={{ overflow: 'scroll', maxHeight: '14em' }}>
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
              {data
                      .slice() 
                      .sort((a, b) => moment(b.date, "YYYY-MM-DD HH:mm:ss").valueOf() - moment(a.date, "YYYY-MM-DD HH:mm:ss").valueOf())
                      .map((item) => (
                <tr key={item.id}>
                  <td>{item.grain}</td>
                  <td>{item.yiel}</td>
                  <td>{item.name}</td>
                  <td>{item.state}</td>
                  <td>{item.interest}</td>
                  <td>{moment(item.date, "YYYY-MM-DD HH:mm:ss").format("MMMM DD, YYYY")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Form>
      </div>
    </EstimateWrapper>
  );
};

export default GuessScroll;
