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
  import Select from "react-select";
  import CDataTable from "src/views/CoreComponents/table/DataTable";
  import DEFAULT_IMAGE from "../../../assets/img/No-image-icon.png";

  const Promote = () => {
    const [files, setFiles] = useState("");
    const [show, setShow] = useState(false);
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
                  <Select />
                </CCol>
                <CCol></CCol>
              </CRow>
              <CRow className={"row-alignment"}>
                    <CCol className={"column-align"} md="4">
                      <CLabel className={"label-name"}>
                        Name
                        <span>-</span>
                      </CLabel>
                    </CCol>
                    <CCol className={"column-align"} md="4">
                      <CLabel className={"label-name"}>
                        Gender
                        <span>-</span>
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
                    </CCol>
                    <CCol className={"column-align"} md="4">
                      <CLabel className={"label-name"}>
                        Education
                        <span>-</span>
                      </CLabel>
                    </CCol>
                  </CRow>
                  <CRow className={"row-alignment"}>
                    <CCol className={"column-align"} md="4">
                      <CLabel className={"label-name"}>
                        Occupation
                        <span>-</span>
                      </CLabel>
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
                    <b>Detail for Promotion</b>
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
                    Promote
                  </CButton>
                </CCol>
              </CRow>
              <CRow style={{ padding: "2%" }}>
                <CDataTable
                  tableLabel={"List of Party Posting "}
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
                  { key: "status", label: "Status", _style: { width: "5%" } },
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

            </CContainer>
          </CCard>
        )}
      </React.Fragment>
    );
  };
  
  export default Promote;
