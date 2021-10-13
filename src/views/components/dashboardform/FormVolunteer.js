import React, { useState } from "react";
import {
  CCol,
  CContainer,
  CLabel,
  CRow,
} from "@coreui/react";
import Select from "react-select";
import ProfileUi from "react-profile-card";

function FormVolunteer() {
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

  const [table, setTable] = useState(false);
  const [table1, setTable1] = useState(false);
  const [table2, setTable2] = useState(false);
  const [table3, setTable3] = useState(false);
  const select = [{value:"head", label:"Head Office"},{value:"district", label:"District Office"},{value:"circle", label:"Circle Office"},{value:"division", label:"Division Office"},]

  const officeselect = (e) =>{
    if(e.value==="head"){
        setTable(true);
        setTable1(false);
        setTable2(false);
        setTable3(false);
    }
    if(e.value==="district"){
        setTable(false);
        setTable1(true);
        setTable2(false);
        setTable3(false);
    }
    if(e.value==="circle"){
        setTable(false);
        setTable1(false);
        setTable2(true);
        setTable3(false);
    }
    if(e.value==="division"){
        setTable(false);
        setTable1(false);
        setTable2(false);
        setTable3(true);
    }
}
    
return (
    <>
    
      <CRow sm="12" md="12" lg="12">
        <CCol>
          <CContainer>
            <CRow sm="12" md="12" lg="12" style={{ padding: "10px 0px" }}>
              <CCol md="6">
                <CLabel>
                  <b>Type of Office</b>
                </CLabel>
                <Select options={select} onChange={officeselect}/>
              </CCol>
            </CRow>
          </CContainer>
        </CCol>
      </CRow>

      { table && (
      <table striped bordered hover className={"low"}>
        {head && (
          <thead>
            <tr onClick={kill} style={{ cursor: "pointer" }}>
              <th style={{ width: "10px" }}>+</th>
              <th>Sno.</th>
              <th>Type of Party Wings Office</th>
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
              <th>Type of Party Wings Office</th>
              <th>Department</th>
              <th>Party Posting</th>
              <th>Role</th>
              <th>Name of the Elected Member</th>
            </tr>
          </thead>
        )}
        <tbody>
          {onFirst && (
            <tr style={{ cursor: "pointer" }} onClick={hanldeChange}>
              <td onClick={hanldeChange}>+</td>
              <th>1.</th>
              <td>Head Office</td>             
              <td onClick={hanldeChange}>Administration</td>
              <td >President of Volunteer Team</td>
              <td onClick={hanldeChange}>Role 1</td>
              <td onClick={hanldeChange}>D Masilamani</td>
            </tr>
          )}
          {onsecond && (
            <tr style={{ cursor: "pointer" }} onClick={hanldeChange1}>
              <td onClick={hanldeChange1}>-</td>
              <th>1.</th>
              <td>Head Office</td>             
              <td onClick={hanldeChange1}>Administration</td>
              <td >President of Volunteer Team</td>
              <td onClick={hanldeChange1}>Role 1</td>
              <td onClick={hanldeChange1}>D Masilamani</td>
            </tr>
          )}
          {state.hide1 && (
            <tr className={"long1"}>
              <td></td>
              <td></td>
              <td>
                <ProfileUi
                  imgUrl="https://img.icons8.com/metro/452/user-male.png"
                  name="D Masilamani"
                />
              </td>
              <td>
                <h3 className={"headname"}>D Masilamani</h3>
                <p className={"paraname"}> Gender: Male</p>
                <p className={"paraname"}> Katchup id:</p>
                <p className={"paraname"}>Address:</p>
                <p className={"paraname"}>Phone:(+91)xxx xx xx xxx</p>
              </td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          )}
          {secon && (
            <tr style={{ cursor: "pointer" }} onClick={hilk}>
              <td onClick={hilk}>+</td>
              <th>2.</th>
              <td>Head Office</td>
              <td onClick={hilk}>Administartion</td>
              <td onClick={hilk}>Vice-President</td>
              <td onClick={hilk}>Role 2</td>
              <td onClick={hilk}>SP Saravanan</td>
            </tr>
          )}
          {secon1 && (
            <tr style={{ cursor: "pointer" }} onClick={hilk1}>
              <td onClick={hilk1}>-</td>
              <th>2.</th>
              <td>Head Office</td>
              <td onClick={hilk1}>Administartion</td>
              <td onClick={hilk1}>Vice-President</td>
              <td onClick={hilk1}>Role 2</td>
              <td onClick={hilk1}>SP Saravanan</td>
            </tr>
          )}
          {secondata && (
            <tr className={"long1"}>
              <td></td>
              <td></td>
              <td>
                <ProfileUi
                  imgUrl="https://img.icons8.com/metro/452/user-male.png"
                  name="S P Saravanan"
                />
              </td>
              <td>
                {" "}
                <h3 className={"headname"}>S P Saravanan</h3>
                <p className={"paraname"}> Gender: Male</p>
                <p className={"paraname"}> Katchup id:</p>
                <p className={"paraname"}>Address:</p>
                <p className={"paraname"}>Phone:(+91)xxx xx xx xxx</p>
              </td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          )}
          {third && (
            <tr style={{ cursor: "pointer" }} onClick={hulk}>
              <td onClick={hulk}>+</td>
              <th>3.</th>
              <td>Head Office</td>
              <td onClick={hulk}>Administartion</td>
              <td onClick={hulk}>Vice-President</td>
              <td onClick={hulk}>Role 3</td>
              <td onClick={hulk}>G Sugumaran</td>
            </tr>
          )}
          {third1 && (
            <tr style={{ cursor: "pointer" }} onClick={hulk1}>
              <td onClick={hulk1}>-</td>
              <th>3.</th>
              <td>Head Office</td>
              <td onClick={hulk1}>Administartion</td>
              <td onClick={hulk1}>Vice-President</td>
              <td onClick={hulk1}>Role 3</td>
              <td onClick={hulk1}>G Sugumaran</td>
            </tr>
          )}
          {thirdata && (
            <tr className={"long1"}>
              <td></td>
              <td></td>
              <td>
                <ProfileUi
                  imgUrl="https://img.icons8.com/metro/452/user-male.png"
                  name="G Sugumaran"
                />
              </td>
              <td>
                <h3 className={"headname"}>G Sugumaran</h3>
                <p className={"paraname"}> Gender: Female</p>
                <p className={"paraname"}> Katchup id:</p>
                <p className={"paraname"}>Address:</p>
                <p className={"paraname"}>Phone:(+91)xxx xx xx xxx</p>
              </td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          )}         
        </tbody>
      </table>
)}

 { table1 && (
      <table striped bordered hover className={"low"}>
        {head && (
          <thead>
            <tr onClick={kill} style={{ cursor: "pointer" }}>
              <th style={{ width: "10px" }}>+</th>
              <th>Sno.</th>
              <th>Type of Party Wings Office</th>
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
              <th>Type of Party Wings Office</th>
              <th>Department</th>
              <th>Party Posting</th>
              <th>Role</th>
              <th>Name of the Elected Member</th>
            </tr>
          </thead>
        )}
        <tbody>
          {onFirst && (
            <tr style={{ cursor: "pointer" }} onClick={hanldeChange}>
              <td onClick={hanldeChange}>+</td>
              <th>1.</th>
              <td>District Office</td>             
              <td onClick={hanldeChange}>Administration</td>
              <td >President</td>
              <td onClick={hanldeChange}>Role 1</td>
              <td onClick={hanldeChange}>T Masilamani</td>
            </tr>
          )}
          {onsecond && (
            <tr style={{ cursor: "pointer" }} onClick={hanldeChange1}>
              <td onClick={hanldeChange1}>-</td>
              <th>1.</th>
              <td>District Office</td>
              <td onClick={hanldeChange1}>Administration,</td>
              <td onClick={hanldeChange1}>President</td>
              <td onClick={hanldeChange1}>Role 1</td>
              <td onClick={hanldeChange1}>T Masilamani</td>
            </tr>
          )}
          {state.hide1 && (
            <tr className={"long1"}>
              <td></td>
              <td></td>
              <td>
                <ProfileUi
                  imgUrl="https://img.icons8.com/metro/452/user-male.png"
                  name="T Masilamani"
                />
              </td>
              <td>
                <h3 className={"headname"}>T Masilamani</h3>
                <p className={"paraname"}> Gender: Male</p>
                <p className={"paraname"}> Katchup id:</p>
                <p className={"paraname"}>Address:</p>
                <p className={"paraname"}>Phone:(+91)xxx xx xx xxx</p>
              </td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          )}
          {secon && (
            <tr style={{ cursor: "pointer" }} onClick={hilk}>
              <td onClick={hilk}>+</td>
              <th>2.</th>
              <td>District Office</td>
              <td onClick={hilk}>Administartion</td>
              <td onClick={hilk}>Vice-President</td>
              <td onClick={hilk}>Role 2</td>
              <td onClick={hilk}>SP Saravanan</td>
            </tr>
          )}
          {secon1 && (
            <tr style={{ cursor: "pointer" }} onClick={hilk1}>
              <td onClick={hilk1}>-</td>
              <th>2.</th>
              <td>District Office</td>
              <td onClick={hilk1}>Administartion</td>
              <td onClick={hilk1}>Vice-President</td>
              <td onClick={hilk1}>Role 2</td>
              <td onClick={hilk1}>SP Saravanan</td>
            </tr>
          )}
          {secondata && (
            <tr className={"long1"}>
              <td></td>
              <td></td>
              <td>
                <ProfileUi
                  imgUrl="https://img.icons8.com/metro/452/user-male.png"
                  name="SP Saravanan"
                />
              </td>
              <td>
                {" "}
                <h3 className={"headname"}>SP Saravanan</h3>
                <p className={"paraname"}> Gender: Male</p>
                <p className={"paraname"}> Katchup id:</p>
                <p className={"paraname"}>Address:</p>
                <p className={"paraname"}>Phone:(+91)xxx xx xx xxx</p>
              </td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          )}
          {third && (
            <tr style={{ cursor: "pointer" }} onClick={hulk}>
              <td onClick={hulk}>+</td>
              <th>3.</th>
              <td>District Office</td>
              <td onClick={hulk}>Administartion</td>
              <td onClick={hulk}>Vice-President</td>
              <td onClick={hulk}>Role 3</td>
              <td onClick={hulk}>G Sugumaran</td>
            </tr>
          )}
          {third1 && (
            <tr style={{ cursor: "pointer" }} onClick={hulk1}>
              <td onClick={hulk1}>-</td>
              <th>3.</th>
              <td>District Office</td>
              <td onClick={hulk1}>Administartion</td>
              <td onClick={hulk1}>Vice-President</td>
              <td onClick={hulk1}>Role 3</td>
              <td onClick={hulk1}>G Sugumaran</td>
            </tr>
          )}
          {thirdata && (
            <tr className={"long1"}>
              <td></td>
              <td></td>
              <td>
                <ProfileUi
                  imgUrl="https://img.icons8.com/metro/452/user-male.png"
                  name="G Sugumaran"
                />
              </td>
              <td>
                <h3 className={"headname"}>G Sugumaran</h3>
                <p className={"paraname"}> Gender: Female</p>
                <p className={"paraname"}> Katchup id:</p>
                <p className={"paraname"}>Address:</p>
                <p className={"paraname"}>Phone:(+91)xxx xx xx xxx</p>
              </td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          )}         
        </tbody>
      </table>
)}

 { table2 && (
      <table striped bordered hover className={"low"}>
        {head && (
          <thead>
            <tr onClick={kill} style={{ cursor: "pointer" }}>
              <th style={{ width: "10px" }}>+</th>
              <th>Sno.</th>
              <th>Type of Party Wings Office</th>
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
              <th>Type of Party Wings Office</th>
              <th>Department</th>
              <th>Party Posting</th>
              <th>Role</th>
              <th>Name of the Elected Member</th>
            </tr>
          </thead>
        )}
        <tbody>
          {onFirst && (
            <tr style={{ cursor: "pointer" }} onClick={hanldeChange}>
              <td onClick={hanldeChange}>+</td>
              <th>1.</th>
              <td>Circle Office</td>             
              <td onClick={hanldeChange}>Administration</td>
              <td >President</td>
              <td onClick={hanldeChange}>Role 1</td>
              <td onClick={hanldeChange}>T Masilamani</td>
            </tr>
          )}
          {onsecond && (
            <tr style={{ cursor: "pointer" }} onClick={hanldeChange1}>
              <td onClick={hanldeChange1}>-</td>
              <th>1.</th>
              <td>Circle Office</td>
              <td onClick={hanldeChange1}>Administration,</td>
              <td onClick={hanldeChange1}>President</td>
              <td onClick={hanldeChange1}>Role 1</td>
              <td onClick={hanldeChange1}>T Masilamani</td>
            </tr>
          )}
          {state.hide1 && (
            <tr className={"long1"}>
              <td></td>
              <td></td>
              <td>
                <ProfileUi
                  imgUrl="https://img.icons8.com/metro/452/user-male.png"
                  name="T Masilamani"
                />
              </td>
              <td>
                <h3 className={"headname"}>T Masilamani</h3>
                <p className={"paraname"}> Gender: Male</p>
                <p className={"paraname"}> Katchup id:</p>
                <p className={"paraname"}>Address:</p>
                <p className={"paraname"}>Phone:(+91)xxx xx xx xxx</p>
              </td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          )}
          {secon && (
            <tr style={{ cursor: "pointer" }} onClick={hilk}>
              <td onClick={hilk}>+</td>
              <th>2.</th>
              <td>Circle Office</td>
              <td onClick={hilk}>Administartion</td>
              <td onClick={hilk}>Vice-President</td>
              <td onClick={hilk}>Role 2</td>
              <td onClick={hilk}>SP Saravanan</td>
            </tr>
          )}
          {secon1 && (
            <tr style={{ cursor: "pointer" }} onClick={hilk1}>
              <td onClick={hilk1}>-</td>
              <th>2.</th>
              <td>Circle Office</td>
              <td onClick={hilk1}>Administartion</td>
              <td onClick={hilk1}>Vice-President</td>
              <td onClick={hilk1}>Role 2</td>
              <td onClick={hilk1}>SP Saravanan</td>
            </tr>
          )}
          {secondata && (
            <tr className={"long1"}>
              <td></td>
              <td></td>
              <td>
                <ProfileUi
                  imgUrl="https://img.icons8.com/metro/452/user-male.png"
                  name="SP Saravanan"
                />
              </td>
              <td>
                {" "}
                <h3 className={"headname"}>SP Saravanan</h3>
                <p className={"paraname"}> Gender: Male</p>
                <p className={"paraname"}> Katchup id:</p>
                <p className={"paraname"}>Address:</p>
                <p className={"paraname"}>Phone:(+91)xxx xx xx xxx</p>
              </td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          )}
          {third && (
            <tr style={{ cursor: "pointer" }} onClick={hulk}>
              <td onClick={hulk}>+</td>
              <th>3.</th>
              <td>Circle Office</td>
              <td onClick={hulk}>Administartion</td>
              <td onClick={hulk}>Vice-President</td>
              <td onClick={hulk}>Role 3</td>
              <td onClick={hulk}>G Sugumaran</td>
            </tr>
          )}
          {third1 && (
            <tr style={{ cursor: "pointer" }} onClick={hulk1}>
              <td onClick={hulk1}>-</td>
              <th>3.</th>
              <td>Circle Office</td>
              <td onClick={hulk1}>Administartion</td>
              <td onClick={hulk1}>Vice-President</td>
              <td onClick={hulk1}>Role 3</td>
              <td onClick={hulk1}>G Sugumaran</td>
            </tr>
          )}
          {thirdata && (
            <tr className={"long1"}>
              <td></td>
              <td></td>
              <td>
                <ProfileUi
                  imgUrl="https://img.icons8.com/metro/452/user-male.png"
                  name="G Sugumaran"
                />
              </td>
              <td>
                <h3 className={"headname"}>G Sugumaran</h3>
                <p className={"paraname"}> Gender: Female</p>
                <p className={"paraname"}> Katchup id:</p>
                <p className={"paraname"}>Address:</p>
                <p className={"paraname"}>Phone:(+91)xxx xx xx xxx</p>
              </td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          )}         
        </tbody>
      </table>
)}

 { table3 && (
      <table striped bordered hover className={"low"}>
        {head && (
          <thead>
            <tr onClick={kill} style={{ cursor: "pointer" }}>
              <th style={{ width: "10px" }}>+</th>
              <th>Sno.</th>
              <th>Type of Party Wings Office</th>
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
              <th>Type of Party Wings Office</th>
              <th>Department</th>
              <th>Party Posting</th>
              <th>Role</th>
              <th>Name of the Elected Member</th>
            </tr>
          </thead>
        )}
        <tbody>
          {onFirst && (
            <tr style={{ cursor: "pointer" }} onClick={hanldeChange}>
              <td onClick={hanldeChange}>+</td>
              <th>1.</th>
              <td>Division Office</td>             
              <td onClick={hanldeChange}>Administration</td>
              <td >President</td>
              <td onClick={hanldeChange}>Role 1</td>
              <td onClick={hanldeChange}>T Masilamani</td>
            </tr>
          )}
          {onsecond && (
            <tr style={{ cursor: "pointer" }} onClick={hanldeChange1}>
              <td onClick={hanldeChange1}>-</td>
              <th>1.</th>
              <td>Division Office</td>
              <td onClick={hanldeChange1}>Administration,</td>
              <td onClick={hanldeChange1}>President</td>
              <td onClick={hanldeChange1}>Role 1</td>
              <td onClick={hanldeChange1}>T Masilamani</td>
            </tr>
          )}
          {state.hide1 && (
            <tr className={"long1"}>
              <td></td>
              <td></td>
              <td>
                <ProfileUi
                  imgUrl="https://img.icons8.com/metro/452/user-male.png"
                  name="T Masilamani"
                />
              </td>
              <td>
                <h3 className={"headname"}>T Masilamani</h3>
                <p className={"paraname"}> Gender: Male</p>
                <p className={"paraname"}> Katchup id:</p>
                <p className={"paraname"}>Address:</p>
                <p className={"paraname"}>Phone:(+91)xxx xx xx xxx</p>
              </td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          )}
          {secon && (
            <tr style={{ cursor: "pointer" }} onClick={hilk}>
              <td onClick={hilk}>+</td>
              <th>2.</th>
              <td>Division Office</td>
              <td onClick={hilk}>Administartion</td>
              <td onClick={hilk}>Vice-President</td>
              <td onClick={hilk}>Role 2</td>
              <td onClick={hilk}>SP Saravanan</td>
            </tr>
          )}
          {secon1 && (
            <tr style={{ cursor: "pointer" }} onClick={hilk1}>
              <td onClick={hilk1}>-</td>
              <th>2.</th>
              <td>Division Office</td>
              <td onClick={hilk1}>Administartion</td>
              <td onClick={hilk1}>Vice-President</td>
              <td onClick={hilk1}>Role 2</td>
              <td onClick={hilk1}>SP Saravanan</td>
            </tr>
          )}
          {secondata && (
            <tr className={"long1"}>
              <td></td>
              <td></td>
              <td>
                <ProfileUi
                  imgUrl="https://img.icons8.com/metro/452/user-male.png"
                  name="SP Saravanan"
                />
              </td>
              <td>
                {" "}
                <h3 className={"headname"}>SP Saravanan</h3>
                <p className={"paraname"}> Gender: Male</p>
                <p className={"paraname"}> Katchup id:</p>
                <p className={"paraname"}>Address:</p>
                <p className={"paraname"}>Phone:(+91)xxx xx xx xxx</p>
              </td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          )}
          {third && (
            <tr style={{ cursor: "pointer" }} onClick={hulk}>
              <td onClick={hulk}>+</td>
              <th>3.</th>
              <td>Division Office</td>
              <td onClick={hulk}>Administartion</td>
              <td onClick={hulk}>Vice-President</td>
              <td onClick={hulk}>Role 3</td>
              <td onClick={hulk}>G Sugumaran</td>
            </tr>
          )}
          {third1 && (
            <tr style={{ cursor: "pointer" }} onClick={hulk1}>
              <td onClick={hulk1}>-</td>
              <th>3.</th>
              <td>Division Office</td>
              <td onClick={hulk1}>Administartion</td>
              <td onClick={hulk1}>Vice-President</td>
              <td onClick={hulk1}>Role 3</td>
              <td onClick={hulk1}>G Sugumaran</td>
            </tr>
          )}
          {thirdata && (
            <tr className={"long1"}>
              <td></td>
              <td></td>
              <td>
                <ProfileUi
                  imgUrl="https://img.icons8.com/metro/452/user-male.png"
                  name="G Sugumaran"
                />
              </td>
              <td>
                <h3 className={"headname"}>G Sugumaran</h3>
                <p className={"paraname"}> Gender: Female</p>
                <p className={"paraname"}> Katchup id:</p>
                <p className={"paraname"}>Address:</p>
                <p className={"paraname"}>Phone:(+91)xxx xx xx xxx</p>
              </td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          )}         
        </tbody>
      </table>
)}

    </>
  );
}
export default FormVolunteer;