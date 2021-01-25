import React, { useState } from 'react'
// import { FlowChartWithState } from "@mrblenny/react-flow-chart";
// import { Tree, TreeNode } from 'react-organizational-chart';
// import OrgChart from 'react-orgchart';
import OrganizationChart from "@dabeng/react-orgchart";
import 'react-orgchart/index.css';
// import styled from 'styled-components';
// import {
//   CBadge,
//   CButton,
//   CButtonGroup,
//   CCard,
//   CCardBody,
//   CCardFooter,
//   CCardHeader,
//   CCol,
//   CProgress,
//   CRow,
//   CCallout
// } from '@coreui/react'
// import CIcon from '@coreui/icons-react'
import './OfficeLocationHierarchy.css';
// import MainChartExample from '../charts/MainChartExample.js'
// import HierarchyViewer from './HierarchyViewer'



const OfficeLocationHierarchy = (props) => {


  return (

    <span>

      <div>

        <h5 style={{ textAlignVertical: "center", textAlign: "center",padding:"8px" }}>{props.titles}</h5>
        <OrganizationChart datasource={props.datasource} />;

     </div>
     {/* <div>
           <img alt="" width="100px" height="70px" src={props.img}/> 
            <div className="position4"><b>{props.title}</b></div>
            <div className="department4">{props.role}</div>
            <div className="fullname4">{props.name}</div>
        </div> */}
    </span>

  );

}

export default OfficeLocationHierarchy
