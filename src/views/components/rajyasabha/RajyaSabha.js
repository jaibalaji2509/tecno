import {
  CButton,
  CCard,
  CCol,
  CInput,
  CLabel,
  CRow,
  CSelect,
  CTextarea,
} from "@coreui/react";
import React, { useState } from "react";
import Toaster from "src/views/notifications/toaster/Toaster";
import CDataTable from "../../CoreComponents/table/CDataTable";
import { saveCreateCorporation } from "../../../services/ApiService";
import { toast } from "react-toastify";
import DEFAULT_IMAGE from "../../../assets/img/No-image-icon.png";
import Select, { components } from "react-select";
import "./RajyaSabha.css";
const RajyaSabha = () => {
  const [location, setLocation] = useState({
    state: "",
    district: "",
    city: "",
    ward: "",
    area: "",
    street: "",
    pincode: "",
  });
  const [mobilenumber, setMobileNumber] = useState("");
  const [otpHide, setOtpHide] = useState(false);
  const [locations, setLocations] = useState({
    state: "",
    district: "",
    city: "",
    ward: "",
    area: "",
    street: "",
    pincode: "",
  });
  const [files, setFiles] = useState("");
  const [municipalList, setMunicipalList] = useState(true);
  const [MunicipalCreate, setmunicipalCreate] = useState(false);
  const [municipalListadd, setMunicipalListadd] = useState(true);
  const [MunicipalCreateadd, setmunicipalCreateadd] = useState(false);
  const [municipalCorporation, setMunicipalCorporation] = useState({});
  const [municipalName, setMuniicipalName] = useState("");
  const [departmentList, setDepartmentList] = useState(true);
  const [departmentCreate, setDepartmentCreate] = useState(false);
  const [designationList, setDesignationList] = useState(true);
  const [designationCreate, setDesignationCreate] = useState(false);
  const [roleList, setRoleList] = useState(true);
  const [roleCreate, setRoleCreate] = useState(false);
  const [locationHide, setLocationHide] = useState({
    corporation: true,
    municipalLocation: false,
    districtPanchayat: false,
    townPanchayat: false,
    villagePanchayat: false,
    cityLocation: false,
  });
  const [typeofOfficess, setTypeofOfficess] = useState("");
  const [PI, setPI] = useState("");
  const userData = [
    {
      SNo: "1",
      Name: "JaiBalaji",
      Type: "Head Quaters",
      Department: "Voluntery",
      Designation: "Secretary",
      Role: "General",
      Status: "Assigned",
      EnteredBy: "01/06/2021",
      EnteredOn: "06/06/2021",
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
    { key: "Name", label: "Name of Party Mmeber", _style: { width: "20%" } },
    { key: "Type", label: "Gender", _style: { width: "10%" } },
    { key: "Department", label: "Age", _style: { width: "10%" } },
    { key: "Designation", label: "From Date", _style: { width: "10%" } },
    { key: "Role", label: "To Date", _style: { width: "10%" } },
    { key: "Status", label: "Status", _style: { width: "10%" } },
    { key: "EnteredBy", label: "Entered By", _style: { width: "10%" } },
    { key: "EnteredOn", label: " Entered on", _style: { width: "10%" } },
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
  const userData1 = [
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
  const fields1 = [
    {
      key: "SNo",
      label: "S.NO",
      _style: { width: "3%" },
      sorter: false,
      filter: false,
    },
    { key: "Type", label: "Type of Office", _style: { width: "10%" } },
    { key: "Name", label: "Name of Office", _style: { width: "10%" } },
    { key: "Department", label: "Department", _style: { width: "10%" } },
    { key: "Designation", label: "Designation", _style: { width: "10%" } },
    { key: "Role", label: "Role", _style: { width: "10%" } },

    { key: "Member", label: "Name of the Member", _style: { width: "10%" } },

    { key: "EnteredBy", label: "Assigned By", _style: { width: "10%" } },
    { key: "EnteredOn", label: "Assigned On", _style: { width: "10%" } },
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
  const [passing, setPassing] = useState("");
  const [error, setError] = useState("");
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
  const selectDepartment = [
    { value: "Physician", label: "Physician" },
    { value: "Weaver", label: "Weaver" },
  ];
  const selectDesignation = [
    { value: "Team Leader", label: "Team Leader" },
    { value: "Vice President", label: "Vice President" },
  ];
  const selectTypeofParty = [
    { value: "Youth Wings Association", label: "Youth Wings Association" },
    { value: "Lawyers Wings Association", label: "Lawyers Wings Association" },
  ];
  const selectLocation = [
    {
      value: "Chennai Youth Wings Office ",
      label: "Chennai Youth Wings Office ",
    },
    {
      value: "Chennai Lawyers Wings Office ",
      label: "Chennai Lawyers Wings Office",
    },
  ];
  const selectRole = [
    { value: "General", label: "General" },
    { value: "General", label: "General" },
  ];
  const selectAdministartive = [
    {
      value: "Head Quaters Chennai Physician Under Secretary General ",
      label: "Head Quaters Chennai Physician Under Secretary General",
    },
  ];
  const selectFunctional = [
    {
      value: "Head Quaters Chennai Physician  Secretary General ",
      label: "Head Quaters Chennai Physician  Secretary General",
    },
  ];
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
  const savetownPanchayat = () => {
    console.log(locationHide, "hidr");
    setLocationHide({
      ...locationHide,
      villagePanchayat: true,
      townPanchayat: false,
    });
  };
  const saveVillagePanchayat = () => {
    console.log(locationHide, "hidr");
    setLocationHide({
      ...locationHide,
      villagePanchayat: false,
      cityLocation: true,
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
  const changeHandler = (e) => {
    setLocations({ ...locations, [e.target.name]: e.target.value });
  };
  const otpChangeHandle = (e) => {
    setMobileNumber(e.target.value);
    if (mobilenumber.length > 8) {
      setOtpHide(true);
    } else {
      setError("enter valid data");
    }
  };
  const addDepartment = async () => {
    await setDepartmentList(false);
    await setDepartmentCreate(true);
  };
  const addDesignation = async () => {
    await setDesignationList(false);
    await setDesignationCreate(true);
  };
  const addRole = async () => {
    await setRoleList(false);
    await setRoleCreate(true);
  };
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
  const enableCreateadd = async () => {
    await setMunicipalListadd(false);
    await setmunicipalCreateadd(true);
  };
  const selectName = [{ value: "Sathishkumar", label: "SathishKumar" }];
  const editStateadd = async () => {
    await setMunicipalListadd(false);
    await setmunicipalCreateadd(true);
    // formik.values.StateName = stateName.stateName;
    // formik.values.Abbreviation2 = stateName.abbreviation;
    // formik.values.Code2 = stateName.code;
    // setPassing(stateName._id);
    // getState();
    // getAllAreas();
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
  const handleSave = async (file, folder) => {
    if (file === undefined) {
      let e = "cancelled";
      return console.log(e);
    }
    if (file.size > 1048576) {
      return toast.warning("Please choose below 1 MB file");
    } else {
      const imgUri = URL.createObjectURL(file);
      setPI(file);
      setFiles(imgUri);
    }
  };

  //     const handleClick = () => {
  //      setSideBar1(false)
  //    };

  const handleClick = () => {
    switch (menu.menuStatus) {
      case "open":
        setMenu({
          menuStatus: "close",
          style3: "menu2",
          style: "menu active",
          style1: "menu1",
        });
        setSideBar1(true);
        break;
      case "close":
        setMenu({
          menuStatus: "open",
          style3: "menu1",
          style: "menu",
          style1: "menu1",
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
          style3: "menu2",
          style: "menu active",
          style1: "menu active",
        });
        setSideBar2(true);
        break;
      case "close":
        setMenu({
          menuStatus: "open",
          style3: "menu1",
          style: "menu",
          style1: "menu1",
        });
        setTimeout(() => {
          setSideBar2(false);
        }, 1000);
        break;
    }
  };
  const handleClick1 = () => {
    setSideBar2(false);
  };
  const [menu, setMenu] = useState({
    style: "menu",
    style1: "menu1",
    menuStatus: "open",
    style3: "menu1",
  });
  const [selected, setSelected] = useState({});
  const [gridShow, setGridShow] = useState({
    view1: false,
    view2: false,
    view3: false,
    view4:false
  });
  return (
    <div className={menu.style3}>
      {sideBar1 && (
        <div className={menu.style}>
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

          <CRow className={"row-alignment"} style={{ marginLeft: "-61px" }}>
            <CCol className={"column-align"} md="4">
              <CLabel className={"label-name"}>
                Name
                <span style={{ fontSize: "14px", fontFamily: "normal" }}>
                  {" "}
                  - Arun Kumar
                </span>
              </CLabel>
            </CCol>
            <CCol className={"column-align"} md="4">
              <CLabel className={"label-name"}>
                Gende
                <span style={{ fontSize: "14px", fontFamily: "normal" }}>
                  {" "}
                  - Male
                </span>
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
                  left: "-40%",
                  top: "-3%",
                }}
              />
            </CCol>
          </CRow>

          <CRow className={"row-alignment"} style={{ marginLeft: "-61px" }}>
            <CCol
              className={"column-align"}
              md="4"
              style={{ marginTop: "-120px" }}
            >
              <CLabel className={"label-name"}>
                DOB
                <span style={{ fontSize: "14px", fontFamily: "normal" }}>
                  {" "}
                  - 23/05/1990
                </span>
              </CLabel>
            </CCol>
          </CRow>
          <i
            style={{
              fontWeight: "700",
              padding: "10px",
              backgroundColor: "#1313d4",
              color: "#fff",
              borderRadius: "4px",
              cursor: "pointer",
              marginBottom: "15px",
            }}
            id={"memberregisterediticon"}
            className="fa fa-eye"
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
          </i>
          <i
            style={{
              fontWeight: "700",
              padding: "10px",
              backgroundColor: "#1313d4",
              color: "#fff",
              borderRadius: "4px",
              cursor: "pointer",
              marginBottom: "15px",
              marginLeft: "20px",
            }}
            id={"memberregisterediticon"}
            className="fa fa-eye"
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
          </i>
          <i
            style={{
              fontWeight: "700",
              padding: "10px",
              backgroundColor: "#1313d4",
              color: "#fff",
              borderRadius: "4px",
              cursor: "pointer",
              marginBottom: "15px",
              marginLeft: "20px",
            }}
            id={"memberregisterediticon"}
            className="fa fa-eye"
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
          </i>
          <i
            style={{
              fontWeight: "700",
              padding: "10px",
              backgroundColor: "#1313d4",
              color: "#fff",
              borderRadius: "4px",
              cursor: "pointer",
              marginBottom: "15px",
              marginLeft: "20px",
            }}
            id={"memberregisterediticon"}
            className="fa fa-eye"
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
          </i>
          {gridShow.view1 && (
            <CRow>
              <CCol
                style={{
                  marginLeft: "30px",

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
                      NameofParty: "08/06/2019",
                      TypeofOffice: "24/06/2025",
                      Department: "",
                      designation: "",
                      Role: "",
                      FromDate: "",
                      ToDate: "",

                      Status: "Active",
                    },
                    // {
                    //   SNo: "2",
                    //   FromDate: "21/05/2008",
                    //   ToDate: "21/05/2014",

                    //   Status: "InActive",
                    // },
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
                      NameofRepresentativePosting: "08/06/2019",
                      FromDate: "24/06/2025",
                      ToDate: "Active",
                      Status: "",
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
                      NameofMinistry: "08/06/2019",
                      FromDate: "24/06/2025",
                      ToDate: "",
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
                      NameofMinistry: "08/06/2019",
                      FromDate: "24/06/2025",
                      ToDate: "",
                    },
                  ]}
                />
              </CCol>
            </CRow>
          )}
          <CButton
            className={"menu"}
            style={{ position: "absolute", top: "15px", right: "15px" }}
            className={"cancelBtn"}
            onClick={() => {
              handleClick();
              handleClick2();
            }}
          >
            Back
          </CButton>
        </div>
      )}
      {sideBar2 && (
        <div className={menu.style1}>
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

          <CRow className={"row-alignment"} style={{ marginLeft: "-61px" }}>
            <CCol className={"column-align"} md="4">
              <CLabel className={"label-name"}>
                Name
                <span style={{ fontSize: "14px", fontFamily: "normal" }}>
                  {" "}
                  - Arun Kumar
                </span>
              </CLabel>
            </CCol>
            <CCol className={"column-align"} md="4">
              <CLabel className={"label-name"}>
                Gende
                <span style={{ fontSize: "14px", fontFamily: "normal" }}>
                  {" "}
                  - Male
                </span>
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
                  left: "-40%",
                  top: "-3%",
                }}
              />
            </CCol>
          </CRow>
          <CRow className={"row-alignment"} style={{ marginLeft: "-61px" }}>
            <CCol
              className={"column-align"}
              md="4"
              style={{ marginTop: "-120px" }}
            >
              <CLabel className={"label-name"}>
                DOB
                <span style={{ fontSize: "14px", fontFamily: "normal" }}>
                  {" "}
                  - 23/05/1998
                </span>
              </CLabel>
            </CCol>
          </CRow>
          <CCol style={{ marginTop: "-90px", marginLeft: "-40px" }}>
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
                // className={"input-align"}
                id={"rajyasabhaState"}
                name={"state"}
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
                id={"rajyasabhaStatus"}
                name={"Status"}
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
                  Update
                </CButton>{" "}
              </CCol>
            </CCol>
          </CRow>
          <CButton
            className={"menu"}
            style={{ position: "absolute", top: "15px", right: "15px" }}
            className={"cancelBtn"}
            onClick={handleClick2}
          >
            Back
          </CButton>
        </div>
      )}
      {hideMappingMunicipal && (
        <div>
          <CCard className={"cardSave"}>
            <div className={"main-headerlabel"}>
              <span className={"header-label"}>View Rajya Sabha</span>
            </div>
            {locationHide.corporation && (
              <div>
                <div style={{ marginLeft: "-26px" }}>
                  {/* <div className={"row-headerlabel"}>
                      <span
                        style={{ marginLeft: "70px" }}
                        className={"header-label"}
                      >
                        {" "}
                        Assign Party Posting{" "}
                      </span>
                    </div> */}
                  <CRow style={{ marginTop: "45px" }}>
                    <CCol md="10">
                      <CCol
                        md="5"
                        style={{
                          marginLeft: "5px",
                          float: "right",
                          marginTop: "-20px",
                        }}
                      >
                        <CButton
                          style={{
                            float: "right",
                            marginRight: "830px",
                          }}
                          id={"saveAbbreviationConfigureCode"}
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
                        // className={"input-align"}
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
                    marginLeft: "-25px",
                  }}
                >
                  <CDataTable
                    items={userData1}
                    fields={fields}
                    columnFilter
                    tableFilter
                    tableLabel={"List of MP - Rjay Sabha"}
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
                                <i
                                  //  onClick={() => deleteConfirm(item._id)}
                                  id={"locationLibraryDelete"}
                                  style={{
                                    marginLeft: "5px",
                                    color: "black",
                                    cursor: "pointer",
                                  }}
                                  className="fa fa-remove"
                                ></i>

                                <i
                                  //  onClick={() => deleteConfirm(item._id)}
                                  id={"locationLibraryDelete"}
                                  style={{
                                    marginLeft: "5px",
                                    marginLeft: "10px",
                                    color: "rgb(55, 224, 39)",
                                    cursor: "pointer",
                                  }}
                                  className="fa fa-refresh"
                                  onClick={handleClick2}
                                ></i>
                                <i
                                  style={{
                                    marginRight: "5px",
                                    marginLeft: "18px",
                                    color: "#3480e2",
                                    cursor: "pointer",
                                    position: "absolute",
                                  }}
                                  id={"memberregisterediticon"}
                                  className="fa fa-history"
                                  onClick={handleClick}
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

      {hideCorporation && (
        <div>
          <CCard className={"cardSave"}>
            <div className={"main-headerlabel"}>
              <span className={"header-label"}>
                Mapping Member to MP - Rajya Sabha
              </span>
            </div>
            {locationHide.corporation && (
              <div>
                <div style={{ marginLeft: "-26px" }}>
                  {/* <div className={"row-headerlabel"}>
                      <span
                        style={{ marginLeft: "70px" }}
                        className={"header-label"}
                      >
                        {" "}
                        Assign Party Posting{" "}
                      </span>
                    </div> */}

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
                        id={"municipalstatename"}
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
                      Mmeber Details Display
                    </CLabel>
                  </CCol>

                  <CRow className={"row-alignment"}>
                    <CCol className={"column-align"} md="4">
                      <CLabel className={"label-name"}>
                        Name
                        <span
                          style={{ fontSize: "14px", fontFamily: "normal" }}
                        >
                          {" "}
                          - Arun Kumar
                        </span>
                      </CLabel>
                    </CCol>
                    <CCol className={"column-align"} md="4">
                      <CLabel className={"label-name"}>
                        Gende
                        <span
                          style={{ fontSize: "14px", fontFamily: "normal" }}
                        >
                          {" "}
                          - Male
                        </span>
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
                          left: "-40%",
                          top: "-3%",
                        }}
                      />
                    </CCol>
                  </CRow>
                  <CRow
                    className={"row-alignment"}
                    style={{ marginTop: "-140px" }}
                  >
                    <CCol className={"column-align"} md="4">
                      <CLabel className={"label-name"}>
                        Age
                        <span
                          style={{ fontSize: "14px", fontFamily: "normal" }}
                        >
                          {" "}
                          - 23
                        </span>
                      </CLabel>
                    </CCol>
                  </CRow>
                  <CRow
                    className={"row-alignment"}
                    style={{
                      marginLeft: "4px",
                      marginBottom: "20px",
                      top: "10px",
                    }}
                  >
                    <CCol className={"column-align"} md="4">
                      <CLabel className={"label-name-1"}>
                        Date of Appointment{" "}
                      </CLabel>
                      <CInput type="date" id={"rajyasabhadatefrom"} />
                    </CCol>
                    <CCol className={"column-align"} md="4">
                      <CLabel className={"label-name-1"}>
                        Date of Retirmment{" "}
                      </CLabel>
                      <CInput type="date" id={"rajyasabhadatefrom"} />
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
                        Map Member
                      </CButton>{" "}
                    </CCol>
                  </CCol>
                </div>
              </div>
            )}
          </CCard>
        </div>
      )}
    </div>
  );
};

export default RajyaSabha;
