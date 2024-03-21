 import {getCornYields} from './CornSlice'
 import {useSelector} from 'react-redux'
 import { Link } from 'react-router-dom'
 import {Form,Button} from 'react-bootstrap'
 import {useState} from 'react'
 import {useDispatch} from 'react-redux'
 import {addCornGuess} from './CornSlice'

const Display = () => {
    var yielddata = useSelector(getCornYields)
    var sortedArray = yielddata.slice().sort(function(a, b) {
      return b.acres - a.acres;
  });
  console.log(sortedArray)
  const dispatch = useDispatch()
    const [ia, setIA] = useState(0);
    const [il, setIL] = useState(203);
    const [ne, setNE] = useState(173);
    const [mn, setMN] = useState(181);
    const [sd, setSD] = useState(152);
    const [ind, setIN] = useState(200);
    const [nd, setND] = useState(143);
    const [wi, setWI] = useState(171);
    const [oh, setOH] = useState(195);
    const [al, setAL] = useState(168);
    const [ar, setAR] = useState(180);
    const [ca, setCA] = useState(174);
    const [co, setCO] = useState(124);
    const [de, setDE] = useState(186);
    const [ga, setGA] = useState(183);
    const [id, setID] = useState(215);
    const [ks, setKS] = useState(121);
    const [ky, setKY] = useState(183);
    const [la, setLA] = useState(175);
    const [md, setMD] = useState(171);
    const [mi, setMI] = useState(171);
    const [ms, setMS] = useState(182);
    const [mo, setMO] = useState(147);
    const [ny, setNY] = useState(168);
    const [nc, setNc] = useState(143);
    const [ok, setOK] = useState(144);
    const [pa, setPA] = useState(154);
    const [sc, setSC] = useState(150);
    const [tn, setTN] = useState(177);
    const [tx, setTX] = useState(130);
    const [va, setVA] = useState(154);
    const [wa, setWA] = useState(235);

    function onSubmit() {
      console.log(ia)
      dispatch(addCornGuess())
    }
 


    

    return (
    <>
 
      <div>
      <h2 className="dark">Corn</h2>      
        <div style={{ overflow: "scroll", maxHeight: "24em"}}>
          {
       sortedArray.map(data => {
        return <>
              <Form >
              <table className="table table-striped table-hover table-responsive">
                <thead  style={{ fontWeight: "bold" }}>
                  <tr>
                    <td>State</td>
                    <td>USDA</td>
                    {/* <td>3YrAvg</td> */}
                    <td>Acres</td>
                  </tr>
                </thead>
                <tbody>
                <tr key={data.id}>
                    <Form.Group>
                      <td>
                      <Form.Label
                        className="label"
                         style={{ fontWeight: "bold" }}
                      >
                        {data.state}
                      </Form.Label>
                      </td>
                      <td>
                      <Form.Control
                        style={{ minWidth: "5em"}}
                        placeholder={data.yield}
                        //  onChange={(e) => setIA(e.target.value)}
                       onChange={(e) =>`set${data.state}(e.target.value)`}
                        type="number"
                      ></Form.Control>
                      </td>
                    </Form.Group>
                    <td>{data.yield}</td>
                    {/* <td>{data.avg}</td> */}
                    <td>{data.acres}</td>
                  </tr>
                </tbody>
                </table>
                
                </Form>
                
                </>
})
}
</div>
<Button style={{margin:"1em"}} type={"submit"} onClick={onSubmit}>Button</Button>
</div>

  
  </>)
}

export default Display