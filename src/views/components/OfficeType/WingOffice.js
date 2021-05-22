import React, { useState } from "react";
import CDataTable from "../../CoreComponents/table/CDataTable";
import {
  CRow,
  CCard,
  CCol,
  CLabel,
  CButton,
  CFormGroup,
  CInput,
  CInputRadio,
} from "@coreui/react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  getCountry,
  getState,
  getCity,
  getArea,
  getAreaSchema,
  createCountry,
  createState,
  createCity,
  createArea,
  updateCombination,
  updateCountry,
  updateState,
  updateCity,
  updateArea,
  deleteLocation,
} from "../../../services/ApiService";
import { toast } from "react-toastify";
import FormValidation from "../../../Tools/FormValidation/FormValidation";
import Select from "react-select";
import { cilBrowser } from "@coreui/icons";


function WingOffice() {
    return (
        <div>
    <CCard className={"cardSave"}>
               <div style={{ marginLeft: "-26px" }}>
                 <div className={"row-headerlabel"}>
                   <span  style={{marginLeft:"70px"}} className={"header-label"}>
                     {" "}
                     Mapping Municipal Corporation{" "}
                   </span>
                 </div>
     <CRow className={"row-alignment"} style={{ marginLeft: "-76px" }}>
  <CCol className={"column-align"} md="12" lg="12" sm="12">
    <p className="mandatory_txt" style={{ marginLeft: "90px" }}>
      Mandatory fields are marked with an asterisk (*)
        </p>
        </CCol>
        </CRow>

</div>

<CRow className={"row-alignment"} md="12" sm="12" lg="12">
                <CCol className={"column-align"} md={5} lg={5}>
                  <CLabel className={"label-name"}>
                    Type of Wing Office
                    <span className={"text-danger"}>*</span>
                  </CLabel>
                  <CInput
                    type={"text"}
                    className={"input-align"}
                    name={"Type of Wing Office"}
                    id={"wingofficename"}
                    placeholder="Type of Wing Office"
                  />
                </CCol>

                <CCol className={"column-align"} md={5} lg={5}>
                  <CLabel className={"label-name"}>
                  Abbreviation 
                    <span className={"text-danger"}>*</span>
                  </CLabel>
                  <CInput
                    type={"text"}
                    className={"input-align"}
                    name={"Abbreviation"}
                    id={"WingAbbreviation "}
                    placeholder="Enter the Abbreviation"
                  />
                </CCol>
            
              </CRow>

              <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                <CCol className={"column-align"} md={5} lg={5}>
                  <CLabel className={"label-name"}>
                    Code
                    <span className={"text-danger"}>*</span>
                  </CLabel>
                  <CInput
                    type={"text"}
                    className={"input-align"}
                    name={"Code"}
                    id={"wingcode"}
                    placeholder="Enter the Code"
                  />
                </CCol>

                <CCol className={"column-align"} md={5} lg={5}>
                  <CLabel className={"label-name"}>
                  ReportingTo 
                    <span className={"text-danger"}>*</span>
                  </CLabel>
                  <Select
                    type={"text"}
                    id={"wingReportingTo"}
                    className={"select"}
                    placeholder="Select the ReportingTo"
                   
                  />
                </CCol>
            
              </CRow>
              <CRow>
              <CCol md="10">
                <CCol
                  md="5"
                  style={{
                    marginTop: "18px",
                    float: "right",
                  }}
                >
                  <CButton
                    style={{
                      float: "right",
                    }}
                    id={"cancelwing"}
                    className={"cancelBtn"}
                  >
                    CANCEL
                  </CButton>
                  <CButton
                    style={{
                      float: "right",
                      marginRight: "15px",
                    }}
                    id={"savewing"}
                    className={"saveBtn"}
                    // onClick={() => {
                    //   MemberRegiter();
                    // }}
                  >
                    Save
                  </CButton>{" "}
                </CCol>
              </CCol>
            </CRow>
           
        </CCard>
        </div>
    )
}

export default WingOffice
