import { getCornYields, fetchCornYield } from './Slices/CornSlice';
import { useSelector, useDispatch } from 'react-redux';
import { Form } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import GuessBox from './GuessBox';
import GuessScroll from './GuessScroll';
import { useUser } from "./UserContext";

const Corn = () => {
  const dispatch = useDispatch();
  const { loggedIn } = useUser();
  const [corn, setCorn] = useState();
  
  // Fetch yield data from Redux store
  const yielddata = useSelector(getCornYields);
  
  // Sort data by acres descending
  const sortedArray = [...yielddata].sort((a, b) => b.acres - a.acres);

  let grain = "Corn";

  // Dispatch fetchCornYield on component mount
  useEffect(() => {
    dispatch(fetchCornYield());
  }, [dispatch]);

  // State for yield values
  const [yieldValues, setYieldValues] = useState({});

  // Populate yieldValues when yielddata updates
  useEffect(() => {
    if (yielddata.length > 0) {
      const formattedData = {};
      yielddata.forEach((item) => {
        if (item.state) {
          formattedData[item.state.toLowerCase()] = item.yield;
        }
      });
      setYieldValues(formattedData);
    }
  }, [yielddata]);

  // Function to update state yield values when input changes
  const updateYieldValue = (stateName, value) => {
    setYieldValues((prev) => ({
      ...prev,
      [stateName]: value,
    }));
  };

  // Calculate weighted average yield
  useEffect(() => {
    let totalWeightedYield = 0;
    let totalAcres = 0;

    sortedArray.forEach((data) => {
      const stateKey = data.state ? data.state.toLowerCase() : "";
      const yieldValue = stateKey && yieldValues[stateKey] ? yieldValues[stateKey] : 0;
      const acresValue = data.acres || 0;
      const weightedYield = yieldValue * acresValue;

      totalWeightedYield += weightedYield;
      totalAcres += acresValue;
    });

    const average = totalAcres ? totalWeightedYield / totalAcres : 0;
    let averageYield = average.toString();
    setCorn(averageYield.slice(0, -12));
  }, [yieldValues, sortedArray]);

  return (
    <>
      <main className="container">
        <section className="corn">
          <h2 className="dark">Corn</h2>
          <div style={{ overflow: 'scroll', maxHeight: '24em' }}>
            <Form>
              <table className="table table-striped table-hover table-responsive">
                <thead style={{ fontWeight: 'bold' }}>
                  <tr>
                    <td>State</td>
                    <td>Your Est</td>
                    <td>USDA</td>
                    <td>Acres</td>
                  </tr>
                </thead>
                <tbody>
                  {sortedArray.map((data) => {
                    const stateKey = data.state ? data.state.toLowerCase() : ""; // Ensure it's a valid string

                    return (
                      <tr key={data.id}>
                        <td>
                          <Form.Label className="label" style={{ fontWeight: 'bold' }}>
                            {data.state || "Unknown"} {/* Handle missing state values */}
                          </Form.Label>
                        </td>
                        <td>
                          <Form.Control
                            style={{ minWidth: '5em' }}
                            disabled={!loggedIn}
                            placeholder={String(data.yield)}
                            value={stateKey && yieldValues[stateKey] ? yieldValues[stateKey] : ""}
                            onChange={(e) => updateYieldValue(stateKey, e.target.value)}
                            type="number"
                          />
                        </td>
                        <td>{data.yield}</td>
                        <td>{data.acres}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </Form>
          </div>
        </section>
        <section className="sideb">
          <div className="scroll">
            <GuessScroll />
          </div>
          <div className="guess">
            <GuessBox yield={corn} grain={grain} />
          </div>
        </section>
      </main>
    </>
  );
};

export default Corn;
