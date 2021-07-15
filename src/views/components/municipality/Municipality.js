import {
  CButton,
  CCard,
  CCol,
  CInput,
  CLabel,
  CRow,
  CLink,
} from "@coreui/react";
import { roleDelete } from "../../../services/ApiService";
import { toast } from "react-toastify";
import ConfirmDelete from "../confirmMessage/confirmDelete";
import React, { useState } from "react";
import CDataTable from "../../CoreComponents/table/CDataTable";
import { saveCreateCorporation } from "../../../services/ApiService";
import "./Municipality.css";
import { Dropdown, Menu } from "antd";
import "antd/dist/antd.css";
import Select, { components } from "react-select";
import { CSVLink } from "react-csv";
import * as XLSX from "xlsx";
import SheetJSFT from "../../../Tools/excelupload/SheetJSFT";
import { make_cols } from "../../../Tools/excelupload/MakeColumn";

const Municipality = () => {
  const [excelupload, setExcelUpload] = React.useState({
    file: {},
    data: [],
    cols: [],
  });
  const [locations] = useState({
    state: "",
    district: "",
    city: "",
    ward: "",
    area: "",
    street: "",
    pincode: "",
  });
  const [selected1, setSelected1] = useState([]);
  const [selected, setSelected] = useState([]);
  const [collected, setCollected] = useState([]);
  const [villageHide, setVillageHide] = useState({
    districtpanchayat: true,
    panchayatunion: false,
  });
  const [municipalList, setMunicipalList] = useState(true);
  const [, setmunicipalCreate] = useState(false);
  const [municipalListadd, setMunicipalListadd] = useState(true);
  const [, setmunicipalCreateadd] = useState(false);
  const [,] = useState({});
  const [municipalName] = useState("");

  const [locationHide, setLocationHide] = useState({
    corporation: true,
    municipalLocation: false,
    districtPanchayat: false,
    townPanchayat: false,
    villagePanchayat: false,
    cityLocation: false,
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

  const csvData = [["SNo", "Name"]];
  const csvDatasub = [["SNo", "Ward"]];

  const userData = [
    {
      SNo: "1",
      Street: "Kamarajar Street",
      Ward: "0098",
      EnteredBy: "sathishKumar",
      EnteredOn: "11/06/2021",
    },
    {
      SNo: "2",
      Street: " Stpachayapas College sreet",
      Ward: "0099",
      EnteredBy: "sathishKumar",
      EnteredOn: "11/06/2021",
    },
  ];
  const userData1 = [
    {
      SNo: "1",
      Street: "Rangaswamykulam Street",
    },
    {
      SNo: "2",
      Street: "Kamarajar Street",
    },
    {
      SNo: "3",
      Street: " Stpachayapas College sreet",
    },
  ];
  const fields3 = [
    {
      key: "show_details1",
      label: "Select",
      _style: { width: "3%" },
      sorter: false,
      filter: false,
    },
    {
      key: "SNo",
      label: "S.NO",
      _style: { width: "5%" },
      sorter: false,
      filter: false,
    },

    { key: "Street", label: "Door No / Street Name", _style: { width: "10%" } },
  ];
  const fields = [
    {
      key: "SNo",
      label: "S.NO",
      _style: { width: "5%" },
      sorter: false,
      filter: false,
    },

    { key: "Street", label: "Door No / Street Name", _style: { width: "10%" } },
    { key: "Ward", label: "Ward Name", _style: { width: "10%" } },
    { key: "EnteredBy", label: "Entered By", _style: { width: "10%" } },
    { key: "EnteredOn", label: "Entered On", _style: { width: "10%" } },

    {
      key: "show_details",
      label: "Action",
      _style: { width: "10%" },
      sorter: false,
      filter: false,
    },
  ];
  const fields2 = [
    {
      key: "SNo",
      label: "S.NO",
      _style: { width: "5%" },
      sorter: false,
      filter: false,
    },
    { key: "Ward", label: "Ward Number", _style: { width: "10%" } },
    {
      key: "show_details1",
      label: "Action",
      _style: { width: "10%" },
      sorter: false,
      filter: false,
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
    { key: "Name", label: "Municipality", _style: { width: "10%" } },
    {
      key: "show_details1",
      label: "Action",
      _style: { width: "10%" },
      sorter: false,
      filter: false,
    },
  ];

  const [passing] = useState("");
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

  const editStateadd = async () => {
    await setMunicipalListadd(false);
    await setmunicipalCreateadd(true);
  };

  const [hideMappingMunicipality, setHideMappingMunicipality] = useState(true);
  const [hideMunicipality, setMunicipality] = useState(false);
  const changeMunicipality = () => {
    setHideMappingMunicipality(false);
    setMunicipality(true);
  };
  const cancelmunici = () => {
    setHideMappingMunicipality(true);
    setMunicipality(false);
  };

  const selectState = [{ value: "TamilNadu", label: "TamilNadu" }];
  const selectDistrict = [{ value: "Kacnhipuram", label: "Kacnhipuram" }];
  const selectMunicipalcorporation = [
    {
      span: (
        <CLink className={"saveBtn"} style={{ marginLeft: "200px" }}>
          Add{" "}
        </CLink>
      ),
    },
    { value: "Wallajabhad", label: "Wallajabhad" },
    { value: "NazharathPet", label: "NazharathPet" },
  ];
  const selectArea = [
    { value: "Kavanthandalam", label: "Kavanthandalam" },
    { value: "Thammanur ", label: "Thammanur " },
  ];
  const selectWard = [
    {
      span: (
        <CLink className={"saveBtn"} style={{ marginLeft: "200px" }}>
          Add{" "}
        </CLink>
      ),
    },
    { value: "0097", label: "0097" },
    { value: "0098", label: "0098" },
  ];

  const SelectMenuButtonmunici = (props) => {
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
            onClick={handleClickmunici}
            style={{ marginLeft: "250px" }}
          >
            Add{" "}
          </CLink>
          <CLink
            className={"saveBtn"}
            onClick={bulkhandleClickmunici}
            style={{ marginLeft: "10px" }}
          >
            Bulk Upload{" "}
          </CLink>
        </div>
      </components.MenuList>
    );
  };
  const SelectMenuButtonward = (props) => {
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
            onClick={handleClickward}
            style={{ marginLeft: "250px" }}
          >
            Add{" "}
          </CLink>
          <CLink
            className={"saveBtn"}
            onClick={bulkhandleClickward}
            style={{ marginLeft: "10px" }}
          >
            Bulk Upload{" "}
          </CLink>
        </div>
      </components.MenuList>
    );
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

  const handleAddClick = (e) => {
    e.preventDefault();
    setInputList([...inputList, { name: "", abbreviation: "", code: "" }]);
  };
  const [inputList, setInputList] = useState([
    { name: "", abbreviation: "", code: "" },
  ]);

  const [menu, setMenu] = useState({
    // style: "menu2",
    menuStatus: "open",
    // style3: "menu2",
  });
  const [sideBar1e, setSideBar1e] = useState(false);
  const [sideBar2e, setSideBar2e] = useState(false);
  const [sideBar1, setSideBar1] = useState(false);
  const [sideBar2, setSideBar2] = useState(false);
  const editClickmunici = () => {
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
        setSideBar2e(false);
        setSideBarup1(false);
        setSideBarup2(false);
        setSideBar1(false);
        setSideBar2(false);
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
        setInputList([{ name: "", abbreviation: "", code: "" },]);
        break;
    }
  };
  const editClickward = () => {
    switch (menu.menuStatus) {
      case "open":
      default:
        setMenu({
          menuStatus: "close",
          // style3: "menu2",
          style: "menu active1",
        });

        setTimeout(() => {
          setSideBar2e(true);
        }, 1000);
        setSideBar1e(false);
        setSideBar1(false);
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
          setSideBar2e(false);
        }, 1000);
        setInputList([{ name: "", abbreviation: "", code: "" },]);
        break;
    }
  };
  const handleClickmunici = () => {
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
        setSideBar1e(false);
        setSideBar2e(false);
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
        setInputList([{ name: "", abbreviation: "", code: "" },]);
        break;
    }
  };
  const handleClickward = () => {
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
        setSideBar1e(false);
        setSideBar2e(false);
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
        setInputList([{ name: "", abbreviation: "", code: "" },]);
        break;
    }
  };
  const [, setSideBarup] = useState(false);
  const [sideBarup1, setSideBarup1] = useState(false);
  const [sideBarup2, setSideBarup2] = useState(false);
  const bulkhandleClickmunici = () => {
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
        setSideBar1e(false);
        setSideBar2e(false);
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
  const bulkhandleClickward = () => {
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
        setSideBar1e(false);
        setSideBar2e(false);
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
        setIsValue(false);
        break;
    }
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
  const deletemodal = (id) => {
    setDeleteId({ id: id, show: true });
  };
  const cancelConfirmDlete = () => {
    setDeleteId({ id: "", show: false });
  };
  const [deleteId, setDeleteId] = useState({ id: "", show: false });
  const deleteRole = async () => {
    try {
      const response = await roleDelete(deleteId.id);
      if (response) {
        if (response.success) {
          cancelConfirmDlete();
          let array = RoleList;
          let data = array.filter((x) => {
            return x._id !== deleteId.id;
          });
          setRoleList(data);
        } else {
          toast.error(response.error);
        }
      }
    } catch (e) {
      toast.error(e, { autoClose: 2000 });
      cancelConfirmDlete();
    }
  };
  const [RoleList, setRoleList] = useState([]);

  return (
    <React.Fragment>
      <ConfirmDelete
        details={deleteId}
        confirm={deleteRole}
        cancel={cancelConfirmDlete}
      />
      <div className={menu.style3}>
        {sideBar1 && (
          <div className={menu.style} style={{ marginLeft: "-108px",overflow:"auto" }}>
            <div style={{ marginLeft: "-60px" }}>
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
                      Add Municipality{" "}
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
                        Municipality
                        <span className={"text-danger"}> *</span>
                      </CLabel>

                      <CInput
                        id={"MunicipalName"}
                        name={"municipalname"}
                        placeholder="Enter Municipality Name"
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
                    id={"municipalcancel"}
                    style={{ marginTop: "-59px", marginLeft: "90px" }}
                    className={"cancelBtn"}
                    onClick={handleClickmunici}
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
                  handleClickmunici();
                  // handleClickward();
                }}
              >
                Back
              </CButton>
            </div>
          </div>
        )}
        
          {sideBar1e && (
            <div className={menu.style} style={{ marginLeft: "-108px",overflow:"auto" }}>
              <div style={{ marginLeft: "-60px" }}>
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
                        Edit Municipality{" "}
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
                          Municipality
                          <span className={"text-danger"}> *</span>
                        </CLabel>

                        <CInput
                          id={"MunicipalName"}
                          name={"municipalname"}
                          placeholder="Enter Municipality Name"
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
                      Update
                    </CButton>
                    <CButton
                      shape={"pill"}
                      id={"municipalcancel"}
                      style={{ marginTop: "-59px", marginLeft: "90px" }}
                      className={"cancelBtn"}
                      onClick={handleClickmunici}
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
                    handleClickmunici();
                    // handleClickward();
                  }}
                >
                  Back
                </CButton>
              </div>
            </div>
          )}         
            {sideBar2 && (
              <div className={menu.style} style={{ marginLeft: "-108px",overflow:"auto" }}>
                <div style={{ marginLeft: "-60px" }}>
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
                          Add Ward Number{" "}
                        </span>
                      </div>
                    </CCol>
                  </CRow>
                  <CRow
                    className={"LengthDataw"}
                    style={{ marginLeft: "5px", marginTop: "20px" }}
                    sm={12}
                    md={12}
                    lg={12}
                  >
                    <CCol md="6">
                      <CLabel
                        className={"form-labels-9 col-md-5 reAssign-Label"}
                      >
                        Municipality :{" "}
                      </CLabel>

                      <CLabel className={"reAssign-Detail"}>
                        {selected.assignedTo
                          ? selected.assignedTo.firstName
                          : "Wallajabhad"}
                      </CLabel>
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
                            Ward Number
                            <span className={"text-danger"}> *</span>
                          </CLabel>

                          <CInput
                            id={"wardName"}
                            name={"municipalname"}
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
                            id={"wardabrreviation"}
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
                            id={"wardcode"}
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
                        id={"wardcancel"}
                        style={{ marginTop: "-59px", marginLeft: "90px" }}
                        className={"cancelBtn"}
                        onClick={handleClickward}
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
                      handleClickward();
                      // handleClickward();
                    }}
                  >
                    Back
                  </CButton>
                </div>
              </div>
            )}
           
              {sideBar2e && (
                <div className={menu.style} style={{ marginLeft: "-108px" ,overflow:"auto"}}>
                  <div style={{ marginLeft: "-60px" }}>
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
                            Adding Ward Number{" "}
                          </span>
                        </div>
                      </CCol>
                    </CRow>
                    <CRow
                      className={"LengthDataw"}
                      style={{ marginLeft: "5px", marginTop: "20px" }}
                      sm={12}
                      md={12}
                      lg={12}
                    >
                      <CCol md="6">
                        <CLabel
                          className={"form-labels-9 col-md-5 reAssign-Label"}
                        >
                          Municipality :{" "}
                        </CLabel>

                        <CLabel className={"reAssign-Detail"}>
                          {selected.assignedTo
                            ? selected.assignedTo.firstName
                            : "Wallajabhad"}
                        </CLabel>
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
                              Ward Number
                              <span className={"text-danger"}> *</span>
                            </CLabel>

                            <CInput
                              id={"wardName"}
                              name={"municipalname"}
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
                              id={"wardabrreviation"}
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
                              id={"wardcode"}
                              name={"code"}
                              placeholder="Enter Code"
                              maxlength="5"
                              size="5"
                              value={x.panchayatcode}
                              onChange={(e) => handleInputChange(e, i)}
                            />
                          </CCol>

                       
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
                          Update
                        </CButton>
                        <CButton
                          shape={"pill"}
                          id={"wardcancel"}
                          style={{ marginTop: "-59px", marginLeft: "90px" }}
                          className={"cancelBtn"}
                          onClick={handleClickward}
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
                        handleClickward();
                        // handleClickward();
                      }}
                    >
                      Back
                    </CButton>
                  </div>
                </div>
              )}
              {sideBarup1 && (
                <div
                  className={menu.style1}
                  style={{ marginLeft: "-108px", overflow: "auto" }}
                >
                  <div style={{ marginLeft: "-60px" }}>
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
                            Add Municipality{" "}
                          </span>
                        </div>
                      </CCol>
                    </CRow>

                    <CRow
                      md="12"
                      style={{ marginLeft: "10px", marginTop: "15px" }}
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
                        style={{ marginLeft: "150px", marginTop: "-38px" }}
                      >
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
                            top: "-105px",
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
                            fields={fields1}
                            columnFilter
                            tableFilter
                            tableLabel={"List of Municipality"}
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
                                      <CCol
                                        style={{ fontSize: "1.15rem" }}
                                        md="12"
                                      >
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
                              id={"municipalcancel"}
                              style={{
                                marginTop: "-60px",
                                marginLeft: "550px",
                              }}
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
                </div>
              )}
              {sideBarup2 && (
                <div
                  className={menu.style1}
                  style={{ marginLeft: "-108px", overflow: "auto" }}
                >
                  <div style={{ marginLeft: "-60px" }}>
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
                            Add Ward Number{" "}
                          </span>
                        </div>
                      </CCol>
                    </CRow>
                    <CRow
                      className={"LengthDataw"}
                      style={{ marginLeft: "5px", marginTop: "20px" }}
                      sm={12}
                      md={12}
                      lg={12}
                    >
                      <CCol md="6">
                        <CLabel
                          className={"form-labels-9 col-md-5 reAssign-Label"}
                        >
                          Municipality :{" "}
                        </CLabel>

                        <CLabel className={"reAssign-Detail"}>
                          {selected.assignedTo
                            ? selected.assignedTo.firstName
                            : "Wallajabhad"}
                        </CLabel>
                      </CCol>
                    </CRow>

                    <CRow
                      md="12"
                      style={{ marginLeft: "10px", marginTop: "15px" }}
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
                        style={{ marginLeft: "150px", marginTop: "-38px" }}
                      >
                        <CSVLink data={csvDatasub}>
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
                            marginLeft: "710px",
                            top: "-160px",
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
                            marginTop: "-1.5%",
                            marginLeft: "-45px",
                          }}
                        >
                          <CDataTable
                            items={excelupload.data}
                            fields={fields2}
                            columnFilter
                            tableFilter
                            tableLabel={"List of Ward Number"}
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
                                      <CCol
                                        style={{ fontSize: "1rem" }}
                                        md="16"
                                      >
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
                              id={"wardcancel"}
                              style={{
                                marginTop: "-60px",
                                marginLeft: "550px",
                              }}
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
                </div>
              )}
              <div>
                {hideMappingMunicipality && (
                  <div>
                    <CCard className={"cardSave"}>
                      <div className={"main-headerlabel"}>
                        <span className={"header-label"}>Municipality</span>
                      </div>
                      {locationHide.corporation && (
                        <div>
                          <div style={{ marginLeft: "-26px" }}>
                            <CRow style={{ marginTop: "45px" }}>
                              <CCol>
                                <CCol md="5">
                                  <CButton
                                    style={{
                                      marginLeft: "35px",
                                    }}
                                    id={"wardsaveAbbreviationConfigureCode"}
                                    className={"saveBtn"}
                                    onClick={changeMunicipality}
                                  >
                                    Add Municipality
                                  </CButton>{" "}
                                </CCol>
                              </CCol>
                            </CRow>
                            <CRow
                              className={"row-alignment"}
                              md="12"
                              sm="12"
                              lg="12"
                            >
                              <CCol className={"column-align"} md="3">
                                <CLabel className={"label-name-1"}>
                                  State
                                  <span className={"text-danger"}>*</span>
                                </CLabel>
                                <Select
                                  id={"municipalstatename"}
                                  name={"state"}
                                  placeholder={"Select State"}
                                  options={selectState}
                                />
                              </CCol>
                              <CCol className={"column-align"} md="3">
                                <CLabel className={"label-name-1"}>
                                  District / City
                                  <span className={"text-danger"}>*</span>
                                </CLabel>
                                <Select
                                  id={"municipaldistrict"}
                                  name={"city"}
                                  placeholder={" Corporation Name"}
                                  options={selectDistrict}
                                />
                              </CCol>

                              <CCol className={"column-align"} md="3">
                                <CLabel className={"label-name-1"}>
                                  Municipality
                                  <span className={"text-danger"}>*</span>
                                </CLabel>
                                <Select
                                  id={"municipaldistrict"}
                                  name={"Municipality"}
                                  placeholder={" Select Municipality"}
                                  options={selectMunicipalcorporation}
                                />
                              </CCol>
                            </CRow>

                            <CRow
                              className={"row-alignment"}
                              md="12"
                              sm="12"
                              lg="12"
                            >
                              <CCol className={"column-align"} md="3">
                                <CLabel className={"label-name-1"}>
                                  Area
                                  <span className={"text-danger"}>*</span>
                                </CLabel>
                                <Select
                                  id={"municipaldistrict"}
                                  name={"Area"}
                                  placeholder={"Select Area"}
                                  options={selectArea}
                                />
                              </CCol>
                              <CCol className={"column-align"} md="3">
                                <CLabel className={"label-name-1"}>
                                  Ward
                                  <span className={"text-danger"}>*</span>
                                </CLabel>
                                <Select
                                  id={"municipalstatename"}
                                  name={"Ward"}
                                  placeholder={"Select Ward"}
                                  options={selectWard}
                                />
                              </CCol>
                            </CRow>
                          </div>

                          <CRow
                            style={{
                              padding: "4%",
                              marginTop: "-2.5%",
                              marginLeft: "-40px",
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
                              checked
                              pagination
                              scopedSlots={{
                                show_details: (item, index) => {
                                  return (
                                    <td className="py-1">
                                      <CRow>
                                        <CCol
                                          style={{ fontSize: "1.15rem" }}
                                          md="16"
                                        >
                                          <Dropdown
                                            className={
                                              "ant-dropdown-cutomize-by-me"
                                            }
                                            overlay={() => menus(item)}
                                          >
                                            <a
                                              href
                                              className="ant-dropdown-link"
                                              onClick={(e) =>
                                                e.preventDefault()
                                              }
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
                                show_details1: (item, index) => {
                                  return (
                                    <td className="py-2">
                                      <CRow>
                                        <CCol
                                          style={{ fontSize: "1.15rem" }}
                                          md="12"
                                        >
                                          <CInput
                                            type="checkbox"
                                            style={{ width: "20px" }}
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
                        </div>
                      )}
                    </CCard>
                  </div>
                )}

                {hideMunicipality && (
                  <div>
                    <CCard className={"cardSave"}>
                      <div className={"main-headerlabel"}>
                        <span className={"header-label"}>
                          {" "}
                          Adding Municipality
                        </span>
                      </div>
                      {locationHide.corporation && (
                        <div>
                          <div style={{ marginLeft: "-26px" }}>
                            <CRow
                              className={"row-alignment"}
                              md="12"
                              sm="12"
                              lg="12"
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
                                  options={selectState}
                                />
                              </CCol>
                              {municipalList && (
                                <React.Fragment>
                                  <CCol
                                    className={"column-align"}
                                    md={4}
                                    lg={4}
                                  >
                                    <CLabel className={"label-name-1"}>
                                      Municipality
                                      <span className={"text-danger"}> *</span>
                                    </CLabel>
                                    <Select
                                      placeholder="Select Municipality"
                                      id={"municipalcorporation"}
                                      type={"text"}
                                      value={collected}
                                      onChange={changedistrictpanchayat}
                                      components={{
                                        MenuList: SelectMenuButtonmunici,
                                      }}
                                      options={selectMunicipalcorporation}
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
                                          onClick={editClickmunici}
                                          id={"municiedit"}
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
                                            onClick={deletemodal}
                                            className={"editIcon"}
                                            id={"municidelete"}
                                            class="fas fa-trash"
                                          />
                                        </div>
                                      </div>
                                    ) : null}
                                  </CCol>

                                  {municipalName.edit === true ? (
                                    <React.Fragment>
                                      <CCol md={3} lg={3}>
                                        <CButton
                                          style={{
                                            marginTop: "30px",
                                          }}
                                          id={"municiedit"}
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
                            </CRow>
                            <CRow
                              className={"row-alignment"}
                              md="12"
                              sm="12"
                              lg="12"
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
                                  placeholder={" Corporation Name"}
                                  options={selectDistrict}
                                />
                              </CCol>
                              {municipalListadd && (
                                <React.Fragment>
                                  <CCol
                                    className={"column-align"}
                                    md={4}
                                    lg={4}
                                  >
                                    <CLabel className={"label-name-1"}>
                                      Ward Number
                                      <span className={"text-danger"}> *</span>
                                    </CLabel>
                                    <Select
                                      placeholder="Select Ward Number"
                                      id={"municipalcorporationward"}
                                      type={"text"}
                                      value={selected1}
                                      onChange={changePanchayatUnion}
                                      components={{
                                        MenuList: SelectMenuButtonward,
                                      }}
                                      options={selectWard}
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
                                          onClick={editClickward}
                                          id={"wardedit"}
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
                                            onClick={deletemodal}
                                            className={"editIcon"}
                                            id={"warddelete"}
                                            class="fas fa-trash"
                                          />
                                        </div>
                                      </div>
                                    ) : null}
                                  </CCol>

                                  {municipalName.edit === true ? (
                                    <React.Fragment>
                                      <CCol md={3} lg={3}>
                                        <CButton
                                          style={{
                                            marginTop: "30px",
                                          }}
                                          id={"municiedit"}
                                          className={"btn btn-success"}
                                          onClick={editStateadd}
                                        >
                                          EDIT
                                        </CButton>
                                      </CCol>
                                    </React.Fragment>
                                  ) : null}
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

                            <CRow
                              className={"row-alignment"}
                              md="12"
                              sm="12"
                              lg="12"
                            >
                              <CCol className={"column-align"} md="4">
                                <CLabel className={"label-name"}>
                                  Area
                                  <span className={"text-danger"}>*</span>
                                </CLabel>
                                <Select
                                  className={"input-align"}
                                  id={"municipalarea"}
                                  name={"area"}
                                  placeholder={" Corporation Name"}
                                  options={selectArea}
                                />
                              </CCol>
                            </CRow>
                          </div>
                          <CRow style={{ marginTop: "30px" }}>
                            <CCol md="10">
                              <CCol
                                md="5"
                                style={{
                                  marginLeft: "255px",
                                  position: "absolute",
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
                                  onClick={cancelmunici}
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
                          <CRow
                            style={{ marginLeft: "33px", marginTop: "131px" }}
                          >
                            <CInput
                              type={"checkbox"}
                              style={{
                                width: "15px",
                                height: "15px",
                                marginLeft: "30px",
                                marginBottom: "10px",
                              }}
                            />
                            <CCol
                              style={{ fontSize: "1.15rem" }}
                              md="12"
                            ></CCol>
                          </CRow>
                          <CRow style={{ padding: "4%", marginTop: "-17%" }}>
                            <CDataTable
                              items={userData1}
                              fields={fields3}
                              columnFilter
                              tableFilter
                              tableLabel={"List of Streets"}
                              itemsPerPageSelect
                              itemsPerPage={5}
                              hover
                              sorter
                              pagination
                              selectAll={true}
                              checkedAll={userData.length === selected.length}
                              onSelectAll={(val) => {
                                console.log(val, userData);
                                if (userData.length === selected.length) {
                                  setSelected([]);
                                } else {
                                  let ids = [];
                                  val.map((x) => ids.push(`${x._id}`));
                                  setSelected(ids);
                                }
                              }}
                              scopedSlots={{
                                show_details1: (item, index) => {
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
                                            if (
                                              selected.includes(`${item._id}`)
                                            ) {
                                              let values = selected.filter(
                                                (x) => {
                                                  return (
                                                    `${x}` !== `${item._id}`
                                                  );
                                                }
                                              );
                                              setSelected(values);
                                            } else {
                                              setSelected([
                                                ...selected,
                                                `${item._id}`,
                                              ]);
                                            }
                                          }}
                                          checked={selected.includes(
                                            `${item._id}`
                                          )}
                                        />
                                      </CRow>
                                    </td>
                                  );
                                },
                                show_details: (item, index) => {
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
                                            id={"municiedit"}
                                            className="fas fa-edit"
                                          ></i>
                                          <i
                                            id={"municidelete"}
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
                    </CCard>
                  </div>
                )}
              </div>
            </div>         
    </React.Fragment>
  );
};

export default Municipality;
