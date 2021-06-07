import {
  CButton,
  CCard,
  CCol,
  CContainer,
  CInput,
  CLabel,
  CRow,
  CSelect,
} from "@coreui/react";
import React, { useState, useEffect } from "react";
import Toaster from "src/views/notifications/toaster/Toaster";
import CDataTable from "../../CoreComponents/table/CDataTable";
import { saveCreateCorporation } from "../../../services/ApiService";
import { toast } from "react-toastify";
import './PartyOffice.css';
const PartyOffice = () => {
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
  const [array, setArray] = useState(["1", "2", "3", "4", "5", "6"]);
  const [municipalList, setMunicipalList] = useState(true);
  const [MunicipalCreate, setmunicipalCreate] = useState(false);
  const [municipalCorporation, setMunicipalCorporation] = useState({});
  const [municipalName, setMuniicipalName] = useState("");
  const [width, setWidth] = useState({ w1: 0, w2: 0 });
  const [colors, setColors] = useState([]);
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
      _style: { width: "5%" },
      sorter: false,
      filter: false,
    },
    { key: "Street", label: "Type of Party Office", _style: { width: "15%" } },
    { key: "District", label: "Abbreviation", _style: { width: "10%" } },
    { key: "Area", label: "Code", _style: { width: "10%" } },
    { key: "male", label: "Reporting To Office", _style: { width: "12%" } },
    {
      key: "Street",
      label: "Entered By",
      _style: { width: "7%" },
      sorter: false,
      filter: false,
    },
    {
      key: "Street",
      label: "Entered On",
      _style: { width: "7%" },
      sorter: false,
      filter: false,
    },
    {
      key: "Street",
      label: "Action",
      _style: { width: "5%" },
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

  useEffect(() => {
    setColors([
      "#b31217",
      "#e65c00",
      "#2b32b2",
      "#292e49",
      "#037bb5",
      "#ffa751",
    ]);
    if (array.length > 0) {
      setWidth({
        w1: parseInt(document.getElementById("scrollDiv3").offsetWidth),
        w2: parseInt(document.getElementById("scrollRow3").offsetWidth),
      });
    }
  }, [array]);

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
  const scrollLeft = (element, change, duration) => {
    var start = element.scrollLeft,
      currentTime = 0,
      increment = 20;
    var animateScroll = function () {
      currentTime += increment;
      var val = Math.easeInOutQuad(currentTime, start, change, duration);
      element.scrollLeft = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };
    animateScroll();
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
  const [hideMappingMunicipal, setHideMappingmunicipal] = useState(true);
  const [hideCorporation, setHideCorporation] = useState(false);
  const changeMunicipalCorporation = () => {
    setHideMappingmunicipal(false);
    setHideCorporation(true);
  };
  return (
    <div>
      {hideMappingMunicipal && (
        <div>
          <CCard className={"cardSave"}>
            <div className={"main-headerlabel"}>
              <span className={"header-label"}> party Office</span>
            </div>
            <CRow>
              <CCol>
                {array && (
                  <div
                    id={"scrollDiv3"}
                    className={"scrollForCard"}
                    style={{
                      height: "110px",
                      background: "white",
                      overflow: "hidden",
                    }}
                  >
                    <CRow style={{ width: "max-content" }} id={"scrollRow3"}>
                      {width.w2 > width.w1 ? (
                        <CButton
                          id={"employeeDataScrollDiv2"}
                          onClick={() => {
                            scrollLeft(
                              document.getElementById("scrollDiv3"),
                              -300,
                              1000
                            );
                          }}
                          className={"scrollButton-3"}
                        >
                          <i className="fas fa-arrow-left alignArrow"></i>
                        </CButton>
                      ) : null}
                      {array.map((x, i) => (
                        <CCard
                          key={i}
                          className={"scrollCard"}
                          style={{ borderColor: colors[i] }}
                          onClick={() => {
                            // setHover({ index: i, data: x.separate })
                          }}
                        >
                          <CLabel
                            className={"scrollCardText"}
                            style={{ color: colors[i] }}
                          >
                            {x}
                          </CLabel>
                          <CLabel
                            className={"scrollCardText EmpCountNo"}
                            style={{
                              color: colors[i],
                              fontSize: "17px !important",
                            }}
                          >
                            {x}
                          </CLabel>

                          {/* {hover.index === i && (
                        <CModal
                          show={hover.index === i}
                          onClose={() => setHover(-1)}
                          aria-labelledby="contained-modal-title-vcenter"
                          centered
                          style={{
                            justifyContent: "left",
                            maxWidth: "300px",
                            left: "300px",
                            top: "-125px",
                            maxHeight: "635px !important",
                            height: "150px",
                          }}
                        >
                          <CModalHeader
                            closeButton
                            style={{
                              display: "flex",
                              width: "100%",
                              color: "black",
                              backgroundColor: "white",
                              justifyContent: "left",
                            }}
                          >
                            <CModalTitle>
                              <span
                                className={"font7"}
                                style={{ fontWeight: "700" }}
                              >
                                {" "}
                                Employee Details
                              </span>{" "}
                            </CModalTitle>
                          </CModalHeader>
                          <CModalBody>
                            <span place="left">
                              {x.separate.map((y, j) => (
                                <tr key={i}>
                                  <td
                                    style={{
                                      fontSize: "11px",
                                      color: "black",
                                      fontWeight: "500",
                                      color: "green",
                                      fontFamily: "Open Sans !important",
                                    }}
                                  >
                                    {y.label1}-{y.label2}
                                  </td>
                                  <td
                                    style={{
                                      fontSize: "11px",
                                      paddingLeft: "30px",
                                      color: "black",
                                      fontWeight: "600",
                                      fontFamily: "Open Sans !important",
                                      float: "right",
                                    }}
                                  >
                                    {y.values.length}
                                  </td>
                                </tr>
                              ))}
                            </span>
                          </CModalBody>
                        </CModal> */}
                          {/* )} */}
                        </CCard>
                      ))}
                      {width.w2 > width.w1 ? (
                        <CButton
                          id={"employeeDataScrollDiv3"}
                          onClick={() => {
                            scrollLeft(
                              document.getElementById("scrollDiv3"),
                              300,
                              1000
                            );
                          }}
                          className={"scrollButton-4"}
                        >
                          <i className="fas fa-arrow-right alignArrow"></i>
                        </CButton>
                      ) : null}
                    </CRow>
                  </div>
                )}
              </CCol>
            </CRow>
            {locationHide.corporation && (
              <div>
                <div style={{ marginLeft: "-26px" }}>
                  <div className={"row-headerlabel"}>
                    <span
                      style={{ marginLeft: "70px" }}
                      className={"header-label"}
                    >
                      {" "}
                      Adding Party Office{" "}
                    </span>
                  </div>
                  <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                    <CCol className={"column-align"} md="4">
                      <CLabel className={"label-name"}>
                        Type of Party Office
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <CInput
                        className={"input-align"}
                        id={"municipalstatename"}
                        name={"state"}
                        placeholder={"Enter Party Office"}
                        value={locations.district}
                        onChange={changeHandler}
                      />
                    </CCol>
                    <CCol className={"column-align"} md="4">
                      <CLabel className={"label-name"}>
                        Abbreviation
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <CInput
                        className={"input-align"}
                        id={"municipaldistrict"}
                        name={"city"}
                        placeholder={"Enter Abbreviation"}
                        value={locations.city}
                        onChange={changeHandler}
                      />
                    </CCol>
                  </CRow>
                  <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                    <CCol className={"column-align"} md="4">
                      <CLabel className={"label-name"}>
                        Code
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <CInput
                        className={"input-align"}
                        id={"municipaldistrict"}
                        name={"city"}
                        placeholder={"Enter Code"}
                        value={locations.city}
                        onChange={changeHandler}
                      />
                    </CCol>
                    <CCol className={"column-align"} md="4">
                      <CLabel className={"label-name"}>
                        Reporting To Office
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <CSelect
                        className={"input-align"}
                        id={"municipalarea"}
                        name={"area"}
                        placeholder={"Select Reporting To"}
                        value={locations.city}
                        onChange={changeHandler}
                      />
                    </CCol>
                  </CRow>
                  <CRow style={{ marginTop: "60px" }}>
                    <CCol md="10">
                      <CCol
                        md="5"
                        style={{
                          marginLeft: "555px",
                          float: "right",
                          marginTop: "-25px",
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
                          Save
                        </CButton>{" "}
                      </CCol>
                    </CCol>
                  </CRow>
                </div>
                <CRow>
                  <CCol style={{ fontSize: "1.55rem" }} md="12">
                    <i
                      id={"locationLibraryDelete"}
                      style={{
                        position: "absolute",
                        top: "80px",
                        marginLeft: "955px",
                        marginBottom: "20px",
                        color: "#0072ff",
                      }}
                      className="fa fa-print"
                    ></i>
                  </CCol>
                  <CCol style={{ fontSize: "1.55rem" }} md="12">
                    <i
                      id={"locationLibraryDelete"}
                      style={{
                        position: "absolute",
                        top: "80px",
                        marginLeft: "1000px",
                        marginBottom: "20px",
                        color: "green",
                      }}
                      className="fa fa-share-alt"
                    ></i>
                  </CCol>
                </CRow>

                <CRow>
                  <CCol style={{ top: "20px" }}>
                    <img
                      id={"employeeDataorgEmployeeData"}
                      alt={""}
                      src={
                        "https://img.icons8.com/fluent/2x/organization-chart-people.png"
                      }
                      style={{
                        height: "40px",
                        width: "40px",
                        marginRight: "80px",
                        float: "right",
                        cursor: "pointer",
                      }}
                      //   onClick={() => setPrimary(!primary)}
                    />
                  </CCol>
                </CRow>
                <CRow style={{ padding: "4%", marginTop: "-1.5%" }}>
                  <CDataTable
                    items={userData}
                    fields={fields}
                    columnFilter
                    tableFilter
                    tableLabel={"List of Party Office"}
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
          <CCard className={"cardSave"} style={{ minHeight: "450px" }}>
            <div className={"main-headerlabel"}>
              <span className={"header-label"}> Party Office</span>
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
                      Adding Party Office{" "}
                    </span>
                  </div>
                </div>
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

export default PartyOffice;
