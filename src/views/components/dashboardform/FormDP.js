import React, { useState } from "react";

import ProfileUi from "react-profile-card";

function FormDP() {
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
              <th>Sno.</th>
              <th>State</th>
              <th>District</th>
              <th>District Panchayat Ward Number</th>              
              <th>Name of the Elected Member</th>
            </tr>
          </thead>
        )}
        {head1 && (
          <thead>
            <tr onClick={kill1} style={{ cursor: "pointer" }}>
              <th style={{ width: "10px" }}>-</th>
              <th>Sno.</th>
              <th>State</th>
              <th>District</th>
              <th>District Panchayat Ward Number</th>              
              <th>Name of the Elected Member</th>
            </tr>
          </thead>
        )}
        <tbody>
          {onFirst && (
            <tr style={{ cursor: "pointer" }}>
              <td onClick={hanldeChange}>+</td>
              <th>1.</th>
              <td onClick={hanldeChange}>Tamilnadu</td>
              <td onClick={hanldeChange}>Ariyalur</td>
              <td onClick={hanldeChange}>Ariyalur Ward no.12</td>              
              <td onClick={hanldeChange}>J Geetha</td>
            </tr>
          )}
          {onsecond && (
            <tr style={{ cursor: "pointer" }}>
              <td onClick={hanldeChange1}>-</td>
              <th>1.</th>
              <td onClick={hanldeChange1}>Tamilnadu</td>
              <td onClick={hanldeChange1}>Ariyalur</td>
              <td onClick={hanldeChange1}>Ariyalur Ward no.12</td>              
              <td onClick={hanldeChange1}>J Geetha</td>
            </tr>
          )}
          {state.hide1 && (
            <tr className={"long1"}>
              <td></td>
              <td></td>
              <td>
                <ProfileUi
                  imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEnTfypxGm7QirEg2lvAIMH6JxuvZvLWdXyA&usqp=CAU"
                  name="J Geetha"
                />
              </td>
              <td>
                <h3 className={"headname"}>J Geetha</h3>
                <p className={"paraname"}> Gender: Female</p>
                <p className={"paraname"}> Katchup id:</p>
                <p className={"paraname"}>
                  Address:
                </p>
                <p className={"paraname"}>Phone:(+91)xxx xx xx xxx</p>
              </td>
              <td></td>
              <td></td>             
            </tr>
          )}      
             {secon && (
            <tr style={{ cursor: "pointer" }}>
              <td onClick={hilk}>+</td>
              <th>2.</th>
              <td onClick={hilk}>Tamilnadu</td>
              <td onClick={hilk}>Madurai</td>              
              <td onClick={hilk}>Madurai Ward no.13</td>              
              <td onClick={hilk}>Thangam</td>
            </tr>
          )}

          {secon1 && (
            <tr style={{ cursor: "pointer" }}>
              <td onClick={hilk1}>-</td>
              <th>2.</th>
              <td onClick={hilk1}>Tamilnadu</td>
              <td onClick={hilk1}>Madurai</td>           
              <td onClick={hilk1}>Madurai Ward no.13</td>              
              <td onClick={hilk1}>Thangam</td>
            </tr>
          )}
          {secondata && (
            <tr className={"long1"}>
              <td></td>
              <td></td>
              <td>
                <ProfileUi
                  imgUrl="https://img.icons8.com/metro/452/user-male.png"
                  name="Thangam"
                />
              </td>
              <td>
                {" "}
                <h3 className={"headname"}>Thangam</h3>
                <p className={"paraname"}> Gender: Male</p>
                <p className={"paraname"}> Katchup id:</p>
                <p className={"paraname"}>
                  Address:
                </p>
                <p className={"paraname"}>Phone:(+91)xxx xx xx xxx</p>
              </td>
              <td></td>
              <td></td>              
            </tr>
          )}
          {third && (
            <tr style={{ cursor: "pointer" }}>
              <td onClick={hulk}>+</td>
              <th>3.</th>
              <td onClick={hulk}>Tamilnadu</td>
              <td onClick={hulk}>Tuticorin</td>
              <td onClick={hulk}>Tuticorin Ward No 15</td>            
              <td onClick={hulk}>A Bhramasakthi</td>
            </tr>
          )}

          {third1 && (
            <tr style={{ cursor: "pointer" }}>
              <td onClick={hulk1}>-</td>
              <th>3.</th>
              <td onClick={hulk1}>Tamilnadu</td>
              <td onClick={hulk1}>Tuticorin</td>
              <td onClick={hulk1}>Tuticorin Ward No 15</td>             
              <td onClick={hulk1}>A Bhramasakthi</td>
            </tr>
          )}
          {thirdata && (
            <tr className={"long1"}>
              <td></td>
              <td></td>
              <td>
                <ProfileUi
                  imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEnTfypxGm7QirEg2lvAIMH6JxuvZvLWdXyA&usqp=CAU"
                  name="A Bhramasakthi"
                />
              </td>
              <td>
                <h3 className={"headname"}>A Bhramasakthi</h3>
                <p className={"paraname"}> Gender: Female</p>
                <p className={"paraname"}> Katchup id:</p>
                <p className={"paraname"}>
                  Address:
                </p>
                <p className={"paraname"}>Phone:(+91)xxx xx xx xxx</p>
              </td>
              <td></td>
              <td></td>            
            </tr>
          )}   
        </tbody>
      </table>
        </>
    )
}

export default FormDP
