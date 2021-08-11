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
  const [files, ] = useState("");
  const [show, setShow] = useState(false);
  const [selected] = useState("");
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
      { show === false ? (     
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
                  style={{ margin: "20px 10px" }}
                >
                  Promote Party Mamber
                  </CButton>
              </CCol>
            </CRow>
            
            <CRow md="12" sm="12" lg="12" >
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
          }}>
          <CContainer style={{marginLeft:"-3.5em"}}>
          <div className={"main-headerlabel"} >
            <span className={"header-label"}>Adding Promote Party Member</span>
          </div>
          <CCol>
            <CLabel
              style={{
                fontSize: "20PX",
                fontFamily: "Open Sans",
                fontWeight: "700",
                marginTop: "60px",
                marginLeft:"3em"
              }}
            >
              Select Party Member
                    </CLabel>
          </CCol>

          <CContainer>
            <CRow>
              <CCol className={"column-align"} style={{marginLeft:"4.2em"}}>
                <CLabel className="form-check-label">
                  <b>Party Member</b>
                </CLabel>
                <Select>
                  <option>HEAD OFFICE, MAHARASTRA, MUMBAI, MADAM CAMMA ROAD, ADMINISTRATION, CHAIRMAN, GENERAL...</option>
                </Select>
              </CCol>
              <CCol></CCol>
            </CRow>
            <CContainer>
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
                      className={"reAssign-Detail23"}
                      
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

                    <CLabel className={"reAssign-Detail23"} >
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
                      className={"reAssign-Detail23"}
                      
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
                      className={"reAssign-Detail23"}
                      
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
                      className={"reAssign-Detail23"}
                      
                    >
                      {selected.assignedTo
                        ? selected.assignedTo.firstName
                        : " Software Developer"}
                    </CLabel>
                  </CCol>
                  </CRow>
              </CContainer>
            
              <div className={"row-headerlabel"} style={{marginTop:"2.5em"}}>
                <span style={{ marginLeft: "3em" }} className={"header-label"}>
                  {" "}
                  PROMOTE TO{" "}
                </span>
              </div>            
            <CRow className={"row-alignment"} md="12" sm="12" lg="12">
              <CCol className={"column-align"} md="3">
                <CLabel className={"label-name-1"}>
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
                <CLabel className={"label-name-1"}>
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
                <CLabel className={"label-name-1"}>
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
                <CLabel className={"label-name-1"}>
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

            <CRow style={{ padding: "4%", marginTop: "2.5%" }}>
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

            <CRow className={"row-alignment"} md="12" sm="12" lg="12" style={{marginTop:"2.5em"}}>
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
              <CCol className={"promotebutton"}>
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
          </CContainer>
        </CCard>
      )}
    </React.Fragment>
  );
};

export default Promote;
