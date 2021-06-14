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
import CDataTable from "../../CoreComponents/table/CDataTable";
import { saveCreateCorporation } from "../../../services/ApiService";
import Select, { components } from "react-select";
import { toast } from "react-toastify";
const PartyPosting = () => {
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
  const selectTypeofOffice = [{value:"Head Quaters",label:"Head Quaters"},{value:"District Party Office",label:"District Party Office"}]
  const selectDepartment= [{value:"Physician",label:"Physician"},{value:"Weaver",label:"Weaver"}]
  const selectDesignation =[{value:"Team Leader",label:"Team Leader"},{value:"Vice President",label:"Vice President"}]
  const selectTypeofParty = [{value:"Youth Wings Association",label:"Youth Wings Association"},{value:"Lawyers Wings Association",label:"Lawyers Wings Association"}]
  const selectLocation = [{value:"Chennai Youth Wings Office ",label:"Chennai Youth Wings Office "},{value:"Chennai Lawyers Wings Office ",label:"Chennai Lawyers Wings Office"}]
  const selectRole  = [{value:"General",label:"General"},{value:"General",label:"General"}]
  const selectAdministartive =[{value:"Head Quaters Chennai Physician Under Secretary General ",label:"Head Quaters Chennai Physician Under Secretary General"},]
  const selectFunctional =[{value:"Head Quaters Chennai Physician  Secretary General ",label:"Head Quaters Chennai Physician  Secretary General"},]
  const userData2 = [
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
  const userData = [
    {
        SNo: "1",
        Name: "Layers Team",
        Type: "Head Quaters",
        Department: "Layers",
        Designation: "Under Secretary",
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
  const userData3 = [
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
  const fields1 = [
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
  const userData1 = [
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
    setLocation({...location,[e.target.name]:e.target.value});
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
  const cancelchange = () => {
    setHideMappingmunicipal(true);
    setHideCorporation(false);
  };
  const [typeofOfficess, setTypeofOfficess] =useState("")
  return (
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
                            marginRight: "855px",
                          }}
                          id={"saveAbbreviationConfigureCode"}
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
                      
                        id={"municipalstatename"}
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
                      
                        id={"municipaldistrict"}
                        name={"city"}
                        placeholder={" Select Office Location"}
                        value={locations.city}
                        onChange={changeHandler}
                      />
                    </CCol>
                
                  </CRow>
                </div>
               
                <CRow style={{ padding: "4%", marginTop: "-1.5%",marginLeft:"-5px" }}>
                  <CDataTable
                    items={userData1}
                    fields={fields1}
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
                          <td className="py-2">
                            <CRow>
                              <CCol style={{ fontSize: "1.15rem" }} md="12">
                                <i
                                  onClick={() => {
                                  
                                  }}
                                ></i>
                                <i
                                   style={{
                                     marginRight: "5px",
                                     color: "#3480e2",
                                     cursor: "pointer",
                                   }}
                                   id={"locationLibraryEdit"}
                               
                                   className="fas fa-edit"
                                 ></i>
                                 <i
                               
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
                        
                        id={"municipalstatename"}
                        
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
                        value={locations.district}
                        onChange={(e)=>setLocations(e)}
                        options={selectDepartment}
                      />
                      </CCol>
                      <CCol className={"column-align"} md={1} lg={1}>
                        <CButton
                          shape={"pill"}
                          id={"addmunicipalcorporation"}
                          style={{ marginTop: "30px" }}
                          className={"saveBtn"}
                          onClick={addDepartment}
                          
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
                  {departmentCreate && (
                    <React.Fragment>
                      <CRow className={"column-align3"} sm={12} md={12} lg={12}>

                     
                      <CCol  md="3">
                        <CLabel className={"label-name-1"}>
                         Department Name
                          <span className={"text-danger"}> *</span>
                        </CLabel>

                        <CInput
                          
                          id={"MunicipalName"}
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
                         
                          id={"municipalabrreviation"}
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
                          id={"municipalcode"}
                         
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
                  <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                    <CCol className={"column-align"} md="4" >
                      <CLabel className={"label-name-1"}>
                      Type of Party / Party Wings Office
                      
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <Select
                     
                       
                        id={"municipalarea"}
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
                          value={locations.city}
                          onChange={(e)=>setLocations(e)}
                          options={selectDesignation}
                         
                        />
                      </CCol>
                      <CCol className={"column-align"} md={1} lg={1}>
                        <CButton
                          shape={"pill"}
                          id={"addmunicipalcorporation"}
                          style={{ marginTop: "30px" }}
                          className={"saveBtn"}
                          onClick={addDesignation}
                         
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
                  {designationCreate && (
                    <React.Fragment>
                      <CRow className={"column-align3"} sm={12} md={12} lg={12}>

                     
                      <CCol  md="3">
                        <CLabel className={"label-name-1"}>
                         Designation Name
                          <span className={"text-danger"}> *</span>
                        </CLabel>

                        <CInput
                         
                          id={"MunicipalName"}
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
                         
                          id={"municipalabrreviation"}
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
                          id={"municipalcode"}
                         
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
                  <CRow className={"row-alignment"}>
                  <CCol className={"column-align"} md="4">
                      <CLabel className={"label-name-1"}>
                      Name of the Office Location
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <Select
                        
                        id={"municipalstatename"}
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
                       
                          placeholder="Select Role Name"
                          id={"municipalcorporation"}
                          name={"partyPostingrole   "}
                          type={"text"}
                          value={locations.district}
                          onChange={(e)=>setLocations(e)}
                          options={selectRole}
                        />
                      </CCol>
                      <CCol className={"column-align"} md={1} lg={1}>
                        <CButton
                          shape={"pill"}
                          id={"addmunicipalcorporation"}
                          style={{ marginTop: "30px" }}
                          className={"saveBtn"}
                          onClick={addRole}
                         
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
                  {roleCreate && (
                    <React.Fragment>
                      <CRow className={"column-align3"} sm={12} md={12} lg={12}>

                     
                      <CCol  md="3">
                        <CLabel className={"label-name-1"}>
                        Role Name
                          <span className={"text-danger"}> *</span>
                        </CLabel>

                        <CInput
                          
                          id={"MunicipalName"}
                          name={"municipalname"}
                          
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
                          
                          id={"municipalabrreviation"}
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
                          id={"municipalcode"}
                         
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
                        id={"cancelAbbreviationConfigureCode"}
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
                        id={"saveAbbreviationConfigureCode"}
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
                        id={"municipalstatename"}
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
                        id={"saveAbbreviationConfigureCode"}
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
                    items={userData2}
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
                        id={"municipalstatename"}
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
                        id={"saveAbbreviationConfigureCode"}
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
                    items={userData3}
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

export default PartyPosting;
