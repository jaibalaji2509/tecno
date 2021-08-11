import React, { useState } from "react";

import ProfileUi from "react-profile-card";

function HeadParty() {
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
                      <th>Department</th>                     
                      <th>Party Posting</th>
                      <th>Role</th>              
                      <th>Name of the Elected Member</th>
                    </tr>
                  </thead>
                )}
                {head1 && (
                  <thead>
                    <tr onClick={kill1} style={{ cursor: "pointer" }}>
                      <th style={{ width: "10px" }}>-</th>
                      <th>Sno.</th>
                      <th>Department</th>                     
                      <th>Party Posting</th>
                      <th>Role</th>              
                      <th>Name of the Elected Member</th>
                    </tr>
                  </thead>
                )}
                <tbody>
                  {onFirst && (
                    <tr style={{ cursor: "pointer" }}>
                      <td onClick={hanldeChange}>+</td>
                      <th>1.</th>
                      <td onClick={hanldeChange}>Administration</td>
                      <td onClick={hanldeChange}>Party President</td>
                      <td onClick={hanldeChange}>-</td>              
                      <td onClick={hanldeChange}>M Rani</td>
                    </tr>
                  )}
                  {onsecond && (
                    <tr style={{ cursor: "pointer" }}>
                      <td onClick={hanldeChange1}>-</td>
                      <th>1.</th>
                      <td onClick={hanldeChange1}>Administration</td>
                      <td onClick={hanldeChange1}>Party President</td>
                      <td onClick={hanldeChange1}>-</td>              
                      <td onClick={hanldeChange1}>M Rani</td>
                    </tr>
                  )}
                  {state.hide1 && (
                    <tr className={"long1"}>
                      <td></td>
                      <td></td>
                      <td>
                        <ProfileUi
                          imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEnTfypxGm7QirEg2lvAIMH6JxuvZvLWdXyA&usqp=CAU"
                          name="M Rani"
                        />
                      </td>
                      <td>
                        <h3 className={"headname"}>M Rani</h3>
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
                      <td onClick={hilk}>Legal Section</td>
                      <td onClick={hilk}>Party Secretary</td>              
                      <td onClick={hilk}>-</td>              
                      <td onClick={hilk}>E Saravanan</td>
                    </tr>
                  )}
        
                  {secon1 && (
                    <tr style={{ cursor: "pointer" }}>
                      <td onClick={hilk1}>-</td>
                      <th>2.</th>
                      <td onClick={hilk1}>Legal Section</td>
                      <td onClick={hilk1}>Party Secretary</td>           
                      <td onClick={hilk1}>-</td>              
                      <td onClick={hilk1}>E Saravanan</td>
                    </tr>
                  )}
                  {secondata && (
                    <tr className={"long1"}>
                      <td></td>
                      <td></td>
                      <td>
                        <ProfileUi
                          imgUrl="https://img.icons8.com/metro/452/user-male.png"
                          name="E Saravanan"
                        />
                      </td>
                      <td>
                        {" "}
                        <h3 className={"headname"}>E Saravanan</h3>
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
                      <td onClick={hulk}>Resources Section</td>
                      <td onClick={hulk}>Cabinet Secretary</td>
                      <td onClick={hulk}>-</td>            
                      <td onClick={hulk}>S Meera</td>
                    </tr>
                  )}
        
                  {third1 && (
                    <tr style={{ cursor: "pointer" }}>
                      <td onClick={hulk1}>-</td>
                      <th>3.</th>
                      <td onClick={hulk1}>Resources Section</td>
                      <td onClick={hulk1}>Cabinet Secretary</td>
                      <td onClick={hulk1}>-</td>             
                      <td onClick={hulk1}>S Meera</td>
                    </tr>
                  )}
                  {thirdata && (
                    <tr className={"long1"}>
                      <td></td>
                      <td></td>
                      <td>
                        <ProfileUi
                          imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEnTfypxGm7QirEg2lvAIMH6JxuvZvLWdXyA&usqp=CAU"
                          name="S Meera"
                        />
                      </td>
                      <td>
                        <h3 className={"headname"}>S Meera</h3>
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

export default HeadParty
