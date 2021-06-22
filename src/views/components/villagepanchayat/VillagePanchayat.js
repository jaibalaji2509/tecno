import {
  CButton,
  CCard,
  CCol,
  CInput,
  CLabel,
  CRow,
  
} from "@coreui/react";
import React, { useState } from "react";
import Select  from "react-select";
import CDataTable from "../../CoreComponents/table/CDataTable";
import { saveCreateCorporation } from "../../../services/ApiService";
import { toast } from "react-toastify";
const VillagePanchayat = () => {
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
  const [municipalCorporation, ] = useState({});
  const [municipalName,] = useState("");
  const [villageList, setvillageList] = useState(true);
  const [villageCreate, setVillageCreate] = useState(false);
  const [panchayatList, setPanchayatlist] = useState(true);
  const [panchayatCreate, setpanchayatCreate] = useState(false);
  const [wardList, setWardList] = useState(true);
  const [wardCreate, setWardCreate] = useState(false);
  const [locationHide, setLocationHide] = useState({
    corporation: true,
    municipalLocation: false,
    districtPanchayat: false,
    townPanchayat: false,
    villagePanchayat: false,
    cityLocation: false,
  });
  const select=[{value:"tamil",label:"Tamilnadu" },
{value:"Chengalpattu",label:"Chengalpattu"},
{value:"Chunampedu",label:"Chunampedu"},
{value:"Vanniyallur",label:"Vanniyallur"},
{value:"Agaem",label:"Agaram kuturoad"},
{value:"porpanthel",label:"porpanthal"},
{value:"5",label:"018"},
{value:"5",label:"019"},


]
  const userData = [
    {
      SNo: "1.",
            Street: "Agaram kuturoad",
        Ward:"018",
        by:"Jai Balaji",
        on:"10/06/2021"
    },
    {
      SNo: "2.",
            Street: "Achari street",
        Ward:"019",
        by:"Jai Balaji",
        on:"10/06/2021"
    },
  ];
  const fields = [
    
    { key: "SNo", label: "S.NO", _style: { width: "5%" } },
    { key: "Ward", label: "Ward Number", _style: { width: "10%" } },
    { key: "Street", label: "Street Name", _style: { width: "10%" } },
    { key: "by", label: "Entered By", _style: { width: "10%" } },
    { key: "on", label: "Entered On", _style: { width: "10%" } },
    
    { key: "show_details1", label: "Action", _style: { width: "10%" } },
  ];
  const fields1 = [
    {
      key: "show_details",
      label: "Select",
      _style: { width: "3%" },
      name: (
        <div>
          Email <input type={"checkbox"} onClick={""} />
        </div>
      ),
      sorter: false,
      filter: false,
    },
    { key: "SNo", label: "S.NO", _style: { width: "5%" } },
   
    { key: "Street", label: "Street Name", _style: { width: "10%" } },
  ];

  const [passing, setPassing] = useState("");
  const [error, ] = useState("");
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

  
  const changeHandler = (e) => {
    setLocations({ ...locations, [e.target.name]: e.target.value });
  };
  
  const enableCreate = async () => {
    await setMunicipalList(false);
    await setmunicipalCreate(true);
  };

  const addPanchayat = async () => {
    await setPanchayatlist(false);
    await setpanchayatCreate(true);
  };
  const addVillage = async () => {
    await setvillageList(false);
    await setVillageCreate(true);
  };
  const addWard = async () => {
    await setWardList(false);
    await setWardCreate(true);
  };
  const editState = async () => {
    await setMunicipalList(false);
    await setmunicipalCreate(true);
    
  };
  const CancelState = async () => {
    setPassing("");
    await setMunicipalList(true);
    await setmunicipalCreate(false);
  };
  const cancelVillage = async () => {
    setPassing("");
    await setvillageList(true);
    await setVillageCreate(false);
  };
  const cancelWard = async () => {
    setPassing("");
    await setWardList(true);
    await setWardCreate(false);
  };
  const cancelPanchayat = async () => {
    setPassing("");
    await setPanchayatlist(true);
    await setpanchayatCreate(false);
  };
  const [hideMappingVillage, setHideMappingVillage] = useState(true);
  const [hideVillagePanchayat, setHideVillagePanchayat] = useState(false);
  const changeVillagePanchayat = () => {
    setHideMappingVillage(false);
    setHideVillagePanchayat(true);
  };
  const cancelchange = () => {
    setHideMappingVillage(true);
    setHideVillagePanchayat(false);
  };
  return (
    <div>
      {hideMappingVillage && (
        <div>
          <CCard className={"cardSave"}>
            <div className={"main-headerlabel"}>
              <span className={"header-label"}>
              Village panchayat
              </span>
            </div>
            {locationHide.corporation && (
              <div>
                <div style={{ marginLeft: "-26px" }}>
                  
                  <CRow style={{ marginTop: "45px" }}>
                    <CCol  >
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
                            marginRight: "1055px",
                          }}
                          id={"saveAbbreviationConfigureCode"}
                          className={"saveBtn"}
                          onClick={changeVillagePanchayat}
                        >
                         Add Village panchayat
                        </CButton>{" "}
                      </CCol>
                    </CCol>
                  </CRow>
                  <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                    <CCol className={"column-align"} md="3">
                      <CLabel className={"label-name"}>
                        State
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <Select
                        className={"input-align"}
                        id={"municipalstatename"}
                        name={"state"}
                        placeholder={"Select State"}
                        // value={locations.district}
                        // onChange={changeHandler}
                        options={select}
                      />
                    </CCol>
                    <CCol className={"column-align"} md="3">
                      <CLabel className={"label-name"}>
                        District panchayat
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <Select
                        className={"input-align"}
                        id={"municipaldistrict"}
                        name={"city"}
                        placeholder={"Select District panchayat"}
                        options={select}
                      />
                    </CCol>
                    <CCol className={"column-align"} md="3">
                      <CLabel className={"label-name"}>
                      Village Panchayat
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                -      <Select
                        className={"input-align"}
                        id={"municipaldistrict"}
                        name={"city"}
                        placeholder={"Select Village panchayat"}
                        options={select}
                      />
                    </CCol>
                  </CRow>

                  <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                    <CCol className={"column-align"} md="3">
                      <CLabel className={"label-name"}>
                      District / City
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <Select
                        className={"input-align"}
                        id={"municipalpanchayatunion"}
                        name={"state"}
                        placeholder={"Select City Name"}
                        options={select}
                      />
                    </CCol>
                    <CCol className={"column-align"} md="3">
                      <CLabel className={"label-name"}>
                      Panchayat Union
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <Select
                        className={"input-align"}
                        id={"municipalvillagepanchayat"}
                        name={"city"}
                        placeholder={"Select Panchayat Union"}
                        options={select}
                      />
                    </CCol>
                    <CCol className={"column-align"} md="3">
                      <CLabel className={"label-name"}>
                      Ward No
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                -      <Select
                        className={"input-align"}
                        id={"municipalwardno"}
                        name={"city"}
                        placeholder={"Select Ward No"}
                        options={select}
                      />
                    </CCol>
                  </CRow>
                </div>

                <CRow style={{ padding: "4%", marginTop: "-1.5%" ,marginLeft:"-30px"}}>
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
                      show_details1: (item, index) => {
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

{hideVillagePanchayat && (
    <div>
  <CCard className={"cardSave"}>
        <div className={"main-headerlabel"}>
          <span className={"header-label"}>Adding Village Panchayat</span>
        </div>
        {locationHide.corporation && (
          <div>
            <div style={{ marginLeft: "-26px" }}>
            <CRow className={"row-alignment"} md="12" sm="12" lg="12" style={{marginLeft:"-5px"}}>
                <CCol className={"column-align"} md="4">
                  <CLabel className={"label-name"}>
                    State
                    <span className={"text-danger"}>*</span>
                  </CLabel>
                  <Select
                    className={"input-align"}
                    id={"municipalstatename"}
                    name={"state"}
                    placeholder={"Select State"}
                    options={select}
                  />
                </CCol>
                {municipalList && (
                  <React.Fragment>
                    <CCol className={"column-align"} md={4} lg={4}>
                      <CLabel className={"label-name-1"}>
                        District Panchayat
                        <span className={"text-danger"}> *</span>
                      </CLabel>
                      <Select
                        placeholder="Select District Panchayat"
                        id={"municipalcorporation"}
                        type={"text"}
                        // value={municipalCorporation}
                        options={select}
                      />
                    </CCol>
                    <CCol className={"column-align"} md={1} lg={1}>
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
                            onClick={editState}
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
                    <CRow  className={"row-alignment"} style={{marginLeft:"45px", marginTop:"20px"}} sm={12} md={12} lg={12}>
                      <CCol md="3">
                        <CLabel className={"label-name-1"}>
                          District panchayat
                          <span className={"text-danger"}> *</span>
                        </CLabel>

                        <CInput
                          id={"MunicipalName"}
                          name={"municipalname"}
                          placeholder="Enter District Panchayat Name"
                          maxlength="60"
                          size="60"
                        />
                      </CCol>

                      <CCol md="3">
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
                      <CCol md="3">
                        <CLabel className={"label-name-1"}>
                          Code
                          <span className={"text-danger"}> *</span>
                        </CLabel>
                        <CInput
                          id={"municipalcode"}
                          name={"code"}
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
                <CRow className={"row-alignment"} md="12" sm="12" lg="12" style={{marginLeft:"-5px"}}>
                <CCol className={"column-align"} md="4">
                  <CLabel className={"label-name"}>
                    District / City
                    <span className={"text-danger"}>*</span>
                  </CLabel>
                  <Select
                    className={"input-align"}
                    id={"municipaldistrict"}
                    name={"city"}
                    placeholder={"Select City Name"}
                    options={select}
                  />
                </CCol>
                {panchayatList && (
                  <React.Fragment>
                    <CCol className={"column-align"} md={4} lg={4}>
                      <CLabel className={"label-name-1"}>
                        Panchayat Union
                        <span className={"text-danger"}> *</span>
                      </CLabel>
                      <Select
                        placeholder="Select Panchayat Union"
                        id={"municipalcorporation"}
                        type={"text"}
                        options={select}
                      />
                    </CCol>
                    <CCol className={"column-align"} md={1} lg={1}>
                      <CButton
                        shape={"pill"}
                        id={"addmunicipalcorporation"}
                        style={{ marginTop: "30px" }}
                        className={"saveBtn"}
                        onClick={addPanchayat}
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
                {panchayatCreate && (
                  <React.Fragment>
                    <CRow  className={"row-alignment"} style={{marginLeft:"45px", marginTop:"20px"}} sm={12} md={12} lg={12}>
                      <CCol md="3">
                        <CLabel className={"label-name-1"}>
                          Panchayat Union
                          <span className={"text-danger"}> *</span>
                        </CLabel>

                        <CInput
                          id={"MunicipalName"}
                          name={"municipalname"}
                          placeholder="Enter panchayat Union Name"
                          maxlength="60"
                          size="60"
                        />
                      </CCol>

                      <CCol md="3">
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
                      <CCol md="3">
                        <CLabel className={"label-name-1"}>
                          Code
                          <span className={"text-danger"}> *</span>
                        </CLabel>
                        <CInput
                          id={"municipalcode"}
                          name={"code"}
     
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
                          onClick={cancelPanchayat}
                        >
                          CANCEL
                        </CButton>
                        {error !== "" ? <p>{error}</p> : null}
                      </CCol>
                    </CRow>
                  </React.Fragment>
                )}

              </CRow>
              <CRow className={"row-alignment"} md="12" sm="12" lg="12" style={{marginLeft:"-5px"}}>
                <CCol className={"column-align"} md="4">
</CCol>
{villageList && (
                  <React.Fragment>
                    <CCol className={"column-align"} md={4} lg={4} >
                      <CLabel className={"label-name-1"}>
                        Village Panchayat
                        <span className={"text-danger"}> *</span>
                      </CLabel>
                      <Select
                        placeholder="Select Village Panchayat"
                        id={"municipalcorporation"}
                        type={"text"}
                        options={select}
                      />
                    </CCol>
                    <CCol className={"column-align"} md={1} lg={1}>
                      <CButton
                        shape={"pill"}
                        id={"addmunicipalcorporation"}
                        style={{ marginTop: "30px" }}
                        className={"saveBtn"}
                        onClick={addVillage}
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
                {villageCreate && (
                  <React.Fragment>
                    <CRow  className={"row-alignment"} style={{marginLeft:"45px", marginTop:"20px"}} sm={12} md={12} lg={12}>
                      <CCol md="3">
                        <CLabel className={"label-name-1"}>
                          Village Panchayat
                          <span className={"text-danger"}> *</span>
                        </CLabel>

                        <CInput
                          id={"MunicipalName"}
                          name={"municipalname"}
                          placeholder="Enter Village Panchayat Name"
                          maxlength="60"
                          size="60"
                        />

                      </CCol>

                      <CCol md="3">
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
                      <CCol md="3">
                        <CLabel className={"label-name-1"}>
                          Code
                          <span className={"text-danger"}> *</span>
                        </CLabel>
                        <CInput
                          id={"municipalcode"}
                          name={"code"}
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
                          onClick={cancelVillage}
                        >
                          CANCEL
                        </CButton>
                        {error !== "" ? <p>{error}</p> : null}
                      </CCol>
                    </CRow>
                  </React.Fragment>
                )}

</CRow>              

<CRow className={"row-alignment"} md="12" sm="12" lg="12" style={{marginLeft:"-5px"}}>
                <CCol className={"column-align"} md="4">
</CCol>
                {wardList && (
                  <React.Fragment>
                    <CCol className={"column-align"} md={4} lg={4}>
                      <CLabel className={"label-name-1"}>
                        Ward Number
                        <span className={"text-danger"}> *</span>
                      </CLabel>
                      <Select
                        placeholder="Select the Ward Number"
                        id={"municipalcorporation"}
                        type={"text"}
                        options={select}
                   />
                    </CCol>
                    <CCol className={"column-align"} md={1} lg={1}>
                      <CButton
                        shape={"pill"}
                        id={"addmunicipalcorporation"}
                        style={{ marginTop: "30px" }}
                        className={"saveBtn"}
                        onClick={addWard}
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
                {wardCreate && (
                  <React.Fragment>
                    <CRow  className={"row-alignment"} style={{marginLeft:"45px", marginTop:"20px"}} sm={12} md={12} lg={12}>
                      <CCol md="3">
                        <CLabel className={"label-name-1"}>
                          Ward Number
                          <span className={"text-danger"}> *</span>
                        </CLabel>

                        <CInput
                          id={"wardname"}
                          name={"municipalname"}
                          placeholder="Enter Ward Number"
                          maxlength="60"
                          size="60"
                        />
                      </CCol>

                      <CCol md="3">
                        <CLabel className={"label-name-1"}>
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
                        <CLabel className={"label-name-1"}>
                          Code
                          <span className={"text-danger"}> *</span>
                        </CLabel>
                        <CInput
                          id={"wardcode"}
                          name={"wardcode"}
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
                          onClick={cancelWard}
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
                  Select Street
                </CLabel>
              </CCol>
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
                    placeholder={"Select Area Name"}
                    options={select}
                  />
                </CCol>
               
              </CRow>
            </div>
            <CRow style={{ marginTop: "30px", marginLeft:"650px" }}>
              <CCol md="10">
                <CCol
                  md="5"
                  style={{
                    position: "absolute",
                    marginLeft: "-190px",
                    float: "right",
                    marginTop: "-65px",
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
            <CRow>
                                <CInput
                                  type={"checkbox"}
                                  style={{
                                    width: "15px",
                                    height: "15px",
                                    marginLeft: "78px",
                                    marginBottom: "10px",
                                    marginTop:"180px"
                                  }}
                                />
                                <CCol style={{ fontSize: "1.15rem" }} md="12">
                                </CCol>
                              </CRow>

            <CRow style={{ padding: "4%", marginTop: "-17%" }}>
              <CDataTable
                items={userData}
                fields={fields1}
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
                      <td className="py-2">
                        <CRow>
                          <CInput
                            type={"checkbox"}
                            style={{
                              width: "15px",
                              height: "15px",
                              marginLeft: "30px",
                              marginBottom: "10px",
                            }}
                          />
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
                            id={"constimemDelete"}
                            style={{
                              marginLeft: "5px",
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

export default VillagePanchayat;
