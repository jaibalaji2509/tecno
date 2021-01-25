import React, { useState, useEffect } from "react";
import { AutoSizer, Table, Column } from "react-virtualized";
// import "../suspend/node_modules/react-virtualized/styles.css";
import {
  CRow,
  CCard,
  CCol,
  CButton,
  CForm,
  CLabel,
  CInput,
  CPagination,
  CDataTable,
  CBadge,
} from "@coreui/react";
// import { useFormik } from 'formik'
// import * as yup from 'yup'
// import Edit from '../../images/image 2.svg'
import Remove from "../../images/image 15.svg";
import "./RevokeEmployee.css";
import {
  revokeEmployee,
  deleteRevokeEmployee,
  deleteEmployeeMovement,
  getAllSuspend,
  getAllRevoke,
} from "../../../services/ApiService";
import Select from "react-select";
import { toast, ToastContainer } from "react-toastify";
import ConfirmDelete from "../confirmMessage/confirmDelete";
function RevokeEmployee(props) {
  const [RevokeList, setRevokeList] = useState(true);
  const [RevokeCreate, setRevokeCreate] = useState(false);
  const [selected, setSelected] = useState({});
  const [roleList, setRoleList] = useState([]);
  const [remarks, setRemarks] = useState("");
  const [remarksError, setRemarkError] = useState("");
  const [dateofjoining, setdateofjoining] = useState("");
  const [dateofjoiningError, setdateofjoiningError] = useState("");
  const [error, setError] = useState("");
  const [posts, setPosts] = useState("");
  const [passing, setPassing] = useState("");
  const [revokeEmployeeSchema, setRevokeEmployeeSchema] = useState([]);
  const [board, setBoard] = useState("");
  const [edit, setEdit] = useState("");
  const [limit, setLimit] = useState({ value: 5, label: 5 });
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [deleteId, setDeleteId] = useState({ id: "", show: false });

  const Cancel = async () => {
    await setRevokeList(true);
    await setRevokeCreate(false);
  };

  const onChangedeDoj = (event) => {
    const dateofjoining = event.target.value;
    setSelected({
      ...selected,
      revoke: { ...selected.revoke, reJoin: dateofjoining },
    });
    if (dateofjoining === "" || dateofjoining.length < 1) {
      setdateofjoiningError("Please enter at least 3 characters");
    } else {
      setdateofjoining(dateofjoining);
      setdateofjoiningError(null);
    }
  };

  const onChangedeRemarks = (event) => {
    const remarks = event.target.value;
    setSelected({
      ...selected,
      revoke: { ...selected.revoke, remarks: remarks },
    });
    if (remarks === "" || remarks.length < 1) {
      setRemarkError("Please enter at least 3 characters");
    } else {
      setRemarks(remarks);
      setEdit(edit);
      setRemarkError(null);
    }
  };
  const createRevoke = async () => {
    if (passing === "") {
      var response;
      let body = {
        reJoin: dateofjoining,
        remarks: remarks,
        id: selected._id,
      };
      console.log(body);
      try {
        response = await revokeEmployee(JSON.stringify(body));
        if (response.success === true) {
          toast.success(response.message);
          setTimeout(() => {
            setRevokeList(true);
            setRevokeCreate(false);
          }, 2000);
          console.log(response.EmployeeMovement);
          setPosts([...posts, response.EmployeeMovement]);
          // formik.values = {}

          return 0;
        }
        setError(response.error);
        console.log(error);
      } catch (e) {
        console.log(e, "sssss");
      }
    }
  };
  // const uploadHandler = () => { }

  const capitalize = (x) => {
    let s = x.toLowerCase();
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  };
  useEffect(() => {
    const getSuspend = async () => {
      try {
        const roleResponse = await getAllSuspend();
        if (roleResponse) {
          if (roleResponse.data) {
            console.log("12312312312132131233");
            roleResponse.data.map((x) => {
              x.value = x._id;
              x.location = `${capitalize(
                x.roleId.officeLocation.state.stateName
              )}, ${capitalize(
                x.roleId.officeLocation.country.countryName
              )}, ${capitalize(
                x.roleId.officeLocation.city.cityName
              )}, ${capitalize(x.roleId.officeLocation.area.areaName)}`;
              x.officeType = `${capitalize(x.roleId.typeOfOffice.officeType)},`;
              x.department = `${capitalize(x.roleId.department.name)},`;
              x.designation = `${capitalize(x.roleId.designation.name)},`;
              x.role = `${capitalize(x.roleId.roleName)},`;
              x.description = `${capitalize(x.roleId.dccDescription)},`;
              x.descriptionId = `${capitalize(x.roleId.dccId)},`;
              x.name = `${capitalize(x.roleId.dccId)},`;
              x.employee = `${capitalize(x.employeeId.firstName)},`;
            });
            setRoleList(roleResponse.data);
          }
        }
      } catch (e) {
        console.log(e);
      }
    };
    getSuspend();
  }, [board]);

  const dateConvert = (val) => {
    var data = new Date(val);
    return `${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`;
  };

  useEffect(() => {
    getRevoke();
  }, [limit, page]);

  const getRevoke = async () => {
    try {
      const roleResponse = await getAllRevoke(
        `movementType=R&limit=${limit.value}&page=${page}`
      );
      if (roleResponse) {
        if (roleResponse.data) {
          console.log("12312312312132131233");
          roleResponse.data.map((x) => {
            
            x.value = x._id;
            x.locationName = capitalize(x.roleId.officeLocation.locationName);
            x.location = `${capitalize(
              x.roleId.officeLocation.country.countryName
            )},${capitalize(
              x.roleId.officeLocation.state.stateName
            )}, ${capitalize(
              x.roleId.officeLocation.city.cityName
            )}, ${capitalize(x.roleId.officeLocation.area.areaName)}`;
            x.officeType = `${capitalize(x.roleId.typeOfOffice.officeType)},`;
            x.department = `${capitalize(x.roleId.department.name)},`;
            x.designation = `${capitalize(x.roleId.designation.name)},`;
            x.role = `${capitalize(x.roleId.roleName)},`;
            x.description = `${capitalize(x.roleId.dccDescription)},`;
            x.descriptionId = `${capitalize(x.roleId.dccId)},`;
            x.name = `${capitalize(x.roleId.dccId)},`;
            x.reJoin = `${capitalize(x.revoke.reJoin)}`;
            x.employee = `${capitalize(x.employeeId.firstName)},`;
            x.createdAt = dateConvert(x.createdAt);
            x.createdBy = "Admin";
          });
          setRevokeEmployeeSchema(roleResponse.data);
          // console.log(
          //   revokeEmployeeSchema,
          //   "console.log(revokeEmployeeSchema);"
          // );
        }
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    roleList.map((x) => {
      x.label = `${x.roleId.typeOfOffice.officeType}, ${x.roleId.officeLocation.state.stateName}, ${x.roleId.officeLocation.city.cityName}, ${x.roleId.officeLocation.area.areaName}, ${x.roleId.department.name}, ${x.roleId.designation.name}, ${x.roleId.roleName}}`;
      x.value = x;
      console.log(x, "aaaa");
    });
  }, [roleList]);
  const RevokeAdd = async () => {
    await setRevokeCreate(true);
    await setRevokeList(false);
  };

  const Delete = async (id) => {
    var response;

    try {
      response = await deleteEmployeeMovement(deleteId.id);
      if (response.success === true) {
        getAllSuspend();
        toast.success(response.message);
        setTimeout(() => {
          setDeleteId(false)
        }, 10);
       
        setBoard(response);
      }
    } catch (e) {
      console.log(e);
    }
  };
  const [details, setDetails] = useState([]);

  const fields = [
    { key: 'locationName',label:'Location Name', _style: { width: '150px' } },
    { key: 'officeType', label: "Type Of Party Office", _style: { width: '150px' } },
    { key: 'location', label: "Party Office Location", _style: { width: '300px' } },
    { key: 'department', _style: { width: '150px' } },
    { key: 'designation', _style: { width: '150px' } },
    { key: 'role', _style: { width: '150px' } },
    { key: 'employee', label: "Party Member", _style: { width: '150px' } },
    { key: 'reJoin', _style: { width: '150px' } },
    { key: 'remarks', _style: { width: '150px' } },
    { key: 'createdAt', _style: { width: '150px' } },
    { key: 'createdBy', _style: { width: '150px' } },
    
    // { key: 'stateName', _style: { width: '10%' } },
    // { key: 'cityName', _style: { width: '10%' } },
    // { key: 'areaName', _style: { width: '10%' } },
    // { key: 'pincode', _style: { width: '10%' } },
    // {
    //   label: 'Action', key: 'Action', _style: { width: '20%' },


    //   class: "fas fa-trash"

    // },
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
  return (
    <div>
      <ConfirmDelete
        details={deleteId}
        confirm={Delete}
        cancel={cancelConfirmDlete}
      />
      {RevokeList && (
        <div>
          <CCard className={"Role-card-container-3"}>
            <CRow style={{ padding: "15px" }}>
              <CCol md="12" className={"role-heading-3"}>
                List of Revoked Party Members
              </CCol>
            </CRow>
            <CRow style={{ padding: "15px" }}>
              <CCol md="10">
                <CButton
                  style={{ marginLeft: "16px" }}
                  className={"saveBtn"}
                  onClick={RevokeAdd}
                >
                  + Add
                </CButton>
              </CCol>
            </CRow>
            <CRow>
              <CCol>
                <CDataTable
                  size={1500}
                  items={revokeEmployeeSchema}
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
                                onClick={() =>
                                  deletemodal(revokeEmployeeSchema[index]._id,`${revokeEmployeeSchema[index].employee} Revoke Details`)
                                }
                                style={{
                                  marginLeft: "5px",
                                  color: "#e85654",
                                }}
                                class="fas fa-trash"
                              ></i>
                            </CCol>
                          </CRow>
                        </td>
                      );
                    },
                  }}
                />
              </CCol>
            </CRow>
            <CRow>
              <CCol
                md="12"
                style={{
                  textAlign: "center",
                  justifyItems: "center",
                  padding: "0px 475px",
                }}
              >
                <CPagination
                  activePage={page}
                  pages={totalPage}
                  size={"sm"}
                  onActivePageChange={(e) => setPage(e)}
                  limit={5}
                  align={"center"}
                />
              </CCol>
            </CRow>
          </CCard>
        </div>
      )}

      {RevokeCreate && (
        <div style={{ padding: "2%" }}>
          <CCard className={"Roless-card-container-5"}>
            <CRow style={{ padding: "2%", paddingLeft: "2%" }}>
              <CCol md="12" className={"role-heading-5"}>
                Revoke the Party Member Suspension
              </CCol>
            </CRow>

            <CRow className={"role-form-container-3"}>
              <CCol md="4">
                <CLabel className={"form-labels-5"}>Search </CLabel>
                <Select
                  onChange={(e) => {
                    setSelected(e);
                    // console.log(e);
                  }}
                  options={roleList}
                />
              </CCol>
            </CRow>

            <CForm autoComplete="off">
              <CRow className={"role-form-container-5 "}>
                <CCol md="12" lg="12" sm="12">
                  <CRow className={"seperator-2"}>
                    <CCol className={"image-12"}>
                      <img
                        type="text"
                        src={
                          selected.employeeId
                            ? selected.employeeId.profileImage
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
                          paddingTop: "35%",
                        }}
                      >
                        No Image
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
                        {selected.employeeId
                          ? selected.employeeId.firstName
                          : "Enter Party Member details"}
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
                        {selected.roleId
                          ? selected.roleId.dccDescription
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
                        {selected.roleId
                          ? selected.roleId.department
                            ? selected.roleId.department.name
                            : "Enter Department Details"
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
                        {selected.roleId
                          ? selected.roleId.dccId
                          : "Enter DCC ID"}
                      </CLabel>
                    </CCol>

                    <CCol md="5">
                      <CLabel className={"form-labels-3"}>Desigination </CLabel>
                      <br />
                      <CLabel
                        className={"form-labels-3"}
                        style={{ color: "#424c6190" }}
                      >
                        {selected.roleId
                          ? selected.roleId.designation
                            ? selected.roleId.designation.name
                            : "Enter Designation Details"
                          : "Enter Designation Details"}
                      </CLabel>
                    </CCol>
                  </CRow>
                  <CRow className={"seperator-3"}>
                    <CCol md="5">
                      <CLabel className={"form-labels-3"}>
                        Type of Party Office{" "}
                      </CLabel>
                      <br />
                      <CLabel
                        className={"form-labels-3"}
                        style={{ color: "#424c6190" }}
                      >
                        {selected.roleId
                          ? selected.roleId.typeOfOffice
                            ? selected.roleId.typeOfOffice.officeType
                            : "Enter Office Type"
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
                        {selected.roleId
                          ? selected.roleId.roleName
                          : "Enter Role"}
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
                        {selected.roleId
                          ? selected.roleId.officeLocation
                            ? `${selected.roleId.officeLocation.locationName} `
                            : "Enter Location Name"
                          : "Enter Location Name"}
                        <br />
                        {selected.roleId
                          ? selected.roleId.officeLocation
                            ? `${selected.roleId.officeLocation.area.areaName} ,${selected.roleId.officeLocation.city.cityName} ,${selected.roleId.officeLocation.state.stateName}, ${selected.roleId.officeLocation.country.countryName}`
                            : "Enter Party Office Location Details"
                          : "Enter Party Office Location Details"}
                      </CLabel>
                    </CCol>
                  </CRow>
                </CCol>
              </CRow>
            </CForm>

            <CRow style={{ paddingTop: "1%", paddingLeft: "2%" }}>
              <CCol md="12" className={"role-heading-5"}>
                Detail of Suspension
              </CCol>
            </CRow>

            <CForm autoComplete="off">
              <CRow className={"role-form-container-5"}>
                <CCol md="12" lg="12" sm="12">
                  <CRow className={"seperator-3"}>
                    <CCol md="5">
                      <CLabel className={"form-labels-3"}>
                        Reason for Suspension{" "}
                      </CLabel>
                      <br />
                      <CLabel
                        className={"form-labels-3"}
                        style={{ color: "#424c6190" }}
                      >
                        {selected.reason
                          ? selected.reason.label
                          : "Enter Reason of Suspension"}
                      </CLabel>
                    </CCol>

                    <CCol md="5">
                      <CLabel className={"form-labels-3"}>Suspend From </CLabel>
                      <br />
                      <CLabel
                        className={"form-labels-3"}
                        style={{ color: "#424c6190" }}
                      >
                        {selected ? selected.dor : "Enter ReaSON of Suspension"}
                      </CLabel>
                    </CCol>
                  </CRow>

                  <CRow className={"seperator-5"}>
                    <CCol md="5">
                      <CLabel className={"form-labels-3"}>Duration</CLabel>
                      <br />
                      <CLabel
                        className={"form-labels-3"}
                        style={{ color: "#424c6190" }}
                      >
                        {selected
                          ? selected.duration
                          : "Enter ReaSON of Suspension"}
                      </CLabel>
                    </CCol>

                    <CCol md="5">
                      <CLabel className={"form-labels-3"}>Suspend to </CLabel>
                      <br />
                      <CLabel
                        className={"form-labels-3"}
                        style={{ color: "#424c6190" }}
                      >
                        {selected ? selected.doj : "Enter ReaSON of Suspension"}
                      </CLabel>
                    </CCol>
                  </CRow>
                  <CRow className={"seperator-5"}>
                    <CCol md="5">
                      <CLabel className={"form-labels-3"}>
                        Remarks for Suspend
                      </CLabel>
                      <br />
                      <CLabel
                        className={"form-labels-3"}
                        style={{ color: "#424c6190" }}
                      >
                        {selected
                          ? selected.remarks
                          : "Enter Remarks for Suspension"}
                      </CLabel>
                    </CCol>
                    <CCol md="5"></CCol>
                  </CRow>

                  <CRow className={"seperator-3"}>
                    <CCol md="5">
                      <CLabel className={"form-labels-3"}>
                        Date of Rejoining
                        <span className={"text-danger"}> *</span>
                      </CLabel>
                      <CInput
                        type="date"
                        valid={dateofjoiningError !== "" && !dateofjoiningError}
                        invalid={!!dateofjoiningError}
                        onChange={(evt) => onChangedeDoj(evt)}
                        value={
                          selected.revoke
                            ? selected.revoke.reJoin
                              ? selected.revoke.reJoin
                              : ""
                            : ""
                        }
                        placeholder="Enter Description"
                      ></CInput>
                    </CCol>
                    <CCol md="5">
                      <CLabel className={"form-labels-3"}>
                        Remarks
                        <span className={"text-danger"}> *</span>
                      </CLabel>
                      <CInput
                        valid={remarksError !== "" && !remarksError}
                        invalid={!!remarksError}
                        onChange={(evt) => onChangedeRemarks(evt)}
                        value={
                          selected.revoke
                            ? selected.revoke.remarks
                              ? selected.revoke.remarks
                              : ""
                            : ""
                        }
                        placeholder="Enter Description"
                        style={{ height: "80px" }}
                      ></CInput>
                    </CCol>
                  </CRow>
                  <CRow>
                    <CCol md="8"></CCol>
                    <CCol md="4">
                      <CButton onClick={createRevoke} className={"saveBtn"} style={{position: 'relative', right: '15px'}}>
                        Confirm
                      </CButton>
                      <CButton onClick={Cancel} className={"cancelBtn"}>
                        {" "}
                        Cancel
                      </CButton>
                    </CCol>
                  </CRow>
                  <CCol md="10"></CCol>
                </CCol>
              </CRow>
              <ToastContainer
                autoclose={5000}
                className={"sucesss"}
              ></ToastContainer>
            </CForm>
          </CCard>
        </div>
      )}
    </div>
  );
}

export default RevokeEmployee;
