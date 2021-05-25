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
const TownPanchayat = () => {
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

  const [locationHide, setLocationHide] = useState({
    corporation: true,
    municipalLocation: false,
    districtPanchayat: false,
    townPanchayat: false,
    villagePanchayat: false,
    cityLocation: false,
  });
  const userData = [
    {
      SNo: "1",
      // State: "TamilNadu",
      // District: "chennai",
      // Area: "TNagar",
      Street: "CP Ramaswamy Street",
    },
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
      _style: { width: "10%" },
      sorter: false,
      filter: false,
    },
    // { key: "State", label: "State", _style: { width: "10%" } },
    // { key: "District", label: "District", _style: { width: "10%" } },
    // { key: "Area", label: "Ward", _style: { width: "10%" } },
    { key: "Street", label: "Name of the Street", _style: { width: "10%" } },

    // { key: "male", label: "Male", _style: { width: "10%" } },
    // { key: "female", label: "Female", _style: { width: "10%" } },
    {
      key: "Action",
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
  const enableCreate = async () => {
    await setMunicipalList(false);
    await setmunicipalCreate(true);
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
  const [hideMappingTown, setHideMappingTown] = useState(true);
  const [hideTownPanchayat, setHideTownPanchayat] = useState(false);

  const changeTownPanchayat = () => {
    setHideMappingTown(false);
    setHideTownPanchayat(true);
  };
  const enableCreate1 = async () => {
    // await setMunicipalList1(false);
    // await setmunicipalCreate1(true);
    const enableCreateadd = async () => {
      await setMunicipalListadd(false);
      await setmunicipalCreateadd(true);
    };

    const editStateadd = async () => {
      // await setMunicipalListadd(false);
      // await setmunicipalCreateadd(true);
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
                              marginRight: "980px",
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
                      <CCol className={"column-align"} md="4">
                        <CLabel className={"label-name"}>
                          State
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <CSelect
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
                        <CSelect
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
                          Town Panchayat
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <CSelect
                          className={"input-align"}
                          id={"municipaldistrict"}
                          name={"city"}
                          placeholder={" Corporation Name"}
                          value={locations.city}
                          onChange={changeHandler}
                        />
                      </CCol>
                      <CCol className={"column-align"} md="4">
                        <CLabel className={"label-name"}>
                          Ward
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <CSelect
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
                            <CSelect
                              placeholder="Select Municipal Corporation"
                              id={"municipalcorporation"}
                              type={"text"}
                              value={municipalCorporation}
                              // isDisabled={CountryCreate || CityCreate || AreaCreate}
                            />
                          </CCol>
                          <CCol className={"column-align"} md={1} lg={1}>
                            <CButton
                              shape={"pill"}
                              id={"addmunicipalcorporation"}
                              style={{ marginTop: "30px" }}
                              className={"saveBtn"}
                              onClick={enableCreate}
                              // disabled={CountryCreate || CityCreate || AreaCreate}
                            >
                              ADD
                            </CButton>
                          </CCol>
                          {/* {countryName.edit && <React.Fragment></React.Fragment>} */}

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
                                  // disabled={
                                  //   CountryCreate || CityCreate || AreaCreate
                                  // }
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
                                // onKeyPress={(e) =>
                                //   FormValidation.value_Without_Number_Symbols(e)
                                // }
                                id={"MunicipalName"}
                                name={"municipalname"}
                                // value={states.statename}
                                // onChange={statechangeHandler}
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
                                // onKeyPress={(e) =>
                                //   FormValidation.value_Without_Number_Without_Symbols_Without_Space(
                                //     e
                                //   )
                                // }
                                id={"municipalabrreviation"}
                                name={"abbreviation"}
                                // value={states.abbreviation}
                                // onChange={statechangeHandler}
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
                                // onKeyPress={(e) =>
                                //   FormValidation.value_Without_Number_Without_Symbols_Without_Space(
                                //     e
                                //   )
                                // }
                                name={"code"}
                                // value={states.code}
                                // onChange={statechangeHandler}

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
                                // onClick={State}
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
                      {municipalListadd && (
                        <React.Fragment>
                          <CCol className={"column-align"} md={4} lg={4}>
                            <CLabel className={"label-name-1"}>
                              Ward Number
                              <span className={"text-danger"}> *</span>
                            </CLabel>
                            <CSelect
                              placeholder="Select the State Name"
                              id={"municipalcorporation"}
                              type={"text"}

                              // isDisabled={CountryCreate || CityCreate || AreaCreate}
                            />
                          </CCol>
                          <CCol className={"column-align"} md={1} lg={1}>
                            <CButton
                              shape={"pill"}
                              id={"addmunicipalcorporation"}
                              style={{ marginTop: "30px" }}
                              className={"saveBtn"}
                              onClick={enableCreateadd}
                              // disabled={CountryCreate || CityCreate || AreaCreate}
                            >
                              ADD
                            </CButton>
                          </CCol>
                          {/* {countryName.edit && <React.Fragment></React.Fragment>} */}

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
                                  // disabled={
                                  //   CountryCreate || CityCreate || AreaCreate
                                  // }
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
                                Ward Number
                                <span className={"text-danger"}> *</span>
                              </CLabel>

                              <CInput
                                // onKeyPress={(e) =>
                                //   FormValidation.value_Without_Number_Symbols(e)
                                // }
                                id={"wardname"}
                                name={"municipalname"}
                                // value={states.statename}
                                // onChange={statechangeHandler}
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
                                // onKeyPress={(e) =>
                                //   FormValidation.value_Without_Number_Without_Symbols_Without_Space(
                                //     e
                                //   )
                                // }
                                id={"wardabbreviation"}
                                name={"abbreviation"}
                                // value={states.abbreviation}
                                // onChange={statechangeHandler}
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
                                // onKeyPress={(e) =>
                                //   FormValidation.value_Without_Number_Without_Symbols_Without_Space(
                                //     e
                                //   )
                                // }
                                name={"wardcode"}
                                // value={states.code}
                                // onChange={statechangeHandler}

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
                                // onClick={State}
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
                      <CCol className={"column-align"} md="4">
                        <CLabel className={"label-name"}>
                          State
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <CSelect
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
                        <CSelect
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
                        <CSelect
                          className={"input-align"}
                          id={"municipalarea"}
                          name={"area"}
                          placeholder={" Corporation Name"}
                          value={locations.city}
                          onChange={changeHandler}
                        />
                      </CCol>
                    </CRow>
                    {/* <CCol className={"column-align"} md="3">
                <CLabel className={"label-name"}>
                  Mobile Number
                  <span className={"text-danger"}>*</span>
                </CLabel>
                <CInput
                  type={"number"}
                  className={"input-align"}
                  id={"corporationStreets"}
                  name={"streets"}
                  placeholder={"Enter Street"}
                  value={mobilenumber}
                  onChange={otpChangeHandle}
                
                />
                <span className="text-danger">{error}</span>
              </CCol>
              {otpHide && (
                <CCol className={"column-align"} md="3">
                  <CLabel className={"label-name"}>
                  OTP
                    <span className={"text-danger"}>*</span>
                  </CLabel>
                  <CInput
                    type={"number"}
                    className={"input-align"}
                    id={"corporationStreets"}
                    name={"streets"}
                    placeholder={"Enter otp"}
                   
                   
                  />
                </CCol>
              )} */}
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
                                // onClick={() => {
                                //   let data = item._id;
                                //   if (`${checked}` === `${data}`) {
                                //     setChecked("");
                                //   } else {
                                //     getToRoleEmpMovement(item);
                                //   }
                                // }}
                                // checked={checked === `${item._id}`}
                                style={{
                                  width: "15px",
                                  height: "15px",
                                  marginLeft: "30px",
                                  marginBottom: "10px",
                                }}
                              />
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
      </div>
    );
  };
};
export default TownPanchayat;
