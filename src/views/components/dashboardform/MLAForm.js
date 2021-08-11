import React, { useState } from "react";
import ReactDOM from "react-dom";
import BootstrapTable from "react-bootstrap-table-next";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import CDataTable from "src/views/CoreComponents/table/DataTable";
import ProfileUi from 'react-profile-card';

import {
    CRow,
    CCard,
    CCol, 
    CLabel,
    CButton,
    CInput,
    CLink,
    CContainer,    
  } from "@coreui/react";

function MLAForm() {
    const products = [...Array(1).keys()].map((p) => {
        return {
          id: "Tamilnadu",
          name:"T J Govindarajan",
          consti:"Gummidipoondi",
          city: "Chengalpattu",      
        };
      });
      const columns = [
        {     
          dataField: "id",     
          text: "STATE"
        },
    
        {
          dataField: "city",
          text: "District"
        },
        {
            dataField: "consti",
            text: "Constituency"
          },
        {
            dataField: "name",
            text: "Name of the Elected Member"
          }
      ];
      const expandRow = {
        renderer: (row) => (
          <div>
                      <CRow sm="12" md="12" lg="12" className={"profile"}>
          <CCol>
            <CCard className={"card-container"}>
              <header>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrySPvdczKGSq57ZjAuMqB2h_DiANOiezKFA&usqp=CAU"
                  alt="male icon"
                  style={{
                    marginLeft: "0em",
                    minWidth: "270px",
                    maxWidth: "270px",
                    borderRadius: "14px",
                  }}
                />
              </header>
              <img
                src="https://i.pinimg.com/736x/5f/40/6a/5f406ab25e8942cbe0da6485afd26b71.jpg"
                alt="member"
                className={"img"}
              />
              <h3
                style={{
                  fontSize: "30px",
                  marginTop: "36px",
                  textAlign: "center",
                  textTransform: "uppercase",
                }}
              >
                Name{" "}
              </h3>
              <h3
                style={{
                  fontSize: "20px",
                  textAlign: "center",
                  textTransform: "uppercase",
                }}
              >
                Gender{" "}
              </h3>
              <h4
                style={{
                  fontSize: "18px",
                  textAlign: "center",
                  textTransform: "uppercase",
                }}
              >
                DoB{" "}
              </h4>
              <h4
                style={{
                  fontSize: "18px",
                  textAlign: "center",
                  textTransform: "uppercase",
                }}
              >
                Party Role{" "}
              </h4>
            </CCard>
          </CCol>
                <CCol>
                    <h3 className={"headname"}>Name</h3>
                    <p className={"paraname"}> Katchup id:XXX...XXXX...XXX
                    </p>
                    <p className={"paraname"}>
                    Address:XXX,
                    YYYYYYY,
                    ZZZZZZZZZZZ,
                    ---


                    
                    </p>
                    <p className={"paraname"}>Phone:(+91)xxx xx xx xxx</p>
                </CCol>

        </CRow>
          
      </div>
        ),
        showExpandColumn: true
      };
    return (
        <div>
                <div style={{ padding: "20px" }}>
      <h1 className="h2">MLA-Wise Data</h1>
      <BootstrapTable
       keyField="id"        
        data={products}        
        columns={columns}
        expandRow={expandRow}
      />
      </div>
            
        </div>
    )
}

export default MLAForm