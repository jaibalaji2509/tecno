import React, { useState } from "react";
import CDataTable from "../../CoreComponents/table/CDataTable";
import {
  CRow,
  CCard,
  CCol,
  CLabel,
  CButton,
  CInput,
  CWidgetDropdown,
} from "@coreui/react";
import {} from "../../../services/ApiService";
import Select from "react-select";
import "./PartyOfficeLocation.css";
function PartyOfficeLocation() {
  const [addPartyOffice, setAddPartyOffice] = useState(true);
  const [createPartyOffice, setCreatepartyOffice] = useState(false);
  const [menu, setMenu] = useState({
    style: "menu",
    style1: "menu1",
    menuStatus: "open",
    style3: "menu1",
  });
  const [locationHide, setLocationHide] = useState({
    corporation: true,
  });
  const [editShow, setEditShow] = useState(false);
  const [sideBar1, setSideBar1] = useState(false);
  const changePartyOffice = async () => {
    await setAddPartyOffice(false);
    await setCreatepartyOffice(true);
  };
  const cancelPartyOffice = () => {
    setAddPartyOffice(true);
    setCreatepartyOffice(false);
  };
  const userData1 = [
    {
      SNo: "1",
      Street: "Head Quaters",
      District: "HOF",
      Area: "HO",
      male: " - ",
      ENTERBY: "Sathish ",
      ENTERON: "12/05/2021",
    },
    {
      SNo: "2",
      Street: "Branch Office",
      District: "BOFF",
      Area: "BO",
      male: " Head Quaters ",
      ENTERBY: "Sathish ",
      ENTERON: "31/05/2021",
    },
  ];
  const fields1 = [
    {
      key: "SNo",
      label: "S.NO",
      _style: { width: "5%" },
      sorter: false,
      filter: false,
    },

    { key: "Street", label: "Type of Party Office", _style: { width: "15%" } },
    { key: "District", label: "Abbreviation", _style: { width: "10%" } },
    { key: "Area", label: "Code", _style: { width: "10%" } },
    { key: "male", label: "Reporting To Office", _style: { width: "12%" } },

    {
      key: "ENTERBY",
      label: "Entered By",
      _style: { width: "7%" },
      sorter: false,
      filter: false,
    },
    {
      key: "ENTERON",
      label: "Entered On",
      _style: { width: "7%" },
      sorter: false,
      filter: false,
    },
    {
      key: "show_details",
      label: "Action",
      _style: { width: "5%" },
      sorter: false,
      filter: false,
    },
  ];

  const userData = [
    {
      SNo: "1",
      NAMEOFWINGOFFICE: "Chennai Wing Office",
      WingOffice: "Head Quaters",
      ReportingTo: "-",
      address: "Jones Road  ",
      area: "Saidapet",

      city: "Sathish ",
      pinccode: "31/05/2021",
    },
    {
      SNo: "2",
      NAMEOFWINGOFFICE: "Chennai Youth Association",
      WingOffice: "District Party Office",
      ReportingTo: "Head Quaters",
      address: "Abiramipuram Street  ",
      area: "Mylapore",
      city: "Sathish ",
      pinccode: "31/05/2021",
    },
  ];

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
    { key: "address", label: "Address ", _style: { width: "20%" } },
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
  const officeType = [{ value: "Head Office", label: "Head Office" }];
  const partyofficeType = [
    { value: "Head Office", label: "Head Office - Chennai Head Office" },
    { value: "District Office", label: "District Office" },
  ];
  const [typeofPartyOffice, setTypeofPartyOffice] = useState("");

  const locations = [
    {
      value: "TamilNadu Chennai Mylapore - 600005",
      label: "TamilNadu Chennai Mylapore - 600005",
    },
  ];
  const addTypeofPartyOffice = () => {
    switch (menu.menuStatus) {
      case "open":
        setMenu({
          menuStatus: "close",
          style3: "menu2",
          style: "menu active",
          style1: "menu1",
        });
        setSideBar1(true);
        break;
      case "close":
        setMenu({
          menuStatus: "open",
          style3: "menu1",
          style: "menu",
          style1: "menu1",
        });
        setTimeout(() => {
          setSideBar1(false);
        }, 1000);
        break;
    }
  };
  const [hidePartyOffice, setHidePartyOffice] = useState(true);
  const viewTypeofPartyOffice = () => {
    setHidePartyOffice(false);
  };
  return (
    <div className={menu.style3}>
      {sideBar1 && (
        <div className={menu.style}>
          <div className={"main-headerlabel"} style={{ marginTop: "-40px" }}>
            <span className={"header-label"}> Adding Type of Party Office</span>
          </div>
          {locationHide.corporation && (
            <div>
              {hidePartyOffice && (
                <div style={{ marginLeft: "-26px" }}>
                  <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                    <CCol className={"column-align"} md="4">
                      <CLabel className={"label-name"}>
                        Type of Party Office
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <CInput
                        className={"input-align"}
                        id={"municipalstatename"}
                        name={"PartyOffice"}
                        placeholder={"Enter Party Office"}
                      />
                    </CCol>
                    <CCol className={"column-align"} md="4">
                      <CLabel className={"label-name"}>
                        Abbreviation
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <CInput
                        className={"input-align"}
                        id={"municipaldistrict"}
                        name={"Abbreviation"}
                        placeholder={"Enter Abbreviation"}
                      />
                    </CCol>
                  </CRow>
                  <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                    <CCol className={"column-align"} md="4">
                      <CLabel className={"label-name"}>
                        Code
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <CInput
                        className={"input-align"}
                        id={"municipaldistrict"}
                        name={"city"}
                        placeholder={"Enter Code"}
                      />
                    </CCol>
                    <CCol className={"column-align"} md="4">
                      <CLabel className={"label-name"}>
                        Reporting To Office
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <Select
                        className={"input-align"}
                        id={"municipalarea"}
                        name={"area"}
                        placeholder={"Select Reporting To"}
                        options={officeType}
                      />
                    </CCol>
                  </CRow>
                  <CRow style={{ marginTop: "45px" }}>
                    <CCol md="10">
                      <CCol
                        md="5"
                        style={{
                          marginLeft: "270px",
                          float: "right",
                          marginTop: "-25px",
                          position: "absolute",
                        }}
                      >
                        <CButton
                          style={{
                            float: "right",
                          }}
                          id={"cancelAbbreviationConfigureCode"}
                          className={"cancelBtn"}
                          onClick={addTypeofPartyOffice}
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
                </div>
              )}

              <CRow>
                <CCol
                  style={{ fontSize: "1.55rem", top: "70px" }}
                  md={12}
                  sm={12}
                  lg={12}
                >
                  <img
                    id={"employeeDataorgEmployeeData"}
                    alt={""}
                    src={
                      "https://img.icons8.com/fluent/2x/organization-chart-people.png"
                    }
                    style={{
                      height: "40px",
                      width: "40px",

                      marginLeft: "865px",
                      marginBottom: "20px",
                    }}
                  />
                </CCol>
                <CCol style={{ fontSize: "1.55rem" }} md={12} sm={12} lg={12}>
                  <i
                    id={"locationLibraryDelete"}
                    style={{
                      position: "absolute",
                      top: "20px",
                      marginLeft: "735px",
                      marginBottom: "20px",
                      color: "black",
                    }}
                    className="fa fa-print"
                  ></i>
                </CCol>
                <CCol style={{ fontSize: "1.55rem" }} md={12} sm={12} lg={12}>
                  <i
                    id={"locationLibraryDelete"}
                    style={{
                      position: "absolute",
                      top: "20px",
                      marginLeft: "800px",
                      marginBottom: "910px",
                      color: "black",
                    }}
                    className="fa fa-share-alt"
                  ></i>
                </CCol>
              </CRow>

              <CRow style={{ padding: "4%", marginTop: "-6.5%" }}>
                <CDataTable
                  items={userData1}
                  fields={fields1}
                  columnFilter
                  tableFilter
                  tableLabel={"List of Type of Party Office"}
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
                              <i onClick={() => {}}></i>
                              <i
                                style={{
                                  marginRight: "5px",
                                  color: "#3480e2",
                                  cursor: "pointer",
                                }}
                                id={"locationLibraryEdit"}
                                className="fas fa-edit"
                              ></i>
                              <i
                                id={"locationLibraryDelete"}
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
            </div>
          )}
        </div>
      )}
      {addPartyOffice && (
        <div>
          <CCard className={"cardSave"}>
            <div className={"main-headerlabel"}>
              <span className={"header-label"}>
                Type of Party Office Location
              </span>
            </div>

            <CRow style={{ marginTop: "130px" }}>
              <CCol md="10" lg="10" sm="10">
                <CCol
                  md="5"
                  style={{
                    marginLeft: "5px",
                    float: "right",
                    marginTop: "-10px",
                    top: "33px",
                    position: "absolute",
                  }}
                >
                  <CButton
                    style={{
                      float: "right",
                      marginRight: "762px",
                      position: "absolute",
                      marginLeft: "18px",
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
            <CRow
              style={{
                marginTop: "75px",
                marginLeft: "240px",
                position: "absolute",
              }}
            >
              <CCol sm="3" lg="3" style={{ marginLeft: "-160px" }}>
                <CWidgetDropdown
                  style={{
                    width: "280px",
                    textAlign: "center",
                    fontSize: "30px",
                    float: "right",
                    height: "100px",
                  }}
                  color="gradient-danger"
                  header=""
                  text=""
                >
                  <span
                    style={{
                      marginLeft: "-30px",
                      fontSize: "24px",
                      fontWeight: "700",
                    }}
                  >
                    Total
                  </span>
                  <span
                    style={{
                      marginLeft: "-152px",
                      marginTop: "30px",
                      fontSize: "24px",
                      fontWeight: "700",
                    }}
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
                    height: "100px",
                  }}
                  color="gradient-primary"
                  header=""
                  text=""
                >
                  <span
                    style={{
                      marginLeft: "-110px",
                      fontSize: "24px",
                      fontWeight: "700",
                    }}
                  >
                    District Party Office
                  </span>
                  <span
                    style={{
                      marginLeft: "-252px",
                      marginTop: "30px",
                      fontSize: "24px",
                      fontWeight: "700",
                    }}
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
                    height: "100px",
                  }}
                  color="gradient-warning"
                  header=""
                  text=""
                >
                  <span
                    style={{
                      marginLeft: "-110px",
                      fontSize: "24px",
                      fontWeight: "700",
                    }}
                  >
                    Circle Party Office
                  </span>
                  <span
                    style={{
                      marginLeft: "-252px",
                      marginTop: "30px",
                      fontSize: "24px",
                      fontWeight: "700",
                    }}
                  >
                    1
                  </span>
                  <br />
                  <br />
                </CWidgetDropdown>
              </CCol>
            </CRow>
            <CRow>
              <CCol
                style={{ fontSize: "1.55rem", top: "100px" }}
                md={12}
                sm={12}
                lg={12}
              >
                <img
                  id={"employeeDataorgEmployeeData"}
                  alt={""}
                  src={
                    "https://img.icons8.com/fluent/2x/organization-chart-people.png"
                  }
                  style={{
                    height: "40px",
                    width: "40px",

                    marginLeft: "955px",
                    marginBottom: "20px",
                  }}
                />
              </CCol>
              <CCol style={{ fontSize: "1.55rem" }} md={12} sm={12} lg={12}>
                <i
                  id={"locationLibraryDelete"}
                  style={{
                    position: "absolute",
                    top: "50px",
                    marginLeft: "795px",
                    marginBottom: "20px",
                    color: "black",
                  }}
                  className="fa fa-print"
                ></i>
              </CCol>
              <CCol style={{ fontSize: "1.55rem" }} md={12} sm={12} lg={12}>
                <i
                  id={"locationLibraryDelete"}
                  style={{
                    position: "absolute",
                    top: "50px",
                    marginLeft: "870px",
                    marginBottom: "910px",
                    color: "black",
                  }}
                  className="fa fa-share-alt"
                ></i>
              </CCol>
            </CRow>
            <CRow style={{ padding: "4%", marginTop: "-3.5%" }}>
              <CDataTable
                items={userData}
                fields={fields}
                columnFilter
                tableFilter
                tableLabel={"List of Type of party Office Location"}
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
                          <CCol style={{ fontSize: "1.15rem" }} md="12"></CCol>
                        </CRow>
                      </td>
                    );
                  },
                  show_details1: (item, index) => {
                    return (
                      <td className="py-2">
                        <CRow>
                          <CCol style={{ fontSize: "1.15rem" }} md="12">
                            <i onClick={() => {}}></i>
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
                  options={partyofficeType}
                  value={typeofPartyOffice}
                  onChange={(e) => {
                    setTypeofPartyOffice(e);
                    setEditShow(true);
                  }}
                />
              </CCol>

              <CCol md={1} lg={1}>
                <CButton
                  style={{
                    marginLeft: "26px",
                    marginTop: "65px",
                    backgroundColor: "#f9d423",
                    borderLine: "5px !important",
                    borderColor: "white",
                    fontSize: "1.25rem",
                    color: "#ffff",
                  }}
                  class={"fa fa-plus"}
                  onClick={addTypeofPartyOffice}
                ></CButton>
              </CCol>
              <CCol md={1} lg={1}>
                <i
                  style={{
                    marginLeft: "-25px",
                    marginTop: "68px",

                    fontSize: "1.50rem",
                    color: "red",
                  }}
                  class={"fa fa-eye"}
                  onClick={() => {
                    addTypeofPartyOffice();
                    viewTypeofPartyOffice();
                  }}
                ></i>
              </CCol>
              {editShow && (
                <CCol md={1} lg={1}>
                  <i
                    style={{
                      marginLeft: "-80px",
                      marginTop: "68px",
                      fontSize: "1.25rem",
                      color: "#3480e2",
                      cursor: "pointer",
                    }}
                    onClick={addTypeofPartyOffice}
                    id={"locationLibraryEdit"}
                    className="fas fa-edit"
                  ></i>
                </CCol>
              )}

              <CCol
                className={"column-align"}
                md={4}
                lg={4}
                style={{ marginLeft: "-105px" }}
              >
                <CLabel className={"label-name"}>
                  Reporting To Office
                  <span className={"text-danger"}>*</span>
                </CLabel>
                <Select
                  className={"input-align"}
                  id={"municipalarea"}
                  name={"area"}
                  placeholder={"Select Reporting To"}
                  options={officeType}
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
                  options={locations}
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
