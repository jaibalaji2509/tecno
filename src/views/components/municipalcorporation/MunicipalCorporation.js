import { CButton, CCard, CCol, CLabel, CRow, CInput } from "@coreui/react";
import React, { useState } from "react";
import CDataTable from "../../CoreComponents/table/CDataTable";
import { saveCreateCorporation } from "../../../services/ApiService";
import { toast } from "react-toastify";
import Select from "react-select";
import { Dropdown, Menu } from "antd";
import 'antd/dist/antd.css';
import {CSVLink, CSVDownload} from 'react-csv';
import ReactFileReader from 'react-file-reader';

const MunicipalCorporation = () => {
  const [location, setLocation] = useState({
    state: "",
    district: "",
    city: "",
    ward: "",
    area: "",
    street: "",
    pincode: "",
  });

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
  const [municipalCorporation] = useState({});
  const [municipalName] = useState("");
  const [selected, setSelection] = useState([]);
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
    //   ward: "0017",
    //   street: "TNagar",
    //   EnteredBy: "Sathishkumar",
    //   Enteredon: "11/06/2021",
    // },
    // {
    //   SNo: "2",
    //   ward: "0017",
    //   street: "Pondy Bazar",
    //   EnteredBy: "Sathishkumar",
    //   Enteredon: "11/06/2021",
    // },
    {
      SNo: "1",
      ward: "0005",
      street: "Alwarpet",
      EnteredBy: "Sathishkumar",
      Enteredon: "11/06/2021",
    },
    {
      SNo: "2",
      ward: "0007",
      street: "Nandanam",
      EnteredBy: "Sathishkumar",
      Enteredon: "11/06/2021",
    },
    {
      SNo: "3",
      ward: "0012",
      street: "Mylapore",
      EnteredBy: "Sathishkumar",
      Enteredon: "11/06/2021",
    },
    {
      SNo: "4",
      ward: "0018",
      street: "Velacherry",
      EnteredBy: "Sathishkumar",
      Enteredon: "11/06/2021",
    },
    {
      SNo: "5",
      ward: "0019",
      street: "Navalur",
      EnteredBy: "Sathishkumar",
      Enteredon: "11/06/2021",
    },
  ];
  const [checked, setChecked] = useState(false);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const userData1 = [
    {
      SNo: "1",
      ward: "0018",
      street: "Teynampet",
      EnteredBy: "Sathishkumar",
      Enteredon: "11/06/2021",
    },
    {
      SNo: "2",
      ward: "0018",
      street: "Alwarpet",
      EnteredBy: "Sathishkumar",
      Enteredon: "11/06/2021",
    },
    {
      SNo: "3",
      ward: "0018",
      street: "Nandanam",
      EnteredBy: "Sathishkumar",
      Enteredon: "11/06/2021",
    },
  ];

  const fields = [
    // {
    //   key: "show_details1",
    //   label: "Select",
    //   _style: { width: "3%" },
    //   sorter: false,
    //   filter: false,
    // },

    {
      key: "SNo",
      label: "S.NO",
      _style: { width: "3%" },
      sorter: false,
      filter: false,
    },

    { key: "ward", label: "Ward Name", _style: { width: "10%" } },
    { key: "street", label: "Street Name", _style: { width: "10%" } },
    {
      key: "EnteredBy",
      label: "Entered By",
      _style: { width: "10%" },
    },
    {
      key: "Enteredon",
      label: "Entered On",
      _style: { width: "10%" },
    },

    {
      key: "show_details",
      label: "Action",
      _style: { width: "10%" },
      sorter: false,
      filter: false,
    },
  ];
  const [passing, setPassing] = useState("");
  const [error] = useState("");
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

  const enableCreate = async () => {
    await setMunicipalList(false);
    await setmunicipalCreate(true);
  };

  const editMunicipalCorporation = async (item) => {
    await setHideMappingmunicipal(false);
    await setHideCorporation(true);
    await setStateName (item.stateName)
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
  const [stateName, setStateName] = useState("");
  const editMunicipalCorporationadd = async () => {
    await setMunicipalListadd(false);
    await setmunicipalCreateadd(true);
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
  const cancelmc = () => {
    setHideMappingmunicipal(true);
    setHideCorporation(false);
  };
  const selectState = [{ value: "TamilNadu", label: "TamilNadu" }];
  const selectDistrict = [{ value: "Chennai", label: "Chennai" }];
  const selectMunicipalcorporation = [
    { value: "South Chennai", label: "South Chennai" },
  ];
  const selectArea = [
    { value: "TNagar", label: "TNagar" },
    { value: "Teynampet", label: "Teynampet" },
  ];
  const selectWard = [
    { value: "0017", label: "0017" },
    { value: "0018", label: "0018" },
  ];
  const [state, setState] =useState([])

  const handleFiles = files => {
    var reader = new FileReader();
    reader.onload = function(e) {
        // Use reader.result
        setState(reader.result);
      console.log(reader.result);
    }
    reader.readAsText(files[0]);
}
  const menus = (details) => {
    return(
      <Menu>
      <Menu.Item>
        <a>Edit</a>
      </Menu.Item>
      <Menu.Item>
        <a>Delete</a>
      </Menu.Item>
    </Menu>
    )
  }



  return (
    <div>
      {hideMappingMunicipal && (
        <div>
          <CCard className={"cardSave"}>
            <div className={"main-headerlabel"}>
              <span className={"header-label"}> Municipal Corporation</span>
            </div>
            {locationHide.corporation && (
              <div>
                <div style={{ marginLeft: "-26px" }}>
                  <CRow style={{ marginTop: "45px" }}>
                    <CCol>
                      <CCol
                        md="5" 
                      
                      >
                        <CButton
                          style={{
                         
                            marginLeft: "35px",
                          }}
                          id={"saveAbbreviationConfigureCode"}
                          className={"saveBtn"}
                          onClick={changeMunicipalCorporation}
                        >
                          Add Municipal Corporation
                        </CButton>{" "}
                      </CCol>
                    </CCol>
                  </CRow>
                  
                  <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                    <CCol className={"column-align"} md="3">
                      <CLabel className={"label-name-1"}>
                        State
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <Select
                        id={"municipalstatename"}
                        name={"state"}
                        placeholder={"Select State"}
                        value={stateName}
                        onChange={(e) =>
                          setStateName({ stateName: e.target.value })
                        }
                        options={selectState}
                      />
                    </CCol>
                    <CCol className={"column-align"} md="3">
                      <CLabel className={"label-name-1"}>
                        District / City
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <Select
                        id={"municipaldistrict"}
                        name={"city"}
                        placeholder={" Corporation Name"}
                        options={selectDistrict}
                      />
                    </CCol>

                    <CCol className={"column-align"} md="3">
                      <CLabel className={"label-name-1"}>
                        Municipal Corporation
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <Select
                        id={"municipaldistrict"}
                        name={"city"}
                        placeholder={" Corporation Name"}
                        options={selectMunicipalcorporation}
                      />
                    </CCol>
                  </CRow>

                  <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                    <CCol className={"column-align"} md="3">
                      <CLabel className={"label-name-1"}>
                        Area
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <Select
                        id={"municipalstatename"}
                        name={"Area"}
                        placeholder={"Select Area"}
                        options={selectArea}
                      />
                    </CCol>
                    <CCol className={"column-align"} md="3">
                      <CLabel className={"label-name-1"}>
                        Ward
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <Select
                        id={"municipalstatename"}
                        name={"Ward"}
                        placeholder={"Select Ward"}
                        options={selectWard}
                      />
                    </CCol>
                  </CRow>
                </div>

                <CRow style={{ padding: "4%", marginTop: "-2.5%" ,marginLeft:"-40px"}}>
                  <CDataTable
                    items={userData}
                    fields={fields}
                    columnFilter
                    tableFilter
                    tableLabel={"List of Streets"}
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
        </div>
      )}

      {hideCorporation && (
        <div>
          <CCard className={"cardSave"}>
            <div className={"main-headerlabel"}>
              <span className={"header-label"}>
                {" "}
                Adding Municipal Corporation
              </span>
            </div>
            {locationHide.corporation && (
              <div>
                <div style={{ marginLeft: "-26px" }}>
                  <CRow
                    className={"row-alignment"}
                    style={{ marginLeft: "5px" }}
                  >
                     <CCol className={"column-align"} md="4">
                      <CLabel className={"label-name-5"}>
                        State
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <Select
                      
                        id={"municipalstatename"}
                        name={"state"}
                        placeholder={"Select State"}
                        options={selectState}
                      />
                    </CCol>
                    {municipalList && (
                      <React.Fragment>
                        <CCol className={"column-align"} md={4} lg={4}>
                          <CLabel className={"label-name-5"}>
                            Municipal Corporation
                            <span className={"text-danger"}> *</span>
                          </CLabel>
                          <Select
                            placeholder="Select Municipal Corporation"
                            id={"municipalcorporation"}
                            type={"text"}
                            options={selectMunicipalcorporation}
                          />
                        </CCol>
                        {/* <CCol className={"column-align"} md={1} lg={1}>
                          <CButton
                            shape={"pill"}
                            id={"addmunicipalcorporation"}
                            style={{ marginTop: "30px" }}
                            className={"saveBtn"}
                            onClick={enableCreate}
                          >
                            ADD
                          </CButton>
                        </CCol> */}
 <CCol md={1} lg={1}>
                <CButton
                  style={{
                    marginLeft: "0px",
                    marginTop:"51px",
                    backgroundColor: "#3273e9",
                    borderLine: "5px !important",
                    borderColor: "white",
                    fontSize: "1.25rem",
                    color: "#ffff",
                  }}
                  onClick={enableCreate}
                  class={"fa fa-plus"}
                
                ></CButton>
              </CCol>
              <CCol md={1} lg={1}>
                <i
                  style={{
                    marginLeft: "-77px",
                    marginTop: "53px",

                    fontSize: "1.45rem",
                    color: "#3cd3ad",
                  }}
                  class={"fa fa-eye"}
                 
                ></i>
              </CCol>
                        <CCol md={1} lg={1} style={{marginTop:"50px",marginLeft:"-163px"}}>
                    <ReactFileReader handleFiles={handleFiles} fileTypes={'.CSV'}>
                    <i className="fa fa-upload" style={{fontSize:"1.45rem"}} />
                    <CSVLink data={state} ><i className="fa fa-download" style={{fontSize:"1.45rem",marginLeft:"25px",color:"#ea384d"}}/></CSVLink>
                    </ReactFileReader>
                    
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
                                onClick={editMunicipalCorporation}
                              >
                                EDIT
                              </CButton>
                            </CCol>
                          </React.Fragment>
                        ) : null}
                      </React.Fragment>
                    )}
                    {MunicipalCreate && (
                      <React.Fragment>
                        <CRow
                          className={"row-alignment"}
                          style={{ marginLeft: "45px", marginTop: "20px" }}
                          sm={12}
                          md={12}
                          lg={12}
                        >
                          <CCol md="3">
                            <CLabel className={"label-name-5"}>
                              Municipal Corporation
                              <span className={"text-danger"}> *</span>
                            </CLabel>

                            <CInput
                              id={"MunicipalName"}
                              name={"municipalname"}
                              placeholder="MunicipaL Name"
                              maxlength="60"
                              size="60"
                            />
                          </CCol>

                          <CCol md="3">
                            <CLabel className={"label-name-5"}>
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
                          <CCol md="3">
                            <CLabel className={"label-name-5"}>
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
                          <CCol md="3">
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
                    style={{ marginLeft: "5px" }}
                  >
                          <CCol className={"column-align"} md="4">
                      <CLabel className={"label-name-5"}>
                        District / City
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <Select
                       
                        id={"municipaldistrict"}
                        name={"city"}
                        placeholder={" Corporation Name"}
                        options={selectDistrict}
                      />
                    </CCol>
                    {municipalListadd && (
                      <React.Fragment>
                        <CCol className={"column-align"} md={4} lg={4}>
                          <CLabel className={"label-name-5"}>
                            Ward Number
                            <span className={"text-danger"}> *</span>
                          </CLabel>
                          <Select
                            placeholder="Select Ward Number"
                            id={"municipalcorporation"}
                            type={"text"}
                            options={selectWard}
                          />
                        </CCol>
                        {/* <CCol className={"column-align"} md={1} lg={1}>
                          <CButton
                            shape={"pill"}
                            id={"addmunicipalcorporation"}
                            style={{ marginTop: "30px" }}
                            className={"saveBtn"}
                            onClick={enableCreateadd}
                          >
                            ADD
                          </CButton>
                        </CCol> */}
                         <CCol md={1} lg={1}>
                <CButton
                  style={{
                    marginLeft: "0px",
                    marginTop:"51px",
                    backgroundColor: "#3273e9",
                    borderLine: "5px !important",
                    borderColor: "white",
                    fontSize: "1.25rem",
                    color: "#ffff",
                  }}
                  onClick={enableCreateadd}
                  class={"fa fa-plus"}
                
                ></CButton>
              </CCol>
              <CCol md={1} lg={1}>
                <i
                  style={{
                    marginLeft: "-77px",
                    marginTop: "53px",

                    fontSize: "1.45rem",
                    color: "#3cd3ad",
                  }}
                  class={"fa fa-eye"}
                 
                ></i>
              </CCol>
                        <CCol md={1} lg={1} style={{marginTop:"50px",marginLeft:"-163px"}}>
                    <ReactFileReader handleFiles={handleFiles} fileTypes={'.CSV'}>
                    <i className="fa fa-upload" style={{fontSize:"1.45rem"}} />
                    <CSVLink data={state} ><i className="fa fa-download" style={{fontSize:"1.45rem",marginLeft:"25px",color:"#ea384d"}}/></CSVLink>
                    </ReactFileReader>
                    
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
                                onClick={editMunicipalCorporationadd}
                              >
                                EDIT
                              </CButton>
                            </CCol>
                          </React.Fragment>
                        ) : null}
                      </React.Fragment>
                    )}
                    {MunicipalCreateadd && (
                      <React.Fragment>
                        <CRow
                          className={"row-alignment"}
                          style={{ marginLeft: "45px", marginTop: "20px" }}
                          sm={12}
                          md={12}
                          lg={12}
                        >
                     
                          <CCol md="3">
                            <CLabel className={"label-name-5"}>
                              Ward Number
                              <span className={"text-danger"}> *</span>
                            </CLabel>

                            <CInput
                              id={"wardname"}
                              name={"municipalname"}
                              placeholder="State Name"
                              maxlength="60"
                              size="60"
                            />
                          </CCol>

                          <CCol md="3">
                            <CLabel className={"label-name-5"}>
                              Abbreviation
                              <span className={"text-danger"}> *</span>
                            </CLabel>
                            <CInput
                              id={"wardabbreviation"}
                              name={"abbreviation"}
                              placeholder="Enter Abbreviation"
                              maxlength="5"
                              size="5"
                            />
                          </CCol>
                          <CCol md="3">
                            <CLabel className={"label-name-5"}>
                              Code
                              <span className={"text-danger"}> *</span>
                            </CLabel>
                            <CInput
                              id={"wardcode"}
                              name={"wardcode"}
                              style={{ textTransform: "uppercase" }}
                              placeholder="Enter Code"
                              maxlength="5"
                              size="5"
                            />
                          </CCol>
                          <CCol md="3">
                            <CButton
                              shape={"pill"}
                              id={"wardsave"}
                              style={{ marginTop: "30px" }}
                              className={"saveBtn"}
                            >
                              {passing !== "" ? "UPDATE" : "SAVE"}
                            </CButton>
                            <CButton
                              shape={"pill"}
                              id={"wardcancel"}
                              style={{ marginTop: "30px", marginLeft: "20px" }}
                              className={"cancelBtn"}
                              onClick={CancelStateadd}
                            >
                              CANCEL
                            </CButton>
                            {error !== "" ? <p>{error}</p> : null}
                          </CCol>
                        </CRow>
                      </React.Fragment>
                    )}
                  </CRow>
                  <CCol>
                    <CLabel
                      style={{
                        fontSize: "20PX",
                        fontFamily: "Open Sans",
                        fontWeight: "700",
                        marginLeft: "55px",
                        marginTop: "20px",
                      }}
                    >
                      Selection Area
                    </CLabel>
                  </CCol>
                  <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                   
                   
                  </CRow>
                  <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                    <CCol className={"column-align"} md="4">
                      <CLabel className={"label-name"}>
                        Area
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <Select
                        className={"input-align"}
                        id={"municipalarea"}
                        name={"area"}
                        placeholder={"Select Area"}
                        options={selectArea}
                      />
                    </CCol>
                  </CRow>
                </div>
                <CRow style={{ marginTop: "30px" }}>
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
                        onClick={cancelmc}
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
                <CRow style={{ padding: "4%", marginTop: "-3.5%" }}>
                  <CDataTable
                    items={userData1}
                    fields={fields}
                    columnFilter
                    tableFilter
                    tableLabel={"List of Streets"}
                    itemsPerPageSelect
                    itemsPerPage={5}
                    hover
                    sorter
                    pagination
                    tableCheckbox
                    columncheckbox
                    options={{
                      selection: true,
                    }}
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
                                    marginLeft: "10px",
                                    color: "black",
                                    cursor: "pointer",
                                  }}
                                  className="fa fa-remove"
                                ></i>
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
                                {/* <CInput type="checkbox" style={{width:"20px"}}/> */}
                                <CInput
                                  type="checkbox"
                                  checked={checked}
                                  onChange={handleChange}
                                  inputProps={{
                                    "aria-label": "primary checkbox",
                                  }}
                                />
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

            {locationHide.municipalLocation && (
              <div>
                <div style={{ marginLeft: "-26px" }}>
                  <div className={"row-headerlabel"}>
                    <span className={"header-label"}>
                      {" "}
                      Adding Urban Location{" "}
                    </span>
                  </div>
                  <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                    <CCol className={"column-align"} md="3">
                      <CLabel className={"label-name"}>
                        State
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <CInput
                        className={"input-align"}
                        id={"municipalState"}
                        placeholder={" State Name"}
                        value={location.state}
                        onChange={(e) => setLocation(e.target.value)}
                      />
                    </CCol>
                    <CCol className={"column-align"} md="3">
                      <CLabel className={"label-name"}>
                        District/City
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <CInput
                        className={"input-align"}
                        id={"municipalDistrict"}
                        placeholder={" District/City Name"}
                        value={location.district}
                        onChange={(e) => setLocation(e.target.value)}
                      />
                    </CCol>
                    <CCol className={"column-align"} md="3">
                      <CLabel className={"label-name"}>
                        Muncipality Corporation
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <CInput
                        className={"input-align"}
                        id={"Muncipality"}
                        placeholder={" Muncipality Corporation"}
                        value={location.arae}
                        onChange={(e) => setLocation(e.target.value)}
                      />
                    </CCol>
                  </CRow>
                  <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                    <CCol className={"column-align"} md="3">
                      <CLabel className={"label-name"}>
                        Ward
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <CInput
                        className={"input-align"}
                        id={"municipalWard"}
                        placeholder={" Ward"}
                        value={location.street}
                        onChange={(e) => setLocation(e.target.value)}
                      />
                    </CCol>
                    <CCol className={"column-align"} md="3">
                      <CLabel className={"label-name"}>
                        Street
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <CInput
                        type={"text"}
                        className={"input-align"}
                        id={"municipalStreet"}
                        placeholder={"Enter Street"}
                        value={location.pincode}
                        onChange={(e) => setLocation(e.target.value)}
                      />
                    </CCol>

                    <CCol className={"column-align"} md="3">
                      <CLabel className={"label-name"}>
                        Area
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <CInput
                        type={"text"}
                        className={"input-align"}
                        id={"municipalStreet"}
                        placeholder={"Enter Area"}
                        value={location.pincode}
                        onChange={(e) => setLocation(e.target.value)}
                      />
                    </CCol>
                  </CRow>
                </div>
                <CRow>
                  <CCol md="10">
                    <CCol
                      md="5"
                      style={{
                        float: "right",
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
                        onClick={saveMunicipalLocation}
                      >
                        Save
                      </CButton>{" "}
                    </CCol>
                  </CCol>
                </CRow>
                <CRow style={{ padding: "4%", marginTop: "-3.5%" }}>
                  <CDataTable
                    items={userData}
                    fields={fields}
                    columnFilter
                    tableFilter
                    tableLabel={"List of Locations"}
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
                              <CCol
                                style={{ fontSize: "1.15rem" }}
                                md="12"
                              ></CCol>
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

            {locationHide.districtPanchayat && (
              <div>
                <div style={{ marginLeft: "-26px" }}>
                  <div className={"row-headerlabel"}>
                    <span className={"header-label"}>
                      {" "}
                      Adding District Panchayat Location{" "}
                    </span>
                  </div>
                  <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                    <CCol className={"column-align"} md="3">
                      <CLabel className={"label-name"}>
                        State
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <CInput
                        className={"input-align"}
                        id={"districtPanchayatState"}
                        placeholder={" State Name"}
                        value={location.state}
                        onChange={(e) => setLocation(e.target.value)}
                      />
                    </CCol>
                    <CCol className={"column-align"} md="3">
                      <CLabel className={"label-name"}>
                        District
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <CInput
                        className={"input-align"}
                        id={"districtPanchayatDistrict"}
                        placeholder={" District/City Name"}
                        value={location.district}
                        onChange={(e) => setLocation(e.target.value)}
                      />
                    </CCol>
                    <CCol className={"column-align"} md="3">
                      <CLabel className={"label-name"}>
                        District Panchayat
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <CInput
                        className={"input-align"}
                        id={"districtPanchayat"}
                        placeholder={" Area Name"}
                        value={location.arae}
                        onChange={(e) => setLocation(e.target.value)}
                      />
                    </CCol>
                  </CRow>
                  <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                    <CCol className={"column-align"} md="3">
                      <CLabel className={"label-name"}>
                        Ward
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <CInput
                        className={"input-align"}
                        id={"districtPanchayatWard"}
                        placeholder={" Street Name"}
                        value={location.street}
                        onChange={(e) => setLocation(e.target.value)}
                      />
                    </CCol>
                    <CCol className={"column-align"} md="3">
                      <CLabel className={"label-name"}>
                        Street
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <CInput
                        type={"text"}
                        className={"input-align"}
                        id={"districtPanchayatStreet"}
                        placeholder={"Enter Pincode"}
                        value={location.pincode}
                        onChange={(e) => setLocation(e.target.value)}
                      />
                    </CCol>
                  </CRow>
                </div>
                <CRow>
                  <CCol md="10">
                    <CCol
                      md="5"
                      style={{
                        float: "right",
                      }}
                    >
                      <CButton
                        style={{
                          float: "right",
                        }}
                        id={"cancelDistrictPanchayats"}
                        className={"cancelBtn"}
                      >
                        CANCEL
                      </CButton>
                      <CButton
                        style={{
                          float: "right",
                          marginRight: "15px",
                        }}
                        id={"saveDistrictPanchayats"}
                        className={"saveBtn"}
                        onClick={saveDistrictPanchayat}
                      >
                        Save
                      </CButton>{" "}
                    </CCol>
                  </CCol>
                </CRow>
                <CRow style={{ padding: "4%", marginTop: "-3.5%" }}>
                  <CDataTable
                    items={userData}
                    fields={fields}
                    columnFilter
                    tableFilter
                    tableLabel={"List of Locations"}
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
                              <CCol
                                style={{ fontSize: "1.15rem" }}
                                md="12"
                              ></CCol>
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
            {locationHide.townPanchayat && (
              <div>
                <div style={{ marginLeft: "-26px" }}>
                  <div className={"row-headerlabel"}>
                    <span className={"header-label"}>
                      {" "}
                      Adding Town Panchayat Location{" "}
                    </span>
                  </div>
                  <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                    <CCol className={"column-align"} md="3">
                      <CLabel className={"label-name"}>
                        State
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <CInput
                        className={"input-align"}
                        id={"townPanchayatState"}
                        placeholder={" State Name"}
                        value={location.state}
                        onChange={(e) => setLocation(e.target.value)}
                      />
                    </CCol>
                    <CCol className={"column-align"} md="3">
                      <CLabel className={"label-name"}>
                        District
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <CInput
                        className={"input-align"}
                        id={"townPanchayatDistrict"}
                        placeholder={" District/City Name"}
                        value={location.district}
                        onChange={(e) => setLocation(e.target.value)}
                      />
                    </CCol>
                    <CCol className={"column-align"} md="3">
                      <CLabel className={"label-name"}>
                        Town Panchayat
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <CInput
                        className={"input-align"}
                        id={"townPanchayatArea"}
                        placeholder={" Area Name"}
                        value={location.arae}
                        onChange={(e) => setLocation(e.target.value)}
                      />
                    </CCol>
                  </CRow>
                  <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                    <CCol className={"column-align"} md="3">
                      <CLabel className={"label-name"}>
                        Ward
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <CInput
                        className={"input-align"}
                        id={"PoliticalStreet"}
                        placeholder={" Street Name"}
                        value={location.street}
                        onChange={(e) => setLocation(e.target.value)}
                      />
                    </CCol>
                    <CCol className={"column-align"} md="3">
                      <CLabel className={"label-name"}>
                        Street
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <CInput
                        type={"text"}
                        className={"input-align"}
                        id={"PoliticalPincode"}
                        placeholder={"Enter Pincode"}
                        value={location.pincode}
                        onChange={(e) => setLocation(e.target.value)}
                      />
                    </CCol>
                  </CRow>
                </div>
                <CRow>
                  <CCol md="10">
                    <CCol
                      md="5"
                      style={{
                        float: "right",
                      }}
                    >
                      <CButton
                        style={{
                          float: "right",
                        }}
                        id={"cancelTownPanchayat"}
                        className={"cancelBtn"}
                      >
                        CANCEL
                      </CButton>
                      <CButton
                        style={{
                          float: "right",
                          marginRight: "15px",
                        }}
                        id={"saveTownPanchayat"}
                        className={"saveBtn"}
                        onClick={savetownPanchayat}
                      >
                        Save
                      </CButton>{" "}
                    </CCol>
                  </CCol>
                </CRow>
                <CRow style={{ padding: "4%", marginTop: "-3.5%" }}>
                  <CDataTable
                    items={userData}
                    fields={fields}
                    columnFilter
                    tableFilter
                    tableLabel={"List of Locations"}
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
                              <CCol
                                style={{ fontSize: "1.15rem" }}
                                md="12"
                              ></CCol>
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
            {locationHide.villagePanchayat && (
              <div>
                <div style={{ marginLeft: "-26px" }}>
                  <div className={"row-headerlabel"}>
                    <span className={"header-label"}>
                      {" "}
                      Adding Rural Location{" "}
                    </span>
                  </div>
                  <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                    <CCol className={"column-align"} md="3">
                      <CLabel className={"label-name"}>
                        State
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <CInput
                        className={"input-align"}
                        id={"villagePanchayatState"}
                        placeholder={" State Name"}
                        value={location.state}
                        onChange={(e) => setLocation(e.target.value)}
                      />
                    </CCol>
                    <CCol className={"column-align"} md="3">
                      <CLabel className={"label-name"}>
                        District
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <CInput
                        className={"input-align"}
                        id={"villagePanchayatDistrict"}
                        placeholder={" District/City Name"}
                        value={location.district}
                        onChange={(e) => setLocation(e.target.value)}
                      />
                    </CCol>
                    <CCol className={"column-align"} md="3">
                      <CLabel className={"label-name"}>
                        Panchayat Union
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <CInput
                        className={"input-align"}
                        id={"villagePanchayat"}
                        placeholder={"  Panchayat Union"}
                        value={location.arae}
                        onChange={(e) => setLocation(e.target.value)}
                      />
                    </CCol>
                  </CRow>
                  <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                    <CCol className={"column-align"} md="3">
                      <CLabel className={"label-name"}>
                        Village Union
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <CInput
                        className={"input-align"}
                        id={"villageunion"}
                        placeholder={"village Union"}
                        value={location.villageunion}
                        onChange={(e) => setLocation(e.target.value)}
                      />
                    </CCol>

                    <CCol className={"column-align"} md="3">
                      <CLabel className={"label-name"}>
                        Ward
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <CInput
                        className={"input-align"}
                        id={"villagePanchayatWard"}
                        placeholder={"Enter Ward"}
                        value={location.street}
                        onChange={(e) => setLocation(e.target.value)}
                      />
                    </CCol>
                    <CCol className={"column-align"} md="3">
                      <CLabel className={"label-name"}>
                        Street
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <CInput
                        type={"text"}
                        className={"input-align"}
                        id={"villagePanchayatStreet"}
                        placeholder={"Enter Street"}
                        value={location.pincode}
                        onChange={(e) => setLocation(e.target.value)}
                      />
                    </CCol>
                  </CRow>
                </div>
                <CRow>
                  <CCol md="10">
                    <CCol
                      md="5"
                      style={{
                        marginTop: "18px",
                        float: "right",
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
                        Save
                      </CButton>{" "}
                    </CCol>
                  </CCol>
                </CRow>
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
                <CRow style={{ padding: "4%", marginTop: "-3.5%" }}>
                  <CDataTable
                    items={userData}
                    fields={fields}
                    columnFilter
                    tableFilter
                    tableLabel={"List of Locations"}
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
                              <CCol
                                style={{ fontSize: "1.15rem" }}
                                md="12"
                              ></CCol>
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
            {locationHide.cityLocation && (
              <div>
                <div style={{ marginLeft: "-26px" }}>
                  <div className={"row-headerlabel"}>
                    <span className={"header-label"}> Adding Location </span>
                  </div>
                  <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                    <CCol className={"column-align"} md="3">
                      <CLabel className={"label-name"}>
                        State
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <CInput
                        className={"input-align"}
                        id={"PoliticalState"}
                        placeholder={" State Name"}
                        value={location.state}
                        onChange={(e) => setLocation(e.target.value)}
                      />
                    </CCol>
                    <CCol className={"column-align"} md="3">
                      <CLabel className={"label-name"}>
                        District/City
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <CInput
                        className={"input-align"}
                        id={"PoliticalState"}
                        placeholder={" District/City Name"}
                        value={location.district}
                        onChange={(e) => setLocation(e.target.value)}
                      />
                    </CCol>
                    <CCol className={"column-align"} md="3">
                      <CLabel className={"label-name"}>
                        Area
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <CInput
                        className={"input-align"}
                        id={"PoliticalArea"}
                        placeholder={" Area Name"}
                        value={location.arae}
                        onChange={(e) => setLocation(e.target.value)}
                      />
                    </CCol>
                  </CRow>
                  <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                    <CCol className={"column-align"} md="3">
                      <CLabel className={"label-name"}>
                        Street
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <CInput
                        className={"input-align"}
                        id={"PoliticalStreet"}
                        placeholder={" Street Name"}
                        value={location.street}
                        onChange={(e) => setLocation(e.target.value)}
                      />
                    </CCol>
                    <CCol className={"column-align"} md="3">
                      <CLabel className={"label-name"}>
                        Pincode
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <CInput
                        type={"number"}
                        className={"input-align"}
                        id={"PoliticalPincode"}
                        placeholder={"Enter Pincode"}
                        value={location.pincode}
                        onChange={(e) => setLocation(e.target.value)}
                      />
                    </CCol>
                  </CRow>
                </div>
                <CRow>
                  <CCol md="10">
                    <CCol
                      md="5"
                      style={{
                        float: "right",
                      }}
                    >
                      <CButton
                        style={{
                          float: "right",
                        }}
                        id={"cancelAbbreviationConfigureCode"}
                        className={"cancelBtn"}
                        onClick={cancelcityLocation}
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
                        onClick={cityLocation}
                      >
                        Save
                      </CButton>{" "}
                    </CCol>
                  </CCol>
                </CRow>
                <CRow style={{ padding: "4%", marginTop: "-3.5%" }}>
                  <CDataTable
                    items={userData}
                    fields={fields}
                    columnFilter
                    tableFilter
                    tableLabel={"List of Locations"}
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
                              <CCol
                                style={{ fontSize: "1.15rem" }}
                                md="12"
                              ></CCol>
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

export default MunicipalCorporation;
