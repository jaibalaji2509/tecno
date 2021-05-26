import React, { useState, useEffect } from "react";
// import "react-virtualized/styles.css";
import CDataTable from "../../CoreComponents/table/CDataTable";
import {
  CRow,
  CCard,
  CCol,
  CButton,
  CLabel,
  CWidgetDropdown,
  CImg,
  CInput,
} from "@coreui/react";
import { useFormik } from "formik";
import * as yup from "yup";
import "./LocationLibrary.css";
import {
  getCountry,
  getState,
  getCity,
  getArea,
  getAreaSchema,
  createCountry,
  createState,
  createCity,
  createArea,
  updateCombination,
  updateCountry,
  updateState,
  updateCity,
  updateArea,
  deleteLocation,
} from "../../../services/ApiService";
import { toast } from "react-toastify";
import FormValidation from "../../../Tools/FormValidation/FormValidation";
import Select from "react-select";
import { cilBrowser } from "@coreui/icons";
// import ConfirmDelete from "../confirmMessage/confirmDelete";

function LocationLibrary(props) {
  const [error, setError] = useState("");
  const [passing, setPassing] = useState("");
  const [areaSchema, setArea] = useState([]);
  const [areasSchema, setAreas] = useState([]);
  const [citySchema, setCity] = useState([]);
  const [stateSchema, setState] = useState([]);
  const [countrySchema, setCountry] = useState([]);
  const [AreaCreate, setAreaCreate] = useState(false);
  const [StreetCreate, setStreetCreate] = useState(false);
  const [AreaList, setAreaList] = useState(true);
  const [StreetList, setStreetList] = useState(true);
  const [CountryCreate, setCountryCreate] = useState(false);
  const [CountryList, setCountryList] = useState(true);
  const [CityCreate, setCityCreate] = useState(false);
  const [CityList, setCityList] = useState(true);
  const [StateCreate, setStateCreate] = useState(false);
  const [StateList, setStateList] = useState(true);
  const [countryName, setCountryName] = useState("");
  const [addHide, setAddHide] = useState(true);
  const [saveHide, setSaveHide] = useState(false);
  const [stateName, setStateName] = useState("");
  const [cityName, setCityName] = useState("");
  const [streetName, setStreetName] = useState("");
  const [areaName, setAreaName] = useState("");
  const [deleteId, setDeleteId] = useState({ id: "", show: false });
  const [countrys, setCountrys] = useState({
    countryname: "",
    abbreviation: "",
    code: "",
  });
  const [states, setStates] = useState({
    statename: "",
    abbreviation: "",
    code: "",
  });
  const [citys, setCitys] = useState({
    cityName: "",
    abbreviation: "",
    code: "",
  });
  const [areas, setAreass] = useState({
    areaName: "",
    abbreviation: "",
    code: "",
  });
  const [stated, setStated] = useState({ value: "" });
  useEffect(() => {
    setError("");
    setPassing("");
  }, []);

  const formik = useFormik({
    initialValues: {
      StateName: "",
      CountryName: "",
      CityName: "",
      AreaName: "",
      Abbreviation1: "",
      Code1: "",
      Abbreviation2: "",
      Code2: "",
      Abbreviation3: "",
      Code3: "",
      Abbreviation4: "",
      Code4: "",
      Pincode: "",
    },
    validationSchema: yup.object().shape({
      CountryName: yup.string().required(" Country Name is Required"),
      StateName: yup.string().required("State Name is Required"),
      CityName: yup.string().required("City Name is Required"),
      AreaName: yup.string().required("Area Name is Required"),
      Abbreviation1: yup
        .string()
        .required("Abbreviation is Required")
        .min(5, "Min 5 Character is Required"),
      Code1: yup
        .string()
        .required(" Code  is Required")
        .min(5, "Min 5 Character is Required")
        .max(5, "Max 5 Character is Required"),
      Abbreviation2: yup
        .string()
        .required("Abbreviation is Required")
        .min(5, "Min 5 Character is Required")
        .max(5, "Max 5 Character is Required"),
      Code2: yup
        .string()
        .required(" Code  is Required")
        .min(5, "Min 5 Character is Required")
        .max(5, "Max 5 Character is Required"),
      Abbreviation3: yup
        .string()
        .required("Abbreviation is Required")
        .min(5, "Min 5 Character is Required")
        .max(3, "Max 5 Character is Required"),
      Code3: yup
        .string()
        .required(" Code  is Required")
        .min(5, "Min 5 Character is Required")
        .max(5, "Max 5 Character is Required"),
      Abbreviation4: yup
        .string()
        .required("Abbreviation is Required")
        .min(5, "Min 5 Character is Required")
        .max(3, "Max 5 Character is Required"),
      Code4: yup
        .string()
        .required(" Code  is Required")
        .min(5, "Min 5 Character is Required")
        .max(5, "Max 5 Character is Required"),
      Pincode: yup.string().required(" Pincode  is Required"),
    }),
    onSubmit: (userInputData) => {},
  });

  const CancelCountry = async () => {
    formik.values.Abbreviation1 = "";
    formik.values.Code1 = "";
    formik.values.CountryName = "";
    setPassing("");
    await setCountryList(true);
    await setCountryCreate(false);
  };

  const CancelCity = async () => {
    formik.values.Abbreviation3 = "";
    formik.values.Code3 = "";
    formik.values.CityName = "";
    setPassing("");
    await setCityList(true);
    await setCityCreate(false);
  };

  const CancelState = async () => {
    setStated({ ...stated, StateName: "", Code2: "", Abbreviation2: "" });
    formik.values.Abbreviation2 = "";
    formik.values.Code2 = "";
    formik.values.StateName = "";
    setPassing("");
    await setStateList(true);
    await setStateCreate(false);
  };

  const CancelArea = async () => {
    setStated({
      ...stated,
      AreaName: "",
      Code4: "",
      Pincode: "",
      Abbreviation4: "",
    });
    formik.values.Abbreviation4 = "";
    formik.values.Code4 = "";
    formik.values.AreaName = "";
    formik.values.Pincode = "";
    setPassing("");
    await setAreaList(true);
    await setAreaCreate(false);
  };

  const Country = async () => {
    if (passing === "") {
      var response;
      let body = {
        countryname: countrys.countryname,
        abbreviation: countrys.abbreviation,
        code: countrys.code,
      };

      //   body = { ...body, Code: body.Code1.toUpperCase() };
      try {
        response = await createCountry(JSON.stringify(body));
        if (response.success === true) {
          setPassing("");
          toast.success(response.message, { autoClose: 1000 });
          setTimeout(() => {
            setCountryCreate(false);
            setCountryList(true);
          }, 1300);
          response.Country = {
            ...response.Country,
            value: response.Country._id,
            label: response.Country.countryName,
          };

          setCountry([...countrySchema, response.Country]);
          formik.values = {};
          formik.handleReset({});
          return 0;
        }
        toast.error(response.error);
      } catch (e) {
        console.log(e);
      }
    } else {
      var responce;
      try {
        responce = await updateCountry(
          formik.values.CountryName,
          formik.values.Abbreviation1,
          formik.values.Code1,
          passing
        );
        if (responce.success) {
          setPassing("");
          toast.success(responce.message, { autoClose: 1000 });
          setTimeout(() => {
            setCountryCreate(false);
            setCountryList(true);
          }, 1300);
          setCountryName("");
          setStateName("");
          setCityName("");
          setAreaName("");
          setState([]);
          setCity([]);
          setArea([]);
          // getAllAreas();
          // getAllCountry();
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  const State = async () => {
    if (passing === "") {
      var response;
      let body = formik.values;
      body = {
        statename: states.statename,
        abbreviation: states.abbreviation,
        code: states.code,
      };
      try {
        response = await createState(JSON.stringify(body));
        if (response.success === true) {
          // response.State.value = response.State._id;
          response.State.label = response.State.stateName;
          toast.success(response.message, { autoClose: 1000 });
          setTimeout(() => {
            setStateCreate(false);
            setStateList(true);
          }, 1300);
          formik.handleReset({});
          setState([...stateSchema, response.State]);
          formik.values = {};

          return 0;
        }

        toast.error(response.error);
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        response = await updateState(
          formik.values.StateName,
          formik.values.Abbreviation2,
          formik.values.Code2,
          passing
        );
        getAllAreas();
        if (response.success === true) {
          toast.success(response.message, { autoClose: 1000 });
          setTimeout(() => {
            setStateCreate(false);
            setStateList(true);
          }, 1300);
          setStateName("");
          setCityName("");
          setAreaName("");
          setCity([]);
          setArea([]);
          getAllState();
          // getAllAreas();
          const elementsIndex = stateSchema.findIndex(
            (element) => element._id === passing
          );
          let newArray = [...stateSchema];
          response.updateOfficeType = {
            ...response.updateOfficeType,
            valu: response.updateOfficeType._id,
            label: response.updateOfficeType.stateNAme,
          };
          newArray[elementsIndex] = response.updateOfficeType;
          setState([...stateSchema, newArray]);
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  const City = async () => {
    if (passing === "") {
      var response;
      let body = formik.values;
      body = {
        cityname: citys.cityname,
        abbreviation: citys.abbreviation,
        code: citys.code,
      };
      try {
        response = await createCity(JSON.stringify(body));
        if (response.success === true) {
          getAllAreas();
          toast.success(response.message, { autoClose: 1000 });
          setTimeout(() => {
            setCityCreate(false);
            setCityList(true);
          }, 1300);

          response.City = {
            ...response.City,
            value: response.City._id,
            label: response.City.cityName,
          };
          formik.handleReset({});
          setCity([...citySchema, response.City]);
          formik.values = {};

          return 0;
        }
        toast.error(response.error);
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        response = await updateCity(
          formik.values.CityName,
          formik.values.Abbreviation3,
          formik.values.Code3,
          passing
        );
        if (response.success === true) {
          toast.success(response.message, { autoClose: 1000 });
          setCityName("");
          setAreaName("");
          setArea([]);
          getAllCity();
          getAllAreas();
          setTimeout(() => {
            setCityCreate(false);
            setCityList(true);
          }, 1300);
          const elementsIndex = citySchema.findIndex(
            (element) => element._id === passing
          );
          let newArray = [...citySchema];
          response.updateOfficeType = {
            ...response.updateOfficeType,
            value: response.updateOfficeType._id,
            label: response.updateOfficeType.cityName,
          };
          newArray[elementsIndex] = response.updateOfficeType;
          setCity(newArray);
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  const Area = async () => {
    if (passing === "") {
      var response;
      let body = formik.values;
      body = {
        areaname: areas.areaname,
        abbreviation: citys.abbreviation,
        code: citys.code,
      };
      try {
        response = await createArea(JSON.stringify(body));
        if (response.success === true) {
          formik.values = {};
          toast.success(response.message, { autoClose: 1000 });
          setTimeout(() => {
            setAreaCreate(false);
            setAreaList(true);
          }, 1300);
          formik.handleReset({});
          setArea("");
          getAllArea();
          getAllAreas();
          formik.values = {};
          return 0;
        }
        toast.error(response.error);
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        response = await updateArea(
          formik.values.AreaName,
          formik.values.Abbreviation4,
          formik.values.Code4,
          formik.values.Pincode,
          passing
        );
        if (response.success === true) {
          getAllAreas();
          formik.values.CountryName = "";
          formik.values.AreaName = "";
          formik.values.Abbreviation4 = "";
          formik.values.Code4 = "";
          formik.values.Pincode = "";
          setPassing("");
          toast.success(response.message);
          setTimeout(() => {
            setAreaCreate(false);
            setAreaList(true);
          }, 2000);
          setAreaName("");
          const elementsIndex = areasSchema.findIndex(
            (element) => element._id === passing
          );
          let newArray = [...areasSchema];
          response.updateOfficeType = {
            ...response.updateOfficeType,
            value: response.updateOfficeType._id,
            label: response.updateOfficeType.areaName,
          };
          newArray[elementsIndex] = response.updateOfficeType;
          setArea(newArray);
          getAllAreas();
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  const getAllCountry = async () => {
    var response;
    try {
      response = await getCountry();
      response.Country.map((x) => {
        x.value = x._id;
        x.label = x.countryName;
        return 0;
      });
      if (response) {
        setCountry(response.Country);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const getAllState = async () => {
    var response;
    try {
      response = await getState(countryName._id);
      if (response) {
        response.State.map((x) => {
          x.value = x._id;
          x.label = x.stateName;
          return 0;
        });

        setState(response.State);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const getAllCity = async () => {
    var response;
    try {
      response = await getCity(stateName._id);

      if (response) {
        response.City.map((x) => {
          x.value = x._id;
          x.label = x.cityName;
          return 0;
        });

        setCity(response.City);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const getAllArea = async () => {
    var response;
    try {
      response = await getArea(cityName._id);
      if (response) {
        if (response.Area) {
          response.Area.map((x) => {
            x.value = x._id;
            x.label = `${capitalize(x.state.stateName)}, ${capitalize(
              x.city.cityName
            )}, ${capitalize(x.areaName)}, ${x.pincode}`;
            x.cityName = x.city.cityName;
            x.stateName = x.state.stateName;
            x.countryName = x.country.countryName;
            return 0;
          });
        }
        setArea(response.Area);
      }
    } catch (e) {}
    return 0;
  };

  useEffect(() => {
    //   getAllAreas();
    getAllArea();
    getAllCountry();
    getAllState();
    getAllCity();
  }, [countryName, stateName, cityName, areaName]);

  const getAllAreas = async () => {
    var response;
    try {
      response = await getAreaSchema();
      if (response) {
        if (response.Area) {
          response.Area.map((x, i) => {
            x.value = x._id;
            x.label = `${capitalize(x.state.stateName)}, ${capitalize(
              x.city.cityName
            )}, ${capitalize(x.areaName)}, ${x.pincode}`;
            x.cityName = x.city.cityName;
            x.stateName = x.state.stateName;
            x.countryName = x.country.countryName;
            x.sNo = i + 1;
            return 0;
          });
        }
        setAreas(response.Area);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const capitalize = (x) => {
    let s = x.toLowerCase();
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  };
  const enableCreate = async () => {
    await setStateList(false);
    await setStateCreate(true);
  };
  const cityCreate = async () => {
    await setCityList(false);
    await setCityCreate(true);
  };
  const countryCreate = async () => {
    await setCountryList(false);
    await setCountryCreate(true);
  };
  const areaCreate = async () => {
    await setAreaList(false);
    await setAreaCreate(true);
  };

  const EditCountry = async (data) => {
    await setAddHide(false);
    await setSaveHide(true);
    setCountryName({
      label: data.country.countryName,
      value: data.country._id,
      edit: false,
    });
    setStateName({
      label: data.state.stateName,
      value: data.state._id,
      edit: false,
    });
    setCityName({
      label: data.city.cityName,
      value: data.city._id,
      edit: false,
    });
    setAreaName({ label: data.areaName, value: data._id, edit: false });

    setPassing(data._id);
  };
  //   const Delete = async () => {
  //     var response;
  //     try {
  //       response = await deleteLocation(deleteId.id);
  //       if (response.success === true) {
  //         toast.success(response.message);
  //         getAllAreas();
  //         cancelConfirmDelete();
  //       }
  //     } catch (e) {
  //       console.log(e);
  //       toast.error(response.message);
  //       cancelConfirmDelete();
  //     }
  //   };
  const [details, setDetails] = useState([]);
  useEffect(() => {
    let val1 = formik.values.Code1;
    formik.values.Code1 = val1.toUpperCase();
    let val2 = formik.values.Code2;
    formik.values.Code2 = val2.toUpperCase();
    let val3 = formik.values.Code3;
    formik.values.Code3 = val3.toUpperCase();
    let val4 = formik.values.Code4;
    formik.values.Code4 = val4.toUpperCase();
  }, [formik.values]);
  const fields = [
    { key: "sNo", _style: { width: "10%" },    sorter: false,
    filter: false, },
    // { key: "countryName", _style: { width: "20%" } },
    { key: "stateName", label: "State ", _style: { width: "20%" } },
    { key: "cityName", label: "District / City", _style: { width: "20%" } },
    {
      key: "areaName",
      label: "Village / Area / Locality",
      _style: { width: "20%" },
    },
    { key: "pincode", label: "Pincode", _style: { width: "20%" } },
    { key: "pincode", label: "Street ", _style: { width: "20%" } },

    {
      label: "Action",
      key: "show_details",

      _style: { width: "1%" },
      sorter: false,
      filter: false,
    },
  ];

  const getBadge = (status) => {
    switch (status) {
      case "Active":
        return "success";
      case "Inactive":
        return "secondary";
      case "Pending":
        return "warning";
      case "Banned":
        return "danger";
      default:
        return "primary";
    }
  };
  const toggleDetails = (index) => {
    const position = details.indexOf(index);
    let newDetails = details.slice();
    if (position !== -1) {
      newDetails.splice(position, 1);
    } else {
      newDetails = [...details, index];
    }
    setDetails(newDetails);
  };
  const deleteConfirm = (id) => {
    setDeleteId({ id: id, show: true });
  };
  //   const cancelConfirmDelete = () => {
  //     setDeleteId({ id: "", show: false });
  //   };

  const editCountry = async () => {
    await setCountryList(false);
    await setCountryCreate(true);

    formik.values.CountryName = countryName.countryName;
    formik.values.Abbreviation1 = countryName.abbreviation;
    formik.values.Code1 = countryName.code;
    setPassing(countryName._id);
    // getCountry();
    // getAllAreas();
  };

  const editState = async () => {
    await setStateList(false);
    await setStateCreate(true);
    formik.values.StateName = stateName.stateName;
    formik.values.Abbreviation2 = stateName.abbreviation;
    formik.values.Code2 = stateName.code;
    setPassing(stateName._id);
    // getState();
    // getAllAreas();
  };

  const editCity = async () => {
    await setCityList(false);
    await setCityCreate(true);
    formik.values.CityName = cityName.cityName;
    formik.values.Abbreviation3 = cityName.abbreviation;
    formik.values.Code3 = cityName.code;
    setPassing(cityName._id);
    // getCity();
    // getAllAreas();
  };

  const editArea = async () => {
    await setAreaList(false);
    await setAreaCreate(true);
    formik.values.AreaName = areaName.areaName;
    formik.values.Pincode = areaName.pincode;
    formik.values.Abbreviation4 = areaName.abbreviation;
    formik.values.Code4 = areaName.code;
    setPassing(areaName._id);
    // getAllAreas();
  };

  const CancelEdit = async () => {
    await setCountryName("");
    await setStateName("");
    await setCityName("");
    await setAreaName("");

    await setAddHide(true);
    await setSaveHide(false);
  };

  //   const LocationUpdate = async () => {
  //     var response;
  //     try {
  //       response = await updateCombination(
  //         countryName.value,
  //         stateName.value,
  //         cityName.value,
  //         areaName.value
  //       );
  //       if (response) {
  //         if (response.success) {
  //           getAllAreas();
  //           CancelEdit();
  //           toast.success("updated successfully");
  //         }
  //       }
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };
  const changeHandler = (e) => {
    setCountrys({ ...countrys, [e.target.name]: e.target.value });
  };
  const statechangeHandler = (e) => {
    setStates({ ...states, [e.target.name]: e.target.value });
  };
  const citychangeHandler = (e) => {
    setCitys({ ...citys, [e.target.name]: e.target.value });
  };
  const areachangeHandler = (e) => {
    setArea({ ...areas, [e.target.name]: e.target.value });
  };
  return (
    <div>
      {/* <ConfirmDelete
        details={deleteId}
        confirm={Delete}
        cancel={cancelConfirmDelete}
      /> */}

      <div>
        <CCard className={"cardSave"}>
          <div>
            <div className={"main-headerlabel"}>
              <span style={{ marginLeft: "15px" }} className={"header-label"}>
                Location Master
              </span>
            </div>

            {/* <input value={stated.value} onChange={onChange}/> */}
            <CRow className={"row-alignment"} style={{ marginLeft: "-76px" }}>
              <CCol className={"column-align"} md="12" lg="12" sm="12">
                <p className="mandatory_txt" style={{ marginLeft: "50px" }}>
                  Mandatory fields are marked with an asterisk (*)
                </p>

                {/* <CRow className={"row-alignment"}>
                  {CountryList && (
                    <React.Fragment>
                      <CCol className={"column-align"} md={5} lg={5}>
                        <CLabel className={"label-name-1"}>
                          Country
                          <span className={"text-danger"}> *</span>
                        </CLabel>
                        <Select
                          type={"text"}
                          id={"locationLibraryCountry"}
                          placeholder="Select the Country Name"
                          onChange={(e) => {
                            if (countryName.label) {
                              setCountryName({ ...e, edit: countryName.edit });
                            } else {
                              setCountryName({ ...e, edit: true });
                            }
                          }}
                          value={countryName}
                          options={countrySchema}
                          isDisabled={StateCreate || CityCreate || AreaCreate}
                        />
                      </CCol>
                      {addHide && (
                        <React.Fragment>
                          <CCol className={"column-align"} md={1} lg={1}>
                            <CButton
                              id={"locationLibraryCountryAdd"}
                              shape={"pill"}
                              style={{ marginTop: "30px" }}
                              className={"saveBtn"}
                              onClick={countryCreate}
                              disabled={StateCreate || CityCreate || AreaCreate}
                            >
                              ADD
                            </CButton>
                          </CCol>
                        </React.Fragment>
                      )}

                      {countryName.edit && (
                        <React.Fragment>
                          <CCol className={"column-align"} md={1} lg={1}>
                            <CButton
                              id={"locationLibraryCountryEdit"}
                              style={{
                                marginTop: "30px",
                              }}
                              className={"btn btn-success"}
                              u
                              onClick={editCountry}
                              disabled={StateCreate || CityCreate || AreaCreate}
                            >
                              EDIT
                            </CButton>
                          </CCol>
                        </React.Fragment>
                      )}
                    </React.Fragment>
                  )}

                  {CountryCreate && (
                    <React.Fragment>
                      <CCol md="3">
                        <CLabel className={"label-name-3"}>
                          Country Name
                          <span className={"text-danger"}> *</span>
                        </CLabel>
                        <CInput
                          className={"input-align"}
                          name={"countryname"}
                          id={"locationLibraryCountryName"}
                          value={countrys.countryname}
                          onChange={changeHandler}
                          onKeyPress={(e) =>
                            FormValidation.value_Without_Number_Symbols(e)
                          }
                          placeholder="Country Name"
                          maxlength="60"
                          size="60"
                        />
                        {formik.errors.CountryName ? (
                          <div className="text-danger">
                            {" "}
                            {formik.errors.CountryName}
                          </div>
                        ) : null}
                      </CCol>

                      <CCol md="3">
                        <CLabel className={"label-name-3"}>
                          Abbreviation
                          <span className={"text-danger"}> *</span>
                        </CLabel>
                        <CInput
                          className={"input-align"}
                          id={"locationLibraryCountryAbbreviation"}
                          name={"abbreviation"}
                          value={countrys.abbreviation}
                          onChange={changeHandler}
                          onKeyPress={(e) =>
                            FormValidation.value_Without_Number_Without_Symbols_Without_Space(
                              e
                            )
                          }
                          space="null"
                          placeholder="Enter Abbreviation"
                          minlength="3"
                          maxlength="3"
                          size="5"
                          removedSpacesText
                        />
                        {formik.errors.Abbreviation1 ? (
                          <div className="text-danger">
                            {" "}
                            {formik.errors.Abbreviation1}
                          </div>
                        ) : null}
                      </CCol>
                      <CCol md="3">
                        <CLabel className={"label-name-3"}>
                          Code
                          <span className={"text-danger"}> *</span>
                        </CLabel>
                        <CInput
                          className={"input-align"}
                          name={"code"}
                          id={"locationLibraryCountryCode"}
                          onKeyPress={(e) =>
                            FormValidation.value_Without_Number_Without_Symbols_Without_Space(
                              e
                            )
                          }
                          value={countrys.code}
                          onChange={changeHandler}
                          style={{ textTransform: "uppercase" }}
                          placeholder="Enter Code"
                          maxlength="3"
                          size="5"
                        />
                        {formik.errors.Code1 ? (
                          <div className="text-danger">
                            {" "}
                            {formik.errors.Code1}
                          </div>
                        ) : null}
                      </CCol>
                      <CCol md="3">
                        <CButton
                          shape={"pill"}
                          style={{ marginTop: "30px" }}
                          className={"saveBtn"}
                          onClick={Country}
                          id={"locationLibraryCountrySave"}
                        >
                          {passing !== "" ? "UPDATE" : "SAVE"}
                        </CButton>
                        <CButton
                          shape={"pill"}
                          id={"locationLibraryCountryCancel"}
                          style={{ marginTop: "30px", marginLeft: "20px" }}
                          className={"cancelBtn"}
                          onClick={CancelCountry}
                        >
                          CANCEL
                        </CButton>
                        {error !== "" ? <p>{error}</p> : null}
                      </CCol>
                    </React.Fragment>
                  )}
                </CRow> */}
                <CRow className={"row-alignment"}>
                  {StateList && (
                    <React.Fragment>
                      <CCol className={"column-align"} md={4} lg={4}>
                        <CLabel className={"label-name-1"}>
                          State
                          <span className={"text-danger"}> *</span>
                        </CLabel>
                        <Select
                          placeholder="Select the State Name"
                          id={"locationLibraryState"}
                          type={"text"}
                          onChange={(e) => {
                            if (stateName.label) {
                              setStateName({ ...e, edit: countryName.edit });
                            } else {
                              setStateName({ ...e, edit: true });
                            }
                          }}
                          value={stateName}
                          options={stateSchema}
                          isDisabled={CountryCreate || CityCreate || AreaCreate}
                        />
                      </CCol>
                      <CCol className={"column-align"} md={1} lg={1}>
                        <CButton
                          shape={"pill"}
                          id={"locationLibraryStateAdd"}
                          style={{ marginTop: "30px" }}
                          className={"saveBtn"}
                          onClick={enableCreate}
                          disabled={CountryCreate || CityCreate || AreaCreate}
                        >
                          ADD
                        </CButton>
                      </CCol>
                      {countryName.edit && <React.Fragment></React.Fragment>}

                      {stateName.edit === true ? (
                        <React.Fragment>
                          <CCol md={3} lg={3}>
                            <CButton
                              style={{
                                marginTop: "30px",
                              }}
                              id={"locationLibraryStateEdit"}
                              className={"btn btn-success"}
                              onClick={editState}
                              disabled={
                                CountryCreate || CityCreate || AreaCreate
                              }
                            >
                              EDIT
                            </CButton>
                          </CCol>
                        </React.Fragment>
                      ) : null}
                    </React.Fragment>
                  )}
                  {StateCreate && (
                    <React.Fragment>
                      <CRow className={"column-align3"} sm={12} md={12} lg={12}>
                        <CCol md="3">
                          <CLabel className={"label-name-3"}>
                            State Name
                            <span className={"text-danger"}> *</span>
                          </CLabel>

                          <CInput
                            onKeyPress={(e) =>
                              FormValidation.value_Without_Number_Symbols(e)
                            }
                            id={"locationLibraryStateName"}
                            name={"statename"}
                            value={states.statename}
                            onChange={statechangeHandler}
                            placeholder="State Name"
                            maxlength="60"
                            size="60"
                          />
                          {formik.errors.StateName ? (
                            <div className="text-danger">
                              {" "}
                              {formik.errors.StateName}
                            </div>
                          ) : null}
                        </CCol>

                        <CCol md="3">
                          <CLabel className={"label-name-3"}>
                            Abbreviation
                            <span className={"text-danger"}> *</span>
                          </CLabel>
                          <CInput
                            onKeyPress={(e) =>
                              FormValidation.value_Without_Number_Without_Symbols_Without_Space(
                                e
                              )
                            }
                            id={"locationLibraryStateAbbreviation"}
                            name={"abbreviation"}
                            value={states.abbreviation}
                            onChange={statechangeHandler}
                            placeholder="Enter Abbreviation"
                            maxlength="5"
                            size="5"
                          />
                          {formik.errors.Abbreviation2 ? (
                            <div className="text-danger">
                              {" "}
                              {formik.errors.Abbreviation2}
                            </div>
                          ) : null}
                        </CCol>
                        <CCol md="3">
                          <CLabel className={"label-name-3"}>
                            Code
                            <span className={"text-danger"}> *</span>
                          </CLabel>
                          <CInput
                            id={"locationLibraryStateCode"}
                            onKeyPress={(e) =>
                              FormValidation.value_Without_Number_Without_Symbols_Without_Space(
                                e
                              )
                            }
                            name={"code"}
                            value={states.code}
                            onChange={statechangeHandler}
                            style={{ textTransform: "uppercase" }}
                            placeholder="Enter Code"
                            maxlength="5"
                            size="5"
                          />
                          {formik.errors.Code2 ? (
                            <div className="text-danger">
                              {" "}
                              {formik.errors.Code2}
                            </div>
                          ) : null}
                        </CCol>
                        <CCol md="3">
                          <CButton
                            shape={"pill"}
                            id={"locationLibraryStateSave"}
                            style={{ marginTop: "30px" }}
                            className={"saveBtn"}
                            onClick={State}
                          >
                            {passing !== "" ? "UPDATE" : "SAVE"}
                          </CButton>
                          <CButton
                            shape={"pill"}
                            id={"locationLibraryStateCancel"}
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
                  <CRow style={{ marginLeft:"1200px",position:"absolute" ,marginTop:"30px"}}>
                    <CCol sm="6" lg="3" style={{ marginLeft: "10px" }}>
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
                        <span style={{ marginLeft: "10px", fontSize: "24px",fontWeight:"700" }}>
                          State
                        </span>
                        <span
                          style={{ marginLeft: "-129px", marginTop: "30px" ,fontSize: "24px",fontWeight:"700" }}
                        >
                          2
                        </span>
                        <br />
                        <br />
                      
                      </CWidgetDropdown>
                    </CCol>
                  </CRow>
                </CRow>
                <CRow className={"row-alignment"}>
                  {CityList && (
                    <React.Fragment>
                      <CCol className={"column-align"} md={4} lg={4}>
                        <CLabel className={"label-name-1"}>
                          District / City
                          <span className={"text-danger"}> *</span>
                        </CLabel>
                        <Select
                          placeholder="Select the City Name"
                          id={"locationLibraryCity"}
                          type={"text"}
                          onChange={(e) => {
                            if (cityName.label) {
                              setCityName({ ...e, edit: stateName.edit });
                            } else {
                              setCityName({ ...e, edit: true });
                            }
                          }}
                          value={cityName}
                          options={citySchema}
                          isDisabled={
                            CountryCreate || StateCreate || AreaCreate
                          }
                        />
                      </CCol>

                      {stateName.edit && (
                        <React.Fragment>
                          <CCol className={"column-align"} md={1} lg={1}>
                            <CButton
                              id={"locationLibraryCityAdd"}
                              shape={"pill"}
                              style={{ marginTop: "30px" }}
                              className={"saveBtn"}
                              onClick={cityCreate}
                              disabled={
                                CountryCreate || StateCreate || AreaCreate
                              }
                            >
                              ADD
                            </CButton>
                          </CCol>
                        </React.Fragment>
                      )}

                      {cityName.edit === true && (
                        <React.Fragment>
                          <CCol className={"column-align"} md={3} lg={3}>
                            <CButton
                              style={{ marginTop: "30px" }}
                              className={"btn btn-success"}
                              onClick={editCity}
                              disabled={
                                CountryCreate || StateCreate || AreaCreate
                              }
                              id={"locationLibraryCityEdit"}
                            >
                              EDIT
                            </CButton>
                          </CCol>
                        </React.Fragment>
                      )}
                    </React.Fragment>
                  )}
                  {CityCreate && (
                    <React.Fragment>
                      <CRow className={"column-align3"} sm={12} md={12} lg={12}>
                        <CCol md="3">
                          <CLabel className={"label-name-3"}>
                            City Name
                            <span className={"text-danger"}> *</span>
                          </CLabel>
                          <CInput
                            onKeyPress={(e) =>
                              FormValidation.value_Without_Number_Symbols(e)
                            }
                            id={"locationLibraryCityName"}
                            name={"CityName"}
                            value={formik.values.CityName}
                            onChange={formik.handleChange}
                            placeholder="City Name"
                            maxlength="60"
                            size="60"
                          />
                          {formik.errors.CityName ? (
                            <div className="text-danger">
                              {" "}
                              {formik.errors.CityName}
                            </div>
                          ) : null}
                        </CCol>

                        <CCol md="3">
                          <CLabel className={"label-name-3"}>
                            Abbreviation
                            <span className={"text-danger"}> *</span>
                          </CLabel>
                          <CInput
                            onKeyPress={(e) =>
                              FormValidation.value_Without_Number_Without_Symbols_Without_Space(
                                e
                              )
                            }
                            id={"locationLibraryCityAbbreviation"}
                            name={"Abbreviation3"}
                            value={formik.values.Abbreviation3}
                            onChange={formik.handleChange}
                            placeholder="Enter Abbreviation"
                            maxlength="5"
                            size="5"
                          />
                          {formik.errors.Abbreviation3 ? (
                            <div className="text-danger">
                              {" "}
                              {formik.errors.Abbreviation3}
                            </div>
                          ) : null}
                        </CCol>
                        <CCol md="3">
                          <CLabel className={"label-name-3"}>
                            Code
                            <span className={"text-danger"}> *</span>
                          </CLabel>
                          <CInput
                            onKeyPress={(e) =>
                              FormValidation.value_Without_Number_Without_Symbols_Without_Space(
                                e
                              )
                            }
                            id={"locationLibraryCityCode"}
                            name={"Code3"}
                            value={formik.values.Code3}
                            onChange={formik.handleChange}
                            style={{ textTransform: "uppercase" }}
                            placeholder="Enter Code"
                            maxlength="5"
                            size="5"
                          />
                          {formik.errors.Code3 ? (
                            <div className="text-danger">
                              {" "}
                              {formik.errors.Code3}
                            </div>
                          ) : null}
                        </CCol>
                        <CCol className={"column-align"} md="3">
                          <CButton
                            shape={"pill"}
                            style={{ marginTop: "30px" }}
                            className={"saveBtn"}
                            onClick={City}
                            id={"locationLibraryCitySave"}
                          >
                            {passing !== "" ? "UPDATE" : "SAVE"}
                          </CButton>
                          <CButton
                            shape={"pill"}
                            style={{ marginTop: "30px", marginLeft: "20px" }}
                            className={"cancelBtn"}
                            onClick={CancelCity}
                            id={"locationLibraryCityCancel"}
                          >
                            CANCEL
                          </CButton>
                          {error !== "" ? <p>{error}</p> : null}
                        </CCol>
                      </CRow>
                    </React.Fragment>
                  )}
                    <CRow style={{marginTop:"50px", marginLeft:"1200px",position:"absolute" }}>
                    <CCol sm="3" lg="3" style={{ marginLeft: "10px" }}>
                      <CWidgetDropdown
                        style={{
                          width: "280px",
                          textAlign: "center",
                          fontSize: "30px",
                          float: "right",
                          height:"100px"
                        }}
                        color="gradient-info"
                        header=""
                        text=""
                      >
                        <span style={{ marginLeft: "-40px", fontSize: "24px",fontWeight:"700" }}>
                          District / City
                        </span>
                        <span
                          style={{ marginLeft: "-159px", marginTop: "30px" ,fontSize: "24px",fontWeight:"700" }}
                        >
                          2
                        </span>
                        <br />
                        <br />
                      
                      </CWidgetDropdown>
                    </CCol>
                  </CRow>
                
                </CRow>
                <CRow className={"row-alignment"}>
                  {AreaList && (
                    <React.Fragment>
                      <CCol className={"column-align"} md={4} lg={4}>
                        <CLabel className={"label-name-1"}>
                          Village / Area / Locality
                          <span className={"text-danger"}> *</span>
                        </CLabel>
                        <Select
                          placeholder="Select the Area Name"
                          id={"locationLibraryArea"}
                          onChange={(e) => {
                            if (areaName.label) {
                              setAreaName({ ...e, edit: cityName.edit });
                            } else {
                              setAreaName({ ...e, edit: true });
                            }
                          }}
                          value={areaName.value ? areaName : null}
                          options={areaSchema}
                          isDisabled={
                            CountryCreate || StateCreate || CityCreate
                          }
                        />
                      </CCol>

                      {cityName.edit && (
                        <React.Fragment>
                          <CCol className={"column-align"} md={1} lg={1}>
                            <CButton
                              id={"locationLibraryAreaAdd"}
                              shape={"pill"}
                              style={{ marginTop: "30px" }}
                              className={"saveBtn"}
                              onClick={areaCreate}
                              disabled={
                                CountryCreate || StateCreate || CityCreate
                              }
                            >
                              ADD
                            </CButton>
                          </CCol>
                        </React.Fragment>
                      )}
                      {areaName.edit && (
                        <React.Fragment>
                          <CCol className={"column-align"} md={3} lg={3}>
                            <CButton
                              id={"locationLibraryAreaEdit"}
                              style={{ marginTop: "30px" }}
                              className={"btn btn-success"}
                              onClick={editArea}
                              disabled={
                                CountryCreate || StateCreate || CityCreate
                              }
                            >
                              EDIT
                            </CButton>
                          </CCol>
                        </React.Fragment>
                      )}
                      {saveHide && (
                        <React.Fragment>
                          <CCol className={"column-align"} md="2">
                            <CButton
                              style={{ marginTop: "30px" }}
                              className={"saveBtn"}
                              // onClick={LocationUpdate}
                              id={"locationLibraryAreaSave"}
                            >
                              SAVE
                            </CButton>

                            <CButton
                              style={{ marginTop: "30px", marginLeft: "20px" }}
                              className={"cancelBtn"}
                              onClick={CancelEdit}
                              id={"locationLibraryAreaCancel"}
                            >
                              CANCEL
                            </CButton>
                            {error !== "" ? <p>{error}</p> : null}
                          </CCol>
                        </React.Fragment>
                      )}
                    </React.Fragment>
                  )}
                  {AreaCreate && (
                    <React.Fragment>
                      <CRow className={"column-align3"} sm={12} md={12} lg={12}>
                        <CCol md="3">
                          <CLabel className={"label-name-3"}>
                            Area Name
                            <span className={"text-danger"}> *</span>
                          </CLabel>
                          <CInput
                            onKeyPress={(e) =>
                              FormValidation.value_Without_Number_Symbols(e)
                            }
                            id={"locationLibraryAreaName"}
                            name={"AreaName"}
                            value={formik.values.AreaName}
                            onChange={formik.handleChange}
                            placeholder="Area Name"
                            maxlength="60"
                            size="60"
                          />
                          {formik.errors.AreaName ? (
                            <div className="text-danger">
                              {" "}
                              {formik.errors.AreaName}
                            </div>
                          ) : null}
                        </CCol>

                        <CCol md="2">
                          <CLabel className={"label-name-3"}>
                            Abbreviation
                            <span className={"text-danger"}> *</span>
                          </CLabel>
                          <CInput
                            onKeyPress={(e) =>
                              FormValidation.value_Without_Number_Without_Symbols_Without_Space(
                                e
                              )
                            }
                            id={"locationLibraryAreaAbbreviation"}
                            name={"Abbreviation4"}
                            value={formik.values.Abbreviation4}
                            onChange={formik.handleChange}
                            placeholder="Enter Abbreviation"
                            maxlength="5"
                            size="5"
                          />
                          {formik.errors.Abbreviation4 ? (
                            <div className="text-danger">
                              {" "}
                              {formik.errors.Abbreviation4}
                            </div>
                          ) : null}
                        </CCol>
                        <CCol md="2">
                          <CLabel className={"label-name-3"}>
                            Code
                            <span className={"text-danger"}> *</span>
                          </CLabel>
                          <CInput
                            onKeyPress={(e) =>
                              FormValidation.value_Without_Number_Without_Symbols_Without_Space(
                                e
                              )
                            }
                            id={"locationLibraryAreaCode"}
                            name={"Code4"}
                            value={formik.values.Code4}
                            onChange={formik.handleChange}
                            style={{ textTransform: "uppercase" }}
                            placeholder="Enter Code"
                            maxlength="5"
                            size="5"
                          />
                          {formik.errors.Code4 ? (
                            <div className="text-danger">
                              {" "}
                              {formik.errors.Code4}
                            </div>
                          ) : null}
                        </CCol>
                        <CCol md="2">
                          <CButton
                            style={{ marginTop: "30px" }}
                            className={"saveBtn"}
                            onClick={Area}
                            id={"locationLibraryAreaSave"}
                          >
                            SAVE
                          </CButton>
                          <CButton
                            style={{ marginTop: "30px", marginLeft: "20px" }}
                            className={"cancelBtn"}
                            onClick={CancelArea}
                            id={"locationLibraryAreaCancel"}
                          >
                            CANCEL
                          </CButton>
                          {error !== "" ? <p>{error}</p> : null}
                        </CCol>
                      </CRow>
                    </React.Fragment>
                  )}
                  <CRow style={{marginTop:"70px", marginLeft:"1200px",position:"absolute" }}>
                    <CCol sm="3" lg="3" style={{ marginLeft: "10px" }}>
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
                        <span style={{ marginLeft: "-40px", fontSize: "24px",fontWeight:"700" }}>
                          Village / Area
                        </span>
                        <span
                          style={{ marginLeft: "-169px", marginTop: "30px" ,fontSize: "24px",fontWeight:"700" }}
                        >
                          2
                        </span>
                        <br />
                        <br />
                      
                      </CWidgetDropdown>
                    </CCol>
                  </CRow>
                </CRow>
                <CRow className={"row-alignment"}>
                  <CCol className={"column-align"} md={4} lg={4}>
                    <CLabel className={"label-name-1"}>
                      Pincode
                      <span className={"text-danger"}> *</span>
                    </CLabel>
                    <CInput
                      onKeyPress={(e) => FormValidation.value_Only_Number(e)}
                      name={"Pincode"}
                      type={"text"}
                      id={"locationLibraryAreaPincode"}
                      onChange={formik.handleChange}
                      value={formik.values.Pincode}
                      placeholder="Enter Pincode"
                      autoComplete="none"
                      maxlength="6"
                      size="6"
                    />
                    {formik.errors.Pincode ? (
                      <div className="text-danger">
                        {" "}
                        {formik.errors.Pincode}
                      </div>
                    ) : null}
                  </CCol>
                </CRow>

                <CRow className={"row-alignment"}>
                  {StreetList && (
                    <React.Fragment>
                      <CCol className={"column-align"} md={4} lg={4}>
                        <CLabel className={"label-name-1"}>
                          Street
                          <span className={"text-danger"}> *</span>
                        </CLabel>
                        <Select
                          placeholder="Select the Street Name"
                          id={"locationLibraryArea"}
                          onChange={(e) => {
                            if (streetName.label) {
                              setStreetName({ ...e, edit: streetName.edit });
                            } else {
                              setStreetName({ ...e, edit: true });
                            }
                          }}
                          value={streetName.value ? streetName : null}
                          options={areaSchema}
                          isDisabled={
                            CountryCreate || StateCreate || CityCreate
                          }
                        />
                      </CCol>

                      {streetName.edit && (
                        <React.Fragment>
                          <CCol className={"column-align"} md={1} lg={1}>
                            <CButton
                              id={"locationLibraryAreaAdd"}
                              shape={"pill"}
                              style={{ marginTop: "30px" }}
                              className={"saveBtn"}
                              onClick={areaCreate}
                              disabled={
                                CountryCreate || StateCreate || CityCreate
                              }
                            >
                              ADD
                            </CButton>
                          </CCol>
                        </React.Fragment>
                      )}
                      {streetName.edit && (
                        <React.Fragment>
                          <CCol className={"column-align"} md={3} lg={3}>
                            <CButton
                              id={"locationLibraryAreaEdit"}
                              style={{ marginTop: "30px" }}
                              className={"btn btn-success"}
                              onClick={editArea}
                              disabled={
                                CountryCreate || StateCreate || CityCreate
                              }
                            >
                              EDIT
                            </CButton>
                          </CCol>
                        </React.Fragment>
                      )}
                      {saveHide && (
                        <React.Fragment>
                          <CCol className={"column-align"} md="2">
                            <CButton
                              style={{ marginTop: "30px" }}
                              className={"saveBtn"}
                              // onClick={LocationUpdate}
                              id={"locationLibraryAreaSave"}
                            >
                              SAVE
                            </CButton>

                            <CButton
                              style={{ marginTop: "30px", marginLeft: "20px" }}
                              className={"cancelBtn"}
                              onClick={CancelEdit}
                              id={"locationLibraryAreaCancel"}
                            >
                              CANCEL
                            </CButton>
                            {error !== "" ? <p>{error}</p> : null}
                          </CCol>
                        </React.Fragment>
                      )}
                    </React.Fragment>
                    
                  )}
                  {StreetCreate && (
                    <React.Fragment>
                      <CRow className={"column-align3"} sm={12} md={12} lg={12}>
                        <CCol md="3">
                          <CLabel className={"label-name-3"}>
                            Street Name
                            <span className={"text-danger"}> *</span>
                          </CLabel>
                          <CInput
                            onKeyPress={(e) =>
                              FormValidation.value_Without_Number_Symbols(e)
                            }
                            id={"locationLibraryAreaName"}
                            name={"StreetName"}
                            value={formik.values.streetName}
                            onChange={formik.handleChange}
                            placeholder="Area Name"
                            maxlength="60"
                            size="60"
                          />
                          {formik.errors.AreaName ? (
                            <div className="text-danger">
                              {" "}
                              {formik.errors.AreaName}
                            </div>
                          ) : null}
                        </CCol>

                        <CCol md="2">
                          <CLabel className={"label-name-3"}>
                            Abbreviation
                            <span className={"text-danger"}> *</span>
                          </CLabel>
                          <CInput
                            onKeyPress={(e) =>
                              FormValidation.value_Without_Number_Without_Symbols_Without_Space(
                                e
                              )
                            }
                            id={"locationLibraryAreaAbbreviation"}
                            name={"Abbreviation4"}
                            value={formik.values.Abbreviation4}
                            onChange={formik.handleChange}
                            placeholder="Enter Abbreviation"
                            maxlength="5"
                            size="5"
                          />
                          {formik.errors.Abbreviation4 ? (
                            <div className="text-danger">
                              {" "}
                              {formik.errors.Abbreviation4}
                            </div>
                          ) : null}
                        </CCol>
                        <CCol md="2">
                          <CLabel className={"label-name-3"}>
                            Code
                            <span className={"text-danger"}> *</span>
                          </CLabel>
                          <CInput
                            onKeyPress={(e) =>
                              FormValidation.value_Without_Number_Without_Symbols_Without_Space(
                                e
                              )
                            }
                            id={"locationLibraryAreaCode"}
                            name={"Code4"}
                            value={formik.values.Code4}
                            onChange={formik.handleChange}
                            style={{ textTransform: "uppercase" }}
                            placeholder="Enter Code"
                            maxlength="5"
                            size="5"
                          />
                          {formik.errors.Code4 ? (
                            <div className="text-danger">
                              {" "}
                              {formik.errors.Code4}
                            </div>
                          ) : null}
                        </CCol>
                        <CCol className={"column-align"} md="2">
                          <CButton
                            style={{ marginTop: "30px" }}
                            className={"saveBtn"}
                            onClick={Area}
                            id={"locationLibraryAreaSave"}
                          >
                            SAVE
                          </CButton>
                          <CButton
                            style={{ marginTop: "30px", marginLeft: "20px" }}
                            className={"cancelBtn"}
                            onClick={CancelArea}
                            id={"locationLibraryAreaCancel"}
                          >
                            CANCEL
                          </CButton>
                          {error !== "" ? <p>{error}</p> : null}
                        </CCol>
                      </CRow>
                    </React.Fragment>
                  )}
                   <CRow style={{marginTop:"10px", marginLeft:"1200px",position:"absolute" }}>
                    <CCol sm="3" lg="3" style={{ marginLeft: "10px" }}>
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
                        <span style={{ marginLeft: "-10px", fontSize: "24px",fontWeight:"700" }}>
                          Street
                        </span>
                        <span
                          style={{ marginLeft: "-129px", marginTop: "30px" ,fontSize: "24px",fontWeight:"700" }}
                        >
                          2
                        </span>
                        <br />
                        <br />
                      
                      </CWidgetDropdown>
                    </CCol>
                  </CRow>
                </CRow>
              </CCol>
            </CRow>

            <CRow
              style={{ padding: "1%", marginTop: "1.5%", marginLeft: "27px" }}
            >
              <CRow>
                <CCol style={{ fontSize: "1.55rem" }} md="12">
                  <i
                    id={"locationLibraryDelete"}
                    style={{
                      position: "absolute",
                      top: "7px",
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
                      top: "7px",
                      marginLeft: "1000px",
                      marginBottom: "20px",
                      color: "green",
                    }}
                    className="fa fa-share-alt"
                  ></i>
                </CCol>
              </CRow>
              <CDataTable
                items={areasSchema}
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
                            className={"column-align"}
                            style={{ fontSize: "1.15rem" }}
                            md="12"
                          >
                            <i
                              onClick={() => {
                                toggleDetails(index);
                              }}
                            ></i>
                            <i
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
        </CCard>
      </div>
    </div>
  );
}

export default LocationLibrary;