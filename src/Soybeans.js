import {getBeanYields} from './Slices/BeanSlice'
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import {Form,Button} from 'react-bootstrap'
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {getLoggedIn} from './selectors'
import GuessBox from './GuessBox'
import GuessScroll from './GuessScroll'

const Soybeans = () => {
   var yielddata = useSelector(getBeanYields)
   const [beans, setBeans] = useState()
   console.log(yielddata)
   const logged = useSelector(state => state.loggedin)
   console.log(logged)
   let grain = "Beans"

   let i = 0

   var sortedArray = yielddata.slice().sort(function(a, b) {
     return b.acres - a.acres;
 });
 const dispatch = useDispatch()
  //  const [ia, setIA] = useState(0);
  //  const [il, setIL] = useState(203);
  //  const [ne, setNE] = useState(173);
  //  const [mn, setMN] = useState(181);
  //  const [sd, setSD] = useState(152);
  //  const [ind, setIN] = useState(200);
  //  const [nd, setND] = useState(143);
  //  const [wi, setWI] = useState(171);
  //  const [oh, setOH] = useState(195);
  //  const [al, setAL] = useState(168);
  //  const [ar, setAR] = useState(180);
  //  const [ca, setCA] = useState(174);
  //  const [co, setCO] = useState(124);
  //  const [de, setDE] = useState(186);
  //  const [ga, setGA] = useState(183);

  //  const [ks, setKS] = useState(121);
  //  const [ky, setKY] = useState(183);
  //  const [la, setLA] = useState(175);
  //  const [md, setMD] = useState(171);
  //  const [mi, setMI] = useState(171);
  //  const [ms, setMS] = useState(182);
  //  const [mo, setMO] = useState(147);
  //  const [ny, setNY] = useState(168);
  //  const [nc, setNc] = useState(143);
  //  const [ok, setOK] = useState(144);
  //  const [pa, setPA] = useState(154);
  //  const [sc, setSC] = useState(150);
  //  const [tn, setTN] = useState(177);
  //  const [tx, setTX] = useState(130);
  //  const [va, setVA] = useState(154);
  // const [nj, setNJ] = useState();
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
  
  const onSubmit = () => {
   
    // const userId = logged.userId
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
    setBeans(avgyield.toFixed(2))
     
    
  };


   return (
   <>
     <main className="container">
      <div className="corn">
        <h2 className="dark">Soybeans</h2>
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
        <GuessScroll  />
      </div>
      
      <div className="guess">
      <GuessBox yield={beans} grain={grain} logged={logged}/>
      </div>
      </main>
 </>)
}

export default Soybeans