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
  import DEFAULT_IMAGE from "../../../assets/img/camera-icon.png";
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
    const userData = [
      // {
      //   SNo: "1",
      //   State: "TamilNadu",
      //   District: "chennai",
      //   Area: "TNagar",
      //   Street: "Pondy Bazar",
      // },
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
      { key: "Street", label: "Name of Party Office", _style: { width: "10%" } },
      { key: "Street", label: "Type of Office", _style: { width: "10%" } },
      { key: "Street", label: "Department", _style: { width: "10%" } },
      { key: "Street", label: "Designation", _style: { width: "10%" } },
      { key: "Street", label: "Role", _style: { width: "10%" } },
      { key: "Street", label: "Status", _style: { width: "10%" } },
      { key: "Street", label: " From Date", _style: { width: "10%" } },
      { key: "Street", label: " To Date", _style: { width: "10%" } },
      // { key: "male", label: "Male", _style: { width: "10%" } },
      // { key: "female", label: "Female", _style: { width: "10%" } },
      {
        key: "Street",
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
  
      { key: "Street", label: "Department", _style: { width: "10%" } },
      { key: "Street", label: "Designation", _style: { width: "10%" } },
      { key: "Street", label: "Role", _style: { width: "10%" } },
      
      { key: "Street", label: "Name of the Member", _style: { width: "10%" } },
      
      { key: "Street", label: "Assigned By", _style: { width: "10%" } },
      { key: "Street", label: "Assigned On", _style: { width: "10%" } },
      // { key: "male", label: "Male", _style: { width: "10%" } },
      // { key: "female", label: "Female", _style: { width: "10%" } },
      {
        key: "Street",
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
    const [PI, setPI] = useState("");

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
                <span className={"header-label"}> Assign Party Posting</span>
              </div>
              {locationHide.corporation && (
                <div>
                  <div style={{ marginLeft: "-26px" }}>
                    <div className={"row-headerlabel"}>
                      <span
                        style={{ marginLeft: "70px" }}
                        className={"header-label"}
                      >
                        {" "}
                        Assign Party Posting{" "}
                      </span>
                    </div>
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
                              marginRight: "805px",
                            }}
                            id={"saveAbbreviationConfigureCode"}
                            className={"saveBtn"}
                            onClick={changeMunicipalCorporation}
                          >
                            Add Assign Party Posting
                          </CButton>{" "}
                        </CCol>
                      </CCol>
                    </CRow>
                    <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                      <CCol className={"column-align"} md="4">
                        <CLabel className={"label-name"}>
                          Type of Office
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <CSelect
                          className={"input-align"}
                          id={"municipalstatename"}
                          name={"state"}
                          placeholder={"Select Type of Office"}
                          value={locations.district}
                          onChange={changeHandler}
                        />
                      </CCol>
                      <CCol className={"column-align"} md="4">
                        <CLabel className={"label-name"}>
                          Type of Party / Party Wings Office
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <CSelect
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
                        <CLabel className={"label-name"}>
                          Name of the Office Location
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <CSelect
                          className={"input-align"}
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
                      items={userData}
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
                                  {/* <i
                                     style={{
                                       marginRight: "5px",
                                       color: "#3480e2",
                                       cursor: "pointer",
                                     }}
                                     id={"locationLibraryEdit"}
                                     onClick={() => EditCountry(item)}
                                     className="fas fa-edit"
                                   ></i>
                                   <i
                                     onClick={() => deleteConfirm(item._id)}
                                     id={"locationLibraryDelete"}
                                     style={{
                                       marginLeft: "5px",
                                       color: "#e85654",
                                       cursor: "pointer",
                                     }}
                                     className="fa fa-trash"
                                   ></i> */}
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
                    <div className={"row-headerlabel"}>
                      <span
                        style={{ marginLeft: "70px" }}
                        className={"header-label"}
                      >
                        {" "}
                        Assign Party Posting{" "}
                      </span>
                    </div>
  
                    <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                      <CCol className={"column-align"} md="4">
                        <CLabel className={"label-name"}>
                          Type of Office
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <CSelect
                          className={"input-align"}
                          id={"municipalstatename"}
                          name={"state"}
                          placeholder={"Select Type of Office"}
                          value={locations.district}
                          onChange={changeHandler}
                        />
                      </CCol>
                   
                        <CCol className={"column-align"} md={4} lg={4}>
                          <CLabel className={"label-name-1"}>
                          Department Name
                            <span className={"text-danger"}> *</span>
                          </CLabel>
                          <CSelect
                            placeholder="Select   Department Name"
                            id={"municipalcorporation"}
                            type={"text"}
                           value={municipalCorporation}
                            // isDisabled={CountryCreate || CityCreate || AreaCreate}
                          />
                        </CCol>
                       
                   
                    </CRow>
                    <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                      <CCol className={"column-align"} md="4" >
                        <CLabel className={"label-name"}>
                        Type of Party / Party Wings Office
                        
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <CSelect
                       
                          className={"input-align"}
                          id={"municipalarea"}
                          name={"area"}
                          placeholder={" Select Office Location"}
                          value={locations.city}
                          onChange={changeHandler}
                        />
                      </CCol>
                  
                        <CCol className={"column-align"} md={4} lg={4}>
                          <CLabel className={"label-name-1"}>
                          Designation Name
                            <span className={"text-danger"}> *</span>
                          </CLabel>
                          <CSelect
                            placeholder="Select   Department Name"
                            id={"municipalcorporation"}
                            type={"text"}
                           value={municipalCorporation}
                            // isDisabled={CountryCreate || CityCreate || AreaCreate}
                          />
                        </CCol>
                     
                    </CRow>
                    <CRow className={"row-alignment"}>
                    <CCol className={"column-align"} md="4">
                        <CLabel className={"label-name"}>
                        Name of the Office Location
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <CSelect
                          className={"input-align"}
                          id={"municipalstatename"}
                          name={"state"}
                          placeholder={"Select Type of Office"}
                          value={locations.district}
                          onChange={changeHandler}
                        />
                      </CCol>
                  
                        <CCol className={"column-align"} md={4} lg={4}>
                          <CLabel className={"label-name-1"}>
                          Role Name
                            <span className={"text-danger"}> *</span>
                          </CLabel>
                          <CSelect
                            placeholder="Select Role Name"
                            id={"municipalcorporation"}
                            type={"text"}
                           value={municipalCorporation}
                            // isDisabled={CountryCreate || CityCreate || AreaCreate}
                          />
                        </CCol>
                      
               
                  </CRow>
  
                  <CRow className={"row-alignment"}>
                    <CCol className={"column-align"} md="4">
                        <CLabel className={"label-name"}>
                        Name of the Member 
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <CSelect
                          className={"input-align"}
                          id={"municipalstatename"}
                          name={"state"}
                          placeholder={"Select Type of Office"}
                          value={locations.district}
                          onChange={changeHandler}
                        />
                      </CCol>
                  
                    
                    <CCol md="10">
                      <CCol
                        md="5"
                        style={{
                          marginLeft: "265px",
                          float: "right",
                          marginTop: "-30px",
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
                 
                      
               
                  </CRow>
                  <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: "0%",
              justifyContent: "center",
              marginTop: "1%",
            }}
          >
            <CCol md="3">
              <CInput
                id={"addEmployeeProfileImage"}
                name="file"
                type="file"
                id="profileImage"
                accept="image/*"
                style={{ display: "none" }}
                onChange={(e) => {
                  handleSave(e.target.files[0], "profileImage");
                }}
              />
            </CCol>
            {/* <p>{JSON.stringify(state.profileImage)}</p> */}
            <div
              id={"addEmployeehandleClick"}
              style={{
                height: "100px",
                width: "100px",
                border: "1px dashed black",
                marginLeft:"73px"
              }}
              onClick={() => handleClick()}
            >
              <img
                alt=""
                src={files !== "" ? files : DEFAULT_IMAGE}
                style={{
                  width: "100%",
                  height: "100%",
                  position: "acsolute",
                }}
              />
            </div>

            <CLabel style={{marginLeft:"77px"}}>
              Upload Image
              <span className={"text-danger"}> *</span>
            </CLabel>
          </div>
                  <CRow className={"row-alignment"}>
                    <CCol className={"column-align"} md="4">
                        <CLabel className={"label-name"}>
                        Name
                          <span >-</span>
                        </CLabel>
                      
                      </CCol>
                      <CCol className={"column-align"} md="4">
                        <CLabel className={"label-name"}>
                        Gender
                          <span >-</span>
                        </CLabel>
                      
                      </CCol>
                      
                      
               
                  </CRow>
                  <CRow className={"row-alignment"}>
                    <CCol className={"column-align"} md="4">
                        <CLabel className={"label-name"}>
                        DOB
                          <span >-</span>
                        </CLabel>
                      
                      </CCol>
                      <CCol className={"column-align"} md="4">
                        <CLabel className={"label-name"}>
                        Education
                          <span >-</span>
                        </CLabel>
                      
                      </CCol>
                      
                      
               
                  </CRow>
                  <CRow className={"row-alignment"}>
                    <CCol className={"column-align"} md="4">
                        <CLabel className={"label-name"}>
                        Occupation
                          <span >-</span>
                        </CLabel>
                      
                      </CCol>
                
                      
                      
               
                  </CRow>
                  </div>
               
               
                  <CRow style={{ padding: "4%", marginTop: "-3.5%",marginLeft:"-10px" }}>
                    <CDataTable
                      items={userData}
                      fields={fields}
                      columnFilter
                      tableFilter
                      tableLabel={"List of Other Party Posting  "}
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
  