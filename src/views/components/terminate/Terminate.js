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
import CDataTable from "src/views/CoreComponents/table/DataTable";
import DEFAULT_IMAGE from "../../../assets/img/No-image-icon.png";

const Terminate = () => {
  const [files] = useState("");
  const [selected] = useState("");
  const [show, setShow] = useState(false);
  const [filterVal, setFilterVal] = useState("");

  const type = [
    { value: "youth", label: "youth wings Association" },
    { value: "Lawyers", label: "Lawyers wings Association" },
  ];
  const state = [
    { value: "tamilnadu", label: "TamilNadu" },
  ];
  const city = [
    { value: "chennai", label: "Chennai" },
  ];
  const name = [
    { value: "Chennai-youth", label: "Chennai youth wings Association" },
    { value: "Chennai-Lawyers", label: "Chennai Lawyers wings Association" },
  ];
  const office = [
    { value: "party", label: "Type of Party Office" },
    { value: "wings", label: "Type of Party Wings Office" },
  ];
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
            <span className={"header-label"}>Terminate Party Member</span>
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
                  style={{ margin: "1em" }}
                >
                  Terminate Party Mamber
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
                      <Select
                        isDisabled={filterVal !== "TypeOfPartyOffice"}
                        options={office}
                      />
                    </CCol>
                  </CRow>
                  <CRow style={{ padding: "10px 0px" }}>
                    <CCol>
                      <CLabel>
                        <b>Type Of Party / Party Wings Office</b>
                      </CLabel>
                      <Select
                        isDisabled={filterVal !== "TypeOfPartyOffice"}
                        options={type}
                      />
                    </CCol>
                  </CRow>
                  <CRow style={{ padding: "10px 0px" }}>
                    <CCol>
                      <CLabel>
                        <b>Name of the Office Location</b>
                      </CLabel>
                      <Select
                        isDisabled={filterVal !== "TypeOfPartyOffice"}
                        options={name}
                      />
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
                      <Select isDisabled={filterVal !== "Location"} options={state} />
                    </CCol>
                  </CRow>
                  <CRow style={{ padding: "10px 0px" }}>
                    <CCol>
                      <CLabel>
                        <b>District / City</b>
                      </CLabel>
                      <Select isDisabled={filterVal !== "Location"} options={city}/>
                    </CCol>
                  </CRow>
                </CContainer>
              </CCol>
            </CRow>
            <CRow style={{ padding: "2%" }}>
              <CDataTable
                items={[]}
                tableLabel={"List of Terminated Member"}
                fields={[
                  { key: "sNo", label: "Sl. No", _style: { width: "1%" } },
                  {
                    key: "membername",
                    label: "Name of the Member",
                    _style: { width: "19%" },
                  },
                  {
                    key: "gender",
                    label: "Gender",
                    _style: { width: "10%" },
                  },
                  {
                    key: "department",
                    label: "Age",
                    _style: { width: "10%" },
                  },
                  {
                    key: "designation",
                    label: "Current Party Postings",
                    _style: { width: "15%" },
                  },
                  {
                    key: "role",
                    label: "Name of the Office",
                    _style: { width: "15%" },
                  },
                  {
                    key: "status",
                    label: "Type of Office",
                    _style: { width: "15%" },
                  },
                  {
                    key: "from",
                    label: "Terminate On",
                    _style: { width: "10%" },
                  },
                  {
                    key: "to",
                    label: "Terminated By",
                    _style: { width: "10%" },
                  },
                  {
                    key: "show_details",
                    label: "Action",
                    _style: { width: "10%" },
                  },
                ]}
                columnFilter
                tableFilter
                itemsPerPageSelect
                itemsPerPage={5}
                hover
                sorter
                pagination
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
          }}
        >
          <div className={"main-headerlabel"}>
            <span className={"header-label"}>Details of Terminate Member</span>
          </div>
          <CCol>
            <CLabel
              style={{
                fontSize: "20PX",
                fontFamily: "Open Sans",
                fontWeight: "700",
                marginTop: "60px",
                marginLeft: "1em",
              }}
            >
              Select Party Member
            </CLabel>
          </CCol>

          <CContainer>
            <CRow>
              <CCol style={{ marginLeft: "1.5em" }}>
                <CLabel className="form-check-label">
                  <b>Party Member</b>
                </CLabel>
                <Select />
              </CCol>
              <CCol></CCol>
            </CRow>
            <CContainer style={{ marginLeft: "-2em" }}>
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
                <CCol md="6" style={{ marginLeft: "-200px" }}>
                  <CLabel className={"form-labels-9 col-md-5 reAssign-Label"}>
                    Gender :{" "}
                  </CLabel>

                  <CLabel
                    className={"reAssign-Detail"}
                    style={{ marginLeft: "8em" }}
                  >
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
                style={{ marginLeft: "2em", marginTop: "-10em" }}
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
                </CCol>
                <CCol
                  md="6"
                  style={{ marginLeft: "29em", marginTop: "-2.4em" }}
                >
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

            <CRow style={{ padding: "2%" }}>
              <CDataTable
                tableLabel={"Details of earlier suspension "}
                items={[]}
                fields={[
                  { key: "sNo", label: "Sl. No", _style: { width: "1%" } },
                  {
                    key: "membername",
                    label: "Name of the Party Office",
                    _style: { width: "19%" },
                  },
                  {
                    key: "gender",
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
                  { key: "Reason", label: "Reason", _style: { width: "5%" } },
                  { key: "from", label: "From date", _style: { width: "10%" } },
                  { key: "to", label: "To date", _style: { width: "10%" } },

                  {
                    key: "show_details",
                    label: "Action",
                    _style: { width: "10%" },
                  },
                ]}
                columnFilter
                tableFilter
                itemsPerPageSelect
                itemsPerPage={5}
                hover
                sorter
                pagination
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
                  Terminate
                </CButton>
              </CCol>
            </CRow>
          </CContainer>
        </CCard>
      )}
    </React.Fragment>
  );
};

export default Terminate;
