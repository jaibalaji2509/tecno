import React, { useState, useEffect } from "react";
// import { AutoSizer, Table, Column, SortDirection, InfiniteLoader } from 'react-virtualized'
// import "../suspend/node_modules/react-virtualized/styles.css";
import {
  CRow,
  CCard,
  CCol,
  CButton,
  CForm,
  CLabel,
  CInput,
} from "@coreui/react";
import { useHistory } from "react-router-dom";

import { useFormik } from "formik";
import * as yup from "yup";
import "./AddEmployee.css";
import { storage } from "../../../firebase";

// import { addAllEmployee } from '../../../services/ApiService'
// import axios from 'axios'
import { EmployeeContext } from "../../../services/EmployeeContext";
// import src from "*.bmp";
function AddEmployee(props) {
  const [state, setState] = React.useContext(EmployeeContext);
  const history = useHistory();

  const [files, setFiles] = useState("");
  const [updateValue, setUpdateValue] = useState({});

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      dob: "",
      bloodGroup: "",
      gender: "",
      marriedStatus: "",
    },
    validationSchema: yup.object({
      firstName: yup.string().required("First Name is Required"),
      // .min(5 , "Minimum 5 charcter" )
      lastName: yup.string().required("Last Name is Required"),
      dob: yup.string().required("DOB is Required"),
      bloodGroup: yup.string().required("Blood Group is Required"),
      gender: yup.string().required("Gender is Required"),
      marriedStatus: yup.string().required("Marital Status is Required"),
    }),
    onSubmit: (userInputData) => {
      console.log(userInputData);
    },
  });

  const Employee = async () => {
    console.log(formik.values, "testing");

    await props.onActive("Reporting");
    await setState({ ...state, ...formik.values, profileImage: files });
    // formik.handleReset({});
    // window.location.pathname = ('/tabslist#Address')
  };
  const isEnabled =
    formik.values.firstName &&
    formik.values.lastName &&
    formik.values.dob &&
    formik.values.bloodGroup &&
    formik.values.gender &&
    formik.values.marriedStatus;

  // const isEnabled = formik.values.firstName && formik.values.lastName;

  const uploadedImage = React.useRef(null);
  // const imageUploader = React.useRef(null);

  const handleSave = async (file, folder) => {
    console.log(file, folder);
    let bucketName = "HRmoodule";
    let uploadFile = file;
    var data = new Date();
    let imageName = `${data.getDate()}-${
      data.getMonth() + 1
    }-${data.getFullYear()}-${Math.floor(
      Math.random() * Math.random() * Math.random() * 1000000
    )}${uploadFile.name}`;
    let storageRef = storage.ref(`${bucketName}/${imageName}`);
    let uploadImage = storageRef.put(uploadFile);
    uploadImage.on(
      "state_changed",
      (snapshot) => {},
      (err) => {
        console.log(err);
      },
      () => {
        storage
          .ref(`${bucketName}/${imageName}`)
          .getDownloadURL()
          .then(async (url) => {
            // console.log(url, "url");
            if (folder === "profileImage") {
              console.log(url);
              setFiles(url);
            }
          });
      }
    );
  };

  const handleClick = (e) => {
    document.getElementById("profileImage").click();
  };

  useEffect(() => {
    if (state._id) {
      console.log(setUpdateValue);
      if (state.firstName) {
        formik.values.firstName = state.firstName;
      }
      if (state.lastName) {
        formik.values.lastName = state.lastName;
      }
      if (state.dob) {
        formik.values.dob = state.dob;
      }
      if (state.bloodGroup) {
        formik.values.bloodGroup = state.bloodGroup;
      }
      if (state.gender) {
        formik.values.gender = state.gender;
      }
      if (state.marriedStatus) {
        formik.values.marriedStatus = state.marriedStatus;
      }
      setFiles(state.profileImage);
    }
    console.log(state, updateValue, "testing");
  }, []);

  return (
    <div>
      <div style={{ padding: "2%" }}>
        <CCard className={"AddEmployee-card-container"}>
          <CRow style={{ paddingTop: "1%", paddingLeft: "2%" }}>
            <CCol md="12" className={"addemployee-heading"}>
              Add Party Member
            </CCol>
          </CRow>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: "20%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CCol md="3">
              <input
                name="file"
                type="file"
                id="profileImage"
                accept="image/*"
                style={{ display: "none" }}
                onChange={(e) => {
                  handleSave(e.target.files[0], "profileImage");
                  // console.log(e.target.files[0]);
                }}
              />
            </CCol>

            <div
              style={{
                height: "100px",
                width: "100px",
                background: "#C4C4C4",
                border: "1px dashed black",
              }}
              onClick={() => handleClick()}
            >
              <img
                alt=""
                src={files !== "" ? files : uploadedImage}
                style={{
                  width: "100%",
                  height: "100%",
                  position: "acsolute",
                }}
              />
            </div>

            <CLabel className={"form-label1"}>
              Upload Image
              <span className={"text-danger"}> *</span>
            </CLabel>
          </div>

          <CForm autoComplete="off">
            <CRow className={"addemployee-form-container "}>
              <CCol md="12" lg="12" sm="12">
                <CRow className={"seperator"}>
                  <CCol>
                    <CLabel className={"form-label1"}>
                      First Name
                      <span className={"text-danger"}> *</span>
                    </CLabel>
                    <CInput
                      type={"text"}
                      name={"firstName"}
                      onChange={formik.handleChange}
                      value={formik.values.firstName}
                      placeholder="Enter First Name"
                    />
                    {formik.errors.firstName ? (
                      <div className="text-danger">
                        {" "}
                        {formik.errors.firstName}
                      </div>
                    ) : null}
                  </CCol>

                  <CCol>
                    <CLabel className={"form-label1"}>
                      Last Name
                      <span className={"text-danger"}> *</span>
                    </CLabel>
                    <CInput
                      type={"text"}
                      name={"lastName"}
                      onChange={formik.handleChange}
                      value={formik.values.lastName}
                      placeholder="Enter Last Name"
                    />
                    {formik.errors.lastName ? (
                      <div className="text-danger">
                        {" "}
                        {formik.errors.lastName}
                      </div>
                    ) : null}
                  </CCol>
                </CRow>

                <CRow className={"seperator "}>
                  <CCol>
                    <CLabel className={"form-label1"}>
                      Date of Birth
                      <span className={"text-danger"}> *</span>
                    </CLabel>
                    <CInput
                      type={"date"}
                      name={"dob"}
                      onChange={formik.handleChange}
                      value={formik.values.dob}
                      placeholder="Enter DOB"
                    />
                    {formik.errors.dob ? (
                      <div className="text-danger"> {formik.errors.dob}</div>
                    ) : null}
                  </CCol>

                  <CCol>
                    <CLabel className={"form-label1"}>
                      Blood Group
                      <span className={"text-danger"}> *</span>
                    </CLabel>
                    <CInput
                      type={"text"}
                      name={"bloodGroup"}
                      onChange={formik.handleChange}
                      value={formik.values.bloodGroup}
                      placeholder="Enter Blood Group"
                    />
                    {formik.errors.bloodGroup ? (
                      <div className="text-danger">
                        {" "}
                        {formik.errors.bloodGroup}
                      </div>
                    ) : null}
                  </CCol>
                </CRow>

                <CRow className={"seperator "}>
                  <CCol md={6}>
                    <CRow>
                      <CCol>
                        <CLabel className={"form-label1"}>
                          Gender
                          <span className={"text-danger"}> *</span>
                        </CLabel>
                      </CCol>
                    </CRow>
                    <CRow style={{ padding: "2%" }}>
                      <CCol>
                        <CRow>
                          <CCol md={2}>
                            <CInput
                              type="radio"
                              value={"male"}
                              className="k-radio"
                              checked={
                                updateValue.gender === "male" ||
                                formik.values.gender === "male"
                                  ? true
                                  : false
                              }
                              name={"gender"}
                              onChange={formik.handleChange}
                            />
                          </CCol>
                          <CCol md={10}>
                            <CLabel className={"form-label2"}>Male </CLabel>
                          </CCol>
                        </CRow>
                      </CCol>

                      <CCol>
                        <CRow>
                          <CCol md={2}>
                            <CInput
                              type="radio"
                              value={"female"}
                              className="k-radio"
                              checked={
                                updateValue.gender === "female" ||
                                formik.values.gender === "female"
                                  ? true
                                  : false
                              }
                              name={"gender"}
                              onChange={formik.handleChange}
                            />
                          </CCol>
                          <CCol md={10}>
                            <CLabel className={"form-label2"}>Female</CLabel>
                          </CCol>
                        </CRow>
                      </CCol>

                      <CCol>
                        <CRow>
                          <CCol md={2}>
                            <CInput
                              type="radio"
                              value={"Transgender"}
                              className="k-radio"
                              checked={
                                updateValue.gender === "Transgender" ||
                                formik.values.gender === "Transgender"
                                  ? true
                                  : false
                              }
                              name={"gender"}
                              onChange={formik.handleChange}
                              // onChange={(e) => {setUpdateValue({ ...updateValue, gender: e.target.value })}}
                            />
                          </CCol>
                          <CCol md={10}>
                            <CLabel className={"form-label2"}>
                              Transgender
                            </CLabel>
                          </CCol>
                        </CRow>
                      </CCol>
                      {formik.errors.gender ? (
                        <div className="text-danger">
                          {" "}
                          {formik.errors.gender}
                        </div>
                      ) : null}
                    </CRow>
                  </CCol>

                  <CCol md={6}>
                    <CRow>
                      <CLabel className={"form-label1"}>
                        Marital Status
                        <span className={"text-danger"}> *</span>
                      </CLabel>
                    </CRow>
                    <CRow style={{ padding: "2%" }}>
                      <CCol>
                        <CRow>
                          <CCol md={2}>
                            <CInput
                              type="radio"
                              id="radio"
                              className="k-radio"
                              checked={
                                formik.values.marriedStatus === "Unmarried"
                                  ? true
                                  : false
                              }
                              name={"marriedStatus"}
                              onChange={formik.handleChange}
                              // onChange={(e) => {setUpdateValue({ ...updateValue, marriedStatus: e.target.value })}}

                              value={"Unmarried"}
                            />
                          </CCol>
                          <CCol md={10}>
                            <CLabel className={"form-label2"}>Unmarried</CLabel>
                          </CCol>
                        </CRow>
                      </CCol>
                      <CCol>
                        <CRow>
                          <CCol md={2}>
                            <CInput
                              type="radio"
                              id="radio2"
                              className="k-radio"
                              name={"marriedStatus"}
                              checked={
                                formik.values.marriedStatus === "Married"
                                  ? true
                                  : false
                              }
                              onChange={formik.handleChange}
                              // onChange={(e) => {setUpdateValue({ ...updateValue, marriedStatus: e.target.value })}}

                              value={"Married"}
                            />
                          </CCol>
                          <CCol md={10}>
                            <CLabel className={"form-label2"}>Married</CLabel>
                          </CCol>
                        </CRow>
                      </CCol>

                      <CCol className="col-md-4">
                        <CRow>
                          <CCol md={2}>
                            <CInput
                              type="radio"
                              id="radio3"
                              className="k-radio"
                              name={"marriedStatus"}
                              onChange={formik.handleChange}
                              checked={
                                formik.values.marriedStatus === "Widow/Divorce"
                                  ? true
                                  : false
                              }
                              value={"Widow/Divorce"}
                            />
                          </CCol>
                          <CCol md={10}>
                            <CLabel c className={"form-label2"}>
                              Widow/Divorce
                            </CLabel>
                          </CCol>
                        </CRow>
                      </CCol>
                      {formik.errors.marriedStatus ? (
                        <div className="text-danger">
                          {" "}
                          {formik.errors.marriedStatus}
                        </div>
                      ) : null}
                    </CRow>
                  </CCol>
                </CRow>

                <CCol md="10"></CCol>
              </CCol>
            </CRow>

            <CRow>
              <div class="add">
                <CCol md="12">
                  <CButton
                    shape={"pill"}
                    className={"saveBtn"}
                    // disabled={!formik.handleChange}
                    // disabled={!isEnabled}
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
                    // shape={"pill"}
                    className={"cancelBtn"}
                    onClick={() => {
                      history.push("/EmployeeData");
                    }}
                  >
                    {" "}
                    Cancel
                  </CButton>
                </CCol>
              </div>
            </CRow>
          </CForm>
        </CCard>
      </div>
    </div>
  );
}

export default AddEmployee;
