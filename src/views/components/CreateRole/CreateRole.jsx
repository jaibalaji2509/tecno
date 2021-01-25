import React, { useState, useEffect } from "react";
import { AutoSizer, Table, Column, InfiniteLoader } from "react-virtualized";
import { ToastContainer, toast } from "react-toastify";
import State from "../../images/images18.png";
import {
  CRow,
  CCard,
  CCol,
  CButton,
  CForm,
  CSelect,
  CLabel,
  CInput,
  CModal,
  CModalHeader,
  CModalBody,
  CModalTitle,
  CDataTable,
  CBadge,
} from "@coreui/react";
import Select, { components } from "react-select";
import { useFormik } from "formik";
import * as yup from "yup";
import "./CreateRole.css";
import {
  departmentCreate,
  designationCreate,
  roleCreate,
  getAllDepartment,
  getAllRole,
  getDesignation,
  getOfficeLocation,
  getOfficeType,
  roleDelete,
  updateRole,
  getEmployeeHierarchy,
  getAllRolePaginate,
} from "../../../services/ApiService";
import { Label } from "react-konva";
import HierarchyChart from "../hierarchyNew/HierarchyChart";
import ConfirmDelete from "../confirmMessage/confirmDelete";

function Reporting(props) {
  const [areporting, setAreporting] = useState(false);
  const [freporting, setFreporting] = useState(false);
  const [updateId, setUpdateId] = useState("");
  const [officeLocation, setOfficeLocation] = useState([]);
  const [officeType, setOfficeType] = useState([]);
  const [RoleList, setRoleList] = useState([]);
  const [roleListPaginate, setRoleListPaginate] = useState([]);
  const [department, setDepartment] = useState([]);
  const [designation, setDesignation] = useState([]);
  const [functionChange, setFunctionChange] = useState([]);
  const [adminChange, setAdminChange] = useState([]);
  const [rolehierarchy, setRoleHierarchy] = useState({});
  const [departmentShow, setDepartmentShow] = useState(true);
  const [designationShow, setDesignationShow] = useState(true);
  const [view, setView] = useState(true);
  const [dccId, setDccId] = useState({
    officeType: "",
    department: "",
    designation: "",
    location: "",
    code: "",
    aofficeType: "",
    adepartment: "",
    adesignation: "",
    alocation: "",
    acode: "",
  });
  const [triger, setTriger] = useState("");
  const [limit, setLimit] = useState({ value: 5, label: 5 });
  const [page, setPage] = useState(1);
  const [primary, setPrimary] = useState(false);
  const [modalOfficeType, setModalOfficeType] = useState("");
  const [modalOfficeLocation, setModalOfficeLocation] = useState("");
  const [departmentData, setDepartmentData] = useState({
    name: "",
    abbreviation: "",
    code: "",
  });
  const [designationData, setDesignationData] = useState({
    name: "",
    abbreviation: "",
    code: "",
  });
  const [deleteId, setDeleteId] = useState({ id: "", show: false });
  const formik = useFormik({
    initialValues: {
      officetype: "",
      departmentRole: "",
      locationRole: "",
      designationRole: "",
      office: "",
      roleName: "",
      abbreviation: "",
      code: "",
      dccDescription: "",
      dccID: "",
    },
    validationSchema: yup.object({
      officetype: yup.string().required("Office Type Required"),
      departmentRole: yup.string().required("Department Required"),
      locationRole: yup.string().required("Party Office Location Required"),
      designationRole: yup.string().required("Designation Required"),
      office: yup.string().required("Office Name Required"),
      roleName: yup.string().required("Role Name Required"),
      abbreviation: yup.string().required("Role Abbreviation required"),
      code: yup.string().required("Role Code is required"),
    }),
    onSubmit: (userInputData) => {
      console.log(userInputData);
    },
  });

  const updatoRole = (row) => {
    let reportingIds = [];
    setUpdateId(row._id);
    getOfficeLocations(row.typeOfOffice._id);
    setView(false);
    formik.values.officetype = {
      ...row.typeOfOffice,
      value: row.typeOfOffice._id,
      label: row.typeOfOffice.officeType,
    };
    formik.values.departmentRole = {
      ...row.department,
      value: row.department._id,
      label: row.department.name,
    };
    formik.values.locationRole = {
      ...row.officeLocation,
      value: row._id,
      label: `${row.officeLocation.locationName}, ${row.officeLocation.address1} ${row.officeLocation.address2},${row.location}`,
    };
    formik.values.designationRole = {
      ...row.designation,
      value: row.designation._id,
      label: row.designation.name,
    };
    formik.values.roleName = row.roleName;
    formik.values.abbreviation = row.abbreviation;
    formik.values.code = row.code;
    formik.values.dccDescription = row.dccDescription;
    formik.values.dccID = row.dccId;
    setTriger(row.department._id);

    setDccId({
      officeType: row.typeOfOffice.code,
      department: row.department.code,
      designation: row.designation.code,
      location: `${row.officeLocation.country.code} ${row.officeLocation.state.code} ${row.officeLocation.city.code} ${row.officeLocation.area.code}`,
      code: row.code,
      aofficeType: row.typeOfOffice.abbreviation,
      adepartment: row.department.abbreviation,
      adesignation: row.designation.abbreviation,
      alocation: `${row.officeLocation.country.abbreviation} ${row.officeLocation.state.abbreviation} ${row.officeLocation.city.abbreviation} ${row.officeLocation.area.abbreviation}`,
      acode: row.abbreviation,
    });

    if (row.functionalReporting) {
      if (row.functionalReporting.length !== 0) {
        setFreporting(true);
        let values = [];
        row.functionalReporting.map((x) => {
          reportingIds.push(`${x.role._id}`);
          values.push({
            ...x,
            typeOfOffice: x.typeOfOffice,
            department: x.department,
            officeLocation: x.officeLocation,
            designation: x.designation,
            _id: x.role._id,
            typeOfOfficeName: x.typeOfOffice.officeType,
            departmentName: x.department.name,
            location: x.officeLocation.area.areaName,
            designationName: x.designation.name,
            roleName: x.role.roleName,
          });
          return 0;
        });
        setFunctionChange(values);
      } else {
        setFreporting(false);
      }
    } else {
      setFreporting(false);
    }

    if (row.administativeReporting) {
      if (
        row.administativeReporting.department &&
        row.administativeReporting.designation &&
        row.administativeReporting.typeOfOffice &&
        row.administativeReporting.officeLocation
      ) {
        setAreporting(true);
        let x = row.administativeReporting;
        reportingIds.push(`${x.role._id}`);
        setAdminChange([
          {
            ...x,
            typeOfOffice: x.typeOfOffice,
            department: x.department,
            officeLocation: x.officeLocation,
            designation: x.designation,
            role: x.role,
            typeOfOfficeName: x.typeOfOffice.officeType,
            departmentName: x.department.name,
            location: x.officeLocation.area.areaName,
            designationName: x.designation.name,
            roleName: x.role.roleName,
          },
        ]);
      } else {
        setAreporting(false);
      }
    } else {
      setAreporting(false);
    }

    let roleLists = RoleList;
    let newRoleLists = roleLists.filter((x) => {
      return x._id !== row._id && !reportingIds.includes(`${x._id}`);
    });

    setRoleList(newRoleLists);
  };

  const getOfficeLocations = async (id) => {
    let query = `officeType=${id}`;
    try {
      const responseO = await getOfficeLocation(query);

      if (responseO) {
        let officeLocations = [];
        responseO.OfficeLocation.map((x) => {
          officeLocations.push({
            ...x,
            locationName: x.locationName,
            label: `${x.address1},${x.address2},${x.area.areaName}`,
            value: x._id,
          });
        });
        setOfficeLocation(officeLocations);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getAllOfficeLocation();
  }, []);

  const getAllOfficeLocation = async() => {
    var responseT, responseL;
    try {
      responseT = await getOfficeType();

      if (responseT) {
        let officeTypes = [];
        responseT.OfficeTypes.map((x) => {
          officeTypes.push({ ...x, label: x.officeType, value: x._id });
        });
        console.log(officeTypes, "11100111000");
        setOfficeType(officeTypes);
      }
    } catch (e) {
      console.log(e);
    }
    try {
      responseL = await getAllDepartment();
      if (responseL) {
        let department = [];
        responseL.department.map((x) => {
          department.push({ ...x, value: x._id, label: x.name });
        });
        setDepartment(department);
        console.log(responseL.department);
      }
    } catch (e) {
      console.log(e);
    }
    try {
      const responseL = await getDesignation();
      if (responseL) {
        let designation = [];
        responseL.data.map((x) => {
          designation.push({ ...x, value: x._id, label: x.name });
        });
        setDesignation(designation);
        console.log(responseL.data);
      }
    } catch (e) {
      console.log(e);
    }
  }

  const saveDepartment = async () => {
    try {
      const response = await departmentCreate({
        ...departmentData,
      });
      if (response) {
        let datas = department;
        datas.push({
          ...response.data,
          value: response.data._id,
          label: response.data.name,
        });
        setDepartment(datas);
        setDepartmentData({ name: "", abbreviation: "", code: "" });
        setDepartmentShow(true);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const saveDesignation = async () => {
    try {
      const response = await designationCreate(designationData);
      if (response) {
        let datas = designation;
        datas.push({
          ...response.data,
          value: response.data._id,
          label: response.data.name,
        });
        setDesignation(datas);
        setDesignationData({ name: "", abbreviation: "", code: "" });
        setDesignationShow(true);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const deleteRole = async () => {
    try {
      const response = await roleDelete(deleteId.id);
      if (response) {
        if (response.success) {
          cancelConfirmDlete();
          let array = RoleList;
          let data = array.filter((x) => {
            return x._id !== deleteId.id;
          });
          setRoleList(data);
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  const _noContentRenderer = () => {
    return <div>No Office types.</div>;
  };

  const handleOfficeType = (y) => {
    formik.values.officetype = y;
    setDccId({
      ...dccId,
      officeType: y.code,
      aofficeType: y.abbreviation,
    });
    getOfficeLocations(y._id);
    if (
      formik.values.abbreviation !== "" &&
      formik.values.code !== "" &&
      formik.values.departmentRole !== "" &&
      formik.values.designationRole !== "" &&
      formik.values.officetype !== "" &&
      formik.values.locationRole !== ""
    ) {
      let str = `${y.code}${dccId.location}${dccId.department}${dccId.designation}${formik.values.code}`;
      formik.values.dccID = str.trim().toUpperCase();
      formik.values.dccDescription = `${y.abbreviation} ${dccId.alocation} ${dccId.adepartment} ${dccId.adesignation} ${formik.values.abbreviation}`;
    }
  };

  const handleModalOfficeType = (e) => {
    console.log(e);
    setRoleHierarchy({});
    setModalOfficeType(e);
    setModalOfficeLocation("");
    setRoleHierarchy({});
    getOfficeLocations(e._id);
  };

  const handleModalOfficeLocation = (e) => {
    setRoleHierarchy({});
    setModalOfficeLocation(e);
    getHierarchyEmployee(e._id);
  };

  const handleCode = (y) => {
    formik.values.code = y.toUpperCase();
    setDccId({
      ...dccId,
      code: y.toUpperCase(),
    });
    if (
      formik.values.abbreviation !== "" &&
      formik.values.code !== "" &&
      formik.values.departmentRole !== "" &&
      formik.values.designationRole !== "" &&
      formik.values.officetype !== "" &&
      formik.values.locationRole !== ""
    ) {
      let str = `${dccId.officeType}${dccId.location}${dccId.department}${
        dccId.designation
      }${y.toUpperCase()}`;
      formik.values.dccID = str.trim().toUpperCase();
      formik.values.dccDescription = `${dccId.aofficeType} ${dccId.alocation} ${dccId.adepartment} ${dccId.adesignation} ${formik.values.abbreviation}`;
    }
  };

  const handleAbbreviation = (y) => {
    formik.values.abbreviation = y;
    setDccId({
      ...dccId,
      acode: y,
    });
    if (
      formik.values.abbreviation !== "" &&
      formik.values.code !== "" &&
      formik.values.departmentRole !== "" &&
      formik.values.designationRole !== "" &&
      formik.values.officetype !== "" &&
      formik.values.locationRole !== ""
    ) {
      let str = `${dccId.officeType}${dccId.location}${dccId.department}${dccId.designation}${formik.values.code}`;
      formik.values.dccID = str.trim().toUpperCase();
      formik.values.dccDescription = `${dccId.aofficeType} ${dccId.alocation} ${dccId.adepartment} ${dccId.adesignation} ${y}`;
    }
  };

  const handleDepartment = (y) => {
    formik.values.departmentRole = y;
    setDccId({
      ...dccId,
      department: y.code,
      adepartment: y.abbreviation,
    });
    if (
      formik.values.abbreviation !== "" &&
      formik.values.code !== "" &&
      formik.values.departmentRole !== "" &&
      formik.values.designationRole !== "" &&
      formik.values.officetype !== "" &&
      formik.values.locationRole !== ""
    ) {
      let str = `${dccId.officeType}${dccId.location}${y.code}${dccId.designation}${formik.values.code}`;
      formik.values.dccID = str.trim().toUpperCase();
      formik.values.dccDescription = `${dccId.aofficeType} ${dccId.alocation} ${y.abbreviation} ${dccId.adesignation} ${formik.values.abbreviation}`;
    }
  };

  const handleDesignation = (y) => {
    formik.values.designationRole = y;
    setDccId({
      ...dccId,
      designation: y.code,
      adesignation: y.abbreviation,
    });
    if (
      formik.values.abbreviation !== "" &&
      formik.values.code !== "" &&
      formik.values.departmentRole !== "" &&
      formik.values.designationRole !== "" &&
      formik.values.officetype !== "" &&
      formik.values.locationRole !== ""
    ) {
      let str = `${dccId.officeType}${dccId.location}${dccId.department}${y.code}${formik.values.code}`;
      formik.values.dccID = str.trim().toUpperCase();
      formik.values.dccDescription = `${dccId.aofficeType} ${dccId.alocation} ${dccId.adepartment} ${y.abbreviation} ${formik.values.abbreviation}`;
    }
  };

  const handleLocation = (y) => {
    formik.values.locationRole = y;
    let x = officeLocation.find((x) => {
      return x._id === y._id;
    });
    console.log(x);
    setDccId({
      ...dccId,
      location: `${x.country.code}${x.state.code}${x.city.code}${x.area.code}`,
      alocation: `${x.country.abbreviation}${x.state.abbreviation}${x.city.abbreviation}${x.area.abbreviation}`,
    });

    if (
      formik.values.abbreviation !== "" &&
      formik.values.code !== "" &&
      formik.values.departmentRole !== "" &&
      formik.values.designationRole !== "" &&
      formik.values.officetype !== "" &&
      formik.values.locationRole !== ""
    ) {
      let str = `${dccId.officeType}${x.country.code}${x.state.code}${x.city.code}${x.area.code}${dccId.department}${dccId.designation}${formik.values.code}`;
      formik.values.dccID = str.trim().toUpperCase();
      formik.values.dccDescription = `${dccId.aofficeType} ${x.country.abbreviation} ${x.state.abbreviation} ${x.city.abbreviation} ${x.area.abbreviation} ${dccId.adepartment} ${dccId.adesignation} ${formik.values.abbreviation}`;
    }
  };

  const enableDepartmentCreate = async () => {
    await setDepartmentShow(false);
  };

  useEffect(() => {
    getAllRoles();
  }, []);

  const getAllRoles = async () => {
    try {
      const roleResponse = await getAllRole();
      if (roleResponse) {
        if (roleResponse.data) {
          roleResponse.data.map((x, i) => {
            x.value = x._id;
            x.label = `${x.typeOfOffice.officeType}, ${x.officeLocation.state.stateName}, ${x.officeLocation.city.cityName}, ${x.officeLocation.area.areaName}, ${x.department.name}, ${x.designation.name}, ${x.roleName}`;
            x.typeOfOfficeName = x.typeOfOffice.officeType;
            x.location = x.officeLocation.area.areaName;
            x.locationName = x.officeLocation.locationName;
            x.departmentName = x.department.name;
            x.designationName = x.designation.name;
            x.s_no = (page - 1) * limit.value + i + 1;
            return 0;
          });
        }
        setRoleList(roleResponse.data);
        setRoleListPaginate(roleResponse.data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const roleCreation = async () => {
    console.log(updateId);
    if (updateId === "") {
      let admin = {};
      if (adminChange.length > 0) {
        admin = {
          department: adminChange[0].department._id,
          designation: adminChange[0].designation._id,
          role: adminChange[0].role
            ? adminChange[0].role._id
            : adminChange[0]._id,
          officeLocation: adminChange[0].officeLocation._id,
          typeOfOffice: adminChange[0].typeOfOffice._id,
        };
      }
      try {
        const response = await roleCreate(formik.values, admin, functionChange);
        if (response) {
          if (response.data) {
            cancel(response.message, true);
          }
        }
      } catch (e) {
        console.log(e);
        cancel(e, false);
      }
    } else {
      console.log("123123123132123");
      let admin = {};
      if (adminChange.length > 0) {
        admin = {
          department: adminChange[0].department._id,
          designation: adminChange[0].designation._id,
          role: adminChange[0].role
            ? adminChange[0].role._id
            : adminChange[0]._id,
          officeLocation: adminChange[0].officeLocation._id,
          typeOfOffice: adminChange[0].typeOfOffice._id,
        };
      }
      try {
        const responce = await updateRole(
          formik.values,
          admin,
          functionChange,
          updateId
        );
        if (responce) {
          if (responce.success) {
            cancel(responce.message, true);
          }
        }
      } catch (e) {
        console.log(e);
        cancel(e, false);
      }
    }
    getAllRoles();
  };

  const cancel = (message, varient) => {
    console.log(message, "123123");
    if (message) {
      if (varient === true) {
        toast.success(message);
      } else {
        toast.error(message);
      }
      setTimeout(() => {
        setView(true);
      }, 2000);
    } else {
      setView(true);
    }
    setAdminChange([]);
    setFunctionChange([]);
    formik.values.officetype = "";
    formik.values.departmentRole = "";
    formik.values.locationRole = "";
    formik.values.designationRole = "";
    formik.values.office = "";
    formik.values.roleName = "";
    formik.values.abbreviation = "";
    formik.values.code = "";
    formik.values.dccDescription = "";
    formik.values.dccID = "";
    setDccId({
      officeType: "",
      department: "",
      designation: "",
      location: "",
      code: "",
      aofficeType: "",
      adepartment: "",
      adesignation: "",
      alocation: "",
      acode: "",
    });
    getAllOfficeLocation();
    getAllRoles();
  };

  const getHierarchyEmployee = async (location) => {
    let result;
    try {
      result = await getEmployeeHierarchy(modalOfficeType._id, location);
      console.log("xxzzzzzzz");
      if (result.success) {
        if (result.roles.length > 0) {
          setRoleHierarchy(result.roles[0]);
        }
        console.log(result.roles[0], "gfgf");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const [details, setDetails] = useState([]);

  const fields = [
    { key: "typeOfOfficeName" , label: "Type Of Party Office", _style: { width: "250px" } },
    { key: "locationName", label: "Location Name", _style: { width: "200px" } },
    { key: "location", label: "Party Office Location", _style: { width: "200px" } },
    { key: "departmentName", _style: { width: "300px" } },
    { key: "designationName", _style: { width: "300px" } },
    { key: "roleName", _style: { width: "300px" } },
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

  const deletemodal = (id) => {
    setDeleteId({ id: id, show: true });
  };
  const cancelConfirmDlete = () => {
    setDeleteId({ id: "", show: false });
  };
  const Option = (props) => {
    return (
      <div>
        <components.Option {...props}>
          <p style={{ marginBottom: "0px" }}>{props.data.locationName}</p>
          <p style={{ marginBottom: "0px" }}>{props.data.label}</p>
        </components.Option>
      </div>
    );
  };

  return (
    <div>
      <ConfirmDelete
        details={deleteId}
        confirm={deleteRole}
        cancel={cancelConfirmDlete}
      />
      {view === false ? (
        <React.Fragment>
          <div style={{ padding: "4%" }}>
            <CCard className={"Roless-card-container-1"}>
              <CRow style={{ paddingTop: "1%", paddingLeft: "2%" }}>
                <CCol md="12" className={"role-heading-1"}>
                  Adding Role
                </CCol>
              </CRow>

              <CForm autoComplete="off" onSubmit={formik.handleSubmit}>
                <CRow className={"role-form-container-1"}>
                  <CCol md="12" lg="12" sm="12">
                    <CRow className={"seperator-1"}>
                      <CCol>
                        <CLabel className={"form-labels-1"}>
                          Type of Party Office
                        </CLabel>
                        <Select
                          value={formik.values.officetype}
                          onChange={handleOfficeType}
                          options={officeType}
                        />

                        {formik.errors.officetype &&
                        formik.values.officetype === "" ? (
                          <div className="text-danger">
                            {" "}
                            {formik.errors.officetype}
                          </div>
                        ) : null}
                      </CCol>
                      <CCol>
                        {departmentShow ? (
                          <CRow>
                            <CCol md={9}>
                              <CLabel className={"form-labels-1"}>
                                Department
                              </CLabel>
                              <Select
                                options={department}
                                onChange={handleDepartment}
                                value={formik.values.departmentRole}
                              />
                              {formik.errors.departmentRole &&
                              formik.values.departmentRole === "" ? (
                                <div className="text-danger">
                                  {" "}
                                  {formik.errors.departmentRole}
                                </div>
                              ) : null}
                            </CCol>
                            <CRow style={{ paddingLeft: "2%" }}>
                              <CCol md={3}>
                                <CButton
                                  shape={"pill"}
                                  className={"saveBtn"}
                                  style={{
                                    marginTop: "30px",
                                    position: "relative",
                                    right: 6,
                                  }}
                                  onClick={enableDepartmentCreate}
                                >
                                  ADD
                                </CButton>
                              </CCol>
                            </CRow>
                          </CRow>
                        ) : (
                          <React.Fragment>
                            <CRow>
                              <CCol md={3}>
                                <CLabel className={"form-labels-1"}>
                                  Department
                                </CLabel>
                                <CInput
                                  name={"dName"}
                                  value={departmentData.name}
                                  onChange={(e) => {
                                    setDepartmentData({
                                      ...departmentData,
                                      name: e.target.value,
                                    });
                                  }}
                                />
                              </CCol>
                              <CCol md={3}>
                                <CLabel className={"form-labels-1"}>
                                  Abbreviation
                                </CLabel>
                                <CInput
                                  name={"dAbbreviation"}
                                  value={departmentData.abbreviation}
                                  onChange={(e) => {
                                    setDepartmentData({
                                      ...departmentData,
                                      abbreviation: e.target.value,
                                    });
                                  }}
                                />
                              </CCol>
                              <CCol md={3}>
                                <CLabel className={"form-labels-1"}>
                                  Code
                                </CLabel>
                                <CInput
                                  name={"dCode"}
                                  value={departmentData.code}
                                  onChange={(e) => {
                                    setDepartmentData({
                                      ...departmentData,
                                      code: e.target.value,
                                    });
                                  }}
                                />
                              </CCol>
                              <CCol md={3}>
                                <CRow>
                                  <CCol md={6}>
                                    <CButton
                                      shape={"pill"}
                                      style={{
                                        marginTop: "30px",
                                        position: "relative",
                                        right: 10,
                                      }}
                                      className={"saveBtn"}
                                      onClick={saveDepartment}
                                    >
                                      Save
                                    </CButton>
                                  </CCol>
                                  <CCol md={6}>
                                    <CButton
                                      shape={"pill"}
                                      className={"cancelBtn"}
                                      style={{
                                        marginTop: "30px",
                                        position: "relative",
                                        left: 20,
                                      }}
                                      onClick={() => {
                                        setDepartmentShow(true);
                                        setDepartmentData({
                                          dName: "",
                                          dCode: "",
                                          dAbbreviation: "",
                                        });
                                      }}
                                    >
                                      Cancel
                                    </CButton>
                                  </CCol>
                                </CRow>
                              </CCol>
                            </CRow>
                          </React.Fragment>
                        )}
                      </CCol>
                    </CRow>

                    <CRow className={"seperator-1"}>
                      <CCol>
                        <CLabel className={"form-labels-1"}>
                          Party Office Location{" "}
                        </CLabel>
                        <Select
                          name={"locationRole"}
                          value={formik.values.locationRole}
                          onChange={(e) => handleLocation(e)}
                          options={officeLocation}
                          components={{ Option }}
                        />
                        {formik.errors.locationRole &&
                        formik.values.locationRole === "" ? (
                          <div className="text-danger">
                            {" "}
                            {formik.errors.locationRole}
                          </div>
                        ) : null}
                      </CCol>

                      <CCol>
                        {designationShow === true ? (
                          <CRow>
                            <CCol md={9}>
                              <CLabel className={"form-labels-1"}>
                                Designation{" "}
                              </CLabel>
                              <Select
                                value={formik.values.designationRole}
                                onChange={handleDesignation}
                                options={designation}
                              />
                              {formik.errors.designationRole &&
                              formik.values.designationRole === "" ? (
                                <div className="text-danger">
                                  {" "}
                                  {formik.errors.designationRole}
                                </div>
                              ) : null}
                            </CCol>
                            <CCol md={3}>
                              <CButton
                                shape={"pill"}
                                className={"saveBtn"}
                                style={{
                                  marginTop: "30px",
                                  position: "relative",
                                  right: 10,
                                }}
                                onClick={() => {
                                  setDesignationShow(false);
                                }}
                              >
                                ADD
                              </CButton>
                            </CCol>
                          </CRow>
                        ) : (
                          <React.Fragment>
                            <CRow>
                              <CCol md={3}>
                                <CLabel className={"form-labels-1"}>
                                  Designation
                                </CLabel>
                                <CInput
                                  name={"dName"}
                                  value={designationData.name}
                                  onChange={(e) => {
                                    setDesignationData({
                                      ...designationData,
                                      name: e.target.value,
                                    });
                                  }}
                                />
                              </CCol>
                              <CCol md={3}>
                                <CLabel className={"form-labels-1"}>
                                  Abbreviation
                                </CLabel>
                                <CInput
                                  name={"dAbbreviation"}
                                  value={designationData.abbreviation}
                                  onChange={(e) => {
                                    setDesignationData({
                                      ...designationData,
                                      abbreviation: e.target.value,
                                    });
                                  }}
                                />
                              </CCol>
                              <CCol md={3}>
                                <CLabel className={"form-labels-1"}>
                                  Code
                                </CLabel>
                                <CInput
                                  name={"dCode"}
                                  value={designationData.code}
                                  onChange={(e) => {
                                    setDesignationData({
                                      ...designationData,
                                      code: e.target.value.trim(),
                                    });
                                  }}
                                />
                              </CCol>
                              <CCol md={3}>
                                <CRow>
                                  <CCol md={6}>
                                    <CButton
                                      shape={"pill"}
                                      style={{
                                        marginTop: "30px",
                                        position: "relative",
                                        right: 10,
                                      }}
                                      className={"saveBtn"}
                                      onClick={saveDesignation}
                                    >
                                      Save
                                    </CButton>
                                  </CCol>
                                  <CCol md={6}>
                                    <CButton
                                      shape={"pill"}
                                      className={"cancelBtn"}
                                      style={{
                                        marginTop: "30px",
                                        position: "relative",
                                        left: 20,
                                      }}
                                      onClick={() => {
                                        setDesignationShow(true);
                                        setDesignationData({
                                          name: "",
                                          code: "",
                                          abbreviation: "",
                                        });
                                      }}
                                    >
                                      Cancel
                                    </CButton>
                                  </CCol>
                                </CRow>
                              </CCol>
                            </CRow>
                          </React.Fragment>
                        )}
                      </CCol>
                    </CRow>

                    <CRow className={"seperator-1"}>
                      <CCol>
                        <CLabel className={"form-labels-1"}>Role Name</CLabel>
                        <CInput
                          name={"roleName"}
                          onChange={formik.handleChange}
                          value={formik.values.roleName}
                        />
                        {formik.errors.roleName &&
                        formik.values.roleName === "" ? (
                          <div className="text-danger">
                            {" "}
                            {formik.errors.roleName}
                          </div>
                        ) : null}
                      </CCol>
                      <CCol>
                        <CLabel className={"form-labels-1"}>
                          Abbreviation
                        </CLabel>
                        <CInput
                          name={"abbreviation"}
                          onChange={(e) => handleAbbreviation(e.target.value)}
                          value={formik.values.abbreviation}
                        />
                        {formik.errors.abbreviation &&
                        formik.values.abbreviation === "" ? (
                          <div className="text-danger">
                            {" "}
                            {formik.errors.abbreviation}
                          </div>
                        ) : null}
                      </CCol>
                      <CCol>
                        <CLabel className={"form-labels-1"}>Code</CLabel>
                        <CInput
                          name={"code"}
                          onChange={(e) => handleCode(e.target.value)}
                          value={formik.values.code}
                        />
                        {formik.errors.code && formik.values.code === "" ? (
                          <div className="text-danger">
                            {" "}
                            {formik.errors.code}
                          </div>
                        ) : null}
                      </CCol>
                    </CRow>
                    <CRow className={"seperator-1"}>
                      <CCol lg={2}>
                        <CLabel
                          style={{
                            position: "relative",
                            top: "5px",
                            float: "right",
                          }}
                          className={"form-labels-1"}
                        >
                          D.C.C Description
                        </CLabel>
                      </CCol>
                      <CCol lg={9}>
                        <CInput
                          name={"dccDescription"}
                          value={formik.values.dccDescription}
                          onChange={formik.handleChange}
                        />
                      </CCol>
                      <CCol lg={1}></CCol>
                    </CRow>
                    <CRow className={"seperator-1"}>
                      <CCol lg={2}>
                        <CLabel
                          style={{
                            position: "relative",
                            top: "5px",
                            float: "right",
                          }}
                          className={"form-labels-1"}
                        >
                          D.C.C ID
                        </CLabel>
                      </CCol>
                      <CCol lg={9}>
                        <CInput name={"dccID"} value={formik.values.dccID} />
                      </CCol>
                      <CCol lg={1}></CCol>
                    </CRow>

                    <CCol md="10"></CCol>
                  </CCol>
                </CRow>
              </CForm>
            </CCard>
          </div>
          <div>
            <CRow>
              <CCol lg={"4"}>
                <span
                  style={{
                    paddingLeft: "40px",
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  IS HIERARACHY REPORTING IS REQUIRED ?
                </span>
              </CCol>
              <CCol lg={1}>
                <span>
                  <CInput
                    onClick={() => {
                      setAreporting(true);
                    }}
                    checked={areporting}
                    style={{ width: "15px", height: "15px" }}
                    name="administrativeReporting"
                    type={"radio"}
                    label="yes"
                  />
                  <CLabel
                    style={{
                      position: "relative",
                      left: "30px",
                      bottom: "20px",
                      fontSize: "16px",
                    }}
                  >
                    Yes
                  </CLabel>
                </span>
              </CCol>
              <CCol lg={1}>
                <CInput
                  onClick={() => {
                    setAreporting(false);
                  }}
                  checked={!areporting}
                  style={{ width: "15px", height: "15px" }}
                  name="administrativeReporting"
                  type={"radio"}
                />
                <CLabel
                  style={{
                    position: "relative",
                    left: "30px",
                    bottom: "20px",
                    fontSize: "16px",
                  }}
                >
                  No
                </CLabel>
              </CCol>
            </CRow>
          </div>

          <CRow style={{ paddingTop: "-17%", marginTop: "100px" }}>
            {areporting && (
              <CCol>
                <div>
                  <CCard className={"Administrative-card-container"}>
                    <CRow style={{ paddingTop: "2%", paddingLeft: "2%" }}>
                      <CCol md="12" className={"role-heading-1"}>
                        Administrative Reporting{" "}
                      </CCol>
                    </CRow>
                    <CRow
                      style={{
                        paddingTop: "10px",
                        paddingLeft: "2%",
                        paddingBottom: "10px",
                      }}
                    >
                      <CCol lg={6}>
                        <Label
                          style={{ fontSize: "16px", marginTop: "10px" }}
                          className={"role-heading-1"}
                        >
                          {" "}
                          Word Search
                        </Label>
                        <Select
                          onChange={(e) => {
                            let array = adminChange;
                            RoleList.map((x) => {
                              if (x._id !== e._id) {
                                array.push(x);
                              }
                              return 0;
                            });
                            setRoleList(array);
                            setAdminChange([e]);
                          }}
                          options={RoleList}
                        />
                      </CCol>
                    </CRow>

                    <CRow style={{ padding: "2%" }}>
                      <CCol md="12">
                        <div style={{ width: "100%", height: "110px" }}>
                          <AutoSizer>
                            {({ width, height }) => {
                              return (
                                <Table
                                  headerStyle={{ textTransform: "capitalize" }}
                                  rowStyle={{
                                    borderBottom: "1px solid lightgrey",
                                  }}
                                  width={width}
                                  height={height}
                                  headerHeight={50}
                                  rowHeight={50}
                                  rowCount={adminChange.length}
                                  overscanColumnCount={1}
                                  overscanRowCount={1}
                                  noContentRenderer={_noContentRenderer}
                                  rowGetter={({ index }) => adminChange[index]}
                                >
                                  <Column
                                    dataKey={"typeOfOfficeName"}
                                    label={"Type of Party Office"}
                                    width={200}
                                  />
                                  <Column
                                    dataKey={"departmentName"}
                                    label={"Department"}
                                    width={150}
                                  />
                                  <Column
                                    dataKey={"location"}
                                    label={"Party Office Location"}
                                    width={200}
                                  />
                                  <Column
                                    dataKey={"designationName"}
                                    label={"Designation"}
                                    width={210}
                                  />
                                  <Column
                                    dataKey={"roleName"}
                                    label={"Role"}
                                    width={120}
                                  />

                                  <Column
                                    dataKey={"_id"}
                                    label={"Actions"}
                                    cellRenderer={(row) => (
                                      <CRow>
                                        <CCol md="12">
                                          <i
                                            onClick={() => {
                                              setAdminChange([]);
                                              setRoleList([
                                                ...RoleList,
                                                ...adminChange,
                                              ]);
                                            }}
                                            className="fas fa-2x fa-times-circle indicator"
                                            style={{
                                              marginLeft: "12px",
                                            }}
                                          ></i>
                                        </CCol>
                                      </CRow>
                                    )}
                                    width={100}
                                  />
                                </Table>
                              );
                            }}
                          </AutoSizer>
                        </div>
                      </CCol>
                    </CRow>
                  </CCard>
                </div>
              </CCol>
            )}
          </CRow>
          <CRow style={{ marginBottom: "60px" }}>
            <CCol lg={"4"}>
              <span
                style={{
                  paddingLeft: "40px",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                IS FUNCTIONAL REPORTING IS REQUIRED ?
              </span>
            </CCol>
            <CCol lg={1}>
              <span>
                <CInput
                  onClick={() => {
                    setFreporting(true);
                  }}
                  checked={freporting}
                  style={{ width: "15px", height: "15px" }}
                  name="functionalReporting"
                  type={"radio"}
                  label="yes"
                />
                <CLabel
                  style={{
                    position: "relative",
                    left: "30px",
                    bottom: "20px",
                    fontSize: "16px",
                  }}
                >
                  Yes
                </CLabel>
              </span>
            </CCol>
            <CCol lg={1}>
              <CInput
                onClick={() => {
                  setFreporting(false);
                }}
                checked={!freporting}
                style={{ width: "15px", height: "15px" }}
                name="functionalReporting"
                type={"radio"}
              />
              <CLabel
                style={{
                  position: "relative",
                  left: "30px",
                  bottom: "20px",
                  fontSize: "16px",
                }}
              >
                No
              </CLabel>
            </CCol>
          </CRow>
          {freporting && (
            <CRow>
              <CCol>
                <CCard className={"functional-card-container"}>
                  <CRow style={{ paddingTop: "2%", paddingLeft: "2%" }}>
                    <CCol md="12" className={"role-heading-1"}>
                      Functional Reporting
                    </CCol>
                  </CRow>
                  <CRow
                    style={{
                      paddingTop: "10px",
                      paddingLeft: "2%",
                      paddingBottom: "10px",
                    }}
                  >
                    <CCol lg={6}>
                      <Label
                        style={{ fontSize: "16px", marginTop: "10px" }}
                        className={"role-heading-1"}
                      >
                        {" "}
                        Word Search
                      </Label>
                      <Select
                        onChange={(e) => {
                          console.log(e);
                          let data = functionChange.filter((x) => {
                            return x._id === e._id;
                          });
                          let datas = RoleList.filter((x) => {
                            return x._id !== e._id;
                          });
                          setRoleList(datas);
                          if (data.length === 0) {
                            setFunctionChange([...functionChange, e]);
                          }
                        }}
                        options={RoleList}
                      />
                    </CCol>
                  </CRow>
                  <CRow style={{ padding: "2%" }}>
                    <CCol md="12">
                      <div style={{ width: "100%", height: "110px" }}>
                        <AutoSizer>
                          {({ width, height }) => {
                            return (
                              <Table
                                headerStyle={{ textTransform: "capitalize" }}
                                rowStyle={{
                                  borderBottom: "1px solid lightgrey",
                                }}
                                width={width}
                                height={50 * functionChange.length + 50}
                                headerHeight={50}
                                rowHeight={50}
                                rowCount={functionChange.length}
                                overscanColumnCount={1}
                                overscanRowCount={1}
                                noContentRenderer={_noContentRenderer}
                                rowGetter={({ index }) => functionChange[index]}
                              >
                                <Column
                                  dataKey={"typeOfOfficeName"}
                                  label={"Type of Party Office"}
                                  width={200}
                                />
                                <Column
                                  dataKey={"departmentName"}
                                  label={"Department"}
                                  width={150}
                                />
                                <Column
                                  dataKey={"location"}
                                  label={"Party Office Location"}
                                  width={200}
                                />
                                <Column
                                  dataKey={"designationName"}
                                  label={"Designation"}
                                  width={210}
                                />
                                <Column
                                  dataKey={"roleName"}
                                  label={"Role"}
                                  width={120}
                                />

                                <Column
                                  dataKey={"_id"}
                                  label={"Actions"}
                                  cellRenderer={(row) => (
                                    <CRow>
                                      <CCol md="12">
                                        <i
                                          onClick={() => {
                                            let data = functionChange.filter(
                                              (x) => {
                                                return (
                                                  x._id !== row.rowData._id
                                                );
                                              }
                                            );
                                            setFunctionChange(data);
                                            setRoleList([
                                              ...RoleList,
                                              row.rowData,
                                            ]);
                                          }}
                                          className="fas fa-2x fa-times-circle indicator"
                                          style={{
                                            marginLeft: "12px",
                                          }}
                                        ></i>
                                      </CCol>
                                    </CRow>
                                  )}
                                  width={100}
                                />
                              </Table>
                            );
                          }}
                        </AutoSizer>
                      </div>
                    </CCol>
                  </CRow>
                </CCard>
              </CCol>
            </CRow>
          )}
          <CRow style={{ marginTop: "60px" }}>
            <div class="add">
              <CCol md="12">
                <CButton
                  shape={"pill"}
                  className={"saveBtn"}
                  onClick={roleCreation}
                >
                  Save
                </CButton>
              </CCol>
            </div>
          </CRow>
          <CRow style={{ paddingLeft: "85%" }}>
            <div class="adds">
              <CCol md="12">
                <CButton
                  shape={"pill"}
                  className={"cancelBtn"}
                  onClick={() => {
                    cancel();
                  }}
                >
                  {" "}
                  Back
                </CButton>
              </CCol>
            </div>
          </CRow>
        </React.Fragment>
      ) : (
        <CCard className={"EducationDetail-card-container"}>
          <CRow style={{ paddingTop: "2%", paddingLeft: "1%" }}>
            <CCol md="12" className={"educationdetail-heading"}>
              Roles
            </CCol>
          </CRow>

          <CModal
            arial-labelledby="contained-modal-title-right"
            style={{
              display: "flex",
              justifyContent: "left",
              width: "1200px",
              Height: "100px",
              right: "300px",
            }}
            show={primary}
            onClose={() => setPrimary(!primary)}
          >
            <CModalHeader
              closeButton
              style={{
                backgroundColor: "white",
                color: "black",
                display: "flex",
                width: "1200px",
                justifyContent: "left",
              }}
            >
              <CModalTitle>
                <span className={"font5"}> Hierarchy Chart of Roles</span>{" "}
                <span>
                  {" "}
                  <img
                    style={{
                      width: "40px",
                      height: "40px",
                      marginLeft: "390px",
                    }}
                    src={State}
                    alt={"logo"}
                  />{" "}
                </span>{" "}
                <br />
                <span className={"font6"}> State Bank of India</span>{" "}
              </CModalTitle>
            </CModalHeader>
            <CModalBody>
              <CRow className={"seperator-1"}>
                <CCol md="5">
                  <CLabel className={"form-labels-2"}>
                    Type of Office
                    <span className={"text-danger"}> *</span>
                  </CLabel>
                  <Select
                    placeholder={"Select Office Type"}
                    value={modalOfficeType}
                    onChange={handleModalOfficeType}
                    options={officeType}
                  />

                  {formik.errors.officetype &&
                  formik.values.officetype === "" ? (
                    <div className="text-danger">
                      {" "}
                      {formik.errors.officetype}
                    </div>
                  ) : null}
                </CCol>
                <CCol md="5">
                  <CLabel className={"form-labels-2"}>
                    Party Office Location <span className={"text-danger"}> *</span>
                  </CLabel>
                  <Select
                    placeholder={"Select Party Office Location"}
                    options={officeLocation}
                    value={modalOfficeLocation}
                    onChange={handleModalOfficeLocation}
                  />

                  {formik.errors.locationRole &&
                  formik.values.locationRole === "" ? (
                    <div className="text-danger">
                      {" "}
                      {formik.errors.locationRole}
                    </div>
                  ) : null}
                </CCol>
              </CRow>
              <CRow>
                <CCol>
                  <CLabel className={"form-labels-3"}>
                    <span style={{ color: "#3c3d73" }}>
                      ROLE HIERARACHY CHART OF
                    </span>

                    <span style={{ color: "#288bca" }}>
                      {modalOfficeType
                        ? modalOfficeLocation
                          ? `-${modalOfficeType.officeType},${modalOfficeLocation.area.areaName},${modalOfficeLocation.city.cityName}`
                          : " - No Reporting"
                        : ""}{" "}
                    </span>
                  </CLabel>
                </CCol>
              </CRow>
              {rolehierarchy.roleName ? (
                <HierarchyChart datasource={rolehierarchy} />
              ) : null}
            </CModalBody>
          </CModal>

          <CRow style={{ padding: "15px" }}>
            <CCol md="10">
              <CButton
                color={"primary"}
                shape={"pill"}
                className={"btn btn-btn-primary"}
                style={{ position: "relative", right: "-8px" }}
                onClick={() => {
                  setView(false);
                }}
              >
                + ADD
              </CButton>
            </CCol>
            <CCol md="2" style={{ paddingLeft: "10px", marginBottom: "20px" }}>
              <CRow>
                <CCol style={{ paddingTop: "15px" }}>
                  <img
                    src={
                      "https://img.icons8.com/fluent/2x/organization-chart-people.png"
                    }
                    style={{
                      height: "40px",
                      width: "40px",
                      marginLeft: "62px",
                      marginBottom: "-100px",
                    }}
                    onClick={() => setPrimary(!primary)}
                  />
                </CCol>
              </CRow>
            </CCol>
          </CRow>
          <CRow style={{ padding: "3%", paddingLeft: "2%" }}>
            <CCol>
              <CDataTable
                size={"1500px"}
                items={roleListPaginate}
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
                                updatoRole(roleListPaginate[index])
                              }
                              className="fas fa-edit"
                            ></i>
                            <i
                              onClick={() =>
                                deletemodal(roleListPaginate[index]._id)
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
      )}
      <ToastContainer autoClose={1500}></ToastContainer>
    </div>
  );
}

export default Reporting;
