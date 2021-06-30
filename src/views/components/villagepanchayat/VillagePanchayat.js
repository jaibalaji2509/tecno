import {
  CButton,
  CCard,
  CCol,
  CInput,
  CLink,
  CLabel,
  CRow,
} from "@coreui/react";
import React, { useState, useEffect } from "react";
import Select, { components } from "react-select";
import CDataTable from "../../CoreComponents/table/CDataTable";
import { saveCreateCorporation } from "../../../services/ApiService";
import { toast } from "react-toastify";
import { Dropdown, Menu } from "antd";
import "antd/dist/antd.css";
import "./VillagePanchayat.css";
import { CSVLink, CSVDownload } from "react-csv";

import * as XLSX from "xlsx";
import "./VillagePanchayat.css";
import SheetJSFT from "../../../Tools/excelupload/SheetJSFT";
import { make_cols } from "../../../Tools/excelupload/MakeColumn";

const VillagePanchayat = () => {
  const [locations, setLocations] = useState({
    state: "",
    district: "",
    city: "",
    ward: "",
    area: "",
    street: "",
    pincode: "",
  });
  const [excelupload, setExcelUpload] = React.useState({
    file: {},
    data: [],
    cols: [],
  });

  const [municipalList, setMunicipalList] = useState(true);
  const [MunicipalCreate, setmunicipalCreate] = useState(false);
  const [selected, setSelected] = useState([]);

  const [sideBar1, setSideBar1] = useState(false);
  const [municipalName] = useState("");
  const [villageList, setvillageList] = useState(true);
  const [villageCreate, setVillageCreate] = useState(false);
  const [panchayatList, setPanchayatlist] = useState(true);
  const [panchayatCreate, setpanchayatCreate] = useState(false);
  const [wardList, setWardList] = useState(true);
  const [wardCreate, setWardCreate] = useState(false);
  const [locationHide, setLocationHide] = useState({
    corporation: true,
    municipalLocation: false,
    districtPanchayat: false,
    townPanchayat: false,
    villagePanchayat: false,
    cityLocation: false,
  });

  const select = [
    {
      span: (
        <CLink
          className={"saveBtn"}
          onClick={handleClick}
          style={{ marginLeft: "200px" }}
        >
          Add{" "}
        </CLink>
      ),
      span: (
        <CLink
          className={"saveBtn"}
          onClick={handleClick}
          style={{ marginLeft: "200px" }}
        >
          Add{" "}
        </CLink>
      ),
    },
    { value: "tamil", label: "Tamilnadu" },
    { value: "Chengalpattu", label: "Chengalpattu" },
    { value: "Chunampedu", label: "Chunampedu" },
    { value: "Vanniyallur", label: "Vanniyallur" },
    { value: "Agaem", label: "Agaram kuturoad" },
    { value: "porpanthel", label: "porpanthal" },
    { value: "5", label: "018" },
    { value: "5", label: "019" },
  ];
  const userData = [
    // {
    //   SNo: "1.",
    //   Street: "Agaram kuturoad",
    //   Ward: "0019",
    //   by: "Jai Balaji",
    //   on: "10/06/2021",
    // },
    // {
    //   SNo: "2.",
    //   Street: "Achari street",
    //   Ward: "0019",
    //   by: "Jai Balaji",
    //   on: "10/06/2021",
    // },
    // {
    //   SNo: "3.",
    //   Street: "Sathya Sai Nagar",
    //   Ward: "0019",
    //   by: "Jai Balaji",
    //   on: "10/06/2021",
    // },
    // {
    //   SNo: "4.",
    //   Street: "Agathiyar Avenue",
    //   Ward: "0019",
    //   by: "Jai Balaji",
    //   on: "10/06/2021",
    // },
    // {
    //   SNo: "5.",
    //   Street: "Santhosapuram street",
    //   Ward: "0019",
    //   by: "Jai Balaji",
    //   on: "10/06/2021",
    // },
  ];
  const userData1 = [
    {
      _id: "00001",
      SNo: "1.",
      DistrictPanchayat: "Chennai",
    },
    {
      _id: "00002",
      SNo: "2.",
      DistrictPanchayat: "Salem",
    },
    {
      _id: "00003",
      SNo: "3.",
      DistrictPanchayat: "Madurai",
    },
    {
      _id: "00004",
      SNo: "4.",
      DistrictPanchayat: "Trichy",
    },
    {
      _id: "00005",
      SNo: "5.",
      DistrictPanchayat: "Thiruvarur",
    },
  ];
  const fields = [
    { key: "SNo", label: "S.NO", _style: { width: "5%" } },
    { key: "Ward", label: "Ward Number", _style: { width: "10%" } },
    { key: "Street", label: "Street Name", _style: { width: "10%" } },
    { key: "by", label: "Entered By", _style: { width: "10%" } },
    { key: "on", label: "Entered On", _style: { width: "10%" } },

    { key: "show_details1", label: "Action", _style: { width: "10%" } },
  ];
  const fields1 = [
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
    { key: "SNo", label: "S.NO", _style: { width: "5%" } },

    { key: "Street", label: "Street Name", _style: { width: "10%" } },
  ];

  const fields2 = [
    {
      key: "SNO",
      label: "S.NO",
      _style: { width: "1%" },
      sorter: false,
      filter: false,
    },

    { key: "MENU1", label: "Ward Number", _style: { width: "1%" } },
    {
      key: "show_details3",
      label: "Action",
      _style: { width: "1%" },

      sorter: false,
      filter: false,
    },
  ];

  const [passing, setPassing] = useState("");
  const [error] = useState("");
  const saveCorporation = async () => {
    setLocationHide({
      ...locationHide,
      municipalLocation: true,
      corporation: false,
    });

    if (passing === "") {
      let body = {
        state: locations.state,
        district: locations.district,
        city: locations.city,
        area: locations.area,
        ward: locations.ward,
        street: locations.street,
      };
      console.log(body);
      try {
        const response = await saveCreateCorporation(JSON.stringify(body));
        console.log(body, "createfirst");
        if (response) {
          toast.success(response);
        }
      } catch (error) {
        toast.error(error);
      }
    }
  };

  const enableCreate = async () => {
    await setMunicipalList(false);
    await setmunicipalCreate(true);
  };

  const editState = async () => {
    await setMunicipalList(false);
    await setmunicipalCreate(true);
  };
  const CancelState = async () => {
    setPassing("");
    await setMunicipalList(true);
    await setmunicipalCreate(false);
  };
  const cancelVillage = async () => {
    setPassing("");
    await setvillageList(true);
    await setVillageCreate(false);
  };
  const cancelWard = async () => {
    setPassing("");
    await setWardList(true);
    await setWardCreate(false);
  };
  const cancelPanchayat = async () => {
    setPassing("");
    await setPanchayatlist(true);
    await setpanchayatCreate(false);
  };
  const [hideMappingVillage, setHideMappingVillage] = useState(true);
  const [hideVillagePanchayat, setHideVillagePanchayat] = useState(false);
  const changeVillagePanchayat = () => {
    setHideMappingVillage(false);
    setHideVillagePanchayat(true);
  };
  const cancelchange = () => {
    setHideMappingVillage(true);
    setHideVillagePanchayat(false);
  };

  const csvData = [
    ["firstname", "lastname", "email"],
    ["John", "Doe", "john.doe@xyz.com"],
    ["Jane", "Doe", "jane.doe@xyz.com"],
  ];
  const [variable, setVariable] = useState([]);

  const menus = (details) => {
    return (
      <Menu>
        <Menu.Item>
          <a>Edit</a>
        </Menu.Item>
        <Menu.Item>
          <a>Delete</a>
        </Menu.Item>
      </Menu>
    );
  };
  const [menu, setMenu] = useState({
    style: "menu2",
    style1: "menu1",
    menuStatus: "open",

    style3: "menu2",
  });
  const SelectMenuButton = (props) => {
    return (
      <components.MenuList {...props}>
        {props.children}
        <div
          style={{
            marginTop: "-323px",
            marginBottom: "-50px",
            minHeight: "300px",
          }}
        >
          <CLink
            className={"saveBtn"}
            onClick={handleClick}
            style={{ marginLeft: "200px" }}
          >
            Add{" "}
          </CLink>
          <CLink
            className={"saveBtn"}
            onClick={bulkhandleClick}
            style={{ marginLeft: "50px" }}
          >
            Bulk Upload{" "}
          </CLink>
        </div>
      </components.MenuList>
    );
  };
  const [sideBar2, setSideBar2] = useState(false);
  const handleClick = () => {
    switch (menu.menuStatus) {
      case "open":
        setMenu({
          menuStatus: "close",
          // style3: "menu2",
          style: "menu active1",
        });

        setSideBar1(true);

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
  const bulkhandleClick = () => {
    switch (menu.menuStatus) {
      case "open":
        setMenu({
          menuStatus: "close",
          // style3: "menu2",

          style1: "menu active1",
        });
        setSideBar2(true);

        break;
      case "close":
        setMenu({
          menuStatus: "open",
          // style3: "menu2",
          style1: "menu active2",
        });
        setTimeout(() => {
          setIsValue(false);
          setSideBar2(false);
        }, 1000);
        break;
    }
    
  };
  const [counter, setCount] = useState(0);

  const [inputList, setInputList] = useState([
    { panchayatname: "", panchayatabbreviation: "", panchayatcode: "" },
  ]);

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

  const menus1 = (item) => {
    return variable.map((x, i) => {
      <tr key={i}>
        <td>{x.SNO}</td>
        <td>{x.MENU1}</td>
        <td>{x.NUMBER1}</td>
        <td>{x.MENU2}</td>
        <td>{x.NUMBER2}</td>
      </tr>;
    });
  };
  // handle click event of the Add button
  const handleAddClick = (e) => {
    e.preventDefault();
    setInputList([
      ...inputList,
      { panchayatname: "", panchayatabbreviation: "", panchayatcode: "" },
    ]);
  };

  const selectWard = [
    { value: "0019", label: "0019" },
    { value: "0018", label: "0018" },
    { value: "0024", label: "0024" },
    { value: "0020", label: "0020" },
    { value: "0019", label: "0019" },
    { value: "0022", label: "0022" },
    { value: "0023", label: "0023" },
    { value: "0025", label: "0025" },
  ];

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
  const [style, setStyle] = useState({ display: "none" });
  return (
    <div className={menu.style3}>
      {sideBar1 && (
        <div className={menu.style}>
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
                  ADDING VILLAGE PANCHAYAT{" "}
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
                  <CLabel
                    className={"label-name-1"}
                    style={{ fontSize: "block" }}
                  >
                    Ward Number
                    <span className={"text-danger"}> *</span>
                  </CLabel>

                  <CInput
                    id={"MunicipalName"}
                    name={"municipalname"}
                    placeholder="Enter District Panchayat"
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

          <CRow style={{ marginLeft: "185px" }}>
            <CCol md="3">
              <CButton
                style={{
                  marginLeft: "30px",
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
                style={{ marginTop: "-60px", marginLeft: "130px" }}
                className={"cancelBtn"}
                onClick={""}
              >
                CANCEL
              </CButton>
              {error !== "" ? <p>{error}</p> : null}
            </CCol>
          </CRow>

          <CRow>
            <CCol md="6">
              <CButton
                style={{
                  position: "absolute",
                  top: "-220px",
                  right: "-330px",
                  marginLeft: "330px",
                  backgroundColor: "green",
                  border: "1px solid green",
                  color: "white",
                }}
                onClick={() => {
                  handleClick();
                }}
              >
                Back
              </CButton>
            </CCol>
          </CRow>
        </div>
      )}
      {sideBar2 && (
        <div className={menu.style1}>
          <CRow className={""}>
            <CCol md="12" lg="12" sm="12">
              <div>
                <span
                  style={{
                    fontSize: "18px",
                    fontWeight: "700",
                    marginLeft: "0px",
                  }}
                >
                  ADDING VILLAGE PANCHAYAT{" "}
                </span>
              </div>
            </CCol>
          </CRow>

          <CRow
            style={{ marginLeft: "10px", marginTop: "15px" }}
            id={"createRoleUploadTemplate"}
            onClick={() => {
              document.getElementById("uploadRoleTemplate").click();
            }}
          >
            <CCol md="12">
              <span style={{ fontSize: "20px", cursor: "pointer" }}>
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
                Upload Village Panchayat
              </CLabel>
              <CInput
                id={"uploadRoleTemplate"}
                style={{ display: "none" }}
                type={"file"}
                onChange={handleChange}
                accept={SheetJSFT}
              />
            </CCol>
         
          </CRow>
<CRow>
<CCol md="3">
              <CButton
                style={{
                  marginLeft: "0px",
                  marginTop: "25px",
                }}
                onClick={handleFile}
                className={"saveBtn"}
              >
                {" "}
                Confirm
              </CButton>

              <CSVLink data={csvData}>
                <CButton
                  shape={"pill"}
                  id={"municipalcancel"}
                  style={{ marginTop: "-55px", marginLeft: "120px" }}
                  className={"cancelBtn"}
                >
                  Download
                </CButton>
              </CSVLink>

              <CButton
                className={"menu"}
                style={{
                  position: "absolute",
                  top: "-82px",
                  right: "-550px",
                  marginLeft: "30px",
                  backgroundColor: "green",
                  border: "1px solid green",
                }}
                className={"cancelBtn"}
                onClick={() => {
                  bulkhandleClick();
                  // handleClick2();
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
                  fields={fields2}
                  columnFilter
                  tableFilter
                  tableLabel={"List of Streets"}
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
                                  color: "red",
                                }}
                                className="fa fa-trash"
                                bsStyle="overlay"
                                onClick={() => menus1(item)}
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
              <CRow style={{ paddingLeft: "140px" }}>
                <CCol md="3">
                  <CButton
                    type="file"
                    style={{
                      marginLeft: "450px",
                      marginTop: "25px",
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
      {hideMappingVillage && (
        <div>
          <CCard className={"cardSave"}>
            <div className={"main-headerlabel"}>
              <span className={"header-label"}>Village panchayat</span>
            </div>
            {locationHide.corporation && (
              <div>
                <div style={{ marginLeft: "-26px" }}>
                  <CRow style={{ marginTop: "45px" }}>
                    <CCol md="10">
                      <CCol md="5">
                        <CButton
                          style={{
                            marginLeft: "45px",
                          }}
                          id={"saveAbbreviationConfigureCode"}
                          className={"saveBtn"}
                          onClick={changeVillagePanchayat}
                        >
                          Add Village panchayat
                        </CButton>{" "}
                      </CCol>
                    </CCol>
                  </CRow>

                  <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                    <CCol className={"column-align"} md="3">
                      <CLabel className={"label-name"}>
                        State
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <Select
                        className={"input-align"}
                        id={"municipalstatename"}
                        name={"state"}
                        placeholder={"Select State"}
                        // value={locations.district}
                        // onChange={changeHandler}
                        options={select}
                      />
                    </CCol>

                    <CCol className={"column-align"} md="3">
                      <CLabel className={"label-name"}>
                        District panchayat
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <Select
                        className={"input-align"}
                        id={"municipaldistrict"}
                        name={"city"}
                        placeholder={"Select District panchayat"}
                        options={select}
                      />
                    </CCol>

                    <CCol className={"column-align"} md="3">
                      <CLabel className={"label-name"}>
                        Village Panchayat
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      -{" "}
                      <Select
                        className={"input-align"}
                        id={"municipaldistrict"}
                        name={"city"}
                        placeholder={"Select Village panchayat"}
                        options={select}
                      />
                    </CCol>
                  </CRow>

                  <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                    <CCol className={"column-align"} md="3">
                      <CLabel className={"label-name"}>
                        District / City
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <Select
                        className={"input-align"}
                        id={"municipalpanchayatunion"}
                        name={"state"}
                        placeholder={"Select City Name"}
                        options={select}
                      />
                    </CCol>
                    <CCol className={"column-align"} md="3">
                      <CLabel className={"label-name"}>
                        Panchayat Union
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <Select
                        className={"input-align"}
                        id={"municipalvillagepanchayat"}
                        name={"city"}
                        placeholder={"Select Panchayat Union"}
                        options={select}
                      />
                    </CCol>
                    <CCol className={"column-align"} md="3">
                      <CLabel className={"label-name"}>
                        Ward No
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      -{" "}
                      <Select
                        className={"input-align"}
                        id={"municipalwardno"}
                        name={"city"}
                        placeholder={"Select Ward No"}
                        options={selectWard}
                      />
                    </CCol>
                  </CRow>
                </div>

                <CRow
                  style={{
                    padding: "4%",
                    marginTop: "-2.5%",
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
                      show_details1: (item, index) => {
                        return (
                          <td className="py-1">
                            <CRow>
                              <CCol style={{ fontSize: "1.15rem" }} md="16">
                                <Dropdown
                                  className={"ant-dropdown-cutomize-by-me"}
                                  overlay={() => menus(item)}
                                >
                                  <a
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
          </CCard>
        </div>
      )}

      {hideVillagePanchayat && (
        <div>
          <CCard className={"cardSave"}>
            <div className={"main-headerlabel"}>
              <span className={"header-label"}>Adding Village Panchayat</span>
            </div>
            {locationHide.corporation && (
              <div>
                <div style={{ marginLeft: "-26px" }}>
                  <CRow
                    className={"row-alignment"}
                    md="12"
                    sm="12"
                    lg="12"
                    style={{ marginLeft: "-5px" }}
                  >
                    <CCol className={"column-align"} md="4">
                      <CLabel className={"label-name"}>
                        State
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <Select
                        className={"input-align"}
                        id={"municipalstatename"}
                        name={"state"}
                        placeholder={"Select State"}
                        options={select}
                      />
                    </CCol>
                    {municipalList && (
                      <React.Fragment>
                        <CCol className={"column-align"} md={4} lg={4}>
                          <CLabel className={"label-name-1"}>
                            District Panchayat
                            <span className={"text-danger"}> *</span>
                          </CLabel>

                          <Select
                            //  isMulti
                            //  isChecked
                            //  closeMenuOnSelect={false}
                            placeholder="Select District Panchayat"
                            id={"municipalcorporation"}
                            type={"text"}
                            value={selected}
                            onChange={(e) => setSelected(e)}
                            components={{ MenuList: SelectMenuButton }}
                            options={select}
                            // labelledBy={"Select"}
                          />

                          {/* <p data-tip="hello world">Tooltip</p> */}
                          {selected.length !== 0 ? (
                            <div
                              style={{
                                width: 300,
                                marginLeft: "426px",
                                marginTop: "-35px",
                                padding: 10,
                              }}
                              onMouseEnter={(e) => {
                                setStyle({ display: "block" });
                              }}
                              onMouseLeave={(e) => {
                                setStyle({ display: "none" });
                              }}
                            >
                              <i
                                className={"editIcon"}
                                style={style}
                                id={"officeLocationEdit"}
                                class="fas fa-edit"
                              />
                              <div
                                style={{
                                  width: 300,
                                  marginLeft: "26px",
                                  marginTop: "-25px",
                                  padding: 10,
                                  color: "red",
                                }}
                              >
                                <i
                                  className={"editIcon"}
                                  style={style}
                                  id={"officeLocationEdit"}
                                  class="fas fa-trash"
                                />
                              </div>
                            </div>
                          ) : null}
                        </CCol>

                        {/* <CCol className={"column-align"} md={1} lg={1}>
                          <CButton
                            shape={"pill"}
                            id={"addmunicipalcorporation"}
                            style={{ marginTop: "30px" }}
                            className={"saveBtn"}
                            onClick={enableCreate}
                          >
                            ADD
                          </CButton>
                        </CCol> */}
                        {/* <CCol md={1} lg={1}>
                <CButton
                  style={{
                    marginLeft: "0px",
                    marginTop:"51px",
                    backgroundColor: "#3273e9",
                    borderLine: "5px !important",
                    borderColor: "white",
                    fontSize: "1.25rem",
                    color: "#ffff",
                  }}
                  onClick={enableCreate}
                  class={"fa fa-plus"}
                
                ></CButton>
              </CCol>
              <CCol md={1} lg={1}>
                <i
                  style={{
                    marginLeft: "-77px",
                    marginTop: "53px",

                    fontSize: "1.45rem",
                    color: "#3cd3ad",
                  }}
                  class={"fa fa-eye"}
                 
                ></i>
              </CCol>
                        <CCol md={1} lg={1} style={{marginTop:"50px",marginLeft:"-163px"}}>
                    <ReactFileReader handleFiles={handleFiles} fileTypes={'.CSV'}>
                    <i className="fa fa-upload" style={{fontSize:"1.45rem"}} />
                    <CSVLink data={state} ><i className="fa fa-download" style={{fontSize:"1.45rem",marginLeft:"25px",color:"#ea384d"}}/></CSVLink>
                    </ReactFileReader>
                    
                    </CCol> */}

                        {municipalName.edit === true ? (
                          <React.Fragment>
                            <CCol md={3} lg={3}>
                              <CButton
                                style={{
                                  marginTop: "30px",
                                }}
                                id={"locationLibraryStateEdit"}
                                className={"btn btn-success"}
                                onClick={editState}
                              >
                                EDIT
                              </CButton>
                            </CCol>
                          </React.Fragment>
                        ) : null}
                      </React.Fragment>
                    )}
                    {MunicipalCreate && (
                      <React.Fragment>
                        <CRow
                          className={"row-alignment"}
                          style={{ marginLeft: "45px", marginTop: "20px" }}
                          sm={12}
                          md={12}
                          lg={12}
                        >
                          <CCol md="3">
                            <CLabel className={"label-name-1"}>
                              District panchayat
                              <span className={"text-danger"}> *</span>
                            </CLabel>

                            <CInput
                              id={"MunicipalName"}
                              name={"municipalname"}
                              placeholder="Enter District Panchayat Name"
                              maxlength="60"
                              size="60"
                            />
                          </CCol>

                          <CCol md="3">
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
                            />
                          </CCol>
                          <CCol md="3">
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
                            />
                          </CCol>
                          <CCol md="3">
                            <CButton
                              shape={"pill"}
                              id={"municipalsave"}
                              style={{ marginTop: "30px" }}
                              className={"saveBtn"}
                            >
                              {passing !== "" ? "UPDATE" : "SAVE"}
                            </CButton>
                            <CButton
                              shape={"pill"}
                              id={"municipalcancel"}
                              style={{ marginTop: "30px", marginLeft: "20px" }}
                              className={"cancelBtn"}
                              onClick={CancelState}
                            >
                              CANCEL
                            </CButton>
                            {error !== "" ? <p>{error}</p> : null}
                          </CCol>
                        </CRow>
                      </React.Fragment>
                    )}
                  </CRow>
                  <CRow
                    className={"row-alignment"}
                    md="12"
                    sm="12"
                    lg="12"
                    style={{ marginLeft: "-5px" }}
                  >
                    <CCol className={"column-align"} md="4">
                      <CLabel className={"label-name"}>
                        District / City
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <Select
                        className={"input-align"}
                        id={"municipaldistrict"}
                        name={"city"}
                        placeholder={"Select City Name"}
                        options={select}
                      />
                    </CCol>
                    {panchayatList && (
                      <React.Fragment>
                        <CCol className={"column-align"} md={4} lg={4}>
                          <CLabel className={"label-name-1"}>
                            Panchayat Union
                            <span className={"text-danger"}> *</span>
                          </CLabel>
                          <Select
                            placeholder="Select Panchayat Union"
                            id={"municipalcorporation"}
                            type={"text"}
                            options={select}
                          />
                        </CCol>
                        {/* <CCol className={"column-align"} md={1} lg={1}>
                          <CButton
                            shape={"pill"}
                            id={"addmunicipalcorporation"}
                            style={{ marginTop: "30px" }}
                            className={"saveBtn"}
                            onClick={addPanchayat}
                          >
                            ADD
                          </CButton>
                        </CCol> */}

                        {municipalName.edit === true ? (
                          <React.Fragment>
                            <CCol md={3} lg={3}>
                              <CButton
                                style={{
                                  marginTop: "30px",
                                }}
                                id={"locationLibraryStateEdit"}
                                className={"btn btn-success"}
                                onClick={editState}
                              >
                                EDIT
                              </CButton>
                            </CCol>
                          </React.Fragment>
                        ) : null}
                      </React.Fragment>
                    )}
                    {panchayatCreate && (
                      <React.Fragment>
                        <CRow
                          className={"row-alignment"}
                          style={{ marginLeft: "45px", marginTop: "20px" }}
                          sm={12}
                          md={12}
                          lg={12}
                        >
                          <CCol md="3">
                            <CLabel className={"label-name-1"}>
                              Panchayat Union
                              <span className={"text-danger"}> *</span>
                            </CLabel>

                            <CInput
                              id={"MunicipalName"}
                              name={"municipalname"}
                              placeholder="Enter panchayat Union Name"
                              maxlength="60"
                              size="60"
                            />
                          </CCol>

                          <CCol md="3">
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
                            />
                          </CCol>
                          <CCol md="3">
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
                            />
                          </CCol>
                          <CCol md="3">
                            <CButton
                              shape={"pill"}
                              id={"municipalsave"}
                              style={{ marginTop: "30px" }}
                              className={"saveBtn"}
                            >
                              {passing !== "" ? "UPDATE" : "SAVE"}
                            </CButton>
                            <CButton
                              shape={"pill"}
                              id={"municipalcancel"}
                              style={{ marginTop: "30px", marginLeft: "20px" }}
                              className={"cancelBtn"}
                              onClick={cancelPanchayat}
                            >
                              CANCEL
                            </CButton>
                            {error !== "" ? <p>{error}</p> : null}
                          </CCol>
                        </CRow>
                      </React.Fragment>
                    )}
                  </CRow>
                  <CRow
                    className={"row-alignment"}
                    md="12"
                    sm="12"
                    lg="12"
                    style={{ marginLeft: "-5px" }}
                  >
                    <CCol className={"column-align"} md="4"></CCol>
                    {villageList && (
                      <React.Fragment>
                        <CCol className={"column-align"} md={4} lg={4}>
                          <CLabel className={"label-name-1"}>
                            Village Panchayat
                            <span className={"text-danger"}> *</span>
                          </CLabel>
                          <Select
                            placeholder="Select Village Panchayat"
                            id={"municipalcorporation"}
                            type={"text"}
                            options={select}
                          />
                        </CCol>
                        {/* <CCol className={"column-align"} md={1} lg={1}>
                          <CButton
                            shape={"pill"}
                            id={"addmunicipalcorporation"}
                            style={{ marginTop: "30px" }}
                            className={"saveBtn"}
                            onClick={addVillage}
                          >
                            ADD
                          </CButton>
                        </CCol> */}

                        {municipalName.edit === true ? (
                          <React.Fragment>
                            <CCol md={3} lg={3}>
                              <CButton
                                style={{
                                  marginTop: "30px",
                                }}
                                id={"locationLibraryStateEdit"}
                                className={"btn btn-success"}
                                onClick={editState}
                              >
                                EDIT
                              </CButton>
                            </CCol>
                          </React.Fragment>
                        ) : null}
                      </React.Fragment>
                    )}
                    {villageCreate && (
                      <React.Fragment>
                        <CRow
                          className={"row-alignment"}
                          style={{ marginLeft: "45px", marginTop: "20px" }}
                          sm={12}
                          md={12}
                          lg={12}
                        >
                          <CCol md="3">
                            <CLabel className={"label-name-1"}>
                              Village Panchayat
                              <span className={"text-danger"}> *</span>
                            </CLabel>

                            <CInput
                              id={"MunicipalName"}
                              name={"municipalname"}
                              placeholder="Enter Village Panchayat Name"
                              maxlength="60"
                              size="60"
                            />
                          </CCol>

                          <CCol md="3">
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
                            />
                          </CCol>
                          <CCol md="3">
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
                            />
                          </CCol>
                          <CCol md="3">
                            <CButton
                              shape={"pill"}
                              id={"municipalsave"}
                              style={{ marginTop: "30px" }}
                              className={"saveBtn"}
                            >
                              {passing !== "" ? "UPDATE" : "SAVE"}
                            </CButton>
                            <CButton
                              shape={"pill"}
                              id={"municipalcancel"}
                              style={{ marginTop: "30px", marginLeft: "20px" }}
                              className={"cancelBtn"}
                              onClick={cancelVillage}
                            >
                              CANCEL
                            </CButton>
                            {error !== "" ? <p>{error}</p> : null}
                          </CCol>
                        </CRow>
                      </React.Fragment>
                    )}
                  </CRow>

                  <CRow
                    className={"row-alignment"}
                    md="12"
                    sm="12"
                    lg="12"
                    style={{ marginLeft: "-5px" }}
                  >
                    <CCol className={"column-align"} md="4"></CCol>
                    {wardList && (
                      <React.Fragment>
                        <CCol className={"column-align"} md={4} lg={4}>
                          <CLabel className={"label-name-1"}>
                            Ward Number
                            <span className={"text-danger"}> *</span>
                          </CLabel>
                          <Select
                            placeholder="Select the Ward Number"
                            id={"municipalcorporation"}
                            type={"text"}
                            components={{ MenuList: SelectMenuButton }}
                            options={selectWard}
                          />
                        </CCol>
                        {/* <CCol className={"column-align"} md={1} lg={1}>
                          <CButton
                            shape={"pill"}
                            id={"addmunicipalcorporation"}
                            style={{ marginTop: "30px" }}
                            className={"saveBtn"}
                            onClick={addWard}
                          >
                            ADD
                          </CButton>
                        </CCol> */}

                        {municipalName.edit === true ? (
                          <React.Fragment>
                            <CCol md={3} lg={3}>
                              <CButton
                                style={{
                                  marginTop: "30px",
                                }}
                                id={"locationLibraryStateEdit"}
                                className={"btn btn-success"}
                                onClick={editState}
                              >
                                EDIT
                              </CButton>
                            </CCol>
                          </React.Fragment>
                        ) : null}
                      </React.Fragment>
                    )}
                    {wardCreate && (
                      <React.Fragment>
                        <CRow
                          className={"row-alignment"}
                          style={{ marginLeft: "45px", marginTop: "20px" }}
                          sm={12}
                          md={12}
                          lg={12}
                        >
                          <CCol md="3">
                            <CLabel className={"label-name-1"}>
                              Ward Number
                              <span className={"text-danger"}> *</span>
                            </CLabel>

                            <CInput
                              id={"wardname"}
                              name={"municipalname"}
                              placeholder="Enter Ward Number"
                              maxlength="60"
                              size="60"
                            />
                          </CCol>

                          <CCol md="3">
                            <CLabel className={"label-name-1"}>
                              Abbreviation
                              <span className={"text-danger"}> *</span>
                            </CLabel>
                            <CInput
                              id={"wardabbreviation"}
                              name={"abbreviation"}
                              placeholder="Enter Abbreviation"
                              maxlength="5"
                              size="5"
                            />
                          </CCol>
                          <CCol md="3">
                            <CLabel className={"label-name-1"}>
                              Code
                              <span className={"text-danger"}> *</span>
                            </CLabel>
                            <CInput
                              id={"wardcode"}
                              name={"wardcode"}
                              placeholder="Enter Code"
                              maxlength="5"
                              size="5"
                            />
                          </CCol>
                          <CCol md="3">
                            <CButton
                              shape={"pill"}
                              id={"wardsave"}
                              style={{ marginTop: "30px" }}
                              className={"saveBtn"}
                            >
                              {passing !== "" ? "UPDATE" : "SAVE"}
                            </CButton>
                            <CButton
                              shape={"pill"}
                              id={"wardcancel"}
                              style={{ marginTop: "30px", marginLeft: "20px" }}
                              className={"cancelBtn"}
                              onClick={cancelWard}
                            >
                              CANCEL
                            </CButton>
                            {error !== "" ? <p>{error}</p> : null}
                          </CCol>
                        </CRow>
                      </React.Fragment>
                    )}
                  </CRow>
                  <CCol>
                    <CLabel
                      style={{
                        fontSize: "20PX",
                        fontFamily: "Open Sans",
                        fontWeight: "700",
                        marginLeft: "55px",
                        marginTop: "20px",
                      }}
                    >
                      Select Street
                    </CLabel>
                  </CCol>
                  <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                    <CCol className={"column-align"} md="4">
                      <CLabel className={"label-name"}>
                        Area
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <Select
                        className={"input-align"}
                        id={"municipalarea"}
                        name={"area"}
                        placeholder={"Select Area Name"}
                        options={select}
                      />
                    </CCol>
                  </CRow>
                </div>
                <CRow style={{ marginTop: "30px", marginLeft: "650px" }}>
                  <CCol md="10">
                    <CCol
                      md="5"
                      style={{
                        position: "absolute",
                        marginLeft: "-190px",
                        float: "right",
                        marginTop: "-65px",
                      }}
                    >
                      <CButton
                        style={{
                          float: "right",
                        }}
                        id={"cancelAbbreviationConfigureCode"}
                        className={"cancelBtn"}
                        onClick={cancelchange}
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
                        onClick={saveCorporation}
                      >
                        Save
                      </CButton>{" "}
                    </CCol>
                  </CCol>
                </CRow>

                <CRow style={{ padding: "4%" }}>
                  <CDataTable
                    items={userData}
                    fields={fields1}
                    columnFilter
                    tableFilter
                    tableLabel={"List of Streets"}
                    itemsPerPageSelect
                    itemsPerPage={5}
                    selectAll={true}
                    checkedAll={userData.length === selected.length}
                    onSelectAll={(val) => {
                      console.log(val, userData);
                      if (userData.length === selected.length) {
                        setSelected([]);
                      } else {
                        let ids = [];
                        val.map((x) => {
                          ids.push(`${x._id}`);
                        });
                        setSelected(ids);
                      }
                    }}
                    hover
                    sorter
                    pagination
                    scopedSlots={{
                      show_details: (item, index) => {
                        return (
                          <td className="py-2">
                            <CRow>
                              <CInput
                                type={"checkbox"}
                                style={{
                                  width: "15px",
                                  height: "15px",
                                  marginLeft: "30px",
                                  marginBottom: "10px",
                                }}
                                onClick={() => {
                                  if (selected.includes(`${item._id}`)) {
                                    let values = selected.filter((x) => {
                                      return `${x}` !== `${item._id}`;
                                    });
                                    setSelected(values);
                                  } else {
                                    setSelected([...selected, `${item._id}`]);
                                  }
                                }}
                                checked={selected.includes(`${item._id}`)}
                              />
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
              </div>
            )}
          </CCard>
        </div>
      )}
    </div>
  );
};

export default VillagePanchayat;
