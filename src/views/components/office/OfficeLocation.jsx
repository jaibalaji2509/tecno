import React, { useState, useContext, useEffect } from "react";
import {
  CRow,
  CCol,
  CButton,
  CForm,
  CSelect,
  CModalBody,
  CModalTitle,
  CModal,
  CModalHeader,
  CPagination,
  CLabel,
  CInput,
  CCard,
  CDataTable,
  CBadge,
} from "@coreui/react";
import State from "../../images/images18.png";
import { useFormik } from "formik";
import * as yup from "yup";
import _ from "lodash";
import "./OfficeLoaction.css";
import {
  deleteOfficeLocation,
  updateOfficeLocation,
  getOfficeType,
  getState,
  getCountry,
  createOfficeLocation,
  getAreaSchema,
  getCity,
  getOfficeLocation,
  getHierarchyOffice,
  getAllOfficeLocationPaginate,
} from "../../../services/ApiService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Select from "react-select";
import OfficeLocationHierarchy from "../officeLocationHierarchy/OfficeLocationHierarchy";
import ConfirmDelete from "../confirmMessage/confirmDelete";
const OfficeLocation = (props) => {
  const [Selected, setSelected] = useState({});
  const [RoleCreate, setRoleCreate] = useState(false);
  const [RoleList, setRoleList] = useState(true);
  const [reportingTo, setReportingTo] = useState({ id: "", name: "" });
  const [reportingLocation, setReportingLocation] = useState([]);
  const [reportingLocations, setReportingLocations] = useState("");
  const [colors, setColors] = useState([]);

  const [areaSchema, setArea] = useState([]);
  const [citySchema, setCity] = useState([]);
  const [stateSchema, setState] = useState([]);
  const [countrySchema, setCountry] = useState([]);
  const [posts, setPost] = useState([]);
  const [officeLocationSchema, setPosts] = useState([]);
  const [passing, setPassing] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("");
  const [value, setValue] = useState({});
  const [limit, setLimit] = useState({ value: 5, label: 5 });
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [primary, setPrimary] = useState(false);
  const [officeLocationDetails, setOfficeLocationDetails] = useState([]);
  const [modalresult, setModalresult] = useState(false);
  const [deleteId, setDeleteId] = useState({ id: "", name: "", show: false });
  const [modalType, setModalType] = useState(false);
  const changeHandler = async (e) => {
    await setSelected({ ...Selected, [e.target.name]: e.target.value });
  };
  const _noContentRenderer = () => {
    return <div>No Office types.</div>;
  };
  const [hierarchy, setHierarchy] = useState([]);

  useEffect(() => {
    setColors([
      "#b31217",
      "#e65c00",
      "#2b32b2",
      "#292e49",
      "#037bb5",
      "#ffa751",
    ]);
    getHierarchyFuc();
  }, []);

  const getHierarchyFuc = async () => {
    let result;
    try {
      result = await getHierarchyOffice();
      console.log("result");
      if (result.success) {
        setHierarchy(result.office);
        console.log(result.office[0], "gfgflocation");
      }
    } catch (e) {
      alert(e);
    }
  };
  const formik = useFormik({
    initialValues: {
      locationName: "",
      officeType: "",
      reportingTo: "",
      address1: "",
      address2: "",
    },
    validationSchema: yup.object({
      locationName: yup.string().required(" OfficeName is Required"),
      officeType: yup.string().required("OfficeType is Required"),
      reportingTo: yup.string().required("OfficeType is ReportingTo"),
      address1: yup.string().required("Address1 is Required"),
      address2: yup.string().required("Address2 is Required"),
    }),
    onSubmit: (userInputData) => {
      console.log(userInputData);
    },
  });

  const CancelhandleSubmit = (e) => {
    setModalresult(true);
    console.log("cancel - " + modalresult);
  };
  const deleteConfirmations = async (index) => {
    var response;
    let body = {};
    setModalresult(false);

    console.log("ok - " + modalresult);
  };
  const enableCreate = async () => {
    await setRoleList(false);
    await setRoleCreate(true);
  };
  const Cancel = async () => {
    await setReportingLocation([]);
    await setReportingLocations({});
    await setRoleList(true);
    await setRoleCreate(false);
    formik.values.officeType = "";
    formik.values.abbreviation = "";
    formik.values.reportingTo = "";
    setPassing("");
    setValue({});
  };
  useEffect(() => {
    async function getAllOfficeType() {
      var responseT;
      try {
        responseT = await getOfficeType();
        let officeTypes = [];
        if (responseT) {
          responseT.OfficeTypes.map((x) => {
            officeTypes.push({ ...x, label: x.officeType, value: x._id });
          });
          setPost(officeTypes);
        }
      } catch (e) {
        console.log(e);
      }
    }

    getAllOfficeType();
  }, []);

  useEffect(() => {
    getAllOfficeLocation();
  }, []);

  const getAllOfficeLocation = async () => {
    var response;
    try {
      response = await getOfficeLocation();

      if (response) {
        if (response.OfficeLocation) {
          response.OfficeLocation.map((x) => {
            x.officeLocationName = x.locationName;

            if (x.officeType) {
              x.officeTypeName = x.officeType.officeType;
            }
            if (x.reportingTo) {
              x.reportingToName = x.reportingTo.officeType;
            } else {
              x.reportingToName = "----";
            }
            if (x.country) {
              x.countryName = x.country.countryName;
            }
            if (x.state) {
              x.stateName = x.state.stateName;
            }
            if (x.city) {
              x.cityName = x.city.cityName;
            }
            if (x.area) {
              x.areaName = x.area.areaName;
            }
          });
          const values = _.chain(response.OfficeLocation)
            .groupBy("officeTypeName")
            .map((value, key) => ({ officeType: key, values: value }))
            .value();
          console.log(values, "12345678");
          setOfficeLocationDetails(values);

          setPosts(response.OfficeLocation);
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  const OfficeLocation = async () => {
    if (passing === "") {
      var response;
      let body = {
        ...formik.values,
        ...value,
      };
      if (reportingTo.id !== "" || reportingLocations._id !== "") {
        body = {
          ...body,
          reportingTo: reportingTo.id,
          reportingToLocation: reportingLocations._id,
        };
      }
      console.log(body);
      try {
        response = await createOfficeLocation(JSON.stringify(body));
        console.log(response, response.success);
        if (response.success === true) {
          toast.success(response.message);
          getAllOfficeLocation();
          formik.handleReset({});
          Cancel();
          return 0;
        }
      } catch (e) {
        console.log(e, "sssss");
      }
    } else {
      var responce;
      let body = { ...formik.values, ...value, id: passing };
      if (reportingTo.id !== "" || reportingLocations._id !== "") {
        body = {
          ...body,
          reportingTo: reportingTo.id,
          reportingToLocation: reportingLocations._id,
        };
      }
      // console.log(body);
      try {
        responce = await updateOfficeLocation(body);
        if (responce.ok) {
          console.log( responce.ok,"xxx");
          toast.success("Party Office Location updated Successfully");
          getAllOfficeLocation();
          formik.handleReset({});
          Cancel();
          return 0;
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  const Delete = async () => {
    var response;
    try {
      response = await deleteOfficeLocation(deleteId.id);
      if (response.success === true) {
        cancelConfirmDlete(true);
        getAllOfficeLocation();
      }
    } catch (e) {
      cancelConfirmDlete(false);
      console.log(e);
    }
  };

  const EditOfficeLocation = async (data) => {
    console.log(data,"12345678900000000000000000000000000000000000000000000");
    await setRoleList(false);
    await setRoleCreate(true);
    console.log(data.reportingToLocation, "relo");
    if (data.reportingToLocation) {
      setReportingLocations({
        ...data.reportingToLocation,
        label: `${data.reportingToLocation.state.stateName}, ${data.reportingToLocation.city.cityName}, ${data.reportingToLocation.area.areaName} - ${data.reportingToLocation.area.pincode}`,
        value: data.reportingToLocation._id,
      });
    }
    
    formik.values.locationName = data.locationName;
    formik.values.address1 = data.address1;
    formik.values.address2 = data.address2;
    setValue({
      officetype:data.officetype,
      countryName: data.countryName,
      stateName: data.stateName,
      cityName: data.cityName,
      areaName: data.areaName,
      pincode: data.pincode,
      officetype:{_id:data.officeType._id},
      country: { _id: data.country._id },
      state: { _id: data.state._id },
      city: { _id: data.city._id },
      area: { _id: data.area._id },
    });
    console.log(data.reportingToLocation, "localocalocalocaloca");
    console.log(value, "value");
    reportinToSet({...data.officeType,label: data.officeType.officeType,value: data.officeType._id});

    setPassing(data._id);
  };
  useEffect(() => {
    async function getAllCountry() {
      var response;
      try {
        response = await getCountry();
        console.log(response, "sdf");
        if (response) {
          console.log(response, "Response");

          setCountry(response.Country);
        }
      } catch (e) {
        console.log(e);
      }
    }

    getAllCountry();
  }, []);

  useEffect(() => {
    async function getAllState() {
      var response;
      try {
        response = await getState();
        console.log(response, "sdf");
        if (response) {
          console.log(response, "Response");

          setState(response.State);
        }
      } catch (e) {
        console.log(e);
      }
    }
    getAllState();
  }, [searchTerm]);

  useEffect(() => {
    async function getAllCity() {
      var response;
      try {
        response = await getCity();
        console.log(response, "sdf");
        if (response) {
          console.log(response, "Response");

          setCity(response.City);
        }
      } catch (e) {
        console.log(e);
      }
    }

    getAllCity();
  }, []);
  const capitalize = (x) => {
    let s = x.toLowerCase();
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  useEffect(() => {
    async function getAllArea() {
      var response;
      try {
        response = await getAreaSchema();
        console.log(response, "sdf");
        if (response) {
          if (response.Area) {
            let array = [];
            response.Area.map((x) => {
              x.value = x._id;
              x.label = `${capitalize(x.state.stateName)}, ${capitalize(
                x.city.cityName
              )}, ${capitalize(x.areaName)}, ${x.pincode}`;
              x.cityName = x.city.cityName;
              x.stateName = x.state.stateName;
              x.countryName = x.country.countryName;
              x.areaName = x.areaName;
              array.push(x);
            });
            console.log(array, "area");
            setArea(array);
          }
        }
      } catch (e) {
        console.log(e);
      }
    }

    getAllArea();
  }, []);


  const reportinToSet = async (val) => {
    console.log(val, "parameter", posts.length);
    let id = "";
    formik.values.officeType = val;
    let final = posts.find((x) => {
      return x._id === val._id;
    });
    if (final.reportingTo) {
      id = final.reportingTo._id;
      setReportingTo({
        id: final.reportingTo._id,
        name: final.reportingTo.officeType,
      });
    } else {
      setReportingTo("");
    }

    console.log(final, "localocalocalocalocaloca");
    try {
      const response = await getOfficeLocation(`officeType=${id}`);
      if (response) {
        if (response.OfficeLocation) {
          response.OfficeLocation.map((x) => {
            x.value = x._id;
            x.label = `${x.state.stateName}, ${x.city.cityName}, ${x.area.areaName}-${x.pincode}`;
          });
          console.log(response.OfficeLocation);
          setReportingLocation(response.OfficeLocation);
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleChanged = (event) => {
    setSearchTerm(event);
  };

  const MIN_TABLE_WIDTH = 1615;
  const MIN_TABLE_HEIGHT = 300;
  const sizes = ["X-Small", "Small", "Medium", "Large", "X-Large", "2X-Large"];
  const handleChanges = (event) => {
    console.log(event);
    let val = { ...event, area: event._id };
    delete val._id;
    setValue(val);
  };

  const [details, setDetails] = useState([]);

  const fields = [
    { key: "locationName", label: "Location Name", _style: { width: "200px" } },
    {
      key: "officeTypeName",
      label: "Type Of Party Office",
      _style: { width: "200px" },
    },
    {
      key: "reportingToName",
      label: "Reporting To",
      _style: { width: "200px" },
    },
    { key: "address1", _style: { width: "200px" } },
    { key: "areaName", _style: { width: "100px" } },
    ,
    { key: "cityName", _style: { width: "100px" } },
    { key: "pincode", _style: { width: "100px" } },
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

  const deletemodal = (id, name) => {
    setDeleteId({ id: id, name: name, show: true });
  };
  const cancelConfirmDlete = (val) => {
    if (val === true) {
      toast.success("Party Office Location deleted successfully");
    }
    if (val === false) {
      toast.success("Unable to delete Party Office Location, Try again...!");
    }
    setDeleteId({ id: "", name: "", show: false });
  };
  const handleIncrement = (counter) => {
    const counters = [...posts.data];
    const index = counters.indexOf(counter);

    counters[index] = { ...counter };
    counters[index].value++;

    setPost(counters);
  };
  const modalLocation = async () => {
    await setModalType(true);
  };

  return (
    <div>
      <ConfirmDelete
        details={deleteId}
        confirm={Delete}
        cancel={cancelConfirmDlete}
      />
      {RoleCreate && (
        <div style={{ padding: "1%", paddingTop: "1%", marginRight: "20%" }}>
          <CCard className={"OfficeLocation-card-container-6"}>
            <CRow style={{ paddingTop: "2%", paddingLeft: "2%" }}>
              <CCol md="10" className={"role-heading-6"}>
                Adding Party Office Location{" "}
              </CCol>
            </CRow>

            <CForm autoComplete="off">
              <CRow className={"role-form-container-6"}>
                <CCol md="12" lg="12" sm="12">
                  <CRow className={"seperator-6"}>
                    <CCol md="5">
                      <CLabel className={"form-labels-6"}>Location Name</CLabel>
                      <CInput
                        name={"locationName"}
                        value={formik.values.locationName}
                        onChange={formik.handleChange}
                        placeholder="Location Name"
                      />
                      {formik.errors.locationName ? (
                        <div className="text-danger">
                          {""}
                          {formik.values.locationName}
                        </div>
                      ) : null}
                    </CCol>
                    <CCol md="5">
                      <CLabel className={"form-labels-6"}>
                        Type of Party Office
                        <span className={"text-danger"}> *</span>
                      </CLabel>
                      <Select
                        onChange={(e) => reportinToSet(e)}
                        value={formik.values.officeType}
                        options={posts}
                      />
                      {formik.errors.OfficeType ? (
                        <div className="text-danger">
                          {" "}
                          {formik.errors.officeType}
                        </div>
                      ) : null}
                    </CCol>
                  </CRow>

                  <CRow className={"seperator-6"}>
                    <CCol md="5">
                      <CLabel className={"form-labels-6"}>
                        Reporting
                        <span style={{ color: "green" }}>
                          {formik.values.officeType
                            ? reportingTo
                              ? ` - ${reportingTo.name}`
                              : " - No Reporting"
                            : ""}{" "}
                        </span>
                      </CLabel>
                      <Select
                        options={reportingLocation}
                        onChange={(e) => setReportingLocations(e)}
                        value={reportingLocations}
                        placeholder={"Select the reporting location"}
                        style={{marginLeft: '10px'}}
                      />
                    </CCol>
                    <CCol md="5">
                      <CLabel className={"form-labels-6"}>
                        Search Location
                        <span className={"text-danger"}> *</span>
                      </CLabel>
                      <Select
                        type={"text"}
                        placeholder="Country,State,City,Area"
                        onChange={handleChanges}
                        options={areaSchema}
                      />
                    </CCol>
                  </CRow>

                  <CRow className={"seperator-6"}>
                    <CCol md="5">
                      <CLabel className={"form-labels-6"}>
                        Address Line 1 <span className={"text-danger"}> *</span>
                      </CLabel>
                      <CInput
                        name={"address1"}
                        onChange={formik.handleChange}
                        value={formik.values.address1}
                        placeholder="Address1"
                      />
                      {formik.errors.address1 ? (
                        <div className="text-danger">
                          {" "}
                          {formik.errors.address1}
                        </div>
                      ) : null}
                    </CCol>

                    <CCol md="5">
                      <CLabel className={"form-labels-6"}>
                        Address Line 2{" "}
                      </CLabel>
                      <CInput
                        name={"address2"}
                        onChange={formik.handleChange}
                        value={formik.values.address2}
                        placeholder="Address2"
                      />
                    </CCol>
                  </CRow>

                  <CRow className={"seperator-6"}>
                    <CCol md="5">
                      <CLabel className={"form-labels-6"}>
                        Country
                        <span className={"text-danger"}> *</span>
                      </CLabel>
                      <CInput
                        name={"Country"}
                        value={value.countryName || ""}
                        disabled
                        name={"Country"}
                        placeholder="Country"
                      />
                    </CCol>

                    <CCol md="5">
                      <CLabel className={"form-labels-6"}>
                        State
                        <span className={"text-danger"}> *</span>
                      </CLabel>
                      <CInput
                        name={"State"}
                        value={value.stateName || ""}
                        disabled
                        name={"State"}
                        placeholder="State"
                      />
                    </CCol>
                  </CRow>

                  <CRow className={"seperator-6"}>
                    <CCol md="5">
                      <CLabel className={"form-labels-6"}>
                        City
                        <span className={"text-danger"}> *</span>
                      </CLabel>
                      <CInput
                        name={"city"}
                        value={value.cityName || ""}
                        disabled
                        name={"city"}
                        placeholder="city"
                      />
                    </CCol>

                    <CCol md="5">
                      <CLabel className={"form-labels-6"}>
                        Area
                        <span className={"text-danger"}> *</span>
                      </CLabel>
                      <CInput
                        name={"Area"}
                        value={value.areaName || ""}
                        disabled
                        name={"Area"}
                        placeholder="Area"
                      />
                    </CCol>
                  </CRow>
                  <CRow className={"seperator-6"}>
                    <CCol md="5">
                      <CLabel className={"form-labels-6"}>
                        Pincode
                        <span className={"text-danger"}> *</span>
                      </CLabel>
                      <CInput
                        name={"Pincode"}
                        value={value.pincode || ""}
                        disabled
                        name={"Pincode"}
                        placeholder="Pincode"
                      />
                    </CCol>
                  </CRow>
                  <CCol md="10">
                    <div className="center-6">
                      <CCol md="12">
                        <CButton
                          shape={"pill"}
                          className={"cancelBtn"}
                          onClick={Cancel}
                        >
                          {" "}
                          Cancel
                        </CButton>
                      </CCol>
                    </div>

                    <div className="centerd-6">
                      <CCol md="12">
                        <CButton className={"saveBtn"} onClick={OfficeLocation}>
                          {passing !== "" ? "Update" : "+ Save"}
                        </CButton>
                      </CCol>
                      {error !== "" ? <p>{error}</p> : null}
                    </div>
                  </CCol>
                </CCol>
              </CRow>
            </CForm>
          </CCard>
        </div>
      )}

      {RoleList && (
        <div>
          <CCard className={"OfficeLocation-card-container-location"}>
            <CRow
              style={{
                padding: "10px",
                paddingLeft: "20px",
                paddingRight: "20px",
                top: "500px",
              }}
            >
              <CCol md="8" className={"role-heading-6"}>
                Party Office Location
              </CCol>
            </CRow>

            <CModal
              aria-labelledby="contained-modal-title-vcenter"
              centered
              style={{
                display: "flex",
                justifyContent: "left",
                width: "1200px",

                right: "300px",
              }}
              show={primary}
              onClose={() => setPrimary(!primary)}
            >
              <CModalHeader
                closeButton
                style={{
                  display: "flex",
                  width: "1200px",
                  height: "101px",
                  color: "black",
                  backgroundColor: "white",
                  justifyContent: "left",
                }}
              >
                <CModalTitle>
                  <span className={"font7"}>
                    {" "}
                    Hierarchy Chart for Party Office Location
                  </span>{" "}
                  <span>
                    {" "}
                    <img
                      style={{
                        width: "40px",
                        height: "40px",
                        marginLeft: "375PX",
                      }}
                      src={State}
                      alt={"logo"}
                    />{" "}
                  </span>{" "}
                  <br />
                  <span className={"font8"}> State Bank of India</span>
                </CModalTitle>
              </CModalHeader>
              <CModalBody>
                <i className="fa fa-sliders" onClick={modalLocation}></i>
                {modalType && (
                  <div>
                    {hierarchy &&
                      hierarchy.map((x, i) => (
                        <OfficeLocationHierarchy key={i} datasource={x} />
                      ))}
                  </div>
                )}
              </CModalBody>
            </CModal>

            <CRow style={{ padding: "15px", paddingLeft: "2%" }}>
              <CCol md="10">
                <CButton className={"saveBtn"} onClick={enableCreate}>
                  + ADD
                </CButton>
              </CCol>
              <CCol
                md="2"
                style={{ paddingLeft: "10px", marginBottom: "20px" }}
              >
                <CRow>
                  <CCol style={{ paddingTop: "15px" }}>
                    <img
                      src={
                        "https://img.icons8.com/fluent/2x/organization-chart-people.png"
                      }
                      style={{
                        height: "40px",
                        width: "40px",
                        marginLeft: "50px",
                        marginBottom: "-394px",
                      }}
                      onClick={() => setPrimary(!primary)}
                    />
                  </CCol>
                </CRow>
              </CCol>
            </CRow>
            <div
              className={"scrollForCard"}
              style={{
                padding: "10px 20px",
                margin: "0px 10px",
                height: "145px",
                background: "white",
                overflowX: "scroll",
                overflowY: "hidden",
              }}
            >
              {/* <CCol> */}
              <CRow style={{ width: "max-content" }}>
                {officeLocationDetails.map((x, i) => (
                  <CCard
                    key={i}
                    className={"scrollCard"}
                    style={{ background: colors[i], color: "white" }}
                  >
                    <CLabel className={"scrollCardText"}>{x.officeType}</CLabel>
                    <CLabel className={"scrollCardText"}>
                      {x.values.length}
                    </CLabel>
                  </CCard>
                ))}
              </CRow>
            </div>
            <CRow style={{ padding: "3%", paddingLeft: "2%" }}>
              <CCol>
                <CDataTable
                  size={"1500px"}
                  items={officeLocationSchema}
                  fields={fields}
                  columnFilter
                  tableFilter
                  footer
                  itemsPerPageSelect
                  itemsPerPage={5}
                  hover
                  sorter
                  pagination
                  scopedSlots={{
                    status: (item) => (
                      <td>
                        <CBadge color={getBadge(item.status)}>
                          {item.status}
                        </CBadge>
                      </td>
                    ),
                    show_details: (item, index) => {
                      return (
                        <td className="py-2">
                          <CRow>
                            <CCol style={{ fontSize: "1.15rem" }} md="12">
                              <i
                                onClick={() => {
                                  toggleDetails(index);
                                }}
                              ></i>
                              <i
                                style={{
                                  marginRight: "5px",
                                  color: "#3480e2",
                                }}
                                onClick={() =>
                                  EditOfficeLocation(
                                    officeLocationSchema[index]
                                  )
                                }
                                className="fas fa-edit"
                              ></i>
                              <i
                                onClick={() =>
                                  deletemodal(
                                    officeLocationSchema[index]._id,
                                    officeLocationSchema[index].area.areaName
                                  )
                                }
                                style={{
                                  marginLeft: "5px",
                                  color: "#e85654",
                                }}
                                className="fas fa-trash"
                              ></i>
                            </CCol>
                          </CRow>
                        </td>
                      );
                    },
                    details: (item, index) => {},
                  }}
                />
              </CCol>
            </CRow>
          </CCard>
        </div>
      )}
      <ToastContainer autoClose={1000}></ToastContainer>
    </div>
  );
};

export default OfficeLocation;
