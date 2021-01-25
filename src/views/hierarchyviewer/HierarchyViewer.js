import React, { useState, lazy } from 'react'
// import { FlowChartWithState } from "@mrblenny/react-flow-chart";
// import { Tree, TreeNode } from 'react-organizational-chart';
// import OrgChart from 'react-orgchart';
// import OrganizationChart from "@dabeng/react-orgchart";
import 'react-orgchart/index.css';
// import styled from 'styled-components';
import HierarchyViewerchart from './HierarchyViewerchart'
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

const HierarchyViewer = () => {


  return (

    <div>

      <>
        <HierarchyViewerchart datasource={initechOrg} titles={title} />
      </>

    </div>
  );

  

}

export default HierarchyViewer


// { "_id" : 1, "name" : "Dev", "reportingHierarchy" : [] }
// { "_id" : 2, "name" : "Eliot", "reportsTo" : "Dev", "reportingHierarchy" : [{ "_id": 6, "name": "Dan", "reportsTo": "Andrew" }, { "_id": 4, "name": "Andrew", "reportsTo": "Eliot" }, { "_id": 5, "name": "Asya", "reportsTo": "Ron" }, { "_id": 3, "name": "Ron", "reportsTo": "Eliot" }, { "_id": 2, "name": "Eliot", "reportsTo": "Dev" }] }
// { "_id" : 3, "name" : "Ron", "reportsTo" : "Eliot", "reportingHierarchy" : [{ "_id": 6, "name": "Dan", "reportsTo": "Andrew" }, { "_id": 3, "name": "Ron", "reportsTo": "Eliot" }, { "_id": 5, "name": "Asya", "reportsTo": "Ron" }, { "_id": 4, "name": "Andrew", "reportsTo": "Eliot" }] }
// { "_id" : 4, "name" : "Andrew", "reportsTo" : "Eliot", "reportingHierarchy" : [{ "_id": 6, "name": "Dan", "reportsTo": "Andrew" }, { "_id": 3, "name": "Ron", "reportsTo": "Eliot" }, { "_id": 5, "name": "Asya", "reportsTo": "Ron" }, { "_id": 4, "name": "Andrew", "reportsTo": "Eliot" }] }
// { "_id" : 5, "name" : "Asya", "reportsTo" : "Ron", "reportingHierarchy" : [{ "_id": 5, "name": "Asya", "reportsTo": "Ron" }] }
// { "_id" : 6, "name" : "Dan", "reportsTo" : "Andrew", "reportingHierarchy" : [{ "_id": 6, "name": "Dan", "reportsTo": "Andrew" }] }        

// db.graph.aggregate([{ $graphLookup: { from: "graph", startWith: "$reportsTo", connectFromField: "reportsTo", connectToField: "name", as: "reportingHierarchy" } }]) 