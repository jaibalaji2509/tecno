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

function ADDLocation() {
    return (
        <div>
            <CCard className={"cardSave"}>
               <div style={{ marginLeft: "-26px" }}>
                 <div className={"row-headerlabel"}>
                   <span  style={{marginLeft:"70px"}} className={"header-label"}>
                     {" "}
                    Adding Office Wing Location{" "}
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
                   Reporting To
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
              
<CRow className={"row-alignment"} md="12" sm="12" lg="12">
                <CCol className={"column-align"} md={5} lg={5}>
                  <CLabel className={"label-name"}>
                   Type of Wing Office
                    <span className={"text-danger"}>*</span>
                  </CLabel>
                  <Select
                    type={"text"}
                    id={"wingReportingTo"}
                    className={"select"}
                    placeholder="Select the ReportingTo"
                  />
                </CCol>
                <CCol className={"column-align"} md={5} lg={5}>
                  <CLabel className={"label-name"}>
                  Name of Wing Office Location
                    <span className={"text-danger"}>*</span>
                  </CLabel>
                  <CInput
                    type={"text"}
                    className={"input-align"}
                    name={"Address1"}
                    id={"WinglocationAddress1"}
                    placeholder="Enter Address Line 1"
                  />
                </CCol>
            </CRow>
<CRow className={"row-alignment"} md="12" sm="12" lg="12">
                <CCol className={"column-align"} md={5} lg={5}>
                  <CLabel className={"label-name"}>
                   Address Line 1
                    <span className={"text-danger"}>*</span>
                  </CLabel>
                  <CInput
                    type={"text"}
                    className={"input-align"}
                    name={"Address1"}
                    id={"WinglocationAddress1"}
                    placeholder="Enter Address Line 1"
                  />
                </CCol>

                <CCol className={"column-align"} md={5} lg={5}>
                  <CLabel className={"label-name"}>
                  Address Line 2 
                    <span className={"text-danger"}>*</span>
                  </CLabel>
                  <CInput
                    type={"text"}
                    className={"input-align"}
                    name={"Address2"}
                    id={"WinglocationAddress2"}
                    placeholder="Enter Address Line 2"
                  />
                </CCol>
            
              </CRow>
              <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                <CCol className={"column-align"} md={5} lg={5}>
                  <CLabel className={"label-name"}>
                  Search Location for
                    <span className={"text-danger"}>*</span>
                  </CLabel>
                  <Select
                    type={"text"}
                    id={"wingSearchLocation"}
                    className={"select"}
                    placeholder="Country,State,City,Area"
                  />
                </CCol>

            
              </CRow>

              <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                <CCol className={"column-align"} md={5} lg={5}>
                  <CLabel className={"label-name"}>
                  Country 
                    <span className={"text-danger"}>*</span>
                  </CLabel>
                  <CInput
                    type={"text"}
                    disabled
                    className={"input-align"}
                    name={"Country "}
                    id={"WinglocationCountry "}
                    placeholder="Enter Country "
                  />
                </CCol>

                <CCol className={"column-align"} md={5} lg={5}>
                  <CLabel className={"label-name"}>
                  State 
                    <span className={"text-danger"}>*</span>
                  </CLabel>
                  <CInput
                    type={"text"}
                    disabled
                    className={"input-align"}
                    name={"State"}
                    id={"WinglocationState"}
                    placeholder="Enter State"
                  />
                </CCol>
        </CRow>


        <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                <CCol className={"column-align"} md={5} lg={5}>
                  <CLabel className={"label-name"}>
                  City 
                    <span className={"text-danger"}>*</span>
                  </CLabel>
                  <CInput
                    type={"text"}
                    className={"input-align"}
                    name={"City "}
                    disabled
                    id={"WinglocationCity"}
                    placeholder="Enter City "
                  />
                </CCol>

                <CCol className={"column-align"} md={5} lg={5}>
                  <CLabel className={"label-name"}>
                  Area  
                    <span className={"text-danger"}>*</span>
                  </CLabel>
                  <CInput
                    type={"text"}
                    className={"input-align"}
                    name={"Area "}
                    disabled
                    id={"WinglocationArea "}
                    placeholder="Enter Area "
                  />
                </CCol>
        </CRow>

<CRow className={"row-alignment"} md="12" sm="12" lg="12">
                <CCol className={"column-align"} md={5} lg={5}>
                  <CLabel className={"label-name"}>
                  Pincode 
                    <span className={"text-danger"}>*</span>
                  </CLabel>
                  <CInput
                    type={"text"}
                    className={"input-align"}
                    name={"Pincode "}
                    id={"WinglocatioPincode"}
                    disabled
                    placeholder="Enter Pincode "
                  />
                </CCol>
</CRow>

</CCard>
        </div>
    )
}

export default ADDLocation
