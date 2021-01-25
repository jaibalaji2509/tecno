import React, { useState, useContext, useEffect } from "react";
import {
  AutoSizer,
  Table,
  Column,
} from "react-virtualized";
// import "../suspend/node_modules/react-virtualized/styles.css";
import {
  CRow,
  CCard,
  CCol,
  CButton,
  CForm,
  CLabel,
} from "@coreui/react";
import { useFormik } from "formik";
import * as yup from "yup";
import "./Role.css";
import Select,{components}from "react-select";
import {
  getOfficeType,
  getByOfficeLocation,
  getRoleByDesignation,
  getOneRole,
  getAllRole,
} from "../../../services/ApiService";
import { EmployeeContext } from "../../../services/EmployeeContext";
function Role(props) {
  const [state, setState] = useContext(EmployeeContext);
  const [updateValue, setUpdateValue] = useState({});

  const [posts, setPost] = useState([]);
  const [department, setDepartment] = useState([]);
  const [location, setOfficeLocation] = useState([]);
  const [desigination, setdesigination] = useState([]);

  const [RoleList, setRoleList] = useState([]);
  const [selected, setSelected] = useState({});
  const [selectedAdmin, setSelectedAdmin] = useState([]);
  const [selectedFunction, setSelectedFunction] = useState([]);

  // console.log(state, );

  const _noContentRenderer = () => {
    return <div>No Office types.</div>;
  };

  const formik = useFormik({
    initialValues: {
      typeOfOffice: "",
      departmentRole: "",
      locationRole: "",
      designationRole: "",
      reportingRole: "",
    },
    validationSchema: yup.object({
      typeOfOffice: yup.string().required("Office Type Required"),
      departmentRole: yup.string().required("Department Required"),
      locationRole: yup.string().required("Office Location Required"),
      designationRole: yup.string().required("Designation Required"),
      reportingRole: yup.string().required("Role Required"),
    }),
    onSubmit: (userInputData) => {
      console.log(userInputData);
    },
  });

  useEffect(() => {
    async function getAllOfficeType() {
      var response;
      // let body = formik.values
      try {
        response = await getOfficeType();

        if (response) {
          if (response.OfficeTypes) {
            let array = [];
            response.OfficeTypes.map((x) => {
              x.value = x;
              x.label = x.officeType;
              array.push(x);
            });
            setPost(array);
            // console.log(array,"array");
          }
        }
      } catch (e) {
        console.log(e);
      }
    }

    getAllOfficeType();
  }, []);

  

  const getDesignations = async (id) => {
    console.log(id, "value");
    if (state._id) {
      updateValue.departmentRole = id;
    } else {
      formik.values.departmentRole = id;
    }
    formik.values.designationRole = "";
    formik.values.reportingRole = "";
    setdesigination([]);
    setRoleList([]);
    setSelected([]);
    setSelectedAdmin([]);
    setSelectedFunction([]);
    var responseP;
    try {
      responseP = await getAllRole(`department=${id._id}`);
      console.log("designation", responseP);

      if (responseP) {
        if (responseP.data) {
          let array = [];
          let newArray = [];
          responseP.data.map((x) => {
            x.designation.value = x.designation;
            x.designation.label = x.designation.name;
            if (!newArray.includes(x.designation._id)) {
              array.push(x.designation);
              newArray.push(x.designation._id);
            }
            return 0;
          });
          setdesigination(array);
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  const getOfficeLocation = async (id) => {
    console.log(id);
    setOfficeLocation([]);
    setDepartment([]);
    setdesigination([]);
    setSelectedFunction([]);
    setSelectedAdmin([]);
    setSelected([]);
    setRoleList([]);
    if (state._id) {
      updateValue.typeOfOffice = id;
      updateValue.locationRole = "";
      updateValue.departmentRole = "";
      updateValue.designationRole = "";
      updateValue.reportingRole = "";
    } else {
      formik.values.typeOfOffice = id;
      formik.values.locationRole = "";
      formik.values.departmentRole = "";
      formik.values.designationRole = "";
      formik.values.reportingRole = "";
    }
    setOfficeLocation([]);
    try {
      const responseO = await getByOfficeLocation(id._id);
      if (responseO) {
        console.log(responseO.OfficeLocation, "testing");
        let arrayValue = [];
        responseO.OfficeLocation.map((x) => {
          x.officeLocationName = x.locationName;
          arrayValue.push({
            label: `${x.state.stateName}, ${x.city.cityName}, ${x.area.areaName} - ${x.pincode}`,
            value: x._id,
            locationName: x.locationName
          });
          return 0;
        });
        console.log(arrayValue);
        setOfficeLocation(arrayValue);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const getDepartment = async (id) => {
    console.log(id, "value");
    if (state._id) {
      updateValue.locationRole = id;
    } else {
      formik.values.locationRole = id;
    }
    setdesigination([]);
    setSelectedFunction([]);
    setSelectedAdmin([]);
    setSelected([]);
    setRoleList([]);
    formik.values.departmentRole = "";
    formik.values.designationRole = "";
    formik.values.reportingRole = "";
    setDepartment([]);
    try {
      const Departments = await getAllRole(`officeLocation=${id.value}`);
      if (Departments) {
        if (Departments.data) {
          let array = [];
          let newArray = [];
          Departments.data.map((x) => {
            x.department.value = x.department;
            x.department.label = x.department.name;
            if (!newArray.includes(x.department._id)) {
              array.push(x.department);
              newArray.push(x.department._id);
            }
            return 0;
          });
          setDepartment(array);
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  const getRoles = async (id) => {
    let query;
    if (state._id) {
      setUpdateValue({ ...updateValue, designationRole: id });
      query = `designation=${id._id}&department=${updateValue.departmentRole._id}&officeLocation=${updateValue.locationRole.value}&typeOfOffice=${updateValue.typeOfOffice._id}`;
    } else {
      formik.values.designationRole = id;
      formik.values.reportingRole = "";
      query = `designation=${id._id}&department=${formik.values.departmentRole._id}&officeLocation=${formik.values.locationRole.value}&typeOfOffice=${formik.values.typeOfOffice._id}`;
    }
    setSelectedFunction([]);
    setSelectedAdmin([]);
    setSelected([]);
    try {
      const roleData = await getRoleByDesignation(query);
      if (roleData) {
        if (roleData.data) {
          let array = [];
          roleData.data.map((x) => {
            x.value = x._id;
            x.label = x.roleName;
            array.push(x);
            return 0;
          });
          setRoleList(array);
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  console.log(location, "offices");

  const setRoleDatas = async (data) => {
    setSelectedAdmin([]);
    setSelectedFunction([]);
    if (state._id) {
      updateValue.reportingRole = data;
    } else {
      formik.values.reportingRole = data;
    }
    setState({ ...state, employeeRole: data._id });
    try {
      const oneRole = await getOneRole(data._id);
      if (oneRole) {
        if (oneRole.data) {
          setSelected(oneRole.data);
          if (oneRole.data.administativeReporting) {
            setSelectedAdmin([oneRole.data.administativeReporting]);
          }
          if (oneRole.data.functionalReporting) {
            console.log(
              oneRole.data.functionalReporting,
              "roleessssssssssssssssssss"
            );
            oneRole.data.functionalReporting.map((x) => {
              x.typeOfOfficeName = x.typeOfOffice.officeType;
              x.departmentName = x.department.name;
              x.designationName = x.designation.name;
              x.roleName = x.role.roleName;
              x.officeLocationName = `${x.officeLocation.state.stateName}, ${x.officeLocation.city.cityName}, ${x.officeLocation.area.areaName}`;
              return 0;
            });
            setSelectedFunction(oneRole.data.functionalReporting);
          }
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    selectedAdmin.map((x) => {
      x.typeOfOfficeName = x.typeOfOffice.officeType;
      x.departmentName = x.department.name;
      x.designationName = x.designation.name;
      x.roleName = x.role.roleName;
      x.officeLocationName = `${x.officeLocation.state.stateName}, ${x.officeLocation.city.cityName}, ${x.officeLocation.area.areaName}`;
      // console.log(x, "  Test By Sridhar");
      return 0;
    });
    if (selectedFunction.length > 0) {
      selectedFunction.map((x) => {
        // x.typeOfOfficeName = x.typeOfOffice.officeType;
        console.log(x, "let array = [];");
        return 0;
      });
    }
  }, [selectedAdmin]);

  const Employee = async () => {
    // let data = { ...state, employeeRole: formik.values.reportingRole._id };
    // await setState(data);
    // console.log(formik.values);
    // await props.value(formik.values);
    // console.log(state,formik.values,"reporting");
    formik.handleReset();
    // window.location.pathname = ('/tabslist#Address')
    await props.onActive("FamilyDetails");
  };

  const isEnabled =
    formik.values.typeOfOffice &&
    formik.values.departmentRole &&
    formik.values.designationRole &&
    formik.values.locationRole &&
    formik.values.reportingRole;

  const editIsEnable =
    updateValue.typeOfOffice &&
    updateValue.departmentRole &&
    updateValue.designationRole &&
    updateValue.locationRole &&
    updateValue.reportingRole;

  useEffect(() => {
    if (state._id) {
      if (state.employeeRole) {
        if (state.employeeRole._id) {
          getOfficeLocation({ _id: state.employeeRole.typeOfOffice._id });
          setUpdateValue({
            ...updateValue,
            typeOfOffice: {
              ...state.employeeRole.typeOfOffice,
              value: state.employeeRole.typeOfOffice,
              label: state.employeeRole.typeOfOffice.officeType,
            },
            locationRole: {
              ...state.employeeRole.officeLocation,
              value: state.employeeRole.officeLocation._id,
              label: `${state.employeeRole.officeLocation.state.stateName}, ${state.employeeRole.officeLocation.city.cityName}, ${state.employeeRole.officeLocation.area.areaName} - ${state.employeeRole.officeLocation.area.pincode}`,
            },
            departmentRole: {
              ...state.employeeRole.department,
              value: state.employeeRole.department,
              label: state.employeeRole.department.name,
            },
            designationRole: {
              ...state.employeeRole.designation,
              value: state.employeeRole.designation,
              label: state.employeeRole.designation.name,
            },
            reportingRole: {
              ...state.employeeRole,
              label: state.employeeRole.roleName,
              value: state.employeeRole._id,
            },
          });
        }
      }
    }
  }, []);
  const Option = props => {
    return (
      <div style={{ display: "block" }}>
        <components.Option {...props} >
        <p style={{marginBottom: '0px'}}>{props.data.locationName}</p>
          <p style={{marginBottom: '0px'}}>{props.data.label}</p>
        </components.Option>
      </div>
    );
  };
  return (
    <div>
      <div style={{ padding: "2%" }}>
        <CCard className={"reporting-card-container"}>
          <CRow
            style={{
              padding: "10px",
              paddingLeft: "20px",
              paddingRight: "20px",
            }}
          >
            <CCol md="12" className={"reporting-heading"}>
              Party Member Role
            </CCol>
          </CRow>

          <CForm autoComplete="off" onSubmit={formik.handleSubmit}>
            <CRow
              style={{
                padding: "10px",
                paddingLeft: "20px",
                paddingRight: "20px",
              }}
            >
              <CCol
                style={{
                  padding: "10px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                }}
              >
                <CRow md="4" className={"seperator-report"}>
                  <CCol md="5">
                    <CLabel className={"form-labels-6"}>Type of Party Office 
                    <span className={"text-danger"}> *</span></CLabel>
                    <Select
                      placeholder="Select Office"
                      value={
                        updateValue.typeOfOffice
                          ? updateValue.typeOfOffice
                          : formik.values.typeOfOffice
                      }
                      options={posts}
                      onChange={(e) => {
                        getOfficeLocation(e);
                        console.log(e);
                      }}
                    ></Select>
                  </CCol>

                  <CCol md="5">
                    <CLabel className={"form-labels-6"}>
                      Party Office Location 
                      <span className={"text-danger"}> *</span>
                    </CLabel>
                    <Select
                      placeholder="Select Location"
                      value={
                        updateValue.locationRole
                          ? updateValue.locationRole
                          : formik.values.locationRole
                      }
                      options={location}
                      components={{ Option }}
                      onChange={(e) => {
                        getDepartment(e);
                        console.log(e);
                      }}
                    ></Select>
                  </CCol>
                </CRow>

                <CRow md="5" className={"seperator-report"}>
                  <CCol md="5">
                    <CLabel className={"form-labels-6"}>Department 
                    <span className={"text-danger"}> *</span></CLabel>
                    <Select
                      placeholder="Select Department"
                      value={
                        updateValue.departmentRole
                          ? updateValue.departmentRole
                          : formik.values.departmentRole
                      }
                      options={department}
                      onChange={(e) => {
                        getDesignations(e);
                        console.log(e);
                      }}
                    ></Select>
                  </CCol>

                  <CCol md="5">
                    <CLabel className={"form-labels-6"}>Designation 
                    <span className={"text-danger"}> *</span></CLabel>
                    <Select
                      placeholder="Select Designation"
                      value={
                        updateValue.designationRole
                          ? updateValue.designationRole
                          : formik.values.designationRole
                      }
                      options={desigination}
                      onChange={(e) => {
                        getRoles(e);
                        console.log(e);
                      }}
                    ></Select>
                  </CCol>
                </CRow>

                <CRow className={"seperator-report"}>
                  <CCol md="5">
                    <CLabel className={"form-labels-6"}>Role 
                    <span className={"text-danger"}> *</span></CLabel>
                    <Select
                      placeholder="Select Role"
                      value={
                        updateValue.reportingRole
                          ? updateValue.reportingRole
                          : formik.values.reportingRole
                      }
                      options={RoleList}
                      onChange={(e) => {
                        setRoleDatas(e);
                        console.log(e);
                      }}
                    ></Select>
                  </CCol>
                </CRow>

                <CCol md="10"></CCol>
              </CCol>
            </CRow>
            {/* 
                        <CRow  >
                            <div class="centerd-1">
                                <CCol md='12'><CButton shape={'pill'} className={'btnShadow blueColor-btn'} onClick={formik.handleSubmit}>+ Create</CButton></CCol>
                            </div>
                        </CRow> */}
          </CForm>
          {selectedAdmin.length !== 0 ? (
            <div style={{ paddingTop: "-17%" }}>
              <React.Fragment>
                <CRow style={{ paddingTop: "2%", paddingLeft: "2%" }}>
                  <CCol md="12" className={"reporting-heading"}>
                    Administrative Reporting{" "}
                  </CCol>
                </CRow>

                <CRow style={{ padding: "2%" }}>
                  <CCol md="12">
                    <div style={{ width: "100%", height: "200px" }}>
                      <AutoSizer>
                        {({ width, height }) => {
                          return (
                            <Table
                              headerStyle={{ textTransform: "capitalize" }}
                              rowStyle={{ borderBottom: "1px solid lightgrey" }}
                              width={width}
                              height={height}
                              headerHeight={50}
                              rowHeight={50}
                              rowCount={selectedAdmin.length}
                              //    sort={_sort}
                              //    sortBy={sortBy}
                              overscanColumnCount={1}
                              overscanRowCount={1}
                              noContentRenderer={_noContentRenderer}
                              //    sortDirection={sortDirection}
                              rowGetter={({ index }) => selectedAdmin[index]}
                            >
                              <Column
                                dataKey={"typeOfOfficeName"}
                                label={"Type of Party Office"}
                                width={200}
                              />
                              <Column
                                dataKey={"officeLocationName"}
                                label={"Party Office Location"}
                                width={200}
                              />
                              <Column
                                dataKey={"departmentName"}
                                label={"Department"}
                                width={200}
                              />

                              <Column
                                dataKey={"designationName"}
                                label={"Designation"}
                                width={200}
                              />
                              {/* <Column
                          dataKey={"office"}
                          label={"Office Name"}
                          width={200}
                        /> */}
                              <Column
                                dataKey={"roleName"}
                                label={"Role"}
                                width={200}
                              />

                              <Column
                                dataKey={"_id"}
                                label={"Actions"}
                                cellRenderer={(row) => (
                                  <CRow>
                                    <div>
                                      <CCol
                                        style={{ fontSize: "1.15rem" }}
                                        md="12"
                                      >
                                        <i
                                          style={{
                                            marginRight: "5px",
                                            color: "#3480e2",
                                          }}
                                          onClick={() => row.rowData._id}
                                          class="fas fa-edit"
                                        ></i>
                                        <i
                                          onClick={() => row.rowData._id}
                                          style={{
                                            marginLeft: "5px",
                                            color: "#e85654",
                                          }}
                                          class="fas fa-trash"
                                        ></i>
                                      </CCol>
                                    </div>
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
                <CRow
                  style={{
                    padding: "2%",
                    paddingLeft: "5%",
                    paddingTop: "0%",
                    paddingRight: "5%",
                  }}
                ></CRow>
                <CRow
                  style={{
                    padding: "2%",
                    paddingLeft: "5%",
                    paddingTop: "0%",
                    paddingRight: "5%",
                  }}
                >
                  <CCol md="9"></CCol>
                  {/* {/ <CCol md='3'><CButton shape={'pill'} className={'btnShadow blueColor-btn'} onClick={enableCreate}>+ Create Reporting</CButton></CCol> /} */}
                </CRow>
              </React.Fragment>
            </div>
          ) : null}
          <div>
            {selectedFunction.length !== 0 ? (
              <React.Fragment>
                <CRow style={{ paddingTop: "2%", paddingLeft: "2%" }}>
                  <CCol md="12" className={"reporting-heading"}>
                    Functional Reporting{" "}
                  </CCol>
                </CRow>
                <CRow style={{ padding: "2%" }}>
                  <CCol md="12">
                    <div style={{ width: "100%", height: "200px" }}>
                      <AutoSizer>
                        {({ width, height }) => {
                          return (
                            <Table
                              headerStyle={{ textTransform: "capitalize" }}
                              rowStyle={{ borderBottom: "1px solid lightgrey" }}
                              width={width}
                              height={height}
                              headerHeight={50}
                              rowHeight={50}
                              rowCount={selectedFunction.length}
                              //    sort={_sort}
                              //    sortBy={sortBy}
                              overscanColumnCount={1}
                              overscanRowCount={1}
                              noContentRenderer={_noContentRenderer}
                              //    sortDirection={sortDirection}
                              rowGetter={({ index }) => selectedFunction[index]}
                            >
                              <Column
                                dataKey={"typeOfOfficeName"}
                                label={"Type of Office"}
                                width={200}
                              />
                              <Column
                                dataKey={"officeLocationName"}
                                label={"Office Location"}
                                width={200}
                              />
                              <Column
                                dataKey={"departmentName"}
                                label={"Department"}
                                width={200}
                              />

                              <Column
                                dataKey={"designationName"}
                                label={"Designation"}
                                width={200}
                              />
                              {/* <Column
                          dataKey={"office"}
                          label={"Office Name"}
                          width={200}
                        /> */}
                              <Column
                                dataKey={"roleName"}
                                label={"Role"}
                                width={200}
                              />

                              <Column
                                dataKey={"_id"}
                                label={"Actions"}
                                cellRenderer={(row) => (
                                  <CRow>
                                    <div>
                                      <CCol
                                        style={{ fontSize: "1.15rem" }}
                                        md="12"
                                      >
                                        <i
                                          style={{
                                            marginRight: "5px",
                                            color: "#3480e2",
                                          }}
                                          onClick={() => row.rowData._id}
                                          class="fas fa-edit"
                                        ></i>
                                        <i
                                          onClick={() => row.rowData._id}
                                          style={{
                                            marginLeft: "5px",
                                            color: "#e85654",
                                          }}
                                          class="fas fa-trash"
                                        ></i>
                                      </CCol>
                                    </div>
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
              </React.Fragment>
            ) : null}
            <CRow>
              <div class="add">
                <CCol md="12">
                  <CButton
                    shape={"pill"}
                    className={"saveBtn"}
                    disabled={
                      !isEnabled === false && editIsEnable === false
                        ? true
                        : false
                    }
                    onClick={Employee}
                  >
                    Next
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
                      props.onActive("AddEmployee");
                    }}
                  >
                    {" "}
                    Back
                  </CButton>
                </CCol>
              </div>
            </CRow>

            
          </div>
        </CCard>
      </div>
    </div>
  );
}

export default Role;
