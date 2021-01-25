import React, { useState, useEffect, useContext } from "react";
import {
  CCol,
  CNav,
  CNavItem,
  CNavLink,
  CRow,
  CTabContent,
  CTabPane,
  CCard,
  CCardBody,
  CTabs,
} from "@coreui/react";
import OfficeLocationUpload from "../office/OfficeLocationUpload";
import StateUpload from "../state/StateUpload";
import RoleUpload from "../CreateRole/RoleUpload";
import EmployeeData from "../EmployeeData/EmployeeUpload";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
// import { address } from '../../../services/ApiService'

const BulkUpload = () => {
  // const [state,setState] = useContext(EmployeeContext);
  const [active, setActive] = useState("AreaLibrary");
  console.log(active, "active");

  const activeTabHandler = (val) => {
    console.log(val, "vLaaa");
    setActive(val);
  };
  // const [state, setState] = useContext(EmployeeContext);
  // console.log(state,'tabs');
  const history = useHistory();
  function Addres(props) {
    return <h2 onClick={() => props.history.push("AddEmployee")}>About</h2>;
  }

  function Topics({ match }) {
    return <h3>Requested Param: {match.params.id}</h3>;
  }
  useEffect(() => {
    return history.listen((location) => {
      console.log(`You changed the page to: ${location.BulkDetails}`);
    });
  }, [history]);

  return (
    <CRow>
      <div>
        <Router>
          <Route exact path="/" component={StateUpload} />
          <Route path="/addemployee" component={Addres} />
        </Router>
      </div>
      <CCol>
        <CCard>
          <CCardBody>
            <CTabs activeTab={active}>
              <CNav variant="tabs">
                <CNavItem>
                  <CNavLink data-tab="AreaLibrary">Area Library</CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink data-tab="PartyOfficeLocation">
                    Party Office Location
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink data-tab="RoleCreation">Role Creation</CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink data-tab="PartyMemberData">
                    Party Member Data
                  </CNavLink>
                </CNavItem>
              </CNav>

              <CTabContent>
                <CTabPane data-tab="AreaLibrary">
                  <StateUpload onActive={activeTabHandler} />
                </CTabPane>
                <CTabPane data-tab="PartyOfficeLocation">
                  <OfficeLocationUpload onActive={activeTabHandler} />
                </CTabPane>
                <CTabPane data-tab="RoleCreation">
                  <RoleUpload onActive={activeTabHandler} />
                </CTabPane>
                <CTabPane data-tab="PartyMemberData">
                  <EmployeeData onActive={activeTabHandler} />
                </CTabPane>
              </CTabContent>
            </CTabs>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default BulkUpload;
