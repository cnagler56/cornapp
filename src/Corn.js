import React, { useState, useEffect } from 'react';
import { useSelector} from 'react-redux';
import { Form} from 'react-bootstrap';
import { getCornYields} from './Slices/CornSlice'
import GuessBox from './GuessBox'
import GuessScroll from './GuessScroll'
import {fetchCornEstimate} from './Slices/CornGuessSlice'
import {getLoggedIn} from './selectors'

const Corn = () => {
  const [corn, setCorn] = useState()
  const logged = useSelector(state => state.loggedin)
  // const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(true);
  const yielddata = useSelector(getCornYields);
  let grain = "Corn"
 
  let i = 0
  const sortedArray = yielddata.slice().sort((a, b) => b.acres - a.acres);

  // const initialYieldValues = sortedArray.reduce((acc, data) => {
  //   acc[data.state.toLowerCase()] = data.yield;  
  //   return acc;
  // }, {});

  const [yieldValues, setYieldValues] = useState({
    ia: 201,
    il: 203,
    ne: 173,
    mn: 181,
    sd: 152,
    in: 200,
    nd: 143,
    wi: 171,
    oh: 195,
    al: 168,
    ar: 180,
    ca: 174,
    co: 124,
    de: 186,
    ga: 183,
    id: 215,
    ks: 121,
    ky: 183,
    la: 175,
    md: 171,
    mi: 171,
    ms: 182,
    mo: 147,
    ny: 168,
    nc: 143,
    ok: 144,
    pa: 154,
    sc: 150,
    tn: 177,
    tx: 130,
    va: 154,
    wa: 235,
    mt: 180,
    nj: 180,
    fl: 180,
    wy: 160,
    or: 200,
    nm: 185,
    az: 160,
    wv: 175,
    ut: 185
  });

  const updateYieldValue = (stateName, value) => {
    setYieldValues(prevState => ({
      ...prevState,
      [stateName]: value,
    }));
  };

  useEffect(() => {
    let totalWeightedYield = 0;
    let totalAcres = 0;

    sortedArray.forEach(data => {
      // const state = data.state.toLowerCase();
      const state = data.state ? data.state.toLowerCase() : '';
      // const yieldValue = yieldValues[state];
      const yieldValue = state && yieldValues[state] ? yieldValues[state] : 0;
      const acresValue = data.acres;
      const weightedYield = yieldValue * acresValue;

      totalWeightedYield += weightedYield;
      totalAcres += acresValue;
    });

    const average = totalWeightedYield / totalAcres;
    console.log(average)
   
    let averageYield = average.toString()
    setCorn(averageYield.slice(0,-12));
  }, [yieldValues]);

  return (
    <>
    <main className="container">
      <section className="corn">
        <h2 className="dark">Corn</h2>
        <div style={{ overflow: 'scroll', maxHeight: '24em' }}>
          
            <Form >
              <table className="table table-striped table-hover table-responsive">
                <thead style={{ fontWeight: 'bold' }}>
                  <tr>
                    <td>State</td>
                    <td>Your Est</td>
                    <td>USDA</td>
                    {/* <td>3YrAvg</td> */}
                    <td>Acres</td>
                  </tr>
                </thead>
                <tbody>
                {sortedArray.map(data => (
                  <tr key={data.id}>
                    <td>
                      <Form.Label className="label" style={{ fontWeight: 'bold' }}>
                        {data.state}
                      </Form.Label>
                    </td>
                    <td>
                      <Form.Control
                        style={{ minWidth: '5em' }}
                        disabled = {!logged.name}
                        placeholder={data.yield}
                        value={yieldValues[data.state.toLowerCase()]} 
                        onChange={e => updateYieldValue(data.state.toLowerCase(), e.target.value)}
                        type="number"
                      />
                    </td>
                    <td>{data.yield}</td>
                    {/* <td>{data.avg}</td> */}
                    <td>{data.acres}</td>
                  </tr>
                    ))}
                </tbody>
              </table>
            </Form>
           
        
        </div>
        </section>
        <section className="sideb">
      
      <div className="scroll">
        <GuessScroll  />
      </div>
      
      <div className="guess">
      <GuessBox yield={corn} grain = {grain} logged={logged}/>
      </div>
     </section>
      </main>
      
    </>
  );
};

export default Corn;