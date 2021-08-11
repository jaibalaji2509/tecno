import React, { useState } from "react";
import ReactDOM from "react-dom";
import BootstrapTable from "react-bootstrap-table-next";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import CDataTable from "src/views/CoreComponents/table/DataTable";
import ProfileUi from "react-profile-card";

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

const products = [...Array(1).keys()].map((p) => {
  return {
    id: "Tamilnadu",
    name: "Ranga",
    city: "Chengalpattu",
  };
});
const products1 = [...Array(1).keys()].map((p) => {
  return {
    id: "PUDUCHERRY (UT)",

    count: 2000 + p,
  };
});
const products2 = [...Array(1).keys()].map((p) => {
  return {
    id: "KERALA",

    count: 2000 + p,
  };
});
const products3 = [...Array(1).keys()].map((p) => {
  return {
    id: "AREA",

    count: "COUNT",
  };
});

const Form1 = (props) => {
  const columns = [
    {
      dataField: "id",
      text: "STATE",
    },

    {
      dataField: "city",
      text: "District",
    },
    {
      dataField: "name",
      text: "Name of the Elected Member",
    },
  ];
  const columns1 = [
    {
      dataField: "id",
      text: "Ariyalur",
    },

    {
      dataField: "count",
      text: 250,
    },
  ];
  const columns2 = [
    {
      dataField: "id",
      text: "Chengalpattu",
    },

    {
      dataField: "count",
      text: 650,
    },
  ];
  const [show, setShow] = useState(true);
  const [show1, setShow1] = useState(false);
  const [selected, setSelected] = useState([]);

  const showcase = () => {
    setShow(false);
    setShow1(true);
  };
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
                Designation{" "}
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
    showExpandColumn: true,
  };

  const expandRow3 = {
    renderer: (row) => (
      <div>
        <CRow md="12" sm="12" lg="12" style={{ marginLeft: "100px" }}>
          <CCol md="6" onClick={showcase}>
            Gangaikonda Cholapuram
          </CCol>
          <CCol md="4">25</CCol>
        </CRow>
        <CRow md="12" sm="12" lg="12" style={{ marginLeft: "100px" }}>
          <CCol md="6">Jayankondam</CCol>
          <CCol md="4">60</CCol>
        </CRow>
        <CRow md="12" sm="12" lg="12" style={{ marginLeft: "100px" }}>
          <CCol md="6">Nallampalayam</CCol>
          <CCol md="4">45</CCol>
        </CRow>
        <CRow md="12" sm="12" lg="12" style={{ marginLeft: "100px" }}>
          <CCol md="6">Sendurai</CCol>
          <CCol md="4">56</CCol>
        </CRow>
        <CRow md="12" sm="12" lg="12" style={{ marginLeft: "100px" }}>
          <CCol md="6">Udayarpalayam</CCol>
          <CCol md="4">50</CCol>
        </CRow>
        <CRow md="12" sm="12" lg="12" style={{ marginLeft: "100px" }}>
          <CCol md="6">Varadarajanpettai</CCol>
          <CCol md="4">85</CCol>
        </CRow>
      </div>
    ),
    showExpandColumn: true,
  };
  const expandRow4 = {
    renderer: (row) => (
      <div>
        <CRow md="12" sm="12" lg="12" style={{ marginLeft: "100px" }}>
          <CCol md="6" onClick={showcase}>
            Acharapakkam
          </CCol>
          <CCol md="4">25</CCol>
        </CRow>
        <CRow md="12" sm="12" lg="12" style={{ marginLeft: "100px" }}>
          <CCol md="6">Chitlapakkam</CCol>
          <CCol md="4">60</CCol>
        </CRow>
        <CRow md="12" sm="12" lg="12" style={{ marginLeft: "100px" }}>
          <CCol md="6">Edaikazhinadu</CCol>
          <CCol md="4">45</CCol>
        </CRow>
        <CRow md="12" sm="12" lg="12" style={{ marginLeft: "100px" }}>
          <CCol md="6">Karunguzhi</CCol>
          <CCol md="4">56</CCol>
        </CRow>
        <CRow md="12" sm="12" lg="12" style={{ marginLeft: "100px" }}>
          <CCol md="6">Madambakkam</CCol>
          <CCol md="4">50</CCol>
        </CRow>
        <CRow md="12" sm="12" lg="12" style={{ marginLeft: "100px" }}>
          <CCol md="6">Mamallapuram</CCol>
          <CCol md="4">85</CCol>
        </CRow>
      </div>
    ),
    showExpandColumn: true,
  };

  const expandRow1 = {
    renderer: (row) => (
      <div>
        <CRow md="12" sm="12" lg="12" style={{ marginLeft: "100px" }}>
          <CCol md="6">Karaikal</CCol>
          <CCol md="4">250</CCol>
        </CRow>
        <CRow md="12" sm="12" lg="12" style={{ marginLeft: "100px" }}>
          <CCol md="6">Yanam</CCol>
          <CCol md="4">650</CCol>
        </CRow>
        <CRow md="12" sm="12" lg="12" style={{ marginLeft: "100px" }}>
          <CCol md="6">Mahe</CCol>
          <CCol md="4">450</CCol>
        </CRow>
        <CRow md="12" sm="12" lg="12" style={{ marginLeft: "100px" }}>
          <CCol md="6">Puducherry</CCol>
          <CCol md="4">850</CCol>
        </CRow>
      </div>
    ),
    showExpandColumn: true,
  };
  const expandRow2 = {
    renderer: (row) => (
      <div>
        <CRow md="12" sm="12" lg="12" style={{ marginLeft: "100px" }}>
          <CCol md="6">Alappuzha</CCol>
          <CCol md="4">250</CCol>
        </CRow>
        <CRow md="12" sm="12" lg="12" style={{ marginLeft: "100px" }}>
          <CCol md="6">Yanam</CCol>
          <CCol md="4">650</CCol>
        </CRow>
        <CRow md="12" sm="12" lg="12" style={{ marginLeft: "100px" }}>
          <CCol md="6">Mahe</CCol>
          <CCol md="4">450</CCol>
        </CRow>
        <CRow md="12" sm="12" lg="12" style={{ marginLeft: "100px" }}>
          <CCol md="6">Puducherry</CCol>
          <CCol md="4">850</CCol>
        </CRow>
      </div>
    ),
    showExpandColumn: true,
  };
  return (
    <>
      {show && (
        <div>
          <div style={{ padding: "20px" }}>
            <h1 className="h2">MP-Wise Data</h1>
            <BootstrapTable
              keyField="id"
              data={products}
              columns={columns}
              expandRow={expandRow}
            />
            {/* <BootstrapTable
       keyField="id"        
        data={products1}        
        columns={columns}
        expandRow={expandRow1}
      />
      <BootstrapTable
       keyField="id"        
        data={products2}        
        columns={columns}
        expandRow={expandRow2}
      /> */}
          </div>
        </div>
      )}
      {show1 && (
        <div>
          <h1 className="h2" style={{ marginLeft: "460px" }}>
            District-Wise Data
          </h1>

          <CRow
            className={"LengthDataw"}
            style={{ marginLeft: "5px", marginTop: "20px" }}
            sm={12}
            md={12}
            lg={12}
          >
            <CCol md="6">
              <CLabel className={"form-labels-9 col-md-5 reAssign-Label1"}>
                State :{" "}
              </CLabel>

              <CLabel
                className={"reAssign-Detail25"}
                style={{ marginLeft: "10px" }}
              >
                {selected.assignedTo
                  ? selected.assignedTo.firstName
                  : "Tamilnadu"}
              </CLabel>
            </CCol>
            <CCol md="6">
              <CLabel className={"form-labels-9 col-md-5 reAssign-Label1"}>
                District / City :{" "}
              </CLabel>

              <CLabel
                className={"reAssign-Detail"}
                style={{ marginLeft: "70px" }}
              >
                {selected.assignedTo
                  ? selected.assignedTo.firstName
                  : "Ariyalur"}
              </CLabel>
            </CCol>
          </CRow>

          <BootstrapTable
            keyField="id"
            data={products3}          
            columns={columns1}
            expandRow={expandRow3}
          />         
          
        </div>
      )}
    </>
  );
};

export default Form1;
