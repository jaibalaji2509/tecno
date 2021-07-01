import { cibTeamviewer } from "@coreui/icons";
import {
  CButton,
  CCard,
  CCol,
  CInput,
  CLabel,
  CRow,
 CLink,
} from "@coreui/react";
import "./TownPanchayat.css";
import React, { useState } from "react";
import Select, { components } from "react-select";
import CDataTable from "../../CoreComponents/table/CDataTable";
import { Dropdown, Menu } from "antd";
import 'antd/dist/antd.css';
import { CSVLink, CSVDownload } from 'react-csv';
import ReactFileReader from 'react-file-reader';
import * as XLSX from "xlsx";
import MultiSelect from "react-multi-select-component";
import SheetJSFT from "../../../Tools/excelupload/SheetJSFT"
import { make_cols } from "../../../Tools/excelupload/MakeColumn"

const TownPanchayat = () => {
  const [locations, setLocations] = useState({
    state: "",
    district: "",
    city: "",
    ward: "",
    area: "",
    street: "",
    pincode: "",
  });
  const [selected1, setSelected1] = useState([]);
  const [collected, setCollected] = useState([]);
  const [villageHide, setVillageHide] =useState({districtpanchayat:true,panchayatunion:false})
  const [municipalList, setMunicipalList] = useState(true);
  const [MunicipalCreate, setmunicipalCreate] = useState(false);
  const [municipalCorporation] = useState({});
  const [municipalName ] = useState("");
  const [wardnumberList, seatWardNumberList] = useState(true);
  const [wardNumberCreate, setWardNumberCreate] = useState(false);
  const [locationHide] = useState({
    corporation: true,
    municipalLocation: false,
    districtPanchayat: false,
    townPanchayat: false,
    villagePanchayat: false,
    cityLocation: false,
  });
  const userData = [
    {SNo:"1",
    Street:"Kalaingar Street",
    Ward:"018",
    by:"JAI BALAJI",
    on:"10/06/2021",
  },
  {SNo:"2",
  Street:"Mariamman Kovil Street",
  Ward:"019",
  by:"JAI BALAJI",
  on:"10/06/2021",
},
{SNo:"3",
  Street:"Kothari Nagar",
  Ward:"020",
  by:"JAI BALAJI",
  on:"10/06/2021",
},
{SNo:"4",
  Street:"Kalyani Ponappan Avenue",
  Ward:"021",
  by:"JAI BALAJI",
  on:"10/06/2021",
},
{SNo:"5",
  Street:"Anjugam Street",
  Ward:"023",
  by:"JAI BALAJI",
  on:"10/06/2021",
},
     ];
     const [select, selectedRows] =useState({checked:true})
    const handleRowSelection = (row) => {

      const selectedRows = []
      select.checked.dataTable.forEach((row, i) => {
      row = row.indexOf(i) > -1
  
      selectedRows.push(row)
  })
}
  const fields = [
    // {
    //   key: "show_details",
    //   label: "Select",
    //   _style: { width: "3%" },
    //   select: <div>Email <input type={"checkbox"} onClick={handleRowSelection}/></div>,
    //   sorter: false,
    //   filter: false,
    //   selectedRows,
    // },
    {
      key: "SNo",
      label: "S.NO",
      _style: { width: "5%" },
      sorter: false,
      filter: false,
    },
    { key: "Ward", label: "Ward Number", _style: { width: "10%" } },
    { key: "Street", label: "Street Name", _style: { width: "10%" } },
   
  
    {
      key: "by",
      label: "Entered",
      _style: { width: "10%" },
      sorter: false,
      filter: false,
    },
    {
      key: "on",
      label: "Entered On",
      _style: { width: "10%" },
      sorter: false,
      filter: false,
    },
    {
      key: "show_details",
      label: "Action",
      _style: { width: "10%" },
      sorter: false,
      filter: false,
    },
  ];
  const fields1 = [
    {
      key: "show_details",
      label: "Select",
      _style: { width: "3%" },
      // name: <div>Email <input type={"checkbox"} onClick={""}/></div>,
      // sorter: false,
      // filter: false,
      // checked:true,
    },
    {
      key: "SNo",
      label: "S.NO",
      _style: { width: "5%" },
      sorter: false,
      filter: false,
    },
    
    { key: "Street", label: "Street Name", _style: { width: "10%" } },
  
  ];
  const fieldss1 = [
    
    {
      key: "SNo",
      label: "S.NO",
      _style: { width: "5%" },
      sorter: false,
      filter: false,
    },
    
    { key: "Town", label: "Town Panchayat Name", _style: { width: "10%" } },
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
      _style: { width: "5%" },
      sorter: false,
      filter: false,
    },
    
    { key: "wrd", label: "Ward Number", _style: { width: "10%" } },
    {
      key: "show_details3",
      label: "Action",
      _style: { width: "10%" },
      sorter: false,
      filter: false,
    },
  ];
  const [passing, setPassing] = useState("");
  const [error] = useState("");


  const stateselect =[
    {value:"tamil", label:"Tamilnadu"}
  ];
  const cityselect =[

    {value:"Kancheepuram",label:"Chengalpattu"}
  ];
  const townselect=[
    {
      span: (
        <CLink
          className={"saveBtn"}
          onClick={handleClick1}
          style={{ marginLeft: "200px" }}
        >
          Add{" "}
        </CLink>
      ),
      span: (
        <CLink
          className={"saveBtn"}
          onClick={handleClick1}
          style={{ marginLeft: "200px" }}
        >
          Add{" "}
        </CLink>
      ),
    },
{value:"puthirankottai",label:"Puthirankottai"},
{value:"maa",value:"mambakkam"}];
  const areaselect=[{
  value:"mariamman",label:"Mariamman Kovil Street"
},
{value:"kalaingar",label:"Kalaingar Street"}];
  const wardno=[{
      span: (
        <CLink
          className={"saveBtn"}
          onClick={handleClick1}
          style={{ marginLeft: "200px" }}
        >
          Add{" "}
        </CLink>
      ),
      span: (
        <CLink
          className={"saveBtn"}
          onClick={handleClick1}
          style={{ marginLeft: "200px" }}
        >
          Add{" "}
        </CLink>
      ),
    },
  {  value:"017",label:"018"
  }];
  const wardselect=[{
    value:"1",label:"kavampair"
  }];

  const changeHandler = (e) => {
    setLocations({ ...locations, [e.target.name]: e.target.value });
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
  const [hideMappingTown, setHideMappingTown] = useState(true);
  const [hideTownPanchayat, setHideTownPanchayat] = useState(false);

  const changeTownPanchayat = () => {
    setHideMappingTown(false);
    setHideTownPanchayat(true);
  };
const canceltownchange = () => {
  setHideMappingTown(true);
    setHideTownPanchayat(false);
  };
    
    const addWardNumber = async () => {
      await seatWardNumberList(false);
      await setWardNumberCreate(true);
    };

    const editStateadd = async () => {
      
    };
    const cancelWardNumber = async () => {
      setPassing("");
      await seatWardNumberList(true);
      await setWardNumberCreate(false);
    };
    const [menu, setMenu] = useState({
      style: "menu2",
      menuStatus: "open",
      style3: "menu2",
    });
    const [sideBar1, setSideBar1] = useState(false);
    const [sideBar2, setSideBar2] = useState(false);
    const handleClick1 = () => {
  
      switch (menu.menuStatus) {
        case "open":
          setMenu({
            menuStatus: "close",
            // style3: "menu2",
            style: "menu active1",
  
          });
  
          setTimeout(() => {
            setSideBar1(true);
          }, 1000);
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
    const handleClick2 = () => {
  
      switch (menu.menuStatus) {
        case "open":
          setMenu({
            menuStatus: "close",
            // style3: "menu2",
            style: "menu active1",
  
          });
  
          setTimeout(() => {
            setSideBar2(true);
          }, 1000);
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
    const [sideBarup, setSideBarup] = useState(false)
    const [sideBarup1, setSideBarup1] = useState(false)
    const [sideBarup2, setSideBarup2] = useState(false)
    const bulkhandleClick1 = () => {
  
      switch (menu.menuStatus) {
        case "open":
          setMenu({
            menuStatus: "close",
            // style3: "menu2",
  
            style1: "menu active1",
  
          });
          setSideBarup1(true);
  
  
  
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
    const bulkhandleClick2 = () => {
  
      switch (menu.menuStatus) {
        case "open":
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
  
    const SelectMenuButtonTown = (props) => {
      return (
        <components.MenuList {...props}>
          {props.children}
          <div
            style={{
              marginTop: "-75px",
              marginBottom: "-50px",
              minHeight: "150px",
            }}
          >
            <CLink
              className={"saveBtn"}
              onClick={handleClick1}
              style={{ marginLeft: "200px" }}
            >
              Add{" "}
            </CLink>
            <CLink
              className={"saveBtn"}
              onClick={bulkhandleClick1}
              style={{ marginLeft: "50px" }}
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
              marginTop: "-58px",
              marginBottom: "-50px",
              minHeight: "150px",
            }}
          >
            <CLink
              className={"saveBtn"}
              onClick={handleClick2}
              style={{ marginLeft: "200px" }}
            >
              Add{" "}
            </CLink>
            <CLink
              className={"saveBtn"}
              onClick={bulkhandleClick2}
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
      list.splice(index, 1)
      setInputList(list);
    }
  
  
    // handle click event of the Add button
    const handleAddClick = (e) => {
      e.preventDefault()
      setInputList([...inputList, { name: "", abbreviation: "", code: "" }]);
    }
    const [manual, setManual] = useState(false)
    const menuToggle = (e) => {
      e.stopPropagation();
      setManual({
        isOpen: !manual.isOpen
      });
    }
    const [inputList, setInputList] = useState([{ name: "", abbreviation: "", code: "" }]);
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
        const wb = XLSX.read(bstr, { type: rABS ? 'binary' : 'array', bookVBA: true });
        /* Get first worksheet */
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        /* Convert array of arrays */
        const data = XLSX.utils.sheet_to_json(ws);
        /* Update state */
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
    const [excelupload, setExcelUpload] = React.useState({ file: {}, data: [], cols: [] });
    const [variable, setVariable] = useState([])

    const menus1 = (item) => {
      return (
        variable.map((x, i) => {
          <tr key={i}>
            <td>{x.SNO}</td>
            <td>{x.MENU1}</td>
            <td>{x.NUMBER1}</td>
            <td>{x.MENU2}</td>
            <td>{x.NUMBER2}</td>
          </tr>
        })
      )
    }
  
    const csvData = [
      ['firstname', 'lastname', 'email'],
      ['John', 'Doe', 'john.doe@xyz.com'],
      ['Jane', 'Doe', 'jane.doe@xyz.com']
    ];

    const menus = (details) => {
      return(
        <Menu>
        <Menu.Item>
          <a>Edit</a>
        </Menu.Item>
        <Menu.Item>
          <a>Delete</a>
        </Menu.Item>
      </Menu>
      )
    }
    const changePanchayatUnion = (e)=>{
      setSelected1(e)
      setVillageHide({...villageHide, districtpanchayat:false,panchayatunion:true})
    }
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
                  ADDING Municipality{" "}
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




          <CRow style={{ marginLeft: "330px" }}>

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
                onClick={handleClick1}
              >
                CANCEL
              </CButton>
              {error !== "" ? <p>{error}</p> : null}
            </CCol>
          </CRow>


          <CButton
            className={"menu"}
            style={{ position: "absolute", top: "15px", right: "15px" }}
            className={"cancelBtn"}
            onClick={() => {
              handleClick1();
              // handleClick2();
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
                    ADDING Ward Number{" "}
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
                      Ward Number
                      <span className={"text-danger"}> *</span>
                    </CLabel>

                    <CInput
                      id={"MunicipalName"}
                      name={"municipalname"}
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

            <CRow style={{ marginLeft: "235px" }}>

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
                  onClick={handleClick2}
                >
                  CANCEL
                </CButton>
                {error !== "" ? <p>{error}</p> : null}
              </CCol>
            </CRow>


            <CButton
              className={"menu"}
              style={{ position: "absolute", top: "15px", right: "15px" }}
              className={"cancelBtn"}
              onClick={() => {
                handleClick2();
                // handleClick2();
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
                    ADDING Municipality{" "}
                  </span>
                </div>
              </CCol>
            </CRow>

            <CRow style={{ marginLeft: "10px", marginTop: "15px" }} id={"createRoleUploadTemplate"}
              onClick={() => {

                document.getElementById("uploadRoleTemplate").click();
              }}>
              <CCol md="12">
                <span style={{ fontSize: "20px", cursor: "pointer", color: "blue" }}>
                  <i className="fas fa-upload"></i>&nbsp;
                </span>

                <CLabel
                  style={{ position: "relative", marginLeft: "5px", cursor: "pointer" }}
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
            </CRow>

            <CRow>
              <CCol md="12" style={{ top: "-38px" }}>
                <CSVLink data={csvData} >
                  {/* <CButton
                        shape={"pill"}
                        id={"municipalcancel"}
                        style={{ marginTop: "-60px", marginLeft: "160px" }}
                        className={"cancelBtn"}

                      >
                        Download
                      </CButton> */}
                  <span style={{ fontSize: "20px", marginLeft: "110px", cursor: "pointer", color: "tomato" }}>
                    <i className="fas fa-download"></i>&nbsp;
                  </span>
                </CSVLink>
                <CLabel
                  style={{ position: "relative", marginLeft: "5px", cursor: "pointer" }}
                  className={"form-labels-6"}
                >
                  Download
                </CLabel>
                <CCol md="3">
                  <CButton
                    style={{
                      marginLeft: "-15px",
                      marginTop: "20px",
                    }}
                    onClick={handleFile}
                    className={"saveBtn"}
                  >
                    {" "}
                    Confirm
                  </CButton>


                  <CButton
                    className={"menu"}
                    style={{ position: "absolute", top: "-42px", right: "-550px", marginLeft: "30px", backgroundColor: "green", border: "1px solid green" }}
                    className={"cancelBtn"}
                    onClick={() => {
                      bulkhandleClick();
                      // handleClick2();
                    }}
                  >
                    Back
                  </CButton>
                </CCol>
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
        {sideBarup2 && (
          <div className={menu.style1} style={{ marginLeft: "-108px", minHeight: "900px" }}>

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
                    ADDING Ward Number{" "}
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
                  Municipality:
                </CLabel>
                <span style={{ marginTop: "13px", marginLeft: "5px", }}>Wallajabhad</span>
              </CCol>
            </CRow>

            <CRow style={{ marginLeft: "10px", marginTop: "15px" }} id={"createRoleUploadTemplate"}
              onClick={() => {

                document.getElementById("uploadRoleTemplate").click();
              }}>
              <CCol md="12">
                <span style={{ fontSize: "20px", cursor: "pointer", color: "blue" }}>
                  <i className="fas fa-upload"></i>&nbsp;
                </span>

                <CLabel
                  style={{ position: "relative", marginLeft: "5px", cursor: "pointer" }}
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
            </CRow>

            <CRow>
              <CCol md="12" style={{ top: "-38px" }}>
                <CSVLink data={csvData} >
                  {/* <CButton
                        shape={"pill"}
                        id={"municipalcancel"}
                        style={{ marginTop: "-60px", marginLeft: "160px" }}
                        className={"cancelBtn"}

                      >
                        Download
                      </CButton> */}
                  <span style={{ fontSize: "20px", marginLeft: "110px", cursor: "pointer", color: "tomato" }}>
                    <i className="fas fa-download"></i>&nbsp;
                  </span>
                </CSVLink>
                <CLabel
                  style={{ position: "relative", marginLeft: "5px", cursor: "pointer" }}
                  className={"form-labels-6"}
                >
                  Download
                </CLabel>
                <CCol md="3">
                  <CButton
                    style={{
                      marginLeft: "-15px",
                      marginTop: "20px",
                    }}
                    onClick={handleFile}
                    className={"saveBtn"}
                  >
                    {" "}
                    Confirm
                  </CButton>

                  <CButton
                    className={"menu"}
                    style={{ position: "absolute", marginLeft: "660px", top: "-150px", backgroundColor: "green", border: "1px solid green" }}
                    className={"cancelBtn"}
                    onClick={() => {
                      bulkhandleClick();
                      // handleClick2();
                    }}
                  >
                    Back
                  </CButton>
                </CCol>
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
                              <CCol style={{ fontSize: "1rem" }} md="16">

                                <i
                                  style={{
                                    marginLeft: "35px",

                                  }}
                                  className="fa fa-remove"
                                  bsStyle="overlay"
                                  onClick={() => menus1(item)}
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
                        marginTop: "5px",

                      }}
                      onClick={enableCreate}
                      className={"saveBtn"}

                    > Save</CButton>
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
      <div>
        {hideMappingTown && (
          <div>
            <CCard className={"cardSave"}>
              <div className={"main-headerlabel"}>
                <span className={"header-label"}>Town Panchayat</span>
              </div>
              {locationHide.corporation && (
                <div>
                  <div style={{ marginLeft: "-26px" }}>
                   
                    <CRow style={{ marginTop: "45px" }}>
                      <CCol md="10" >
                        <CCol
                          md="5"
                         
                        >
                          <CButton
                            style={{
                            
                              marginLeft: "45px",
                            }}
                            id={"saveAbbreviationConfigureCode"}
                            className={"saveBtn"}
                            onClick={changeTownPanchayat}
                          >
                            Add Town Panchayat
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
                          options={stateselect}
                        />
                      </CCol>
                      <CCol className={"column-align"} md="3">
                        <CLabel className={"label-name"}>
                          District / City
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <Select
                          className={"input-align"}
                          id={"municipaldistrict"}
                          name={"city"}
                          placeholder={" Corporation Name"}
                          // value={locations.city}
                          // onChange={changeHandler}
                        options={cityselect}
                        />
                      </CCol>
                      <CCol className={"column-align"} md="3">
                        <CLabel className={"label-name"}>
                          Town Panchayat
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <Select
                          className={"input-align"}
                          id={"municipaldistrict"}
                          name={"city"}
                          placeholder={" Corporation Name"}
                          // 
                          options={townselect}
                        />
                      </CCol>
                    </CRow>

                    <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                      <CCol className={"column-align"} md="3">
                        <CLabel className={"label-name"}>
                        Area
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <Select
                          className={"input-align"}
                          id={"municipaldistrict"}
                          name={"Area"}
                          placeholder={" Select Area"}
                          // value={locations.city}
                          // onChange={changeHandler}
                          options={areaselect}
                        />
                      </CCol>
                      <CCol className={"column-align"} md="3">
                        <CLabel className={"label-name"}>
                          Ward
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <Select
                          className={"input-align"}
                          id={"municipalstatename"}
                          name={"Ward"}
                          placeholder={"Select Ward"}
                          // value={locations.district}
                          // onChange={changeHandler}
                          options={wardno}
                        />
                      </CCol>
                    </CRow>
                  </div>

                  <CRow style={{ padding: "4%", marginTop: "-2.5%" ,marginLeft:"-30px"}}>
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
                      onClick={handleRowSelection
}                      useRowSelect
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
        {hideTownPanchayat && (
          <div>
            <CCard className={"cardSave"}>
              <div className={"main-headerlabel"}>
                <span className={"header-label"}> Town panchayat</span>
              </div>
              {locationHide.corporation && (
                <div>
                  <div style={{ marginLeft: "-26px" }}>
                    <div className={"row-headerlabel"}>
                      <span
                        style={{ marginLeft: "70px" }}
                        className={"header-label"}
                      >
                        {" "}
                        Adding Town Panchayat{" "}
                      </span>
                    </div>
                    <CRow className={"row-alignment"} md="12" sm="12" lg="12">
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
                          options={stateselect}
                        />
                      </CCol>

                      {municipalList && (
                        <React.Fragment>
                          <CCol className={"column-align"} md={4} lg={4}>
                            <CLabel className={"label-name-1"}>
                              Town Panchayat
                              <span className={"text-danger"}> *</span>
                            </CLabel>
                            <Select
                              placeholder="Select Town Panchayat"
                              id={"municipalcorporation"}
                              type={"text"}
                              value={collected}
                              onChange={(e) => setCollected(e)}
                              components={{ MenuList: SelectMenuButtonTown }}
                              options={townselect}
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

                                    id={"officeLocationEdit"}
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

                                      id={"officeLocationEdit"}
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
                           className={"row-alignment"} style={{marginLeft:"45px", marginTop:"20px"}}
                            sm={12}
                            md={12}
                            lg={12}
                          >
                            <CCol md="3">
                              <CLabel className={"label-name-1"}>
                                Town Panchayat
                                <span className={"text-danger"}> *</span>
                              </CLabel>

                              <CInput
                                id={"MunicipalName"}
                                name={"municipalname"}
                                placeholder="Enter Town Panchayat Name"
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
                                style={{
                                  marginTop: "30px",
                                  marginLeft: "20px",
                                }}
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

                    <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                      <CCol className={"column-align"} md="4">
                        <CLabel className={"label-name"}>
                          District / City
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <Select
                          className={"input-align"}
                          id={"municipaldistrict"}
                          name={"city"}
                          placeholder={" City Name"}
                          options={cityselect}
                        />
                      </CCol>

                      {wardnumberList && (
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
                              value={selected1}
                              onChange={changePanchayatUnion}
                              components={{ MenuList: SelectMenuButtonward }}
                              options={wardno}
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

                                    id={"officeLocationEdit"}
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

                                      id={"officeLocationEdit"}
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
                                  id={"locationLibraryStateEdit"}
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

                      {wardNumberCreate && (
                        <React.Fragment>
                          <CRow
                          className={"row-alignment"} style={{marginLeft:"45px", marginTop:"20px"}}
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
                                style={{
                                  marginTop: "30px",
                                  marginLeft: "20px",
                                }}
                                className={"cancelBtn"}
                                onClick={cancelWardNumber}
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
                          id={"municipaldistrict"}
                          name={"Area"}
                          placeholder={" Select Area"}
                         
                          options={areaselect}
                        />
                      </CCol>
                      
                    
                    </CRow>
                  </div>
                  <CRow style={{ marginTop: "30px",marginLeft:"650px" }}>
                    <CCol md="10">
                      <CCol
                        md="5"
                        style={{
                          marginLeft: "-200px",
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
                          onClick={canceltownchange}
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
                          
                        >
                          Save
                        </CButton>{" "}
                      </CCol>
                    </CCol>
                  </CRow>
                  <CRow>
                                <CInput
                                  type={"checkbox"}
                                  style={{
                                    width: "15px",
                                    height: "15px",
                                    marginLeft: "78px",
                                    marginBottom: "10px",
                                    marginTop:"180px"
                                  }}
                                />
                                <CCol style={{ fontSize: "1.15rem" }} md="12">
                                </CCol>
                              </CRow>
                  <CRow style={{ padding: "4%", marginTop: "-17%" }}>
                    <CDataTable
                      items={userData}
                      fields={fields1}
                      columnFilter
                      tableFilter
                      tableLabel={"List of Streets"}
                      itemsPerPageSelect
                      itemsPerPage={5}
                      hover
                      checked
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
                </div>
              )}
            </CCard>
          </div>
        )}
      </div>
      </div>
      </div>
    );
  };

export default TownPanchayat;
