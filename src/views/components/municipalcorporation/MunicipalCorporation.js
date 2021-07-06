import { CButton, CCard, CCol, CLabel, CLink, CRow, CInput } from "@coreui/react";
import React, { useState } from "react";
import CDataTable from "../../CoreComponents/table/CDataTable";
import { saveCreateCorporation } from "../../../services/ApiService";
import { toast } from "react-toastify";
import Select, { components } from "react-select";
import { Dropdown, Menu } from "antd";
import 'antd/dist/antd.css';
import "./MunicipalCorporation.css";
import { CSVLink } from 'react-csv';
import * as XLSX from "xlsx";
import SheetJSFT from "../../../Tools/excelupload/SheetJSFT"
import { make_cols } from "../../../Tools/excelupload/MakeColumn"

const MunicipalCorporation = () => {
  const [excelupload, setExcelUpload] = React.useState({ file: {}, data: [], cols: [] });
  const [location, setLocation] = useState({
    state: "",
    district: "",
    city: "",
    ward: "",
    area: "",
    street: "",
    pincode: "",
  });

  const [locations, ] = useState({
    state: "",
    district: "",
    city: "",
    ward: "",
    area: "",
    street: "",
    pincode: "",
  });
  const [municipalList, setMunicipalList] = useState(true);
  const [MunicipalCreate, setmunicipalCreate] = useState(false);
  const [municipalListadd, setMunicipalListadd] = useState(true);
  const [MunicipalCreateadd, setmunicipalCreateadd] = useState(false);
  const [selected1, setSelected1] = useState([]);
  const [collected, setCollected] = useState([]);
  const [villageHide, setVillageHide] = useState({ districtpanchayat: true, panchayatunion: false })
  const [municipalName] = useState("");
  const [selected, ] = useState([]);
  const [locationHide, setLocationHide] = useState({
    corporation: true,
    municipalLocation: false,
    districtPanchayat: false,
    townPanchayat: false,
    villagePanchayat: false,
    cityLocation: false,
  });
  const userData = [
   
    {
      SNo: "1",
      ward: "0005",
      street: "Alwarpet",
      EnteredBy: "Sathishkumar",
      Enteredon: "11/06/2021",
    },
    {
      SNo: "2",
      ward: "0007",
      street: "Nandanam",
      EnteredBy: "Sathishkumar",
      Enteredon: "11/06/2021",
    },
    {
      SNo: "3",
      ward: "0012",
      street: "Mylapore",
      EnteredBy: "Sathishkumar",
      Enteredon: "11/06/2021",
    },
    {
      SNo: "4",
      ward: "0018",
      street: "Velacherry",
      EnteredBy: "Sathishkumar",
      Enteredon: "11/06/2021",
    },
    {
      SNo: "5",
      ward: "0019",
      street: "Navalur",
      EnteredBy: "Sathishkumar",
      Enteredon: "11/06/2021",
    },
    {
      SNo: "6",
      ward: "0017",
      street: "TNagar",
      EnteredBy: "Sathishkumar",
      Enteredon: "11/06/2021",
    },
    {
      SNo: "7",
      ward: "0017",
      street: "Pondy Bazar",
      EnteredBy: "Sathishkumar",
      Enteredon: "11/06/2021",
    },
  ];
  const [checked, setChecked] = useState(false);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const handleChangeex = (e) => {
    const files = e.target.files;
    if (files && files[0]) setExcelUpload({ file: files[0] });

  };
  const userData1 = [
    {
      SNo: "1",
      ward: "0018",
      street: "Teynampet",
      EnteredBy: "Sathishkumar",
      Enteredon: "11/06/2021",
    },
    {
      SNo: "2",
      ward: "0018",
      street: "Alwarpet",
      EnteredBy: "Sathishkumar",
      Enteredon: "11/06/2021",
    },
    {
      SNo: "3",
      ward: "0018",
      street: "Nandanam",
      EnteredBy: "Sathishkumar",
      Enteredon: "11/06/2021",
    },
  ];
  const fields1 = [

    {
      key: "SNo",
      label: "S.NO",
      _style: { width: "3%" },
      sorter: false,
      filter: false,
    },

    { key: "ward", label: "Ward Name", _style: { width: "10%" } },
    { key: "street", label: "Street Name", _style: { width: "10%" } },
    {
      key: "EnteredBy",
      label: "Entered By",
      _style: { width: "10%" },
    },
    {
      key: "Enteredon",
      label: "Entered On",
      _style: { width: "10%" },
    },
  ];
  const fieldss1 = [
    {
      key: "SNo",
      label: "S.NO",
      _style: { width: "3%" },
      sorter: false,
      filter: false,
    },

    { key: "municipal", label: " Municipal Corporation", _style: { width: "10%" } },
    {
      key: "show_details3",
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
      _style: { width: "3%" },
      sorter: false,
      filter: false,
    },

    { key: "ward", label: "Ward Number", _style: { width: "10%" } },
    {
      key: "show_details3",
      label: "Action",
      _style: { width: "10%" },
      sorter: false,
      filter: false,
    },
  ];

  const fields = [    
    {
      key: "SNo",
      label: "S.NO",
      _style: { width: "3%" },
      sorter: false,
      filter: false,
    },

    { key: "ward", label: "Ward Name", _style: { width: "10%" } },
    { key: "street", label: "Street Name", _style: { width: "10%" } },
    {
      key: "EnteredBy",
      label: "Entered By",
      _style: { width: "10%" },
    },
    {
      key: "Enteredon",
      label: "Entered On",
      _style: { width: "10%" },
    },

    {
      key: "show_details",
      label: "Action",
      _style: { width: "10%" },
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

  const saveMunicipalLocation = () => {
    setLocationHide({
      ...locationHide,
      municipalLocation: false,
      districtPanchayat: true,
    });
  };
  const saveDistrictPanchayat = () => {
    console.log(locationHide, "hidr");
    setLocationHide({
      ...locationHide,
      districtPanchayat: false,
      townPanchayat: true,
    });
  };
  const SelectMenuButtonMunicicorp = (props) => {
    return (
      <components.MenuList  {...props}>
        {props.children}
        <div style={{ marginTop: "-56px", minHeight: "80px" }} >
          <CLink className={"saveBtn"} onClick={handleClickmunici} style={{ marginLeft: "250px" }}>Add</CLink>
          <CLink className={"saveBtn"} onClick={bulkhandleClickmunici} style={{ marginLeft: "10px" }}>Bulk Upload </CLink>
        </div>
      </components.MenuList>
    )
  }
  const SelectMenuButtonWard = (props) => {
    return (
      <components.MenuList  {...props}>
        {props.children}
        <div style={{ marginTop: "-95px", minHeight: "90px" }} >
          <CLink className={"saveBtn"} onClick={handleClickward} style={{ marginLeft: "250px" }}>Add</CLink>
          <CLink className={"saveBtn"} onClick={bulkhandleClickward} style={{ marginLeft: "10px" }}>Bulk Upload </CLink>
        </div>
      </components.MenuList>
    )
  }
  const savetownPanchayat = () => {
    console.log(locationHide, "hidr");
    setLocationHide({
      ...locationHide,
      villagePanchayat: true,
      townPanchayat: false,
    });
  };
  const cityLocation = () => {
    setLocationHide({
      ...locationHide,
      cityLocation: true,
      townPanchayat: false,
    });
  };
  const cancelcityLocation = () => {
    setLocationHide({
      ...locationHide,
      cityLocation: false,
      corporation: true,
    });
  };

  const enableCreate = async () => {
    await setMunicipalList(false);
    await setmunicipalCreate(true);
  };

  const editMunicipalCorporation = async (item) => {
    await setHideMappingmunicipal(false);
    await setHideCorporation(true);
    await setStateName(item.stateName)
  };
  const CancelState = async () => {
    setPassing("");
    await setMunicipalList(true);
    await setmunicipalCreate(false);
  }; 
  const [stateName, setStateName] = useState("");
  const editMunicipalCorporationadd = async () => {
    await setMunicipalListadd(false);
    await setmunicipalCreateadd(true);
  };
  const CancelStateadd = async () => {
    setPassing("");
    await setMunicipalListadd(true);
    await setmunicipalCreateadd(false);
  };

  const [hideMappingMunicipal, setHideMappingmunicipal] = useState(true);
  const [hideCorporation, setHideCorporation] = useState(false);
  const changeMunicipalCorporation = () => {
    setHideMappingmunicipal(false);
    setHideCorporation(true);
  };
  const cancelmc = () => {
    setHideMappingmunicipal(true);
    setHideCorporation(false);
  };
  const selectState = [{ value: "TamilNadu", label: "TamilNadu" }];
  const selectDistrict = [{ value: "Chennai", label: "Chennai" }];
  const selectMunicipalcorporation = [
    {
      span: (
        <CLink
          className={"saveBtn"}
          style={{ marginLeft: "200px" }}
        >
          Add{" "}
        </CLink>
      ),     
    },
    { value: "South Chennai", label: "South Chennai" },
  ];
  const selectArea = [
    { value: "TNagar", label: "TNagar" },
    { value: "Teynampet", label: "Teynampet" },
  ];
  const selectWard = [
    {
      span: (
        <CLink
          className={"saveBtn"}
          style={{ marginLeft: "200px" }}
        >
          Add{" "}
        </CLink>
      ),      
    },
    { value: "0017", label: "0017" },
    { value: "0018", label: "0018" },
  ];



  const [menu, setMenu] = useState({
    style: "menu2",
    menuStatus: "open",
    // style3: "menu2",
  });

  const [sideBar1, setSideBar1] = useState(false);
  const [sideBar2, setSideBar2] = useState(false);

  const handleClickmunici = () => {

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
        setSideBar2(false)
        setSideBarup1(false)
        setSideBarup2(false)
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
        setSideBar1(false)
        setSideBarup1(false)
        setSideBarup2(false)
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
  const [, setSideBarup] = useState(false)
  const [sideBarup1, setSideBarup1] = useState(false)
  const [sideBarup2, setSideBarup2] = useState(false)

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

  
  const handleFile = () => {
    const reader = new FileReader();
    const rABS = !!reader.readAsBinaryString;

    reader.onload = (e) => {
      const bstr = e.target.result;
      const wb = XLSX.read(bstr, { type: rABS ? 'binary' : 'array', bookVBA: true });
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      const data = XLSX.utils.sheet_to_json(ws);
      setExcelUpload({ data: data, cols: make_cols(ws['!ref']) });
      setIsValue(true)
      console.log(JSON.stringify(data, null, 2));
      console.log(data, "data")
    };

    if (rABS) {
      reader.readAsBinaryString(excelupload.file);
    } else {
      reader.readAsArrayBuffer(excelupload.file);
    };
  }

  const [isValue, setIsValue] = useState(false)
  const [variable, ] = useState([])

  const menusremoveicon = (item) => {
    return (
      variable.map((x, i) => (
        <tr key={i}>
          <td>{x.SNO}</td>
          <td>{x.MENU1}</td>
          <td>{x.NUMBER1}</td>
          <td>{x.MENU2}</td>
          <td>{x.NUMBER2}</td>
        </tr>
      ))      
    )
  }
  const csvData = [
    ['SNo', 'municipal', ],
  ];
  const csvDatasub = [    
    ['SNo', 'ward', ]
  ];

  const menus = (details) => {
    return (
      <Menu>
        <Menu.Item>
          Edit
        </Menu.Item>
        <Menu.Item>
          Delete
        </Menu.Item>
      </Menu>
    )
  }

  const [inputList, setInputList] = useState([{ name: "", abbreviation: "", code: "" }]);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };
  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1)
    setInputList(list);
  }


  const handleAddClick = (e) => {
    e.preventDefault()
    setInputList([...inputList, { name: "", abbreviation: "", code: "" }]);
  }
  const changedistrictpanchayat = (e) => {
    setCollected(e)
    setVillageHide({ ...villageHide, districtpanchayat: true, panchayatunion: false })
  }
  const changePanchayatUnion = (e) => {
    setSelected1(e)
    setVillageHide({ ...villageHide, districtpanchayat: false, panchayatunion: true })
  }
  return (
    <div className={menu.style3}>
      {sideBar1 && (
        <div className={menu.style} style={{ marginLeft: "-85px" }}>

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
                  Adding Municipal Corporation Name{" "}
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
                  <CLabel className={"label-name-1"} style={{ marginLeft: "-50px" }}>
                    Municipal Corporation
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
                    onChange={e => handleInputChange(e, i)}
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
                    onChange={e => handleInputChange(e, i)}
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
                    onChange={e => handleInputChange(e, i)}
                  />
                </CCol>

                <CRow>
                  <CCol md="3">
                    {inputList.length - 1 === i &&
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
                    }




                  </CCol>
                  <CCol md="3">
                    {inputList.length !== 1 &&
                      <i
                        style={{
                          marginLeft: "0px",
                          marginTop: "35px",

                          fontSize: "1.25rem",
                          color: "black",
                        }}
                        onClick={() => handleRemoveClick(i)}
                        class={"fa fa-remove"}

                      />}




                  </CCol>

                </CRow>


              </CRow>


            )
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

              > Save</CButton>
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
            style={{ position: "absolute", top: "15px", right: "40px", backgroundColor: "green", border: "1px solid green" }}
            className={"cancelBtn"}
            onClick={() => {
              handleClickmunici();
            }}
          >
            Back
          </CButton>
        </div>

      )}

      <div className={menu.style3}>
        {sideBar2 && (
          <div className={menu.style} style={{ marginLeft: "-85px" }}>

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
                    Adding Ward Number{" "}
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
                  style={{ position: "relative", marginLeft: "5px", fontSize: "23px", fontWeight: "650", cursor: "pointer" }}
                  className={"form-labels-6"}
                >
                  Municipal Corporation:
                </CLabel>
                <span style={{ marginTop: "13px", marginLeft: "5px", }}>South Chennai</span>
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
                      id={"WardName"}
                      name={"Wardname"}
                      placeholder="Enter Ward Number"
                      maxlength="60"
                      size="60"
                      value={x.panchayatname}
                      onChange={e => handleInputChange(e, i)}
                    />
                  </CCol>

                  <CCol md="2">
                    <CLabel className={"label-name-1"}>
                      Abbreviation
                      <span className={"text-danger"}> *</span>
                    </CLabel>
                    <CInput
                      id={"Wardabrreviation"}
                      name={"abbreviation"}
                      placeholder="Enter Abbreviation"
                      maxlength="5"
                      size="5"
                      value={x.panchayatabbreviation}
                      onChange={e => handleInputChange(e, i)}
                    />
                  </CCol>
                  <CCol md="2">
                    <CLabel className={"label-name-1"}>
                      Code
                      <span className={"text-danger"}> *</span>
                    </CLabel>
                    <CInput
                      id={"Wardcode"}
                      name={"code"}
                      placeholder="Enter Code"
                      maxlength="5"
                      size="5"
                      value={x.panchayatcode}
                      onChange={e => handleInputChange(e, i)}
                    />
                  </CCol>

                  <CRow>
                    <CCol md="3">
                      {inputList.length - 1 === i &&
                        <i
                          style={{
                            marginLeft: "0px",
                            marginTop: "35px",

                            fontSize: "1.25rem",
                            color: "#3273e9",
                          }}
                          onClick={handleAddClick}
                          class={"fa fa-plus"}

                        />}




                    </CCol>
                    <CCol md="3">
                      {inputList.length !== 1 &&
                        <i
                          style={{
                            marginLeft: "0px",
                            marginTop: "35px",

                            fontSize: "1.25rem",
                            color: "black",
                          }}
                          onClick={() => handleRemoveClick(i)}
                          class={"fa fa-remove"}

                        />}
                    </CCol>
                  </CRow>
                </CRow>
              )
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

                > Save</CButton>
                <CButton
                  shape={"pill"}
                  id={"Wardcancel"}
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
              style={{ position: "absolute", top: "15px", right: "40px", backgroundColor: "green", border: "1px solid green" }}
              className={"cancelBtn"}
              onClick={() => {
                handleClickward();
                // handleClick2();
              }}
            >
              Back
            </CButton>
          </div>

        )}
        {sideBarup1 && (
          <div className={menu.style1} style={{ marginLeft: "-85px" }}>

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
                    Adding Municipal Corporation Name{" "}
                  </span>
                </div>
              </CCol>
            </CRow>

            <CRow md="12"
              style={{ marginLeft: "10px", marginTop: "15px" }}

            >
              <CCol md="6" id={"createRoleUploadTemplate"}
                onClick={() => {
                  document.getElementById("uploadRoleTemplate").click();
                }}>
                <span style={{ fontSize: "20px", cursor: "pointer", color: "blue" }}>
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
                  onChange={handleChangeex}
                  accept={SheetJSFT}
                />
              </CCol>
              <CCol md="6" style={{ marginLeft: "150px", marginTop: "-38px" }}>
                <CSVLink data={csvData}>
                  <span style={{ fontSize: "20px", cursor: "pointer", color: "red" }}>
                    <i className="fas fa-download">
                    </i>&nbsp;

                  </span>

                  <CLabel
                    style={{
                      position: "relative",
                      marginLeft: "20px",
                      cursor: "pointer",
                      color: "black"

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
                        style={{ position: "absolute", top: "-105px", right: "-640px", marginLeft: "10px", backgroundColor: "green", border: "1px solid green" }}
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
                    tableLabel={"List of Municipal Corporation "}
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
                                  onClick={() => menusremoveicon(item)}
                                />
                              </CCol>
                            </CRow>
                          </td>
                        );
                      },
                      details: (item, index) => { },
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

                    > Save</CButton>
                    <CButton
                      shape={"pill"}
                      id={"municipalsidecancel"}
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
          <div className={menu.style1} style={{ marginLeft: "-85px" }}>

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
                    Adding Ward Number{" "}
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
                  style={{ position: "relative", marginLeft: "5px", fontSize: "23px", fontWeight: "650", cursor: "pointer" }}
                  className={"form-labels-6"}
                >
                  Municipal Corporation:
                </CLabel>
                <span style={{ marginTop: "13px", marginLeft: "5px", }}>South Chennai</span>
              </CCol>
            </CRow>

            <CRow md="12"
              style={{ marginLeft: "10px", marginTop: "15px" }}

            >
              <CCol md="6" id={"createRoleUploadTemplate"}
                onClick={() => {
                  document.getElementById("uploadRoleTemplate").click();
                }}>
                <span style={{ fontSize: "20px", cursor: "pointer", color: "blue" }}>
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
                  onChange={handleChangeex}
                  accept={SheetJSFT}
                />
              </CCol>
              <CCol md="6" style={{ marginLeft: "150px", marginTop: "-38px" }}>
                <CSVLink data={csvDatasub}>
                  <span style={{ fontSize: "20px", cursor: "pointer", color: "red" }}>
                    <i className="fas fa-download">
                    </i>&nbsp;

                  </span>

                  <CLabel
                    style={{
                      position: "relative",
                      marginLeft: "20px",
                      cursor: "pointer",
                      color: "black"

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
                        style={{ position: "absolute", top: "-165px", right: "-640px", marginLeft: "10px", backgroundColor: "green", border: "1px solid green" }}
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
                  details: (item, index) => { },
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

                > Save</CButton>
                <CButton
                  shape={"pill"}
                  id={"Wardsudecancel"}
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
      <div>
        {hideMappingMunicipal && (
          <div>
            <CCard className={"cardSave"}>
              <div className={"main-headerlabel"}>
                <span className={"header-label"}> Municipal Corporation</span>
              </div>
              {locationHide.corporation && (
                <div>
                  <div style={{ marginLeft: "-26px" }}>
                    <CRow style={{ marginTop: "45px" }}>
                      <CCol>
                        <CCol
                          md="5"

                        >
                          <CButton
                            style={{

                              marginLeft: "35px",
                            }}
                            id={"addmunici"}
                            className={"saveBtn"}
                            onClick={changeMunicipalCorporation}
                          >
                            Add Municipal Corporation
                          </CButton>{" "}
                        </CCol>
                      </CCol>
                    </CRow>

                    <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                      <CCol className={"column-align"} md="3">
                        <CLabel className={"label-name-1"}>
                          State
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <Select
                          id={"municipalstatename"}
                          name={"state"}
                          placeholder={"Select State"}
                          value={stateName}
                          onChange={(e) =>
                            setStateName({ stateName: e.target.value })
                          }
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
                          Municipal Corporation
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <Select
                          id={"municipalcorporation"}
                          name={"city"}
                          placeholder={" Corporation Name"}
                          options={selectMunicipalcorporation}
                        />
                      </CCol>
                    </CRow>

                    <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                      <CCol className={"column-align"} md="3">
                        <CLabel className={"label-name-1"}>
                          Area
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <Select
                          id={"municipalareaname"}
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
                          id={"municipalwardename"}
                          name={"Ward"}
                          placeholder={"Select Ward"}
                          options={selectWard}
                        />
                      </CCol>
                    </CRow>
                  </div>

                  <CRow style={{ padding: "4%", marginTop: "-2.5%", marginLeft: "-40px" }}>
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
                            <td className="py-1">
                              <CRow>
                                <CCol style={{ fontSize: "1.15rem" }} md="16">

                                  <Dropdown
                                    className={"ant-dropdown-cutomize-by-me"}
                                    overlay={() => menus(item)}
                                  >
                                    <a href
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
                        details: (item, index) => { },
                      }}
                    />
                  </CRow>
                </div>
              )}
            </CCard>
          </div>
        )}

        {hideCorporation && (
          <div>
            <CCard className={"cardSave"}>
              <div className={"main-headerlabel"}>
                <span className={"header-label"}>
                  {" "}
                  Adding Municipal Corporation
                </span>
              </div>
              {locationHide.corporation && (
                <div>
                  <div style={{ marginLeft: "-26px" }}>
                    <CRow
                      className={"row-alignment"}
                      style={{ marginLeft: "5px" }}
                    >
                      <CCol className={"column-align"} md="4">
                        <CLabel className={"label-name-5"}>
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
                      {municipalList && (
                        <React.Fragment>
                          <CCol className={"column-align"} md={4} lg={4}>
                            <CLabel className={"label-name-5"}>
                              Municipal Corporation
                              <span className={"text-danger"}> *</span>
                            </CLabel>
                            <Select
                              placeholder="Select Municipal Corporation"
                              id={"municipalcorporation"}
                              type={"text"}
                              value={selected}
                              onChange={changedistrictpanchayat}
                              components={{ MenuList: SelectMenuButtonMunicicorp }}
                              options={selectMunicipalcorporation}
                            />
                            {villageHide.districtpanchayat && collected.length !== 0 ? (
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
                                    className={"editIcon"}

                                    id={"municidelete"}
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
                          {municipalName.edit === true ? (
                            <React.Fragment>
                              <CCol md={3} lg={3}>
                                <CButton
                                  style={{
                                    marginTop: "30px",
                                  }}
                                  id={"municiEdit"}
                                  className={"btn btn-success"}
                                  onClick={editMunicipalCorporation}
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
                              <CLabel className={"label-name-5"}>
                                Municipal Corporation
                                <span className={"text-danger"}> *</span>
                              </CLabel>

                              <CInput
                                id={"MunicipalName"}
                                name={"municipalname"}
                                placeholder="MunicipaL Name"
                                maxlength="60"
                                size="60"
                              />
                            </CCol>

                            <CCol md="3">
                              <CLabel className={"label-name-5"}>
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
                              <CLabel className={"label-name-5"}>
                                Code
                                <span className={"text-danger"}> *</span>
                              </CLabel>
                              <CInput
                                id={"municipalcode"}
                                name={"code"}
                                style={{ textTransform: "uppercase" }}
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
                      style={{ marginLeft: "5px" }}
                    >
                      <CCol className={"column-align"} md="4">
                        <CLabel className={"label-name-5"}>
                          District / City
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <Select

                          id={"municipaldistrict"}
                          name={"city"}
                          placeholder={" Corporation Name"}
                          value={selected1}
                          onChange={(e) => setSelected1(e)}
                          options={selectDistrict}
                        />
                      </CCol>
                      {municipalListadd && (
                        <React.Fragment>
                          <CCol className={"column-align"} md={4} lg={4}>
                            <CLabel className={"label-name-5"}>
                              Ward Number
                              <span className={"text-danger"}> *</span>
                            </CLabel>
                            <Select
                              placeholder="Select Ward Number"
                              id={"municipalcorporation"}
                              type={"text"}
                              value={selected1}
                              onChange={changePanchayatUnion}
                              components={{ MenuList: SelectMenuButtonWard }}
                              options={selectWard}
                            />
                            {villageHide.panchayatunion && selected1.length !== 0 ? (
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

                                  id={"Wardedit"}
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

                                    id={"Warddelete"}
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
                            onClick={enableCreateadd}
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
                                  id={"wardedit"}
                                  className={"btn btn-success"}
                                  onClick={editMunicipalCorporationadd}
                                >
                                  EDIT
                                </CButton>
                              </CCol>
                            </React.Fragment>
                          ) : null}
                        </React.Fragment>
                      )}
                      {MunicipalCreateadd && (
                        <React.Fragment>
                          <CRow
                            className={"row-alignment"}
                            style={{ marginLeft: "45px", marginTop: "20px" }}
                            sm={12}
                            md={12}
                            lg={12}
                          >

                            <CCol md="3">
                              <CLabel className={"label-name-5"}>
                                Ward Number
                                <span className={"text-danger"}> *</span>
                              </CLabel>

                              <CInput
                                id={"wardname"}
                                name={"municipalname"}
                                placeholder="State Name"
                                maxlength="60"
                                size="60"
                              />
                            </CCol>

                            <CCol md="3">
                              <CLabel className={"label-name-5"}>
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
                              <CLabel className={"label-name-5"}>
                                Code
                                <span className={"text-danger"}> *</span>
                              </CLabel>
                              <CInput
                                id={"wardcode"}
                                name={"wardcode"}
                                style={{ textTransform: "uppercase" }}
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
                                onClick={CancelStateadd}
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
                        Selection Area
                      </CLabel>
                    </CCol>
                    <CRow className={"row-alignment"} md="12" sm="12" lg="12">


                    </CRow>
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
                          placeholder={"Select Area"}
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
                          float: "right",
                          marginTop: "-65px",
                          position: "absolute",
                        }}
                      >
                        <CButton
                          style={{
                            float: "right",
                          }}
                          id={"cancelAbbreviationConfigureCode"}
                          className={"cancelBtn"}
                          onClick={cancelmc}
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
                  <CRow style={{ padding: "4%", marginTop: "-3.5%" }}>
                    <CDataTable
                      items={userData1}
                      fields={fields1}
                      columnFilter
                      tableFilter
                      tableLabel={"List of Streets"}
                      itemsPerPageSelect
                      itemsPerPage={5}
                      hover
                      sorter
                      pagination
                      tableCheckbox
                      columncheckbox
                      options={{
                        selection: true,
                      }}
                      scopedSlots={{
                        show_details: (item, index) => {
                          return (
                            <td className="py-2">
                              {/* <CRow>
                              <CCol style={{ fontSize: "1.15rem" }} md="12">
                                <i
                                  id={"locationLibraryDelete"}
                                  style={{
                                    marginLeft: "5px",
                                    marginLeft: "10px",
                                    color: "black",
                                    cursor: "pointer",
                                  }}
                                  className="fa fa-remove"
                                ></i>
                              </CCol>
                            </CRow> */}
                            </td>
                          );
                        },
                        show_details1: (item, index) => {
                          return (
                            <td className="py-2">
                              <CRow>
                                <CCol style={{ fontSize: "1.15rem" }} md="12">
                                  {/* <CInput type="checkbox" style={{width:"20px"}}/> */}
                                  <CInput
                                    type="checkbox"
                                    checked={checked}
                                    onChange={handleChange}
                                    inputProps={{
                                      "aria-label": "primary checkbox",
                                    }}
                                  />
                                </CCol>
                              </CRow>
                            </td>
                          );
                        },
                        details: (item, index) => { },
                      }}
                    />
                  </CRow>
                </div>
              )}

              {locationHide.municipalLocation && (
                <div>
                  <div style={{ marginLeft: "-26px" }}>
                    <div className={"row-headerlabel"}>
                      <span className={"header-label"}>
                        {" "}
                        Adding Urban Location{" "}
                      </span>
                    </div>
                    <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                      <CCol className={"column-align"} md="3">
                        <CLabel className={"label-name"}>
                          State
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <CInput
                          className={"input-align"}
                          id={"municipalState"}
                          placeholder={" State Name"}
                          value={location.state}
                          onChange={(e) => setLocation(e.target.value)}
                        />
                      </CCol>
                      <CCol className={"column-align"} md="3">
                        <CLabel className={"label-name"}>
                          District/City
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <CInput
                          className={"input-align"}
                          id={"municipalDistrict"}
                          placeholder={" District/City Name"}
                          value={location.district}
                          onChange={(e) => setLocation(e.target.value)}
                        />
                      </CCol>
                      <CCol className={"column-align"} md="3">
                        <CLabel className={"label-name"}>
                          Muncipality Corporation
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <CInput
                          className={"input-align"}
                          id={"Muncipality"}
                          placeholder={" Muncipality Corporation"}
                          value={location.arae}
                          onChange={(e) => setLocation(e.target.value)}
                        />
                      </CCol>
                    </CRow>
                    <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                      <CCol className={"column-align"} md="3">
                        <CLabel className={"label-name"}>
                          Ward
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <CInput
                          className={"input-align"}
                          id={"municipalWard"}
                          placeholder={" Ward"}
                          value={location.street}
                          onChange={(e) => setLocation(e.target.value)}
                        />
                      </CCol>
                      <CCol className={"column-align"} md="3">
                        <CLabel className={"label-name"}>
                          Street
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <CInput
                          type={"text"}
                          className={"input-align"}
                          id={"municipalStreet"}
                          placeholder={"Enter Street"}
                          value={location.pincode}
                          onChange={(e) => setLocation(e.target.value)}
                        />
                      </CCol>

                      <CCol className={"column-align"} md="3">
                        <CLabel className={"label-name"}>
                          Area
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <CInput
                          type={"text"}
                          className={"input-align"}
                          id={"municipalarea"}
                          placeholder={"Enter Area"}
                          value={location.pincode}
                          onChange={(e) => setLocation(e.target.value)}
                        />
                      </CCol>
                    </CRow>
                  </div>
                  <CRow>
                    <CCol md="10">
                      <CCol
                        md="5"
                        style={{
                          float: "right",
                        }}
                      >
                        <CButton
                          style={{
                            float: "right",
                          }}
                          id={"cancelAbbreviationConfigureCode"}
                          className={"cancelBtn"}
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
                          onClick={saveMunicipalLocation}
                        >
                          Save
                        </CButton>{" "}
                      </CCol>
                    </CCol>
                  </CRow>
                  <CRow style={{ padding: "4%", marginTop: "-3.5%" }}>
                    <CDataTable
                      items={userData}
                      fields={fields}
                      columnFilter
                      tableFilter
                      tableLabel={"List of Locations"}
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
                                <CCol
                                  style={{ fontSize: "1.15rem" }}
                                  md="12"
                                ></CCol>
                              </CRow>
                            </td>
                          );
                        },
                        details: (item, index) => { },
                      }}
                    />
                  </CRow>
                </div>
              )}

              {locationHide.districtPanchayat && (
                <div>
                  <div style={{ marginLeft: "-26px" }}>
                    <div className={"row-headerlabel"}>
                      <span className={"header-label"}>
                        {" "}
                        Adding District Panchayat Location{" "}
                      </span>
                    </div>
                    <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                      <CCol className={"column-align"} md="3">
                        <CLabel className={"label-name"}>
                          State
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <CInput
                          className={"input-align"}
                          id={"districtPanchayatState"}
                          placeholder={" State Name"}
                          value={location.state}
                          onChange={(e) => setLocation(e.target.value)}
                        />
                      </CCol>
                      <CCol className={"column-align"} md="3">
                        <CLabel className={"label-name"}>
                          District
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <CInput
                          className={"input-align"}
                          id={"districtPanchayatDistrict"}
                          placeholder={" District/City Name"}
                          value={location.district}
                          onChange={(e) => setLocation(e.target.value)}
                        />
                      </CCol>
                      <CCol className={"column-align"} md="3">
                        <CLabel className={"label-name"}>
                          District Panchayat
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <CInput
                          className={"input-align"}
                          id={"districtPanchayat"}
                          placeholder={" Area Name"}
                          value={location.arae}
                          onChange={(e) => setLocation(e.target.value)}
                        />
                      </CCol>
                    </CRow>
                    <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                      <CCol className={"column-align"} md="3">
                        <CLabel className={"label-name"}>
                          Ward
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <CInput
                          className={"input-align"}
                          id={"districtPanchayatWard"}
                          placeholder={" Street Name"}
                          value={location.street}
                          onChange={(e) => setLocation(e.target.value)}
                        />
                      </CCol>
                      <CCol className={"column-align"} md="3">
                        <CLabel className={"label-name"}>
                          Street
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <CInput
                          type={"text"}
                          className={"input-align"}
                          id={"districtPanchayatStreet"}
                          placeholder={"Enter Pincode"}
                          value={location.pincode}
                          onChange={(e) => setLocation(e.target.value)}
                        />
                      </CCol>
                    </CRow>
                  </div>
                  <CRow>
                    <CCol md="10">
                      <CCol
                        md="5"
                        style={{
                          float: "right",
                        }}
                      >
                        <CButton
                          style={{
                            float: "right",
                          }}
                          id={"cancelDistrictPanchayats"}
                          className={"cancelBtn"}
                        >
                          CANCEL
                        </CButton>
                        <CButton
                          style={{
                            float: "right",
                            marginRight: "15px",
                          }}
                          id={"saveDistrictPanchayats"}
                          className={"saveBtn"}
                          onClick={saveDistrictPanchayat}
                        >
                          Save
                        </CButton>{" "}
                      </CCol>
                    </CCol>
                  </CRow>
                  <CRow style={{ padding: "4%", marginTop: "-3.5%" }}>
                    <CDataTable
                      items={userData}
                      fields={fields}
                      columnFilter
                      tableFilter
                      tableLabel={"List of Locations"}
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
                                <CCol
                                  style={{ fontSize: "1.15rem" }}
                                  md="12"
                                ></CCol>
                              </CRow>
                            </td>
                          );
                        },
                        details: (item, index) => { },
                      }}
                    />
                  </CRow>
                </div>
              )}
              {locationHide.townPanchayat && (
                <div>
                  <div style={{ marginLeft: "-26px" }}>
                    <div className={"row-headerlabel"}>
                      <span className={"header-label"}>
                        {" "}
                        Adding Town Panchayat Location{" "}
                      </span>
                    </div>
                    <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                      <CCol className={"column-align"} md="3">
                        <CLabel className={"label-name"}>
                          State
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <CInput
                          className={"input-align"}
                          id={"townPanchayatState"}
                          placeholder={" State Name"}
                          value={location.state}
                          onChange={(e) => setLocation(e.target.value)}
                        />
                      </CCol>
                      <CCol className={"column-align"} md="3">
                        <CLabel className={"label-name"}>
                          District
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <CInput
                          className={"input-align"}
                          id={"townPanchayatDistrict"}
                          placeholder={" District/City Name"}
                          value={location.district}
                          onChange={(e) => setLocation(e.target.value)}
                        />
                      </CCol>
                      <CCol className={"column-align"} md="3">
                        <CLabel className={"label-name"}>
                          Town Panchayat
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <CInput
                          className={"input-align"}
                          id={"townPanchayatArea"}
                          placeholder={" Area Name"}
                          value={location.arae}
                          onChange={(e) => setLocation(e.target.value)}
                        />
                      </CCol>
                    </CRow>
                    <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                      <CCol className={"column-align"} md="3">
                        <CLabel className={"label-name"}>
                          Ward
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <CInput
                          className={"input-align"}
                          id={"Politicalward"}
                          placeholder={" Street Name"}
                          value={location.street}
                          onChange={(e) => setLocation(e.target.value)}
                        />
                      </CCol>
                      <CCol className={"column-align"} md="3">
                        <CLabel className={"label-name"}>
                          Street
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <CInput
                          type={"text"}
                          className={"input-align"}
                          id={"Politicalstreet"}
                          placeholder={"Enter Pincode"}
                          value={location.pincode}
                          onChange={(e) => setLocation(e.target.value)}
                        />
                      </CCol>
                    </CRow>
                  </div>
                  <CRow>
                    <CCol md="10">
                      <CCol
                        md="5"
                        style={{
                          float: "right",
                        }}
                      >
                        <CButton
                          style={{
                            float: "right",
                          }}
                          id={"cancelTownPanchayat"}
                          className={"cancelBtn"}
                        >
                          CANCEL
                        </CButton>
                        <CButton
                          style={{
                            float: "right",
                            marginRight: "15px",
                          }}
                          id={"saveTownPanchayat"}
                          className={"saveBtn"}
                          onClick={savetownPanchayat}
                        >
                          Save
                        </CButton>{" "}
                      </CCol>
                    </CCol>
                  </CRow>
                  <CRow style={{ padding: "4%", marginTop: "-3.5%" }}>
                    <CDataTable
                      items={userData}
                      fields={fields}
                      columnFilter
                      tableFilter
                      tableLabel={"List of Locations"}
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
                                <CCol
                                  style={{ fontSize: "1.15rem" }}
                                  md="12"
                                ></CCol>
                              </CRow>
                            </td>
                          );
                        },
                        details: (item, index) => { },
                      }}
                    />
                  </CRow>
                </div>
              )}
              {locationHide.villagePanchayat && (
                <div>
                  <div style={{ marginLeft: "-26px" }}>
                    <div className={"row-headerlabel"}>
                      <span className={"header-label"}>
                        {" "}
                        Adding Rural Location{" "}
                      </span>
                    </div>
                    <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                      <CCol className={"column-align"} md="3">
                        <CLabel className={"label-name"}>
                          State
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <CInput
                          className={"input-align"}
                          id={"villagePanchayatState"}
                          placeholder={" State Name"}
                          value={location.state}
                          onChange={(e) => setLocation(e.target.value)}
                        />
                      </CCol>
                      <CCol className={"column-align"} md="3">
                        <CLabel className={"label-name"}>
                          District
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <CInput
                          className={"input-align"}
                          id={"villagePanchayatDistrict"}
                          placeholder={" District/City Name"}
                          value={location.district}
                          onChange={(e) => setLocation(e.target.value)}
                        />
                      </CCol>
                      <CCol className={"column-align"} md="3">
                        <CLabel className={"label-name"}>
                          Panchayat Union
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <CInput
                          className={"input-align"}
                          id={"villagePanchayat"}
                          placeholder={"  Panchayat Union"}
                          value={location.arae}
                          onChange={(e) => setLocation(e.target.value)}
                        />
                      </CCol>
                    </CRow>
                    <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                      <CCol className={"column-align"} md="3">
                        <CLabel className={"label-name"}>
                          Village Union
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <CInput
                          className={"input-align"}
                          id={"villageunion"}
                          placeholder={"village Union"}
                          value={location.villageunion}
                          onChange={(e) => setLocation(e.target.value)}
                        />
                      </CCol>

                      <CCol className={"column-align"} md="3">
                        <CLabel className={"label-name"}>
                          Ward
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <CInput
                          className={"input-align"}
                          id={"villagePanchayatWard"}
                          placeholder={"Enter Ward"}
                          value={location.street}
                          onChange={(e) => setLocation(e.target.value)}
                        />
                      </CCol>
                      <CCol className={"column-align"} md="3">
                        <CLabel className={"label-name"}>
                          Street
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <CInput
                          type={"text"}
                          className={"input-align"}
                          id={"villagePanchayatStreet"}
                          placeholder={"Enter Street"}
                          value={location.pincode}
                          onChange={(e) => setLocation(e.target.value)}
                        />
                      </CCol>
                    </CRow>
                  </div>
                  <CRow>
                    <CCol md="10">
                      <CCol
                        md="5"
                        style={{
                          marginTop: "18px",
                          float: "right",
                        }}
                      >
                        <CButton
                          style={{
                            float: "right",
                          }}
                          id={"cancelAbbreviationConfigureCode"}
                          className={"cancelBtn"}
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
                  <CRow>
                    <CCol style={{ fontSize: "1.15rem" }} md="12">
                      <i
                        id={"municicorpDelete"}
                        style={{
                          marginLeft: "5px",
                          color: "#e85654",
                          cursor: "pointer",
                        }}
                        className="fa fa-trash"
                      ></i>
                    </CCol>
                  </CRow>
                  <CRow style={{ padding: "4%", marginTop: "-3.5%" }}>
                    <CDataTable
                      items={userData}
                      fields={fields}
                      columnFilter
                      tableFilter
                      tableLabel={"List of Locations"}
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
                                <CCol
                                  style={{ fontSize: "1.15rem" }}
                                  md="12"
                                ></CCol>
                              </CRow>
                            </td>
                          );
                        },
                        details: (item, index) => { },
                      }}
                    />
                  </CRow>
                </div>
              )}
              {locationHide.cityLocation && (
                <div>
                  <div style={{ marginLeft: "-26px" }}>
                    <div className={"row-headerlabel"}>
                      <span className={"header-label"}> Adding Location </span>
                    </div>
                    <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                      <CCol className={"column-align"} md="3">
                        <CLabel className={"label-name"}>
                          State
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <CInput
                          className={"input-align"}
                          id={"PoliticalState"}
                          placeholder={" State Name"}
                          value={location.state}
                          onChange={(e) => setLocation(e.target.value)}
                        />
                      </CCol>
                      <CCol className={"column-align"} md="3">
                        <CLabel className={"label-name"}>
                          District/City
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <CInput
                          className={"input-align"}
                          id={"PoliticalState"}
                          placeholder={" District/City Name"}
                          value={location.district}
                          onChange={(e) => setLocation(e.target.value)}
                        />
                      </CCol>
                      <CCol className={"column-align"} md="3">
                        <CLabel className={"label-name"}>
                          Area
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <CInput
                          className={"input-align"}
                          id={"PoliticalArea"}
                          placeholder={" Area Name"}
                          value={location.arae}
                          onChange={(e) => setLocation(e.target.value)}
                        />
                      </CCol>
                    </CRow>
                    <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                      <CCol className={"column-align"} md="3">
                        <CLabel className={"label-name"}>
                          Street
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <CInput
                          className={"input-align"}
                          id={"PoliticalStreet"}
                          placeholder={" Street Name"}
                          value={location.street}
                          onChange={(e) => setLocation(e.target.value)}
                        />
                      </CCol>
                      <CCol className={"column-align"} md="3">
                        <CLabel className={"label-name"}>
                          Pincode
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <CInput
                          type={"number"}
                          className={"input-align"}
                          id={"PoliticalPincode"}
                          placeholder={"Enter Pincode"}
                          value={location.pincode}
                          onChange={(e) => setLocation(e.target.value)}
                        />
                      </CCol>
                    </CRow>
                  </div>
                  <CRow>
                    <CCol md="10">
                      <CCol
                        md="5"
                        style={{
                          float: "right",
                        }}
                      >
                        <CButton
                          style={{
                            float: "right",
                          }}
                          id={"cancelAbbreviationConfigureCode"}
                          className={"cancelBtn"}
                          onClick={cancelcityLocation}
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
                          onClick={cityLocation}
                        >
                          Save
                        </CButton>{" "}
                      </CCol>
                    </CCol>
                  </CRow>
                  <CRow style={{ padding: "4%", marginTop: "-3.5%" }}>
                    <CDataTable
                      items={userData}
                      fields={fields}
                      columnFilter
                      tableFilter
                      tableLabel={"List of Locations"}
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
                                <CCol
                                  style={{ fontSize: "1.15rem" }}
                                  md="12"
                                ></CCol>
                              </CRow>
                            </td>
                          );
                        },
                        details: (item, index) => { },
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
    </div >
  );
};

export default MunicipalCorporation;
