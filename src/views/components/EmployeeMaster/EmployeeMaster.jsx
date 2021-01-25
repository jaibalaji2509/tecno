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
// import CIcon from "@coreui/icons-react";

import { useRouteMatch } from "react-router-dom";
// import { MemoryRouter } from 'react-router';
import AddPromoteEmployee from "../Promote/AddPromoteEmployee.jsx";
import PromoteEmployee from "../Promote/PromoteEmployee.jsx";
import AddTransferEmployee from "../Transfer/AddTransferEmployee.jsx";
import TransferEmployee from "../Transfer/TransferEmployee.jsx";
import AddSuspendEmployee from "../suspend/AddSuspendEmployee.jsx";
import ViewSuspendEmployee from "../suspend/ViewSuspendEmployee.jsx";
import TerminateEmployee from "../terminate/ViewTerminateEmployee";
import AddTerminateEmployee from "../terminate/AddTerminateEmployee";
// import AddSuspendEmployee from "../Suspend/AddSuspendEmployee.jsx";
// import ViewSuspendEmployee from "../Suspend/ViewSuspendEmployee.jsx";
import RevokeEmployee from "../revokeemployee/RevokeEmployee.jsx";

const TabsList = () => {
  const [active, setActive] = useState(0);
  const [promote, setPromote] = useState(false);
  const [suspend, setSuspend] = useState(false);
  const [transfer, setTransfer] = useState(false);
  const [terminate, setTerminate] = useState(false);
  const [promoteData, setPromoteData] = useState({});
  const [transferData,setTransferData] = useState({});
  const [terminateData,setTerminateData] = useState({})
  const [suspendData, setSuspendData] = useState({});
  // let match = useRouteMatch();

  const changeTerminate = (data) => {
    let value = data || {};
    setTerminateData(value);
    setTerminate(!terminate);
  };
  const changePromote = (data) => {
    let value = data || {};
    setPromoteData(value);
    setPromote(!promote);
  };
  const changeSuspend = async (data) => {
    await setSuspendData(data);
    setSuspend(!suspend);
  }

  const changeTransfer = (data) => {
    let value = data || {};
    setTransferData(value);
    setTransfer(!transfer);
  };

  return (
    <CRow>
      <CCol>
        <CCard>
          <CCardBody>
            <CTabs
              activeTab={active}
              onActiveTabChange={(idx) => setActive(idx)}
            >
              <CNav variant="tabs">
                <CNavItem >
                  <CNavLink href="#Promote">
                    <CTabs eventKey="Promote" title="Promote">
                      {" "}
                      Promote
                    </CTabs>
                  </CNavLink>
                </CNavItem>

                <CNavItem>
                  <CNavLink href="#Suspend">
                    <CTabs eventKey="suspend" title="Suspend">
                      Suspend
                    </CTabs>
                  </CNavLink>
                </CNavItem>

                <CNavItem>
                  <CNavLink href="#Transfer">
                    <CTabs eventKey="transfer" title="Transfer">
                      Transfer
                    </CTabs>
                  </CNavLink>
                </CNavItem>

                <CNavItem>
                  <CNavLink href="#Terminate">
                    <CTabs eventKey="terminate" title="Terminate">
                      {" "}
                      Terminate
                    </CTabs>
                  </CNavLink>
                </CNavItem>

                <CNavItem>
                  <CNavLink href="#Revoke">
                    <CTabs eventKey="revoke" title="Revoke">
                      {" "}
                      Revoke
                    </CTabs>
                  </CNavLink>
                </CNavItem>
              </CNav>

              <CTabContent>
                <CTabPane>
                  {promote === true ? (
                    <AddPromoteEmployee data={promoteData} change={changePromote} />
                  ) : (
                    <PromoteEmployee change={changePromote} />
                  )}
                </CTabPane>
                <CTabPane>
                {suspend === false ? (<ViewSuspendEmployee change={changeSuspend} />) : (<AddSuspendEmployee data={suspendData} change={changeSuspend} />)}
                </CTabPane>
                <CTabPane>
                  {transfer === false ? (
                    <TransferEmployee change={changeTransfer} />
                  ) : (
                    <AddTransferEmployee data={transferData} change={changeTransfer} />
                  )}
                </CTabPane>
                <CTabPane>
                  {terminate === false ? (
                    <TerminateEmployee change={changeTerminate} />
                  ) : (
                    <AddTerminateEmployee data={terminateData} change={changeTerminate} />
                  )}
                </CTabPane>
                <CTabPane>
                  <RevokeEmployee />
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
