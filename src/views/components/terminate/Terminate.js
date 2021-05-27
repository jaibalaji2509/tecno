import React, { useState } from "react";
import CDataTable from "../../CoreComponents/table/CDataTable";
import {
  CRow,
  CCard,
  CCol,
  CLabel,
  CButton,
  CInput,
  CTextarea,
} from "@coreui/react";
import { } from "../../../services/ApiService";
import Select from "react-select";

function Terminate() {
  const [memberhide, serMemberHide] = useState(true)
  const [love, setLove] = useState(false)

  const userData = [
  ];

  const henceopen = () => {
    serMemberHide(false);
    setLove(true)
  }
  const henceclose = () => {
    setLove(false);
    serMemberHide(true);
  }

  const fields = [
    {
      key: "SNo",
      label: "S.NO",
      _style: { width: "5%" },
      sorter: false,
      filter: false,
    },

    {
      key: "NAMEOFWINGOFFICE",
      label: "Name of the member",
      _style: { width: "10%" },
    },
    {
      key: "WingOffice",
      label: " Gender ",
      _style: { width: "10%" },
    },
    {
      key: "ReportingTo",
      label: "Age",
      _style: { width: "15%" },
    },
    { key: "Current Party Postings", label: "Current Party Postings", _style: { width: "10%" } },
    { key: "Name of the Office", label: "Name of the Office", _style: { width: "10%" } },
    { key: "Type of Office", label: "Type of Office", _style: { width: "10%" } },
    { key: "Suspend from", label: "Suspend from", _style: { width: "10%" } },
    { key: "Suspend to", label: "Suspend to", _style: { width: "10%" } },

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
      {memberhide && (
      <CCard>
        <CRow >
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
                  marginRight: "845px",
                }}
                id={"saveAbbreviationConfigureCode"}
                onClick={henceopen}
                className={"saveBtn"}
              >
                Add Terminate Member
                  </CButton>{" "}
            </CCol>
          </CCol>
        </CRow>
        <CRow style={{ marginTop: "50px" }}>
          <CCol>
          </CCol>

        </CRow>
        <CRow style={{ padding: "4%", marginTop: "-5.5%" }}>
          <CDataTable
            items={userData}
            fields={fields}
            columnFilter
            tableFilter
            tableLabel={"List of Terminated Members"}
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
                      style={{
                        width: "15px",
                        height: "15px",
                        marginLeft: "30px",
                        marginBottom: "10px",
                      }}
                    />
                    <CRow>
                      <CCol style={{ fontSize: "1.15rem" }} md="12">
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
                          style={{
                            marginRight: "5px",
                            color: "#3480e2",
                            cursor: "pointer",
                          }}
                          id={"constituencyEditicon"}
                          className="fas fa-edit"
                        ></i>
                        <i
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

              details: (item, index) => { },
            }}
          />
        </CRow>
      </CCard>
    )}
    {love && (
      
          <div style={{ padding: "2%" }}>
      <CCard>
        <CRow
          style={{ padding: "10px", paddingLeft: "20px", paddingRight: "20px" }}
        >
          <CCol md="12" className={"role-heading-10"}>
            Terminated Member{" "}
          </CCol>
        </CRow>

        <p className="mandatory_txt" style={{ paddingLeft: "2%" }}>
          Mandatory fields are marked with an asterisk (*)
        </p>
<div style={{marginLeft:"80px"}}>
        <CRow>
          <CCol md="5">
            <CLabel>
              Search
              <span> *</span>
            </CLabel>
            <Select
              id={"TerminateSearch"}
              isDisabled
              placeholder={"select member"}
            />
          </CCol>
        </CRow>

          <CRow>
            <CCol md="12" lg="12" sm="12">
              <CRow>
                <CCol>
                  <img
                    alt={""}
                    type="text"
                    style={{
                      width: "150px",
                      height: "160px",
                      position: "relative",
                      background: "#fff",
                      left: "0%",
                      top: "9%",
                    }}
                  />
                </CCol>
              </CRow>
            </CCol>
            <CCol md="12" lg="12" sm="12" style={{ marginTop: "1.5%" }}>
              <CRow className={"LengthDataw"}>
                <CCol md="6">
                  <CLabel className={"form-labels-9 col-md-5 reAssign-Label"}>
                    Name of the Member :{" "}
                  </CLabel>
                  <CLabel className={"reAssign-Detail"}>
                  </CLabel>
                </CCol>

                <CCol md="6">
                  <CLabel className={"form-labels-9 col-md-5 reAssign-Label"}>
                  </CLabel>
                  <CLabel className={"reAssign-Detail"}>
                  </CLabel>
                </CCol>
              </CRow>
              <CRow className={"LengthDataw"}>
                <CCol md="6">
                  <CLabel className={"form-labels-9 col-md-5 reAssign-Label"}>
                    :
                  </CLabel>
                  <CLabel className={"reAssign-Detail"}>
                  </CLabel>
                </CCol>

                <CCol md="6">
                  <CLabel className={"form-labels-9 col-md-5 reAssign-Label"}>
                    D.C.C ID :{" "}
                  </CLabel>
                  <CLabel className={"reAssign-Detail"}>
                  </CLabel>
                </CCol>
              </CRow>
              <CRow className={"LengthDataw"}>
                <CCol md="6">
                  <CLabel className={"form-labels-9 col-md-5 reAssign-Label"}>
                  </CLabel>
                  <CLabel className={"reAssign-Detail"}>
                  </CLabel>
                </CCol>

                <CCol md="6">
                  <CLabel className={"form-labels-9 col-md-5 reAssign-Label"}>
                    :{" "}
                  </CLabel>
                  <CLabel className={"reAssign-Detail"}></CLabel>
                </CCol>
              </CRow>
              <CRow className={"LengthDataw"}>
                <CCol md="6">
                  <CLabel>
                    :{" "}
                  </CLabel>
                  <CLabel>
                  </CLabel>
                </CCol>
              </CRow>
            </CCol>
          </CRow>

          <CRow>
            <CCol md="12" lg="12" sm="12">
              <CRow>
                <CCol md="5">
                  <CLabel>
                    Reason
                    <span> *</span>
                  </CLabel>
                  <CInput
                    id={"TerminateReason"}
                    disable
                    min="10"
                    max="100"
                    placeholder={"Enter reason for Termination"}
                  />
                  <CLabel>
                  </CLabel>
                </CCol>
                <CCol md="1"></CCol>
                <CCol md="5">
                  <CLabel>
                    Terminated From
                    <span> *</span>
                  </CLabel>
                  <CInput
                    id={"TerminatedFrom"}
                    type="date"
                    min
                    placeholder="Enter Terminated From"
                  ></CInput>
                  <CLabel style={{ color: "red" }}>
                   
                  </CLabel>
                </CCol>
                <CCol md="1"></CCol>
              </CRow>

              
              <CRow className={"seperator-3"}>
                <CCol md="10">
                  <CLabel className={"form-labels-12"}>
                    Description
                    <span className={"text-danger"}> *</span>
                  </CLabel>
                  <CTextarea
                    id={"TerminateDescription"}
                    disabled
                    placeholder="Enter Description for Termination"
                    style={{ height: "80px" }}
                    min="10"
                    max="500"
                  ></CTextarea>
                  <CLabel className={"form-labels-2"} style={{ color: "red" }}>
                  </CLabel>
                </CCol>
              </CRow>

                    
              <CRow>
                <CCol md="10">
                  <CButton
                    id={"TerminateCancel"}
                    className={"cancelBtn"}
                    style={{ float: "right" }}
                    onClick={henceclose}
                 >
                    {" "}
                    CANCEL
                  </CButton>

                  <CButton
                    id={"TerminateConfirm"}
                    className={"saveBtn"}
                    style={{ float: "right", marginRight: "3%" }}
                  >
                    Confirm
                  </CButton>
                </CCol>
              </CRow>
            </CCol>
          </CRow>
          </div>
      </CCard>
        </div>
    )}

    </div>
    
  )
}

export default Terminate
