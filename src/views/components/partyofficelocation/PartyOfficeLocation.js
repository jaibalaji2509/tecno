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
  CWidgetDropdown
} from "@coreui/react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import {} from "../../../services/ApiService";
import { toast } from "react-toastify";
import FormValidation from "../../../Tools/FormValidation/FormValidation";
import Select from "react-select";
import { cilBrowser } from "@coreui/icons";

function PartyOfficeLocation() {
  const [addPartyOffice, setAddPartyOffice] = useState(true);
  const [createPartyOffice, setCreatepartyOffice] = useState(false);

  const changePartyOffice = async () => {
    await setAddPartyOffice(false);
    await setCreatepartyOffice(true);
  };
  const cancelPartyOffice = () => {
    setAddPartyOffice(true);
    setCreatepartyOffice(false);
  };
  const userData = [
    // {
    //     SNo: "1",
    //      WingOffice: "HEAD OFFICE",
    //      NAMEOFWINGOFFICE: "HEADOFFICEMUMBAI",
    //      ReportingTo: "---",
    //      address:"State Bank Bhavan",
    //      area:"MADAM CAMMA ROAD",
    //      city :"MUMBAI",
    //      pinccode:"400021" ,
    //     },
  ];

  const fields = [
    // {
    //   key: "show_details",
    //   label: "Select",
    //   _style: { width: "3%" },

    //   sorter: false,
    //   filter: false,
    // },
    {
      key: "SNo",
      label: "S.NO",
      _style: { width: "5%" },
      sorter: false,
      filter: false,
    },
   
    {
      key: "NAMEOFWINGOFFICE",
      label: "Name of party Office",
      _style: { width: "15  %" },
    },
    {
        key: "WingOffice",
        label: "Type of Party Office",
        _style: { width: "15%" },
      },
    {
      key: "ReportingTo",
      label: "Reporting To Office",
      _style: { width: "15%" },
    },
    { key: "address", label: "Address 1", _style: { width: "10%" } },
    { key: "area", label: "Area Name", _style: { width: "10%" } },
    { key: "city", label: "Entered By", _style: { width: "10%" } },
    { key: "pinccode", label: "Entered On", _style: { width: "10%" } },

    {
      label: "Action",
      key: "show_details1",

      _style: { width: "1%" },
      sorter: false,
      filter: false,
    },
  ];
  return (
    <div>
      {addPartyOffice && (
        <div>
          <CCard className={"cardSave"}>
            <div className={"main-headerlabel"}>
              <span className={"header-label"}>party Office Location</span>
            </div>

            <CRow style={{ marginTop: "130px" }}>
              <CCol md="10">
                <CCol
                  md="5"
                  style={{
                    marginLeft: "5px",
                    float: "right",
                    marginTop: "-10px",
                    top: "33px",
                  }}
                >
                  <CButton
                    style={{
                      float: "right",
                      marginRight: "820px",
                    }}
                    id={"saveAbbreviationConfigureCode"}
                    className={"saveBtn"}
                    onClick={changePartyOffice}
                  >
                    Add Party Office Location
                  </CButton>{" "}
                </CCol>
              </CCol>
            </CRow>
            <CRow style={{marginTop:"75px", marginLeft:"240px",position:"absolute" }}>
                    <CCol sm="3" lg="3" style={{ marginLeft: "-160px" }}>
                      <CWidgetDropdown
                        style={{
                          width: "280px",
                          textAlign: "center",
                          fontSize: "30px",
                          float: "right",
                          height:"100px"
                        }}
                        color="gradient-danger"
                        header=""
                        text=""
                      >
                        <span style={{ marginLeft: "-30px", fontSize: "24px",fontWeight:"700" }}>
                          Total
                        </span>
                        <span
                          style={{ marginLeft: "-152px", marginTop: "30px" ,fontSize: "24px",fontWeight:"700" }}
                        >
                          2
                        </span>
                        <br />
                        <br />
                      
                      </CWidgetDropdown>
                    </CCol>
                    <CCol sm="3" lg="3" style={{ marginLeft: "100px" }}>
                      <CWidgetDropdown
                        style={{
                          width: "280px",
                          textAlign: "center",
                          fontSize: "30px",
                          float: "right",
                          height:"100px"
                        }}
                        color="gradient-primary"
                        header=""
                        text=""
                      >
                        <span style={{ marginLeft: "-110px", fontSize: "24px",fontWeight:"700" }}>
                          District Party Office
                        </span>
                        <span
                          style={{ marginLeft: "-252px", marginTop: "30px" ,fontSize: "24px",fontWeight:"700" }}
                        >
                          2
                        </span>
                        <br />
                        <br />
                      
                      </CWidgetDropdown>
                    </CCol>
                    <CCol sm="3" lg="3" style={{ marginLeft: "110px" }}>
                      <CWidgetDropdown
                        style={{
                          width: "280px",
                          textAlign: "center",
                          fontSize: "30px",
                          float: "right",
                          height:"100px"
                        }}
                        color="gradient-warning"
                        header=""
                        text=""
                      >
                        <span style={{ marginLeft: "-110px", fontSize: "24px",fontWeight:"700" }}>
                          Circle Party Office
                        </span>
                        <span
                          style={{ marginLeft: "-252px", marginTop: "30px" ,fontSize: "24px",fontWeight:"700" }}
                        >
                          1
                        </span>
                        <br />
                        <br />
                      
                      </CWidgetDropdown>
                    </CCol>
                  </CRow>
            <CRow>
              <CCol style={{ fontSize: "1.55rem" }} md="12">
                <i
                  id={"locationLibraryDelete"}
                  style={{
                    position: "absolute",
                    top: "80px",
                    marginLeft: "955px",
                    marginBottom: "20px",
                    color: "#0072ff",
                  }}
                  className="fa fa-print"
                ></i>
              </CCol>
              <CCol style={{ fontSize: "1.55rem" }} md="12">
                <i
                  id={"locationLibraryDelete"}
                  style={{
                    position: "absolute",
                    top: "80px",
                    marginLeft: "1000px",
                    marginBottom: "20px",
                    color: "green",
                  }}
                  className="fa fa-share-alt"
                ></i>
              </CCol>
            </CRow>

            <CRow>
              <CCol style={{ top: "20px" }}>
                <img
                  id={"employeeDataorgEmployeeData"}
                  alt={""}
                  src={
                    "https://img.icons8.com/fluent/2x/organization-chart-people.png"
                  }
                  style={{
                    height: "40px",
                    width: "40px",
                    marginRight: "80px",
                    float: "right",
                    cursor: "pointer",
                  }}
                  //   onClick={() => setPrimary(!primary)}
                />
              </CCol>
            </CRow>
            <CRow style={{ padding: "4%", marginTop: "-1.5%" }}>
              <CDataTable
                items={userData}
                fields={fields}
                columnFilter
                tableFilter
                tableLabel={"List of party Office Location"}
                itemsPerPageSelect
                itemsPerPage={5}
                hover
                sorter
                pagination
                scopedSlots={{
                  show_details: (item, index) => {
                    return (
                      <td className="py-2">
                        <CInput
                          type={"checkbox"}
                          // onClick={() => {
                          //   let data = item._id;
                          //   if (`${checked}` === `${data}`) {
                          //     setChecked("");
                          //   } else {
                          //     getToRoleEmpMovement(item);
                          //   }
                          // }}
                          // checked={checked === `${item._id}`}
                          style={{
                            width: "15px",
                            height: "15px",
                            marginLeft: "30px",
                            marginBottom: "10px",
                          }}
                        />
                        <CRow>
                          <CCol style={{ fontSize: "1.15rem" }} md="12">
                            <i
                              onClick={() => {
                                //   toggleDetails(index);
                              }}
                            ></i>
                            {/* <i
                                style={{
                                  marginRight: "5px",
                                  color: "#3480e2",
                                  cursor: "pointer",
                                }}
                                id={"locationLibraryEdit"}
                                onClick={() => EditCountry(item)}
                                className="fas fa-edit"
                              ></i>
                              <i
                                onClick={() => deleteConfirm(item._id)}
                                id={"locationLibraryDelete"}
                                style={{
                                  marginLeft: "5px",
                                  color: "#e85654",
                                  cursor: "pointer",
                                }}
                                className="fa fa-trash"
                              ></i> */}
                          </CCol>
                        </CRow>
                      </td>
                    );
                  },
                  show_details1: (item, index) => {
                    return (
                      <td className="py-2">
                        <CRow>
                          <CCol style={{ fontSize: "1.15rem" }} md="12">
                            <i
                              onClick={() => {
                                //   toggleDetails(index);
                              }}
                            ></i>
                            <i
                              style={{
                                marginRight: "5px",
                                color: "#3480e2",
                                cursor: "pointer",
                              }}
                              id={"constituencyEditicon"}
                              // onClick={() => EditCountry(item)}
                              className="fas fa-edit"
                            ></i>
                            <i
                              // onClick={() => deleteConfirm(item._id)}
                              id={"constituencyDelete"}
                              style={{
                                marginLeft: "5px",
                                color: "#e85654",
                                cursor: "pointer",
                              }}
                              className="fa fa-trash"
                            ></i>
                          </CCol>
                        </CRow>
                      </td>
                    );
                  },

                  details: (item, index) => {},
                }}
              />
            </CRow>
          </CCard>
        </div>
      )}

      {createPartyOffice && (
        <div>
          <CCard className={"cardSave"}>
            <div style={{ marginLeft: "-2px" }}>
              <div className={"row-headerlabel"}>
                <span style={{ marginLeft: "70px" }} className={"header-label"}>
                  {" "}
                  Adding Party Office Location{" "}
                </span>
              </div>
            </div>

            <CRow className={"row-alignment"} md="12" sm="12" lg="12">
              <CCol className={"column-align"} md={5} lg={5}>
                <CLabel className={"label-name"}>
                  Type of Party Office
                  <span className={"text-danger"}>*</span>
                </CLabel>
                <Select
                  type={"text"}
                  id={"wingReportingTo"}
                  className={"select"}
                  placeholder="Select the Party Office"
                />
              </CCol>
              <CCol className={"column-align"} md={5} lg={5}>
                <CLabel className={"label-name"}>
                  Reporting To Office
                  <span className={"text-danger"}>*</span>
                  <span style={{ color: "green" }}>-</span>
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
                  Name of Party Office Location
                  <span className={"text-danger"}>*</span>
                </CLabel>
                <CInput
                  type={"text"}
                  className={"input-align"}
                  name={"Address1"}
                  id={"WinglocationAddress1"}
                  placeholder="Enter Name of Party Office"
                />
              </CCol>
            </CRow>
            <CCol>
              <CLabel
                style={{
                  fontSize: "20PX",
                  fontFamily: "Open Sans",
                  fontWeight: "700",
                  marginLeft: "55px",
                  marginTop: "15px",
                }}
              >
                Address of the Party Office
              </CLabel>
            </CCol>

            <CRow
              className={"row-alignment"}
              md="12"
              sm="12"
              lg="12"
              style={{ marginTop: "-25px" }}
            >
              <CCol className={"column-align"} md={8} lg={8}>
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
                  Pincode
                  <span className={"text-danger"}>*</span>
                </CLabel>
                <CInput
                  type={"text"}
                  className={"input-align"}
                  name={"Pincode "}
                  id={"WinglocatioPincode"}
                  placeholder="Enter Pincode "
                />
              </CCol>
              <CCol className={"column-align"} md={5} lg={5}>
                <CLabel className={"label-name"}>
                  State
                  <span className={"text-danger"}>*</span>
                </CLabel>
                <CInput
                  type={"text"}
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
                  District/City
                  <span className={"text-danger"}>*</span>
                </CLabel>
                <CInput
                  type={"text"}
                  className={"input-align"}
                  name={"City "}
                  id={"WinglocationCity"}
                  placeholder="Enter City "
                />
              </CCol>
              <CCol className={"column-align"} md={5} lg={5}>
                <CLabel className={"label-name"}>
                  Area / Village
                  <span className={"text-danger"}>*</span>
                </CLabel>
                <CInput
                  type={"text"}
                  className={"input-align"}
                  name={"Area "}
                  id={"WinglocationArea "}
                  placeholder="Enter Area "
                />
              </CCol>
            </CRow>
            <CRow className={"row-alignment"} md="12" sm="12" lg="12">
              <CCol className={"column-align"} md={5} lg={5}>
                <CLabel className={"label-name"}>
                  Street
                  <span className={"text-danger"}>*</span>
                </CLabel>
                <CInput
                  type={"text"}
                  className={"input-align"}
                  name={"Area "}
                  id={"WinglocationArea "}
                  placeholder="Enter Street "
                />
              </CCol>
            </CRow>

            <CRow style={{ marginTop: "40px" }}>
              <CCol md="10">
                <CCol
                  md="5"
                  style={{
                    marginLeft: "380px",
                    position: "absolute",
                    float: "right",
                    marginTop: "-75px",
                  }}
                >
                  <CButton
                    style={{
                      float: "right",
                    }}
                    id={"cancelAbbreviationConfigureCode"}
                    className={"cancelBtn"}
                    onClick={cancelPartyOffice}
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
                    onClick={""}
                  >
                    Save
                  </CButton>{" "}
                </CCol>
              </CCol>
            </CRow>
          </CCard>
        </div>
      )}
    </div>
  );
}

export default PartyOfficeLocation;