import React, { useState, useEffect } from "react";
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
import ReactTooltip from "react-tooltip";
import {} from "../../../services/ApiService";
import Select, { components } from "react-select";
import "./PartyOfficeLocation.css";
import { Dropdown, Menu } from "antd";
import "antd/dist/antd.css";
import jsPDF from "jspdf";
import "jspdf-autotable";
import {
  // createTypeofPartyOffice,
  getAllTypeofPartyOffice,
  updateTypeofPartyOffice,
} from "../../../services/ApiService";


function PartyOfficeLocation() {
  const [addPartyOffice, setAddPartyOffice] = useState(true);
  const [createPartyOffice, setCreatepartyOffice] = useState(false);
  const [menu, setMenu] = useState({
    style: "menu",
    style1: "menu1",
    menuStatus: "open",
    style3: "menu1",
  });
  const [locationHide] = useState({
    corporation: true,
  });
  // const [editShow, setEditShow] = useState(false);
  const [sideBar1, setSideBar1] = useState(false);
  const changePartyOffice = async () => {
    await setAddPartyOffice(false);
    await setCreatepartyOffice(true);
    setSideBar1("");
  };
  const cancelPartyOffice = () => {
    setAddPartyOffice(true);
    setCreatepartyOffice(false);
  };

  // const userData1 = [
  //   {
  //     id: "1",
  //     SNo: "1",
  //     Street: "Head Quaters",
  //     District: "HOF",
  //     Area: "HO",
  //     male: " - ",
  //     ENTERBY: "Sathish ",
  //     ENTERON: "12/05/2021",
  //   },
  //   {
  //     id: "2",
  //     SNo: "2",
  //     Street: "Branch Office",
  //     District: "BOFF",
  //     Area: "BO",
  //     male: " Head Quaters ",
  //     ENTERBY: "Sathish ",
  //     ENTERON: "31/05/2021",
  //   },
  // ];

  const [AreaValue, setAreaValue] = useState("");
  const [DistrictValue, setDistrictValue] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const [inEditMode, setInEditMode] = useState({
    status: false,
    rowKey: null,
  });

  const fields1 = [
    //  {
    //   key: 'SNo',
    //   label: 'S.NO',
    //   _style: { width: '5%' },
    //   sorter: false,
    //   filter: false,
    // },
    {
      key: "SNo",
      label: "S.NO",
      _style: { width: "5%" },
      sorter: false,
      filter: false,
    },

    {
      key: "show_details1",
      label: "Type of Party Office",
      _style: { width: "15%" },
    },
    { key: "show_details2", label: "Abbreviation", _style: { width: "10%" } },
    { key: "show_details3", label: "Code", _style: { width: "10%" } },
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
      ENTERBY: "Sathish ",
      ENTERON: "31/05/2021",
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
    { key: "ENTERBY", label: "Entered By", _style: { width: "10%" } },
    { key: "ENTERON", label: "Entered On", _style: { width: "10%" } },

    {
      label: "Action",
      key: "show_details",

      _style: { width: "1%" },
      sorter: false,
      filter: false,
    },
  ];
  const officeType = [{ value: "Head Office", label: "Head Office" }];
  const partyofficeType = [
    {
      span: (
        <CLink className={"saveBtn"} style={{ marginLeft: "200px" }}>
          Add{" "}
        </CLink>
      ),
    },
    { value: "Head Office", label: "Head Office" },
    { value: "District Office", label: "District Office" },
  ];
  // const [typeofPartyOffice, setTypeofPartyOffice] = useState("");

  const locations = [
    {
      value: "TamilNadu Chennai Mylapore - 600005",
      label: "TamilNadu Chennai Mylapore - 600005",
    },
  ];
  const addTypeofPartyOffice = () => {
    switch (menu.menuStatus) {
      case "open":
      default:
        setMenu({
          menuStatus: "close",
          style: "menu active1",
        });
        setTimeout(() => {
          setSideBar1(true);
        }, 1000);
        setHidePartyOffice(true);
        setBackButt(false);
        break;
      case "close":
        setMenu({
          menuStatus: "open",
          style: "menu active2",
        });
        setTimeout(() => {
          setSideBar1(false);
        }, 1000);
        break;
    }
  };
  
  const [passing, sePassings] = useState("");
  const [hidePartyOffice, setHidePartyOffice] = useState(true);
  const [backbutt, setBackButt] = useState(false);
  const viewTypeofPartyOffice = () => {
    setHidePartyOffice(false);
    setBackButt(true);
  };
  // const [data, setData] = useState([]);

  const onEdit = (data, id) => {
    console.log(data, "editabledATA");
    setInEditMode({
      status: true,
      // rowKey: id,
    });
    console.log(inEditMode.rowKey, "editaaa");
    setUnitPrice(data.typeofpartyoffice);
    setDistrictValue(data.abbreviation);
    setAreaValue(data.code);
    sePassings(data._id);
  };
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
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    const title = "Party  Office Location";
    const headers = [
      [
        "SNo",
        "Name of Party  Office",
        "Type of Party  Office ",
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
  const onCancel = () => {
    // reset the inEditMode state value
    setInEditMode({
      status: false,
      rowKey: null,
    });
    // reset the unit price state value
    setUnitPrice(null);
  };
  const SelectMenuButtonpartyoffice = (props) => {
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
  // const saveTypeofPartyOffice = async () => {
  //   console.log("hello value");

  //   var response;
  //   let body = {
  //     typeofpartyoffice: DistrictValue,
  //     abbreviation: AreaValue,
  //     code: unitPrice,
  //   };
  //   console.log(body, "bodytype");
  //   try {
  //     response = await createTypeofPartyOffice(JSON.stringify(body));

  //     if (response.success === true) {
  //       setInEditMode({ status: false });
  //     }
  //   } catch (error) {
  //     alert("value not change");
  //   }
  // };
  const [getPartyOffice, setGetPartyOffice] = useState([]);

  const getTypeofPartyOffice = async () => {
    var response;
    try {
      response = await getAllTypeofPartyOffice();
      let array = [];
      if (response.TypeofPartyOffice) {
        console.log(response.TypeofPartyOffice, "mapdata");
        response.TypeofPartyOffice.map((x, i) => {
          array.push({
            ...x,
            typeofpartyoffice: x.typeofpartyoffice,
            abbreviation: x.abbreviation,
            code: x.code,
          });
          return 0;
        });
        setGetPartyOffice(array);
      }
    } catch (error) {
      console.log("data nof find");
    }
  };
  useEffect(() => {
    getTypeofPartyOffice();
  }, []);

  const updatePartyOffice = async () => {
    var response;

    try {
      response = await updateTypeofPartyOffice(
        unitPrice,
        DistrictValue,
        AreaValue,
        passing
      );
      console.log(response, "validadata");
      if (response.success === true) {
        setInEditMode({ status: false });
        getTypeofPartyOffice();
      }
    } catch (error) {}
  };
  return (
    <div className={menu.style3}>
      {sideBar1 && (
        <div
          className={menu.style}
          style={{ overflow: "auto", marginLeft: "-475px" ,width:"81%"}}
        >
          <div className={"main-headerlabel"} style={{ marginTop: "-40px" }}>
            <span className={"header-label"}> Adding Type of Party Office</span>
          </div>
          {locationHide.corporation && (
            <div>
              {hidePartyOffice && (
                <div style={{ marginLeft: "-26px" }}>
                  <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                    <CCol className={"column-align"} md="4">
                      <CLabel className={"label-name-1"}>
                        Type of Party Office
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <CInput
                        id={"typeoofparty"}
                        name={"PartyOffice"}
                        placeholder={"Enter Party Office"}
                      />
                    </CCol>
                    <CCol className={"column-align"} md="4">
                      <CLabel className={"label-name-1"}>
                        Abbreviation
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <CInput
                        id={"partylocationabbrevation"}
                        name={"Abbreviation"}
                        placeholder={"Enter Abbreviation"}
                      />
                    </CCol>
                  </CRow>
                  <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                    <CCol className={"column-align"} md="4">
                      <CLabel className={"label-name-1"}>
                        Code
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <CInput
                        id={"locationtypeCode"}
                        name={"city"}
                        placeholder={"Enter Code"}
                      />
                    </CCol>
                    <CCol className={"column-align"} md="4">
                      <CLabel className={"label-name-1"}>
                        Reporting To Office
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <Select
                        id={"reportingto"}
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
                          marginLeft: "250px",
                          float: "right",
                          marginTop: "-25px",
                          position: "absolute",
                        }}
                      >
                        <CButton
                          style={{
                            float: "right",
                          }}
                          id={"typeoofpartycancelAbbreviationConfigureCode"}
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
                          id={"typeoofpartysaveAbbreviationConfigureCode"}
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

              <CRow style={{ marginLeft: "250px" }}>
                <CCol
                  style={{ fontSize: "1.55rem", top: "72px" }}
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
                      marginLeft: "630px",
                      marginBottom: "20px",
                    }}
                  />
                </CCol>
                <CCol style={{ fontSize: "1.55rem" }} md={12} sm={12} lg={12}>
                  <p data-tip="print">
                    <i
                      id={"typeoofpartyprint"}
                      style={{
                        position: "absolute",
                        top: "25px",
                        marginLeft: "410px",
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
                      id={"typeoofpartyshare"}
                      style={{
                        position: "absolute",
                        top: "-2px",
                        marginLeft: "515px",
                        marginBottom: "910px",
                        color: "black",
                      }}
                      className="fa fa-share-alt"
                    ></i>
                  </p>
                  <ReactTooltip />
                </CCol>
              </CRow>

              <CRow style={{ padding: "4%", marginTop: "-10.5%" }}>
                <CDataTable
                  items={getPartyOffice}
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
                        <td className="py-1">
                          <td>
                            {inEditMode.status && passing === item._id ? (
                              <React.Fragment>
                                <i
                                  className={"fa fa-save"}
                                  style={{
                                    color: "red",
                                    position: "absolute",
                                    marginTop: "4px",
                                  }}
                                  onClick={() => updatePartyOffice()}
                                />

                                <i
                                  className={"fa fa-remove"}
                                  style={{
                                    position: "initial",
                                    marginLeft: "26px",
                                    fontSize: "1.1rem",
                                    top: "205px",
                                  }}
                                  onClick={() => onCancel()}
                                />
                              </React.Fragment>
                            ) : (
                              <i
                                style={{
                                  color: "blue",
                                }}
                                className={"fa fa-edit"}
                                onClick={() => onEdit(item)}
                              />
                            )}
                          </td>
                        </td>
                      );
                    },

                    show_details2: (item, index) => {
                      return (
                        <td key={index}>
                          {inEditMode.status && passing === item._id ? (
                            <input
                              value={DistrictValue}
                              onChange={(event) =>
                                setDistrictValue(event.target.value)
                              }
                            />
                          ) : (
                            item.abbreviation
                          )}
                        </td>
                      );
                    },
                    show_details3: (item, index) => {
                      return (
                        <td>
                          {inEditMode.status && passing === item._id ? (
                            <input
                              value={AreaValue}
                              onChange={(event) =>
                                setAreaValue(event.target.value)
                              }
                            />
                          ) : (
                            item.code
                          )}
                        </td>
                      );
                    },
                    show_details1: (item, index) => {
                      return (
                        <td className="py-1">
                          <td>
                            {inEditMode.status && passing === item._id ? (
                              <input
                                value={unitPrice}
                                onChange={(event) =>
                                  setUnitPrice(event.target.value)
                                }
                              />
                            ) : (
                              item.typeofpartyoffice
                            )}
                          </td>
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
                Type of Party Office Location
              </span>
            </div>
            {/* <CRow style={{ marginTop: "30px" }} >
              <CCol sm="6" lg="3" style={{ marginLeft: "10px" }}>
              <p data-tip="Male">
                <CWidgetDropdown
                  style={{ width: "280px", textAlign: "center", fontSize: "30px", float: "right" }}
                  color="gradient-primary"
                  header=""
                  text=""
                >
                  <span style={{ marginLeft: "-50px", fontSize: "24px", fontWeight:"700" }}>Total</span>
                  <span style={{ marginLeft: "-162px", marginTop: "30px",fontSize: "24px", fontWeight:"700" }}>2</span>
                  <br /><br />
                </CWidgetDropdown>
                </p>
                <ReactTooltip/>
                <span class="divider" />
              </CCol>

              <CCol sm="6" lg="3" style={{ marginLeft: "10px" }}>
              <p data-tip="Female">
                <CWidgetDropdown
                  style={{ width: "280px", fontSize: "30px", }}

                  color="gradient-info"
                  header=""
                  text=""
                >
                  <span style={{ marginLeft: "-100px",fontSize: "24px",fontWeight:"700" }}>District Party Office</span>
                  <span style={{ marginLeft: "-243px", marginTop: "30px",fontSize: "24px",fontWeight:"700" }}>2</span>
                  <br /><br />
                </CWidgetDropdown>
                </p>
                <ReactTooltip/>
                <span className={"divider1"} />
              </CCol>

              <CCol sm="6" lg="3" style={{ marginLeft: "-10px" }}>
              <p data-tip="TransGender">
                <CWidgetDropdown
                  style={{ width: "280px", fontSize: "30px", }}

                  color="gradient-warning"
                  header=""
                  text=""
                >
                  <span style={{ marginLeft: "-75px", fontSize: "24px",fontWeight:"700" }}> Circle Party Office</span>
                  <span style={{ marginLeft: "-200px", marginTop: "30px",fontSize: "24px",fontWeight:"700" }}>1</span>
                  <br /><br />
                </CWidgetDropdown>
                </p>
                <ReactTooltip/>
                <span className={"divider2"} />
              </CCol>              
            </CRow> */}
            <div style={{ marginTop: "-30px" }}>
              <CRow
                style={{
                  marginTop: "65px",
                  marginLeft: "240px",
                  position: "absolute",
                }}
              >
                <CCol sm="3" lg="3" style={{ marginLeft: "-160px" }}>
                  
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
                  
                </CCol>
                <CCol
                  sm="3"
                  lg="3"
                  style={{ marginLeft: "290px", display: "flex" }}
                >
                  

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
                    Add Party Office Location
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
                      marginTop: "0px",
                      marginLeft: "514px",
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
                      marginLeft: "633px",
                      marginBottom: "910px",
                      color: "black",
                    }}
                    className="fa fa-share-alt"
                  ></i>
                </p>
                <ReactTooltip />
              </CCol>
            </CRow>
            <div>
              <CRow style={{ padding: "4%", marginTop: "5.5%" }}>
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
                                      marginLeft: "5px",
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
                  id={"typeoofpartyoffice"}
                  className={"select"}
                  placeholder="Select the Party Office"
                  options={partyofficeType}
                  components={{
                    MenuList: SelectMenuButtonpartyoffice,
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
                  Reporting To Office
                  <span className={"text-danger"}>*</span>
                </CLabel>
                <Select
                  className={"input-align"}
                  id={"typeoofpartyofficeReporting"}
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
                  id={"typeoofpartyofficelocation"}
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
                  id={"typeoofpartyofficelocationsarch"}
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
                    id={"typeoofpartyofficelocationcancel"}
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
                    id={"saveAtypeoofpartyofficelocatione"}
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
