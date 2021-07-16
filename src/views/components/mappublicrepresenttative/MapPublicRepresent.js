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
import ConstituencyMember from "../constituency/ConstituencyMember";
import RajyaSabha from "../rajyasabha/RajyaSabha";
import MemberTownPanchayat from "../membertownpanchayat/MemberTownPanchayat";

const MapPublicRepresent = () => {
  const [active, setActive] = useState("0");

  const activeTabHandler = (val) => {
    setActive(val);
  };

  return (
    <CRow>
      <div>
        <Router></Router>
      </div>
      <CCol>
        <CCard>
          <CCardBody>
            <CTabs activeTab={active}>
              <CNav variant="tabs">
                <CNavItem>
                  <CNavLink
                    data-tab="0"
                    onClick={() => setActive("0")}
                    id={"tabsListAddEmployee"}
                  >
                    Constituency Member{" "}
                  </CNavLink>
                </CNavItem>

                <CNavItem>
                  <CNavLink
                    id={"tabsListReporting"}
                    onClick={() => setActive("1")}
                    data-tab="1"
                  >
                    Rajya Sabha{" "}
                  </CNavLink>
                </CNavItem>

                <CNavItem>
                  <CNavLink
                    id={"tabsListReporting"}
                    onClick={() => setActive("2")}
                    data-tab="2"
                  >
                    Member Town Panchayat{" "}
                  </CNavLink>
                </CNavItem>
              </CNav>

              <CTabContent>
                <CTabPane data-tab="0">
                  {active === "0" && (
                    <ConstituencyMember onActive={activeTabHandler} />
                  )}
                </CTabPane>

                <CTabPane data-tab="1">
                  {active === "1" && <RajyaSabha onActive={activeTabHandler} />}
                </CTabPane>

                <CTabPane data-tab="2">
                  {active === "2" && (
                    <MemberTownPanchayat onActive={activeTabHandler} />
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

export default MapPublicRepresent;
