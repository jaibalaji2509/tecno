import {
    CButton,
    CCard,
    CCol,
    CInput,
    CLabel,
    CRow,
    CTextarea,
    CInputRadio,
    CFormGroup,
} from "@coreui/react";
import React, { useState } from "react";
import CDataTable from "../../CoreComponents/table/CDataTable";
import { saveCreateCorporation } from "../../../services/ApiService";
import { toast } from "react-toastify";
import DEFAULT_IMAGE from "../../../assets/img/No-image-icon.png";
import Select from "react-select";
import "./MemberofMunicipality.css";
const MemberofMunicipality = () => {
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
    const [chairone, setchairOne] = useState(false)
    const [chairtwo, setchairTwo] = useState(true)
    const [vice, setvice] = useState(false)
    const [partypost, setpartypost] = useState(false)
    const [gridone, setGridOne] = useState(false)
    const [gridtwo, setGridTwo] = useState(false)
    const [gridthree, setGridThree] = useState(false)
    const [gridfour, setGridFour] = useState(false)
    const [townc, setTownC] = useState(false)
    const [townv, setTownV] = useState(false)
    const [townw, setTownW] = useState(false)

    const townchair = () =>{
        setTownW(false)
        setTownC(true)
        setTownV(false);
      }

      const townvice = () =>{
        setTownW(false)
        setTownC(false)
        setTownV(true);
      }
      
      const townward = () =>{
        setTownW(true)
        setTownC(false)
        setTownV(false);
      }



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
    const userData = [

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
        { key: "town", label: "Town Panchayat", _style: { width: "10%" } },
        { key: "Name", label: "Name of the Member", _style: { width: "20%" } },
        { key: "Status", label: "Status", _style: { width: "10%" } },
        { key: "from", label: "From Date", _style: { width: "10%" } },
        { key: "to", label: "To Date", _style: { width: "10%" } },
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
        { value: "Arun Kumar", label: "Arun Kumar" },
        { value: "Sathish Kumae", label: "Sathish Kumaer" },
        {value: "venkatesh", label: "M Venkatesh ,Ward Member, Nsk Nagar,Nadaipathai Street, Kundrathur, Chennai-85"}
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
const stateselect =[
    {value:"Tamilnadu", label:"Tamilnadu" }
];
const city =[
{value:"Chennai",label:"Kancheepuram"}
];
const Town =[
    {value:"Kundrathur", label:"Kundrathur"}
];
const noward=[
    {value:"0018", label:"0018"}
]

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
                setchairTwo(true);
    setchairOne(false)
    setvice(false)
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

         
              <CRow className={"row-alignment"} style={{ marginLeft: "-61px", marginTop: "15px" }}>
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
            Chairman
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
            Vice-Chairman
        
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
            onClick={centralgrid}
          >
          Ward Member
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
                      from: "15 March 1971",
                      to: '31 January 1976',
                      status:"Active",
                    },
                   
                    ]}
                    fields={[{ key: "sNo", label: "Sl. No", _style: { width: "1%" } },
                    { key: "from", label: "From Date", _style: { width: "10%" } },
                    { key: "to", label: "To Date", _style: { width: "10%" } },
                    { key: "status", label: "Status", _style: { width: "10%" } },

                    ]}
                    columnFilter
                    tableFilter
                    tableLabel={"History of Chairman"}
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
                      from: "14 May 2001",
                      to: "12 May 2006",
                      status: "Died",
                    },
                    ]}
                    fields={[{ key: "sNo", label: "Sl. No", _style: { width: "1%" } },
                    { key: "from", label: "From Date", _style: { width: "10%" } },
                    { key: "to", label: "To Date", _style: { width: "10%" } },
                    { key: "status", label: "Status", _style: { width: "10%" } },

                    ]}
                    columnFilter
                    tableFilter
                    tableLabel={"History of Vice Chairman"}
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
                        key: "Name",
                        label: "Name of Party / Party Wings Office",
                        _style: { width: "19%" },
                      },
                      {
                        key: "Type",
                        label: "Type of Office",
                        _style: { width: "10%" },
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
                      { key: "from", label: "From Date", _style: { width: "10%" } },
                      { key: "to", label: "To Date", _style: { width: "10%" } },
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
                      key: "Town",
                      label: "Town Panchayat",
                      _style: { width: "19%" },
                    },
                    {
                      key: "ward",
                      label: "Ward No",
                      _style: { width: "10%" },
                    },

                    { key: "from", label: "From Date", _style: { width: "10%" } },
                    { key: "to", label: "To Date", _style: { width: "5%" } },
                    { key: "status", label: "Status", _style: { width: "5%" } },


                    ]}
                    columnFilter
                    tableFilter
                    tableLabel={"History As a Ward Member"}
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
                                id={"memmunicipalState"}
                                name={"state"}
                                placeholder={"Select Status"}
                                value={locations.district}
                                onChange={changeHandler}
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
                            <span className={"header-label"}>Member of Municipality</span>
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
                                                        marginRight: "915px",
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
                                                id={"memmunicipalState"}
                                                name={"state"}
                                                placeholder={"Select State"}
                                                // value={locations.district}
                                                // onChange={changeHandler}
                                                options={stateselect}
                                            />
                                        </CCol>
                                        <CCol className={"column-align"} md="4">
                                            <CLabel className={"label-name-1"}>
                                                District / City
                          <span className={"text-danger"}>*</span>
                                            </CLabel>
                                            <Select
                                                id={"memmunicipalCity"}
                                                name={"Status"}
                                                placeholder={" Select Status "}
                                                // value={locations.city}
                                                // onChange={changeHandler}
                                                placeholder={" Select District / City "}
                                                    options={city}
                             />
                                        </CCol>
                                    </CRow>
                                    <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                                        <CCol className={"column-align"} md="4">
                                            <CLabel className={"label-name-1"}>
                                            Municipality
                          <span className={"text-danger"}>*</span>
                                            </CLabel>
                                            <Select
                                                // className={"input-align"}
                                                id={"memmunicipaltown"}
                                                name={"state"}
                                                placeholder={"Select Town Panchayat"}
                                                // value={locations.district}
                                                // onChange={changeHandler}
                                                options={Town}
                                            />
                                        </CCol>
                                        <CCol className={"column-align"} md="4">
                                            <CLabel className={"label-name-1"}>
                                                Type of Role
                          <span className={"text-danger"}>*</span>
                                            </CLabel>
                                            <CCol md="12" style={{marginLeft:"-10px"}}>
                                            <CFormGroup variant="custom-radio" inline>
                                                    <CInputRadio custom id="inline-radio1" onClick={townchair} name="inline-radios" value="option1" />
                                                    <CLabel variant="custom-checkbox" htmlFor="inline-radio1">Chairman</CLabel>
                                                </CFormGroup>
                                                <CFormGroup variant="custom-radio" inline>
                                                    <CInputRadio custom id="inline-radio2" onClick={townvice} name="inline-radios" value="option2" />
                                                    <CLabel variant="custom-checkbox" htmlFor="inline-radio2">Vice-Chairman</CLabel>
                                                </CFormGroup>
                                                <CFormGroup variant="custom-radio" inline>
                                                    <CInputRadio custom id="inline-radio3" onClick={townward} name="inline-radios" value="option3" />
                                                    <CLabel variant="custom-checkbox" htmlFor="inline-radio3">Ward Member</CLabel>
                                                </CFormGroup>
                                            </CCol>
                                        </CCol>
                                    </CRow>
                                </div>
                                { townc && (
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
                                        tableLabel={"List of Chairman of Municipality"}
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
                                                                    id={"memmunicipalDelete"}
                                                                    style={{
                                                                        marginLeft: "5px",
                                                                        color: "black",
                                                                        cursor: "pointer",
                                                                    }}
                                                                    className="fa fa-remove"
                                                                ></i>

                                                                <i
                                                                    //  onClick={() => deleteConfirm(item._id)}
                                                                    id={"memmunicipalDelete"}
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
                                                                    id={"memmunicipalediticon"}
                                                                    className="fa fa-history"
                                                                    onClick={handleClick}
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
                                { townv && (
                                    <div>
                                <CRow
                                    style={{
                                        padding: "4%",
                                        marginTop: "-1.5%",
                                        marginLeft: "-25px",
                                    }}
                                >
                                    <CDataTable
                                        items={[{
                                            SNo: "1."
                                        }]}
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
                                            { key: "town", label: "Town Panchayat", _style: { width: "10%" } },
                                            { key: "Name", label: "Name of the Member", _style: { width: "20%" } },
                                            { key: "Status", label: "Status", _style: { width: "10%" } },
                                            { key: "from", label: "From Date", _style: { width: "10%" } },
                                            { key: "to", label: "To Date", _style: { width: "10%" } },
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
                                        tableLabel={"List of Vice-Chairman of Municipality"}
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
                                                                    id={"memmunicipalDelete"}
                                                                    style={{
                                                                        marginLeft: "5px",
                                                                        color: "black",
                                                                        cursor: "pointer",
                                                                    }}
                                                                    className="fa fa-remove"
                                                                ></i>

                                                                <i
                                                                    //  onClick={() => deleteConfirm(item._id)}
                                                                    id={"memmunicipalDelete"}
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
                                                                    id={"memmunicipalediticon"}
                                                                    className="fa fa-history"
                                                                    onClick={handleClick}
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
                                { townw && (
                                    <div>
                                <CRow
                                    style={{
                                        padding: "4%",
                                        marginTop: "-1.5%",
                                        marginLeft: "-25px",
                                    }}
                                >
                                    <CDataTable
                                        items={[{
                                            SNo: "1.",
                                            town:"Kundrathur",
                                            no:"018",
                                            Name:"M Venkatesh",
                                            Status:"Active",
                                            from:"11/8/2020",
                                            to:"11/8/2021",
                                        },]}
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
                                            { key: "town", label: "Town Panchayat", _style: { width: "10%" } },
                                            { key: "no", label: "Ward No", _style: { width: "20%" } },
                                            { key: "Name", label: "Name of the Member", _style: { width: "20%" } },
                                            { key: "Status", label: "Status", _style: { width: "10%" } },
                                            { key: "from", label: "From Date", _style: { width: "10%" } },
                                            { key: "to", label: "To Date", _style: { width: "10%" } },
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
                                        tableLabel={"List of Ward Member of Municipality"}
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
                                                                    id={"memmunicipalDelete"}
                                                                    style={{
                                                                        marginLeft: "5px",
                                                                        color: "black",
                                                                        cursor: "pointer",
                                                                    }}
                                                                    className="fa fa-remove"
                                                                ></i>

                                                                <i
                                                                    //  onClick={() => deleteConfirm(item._id)}
                                                                    id={"memmunicipalDelete"}
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
                                                                    id={"memmunicipalediticon"}
                                                                    className="fa fa-history"
                                                                    onClick={handleClick}
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
                            </div>
                        )}
                    </CCard>
                </div>
            )}

            {hideCorporation && (
                <div>
                    <CCard className={"cardSave"} style={{ minHeight: "1200px" }}>
                        <div className={"main-headerlabel"}>
                            <span className={"header-label"}>
                                Add Member Page
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
                                    <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                                        <CCol className={"column-align"} md="4">
                                            <CLabel className={"label-name-1"}>
                                                State
                          <span className={"text-danger"}>*</span>
                                            </CLabel>
                                            <Select
                                                // className={"input-align"}
                                                id={"memmunicipalState"}
                                                name={"state"}
                                                placeholder={"Select State"}
                                              options={stateselect}
                                            />
                                        </CCol>
                                        <CCol className={"column-align"} md="4">
                                            <CLabel className={"label-name-1"}>
                                                District / City
                          <span className={"text-danger"}>*</span>
                                            </CLabel>
                                            <Select
                                                id={"memmunicipalCity"}
                                                name={"Status"}
                                                placeholder={" Select District / City "}
                                                // value={locations.city}
                                                // onChange={changeHandler}
                                                options={city}
                                            />
                                        </CCol>
                                    </CRow>
                                    <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                                        <CCol className={"column-align"} md="4">
                                            <CLabel className={"label-name-1"}>
                                                Municipality
                          <span className={"text-danger"}>*</span>
                                            </CLabel>
                                            <Select
                                                // className={"input-align"}
                                                id={"memmunicipaltown"}
                                                name={"state"}
                                                placeholder={"Select Town Panchayat"}
                                                // value={locations.district}
                                                // onChange={changeHandlter}
                                                options={Town}
                                            />
                                        </CCol>
                                        <CCol className={"column-align"} md="4">
                                            <CLabel className={"label-name-1"}>
                                                Type of Role
                          <span className={"text-danger"}>*</span>
                                            </CLabel>
                                            <CCol md="12" style={{marginLeft:"-10px"}}>
                                                <CFormGroup variant="custom-radio" inline>
                                                    <CInputRadio custom id="inline-radio1" name="inline-radios" value="option1" />
                                                    <CLabel variant="custom-checkbox" htmlFor="inline-radio1">Chairman</CLabel>
                                                </CFormGroup>
                                                <CFormGroup variant="custom-radio" inline>
                                                    <CInputRadio custom id="inline-radio2" name="inline-radios" value="option2" />
                                                    <CLabel variant="custom-checkbox" htmlFor="inline-radio2">Vice-Chairman</CLabel>
                                                </CFormGroup>
                                                <CFormGroup variant="custom-radio" inline>
                                                    <CInputRadio custom id="inline-radio3" name="inline-radios" value="option3" />
                                                    <CLabel variant="custom-checkbox" htmlFor="inline-radio3">Ward Member</CLabel>
                                                </CFormGroup>
                                            </CCol>
                                        </CCol>
                                    </CRow>
                                    <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                                        <CCol className={"column-align"} md="4">
                                            <CLabel className={"label-name-1"}>
                                                Ward No
                          <span className={"text-danger"}>*</span>
                                            </CLabel>
                                            <Select
                                                // className={"input-align"}
                                                id={"memmunicipalward"}
                                                name={"state"}
                                                placeholder={"Select Ward No"}
                                                options={noward}
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
                                                // className={"input-align"}
                                                id={"memmunicipalstatename"}
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
                            -
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
                            -
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
                                               From Date {" "}
                                            </CLabel>
                                            <CInput type="date" id={"memmunicipaldatefrom"} />
                                        </CCol>
                                        <CCol className={"column-align"} md="4">
                                            <CLabel className={"label-name-1"}>
                                               To Date{" "}
                                            </CLabel>
                                            <CInput type="date" id={"memmunicipaldatefrom"} />
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
                                                onClick={changeCancelMunicipalCorporation}                                          >
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
                                marginLeft: "30px",

                                maxHeight: "290px",
                                minHeight: "290px",
                                marginBottom: "-25px",
                                overflow: "auto",
                                marginTop:"100px"
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
                                items={[]}
                                fields={[

                                    {
                                        key: "SNo",
                                        label: "S.NO",
                                        _style: { width: "3%" },
                                        sorter: false,
                                        filter: false,
                                    },
                                    { key: "town", label: "Town Panchayat", _style: { width: "10%" } },
                                    { key: "ward", label: "Ward No", _style: { width: "10%" } },
                                    { key: "from", label: "From Date", _style: { width: "10%" } },
                                    { key: "to", label: "To Date", _style: { width: "10%" } },
                                    { key: "Status", label: "Status", _style: { width: "10%" } },
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

export default MemberofMunicipality;
