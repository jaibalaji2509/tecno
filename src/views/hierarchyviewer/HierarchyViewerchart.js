import React, {  } from 'react'
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
import './HierarchyViewer.css';
// import MainChartExample from '../charts/MainChartExample.js'
// import HierarchyViewer from './HierarchyViewer'



const HierarchyViewerchart = (props) => {


  return (

    <>

      <div>

        <h5 style={{ textAlignVertical: "center", textAlign: "center",padding:"8px" }}>{props.name}</h5>
        <OrganizationChart datasource={props.datasource} />;
        {/* <div className={'orgchart-container1'}>{props.name}</div> */}

     </div>
    </>

  );

}

export default HierarchyViewerchart
