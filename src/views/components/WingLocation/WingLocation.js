import React, { useState, useEffect } from "react";
import {
  CImg,
  CRow,
  CCard,
  CCol,
  CButton,
  CLabel,
  CInput,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle,
  CInputCheckbox,
} from "@coreui/react";
import $ from "jquery";
import CIcon from '@coreui/icons-react'
import CDataTable from "../../CoreComponents/table/CDataTable";
import { saveCreateMemberRegister } from "../../../services/ApiService";
import { useHistory } from "react-router-dom";
import Select from "react-select";

function WingLocation() {
  const history = useHistory();
  const userData = [
    {
      SNo: "1",
      WingOffice: "HEAD OFFICE",
      NAMEOFWINGOFFICE: "HEADOFFICEMUMBAI",
      ReportingTo: "---",
      address: "State Bank Bhavan",
      area: "MADAM CAMMA ROAD",
      city: "MUMBAI",
      pinccode: "400021",

    },
  ];
  const [select, setSelect] = useState("");
  const [hide, setHide] = useState(false)
  const [memberhide, setMemberHide] = useState(true)
  const fields = [
    {
      key: "show_details",
      label: "Select",
      _style: { width: "3%" },
      name: <div>Email <input type={"checkbox"} onClick={""} /></div>,
      sorter: false,
      filter: false,
    },
    {
      key: "SNo", label: "S.NO", _style: { width: "10%" }, sorter: false,
      filter: false,
    },
    { key: "WingOffice", label: "Type of Wing Office", _style: { width: "10%" } },
    { key: "NAMEOFWINGOFFICE", label: "Name of Wing Office", _style: { width: "10%" } },
    { key: "ReportingTo", label: "Reporting To", _style: { width: "10%" } },
    { key: "address", label: "Address 1", _style: { width: "10%" } },
    { key: "area", label: "Area Name", _style: { width: "10%" } },
    { key: "city", label: "City Name", _style: { width: "10%" } },
    { key: "pinccode", label: "Pincode", _style: { width: "10%" } },

    {
      label: "Action",
      key: "show_details1",

      _style: { width: "1%" },
      sorter: false,
      filter: false,
    },
  ];
 
   const enableCreate = () => {
    setHide(true);
    setMemberHide(false)
  }
  return (
    <div>

      <CCard className={"cardSave"}>
        {memberhide && (
          <div>

            <div className={"main-headerlabel"}>
              <span className={"header-label"}>Type of Wing Office Location</span>
            </div>



            <CButton
              id={"memberregisteraddbutton"}
              className={"saveBtn"}
              onClick={enableCreate}
              style={{
                marginLeft: "2.5%",
                width: "205px",
                cursor: "pointer",
                marginTop: "50px",
                marginBottom: "-50px",
                height: "35px",
              }}
            >

              Add WING OFFICE LOCATION
                  </CButton>

                  <CRow
              style={{ padding: "1%", marginTop: "1.5%", marginLeft: "27px" }}
            >
              <CRow>
                <CCol style={{ fontSize: "1.55rem" }} md="12">
                  <CInput
                    // onClick={setSelect}
                    type={"checkbox"}
                    value={"select"}
                    id={"wingselectchecked"}
                    style={{
                      top: "7px",
                      width: "15px",
                      height: "15px",
                      marginLeft: "10px",
                      marginBottom: "20px",
                      marginTop:"202px",
                    }}
                   
                  />
                </CCol>
           </CRow>
    </CRow>


            <CRow style={{ padding: "4%", marginTop: "-17.5%" }}>
              <CDataTable
                items={userData}
                fields={fields}
                columnFilter
                tableFilter
                tableLabel={"List of TYPE OF WING OFFICE LOCATION"}
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
                          value={"select"}
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
                              id={"wingediticon"}
                              // onClick={() => EditCountry(item)}
                              className="fas fa-edit"
                            ></i>
                            <i
                              // onClick={() => deleteConfirm(item._id)}
                              id={"wingdelete"}
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

                  details: (item, index) => { },
                }}
              />
            </CRow>
          </div>
        )}

        {hide && (
          < div >
            <CCard className={"cardSave"} style={{minHeight:"900px"}}>
              <div style={{ marginLeft: "-26px" }}>
                <div className={"row-headerlabel"}>
                  <span style={{ marginLeft: "70px" }} className={"header-label"}>
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
                    Type of Wing Office
                    <span className={"text-danger"}>*</span>
                  </CLabel>
                  <Select
                    type={"text"}
                    id={"wingreportingto"}
                    className={"select"}
                    placeholder="Select the Type of Wing Office"
                  />
                </CCol>
                <CCol className={"column-align"} md={5} lg={5}>
                  <CLabel className={"label-name"}>
                    Reporting To
                    <span className={"text-danger"}>*</span>
                  </CLabel>
                  <Select
                    type={"text"}
                    id={"wingreportingto"}
                    className={"select"}
                    placeholder="Select the reporting location"
                  />
                </CCol>
                </CRow>
                <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                <CCol className={"column-align"} md={5} lg={5}>
                  <CLabel className={"label-name"}>
                    Name of Wing Office Location
                    <span className={"text-danger"}>*</span>
                  </CLabel>
                  <CInput
                    type={"text"}
                    className={"input-align"}
                    name={"Address1"}
                    id={"winglocationaddress1"}
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
                    id={"winglocationaddress1"}
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
                    id={"winglocationaddress2"}
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
                    id={"wingsearchlocation"}
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
                    id={"winglocationcountry "}
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
                    id={"winglocation"}
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
                    id={"winglocationcity"}
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
                    id={"winglocationarea "}
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
                    id={"winglocatiopincode"}
                    disabled
                    placeholder="Enter Pincode "
                  />
                </CCol>
            
              <CCol md="10">
                <CCol
                  md="5"
                  style={{
                    marginTop: "-35px",
                    marginLeft:"285px"
                  }}
                >
                  <CButton
                    style={{
                      float: "right",
                      marginRight:"-200px"
                    }}
                    id={"cancelwing"}
                    className={"cancelBtn"}
                  >
                    CANCEL
                  </CButton>
                  <CButton
                    style={{
                      float: "right",
                      marginRight: "-100px",
                    }}
                    id={"savewingAbbreviationConfigureCode"}
                    className={"saveBtn"}
                  >
                    Save
                  </CButton>{" "}
                </CCol>
              </CCol>
            </CRow>



            </CCard>

          </div>
        )}
      </CCard>
    </div>
  )
}

export default WingLocation
