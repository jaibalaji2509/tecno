import {
  CButton,
  CCard,
  CCol,
  CInput,
  CLabel,
  CRow,
  CLink,
} from "@coreui/react";
import React, { useState } from "react";
import CDataTable from "../../CoreComponents/table/CDataTable";
import Select, { components } from "react-select";
import { Dropdown, Menu } from "antd";
import "antd/dist/antd.css";
import "./Constituency.css";
import { CSVLink } from "react-csv";
import * as XLSX from "xlsx";
import SheetJSFT from "../../../Tools/excelupload/SheetJSFT";
import { make_cols } from "../../../Tools/excelupload/MakeColumn";

function Constituency() {
  const [selected1, setSelected1] = useState([]);
  const [collected, setCollected] = useState([]);
  const [villageHide, setVillageHide] = useState({
    districtpanchayat: true,
    panchayatunion: false,
  });
  const [error] = useState("");
  const [municipalListadd, ] = useState(true);
  const [municipalList, setMunicipalList] = useState(true);
  const [, setmunicipalCreate] = useState(false);
  // const [, setmunicipalCreateadd] = useState(false);
  // const [municipalName] = useState("");

  const enableCreate = async () => {
    await setMunicipalList(false);
    await setmunicipalCreate(true);
  };

  // const enableCreateadd = async () => {
  //   await setMunicipalListadd(false);
  //   await setmunicipalCreateadd(true);
  // };

  // const editState = async () => {
  //   await setMunicipalList(false);
  //   await setmunicipalCreate(true);
  // };
  // const editStateadd = async () => {
  //   await setMunicipalListadd(false);
  //   await setmunicipalCreateadd(true);
  // };

  // const CancelState = async () => {
  //   setPassing("");
  //   await setMunicipalList(true);
  //   await setmunicipalCreate(false);
  // };
  // const CancelStateadd = async () => {
  //   setPassing("");
  //   await setMunicipalListadd(true);
  //   await setmunicipalCreateadd(false);
  // };

  // const [passing, setPassing] = useState("");
  const userData = [
    {
      SNo: "1",
      Street: "Golden Avenue",
      Area: "Minjur",
      Ward: "Ponneri",
      Total: "25081",
      Male: "62%",
      female: "35%",
      Transgender: "3%",
    },
  ];
  const fields = [
    {
      key: "show_details",
      label: "Select",
      _style: { width: "3%" },
      name: (
        <div>
          Email <input type={"checkbox"} onClick={""} />
        </div>
      ),
      sorter: false,
      filter: false,
    },
    {
      key: "SNo",
      label: "S.NO",
      _style: { width: "10%" },
      sorter: false,
      filter: false,
    },
    { key: "Area", label: "Area / Village ", _style: { width: "10%" } },
    { key: "Ward", label: "Ward", _style: { width: "10%" } },
    { key: "Street", label: "Street Name", _style: { width: "10%" } },
    { key: "Total", label: "Total  ", _style: { width: "10%" } },
    { key: "Male", label: "Male ", _style: { width: "10%" } },
    { key: "female", label: "Female", _style: { width: "10%" } },
    { key: "Transgender", label: "Transgender", _style: { width: "10%" } },
  ];
  const select = [
    {
      span: (
        <CLink className={"saveBtn"} style={{ marginLeft: "200px" }}>
          Add{" "}
        </CLink>
      ),
    },
    { value: "tamil", label: "Tamilnadu" },
    { value: "chennai", label: "Chennai" },
    { value: "chennaicentral", label: "Sriperumbudur" },
    { value: "anna", label: "Ponneri" },
    { value: "Kollathur", label: "Minjur" },
    { value: "anna", label: "Golden Avenue" },
    { value: "anna", label: "Ponneri" },
  ];

  const userDataview = [
    {
      SNo: "1.",
      Street: "Belly Nagar",
      Parliamentary: "Chennai-Central",
      Legislative: "Anna Nagar",
      Village: "Egmore",
    },
    {
      SNo: "2.",
      Street: "Belly Nagar",
      Parliamentary: "Chennai South",
      Legislative: "Thiyagarayanagar",
      Village: "Egmore",
    },
    {
      SNo: "3.",
      Street: "Belly Nagar",
      Parliamentary: "Chennai-South",
      Legislative: "Saidapet",
      Village: "Egmore",
    },
    {
      SNo: "4.",
      Street: "Belly Nagar",
      Parliamentary: "Chennai-South",
      Legislative: "Virugambakkam",
      Village: "Egmore",
    },
    {
      SNo: "5.",
      Street: "Belly Nagar",
      Parliamentary: "Chennai-North",
      Legislative: "Harbour",
      Village: "Egmore",
    },
  ];
  const [hide, setHide] = useState(false);
  const [memberhide, setMemberHide] = useState(true);
  const fieldss1 = [
    {
      key: "SNo",
      label: "S.NO",
      _style: { width: "1%" },
      sorter: false,
      filter: false,
    },
    {
      key: "Parliamentary",
      label: "Parliamentary Constituency",
      _style: { width: "10%" },
    },
    {
      label: "Action",
      key: "show_details3",

      _style: { width: "10%" },
      sorter: false,
      filter: false,
    },
  ];
  const fields2 = [
    {
      key: "SNo",
      label: "S.NO",
      _style: { width: "1%" },
      sorter: false,
      filter: false,
    },
    {
      key: "Legislative",
      label: "Legislative Assembly constituency",
      _style: { width: "10%" },
    },
    {
      label: "Action",
      key: "show_details3",

      _style: { width: "10%" },
      sorter: false,
      filter: false,
    },
  ];
  const fieldsview = [
    {
      key: "SNo",
      label: "S.NO",
      _style: { width: "1%" },
      sorter: false,
      filter: false,
    },
    {
      key: "Parliamentary",
      label: "Parliamentary Constituency",
      _style: { width: "10%" },
    },
    {
      key: "Legislative",
      label: "Legislative Assembly constituency",
      _style: { width: "10%" },
    },
    { key: "Village", label: "Village / Ward", _style: { width: "10%" } },
    { key: "Street", label: "Street", _style: { width: "10%" } },

    {
      label: "Action",
      key: "show_detailsview",

      _style: { width: "10%" },
      sorter: false,
      filter: false,
    },
  ];

  const viewcreate = () => {
    setHide(true);
    setMemberHide(false);
  };
  const cancelview = () => {
    setHide(false);
    setMemberHide(true);
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
        <Menu.Item>
          <a href>Remove</a>
        </Menu.Item>
        <Menu.Item>
          <a href>View</a>
        </Menu.Item>
      </Menu>
    );
  };
  const [menu, setMenu] = useState({
    style: "menu2",
    menuStatus: "open",
    // style3: "menu2",
  });
  const [sideBar1, setSideBar1] = useState(false);
  const [sideBar2, setSideBar2] = useState(false);
  const handleClickParliamentary = () => {
    switch (menu.menuStatus) {
      case "open":
      default:
        setMenu({
          menuStatus: "close",
          // style3: "menu2",
          style: "menu active1",
        });

        setTimeout(() => {
          setSideBar1(true);
        }, 1000);
        setSideBar2(false);
        setSideBarup1(false);
        setSideBarup2(false);
        break;
      case "close":
        setMenu({
          menuStatus: "open",
          // style3: "menu2",
          style: "menu active2",
        });
        setTimeout(() => {
          setSideBar1(false);
        }, 1000);
        break;
    }
  };
  const handleClickLegislative = () => {
    switch (menu.menuStatus) {
      case "open":
      default:
        setMenu({
          menuStatus: "close",
          // style3: "menu2",
          style: "menu active1",
        });

        setTimeout(() => {
          setSideBar2(true);
        }, 1000);
        setSideBar1(false);
        setSideBarup1(false);
        setSideBarup2(false);
        break;
      case "close":
        setMenu({
          menuStatus: "open",
          // style3: "menu2",
          style: "menu active2",
        });
        setTimeout(() => {
          setSideBar2(false);
        }, 1000);
        break;
    }
  };
  const [, setSideBarup] = useState(false);
  const [sideBarup1, setSideBarup1] = useState(false);
  const [sideBarup2, setSideBarup2] = useState(false);
  const bulkhandleClickParliamentary = () => {
    switch (menu.menuStatus) {
      case "open":
      default:
        setMenu({
          menuStatus: "close",
          // style3: "menu2",

          style1: "menu active1",
        });
        setSideBarup1(true);
        setSideBarup2(false);

        break;
      case "close":
        setMenu({
          menuStatus: "open",
          // style3: "menu2",
          style1: "menu active2",
        });
        setTimeout(() => {
          setSideBarup1(false);
        }, 1000);
        break;
    }
  };
  const bulkhandleClickLegislative = () => {
    switch (menu.menuStatus) {
      case "open":
      default:
        setMenu({
          menuStatus: "close",
          // style3: "menu2",

          style1: "menu active1",
        });
        setSideBarup2(true);
        setSideBarup1(false);
        break;
      case "close":
        setMenu({
          menuStatus: "open",
          // style3: "menu2",
          style1: "menu active2",
        });
        setTimeout(() => {
          setSideBarup2(false);
        }, 1000);
        break;
    }
  };
  const bulkhandleClick = () => {
    switch (menu.menuStatus) {
      case "open":
      default:
        setMenu({
          menuStatus: "close",
          // style3: "menu2",

          style1: "menu active1",
        });
        setSideBarup(true);

        break;
      case "close":
        setMenu({
          menuStatus: "open",
          // style3: "menu2",
          style1: "menu active2",
        });
        setTimeout(() => {
          setSideBarup(false);
        }, 1000);
        break;
    }
  };

  const SelectMenuButtonParliamentary = (props) => {
    return (
      <components.MenuList {...props}>
        {props.children}
        <div
          style={{
            marginTop: "-285px",
            marginBottom: "-50px",
            minHeight: "150px",
          }}
        >
          <CLink
            className={"saveBtn"}
            onClick={handleClickParliamentary}
            style={{ marginLeft: "200px" }}
          >
            Add{" "}
          </CLink>
          <CLink
            className={"saveBtn"}
            onClick={bulkhandleClickParliamentary}
            style={{ marginLeft: "50px" }}
          >
            Bulk Upload{" "}
          </CLink>
        </div>
      </components.MenuList>
    );
  };
  const SelectMenuButtonLegislative = (props) => {
    return (
      <components.MenuList {...props}>
        {props.children}
        <div
          style={{
            marginTop: "-285px",
            marginBottom: "-50px",
            minHeight: "150px",
          }}
        >
          <CLink
            className={"saveBtn"}
            onClick={handleClickLegislative}
            style={{ marginLeft: "200px" }}
          >
            Add{" "}
          </CLink>
          <CLink
            className={"saveBtn"}
            onClick={bulkhandleClickLegislative}
            style={{ marginLeft: "50px" }}
          >
            Bulk Upload{" "}
          </CLink>
        </div>
      </components.MenuList>
    );
  };
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };
  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = (e) => {
    e.preventDefault();
    setInputList([...inputList, { name: "", abbreviation: "", code: "" }]);
  };
  // const [manual, setManual] = useState(false)
  // const menuToggle = (e) => {
  //   e.stopPropagation();
  //   setManual({
  //     isOpen: !manual.isOpen
  //   });
  // }
  const [inputList, setInputList] = useState([
    { name: "", abbreviation: "", code: "" },
  ]);
  const handleChange = (e) => {
    const files = e.target.files;
    if (files && files[0]) setExcelUpload({ file: files[0] });
  };

  const handleFile = () => {
    /* Boilerplate to set up FileReader */
    const reader = new FileReader();
    const rABS = !!reader.readAsBinaryString;

    reader.onload = (e) => {
      /* Parse data */
      const bstr = e.target.result;
      const wb = XLSX.read(bstr, {
        type: rABS ? "binary" : "array",
        bookVBA: true,
      });
      /* Get first worksheet */
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      /* Convert array of arrays */
      const data = XLSX.utils.sheet_to_json(ws);
      /* Update state */
      setExcelUpload({ data: data, cols: make_cols(ws["!ref"]) });
      setIsValue(true);
      console.log(JSON.stringify(data, null, 2));
      console.log(data, "data");
    };

    if (rABS) {
      reader.readAsBinaryString(excelupload.file);
    } else {
      reader.readAsArrayBuffer(excelupload.file);
    }
  };
  const [isValue, setIsValue] = useState(false);
  const [excelupload, setExcelUpload] = React.useState({
    file: {},
    data: [],
    cols: [],
  });
  const [variable] = useState([]);

  const menusremoveicon = (item) => {
    return variable.map((x, i) => (
      <tr key={i}>
        <td>{x.SNO}</td>
        <td>{x.MENU1}</td>
        <td>{x.NUMBER1}</td>
        <td>{x.MENU2}</td>
        <td>{x.NUMBER2}</td>
      </tr>
    ));
  };

  const csvData = [
    ["firstname", "lastname", "email"],
    ["John", "Doe", "john.doe@xyz.com"],
    ["Jane", "Doe", "jane.doe@xyz.com"],
  ];
  const changedistrictpanchayat = (e) => {
    setCollected(e);
    setVillageHide({
      ...villageHide,
      districtpanchayat: true,
      panchayatunion: false,
    });
  };
  const changePanchayatUnion = (e) => {
    setSelected1(e);
    setVillageHide({
      ...villageHide,
      districtpanchayat: false,
      panchayatunion: true,
    });
  };
  return (
    <div className={menu.style3}>
      {sideBar1 && (
        <div className={menu.style} style={{ marginLeft: "-108px" }}>
          <CRow className={""}>
            <CCol md="12" lg="12" sm="12">
              <div>
                <span
                  style={{
                    fontSize: "18px",
                    fontWeight: "700",
                    marginLeft: "20px",
                  }}
                >
                  Adding Parliamentary Constituency{" "}
                </span>
              </div>
            </CCol>
          </CRow>

          {inputList.map((x, i) => {
            return (
              <CRow
                className={"row-alignment"}
                style={{ marginLeft: "5px", marginTop: "20px" }}
                sm={12}
                md={12}
                lg={12}
              >
                <CCol md="2">
                  <CLabel className={"label-name-1"}>
                    Parliamentary
                    <span className={"text-danger"}> *</span>
                  </CLabel>

                  <CInput
                    id={"Parliamentary"}
                    name={"Parliamentaryname"}
                    placeholder="Enter Parliamentary Constituency"
                    maxlength="60"
                    size="60"
                    value={x.panchayatname}
                    onChange={(e) => handleInputChange(e, i)}
                  />
                </CCol>

                <CCol md="2">
                  <CLabel className={"label-name-1"}>
                    Abbreviation
                    <span className={"text-danger"}> *</span>
                  </CLabel>
                  <CInput
                    id={"Parliamentaryabrreviation"}
                    name={"abbreviation"}
                    placeholder="Enter Abbreviation"
                    maxlength="5"
                    size="5"
                    value={x.panchayatabbreviation}
                    onChange={(e) => handleInputChange(e, i)}
                  />
                </CCol>
                <CCol md="2">
                  <CLabel className={"label-name-1"}>
                    Code
                    <span className={"text-danger"}> *</span>
                  </CLabel>
                  <CInput
                    id={"Parliamentarycode"}
                    name={"code"}
                    placeholder="Enter Code"
                    maxlength="5"
                    size="5"
                    value={x.panchayatcode}
                    onChange={(e) => handleInputChange(e, i)}
                  />
                </CCol>

                <CRow>
                  <CCol md="3">
                    {inputList.length - 1 === i && (
                      <i
                        style={{
                          marginLeft: "0px",
                          marginTop: "35px",

                          fontSize: "1.25rem",
                          color: "#3273e9",
                        }}
                        onClick={handleAddClick}
                        class={"fa fa-plus"}
                      />
                    )}
                  </CCol>
                  <CCol md="3">
                    {inputList.length !== 1 && (
                      <i
                        style={{
                          marginLeft: "0px",
                          marginTop: "35px",

                          fontSize: "1.25rem",
                          color: "black",
                        }}
                        onClick={() => handleRemoveClick(i)}
                        class={"fa fa-remove"}
                      />
                    )}
                  </CCol>
                </CRow>
              </CRow>
            );
          })}

          <CRow style={{ marginLeft: "250px" }}>
            <CCol md="3">
              <CButton
                style={{
                  marginLeft: "10px",
                  marginTop: "35px",
                }}
                onClick={enableCreate}
                className={"saveBtn"}
              >
                {" "}
                Save
              </CButton>
              <CButton
                shape={"pill"}
                id={"Parliamentarycancel"}
                style={{ marginTop: "-59px", marginLeft: "90px" }}
                className={"cancelBtn"}
                onClick={handleClickParliamentary}
              >
                CANCEL
              </CButton>
              {error !== "" ? <p>{error}</p> : null}
            </CCol>
          </CRow>

          <CButton
            style={{
              position: "absolute",
              top: "15px",
              right: "15px",
              backgroundColor: "green",
              border: "1px solid green",
            }}
            className={"cancelBtn"}
            onClick={() => {
              handleClickParliamentary();
              // handleClickLegislative();
            }}
          >
            Back
          </CButton>
        </div>
      )}
      <div className={menu.style3}>
        {sideBar2 && (
          <div className={menu.style} style={{ marginLeft: "-108px" }}>
            <CRow className={""}>
              <CCol md="12" lg="12" sm="12">
                <div>
                  <span
                    style={{
                      fontSize: "18px",
                      fontWeight: "700",
                      marginLeft: "20px",
                    }}
                  >
                    Adding Legislative Assembly Constituency{" "}
                  </span>
                </div>
              </CCol>
            </CRow>
            <CRow
              className={"row-alignment"}
              style={{ marginLeft: "5px", marginTop: "20px" }}
              sm={12}
              md={12}
              lg={12}
            >
              <CCol>
                <CLabel
                  style={{
                    position: "relative",
                    marginLeft: "5px",
                    fontSize: "23px",
                    fontWeight: "650",
                    cursor: "pointer",
                  }}
                  className={"form-labels-6"}
                >
                  Parliamentary Constituency:
                </CLabel>
                <span style={{ marginTop: "13px", marginLeft: "5px" }}>
                  TamilNadu
                </span>
              </CCol>
            </CRow>

            {inputList.map((x, i) => {
              return (
                <CRow
                  className={"row-alignment"}
                  style={{ marginLeft: "5px", marginTop: "20px" }}
                  sm={12}
                  md={12}
                  lg={12}
                >
                  <CCol md="2">
                    <CLabel className={"label-name-1"}>
                      Legislative
                      <span className={"text-danger"}> *</span>
                    </CLabel>

                    <CInput
                      id={"LegislativeName"}
                      name={"Legislativename"}
                      placeholder="Enter Ward Number"
                      maxlength="60"
                      size="60"
                      value={x.panchayatname}
                      onChange={(e) => handleInputChange(e, i)}
                    />
                  </CCol>

                  <CCol md="2">
                    <CLabel className={"label-name-1"}>
                      Abbreviation
                      <span className={"text-danger"}> *</span>
                    </CLabel>
                    <CInput
                      id={"Legislativeabrreviation"}
                      name={"abbreviation"}
                      placeholder="Enter Abbreviation"
                      maxlength="5"
                      size="5"
                      value={x.panchayatabbreviation}
                      onChange={(e) => handleInputChange(e, i)}
                    />
                  </CCol>
                  <CCol md="2">
                    <CLabel className={"label-name-1"}>
                      Code
                      <span className={"text-danger"}> *</span>
                    </CLabel>
                    <CInput
                      id={"Legislativecode"}
                      name={"code"}
                      placeholder="Enter Code"
                      maxlength="5"
                      size="5"
                      value={x.panchayatcode}
                      onChange={(e) => handleInputChange(e, i)}
                    />
                  </CCol>

                  <CRow>
                    <CCol md="3">
                      {inputList.length - 1 === i && (
                        <i
                          style={{
                            marginLeft: "0px",
                            marginTop: "35px",

                            fontSize: "1.25rem",
                            color: "#3273e9",
                          }}
                          onClick={handleAddClick}
                          class={"fa fa-plus"}
                        />
                      )}
                    </CCol>
                    <CCol md="3">
                      {inputList.length !== 1 && (
                        <i
                          style={{
                            marginLeft: "0px",
                            marginTop: "35px",

                            fontSize: "1.25rem",
                            color: "black",
                          }}
                          onClick={() => handleRemoveClick(i)}
                          class={"fa fa-remove"}
                        />
                      )}
                    </CCol>
                  </CRow>
                </CRow>
              );
            })}

            <CRow style={{ marginLeft: "250px" }}>
              <CCol md="3">
                <CButton
                  style={{
                    marginLeft: "10px",
                    marginTop: "35px",
                  }}
                  onClick={enableCreate}
                  className={"saveBtn"}
                >
                  {" "}
                  Save
                </CButton>
                <CButton
                  shape={"pill"}
                  id={"Legislativecancel"}
                  style={{ marginTop: "-59px", marginLeft: "90px" }}
                  className={"cancelBtn"}
                  onClick={handleClickLegislative}
                >
                  CANCEL
                </CButton>
                {error !== "" ? <p>{error}</p> : null}
              </CCol>
            </CRow>

            <CButton
              style={{
                position: "absolute",
                top: "15px",
                right: "15px",
                backgroundColor: "green",
                border: "1px solid green",
              }}
              className={"cancelBtn"}
              onClick={() => {
                handleClickLegislative();
                // handleClickLegislative();
              }}
            >
              Back
            </CButton>
          </div>
        )}
        {sideBarup1 && (
          <div className={menu.style1} style={{ marginLeft: "-108px" }}>
            <CRow className={""}>
              <CCol md="12" lg="12" sm="12">
                <div>
                  <span
                    style={{
                      fontSize: "18px",
                      fontWeight: "700",
                      marginLeft: "20px",
                    }}
                  >
                    Adding Parliamentary Constituency{" "}
                  </span>
                </div>
              </CCol>
            </CRow>

            <CRow md="12" style={{ marginLeft: "10px", marginTop: "15px" }}>
              <CCol
                md="6"
                id={"createRoleUploadTemplate"}
                onClick={() => {
                  document.getElementById("uploadRoleTemplate").click();
                }}
              >
                <span
                  style={{ fontSize: "20px", cursor: "pointer", color: "blue" }}
                >
                  <i className="fas fa-upload"></i>&nbsp;
                </span>

                <CLabel
                  style={{
                    position: "relative",
                    marginLeft: "20px",
                    cursor: "pointer",
                  }}
                  className={"form-labels-6"}
                >
                  Upload
                </CLabel>
                <CInput
                  id={"uploadRoleTemplate"}
                  style={{ display: "none" }}
                  type={"file"}
                  onChange={handleChange}
                  accept={SheetJSFT}
                />
              </CCol>
              <CCol md="6" style={{ marginLeft: "150px", marginTop: "-38px" }}>
                <CSVLink data={csvData}>
                  <span
                    style={{
                      fontSize: "20px",
                      cursor: "pointer",
                      color: "red",
                    }}
                  >
                    <i className="fas fa-download"></i>&nbsp;
                  </span>

                  <CLabel
                    style={{
                      position: "relative",
                      marginLeft: "20px",
                      cursor: "pointer",
                      color: "black",
                    }}
                    className={"form-labels-6"}
                  >
                    Download
                  </CLabel>
                </CSVLink>
              </CCol>
            </CRow>
            <CRow>
              <CCol md="3">
                <CButton
                  style={{
                    marginLeft: "30px",
                    marginTop: "25px",
                  }}
                  onClick={handleFile}
                  className={"saveBtn"}
                >
                  {" "}
                  Confirm
                </CButton>

                <CButton
                  style={{
                    position: "absolute",
                    top: "-100px",
                    right: "-660px",
                    marginLeft: "30px",
                    backgroundColor: "green",
                    border: "1px solid green",
                  }}
                  className={"cancelBtn"}
                  onClick={() => {
                    bulkhandleClick();
                  }}
                >
                  Back
                </CButton>
              </CCol>
            </CRow>

            {isValue && excelupload.data !== 0 ? (
              <div>
                <CRow
                  style={{
                    padding: "4%",
                    marginTop: "1.5%",
                    marginLeft: "-45px",
                  }}
                >
                  <CDataTable
                    items={excelupload.data}
                    fields={fieldss1}
                    columnFilter
                    tableFilter
                    tableLabel={"List of Parliamentary Constituency"}
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
                              {/* <CInput
                                    type={"checkbox"}
                                    style={{
                                      width: "15px",
                                      height: "15px",
                                      marginLeft: "30px",
                                      marginBottom: "10px",
                                    }}
                                  /> */}
                              {/* <CCol style={{ fontSize: "1.15rem" }} md="12">
                                  </CCol> */}
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
                                  id={"constimemDelete"}
                                  style={{
                                    marginLeft: "5px",
                                    color: "black",
                                    cursor: "pointer",
                                  }}
                                  className="fa fa-remove"
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
                <CRow style={{ paddingLeft: "180px" }}>
                  <CCol md="3">
                    <CButton
                      type="file"
                      style={{
                        marginLeft: "450px",
                        marginTop: "35px",
                      }}
                      onClick={enableCreate}
                      className={"saveBtn"}
                    >
                      {" "}
                      Save
                    </CButton>
                    <CButton
                      shape={"pill"}
                      id={"Parliamentarycancel"}
                      style={{ marginTop: "-60px", marginLeft: "550px" }}
                      className={"cancelBtn"}
                      onClick={bulkhandleClick}
                    >
                      Cancel
                    </CButton>
                  </CCol>
                </CRow>
              </div>
            ) : null}
          </div>
        )}
        {sideBarup2 && (
          <div
            className={menu.style1}
            style={{ marginLeft: "-108px", minHeight: "900px" }}
          >
            <CRow className={""}>
              <CCol md="12" lg="12" sm="12">
                <div>
                  <span
                    style={{
                      fontSize: "18px",
                      fontWeight: "700",
                      marginLeft: "20px",
                    }}
                  >
                    Adding Legislative Assembly Constituency{" "}
                  </span>
                </div>
              </CCol>
            </CRow>
            <CRow
              className={"row-alignment"}
              style={{ marginLeft: "5px", marginTop: "20px" }}
              sm={12}
              md={12}
              lg={12}
            >
              <CCol>
                <CLabel
                  style={{
                    position: "relative",
                    marginLeft: "5px",
                    fontSize: "23px",
                    fontWeight: "650",
                    cursor: "pointer",
                  }}
                  className={"form-labels-6"}
                >
                  Parliamentary Constituency:
                </CLabel>
                <span style={{ marginTop: "13px", marginLeft: "5px" }}>
                  TamilNadu
                </span>
              </CCol>
            </CRow>

            <CRow md="12" style={{ marginLeft: "10px", marginTop: "15px" }}>
              <CCol
                md="6"
                id={"createRoleUploadTemplate"}
                onClick={() => {
                  document.getElementById("uploadRoleTemplate").click();
                }}
              >
                <span
                  style={{ fontSize: "20px", cursor: "pointer", color: "blue" }}
                >
                  <i className="fas fa-upload"></i>&nbsp;
                </span>

                <CLabel
                  style={{
                    position: "relative",
                    marginLeft: "20px",
                    cursor: "pointer",
                  }}
                  className={"form-labels-6"}
                >
                  Upload
                </CLabel>
                <CInput
                  id={"uploadRoleTemplate"}
                  style={{ display: "none" }}
                  type={"file"}
                  onChange={handleChange}
                  accept={SheetJSFT}
                />
              </CCol>
              <CCol md="6" style={{ marginLeft: "150px", marginTop: "-38px" }}>
                <CSVLink data={csvData}>
                  <span
                    style={{
                      fontSize: "20px",
                      cursor: "pointer",
                      color: "red",
                    }}
                  >
                    <i className="fas fa-download"></i>&nbsp;
                  </span>

                  <CLabel
                    style={{
                      position: "relative",
                      marginLeft: "20px",
                      cursor: "pointer",
                      color: "black",
                    }}
                    className={"form-labels-6"}
                  >
                    Download
                  </CLabel>
                </CSVLink>
              </CCol>
            </CRow>
            <CRow>
              <CCol md="3">
                <CButton
                  style={{
                    marginLeft: "30px",
                    marginTop: "25px",
                  }}
                  onClick={handleFile}
                  className={"saveBtn"}
                >
                  {" "}
                  Confirm
                </CButton>

                <CButton
                  style={{
                    position: "absolute",
                    right: "-660px",
                    marginLeft: "30px",
                    top: "-160px",
                    backgroundColor: "green",
                    border: "1px solid green",
                  }}
                  className={"cancelBtn"}
                  onClick={() => {
                    bulkhandleClick();
                    // handleClickLegislative();
                  }}
                >
                  Back
                </CButton>
              </CCol>
            </CRow>

            {isValue && excelupload.data !== 0 ? (
              <div>
                <CRow
                  style={{
                    padding: "4%",
                    marginTop: "-1.5%",
                    marginLeft: "-45px",
                  }}
                >
                  <CDataTable
                    items={excelupload.data}
                    fields={fields2}
                    columnFilter
                    tableFilter
                    tableLabel={"List of Legislative Assembly constituency"}
                    itemsPerPageSelect
                    itemsPerPage={5}
                    hover
                    sorter
                    pagination
                    scopedSlots={{
                      show_details3: (item, index) => {
                        return (
                          <td className="py-1">
                            <CRow>
                              <CCol style={{ fontSize: "1rem" }} md="16">
                                <i
                                  style={{
                                    marginLeft: "35px",
                                  }}
                                  className="fa fa-remove"
                                  bsStyle="overlay"
                                  onClick={() => menusremoveicon(item)}
                                />
                              </CCol>
                            </CRow>
                          </td>
                        );
                      },
                      details: (item, index) => {},
                    }}
                  />
                </CRow>
                <CRow style={{ paddingLeft: "180px" }}>
                  <CCol md="3">
                    <CButton
                      type="file"
                      style={{
                        marginLeft: "450px",
                        marginTop: "5px",
                      }}
                      onClick={enableCreate}
                      className={"saveBtn"}
                    >
                      {" "}
                      Save
                    </CButton>
                    <CButton
                      shape={"pill"}
                      id={"Legislativecancel"}
                      style={{ marginTop: "-60px", marginLeft: "550px" }}
                      className={"cancelBtn"}
                      onClick={bulkhandleClick}
                    >
                      Cancel
                    </CButton>
                  </CCol>
                </CRow>
              </div>
            ) : null}
          </div>
        )}
        <React.Fragment>
          {memberhide && (
            <div>
              <CCard className={"cardSave"}>
                <div className={"main-headerlabel"}>
                  <span className={"header-label"}>Constituency</span>
                </div>
                <CRow style={{ marginTop: "45px" }}>
                  <CCol>
                    <CCol md="5">
                      <CButton
                        style={{
                          marginLeft: "45px",
                        }}
                        id={"LegislativesaveAbbreviationConfigureCode"}
                        className={"saveBtn"}
                        onClick={viewcreate}
                      >
                        Add Constituency
                      </CButton>{" "}
                    </CCol>
                  </CCol>
                </CRow>

                <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                  <CCol className={"column-align"} md="4">
                    <CLabel className={"label-name"}>
                      State
                      <span className={"text-danger"}>*</span>
                    </CLabel>
                    <Select
                      styles={{ marginLeft: "50px" }}
                      type={"text"}
                      id={"constituencyState"}
                      className={"input-align"}
                      placeholder="Select the State"
                      options={select}
                    />
                  </CCol>
                  <CCol className={"column-align"} md="4">
                    <CLabel className={"label-name"}>
                      District / City
                      <span className={"text-danger"}>*</span>
                    </CLabel>
                    <Select
                      styles={{ marginLeft: "50px" }}
                      type={"text"}
                      id={"constituencycity"}
                      className={"input-align"}
                      placeholder="Select the District / City "
                      options={select}
                    />
                  </CCol>
                </CRow>

                <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                  <CCol className={"column-align"} md="4">
                    <CLabel className={"label-name"}>
                      Parliamentary Constituency
                      <span className={"text-danger"}> *</span>
                    </CLabel>
                    <Select
                      placeholder="Select Parliamentary Constituency"
                      id={"parliamentaryconstituency"}
                      type={"text"}
                      className={"input-align"}
                      style={{ marginLeft: "5px" }}
                      options={select}
                    />
                  </CCol>
                  <CCol className={"column-align"} md="4">
                    <CLabel className={"label-name"}>
                      Legislative Assembly Constituency
                      <span className={"text-danger"}> *</span>
                    </CLabel>
                    <Select
                      placeholder="Select Legislative Assembly Constituency"
                      id={"legislativeAssemblyconstitue"}
                      type={"text"}
                      className={"input-align"}
                      style={{ marginLeft: "5px" }}
                      options={select}
                    />
                  </CCol>
                </CRow>

                <CRow
                  style={{
                    padding: "4%",
                    marginTop: "-2.5%",
                    marginLeft: "2px",
                  }}
                >
                  <CDataTable
                    items={userDataview}
                    fields={fieldsview}
                    columnFilter
                    tableFilter
                    tableLabel={"List of Constituency"}
                    itemsPerPageSelect
                    itemsPerPage={5}
                    hover
                    sorter
                    pagination
                    scopedSlots={{
                      show_detailsview: (item, index) => {
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
          {hide && (
            <div>
              <CCard className={"cardSave"}>
                <div className={"main-headerlabel"}>
                  <span className={"header-label"}>Constituency</span>
                </div>

                <CRow
                  className={"row-alignment"}
                  style={{ marginLeft: "-76px" }}
                >
                  <CCol className={"column-align"} md="12" lg="12" sm="12">
                    <p className="mandatory_txt" style={{ marginLeft: "50px" }}>
                      Mandatory fields are marked with an asterisk (*)
                    </p>

                    <div style={{ marginLeft: "-20px" }}>
                      <div className={"row-headerlabel"}>
                        <span
                          style={{ marginLeft: "70px" }}
                          className={"header-label"}
                        >
                          {" "}
                          Adding CONSTITUENCY{" "}
                        </span>
                      </div>
                      <CRow
                        className={"row-alignment"}
                        md="12"
                        sm="12"
                        lg="12"
                        style={{ marginLeft: "-6px" }}
                      >
                        <CCol className={"column-align"} md="4">
                          <CLabel className={"label-name"}>
                            State
                            <span className={"text-danger"}>*</span>
                          </CLabel>
                          <Select
                            styles={{ marginLeft: "50px" }}
                            type={"text"}
                            id={"constituencyState"}
                            options={select}
                            className={"input-align"}
                            placeholder="Select the State"
                          />
                        </CCol>
                        {municipalList && (
                          <React.Fragment>
                            <CCol className={"column-align"} md={4} lg={4}>
                              <CLabel className={"label-name-1"}>
                                Parliamentary Constituency
                                <span className={"text-danger"}> *</span>
                              </CLabel>
                              <Select
                                placeholder="Select Parliamentary Constituency"
                                id={"parliamentaryconstituency"}
                                type={"text"}
                                value={collected}
                                onChange={changedistrictpanchayat}
                                components={{
                                  MenuList: SelectMenuButtonParliamentary,
                                }}
                                options={select}
                              />
                              {villageHide.districtpanchayat &&
                              collected.length !== 0 ? (
                                <div
                                  style={{
                                    width: 300,
                                    marginLeft: "446px",
                                    marginTop: "-40px",
                                    padding: 10,
                                  }}
                                >
                                  <i
                                    className={"editIcon"}
                                    id={"oParliamentaryEdit"}
                                    class="fas fa-edit"
                                  />
                                  <div
                                    style={{
                                      width: 300,
                                      marginLeft: "26px",
                                      marginTop: "-30px",
                                      padding: 10,
                                      color: "red",
                                    }}
                                  >
                                    <i
                                      className={"editIcon"}
                                      id={"Parliamentarytrash"}
                                      class="fas fa-trash"
                                    />
                                  </div>
                                </div>
                              ) : null}
                            </CCol>
                          </React.Fragment>
                        )}
                      </CRow>
                      <CRow
                        className={"row-alignment"}
                        md="12"
                        sm="12"
                        lg="12"
                        style={{ marginLeft: "-6px" }}
                      >
                        <CCol className={"column-align"} md="4">
                          <CLabel className={"label-name"}>
                            District / City
                            <span className={"text-danger"}>*</span>
                          </CLabel>
                          <Select
                            styles={{ marginLeft: "50px" }}
                            type={"text"}
                            id={"constituencycity"}
                            className={"input-align"}
                            options={select}
                            placeholder="Select the District / City "
                          />
                        </CCol>
                        {municipalListadd && (
                          <React.Fragment>
                            <CCol className={"column-align"} md={4} lg={4}>
                              <CLabel className={"label-name-1"}>
                                Legislative Assembly Constituency
                                <span className={"text-danger"}> *</span>
                              </CLabel>
                              <Select
                                placeholder="Select the Legislative Assembly"
                                id={"legislative"}
                                type={"text"}
                                value={selected1}
                                onChange={changePanchayatUnion}
                                components={{
                                  MenuList: SelectMenuButtonLegislative,
                                }}
                                options={select}
                              />
                              {villageHide.panchayatunion &&
                              selected1.length !== 0 ? (
                                <div
                                  style={{
                                    width: 300,
                                    marginLeft: "446px",
                                    marginTop: "-40px",
                                    padding: 10,
                                  }}
                                >
                                  <i
                                    className={"editIcon"}
                                    id={"legislativeEdit"}
                                    class="fas fa-edit"
                                  />
                                  <div
                                    style={{
                                      width: 300,
                                      marginLeft: "26px",
                                      marginTop: "-30px",
                                      padding: 10,
                                      color: "red",
                                    }}
                                  >
                                    <i
                                      className={"editIcon"}
                                      id={"legislativetrash"}
                                      class="fas fa-trash"
                                    />
                                  </div>
                                </div>
                              ) : null}
                            </CCol>                          
                          </React.Fragment>
                        )}                       
                      </CRow>

                      <CRow>
                        <CCol>
                          <CLabel
                            style={{
                              fontSize: "20PX",
                              fontFamily: "Open Sans",
                              fontWeight: "700",
                              marginLeft: "71px",
                              marginTop: "20px",
                            }}
                          >
                            Select Street
                          </CLabel>
                        </CCol>
                      </CRow>

                      <CRow
                        className={"row-alignment"}
                        md="12"
                        sm="12"
                        lg="12"
                        style={{ marginLeft: "-6px" }}
                      >
                        <CCol className={"column-align"} md="4">
                          <CLabel className={"label-name"}>
                            Area / Village
                            <span className={"text-danger"}>*</span>
                          </CLabel>
                          <Select
                            type={"text"}
                            id={"constituencyarea"}
                            className={"input-align"}
                            placeholder="Select the Area / Village"
                            options={select}
                          />
                        </CCol>

                        <CCol className={"column-align"} md="4">
                          <CLabel className={"label-name"}>
                            Ward Name
                            <span className={"text-danger"}> *</span>
                          </CLabel>
                          <Select
                            type={"text"}
                            id={"constituencyward"}
                            className={"input-align"}
                            placeholder="Select the Ward"
                            options={select}
                          />
                        </CCol>
                      </CRow>
                      <CRow
                        className={"row-alignment"}
                        md="12"
                        sm="12"
                        lg="12"
                        style={{ marginLeft: "-6px" }}
                      >
                        <CCol className={"column-align"} md="4">
                          <CLabel className={"label-name"}>
                            Street Name
                            <span className={"text-danger"}>*</span>
                          </CLabel>
                          <Select
                            type={"text"}
                            id={"constituencystreet"}
                            className={"input-align"}
                            placeholder="Select the Street "
                            options={select}
                          />
                        </CCol>
                      </CRow>
                      <CRow>
                        <CCol md="10">
                          <CCol
                            md="5"
                            style={{
                              marginTop: "-35px",
                              marginLeft: "285px",
                            }}
                          >
                            <CButton
                              style={{
                                float: "right",
                              }}
                              id={"cancelconstituency"}
                              className={"cancelBtn"}
                              onClick={cancelview}
                            >
                              CANCEL
                            </CButton>
                            <CButton
                              style={{
                                float: "right",
                                marginRight: "15px",
                              }}
                              id={"saveconstituencyabbreviationconfigurecode"}
                              className={"saveBtn"}
                            >
                              Save
                            </CButton>{" "}
                          </CCol>
                        </CCol>
                      </CRow>
                      <CRow
                        style={{
                          padding: "6%",
                          marginTop: "-3.5%",
                          marginLeft: "-30px",
                        }}
                      >
                        <CDataTable
                          items={userData}
                          fields={fields}
                          columnFilter
                          tableFilter
                          tableLabel={"List of Streets"}
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
                                    <CCol
                                      style={{ fontSize: "1.15rem" }}
                                      md="12"
                                    ></CCol>
                                  </CRow>
                                </td>
                              );
                            },
                            show_details1: (item, index) => {
                              return (
                                <td className="py-2">
                                  <CRow>
                                    <CCol
                                      style={{ fontSize: "1.15rem" }}
                                      md="12"
                                    >
                                      <i
                                        style={{
                                          marginRight: "5px",
                                          color: "#3480e2",
                                          cursor: "pointer",
                                        }}
                                        id={"constituencyediticon"}
                                        className="fas fa-edit"
                                      ></i>
                                      <i
                                        id={"constituencydelete"}
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
                  </CCol>
                </CRow>
              </CCard>
            </div>
          )}
        </React.Fragment>
      </div>
    </div>
  );
}
export default Constituency;
