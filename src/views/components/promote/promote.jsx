import React, { useState } from "react";
import {
  CButton,
  CCard,
  CCol,
  CContainer,
  CInput,
  CLabel,
  CRow,
} from "@coreui/react";
import CDataTable from "src/views/CoreComponents/table/DataTable";
import DEFAULT_IMAGE from "../../../assets/img/No-image-icon.png";
import Select from "react-select";

const Promote = () => {
  const [files, setFiles] = useState("");
  const [show, setShow] = useState(false);
  const [filterVal, setFilterVal] = useState("");
  const userData = [
    {
      sNo: "1",
      membername: "HEAD OFFICE Chennai",
      gender: "HEADOFFICE",
      department: "Agriculture",
      designation: "Assitance Labour",
      role: "----",
      status: "----",
      from: "2/06/2021",
      to: "25/06/2025"
    },
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
            <span className={"header-label"}>Promote Party Member</span>
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
                  Promote Party Mamber
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
                        <CRow style={{ padding: "2%" }}>
              <CDataTable
                tableLabel={"List of Promoted Members "}
                items={[]}
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
                    label: "Promoted Party Postings",
                    _style: { width: "10%" },
                  },
                  { key: "role", label: "Name of the Office", _style: { width: "10%" } },
                  { key: "status", label: "Type of Office", _style: { width: "5%" } },
                  { key: "from", label: "Promoted", _style: { width: "10%" } },
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
            <span className={"header-label"}>Adding Promote Party Member</span>
          </div>
          <CCol>
            <CLabel
              style={{
                fontSize: "20PX",
                fontFamily: "Open Sans",
                fontWeight: "700",
                marginTop: "60px",
              }}
            >
              Select Party Member
                    </CLabel>
          </CCol>

          <CContainer>
            <CRow>
              <CCol>
                <CLabel className="form-check-label">
                  <b>Party Member</b>
                </CLabel>
                <Select>
                  <option>HEAD OFFICE, MAHARASTRA, MUMBAI, MADAM CAMMA ROAD, ADMINISTRATION, CHAIRMAN, GENERAL...</option>
                </Select>
              </CCol>
              <CCol></CCol>
            </CRow>
            <CRow className={"row-alignment"}>
              <CCol className={"column-align"} md="4">
                <CLabel className={"label-name"}>
                  Name
                        <span>-</span>
                </CLabel>
                <span>  Jai Balaji</span>
              </CCol>
              <CCol className={"column-align"} md="4">
                <CLabel className={"label-name"}>
                  Gender
                        <span>-</span>
                </CLabel>
                <span>  Male</span>
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
                    top: "-3%",
                  }}
                />
              </CCol>
            </CRow>
            <CRow
              className={"row-alignment"}
              style={{ marginTop: "-140px" }}
            >
              <CCol className={"column-align"} md="4">
                <CLabel className={"label-name"}>
                  DOB
                        <span>-</span>
                </CLabel>
                <span>  25-09-1996</span>
              </CCol>
              <CCol className={"column-align"} md="4">
                <CLabel className={"label-name"}>
                  Education
                        <span>-</span>
                </CLabel>
                <span>  B.E. CSE</span>
              </CCol>
            </CRow>
            <CRow className={"row-alignment"}>
              <CCol className={"column-align"} md="4">
                <CLabel className={"label-name"}>
                  Occupation
                        <span>-</span>
                </CLabel>
                <span>  Software Developer</span>
              </CCol>
            </CRow>
            <div style={{ marginLeft: "-2px" }}>
              <div className={"row-headerlabel"}>
                <span style={{ marginLeft: "70px" }} className={"header-label"}>
                  {" "}
                  PROMOTE TO{" "}
                </span>
              </div>
            </div>
            <CRow className={"row-alignment"} md="12" sm="12" lg="12">
              <CCol className={"column-align"} md="3">
                <CLabel className={"label-name"}>
                  Type of Vaccancy
                  <span className={"text-danger"}>*</span>
                </CLabel>
                <Select
                  type={"text"}
                  id={"wingReportingTo"}
                  className={"Select"}
                  placeholder="Select the Type of Vaccancy"
                >
                  <option>All Roles</option>
                </Select>
              </CCol>
              <CCol className={"column-align"} md={3}>
                <CLabel className={"label-name"}>
                  Search Based
                  <span className={"text-danger"}>*</span>
                  <span style={{ color: "green" }}>-</span>
                </CLabel>
                <Select
                  type={"text"}
                  id={"wingReportingTo"}
                  className={"Select"}
                  placeholder="Select..."
                >
                   <option>Department</option>
                </Select>
              </CCol>
              <CCol className={"column-align"} md={3}>
                <CButton
                  shape={"pill"}
                  id={"suspendButton"}
                  className={"saveBtn"}
                  onClick={() => {
                    setShow(false);
                  }}
                  style={{ float: "right", marginRight: "220px", marginTop:"28px" }}
                >
                  View
                  </CButton>
              </CCol>
            </CRow>

            <CRow className={"row-alignment"} md="12" sm="12" lg="12">
              <CCol className={"column-align"} md="3">
                <CLabel className={"label-name"}>
                  Select by DepartMent
                  <span className={"text-danger"}>*</span>
                </CLabel>
                <Select
                  type={"text"}
                  isDisabled
                  id={"wingReportingTo"}
                  className={"Select"}
                  placeholder="Select...."
                >
                   <option>Agriculture</option>
                </Select>
              </CCol>
              <CCol className={"column-align"} md={3}>
                <CLabel className={"label-name"}>
                  Search Type of Office
                  <span className={"text-danger"}>*</span>
                  <span style={{ color: "green" }}>-</span>
                </CLabel>
                <Select
                  type={"text"}
                  id={"wingReportingTo"}
                  className={"Select"}
                  placeholder="Select..."
                >
                   <option>Head Office</option>
                </Select>
              </CCol>
            </CRow>

            <CRow style={{ padding: "2%" }}>
              <CDataTable
                tableLabel={"List of Party Posting "}
                items={userData}
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
                  { key: "status", label: "Status", _style: { width: "5%" } },
                  { key: "from", label: "From date", _style: { width: "10%" } },
                  { key: "to", label: "To date", _style: { width: "10%" } },

                  {
                    key: "show_details",
                    label: "Action",
                    _style: { width: "15%" },
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
                          style={{ fontSize: "25px", margin: "0px 5px", color: "#3480e2", }}
                          className="fas fa-eye"
                        ></i>
                        <i
                          style={{ fontSize: "25px", margin: "0px 5px", color: "#e85654", }}
                          className="fa fa-trash"
                        ></i>
                      </td>
                    );
                  },
                }}
              />
            </CRow>

            <CRow className={"row-alignment"} md="12" sm="12" lg="12">
              <CCol className={"column-align"} md="3">
                <CLabel className={"label-name"}>
                Date of Relieving
                  <span className={"text-danger"}>*</span>
                </CLabel>
                <CInput
                type={"date"}
                 className={"input-align"}
                 id={"municipalstatename"}
                 name={"state"}
                 placeholder="dd-mm-yyyy"
               />

              </CCol>
              <CCol className={"column-align"} md={3}>
                <CLabel className={"label-name"}>
                Date of Joining 
                  <span className={"text-danger"}>*</span>
                  <span style={{ color: "green" }}>-</span>
                </CLabel>
                <CInput
                type={"date"}
                 className={"input-align"}
                 id={"municipalstatename"}
                 name={"state"}
                 placeholder="dd-mm-yyyy"
               />

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
                  Promote
                  </CButton>
              </CCol>
            </CRow>

          </CContainer>
        </CCard>
      )}
    </React.Fragment>
  );
};

export default Promote;
