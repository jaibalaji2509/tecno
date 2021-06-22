import {
  CButton,
  CCard,
  CCol,
  CInput,
  CLabel,
  CRow,
  CTextarea,
  CSelect,
} from "@coreui/react";
import React, { useState } from "react";
import CDataTable from "../../CoreComponents/table/CDataTable";
import { saveCreateCorporation } from "../../../services/ApiService";
import { toast } from "react-toastify";
import DEFAULT_IMAGE from "../../../assets/img/No-image-icon.png";
import Select from "react-select";
import "./ConstituencyMember.css";
const ConstituencyMember = () => {
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
  const [gridone, setGridOne] = useState(false)
  const [gridtwo, setGridTwo] = useState(false)
  const [gridthree, setGridThree] = useState(false)
  const [gridfour, setGridFour] = useState(false)
  const gridshow = () => {
    setGridOne(false);
    setGridTwo(true)
    setGridThree(false)
    setGridFour(false)
  }
  const chairshow = () => {
    setGridOne(true);
    setGridTwo(false)
    setGridThree(false)
    setGridFour(false)
  }
  const partshow = () => {
    setGridOne(false);
    setGridTwo(false)
    setGridThree(true)
    setGridFour(false)
  }
  const centralgrid = () => {
    setGridOne(false);
    setGridTwo(false)
    setGridThree(false)
    setGridFour(true)
  }

  const fields = [
    { key: "sNo", label: "Sl. No", _style: { width: "1%" } },
    {
      key: "typeconstituency",
      label: "Type of Constituency",
      _style: { width: "19%" },
    },
    {
      key: "name",
      label: "Name of Constituency",
      _style: { width: "10%" },
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
    { key: "member", label: "Name of the Member", _style: { width: "15%" } },
    { key: "from", label: "From Date", _style: { width: "10%" } },
    { key: "to", label: "To Date", _style: { width: "5%" } },
    { key: "status", label: "Status", _style: { width: "5%" } },
    {
      key: "show_details1",
      label: "Action",
      _style: { width: "20%" },
    },
  ];
  const userData1 = [
    {
      sNo: "1",
      typeconstituency: "Legistative Assembly",
      name: "Ambattur",
      state: "TamilNadu",
      city: "Chennai",
      member: "Joseph Samuel",
      from: "27/3/2021",
      to: "27/3/2026",
      status: "Active",
    },
    {
      sNo: "2",
      typeconstituency: "Legistative Assembly",
      name: "	Park Town",
      state: "TamilNadu",
      city: "Chennai",
      member: "K. Anbazhagan",
      from: "7/3/1967",
      to: "7/3/1971",
      status: "Died",
    },
    {
      sNo: "3",
      typeconstituency: "Legistative Assembly",
      name: " Chepauk-Thiruvallikeni",
      state: "TamilNadu",
      city: "Chennai",
      member: "Udhayanidhi Stalin",
      from: "11/5/2021",
      to: "11/5/2026",
      status: "Active",
    }
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
    { value: "	O. Panneerselvam, AIADMK since 11 May 2021", label: "	O. Panneerselvam, AIADMK since 11 May 2021" },
    { value: "stalin", label: "Udhayanidhi Youth Wing Secretary of DMK, 	25/9, Chittaranjan Road, Cenotaph Road, Alwarpet, Chennai - 600018, Tamil Nadu, India" }
  ];
  const SelectType = [
    { value: "All", label: "All" },
    { value: "Parliamentry Assembly", label: "Parlimentry Assemblly" },
    { value: "legistative", label: "Legistative Assembly" },
  ];
  const selectestatusupdate = [{
    value: "register", label: "Registration"
  },
  { value: "die", label: "Died" },
  ];
  const Selectstatus = [
    { value: "all", label: "All" },
    { value: "active", label: "Active" },
    { value: "retired", label: "Retired" },
    { value: "resigned", label: "Resigned" },
    { value: "died", label: "Died" },
  ];
  const selectstate = [
    { value: 'tamilnadu', label: "Tamilnadu" },
  ];
  const selectcity = [
    { value: "chennai", label: "Chennai" },
  ]
  const selectname = [
    { value: "ambattur", label: "Ambattur" },
    { value: "chepauk", label: "Chepauk-Thiruvallikeni constituency" }
  ]


  const [hideMappingMunicipal, setHideMappingmunicipal] = useState(true);
  const [hideCorporation, setHideCorporation] = useState(false);
  const changeMunicipalCorporation = () => {
    setHideMappingmunicipal(false);
    setHideCorporation(true);
  };
  const cancelbuttonadd = () => {
    setHideMappingmunicipal(true);
    setHideCorporation(false);
  };

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

  return (
    <div className={menu.style3}>
      {sideBar1 && (
        <div className={menu.style} style={{ minHeight: "800px", }}>
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
                  - K. Anbazhagan
                </span>
              </CLabel>
            </CCol>
            <CCol className={"column-align"} md="4">
              <CLabel className={"label-name"}>
                Gender
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

         
              <CRow className={"row-alignment"} style={{ marginLeft: "-61px", marginTop: "15px" }}>
                <CCol
                  className={"column-align"}
                  md="4"
                  style={{ marginTop: "-120px" }}
                >
                  <CLabel className={"label-name"}>
                    Age
                <span style={{ fontSize: "14px", fontFamily: "normal" }}>
                      {" "}
                  - 98
                </span>
                  </CLabel>
                </CCol>
              </CRow>
              <CRow style={{ marginTop: "25px" }}>
            <CCol>
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
            onClick={chairshow}
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
            onClick={gridshow}
            >
              PUBLIC REPRESENTATIVE POSTING
        
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
            onClick={partshow}
          >
           STATE MINISTRY PORTFOLIO
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
            onClick={centralgrid}
          >
            CENTRAL MINISTERS PORTFOLIO
          </i>
       
            </CCol></CRow>

              { gridone && (
            <div>
              <CRow >
                <CCol
                  style={{
                    marginLeft: "30px",

                    maxHeight: "290px",
                    minHeight: "290px",
                    marginBottom: "-25px",
                    overflow: "auto",
                    marginTop: "50px"
                  }}
                >

                  <CDataTable
                    items={[{
                      sNo: "1",
                      typeconstituency: "Dravida Munnetra Kazhagam",
                      name: "	Purasawalkam",
                      state: "Minister for Health and Social Welfare",
                      city: "Member of Parliament",
                      member: "General Secretary",
                      from: "15 March 1971",
                      to: '31 January 1976'
                    },
                    { sNo: "2" },
                    { sNo: "3" },
                    { sNo: "4" },
                    { sNo: "5" },
                    { sNo: "6" },
                    { sNo: "7" },
                    ]}
                    fields={[{ key: "sNo", label: "Sl. No", _style: { width: "1%" } },
                    {
                      key: "typeconstituency",
                      label: "Name of Party / Party Wings Office",
                      _style: { width: "19%" },
                    },
                    {
                      key: "name",
                      label: "Type of Office",
                      _style: { width: "10%" },
                    },
                    {
                      key: "state",
                      label: "Department",
                      _style: { width: "10%" },
                    },
                    {
                      key: "city",
                      label: "Designation",
                      _style: { width: "10%" },
                    },
                    { key: "member", label: "Role", _style: { width: "10%" } },
                    { key: "from", label: "From Date", _style: { width: "10%" } },
                    { key: "to", label: "To Date", _style: { width: "10%" } },
                    ]}
                    columnFilter
                    tableFilter
                    tableLabel={"Details of Party Posting"}
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
          { gridtwo && (
            <div>
              <CRow>
                <CCol
                  style={{
                    marginLeft: "30px",

                    maxHeight: "290px",
                    minHeight: "290px",
                    marginBottom: "-25px",
                    overflow: "auto",
                    marginTop: "50px"
                  }}
                >
                  <CDataTable
                    items={[{
                      sNo: "1",
                      name: "Member of Tamil Nadu legislative assembly",
                      from: "14 May 2001",
                      to: "12 May 2006",
                      status: "Died",
                    },
                    ]}
                    fields={[{ key: "sNo", label: "Sl. No", _style: { width: "1%" } },

                    {
                      key: "name",
                      label: "Name of Representative Posting",
                      _style: { width: "10%" },
                    },
                    { key: "from", label: "From Date", _style: { width: "10%" } },
                    { key: "to", label: "To Date", _style: { width: "5%" } },
                    { key: "status", label: "Status", _style: { width: "5%" } },
                    ]}
                    columnFilter
                    tableFilter
                    tableLabel={"Details of Public Representative Posting"}
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
          { gridthree && (
            <div>
              <CRow>
                <CCol
                  style={{
                    marginLeft: "30px",

                    maxHeight: "290px",
                    minHeight: "290px",
                    marginBottom: "-25px",
                    overflow: "auto",
                    marginTop: "50px"
                  }}
                >
                  <CDataTable
                    items={[{
                      sNo: "1",
                      typeconstituency: "Minister of Education",
                      name: "cabinet ministerial portfolios",
                      from: "16 May 1996",
                      to: "15 May 2001"
                    },

                    ]}
                    fields={[{ key: "sNo", label: "Sl. No", _style: { width: "1%" } },
                    {
                      key: "typeconstituency",
                      label: "Name of the Ministry",
                      _style: { width: "19%" },
                    },
                    {
                      key: "name",
                      label: "Portfolio",
                      _style: { width: "10%" },
                    },

                    { key: "from", label: "From Date", _style: { width: "10%" } },
                    { key: "to", label: "To Date", _style: { width: "5%" } },
                    ]}
                    columnFilter
                    tableFilter
                    tableLabel={"Details of State Ministry Portfolio"}
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
          { gridfour && (
            <div>

              <CRow>
                <CCol
                  style={{
                    marginLeft: "30px",

                    maxHeight: "290px",
                    minHeight: "290px",
                    marginBottom: "-25px",
                    overflow: "auto",
                    marginTop: "50px"
                  }}
                >
                  <CDataTable
                    items={[{
                      sNo: "1",
                      typeconstituency: "Minister of Finance",
                      name: "cabinet ministerial portfolios",
                      from: "17 May 2006",
                      to: " 15 May 2011",
                    },

                    ]}
                    fields={[{ key: "sNo", label: "Sl. No", _style: { width: "1%" } },
                    {
                      key: "typeconstituency",
                      label: "Name of the Ministry",
                      _style: { width: "19%" },
                    },
                    {
                      key: "name",
                      label: "Portfolio",
                      _style: { width: "10%" },
                    },

                    { key: "from", label: "From Date", _style: { width: "10%" } },
                    { key: "to", label: "To Date", _style: { width: "5%" } },


                    ]}
                    columnFilter
                    tableFilter
                    tableLabel={"Details of Central Ministers Portfolio"}
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
            className={"menu"}
            style={{ position: "absolute", top: "15px", right: "15px" }}
            className={"cancelBtn"}
            id="constimemberhistoryback"
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
                  - K. Anbazhagan
                </span>
              </CLabel>
            </CCol>
            <CCol className={"column-align"} md="4">
              <CLabel className={"label-name"}>
                Gender
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
              style={{ marginTop: "20px" }}
            >
              <CLabel className={"label-name"}>
                Age
                <span style={{ fontSize: "14px", fontFamily: "normal" }}>
                  {" "}
                  - 98
                </span>
              </CLabel>
            </CCol>
          </CRow>
          <CCol style={{ marginTop: "0px", marginLeft: "-40px" }}>
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
                style={{ width: "50px", height: "50px" }}
                id={"constituencymemstatus"}
                name={"Status"}
                placeholder={" Select Status "}
                
                options={selectestatusupdate}
              />
            </CCol>
            <CCol className={"column-align"} md="4">
              <CLabel className={"label-name-1"}>
                Note
                    <span className={"text-danger"}> *</span>
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
              <span className={"header-label"}>Constituency Member</span>
            </div>
            {locationHide.corporation && (
              <div>
                <div style={{ marginLeft: "-26px" }}>

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
                            marginRight: "1050px",
                          }}
                          id={"saveAbbreviationConfigureCode"}
                          className={"saveBtn"}
                          onClick={changeMunicipalCorporation}
                        >
                          Add Member to Constituency
                        </CButton>{" "}
                      </CCol>
                    </CCol>
                  </CRow>
                  <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                    <CCol className={"column-align"} md="4">
                      <CLabel className={"label-name-1"}>
                        Type of Constituency
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <Select
                        id={"constituencymemtype"}
                        name={"state"}
                        placeholder={"Select Constituency"}
                        options={SelectType}
                      />
                    </CCol>
                    <CCol className={"column-align"} md="4">
                      <CLabel className={"label-name-1"}>
                        Status
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <Select
                        id={"constituencymemstatus"}
                        name={"Status"}
                        placeholder={" Select Status "}
                        options={Selectstatus}
                      />
                    </CCol>
                  </CRow>
                  <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                    <CCol className={"column-align"} md="4">
                      <CLabel className={"label-name-1"}>
                        State
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <Select
                        id={"constituencymemtype"}
                        name={"state"}
                        placeholder={"Select State"}
                        options={selectstate}
                      />
                    </CCol>
                    <CCol className={"column-align"} md="4">
                      <CLabel className={"label-name-1"}>
                        District / City
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <Select
                        id={"constituencymemcity"}
                        name={"Status"}
                        placeholder={" Select Status "}
                        options={selectcity}
                      />
                    </CCol>
                  </CRow>

                </div>

               
                <CRow style={{ padding: "4%", marginTop: "-1.5%" ,marginLeft:"-40px"}}>
                  <CDataTable
                    items={userData1}
                    fields={fields}
                    columnFilter
                    tableFilter
                    tableLabel={"List of member of constituency"}
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
                              value={"select"}
                              style={{
                                width: "15px",
                                height: "15px",
                                marginLeft: "30px",
                                marginBottom: "10px",
                              }}
                            />
                            <CRow>
                              <CCol style={{ fontSize: "1.15rem" }} md="12">
                              </CCol>
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
                                  style={{
                                    marginRight: "5px",
                                    color: "#3480e2",
                                    cursor: "pointer",
                                  }}
                                  id={"constimemediticon"}
                                  className="fas fa-edit"
                                ></i>
                                <i
                                  id={"constimemDelete"}
                                  style={{
                                    marginLeft: "5px",
                                    color: "black",
                                    cursor: "pointer",
                                  }}
                                  className="fa fa-remove"
                                ></i>
                                <i
                                  id={"constimemDelete"}
                                  style={{
                                    marginLeft: "5px",

                                    color: "rgb(55, 224, 39)",
                                    cursor: "pointer",
                                  }}
                                  className="fa fa-refresh"
                                  onClick={handleClick2}
                                ></i>

                                <i
                                  style={{

                                    color: "#3480e2",
                                    cursor: "pointer",
                                    marginLeft: "10px",
                                  }}
                                  onClick={handleClick}
                                  id={"constimemediticon"}
                                  className="fa fa-history"
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
              </div>
            )}
          </CCard>
        </div>
      )}

      {hideCorporation && (
        <div>
          <CCard className={"cardSave"} style={{ minHeight: "900px" }}>
            <div className={"main-headerlabel"}>
              <span className={"header-label"}>
                Adding Member to Constituency
              </span>
            </div>
            {locationHide.corporation && (
              <div>
                <div style={{ marginLeft: "-26px" }}>
                  <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                    <CCol className={"column-align"} md="4">
                      <CLabel className={"label-name-1"}>
                        Type of Constituency
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <Select
                        id={"constituencymemtype"}
                        name={"state"}
                        placeholder={"Select Constituency"}
                        options={SelectType}
                      />
                    </CCol>
                    <CCol className={"column-align"} md="4">
                      <CLabel className={"label-name-1"}>
                        State
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <Select
                        id={"constituencymemtype"}
                        name={"state"}
                        placeholder={"Select State"}
                        options={selectstate}
                      />
                    </CCol>
                  </CRow>
                  <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                    <CCol className={"column-align"} md="4">
                      <CLabel className={"label-name-1"}>
                        District / City
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <Select
                        id={"constituencymemcity"}
                        name={"Status"}
                        placeholder={" Select Status "}
                        options={selectcity}
                      />
                    </CCol>
                    <CCol className={"column-align"} md="4">
                      <CLabel className={"label-name-1"}>
                        Name of the Constituency
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <Select
                        type={"text"}
                        id={"constituencymemname"}
                        className={"input-align"}
                        placeholder="Select....."
                        options={selectname}
                      />
                    </CCol>
                  </CRow>

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
                        id={"constimemstatename"}
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
                      Member Details 
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
                          - Udhayanidhi Stalin
                        </span>
                      </CLabel>
                    </CCol>
                    <CCol className={"column-align"} md="4">
                      <CLabel className={"label-name"}>
                        Gender
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
                    <CCol className={"column-align"} md="4" style={{ marginTop: "35px" }}>
                      <CLabel className={"label-name"}>
                        Age
                        <span
                          style={{ fontSize: "14px", fontFamily: "normal" }}
                        >
                          {" "}
                          - 43
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
                    <CCol className={"column-align"} md="4" style={{ marginTop: "60px" }}>
                      <CLabel className={"label-name-1"}>
                        Date of Appointment{" "}
                      </CLabel>
                      <CInput type="date" id={"constimemdatefrom"} />
                    </CCol>
                    <CCol className={"column-align"} md="4" style={{ marginTop: "60px" }}>
                      <CLabel className={"label-name-1"}>
                        Date of Retirmment{" "}
                      </CLabel>
                      <CInput type="date" id={"constimemdatefrom"} />
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
                          onClick={cancelbuttonadd}
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
                </div>
              </div>
            )}
          </CCard>
        </div>
      )}
    </div>
  );
};

export default ConstituencyMember;

