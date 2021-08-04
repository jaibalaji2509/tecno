import {
  CButton,
  CCard,
  CCol,
  CContainer,
  CInput,
  CLabel,
  CRow,
} from "@coreui/react";
import React, { useState } from "react";
import Select from "react-select";
import DEFAULT_IMAGE from "../../../assets/img/No-image-icon.png";
import CDataTable from "src/views/CoreComponents/table/DataTable";

const Suspend = () => {
  const [files, ] = useState("");
  const [show, setShow] = useState(false);
  const [selected] = useState("");
  const [filterVal, setFilterVal] = useState("");
  return (
    <React.Fragment>
      {show === false ? (
        <CCard
          className={"cardSave"}
          style={{
            minHeight: `${window.innerHeight - 198}px`,
            maxHeight: `${window.innerHeight - 198}px`,
            overflow: "auto",
          }}
        >
          <div className={"main-headerlabel"}>
            <span className={"header-label"}>Suspend Party Member</span>
          </div>
          <CContainer>
            <CRow>
              <CCol>
                <CButton
                  shape={"pill"}
                  id={"suspendButton"}
                  className={"saveBtn"}
                  onClick={() => {
                    setShow(true);
                  }}
                  style={{ margin: "20px 0px" }}
                >
                  Suspend Party Mamber
                </CButton>
              </CCol>
            </CRow>
            <CRow>
              <CCol style={{ padding: "0px 50px" }} lg={"6"}>
                <CInput
                  type="checkbox"
                  className="form-check-input"
                  style={{ width: "20px", height: "20px" }}
                  id="exampleCheck1"
                  name="FilterBy"
                  onClick={() => setFilterVal("TypeOfPartyOffice")}
                  checked={filterVal === "TypeOfPartyOffice"}
                />
                <CLabel
                  className="form-check-label"
                  style={{ margin: "5px" }}
                  for="exampleCheck1"
                >
                  Type of Party Office
                </CLabel>
              </CCol>
              <CCol style={{ padding: "0px 50px" }} lg={"6"}>
                <CInput
                  type="checkbox"
                  className="form-check-input"
                  style={{ width: "20px", height: "20px" }}
                  id="exampleCheck1"
                  name="FilterBy"
                  onClick={() => setFilterVal("Location")}
                  checked={filterVal === "Location"}
                />
                <CLabel
                  className="form-check-label"
                  style={{ margin: "5px" }}
                  for="exampleCheck1"
                >
                  Location
                </CLabel>
                
              </CCol>
            </CRow>
            <CRow>
              <CCol>
                <CContainer>
                  <CRow style={{ padding: "10px 0px" }}>
                    <CCol>
                      <CLabel>
                        <b>Type Of Office</b>
                      </CLabel>
                      <Select isDisabled={filterVal !== "TypeOfPartyOffice"} />
                    </CCol>
                  </CRow>
                  <CRow style={{ padding: "10px 0px" }}>
                    <CCol>
                      <CLabel>
                        <b>Type Of Party / Party Wings Office</b>
                      </CLabel>
                      <Select isDisabled={filterVal !== "TypeOfPartyOffice"} />
                    </CCol>
                  </CRow>
                  <CRow style={{ padding: "10px 0px" }}>
                    <CCol>
                      <CLabel>
                        <b>Name of the Office Location</b>
                      </CLabel>
                      <Select isDisabled={filterVal !== "TypeOfPartyOffice"} />
                    </CCol>
                  </CRow>
                </CContainer>
              </CCol>
              <CCol>
                <CContainer>
                  <CRow style={{ padding: "10px 0px" }}>
                    <CCol>
                      <CLabel>
                        <b>State</b>
                      </CLabel>
                      <Select isDisabled={filterVal !== "Location"} />
                    </CCol>
                  </CRow>
                  <CRow style={{ padding: "10px 0px" }}>
                    <CCol>
                      <CLabel>
                        <b>District / City</b>
                      </CLabel>
                      <Select isDisabled={filterVal !== "Location"} />
                    </CCol>
                  </CRow>
                </CContainer>
              </CCol>
            </CRow>
            <CRow style={{ padding: "10px 0px" }}>
              <CDataTable
                tableLabel={"Suspended Party Member List"}
                items={[]}
                fields={[
                  { key: "sNo", label: "Sl. No", _style: { width: "1%" } },
                  {
                    key: "nameofParty",
                    label: "Name of the Party Office",
                    _style: { width: "19%" },
                  },
                  {
                    key: "typeOfOffice",
                    label: "Type of Office",
                    _style: { width: "10%" },
                  },
                  {
                    key: "department",
                    label: "Department",
                    _style: { width: "10%" },
                  },
                  {
                    key: "designation",
                    label: "Designation",
                    _style: { width: "10%" },
                  },
                  { key: "role", label: "Role", _style: { width: "10%" } },
                  { key: "status", label: "Status", _style: { width: "5%" } },
                  { key: "from", label: "From Date", _style: { width: "10%" } },
                  { key: "to", label: "To Date", _style: { width: "5%" } },
                  {
                    key: "show_details",
                    label: "Action",
                    _style: { width: "10%" },
                  },
                ]}
                scopedSlots={{
                  show_details: (item, index) => {
                    return (
                      <td className="py-2">
                        <i
                          style={{ fontSize: "25px", margin: "0px 5px" }}
                          className="fab fa-rev"
                        ></i>
                        <i
                          style={{ fontSize: "25px", margin: "0px 5px" }}
                          className="fas fa-eye"
                        ></i>
                        <i
                          style={{ fontSize: "25px", margin: "0px 5px" }}
                          className="fa fa-trash"
                        ></i>
                      </td>
                    );
                  },
                }}
              />
            </CRow>
          </CContainer>
        </CCard>
      ) : (
        <CCard
          className={"cardSave"}
          style={{
            minHeight: `${window.innerHeight - 198}px`,
            maxHeight: `${window.innerHeight - 198}px`,
            overflow: "auto",
            padding: "0px 20px 0px 30px",
          }}
        >
          <div className={"main-headerlabel"}>
            <span className={"header-label"}>Adding Suspend Party Member</span>
          </div>
          <CContainer>
            <CRow>
              <CCol style={{marginLeft:"1em"}}>
                <CLabel className="form-check-label">
                  <b>Party Member</b>
                </CLabel>
                <Select />
              </CCol>
              <CCol></CCol>
            </CRow>
            <CRow>              
              <CCol lg={"10"}>
              <CContainer style={{marginLeft:"-3em"}}>
                <CRow
                  className={"LengthDataw"}
                  style={{ marginLeft: "2em", marginTop: "20px" }}
                  sm={12}
                  md={12}
                  lg={12}
                >
                  <CCol md="6">
                    <CLabel className={"form-labels-9 col-md-5 reAssign-Label"}>
                    Name :{" "}
                    </CLabel>

                    <CLabel
                      className={"reAssign-Detail"}
                      style={{ marginLeft: "8em" }}
                    >
                      {selected.assignedTo
                        ? selected.assignedTo.firstName
                        : "SathishKumar"}
                    </CLabel>
                  </CCol>
                  <CCol md="6" style={{ marginLeft:"29em", marginTop:"-2.4em" }}>
                    <CLabel className={"form-labels-9 col-md-5 reAssign-Label"}>
                    Gender :{" "}
                    </CLabel>

                    <CLabel className={"reAssign-Detail"} style={{marginLeft:"8em"}}>
                      {selected.assignedTo
                        ? selected.assignedTo.firstName
                        : "Male"}
                    </CLabel>
                  </CCol>
                  <CCol>
                      <img
                        type="text"
                        alt=""
                        src={files !== "" ? files : DEFAULT_IMAGE}
                        style={{
                          width: "150px",
                          height: "200px",
                          position: "relative",
                          background: "#fff",
                          left: "-40%",
                          top: "-4em",
                        }}
                      />
                    </CCol>
                </CRow>
                <CRow
                  className={"LengthDataw"}
                  style={{ marginLeft: "2em", marginTop: "-12em" }}
                  sm={12}
                  md={12}
                  lg={12}
                >
                  <CCol md="6">
                    <CLabel className={"form-labels-9 col-md-5 reAssign-Label"}>
                    DOB :{" "}
                    </CLabel>

                    <CLabel
                      className={"reAssign-Detail"}
                      style={{ marginLeft: "8em" }}
                    >
                      {selected.assignedTo
                        ? selected.assignedTo.firstName
                        : "22/07/1996"}
                    </CLabel>
                  </CCol >
                  <CCol md="6" style={{marginLeft:"29em",marginTop:"-2.4em"}}>
                    <CLabel className={"form-labels-9 col-md-5 reAssign-Label"}>
                    Education :{" "}
                    </CLabel>

                    <CLabel
                      className={"reAssign-Detail"}
                      style={{ marginLeft: "8em" }}
                    >
                      {selected.assignedTo
                        ? selected.assignedTo.firstName
                        : "Mechanical Engineer"}
                    </CLabel>
                  </CCol>
                  </CRow>
                  <CRow
                  className={"LengthDataw"}
                  style={{ marginLeft: "2em", marginTop: "20px" }}
                  sm={12}
                  md={12}
                  lg={12}
                >
                  <CCol md="6">
                    <CLabel className={"form-labels-9 col-md-5 reAssign-Label"}>
                    Occupation :{" "}
                    </CLabel>

                    <CLabel
                      className={"reAssign-Detail"}
                      style={{ marginLeft: "8em" }}
                    >
                      {selected.assignedTo
                        ? selected.assignedTo.firstName
                        : " Software Developer"}
                    </CLabel>
                  </CCol>
                  </CRow>
              </CContainer>
              </CCol>
            </CRow>
            <CRow style={{ margin: "30px 0px" }}>
              <CCol>
                <CLabel>
                  <b>Reason</b>
                </CLabel>
                <CInput type={"text"}></CInput>
              </CCol>
              <CCol>
                <CLabel>
                  <b>Detail for Suspension</b>
                </CLabel>
                <CInput type={"text"}></CInput>
              </CCol>
            </CRow>
            <CRow style={{ margin: "30px 0px" }}>
              <CCol>
                <CLabel>
                  <b>From</b>
                </CLabel>
                <CInput type={"date"}></CInput>
              </CCol>
              <CCol>
                <CLabel>
                  <b>To</b>
                </CLabel>
                <CInput type={"date"}></CInput>
              </CCol>
            </CRow>
            <CRow>
              <CCol>
                <CButton
                  shape={"pill"}
                  id={"suspendButton"}
                  className={"cancelBtn"}
                  onClick={() => {
                    setShow(false);
                  }}
                  style={{ float: "right", margin: "10px" }}
                >
                  Cancel
                </CButton>
                <CButton
                  shape={"pill"}
                  id={"suspendButton"}
                  className={"saveBtn"}
                  onClick={() => {
                    setShow(false);
                  }}
                  style={{ float: "right", margin: "10px" }}
                >
                  Save
                </CButton>
              </CCol>
            </CRow>
          </CContainer>
        </CCard>
      )}
    </React.Fragment>
  );
};

export default Suspend;
