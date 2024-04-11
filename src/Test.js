import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import {addCornGuess, getCornYields} from './Slices/CornSlice'
// import {getCornYields, getAcreage} from './selectors'
import GuessBox from './GuessBox'
import GuessScroll from './GuessScroll'
import {fetchCornEstimate} from './Slices/CornGuessSlice'

const Test = () => {
  const [corn, setCorn] = useState()
  const logged = useSelector(state => state.loggedin)
  const yielddata = useSelector(getCornYields);
  const acreage = useSelector(state => state.yields)
  let i = 0
  console.log(yielddata.yield)
  const sortedArray = yielddata.slice().sort((a, b) => b.acres - a.acres);
  const dispatch = useDispatch();
 
 
  
  const [yieldValues, setYieldValues] = useState({
    ia: 0,
    il: 203,
    ne: 173,
    mn: 181,
    sd: 152,
    ind: 200,
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
  });

  // Function to update yield values
  const updateYieldValue = (stateName, value) => {
    setYieldValues(prevState => ({
      ...prevState,
      [stateName]: value,
    }));
  };

  

 
  const onSubmit = () => {
    const userId = logged.userId
    let totalWeightedYield = 0;
    let totalAcres = 0;
    let acresValue = 0
    sortedArray.forEach(data => {
     
      const state = data.state.toLowerCase();
      const yieldValue = yieldValues[state];
      const acresValue = data.acres
       const weightedYield = yieldValue * acresValue;
      
     

      totalWeightedYield += weightedYield;
      totalAcres += acresValue;
      i++
    });

    const averageYield = totalWeightedYield / totalAcres;
    const avgyield = parseInt(averageYield)
    setCorn(avgyield.toFixed(2))
    
  };

  return (
    <>
    <main className="container">
      <div className="corn">
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
        <Button style={{ margin: '1em' }} type="submit" onClick={onSubmit}>
          Calculate
        </Button>
      </div>
      <div className="scroll">
        <GuessScroll />
      </div>
      
      <div className="guess">
      <GuessBox yield={corn} logged={logged}/>
      </div>
      </main>
      
    </>
  );
};

export default Test;