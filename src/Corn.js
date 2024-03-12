import React, {useState} from 'react'
import { Form, Button } from "react-bootstrap";
import {useSelector} from 'react-redux'
import { getCornYields } from './CornSlice';
import {useDispatch} from 'react-redux'
import {addCornGuess} from './UserFeatures/usersSlice'

const Corn = () => {
  const data = useSelector(getCornYields)
  const dispatch = useDispatch()
  const [ia, setIa] = useState(data.yield);
  const [il, setIl] = useState(203);
  const [ne, setNe] = useState(173);
  const [mn, setMn] = useState(181);
  const [sd, setSd] = useState(152);
  const [ind, setInd] = useState(200);
  const [nd, setNd] = useState(143);
  const [wi, setWi] = useState(171);
  const [oh, setOh] = useState(195);
  const [al, setAl] = useState(168);
  const [ar, setAr] = useState(180);
  const [ca, setCa] = useState(174);
  const [co, setCo] = useState(124);
  const [de, setDe] = useState(186);
  const [ga, setGa] = useState(183);
  const [id, setId] = useState(215);
  const [ks, setKs] = useState(121);
  const [ky, setKy] = useState(183);
  const [la, setLa] = useState(175);
  const [md, setMd] = useState(171);
  const [mi, setMi] = useState(171);
  const [ms, setMs] = useState(182);
  const [mo, setMo] = useState(147);
  const [ny, setNy] = useState(168);
  const [nc, setNc] = useState(143);
  const [ok, setOk] = useState(144);
  const [pa, setPa] = useState(154);
  const [sc, setSc] = useState(150);
  const [tn, setTn] = useState(177);
  const [tx, setTx] = useState(130);
  const [va, setVa] = useState(154);
  const [wa, setWa] = useState(235);

  // const handleNumber = (e: { target: { value: any } }) => {};
  function onSubmit() {
    const userid = 8
    const cornYield = (
      (al * 335000 +
        ar * 830000 +
        ca * 40000 +
        co * 1070000 +
        de * 172000 +
        ga * 175000 +
        id * 216000 +
        il * 11000000 +
        ind * 5380000 +
        ia * 12600000 +
        ks * 5330000 +
        ky * 1500000 +
        la * 680000 +
        md * 420000 +
        mi * 2050000 +
        mn * 8200000 +
        ms * 770000 +
        mo * 3670000 +
        ne * 9590000 +
        ny * 605000 +
        nc * 900000 +
        nd * 3740000 +
        oh * 3370000 +
        ok * 350000 +
        pa * 840000 +
        sc * 355000 +
        sd * 5590000 +
        tn * 895000 +
        tx * 2200000 +
        va * 375000 +
        wa * 90000 +
        wi * 3100000 +
        28337200 +
        479000 * 162.2) /
      87096000
    ).toFixed(1);
    dispatch(addCornGuess(cornYield,userid,al,ar,ca,co,de,ga,id,il,ind,ia,ks,ky,la,md,mn,mi,ms,mo,ne,ny,nc,nd,oh,ok,pa,sc,tn,tx,va,wa,wi))

    alert(cornYield);
  }

  return (
    <>
      <div style={{ border: "2px solid black", backgroundColor: "yellow", minWidth:"50%"}}>
        <h2 className="dark">Corn</h2>
        <div className="boxy" style={{ overflow: "scroll", maxHeight: "25em" }}>
          <Form>
            <table className="table table-striped table-hover table-responsive">
              <thead style={{ fontWeight: "bold" }}>
                <tr className="hdrs">
                  <td>State</td>
                  <td>USDA</td>
                  <td>3YrAvg</td>
                  <td>Planted Acres</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <Form.Group className="input-group">
                    <Form.Label
                      className="label"
                       style={{ fontWeight: "bold" }}
                    >
                      Iowa
                    </Form.Label>
                    <Form.Control
                      style={{ minWidth: "5em"}}
                      className="inputs"
                      value={ia}
                      onChange={(e) => setIa(e.target.value)}
                      type="number"
                    ></Form.Control>
                  </Form.Group>
                  <td>{data[1].yield}</td>
                  <td>0</td>
                  <td>12.600</td>
                </tr>
                <tr>
                  <Form.Group className="input-group">
                    <Form.Label
                      className="label"
                      style={{ fontWeight: "bold" }}
                    >
                      Illinois
                    </Form.Label>
                    <Form.Control
                      style={{ minWidth: "5em" }}
                      type="number"
                      className="inputs"
                      value={il}
                      onChange={(e) => setIl(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                  <td>200</td>
                  <td>0</td>
                  <td>11.000</td>
                </tr>
                <tr>
                  <Form.Group className="input-group">
                    <Form.Label
                      className="label"
                      style={{ fontWeight: "bold" }}
                    >
                      Nebraska
                    </Form.Label>
                    <Form.Control
                      style={{ minWidth: "5em" }}
                      value={ne}
                      onChange={(e) => setNe(e.target.value)}
                      type="number"
                    ></Form.Control>
                  </Form.Group>
                  <td>174</td>
                  <td>0</td>
                  <td>9.590</td>
                </tr>
                <tr>
                  <Form.Group className="input-group">
                    <Form.Label
                      className="label"
                      style={{
                        fontWeight: "bold",
                        backgroundColor: "transparent",
                      }}
                    >
                      Minnesota
                    </Form.Label>
                    <Form.Control
                      style={{ minWidth: "5em" }}
                      value={mn}
                      onChange={(e) => setMn(e.target.value)}
                      type="number"
                    ></Form.Control>
                  </Form.Group>
                  <td>179</td>
                  <td>0</td>
                  <td>8.200</td>
                </tr>

                <tr>
                  <Form.Group className="input-group">
                    <Form.Label
                      className="label"
                      style={{ fontWeight: "bold" }}
                    >
                      South Dakota
                    </Form.Label>
                    <Form.Control
                      style={{ minWidth: "5em" }}
                      value={sd}
                      onChange={(e) => setSd(e.target.value)}
                      type="number"
                    ></Form.Control>
                  </Form.Group>
                  <td>147</td>
                  <td>0</td>
                  <td>5.590</td>
                </tr>

                <tr>
                  <Form.Group className="input-group">
                    <Form.Label
                      className="label"
                      style={{ fontWeight: "bold" }}
                    >
                      Indiana
                    </Form.Label>
                    <Form.Control
                      style={{ minWidth: "5em" }}
                      value={ind}
                   
                      onChange={(e) => setInd(e.target.value)}
                      type="number"
                    ></Form.Control>
                  </Form.Group>
                  <td>197</td>
                  <td>0</td>
                  <td>5.380</td>
                </tr>
                <tr>
                  <Form.Group className="input-group">
                    <Form.Label
                      className="label"
                      style={{ fontWeight: "bold" }}
                    >
                      Kansas
                    </Form.Label>
                    <Form.Control
                      style={{ minWidth: "5em" }}
                      value={ks}
                      onChange={(e) => setKs(e.target.value)}
                      type="number"
                    ></Form.Control>
                  </Form.Group>{" "}
                  <td>122</td>
                  <td>0</td>
                  <td>5.330</td>
                </tr>
                <tr>
                  <Form.Group className="input-group">
                    <Form.Label
                      className="label"
                      style={{ fontWeight: "bold" }}
                    >
                      North Dakota
                    </Form.Label>
                    <Form.Control
                      style={{ minWidth: "5em" }}
                      value={nd}
                      onChange={(e) => setNd(e.target.value)}
                      type="number"
                    ></Form.Control>
                  </Form.Group>{" "}
                  <td>136</td>
                  <td>0</td>
                  <td>3.740</td>
                </tr>
                <tr>
                  <Form.Group className="input-group">
                    <Form.Label
                      className="label"
                      style={{ fontWeight: "bold" }}
                    >
                      Ohio
                    </Form.Label>
                    <Form.Control
                      style={{ minWidth: "5em" }}
                      value={oh}
                      onChange={(e) => setOh(e.target.value)}
                      type="number"
                    ></Form.Control>
                  </Form.Group>{" "}
                  <td>195</td>
                  <td>0</td>
                  <td>3.370</td>
                </tr>
                <tr>
                  <Form.Group className="input-group">
                    <Form.Label
                      className="label"
                      style={{ fontWeight: "bold" }}
                    >
                      Wisconsin
                    </Form.Label>
                    <Form.Control
                      style={{ minWidth: "5em" }}
                      value={wi}
                      onChange={(e) => setWi(e.target.value)}
                      type="number"
                    ></Form.Control>
                  </Form.Group>
                  <td>165</td>
                  <td>0</td>
                  <td>3.100</td>
              </tr>
              <tr>
                  <Form.Group className="input-group">
                    <Form.Label
                      className="label"
                      style={{ fontWeight: "bold" }}
                    >
                      Alabama
                    </Form.Label>
                    <Form.Control
                      value={al}
                      style={{ minWidth: "5em" }}
                      onChange={(e) => setAl(e.target.value)}
                      type="number"
                    ></Form.Control>
                  </Form.Group>{" "}
                  <td>167</td>
                  <td>0</td>
                  <td>0.335</td>
              </tr>
                <tr>
                  <Form.Group className="input-group">
                    <Form.Label
                      className="label"
                      style={{ fontWeight: "bold" }}
                    >
                      Arkansas
                    </Form.Label>
                    <Form.Control
                      value={ind}
                      style={{ minWidth: "5em" }}
                      onChange={(e) => setAr(e.target.value)}
                      type="number"
                    ></Form.Control>
                  </Form.Group>{" "}
                  <td>180</td>
                  <td>171</td>
                  <td>0.695</td>
                </tr>
                <tr>
                  <Form.Group className="input-group">
                    <Form.Label
                      className="label"
                      style={{ fontWeight: "bold" }}
                    >
                      California
                    </Form.Label>
                    <Form.Control
                      value={ca}
                      style={{ minWidth: "5em" }}
                      onChange={(e) => setCa(e.target.value)}
                      type="number"
                    ></Form.Control>
                  </Form.Group>{" "}
                  <td>178</td>
                  <td>0</td>
                  <td>0.020</td>
                </tr>
                <tr>
                  <Form.Group className="input-group">
                    <Form.Label
                      className="label"
                      style={{ fontWeight: "bold" }}
                    >
                      Colorado
                    </Form.Label>
                    <Form.Control
                      value={co}
                      style={{ minWidth: "5em" }}
                      onChange={(e) => setCo(e.target.value)}
                      type="number"
                    ></Form.Control>
                  </Form.Group>{" "}
                  <td>130</td>
                  <td>0</td>
                  <td>0.980</td>
                </tr>
                <tr>
                  <Form.Group className="input-group">
                    <Form.Label
                      className="label"
                      style={{ fontWeight: "bold" }}
                    >
                      Delaware
                    </Form.Label>
                    <Form.Control
                      value={de}
                      style={{ minWidth: "5em" }}
                      onChange={(e) => setDe(e.target.value)}
                      type="number"
                    ></Form.Control>
                  </Form.Group>{" "}
                  <td>184</td>
                  <td>0</td>
                  <td>0.166</td>
                </tr>
                <tr>
                  <Form.Group className="input-group">
                    <Form.Label
                      className="label"
                      style={{ fontWeight: "bold" }}
                    >
                      Georgia
                    </Form.Label>
                    <Form.Control
                      value={ga}
                      style={{ minWidth: "5em" }}
                      onChange={(e) => setGa(e.target.value)}
                      type="number"
                    ></Form.Control>
                  </Form.Group>{" "}
                  <td>177</td>
                  <td>0</td>
                  <td>0.450</td>
                </tr>
                <tr>
                  <Form.Group className="input-group">
                    <Form.Label
                      className="label"
                      style={{ fontWeight: "bold" }}
                    >
                      Idaho
                    </Form.Label>
                    <Form.Control
                      value={id}
                      style={{ minWidth: "5em" }}
                      onChange={(e) => setId(e.target.value)}
                      type="number"
                    ></Form.Control>
                  </Form.Group>{" "}
                  <td>212</td>
                  <td>0</td>
                  <td>0.120</td>
                </tr>

                <tr>
                  <Form.Group className="input-group">
                    <Form.Label
                      className="label"
                      style={{ fontWeight: "bold" }}
                    >
                      Kentucky
                    </Form.Label>
                    <Form.Control
                      value={ky}
                      style={{ minWidth: "5em" }}
                      onChange={(e) => setKy(e.target.value)}
                      type="number"
                    ></Form.Control>
                  </Form.Group>{" "}
                  <td>183</td>
                  <td>0</td>
                  <td>1.350</td>
                </tr>
                <tr>
                  <Form.Group className="input-group">
                    <Form.Label
                      className="label"
                      style={{ fontWeight: "bold" }}
                    >
                      Louisiana
                    </Form.Label>
                    <Form.Control
                      value={la}
                      style={{ minWidth: "5em" }}
                      onChange={(e) => setLa(e.target.value)}
                      type="number"
                    ></Form.Control>
                  </Form.Group>{" "}
                  <td>175</td>
                  <td>0</td>
                  <td>0.680</td>
                </tr>
                <tr>
                  <Form.Group className="input-group">
                    <Form.Label
                      className="label"
                      style={{ fontWeight: "bold" }}
                    >
                      Maryland
                    </Form.Label>
                    <Form.Control
                      value={md}
                      style={{ minWidth: "5em" }}
                      onChange={(e) => setMd(e.target.value)}
                      type="number"
                    ></Form.Control>
                  </Form.Group>{" "}
                  <td>158</td>
                  <td>0</td>
                  <td>0.420</td>
                </tr>
                <tr>
                  <Form.Group className="input-group">
                    <Form.Label
                      className="label"
                      style={{ fontWeight: "bold" }}
                    >
                      Michigan
                    </Form.Label>
                    <Form.Control
                      value={mi}
                      style={{ minWidth: "5em" }}
                      onChange={(e) => setMi(e.target.value)}
                      type="number"
                    ></Form.Control>
                  </Form.Group>{" "}
                  <td>170</td>
                  <td>0</td>
                  <td>1.990</td>
                </tr>
                <tr>
                  <Form.Group className="input-group">
                    <Form.Label
                      className="label"
                      style={{ fontWeight: "bold" }}
                    >
                      Mississippi
                    </Form.Label>
                    <Form.Control
                      value={ms}
                      style={{ minWidth: "5em" }}
                      onChange={(e) => setMs(e.target.value)}
                      type="number"
                    ></Form.Control>
                  </Form.Group>{" "}
                  <td>182</td>
                  <td>0</td>
                  <td>0.770</td>
                </tr>
                <tr>
                  <Form.Group className="input-group">
                    <Form.Label
                      className="label"
                      style={{ fontWeight: "bold" }}
                    >
                      Missouri
                    </Form.Label>
                    <Form.Control
                      value={mo}
                      style={{ minWidth: "5em" }}
                      onChange={(e) => setMo(e.target.value)}
                      type="number"
                    ></Form.Control>
                  </Form.Group>{" "}
                  <td>141</td>
                  <td>0</td>
                  <td>3.670</td>
                </tr>
                <tr>
                  <Form.Group className="input-group">
                    <Form.Label
                      className="label"
                      style={{ fontWeight: "bold" }}
                    >
                      New York
                    </Form.Label>
                    <Form.Control
                      value={ny}
                      style={{ minWidth: "5em" }}
                      onChange={(e) => setNy(e.target.value)}
                      type="number"
                    ></Form.Control>
                  </Form.Group>{" "}
                  <td>163</td>
                  <td>0</td>
                  <td>0.605</td>
                </tr>
                <tr>
                  <Form.Group className="input-group">
                    <Form.Label
                      className="label"
                      style={{ fontWeight: "bold" }}
                    >
                      North Carolina
                    </Form.Label>
                    <Form.Control
                      value={nc}
                      style={{ minWidth: "5em" }}
                      onChange={(e) => setNc(e.target.value)}
                      type="number"
                    ></Form.Control>
                  </Form.Group>{" "}
                  <td>147</td>
                  <td>0</td>
                  <td>0.900</td>
                </tr>

                <tr>
                  <Form.Group className="input-group">
                    <Form.Label
                      className="label"
                      style={{ fontWeight: "bold" }}
                    >
                      Oklahoma
                    </Form.Label>
                    <Form.Control
                      value={ok}
                      style={{ minWidth: "5em" }}
                      onChange={(e) => setOk(e.target.value)}
                      type="number"
                    ></Form.Control>
                  </Form.Group>{" "}
                  <td>144</td>
                  <td>0</td>
                  <td>0.350</td>
                </tr>
                <tr>
                  <Form.Group className="input-group">
                    <Form.Label
                      className="label"
                      style={{ fontWeight: "bold" }}
                    >
                      Pennsylvania
                    </Form.Label>
                    <Form.Control
                      value={pa}
                      style={{ minWidth: "5em" }}
                      onChange={(e) => setPa(e.target.value)}
                      type="number"
                    ></Form.Control>
                  </Form.Group>{" "}
                  <td>154</td>
                  <td>0</td>
                  <td>0.840</td>
                </tr>
                <tr>
                  <Form.Group className="input-group">
                    <Form.Label
                      className="label"
                      style={{ fontWeight: "bold" }}
                    >
                      South Carolina
                    </Form.Label>
                    <Form.Control
                      value={sc}
                      style={{ minWidth: "5em" }}
                      onChange={(e) => setSc(e.target.value)}
                      type="number"
                    ></Form.Control>
                  </Form.Group>{" "}
                  <td>147</td>
                  <td>0</td>
                  <td>0.355</td>
                </tr>
                <tr>
                  <Form.Group className="input-group">
                    <Form.Label
                      className="label"
                      style={{ fontWeight: "bold" }}
                    >
                      Tennessee
                    </Form.Label>
                    <Form.Control
                      value={tn}
                      style={{ minWidth: "5em" }}
                      onChange={(e) => setTn(e.target.value)}
                      type="number"
                    ></Form.Control>
                  </Form.Group>{" "}
                  <td>173</td>
                  <td>0</td>
                  <td>0.895</td>
                </tr>
                <tr>
                  <Form.Group className="input-group">
                    <Form.Label
                      className="label"
                      style={{ fontWeight: "bold" }}
                    >
                      Texas
                    </Form.Label>
                    <Form.Control
                      value={tx}
                      style={{ minWidth: "5em" }}
                      onChange={(e) => setTx(e.target.value)}
                      type="number"
                    ></Form.Control>
                  </Form.Group>{" "}
                  <td>130</td>
                  <td>0</td>
                  <td>2.200</td>
                </tr>
                <tr>
                  <Form.Group className="input-group">
                    <Form.Label
                      className="label"
                      style={{ fontWeight: "bold" }}
                    >
                      Virginia
                    </Form.Label>
                    <Form.Control
                      value={va}
                      style={{ minWidth: "5em" }}
                      onChange={(e) => setVa(e.target.value)}
                      type="number"
                    ></Form.Control>
                  </Form.Group>{" "}
                  <td>152</td>
                  <td>0</td>
                  <td>0.375</td>
                </tr>
                <tr>
                  <Form.Group className="input-group">
                    <Form.Label
                      className="label"
                      style={{ fontWeight: "bold" }}
                    >
                      Washington
                    </Form.Label>
                    <Form.Control
                      value={wa}
                      style={{ minWidth: "5em" }}
                      onChange={(e) => setWa(e.target.value)}
                      type="number"
                    ></Form.Control>
                  </Form.Group>{" "}
                  <td>230</td>
                  <td>0</td>
                  <td>0.090</td>
                </tr>
              </tbody>
            </table>
          </Form>
        </div>

        <Button
          className="btn btn-success"
          type={"submit"}
          onClick={onSubmit}
          style={{ float: "right" }}
        >
          Calculate
        </Button>
      </div>
    </>
  );
  
};

export default Corn