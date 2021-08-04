import {
  CButton,
  CCard,
  CCol,
  CInput,
  CLabel,
  CContainer,
  CRow,
  CTextarea,
} from "@coreui/react";
import React, { useState } from "react";
import CDataTable from "../../CoreComponents/table/CDataTable";
import { saveCreateCorporation } from "../../../services/ApiService";
import { toast } from "react-toastify";
import DEFAULT_IMAGE from "../../../assets/img/No-image-icon.png";
import Select from "react-select";
import "./RajyaSabha.css";
import { Dropdown, Menu } from "antd";
import "antd/dist/antd.css";
import { Tab, Tabs, TabList } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const RajyaSabha = () => {
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
  // const [, setMunicipalList] = useState(true);
  // const [, setmunicipalCreate] = useState(false);
  // const [, setMunicipalListadd] = useState(true);
  // const [, setmunicipalCreateadd] = useState(false);
  // const [, setDepartmentList] = useState(true);
  // const [, setDepartmentCreate] = useState(false);
  // const [, setDesignationList] = useState(true);
  // const [, setDesignationCreate] = useState(false);
  // const [, setRoleList] = useState(true);
  // const [, setRoleCreate] = useState(false);
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

  const fields = [
    {
      key: "SNo",
      label: "S.NO",
      _style: { width: "3%" },
      sorter: false,
      filter: false,
    },
    { key: "Name", label: "Name of Party Mmeber", _style: { width: "20%" } },
    { key: "Type", label: "Gender", _style: { width: "10%" } },
    { key: "Department", label: "Age", _style: { width: "10%" } },
    { key: "Designation", label: "From Date", _style: { width: "10%" } },
    { key: "Role", label: "To Date", _style: { width: "10%" } },
    { key: "Status", label: "Status", _style: { width: "10%" } },
    { key: "EnteredBy", label: "Entered By", _style: { width: "10%" } },
    { key: "EnteredOn", label: " Entered on", _style: { width: "10%" } },
    {
      key: "show_details",
      label: "Action",
      _style: { width: "10%" },
      sorter: false,
      filter: false,
    },
  ];
  const userDatarajyasabha = [
    {
      SNo: "1",
      Name: "Jai Balaji",
      Type: "Male",
      Department: "25",
      Designation: "01/06/2015",
      Role: "02/06/2020",
      Status: "InActive",
      Member: "Arun",
      EnteredBy: "Sathiskumar",
      EnteredOn: "05/06/2020",
    },
    {
      SNo: "2",
      Name: "Sathish Kumar",
      Type: "Male",
      Department: "26",
      Designation: "08/05/2018",
      Role: "24/05/2026",
      Status: "Active",
      Member: "Arun",
      EnteredBy: "Sathiskumar",
      EnteredOn: "05/06/2021",
    },
    {
      SNo: "3",
      Name: "Arun Kumar",
      Type: "Male",
      Department: "23",
      Designation: "08/01/2019",
      Role: "24/05/2028",
      Status: "Active",
      Member: "Arun",
      EnteredBy: "Sathiskumar",
      EnteredOn: "24/05/2028",
    },
  ];
  const [passing] = useState("");
  // const [, setError] = useState("");
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
  const selectTypeofOffice = [
    {
      value: "Arun Kumar",
      label: "Arun Kumar TamilNadu Chennai Mylapore - 60004",
    },
    {
      value: "Sathish Kumar ",
      label: "Sathish Kumar TamilNadu Chennai TNagar - 600017",
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
  // const saveDistrictPanchayat = () => {
  //   console.log(locationHide, "hidr");
  //   setLocationHide({
  //     ...locationHide,
  //     districtPanchayat: false,
  //     townPanchayat: true,
  //   });
  // };
  // const savetownPanchayat = () => {
  //   console.log(locationHide, "hidr");
  //   setLocationHide({
  //     ...locationHide,
  //     villagePanchayat: true,
  //     townPanchayat: false,
  //   });
  // };
  // const saveVillagePanchayat = () => {
  //   console.log(locationHide, "hidr");
  //   setLocationHide({
  //     ...locationHide,
  //     villagePanchayat: false,
  //     cityLocation: true,
  //   });
  // };
  // const cityLocation = () => {
  //   setLocationHide({
  //     ...locationHide,
  //     cityLocation: true,
  //     townPanchayat: false,
  //   });
  // };
  // const cancelcityLocation = () => {
  //   setLocationHide({
  //     ...locationHide,
  //     cityLocation: false,
  //     corporation: true,
  //   });
  // };
  const changeHandler = (e) => {
    setLocations({ ...locations, city: e.target.value });
  };
  // const otpChangeHandle = (e) => {
  //   setMobileNumber(e.target.value);
  //   if (mobilenumber.length > 8) {
  //     setOtpHide(true);
  //   } else {
  //     setError("enter valid data");
  //   }
  // };
  // const addDepartment = async () => {
  //   await setDepartmentList(false);
  //   await setDepartmentCreate(true);
  // };
  // const addDesignation = async () => {
  //   await setDesignationList(false);
  //   await setDesignationCreate(true);
  // };
  // const addRole = async () => {
  //   await setRoleList(false);
  //   await setRoleCreate(true);
  // };
  // const editState = async () => {
  //   await setMunicipalList(false);
  //   await setmunicipalCreate(true);
  //   // formik.values.StateName = stateName.stateName;
  //   // formik.values.Abbreviation2 = stateName.abbreviation;
  //   // formik.values.Code2 = stateName.code;
  //   // setPassing(stateName._id);
  //   // getState();
  //   // getAllAreas();
  // };
  // const CancelState = async () => {
  //   setPassing("");
  //   await setMunicipalList(true);
  //   await setmunicipalCreate(false);
  // };
  // const enableCreateadd = async () => {
  //   await setMunicipalListadd(false);
  //   await setmunicipalCreateadd(true);
  // };
  // const selectName = [{ value: "Sathishkumar", label: "SathishKumar" }];
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
  const cancelchangeMunicipalCorporation = () => {
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

  //     const handleClick = () => {
  //      setSideBar1(false)
  //    };

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
 
  const [menu, setMenu] = useState({
    style: "menu",
    style1: "menu1",
    menuStatus: "open",
    style3: "menu1",
  });
  const [, setSelected] = useState({});
  const [gridShow, setGridShow] = useState({
    view1: false,
    view2: false,
    view3: false,
    view4: false,
  });
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
      </Menu>
    );
  };

  return (
    <div className={menu.style3}>
      {sideBar1 && (
        <div
          className={menu.style}
          style={{ overflow: "auto", marginLeft: "-475px" }}
        >
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
          <CContainer style={{ marginLeft: "-2em" }}>
              <CRow
                className={"LengthDataw"}
                style={{ marginLeft: "12.8em", marginTop: "20px" }}
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
                    style={{ marginLeft: "-5em" }}
                  >
                    {selected.assignedTo
                      ? selected.assignedTo.firstName
                      : "SathishKumar"}
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
                      left: "-245%",
                      top: "-4em",
                    }}
                  />
                </CCol>
              </CRow>
              <CRow
                className={"LengthDataw"}
                style={{ marginLeft: "12.8em", marginTop: "-10em" }}
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
                    style={{ marginLeft: "-5em" }}
                  >
                    {selected.assignedTo
                      ? selected.assignedTo.firstName
                      : "22/07/1996"}
                  </CLabel>
                </CCol>                
              </CRow>
            </CContainer>
          
<CContainer>
          <Tabs style={{marginTop:"3em"}}>
            <TabList>
              <Tab
                onClick={() =>
                  setGridShow({
                    ...gridShow,
                    view1: true,
                    view2: false,
                    view3: false,
                    view: false,
                  })
                }
              >
                Party Posting
              </Tab>
              <Tab
                onClick={() =>
                  setGridShow({
                    ...gridShow,
                    view2: true,
                    view1: false,
                    view3: false,
                    view4: false,
                  })
                }
              >
                Representative Posting
              </Tab>
              <Tab
                onClick={() =>
                  setGridShow({
                    ...gridShow,
                    view3: true,
                    view2: false,
                    view1: false,
                    view4: false,
                  })
                }
              >
                State Ministers Portofolio
              </Tab>
              <Tab
                onClick={() =>
                  setGridShow({
                    ...gridShow,
                    view4: true,
                    view2: false,
                    view1: false,
                    view3: false,
                  })
                }
              >
                Central Ministers Portofolio
              </Tab>
            </TabList>
          </Tabs>
          </CContainer>

          {gridShow.view1 && (
            <CRow>
              <CCol
                style={{
                  marginLeft: "30px",
                  marginTop: "20px",
                  maxHeight: "290px",
                  minHeight: "290px",
                  marginBottom: "-25px",
                  overflow: "auto",
                }}
              >
                <CDataTable
                  tableLabel={"Details of Party Posting"}
                  columnFilter
                  tableFilter
                  hover
                  sorter
                  scopedSlots={{
                    status: (item) => <td></td>,
                  }}
                  items={[
                    {
                      SNo: "1",
                      NameofParty: "Youth Wing Association",
                      TypeofOffice: "District Office",
                      Department: " Youth Wings",
                      designation: "Chairman",
                      Role: "General",
                      FromDate: "12/08/2010",
                      ToDate: "25/06/2020",

                      Status: "Retired",
                    },
                  ]}
                />
              </CCol>
            </CRow>
          )}

          {gridShow.view2 && (
            <CRow>
              <CCol
                style={{
                  marginLeft: "30px",
                  marginTop: "20px",
                  maxHeight: "290px",
                  minHeight: "290px",
                  marginBottom: "-25px",
                  overflow: "auto",
                }}
              >
                <CDataTable
                  tableLabel={"Details of Public Representative Posting"}
                  columnFilter
                  tableFilter
                  hover
                  sorter
                  scopedSlots={{
                    status: (item) => <td></td>,
                  }}
                  items={[
                    {
                      SNo: "1",
                      NameofRepresentativePosting: "LokSabha",
                      FromDate: "24/06/2005",
                      ToDate: "11/04/2010",
                      Status: "InActive",
                    },
                  ]}
                />
              </CCol>
            </CRow>
          )}

          {gridShow.view3 && (
            <CRow>
              <CCol
                style={{
                  marginLeft: "30px",
                  marginTop: "20px",
                  maxHeight: "290px",
                  minHeight: "290px",
                  marginBottom: "-25px",
                  overflow: "auto",
                }}
              >
                <CDataTable
                  tableLabel={"Details of State Ministers Portofolio"}
                  columnFilter
                  tableFilter
                  hover
                  sorter
                  scopedSlots={{
                    status: (item) => <td></td>,
                  }}
                  items={[
                    {
                      SNo: "1",
                      NameofMinistry: "State Minister",
                      FromDate: "20/06/2010",
                      ToDate: "22/05/2015",
                      Status: "InActiive",
                    },
                  ]}
                />
              </CCol>
            </CRow>
          )}

          {gridShow.view4 && (
            <CRow>
              <CCol
                style={{
                  marginLeft: "30px",
                  marginTop: "20px",
                  maxHeight: "290px",
                  minHeight: "290px",
                  marginBottom: "-25px",
                  overflow: "auto",
                }}
              >
                <CDataTable
                  tableLabel={"Details of Central Ministers Portofolio"}
                  columnFilter
                  tableFilter
                  hover
                  sorter
                  scopedSlots={{
                    status: (item) => <td></td>,
                  }}
                  items={[
                    {
                      SNo: "1",
                      NameofMinistry: "Central Minister",
                      FromDate: "28/02/20",
                      ToDate: "30/02/2025",
                      Status: "Active",
                    },
                  ]}
                />
              </CCol>
            </CRow>
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
      {sideBar2 && (
        <div
          className={menu.style}
          style={{ overflow: "auto", marginLeft: "-475px" }}
        >
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
          <CContainer style={{ marginLeft: "-2em" }}>
              <CRow
                className={"LengthDataw"}
                style={{ marginLeft: "12.8em", marginTop: "20px" }}
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
                    style={{ marginLeft: "-5em" }}
                  >
                    {selected.assignedTo
                      ? selected.assignedTo.firstName
                      : "SathishKumar"}
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
                      left: "-245%",
                      top: "-4em",
                    }}
                  />
                </CCol>
              </CRow>
              <CRow
                className={"LengthDataw"}
                style={{ marginLeft: "12.8em", marginTop: "-10em" }}
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
                    style={{ marginLeft: "-5em" }}
                  >
                    {selected.assignedTo
                      ? selected.assignedTo.firstName
                      : "22/07/1996"}
                  </CLabel>
                </CCol>                
              </CRow>
            </CContainer>
          
          <CCol style={{ marginTop: "1em", marginLeft: "-40px" }}>
            <CLabel
              style={{
                fontSize: "20PX",
                fontFamily: "Open Sans",
                fontWeight: "700",
                marginLeft: "55px",
                marginTop: "60px",
              }}
            >
              No of Times as MP
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
                id={"rajyasabhaStatus"}
                name={"Status"}
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
                style={{ height: "80px" }}
                id={"rajyasabhaNote"}
                name={"Note"}
                placeholder={" Enter Text "}
                value={locations.city}
                onChange={changeHandler}
              />
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
                  id={"rajyasabhacancel"}
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
                  id={"rajyasabhaupdate"}
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
              <span className={"header-label"}>View Rajya Sabha</span>
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
                          id={"addmemberrajyasabha"}
                          className={"saveBtn"}
                          onClick={changeMunicipalCorporation}
                        >
                          Add Member to MP
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
                        id={"rajyasabhaState"}
                        name={"state"}
                        placeholder={"Select State"}
                        value={locations.district}
                        onChange={changeHandler}
                      />
                    </CCol>
                    <CCol className={"column-align"} md="4">
                      <CLabel className={"label-name-1"}>
                        Status
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <Select
                        id={"rajyasabhaStatus"}
                        name={"Status"}
                        placeholder={" Select Status "}
                        value={locations.city}
                        onChange={changeHandler}
                      />
                    </CCol>
                  </CRow>
                </div>

                <CRow
                  style={{
                    padding: "4%",
                    marginTop: "-1.5%",
                    marginLeft: "-40px",
                  }}
                >
                  <CDataTable
                    items={userDatarajyasabha}
                    fields={fields}
                    columnFilter
                    tableFilter
                    tableLabel={"List of MP - Rajya Sabha"}
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
          </CCard>
          </CContainer>
        </div>
      )}

      {hideCorporation && (
        <div>
          <CContainer>
          <CCard className={"cardSave"}>
            <div className={"main-headerlabel"}>
              <span className={"header-label"}>
                Mapping Member to MP - Rajya Sabha
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
                    style={{ marginLeft: "7px" }}
                  >
                    <CCol className={"column-align"} md="6">
                      <CLabel className={"label-name-1"}>
                        Search Member
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <Select
                        // className={"input-align"}
                        id={"rajyasabhaSearch"}
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
                      marginTop: "3em",
                    }}
                  >
                    <CCol className={"column-align"} md="4">
                      <CLabel className={"label-name-1"}>
                        Date of Appointment{" "}
                      </CLabel>
                      <CInput type="date" id={"rajyasabhadateappointment"} />
                    </CCol>
                    <CCol className={"column-align"} md="4">
                      <CLabel className={"label-name-1"}>
                        Date of Retirmment{" "}
                      </CLabel>
                      <CInput type="date" id={"rajyasabhadateretirement"} />
                    </CCol>
                  </CRow>
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
                        id={"rajyasabhacancel"}
                        className={"cancelBtn"}
                        onClick={cancelchangeMunicipalCorporation}
                      >
                        CANCEL
                      </CButton>
                      <CButton
                        style={{
                          float: "right",
                          marginRight: "15px",
                        }}
                        id={"rajyasabhasave"}
                        className={"saveBtn"}
                        onClick={saveCorporation}
                      >
                        Map Member
                      </CButton>{" "}
                    </CCol>
                  </CCol>
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

export default RajyaSabha;
