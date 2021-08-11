import React, { useState } from "react";
import ReactDOM from "react-dom";
import BootstrapTable from "react-bootstrap-table-next";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import CDataTable from "src/views/CoreComponents/table/DataTable";
import {
  CRow,
  CCard,
  CCol,
  CLabel,
  CButton,
  CInput,
  CLink,
  CContainer,
} from "@coreui/react";
import { Table } from "jspdf-autotable";
import { flagSet } from "@coreui/icons";

const Form = () => {
  const [show, setShow] = useState(true);
  const [show1, setShow1] = useState(false);
  const [show11, setShow11] = useState(false);
  const [show12, setShow12] = useState(false);
  const [show13, setShow13] = useState(false);
  const [show14, setShow14] = useState(false);
  const [show15, setShow15] = useState(false);
  const [state, setState] = useState({ hide1: false });
  const [first, setfirst] = useState(false);
  const [irst, setirst] = useState(true);
  const [head, sethead] = useState(true);
  const [head1, sethead1] = useState(false);
  const [kali, setkali] = useState(false);
  const [kaliu, setkaliu] = useState(false);
  const [kaliu1, setkaliu1] = useState(false);
  const [kaliu2, setkaliu2] = useState(false);
  const [kaliu3, setkaliu3] = useState(false);
  const [kaliu4, setkaliu4] = useState(false);
  const [kaliu5, setkaliu5] = useState(false);

  const [kali0, setkali0] = useState(false);
  const [kali0o, setkali0o] = useState(false);
  const [kali0o1, setkali0o1] = useState(false);
  const [kali0o2, setkali0o2] = useState(false);
  const [kali0o3, setkali0o3] = useState(false);
  const [kali0o4, setkali0o4] = useState(false);
  const [kali0o5, setkali0o5] = useState(false);
  const [kali0o6, setkali0o6] = useState(false);
  const [kali1, setkali1] = useState(false);
  const [kali1m, setkali1m] = useState(false);
  const [kali1m1, setkali1m1] = useState(false);
  const [kali1m2, setkali1m2] = useState(false);
  const [kali1m3, setkali1m3] = useState(false);
  const [kali1m4, setkali1m4] = useState(false);
  const [kali1m5, setkali1m5] = useState(false);
  const [kali1m6, setkali1m6] = useState(false);
  const [pudu, setpudu] = useState(true);
  const [puduh, setpuduh] = useState(false);
  const [pududata, setpududata] = useState(false);
  const [pududatak, setpududatak] = useState(false);
  const [pududatak1, setpududatak1] = useState(false);
  const [pududatak2, setpududatak2] = useState(false);
  const [pududatak3, setpududatak3] = useState(false);
  const [pududatak4, setpududatak4] = useState(false);
  const [pududatak5, setpududatak5] = useState(false);
  const [pududatak6, setpududatak6] = useState(false);
  const [pududata1, setpududata1] = useState(false);
  const [pududata1y, setpududata1y] = useState(false);
  const [pududata1y1, setpududata1y1] = useState(false);
  const [pududata1y2, setpududata1y2] = useState(false);
  const [pududata1y3, setpududata1y3] = useState(false);
  const [pududata1y4, setpududata1y4] = useState(false);
  const [pududata1y5, setpududata1y5] = useState(false);
  const [pududata2, setpududata2] = useState(false);
  const [pududata3p, setpududata3p] = useState(false);
  const [pududata3p1, setpududata3p1] = useState(false);
  const [pududata3p2, setpududata3p2] = useState(false);
  const [pududata3p3, setpududata3p3] = useState(false);
  const [pududata3, setpududata3] = useState(false);
  const [hill, sethill] = useState(false);

  const pondichn = () => {
    setpududata3(false);
    setpududata3p(true);
    setpududata3p1(true);
    setpududata3p2(true);
    setpududata3p3(true);
  };
  const pondiunchn = () => {
    setpududata3(true);
    setpududata3p(false);
    setpududata3p1(false);
    setpududata3p2(false);
    setpududata3p3(false);
  };

  const yananmchn = () => {
    setpududata1(false);
    setpududata1y(true);
    setpududata1y1(true);
    setpududata1y2(true);
    setpududata1y3(true);
    setpududata1y4(true);
    setpududata1y5(true);
  };

  const yanamchnun = () => {
    setpududata1(true);
    setpududata1y(false);
    setpududata1y1(false);
    setpududata1y2(false);
    setpududata1y3(false);
    setpududata1y4(false);
    setpududata1y5(false);
  };

  const karaichn = () => {
    setpududatak(true);
    setpududata(false);
    setpududatak1(true);
    setpududatak2(true);
    setpududatak3(true);
    setpududatak4(true);
    setpududatak5(true);
    setpududatak6(true);
  };
  const karaiunchn = () => {
    setpududatak(false);
    setpududata(true);
    setpududatak1(false);
    setpududatak2(false);
    setpududatak3(false);
    setpududatak4(false);
    setpududatak5(false);
    setpududatak6(false);
  };

  const madurachange = () => {
    setkali1(false);
    setkali1m(true);
    setkali1m1(true);
    setkali1m2(true);
    setkali1m3(true);
    setkali1m4(true);
    setkali1m5(true);
    setkali1m6(true);
    setShow1(false);
    sethill(false);
    setShow11(false);
    setShow12(false);
    setShow13(false);
    setShow14(false);
    setShow15(false);
    setState({ ...state, hide1: true });
    setkali(true);
    setkaliu(false);
    setkaliu1(false);
    setkaliu2(false);
    setkaliu3(false);
    setkaliu4(false);
    setkaliu5(false);
    setkali0(true);
    setkali0o(false);
    setkali0o1(false);
    setkali0o2(false);
    setkali0o3(false);
    setkali0o4(false);
    setkali0o5(false);
    setkali0o6(false);
  };
  const maduraunchange = () => {
    setkali1(true);
    setkali1m(false);
    setkali1m1(false);
    setkali1m2(false);
    setkali1m3(false);
    setkali1m4(false);
    setkali1m5(false);
    setkali1m6(false);
  };

  const kanchichange = () => {
    setkali0(false);
    setkali0o(true);
    setkali0o1(true);
    setkali0o2(true);
    setkali0o3(true);
    setkali0o4(true);
    setkali0o5(true);
    setkali0o6(true);
    setShow1(false);
    sethill(false);
    setShow11(false);
    setShow12(false);
    setShow13(false);
    setShow14(false);
    setShow15(false);
    setState({ ...state, hide1: true });
    setkali(true);
    setkaliu(false);
    setkaliu1(false);
    setkaliu2(false);
    setkaliu3(false);
    setkaliu4(false);
    setkaliu5(false);
    setkali1(true);
    setkali1m(false);
    setkali1m1(false);
    setkali1m2(false);
    setkali1m3(false);
    setkali1m4(false);
    setkali1m5(false);
    setkali1m6(false);
  };
  const kanchichangeo = () => {
    setkali0(true);
    setkali0o(false);
    setkali0o1(false);
    setkali0o2(false);
    setkali0o3(false);
    setkali0o4(false);
    setkali0o5(false);
    setkali0o6(false);
  };
  const chenchange = () => {
    setkali(false);
    setkaliu(true);
    setkaliu1(true);
    setkaliu2(true);
    setkaliu3(true);
    setkaliu4(true);
    setkaliu5(true);
    setShow1(false);
    sethill(false);
    setShow11(false);
    setShow12(false);
    setShow13(false);
    setShow14(false);
    setShow15(false);
    setState({ ...state, hide1: true });
    setkali0(true);
    setkali0o(false);
    setkali0o1(false);
    setkali0o2(false);
    setkali0o3(false);
    setkali0o4(false);
    setkali0o5(false);
    setkali0o6(false);
    setkali1(true);
    setkali1m(false);
    setkali1m1(false);
    setkali1m2(false);
    setkali1m3(false);
    setkali1m4(false);
    setkali1m5(false);
    setkali1m6(false);
  };

  const chenchangu = () => {
    setkali(true);
    setkaliu(false);
    setkaliu1(false);
    setkaliu2(false);
    setkaliu3(false);
    setkaliu4(false);
    setkaliu5(false);
  };

  const onchangeing = () => {
    sethill(true);
    setShow1(true);
    setShow11(true);
    setShow12(true);
    setShow13(true);
    setShow14(true);
    setShow15(true);
    setState({ ...state, hide1: false });
    setkali(true);
    setkaliu(false);
    setkaliu1(false);
    setkaliu2(false);
    setkaliu3(false);
    setkaliu4(false);
    setkaliu5(false);
    setkali0(true);
    setkali0o(false);
    setkali0o1(false);
    setkali0o2(false);
    setkali0o3(false);
    setkali0o4(false);
    setkali0o5(false);
    setkali0o6(false);
    setkali1(true);
    setkali1m(false);
    setkali1m1(false);
    setkali1m2(false);
    setkali1m3(false);
    setkali1m4(false);
    setkali1m5(false);
    setkali1m6(false);
  };
  const onchanging = () => {
    setShow1(false);
    sethill(false);
    setShow11(false);
    setShow12(false);
    setShow13(false);
    setShow14(false);
    setShow15(false);
    setState({ ...state, hide1: true });
  };

  const joll = () => {
    sethead(false);
    sethead1(true);
    setpudu(false);
    setpuduh(true);
    setpududata(true);
    setpududata1(true);
    setpududata2(true);
    setpududata3(true);
    setState({ ...state, hide1: true });
    setfirst(true);
    setirst(false);
    setkali(true);
    setkali0(true);
    setkali1(true);
  };
  const doll = () => {
    sethead(true);
    sethead1(false);
    setpudu(true);
    setpuduh(false);
    setpududata(false);
    setpududata1(false);
    setpududata2(false);
    setpududata3(false);
    setState({ ...state, hide1: false });
    setfirst(false);
    setirst(true);
    setkali(false);
    setkali0(false);
    setkali1(false);
  };
  const puduchange = () => {
    setpudu(false);
    setpuduh(true);
    setpududata(true);
    setpududata1(true);
    setpududata2(true);
    setpududata3(true);
    setState({ ...state, hide1: false });
    setfirst(false);
    setirst(true);
    setkali(false);
    setkali0(false);
    setkali1(false);
  };
  const puduhchange = () => {
    setpudu(true);
    setpuduh(false);
    setpududata(false);
    setpududata1(false);
    setpududata2(false);
    setpududata3(false);
  };
  const hanldeChange = () => {
    setState({ ...state, hide1: true });
    setfirst(true);
    setirst(false);
    setkali(true);
    setkali0(true);
    setkali1(true);
    setpudu(true);
    setpuduh(false);
    setpududata(false);
    setpududata1(false);
    setpududata2(false);
    setpududata3(false);
    setkali0(true);
    setkali0o(false);
    setkali0o1(false);
    setkali0o2(false);
    setkali0o3(false);
    setkali0o4(false);
    setkali0o5(false);
    setkali0o6(false);
  };
  const hanldeChange1 = () => {
    setState({ ...state, hide1: false });
    setfirst(false);
    setirst(true);
    setkali(false);
    setkali0(false);
    setkali1(false);
    setShow1(false);
    sethill(false);
    setShow11(false);
    setShow12(false);
    setShow13(false);
    setShow14(false);
    setShow15(false);
    setkaliu(false);
    setkaliu1(false);
    setkaliu2(false);
    setkaliu3(false);
    setkaliu4(false);
    setkaliu5(false);
    setkali0(false);
    setkali0o(false);
    setkali0o1(false);
    setkali0o2(false);
    setkali0o3(false);
    setkali0o4(false);
    setkali0o5(false);
    setkali0o6(false);
    setkali1(false);
    setkali1m(false);
    setkali1m1(false);
    setkali1m2(false);
    setkali1m3(false);
    setkali1m4(false);
    setkali1m5(false);
    setkali1m6(false);
  };
  return (
    <>
      {show && (
        <div>
          <div style={{ padding: "20px" }}>
            <h1 className="h2">State-Wise Data</h1>

            <table striped bordered hover>
              {head && (
                <thead>
                  <tr onClick={joll} style={{ cursor: "pointer" }}>
                    <th style={{ width: "10px" }}>+</th>
                    <th>State</th>
                    <th>Total Count</th>
                    <th>Male</th>
                    <th>Female</th>
                    <th>Transgender</th>
                  </tr>
                </thead>
              )}
              {head1 && (
                <thead>
                  <tr onClick={doll} style={{ cursor: "pointer" }}>
                    <th style={{ width: "10px" }}>-</th>
                    <th>State</th>
                    <th>Total Count</th>
                    <th>Male</th>
                    <th>Female</th>
                    <th>Transgender</th>
                  </tr>
                </thead>
              )}
              <tbody>
                {irst && (
                  <tr style={{ cursor: "pointer" }}>
                    <td onClick={hanldeChange}>+</td>
                    <td onClick={hanldeChange}>Tamilnadu</td>
                    <td onClick={hanldeChange}>2000</td>
                    <td onClick={hanldeChange}>800</td>
                    <td onClick={hanldeChange}>650</td>
                    <td onClick={hanldeChange}>550</td>
                  </tr>
                )}
                {first && (
                  <tr style={{ cursor: "pointer" }}>
                    <td onClick={hanldeChange1}>-</td>
                    <td onClick={hanldeChange1}>Tamilnadu</td>
                    <td onClick={hanldeChange1}>2000</td>
                    <td onClick={hanldeChange1}>600</td>
                    <td onClick={hanldeChange1}>410</td>
                    <td onClick={hanldeChange1}>90</td>
                  </tr>
                )}

                {state.hide1 && (
                  <tr onClick={onchangeing} style={{ cursor: "pointer" }}>
                    <td className={"long1"}>+</td>
                    <td className={"long1"} onClick={onchangeing}>
                      Ariyalur
                    </td>
                    <td className={"long1"} onClick={onchangeing}>
                      250
                    </td>
                    <td className={"long1"} onClick={onchangeing}>
                      100
                    </td>
                    <td className={"long1"} onClick={onchangeing}>
                      90
                    </td>
                    <td className={"long1"} onClick={onchangeing}>
                      60
                    </td>
                  </tr>
                )}
                {hill && (
                  <tr onClick={onchanging} style={{ cursor: "pointer" }}>
                    <td className={"long1"}>-</td>
                    <td className={"long1"} onClick={onchanging}>
                      Ariyalur
                    </td>
                    <td className={"long1"} onClick={onchanging}>
                      250
                    </td>
                    <td className={"long1"} onClick={onchanging}>
                      100
                    </td>
                    <td className={"long1"} onClick={onchanging}>
                      90
                    </td>
                    <td className={"long1"} onClick={onchanging}>
                      60
                    </td>
                  </tr>
                )}
                {show1 && (
                  <tr>
                    <td className={"long"} style={{ paddingLeft: "30px" }}></td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      Gangaikonda Cholapuram.
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      10
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      5
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      4
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      1
                    </td>
                  </tr>
                )}
                {show11 && (
                  <tr>
                    <td style={{ paddingLeft: "30px" }}></td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      Jayankondam
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      25
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      15
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      10
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      0
                    </td>
                  </tr>
                )}
                {show12 && (
                  <tr>
                    <td style={{ paddingLeft: "30px" }}></td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      Nallampalayam
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      5
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      3
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      2
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      0
                    </td>
                  </tr>
                )}
                {show13 && (
                  <tr>
                    <td style={{ paddingLeft: "30px" }}></td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      Sendurai
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      10
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      4
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      4
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      2
                    </td>
                  </tr>
                )}
                {show14 && (
                  <tr>
                    <td style={{ paddingLeft: "30px" }}></td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      Udayarpalayam
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      20
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      5
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      10
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      5
                    </td>
                  </tr>
                )}
                {show15 && (
                  <tr>
                    <td style={{ paddingLeft: "30px" }}></td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      Varadarajanpettai
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      30
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      10
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      15
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      5
                    </td>
                  </tr>
                )}
                {kali && (
                  <tr onClick={chenchange} style={{ cursor: "pointer" }}>
                    <td className={"long1"}>+</td>
                    <td className={"long1"}>Chengalpattu</td>
                    <td className={"long1"}>450</td>
                    <td className={"long1"}>220</td>
                    <td className={"long1"}>200</td>
                    <td className={"long1"}>30</td>
                  </tr>
                )}
                {kaliu && (
                  <tr onClick={chenchangu} style={{ cursor: "pointer" }}>
                    <td className={"long1"}>-</td>
                    <td className={"long1"}>Chengalpattu</td>
                    <td className={"long1"}>450</td>
                    <td className={"long1"}>220</td>
                    <td className={"long1"}>200</td>
                    <td className={"long1"}>30</td>
                  </tr>
                )}
                {kaliu1 && (
                  <tr>
                    <td className={"long"} style={{ paddingLeft: "30px" }}></td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      Acharapakkam
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      10
                    </td>
                  </tr>
                )}
                {kaliu2 && (
                  <tr>
                    <td style={{ paddingLeft: "30px" }}></td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      Chitlapakkam
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      25
                    </td>
                  </tr>
                )}
                {kaliu3 && (
                  <tr>
                    <td style={{ paddingLeft: "30px" }}></td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      Edaikazhinadu
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      5
                    </td>
                  </tr>
                )}
                {kaliu4 && (
                  <tr>
                    <td style={{ paddingLeft: "30px" }}></td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      Karunguzhi
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      10
                    </td>
                  </tr>
                )}
                {kaliu5 && (
                  <tr>
                    <td style={{ paddingLeft: "30px" }}></td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      Madambakkam
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      20
                    </td>
                  </tr>
                )}
                {kaliu && (
                  <tr>
                    <td style={{ paddingLeft: "30px" }}></td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      Mamallapuram
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      30
                    </td>
                  </tr>
                )}
                {kali0 && (
                  <tr onClick={kanchichange} style={{ cursor: "pointer" }}>
                    <td className={"long1"}>+</td>
                    <td className={"long1"}>Kanchipuram</td>
                    <td className={"long1"}>450</td>
                    <td className={"long1"}>100</td>
                    <td className={"long1"}>90</td>
                    <td className={"long1"}>60</td>
                  </tr>
                )}
                {kali0o && (
                  <tr onClick={kanchichangeo} style={{ cursor: "pointer" }}>
                    <td className={"long1"}>-</td>
                    <td className={"long1"}>Kanchipuram</td>
                    <td className={"long1"}>450</td>
                    <td className={"long1"}>100</td>
                    <td className={"long1"}>90</td>
                    <td className={"long1"}>60</td>
                  </tr>
                )}
                {kali0o1 && (
                  <tr>
                    <td className={"long"} style={{ paddingLeft: "30px" }}></td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      Agaram
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      10
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      10
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      10
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      10
                    </td>
                  </tr>
                )}
                {kali0o2 && (
                  <tr>
                    <td style={{ paddingLeft: "30px" }}></td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      Alapakkam
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      25
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      10
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      10
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      10
                    </td>
                  </tr>
                )}
                {kali0o3 && (
                  <tr>
                    <td style={{ paddingLeft: "30px" }}></td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      {" "}
                      Alavandarmedu
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      5
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      10
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      10
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      10
                    </td>
                  </tr>
                )}
                {kali0o4 && (
                  <tr>
                    <td style={{ paddingLeft: "30px" }}></td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      {" "}
                      Ekanampettai
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      10
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      10
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      10
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      10
                    </td>
                  </tr>
                )}
                {kali0o5 && (
                  <tr>
                    <td style={{ paddingLeft: "30px" }}></td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      {" "}
                      Erivoy
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      20
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      10
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      10
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      10
                    </td>
                  </tr>
                )}
                {kali0o6 && (
                  <tr>
                    <td style={{ paddingLeft: "30px" }}></td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      {" "}
                      Injambakkam
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      30
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      10
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      10
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      10
                    </td>
                  </tr>
                )}
                {kali1 && (
                  <tr onClick={madurachange}>
                    <td className={"long1"}>+</td>
                    <td className={"long1"}>Madurai</td>
                    <td className={"long1"}>650</td>
                    <td className={"long1"}>100</td>
                    <td className={"long1"}>90</td>
                    <td className={"long1"}>60</td>
                  </tr>
                )}
                {kali1m && (
                  <tr onClick={maduraunchange}>
                    <td className={"long1"}>-</td>
                    <td className={"long1"}>Madurai</td>
                    <td className={"long1"}>650</td>
                    <td className={"long1"}>100</td>
                    <td className={"long1"}>90</td>
                    <td className={"long1"}>60</td>
                  </tr>
                )}
                {kali1m1 && (
                  <tr>
                    <td className={"long"} style={{ paddingLeft: "30px" }}></td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      Arappalayam
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      10
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      10
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      10
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      10
                    </td>
                  </tr>
                )}
                {kali1m2 && (
                  <tr>
                    <td style={{ paddingLeft: "30px" }}></td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      Durai Samy Nagar,
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      25
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      10
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      10
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      10
                    </td>
                  </tr>
                )}
                {kali1m3 && (
                  <tr>
                    <td style={{ paddingLeft: "30px" }}></td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      Ellis Nagar
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      5
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      10
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      10
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      10
                    </td>
                  </tr>
                )}
                {kali1m4 && (
                  <tr>
                    <td style={{ paddingLeft: "30px" }}></td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      Gandhi Nagar
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      10
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      10
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      10
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      10
                    </td>
                  </tr>
                )}
                {kali1m5 && (
                  <tr>
                    <td style={{ paddingLeft: "30px" }}></td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      Mahapupalayam
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      20
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      10
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      10
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      10
                    </td>
                  </tr>
                )}
                {kali1m6 && (
                  <tr>
                    <td style={{ paddingLeft: "30px" }}></td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      K.Pudur
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      30
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      10
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      10
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      10
                    </td>
                  </tr>
                )}
                {pudu && (
                  <tr style={{ cursor: "pointer" }}>
                    <td onClick={puduchange}>+</td>
                    <td onClick={puduchange}>Puducherry(UT)</td>
                    <td onClick={puduchange}>1000</td>
                    <td onClick={puduchange}>600</td>
                    <td onClick={puduchange}>400</td>
                    <td onClick={puduchange}>100</td>
                  </tr>
                )}
                {puduh && (
                  <tr style={{ cursor: "pointer" }}>
                    <td onClick={puduhchange}>-</td>
                    <td onClick={puduhchange}>Puducherry(UT)</td>
                    <td onClick={puduhchange}>1000</td>
                    <td onClick={puduhchange}>600</td>
                    <td onClick={puduhchange}>400</td>
                    <td onClick={puduhchange}>100</td>
                  </tr>
                )}

                {pududata && (
                  <tr onClick={karaichn}>
                    <td className={"long1"}>+</td>
                    <td className={"long1"}>Karaikal</td>
                    <td className={"long1"}>300</td>
                    <td className={"long1"}>300</td>
                    <td className={"long1"}>300</td>
                    <td className={"long1"}>300</td>
                  </tr>
                )}
                {pududatak && (
                  <tr onClick={karaiunchn}>
                    <td className={"long1"}>-</td>
                    <td className={"long1"}>Karaikal</td>
                    <td className={"long1"}>300</td>
                    <td className={"long1"}>300</td>
                    <td className={"long1"}>300</td>
                    <td className={"long1"}>300</td>
                  </tr>
                )}
                {pududatak1 && (
                  <tr>
                    <td style={{ paddingLeft: "30px" }}></td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      Keezhakasakudy
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      30
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      10
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      10
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      10
                    </td>
                  </tr>
                )}
                {pududatak2 && (
                  <tr>
                    <td style={{ paddingLeft: "30px" }}></td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      Thalatheru
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      30
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      10
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      10
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      10
                    </td>
                  </tr>
                )}

                {pududatak3 && (
                  <tr>
                    <td style={{ paddingLeft: "30px" }}></td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      Karaikal
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      30
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      10
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      10
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      10
                    </td>
                  </tr>
                )}

                {pududatak4 && (
                  <tr>
                    <td style={{ paddingLeft: "30px" }}></td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      Dharmapuram
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      30
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      10
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      10
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      10
                    </td>
                  </tr>
                )}

                {pududatak5 && (
                  <tr>
                    <td style={{ paddingLeft: "30px" }}></td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      Koilpathu
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      30
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      10
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      10
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      10
                    </td>
                  </tr>
                )}

                {pududatak6 && (
                  <tr>
                    <td style={{ paddingLeft: "30px" }}></td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      Keezhaveli
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      30
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      10
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      10
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      10
                    </td>
                  </tr>
                )}

                {pududata1 && (
                  <tr onClick={yananmchn}>
                    <td className={"long1"}>+</td>
                    <td className={"long1"}>Yanam</td>
                    <td className={"long1"}>300</td>
                    <td className={"long1"}>300</td>
                    <td className={"long1"}>300</td>
                    <td className={"long1"}>100</td>
                  </tr>
                )}
                {pududata1y && (
                  <tr onClick={yanamchnun}>
                    <td className={"long1"}>-</td>
                    <td className={"long1"}>Yanam</td>
                    <td className={"long1"}>300</td>
                    <td className={"long1"}>300</td>
                    <td className={"long1"}>300</td>
                    <td className={"long1"}>100</td>
                  </tr>
                )}
                {pududata1y1 && (
                  <tr>
                    <td style={{ paddingLeft: "30px" }}></td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      Kanakalapeta
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      30
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      10
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      10
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      10
                    </td>
                  </tr>
                )}
                {pududata1y2 && (
                  <tr>
                    <td style={{ paddingLeft: "30px" }}></td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      Mettakuru North
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      30
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      10
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      10
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      10
                    </td>
                  </tr>
                )}
                {pududata1y3 && (
                  <tr>
                    <td style={{ paddingLeft: "30px" }}></td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      Mettakuru South
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      30
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      10
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      10
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      10
                    </td>
                  </tr>
                )}
                {pududata1y4 && (
                  <tr>
                    <td style={{ paddingLeft: "30px" }}></td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      Pillaraya
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      30
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      10
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      10
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      10
                    </td>
                  </tr>
                )}
                {pududata1y5 && (
                  <tr>
                    <td style={{ paddingLeft: "30px" }}></td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      Pedapudi
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      30
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      10
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      10
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      10
                    </td>
                  </tr>
                )}
                {pududata3 && (
                  <tr onClick={pondichn}>
                    <td className={"long1"}>+</td>
                    <td className={"long1"}>Puducherry</td>
                    <td className={"long1"}>450</td>
                    <td className={"long1"}>300</td>
                    <td className={"long1"}>300</td>
                    <td className={"long1"}>300</td>
                  </tr>
                )}
                {pududata3p && (
                  <tr onClick={pondiunchn}>
                    <td className={"long1"}>-</td>
                    <td className={"long1"}>Puducherry</td>
                    <td className={"long1"}>450</td>
                    <td className={"long1"}>300</td>
                    <td className={"long1"}>300</td>
                    <td className={"long1"}>300</td>
                  </tr>
                )}

                {pududata3p1 && (
                  <tr>
                    <td style={{ paddingLeft: "30px" }}></td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      Embalam
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      30
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      10
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      10
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      10
                    </td>
                  </tr>
                )}
                {pududata3p2 && (
                  <tr>
                    <td style={{ paddingLeft: "30px" }}></td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      Irumbai
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      30
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      10
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      10
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      10
                    </td>
                  </tr>
                )}

                {pududata3p3 && (
                  <tr>
                    <td style={{ paddingLeft: "30px" }}></td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      Karaikal Bazaar
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      30
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      10
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      10
                    </td>
                    <td className={"long"} style={{ paddingLeft: "50px" }}>
                      10
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {/* { show1 && (
          <div>
              <div className={menu.style} style={{ marginLeft: "-85px" ,overflow:"auto",marginTop:"-280px"}}>
          <CRow className={""}>
            <CCol md="12" lg="12" sm="12">
              <div>
                <span
                  style={{
                    fontSize: "21px",
                    fontWeight: "700",
                    fontFamily:"Arial, Helvetica, sans-serif",
                    marginLeft: "-30px",
                  }}
                >
                  District-Wise Data {" "}
                </span>
              </div>
            </CCol>
          </CRow>

          <CRow
                  className={"LengthDataw"}
                  style={{ marginLeft: "5px", marginTop: "20px" }}
                  sm={12}
                  md={12}
                  lg={12}
                >
                  <CCol md="6">
                    <CLabel className={"form-labels-9 col-md-5 reAssign-Label1"}>
                      State :{" "}
                    </CLabel>

                    <CLabel
                      className={"reAssign-Detail25"}
                      style={{ marginLeft: "10px" }}
                    >
                      {selected.assignedTo
                        ? selected.assignedTo.firstName
                        : "Tamilnadu"}
                    </CLabel>
                  </CCol>
                  <CCol md="6">
                    <CLabel className={"form-labels-9 col-md-5 reAssign-Label1"}>
                      District / City :{" "}
                    </CLabel>

                    <CLabel
                      className={"reAssign-Detail"}
                      style={{ marginLeft: "70px" }}
                    >
                      {selected.assignedTo
                        ? selected.assignedTo.firstName
                        : "Ariyalur"}
                    </CLabel>
                  </CCol>
                </CRow>               
                 <BootstrapTable
       keyField="id"        
        data={products3}        
        columns={columns1}
        expandRow={expandRow3}
      />
         

          <CButton
            style={{
              position: "absolute",
              top: "15px",
              right: "40px",
              backgroundColor: "green",
              border: "1px solid green",
            }}
            className={"cancelBtn"}
            onClick={() => {
              showcase();
            }}
          >
            Back
          </CButton>
        </div>                         
          </div>
      )} */}
    </>
  );
};

export default Form;
