import {
  CButton,
  CCard,
  CCol,
  CInput,
  CLabel,
  CRow,
  CSelect,
} from "@coreui/react";
import React, { useState } from "react";
import Toaster from "src/views/notifications/toaster/Toaster";
import CDataTable from "../../CoreComponents/table/CDataTable";
import { saveCreateCorporation } from "../../../services/ApiService";
import { toast } from "react-toastify";
import DEFAULT_IMAGE from "../../../assets/img/No-image-icon.png";
import Select, { components } from "react-select";
const AssignPartyPosting = () => {
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
        Name: "Volunteer Team",
        Type: "Head Quaters",
        Department: "Voluntery",
        Designation: "Secretary",
        Role: "General",
        Status:"Assigned",
        EnteredBy:"01/06/2021",
        EnteredOn:"06/06/2021"
      }
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
    { key: "Name", label: "Name of Party Office", _style: { width: "10%" } },
    { key: "Type", label: "Type of Office", _style: { width: "10%" } },
    { key: "Department", label: "Department", _style: { width: "10%" } },
    { key: "Designation", label: "Designation", _style: { width: "10%" } },
    { key: "Role", label: "Role", _style: { width: "10%" } },
    { key: "Status", label: "Status", _style: { width: "10%" } },
    { key: "EnteredBy", label: " From Date", _style: { width: "10%" } },
    { key: "EnteredOn", label: " To Date", _style: { width: "10%" } },
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
        Name: "Volunteer Team",
        Type: "Head Quaters",
        Department: "Voluntery",
        Designation: "Secretary",
        Role: "General",
        Status:"Assigned",
        Member:"Arun",
        EnteredBy:"Sathiskumar",
        EnteredOn:"01/06/2021"
      },
      {
        SNo: "2",
        Name: "Lawyers Association",
        Type: "District Branch Office",
        Department: "Lawyers",
        Designation: "Vice President",
        Role: "General",
        Status:"Assigned",
        Member:"Sathish",
        EnteredBy:"Sathiskumar",
        EnteredOn:"01/06/2021"
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
  const selectTypeofOffice = [
    { value: "Head Quaters", label: "Head Quaters" },
    { value: "District Party Office", label: "District Party Office" },
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
const selectName = [{value:"Sathishkumar",label:"SathishKumar"}]
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

  const handleClick = (e) => {
    document.getElementById("profileImage").click();
  };
  return (
    <div>
      {hideMappingMunicipal && (
        <div>
          <CCard className={"cardSave"}>
            <div className={"main-headerlabel"}>
              <span className={"header-label"}>
                View Assigned Party Posting
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
                  <CRow style={{ marginTop: "45px" }}>
                    <CCol >
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
                            marginRight: "1085px",
                          }}
                          id={"saveAbbreviationConfigureCode"}
                          className={"saveBtn"}
                          onClick={changeMunicipalCorporation}
                        >
                          Assign Party Posting
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
                        // className={"input-align"}
                        id={"municipalstatename"}
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
                        id={"municipaldistrict"}
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
                        // className={"input-align"}
                        id={"municipaldistrict"}
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
                    items={userData1}
                    fields={fields1}
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
                          <td className="py-2">
                            <CRow>
                              <CCol style={{ fontSize: "1.15rem" }} md="12">
                                <i
                                  onClick={() => {
                                    //   toggleDetails(index);
                                  }}
                                ></i>
                                <i
                                     style={{
                                       marginRight: "5px",
                                       color: "#3480e2",
                                       cursor: "pointer",
                                     }}
                                     id={"locationLibraryEdit"}
                                    //  onClick={() => EditCountry(item)}
                                     className="fas fa-edit"
                                   ></i>
                                   <i
                                    //  onClick={() => deleteConfirm(item._id)}
                                     id={"locationLibraryDelete"}
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

      {hideCorporation && (
        <div>
          <CCard className={"cardSave"}>
            <div className={"main-headerlabel"}>
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

                  <CRow
                    className={"row-alignment"}
                    md="12"
                    sm="12"
                    lg="12"
                    style={{ marginLeft: "7px" }}
                  >
                    <CCol className={"column-align"} md="4">
                      <CLabel className={"label-name-1"}>
                        Type of Office
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <Select
                        // className={"input-align"}
                        id={"municipalstatename"}
                        // name={"municipalTypeofOffice"}
                        placeholder={"Select Type of Office"}
                        value={typeofOfficess}
                        onChange={(e) => setTypeofOfficess(e)}
                        options={selectTypeofOffice}
                      />
                    </CCol>

                    <CCol className={"column-align"} md={4} lg={4}>
                      <CLabel className={"label-name-1"}>
                        Department Name
                        <span className={"text-danger"}> *</span>
                      </CLabel>
                      <Select
                        // className={"input-align"}
                        // id={"municipalstatename"}
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
                    style={{ marginLeft: "7px" }}
                  >
                    <CCol className={"column-align"} md="4">
                      <CLabel className={"label-name-1"}>
                        Type of Party / Party Wings Office
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <Select
                        // className={"input-align"}
                        id={"municipalarea"}
                        name={"partyPostingTypeofWings"}
                        placeholder={" Select Office Location"}
                        value={locations.city}
                        onChange={(e) => setLocations(e)}
                        options={selectTypeofParty}
                      />
                    </CCol>

                    <CCol className={"column-align"} md={4} lg={4}>
                      <CLabel className={"label-name-1"}>
                        Designation Name
                        <span className={"text-danger"}> *</span>
                      </CLabel>
                      <Select
                        //   className={"input-align"}
                        placeholder="Select Designation "
                        id={"partypostingDesignation"}
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
                    style={{ marginLeft: "7px" }}
                  >
                    <CCol className={"column-align"} md="4">
                      <CLabel className={"label-name-1"}>
                        Name of the Office Location
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <Select
                        // className={"input-align"}
                        id={"municipalstatename"}
                        name={"partyPostingOfficeLocation"}
                        placeholder={"Select Office Location"}
                        value={locations.district}
                        onChange={(e) => setLocations(e)}
                        options={selectLocation}
                      />
                    </CCol>

                    <CCol className={"column-align"} md={4} lg={4}>
                      <CLabel className={"label-name-1"}>
                        Role Name
                        <span className={"text-danger"}> *</span>
                      </CLabel>
                      <Select
                        // className={"input-align"}
                        placeholder="Select Role Name"
                        id={"municipalcorporation"}
                        name={"partyPostingrole   "}
                        type={"text"}
                        value={locations.district}
                        onChange={(e) => setLocations(e)}
                        options={selectRole}
                      />
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
                        Assign
                      </CButton>{" "}
                    </CCol>
                  </CCol>
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
                      Select Party Member
                    </CLabel>
                  </CCol>
                  <CRow className={"row-alignment"}>
                    <CCol className={"column-align"} md="6">
                      <CLabel className={"label-name"}>
                        Name of the Member
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <Select
                        className={"input-align"}
                        id={"municipalstatename"}
                        name={"state"}
                        placeholder={"Select Type of Office"}
                        value={locations.district}
                        onChange={(e) => setLocations(e)}
                        options={selectName}
                      />
                    </CCol>
                  </CRow>

                  <CRow className={"row-alignment"}>
                    <CCol className={"column-align"} md="4">
                      <CLabel className={"label-name"}>
                        Name
                        <span
                          style={{ fontSize: "14px", fontFamily: "normal" }}
                        >
                          {" "}
                          - SathishKumar
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
                    <CCol className={"column-align"} md="4">
                      <CLabel className={"label-name"}>
                        DOB
                        <span
                          style={{ fontSize: "14px", fontFamily: "normal" }}
                        >
                          {" "}
                          - 22/07/1996
                        </span>
                      </CLabel>
                    </CCol>
                    <CCol className={"column-align"} md="4">
                      <CLabel className={"label-name"}>
                        Education
                        <span
                          style={{ fontSize: "14px", fontFamily: "normal" }}
                        >
                          {" "}
                          - Mechanical Engineer
                        </span>
                      </CLabel>
                    </CCol>
                  </CRow>
                  <CRow className={"row-alignment"}>
                    <CCol className={"column-align"} md="4">
                      <CLabel className={"label-name"}>
                        Occupation{" "}
                        <span
                          style={{ fontSize: "14px", fontFamily: "normal" }}
                        >
                          {" "}
                          - Software Developer                                              
                        </span>{" "}
                        <span>-</span>
                      </CLabel>
                    </CCol>
                  </CRow>
                </div>

                <CRow
                  style={{
                    padding: "4%",
                    marginTop: "-2.5%",
                    marginLeft: "-10px",
                  }}
                >
                  <CDataTable
                    items={userData}
                    fields={fields}
                    columnFilter
                    tableFilter
                    tableLabel={"List of Other Party Posting Held By - Sathish  "}
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
                                    //  onClick={() => deleteConfirm(item._id)}
                                     id={"locationLibraryDelete"}
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
  );
};

export default AssignPartyPosting;
