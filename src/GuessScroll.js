import React from 'react';
import { EstimateWrapper } from './styledComponents';
import { getEstimates } from './selectors';
import { useSelector } from 'react-redux';
import { Form } from 'react-bootstrap';

const GuessScroll = () => {
  // Always call `useSelector` unconditionally
  const databack = useSelector(getEstimates);

  // Provide fallback data in case `databack` is empty or undefined
  const fallbackData = [
    {
      id: 1,
      grain: 'Corn',
      yiel: '150',
      name: 'John Doe',
      state: 'Iowa',
      interest: 'Student',
      date: '2025-01-01',
    },
    {
      id: 2,
      grain: 'Soybeans',
      yiel: '50',
      name: 'Jane Smith',
      state: 'Illinois',
      interest: 'Farmer',
      date: '2025-01-15',
    },
  ];

  // Use fallback data if `databack` is empty or undefined
  const data = (databack && databack.length > 0 ? databack : fallbackData).slice().sort((a, b) => b.id - a.id);

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
              {data.map((item) => (
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
  );
};

export default GuessScroll;
