import {
  CButton,
  CCard,
  CCol,
  CInput,
  CLabel,
  CRow,
  CInputRadio,
  CTextarea,
  CContainer,
  CFormGroup,
} from "@coreui/react";
import React, { useState } from "react";
import CDataTable from "../../CoreComponents/table/CDataTable";
import { saveCreateCorporation } from "../../../services/ApiService";
import { toast } from "react-toastify";
import DEFAULT_IMAGE from "../../../assets/img/No-image-icon.png";
import Select from "react-select";
import "./CentralMinister.css";
import { Dropdown, Menu } from "antd";
import "antd/dist/antd.css";
import { Tab, Tabs, TabList } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const CentralMinister = () => {
  // const [location, setLocation] = useState({
  //   state: "",
  //   district: "",
  //   city: "",
  //   ward: "",
  //   area: "",
  //   street: "",
  //   pincode: "",
  // });
  // const [mobilenumber, setMobileNumber] = useState("");
  // const [, setOtpHide] = useState(false);
  const [locations, setLocations] = useState({
    state: "",
    district: "",
    city: "",
    ward: "",
    area: "",
    street: "",
    pincode: "",
  });
  const [files] = useState("");
  const [selected] = useState("");
  const [ministryList, setMinistryList] = useState(true);
  const [ministryCreate, setMinistryCreate] = useState(false);
  // const [ministryListadd, setMinistryListadd] = useState(true);
  // const [ministryCreateadd, setMinistryCreateadd] = useState(false);
  // const [municipalCorporation, setMunicipalCorporation] = useState({});
  const [municipalName] = useState("");
  // const [departmentList, setDepartmentList] = useState(true);
  // const [departmentCreate, setDepartmentCreate] = useState(false);
  // const [designationList, setDesignationList] = useState(true);
  // const [designationCreate, setDesignationCreate] = useState(false);
  // const [roleList, setRoleList] = useState(true);
  // const [roleCreate, setRoleCreate] = useState(false);
  const [locationHide, setLocationHide] = useState({
    corporation: true,
    municipalLocation: false,
    districtPanchayat: false,
    townPanchayat: false,
    villagePanchayat: false,
    cityLocation: false,
  });
  const [typeofOfficess, setTypeofOfficess] = useState("");
  // const [, setPI] = useState("");
  // const [partypost, setpartypost] = useState(false);
  const [gridone, setGridOne] = useState(false);
  const [gridtwo, setGridTwo] = useState(false);
  const [gridthree, setGridThree] = useState(false);
  const [gridfour, setGridFour] = useState(false);
  const [gridfive, setGridFive] = useState(false);
  const [hideChiefMinister, setHideChiefMinister] = useState(false);
  const [hideDeputyChiefMinister, setHideDeputyChiefMinister] = useState(false);
  const [hideMinister, setHideMinister] = useState(false);

  const changeChiefMinister = () => {
    setHideMinister(false);
    setHideChiefMinister(true);
    setHideDeputyChiefMinister(false);
  };

  const changeDeputyChiefMinister = () => {
    setHideMinister(false);
    setHideChiefMinister(false);
    setHideDeputyChiefMinister(true);
  };

  const changeMinistry = () => {
    setHideMinister(true);
    setHideChiefMinister(false);
    setHideDeputyChiefMinister(false);
  };

  const deputychiefministerShow = () => {
    setGridOne(false);
    setGridTwo(true);
    setGridFive(false);
    setGridThree(false);
    setGridFour(false);
  };
  const chiefministerShow = () => {
    setGridOne(true);
    setGridTwo(false);
    setGridThree(false);
    setGridFive(false);
    setGridFour(false);
  };
  const partyShow = () => {
    setGridOne(false);
    setGridTwo(false);
    setGridThree(false);
    setGridFour(true);
    setGridFive(false);
  };
  const centralMinister = () => {
    setGridOne(false);
    setGridTwo(false);
    setGridThree(false);
    setGridFour(false);
    setGridFive(true);
  };
  const ministryShow = () => {
    setGridOne(false);
    setGridTwo(false);
    setGridFive(false);
    setGridThree(true);
  };
  const [, setFilter] = React.useState(null);
  const fields = [
    {
      key: "SNo",
      label: "S.NO",
      _style: { width: "3%" },
      sorter: false,
      filter: false,
    },

    { key: "town", label: "State", _style: { width: "10%" } },
    { key: "Name", label: "Name of the Member", _style: { width: "20%" } },
    { key: "Ministry", label: "Ministry", _style: { width: "20%" } },

    { key: "from", label: "From Date", _style: { width: "10%" } },
    { key: "to", label: "To Date", _style: { width: "10%" } },
    { key: "Status", label: "Status", _style: { width: "10%" } },

    {
      key: "show_details",
      label: "Action",
      _style: { width: "10%" },
      sorter: false,
      filter: false,
    },
  ];
  const userData1chiefministegrid = [];

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
  const [sideBar1, setSideBar1] = useState(false);
  const [sideBar2, setSideBar2] = useState(false);
  const [sideBar3, setSideBar3] = useState(false);
  const selectTypeofOffice = [
    {
      value: "Arun Kumar",
      label:
        "Kalaiyarasan Lawyer Association Vice President of DMK N0 14 Nazarathpet Kanchipuram",
    },
    { value: "Arun Kumar", label: "Arun Kumar" },
    { value: "Sathish Kumae", label: "Sathish Kumaer" },
    {
      value: "venkatesh",
      label:
        "M Venkatesh ,Transportation Minister, Nsk Nagar,Nadaipathai Street, Wallajabhad, Chennai-85",
    },
  ];
  // const selectDepartment = [
  //   { value: "Physician", label: "Physician" },
  //   { value: "Weaver", label: "Weaver" },
  // ];
  // const selectDesignation = [
  //   { value: "Team Leader", label: "Team Leader" },
  //   { value: "Vice President", label: "Vice President" },
  // ];
  // const selectTypeofParty = [
  //   { value: "Youth Wings Association", label: "Youth Wings Association" },
  //   { value: "Lawyers Wings Association", label: "Lawyers Wings Association" },
  // ];
  // const selectLocation = [
  //   {
  //     value: "Chennai Youth Wings Office ",
  //     label: "Chennai Youth Wings Office ",
  //   },
  //   {
  //     value: "Chennai Lawyers Wings Office ",
  //     label: "Chennai Lawyers Wings Office",
  //   },
  // ];
  // const selectRole = [
  //   { value: "General", label: "General" },
  //   { value: "General", label: "General" },
  // ];
  // const selectAdministartive = [
  //   {
  //     value: "Head Quaters Chennai Physician Under Secretary General ",
  //     label: "Head Quaters Chennai Physician Under Secretary General",
  //   },
  // ];
  // const selectFunctional = [
  //   {
  //     value: "Head Quaters Chennai Physician  Secretary General ",
  //     label: "Head Quaters Chennai Physician  Secretary General",
  //   },
  // ];
  // const saveMunicipalLocation = () => {
  //   setLocationHide({
  //     ...locationHide,
  //     municipalLocation: false,
  //     districtPanchayat: true,
  //   });
  // };

  const enableCreate = async () => {
    await setMinistryList(false);
    await setMinistryCreate(true);
  };

  const stateselect = [{ value: "Tamil Nadu", label: "Tamil Nadu" }];

  const changeHandler = (e) => {
    setLocations({ ...locations, [e.target.name]: e.target.value });
  };
  // const otpChangeHandle = (e) => {
  //   setMobileNumber(e.target.value);
  //   if (mobilenumber.length > 8) {
  //     setOtpHide(true);
  //   } else {
  //     setError("enter valid data");
  //   }
  // };

  const [hideMappingMunicipal, setHideMappingmunicipal] = useState(true);
  const [hideCorporation, setHideCorporation] = useState(false);
  const changeMunicipalCorporation = () => {
    setHideMappingmunicipal(false);
    setHideCorporation(true);
  };
  const changeCancelMunicipalCorporation = () => {
    setHideMappingmunicipal(true);
    setHideCorporation(false);
  };
  // const handleSave = async (file, folder) => {
  //   if (file === undefined) {
  //     let e = "cancelled";
  //     return console.log(e);
  //   }
  //   if (file.size > 1048576) {
  //     return toast.warning("Please choose below 1 MB file");
  //   } else {
  //     const imgUri = URL.createObjectURL(file);
  //     setPI(file);
  //     setFiles(imgUri);
  //   }
  // };

  const handleClick = () => {
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
 
  const handleClick3 = () => {
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
        break;
      case "close":
        setMenu({
          menuStatus: "open",
          style: "menu active2",
        });
        setTimeout(() => {
          setSideBar3(false);
        }, 1000);
        break;
    }
  };
  const handleClick2 = () => {
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
        break;
      case "close":
        setMenu({
          menuStatus: "open",
          style: "menu active2",
        });
        setTimeout(() => {
          setSideBar2(false);
        }, 1000);
        break;
    }
  };
  const CancelState = async () => {
    await setMinistryList(true);
    await setMinistryCreate(false);
  };
  const [menu, setMenu] = useState({
    style: "menu",
    style1: "menu1",
    menuStatus: "open",
    style3: "menu1",
  });
  const [, setSelected] = useState({});
  const selectMinistry = [
    { value: "Transportation Ministry", label: "Transportation Ministry" },
  ];
  function handleSelectFilter(option, checked) {
    if (checked) {
      setFilter(option); // add option to filter array
      // let filterArr = fields.filter(row => row.color == option);
    } else {
      //if unchecked, remove from filterArr and unfilter the table
      let filterArr = fields.filter((row) => row.color !== option);
      setFilter(filterArr);
    }
  }
  const menus = (details) => {
    return (
      <Menu>
        <Menu.Item>
          <a href>Remove</a>
        </Menu.Item>
        <Menu.Item>
          <a
            href
            onClick={() => {
              setSelected(details);
              handleClick2();
            }}
          >
            Update
          </a>
        </Menu.Item>{" "}
        <Menu.Item>
          <a
            href
            onClick={() => {
              setSelected(details);
              handleClick();
            }}
          >
           Member History
          </a>
        </Menu.Item>
        <Menu.Item>
          <a
            href
            onClick={() => {
              setSelected(details);
              handleClick3();
            }}
          >
            Posting History
          </a>
        </Menu.Item>
      </Menu>
    );
  };

  return (
    <div className={menu.style3}>
      {sideBar1 && (
        <div className={menu.style} style={{ overflow: "auto",marginLeft: "-475px" }}>
          <CRow className={""}>
            <CCol md="12" lg="12" sm="12">
              <div>
                <span
                  style={{
                    fontSize: "22px",
                    fontWeight: "700",
                    marginLeft: "20px",
                  }}
                >
                  Member History{" "}
                </span>
              </div>
            </CCol>
          </CRow>
          <CContainer>
              <CRow
                className={"LengthDataw"}
                style={{ marginLeft: "10.5em", marginTop: "20px" }}
                sm={12}
                md={12}
                lg={12}
              >
                <CCol md="6">
                  <CLabel className={"form-labels-9 col-md-5 reAssign-Label"}>
                    Name :{" "}
                  </CLabel>

                  <CLabel
                    className={"reAssign-Detail"}
                    style={{marginLeft:"-5em"}}
                  >
                    {selected.assignedTo
                      ? selected.assignedTo.firstName
                      : "Arun Kumar"}
                  </CLabel>
                </CCol>
                <CCol md="6" style={{ marginLeft: "-200px" }}>
                  <CLabel className={"form-labels-9 col-md-5 reAssign-Label"}>
                    Gender :{" "}
                  </CLabel>

                  <CLabel
                    className={"reAssign-Detail"}
                    style={{ marginLeft: "-3.5em" }}
                  >
                    {selected.assignedTo
                      ? selected.assignedTo.firstName
                      : "Male"}
                  </CLabel>
                </CCol>
                <CCol>
                  <img
                    type="text"
                    alt=""
                    src={files !== "" ? files : DEFAULT_IMAGE}
                    style={{
                      width: "150px",
                      height: "200px",
                      position: "relative",
                      background: "#fff",
                      left: "-260%",
                      top: "-5em",
                    }}
                  />
                </CCol>
              </CRow>
              <CRow
                className={"LengthDataw"}
                style={{ marginLeft: "10.5em", marginTop: "-10em" }}
                sm={12}
                md={12}
                lg={12}
              >
                <CCol md="6">
                  <CLabel className={"form-labels-9 col-md-5 reAssign-Label"}>
                  DOB :{" "}
                  </CLabel>

                  <CLabel
                    className={"reAssign-Detail"}
                    style={{marginLeft:"-5em"}}
                  >
                    {selected.assignedTo
                      ? selected.assignedTo.firstName
                      : "23/07/1998"}
                  </CLabel>
                </CCol>                
              </CRow>
            </CContainer>
        
          <CRow style={{ marginTop: "25px" }}>
            <CCol>
            <Tabs>
    <TabList>
      <Tab  onClick={partyShow}
              >
                Party Posting</Tab>
      <Tab  onClick={chiefministerShow}
              >
                As a MP</Tab>
      <Tab  onClick={deputychiefministerShow}
              >
                As a MLA</Tab>
      <Tab onClick={ministryShow}
              >
                State Minister</Tab>
      <Tab  onClick={centralMinister}
              >
                Central Minister</Tab>
    </TabList>
  </Tabs>                                     
            </CCol>
          </CRow>

          {gridone && (
            <div>
              <CRow>
                <CCol
                  style={{
                    marginLeft: "30px",

                    maxHeight: "290px",
                    minHeight: "290px",
                    marginBottom: "-25px",
                    overflow: "auto",
                    marginTop: "50px",
                  }}
                >
                  <CDataTable
                    items={[
                      {
                        sNo: "1",
                        Corporation: "Kalaiyarasan",
                        Ministry: "Agriculture Minister",
                        from: "29/01/2005",
                        to: "31/02/2010",
                        status: "InActive",
                      },
                    ]}
                    fields={[
                      { key: "sNo", label: "SNo", _style: { width: "1%" } },
                      {
                        key: "Corporation",
                        label: "Name of the MLA",
                        _style: { width: "10%" },
                      },
                      {
                        key: "Ministry",
                        label: "Ministry",
                        _style: { width: "10%" },
                      },
                      {
                        key: "from",
                        label: "From Date",
                        _style: { width: "10%" },
                      },
                      { key: "to", label: "To Date", _style: { width: "10%" } },
                      {
                        key: "status",
                        label: "Status",
                        _style: { width: "10%" },
                      },
                    ]}
                    columnFilter
                    tableFilter
                    tableLabel={"History of MP"}
                    itemsPerPageSelect
                    itemsPerPage={5}
                    hover
                    sorter
                    pagination
                  />
                </CCol>
              </CRow>
            </div>
          )}
          {gridtwo && (
            <div>
              <CRow>
                <CCol
                  style={{
                    marginLeft: "30px",

                    maxHeight: "290px",
                    minHeight: "290px",
                    marginBottom: "-25px",
                    overflow: "auto",
                    marginTop: "50px",
                  }}
                >
                  <CDataTable
                    items={[
                      {
                        sNo: "1",
                        Name: "Kalaiyarasan",
                        Ministry: "Agriculture Minister",
                        from: "29/01/2000",
                        to: "31/02/2005",
                        status: "InActive",
                      },
                    ]}
                    fields={[
                      { key: "sNo", label: "Sl. No", _style: { width: "1%" } },
                      {
                        key: "Name",
                        label: "Name of the MLA",
                        _style: { width: "10%" },
                      },
                      {
                        key: "Ministry",
                        label: "Ministry",
                        _style: { width: "10%" },
                      },
                      {
                        key: "from",
                        label: "From Date",
                        _style: { width: "10%" },
                      },
                      { key: "to", label: "To Date", _style: { width: "10%" } },
                      {
                        key: "status",
                        label: "Status",
                        _style: { width: "10%" },
                      },
                    ]}
                    onSelectFilter={handleSelectFilter}
                    columnFilter
                    tableFilter
                    tableLabel={"History of MLA "}
                    itemsPerPageSelect
                    itemsPerPage={5}
                    hover
                    sorter
                    pagination
                  />
                </CCol>
              </CRow>
            </div>
          )}
          {gridthree && (
            <div>
              <CRow>
                <CCol
                  style={{
                    marginLeft: "30px",

                    maxHeight: "290px",
                    minHeight: "290px",
                    marginBottom: "-25px",
                    overflow: "auto",
                    marginTop: "50px",
                  }}
                >
                  <CDataTable
                    items={[
                      {
                        sNo: "1",
                        Name: "Kalaiyarasan",
                        Ministry: "Food Minister",
                        from: "29/01/2005",
                        to: "31/02/2010",
                        status: "InActive",
                      },
                    ]}
                    fields={[
                      { key: "sNo", label: "Sl. No", _style: { width: "1%" } },
                      {
                        key: "Name",
                        label: "Name of the MLA",
                        _style: { width: "19%" },
                      },

                      {
                        key: "Ministry",
                        label: "Ministry",
                        _style: { width: "10%" },
                      },

                      {
                        key: "from",
                        label: "From Date",
                        _style: { width: "10%" },
                      },
                      { key: "to", label: "To Date", _style: { width: "10%" } },
                      {
                        key: "status",
                        label: "Status",
                        _style: { width: "10%" },
                      },
                    ]}
                    columnFilter
                    tableFilter
                    tableLabel={"History of State Minister"}
                    itemsPerPageSelect
                    itemsPerPage={5}
                    hover
                    sorter
                    pagination
                  />
                </CCol>
              </CRow>
            </div>
          )}
          {gridfour && (
            <div>
              <CRow>
                <CCol
                  style={{
                    marginLeft: "30px",

                    maxHeight: "290px",
                    minHeight: "290px",
                    marginBottom: "-25px",
                    overflow: "auto",
                    marginTop: "50px",
                  }}
                >
                  <CDataTable
                    items={[
                      {
                        sNo: "1",
                        Name: "Kalaiyarasan",
                        Ministry: "Financial Minister",
                        from: "29/01/1995",
                        to: "31/02/2000",
                        status: "InActive",
                      },
                    ]}
                    fields={[
                      { key: "sNo", label: "Sl. No", _style: { width: "1%" } },
                      {
                        key: "Name",
                        label: "Name of the MLA",
                        _style: { width: "19%" },
                      },

                      {
                        key: "Ministry",
                        label: "Ministry",
                        _style: { width: "10%" },
                      },

                      {
                        key: "from",
                        label: "From Date",
                        _style: { width: "10%" },
                      },
                      { key: "to", label: "To Date", _style: { width: "10%" } },
                      {
                        key: "status",
                        label: "Status",
                        _style: { width: "10%" },
                      },
                    ]}
                    columnFilter
                    tableFilter
                    tableLabel={"History of Party Posting"}
                    itemsPerPageSelect
                    itemsPerPage={5}
                    hover
                    sorter
                    pagination
                  />
                </CCol>
              </CRow>
            </div>
          )}
          {gridfive && (
            <div>
              <CRow>
                <CCol
                  style={{
                    marginLeft: "30px",

                    maxHeight: "290px",
                    minHeight: "290px",
                    marginBottom: "-25px",
                    overflow: "auto",
                    marginTop: "50px",
                  }}
                >
                  <CDataTable
                    items={[
                      {
                        sNo: "1",
                        Name: "Kalaiyarasan",
                        Ministry: "Financial Minister",
                        from: "29/01/1995",
                        to: "31/02/2000",
                        status: "InActive",
                      },
                    ]}
                    fields={[
                      { key: "sNo", label: "Sl. No", _style: { width: "1%" } },
                      {
                        key: "Name",
                        label: "Name of the MLA",
                        _style: { width: "19%" },
                      },

                      {
                        key: "Ministry",
                        label: "Ministry",
                        _style: { width: "10%" },
                      },

                      {
                        key: "from",
                        label: "From Date",
                        _style: { width: "10%" },
                      },
                      { key: "to", label: "To Date", _style: { width: "10%" } },
                      {
                        key: "status",
                        label: "Status",
                        _style: { width: "10%" },
                      },
                    ]}
                    columnFilter
                    tableFilter
                    tableLabel={"History of Central Minister"}
                    itemsPerPageSelect
                    itemsPerPage={5}
                    hover
                    sorter
                    pagination
                  />
                </CCol>
              </CRow>
            </div>
          )}
          <CButton
            style={{
              position: "absolute",
              backgroundColor: "green",
              border: "1px solid green",
              top: "15px",
              right: "15px",
            }}
            className={"cancelBtn"}
            onClick={handleClick}
          >
            Back
          </CButton>
        </div>
      )}
      {sideBar3 && (
        <div className={menu.style} style={{ overflow: "auto", marginLeft: "-475px" }}>
          <CRow className={""}>
            <CCol md="12" lg="12" sm="12">
              <div>
                <span
                  style={{
                    fontSize: "22px",
                    fontWeight: "700",
                    marginLeft: "20px",
                  }}
                >
                  Posting History{" "}
                </span>
              </div>
            </CCol>
          </CRow>

          <CRow style={{ marginTop: "25px" }}>
            <CCol>
            <Tabs>
    <TabList>
      <Tab  onClick={chiefministerShow}
              >
                As a MP</Tab>
      <Tab onClick={deputychiefministerShow}
              >
                As a MLA</Tab>
                <Tab onClick={ministryShow}
              >
                State Minister</Tab>
      <Tab onClick={centralMinister}
              >
                Central Minister</Tab>
    </TabList>  
  </Tabs>                                                    
            </CCol>
          </CRow>

          {gridone && (
            <div>
              <CRow>
                <CCol
                  style={{
                    marginLeft: "30px",

                    maxHeight: "290px",
                    minHeight: "290px",
                    marginBottom: "-25px",
                    overflow: "auto",
                    marginTop: "50px",
                  }}
                >
                  <CDataTable
                    items={[
                      {
                        sNo: "1",
                        Corporation: "Kalaiyarasan",
                        Ministry: "Agriculture Minister",
                        from: "29/01/2020",
                        to: "31/02/2025",
                        status: "Active",
                      },
                      {
                        sNo: "2",
                        Corporation: "Sathish Narayanan",
                        Ministry: "Home Minister",
                        from: "29/01/2010",
                        to: "31/02/2015",
                        status: "InActive",
                      },
                      {
                        sNo: "3",
                        Corporation: "Arun Kalyan",
                        Ministry: "Health Minister",
                        from: "29/01/2015",
                        to: "31/02/2020",
                        status: "InActive",
                      },
                    ]}
                    fields={[
                      { key: "sNo", label: "SNo", _style: { width: "1%" } },
                      {
                        key: "Corporation",
                        label: "Name of the MLA",
                        _style: { width: "10%" },
                      },
                      {
                        key: "Ministry",
                        label: "Ministry",
                        _style: { width: "10%" },
                      },
                      {
                        key: "from",
                        label: "From Date",
                        _style: { width: "10%" },
                      },
                      { key: "to", label: "To Date", _style: { width: "10%" } },
                      {
                        key: "status",
                        label: "Status",
                        _style: { width: "10%" },
                      },
                    ]}
                    columnFilter
                    tableFilter
                    tableLabel={"History of MP"}
                    itemsPerPageSelect
                    itemsPerPage={5}
                    hover
                    sorter
                    pagination
                  />
                </CCol>
              </CRow>
            </div>
          )}
          {gridtwo && (
            <div>
              <CRow>
                <CCol
                  style={{
                    marginLeft: "30px",

                    maxHeight: "290px",
                    minHeight: "290px",
                    marginBottom: "-25px",
                    overflow: "auto",
                    marginTop: "50px",
                  }}
                >
                  <CDataTable
                    items={[
                      {
                        sNo: "1",
                        Name: "Kalaiyarasan",
                        Ministry: "Agriculture Minister",
                        from: "29/01/2000",
                        to: "31/02/2005",
                        status: "InActive",
                      },
                      {
                        sNo: "2",
                        Name: "Sathish Narayanan",
                        Ministry: "Home Minister",
                        from: "29/01/2005",
                        to: "31/02/2010",
                        status: "InActive",
                      },
                      {
                        sNo: "3",
                        Name: "Arun Kalyan",
                        Ministry: "Health Minister",
                        from: "29/01/2010",
                        to: "31/02/2015",
                        status: "InActive",
                      },
                    ]}
                    fields={[
                      { key: "sNo", label: "Sl. No", _style: { width: "1%" } },
                      {
                        key: "Name",
                        label: "Name of the MLA",
                        _style: { width: "10%" },
                      },
                      {
                        key: "Ministry",
                        label: "Ministry",
                        _style: { width: "10%" },
                      },
                      {
                        key: "from",
                        label: "From Date",
                        _style: { width: "10%" },
                      },
                      { key: "to", label: "To Date", _style: { width: "10%" } },
                      {
                        key: "status",
                        label: "Status",
                        _style: { width: "10%" },
                      },
                    ]}
                    onSelectFilter={handleSelectFilter}
                    columnFilter
                    tableFilter
                    tableLabel={"History of MLA "}
                    itemsPerPageSelect
                    itemsPerPage={5}
                    hover
                    sorter
                    pagination
                  />
                </CCol>
              </CRow>
            </div>
          )}
          {gridthree && (
            <div>
              <CRow>
                <CCol
                  style={{
                    marginLeft: "30px",

                    maxHeight: "290px",
                    minHeight: "290px",
                    marginBottom: "-25px",
                    overflow: "auto",
                    marginTop: "50px",
                  }}
                >
                  <CDataTable
                    items={[
                      {
                        sNo: "1",
                        Name: "Kalaiyarasan",
                        Ministry: "Food Minister",
                        from: "29/01/2005",
                        to: "31/02/2010",
                        status: "InActive",
                      },
                      {
                        sNo: "2",
                        Name: "Sathish Narayanan",
                        Ministry: "Home Minister",
                        from: "29/01/2010",
                        to: "31/02/2015",
                        status: "InActive",
                      },
                      {
                        sNo: "3",
                        Name: "Arun Kalyan",
                        Ministry: "Health Minister",
                        from: "29/01/2015",
                        to: "31/02/2020",
                        status: "InActive",
                      },
                    ]}
                    fields={[
                      { key: "sNo", label: "Sl. No", _style: { width: "1%" } },
                      {
                        key: "Name",
                        label: "Name of the MLA",
                        _style: { width: "10%" },
                      },

                      {
                        key: "Ministry",
                        label: "Ministry",
                        _style: { width: "10%" },
                      },

                      {
                        key: "from",
                        label: "From Date",
                        _style: { width: "10%" },
                      },
                      { key: "to", label: "To Date", _style: { width: "10%" } },
                      {
                        key: "status",
                        label: "Status",
                        _style: { width: "10%" },
                      },
                    ]}
                    columnFilter
                    tableFilter
                    tableLabel={"History of State Minister"}
                    itemsPerPageSelect
                    itemsPerPage={5}
                    hover
                    sorter
                    pagination
                  />
                </CCol>
              </CRow>
            </div>
          )}
          {gridfive && (
            <div>
              <CRow>
                <CCol
                  style={{
                    marginLeft: "30px",

                    maxHeight: "290px",
                    minHeight: "290px",
                    marginBottom: "-25px",
                    overflow: "auto",
                    marginTop: "50px",
                  }}
                >
                  <CDataTable
                    items={[
                      {
                        sNo: "1",
                        Name: "Kalaiyarasan",
                        Ministry: "Food Minister",
                        from: "29/01/1995",
                        to: "31/02/2000",
                        status: "InActive",
                      },
                      {
                        sNo: "2",
                        Name: "Sathish Narayanan",
                        Ministry: "Home Minister",
                        from: "29/01/2000",
                        to: "31/02/2010",
                        status: "InActive",
                      },
                      {
                        sNo: "3",
                        Name: "Jai Bala",
                        Ministry: "Financial Minister",
                        from: "29/01/2020",
                        to: "31/02/2030",
                        status: "Active",
                      },
                    ]}
                    fields={[
                      { key: "sNo", label: "Sl. No", _style: { width: "1%" } },
                      {
                        key: "Name",
                        label: "Name of the MLA",
                        _style: { width: "10%" },
                      },

                      {
                        key: "Ministry",
                        label: "Ministry",
                        _style: { width: "10%" },
                      },

                      {
                        key: "from",
                        label: "From Date",
                        _style: { width: "10%" },
                      },
                      { key: "to", label: "To Date", _style: { width: "10%" } },
                      {
                        key: "status",
                        label: "Status",
                        _style: { width: "10%" },
                      },
                    ]}
                    columnFilter
                    tableFilter
                    tableLabel={"History of Central Minister"}
                    itemsPerPageSelect
                    itemsPerPage={5}
                    hover
                    sorter
                    pagination
                  />
                </CCol>
              </CRow>
            </div>
          )}
          <CButton
            style={{
              position: "absolute",
              backgroundColor: "green",
              border: "1px solid green",
              top: "15px",
              right: "15px",
            }}
            className={"cancelBtn"}
            onClick={() => {
              handleClick();
              handleClick3();
            }}
          >
            Back
          </CButton>
        </div>
      )}
      {sideBar2 && (
        <div className={menu.style} style={{overflow:"auto", marginLeft: "-475px"}}>
          <CRow className={""}>
            <CCol md="12" lg="12" sm="12">
              <div>
                <span
                  style={{
                    fontSize: "22px",
                    fontWeight: "700",
                    marginLeft: "20px",
                  }}
                >
                  Update Status{" "}
                </span>
              </div>
            </CCol>
          </CRow>
          <CContainer>
              <CRow
                className={"LengthDataw"}
                style={{ marginLeft: "10.5em", marginTop: "20px" }}
                sm={12}
                md={12}
                lg={12}
              >
                <CCol md="6">
                  <CLabel className={"form-labels-9 col-md-5 reAssign-Label"}>
                    Name :{" "}
                  </CLabel>

                  <CLabel
                    className={"reAssign-Detail"}
                    style={{marginLeft:"-5em"}}
                  >
                    {selected.assignedTo
                      ? selected.assignedTo.firstName
                      : "Arun Kumar"}
                  </CLabel>
                </CCol>
                <CCol md="6" style={{ marginLeft: "-200px" }}>
                  <CLabel className={"form-labels-9 col-md-5 reAssign-Label"}>
                    Gender :{" "}
                  </CLabel>

                  <CLabel
                    className={"reAssign-Detail"}
                    style={{ marginLeft: "-3.5em" }}
                  >
                    {selected.assignedTo
                      ? selected.assignedTo.firstName
                      : "Male"}
                  </CLabel>
                </CCol>
                <CCol>
                  <img
                    type="text"
                    alt=""
                    src={files !== "" ? files : DEFAULT_IMAGE}
                    style={{
                      width: "150px",
                      height: "200px",
                      position: "relative",
                      background: "#fff",
                      left: "-260%",
                      top: "-5em",
                    }}
                  />
                </CCol>
              </CRow>
              <CRow
                className={"LengthDataw"}
                style={{ marginLeft: "10.5em", marginTop: "-10em" }}
                sm={12}
                md={12}
                lg={12}
              >
                <CCol md="6">
                  <CLabel className={"form-labels-9 col-md-5 reAssign-Label"}>
                  DOB :{" "}
                  </CLabel>

                  <CLabel
                    className={"reAssign-Detail"}
                    style={{marginLeft:"-5em"}}
                  >
                    {selected.assignedTo
                      ? selected.assignedTo.firstName
                      : "23/07/1998"}
                  </CLabel>
                </CCol>                
              </CRow>
            </CContainer>
          
          <CCol style={{ marginTop: "2em", marginLeft: "-40px" }}>
            <CLabel
              style={{
                fontSize: "20PX",
                fontFamily: "Open Sans",
                fontWeight: "700",
                marginLeft: "55px",
                marginTop: "60px",
              }}
            >
              No of Times as
            </CLabel>
          </CCol>

          <CRow
            className={"row-alignment"}
            md="12"
            sm="12"
            lg="12"
            style={{ marginTop: "-25px", marginLeft: "-35px" }}
          >
            <CCol className={"column-align"} md="4">
              <CLabel className={"label-name-1"}>
                Status
                <span className={"text-danger"}>*</span>
              </CLabel>
              <Select
                // className={"input-align"}
                id={"centralministerstatus"}
                name={"status"}
                placeholder={"Select Status"}
                value={locations.district}
                onChange={changeHandler}
              />
            </CCol>
            <CCol className={"column-align"} md="4">
              <CLabel className={"label-name-1"}>
                Note
                <span className={"text-danger"}>*</span>
              </CLabel>
              <CTextarea
                id={"contimemnote"}
                placeholder="Enter Description for Termination"
                style={{ height: "80px", marginLeft: "10px" }}
                min="10"
                max="500"
              ></CTextarea>
            </CCol>
            <CCol md="10">
              <CCol
                md="5"
                style={{
                  marginLeft: "500px",
                  float: "right",
                  marginTop: "30px",
                  position: "absolute",
                }}
              >
                <CButton
                  style={{
                    float: "right",
                  }}
                  id={"cancelAbbreviationConfigureCode"}
                  className={"cancelBtn"}
                  onClick={handleClick2}
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
                  Update
                </CButton>{" "}
              </CCol>
            </CCol>
          </CRow>
          <CButton
            style={{
              position: "absolute",
              backgroundColor: "green",
              border: "1px solid green",
              top: "15px",
              right: "15px",
            }}
            className={"cancelBtn"}
            onClick={handleClick2}
          >
            Back
          </CButton>
        </div>
      )}
      {hideMappingMunicipal && (
        <div>
          <CContainer>
          <CCard className={"cardSave"}>
            <div className={"main-headerlabel"}>
              <span className={"header-label"}>Central Minister</span>
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
                          id={"centralministeraddmember"}
                          className={"saveBtn"}
                          onClick={changeMunicipalCorporation}
                        >
                          Add Member
                        </CButton>{" "}
                      </CCol>
                    </CCol>
                  </CRow>
                  <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                    <CCol className={"column-align"} md="4">
                      <CLabel className={"label-name-1"}>
                        State
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <Select
                        // className={"input-align"}
                        id={"CentralMinisterState"}
                        name={"state"}
                        placeholder={"Select State"}
                        // value={locations.district}
                        // onChange={changeHandler}
                        options={stateselect}
                      />
                    </CCol>
                    <CCol className={"column-align"} md="4">
                      <CLabel className={"label-name-1"}>
                        Type of Role
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <CCol md="12" style={{ marginLeft: "-10px" }}>
                        <CFormGroup variant="custom-radio" inline>
                          <CInputRadio
                            custom
                            id="inline-radio1"
                            onClick={changeChiefMinister}
                            name="inline-radios"
                            value="option1"
                          />
                          <CLabel
                            variant="custom-checkbox"
                            htmlFor="inline-radio1"
                          >
                            Chief Minister
                          </CLabel>
                        </CFormGroup>
                        <CFormGroup variant="custom-radio" inline>
                          <CInputRadio
                            custom
                            id="inline-radio2"
                            onClick={changeDeputyChiefMinister}
                            name="inline-radios"
                            value="option2"
                          />
                          <CLabel
                            variant="custom-checkbox"
                            htmlFor="inline-radio2"
                          >
                            Prime Minister
                          </CLabel>
                        </CFormGroup>
                        <CFormGroup variant="custom-radio" inline>
                          <CInputRadio
                            custom
                            id="inline-radio3"
                            onClick={changeMinistry}
                            name="inline-radios"
                            value="option3"
                          />
                          <CLabel
                            variant="custom-checkbox"
                            htmlFor="inline-radio3"
                          >
                            Ministry
                          </CLabel>
                        </CFormGroup>
                      </CCol>
                    </CCol>
                  </CRow>
                </div>
                {hideChiefMinister && (
                  <div>
                    <CRow
                      style={{
                        padding: "4%",
                        marginTop: "-1.5%",
                        marginLeft: "-25px",
                      }}
                    >
                      <CDataTable
                        items={userData1chiefministegrid}
                        fields={fields}
                        columnFilter
                        tableFilter
                        tableLabel={"List of Chief Minister"}
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
                {hideDeputyChiefMinister && (
                  <div>
                    <CRow
                      style={{
                        padding: "4%",
                        marginTop: "-1.5%",
                        marginLeft: "-25px",
                      }}
                    >
                      <CDataTable
                        items={[
                          {
                            SNo: "1.",
                            State: "Tamil Nadu",
                            Name: "M Venkatesan",
                            Ministry: "Health Minister",
                            from: "25/06/2011",
                            to: "12/03/2016",
                            Status: "Retired",
                          },
                          //   {
                          //     SNo: "2.",
                          //     Corporation:"Salem",
                          //     Name:"KathirVel",
                          //     from:"05/06/2015",
                          //     to:"12/03/2025",
                          //     Status:"InActive"
                          //   },
                          {
                            SNo: "2.",
                            State: "Tamil Nadu",
                            Name: "Kalaiyarasan",
                            Ministry: "Education Minister",
                            from: "21/02/2014",
                            to: "12/06/2024",
                            Status: "Active",
                          },
                          {
                            SNo: "3.",
                            State: "Tamil Nadu",
                            Name: "M Venkatesan",
                            Ministry: "Transportation Minister",
                            from: "09/12/2018",
                            to: "16/06/2026",
                            Status: "Active",
                          },
                        ]}
                        fields={[
                          {
                            key: "SNo",
                            label: "S.NO",
                            _style: { width: "3%" },
                            sorter: false,
                            filter: false,
                          },
                          {
                            key: "State",
                            label: "State",
                            _style: { width: "10%" },
                          },
                          // { key: "District", label: "District", _style: { width: "10%" } },
                          {
                            key: "Name",
                            label: "Name of the Member",
                            _style: { width: "20%" },
                          },
                          {
                            key: "Ministry",
                            label: "Ministry",
                            _style: { width: "10%" },
                          },

                          {
                            key: "from",
                            label: "From Date",
                            _style: { width: "10%" },
                          },
                          {
                            key: "to",
                            label: "To Date",
                            _style: { width: "10%" },
                          },
                          {
                            key: "Status",
                            label: "Status",
                            _style: { width: "10%" },
                          },
                          // { key: "male", label: "Male", _style: { width: "10%" } },
                          // { key: "female", label: "Female", _style: { width: "10%" } },
                          {
                            key: "show_details",
                            label: "Action",
                            _style: { width: "10%" },
                            sorter: false,
                            filter: false,
                          },
                        ]}
                        columnFilter
                        tableFilter
                        tableLabel={"List of prime Minster"}
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
                {hideMinister && (
                  <div>
                    <CRow
                      style={{
                        padding: "4%",
                        marginTop: "-1.5%",
                        marginLeft: "-25px",
                      }}
                    >
                      <CDataTable
                        items={[
                          {
                            SNo: "1.",
                            State: "Tamil Nadu",
                            Department: "Tamil Nadu",
                            NameoftheMember: "M Sivanesan",
                            Mnistry: "",

                            from: "11/8/2020",
                            to: "11/8/2021",
                            Status: "Active",
                          },
                        ]}
                        fields={[
                          {
                            key: "SNo",
                            label: "S.NO",
                            _style: { width: "3%" },
                            sorter: false,
                            filter: false,
                          },
                          // { key: "State", label: "State", _style: { width: "10%" } },
                          // { key: "District", label: "District", _style: { width: "10%" } },
                          {
                            key: "town",
                            label: "Corporation",
                            _style: { width: "10%" },
                          },
                          {
                            key: "no",
                            label: "Ward No",
                            _style: { width: "20%" },
                          },
                          {
                            key: "Name",
                            label: "Name of the Member",
                            _style: { width: "20%" },
                          },

                          {
                            key: "from",
                            label: "From Date",
                            _style: { width: "10%" },
                          },
                          {
                            key: "to",
                            label: "To Date",
                            _style: { width: "10%" },
                          },
                          {
                            key: "Status",
                            label: "Status",
                            _style: { width: "10%" },
                          },
                          // { key: "male", label: "Male", _style: { width: "10%" } },
                          // { key: "female", label: "Female", _style: { width: "10%" } },
                          {
                            key: "show_details",
                            label: "Action",
                            _style: { width: "10%" },
                            sorter: false,
                            filter: false,
                          },
                        ]}
                        columnFilter
                        tableFilter
                        tableLabel={"List of Minister in a State"}
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
              </div>
            )}
          </CCard>
          </CContainer>
        </div>
      )}

      {hideCorporation && (
        <div>
          <CContainer>
          <CCard className={"cardSave"} style={{ minHeight: "1200px" }}>
            <div className={"main-headerlabel"}>
              <span className={"header-label"}>Add Minister Page</span>
            </div>
            {locationHide.corporation && (
              <div>
                <div>
                  <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                    <CCol className={"column-align"} md="4">
                      <CLabel className={"label-name-1"}>
                        State
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <Select
                        // className={"input-align"}
                        id={"CentralMinisterSelectState"}
                        name={"state"}
                        placeholder={"Select State"}
                        options={stateselect}
                      />
                    </CCol>
                    <CCol className={"column-align"} md="4">
                      <CLabel className={"label-name-1"}>
                        Type of Role
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <CCol md="16" style={{ marginLeft: "-1px" }}>
                        <CFormGroup variant="custom-radio" inline>
                          <CInputRadio
                            custom
                            id="inline-radio1"
                            name="inline-radios"
                            value="option1"
                          />
                          <CLabel
                            variant="custom-checkbox"
                            htmlFor="inline-radio1"
                          >
                            Chief Minister
                          </CLabel>
                        </CFormGroup>
                        <CFormGroup variant="custom-radio" inline>
                          <CInputRadio
                            custom
                            id="inline-radio2"
                            name="inline-radios"
                            value="option2"
                          />
                          <CLabel
                            variant="custom-checkbox"
                            htmlFor="inline-radio2"
                          >
                            Prime Minister
                          </CLabel>
                        </CFormGroup>
                        <CFormGroup variant="custom-radio" inline>
                          <CInputRadio
                            custom
                            id="inline-radio3"
                            name="inline-radios"
                            value="option3"
                          />
                          <CLabel
                            variant="custom-checkbox"
                            htmlFor="inline-radio3"
                          >
                            Ministry
                          </CLabel>
                        </CFormGroup>
                      </CCol>
                    </CCol>
                  </CRow>
                  <CRow
                    className={"row-alignment"}
                    style={{ marginLeft: "35px", marginTop: "20px" }}
                  >
                    {ministryList && (
                      <React.Fragment>
                        <CCol md={4} lg={4}>
                          <CLabel className={"label-name-1"}>
                            Ministry
                            <span className={"text-danger"}> *</span>
                          </CLabel>
                          <Select
                            placeholder="Select Ministry"
                            id={"CentralMinisterMinistry"}
                            type={"text"}
                            options={selectMinistry}
                          />
                        </CCol>
                        <CCol md={1} lg={1}>
                          <CButton
                            shape={"pill"}
                            id={"addcentralminister"}
                            style={{ marginTop: "30px" }}
                            className={"saveBtn"}
                            onClick={enableCreate}
                          >
                            ADD
                          </CButton>
                        </CCol>

                        {municipalName.edit === true ? (
                          <React.Fragment>
                            <CCol md={3} lg={3}>
                              <CButton
                                style={{
                                  marginTop: "30px",
                                }}
                                id={"centralministeredit"}
                                className={"btn btn-success"}
                                onClick={""}
                              >
                                EDIT
                              </CButton>
                            </CCol>
                          </React.Fragment>
                        ) : null}
                      </React.Fragment>
                    )}
                    {ministryCreate && (
                      <React.Fragment>
                        <CRow
                          className={"column-align3"}
                          sm={12}
                          md={12}
                          lg={12}
                        >
                          <CCol md="3">
                            <CLabel className={"label-name-1"}>
                              Ministry
                              <span className={"text-danger"}> *</span>
                            </CLabel>

                            <CInput
                              id={"centralministerministy"}
                              name={"CentralMinisterMinistryName"}
                              placeholder="Enter Ministry"
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
                              id={"centralministerabrreviation"}
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
                              id={"centralministercode"}
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
                              id={"centralministersave"}
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
                    style={{ marginLeft: "7px" }}
                  >
                    <CCol
                      className={"column-align"}
                      md="6"
                      style={{ marginLeft: "30px" }}
                    >
                      <CLabel className={"label-name-1"}>
                        Search Member
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <Select
                        // className={"input-align"}
                        id={"centralministersearchmember"}
                        // name={"municipalTypeofOffice"}
                        placeholder={"Select Party member"}
                        value={typeofOfficess}
                        onChange={(e) => setTypeofOfficess(e)}
                        options={selectTypeofOffice}
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
                        marginTop: "60px",
                      }}
                    >
                      Member Details Display
                    </CLabel>
                  </CCol>
                  <CContainer>
              <CRow
                className={"LengthDataw"}
                style={{ marginLeft: "14.4em", marginTop: "20px" }}
                sm={12}
                md={12}
                lg={12}
              >
                <CCol md="6">
                  <CLabel className={"form-labels-9 col-md-5 reAssign-Label"}>
                    Name :{" "}
                  </CLabel>

                  <CLabel
                    className={"reAssign-Detail"}
                    style={{marginLeft:"-5em"}}
                  >
                    {selected.assignedTo
                      ? selected.assignedTo.firstName
                      : "Arun Kumar"}
                  </CLabel>
                </CCol>
                <CCol md="6" style={{ marginLeft: "-200px" }}>
                  <CLabel className={"form-labels-9 col-md-5 reAssign-Label"}>
                    Gender :{" "}
                  </CLabel>

                  <CLabel
                    className={"reAssign-Detail"}
                    style={{ marginLeft: "-3.5em" }}
                  >
                    {selected.assignedTo
                      ? selected.assignedTo.firstName
                      : "Male"}
                  </CLabel>
                </CCol>
                <CCol>
                  <img
                    type="text"
                    alt=""
                    src={files !== "" ? files : DEFAULT_IMAGE}
                    style={{
                      width: "150px",
                      height: "200px",
                      position: "relative",
                      background: "#fff",
                      left: "-260%",
                      top: "-5em",
                    }}
                  />
                </CCol>
              </CRow>
              <CRow
                className={"LengthDataw"}
                style={{ marginLeft: "14.4em", marginTop: "-10em" }}
                sm={12}
                md={12}
                lg={12}
              >
                <CCol md="6">
                  <CLabel className={"form-labels-9 col-md-5 reAssign-Label"}>
                  Age :{" "}
                  </CLabel>

                  <CLabel
                    className={"reAssign-Detail"}
                    style={{marginLeft:"-5em"}}
                  >
                    {selected.assignedTo
                      ? selected.assignedTo.firstName
                      : "23"}
                  </CLabel>
                </CCol>                
              </CRow>
            </CContainer>
                  
                  <CRow
                    className={"row-alignment"}
                    style={{
                      marginLeft: "4px",
                      marginBottom: "20px",
                      marginTop: "2em",
                    }}
                  >
                    <CCol className={"column-align"} md="4">
                      <CLabel className={"label-name-1"}>From Date </CLabel>
                      <CInput type="date" id={"centralministerdatefrom"} />
                    </CCol>
                    <CCol className={"column-align"} md="4">
                      <CLabel className={"label-name-1"}>To Date </CLabel>
                      <CInput type="date" id={"centralministerdateto"} />
                    </CCol>
                  </CRow>

                  <CCol md="10">
                    <CCol
                      md="5"
                      style={{
                        marginLeft: "265px",
                        float: "right",
                        marginTop: "30px",
                        position: "absolute",
                      }}
                    >
                      <CButton
                        style={{
                          float: "right",
                        }}
                        id={"cancelcentralminister"}
                        className={"cancelBtn"}
                        onClick={changeCancelMunicipalCorporation}
                      >
                        CANCEL
                      </CButton>
                      <CButton
                        style={{
                          float: "right",
                          marginRight: "15px",
                        }}
                        id={"savecentralminister"}
                        className={"saveBtn"}
                        onClick={saveCorporation}
                      >
                        Save
                      </CButton>{" "}
                    </CCol>
                  </CCol>
                  <CRow>
                    <CCol
                      style={{
                        marginLeft: "40px",
                        maxHeight: "290px",
                        minHeight: "290px",
                        marginBottom: "-25px",
                        overflow: "auto",
                        marginTop: "100px",
                      }}
                    >
                      <CDataTable
                        tableLabel={"History as a Ward Member"}
                        columnFilter
                        tableFilter
                        hover
                        sorter
                        pagination
                        scopedSlots={{
                          status: (item) => <td></td>,
                        }}
                        items={[
                          {
                            SNo: "1",
                            town: "kanchipuram",
                            ward: "0014",
                            from: "14 May 2001",
                            to: "12 May 2006",
                            Status: "InActive",
                          },
                        ]}
                        fields={[
                          {
                            key: "SNo",
                            label: "S.NO",
                            _style: { width: "3%" },
                            sorter: false,
                            filter: false,
                          },
                          {
                            key: "town",
                            label: "Corporation",
                            _style: { width: "10%" },
                          },
                          {
                            key: "ward",
                            label: "Ward No",
                            _style: { width: "10%" },
                          },
                          {
                            key: "from",
                            label: "From Date",
                            _style: { width: "10%" },
                          },
                          {
                            key: "to",
                            label: "To Date",
                            _style: { width: "10%" },
                          },
                          {
                            key: "Status",
                            label: "Status",
                            _style: { width: "10%" },
                          },
                        ]}
                      />
                    </CCol>
                  </CRow>
                </div>
              </div>
            )}
          </CCard>
          </CContainer>
        </div>
      )}
    </div>
  );
};

export default CentralMinister;
