import React, { useState } from "react";

import ProfileUi from "react-profile-card";

function Formstate() {
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
  }
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
  }

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
    <div>
      <table striped bordered hover>
      { head && (   
        <thead>
          <tr onClick={kill} style={{cursor:"pointer"}}>
            <th style={{width:"10px"}}>+</th>    
            <th>State</th>        
            <th>Portfolios / Department</th>
            <th>Name</th>
          </tr>
        </thead>
      )}
 { head1 && (   
<thead>
          <tr onClick={kill1} style={{cursor:"pointer"}}>
          <th style={{width:"10px"}}>-</th>    
            <th>State</th>        
            <th>Portfolios / Department</th>
            <th>Name</th>
          </tr>
        </thead>
 )}
        <tbody>
          {onFirst && (
            <tr style={{ cursor: "pointer" }}>
              <td onClick={hanldeChange}>+</td>
              <td onClick={hanldeChange}>Tamilnadu</td>
              <td onClick={hanldeChange}>Chief Minister</td>
              <td onClick={hanldeChange}>
                Thiru M.K.Stalin Hon. Chief Minister
              </td>
            </tr>
          )}
          {onsecond && (
            <tr style={{ cursor: "pointer" }}>
              <td onClick={hanldeChange1}>-</td>
              <td onClick={hanldeChange1}>Tamilnadu</td>             
              <td onClick={hanldeChange1}>Chief Minister</td>
              <td onClick={hanldeChange1}>
                Thiru M.K.Stalin Hon. Chief Minister
              </td>
            </tr>
          )}
          {state.hide1 && (
         <tr className={"long1"}>     
              <td></td>
              <td>
                <ProfileUi
                  imgUrl="http://www.assembly.tn.gov.in/images/013.jpg"
                  name="Thiru M.K.Stalin"
                />
              </td>           
              <td>
                Public, General Administration, Indian Administrative Service,
                Indian Police Service, Indian Forest Service, Other All India
                Service, District Revenue Officers, Police, Home, Special
                Initiatives, Special Programme Implementation, Welfare of
                Differently abled persons.
              </td>                          
              <td></td>   
            </tr>
          )}

          {secon && (
            <tr style={{ cursor: "pointer" }}>
              <td onClick={hilk}>+</td>
             <td onClick={hilk}>Tamilnadu</td>
              <td onClick={hilk}>Municipal Administration</td>
              <td onClick={hilk}>Thiru K.N.Nehru</td>
            </tr>
          )}

          {secon1 && (
           <tr style={{ cursor: "pointer" }}>
           <td onClick={hilk1}>-</td>
          <td onClick={hilk1}>Tamilnadu</td>
           <td onClick={hilk1}>Municipal Administration</td>
           <td onClick={hilk1}>Thiru K.N.Nehru</td>
         </tr>
          )}
          {secondata && (
           <tr className={"long1"}>
              <td></td>             
              <td>
                <ProfileUi
                  imgUrl="http://www.assembly.tn.gov.in/images/140.jpg"
                  name="Thiru K.N.Nehru"
                />
              </td>
              <td>Municipal Administration, Urban and Water Supply.</td>
              <td></td>               
            </tr>
          )}
           {third && (
            <tr style={{ cursor: "pointer" }}>
              <td onClick={hulk}>+</td>
             <td onClick={hulk}>Tamilnadu</td>
              <td onClick={hulk}>Minister for Higher Education</td>
              <td onClick={hulk}>Thiru K.N.Nehru</td>
            </tr>
          )}

           {third1 && (
           <tr style={{ cursor: "pointer" }}>
           <td onClick={hulk1}>-</td>
          <td onClick={hulk1}>Tamilnadu</td>
           <td onClick={hulk1}>Minister for Higher Education</td>
           <td onClick={hulk1}>Thiru K.Ponmudi</td>
         </tr>
          )}
          {thirdata && (
            <tr className={"long1"}>
              <td></td>             
              <td>
                <ProfileUi
                  imgUrl="http://www.assembly.tn.gov.in/images/076.jpg"
                  name="Thiru K.N.Nehru"
                />
              </td>
              <td>Municipal Administration, Urban and Water Supply.</td>
              <td></td> 
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Formstate;
