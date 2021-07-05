import {
    CButton,
    CCard,
    CCol,
    CInput,
    CLabel,
    CRow,
    CWidgetDropdown,
  } from "@coreui/react";
  import React, { useState } from "react";
  import CDataTable from "../../CoreComponents/table/CDataTable";
  import { saveCreateCorporation } from "../../../services/ApiService";
  import { toast } from "react-toastify";
  import DEFAULT_IMAGE from "../../../assets/img/No-image-icon.png";
  import Select from "react-select";
  import "./ClientInitiation.css";
  const ClientInitiation = () => {
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
    const [files, ] = useState("");
    // const [municipalList, setMunicipalList] = useState(true);
    // const [MunicipalCreate, setmunicipalCreate] = useState(false);
    // const [municipalListadd, setMunicipalListadd] = useState(true);
    // const [MunicipalCreateadd, setmunicipalCreateadd] = useState(false);
    // const [municipalCorporation, setMunicipalCorporation] = useState({});
    // const [municipalName, setMuniicipalName] = useState("");
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
    // const [typeofOfficess, setTypeofOfficess] = useState("");
    // const [, setPI] = useState("");
    const [, setchairOne] = useState(false);
    const [, setchairTwo] = useState(true);
    const [, setvice] = useState(false);
    // const [, setpartypost] = useState(false);
    const [gridone, setGridOne] = useState(true);
    const [gridtwo, setGridTwo] = useState(false);
    const [, setGridThree] = useState(false);
    const [, setGridFour] = useState(false);
    // const [, setTownC] = useState(false);
    const [townv, ] = useState(false);
    const [townw, ] = useState(false);
  
    // const corporationMayor = () => {
    //   setTownW(false);
    //   setTownC(true);
    //   setTownV(false);
    // };
  
    // const corporationDeputyMayor = () => {
    //   setTownW(false);
    //   setTownC(false);
    //   setTownV(true);
    // };
  
    // const corporationCouncilar = () => {
    //   setTownW(true);
    //   setTownC(false);
    //   setTownV(false);
    // };
  
    const deputymayorShow = () => {
      setGridOne(false);
      setGridTwo(true);
      setGridThree(false);
      setGridFour(false);
    };
    const mayorShow = () => {
      setGridOne(true);
      setGridTwo(false);
      setGridThree(false);
      setGridFour(false);
    };
    // const partshow = () => {
    //   setGridOne(false);
    //   setGridTwo(false);
    //   setGridThree(true);
    //   setGridFour(false);
    // };
    // const councilarShow = () => {
    //   setGridOne(false);
    //   setGridTwo(false);
    //   setGridThree(false);
    //   setGridFour(true);
    // };
    // const userData = [
    //   {  SNo:"1"}
    // ];
  
    const fields = [
      {
        key: "SNo",
        label: "S.NO",
        _style: { width: "3%" },
        sorter: false,
        filter: false,
      },
      
      { key: "town", label: "Type of Political Party", _style: { width: "15%" } },
      { key: "Name", label: "Name of the political party", _style: { width: "20%" } },
  
      { key: "from", label: "C.C.User License", _style: { width: "15%" } },
      { key: "to", label: "Date of Renewal", _style: { width: "15%" } },
      { key: "Status", label: "Status", _style: { width: "10%" } },
      {
        key: "show_details",
        label: "Action",
        _style: { width: "10%" },
        sorter: false,
        filter: false,
      },
    ];
    const userData1 = [{  SNo:"1"}];
    // const fields1 = [
    //   {
    //     key: "SNo",
    //     label: "S.NO",
    //     _style: { width: "3%" },
    //     sorter: false,
    //     filter: false,
    //   },
    //   { key: "Type", label: "Type of Office", _style: { width: "10%" } },
    //   { key: "Name", label: "Name of Office", _style: { width: "10%" } },
    //   { key: "Department", label: "Department", _style: { width: "10%" } },
    //   { key: "Designation", label: "Designation", _style: { width: "10%" } },
    //   { key: "Role", label: "Role", _style: { width: "10%" } },
  
    //   { key: "Member", label: "Name of the Member", _style: { width: "10%" } },
  
    //   { key: "EnteredBy", label: "Assigned By", _style: { width: "10%" } },
    //   { key: "EnteredOn", label: "Assigned On", _style: { width: "10%" } },
    //   // { key: "male", label: "Male", _style: { width: "10%" } },
    //   // { key: "female", label: "Female", _style: { width: "10%" } },
    //   {
    //     key: "show_details",
    //     label: "Action",
    //     _style: { width: "10%" },
    //     sorter: false,
    //     filter: false,
    //   },
    // ];
    const [passing, ] = useState("");
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
    // const selectTypeofOffice = [
    //   { value: "Arun Kumar", label: "Kalaiyarasan Lawyer Association Vice President of DMK N0 14 Nazarathpet Kanchipuram" },
    //   { value: "Arun Kumar", label: "Arun Kumar" },
    //   { value: "Sathish Kumae", label: "Sathish Kumaer" },
    //   {
    //     value: "venkatesh",
    //     label:
    //       "M Venkatesh ,Ward Member, Nsk Nagar,Nadaipathai Street, Kundrathur, Chennai-85",
    //   },
    // ];
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
    const stateselect = [{ value: "Tamilnadu", label: "Tamilnadu" }];
    const city = [{ value: "Chennai", label: "Kancheepuram" }];
    const Town = [{ value: "Wallajabhad", label: "Wallajabhad" }];
    // const noward = [{ value: "0018", label: "0018" }];
  
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
  
    //     const handleClick = () => {
    //      setSideBar1(false)
    //    };
  
    const handleClick = () => {
      switch (menu.menuStatus) {
        case "open":
          default:
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
          setchairTwo(true);
          setchairOne(false);
          setvice(false);
          break;
          
      }
    };
    const handleClick2 = () => {
      switch (menu.menuStatus) {
        case "open":
          default:
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
   
    const [menu, setMenu] = useState({
      style: "menu",
      style1: "menu1",
      menuStatus: "open",
      style3: "menu1",
    });
  
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
              <CCol className={"column-align"} md="3">
                <CLabel className={"label-name"}>
                  Type of Political Party
                  <span style={{ fontSize: "14px", fontFamily: "normal" }}>
                    {" "}
                    - 
                  </span>
                </CLabel>
              </CCol>
              <CCol className={"column-align"} md="3">
                <CLabel className={"label-name"}>
                Name of Political Party
                  <span style={{ fontSize: "14px", fontFamily: "normal" }}>
                    {" "}
                    - 
                  </span>
                </CLabel>
              </CCol>
              <CCol className={"column-align"} md="3">
                <CLabel className={"label-name"}>
             Address
                  <span style={{ fontSize: "14px", fontFamily: "normal" }}>
                    {" "}
                    - 
                  </span>
                </CLabel>
              </CCol>
            </CRow>
            <CRow className={"row-alignment"} style={{ marginLeft: "-61px" }}>
              <CCol className={"column-align"} md="3">
                <CLabel className={"label-name"}>
                 Chief Admin Person
                  <span style={{ fontSize: "14px", fontFamily: "normal" }}>
                    {" "}
                    - 
                  </span>
                </CLabel>
              </CCol>
              <CCol className={"column-align"} md="3">
                <CLabel className={"label-name"}>
             Cell NO
                  <span style={{ fontSize: "14px", fontFamily: "normal" }}>
                    {" "}
                    - 
                  </span>
                </CLabel>
              </CCol>
              <CCol className={"column-align"} md="3">
                <CLabel className={"label-name"}>
          No of CC License
                  <span style={{ fontSize: "14px", fontFamily: "normal" }}>
                    {" "}
                    - 
                  </span>
                </CLabel>
              </CCol>
            </CRow>
            <CRow className={"row-alignment"} style={{ marginLeft: "-61px" }}>
              <CCol className={"column-align"} md="3">
                <CLabel className={"label-name"}>
                KMAIL ID
                  <span style={{ fontSize: "14px", fontFamily: "normal" }}>
                    {" "}
                    - 
                  </span>
                </CLabel>
              </CCol>
              <CCol className={"column-align"} md="3">
                <CLabel className={"label-name"}>
               Date of Expiry
                  <span style={{ fontSize: "14px", fontFamily: "normal" }}>
                    {" "}
                    - 
                  </span>
                </CLabel>
              </CCol>
              <CCol className={"column-align"} md="3">
                <CLabel className={"label-name"}>
             Date of Renewal
                  <span style={{ fontSize: "14px", fontFamily: "normal" }}>
                    {" "}
                    - 
                  </span>
                </CLabel>
              </CCol>
            </CRow>
            <CRow className={"row-alignment"} style={{ marginLeft: "-61px" }}>
             
              <CCol className={"column-align"} md="3">
                <CLabel className={"label-name"}>
             Renewal Amount
                  <span style={{ fontSize: "14px", fontFamily: "normal" }}>
                    {" "}
                    - 
                  </span>
                </CLabel>
              </CCol>
            </CRow>
            <CRow style={{ marginTop: "25px" }}>
              <CCol>
                <CButton
                  style={{ marginTop: "20px" }}
                  onClick={mayorShow}
                  className={"saveBtn"}
                >
                  History of Ads
                </CButton>
                <CButton
                  className={"saveBtn"}
                  style={{ marginTop: "20px", marginLeft: "10px" }}
                  onClick={deputymayorShow}
                >
              History of Renewal
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
                          Corporation:"Kancheepuram",
                          from: "29/01/2005",
                          to: "31/02/2015",
                          status: "InActive",
                        },
                      ]}
                      fields={[
                        { key: "sNo", label: "SNo", _style: { width: "1%" } },
                        {
                          key: "Date of Request",
                          label: "Date of Request",
                          _style: { width: "10%" },
                        },
                        {
                          key: "from",
                          label: "Date of Activation",
                          _style: { width: "10%" },
                        },
                        { key: "to", label: "NO of License", _style: { width: "10%" } },
                        { key: "to", label: "Amount Date of payment", _style: { width: "10%" } },
                        {
                          key: "status",
                          label: "Mode of Payment",
                          _style: { width: "10%" },
                        },
                      ]}
                      columnFilter
                      tableFilter
                      tableLabel={"History of Ads on C.C License"}
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
                          from: "14 May 2001",
                          to: "12 May 2006",
                          status: "Died",
                        },
                      ]}
                      fields={[
                        { key: "sNo", label: "Sl. No", _style: { width: "1%" } },
                        {
                          key: "from",
                          label: "Date",
                          _style: { width: "10%" },
                        },
                        {
                          key: "from",
                          label: "No of License",
                          _style: { width: "10%" },
                        },
                        { key: "to", label: "To Date", _style: { width: "10%" } },
                        {
                          key: "status",
                          label: "Amount",
                          _style: { width: "10%" },
                        },
                        {
                            key: "status",
                            label: "Date of Payment",
                            _style: { width: "10%" },
                          },
                          {
                            key: "status",
                            label: "Mode of Payment",
                            _style: { width: "10%" },
                          },
                      ]}
                      columnFilter
                      tableFilter
                      tableLabel={"History of Renewal"}
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
            {/* {gridthree && (
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
                          typeconstituency: "Minister of Education",
                          name: "cabinet ministerial portfolios",
                          from: "16 May 1996",
                          to: "15 May 2001",
                        },
                      ]}
                      fields={[
                        { key: "sNo", label: "Sl. No", _style: { width: "1%" } },
                        {
                          key: "Name",
                          label: "Name of Party / Type of Party  Office",
                          _style: { width: "19%" },
                        },
                        
                        {
                          key: "Department",
                          label: "Department",
                          _style: { width: "10%" },
                        },
                        {
                          key: "ciDesignationty",
                          label: "Designation",
                          _style: { width: "10%" },
                        },
                        { key: "role", label: "Role", _style: { width: "10%" } },
                        {
                          key: "from",
                          label: "From Date",
                          _style: { width: "10%" },
                        },
                        { key: "to", label: "To Date", _style: { width: "10%" } },
                        { key: "to", label: "Status", _style: { width: "10%" } },
                        
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
                          typeconstituency: "Minister of Finance",
                          name: "cabinet ministerial portfolios",
                          from: "17 May 2006",
                          to: " 15 May 2011",
                        },
                      ]}
                      fields={[
                        { key: "sNo", label: "Sl. No", _style: { width: "1%" } },
                        {
                          key: "corporation",
                          label: "Corporation",
                          _style: { width: "19%" },
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
                        { key: "to", label: "To Date", _style: { width: "5%" } },
                        {
                          key: "status",
                          label: "Status",
                          _style: { width: "5%" },
                        },
                      ]}
                      columnFilter
                      tableFilter
                      tableLabel={"History of Councilar"}
                      itemsPerPageSelect
                      itemsPerPage={5}
                      hover
                      sorter
                      pagination
                    />
                  </CCol>
                </CRow>
              </div>
            )} */}
            <CButton
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
                <span className={"header-label"}>Client Initiation</span>
              </div>
              <CRow style={{marginTop:"75px", marginLeft:"240px",position:"absolute" }}>
                    <CCol sm="3" lg="3" style={{ marginLeft: "-160px" }}>
                      <CWidgetDropdown
                        style={{
                          width: "280px",
                          textAlign: "center",
                          fontSize: "30px",
                          float: "right",
                          height:"100px"
                        }}
                        color="gradient-danger"
                        header=""
                        text=""
                      >
                        <span style={{ marginLeft: "-30px", fontSize: "24px",fontWeight:"700" }}>
                          Total
                        </span>
                        <span
                          style={{ marginLeft: "-152px", marginTop: "30px" ,fontSize: "24px",fontWeight:"700" }}
                        >
                          2
                        </span>
                        <br />
                        <br />
                      
                      </CWidgetDropdown>
                    </CCol>
                    <CCol sm="3" lg="3" style={{ marginLeft: "100px" }}>
                      <CWidgetDropdown
                        style={{
                          width: "280px",
                          textAlign: "center",
                          fontSize: "30px",
                          float: "right",
                          height:"100px"
                        }}
                        color="gradient-primary"
                        header=""
                        text=""
                      >
                        <span style={{ marginLeft: "-110px", fontSize: "24px",fontWeight:"700" }}>
                        National Party
                        </span>
                        <span
                          style={{ marginLeft: "-252px", marginTop: "30px" ,fontSize: "24px",fontWeight:"700" }}
                        >
                          2
                        </span>
                        <br />
                        <br />
                      
                      </CWidgetDropdown>
                    </CCol>
                    <CCol sm="3" lg="3" style={{ marginLeft: "110px" }}>
                      <CWidgetDropdown
                        style={{
                          width: "280px",
                          textAlign: "center",
                          fontSize: "30px",
                          float: "right",
                          height:"100px"
                        }}
                        color="gradient-warning"
                        header=""
                        text=""
                      >
                        <span style={{ marginLeft: "-110px", fontSize: "24px",fontWeight:"700" }}>
                         Regional Party
                        </span>
                        <span
                          style={{ marginLeft: "-252px", marginTop: "30px" ,fontSize: "24px",fontWeight:"700" }}
                        >
                          1
                        </span>
                        <br />
                        <br />
                      
                      </CWidgetDropdown>
                    </CCol>
                  </CRow>
                 
              {locationHide.corporation && (
                <div>
                  <div style={{ marginLeft: "-26px" }}>
                    <CRow style={{ marginTop: "185px" }}>
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
                              marginRight: "895px",
                            }}
                            id={"saveAbbreviationConfigureCode"}
                            className={"saveBtn"}
                            onClick={changeMunicipalCorporation}
                          >
                           Initiate Client
                          </CButton>{" "}
                        </CCol>
                      </CCol>
                    </CRow>
                    <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                      <CCol className={"column-align"} md="4">
                        <CLabel className={"label-name-1"}>
                          Type of political Party
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <Select
                          // className={"input-align"}
                          id={"clientTypeofPoliticalParty"}
                          name={"state"}
                          placeholder={"Select Type of political Party"}
                          // value={locations.district}
                          // onChange={changeHandler}
                          options={stateselect}
                        />
                      </CCol>
                      <CCol className={"column-align"} md="4">
                        <CLabel className={"label-name-1"}>
                        Status
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <Select
                          id={"clientStatus"}
                          name={"Status"}
                          placeholder={" Select Status "}
                          options={city}
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
                          id={"clientState"}
                          name={"state"}
                          placeholder={"Select State"}
                          options={Town}
                        />
                      </CCol>
                   
                    </CRow>
                  </div>
                
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
                          tableLabel={"List of Political Party"}
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
                
                  {townv && (
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
                              Corporation:"Kancheepuram",
                              Name:"Mani Raja",
                              from:"25/06/2011",
                              to:"12/03/2016",
                              Status:"InActive"
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
                              Corporation:"Kancheepuram",
                              Name:"Kalaiyarasan",
                              from:"21/02/2014",
                              to:"12/06/2024",
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
                            // { key: "State", label: "State", _style: { width: "10%" } },
                            // { key: "District", label: "District", _style: { width: "10%" } },
                            {
                              key: "Corporation",
                              label: "Corporation",
                              _style: { width: "10%" },
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
                          tableLabel={"List of Deputy Mayor of Corporation"}
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
                  {townw && (
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
                              town: "Kundrathur",
                              no: "018",
                              Name: "M Venkatesh",
                              Status: "Active",
                              from: "11/8/2020",
                              to: "11/8/2021",
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
                          tableLabel={"List of Councilar of Corporation"}
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
                <span className={"header-label"}>  Initiate Client</span>
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
                    <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                      <CCol className={"column-align"} md="4">
                        <CLabel className={"label-name-1"}>
                          Type of political Party
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <Select
                          // className={"input-align"}
                          id={"clientInitiationTypeofPoliticalParty"}
                          name={"state"}
                          placeholder={"Select Type of political Party"}
                          options={stateselect}
                        />
                      </CCol>
                      <CCol className={"column-align"} md="4">
                        <CLabel className={"label-name-1"}>
                       Name of Party
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <CInput
                          id={"memtownCity"}
                          name={"Status"}
                          placeholder={" Name of Party "}
                          // value={locations.city}
                          // onChange={changeHandler}
                          options={city}
                        />
                      </CCol>
                    </CRow>
                    <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                      <CCol className={"column-align"} md="4">
                        <CLabel className={"label-name-1"}>
                          Abbreviation
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <CInput
                          // className={"input-align"}
                          id={"clientAbbreviation"}
                          name={"state"}
                          placeholder={" Abbreviation"}
                          // value={locations.district}
                          // onChange={changeHandlter}
                          options={Town}
                        />
                      </CCol>
                   
                    </CRow>
                  
                  
  
                    <CCol>
                      <CLabel
                        style={{
                          fontSize: "20PX",
                          fontFamily: "Open Sans",
                          fontWeight: "700",
                          marginLeft: "40px",
                          marginTop: "60px",
                        }}
                      >
                       Communication Address
                      </CLabel>
                    </CCol>
  
                    <CRow className={"row-alignment"} style={{   marginLeft: "-25px"}}>
                      <CCol className={"column-align"} md="3">
                        <CLabel className={"label-name"}>
                          Street
                          <span
                            style={{ fontSize: "14px", fontFamily: "normal" }}
                          >
                            {" "}
                            - 
                          </span>
                        </CLabel>
                      </CCol>
                      <CCol className={"column-align"} md="3">
                        <CLabel className={"label-name"}>
                          Village
                          <span
                            style={{ fontSize: "14px", fontFamily: "normal" }}
                          >
                            {" "}
                            - 
                          </span>
                        </CLabel>
                      </CCol>
                      <CCol className={"column-align"} md="3">
                        <CLabel className={"label-name"}>
                          Pincode
                          <span
                            style={{ fontSize: "14px", fontFamily: "normal" }}
                          >
                            {" "}
                            - 
                          </span>
                        </CLabel>
                      </CCol>
                    </CRow>
                    <CRow className={"row-alignment"} md="12" sm="12" lg="12"  style={{   marginLeft: "-10px"}}>
                      <CCol className={"column-align"} md="4">
                        <CLabel className={"label-name-1"}>
                         Search Address
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <Select
                          // className={"input-align"}
                          id={"clientSearchAddress"}
                          name={"Address"}
                          placeholder={"Select Search Address"}
                          options={stateselect}
                        />
                      </CCol>
                      </CRow>
                
                  
                      <CRow className={"row-alignment"} style={{   marginLeft: "-25px"}}>
                      <CCol className={"column-align"} md="3">
                        <CLabel className={"label-name"}>
                          District/City
                          <span
                            style={{ fontSize: "14px", fontFamily: "normal" }}
                          >
                            {" "}
                            - 
                          </span>
                        </CLabel>
                      </CCol>
                      <CCol className={"column-align"} md="3">
                        <CLabel className={"label-name"}>
                          State
                          <span
                            style={{ fontSize: "14px", fontFamily: "normal" }}
                          >
                            {" "}
                            - 
                          </span>
                        </CLabel>
                      </CCol>
                      <CCol className={"column-align"} md="3">
                        <CLabel className={"label-name"}>
                          Country
                          <span
                            style={{ fontSize: "14px", fontFamily: "normal" }}
                          >
                            {" "}
                            - 
                          </span>
                        </CLabel>
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
                 
                  </div>
                </div>
              )}
            </CCard>
          </div>
        )}
      </div>
    );
  };
  
  export default ClientInitiation;
  