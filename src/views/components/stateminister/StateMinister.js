import {
    CButton,
    CCard,
    CCol,
    CInput,
    CLabel,
    CRow,
    CSelect,
    CInputRadio,
    CFormGroup,
  } from "@coreui/react";
  import React, { useState } from "react";
  import Toaster from "src/views/notifications/toaster/Toaster";
  import CDataTable from "../../CoreComponents/table/CDataTable";
  import { saveCreateCorporation } from "../../../services/ApiService";
  import { toast } from "react-toastify";
  import DEFAULT_IMAGE from "../../../assets/img/No-image-icon.png";
  import Select, { components } from "react-select";
  import "./StateMinister.css";
  const StateMinister = () => {
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
    const [ministryList, setMinistryList] = useState(true);
    const [ministryCreate, setMinistryCreate] = useState(false);
    const [ministryListadd, setMinistryListadd] = useState(true);
    const [ministryCreateadd, setMinistryCreateadd] = useState(false);
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
    const [chairone, setchairOne] = useState(false);
    const [chairtwo, setchairTwo] = useState(true);
    const [vice, setvice] = useState(false);
    const [partypost, setpartypost] = useState(false);
    const [gridone, setGridOne] = useState(true);
    const [gridtwo, setGridTwo] = useState(false);
    const [gridthree, setGridThree] = useState(false);
    const [gridfour, setGridFour] = useState(false);
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
      setGridThree(false);
      setGridFour(false);
    };
    const chiefministerShow = () => {
      setGridOne(true);
      setGridTwo(false);
      setGridThree(false);
      setGridFour(false);
    };
   
    const ministryShow = () => {
      setGridOne(false);
      setGridTwo(false);
      setGridThree(true);
     
    };
    const userData = [];
  
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
    const userData1 = [];
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
      { value: "Arun Kumar", label: "Kalaiyarasan Lawyer Association Vice President of DMK N0 14 Nazarathpet Kanchipuram" },
      { value: "Arun Kumar", label: "Arun Kumar" },
      { value: "Sathish Kumae", label: "Sathish Kumaer" },
      {
        value: "venkatesh",
        label:
          "M Venkatesh ,Transportation Minister, Nsk Nagar,Nadaipathai Street, Wallajabhad, Chennai-85",
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

 
    const enableCreate = async () => {
        await setMinistryList(false);
        await setMinistryCreate(true);
      };

    const stateselect = [{ value: "Tamil Nadu", label: "Tamil Nadu" }];
  
  
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
          setchairTwo(true);
          setchairOne(false);
          setvice(false);
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
    const [selected, setSelected] = useState({});
  const selectMinistry = [{value:"Transportation Ministry", label:"Transportation Ministry"}]
    return (
      <div className={menu.style3}>
        {sideBar1 && (
          <div className={menu.style} style={{ minHeight: "800px" }}>
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
                    - Kalaiyarasan
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
  
            <CRow
              className={"row-alignment"}
              style={{ marginLeft: "-61px", marginTop: "5px" }}
            >
              <CCol
                className={"column-align"}
                md="4"
                style={{ marginTop: "-60px" }}
              >
                <CLabel className={"label-name"}>
                  DOB
                  <span style={{ fontSize: "14px", fontFamily: "normal" }}>
                    {" "}
                    - 17/10/1972
                  </span>
                </CLabel>
              </CCol>
            </CRow>
            <CRow style={{ marginTop: "25px" }}>
              <CCol>
                <CButton
                  style={{ marginTop: "20px" }}
                  onClick={chiefministerShow}
                  className={"saveBtn"}
                >
                  Chief Minister
                </CButton>
                <CButton
                  className={"saveBtn"}
                  style={{ marginTop: "20px", marginLeft: "10px" }}
                  onClick={deputychiefministerShow}
                >
                 Deputy Chief Minister
                </CButton>
                <CButton
                  onClick={ministryShow}
                  className={"saveBtn"}
                  style={{ marginTop: "20px", marginLeft: "10px" }}
                >
                 Ministry
                </CButton>
              
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
                          Corporation:"Kalaiyarasan",
                          Ministry:"Agriculture Minister",
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
                      tableLabel={"History of chief Minister"}
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
                            Name:"Kalaiyarasan",
                            Ministry:"Agriculture Minister",
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
                      columnFilter
                      tableFilter
                      tableLabel={"History of Deputy Chief Minister "}
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
                            Name:"Kalaiyarasan",
                            Ministry:"Food Minister",
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
                        { key: "status", label: "Status", _style: { width: "10%" } },
                        
                      ]}
                      columnFilter
                      tableFilter
                      tableLabel={"History of Ministry"}
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
                    -
                  </span>
                </CLabel>
              </CCol>
              <CCol className={"column-align"} md="4">
                <CLabel className={"label-name"}>
                  Gender
                  <span style={{ fontSize: "14px", fontFamily: "normal" }}>
                    {" "}
                    -
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
                    -
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
                <Select
                  style={{ width: "50px", height: "50px" }}
                  id={"rajyasabhaStatus"}
                  name={"Status"}
                  placeholder={" Select Status "}
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
                <span className={"header-label"}>State Minister</span>
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
                              marginRight: "1185px",
                            }}
                            id={"saveAbbreviationConfigureCode"}
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
                          id={"stateMinisterState"}
                          name={"state"}
                          placeholder={"Select State"}
                          // value={locations.district}
                          // onChange={changeHandler}
                          options={stateselect}
                        />
                      </CCol>
                      <CLabel className={"label-name-1"} style={{ marginLeft: "560px", marginTop:"30px",position:"absolute"}} >
                          Type of Role
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                      <CCol md="6" className={"column-align"} style={{ marginLeft: "50px" , marginTop:"70px"}}>
                     
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
                              Deputy  Chief Minister
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
                          items={userData1}
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
                              State:"Tamil Nadu",
                              Name:"M Venkatesan",
                              Ministry:"Health Minister",
                              from:"25/06/2011",
                              to:"12/03/2016",
                              Status:"Retired"
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
                              State:"Tamil Nadu",
                              Name:"Kalaiyarasan",
                              Ministry:"Education Minister",
                              from:"21/02/2014",
                              to:"12/06/2024",
                              Status:"Active"
                            },
                            {
                                SNo: "3.",
                                State:"Tamil Nadu",
                                Name:"M Venkatesan",
                                Ministry:"Transportation Minister",
                                from:"09/12/2018",
                                to:"16/06/2026",
                                Status:"Active"
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
                            { key: "State", label: "State", _style: { width: "10%" } },
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
                          tableLabel={"List of Deputy Chief Minister in a State"}
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
                </div>
              )}
            </CCard>
          </div>
        )}
  
        {hideCorporation && (
          <div>
            <CCard className={"cardSave"} style={{ minHeight: "1200px" }}>
              <div className={"main-headerlabel"}>
                <span className={"header-label"}>Add Minister Page</span>
              </div>
              {locationHide.corporation && (
                <div>
                  <div style={{ marginLeft: "-26px" }}>
                  
                    <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                      <CCol className={"column-align"} md="4">
                        <CLabel className={"label-name-1"}>
                          State
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <Select
                          // className={"input-align"}
                          id={"stateMinisterSelectState"}
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
                        <CCol md="12" style={{ marginLeft: "-10px" }}>
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
                              Deputy  Chief Minister
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
                    <CRow className={"row-alignment"} style={{marginLeft:"35px", marginTop:"20px"}}>
                  {ministryList && (
                    <React.Fragment>
                      <CCol md={4} lg={4}>
                        <CLabel className={"label-name-1"}>
                      Ministry
                          <span className={"text-danger"}> *</span>
                        </CLabel>
                        <Select
                          placeholder="Select Ministry"
                          id={"stateministerMinistry"}
                          type={"text"}
                      
                         options={selectMinistry}
                        />
                      </CCol>
                      <CCol  md={1} lg={1}>
                        <CButton
                          shape={"pill"}
                          id={"addmunicipalcorporation"}
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
                              id={"locationLibraryStateEdit"}
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
                      <CRow className={"column-align3"} sm={12} md={12} lg={12}>

                     
                      <CCol  md="3">
                        <CLabel className={"label-name-1"}>
                         Ministry
                          <span className={"text-danger"}> *</span>
                        </CLabel>

                        <CInput
                          id={"MunicipalName"}
                          name={"stateministerMinistryName"}
                          placeholder="Enter Ministry"
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
                    <CRow
                      className={"row-alignment"}
                      md="12"
                      sm="12"
                      lg="12"
                      style={{ marginLeft: "7px" }}
                    >
                      <CCol className={"column-align"} md="6" style={{marginLeft:"30px"}}>
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
                        Member Details Display
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
                            - M Venkatesan
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
                          Age
                          <span
                            style={{ fontSize: "14px", fontFamily: "normal" }}
                          >
                            {" "}
                            - 12/03/1976
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
                        <CLabel className={"label-name-1"}>From Date </CLabel>
                        <CInput type="date" id={"rajyasabhadatefrom"} />
                      </CCol>
                      <CCol className={"column-align"} md="4">
                        <CLabel className={"label-name-1"}>To Date </CLabel>
                        <CInput type="date" id={"rajyasabhadatefrom"} />
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
                          id={"cancelAbbreviationConfigureCode"}
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
                          id={"saveAbbreviationConfigureCode"}
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
                          marginLeft: "65px",
  
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
                                  town:"kanchipuram",
                                  ward:"0014",
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
          </div>
        )}
      </div>
    );
  };
  
  export default StateMinister;
  