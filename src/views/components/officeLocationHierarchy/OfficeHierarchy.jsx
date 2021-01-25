import React, { useState, lazy } from 'react'
// import { FlowChartWithState } from "@mrblenny/react-flow-chart";
// import { Tree, TreeNode } from 'react-organizational-chart';
// import OrgChart from 'react-orgchart';
// import OrganizationChart from "@dabeng/react-orgchart";
import 'react-orgchart/index.css';
// import styled from 'styled-components';
import OfficeLocationHierarchy from './OfficeLocationHierarchy'
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

const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))
const carinfo = { name: "Ford", model: "Mustang" };

const initechOrg = {
  'name': 'Head Office',
  'title': 'OFFICE OF CHIEF ENGINEER',
  'location': 'Chennai',
  children: [
    { id: "2", name: "Circle Office", title: "office of superidenting" },
    {
      id: "3",
      name: "Circle Office",
      title: "office of superidenting",
      children: [
        { id: "4", name: "Divisonal Office", title: "office executive engineer" },
        // {
        //   id: "5",
        //   name: "Hei Hei",
        //   title: "senior engineer",
        //   children: [
        //     { id: "6", name: "Dan Dan", title: "engineer" },
        //     { id: "7", name: "Xiang Xiang", title: "engineer" }
        //   ]
        // },
        { id: "8", name: "Divisonal Office", title: "office executive engineer" }
      ]
    },
    { id: "9", name: "Circle Office", title: "office of superidenting " },
    // {
    //   id: "10",
    //   name: "Chun Miao",
    //   title: "department manager",
    //   children: [{ id: "11", name: "Yue Yue", title: "senior engineer" }]
    // }
  ]
};
const title = 'OFFICE LOCATION HIERARCHY CHART OF TAMIL NADU PWD';

const OfficeHierarchy = () => {


  return (

    <div>

      <>

        <OfficeLocationHierarchy datasource={initechOrg} titles={title} />

      </>

    </div>
  );

  

}

export default OfficeHierarchy
