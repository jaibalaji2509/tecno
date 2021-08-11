import React, { useState } from "react";

import ProfileUi from "react-profile-card";

function FormCentral() {
  const [state, setState] = useState({ hide1: false });
  const [onFirst, setonFirst] = useState(true);
  const [onsecond, setonsecond] = useState(false);
  const [secon, setsecon] = useState(true);
  const [third, setthird] = useState(true);
  const [secon1, setsecon1] = useState(false);
  const [third1, setthird1] = useState(false);
  const [thirdata, setthirdata] = useState(false);
  const [secondata, setsecondata] = useState(false);
  const [head, sethead] = useState(true);
  const [head1, sethead1] = useState(false);
  const hanldeChange = () => {
    setState({ ...state, hide1: true });
    setonsecond(true);
    setonFirst(false);
  };

  const hanldeChange1 = () => {
    setonsecond(false);
    setonFirst(true);
    setState({ ...state, hide1: false });
  };

  const hilk = () => {
    setsecon(false);
    setsecondata(true);
    setsecon1(true);
  };
  const hilk1 = () => {
    setsecon(true);
    setsecondata(false);
    setsecon1(false);
  };
  const hulk = () => {
    setthird(false);
    setthirdata(true);
    setthird1(true);
  };

  const hulk1 = () => {
    setthird(true);
    setthirdata(false);
    setthird1(false);
  };

  const kill = () => {
    setState({ ...state, hide1: true });
    setonsecond(true);
    setonFirst(false);
    setsecon(false);
    setsecondata(true);
    setsecon1(true);
    setthird(false);
    setthirdata(true);
    setthird1(true);
    sethead(false);
    sethead1(true);
  };
  const kill1 = () => {
    setState({ ...state, hide1: false });
    setonsecond(false);
    setonFirst(true);
    setsecon(true);
    setsecondata(false);
    setsecon1(false);
    setthird(true);
    setthirdata(false);
    setthird1(false);
    sethead(true);
    sethead1(false);
  };

  return (
    <div>
      <table striped bordered hover>
        {head && (
          <thead>
            <tr onClick={kill} style={{ cursor: "pointer" }}>
              <th>+</th>
              <th>Name of the Ministry</th>
              <th>Name of the Minister</th>
              <th>Constituency</th>
            </tr>
          </thead>
        )}
        {head1 && (
          <thead>
            <tr onClick={kill1} style={{ cursor: "pointer" }}>
              <th>-</th>
              <th>Name of the Ministry</th>
              <th>Name of the Minister</th>
              <th>Constituency</th>
            </tr>
          </thead>
        )}
        <tbody>
          {onFirst && (
            <tr style={{ cursor: "pointer" }}>
              <td onClick={hanldeChange}>+</td>
              <td onClick={hanldeChange}>Union Cabinet Minister,</td>
              <td onClick={hanldeChange}>Dayanidhi Maran</td>
              <td onClick={hanldeChange}>Chennai Central</td>
            </tr>
          )}
          {onsecond && (
            <tr style={{ cursor: "pointer" }}>
              <td onClick={hanldeChange1}>-</td>
              <td onClick={hanldeChange1}>Union Cabinet Minister,</td>
              <td onClick={hanldeChange1}>Dayanidhi  Maran</td>
              <td onClick={hanldeChange1}>Chennai Central</td>
            </tr>
          )}
          {state.hide1 && (
            <tr>             
              <td></td>
              <td></td>
              <td>
                <ProfileUi
                  imgUrl="http://loksabhadocs.nic.in/mpimage/photo/4144.jpg"
                  name="Dayanidhi Maran"
                />
              </td>
              <td>             
              <h3 className={"headname"}> Dayanidhi Maran</h3>
                  <p className={"paraname"}> Katchup id:XXX...XXXX...XXX</p>
                  <p className={"paraname"}>
                    Address:XXX, YYYYYYY, ZZZZZZZZZZZ, ---
                  </p>
                  <p className={"paraname"}>Phone:(+91)xxx xx xx xxx</p>
              </td>
            </tr>
          )}

          {secon && (
            <tr style={{ cursor: "pointer" }}>
              <td onClick={hilk}>+</td>
             
              <td onClick={hilk}> Ministry of Chemicals and Fertlisers</td>
              <td onClick={hilk}>MK Alagiri</td>
              <td onClick={hilk}>Madurai</td>
             
            </tr>
          )}

          {secon1 && (
            <tr style={{ cursor: "pointer" }}>
              <td onClick={hilk1}>-</td>
              
              <td onClick={hilk1}> Ministry of Chemicals and Fertlisers</td>
              <td onClick={hilk1}>MK Alagiri</td>
              <td onClick={hilk1}>Madurai</td>
            
            </tr>
          )}
          {secondata && (
            <tr>
              <td></td>
              <td></td>
              <td>
                <ProfileUi
                  imgUrl="data:image/jpeg;base64,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"
                  name="MK Alagiri"
                />
              </td>
              <td>             
              <h3 className={"headname"}>MK Alagiri</h3>
                  <p className={"paraname"}> Katchup id:XXX...XXXX...XXX</p>
                  <p className={"paraname"}>
                    Address:XXX, YYYYYYY, ZZZZZZZZZZZ, ---
                  </p>
                  <p className={"paraname"}>Phone:(+91)xxx xx xx xxx</p>
              </td>
            </tr>
          )}
          {third && (
            <tr style={{ cursor: "pointer" }}>
              <td onClick={hulk}>+</td>
           
              <td onClick={hulk}>Minister of State, Finance</td>
              <td onClick={hulk}>SS Palanimanickam</td>
              <td onClick={hulk}>THANJAVUR </td>
             
            </tr>
          )}

          {third1 && (
            <tr style={{ cursor: "pointer" }}>
              <td onClick={hulk1}>-</td>             
              <td onClick={hulk1}>Minister of State, Finance</td>
              <td onClick={hulk1}>SS Palanimanickam</td>
              <td onClick={hulk1}>THANJAVUR </td>              
            </tr>
          )}
          {thirdata && (
            <tr>
              <td></td>
              <td></td>
              <td>
                <ProfileUi
                  imgUrl="https://imgk.timesnownews.com/story/1557756433-Thanjavur_TN.jpg?tr=w-1200,h-900"
                  name="SS Palanimanickam"
                />
              </td>
              <td>             
              <h3 className={"headname"}>SS Palanimanickam</h3>
                  <p className={"paraname"}> Katchup id:XXX...XXXX...XXX</p>
                  <p className={"paraname"}>
                    Address:XXX, YYYYYYY, ZZZZZZZZZZZ, ---
                  </p>
                  <p className={"paraname"}>Phone:(+91)xxx xx xx xxx</p>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default FormCentral;
