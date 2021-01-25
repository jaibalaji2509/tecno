import React, { useState, useContext, useEffect } from "react";
import {
  CRow,
  CCol,
  CButton,
  CForm,
  CTextarea,
  CLabel,
  CInput,
} from "@coreui/react";
// import { AutoSizer, Table, Column, SortDirection, InfiniteLoader } from 'react-virtualized'
// import Edit from '../../images/image 2.svg'
// import Remove from '../../images/image 15.svg'
// import { useSnackbar } from 'notistack'
// import { useFormik } from 'formik'
// import * as yup from 'yup'
import { Card } from "@material-ui/core";
// import Select from 'react-select'
import Select from "react-select";
// import { GlobalContext } from '../../../services/GlobalContext'
import { AuthContext } from "../../../services/auth/AuthContext";
// import "./node_modules/react-virtualized/styles.css";
import "./TerminateEmployee.css";
import {
  addPromoteEmployee,
  getAllRole,
  updateEmployeeMovement,
} from "../../../services/ApiService";
import { ToastContainer, toast } from "react-toastify";
// const { elements } = this.props;
// const { filterStr } = this.state;

const AddTerminateEmployee = (props) => {
  const [selected, setSelected] = useState({});
  const [options, setOptions] = useState([]);

  const [from, setfrom] = useState("");
  const [fromError, setfromError] = useState("");

  const [updateDetails, setUpdateDetails] = useState("");

  const [description, setDescription] = useState("");
  const [descriptionError, setdescriptionError] = useState("");

  const [roleList, setRoleList] = useState([]);
  const [reason, setReason] = useState("");
  const [reasonError, setReasonError] = useState("");
  // const global = useContext(GlobalContext)
  // const auth = useContext(AuthContext);

  const onChangefrom = (event) => {
    const from = event.target.value;
    console.log(from);
    if (from === "" || from.length < 1) {
      setfromError("Please enter at least 3 characters");
    } else {
      setfrom(from);
      setfromError(null);
    }
  };

  useEffect(() => {
    if (props.date !== {}) {
      console.log(props.data, "props data");
      setSelected({ ...props.data.roleId, assignedTo: props.data.employeeId });
      setUpdateDetails(props.data._id);
      setReason(props.data.reason);
      setfrom(props.data.dor);
      setDescription(props.data.remarks);
    }
  }, []);

  const onChangeReason = (event) => {
    const reason = event.target.value;
    if (reason === "" || reason.length < 1) {
      setReasonError("Please enter at least 3 characters");
    } else {
      setReason(reason);
      setReasonError(null);
    }
  };

  const onChangedescription = (event) => {
    const description1 = event.target.value;
    if (description1 === "" || description1.length < 1) {
      setdescriptionError("Please enter at least 3 characters");
    } else {
      setDescription(description1);
      setdescriptionError(null);
    }
  };

  const promoteEmployee = async () => {
    console.log(updateDetails, "id");
    if (updateDetails === "" || updateDetails === undefined) {
      if (
        !selected._id ||
        from === "" ||
        reason === "" ||
        description === ""
      ) {
        toast.error("Please provoid the details.");
        return 0;
      }
      let data = {
        movementType: "TE",
        employeeId: selected.assignedTo._id,
        roleId: selected._id,
        dor: from,
        reason: reason,
        remarks: description,
      };
      console.log(data);
      try {
        const datas = await addPromoteEmployee(data);
        if (datas) {
          if (datas.success) {
            toast.error(datas.message);
            setTimeout(() => {
              props.change();
            }, 3000);
            setSelected({});
            setfrom("");
            setReason("");
            setDescription("");
          }
        }
      } catch (e) {
        toast.error(e);
        console.log(e);
      }
    } else {
      if (
        selected === {} ||
        from === "" ||
        reason === "" ||
        description === ""
      ) {
        return toast("Please provoid the details.");
      }
      let data = {
        id: updateDetails,
        dor: from,
        reason: reason,
        remarks: description,
      };
      console.log(data);
      try {
        const datas = await updateEmployeeMovement(data);
        if (datas) {
          if (datas.data) {
            toast.success(datas.message);
            setTimeout(() => {
              props.change();
            }, 3000);
            setSelected({});
            setfrom("");
            setReason("");
            setDescription("");
          }
        }
      } catch (e) {
        toast.error(e);
        console.log(e);
      }
    }
  };

  const onSubmit = async (event) => {
    console.log("Clicked");
    event.preventDefault();
    console.log(selected, reason, description, from);
  };

  useEffect(() => {
    const getAllRoles = async () => {
      try {
        const roleResponse = await getAllRole();
        if (roleResponse) {
          if (roleResponse.data) {
            setRoleList(roleResponse.data);
          }
        }
      } catch (e) {
        console.log(e);
      }
    };
    getAllRoles();
  }, []);

  useEffect(() => {
    if (roleList.length > 0) {
      let array = [];
      roleList.map((x) => {
        if (x.assignedTo) {
          if (x.assignedTo._id) {
            x.label = `${x.typeOfOffice.officeType}, ${x.officeLocation.state.stateName}, ${x.officeLocation.city.cityName}, ${x.officeLocation.area.areaName}, ${x.department.name}, ${x.designation.name}, ${x.roleName} - ${x.assignedTo.firstName}`;
            x.value = x;
            x.employee = { name: "Manoj Kumar" };
            array.push(x);
            return 0;
          }
        }
      });
      setOptions(array);
    }
  }, [roleList]);

  return (
    <div>
      <Card className={"Role-card-container-3"}>
        <CRow
          style={{ padding: "10px", paddingLeft: "20px", paddingRight: "20px" }}
        >
          <CCol md="12" className={"role-heading-3"}>
            Terminate From{" "}
          </CCol>
        </CRow>

        <CRow className={"role-form-container-3"}>
          <CCol md="5">
            <CLabel className={"form-labels-3"}>Search </CLabel>
            {/* <CInput
                            placeholder='Search' /> */}
            {/* <Select options={roleList} /> */}
            <Select
              onChange={(e) => {
                setSelected(e);
              }}
              options={options}
            />
          </CCol>
        </CRow>

        <CForm autoComplete="off" onSubmit={(e) => onSubmit(e)}>
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
                      position: "relative",
                      top: selected.assignedTo ? "0px" : "-90px",
                    }}
                  >
                    {selected.assignedTo
                      ? selected.assignedTo.profileImage
                        ? "Profile Image"
                        : "No Image"
                      : "No Image"}
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
                      : "Enter Party Office Type"}
                  </CLabel>
                </CCol>

                <CCol md="5">
                  <CLabel className={"form-labels-3"}>Role </CLabel>
                  <br />
                  <CLabel
                    className={"form-labels-3"}
                    style={{ color: "#424c6190" }}
                  >
                    {selected.roleName ? selected.roleName : "Enter Role"}
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
                      : "Enter Location Name"}
                    <br />
                    {selected.officeLocation
                      ? `${selected.officeLocation.area.areaName} ,${selected.officeLocation.city.cityName} ,${selected.officeLocation.state.stateName}, ${selected.officeLocation.country.countryName}`
                      : "Enter Party Office Location Details"}
                  </CLabel>
                </CCol>
              </CRow>
            </CCol>
          </CRow>

          <CRow className={"role-form-container-3"}>
            <CCol md="12" lg="12" sm="12">
              <CRow className={"seperator-3"}>
                <CCol md="5">
                  <CLabel className={"form-labels-3"}>Reason </CLabel>
                  <CInput
                    value={reason}
                    valid={reasonError !== "" && !reasonError}
                    invalid={!!reasonError}
                    onChange={(evt) => {
                      onChangeReason(evt);
                    }}
                    placeholder={"Enter reason for Termination"}
                  />
                </CCol>

                <CCol md="5">
                  <CLabel className={"form-labels-3"}>Terminated From</CLabel>
                  <CInput
                    type="date"
                    value={from}
                    valid={fromError !== "" && !fromError}
                    invalid={!!fromError}
                    onChange={(evt) => onChangefrom(evt)}
                    placeholder="Enter Terminated From"
                  ></CInput>
                </CCol>
              </CRow>

              <CRow className={"seperator-3"}>
                <CCol md="10">
                  <CLabel className={"form-labels-3"}>Description</CLabel>
                  <CTextarea
                    valid={descriptionError !== "" && !descriptionError}
                    invalid={!!descriptionError}
                    onChange={(evt) => onChangedescription(evt)}
                    value={description}
                    placeholder="Enter Description for Termination"
                    style={{ height: "80px" }}
                  ></CTextarea>
                </CCol>
              </CRow>

              <CRow>
                <CCol md="8"></CCol>
                <CCol md="4">
                  <CButton
                    onClick={promoteEmployee}
                    className={"saveBtn"}
                    style={{ position: "relative", right: "15px" }}
                  >
                    Confirm
                  </CButton>
                  <CButton
                    onClick={() => props.change()}
                    className={"cancelBtn"}
                  >
                    {" "}
                    Cancel
                  </CButton>
                </CCol>
              </CRow>
            </CCol>
          </CRow>
        </CForm>
      </Card>
    </div>
  );
};

export default AddTerminateEmployee;
