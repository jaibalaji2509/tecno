import React, { useState } from "react";

import ProfileUi from "react-profile-card";

function FormMuni() {
    const [state, setState] = useState({ hide1: false });
    const [onFirst, setonFirst] = useState(true);
    const [onsecond, setonsecond] = useState(false);
    const [secon, setsecon] = useState(true);
    const [secon1, setsecon1] = useState(false);
    const [secondata, setsecondata] = useState(false);
    const [head, sethead] = useState(true);
    const [head1, sethead1] = useState(false);
    const [third, setthird] = useState(true);
    const [third1, setthird1] = useState(false);
    const [thirdata, setthirdata] = useState(false);
  
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
  
    const hanldeChange = () => {
      setState({ ...state, hide1: true });
      setonsecond(true);
      setonFirst(false);
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
    return (
        <>
      <table striped bordered hover>
        {head && (
          <thead>
            <tr onClick={kill} style={{ cursor: "pointer" }}>
              <th style={{ width: "10px" }}>+</th>
              <th>State</th>
              <th>District</th>
              <th>Name of the Municipality</th>
              <th>Area Name</th>
              <th>Ward Number</th>
              <th>Name of the Elected Member</th>
            </tr>
          </thead>
        )}
        {head1 && (
          <thead>
            <tr onClick={kill1} style={{ cursor: "pointer" }}>
              <th style={{ width: "10px" }}>-</th>
              <th>State</th>
              <th>District</th>
              <th>Name of the Municipality</th>
              <th>Area Name</th>
              <th>Ward Number</th>
              <th>Name of the Elected Member</th>
            </tr>
          </thead>
        )}
        <tbody>
          {onFirst && (
            <tr style={{ cursor: "pointer" }}>
              <td onClick={hanldeChange}>+</td>
              <td onClick={hanldeChange}>Tamilnadu</td>
              <td onClick={hanldeChange}>Chennai</td>
              <td onClick={hanldeChange}>Pallavaram</td>
              <td onClick={hanldeChange}>Tirusulam</td>
              <td onClick={hanldeChange}>17</td>
              <td onClick={hanldeChange}>Muthukumar</td>
            </tr>
          )}
          {onsecond && (
            <tr style={{ cursor: "pointer" }}>
              <td onClick={hanldeChange1}>-</td>
              <td onClick={hanldeChange1}>Tamilnadu</td>
              <td onClick={hanldeChange1}>Chennai</td>
              <td onClick={hanldeChange1}>Pallavaram</td>
              <td onClick={hanldeChange1}>Tirusulam</td>
              <td onClick={hanldeChange1}>17</td>
              <td onClick={hanldeChange1}>Muthukumar</td>
            </tr>
          )}
          {state.hide1 && (
            <tr className={"long1"}>
              <td></td>
              <td>
                <ProfileUi
                  imgUrl="https://img.icons8.com/metro/452/user-male.png"
                  name="Muthukumar"
                />
              </td>
              <td>
                <h3 className={"headname"}>Name</h3>
                <p className={"paraname"}> Gender: Male</p>
                <p className={"paraname"}> Katchup id:XXX...XXXX...XXX</p>
                <p className={"paraname"}>
                  Address:XXX, YYYYYYY, ZZZZZZZZZZZ, ---
                </p>
                <p className={"paraname"}>Phone:(+91)xxx xx xx xxx</p>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          )}

          {secon && (
            <tr style={{ cursor: "pointer" }}>
              <td onClick={hilk}>+</td>
              <td onClick={hilk}>Tamilnadu</td>
              <td onClick={hilk}>Chennai</td>
              <td onClick={hilk}>Tambaram</td>
              <td onClick={hilk}>Mudichur</td>
              <td onClick={hilk}>16</td>
              <td onClick={hilk}>ThiruMurthy</td>
            </tr>
          )}

          {secon1 && (
            <tr style={{ cursor: "pointer" }}>
              <td onClick={hilk1}>-</td>
              <td onClick={hilk1}>Tamilnadu</td>
              <td onClick={hilk1}>Chennai</td>
              <td onClick={hilk1}>Tambaram</td>
              <td onClick={hilk1}>Mudichur</td>
              <td onClick={hilk1}>16</td>
              <td onClick={hilk1}>ThiruMurthy</td>
            </tr>
          )}
          {secondata && (
            <tr className={"long1"}>
              <td></td>
              <td>
                <ProfileUi
                  imgUrl="https://img.icons8.com/metro/452/user-male.png"
                  name="ThiruMurthy"
                />
              </td>
              <td>
                {" "}
                <h3 className={"headname"}>Name</h3>
                <p className={"paraname"}> Gender: Male</p>
                <p className={"paraname"}> Katchup id:XXX...XXXX...XXX</p>
                <p className={"paraname"}>
                  Address:XXX, YYYYYYY, ZZZZZZZZZZZ, ---
                </p>
                <p className={"paraname"}>Phone:(+91)xxx xx xx xxx</p>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          )}
          {third && (
            <tr style={{ cursor: "pointer" }}>
              <td onClick={hulk}>+</td>
              <td onClick={hulk}>Tamilnadu</td>
              <td onClick={hulk}>Chennai</td>
              <td onClick={hulk}>Perungalathur</td>
              <td onClick={hulk}>Vandalur</td>
              <td onClick={hulk}>0011</td>
              <td onClick={hulk}>RajNidhi</td>
            </tr>
          )}

          {third1 && (
            <tr style={{ cursor: "pointer" }}>
              <td onClick={hulk1}>-</td>
              <td onClick={hulk1}>Tamilnadu</td>
              <td onClick={hulk1}>Chennai</td>
              <td onClick={hulk1}>Perungalathur</td>
              <td onClick={hulk1}>Vandalur</td>
              <td onClick={hulk1}>0011</td>
              <td onClick={hulk1}>RajNidhi</td>
            </tr>
          )}
          {thirdata && (
            <tr className={"long1"}>
              <td></td>
              <td>
                <ProfileUi
                  imgUrl="https://img.icons8.com/metro/452/user-male.png"
                  name="RajNidhi"
                />
              </td>
              <td>
                <h3 className={"headname"}>Name</h3>
                <p className={"paraname"}> Gender: Male</p>
                <p className={"paraname"}> Katchup id:XXX...XXXX...XXX</p>
                <p className={"paraname"}>
                  Address:XXX, YYYYYYY, ZZZZZZZZZZZ, ---
                </p>
                <p className={"paraname"}>Phone:(+91)xxx xx xx xxx</p>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          )}
        </tbody>
      </table>
    </>
    )
}

export default FormMuni
