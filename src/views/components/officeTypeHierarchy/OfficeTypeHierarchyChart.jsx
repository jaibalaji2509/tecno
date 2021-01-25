import React from "react";
import { CRow, CCol, CCard } from '@coreui/react'
import OrganizationChart from "@dabeng/react-orgchart";
import RoleHierarchy from "./OfficeTypeHierarchy";


const OfficeTypeHierarchyChart = () => {

  // const hierarchyHeader = "Role Hierarchy Chart";

  const ds = {
    office: "Head Office - HO",

    children: [
      {
        office: "Branch Office - BO",

        children: [{
          office: "Circle Office - CO",



        },
        ]
      },



    ]
  };

  return (

    <div>
      <CCard >
      {/* style={{ paddingTop: '2%', paddingLeft: '2%' }} */}
        <CRow >
          {/* <CCol md='12' className={'role-heading'} >
           {hierarchyHeader}</CCol> */}
        </CRow>

        <CRow>
          <CCol>
            <OrganizationChart datasource={ds} chartClass="myChart" NodeTemplate={RoleHierarchy} />
          </CCol>
        </CRow>
      </CCard>
    </div>

  );

}

export default OfficeTypeHierarchyChart;