import React, { useState, useContext, useEffect } from "react";
import {
  CRow,
  CCol,
  CButton,
  CForm,
  CSelect,
  CLabel,
  CInput,
} from "@coreui/react";
import { AutoSizer, Table, Column } from "react-virtualized";
import Edit from "../../images/image 2.svg";
import Remove from "../../images/image 15.svg";
// import { useSnackbar } from 'notistack'
// import { useFormik } from 'formik'
// import * as yup from 'yup'
import { Card } from "@material-ui/core";
// import { GlobalContext } from '../../../services/GlobalContext'
import { AuthContext } from "../../../services/auth/AuthContext";
// import "../suspend/node_modules/react-virtualized/styles.css";
import { Checkbox } from "semantic-ui-react";
import Select from "react-select";
// import ImageUploading from "react-images-uploading";
import "react-virtualized/styles.css";
import "./Transfer.css";
import {
  getAllDepartment,
  getAllRole,
  getAllDesignation,
  getOfficeLocation,
  getOfficeType,
  addPromoteEmployee,
  getFutureJob,
  updateEmployeeMovement,
} from "../../../services/ApiService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// const { elements } = this.props;
// const { filterStr } = this.state;

const AddTransferEmployee = (props) => {
  const [checked, setChecked] = useState([]);
  const [allRoles, setAllRoles] = useState([]);
  const [listData, setListData] = useState([]);

  const [filter, setFilter] = useState([]);

  const [selected, setSelected] = useState({});

  const [updateDetails, setUpdateDetails] = useState("");

  const [roleList, setRoleList] = useState([]);
  const [roleOption, setRoleOption] = useState([]);

  const [relieving, setRelieving] = useState("");
  const [relievingError, setRelievingError] = useState("");

  const [joining, setJoining] = useState("");
  const [joiningError, setJoiningError] = useState("");

  const [office, setOffice] = useState("");

  const [description, setDescription] = useState("");

  const [final, setFinal] = useState([]);

  // const [allRole, setAllRole] = useState([]);

  const [vacancy, setvacancy] = useState("");

  // const global = useContext(GlobalContext)
  // const auth = useContext(AuthContext);

  const _noContentRenderer = () => {
    return <div>No Office types.</div>;
  };

  const onChangeRowCheckbox = (data) => {
    const newRow = final[data.index]._id;
    if (checked.includes(newRow)) {
      let data = checked.filter((id) => {
        return id !== newRow;
      });
      setChecked(data);
    } else {
      setChecked([newRow]);
    }
    console.log(checked);
  };

  const fileChangedHandler = (event) => {
    // const file = event.target.files[0];
  };

  useEffect(() => {
    if (props.date !== {}) {
      if (props.data.roleId) {
        setSelected({
          ...props.data.roleId,
          assignedTo: props.data.employeeId,
        });
        setUpdateDetails(props.data._id);
        setChecked([props.data.toRoleId._id]);
        setRelieving(props.data.dor);
        setJoining(props.data.doj);
      }
    }
  }, []);

  useEffect(() => {
    const modifyData = async () => {
      const array = allRoles;
      let data = [];
      let existing = [];
      if (vacancy === "" || vacancy === "UnAllocatedRoles") {
        try {
          const roleResponse = await getAllRole(
            `assigned=false&${office}=${description}&typeOfOffice=${selected.typeOfOffice._id}`
          );
          if (roleResponse) {
            if (roleResponse.data) {
              roleResponse.data.map((x) => {
                if (!existing.includes(x._id)) {
                  data.push(x);
                  existing.push(x._id);
                }
              });
            }
          }
        } catch (e) {
          console.log(e);
        }
      }
      if (
        vacancy === "" ||
        vacancy === "FuturePromotion" ||
        vacancy === "FutureTerminate" ||
        vacancy === "FutureTransfer"
      ) {
        let que = `${office}=${description}&typeOfOffice=${selected.typeOfOffice._id}`;
        if (vacancy === "FuturePromotion") {
          que = `${que}&movementType=P`;
        }
        if (vacancy === "FutureTerminate") {
          que = `${que}&movementType=TE`;
        }
        if (vacancy === "FutureTransfer") {
          que = `${que}&movementType=TR`;
        }
        try {
          const futureJob = await getFutureJob(que);
          if (futureJob) {
            if (futureJob.data) {
              futureJob.data.map((x) => {
                if (!existing.includes(x.roleId._id)) {
                  data.push(x.roleId);
                  existing.push(x.roleId._id);
                }
              });
            }
          }
        } catch (e) {
          console.log(e);
        }
      }
      setFilter(data)
      // console.log(data,"datas");
    };

    if(selected._id){
      modifyData();
    }

  }, [description]);

  const onChangeOffice = (event) => {
    const office = event.target.value;
    // console.log(name)
    if (office === "" || office.length < 2) {
      setOffice(office);
      setDescription("");
      setListData([]);
      setRoleList(allRoles);
    } else {
      setOffice(office);
    }
  };

  const onChangeReliving = (event) => {
    const office = event.target.value;
    // console.log(name)
    if (office === "" || office.length < 2) {
      setRelievingError("Please enter at least 3 characters");
    } else {
      setRelieving(office);
      setRelievingError(null);
    }
  };

  const onChangeJoining = (event) => {
    const office = event.target.value;
    // console.log(name)
    if (office === "" || office.length < 2) {
      setJoiningError("Please enter at least 3 characters");
    } else {
      setJoining(office);
      setJoiningError(null);
    }
  };

  const promoteEmployee = async () => {
    console.log(updateDetails, "id");
    if (updateDetails === "" || updateDetails === undefined) {
      if (
        selected === {} ||
        relieving === "" ||
        joining === "" ||
        checked.length === 0
      ) {
        return toast("Please provoid the details.");
      }
      let data = {
        movementType: "TR",
        employeeId: selected.assignedTo._id,
        roleId: selected._id,
        dor: relieving,
        doj: joining,
        toRoleId: checked[0],
      };
      console.log(data);
      try {
        const datas = await addPromoteEmployee(data);
        if (datas) {
          if (datas.success) {
            toast.success(datas.mssage)
            setTimeout(()=>{
              props.change();
            },3000)
            setSelected({});
            setRelieving("");
            setJoining("");
            setChecked([]);
          }
        }
      } catch (e) {
        toast.error(e);
        console.log(e);
      }
    } else {
      if (
        selected === {} ||
        relieving === "" ||
        joining === "" ||
        checked.length === 0
      ) {
        return toast("Please provoid the details.");
      }
      let data = {
        id: updateDetails,
        dor: relieving,
        doj: joining,
        toRoleId: checked[0],
      };
      console.log(data);
      try {
        const datas = await updateEmployeeMovement(data);
        if (datas) {
          if (datas.data) {
            toast.success(datas.message);
            setTimeout(()=>{
              props.change();
            },3000)
            setSelected({});
            setRelieving("");
            setJoining("");
            setChecked([]);
          }
        }
      } catch (e) {
        toast.error(e);
        console.log(e);
      }
    }
  };

  const onChangedescription = (event) => {
    const description = event.target.value;
    console.log(description);
      setDescription(description);
  };

  const onChangeVacancy = (event) => {
    const vacancy = event.target.value;
    console.log(vacancy);
      setvacancy(vacancy);
  };

  useEffect(() => {
    if (office === "typeOfOffice") {
      const getAllTypeOfOffice = async () => {
        try {
          const typeOfOffice = await getOfficeType();
          if (typeOfOffice) {
            if (typeOfOffice.OfficeTypes) {
              setListData(typeOfOffice.OfficeTypes);
            }
          }
        } catch (e) {
          console.log(e);
        }
      };
      getAllTypeOfOffice();
    }
    if (office === "department") {
      const getDepartment = async () => {
        try {
          const department = await getAllDepartment();
          if (department) {
            if (department.department) {
              setListData(department.department);
            }
          }
        } catch (e) {
          console.log(e);
        }
      };
      getDepartment();
    }
    if (office === "officeLocation") {
      const getLocation = async () => {
        try {
          const location = await getOfficeLocation();
          if (location) {
            if (location.OfficeLocation) {
              setListData(location.OfficeLocation);
            }
          }
        } catch (e) {
          console.log(e);
        }
      };
      getLocation();
    }
    if (office === "designation") {
      const getDesignation = async () => {
        try {
          const designation = await getAllDesignation();
          if (designation) {
            if (designation.data) {
              setListData(designation.data);
            }
          }
        } catch (e) {
          console.log(e);
        }
      };
      getDesignation();
    }
    if (office === "_id") {
      const getRole = async () => {
        try {
          const roles = await getAllRole();
          if (roles) {
            if (roles.data) {
              setListData(roles.data);
            }
          }
        } catch (e) {
          console.log(e);
        }
      };
      getRole();
    }
  }, [office]);

  const MIN_TABLE_WIDTH = 1800;

  useEffect(() => {
    const modifyData = async () => {
      let data = [];
      let existing = [];
      try {
        const roleResponse = await getAllRole(`assigned=false&typeOfOffice=${selected.typeOfOffice._id}`);
        if (roleResponse) {
          if (roleResponse.data) {
            roleResponse.data.map((x) => {
              if (!existing.includes(x._id)) {
                data.push(x);
                existing.push(x._id);
              }
            });
          }
        }
      } catch (e) {
        console.log(e);
      }
      try {
        const futureJob = await getFutureJob(`typeOfOffice=${selected.typeOfOffice._id}`);
        if (futureJob) {
          if (futureJob.data) {
            futureJob.data.map((x) => {
              if (!existing.includes(x.roleId._id)) {
                data.push(x.roleId);
                existing.push(x.roleId._id);
              }
            });
          }
        }
      } catch (e) {
        console.log(e);
      }
      setRoleList(data);
      setAllRoles(data);
      // console.log(data,"datas");
    };

    if(selected._id){
      modifyData();
    }

  }, [selected]);

  useEffect(() => {
    let arrays = [];
    roleList.map((x) => {
      x.typeOfOfficeName = x.typeOfOffice.officeType;
      x.locationName = `${x.officeLocation.state.stateName}, ${x.officeLocation.city.cityName}, ${x.officeLocation.area.areaName}`;
      x.departmentName = x.department.name;
      x.designationName = x.designation.name;
      // x.employeeName = x.assignedTo.firstName;
      arrays.push(x);
      return 0;
    });
    setFinal(arrays);
  }, [roleList]);

  useEffect(() => {
    const getAllRoles = async () => {
      try {
        const roleResponseA = await getAllRole("assigned=true");
        if (roleResponseA) {
          if (roleResponseA.data) {
            roleResponseA.data.map((x) => {
              x.label = `${x.typeOfOffice.officeType}, ${x.officeLocation.state.stateName}, ${x.officeLocation.city.cityName}, ${x.officeLocation.area.areaName}, ${x.department.name}, ${x.designation.name}, ${x.roleName} - ${x.assignedTo.firstName}`;
              x.value = x;
              return 0;
            });
            setRoleOption([...roleResponseA.data]);
          }
        }
      } catch (e) {
        console.log(e);
      }
    };
    getAllRoles();
  }, []);

  return (
    <div>
      <Card className={"Role-card-container-2"}>
        <CRow
          style={{ padding: "10px", paddingLeft: "20px", paddingRight: "20px" }}
        >
          <CCol md="12" className={"role-heading-2"}>
            Transfer From{" "}
          </CCol>
        </CRow>

        <CRow className={"role-form-container-3"}>
          <CCol md="5">
            <CLabel className={"form-labels-3"}>Search </CLabel>
            <Select
              onChange={(e) => {
                if (updateDetails !== "") {
                  return toast("Cannot update from role!");
                }
                setSelected(e);
              }}
              placeholder={"select Party Member"}
              options={roleOption}
            />
          </CCol>
        </CRow>

        <CForm autoComplete="off">
          <CRow className={"role-form-container-3"}>
            <CCol md="12" lg="12" sm="12">
              <CRow className={"seperator-2"}>
                <CCol className={"image-12"}>
                  <img
                    type="text"
                    src={
                      selected.assignedTo
                        ? selected.assignedTo.profileImage
                        : ""
                    }
                    style={{
                      width: "150px",
                      height: "160px",
                      position: "relative",
                      right: "15px",
                    }}
                  />
                  <h6
                    style={{
                      width: "100%",
                      textAlign: "center",
                      paddingTop: "10px",
                      position: 'relative',
                      top:selected.assignedTo?'0px': "-90px"
                    }}
                  >
                    {
                      selected.assignedTo
                        ? selected.assignedTo.profileImage? "Profile Image": "No Image"
                        : "No Image"
                    }
                  </h6>
                </CCol>
              </CRow>
              <CRow className={"seperator-3"}>
                <CCol md="5">
                  <CLabel className={"form-labels-3"}>
                    Name of the Party Member{" "}
                  </CLabel>
                  <br />
                  <CLabel
                    className={"form-labels-3"}
                    style={{ color: "#424c6190" }}
                  >
                    {selected.assignedTo
                      ? selected.assignedTo.firstName
                      : "Enter Party Member Details"}
                  </CLabel>
                </CCol>
              </CRow>

              <CRow className={"seperator-3"}>
                <CCol md="5">
                  <CLabel className={"form-labels-3"}>
                    D.C.C Description{" "}
                  </CLabel>
                  <br />
                  <CLabel
                    className={"form-labels-3"}
                    style={{ color: "#424c6190" }}
                  >
                    {selected.dccDescription
                      ? selected.dccDescription
                      : "Enter DCC Description"}
                  </CLabel>
                </CCol>

                <CCol md="5">
                  <CLabel className={"form-labels-3"}>Department </CLabel>
                  <br />
                  <CLabel
                    className={"form-labels-3"}
                    style={{ color: "#424c6190" }}
                  >
                    {selected.department
                      ? selected.department.name
                      : "Enter Department Details"}
                  </CLabel>
                </CCol>
              </CRow>

              <CRow className={"seperator-3"}>
                <CCol md="5">
                  <CLabel className={"form-labels-3"}>D.C.C ID </CLabel>
                  <br />
                  <CLabel
                    className={"form-labels-3"}
                    style={{ color: "#424c6190" }}
                  >
                    {selected.dccId ? selected.dccId : "Enter DCC ID"}
                  </CLabel>
                </CCol>

                <CCol md="5">
                  <CLabel className={"form-labels-3"}>Desigination </CLabel>
                  <br />
                  <CLabel
                    className={"form-labels-3"}
                    style={{ color: "#424c6190" }}
                  >
                    {selected.designation
                      ? selected.designation.name
                      : "Enter Designation Details"}
                  </CLabel>
                </CCol>
              </CRow>

              <CRow className={"seperator-3"}>
                <CCol md="5">
                  <CLabel className={"form-labels-3"}>Type of Party Office </CLabel>
                  <br />
                  <CLabel
                    className={"form-labels-3"}
                    style={{ color: "#424c6190" }}
                  >
                    {selected.typeOfOffice
                      ? selected.typeOfOffice.officeType
                      : "Enter Office Type"}
                  </CLabel>
                </CCol>

                <CCol md="5">
                  <CLabel className={"form-labels-3"}>Role </CLabel>
                  <br />
                  <CLabel
                    className={"form-labels-3"}
                    style={{ color: "#424c6190" }}
                  >
                    {selected.roleName ? selected.roleName : ""}
                  </CLabel>
                </CCol>
              </CRow>

              <CRow className={"seperator-3"}>
                <CCol md="5">
                  <CLabel className={"form-labels-3"}>Location </CLabel>
                  <br />
                  <CLabel
                    className={"form-labels-3"}
                    style={{ color: "#424c6190" }}
                  >
                      {selected.officeLocation
                      ? `${selected.officeLocation.locationName} `
                      : "location Name"}<br/>
                    {selected.officeLocation
                      ? `${selected.officeLocation.area.areaName} ,${selected.officeLocation.city.cityName} ,${selected.officeLocation.state.stateName}, ${selected.officeLocation.country.countryName}`
                      : "Enter Party Office Location Details"}
                  </CLabel>
                </CCol>
              </CRow>
            </CCol>
          </CRow>

          <CRow className={"Role-card-contained "}>
            <CCol md="12" lg="12" sm="12">
              <CRow
                style={{
                  padding: "5px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                }}
              >
                <CCol md="10" className={"role-heading-2"}>
                  Transfer To{" "}
                </CCol>
              </CRow>
              <CRow className={"role-form-container-2 "}>
                <CCol md="12" lg="12" sm="12">
                  <CRow className={"seperator-2"}>
                    <CCol md="5">
                      <CLabel className={"form-labels-2"}>
                        Type of Vacancy{" "}
                      </CLabel>
                      <CSelect
                        value={vacancy}
                        onChange={(evt) => onChangeVacancy(evt)}
                      >
                        <option value="" defaultValue disabled>
                          {" "}
                          Select Vacancy
                        </option>
                        <option value="">All Roles</option>
                        <option value="UnAllocatedRoles">
                          Un Allocated Roles
                        </option>
                        <option value="FuturePromotion">
                          Future Promotion
                        </option>
                        <option value="FutureTerminate">
                          Future Terminations
                        </option>
                        <option value="FutureTransfer">Future Transfer</option>
                      </CSelect>
                    </CCol>

                    <CCol md="5">
                      <CLabel className={"form-labels-2"}>Search Based</CLabel>
                      <CSelect
                        value={office}
                        defaultValue={""}
                        onChange={(evt) => onChangeOffice(evt)}
                      >
                        <option value="" disabled>
                          Select
                        </option>
                        <option value="">All</option>
                        <option value="typeOfOffice">Type Of Party Office</option>
                        <option value="officeLocation">Party Office Location</option>
                        <option value="department">Department</option>
                        <option value="designation">Desigination</option>
                        <option value="_id">Role</option>
                      </CSelect>
                    </CCol>
                  </CRow>

                  <CRow className={"seperator-2"}>
                    <CCol md="5">
                      <CLabel className={"form-labels-2"}>
                        Select by {office}
                      </CLabel>
                      <CSelect
                        value={description}
                        defaultValue={""}
                        disabled={listData.length === 0 ? true : false}
                        onChange={(evt) => onChangedescription(evt)}
                      >
                        <option value="" disabled>
                          {" "}
                          Select {office}
                        </option>
                        {listData.map((x) => (
                          <option value={x._id} key={x._id}>
                            {office === "department"
                              ? x.name
                              : office === "designation"
                              ? x.name
                              : office === "officeLocation"
                              ? `${x.country ? x.country.countryName : ""}, ${
                                  x.state ? x.state.stateName : ""
                                }, ${x.city ? x.city.cityName : ""}, ${
                                  x.area ? x.area.areaName : ""
                                }`
                              : office === "typeOfOffice"
                              ? x.officeType
                              : x.roleName}
                          </option>
                        ))}
                      </CSelect>
                    </CCol>
                    <CRow style={{ padding: "3%", paddingRight: "50%" }}>
                      <CCol md="20">
                        <CButton
                          // type="submit"
                          // color={"primary"}
                          shape={"pill"}
                          className={"btn btn-info btnShadow"}
                          style={{position: 'relative',bottom: '9px'}}
                          onClick={()=>{setRoleList(filter)}}
                        >
                          {" "}
                          View
                        </CButton>
                      </CCol>
                    </CRow>
                  </CRow>
                </CCol>
              </CRow>

              <CRow
                style={{
                  padding: "5px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                }}
              >
                <CCol md="10" className={"role-heading-2"}>
                  List of Vacancy{" "}
                </CCol>
              </CRow>
              <CRow style={{ padding: "8px" }}>
                <CCol style={{ flexGrow: 0, flexBasis: "70px" }}></CCol>
                <CCol style={{ flexGrow: 0, flexBasis: "120px" }}>
                  <CInput
                    name={"name"}
                    placeholder=" Filter Office "
                    width={200}
                  />
                </CCol>
                <CCol style={{ flexGrow: 0, flexBasis: "120px" }}>
                  <CInput
                    name={"location"}
                    placeholder="Location"
                    width={200}
                  />
                </CCol>
                <CCol style={{ flexGrow: 0, flexBasis: "120px" }}>
                  <CInput name={"office"} placeholder="Office Name" />
                </CCol>
                <CCol style={{ flexGrow: 0, flexBasis: "120px" }}>
                  <CInput name={"department"} placeholder="Department" />
                </CCol>
                <CCol style={{ flexGrow: 0, flexBasis: "120px" }}>
                  <CInput name={"desigination"} placeholder="Desigination" />
                </CCol>
                <CCol style={{ flexGrow: 0, flexBasis: "120px" }}>
                  <CInput name={"Role"} placeholder="Role" />
                </CCol>
                <CCol style={{ flexGrow: 0, flexBasis: "120px" }}>
                  <CInput name={"employee"} placeholder="Filter Party Member" />
                </CCol>
                <CCol style={{ flexGrow: 0, flexBasis: "120px" }}>
                  <CInput name={"vacancy"} placeholder="Filter Vacancy" />
                </CCol>
                {/* <CCol style={{ flexGrow: 0, flexBasis: '120px' }} ><CInput name={'releving'} placeholder='Filter date' /></CCol> */}

                <CCol style={{ flexGrow: 0, flexBasis: "200px" }}></CCol>

                <CCol style={{ flexGrow: 0, flexBasis: "100" }}></CCol>
              </CRow>

              <CRow style={{ padding: "2%" }}>
                <CCol>
                  <div
                    style={{
                      height: "250px",
                      overflow: "scroll",
                      overflowY: "hidden",
                    }}
                  >
                    <AutoSizer>
                      {({ width, height }) => {
                        return (
                          <Table
                            headerStyle={{ textTransform: "capitalize" }}
                            rowStyle={{ borderBottom: "1px solid lightgrey" }}
                            // width={width}
                            width={
                              width < MIN_TABLE_WIDTH ? MIN_TABLE_WIDTH : width
                            }
                            height={height}
                            headerHeight={50}
                            rowHeight={50}
                            rowCount={final.length}
                            //    sort={_sort}
                            //    sortBy={sortBy}
                            overscanColumnCount={1}
                            overscanRowCount={1}
                            noContentRenderer={_noContentRenderer}
                            //    sortDirection={sortDirection}
                            rowGetter={({ index }) => final[index]}
                          >
                            <Column
                              disableSort
                              dataKey="checkbox"
                              label={""}
                              width={200}
                              cellRenderer={({ rowIndex }) => (
                                <Checkbox
                                  checked={
                                    checked.includes(final[rowIndex]._id)
                                      ? true
                                      : false
                                  }
                                  onChange={(e, data) => {
                                    onChangeRowCheckbox(data);
                                  }}
                                  index={rowIndex}
                                />
                              )}
                            />

                            <Column
                              dataKey={"typeOfOfficeName"}
                              label={"Party Office Type"}
                              width={width}
                            />
                            <Column
                              dataKey={"locationName"}
                              label={"Party Office Location"}
                              width={width}
                            />
                            <Column
                              dataKey={"departmentName"}
                              label={"Department"}
                              width={width}
                            />
                            <Column
                              dataKey={"designationName"}
                              label={"Designation"}
                              width={width}
                            />
                            <Column
                              dataKey={"roleName"}
                              label={"Role"}
                              width={width}
                            />
                            <Column
                              dataKey={"employeeName"}
                              label={"Name of Party Member"}
                              width={width}
                            />
                            {/* <Column
                              dataKey={"vacancy"}
                              label={"Type of Vacancy"}
                              width={width}
                            /> */}
                            {/* <Column
                              dataKey={"joining"}
                              label={"Date of Joining"}
                              width={width}
                            /> */}
                            {/* <Column
                              dataKey={"releving"}
                              label={"Date of Relieving"}
                              width={width}
                            /> */}
                            <Column
                              dataKey={"id"}
                              label={"Actions"}
                              cellRenderer={(row) => (
                                <CRow>
                                  <div>
                                    <CCol md="12">
                                      <img
                                        alt=""
                                        className={"icon-role-list"}
                                        src={Edit}
                                      />
                                      <img
                                        alt=""
                                        className={"icon-role-list"}
                                        src={Remove}
                                      />
                                    </CCol>
                                  </div>
                                </CRow>
                              )}
                              minWidth={"75px"}
                            />
                          </Table>
                        );
                      }}
                    </AutoSizer>
                  </div>
                </CCol>
              </CRow>

              <CRow className={"role-form-container-2 "}>
                <CCol md="12" lg="12" sm="12">
                  <CRow className={"seperator-2"}>
                    <CCol md="4">
                      <CLabel className={"form-labels-2"}>
                        Date of Relieving{" "}
                      </CLabel>
                      <CInput
                        type="date"
                        valid={relievingError !== "" && !relievingError}
                        invalid={!!relievingError}
                        value={relieving}
                        onChange={(evt) => onChangeReliving(evt)}
                        placeholder="Enter Based"
                      ></CInput>
                    </CCol>

                    <CCol md="4">
                      <CLabel className={"form-labels-2"}>
                        Date of Joining
                      </CLabel>
                      <CInput
                        type="date"
                        value={joining}
                        valid={joiningError !== "" && !joiningError}
                        invalid={!!joiningError}
                        onChange={(evt) => onChangeJoining(evt)}
                        placeholder="Enter Based"
                      ></CInput>
                    </CCol>
                  </CRow>
                </CCol>
              </CRow>

              <CCol md="10">
                <div className="center-2">
                  <CCol md="12">
                    <CButton
                      type="button"
                      color={"primary"}
                      shape={"pill"}
                      className={"btn btn-info btnShadow"}
                      onClick={() => {
                        promoteEmployee();
                        props.change();
                      }}
                    >
                      Confirm
                    </CButton>
                  </CCol>
                </div>
                <div className="centerd-2">
                  <CCol md="12">
                    <CButton
                      shape={"pill"}
                      onClick={() => {
                        props.change();
                      }}
                      className={"btn btn-danger btnShadow"}
                    >
                      {" "}
                      Cancel
                    </CButton>
                  </CCol>
                </div>
              </CCol>
            </CCol>
          </CRow>
        </CForm>
        <ToastContainer
          className="toast--warning   "
          autoClose={1000}
          style={{ width: "300px" }}
        />
      </Card>
    </div>
  );
};

export default AddTransferEmployee;
