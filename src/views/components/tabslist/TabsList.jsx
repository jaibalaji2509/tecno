import React, { useState } from "react";
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
import LocationLibrary from "../location_library/Locationlibrary";
import Location from "../location/Location";

const TabsList = () => {
  const [active, setActive] = useState("0");


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
                  Location Master{" "}
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
