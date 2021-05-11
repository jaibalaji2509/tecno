import React, { useState, useEffect } from "react";
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

import { BrowserRouter as Router } from "react-router-dom";
import { useHistory } from "react-router-dom";

// import { EmployeeContext } from "../../../services/EmployeeContext";
import LocationLibrary from "../location_library/Locationlibrary";
import Location from "../location/Location";

const TabsList = () => {
  // const [state] = React.useContext(EmployeeContext);
  const [active, setActive] = useState("0");

  const [TRUE, FALSE] = [true, false];

  const activeTabHandler = (val) => {
    setActive(val);
  };

  return (
    <CRow>
      <div>
        <Router>
        </Router>
      </div>
      <CCol>
        <CCard>
          <CCardBody>
            <CTabs activeTab={active}>
              <CNav variant="tabs">
                <CNavItem>
                  <CNavLink
                    data-tab="0"
               onClick={()=>setActive("0")}
                    id={"tabsListAddEmployee"}
                  >
                  Gneral Location{" "}
                  </CNavLink>
                </CNavItem>

                <CNavItem>
                  <CNavLink
                    id={"tabsListReporting"}
                  onClick={()=>setActive("1")}
                    data-tab="1"
                 
                  >
                    Rural Location{" "}
                  </CNavLink>
                </CNavItem>

                {/* <CNavItem>
                  <CNavLink
                    id={"tabsListDocument"}
                    onClick={() => setActive("Document")}
                    data-tab="Document"
                    disabled={state.roleData ? FALSE : TRUE}
                  >
                    Documents{" "}
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink
                    id={"tabsListFamilyDetails"}
                    onClick={() => setActive("FamilyDetails")}
                    data-tab="FamilyDetails"
                    disabled={state.documentData ? FALSE : TRUE}
                  >
                    Family Details{" "}
                  </CNavLink>
                </CNavItem>

                <CNavItem>
                  <CNavLink
                    id={"tabsListAddExperienceDetails"}
                    onClick={() => setActive("AddExperienceDetails")}
                    data-tab="AddExperienceDetails"
                    disabled={state.familyData ? FALSE : TRUE}
                  >
                    Experience Details{" "}
                  </CNavLink>
                </CNavItem>

                <CNavItem>
                  <CNavLink
                    id={"tabsListAddEducationDetails"}
                    onClick={() => setActive("EducationDetails")}
                    data-tab="EducationDetails"
                    disabled={state.experienceData ? FALSE : TRUE}
                  >
                    Education Qualification{" "}
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink
                    id={"tabsListAddress"}
                    onClick={() => setActive("Address")}
                    data-tab="Address"
                    disabled={state.educationData ? FALSE : TRUE}
                  >
                    Address{" "}
                  </CNavLink>
                </CNavItem> */}
              </CNav>

              <CTabContent>
                <CTabPane  data-tab="0">
                  {active ==="0" && (
                 <LocationLibrary onActive={activeTabHandler}/>
                 )}
                </CTabPane>
                <CTabPane data-tab="1">
                  {active ==="1" && (
                  <Location onActive={activeTabHandler}/>
                  )}
                </CTabPane>
              
              </CTabContent>
            </CTabs>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default TabsList;
