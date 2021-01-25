import React from "react";
import { CRow, CCol, CCard } from '@coreui/react'
import OrganizationChart from "@dabeng/react-orgchart";
import RolesHierarchy from "./RolesHierarchy";


const RolesHierarchyChart = () => {

  // const hierarchyHeader = "Role Hierarchy Chart";

  const ds2 = {
    id: "n1",
    name: "Managing Director",
    title: "HEAD OFFICE CHENNAI",
    children: [
      { id: "n2", name: "Manager", title: "CIRCLE OFFICE CHENNAI" },
      {
        id: "n3",
        name: "Manager",
        title: "CIRCLE OFFICE COIMBATORE",
        children: [
          { id: "n4", name: "Assistant Manager", title: "DIVISIONAL OFFICE ERODE" },
          {
            id: "n5",
            name: "Assistant Manager",
            title: "DIVISIONAL OFFICE COIMBATORE",
            children: [
              { id: "n6", name: "Chief Vigilance Officer", title: "SUB DIVISION OFFICE METTUPALAYAM" },
              { id: "n7", name: "Chief Vigilance Officer", title: "SUB DIVISION OFFICE POLLACHI" }
            ]
          },
        
        ]
      },
      { id: "n9", name: "Manager", title: "CIRCLE OFFICE MADURAI" },
      
    ]
  };


  return (

    <div>
      <CCard >
        <CRow style={{ paddingTop: '2%', paddingLeft: '2%'}}>
          {/* <CCol md='12' className={'role-heading'} >
           {hierarchyHeader}</CCol> */}
        </CRow>

        <CRow>
          <CCol>
            <OrganizationChart datasource={ds2} chartClass = "myChart" NodeTemplate={RolesHierarchy} />    
            </CCol>      
              </CRow>     
               </CCard>     
               </div>

  );

}

export default RolesHierarchyChart;