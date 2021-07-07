import {
  CButton,
  CCard,
  CCol,
  CInput,
  CLabel,
  CRow,
  CLink,
} from "@coreui/react";
import "./PartyPosting.css";
import React, { useState } from "react";
import CDataTable from "../../CoreComponents/table/CDataTable";
import { saveCreateCorporation } from "../../../services/ApiService";
import Select, { components } from "react-select";
import { toast } from "react-toastify";
import { Dropdown, Menu } from "antd";
import 'antd/dist/antd.css';
import { CSVLink } from 'react-csv';
import * as XLSX from "xlsx";
import SheetJSFT from "../../../Tools/excelupload/SheetJSFT"
import { make_cols } from "../../../Tools/excelupload/MakeColumn"

const PartyPosting = () => {
  const [selected1, setSelected1] = useState([]);
  const [selected2, setSelected2] = useState([]);
  const [collected, setCollected] = useState([]);
  const [villageHide, setVillageHide] =useState({districtpanchayat:true,panchayatunion:false})
  const [location, setLocation] = useState({
    state: "",
    district: "",
    city: "",
    ward: "",
    area: "",
    street: "",
    pincode: "",
  });
  // const [mobilenumber, setMobileNumber] = useState("");
  // const [ setOtpHide] = useState(false);
  const [locations, setLocations] = useState({
    state: "",
    district: "",
    city: "",
    ward: "",
    area: "",
    street: "",
    pincode: "",
  });
  const [setMunicipalList] = useState(true);
  const [ setmunicipalCreate] = useState(false);
  // const [ setMunicipalListadd] = useState(true);
  // const [ setmunicipalCreateadd] = useState(false);
  const [municipalName] = useState("");
  const [departmentList, setDepartmentList] = useState(true);
  const [departmentCreate, setDepartmentCreate] = useState(false);
  const [designationList, ] = useState(true);
  const [designationCreate, ] = useState(false);
  const [roleList, ] = useState(true);
  const [roleCreate, ] = useState(false);
  const [locationHide, setLocationHide] = useState({
    corporation: true,
    municipalLocation: false,
    districtPanchayat: false,
    townPanchayat: false,
    villagePanchayat: false,
    cityLocation: false,
  });
  const selectTypeofOffice = [{value:"Head Quaters",label:"Head Quaters"},{value:"District Party Office",label:"District Party Office"}]
  const selectDepartment= [
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
    {value:"Physician",label:"Physician"},{value:"Weaver",label:"Weaver"}]
  const selectDesignation =[
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
    {value:"Team Leader",label:"Team Leader"},{value:"Vice President",label:"Vice President"}]
  const selectTypeofParty = [{value:"Youth Wings Association",label:"Youth Wings Association"},{value:"Lawyers Wings Association",label:"Lawyers Wings Association"}]
  const selectLocation = [{value:"Chennai Youth Wings Office ",label:"Chennai Youth Wings Office "},{value:"Chennai Lawyers Wings Office ",label:"Chennai Lawyers Wings Office"}]
  const selectRole  = [
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
    {value:"General",label:"General"},{value:"General",label:"General"}]
  const selectAdministartive =[{value:"Head Quaters Chennai Physician Under Secretary General ",label:"Head Quaters Chennai Physician Under Secretary General"},]
  const selectFunctional =[{value:"Head Quaters Chennai Physician  Secretary General ",label:"Head Quaters Chennai Physician  Secretary General"},]
  const userDataAdministrating = [
    {
        SNo: "1",
        Name: "Volunteer Team",
        Type: "Head Quaters",
        Department: "Voluntery",
        Designation: "Secretary",
        Role: "General",
        EnteredBy:"Sathish",
        EnteredOn:"01/06/2021"
      },        
  ];

  const userDataFunctional = [
    {
        SNo: "1",
        Name: "Layers Team",
        Type: "Head Quaters",
        Department: "Layers",
        Designation: "Under Secretary",
        Role: " General",
        EnteredBy:"Sathish",
        EnteredOn:"01/06/2021"
      },
      {
        SNo: "2",
        Name: "Lawyers Team",
        Type: "Head Quaters",
        Department: "Lawyers",
        Designation: "Secretary",
        Role: "General",
        EnteredBy:"Sathish",
        EnteredOn:"01/06/2021"
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
    // { key: "State", label: "State", _style: { width: "10%" } },
    // { key: "District", label: "District", _style: { width: "10%" } },
    // { key: "Area", label: "Ward", _style: { width: "10%" } },
    { key: "Name", label: "Name of Office", _style: { width: "10%" } },
    { key: "Type", label: "Type of Office", _style: { width: "10%" } },
    { key: "Department", label: "Department", _style: { width: "10%" } },
    { key: "Designation", label: "Designation", _style: { width: "10%" } },
    { key: "Role", label: "Role", _style: { width: "10%" } },
    { key: "EnteredBy", label: "Entered By", _style: { width: "10%" } },
    { key: "EnteredOn", label: "Entered On", _style: { width: "10%" } },
    // { key: "male", label: "Male", _style: { width: "10%" } },
    // { key: "female", label: "Female", _style: { width: "10%" } },
    {
        key: "show_details",
      label: "Action",
      _style: { width: "10%" },
      sorter: false,
      filter: false,
    },
  ];
  const fieldsPostings = [
    {
        key: "SNo",
      label: "S.NO",
      _style: { width: "3%" },
      sorter: false,
      filter: false,
    },

    { key: "Name", label: "Name of Office", _style: { width: "10%" } },
    
    { key: "Department", label: "Department", _style: { width: "10%" } },
    { key: "Designation", label: "Designation", _style: { width: "10%" } },
    { key: "Role", label: "Role", _style: { width: "10%" } },
    { key: "EnteredBy", label: "Entered By", _style: { width: "10%" } },
    { key: "EnteredOn", label: "Entered On", _style: { width: "10%" } },
    // { key: "male", label: "Male", _style: { width: "10%" } },
    // { key: "female", label: "Female", _style: { width: "10%" } },
    {
        key: "show_details",
      label: "Action",
      _style: { width: "10%" },
      sorter: false,
      filter: false,
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

    
    { key: "Department", label: "Department", _style: { width: "10%" } },
    {
      key: "show_details1",
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

    
    { key: "Designation", label: "Designation", _style: { width: "10%" } },
    {
      key: "show_details1",
    label: "Action",
    _style: { width: "10%" },
    sorter: false,
    filter: false,
  },
  ];
  const userDataPostings = [
    {
      SNo: "1",
      Name: "Volunteer Team",
      Department: "Voluntery",
      Designation: "Secretary",
      Role: "General",
      EnteredBy:"Sathish",
      EnteredOn:"01/06/2021"
    },
    {
        SNo: "2",
        Name: "Lawyers Team",
        Type: "Head Quaters",
        Department: "Lawyers",
        Designation: "Secretary",
        Role: "General",
        EnteredBy:"Sathish",
        EnteredOn:"01/06/2021"
      },
  ];
  const [passing, setPassing] = useState("");
  const [error, ] = useState("");
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

 
  const changeHandler = (e) => {
    setLocation({...location,[e.target.name]:e.target.value});
  };
  // const otpChangeHandle = (e) => {
  //   setMobileNumber(e.target.value);
  //   if (mobilenumber.length > 8) {
  //     setOtpHide(true);
  //   } else {
  //     setError("enter valid data");
  //   }
  // };
  const addDepartment = async () => {
    await setDepartmentList(false);
    await setDepartmentCreate(true);
  };
  // const addDesignation = async () => {
  //   await setDesignationList(false);
  //   await setDesignationCreate(true);
  // };
  // const addRole = async () => {
  //   await setRoleList(false);
  //   await setRoleCreate(true);
  // };
  const editState = async () => {
    await setMunicipalList(false);
    await setmunicipalCreate(true);
    // formik.values.StateName = stateName.stateName;
    // formik.values.Abbreviation2 = stateName.abbreviation;
    // formik.values.Code2 = stateName.code;
    // setPassing(stateName._id);
    // getState();
    // getAllAreas();
  };
  const CancelState = async () => {
    setPassing("");
    await setMunicipalList(true);
    await setmunicipalCreate(false);
  };
  // const enableCreateadd = async () => {
  //   await setMunicipalListadd(false);
  //   await setmunicipalCreateadd(true);
  // };

  // const editStateadd = async () => {
  //   await setMunicipalListadd(false);
  //   await setmunicipalCreateadd(true);
  //   // formik.values.StateName = stateName.stateName;
  //   // formik.values.Abbreviation2 = stateName.abbreviation;
  //   // formik.values.Code2 = stateName.code;
  //   // setPassing(stateName._id);
  //   // getState();
  //   // getAllAreas();
  // };
  // const CancelStateadd = async () => {
  //   setPassing("");
  //   await setMunicipalListadd(true);
  //   await setmunicipalCreateadd(false);
  // };

  const [hideMappingMunicipal, setHideMappingmunicipal] = useState(true);
  const [hideCorporation, setHideCorporation] = useState(false);
  const changeMunicipalCorporation = () => {
    setHideMappingmunicipal(false);
    setHideCorporation(true);
  };
  const cancelchange = () => {
    setHideMappingmunicipal(true);
    setHideCorporation(false);
  };
  const [typeofOfficess, setTypeofOfficess] =useState("")
  const menus = (details) => {
    return(
      <Menu>
        <Menu.Item>
        <a href>Edit</a>
      </Menu.Item>
      <Menu.Item>
        <a href>Delete</a>
      </Menu.Item>
    </Menu>
    )
  }
  const [menu, setMenu] = useState({
    // style: "menu2",
    menuStatus: "open",
    // style3: "menu2",
  });
  // const handleClick = () => {
  
  //   switch (menu.menuStatus) {
  //     case "open":
  //       setMenu({
  //         menuStatus: "close",
  //         // style3: "menu2",
  //         style: "menu active1",

  //       });

  //       setTimeout(() => {
  //         setSideBaradd(true);
  //       }, 1000);
  //       setSideBarbulk(false)
  //       break;
  //     case "close":
  //       setMenu({
  //         menuStatus: "open",
  //         // style3: "menu2",
  //         style: "menu active2",

  //       });
  //       setTimeout(() => {
  //         setSideBaradd(false);
  //       }, 1000);
  //       break;
  //   }
  // };
  const bulkhandleClick = () => {
  
    switch (menu.menuStatus) {
      case "open":
        default:
        setMenu({
          menuStatus: "close",
          // style3: "menu2",

          style1: "menu active1",

        });
        setSideBarbulk(true);  
        setSideBarbulk(false);

        break;
      case "close":
        setMenu({
          menuStatus: "open",
          // style3: "menu2",
          style1: "menu active2",

        });
        setTimeout(() => {

          setSideBarbulk(false);
        }, 1000);
        break;
    }
  };
  const SelectMenuButtondepartment = (props) => {
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
            onClick={handleClickdepartment}
            style={{ marginLeft: "200px" }}
          >
            Add{" "}
          </CLink>
          <CLink
            className={"saveBtn"}
            onClick={bulkhandleClickdepartment}
            style={{ marginLeft: "50px" }}
          >
            Bulk Upload{" "}
          </CLink>
        </div>
      </components.MenuList>
    );
  };
  const handleClickdepartment = () => {
  
    switch (menu.menuStatus) {
      case "open":
        default:
        setMenu({
          menuStatus: "close",
          // style3: "menu2",
          style: "menu active1",

        });

        setTimeout(() => {
          setSideBaradddep(true);
        }, 1000);
        setSideBarbulkdep(false)
        setSideBarbulkdes(false)
        setSideBarbulkrole(false)
        setSideBaradddes(false)
        setSideBaraddrole(false)
        break;
      case "close":
        setMenu({
          menuStatus: "open",
          // style3: "menu2",
          style: "menu active2",

        });
        setTimeout(() => {
          setSideBaradddep(false);
        }, 1000);
        break;
    }
  };
  const bulkhandleClickdepartment = () => {
  
    switch (menu.menuStatus) {
      case "open":
        default:
        setMenu({
          menuStatus: "close",
          // style3: "menu2",

          style1: "menu active1",

        });
        setSideBarbulkdep(true);  
        setSideBarbulkdes(false);
       
        break;
      case "close":
        setMenu({
          menuStatus: "open",
          // style3: "menu2",
          style1: "menu active2",

        });
        setTimeout(() => {

          setSideBarbulkdep(false);
        }, 1000);
        break;
    }
  };
  const SelectMenuButtondesignation = (props) => {
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
            onClick={handleClickdesignation}
            style={{ marginLeft: "200px" }}
          >
            Add{" "}
          </CLink>
          <CLink
            className={"saveBtn"}
            onClick={bulkhandleClickdesignation}
            style={{ marginLeft: "50px" }}
          >
            Bulk Upload{" "}
          </CLink>
        </div>
      </components.MenuList>
    );
  };
  const handleClickdesignation = () => {
  
    switch (menu.menuStatus) {
      case "open":
        default:
        setMenu({
          menuStatus: "close",
          // style3: "menu2",
          style: "menu active1",

        });

        setTimeout(() => {
          setSideBaradddes(true);
        }, 1000);
        setSideBarbulkdep(false)
        setSideBarbulkdes(false)
        setSideBarbulkrole(false)
        setSideBaradddep(false)
        setSideBaraddrole(false)
        break;
      case "close":
        setMenu({
          menuStatus: "open",
          // style3: "menu2",
          style: "menu active2",

        });
        setTimeout(() => {
          setSideBaradddes(false);
        }, 1000);
        break;
    }
  };
  const bulkhandleClickdesignation = () => {
  
    switch (menu.menuStatus) {
      case "open":
        default:
        setMenu({
          menuStatus: "close",
          // style3: "menu2",

          style1: "menu active1",

        });
        setSideBarbulkdes(true);  
        setSideBarbulkdep(false);

        break;
      case "close":
        setMenu({
          menuStatus: "open",
          // style3: "menu2",
          style1: "menu active2",

        });
        setTimeout(() => {

          setSideBarbulkdes(false);
        }, 1000);
        break;
    }
  };
  const SelectMenuButtonrole = (props) => {
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
            onClick={handleClickrole}
            style={{ marginLeft: "200px" }}
          >
            Add{" "}
          </CLink>
          <CLink
            className={"saveBtn"}
            onClick={bulkhandleClickrole}
            style={{ marginLeft: "50px" }}
          >
            Bulk Upload{" "}
          </CLink>
        </div>
      </components.MenuList>
    );
  };
  const handleClickrole = () => {
  
    switch (menu.menuStatus) {
      case "open":
        default:
        setMenu({
          menuStatus: "close",
          // style3: "menu2",
          style: "menu active1",

        });

        setTimeout(() => {
          setSideBaraddrole(true);
        }, 1000);
        setSideBarbulkdep(false)
        setSideBarbulkdes(false)
        setSideBarbulkrole(false)
        setSideBaradddep(false)
        setSideBaradddes(false)
        break;
      case "close":
        setMenu({
          menuStatus: "open",
          // style3: "menu2",
          style: "menu active2",

        });
        setTimeout(() => {
          setSideBaraddrole(false);
        }, 1000);
        break;
    }
  };
  const bulkhandleClickrole = () => {
  
    switch (menu.menuStatus) {
      case "open":
        default:
        setMenu({
          menuStatus: "close",
          // style3: "menu2",

          style1: "menu active1",

        });
        setSideBarbulkrole(true);  
        setSideBarbulkdes(false);

        break;
      case "close":
        setMenu({
          menuStatus: "open",
          // style3: "menu2",
          style1: "menu active2",

        });
        setTimeout(() => {

          setSideBarbulkrole(false);
        }, 1000);
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
    ['firstname', 'lastname', 'email'],
    ['John', 'Doe', 'john.doe@xyz.com'],
    ['Jane', 'Doe', 'jane.doe@xyz.com']
  ];

  // const [sideBaradd, setSideBaradd] = useState(false)
  const [sideBaradddep, setSideBaradddep] = useState(false)
  const [sideBaradddes, setSideBaradddes] = useState(false)
  const [sideBaraddrole, setSideBaraddrole] = useState(false)


  const [, setSideBarbulk] = useState(false)
  const [sideBarbulkdep, setSideBarbulkdep] = useState(false)
  const [sideBarbulkdes, setSideBarbulkdes] = useState(false)
  const [sideBarbulkrole, setSideBarbulkrole] = useState(false)
  
  const changeDepartment = (e)=>{
    setCollected(e)
    setVillageHide({...villageHide, districtpanchayat:true,panchayatunion:false,role:false})
  }
  const changePanchayatUnion = (e)=>{
    setSelected1(e)
    setVillageHide({...villageHide, districtpanchayat:false,panchayatunion:true,role:false})
  }
  const changeRoleName = (e)=>{
    setSelected2(e)
    setVillageHide({...villageHide, districtpanchayat:false,panchayatunion:false,role:true})
  }
  const [inputList, setInputList] = useState([{ name: "", abbreviation: "", code: "" }]);
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };
  const handleAddClick = (e) => {
    e.preventDefault()
    setInputList([...inputList, { name: "", abbreviation: "", code: "" }]);
  }
  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1)
    setInputList(list);
  }
  return (
    <div className={menu.style3}>
    {sideBaradddep && (
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
                Adding Department Name{" "}
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
                <CLabel className={"label-name-1"} 
                >
                  Department
                  <span className={"text-danger"}> *</span>
                </CLabel>

                <CInput
                  id={"TownName"}
                  name={"Townname"}
                  placeholder="Enter Department Name"
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
                  id={"Townabrreviation"}
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
                  id={"Towncode"}
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
              onClick={addDepartment}
              className={"saveBtn"}

            > Save</CButton>
            <CButton
              shape={"pill"}
              id={"Towncancel"}
              style={{ marginTop: "-59px", marginLeft: "90px" }}
              className={"cancelBtn"}
              onClick={handleClickdepartment}
            >
              CANCEL
            </CButton>
            {error !== "" ? <p>{error}</p> : null}
          </CCol>
        </CRow>


        <CButton         
          style={{ position: "absolute", top: "15px", right: "15px", backgroundColor: "green", border: "1px solid green" }}
          className={"cancelBtn"}
          onClick={() => {
            handleClickdepartment();
          }}
        >
          Back
        </CButton>
      </div>

    )}
      <div className={menu.style3}>
    {sideBaradddes && (
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
                Adding Designation Name{" "}
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
                  Department:
                </CLabel>
                <span style={{ marginTop: "13px", marginLeft: "5px", }}>Physician</span>
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
                <CLabel className={"label-name-1"} 
                >
                  Designation
                  <span className={"text-danger"}> *</span>
                </CLabel>

                <CInput
                  id={"TownName"}
                  name={"Townname"}
                  placeholder="Enter Designation Name"
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
                  id={"Townabrreviation"}
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
                  id={"Towncode"}
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
              onClick={addDepartment}
              className={"saveBtn"}

            > Save</CButton>
            <CButton
              shape={"pill"}
              id={"Towncancel"}
              style={{ marginTop: "-59px", marginLeft: "90px" }}
              className={"cancelBtn"}
              onClick={handleClickdepartment}
            >
              CANCEL
            </CButton>
            {error !== "" ? <p>{error}</p> : null}
          </CCol>
        </CRow>


        <CButton
          style={{ position: "absolute", top: "15px", right: "15px", backgroundColor: "green", border: "1px solid green" }}
          className={"cancelBtn"}
          onClick={() => {
            handleClickdepartment();
          }}
        >
          Back
        </CButton>
      </div>

    )}
      <div className={menu.style3}>
    {sideBaraddrole && (
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
                Adding Role Name{" "}
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
                  Department:
                </CLabel>
                <span style={{ marginTop: "13px", marginLeft: "5px", }}>Physician</span>
              </CCol>
              <CCol>
                <CLabel
                  style={{ position: "relative", marginLeft: "5px", fontSize: "23px", fontWeight: "650", cursor: "pointer" }}
                  className={"form-labels-6"}
                >
                  Designation:
                </CLabel>
                <span style={{ marginTop: "13px", marginLeft: "5px", }}>Team Leader</span>
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
                <CLabel className={"label-name-1"} 
                >
                  Role Name
                  <span className={"text-danger"}> *</span>
                </CLabel>

                <CInput
                  id={"TownName"}
                  name={"Townname"}
                  placeholder="Enter Role Name"
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
                  id={"Townabrreviation"}
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
                  id={"Towncode"}
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
              onClick={addDepartment}
              className={"saveBtn"}

            > Save</CButton>
            <CButton
              shape={"pill"}
              id={"Towncancel"}
              style={{ marginTop: "-59px", marginLeft: "90px" }}
              className={"cancelBtn"}
              onClick={handleClickdepartment}
            >
              CANCEL
            </CButton>
            {error !== "" ? <p>{error}</p> : null}
          </CCol>
        </CRow>


        <CButton
          style={{ position: "absolute", top: "15px", right: "15px", backgroundColor: "green", border: "1px solid green" }}
          className={"cancelBtn"}
          onClick={() => {
            handleClickdepartment();
          }}
        >
          Back
        </CButton>
      </div>

    )}
   {sideBarbulkdep && (
          <div className={menu.style1} style={{ marginLeft: "-108px" , overflow:"auto" }}>

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
                    Adding Department Name{" "}
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
                  onChange={handleChange}
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
                    style={{ position: "absolute", top: "-100px", right: "-660px", marginLeft: "30px", backgroundColor: "green", border: "1px solid green" }}
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
                    tableLabel={"List of Department Name"}
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
                                  id={"TownconstimemDelete"}
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
                      onClick={addDepartment}
                      className={"saveBtn"}

                    > Save</CButton>
                    <CButton
                      shape={"pill"}
                      id={"Towncancel"}
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
{sideBarbulkdes && (
          <div className={menu.style1} style={{ marginLeft: "-108px", overflow:"auto" }}>

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
                    Adding Designation Name {" "}
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
                  Department:
                </CLabel>
                <span style={{ marginTop: "13px", marginLeft: "5px", }}>Physician</span>
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
                  onChange={handleChange}
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
                    style={{ position: "absolute",  right: "-660px", marginLeft: "30px", top: "-160px", backgroundColor: "green", border: "1px solid green" }}
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
                    tableLabel={"List of Designation Name "}
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
                        marginTop: "5px",

                      }}
                      onClick={addDepartment}
                      className={"saveBtn"}

                    > Save</CButton>
                    <CButton
                      shape={"pill"}
                      id={"Towncancel"}
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
{sideBarbulkrole && (
          <div className={menu.style1} style={{ marginLeft: "-108px", overflow:"auto" }}>

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
                    Adding Role Name {" "}
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
                  Department:
                </CLabel>
                <span style={{ marginTop: "13px", marginLeft: "5px", }}>Physician</span>
              </CCol>
              <CCol>
                <CLabel
                  style={{ position: "relative", marginLeft: "5px", fontSize: "23px", fontWeight: "650", cursor: "pointer" }}
                  className={"form-labels-6"}
                >
                  Designation:
                </CLabel>
                <span style={{ marginTop: "13px", marginLeft: "5px", }}>Team Leader</span>
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
                  onChange={handleChange}
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
                    style={{ position: "absolute",  right: "-660px", marginLeft: "30px", top: "-160px", backgroundColor: "green", border: "1px solid green" }}
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
                    tableLabel={"List of Role Name "}
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
                        marginTop: "5px",

                      }}
                      onClick={addDepartment}
                      className={"saveBtn"}

                    > Save</CButton>
                    <CButton
                      shape={"pill"}
                      id={"Towncancel"}
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
              <span className={"header-label"}> Viewed Party Posting</span>
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
                          id={"PartyPosting"}
                          className={"saveBtn"}
                          onClick={changeMunicipalCorporation}
                        >
                          Add Party Posting
                        </CButton>{" "}
                      </CCol>
                    </CCol>
                  </CRow>
                  <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                    <CCol className={"column-align"} md="4">
                      <CLabel className={"label-name-1"}>
                        Type of Office
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <Select
                      
                        id={"PartyPostingtype"}
                        name={"state"}
                        placeholder={"Select Type of Office"}
                        value={locations.district}
                        onChange={(e)=>setLocations({...locations, [e.target.value]:e.target.value})}
                      />
                    </CCol>
                    <CCol className={"column-align"} md="4">
                      <CLabel className={"label-name-1"}>
                        Type of Party / Party Wings Office
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <Select
                      
                        id={"PartyPostingwingsoffice"}
                        name={"city"}
                        placeholder={" Select Type of Party "}
                        value={locations.city}
                        onChange={changeHandler}
                      />
                    </CCol>
                  </CRow>

                  <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                    <CCol className={"column-align"} md="4">
                      <CLabel className={"label-name-1"}>
                        Name of the Office Location
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <Select
                      
                        id={"PartyPostinglocation"}
                        name={"city"}
                        placeholder={" Select Office Location"}
                        value={locations.city}
                        onChange={changeHandler}
                      />
                    </CCol>
                
                  </CRow>
                </div>
               
                <CRow style={{ padding: "4%", marginTop: "-1.5%" ,marginLeft:"-40px"}}>
                  <CDataTable
                    items={userDataPostings}
                    fields={fieldsPostings}
                    columnFilter
                    tableFilter
                    tableLabel={"List of Postings"}
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
                      details: (item, index) => {},
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
              <span className={"header-label"}> Adding Party Posting</span>
            </div>
            {locationHide.corporation && (
              <div>
                <div style={{ marginLeft: "-26px" }}>
                  

                  <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                    <CCol className={"column-align"} md="4">
                      <CLabel className={"label-name-1"}>
                        Type of Office
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <Select
                        
                        id={"PartyPostingtypeofoffice"}
                        
                        placeholder={"Select Type of Office"}
                        value={typeofOfficess}
                        onChange={(e)=>setTypeofOfficess(e)}
                        options={selectTypeofOffice}
                      />
                    </CCol>
                    {departmentList && (
                    <React.Fragment>
                      <CCol className={"column-align"} md={4} lg={4}>
                        <CLabel className={"label-name-1"}>
                        Department Name
                          <span className={"text-danger"}> *</span>
                        </CLabel>
                        <Select
                        
                         name={"municipalDepartment"}
                        placeholder={"Select Department"}
                        value={collected}
                        onChange={changeDepartment}
                        components={{ MenuList: SelectMenuButtondepartment }}
                        options={selectDepartment}
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

                                    id={"Townedit"}
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

                                      id={"Towndelete"}
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
                              id={"PartyPostingedit"}
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
                  {departmentCreate && (
                    <React.Fragment>
                      <CRow className={"column-align3"} sm={12} md={12} lg={12}>

                     
                      <CCol  md="3">
                        <CLabel className={"label-name-1"}>
                         Department Name
                          <span className={"text-danger"}> *</span>
                        </CLabel>

                        <CInput
                          
                          id={"Department"}
                          name={"municipalname"}
                          
                          placeholder=" Department Name"
                          maxlength="60"
                          size="60"
                        />
                       
                      </CCol>

                      <CCol  md="3">
                        <CLabel className={"label-name-1"}>
                          Abbreviation
                          <span className={"text-danger"}> *</span>
                        </CLabel>
                        <CInput
                         
                          id={"Departmentabrreviation"}
                          name={"abbreviation"}
                         
                          placeholder="Enter Abbreviation"
                          maxlength="5"
                          size="5"
                        />
                       
                      </CCol>
                      <CCol  md="3">
                        <CLabel className={"label-name-1"}>
                          Code
                          <span className={"text-danger"}> *</span>
                        </CLabel>
                        <CInput
                          id={"Departmentlcode"}
                         
                          name={"code"}
                          
                          style={{ textTransform: "uppercase" }}
                          placeholder="Enter Code"
                          maxlength="5"
                          size="5"
                        />
                       
                      </CCol>
                      <CCol  md="3">
                        <CButton
                          shape={"pill"}
                          id={"Departmentsave"}
                          style={{ marginTop: "30px" }}
                          className={"saveBtn"}
                         
                        >
                          {passing !== "" ? "UPDATE" : "SAVE"}
                        </CButton>
                        <CButton
                          shape={"pill"}
                          id={"Departmentcancel"}
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
                  <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                    <CCol className={"column-align"} md="4" >
                      <CLabel className={"label-name-1"}>
                      Type of Party / Party Wings Office
                      
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <Select
                     
                       
                        id={"partyPostingTypeofWings"}
                        name={"partyPostingTypeofWings"}
                        placeholder={" Select Office Location"}
                        value={locations.city}
                        onChange={(e)=>setLocations(e)}
                        options={selectTypeofParty}
                      />
                    </CCol>
                    {designationList && (
                    <React.Fragment>
                      <CCol className={"column-align"} md={4} lg={4}>
                        <CLabel className={"label-name-1"}>
                        Designation Name
                          <span className={"text-danger"}> *</span>
                        </CLabel>
                        <Select
                     
                          placeholder="Select Designation "
                          id={"partypostingDesignation"}
                          type={"text"}                          
                          value={selected1}
                          onChange={changePanchayatUnion}
                          components={{ MenuList: SelectMenuButtondesignation }}                          
                          options={selectDesignation}                         
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
                              id={"partyPostingedit"}
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
                  {designationCreate && (
                    <React.Fragment>
                      <CRow className={"column-align3"} sm={12} md={12} lg={12}>

                     
                      <CCol  md="3">
                        <CLabel className={"label-name-1"}>
                         Designation Name
                          <span className={"text-danger"}> *</span>
                        </CLabel>

                        <CInput
                         
                          id={"DesignationlName"}
                          name={"Designationname"}
                         
                          placeholder=" Department Name"
                          maxlength="60"
                          size="60"
                        />
                       
                      </CCol>

                      <CCol  md="3">
                        <CLabel className={"label-name-1"}>
                          Abbreviation
                          <span className={"text-danger"}> *</span>
                        </CLabel>
                        <CInput
                         
                          id={"Designationabrreviation"}
                          name={"abbreviation"}
                         
                          placeholder="Enter Abbreviation"
                          maxlength="5"
                          size="5"
                        />
                       
                      </CCol>
                      <CCol  md="3">
                        <CLabel className={"label-name-1"}>
                          Code
                          <span className={"text-danger"}> *</span>
                        </CLabel>
                        <CInput
                          id={"Designationcode"}
                         
                          name={"code"}
                         
                          style={{ textTransform: "uppercase" }}
                          placeholder="Enter Code"
                          maxlength="5"
                          size="5"
                        />
                       
                      </CCol>
                      <CCol  md="3">
                        <CButton
                          shape={"pill"}
                          id={"Designationsave"}
                          style={{ marginTop: "30px" }}
                          className={"saveBtn"}
                         
                        >
                          {passing !== "" ? "UPDATE" : "SAVE"}
                        </CButton>
                        <CButton
                          shape={"pill"}
                          id={"Designationcancel"}
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
                  <CRow className={"row-alignment"}>
                  <CCol className={"column-align"} md="4">
                      <CLabel className={"label-name-1"}>
                      Name of the Office Location
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <Select
                        
                        id={"Designationstatename"}
                        name={"partyPostingOfficeLocation"}
                        placeholder={"Select Office Location"}
                        value={locations.district}
                        onChange={(e)=>setLocations(e)}
                        options={selectLocation}
                      />
                    </CCol>
                  {roleList && (
                    <React.Fragment>
                      <CCol className={"column-align"} md={4} lg={4}>
                        <CLabel className={"label-name-1"}>
                        Role Name
                          <span className={"text-danger"}> *</span>
                        </CLabel>
                        <Select
                       value={selected2}
                       onChange={changeRoleName}
                       components={{ MenuList: SelectMenuButtonrole }}
                          placeholder="Select Role Name"
                          id={"Rolecorporation"}
                          name={"partyPostingrole   "}
                          type={"text"}
                          options={selectRole}
                        />
                         {villageHide.role && selected2.length !== 0 ? (
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
                              id={"RoleEdit"}
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
                  {roleCreate && (
                    <React.Fragment>
                      <CRow className={"column-align3"} sm={12} md={12} lg={12}>

                     
                      <CCol  md="3">
                        <CLabel className={"label-name-1"}>
                        Role Name
                          <span className={"text-danger"}> *</span>
                        </CLabel>

                        <CInput
                          
                          id={"Role"}
                          name={"Rolename"}
                          
                          placeholder="Role Name"
                          maxlength="60"
                          size="60"
                        />
                       
                      </CCol>

                      <CCol  md="3">
                        <CLabel className={"label-name-1"}>
                          Abbreviation
                          <span className={"text-danger"}> *</span>
                        </CLabel>
                        <CInput
                          
                          id={"Roleabrreviation"}
                          name={"abbreviation"}
                         
                          placeholder="Enter Abbreviation"
                          maxlength="5"
                          size="5"
                        />
                       
                      </CCol>
                      <CCol  md="3">
                        <CLabel className={"label-name-1"}>
                          Code
                          <span className={"text-danger"}> *</span>
                        </CLabel>
                        <CInput
                          id={"Rolecode"}
                         
                          name={"code"}
                          
                          style={{ textTransform: "uppercase" }}
                          placeholder="Enter Code"
                          maxlength="5"
                          size="5"
                        />
                       
                      </CCol>
                      <CCol  md="3">
                        <CButton
                          shape={"pill"}
                          id={"Rolesave"}
                          style={{ marginTop: "30px" }}
                          className={"saveBtn"}
                          
                        >
                          {passing !== "" ? "UPDATE" : "SAVE"}
                        </CButton>
                        <CButton
                          shape={"pill"}
                          id={"Rolecancel"}
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

              
            
                </div>
                <CRow style={{ marginTop: "95px" , marginLeft:"350px"}}>
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
                        id={"RolecancelAbbreviationConfigureCode"}
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
                        id={"RolesaveAbbreviationConfigureCode"}
                        className={"saveBtn"}
                        onClick={saveCorporation}
                      >
                        Save
                      </CButton>{" "}
                    </CCol>
                  </CCol>
                </CRow>
                <CCol>
                    <CLabel
                      style={{
                        fontSize: "20PX",
                        fontFamily: "Open Sans",
                        fontWeight: "700",
                        marginLeft: "30px",
                        marginTop: "-10px",
                      }}
                    >
                    Administration Reporting 
                    </CLabel>
                  </CCol>
                  <CRow className={"row-alignment"} style={{marginLeft:"-40px"}}>
                  <CCol className={"column-align"} md="6">
                      <CLabel className={"label-name-1"}>
                      Hierarchy Report to
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <Select
                        className={"input-align"}
                        id={"Administrationreportingtoname"}
                        name={"state"}
                        placeholder={"Select Hierarchy Report to"}
                        value={locations.district}
                        onChange={(e) => setLocations(e)}
                        options={selectAdministartive}
                      />
                    </CCol>
                    <CCol md="10">
                    <CCol
                      md="5"
                      style={{
                        marginLeft: "400px",
                        float: "right",
                        marginTop: "-35px",
                        position: "absolute",
                      }}
                    >
                      
                      <CButton
                        style={{
                          float: "right",
                          marginRight: "15px",
                        }}
                        id={"AdministrationsaveAbbreviationConfigureCode"}
                        className={"saveBtn"}
                        onClick={saveCorporation}
                      >
                        Add to List
                      </CButton>{" "}
                    </CCol>
                  </CCol>
                </CRow>
             
                <CRow style={{ padding: "4%", marginTop: "-2.5%",marginLeft:"-10px" }}>
                  <CDataTable
                    items={userDataAdministrating}
                    fields={fields}
                    columnFilter
                    tableFilter
                    tableLabel={" Administrating Reporting "}
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
                                <i
                                  onClick={() => {
                                   
                                  }}
                                ></i>
                               
                              <i
                                id={"AdministrationDelete"}
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
                <CCol>
                    <CLabel
                      style={{
                        fontSize: "20PX",
                        fontFamily: "Open Sans",
                        fontWeight: "700",
                        marginLeft: "35px",
                        marginTop: "-90px",
                      }}
                    >
                   Functional Reporting 
                    </CLabel>
                  </CCol>
                  <CRow className={"row-alignment"} style={{marginLeft:"-36px"}}>
                  <CCol className={"column-align"} md="6">
                      <CLabel className={"label-name-1"}>
                      Hierarchy Report to
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <Select
                        className={"input-align"}
                        id={"Administrationstatename"}
                        name={"state"}
                        placeholder={"Select Hierarchy Report"}
                        value={locations.district}
                        onChange={(e) => setLocations(e)}
                        options={selectFunctional}
                      />
                    </CCol>
                    <CCol md="10">
                    <CCol
                      md="5"
                      style={{
                        marginLeft: "400px",
                        float: "right",
                        marginTop: "-35px",
                        position: "absolute",
                      }}
                    >
                      
                      <CButton
                        style={{
                          float: "right",
                          marginRight: "15px",
                        }}
                        id={"partypostingaddtolist"}
                        className={"saveBtn"}
                        onClick={saveCorporation}
                      >
                        Add to List
                      </CButton>{" "}
                    </CCol>
                  </CCol>
                </CRow>
             
                <CRow style={{ padding: "4%", marginTop: "-3.5%",marginLeft:"-10px" }}>
                  <CDataTable
                    items={userDataFunctional}
                    fields={fields}
                    columnFilter
                    tableFilter
                    tableLabel={"Functional Reporting  "}
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
                              <i
                                id={"partypostingDelete"}
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
    </div>
    </div>
  );
};

export default PartyPosting;