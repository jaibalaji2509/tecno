import { CButton, CCard, CCol, CInput, CLabel, CRow } from "@coreui/react";
import React, { useState } from "react";
import Toaster from "src/views/notifications/toaster/Toaster";
import CDataTable from "../../CoreComponents/table/CDataTable";
import { saveCreateCorporation } from "../../../services/ApiService";
import { toast } from "react-toastify";
const Location = () => {
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
      State: "TamilNadu",
      District: "chennai",
      Area: "TNagar",
      Pincode: "600017",
    },
  ];
  const fields = [
    { key: "SNo", label: "S.NO", _style: { width: "10%" } },
    { key: "State", label: "State", _style: { width: "10%" } },
    { key: "District", label: "District", _style: { width: "10%" } },
    { key: "Area", label: "Area", _style: { width: "10%" } },
    { key: "Pincode", label: "Pincode", _style: { width: "10%" } },
  ];
  const [passing, setPassing] = useState("");
  const [error, setError] =useState("")
  const saveCorporation = async () => {
    // setLocationHide({
    //   ...locationHide,
    //   municipalLocation: true,
    //   corporation: false,
    // });

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
     setMobileNumber(e.target.value)
    if(mobilenumber.length > 8){
      setOtpHide(true)
    }
    else{
      setError("enter valid data")
    }
  };
  return (
    <div>
      <CCard className={"cardSave"}>
        <div className={"main-headerlabel"}>
          <span className={"header-label"}>Location Library</span>
        </div>
        {locationHide.corporation && (
          <div>
            <div style={{ marginLeft: "-26px" }}>
              <div className={"row-headerlabel"}>
                <span className={"header-label"}>
                  {" "}
                  Adding Corporation Location{" "}
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
                    id={"corporationState"}
                    name={"state"}
                    placeholder={" State Name"}
                    value={locations.state}
                    onChange={changeHandler}
                  />
                </CCol>
                <CCol className={"column-align"} md="3">
                  <CLabel className={"label-name"}>
                    District
                    <span className={"text-danger"}>*</span>
                  </CLabel>
                  <CInput
                    className={"input-align"}
                    id={"corporationDistrict"}
                    name={"district"}
                    placeholder={" District/City Name"}
                    value={locations.district}
                    onChange={changeHandler}
                  />
                </CCol>
                <CCol className={"column-align"} md="3">
                  <CLabel className={"label-name"}>
                    Corporation
                    <span className={"text-danger"}>*</span>
                  </CLabel>
                  <CInput
                    className={"input-align"}
                    id={"corporation"}
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
                  <CInput
                    className={"input-align"}
                    id={"corporationArea"}
                    name={"area"}
                    placeholder={" Area Name"}
                    value={locations.area}
                    onChange={changeHandler}
                  />
                </CCol>
                <CCol className={"column-align"} md="3">
                  <CLabel className={"label-name"}>
                    Ward
                    <span className={"text-danger"}>*</span>
                  </CLabel>
                  <CInput
                    type={"text"}
                    className={"input-align"}
                    id={"corporationWard"}
                    name={"ward"}
                    placeholder={"Enter Ward"}
                    value={locations.ward}
                    onChange={changeHandler}
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
                    id={"corporationStreet"}
                    name={"street"}
                    placeholder={"Enter Street"}
                    value={locations.street}
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

        {locationHide.municipalLocation && (
          <div>
            <div style={{ marginLeft: "-26px" }}>
              <div className={"row-headerlabel"}>
                <span className={"header-label"}>
                  {" "}
                  Adding Municipal Location{" "}
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
                    District
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
                    Muncipality
                    <span className={"text-danger"}>*</span>
                  </CLabel>
                  <CInput
                    className={"input-align"}
                    id={"Muncipality"}
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
                    id={"municipalWard"}
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
                    id={"municipalStreet"}
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
                  Adding Village Panchayat Location{" "}
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
                    Village Panchayat
                    <span className={"text-danger"}>*</span>
                  </CLabel>
                  <CInput
                    className={"input-align"}
                    id={"villagePanchayat"}
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
                    id={"villagePanchayatWard"}
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
                    id={"villagePanchayatStreet"}
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
                    id={"villagePanchayatSave"}
                    className={"cancelBtn"}
                  >
                    CANCEL
                  </CButton>
                  <CButton
                    style={{
                      float: "right",
                      marginRight: "15px",
                    }}
                    id={"villagePanchayatCancel"}
                    className={"saveBtn"}
                    onClick={saveVillagePanchayat}
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
  );
};

export default Location;
