import React, { useState } from "react";
import {
  CButton,
  CCard,
  CCol,
  CInput,
  CContainer,
  CLink,
  CLabel,
  CRow,
} from "@coreui/react";
import Select, { components } from "react-select";
import CDataTable from "../../CoreComponents/table/CDataTable";
import { Dropdown, Menu } from "antd";
import "antd/dist/antd.css";
import "./RuralBodies.css";
import { CSVLink } from "react-csv";
import * as XLSX from "xlsx";
import SheetJSFT from "../../../Tools/excelupload/SheetJSFT";
import { make_cols } from "../../../Tools/excelupload/MakeColumn";

function RuralBodies() {
  const [excelupload, setExcelUpload] = React.useState({
    file: {},
    data: [],
    cols: [],
  });
  const [selected] = useState([]);
  const menusgrid = (item) => {
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

  const [variable] = useState([]);

  const fields1 = [
    {
      key: "sNo",
      _style: { width: "10%" },
      sorter: false,
      filter: false,
    },
    { key: "district", label: "District panchayat", _style: { width: "20%" } },
    {
      label: "Action",
      key: "show_details3",
      _style: { width: "1%" },
      sorter: false,
      filter: false,
    },
  ];
 
  const userdatavp = [
    {
      sNo:"1",
      village:"Nolambur",
    }
  ];

  const fieldVP = [
    {
      key: "sNo",
      _style: { width: "10%" },
      sorter: false,
      filter: false,
    },
    { key: "village", label: "Village Panchayat", _style: { width: "20%" } },
    {
      label: "Action",
      key: "show_details3",

      _style: { width: "1%" },
      sorter: false,
      filter: false,
    },
  ];

  const userDatadp = [
    {
      sNo:"1",
      district:"Maduravoyal",      
    },
  ];

  const fieldDP = [
    {
      key: "sNo",
      _style: { width: "10%" },
      sorter: false,
      filter: false,
    },
    { key: "district", label: "District Panchayat", _style: { width: "20%" } },
    {
      label: "Action",
      key: "show_details3",

      _style: { width: "1%" },
      sorter: false,
      filter: false,
    },
  ];

  const userdatapu =[
    {
      sNo:"1",
      union:"Mogappair"
    }
  ]

  const fieldPU = [
    {
      key: "sNo",
      _style: { width: "10%" },
      sorter: false,
      filter: false,
    },
    { key: "union", label: "Panchayat Union", _style: { width: "20%" } },
    {
      label: "Action",
      key: "show_details3",

      _style: { width: "1%" },
      sorter: false,
      filter: false,
    },
  ];

  const csvData = [
    ["firstname", "lastname", "email"],
    ["John", "Doe", "john.doe@xyz.com"],
    ["Jane", "Doe", "jane.doe@xyz.com"],
  ];

  const userData = [
    {
      sNo: "1.",
      state: "Tamilnadu",
      city: "Chennai",
      District: "Maduravoyal",
      Union: "Mogappair",
      Village: "Nolambur",
    },
  ];
  const [error] = useState("");
  const [municipalList, setMunicipalList] = useState(true);
  const [, setmunicipalCreate] = useState(false);

  const enableCreate = async () => {
    await setMunicipalList(false);
    await setmunicipalCreate(true);
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

  const handleChange = (e) => {
    const files = e.target.files;
    if (files && files[0]) setExcelUpload({ file: files[0] });
  };
  const handleFile = () => {
    /* Boilerplate to set up FileReader */
    const reader = new FileReader();
    const rABS = !!reader.readAsBinaryString;

    reader.onload = (e) => {
      const bstr = e.target.result;
      const wb = XLSX.read(bstr, {
        type: rABS ? "binary" : "array",
        bookVBA: true,
      });
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      const data = XLSX.utils.sheet_to_json(ws);
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

  const handleAddClick = (e) => {
    e.preventDefault();
    setInputList([...inputList, { name: "", abbreviation: "", code: "" }]);
  };
  
  const SelectMenuButtonDistrictpanchayat = (props) => {
    return (
      <components.MenuList {...props}>
        {props.children}
        <div style={{ marginTop: "-56px", minHeight: "55px" }}>
          <CLink
            className={"saveBtn"}
            onClick={handleClicKDP}
            style={{ marginLeft: "100px" }}
          >
            Add
          </CLink>
          <CLink
            className={"saveBtn"}
            onClick={bulkhandleClickDP}
            style={{ marginLeft: "10px" }}
          >
            Bulk Upload{" "}
          </CLink>
          <CLink
            className={"saveBtn"}
            onClick={viewhandleDP}
            style={{ marginLeft: "10px" }}
          >
            View{" "}
          </CLink>
        </div>
      </components.MenuList>
    );
  };
  const SelectMenuButtonVillagepanchayat = (props) => {
    return (
      <components.MenuList {...props}>
        {props.children}
        <div style={{ marginTop: "-56px", minHeight: "55px" }}>
          <CLink
            className={"saveBtn"}
            onClick={handleClicKVP}
            style={{ marginLeft: "100px" }}
          >
            Add
          </CLink>
          <CLink
            className={"saveBtn"}
            onClick={bulkhandleClickVP}
            style={{ marginLeft: "10px" }}
          >
            Bulk Upload{" "}
          </CLink>
          <CLink
            className={"saveBtn"}
            onClick={viewhandleVP}
            style={{ marginLeft: "10px" }}
          >
            View{" "}
          </CLink>
        </div>
      </components.MenuList>
    );
  };
  const SelectMenuButtonpanchayatunion = (props) => {
    return (

      <components.MenuList {...props}>
        {props.children}
        <div style={{ marginTop: "-56px", minHeight: "55px" }}>
          <CLink
            className={"saveBtn"}
            onClick={handleClicKPU}
            style={{ marginLeft: "100px" }}
          >
            Add
          </CLink>
          <CLink
            className={"saveBtn"}
            onClick={bulkhandleClickPU}
            style={{ marginLeft: "10px" }}
          >
            Bulk Upload{" "}
          </CLink>
          <CLink
            className={"saveBtn"}
            onClick={viewhandlePU}
            style={{ marginLeft: "10px" }}
          >
            View{" "}
          </CLink>
        </div>
      </components.MenuList>
    );
  };
  const [menu, setMenu] = useState({
    // style: "menu2",
    menuStatus: "open",
    // style3: "menu2",
  });
  const [sideBar1e, setSideBar1e] = useState("");
  const [sideBar1, setSideBar1] = useState("");
  const [sideBarup1, setSideBarup1] = useState("");

  const [sideBar2e, setSideBar2e] = useState("");
  const [sideBar2, setSideBar2] = useState("");
  const [sideBarup2, setSideBarup2] = useState("");

  const [sideBar3e, setSideBar3e] = useState("");
  const [sideBar3, setSideBar3] = useState("");
  const [sideBarup3, setSideBarup3] = useState("");

  const [inputList, setInputList] = useState([
    { name: "", abbreviation: "", code: "" },
  ]);

  const [isValue, setIsValue] = useState(false);

  const viewhandleVP = () => {
    switch (menu.menuStatus) {
      case "open":
      default:
        setMenu({
          menuStatus: "close",
          style: "menu active1",
        });

        setTimeout(() => {
          setSideBar2e(true);
        }, 1000);
        setSideBarup2(false);
        setSideBarup1(false);
        setSideBarup3(false);
        setSideBar1(false);
        setSideBar2(false);
        setSideBar3(false);
        setSideBar3e(false);
        setSideBar1e(false);
        break;
      case "close":
        setMenu({
          menuStatus: "open",
          // style3: "menu2",
          style: "menu active2",
        });
        setTimeout(() => {
          setSideBar2e(false);
        }, 1000);
        setInputList([{ name: "", abbreviation: "", code: "" }]);
        break;
    }
  };
  const bulkhandleClickVP = () => {
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
        setSideBarup3(false);
        setSideBar1(false);
        setSideBar2(false);
        setSideBar3(false);
        setSideBar2e(false);
        setSideBar3e(false);
        setSideBar1e(false);
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
        setIsValue(false);
        break;
    }
  };
  const handleClicKVP = () => {
    switch (menu.menuStatus) {
      case "open":
      default:
        setMenu({
          menuStatus: "close",
          style: "menu active1",
        });

        setTimeout(() => {
          setSideBar2(true);
        }, 1000);
        setSideBar1(false);
        setSideBar3(false);
        setSideBar1e(false);
        setSideBarup1(false);
        setSideBar2e(false);
        setSideBar3e(false);
        setSideBarup2(false);
        setSideBarup3(false);
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
        setInputList([{ name: "", abbreviation: "", code: "" }]);
        break;
    }
  };

  const viewhandleDP = () => {
    switch (menu.menuStatus) {
      case "open":
      default:
        setMenu({
          menuStatus: "close",
          style: "menu active1",
        });

        setTimeout(() => {
          setSideBar1e(true);
        }, 1000);
        setSideBar1(false);
        setSideBar2(false);
        setSideBar3(false);
        setSideBarup1(false);
        setSideBar2e(false);
        setSideBar3e(false);
        setSideBarup2(false);
        setSideBarup3(false);
        break;
      case "close":
        setMenu({
          menuStatus: "open",
          // style3: "menu2",
          style: "menu active2",
        });
        setTimeout(() => {
          setSideBar1e(false);
        }, 1000);
        setInputList([{ name: "", abbreviation: "", code: "" }]);
        break;
    }
  };
  const bulkhandleClickDP = () => {
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
        setSideBarup3(false);
        setSideBar1(false);
        setSideBar2(false);
        setSideBar3(false);
        setSideBar2e(false);
        setSideBar3e(false);
        setSideBar1e(false);
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
        setIsValue(false);
        break;
    }
  };
  const handleClicKDP = () => {
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
        setSideBar2(false);
        setSideBar3(false);
        setSideBar1e(false);
        setSideBarup1(false);
        setSideBar2e(false);
        setSideBar3e(false);
        setSideBarup2(false);
        setSideBarup3(false);
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
        setInputList([{ name: "", abbreviation: "", code: "" }]);
        break;
    }
  };

  const handleClicKPU = () => {
    switch (menu.menuStatus) {
      case "open":
      default:
        setMenu({
          menuStatus: "close",
          style: "menu active1",
        });

        setTimeout(() => {
          setSideBar3(true);
        }, 1000);
        setSideBar2(false);
        setSideBar1(false);
        setSideBar1e(false);
        setSideBar2e(false);
        setSideBar3e(false);
        setSideBarup1(false);
        setSideBarup2(false);
        setSideBarup3(false);
        break;
      case "close":
        setMenu({
          menuStatus: "open",
          // style3: "menu2",
          style: "menu active2",
        });
        setTimeout(() => {
          setSideBar3(false);
        }, 1000);
        setInputList([{ name: "", abbreviation: "", code: "" }]);
        break;
    }
  };

  const viewhandlePU = () => {
    switch (menu.menuStatus) {
      case "open":
      default:
        setMenu({
          menuStatus: "close",
          style: "menu active1",
        });

        setTimeout(() => {
          setSideBar3e(true);
        }, 1000);
        setSideBar1(false);
        setSideBar2(false);
        setSideBar3(false);
        setSideBarup1(false);
        setSideBar2e(false);
        setSideBar1e(false);
        setSideBarup2(false);
        setSideBarup3(false);
        break;
      case "close":
        setMenu({
          menuStatus: "open",
          // style3: "menu2",
          style: "menu active2",
        });
        setTimeout(() => {
          setSideBar3e(false);
        }, 1000);
        setInputList([{ name: "", abbreviation: "", code: "" }]);
        break;
    }
  };
  const bulkhandleClickPU = () => {
    switch (menu.menuStatus) {
      case "open":
      default:
        setMenu({
          menuStatus: "close",
          // style3: "menu2",

          style1: "menu active1",
        });
        setSideBarup3(true);
        setSideBarup2(false);
        setSideBarup1(false);
        setSideBar1(false);
        setSideBar2(false);
        setSideBar3(false);
        setSideBar2e(false);
        setSideBar3e(false);
        setSideBar1e(false);
        break;
      case "close":
        setMenu({
          menuStatus: "open",
          // style3: "menu2",
          style1: "menu active2",
        });
        setTimeout(() => {
          setSideBarup3(false);
        }, 1000);
        setIsValue(false);
        break;
    }
  };

  const select = [{ value: "nadu", label: "TamilNadu" }];

  const city = [{ value: "Chennai", label: "Chennai" }];

  const district = [
    {
      span: (
        <CLink className={"saveBtn"} style={{ marginLeft: "200px" }}>
          Add{" "}
        </CLink>
      ),
    },
    { value: "Maduravoyal", label: "Maduravoyal" },
  ];

  const Union = [
    {
      span: (
        <CLink className={"saveBtn"} style={{ marginLeft: "200px" }}>
          Add{" "}
        </CLink>
      ),
    },
    { value: "Mogappair", label: "Mogappair" },
  ];

  const Village = [
    {
      span: (
        <CLink className={"saveBtn"} style={{ marginLeft: "200px" }}>
          Add{" "}
        </CLink>
      ),
    },
    { value: "Nolambur", label: "Nolambur" },
  ];

  const menus = (details) => {
    return (
      <Menu>
        <Menu.Item>Edit</Menu.Item>
        <Menu.Item>Delete</Menu.Item>
      </Menu>
    );
  };

  return (
    <React.Fragment>
      <div className={menu.style3}>
        {sideBar1 && (
          <div
            className={menu.style}
            style={{
              marginLeft: "-85px",
              minHeight: `${window.innerHeight - 198}px`,
              maxHeight: `${window.innerHeight - 198}px`,
              overflow: "auto",
            }}
          >
            <CContainer>
              <CRow className={""}>
                <CCol md="12" lg="12" sm="12">
                  <div>
                    <span
                      style={{
                        fontSize: "21px",
                        fontWeight: "700",
                        fontFamily: "Arial, Helvetica, sans-serif",
                        marginLeft: "-30px",
                      }}
                    >
                      Add District panchayat{" "}
                    </span>
                  </div>
                </CCol>
              </CRow>

              <CContainer>
                <CRow
                  className={"LengthDataw"}
                  style={{ marginLeft: "-4em", marginTop: "20px" }}
                  sm={12}
                  md={12}
                  lg={12}
                >
                  <CCol md="6">
                    <CLabel className={"form-labels-9 col-md-5 reAssign-Label"}>
                      State :{" "}
                    </CLabel>

                    <CLabel
                      className={"reAssign-Detail"}
                      style={{ marginLeft: "70px" }}
                    >
                      {selected.assignedTo
                        ? selected.assignedTo.firstName
                        : "Tamilnadu"}
                    </CLabel>
                  </CCol>
                  <CCol md="6" style={{ marginLeft: "-200px" }}>
                    <CLabel className={"form-labels-9 col-md-5 reAssign-Label"}>
                      District / City :{" "}
                    </CLabel>

                    <CLabel className={"reAssign-Detail"}>
                      {selected.assignedTo
                        ? selected.assignedTo.firstName
                        : "Chennai"}
                    </CLabel>
                  </CCol>
                </CRow>
              </CContainer>
              {inputList.map((x, i) => {
                return (
                  <CContainer>
                    <CRow
                      className={"row-alignment"}
                      style={{ marginLeft: "0.4em", marginTop: "20px" }}
                      sm={12}
                      md={12}
                      lg={12}
                    >
                      <CCol md="2">
                        <CLabel
                          className={"label-name-1"}
                          style={{ marginLeft: "-50px" }}
                        >
                          District panchayat
                          <span className={"text-danger"}> *</span>
                        </CLabel>

                        <CInput
                          id={"MunicipalName"}
                          name={"municipalname"}
                          placeholder="Enter Municipal Corporation"
                          maxlength="60"
                          size="60"
                          value={x.panchayatname}
                          style={{ marginLeft: "-50px", width: "155px" }}
                          onChange={(e) => handleInputChange(e, i)}
                        />
                      </CCol>

                      <CCol md="2">
                        <CLabel className={"label-name-1"}>
                          Abbreviation
                          <span className={"text-danger"}> *</span>
                        </CLabel>
                        <CInput
                          id={"municipalabrreviation"}
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
                          id={"municipalcode"}
                          name={"code"}
                          placeholder="Enter Code"
                          maxlength="5"
                          size="5"
                          value={x.panchayatcode}
                          onChange={(e) => handleInputChange(e, i)}
                        />
                      </CCol>

                      <CRow sm={12} md={12} lg={12}>
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
                  </CContainer>
                );
              })}
              <CContainer>
                <CRow style={{ marginLeft: "15em" }} sm={12} md={12} lg={12}>
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
                      id={"municipalcancel"}
                      style={{ marginTop: "-59px", marginLeft: "90px" }}
                      className={"cancelBtn"}
                      onClick={handleClicKDP}
                    >
                      CANCEL
                    </CButton>
                    {error !== "" ? <p>{error}</p> : null}
                  </CCol>
                </CRow>
              </CContainer>
              <CContainer>
                <CButton
                  style={{
                    position: "absolute",
                    top: "15px",
                    right: "40px",
                    backgroundColor: "green",
                    border: "1px solid green",
                  }}
                  className={"cancelBtn"}
                  onClick={() => {
                    handleClicKDP();
                  }}
                >
                  Back
                </CButton>
              </CContainer>
            </CContainer>
          </div>
        )}
        {sideBar2 && (
          <div
            className={menu.style}
            style={{
              marginLeft: "-85px",
              minHeight: `${window.innerHeight - 198}px`,
              maxHeight: `${window.innerHeight - 198}px`,
              overflow: "auto",
            }}
          >
            <CContainer>
              <CRow className={""}>
                <CCol md="12" lg="12" sm="12">
                  <div>
                    <span
                      style={{
                        fontSize: "21px",
                        fontWeight: "700",
                        fontFamily: "Arial, Helvetica, sans-serif",
                        marginLeft: "-30px",
                      }}
                    >
                      Add Village Panchayat{" "}
                    </span>
                  </div>
                </CCol>
              </CRow>
              <CContainer>
                <CRow
                  className={"LengthDataw"}
                  style={{ marginLeft: "-4em", marginTop: "20px" }}
                  sm={12}
                  md={12}
                  lg={12}
                >
                  <CCol md="6">
                    <CLabel className={"form-labels-9 col-md-5 reAssign-Label"}>
                      State :{" "}
                    </CLabel>

                    <CLabel
                      className={"reAssign-Detail"}
                      style={{ marginLeft: "9em" }}
                    >
                      {selected.assignedTo
                        ? selected.assignedTo.firstName
                        : "Tamilnadu"}
                    </CLabel>
                  </CCol>
                  <CCol md="6" style={{ marginLeft: "-200px" }}>
                    <CLabel className={"form-labels-9 col-md-5 reAssign-Label"}>
                    District panchayat :{" "}
                    </CLabel>

                    <CLabel className={"reAssign-Detail"}
                    style={{ marginLeft: "11em" }}>
                      {selected.assignedTo
                        ? selected.assignedTo.firstName
                        : "Maduravoyal"}
                    </CLabel>
                  </CCol>
                </CRow>
                <CRow
                  className={"LengthDataw"}
                  style={{ marginLeft: "-4em", marginTop: "20px" }}
                  sm={12}
                  md={12}
                  lg={12}
                >
                  <CCol md="6">
                    <CLabel className={"form-labels-9 col-md-5 reAssign-Label"}>
                    District / City :{" "}
                    </CLabel>

                    <CLabel
                      className={"reAssign-Detail"}
                      style={{ marginLeft: "9em" }}
                    >
                      {selected.assignedTo
                        ? selected.assignedTo.firstName
                        : "Chennai"}
                    </CLabel>
                  </CCol>
                  <CCol md="6" style={{ marginLeft: "-200px" }}>
                    <CLabel className={"form-labels-9 col-md-5 reAssign-Label"}>
                    Panchayat Union :{" "}
                    </CLabel>

                    <CLabel className={"reAssign-Detail"}
                    style={{ marginLeft: "11em" }}>
                      {selected.assignedTo
                        ? selected.assignedTo.firstName
                        : "Mogappair"}
                    </CLabel>
                  </CCol>
                </CRow>
              </CContainer>
              {inputList.map((x, i) => {
                return (
                  <CContainer>
                    <CRow
                      className={"row-alignment"}
                      style={{ marginLeft: "5px", marginTop: "20px" }}
                      sm={12}
                      md={12}
                      lg={12}
                    >
                      <CCol md="2">
                        <CLabel
                          className={"label-name-1"}
                          style={{ marginLeft: "-50px" }}
                        >
                          Village panchayat
                          <span className={"text-danger"}> *</span>
                        </CLabel>

                        <CInput
                          id={"MunicipalName"}
                          name={"municipalname"}
                          placeholder="Enter Municipal Corporation"
                          maxlength="60"
                          size="60"
                          value={x.panchayatname}
                          style={{ marginLeft: "-50px", width: "155px" }}
                          onChange={(e) => handleInputChange(e, i)}
                        />
                      </CCol>

                      <CCol md="2">
                        <CLabel className={"label-name-1"}>
                          Abbreviation
                          <span className={"text-danger"}> *</span>
                        </CLabel>
                        <CInput
                          id={"municipalabrreviation"}
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
                          id={"municipalcode"}
                          name={"code"}
                          placeholder="Enter Code"
                          maxlength="5"
                          size="5"
                          value={x.panchayatcode}
                          onChange={(e) => handleInputChange(e, i)}
                        />
                      </CCol>

                      <CRow sm={12} md={12} lg={12}>
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
                  </CContainer>
                );
              })}
              <CContainer>
                <CRow style={{ marginLeft: "15em" }} sm={12} md={12} lg={12}>
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
                      id={"municipalcancel"}
                      style={{ marginTop: "-59px", marginLeft: "90px" }}
                      className={"cancelBtn"}
                      onClick={handleClicKDP}
                    >
                      CANCEL
                    </CButton>
                    {error !== "" ? <p>{error}</p> : null}
                  </CCol>
                </CRow>
              </CContainer>
              <CContainer>
                <CButton
                  style={{
                    position: "absolute",
                    top: "15px",
                    right: "40px",
                    backgroundColor: "green",
                    border: "1px solid green",
                  }}
                  className={"cancelBtn"}
                  onClick={() => {
                    handleClicKDP();
                  }}
                >
                  Back
                </CButton>
              </CContainer>
            </CContainer>
          </div>
        )}
        {sideBar3 && (
          <div
            className={menu.style}
            style={{
              marginLeft: "-85px",
              minHeight: `${window.innerHeight - 198}px`,
              maxHeight: `${window.innerHeight - 198}px`,
              overflow: "auto",
            }}
          >
            <CContainer>
              <CRow className={""}>
                <CCol md="12" lg="12" sm="12">
                  <div>
                    <span
                      style={{
                        fontSize: "21px",
                        fontWeight: "700",
                        fontFamily: "Arial, Helvetica, sans-serif",
                        marginLeft: "-30px",
                      }}
                    >
                      Add Panchayat Union{" "}
                    </span>
                  </div>
                </CCol>
              </CRow>

              <CContainer>
                <CRow
                  className={"LengthDataw"}
                  style={{ marginLeft: "-4em", marginTop: "20px" }}
                  sm={12}
                  md={12}
                  lg={12}
                >
                  <CCol md="6">
                    <CLabel className={"form-labels-9 col-md-5 reAssign-Label"}>
                      State :{" "}
                    </CLabel>

                    <CLabel
                      className={"reAssign-Detail"}
                      style={{ marginLeft: "9em" }}
                    >
                      {selected.assignedTo
                        ? selected.assignedTo.firstName
                        : "Tamilnadu"}
                    </CLabel>
                  </CCol>
                  <CCol md="6" style={{ marginLeft: "-200px" }}>
                    <CLabel className={"form-labels-9 col-md-5 reAssign-Label"}>
                    District panchayat :{" "}
                    </CLabel>

                    <CLabel className={"reAssign-Detail"} style={{marginLeft:"12em"}}>
                      {selected.assignedTo
                        ? selected.assignedTo.firstName
                        : "Maduravoyal"}
                    </CLabel>
                  </CCol>
                </CRow>
                <CRow
                  className={"LengthDataw"}
                  style={{ marginLeft: "-4em", marginTop: "20px" }}
                  sm={12}
                  md={12}
                  lg={12}
                >
                  <CCol md="6">
                    <CLabel className={"form-labels-9 col-md-5 reAssign-Label"}>
                    District / City :{" "}
                    </CLabel>

                    <CLabel
                      className={"reAssign-Detail"}
                      style={{ marginLeft: "9em" }}
                    >
                      {selected.assignedTo
                        ? selected.assignedTo.firstName
                        : "Chennai"}
                    </CLabel>
                  </CCol>
                  </CRow>
              </CContainer>

              {inputList.map((x, i) => {
                return (
                  <CContainer>
                    <CRow
                      className={"row-alignment"}
                      style={{ marginLeft: "5px", marginTop: "20px" }}
                      sm={12}
                      md={12}
                      lg={12}
                    >
                      <CCol md="2">
                        <CLabel
                          className={"label-name-1"}
                          style={{ marginLeft: "-50px" }}
                        >
                          Panchayat Union
                          <span className={"text-danger"}> *</span>
                        </CLabel>

                        <CInput
                          id={"MunicipalName"}
                          name={"municipalname"}
                          placeholder="Enter Municipal Corporation"
                          maxlength="60"
                          size="60"
                          value={x.panchayatname}
                          style={{ marginLeft: "-50px", width: "155px" }}
                          onChange={(e) => handleInputChange(e, i)}
                        />
                      </CCol>

                      <CCol md="2">
                        <CLabel className={"label-name-1"}>
                          Abbreviation
                          <span className={"text-danger"}> *</span>
                        </CLabel>
                        <CInput
                          id={"municipalabrreviation"}
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
                          id={"municipalcode"}
                          name={"code"}
                          placeholder="Enter Code"
                          maxlength="5"
                          size="5"
                          value={x.panchayatcode}
                          onChange={(e) => handleInputChange(e, i)}
                        />
                      </CCol>

                      <CRow sm={12} md={12} lg={12}>
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
                  </CContainer>
                );
              })}
              <CContainer>
                <CRow style={{ marginLeft: "15em" }} sm={12} md={12} lg={12}>
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
                      id={"municipalcancel"}
                      style={{ marginTop: "-59px", marginLeft: "90px" }}
                      className={"cancelBtn"}
                      onClick={handleClicKDP}
                    >
                      CANCEL
                    </CButton>
                    {error !== "" ? <p>{error}</p> : null}
                  </CCol>
                </CRow>
              </CContainer>
              <CContainer>
                <CButton
                  style={{
                    position: "absolute",
                    top: "15px",
                    right: "40px",
                    backgroundColor: "green",
                    border: "1px solid green",
                  }}
                  className={"cancelBtn"}
                  onClick={() => {
                    handleClicKDP();
                  }}
                >
                  Back
                </CButton>
              </CContainer>
            </CContainer>
          </div>
        )}
        {sideBarup1 && (
          <div
            className={menu.style1}
            style={{
              marginLeft: "-85px",
              minHeight: `${window.innerHeight - 198}px`,
              maxHeight: `${window.innerHeight - 198}px`,
              overflow: "auto",
            }}
          >
            <div style={{ marginLeft: "-60px" }}>
              <CContainer>
                <CRow className={""}>
                  <CCol md="12" lg="12" sm="12">
                    <div>
                      <span
                        style={{
                          fontSize: "21px",
                          fontWeight: "700",
                          fontFamily: "Arial, Helvetica, sans-serif",
                          marginLeft: "20px",
                        }}
                      >
                        Add District panchayat{" "}
                      </span>
                    </div>
                  </CCol>
                </CRow>
              </CContainer>
              <CContainer>
                <CRow
                  className={"LengthDataw"}
                  style={{ marginLeft: "0.5em", marginTop: "20px" }}
                  sm={12}
                  md={12}
                  lg={12}
                >
                  <CCol md="6">
                    <CLabel className={"form-labels-9 col-md-5 reAssign-Label"}>
                      State :{" "}
                    </CLabel>

                    <CLabel
                      className={"reAssign-Detail"}
                      style={{ marginLeft: "70px" }}
                    >
                      {selected.assignedTo
                        ? selected.assignedTo.firstName
                        : "Tamilnadu"}
                    </CLabel>
                  </CCol>
                  <CCol md="6" style={{ marginLeft: "-200px" }}>
                    <CLabel className={"form-labels-9 col-md-5 reAssign-Label"}>
                      District / City :{" "}
                    </CLabel>

                    <CLabel className={"reAssign-Detail"}>
                      {selected.assignedTo
                        ? selected.assignedTo.firstName
                        : "Chennai"}
                    </CLabel>
                  </CCol>
                </CRow>
              </CContainer>
              <CContainer>
                <CRow
                  md="12"
                  style={{
                    marginLeft: "10px",
                    marginTop: "15px",
                  }}
                >
                  <CCol
                    md="6"
                    id={"createRoleUploadTemplate"}
                    onClick={() => {
                      document.getElementById("uploadRoleTemplate").click();
                    }}
                  >
                    <span
                      style={{
                        fontSize: "20px",
                        cursor: "pointer",
                        color: "blue",
                      }}
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
                  <CCol
                    md="6"
                    style={{
                      marginLeft: "150px",
                      marginTop: "-38px",
                    }}
                  >
                    <CSVLink data={csvData}>
                      <span
                        style={{
                          fontSize: "20px",
                          cursor: "pointer",
                          color: "red",
                        }}
                      >
                        <i className="fas fa-download"></i>
                        &nbsp;
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
                        top: "-12em",
                        right: "-670px",
                        marginLeft: "30px",
                        backgroundColor: "green",
                        border: "1px solid green",
                      }}
                      className={"cancelBtn"}
                      onClick={() => {
                        bulkhandleClickDP();
                      }}
                    >
                      Back
                    </CButton>
                  </CCol>
                </CRow>
              </CContainer>

              {isValue && excelupload.data !== 0 ? (
                <div>
                  <CContainer>
                    <CRow
                      style={{
                        padding: "4%",
                        marginTop: "1.5%",
                        marginLeft: "0em",
                      }}
                    >
                      <CDataTable
                        items={excelupload.data}
                        fields={fields1}
                        columnFilter
                        tableFilter
                        tableLabel={"List of District panchayat"}
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
                                        color: "black",
                                      }}
                                      className="fa fa-remove"
                                      bsStyle="overlay"
                                      onClick={() => menusgrid(item)}
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
                  </CContainer>
                  <CContainer>
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
                          id={"bulkstatecancel"}
                          style={{
                            marginTop: "-60px",
                            marginLeft: "550px",
                          }}
                          className={"cancelBtn"}
                          onClick={bulkhandleClickDP}
                        >
                          Cancel
                        </CButton>
                      </CCol>
                    </CRow>
                  </CContainer>
                </div>
              ) : null}
            </div>
          </div>
        )}

        {sideBarup2 && (
          <div
            className={menu.style1}
            style={{
              marginLeft: "-85px",
              minHeight: `${window.innerHeight - 198}px`,
              maxHeight: `${window.innerHeight - 198}px`,
              overflow: "auto",
            }}
          >
            <div style={{ marginLeft: "-60px" }}>
              <CContainer>
                <CRow className={""}>
                  <CCol md="12" lg="12" sm="12">
                    <div>
                      <span
                        style={{
                          fontSize: "21px",
                          fontWeight: "700",
                          fontFamily: "Arial, Helvetica, sans-serif",
                          marginLeft: "20px",
                        }}
                      >
                        Add Village Panchayat{" "}
                      </span>
                    </div>
                  </CCol>
                </CRow>
              </CContainer>
              <CContainer>
                <CRow
                  className={"LengthDataw"}
                  style={{ marginLeft: "0.5em", marginTop: "20px" }}
                  sm={12}
                  md={12}
                  lg={12}
                >
                  <CCol md="6">
                    <CLabel className={"form-labels-9 col-md-5 reAssign-Label"}>
                      State :{" "}
                    </CLabel>

                    <CLabel
                      className={"reAssign-Detail"}
                      style={{ marginLeft: "9em" }}
                    >
                      {selected.assignedTo
                        ? selected.assignedTo.firstName
                        : "Tamilnadu"}
                    </CLabel>
                  </CCol>
                  <CCol md="6" style={{ marginLeft: "-200px" }}>
                    <CLabel className={"form-labels-9 col-md-5 reAssign-Label"}>
                    District panchayat :{" "}
                    </CLabel>

                    <CLabel className={"reAssign-Detail"}
                    style={{ marginLeft: "11em" }}>
                      {selected.assignedTo
                        ? selected.assignedTo.firstName
                        : "Maduravoyal"}
                    </CLabel>
                  </CCol>
                </CRow>
                <CRow
                  className={"LengthDataw"}
                  style={{ marginLeft: "0.5em", marginTop: "20px" }}
                  sm={12}
                  md={12}
                  lg={12}
                >
                  <CCol md="6">
                    <CLabel className={"form-labels-9 col-md-5 reAssign-Label"}>
                    District / City :{" "}
                    </CLabel>

                    <CLabel
                      className={"reAssign-Detail"}
                      style={{ marginLeft: "9em" }}
                    >
                      {selected.assignedTo
                        ? selected.assignedTo.firstName
                        : "Chennai"}
                    </CLabel>
                  </CCol>
                  <CCol md="6" style={{ marginLeft: "-200px" }}>
                    <CLabel className={"form-labels-9 col-md-5 reAssign-Label"}>
                    Panchayat Union :{" "}
                    </CLabel>

                    <CLabel className={"reAssign-Detail"}
                    style={{ marginLeft: "11em" }}>
                      {selected.assignedTo
                        ? selected.assignedTo.firstName
                        : "Mogappair"}
                    </CLabel>
                  </CCol>
                </CRow>
              </CContainer>
              <CContainer>
                <CRow
                  md="12"
                  style={{
                    marginLeft: "10px",
                    marginTop: "15px",
                  }}
                >
                  <CCol
                    md="6"
                    id={"createRoleUploadTemplate"}
                    onClick={() => {
                      document.getElementById("uploadRoleTemplate").click();
                    }}
                  >
                    <span
                      style={{
                        fontSize: "20px",
                        cursor: "pointer",
                        color: "blue",
                      }}
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
                  <CCol
                    md="6"
                    style={{
                      marginLeft: "150px",
                      marginTop: "-38px",
                    }}
                  >
                    <CSVLink data={csvData}>
                      <span
                        style={{
                          fontSize: "20px",
                          cursor: "pointer",
                          color: "red",
                        }}
                      >
                        <i className="fas fa-download"></i>
                        &nbsp;
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
              </CContainer>
              <CContainer>
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
                        top: "-16em",
                        right: "-670px",
                        marginLeft: "30px",
                        backgroundColor: "green",
                        border: "1px solid green",
                      }}
                      className={"cancelBtn"}
                      onClick={() => {
                        bulkhandleClickVP();
                      }}
                    >
                      Back
                    </CButton>
                  </CCol>
                </CRow>
              </CContainer>
              {isValue && excelupload.data !== 0 ? (
                <div>
                  <CContainer>
                    <CRow
                      style={{
                        padding: "4%",
                        marginTop: "1.5%",
                        marginLeft: "0em",
                      }}
                    >
                      <CDataTable
                        items={excelupload.data}
                        fields={fieldVP}
                        columnFilter
                        tableFilter
                        tableLabel={"List of Village Panchayat"}
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
                                        color: "black",
                                      }}
                                      className="fa fa-remove"
                                      bsStyle="overlay"
                                      onClick={() => menusgrid(item)}
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
                  </CContainer>
                  <CContainer>
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
                          id={"bulkstatecancel"}
                          style={{
                            marginTop: "-60px",
                            marginLeft: "550px",
                          }}
                          className={"cancelBtn"}
                          onClick={bulkhandleClickVP}
                        >
                          Cancel
                        </CButton>
                      </CCol>
                    </CRow>
                  </CContainer>
                </div>
              ) : null}
            </div>
          </div>
        )}

        {sideBarup3 && (
          <div
            className={menu.style1}
            style={{
              marginLeft: "-85px",
              minHeight: `${window.innerHeight - 198}px`,
              maxHeight: `${window.innerHeight - 198}px`,
              overflow: "auto",
            }}
          >
            <div style={{ marginLeft: "-60px" }}>
              <CContainer>
                <CRow className={""}>
                  <CCol md="12" lg="12" sm="12">
                    <div>
                      <span
                        style={{
                          fontSize: "21px",
                          fontWeight: "700",
                          fontFamily: "Arial, Helvetica, sans-serif",
                          marginLeft: "20px",
                        }}
                      >
                        Add Panchayat Union{" "}
                      </span>
                    </div>
                  </CCol>
                </CRow>
              </CContainer>
              <CContainer>
                <CRow
                  className={"LengthDataw"}
                  style={{ marginLeft: "0.5em", marginTop: "20px" }}
                  sm={12}
                  md={12}
                  lg={12}
                >
                  <CCol md="6">
                    <CLabel className={"form-labels-9 col-md-5 reAssign-Label"}>
                      State :{" "}
                    </CLabel>

                    <CLabel
                      className={"reAssign-Detail"}
                      style={{ marginLeft: "9em" }}
                    >
                      {selected.assignedTo
                        ? selected.assignedTo.firstName
                        : "Tamilnadu"}
                    </CLabel>
                  </CCol>
                  <CCol md="6" style={{ marginLeft: "-200px" }}>
                    <CLabel className={"form-labels-9 col-md-5 reAssign-Label"}>
                    District panchayat :{" "}
                    </CLabel>

                    <CLabel className={"reAssign-Detail"} style={{marginLeft:"12em"}}>
                      {selected.assignedTo
                        ? selected.assignedTo.firstName
                        : "Maduravoyal"}
                    </CLabel>
                  </CCol>
                </CRow>
                <CRow
                  className={"LengthDataw"}
                  style={{ marginLeft: "0.5em", marginTop: "20px" }}
                  sm={12}
                  md={12}
                  lg={12}
                >
                  <CCol md="6">
                    <CLabel className={"form-labels-9 col-md-5 reAssign-Label"}>
                    District / City :{" "}
                    </CLabel>

                    <CLabel
                      className={"reAssign-Detail"}
                      style={{ marginLeft: "9em" }}
                    >
                      {selected.assignedTo
                        ? selected.assignedTo.firstName
                        : "Chennai"}
                    </CLabel>
                  </CCol>
                  </CRow>
              </CContainer>
              <CContainer>
                <CRow
                  md="12"
                  style={{
                    marginLeft: "10px",
                    marginTop: "15px",
                  }}
                >
                  <CCol
                    md="6"
                    id={"createRoleUploadTemplate"}
                    onClick={() => {
                      document.getElementById("uploadRoleTemplate").click();
                    }}
                  >
                    <span
                      style={{
                        fontSize: "20px",
                        cursor: "pointer",
                        color: "blue",
                      }}
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
                  <CCol
                    md="6"
                    style={{
                      marginLeft: "150px",
                      marginTop: "-38px",
                    }}
                  >
                    <CSVLink data={csvData}>
                      <span
                        style={{
                          fontSize: "20px",
                          cursor: "pointer",
                          color: "red",
                        }}
                      >
                        <i className="fas fa-download"></i>
                        &nbsp;
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
              </CContainer>
              <CContainer>
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
                        top: "-210px",
                        right: "-670px",
                        marginLeft: "30px",
                        backgroundColor: "green",
                        border: "1px solid green",
                      }}
                      className={"cancelBtn"}
                      onClick={() => {
                        bulkhandleClickPU();
                      }}
                    >
                      Back
                    </CButton>
                  </CCol>
                </CRow>
              </CContainer>
              {isValue && excelupload.data !== 0 ? (
                <div>
                  <CContainer>
                    <CRow
                      style={{
                        padding: "4%",
                        marginTop: "1.5%",
                        marginLeft: "0em",
                      }}
                    >
                      <CDataTable
                        items={excelupload.data}
                        fields={fieldPU}
                        columnFilter
                        tableFilter
                        tableLabel={"List of Panchayat Union"}
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
                                        color: "black",
                                      }}
                                      className="fa fa-remove"
                                      bsStyle="overlay"
                                      onClick={() => menusgrid(item)}
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
                  </CContainer>
                  <CContainer>
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
                          id={"bulkstatecancel"}
                          style={{
                            marginTop: "-60px",
                            marginLeft: "550px",
                          }}
                          className={"cancelBtn"}
                          onClick={bulkhandleClickPU}
                        >
                          Cancel
                        </CButton>
                      </CCol>
                    </CRow>
                  </CContainer>
                </div>
              ) : null}
            </div>
          </div>
        )}

        {sideBar1e && (
          <div
            className={menu.style}
            style={{
              marginLeft: "-85px",
              minHeight: `${window.innerHeight - 198}px`,
              maxHeight: `${window.innerHeight - 198}px`,
              overflow: "auto",
            }}
          >
            <CContainer>
              <CRow className={""}>
                <CCol md="12" lg="12" sm="12">
                  <div>
                    <span
                      style={{
                        fontSize: "21px",
                        fontWeight: "700",
                        fontFamily: "Arial, Helvetica, sans-serif",
                        marginLeft: "-16px",
                      }}
                    >
                      District Panchayat{" "}
                    </span>
                  </div>
                </CCol>
              </CRow>
            </CContainer>

            <CContainer>
                <CRow
                  className={"LengthDataw"}
                  style={{ marginLeft: "-2em", marginTop: "20px" }}
                  sm={12}
                  md={12}
                  lg={12}
                >
                  <CCol md="6">
                    <CLabel className={"form-labels-9 col-md-5 reAssign-Label"}>
                      State :{" "}
                    </CLabel>

                    <CLabel
                      className={"reAssign-Detail"}
                      style={{ marginLeft: "70px" }}
                    >
                      {selected.assignedTo
                        ? selected.assignedTo.firstName
                        : "Tamilnadu"}
                    </CLabel>
                  </CCol>
                  <CCol md="6" style={{ marginLeft: "-200px" }}>
                    <CLabel className={"form-labels-9 col-md-5 reAssign-Label"}>
                      District / City :{" "}
                    </CLabel>

                    <CLabel className={"reAssign-Detail"}>
                      {selected.assignedTo
                        ? selected.assignedTo.firstName
                        : "Chennai"}
                    </CLabel>
                  </CCol>
                </CRow>
              </CContainer>

            <CContainer>
              <CRow
                style={{
                  padding: "4%",
                  marginTop: "1.5%",
                  marginLeft: "-45px",
                }}
              >
                <CDataTable
                  items={userDatadp}
                  fields={fieldDP}
                  tableLabel={"District Panchayat"}
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
                                  color: "black",
                                }}
                                className="fa fa-remove"
                                bsStyle="overlay"
                                onClick={() => menusgrid(item)}
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
            </CContainer>

            <CContainer>
              <CButton
                style={{
                  position: "absolute",
                  top: "15px",
                  right: "40px",
                  backgroundColor: "green",
                  border: "1px solid green",
                }}
                className={"cancelBtn"}
                onClick={() => {
                  handleClicKDP();
                }}
              >
                Back
              </CButton>
            </CContainer>
          </div>
        )}

        {sideBar2e && (
          <div
            className={menu.style}
            style={{
              marginLeft: "-85px",
              minHeight: `${window.innerHeight - 198}px`,
              maxHeight: `${window.innerHeight - 198}px`,
              overflow: "auto",
            }}
          >

            <CContainer>
              <CRow className={""}>
                <CCol md="12" lg="12" sm="12">
                  <div>
                    <span
                      style={{
                        fontSize: "21px",
                        fontWeight: "700",
                        fontFamily: "Arial, Helvetica, sans-serif",
                        marginLeft: "-16px",
                      }}
                    >
                      Village Panchayat{" "}
                    </span>
                  </div>
                </CCol>
              </CRow>
            </CContainer>

            <CContainer>
                <CRow
                  className={"LengthDataw"}
                  style={{ marginLeft: "-2em", marginTop: "20px" }}
                  sm={12}
                  md={12}
                  lg={12}
                >
                  <CCol md="6">
                    <CLabel className={"form-labels-9 col-md-5 reAssign-Label"}>
                      State :{" "}
                    </CLabel>

                    <CLabel
                      className={"reAssign-Detail"}
                      style={{ marginLeft: "8em" }}
                    >
                      {selected.assignedTo
                        ? selected.assignedTo.firstName
                        : "Tamilnadu"}
                    </CLabel>
                  </CCol>
                  <CCol md="6" style={{ marginLeft: "-200px" }}>
                    <CLabel className={"form-labels-9 col-md-5 reAssign-Label"}>
                    District panchayat :{" "}
                    </CLabel>

                    <CLabel className={"reAssign-Detail"}
                    style={{ marginLeft: "11em" }}>
                      {selected.assignedTo
                        ? selected.assignedTo.firstName
                        : "Maduravoyal"}
                    </CLabel>
                  </CCol>
                </CRow>
                <CRow
                  className={"LengthDataw"}
                  style={{ marginLeft: "-2em", marginTop: "20px" }}
                  sm={12}
                  md={12}
                  lg={12}
                >
                  <CCol md="6">
                    <CLabel className={"form-labels-9 col-md-5 reAssign-Label"}>
                    District / City :{" "}
                    </CLabel>

                    <CLabel
                      className={"reAssign-Detail"}
                      style={{ marginLeft: "8em" }}
                    >
                      {selected.assignedTo
                        ? selected.assignedTo.firstName
                        : "Chennai"}
                    </CLabel>
                  </CCol>
                  <CCol md="6" style={{ marginLeft: "-200px" }}>
                    <CLabel className={"form-labels-9 col-md-5 reAssign-Label"}>
                    Panchayat Union :{" "}
                    </CLabel>

                    <CLabel className={"reAssign-Detail"}
                    style={{ marginLeft: "11em" }}>
                      {selected.assignedTo
                        ? selected.assignedTo.firstName
                        : "Mogappair"}
                    </CLabel>
                  </CCol>
                </CRow>
              </CContainer>
            <CContainer>
              <CRow
                style={{
                  padding: "4%",
                  marginTop: "1.5%",
                  marginLeft: "-45px",
                }}
              >
                <CDataTable
                  items={userdatavp}
                  fields={fieldVP}
                  tableLabel={"Village Panchayat"}
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
                                  color: "black",
                                }}
                                className="fa fa-remove"
                                bsStyle="overlay"
                                onClick={() => menusgrid(item)}
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
            </CContainer>

            <CContainer>
              <CButton
                style={{
                  position: "absolute",
                  top: "15px",
                  right: "40px",
                  backgroundColor: "green",
                  border: "1px solid green",
                }}
                className={"cancelBtn"}
                onClick={() => {
                  handleClicKDP();
                }}
              >
                Back
              </CButton>
            </CContainer>
          </div>
        )}

        {sideBar3e && (
          <div
            className={menu.style}
            style={{
              marginLeft: "-85px",
              minHeight: `${window.innerHeight - 198}px`,
              maxHeight: `${window.innerHeight - 198}px`,
              overflow: "auto",
            }}
          >
            <CContainer>
              <CRow className={""}>
                <CCol md="12" lg="12" sm="12">
                  <div>
                    <span
                      style={{
                        fontSize: "21px",
                        fontWeight: "700",
                        fontFamily: "Arial, Helvetica, sans-serif",
                        marginLeft: "-16px",
                      }}
                    >
                      Panchayat Union{" "}
                    </span>
                  </div>
                </CCol>
              </CRow>
            </CContainer>
            <CContainer>
                <CRow
                  className={"LengthDataw"}
                  style={{ marginLeft: "-2em", marginTop: "20px" }}
                  sm={12}
                  md={12}
                  lg={12}
                >
                  <CCol md="6">
                    <CLabel className={"form-labels-9 col-md-5 reAssign-Label"}>
                      State :{" "}
                    </CLabel>

                    <CLabel
                      className={"reAssign-Detail"}
                      style={{ marginLeft: "9em" }}
                    >
                      {selected.assignedTo
                        ? selected.assignedTo.firstName
                        : "Tamilnadu"}
                    </CLabel>
                  </CCol>
                  <CCol md="6" style={{ marginLeft: "-200px" }}>
                    <CLabel className={"form-labels-9 col-md-5 reAssign-Label"}>
                    District panchayat :{" "}
                    </CLabel>

                    <CLabel className={"reAssign-Detail"} style={{marginLeft:"12em"}}>
                      {selected.assignedTo
                        ? selected.assignedTo.firstName
                        : "Maduravoyal"}
                    </CLabel>
                  </CCol>
                </CRow>
                <CRow
                  className={"LengthDataw"}
                  style={{ marginLeft: "-2em", marginTop: "20px" }}
                  sm={12}
                  md={12}
                  lg={12}
                >
                  <CCol md="6">
                    <CLabel className={"form-labels-9 col-md-5 reAssign-Label"}>
                    District / City :{" "}
                    </CLabel>

                    <CLabel
                      className={"reAssign-Detail"}
                      style={{ marginLeft: "9em" }}
                    >
                      {selected.assignedTo
                        ? selected.assignedTo.firstName
                        : "Chennai"}
                    </CLabel>
                  </CCol>
                  </CRow>
              </CContainer>
            <CContainer>
              <CRow
                style={{
                  padding: "4%",
                  marginTop: "1.5%",
                  marginLeft: "-45px",
                }}
              >
                <CDataTable
                  items={userdatapu}
                  fields={fieldPU}
                  tableLabel={"List of Panchayat Union"}
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
                                  color: "black",
                                }}
                                className="fa fa-remove"
                                bsStyle="overlay"
                                onClick={() => menusgrid(item)}
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
            </CContainer>

            <CContainer>
              <CButton
                style={{
                  position: "absolute",
                  top: "15px",
                  right: "40px",
                  backgroundColor: "green",
                  border: "1px solid green",
                }}
                className={"cancelBtn"}
                onClick={() => {
                  handleClicKDP();
                }}
              >
                Back
              </CButton>
            </CContainer>
          </div>
        )}
        <CCard
          className={"cardSave"}
          style={{
            minHeight: `${window.innerHeight - 198}px`,
            maxHeight: `${window.innerHeight - 198}px`,
            overflow: "auto",
          }}
        >
          <div className={"main-headerlabel"}>
            <span className={"header-label"} style={{marginLeft:"-3em"}}>Rural Bodies</span>
          </div>
          <CContainer>
            <div>
              <div style={{ marginLeft: "-26px", marginTop: "4em" }}>
                <CContainer>
                  <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                    <CCol className={"column-align"} md="3">
                      <CLabel className={"label-name-1"}>
                        State
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <Select
                        id={"Villagestatename"}
                        name={"state"}
                        placeholder={"Select State"}
                        options={select}
                      />
                    </CCol>
                    {municipalList && (
                      <React.Fragment>
                        <CCol className={"column-align"} md="3">
                          <CLabel className={"label-name-1"}>
                            District panchayat
                            <span className={"text-danger"}>*</span>
                          </CLabel>
                          <Select
                            id={"Villagedistrict"}
                            name={"city"}
                            placeholder={"Select District panchayat"}
                            options={district}
                            components={{
                              MenuList: SelectMenuButtonDistrictpanchayat,
                            }}
                          />
                        </CCol>
                      </React.Fragment>
                    )}
                    <CCol className={"column-align"} md="3">
                      <CLabel className={"label-name-1"}>
                        Village Panchayat
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      -{" "}
                      <Select
                        id={"Village"}
                        name={"city"}
                        placeholder={"Select Village panchayat"}
                        components={{
                          MenuList: SelectMenuButtonVillagepanchayat,
                        }}
                        options={Village}
                      />
                    </CCol>
                  </CRow>
                </CContainer>
                <CContainer>
                  <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                    <CCol className={"column-align"} md="3">
                      <CLabel className={"label-name-1"}>
                        District / City
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <Select
                        id={"Villagecity"}
                        name={"state"}
                        placeholder={"Select City Name"}
                        options={city}
                      />
                    </CCol>
                    <CCol className={"column-align"} md="3">
                      <CLabel className={"label-name-1"}>
                        Panchayat Union
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <Select
                        id={"villagepanchyatunion"}
                        name={"city"}
                        placeholder={"Select Panchayat Union"}
                        options={Union}
                        components={{
                          MenuList: SelectMenuButtonpanchayatunion,
                        }}
                      />
                    </CCol>
                  </CRow>
                </CContainer>
              </div>
              <CContainer>
                <CRow
                  style={{
                    padding: "4%",
                    marginTop: "1.5%",
                    marginLeft: "-30px",
                  }}
                  md="12"
                  sm="12"
                  lg="12"
                >
                  <CDataTable
                    tableLabel={"List of Rural Bodies"}
                    items={userData}
                    fields={[
                      {
                        key: "sNo",
                        label: "Sl. No",
                        _style: { width: "5%" },
                        filter: false,
                        sorter: false,
                      },
                      {
                        key: "state",
                        label: "State",
                        _style: { width: "10%" },
                      },
                      {
                        key: "city",
                        label: "District / City",
                        _style: { width: "10%" },
                      },
                      {
                        key: "District",
                        label: "District panchayat",
                        _style: { width: "10%" },
                      },
                      {
                        key: "Union",
                        label: "Panchayat Union",
                        _style: { width: "10%" },
                      },
                      {
                        key: "Village",
                        label: "Village Panchayat",
                        _style: { width: "10%" },
                      },
                      {
                        key: "show_details",
                        label: "Action",
                        _style: { width: "10%" },
                        sorter: false,
                        filter: false,
                      },
                    ]}
                    hover
                    sorter
                    // tableFilter
                    columnFilter
                    itemsPerPageSelect
                    itemsPerPage={5}
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
              </CContainer>
            </div>
          </CContainer>
        </CCard>
      </div>
    </React.Fragment>
  );
}

export default RuralBodies;