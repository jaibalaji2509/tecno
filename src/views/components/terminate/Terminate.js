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

const Terminate = () => {
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
                  style={{ margin: "20px 0px" }}
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
            <CRow style={{  padding: "2%"}}>
              <CDataTable
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
                    label: "Current Party Postings",
                    _style: { width: "10%" },
                  },
                  { key: "role", label: "Name of the Office", _style: { width: "10%" } },
                  { key: "status", label: "Type of Office", _style: { width: "5%" } },
                  { key: "from", label: "Suspend From", _style: { width: "10%" } },
                  { key: "to", label: "Suspend To", _style: { width: "5%" } },
                  {
                    key: "show_details",
                    label: "Action",
                    _style: { width: "10%" },
                  },
                ]}
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
            <span className={"header-label"}>Details of Party Member</span>
          </div>
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
            <CRow>
              <CCol lg={"2"}>
                <div
                  style={{
                    width: "130px",
                    height: "150px",
                    margin: '30px 20px',
                    background: "#d3d3d3",
                  }}
                ></div>
              </CCol>
              <CCol lg={"10"}>
                <CRow style={{ margin: "30px 0px" }}>
                  <CCol>
                    <CContainer>
                      <CCol>
                        <CLabel className="form-check-label">
                          <b>Name</b>
                        </CLabel>
                      </CCol>
                      <CCol></CCol>
                    </CContainer>
                  </CCol>
                  <CCol>
                    <CContainer>
                      <CCol>
                        <CLabel className="form-check-label">
                          <b>Gender</b>
                        </CLabel>
                      </CCol>
                      <CCol></CCol>
                    </CContainer>
                  </CCol>
                </CRow>
                <CRow style={{ margin: "30px 0px" }}>
                  <CCol>
                    <CContainer>
                      <CCol>
                        <CLabel className="form-check-label">
                          <b>DOB</b>
                        </CLabel>
                      </CCol>
                      <CCol></CCol>
                    </CContainer>
                  </CCol>
                  <CCol>
                    <CContainer>
                      <CCol>
                        <CLabel className="form-check-label">
                          <b>Qualification</b>
                        </CLabel>
                      </CCol>
                      <CCol></CCol>
                    </CContainer>
                  </CCol>
                </CRow>
                <CRow style={{ margin: "30px 0px" }}>
                  <CCol>
                    <CContainer>
                      <CCol>
                        <CLabel className="form-check-label">
                          <b>Occupation</b>
                        </CLabel>
                      </CCol>
                      <CCol></CCol>
                    </CContainer>
                  </CCol>
                </CRow>
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
                  <b>Detail for Earlier Suspension</b>
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
