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

const TownPanchayat = () => {
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
  const [municipalCorporation] = useState({});
  const [municipalName ] = useState("");
  const [wardnumberList, seatWardNumberList] = useState(true);
  const [wardNumberCreate, setWardNumberCreate] = useState(false);
  const [locationHide] = useState({
    corporation: true,
    municipalLocation: false,
    districtPanchayat: false,
    townPanchayat: false,
    villagePanchayat: false,
    cityLocation: false,
  });
  const userData = [
     ];
  const fields = [
    {
      key: "show_details",
      label: "Select",
      _style: { width: "3%" },
    
      sorter: false,
      filter: false,
    },
    {
      key: "SNo",
      label: "S.NO",
      _style: { width: "5%" },
      sorter: false,
      filter: false,
    },
    
    { key: "Street", label: "Street Name", _style: { width: "10%" } },
    { key: "Street", label: "Ward Name", _style: { width: "10%" } },
   
  
    {
      key: "Action",
      label: "Enteerd by",
      _style: { width: "10%" },
      sorter: false,
      filter: false,
    },
    {
      key: "Action",
      label: "Entered On",
      _style: { width: "10%" },
      sorter: false,
      filter: false,
    },
    {
      key: "Action",
      label: "Action",
      _style: { width: "10%" },
      sorter: false,
      filter: false,
    },
  ];
  const [passing, setPassing] = useState("");
  const [error] = useState("");



  const changeHandler = (e) => {
    setLocations({ ...locations, [e.target.name]: e.target.value });
  };
  const enableCreate = async () => {
    await setMunicipalList(false);
    await setmunicipalCreate(true);
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
  const [hideMappingTown, setHideMappingTown] = useState(true);
  const [hideTownPanchayat, setHideTownPanchayat] = useState(false);

  const changeTownPanchayat = () => {
    setHideMappingTown(false);
    setHideTownPanchayat(true);
  };
const canceltownchange = () => {
  setHideMappingTown(true);
    setHideTownPanchayat(false);
  };
    
    const addWardNumber = async () => {
      await seatWardNumberList(false);
      await setWardNumberCreate(true);
    };

    const editStateadd = async () => {
      
    };
    const cancelWardNumber = async () => {
      setPassing("");
      await seatWardNumberList(true);
      await setWardNumberCreate(false);
    };

    return (
      <div>
        {hideMappingTown && (
          <div>
            <CCard className={"cardSave"}>
              <div className={"main-headerlabel"}>
                <span className={"header-label"}>Town Panchayat</span>
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
                        Town Panchayat{" "}
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
                              marginRight: "835px",
                            }}
                            id={"saveAbbreviationConfigureCode"}
                            className={"saveBtn"}
                            onClick={changeTownPanchayat}
                          >
                            Add Town Panchayat
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
                          value={locations.district}
                          onChange={changeHandler}
                        />
                      </CCol>
                      <CCol className={"column-align"} md="3">
                        <CLabel className={"label-name"}>
                          District / City
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <Select
                          className={"input-align"}
                          id={"municipaldistrict"}
                          name={"city"}
                          placeholder={" Corporation Name"}
                          value={locations.city}
                          onChange={changeHandler}
                        />
                      </CCol>
                      <CCol className={"column-align"} md="3">
                        <CLabel className={"label-name"}>
                          Town Panchayat
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <Select
                          className={"input-align"}
                          id={"municipaldistrict"}
                          name={"city"}
                          placeholder={" Corporation Name"}
                          value={locations.city}
                          onChange={changeHandler}
                        />
                      </CCol>
                    </CRow>

                    <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                      <CCol className={"column-align"} md="3">
                        <CLabel className={"label-name"}>
                        Area
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <Select
                          className={"input-align"}
                          id={"municipaldistrict"}
                          name={"Area"}
                          placeholder={" Select Area"}
                          value={locations.city}
                          onChange={changeHandler}
                        />
                      </CCol>
                      <CCol className={"column-align"} md="3">
                        <CLabel className={"label-name"}>
                          Ward
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <Select
                          className={"input-align"}
                          id={"municipalstatename"}
                          name={"Ward"}
                          placeholder={"Select Ward"}
                          value={locations.district}
                          onChange={changeHandler}
                        />
                      </CCol>
                    </CRow>
                  </div>

                  <CRow style={{ padding: "4%", marginTop: "-1.5%" }}>
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
                            <td className="py-2">
                              <CRow>
                                <CCol style={{ fontSize: "1.15rem" }} md="12">
                                
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
        {hideTownPanchayat && (
          <div>
            <CCard className={"cardSave"}>
              <div className={"main-headerlabel"}>
                <span className={"header-label"}> Town panchayat</span>
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
                        Adding Town Panchayat{" "}
                      </span>
                    </div>
                    <CRow
                      className={"row-alignment"}
                      style={{ marginLeft: "5px" }}
                    >
                      {municipalList && (
                        <React.Fragment>
                          <CCol className={"column-align"} md={4} lg={4}>
                            <CLabel className={"label-name-1"}>
                              Town Panchayat
                              <span className={"text-danger"}> *</span>
                            </CLabel>
                            <Select
                              placeholder="Select Municipal Corporation"
                              id={"municipalcorporation"}
                              type={"text"}
                              value={municipalCorporation}
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
                          <CRow
                            className={"column-align3"}
                            sm={12}
                            md={12}
                            lg={12}
                          >
                            <CCol md="3">
                              <CLabel className={"label-name-3"}>
                                Town Panchayat
                                <span className={"text-danger"}> *</span>
                              </CLabel>

                              <CInput
                                id={"MunicipalName"}
                                name={"municipalname"}
                                placeholder="Enter Town Panchayat Name"
                                maxlength="60"
                                size="60"
                              />
                            </CCol>

                            <CCol md="3">
                              <CLabel className={"label-name-3"}>
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
                              <CLabel className={"label-name-3"}>
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
                                style={{
                                  marginTop: "30px",
                                  marginLeft: "20px",
                                }}
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
                      {wardnumberList && (
                        <React.Fragment>
                          <CCol className={"column-align"} md={4} lg={4}>
                            <CLabel className={"label-name-1"}>
                              Ward Number
                              <span className={"text-danger"}> *</span>
                            </CLabel>
                            <Select
                              placeholder="Select the State Name"
                              id={"municipalcorporation"}
                              type={"text"}
                            />
                          </CCol>
                          <CCol className={"column-align"} md={1} lg={1}>
                            <CButton
                              shape={"pill"}
                              id={"addmunicipalcorporation"}
                              style={{ marginTop: "30px" }}
                              className={"saveBtn"}
                              onClick={addWardNumber}
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
                                  onClick={editStateadd}
                                >
                                  EDIT
                                </CButton>
                              </CCol>
                            </React.Fragment>
                          ) : null}
                        </React.Fragment>
                      )}

                      {wardNumberCreate && (
                        <React.Fragment>
                          <CRow
                            className={"column-align3"}
                            sm={12}
                            md={12}
                            lg={12}
                          >
                            <CCol md="3">
                              <CLabel className={"label-name-3"}>
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
                              <CLabel className={"label-name-3"}>
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
                              <CLabel className={"label-name-3"}>
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
                                style={{
                                  marginTop: "30px",
                                  marginLeft: "20px",
                                }}
                                className={"cancelBtn"}
                                onClick={cancelWardNumber}
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
                          value={locations.district}
                          onChange={changeHandler}
                        />
                      </CCol>
                      <CCol className={"column-align"} md="4">
                        <CLabel className={"label-name"}>
                          District / City
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <Select
                          className={"input-align"}
                          id={"municipaldistrict"}
                          name={"city"}
                          placeholder={" Corporation Name"}
                          value={locations.city}
                          onChange={changeHandler}
                        />
                      </CCol>
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
                          placeholder={" Corporation Name"}
                          value={locations.city}
                          onChange={changeHandler}
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
                          position: "absolute",
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
                          onClick={canceltownchange}
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
                              <CInput
                                type={"checkbox"}
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

export default TownPanchayat;
