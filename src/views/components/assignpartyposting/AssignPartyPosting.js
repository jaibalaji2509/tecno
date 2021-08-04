import { CButton, CCard, CCol, CContainer, CLabel, CRow } from "@coreui/react";
import React, { useState } from "react";
import CDataTable from "../../CoreComponents/table/CDataTable";
import { saveCreateCorporation } from "../../../services/ApiService";
import { toast } from "react-toastify";
import DEFAULT_IMAGE from "../../../assets/img/No-image-icon.png";
import Select from "react-select";
import { Dropdown, Menu } from "antd";
import "antd/dist/antd.css";
import "./AssignPartyPosting.css";

const AssignPartyPosting = () => {
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

  const [selected] = useState("")
  const [files] = useState("");
  // const [, setMunicipalList] = useState(true);
  // const [, setmunicipalCreate] = useState(false);
  // const [, setMunicipalListadd] = useState(true);
  // const [, setmunicipalCreateadd] = useState(false);
  // // const [municipalCorporation, setMunicipalCorporation] = useState({});
  // // const [municipalName, setMuniicipalName] = useState("");
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
  const userData = [
    {
      SNo: "1",
      member: "SathishKumar",
      Name: "Volunteer Team",
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
    { key: "member", label: "Name of the Member", _style: { width: "10%" } },
    { key: "Name", label: "Name of Party Office", _style: { width: "10%" } },
    { key: "Type", label: "Type of Office", _style: { width: "10%" } },
    { key: "Department", label: "Department", _style: { width: "10%" } },
    { key: "Designation", label: "Designation", _style: { width: "10%" } },
    { key: "Role", label: "Role", _style: { width: "10%" } },
    { key: "Status", label: "Status", _style: { width: "10%" } },
    { key: "EnteredBy", label: " From Date", _style: { width: "10%" } },
    { key: "EnteredOn", label: " To Date", _style: { width: "10%" } },

    {
      key: "show_details",
      label: "Action",
      _style: { width: "10%" },
      sorter: false,
      filter: false,
    },
  ];
  const userDatamemberposting = [
    {
      SNo: "1",
      Name: "Volunteer Team",
      Type: "Head Quaters",
      Department: "Voluntery",
      Designation: "Secretary",
      Role: "General",
      Status: "Assigned",
      Member: "Arun",
      EnteredBy: "Sathiskumar",
      EnteredOn: "01/06/2021",
    },
    {
      SNo: "2",
      Name: "Lawyers Association",
      Type: "District Branch Office",
      Department: "Lawyers",
      Designation: "Vice President",
      Role: "General",
      Status: "Assigned",
      Member: "Sathish",
      EnteredBy: "Sathiskumar",
      EnteredOn: "01/06/2021",
    },
  ];
  const fields1memberposting = [
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
  const typeoffice=[{value :"office", label:"Type of Party Office"},
                    {value:"wings", label:"Type of Party wings Office"}];

  const selectName = [{ value: "Sathishkumar", label: "SathishKumar" }];
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
  const cancelMunicipalCorporation = () => {
    setHideMappingmunicipal(true);
    setHideCorporation(false);
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

  return (
    <div>
      {hideMappingMunicipal && (
        <div >
         <CCard
          className={"cardSave"}
          style={{
            minHeight: `${window.innerHeight - 198}px`,
            maxHeight: `${window.innerHeight - 198}px`,
            overflow: "auto",
            overflowX:"hidden",
          }}
        >
          <CContainer style={{marginLeft:"1em"}}>
            <div className={"main-headerlabel"} style={{marginLeft:"-12em"}}>
              <span className={"header-label"}>
                View Assigned Party Posting
              </span>
            </div>
            {locationHide.corporation && (
              <div>
                <div style={{ marginLeft: "-26px" }}>
                  <CRow style={{ marginTop: "45px" }}>
                    <CCol>
                      <CCol md="5">
                        <CButton
                          style={{
                            marginLeft: "3.8em",
                          }}
                          id={"assinpartypostingadding"}
                          className={"saveBtn"}
                          onClick={changeMunicipalCorporation}
                        >
                          Assign Party Posting
                        </CButton>{" "}
                      </CCol>
                    </CCol>
                  </CRow>
                  <CContainer>
                  <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                    <CCol className={"column-align"} md="4">
                      <CLabel className={"label-name-1"}>
                        Type of Office
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <Select
                        id={"assinpartypostingtypeofoffice"}
                        name={"state"}
                        placeholder={"Select Type of Office"}
                        value={locations.district}
                        onChange={changeHandler}
                        
                      />
                    </CCol>
                    <CCol className={"column-align"} md="4">
                      <CLabel className={"label-name-1"}>
                        Type of Party / Party Wings Office
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <Select
                        className={"input-align"}
                        id={"assinpartypostingwings"}
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
                        id={"assinpartypostingofficelocation"}
                        name={"city"}
                        placeholder={" Select Office Location"}
                        value={locations.city}
                        onChange={changeHandler}
                      />
                    </CCol>
                  </CRow>
                  </CContainer>
                </div>               
               
<CContainer>
                <CRow
                  style={{
                    padding: "6%",
                    marginTop: "0.5%",
                    marginLeft: "-40px",
                  }}
                >
                  <CDataTable
                    items={userDatamemberposting}
                    fields={fields1memberposting}
                    columnFilter
                    tableFilter
                    tableLabel={"List of Member with Posting"}
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
                </CContainer>
              </div>
            )}
            </CContainer>
          </CCard>
        </div>
      )}

      {hideCorporation && (
        <div>
          <CCard
          className={"cardSave"}
          style={{
            minHeight: `${window.innerHeight - 198}px`,
            maxHeight: `${window.innerHeight - 198}px`,
            overflow: "auto",
            overflowX:"hidden",
          }}
        >
          <CContainer>
            <div className={"main-headerlabel"} style={{marginLeft:"-12em"}}>
              <span className={"header-label"}>Assign Party Posting</span>
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
<CContainer>
                  <CRow
                    className={"row-alignment"}
                    md="12"
                    sm="12"
                    lg="12"
                    style={{ marginLeft: "0.2em" }}
                  >
                    <CCol className={"column-align"} md="5">
                      <CLabel className={"label-name-1"}>
                        Type of Office
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <Select
                        // className={"input-align"}
                        id={"assignpartypostingtypeofoffice"}
                        // name={"municipalTypeofOffice"}
                        placeholder={"Select Type of Office"}
                        value={typeofOfficess}
                        onChange={(e) => setTypeofOfficess(e)}
                       options={typeoffice}
                      />
                    </CCol>

                    <CCol className={"column-align"} md={5} lg={5}>
                      <CLabel className={"label-name-1"}>
                        Department Name
                        <span className={"text-danger"}> *</span>
                      </CLabel>
                      <Select
                        // className={"input-align"}
                        id={"assignpartypostingdepartment"}
                        name={"municipalDepartment"}
                        placeholder={"Select Department"}
                        value={locations.district}
                        onChange={(e) => setLocations(e)}
                        options={selectDepartment}
                      />
                    </CCol>
                  </CRow>                 
                  
                  <CRow
                    className={"row-alignment"}
                    md="12"
                    sm="12"
                    lg="12"
                    style={{ marginLeft: "0.2em" }}
                  >
                    <CCol className={"column-align"} md="5">
                      <CLabel className={"label-name-1"}>
                        Type of Party / Party Wings Office
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <Select
                        // className={"input-align"}
                        id={"assignpartypostingdepartmentwings"}
                        name={"partyPostingTypeofWings"}
                        placeholder={" Select Office Location"}
                        value={locations.city}
                        onChange={(e) => setLocations(e)}
                        options={selectTypeofParty}
                      />
                    </CCol>

                    <CCol className={"column-align"} md={5} lg={5}>
                      <CLabel className={"label-name-1"}>
                        Designation Name
                        <span className={"text-danger"}> *</span>
                      </CLabel>
                      <Select
                        //   className={"input-align"}
                        placeholder="Select Designation "
                        id={"assignpartypostingdesignation"}
                        type={"text"}
                        value={locations.city}
                        onChange={(e) => setLocations(e)}
                        options={selectDesignation}
                        // isDisabled={CountryCreate || CityCreate || AreaCreate}
                      />
                    </CCol>
                  </CRow>
                  <CRow
                    className={"row-alignment"}
                    style={{ marginLeft: "0.2em" }}
                  >
                    <CCol className={"column-align"} md="5">
                      <CLabel className={"label-name-1"}>
                        Name of the Office Location
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <Select
                        // className={"input-align"}
                        id={"assignpartypostingnamelocationoffice"}
                        name={"partyPostingOfficeLocation"}
                        placeholder={"Select Office Location"}
                        value={locations.district}
                        onChange={(e) => setLocations(e)}
                        options={selectLocation}
                      />
                    </CCol>

                    <CCol className={"column-align"} md={5} lg={5}>
                      <CLabel className={"label-name-1"}>
                        Role Name
                        <span className={"text-danger"}> *</span>
                      </CLabel>
                      <Select
                        // className={"input-align"}
                        placeholder="Select Role Name"
                        id={"assignpartypostingrolename"}
                        name={"partyPostingrole   "}
                        type={"text"}
                        value={locations.district}
                        onChange={(e) => setLocations(e)}
                        options={selectRole}
                      />
                    </CCol>
                  </CRow>
                  </CContainer>
                  <CRow md="10">
                    <CCol
                      md="5"
                      style={{
                        marginLeft: "50em",
                        float: "right",
                        marginTop: "1em",
                        position: "absolute",
                      }}
                    >
                      <CButton
                        style={{
                          float: "right",
                          cursor: "pointer",
                        }}
                        id={"assignpartypostingcancel"}
                        className={"cancelBtn"}
                        onClick={cancelMunicipalCorporation}
                      >
                        CANCEL
                      </CButton>{" "}
                      <CButton
                        style={{
                          float: "right",
                          marginRight: "15px",
                        }}
                        id={"assignpartypostingsave"}
                        className={"saveBtn"}
                        onClick={saveCorporation}
                      >
                        Assign
                      </CButton>{" "}
                    </CCol>
                  </CRow>

                  <CContainer>
                  <CRow>
                    <CCol style={{ marginTop: "6em", marginLeft: "65px" }}>
                      <CLabel
                        style={{
                          fontSize: "18px",
                          fontFamily: "Open Sans",
                          fontWeight: "700",
                        }}
                      >
                        Select Party Member
                      </CLabel>
                    </CCol>
                  </CRow>

                  <CRow className={"row-alignment"}>
                    <CCol className={"column-align"} md="6">
                      <CLabel className={"label-name-1"}>
                        Name of the Member
                        <span className={"text-danger"}>*</span>
                      </CLabel>                      
                      <Select
                        className={"input-align"}
                        id={"nameofmemberassignpartyposting"}
                        name={"state"}
                        placeholder={"Select Type of Office"}
                        value={locations.district}
                        onChange={(e) => setLocations(e)}
                        options={selectName}
                      />
                    </CCol>
                  </CRow>

                  <CContainer>
                <CRow
                  className={"LengthDataw"}
                  style={{ marginLeft: "2em", marginTop: "20px" }}
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
                      style={{ marginLeft: "8em" }}
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

                    <CLabel className={"reAssign-Detail"} style={{marginLeft:"8em"}}>
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
                          left: "-40%",
                          top: "-4em",
                        }}
                      />
                    </CCol>
                </CRow>
                <CRow
                  className={"LengthDataw"}
                  style={{ marginLeft: "2em", marginTop: "-10em" }}
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
                      style={{ marginLeft: "8em" }}
                    >
                      {selected.assignedTo
                        ? selected.assignedTo.firstName
                        : "22/07/1996"}
                    </CLabel>
                  </CCol >
                  <CCol md="6" style={{marginLeft:"29em",marginTop:"-2.4em"}}>
                    <CLabel className={"form-labels-9 col-md-5 reAssign-Label"}>
                    Education :{" "}
                    </CLabel>

                    <CLabel
                      className={"reAssign-Detail"}
                      style={{ marginLeft: "8em" }}
                    >
                      {selected.assignedTo
                        ? selected.assignedTo.firstName
                        : "Mechanical Engineer"}
                    </CLabel>
                  </CCol>
                  </CRow>
                  <CRow
                  className={"LengthDataw"}
                  style={{ marginLeft: "2em", marginTop: "20px" }}
                  sm={12}
                  md={12}
                  lg={12}
                >
                  <CCol md="6">
                    <CLabel className={"form-labels-9 col-md-5 reAssign-Label"}>
                    Occupation :{" "}
                    </CLabel>

                    <CLabel
                      className={"reAssign-Detail"}
                      style={{ marginLeft: "8em" }}
                    >
                      {selected.assignedTo
                        ? selected.assignedTo.firstName
                        : " Software Developer"}
                    </CLabel>
                  </CCol>
                  </CRow>
              </CContainer>
                            
                  </CContainer>
                </div>

                <CRow
                  style={{
                    padding: "4%",
                    marginTop: "1.5%",
                    marginLeft: "-10px",
                  }}
                >
                  <CDataTable
                    items={userData}
                    fields={fields}
                    columnFilter
                    tableFilter
                    tableLabel={
                      "List of Other Party Posting Held By - Sathish  "
                    }
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
          </CContainer>
          </CCard>
        </div>
      )}      
    </div>
  );
};

export default AssignPartyPosting;