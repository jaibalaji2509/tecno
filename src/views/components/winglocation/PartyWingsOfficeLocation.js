import React, { useState } from "react";
import CDataTable from "../../CoreComponents/table/CDataTable";
import {
  CRow,
  CCard,
  CCol,
  CLabel,
  CButton,
  CInput,
  CLink,
} from "@coreui/react";
import {} from "../../../services/ApiService";
import Select, { components } from "react-select";
import "./PartyWingsOfficeLocation.css";
import { Dropdown, Menu } from "antd";
import "antd/dist/antd.css";
import jsPDF from "jspdf";
import "jspdf-autotable";
import ReactTooltip from "react-tooltip";

function PartyWingsOfficeLocation() {
  const [addPartyOffice, setAddPartyOffice] = useState(true);
  const [createPartyOffice, setCreatepartyOffice] = useState(false);
  // const [editShow, setEditShow] = useState(false);
  const [sideBar1, setSideBar1] = useState(false);
  const [sideBar2, setSideBar2] = useState(false);

  const changePartyOffice = async () => {
    await setAddPartyOffice(false);
    await setCreatepartyOffice(true);
  };
  const cancelPartyOffice = () => {
    setAddPartyOffice(true);
    setCreatepartyOffice(false);
  };
  const userDataoffice = [
    {
      SNo: "1",
      Street: "Head Office TamilNadu Chennai Mylapore - 600004 ",
      District: "HOF",
      Area: "HO",
      male: " - ",
      ENTERBY: "Jai Balaji ",
      ENTERON: "12/05/2021",
    },
    {
      SNo: "2",
      Street: "Branch Office",
      District: "BOFF",
      Area: "BO",
      male: " Head Office TamilNadu Chennai Mylapore - 600004  ",
      ENTERBY: "Jai Balaji ",
      ENTERON: "31/05/2021",
    },
  ];
  const fieldsoffice = [
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
      WingOffice: "Head Office TamilNadu Chennai Mylapore - 600004 ",
      ReportingTo: "-",
      address: "Jones Road",
      area: "Saidapet",
      by: "Jai Balaji",
      on: "31/05/2021",
    },
    {
      SNo: "2",
      NAMEOFWINGOFFICE: "Chennai Youth  Association",
      WingOffice: "Branch Office",
      ReportingTo: "Head Office TamilNadu Chennai Mylapore - 600004",
      address: "Abiramipuram Street",
      area: "Mylapore",
      by: "Jai Balaji",
      on: "31/05/2021",
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
      label: "Name of Party Wings Office",
      _style: { width: "10%" },
    },
    {
      key: "WingOffice",
      label: " Type of Party Wings Office ",
      _style: { width: "10%" },
    },
    {
      key: "ReportingTo",
      label: "Hierarchy Reporting Office",
      _style: { width: "15%" },
    },
    { key: "address", label: "Address 1", _style: { width: "15%" } },
    { key: "by", label: "Entered By", _style: { width: "10%" } },
    { key: "on", label: "Entered On", _style: { width: "10%" } },

    {
      label: "Action",
      key: "show_details",

      _style: { width: "1%" },
      sorter: false,
      filter: false,
    },
  ];
  const officeType = [{ value: "Head Office", label: "Head Office TamilNadu Chennai Mylapore - 600004 " }];
  const partyofficeType = [
    {
      span: (
        <CLink className={"saveBtn"} style={{ marginLeft: "200px" }}>
          Add{" "}
        </CLink>
      ),
    },
    { value: "Head Office", label: "Head Office" },
    { value: "District Office", label: "Branch Office" },
  ];
  // const [typeofPartyOffice, setTypeofPartyOffice] = useState("");

  const locations = [
    {
      value: "TamilNadu Chennai Mylapore - 600005",
      label: "TamilNadu Chennai Mylapore - 600005",
    },
  ];
  const [menu, setMenu] = useState({
    style: "menu",
    style1: "menu1",
    menuStatus: "open",
    style3: "menu1",
  });
  const addTypeofPartyOffice = () => {
    switch (menu.menuStatus) {
      case "open":
      default:
        setMenu({
          menuStatus: "close",
          style3: "menu2",
          style: "menu active",
          style1: "menu1",
        });
        setSideBar1(true);
        setHidePartyOffice(true);
        setBackButt(false);
        setSideBar2(false);
        setCreatepartyOffice(false);
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
        setCreatepartyOffice(true);
        break;
    }
    setSideBar2(false);
  };
  const addTypeofPartyOffice1 = () => {
    switch (menu.menuStatus) {
      case "open":
      default:
        setMenu({
          menuStatus: "close",
          style3: "menu2",
          style: "menu active",
          style1: "menu1",
        });
        setSideBar2(true);
        setHidePartyOffice(true);
        setBackButt(false);
        setSideBar1(false);
        setCreatepartyOffice(false);
        break;
      case "close":
        setMenu({
          menuStatus: "open",
          style3: "menu1",
          style: "menu",
          style1: "menu1",
        });
        setTimeout(() => {
          setSideBar2(false);
        }, 1000);
        setCreatepartyOffice(true);
        break;
    }
    setSideBar1(false);
  };

  // const [backbutt2, setBackButt2] = useState(false);
  // const [hidePartyOffice2, setHidePartyOffice2] = useState(true);
  const [hidePartyOffice, setHidePartyOffice] = useState(true);
  const [backbutt, setBackButt] = useState(false);
  const viewTypeofPartyOffice = () => {
    setHidePartyOffice(false);
    setBackButt(true);
  };
  const viewTypeofPartyOffice1 = () => {
    setHidePartyOffice(false);
    setBackButt(true);
  };
  const [locationHide] = useState({
    corporation: true,
  });
  // const [locationHide2] = useState({
  //   corporation2: true,
  // });

  const menus = (details) => {
    return (
      <Menu>
        <Menu.Item>
          <a href>Edit</a>
        </Menu.Item>
        <Menu.Item>
          <a href>Delete</a>
        </Menu.Item>
      </Menu>
    );
  };

  const exportPDF = () => {
    const unit = "pt";
    const size = "A4";
    const orientation = "portrait";

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);
    doc.setFontSize(15);

    const title = "Party Wings Office Location";
    const headers = [
      [
        "SNo",
        "Name of Party Wings Office",
        "Type of Party Wings Office ",
        "Hierarchy Reporting Office",
        "Address 1",
        "Entered By",
        "Entered On",
      ],
    ];

    const data = userData.map((elt) => [
      elt.SNo,
      elt.NAMEOFWINGOFFICE,
      elt.WingOffice,
      elt.ReportingTo,
      elt.address,
      elt.area,
      elt.by,
      elt.on,
    ]);

    let content = {
      startY: 50,
      head: headers,
      body: data,
    };

    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    doc.save("report.pdf");
  };
  const SelectMenuButtonpartywingsoffice = (props) => {
    return (
      <components.MenuList {...props}>
        {props.children}
        <div
          style={{
            marginTop: "-95px",
            marginBottom: "-50px",
            minHeight: "150px",
          }}
        >
          <CLink
            className={"saveBtn"}
            onClick={addTypeofPartyOffice}
            style={{ marginLeft: "350px" }}
          >
            Add{" "}
          </CLink>
          <CLink
            className={"saveBtn"}
            onClick={() => {
              addTypeofPartyOffice();
              viewTypeofPartyOffice();
            }}
            style={{ marginLeft: "50px" }}
          >
            View{" "}
          </CLink>
        </div>
      </components.MenuList>
    );
  };
  const SelectMenuButtonpartynamewingsoffice = (props) => {
    return (
      <components.MenuList {...props}>
        {props.children}
        <div
          style={{
            marginTop: "-95px",
            marginBottom: "-50px",
            minHeight: "150px",
          }}
        >
          <CLink
            className={"saveBtn"}
            onClick={addTypeofPartyOffice1}
            style={{ marginLeft: "350px" }}
          >
            Add{" "}
          </CLink>
          <CLink
            className={"saveBtn"}
            onClick={() => {
              addTypeofPartyOffice1();
              viewTypeofPartyOffice1();
            }}
            style={{ marginLeft: "50px" }}
          >
            View{" "}
          </CLink>
        </div>
      </components.MenuList>
    );
  };
  return (
    <React.Fragment>
      <div className={menu.style3}>
        {sideBar1 && (
          <div
            className={menu.style}
            style={{
              overflow: "auto",
              marginLeft: "20px",
            }}
          >
            <div className={"main-headerlabel"}>
              <span className={"header-label"}>
                {" "}
                Adding Type of Party Wings Office
              </span>
            </div>

            {locationHide.corporation && (
              <div>
                {hidePartyOffice && (
                  <div>
                    <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                      <CCol className={"column-align"} md="4">
                        <CLabel className={"label-name"}>
                          Type of Party Wings Office
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <CInput
                          className={"input-align"}
                          id={"WingsOffice"}
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
                          id={"WingsOfficeabbrevation"}
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
                          id={"WingsOfficecode"}
                          name={"city"}
                          placeholder={"Enter Code"}
                        />
                      </CCol>
                      <CCol className={"column-align"} md="4">
                        <CLabel className={"label-name"}>
                          Hierarchy Reporting To Office
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <Select
                          className={"input-align"}
                          id={"WingsOfficerepotingto"}
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
                            id={"WingsOfficecancel"}
                            className={"cancelBtn"}
                            onClick={addTypeofPartyOffice1}
                          >
                            CANCEL
                          </CButton>
                          <CButton
                            style={{
                              float: "right",
                              marginRight: "15px",
                            }}
                            id={"saveWingsOffice"}
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
                    style={{ fontSize: "1.55rem", top: "118px" }}
                    md={12}
                    sm={12}
                    lg={12}
                  >
                    <img
                      id={"WingsOfficehierarchy"}
                      alt={""}
                      src={
                        "https://img.icons8.com/fluent/2x/organization-chart-people.png"
                      }
                      style={{
                        height: "40px",
                        width: "40px",

                        marginLeft: "900px",
                        marginBottom: "20px",
                      }}
                    />
                  </CCol>
                  <CCol style={{ fontSize: "1.55rem" }} md={12} sm={12} lg={12}>
                    <p data-tip="print">
                      <i
                        id={"WingsOfficeprint"}
                        style={{
                          position: "absolute",
                          top: "68px",
                          marginTop: "-20px",
                          marginLeft: "675px",
                          marginBottom: "20px",
                          color: "black",
                        }}
                        onClick={() => exportPDF()}
                        className="fa fa-print"
                      ></i>
                    </p>
                    <ReactTooltip />
                  </CCol>
                  <CCol style={{ fontSize: "1.55rem" }} md={12} sm={12} lg={12}>
                    <p data-tip="share">
                      <i
                        id={"WingsOfficeshare"}
                        style={{
                          position: "absolute",
                          top: "45px",
                          marginLeft: "787px",
                          marginBottom: "910px",
                          color: "black",
                        }}
                        className="fa fa-share-alt"
                      ></i>
                    </p>
                    <ReactTooltip />
                  </CCol>
                </CRow>

                <CRow style={{ padding: "4%", marginTop: "-6.5%" }}>
                  <CDataTable
                    items={userDataoffice}
                    fields={fieldsoffice}
                    columnFilter
                    tableFilter
                    tableLabel={"List of Type of Party Wing Office"}
                    itemsPerPageSelect
                    itemsPerPage={5}
                    hover
                    sorter
                    pagination
                    scopedSlots={{
                      show_details: (item, index) => {
                        return (
                          <td className="py-1">
                            <CRow>
                              <CCol style={{ fontSize: "1.15rem" }} md="16">
                                <Dropdown
                                  className={"ant-dropdown-cutomize-by-me"}
                                  overlay={() => menus(item)}
                                >
                                  <a
                                    href
                                    className="ant-dropdown-link"
                                    onClick={(e) => e.preventDefault()}
                                  >
                                    <i
                                      style={{
                                        marginLeft: "35px",
                                        color: "black",
                                      }}
                                      className="fa fa-ellipsis-v"
                                      bsStyle="overlay"
                                      onClick={menus}
                                    />
                                  </a>
                                </Dropdown>
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
            {backbutt && (
              <div>
                <CButton
                  style={{
                    position: "absolute",
                    top: "15px",
                    backgroundColor: "green",
                    border: "1px solid green",
                    right: "15px",
                  }}
                  className={"cancelBtn"}
                  onClick={addTypeofPartyOffice1}
                >
                  Back
                </CButton>
              </div>
            )}
          </div>
        )}
        {/* <div className={menu.style3}> */}
        {sideBar2 && (
          <div
            className={menu.style}
            style={
              sideBar2
                ? {
                    overflow: "auto",
                    marginLeft: "20px",
                  }
                : { display: "none" }
            }
          >
            <div className={"main-headerlabel"}>
              <span className={"header-label"}>
                {" "}
                Adding Name of Party Wings Office
              </span>
            </div>

            {locationHide.corporation && (
              <div>
                {hidePartyOffice && (
                  <div style={{ marginLeft: "-26px" }}>
                    <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                      <CCol className={"column-align"} md="4">
                        <CLabel className={"label-name"}>
                          Name of Party Wings Office
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <CInput
                          className={"input-align"}
                          id={"WingsOffice"}
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
                          id={"WingsOfficeabbrevation"}
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
                          id={"WingsOfficecode"}
                          name={"city"}
                          placeholder={"Enter Code"}
                        />
                      </CCol>
                      <CCol className={"column-align"} md="4">
                        <CLabel className={"label-name"}>
                          Hierarchy Reporting To Office
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <Select
                          className={"input-align"}
                          id={"WingsOfficerepotingto"}
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
                            id={"WingsOfficecancel"}
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
                            id={"saveWingsOffice"}
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
                    style={{ fontSize: "1.55rem", top: "118px" }}
                    md={12}
                    sm={12}
                    lg={12}
                  >
                    <img
                      id={"WingsOfficehierarchy"}
                      alt={""}
                      src={
                        "https://img.icons8.com/fluent/2x/organization-chart-people.png"
                      }
                      style={{
                        height: "40px",
                        width: "40px",

                        marginLeft: "900px",
                        marginBottom: "20px",
                      }}
                    />
                  </CCol>
                  <CCol style={{ fontSize: "1.55rem" }} md={12} sm={12} lg={12}>
                    <p data-tip="print">
                      <i
                        id={"WingsOfficeprint"}
                        style={{
                          position: "absolute",
                          top: "68px",
                          marginTop: "3px",
                          marginLeft: "675px",
                          marginBottom: "20px",
                          color: "black",
                        }}
                        onClick={() => exportPDF()}
                        className="fa fa-print"
                      ></i>
                    </p>
                    <ReactTooltip />
                  </CCol>
                  <CCol style={{ fontSize: "1.55rem" }} md={12} sm={12} lg={12}>
                    <p data-tip="share">
                      <i
                        id={"WingsOfficeshare"}
                        style={{
                          position: "absolute",
                          top: "45px",
                          marginLeft: "787px",
                          marginBottom: "910px",
                          color: "black",
                        }}
                        className="fa fa-share-alt"
                      ></i>
                    </p>
                    <ReactTooltip />
                  </CCol>
                </CRow>

                <CRow style={{ padding: "4%", marginTop: "-6.5%" }}>
                  <CDataTable
                    items={userDataoffice}
                    fields={fieldsoffice}
                    columnFilter
                    tableFilter
                    tableLabel={"List of Name of Party Wings Office"}
                    itemsPerPageSelect
                    itemsPerPage={5}
                    hover
                    sorter
                    pagination
                    scopedSlots={{
                      show_details: (item, index) => {
                        return (
                          <td className="py-1">
                            <CRow>
                              <CCol style={{ fontSize: "1.15rem" }} md="16">
                                <Dropdown
                                  className={"ant-dropdown-cutomize-by-me"}
                                  overlay={() => menus(item)}
                                >
                                  <a
                                    href
                                    className="ant-dropdown-link"
                                    onClick={(e) => e.preventDefault()}
                                  >
                                    <i
                                      style={{
                                        marginLeft: "35px",
                                        color: "black",
                                      }}
                                      className="fa fa-ellipsis-v"
                                      bsStyle="overlay"
                                      onClick={menus}
                                    />
                                  </a>
                                </Dropdown>
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
            {backbutt && (
              <div>
                <CButton
                  style={{ position: "absolute", top: "15px", backgroundColor: "green",
                  border: "1px solid green", right: "15px" }}
                  className={"cancelBtn"}
                  onClick={addTypeofPartyOffice}
                >
                  Back
                </CButton>
              </div>
            )}
          </div>
        )}
        {addPartyOffice && (
          <div>
            <CCard className={"cardSave"}>
              <div className={"main-headerlabel"}>
                <span className={"header-label"}>
                  party Wings Office Location
                </span>
              </div>
              <div></div>
              <div style={{ marginTop: "-30px" }}>
                <CRow
                  style={{
                    marginTop: "65px",
                    marginLeft: "240px",
                    position: "absolute",
                  }}
                >
                  <CCol sm="3" lg="3" style={{ marginLeft: "-160px" }}>
                    {/* <CWidgetDropdown
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
                > */}
                    <span
                      style={{
                        position: "absolute",
                        marginLeft: "45px",
                        fontSize: "22px",
                        fontWeight: "700",
                        color: "#134e5e",
                      }}
                    >
                      Total
                    </span>
                    <span
                      style={{
                        display: "block",
                        marginLeft: "-41px",
                        marginTop: "-75px",
                        padding: "100px",
                        fontSize: "24px",
                        fontWeight: "500",
                        color: "grey",
                      }}
                    >
                      2
                    </span>
                    <span class="divider" />
                    <br />
                    <br></br>
                    <br />
                    {/* </CWidgetDropdown> */}
                  </CCol>
                  <CCol
                    sm="3"
                    lg="3"
                    style={{ marginLeft: "290px", display: "flex" }}
                  >
                    {/* <CWidgetDropdown
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
                > */}

                    <span
                      style={{
                        marginLeft: "-294px",
                        fontSize: "22px",
                        fontWeight: "700",
                        color: "#4cb8c4 ",
                      }}
                    >
                      District Party Office
                    </span>
                    <span
                      style={{
                        marginLeft: "-120px",
                        marginTop: "28px",
                        fontSize: "24px",
                        fontWeight: "500",
                        color: "grey",
                      }}
                    >
                      2
                    </span>
                    <span className={"divider1"} />
                    <br />

                    <br />
                    {/* </CWidgetDropdown> */}
                  </CCol>
                  <CCol
                    sm="3"
                    lg="3"
                    style={{
                      marginLeft: "440px",
                      position: "relative",
                      display: "flex",
                    }}
                  >
                    {/* <CWidgetDropdown
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
                > */}
                    <span
                      style={{
                        marginTop: "-228px",
                        left: "-21px",
                        fontSize: "22px",
                        fontWeight: "700",
                        color: "#ec6f66",
                      }}
                    >
                      Circle Party Office
                    </span>
                    <br />
                    <span
                      style={{
                        marginLeft: "-112px",
                        marginTop: "-201px",
                        fontSize: "24px",
                        fontWeight: "500",
                        color: "grey",
                      }}
                    >
                      1
                    </span>
                    <span className={"divider2"} />
                    <br />
                    <br />
                    {/* </CWidgetDropdown> */}
                  </CCol>
                </CRow>
              </div>
              <CRow style={{ marginTop: "-10px" }}>
                <CCol md="10" lg="10" sm="10">
                  <CCol
                    md="5"
                    style={{
                      marginLeft: "5px",
                      float: "right",
                      Top: "100px",
                      top: "170px",
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
                      id={"addtypeoofpartylocation"}
                      className={"saveBtn"}
                      onClick={changePartyOffice}
                    >
                      Add Party Wings Office Location
                    </CButton>{" "}
                  </CCol>
                </CCol>
              </CRow>
              <CRow style={{ marginLeft: "150px" }}>
                <CCol
                  style={{ fontSize: "1.55rem", top: "260px" }}
                  md={12}
                  sm={12}
                  lg={12}
                >
                  <img
                    id={"typeoofpartyhierarchy"}
                    alt={""}
                    src={
                      "https://img.icons8.com/fluent/2x/organization-chart-people.png"
                    }
                    style={{
                      height: "40px",
                      width: "40px",
                      marginLeft: "740px",
                      marginBottom: "20px",
                    }}
                  />
                </CCol>
                <CCol style={{ fontSize: "1.55rem" }} md={12} sm={12} lg={12}>
                  <p data-tip="print">
                    <i
                      id={"typeoofpartylocationprint"}
                      style={{
                        position: "absolute",
                        top: "210px",
                        marginLeft: "515px",
                        marginTop: "0px",
                        marginBottom: "20px",
                        color: "black",
                        cursor: "pointer",
                      }}
                      onClick={() => exportPDF()}
                      className="fa fa-print"
                    ></i>
                  </p>
                  <ReactTooltip />
                </CCol>
                <CCol style={{ fontSize: "1.55rem" }} md={12} sm={12} lg={12}>
                  <p data-tip="share">
                    <i
                      id={"typeoofpartylocationshare"}
                      style={{
                        position: "absolute",
                        top: "185px",
                        marginLeft: "622px",
                        marginBottom: "910px",
                        color: "black",
                      }}
                      className="fa fa-share-alt"
                    ></i>
                  </p>
                  <ReactTooltip />
                </CCol>
              </CRow>

              <CRow style={{ padding: "4%", marginTop: "5.5%" }}>
                <CDataTable
                  items={userData}
                  fields={fields}
                  columnFilter
                  tableFilter
                  tableLabel={"List of party Wings Office Location"}
                  itemsPerPageSelect
                  itemsPerPage={5}
                  hover
                  sorter
                  pagination
                  scopedSlots={{
                    show_details: (item, index) => {
                      return (
                        <td className="py-1">
                          <CRow>
                            <CCol style={{ fontSize: "1.15rem" }} md="16">
                              <Dropdown
                                className={"ant-dropdown-cutomize-by-me"}
                                overlay={() => menus(item)}
                              >
                                <a
                                  href
                                  className="ant-dropdown-link"
                                  onClick={(e) => e.preventDefault()}
                                >
                                  <i
                                    style={{
                                      marginLeft: "35px",
                                      color: "black",
                                    }}
                                    className="fa fa-ellipsis-v"
                                    bsStyle="overlay"
                                    onClick={menus}
                                  />
                                </a>
                              </Dropdown>
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
                  <span
                    style={{ marginLeft: "70px" }}
                    className={"header-label"}
                  >
                    {" "}
                    Adding Party Wings Office Location{" "}
                  </span>
                </div>
              </div>

              <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                <CCol className={"column-align"} md={5} lg={5}>
                  <CLabel className={"label-name"}>
                    Name of Party Wings Office
                    <span className={"text-danger"}>*</span>
                  </CLabel>
                  <Select
                    type={"text"}
                    id={"wingReportingTo"}
                    className={"select"}
                    placeholder="Select the Party Office"
                    options={partyofficeType}
                    components={{
                      MenuList: SelectMenuButtonpartynamewingsoffice,
                    }}
                  />
                </CCol>
              </CRow>

              <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                <CCol className={"column-align"} md={5} lg={5}>
                  <CLabel className={"label-name"}>
                    Type of Party Wings Office
                    <span className={"text-danger"}>*</span>
                  </CLabel>
                  <Select
                    type={"text"}
                    id={"wingReportingTo"}
                    className={"select"}
                    placeholder="Select the Party Office"
                    options={partyofficeType}
                    components={{
                      MenuList: SelectMenuButtonpartywingsoffice,
                    }}
                    // value={typeofPartyOffice}
                    // onChange={(e) => {
                    //   setTypeofPartyOffice(e);
                    //   setEditShow(true);
                    // }}
                  />
                </CCol>

                <CCol className={"column-align"} md={5} lg={5}>
                  <CLabel className={"label-name"}>
                    Hierarchy Reporting To Office
                    <span className={"text-danger"}>*</span>
                  </CLabel>
                  <Select
                    className={"input-align"}
                    id={"WingsOfficereportingto"}
                    name={"area"}
                    placeholder={"Select Reporting To"}
                    options={officeType}
                  />
                </CCol>
              </CRow>

              <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                <CCol className={"column-align"} md={5} lg={5}>
                  <CLabel className={"label-name"}>
                    Name of Party Wings Office Location
                    <span className={"text-danger"}>*</span>
                  </CLabel>
                  <CInput
                    type={"text"}
                    className={"input-align"}
                    name={"Address1"}
                    id={"Winglocationname"}
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
                  Address of the Party Wings Office
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
                    Door No. / Street
                    <span className={"text-danger"}>*</span>
                  </CLabel>
                  <CInput
                    type={"text"}
                    className={"input-align"}
                    name={"Area "}
                    id={"typeoofpartyofficelocationArea "}
                    placeholder="Enter Street "
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
                    id={"typeoofpartyofficelocationArea "}
                    placeholder="Enter Area "
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
                    id={"typeoofpartyofficelocationCity"}
                    placeholder="Enter City "
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
                    id={"typeoofpartyofficelocationState"}
                    placeholder="Enter State"
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
                    id={"typeoofpartyofficelocationPincode"}
                    placeholder="Enter Pincode "
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
                      id={"cancelAbbreviationConfigureCodeWingsOffice"}
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
                      id={"saveAbbreviationConfigureCodeWingsOffice"}
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
    </React.Fragment>
  );
}

export default PartyWingsOfficeLocation;
