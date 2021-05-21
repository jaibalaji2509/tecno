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

function AddMemberRegister() {
  const [show, setShow] = useState(false)
	const [ward, setWard] = useState("")
  const [files, setFiles] = useState("");
  const [steetSchema, setStreet] = useState([]);
  const [Education, setEducation] = useState([]);
  const [Occupation, setOccupation] = useState([]);
  const history = useHistory();

  
	// const pinchange = (e) => {
	// 	setWard(e.target.value)
	// 	if (ward.length > 4) {
	// 		setShow(true)
	// 	}
	// }
  const userData = [

  ];

  const fields = [
    { key: "SNo", label: "S.NO", _style: { width: "10%" }, sorter: false,
    filter: false, },
    { key: "Member Name", label: "Member Name", _style: { width: "10%" } },
    { key: "Gender", label: "Gender", _style: { width: "10%" } },
    { key: "Mobile Number", label: "Mobile Number", _style: { width: "10%" } },
    { key: "Street Name", label: "Street Name", _style: { width: "10%" } },
    { key: "Area Name", label: "Area Name / Locality", _style: { width: "10%" } },
    { key: "District Name", label: "District / City Name", _style: { width: "10%" } },
    { key: "State Name", label: "State Name", _style: { width: "10%" } },
    {
      label: "Action",
      key: "show_details",

      _style: { width: "1%" },
      sorter: false,
      filter: false,
    },
  ];

  return (
    <div>
      <CCard className={"cardSave"}>

        <div className={"main-headerlabel"}>
          <span className={"header-label"}>Member Registration</span>
        </div>
        <CRow className={"row-alignment"} style={{ marginLeft: "-76px" }}>
          <CCol className={"column-align"} md="12" lg="12" sm="12">
            <p className="mandatory_txt" style={{ marginLeft: "50px" }}>
              Mandatory fields are marked with an asterisk (*)
                </p>
            <div style={{ marginLeft: "-26px" }}>
              {/* <CRow className={"row-alignment"} md="12" sm="12" lg="12"> */}
              {/* 
        
              </CRow> */}

              <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                <CCol className={"column-align"} md={3}>
                  <CLabel className={"label-name"}>
                    First Name
                    <span className={"text-danger"}>*</span>
                  </CLabel>
                  <CInput
                    type={"text"}
                    className={"input-align"}
                    name={"First Name"}
                    id={"memberregisterfname"}
                    placeholder="First Name"
                  />
                </CCol>

                <CCol className={"column-align"} md={3}>
                  <CLabel className={"label-name"}>
                    Last Name
                    <span className={"text-danger"}>*</span>
                  </CLabel>
                  <CInput
                    type={"text"}
                    className={"input-align"}
                    name={"Last Name"}
                    id={"memberregisterlname"}
                    placeholder="Last Name"
                  />
                </CCol>
{/*                 
                <CCol className={"column-align"} md="3">
                  <CInput
                  type={"file"}
                    className={"input-align"}
                    id={"memberregisterprofileImage"}
                    name={"file"}
                    type={"file"}
                    id={"profileImage"}
                    accept={"image/*"}
                    style={{ display: "none" }}

                  />

                  <div
                    id={"memberregisterhandleclick"}
                    style={{
                      height: "80px",
                      width: "80px",
                      border: "1px dashed black",
                      marginLeft: "20px",
                    }}

                  >
                    <img
                      alt=""
                      style={{
                        width: "100%",
                        height: "100%",
                        position: "acsolute",
                      }}
                    />
                  </div>
                  <CLabel className={"label-name"}>
                    Upload Image
              </CLabel>


                </CCol> */}
              </CRow>



              <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                <CCol className={"column-align"} md={3}>
                  <CLabel className={"label-name"}>
                    Date of Birth
                    <span className={"text-danger"}>*</span>
                  </CLabel>

                  <CInput
                    type={"date"}
                    className={"input-align"}
                    name={"Date of Birth"}
                    id={"memberregisterdob"}
                    placeholder="DD/MM/YYYY"
                  />
                </CCol>
                <CCol className={"column-align"} md={5}>
                  <CLabel className={"label-name"}>
                    Gender
                    <span className={"text-danger"}>*</span>
                  </CLabel>
                  <CCol md="9">
                    <CFormGroup variant="custom-radio" inline>
                      <CInputRadio custom id="inline-radio1" name="inline-radios" value="option1" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-radio1">Male</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="custom-radio" inline>
                      <CInputRadio custom id="inline-radio2" name="inline-radios" value="option2" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-radio2">Female</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="custom-radio" inline>
                      <CInputRadio custom id="inline-radio3" name="inline-radios" value="option3" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-radio3">Transgender</CLabel>
                    </CFormGroup>
                  </CCol>
                </CCol>
              </CRow>
              <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                <CCol className={"column-align"} md="3">
                  <CLabel className={"label-name"}>
                    Education Qualification
                    <span className={"text-danger"}>*</span>
                  </CLabel>
                  <Select
                  styles={{marginLeft:"50px"}}
                    type={"text"}
                    id={"memberregisterEducationQualification"}
                    className={"select"}
                    placeholder="Select the Education Qualification"
                    options={Education}
                  />
                </CCol>
                <CCol className={"column-align"} md="3">
                  <CLabel className={"label-name"}>
                    Occupation
                    <span className={"text-danger"}>*</span>
                  </CLabel>
                  <Select
                    type={"text"}
                    id={"memberregisterOccupation"}
                    className={"select"}
                    placeholder="Select the Occupation"
                    options={Occupation}
                  />
                </CCol>
              </CRow>

              <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                <CCol className={"column-align"} md="3">
                  <CLabel className={"label-name"}>
                    Mobile Number
                          <span className={"text-danger"}> *</span>
                  </CLabel>
                  <CInput
                    className={"input-align"}
                    name={"Phone number"}
                    id={"memberregisterphonenumber"}
                    placeholder="Mobile Number"
                  />
                </CCol>
                <CCol className={"column-align"} md="3">
                  <CLabel className={"label-name"}>
                    Voter Id
              </CLabel>
                  <CInput
                    className={"input-align"}
                    id={"memberregistervoterid"}
                    name={"voterid"}
                    placeholder={"Voter Id"}
                  />
                </CCol>
              </CRow>

              <div className={"row-headerlabel"}>
                <span style={{ marginLeft: "70px" }} className={"header-label"}>
                  {" "}
                  Address for Communication {" "}
                </span>
              </div>
              <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                <CCol className={"column-align"} md="3">
                  <CLabel className={"label-name"}>
                    Door No.
                          <span className={"text-danger"}> *</span>

                  </CLabel>
                  <CInput
                    className={"input-align"}
                    name={"Address"}
                    id={"memberregisteraddress1"}
                    placeholder="Address Line 1"
                  />

                </CCol>
                <CCol className={"column-align"} md="3">
                  <CLabel className={"label-name"}>
                    Pincode
                    <span className={"text-danger"}>*</span>
                  </CLabel>
                  <CInput
                    className={"input-align"}
                    id={"memberregisterpincode"}
                    name={"Pincode"}
                    placeholder={"Pincode"}
                    // value={ward}
                    // onChange={pinchange}
                  />
                </CCol>
  
             {/* {show && ( */}


    <CCol className={"column-align"} md="3">
                  <CLabel className={"label-name"}>
                    State
                    <span className={"text-danger"}>*</span>
                  </CLabel>
                  <CInput
                    className={"input-align"}
                    id={"memberregisterState"}
                    name={"state"}
                    placeholder={"State Name"}
                  />
                </CCol>
</CRow>

                <CRow className={"row-alignment"} md="12" sm="12" lg="12">
<CCol className={"column-align"} md="3">
                  <CLabel className={"label-name"}>
                    District
                    <span className={"text-danger"}>*</span>
                  </CLabel>
                  <CInput
                    className={"input-align"}
                    id={"memberregisterDistrict"}
                    name={"district"}
                    placeholder={" District/City Name"}
                  />
                </CCol>
              
                <CCol className={"column-align"} md="3">
                  <CLabel className={"label-name"}>
                    Area Name
                          <span className={"text-danger"}> *</span>
                  </CLabel>
                  <Select
                    type={"text"}
                    id={"memberregisterArea"}
                    className={"select"}
                    placeholder="Select the Area"
                    options={Occupation}
                  />
               </CCol>
              
              <CCol className={"column-align"} md="3">
                  <CLabel className={"label-name"}>
                    Street Name
                    <span className={"text-danger"}>*</span>
                  </CLabel>
                  <Select
                    type={"text"}
                    id={"memberregisterstreet"}
                    className={"select"}
                    placeholder="Select the Street Name"
                    options={steetSchema}
                  />
                </CCol>
</CRow>


             {/* )}/ */}


            
             



            </div>
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
                    id={"cancelAbbreviationConfigureCode"}
                    className={"cancelBtn"}
                  onClick={()=> history.push("/MemberRegistration")}
                  >
                    CANCEL
                  </CButton>
                  <CButton
                    style={{
                      float: "right",
                      marginRight: "15px",
                    }}
                    id={"saveAbbreviationConfigureCode"}
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
            <CRow style={{ padding: "4%", marginTop: "1.5%" }}>
              <CDataTable
                items={userData}
                fields={fields}
                columnFilter
                tableFilter
                tableLabel={"List of Locations"}
                itemsPerPageSelect
                itemsPerPage={5}
                hover
                sorter
                pagination
                scopedSlots={{
                  show_details: (item, index) => {
                    return (
                      <td className="py-2">
                        <CRow>
                          <CCol style={{ fontSize: "1.15rem" }} md="12">
                            <i
                              onClick={() => {
                                //   toggleDetails(index);
                              }}
                            ></i>

                          </CCol>
                        </CRow>
                      </td>
                    );
                  },
                  details: (item, index) => { },
                }}
              />
            </CRow>
          </CCol>
        </CRow>
      </CCard>

    </div>
  )
}

export default AddMemberRegister
