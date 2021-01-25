import React, { useState, useContext, useEffect } from "react";
// import { AutoSizer, Table, Column, SortDirection, InfiniteLoader } from 'react-virtualized'
import Refresh from "../../images/image 7.png";
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
import { useFormik } from "formik";
import * as yup from "yup";
import "./Document.css";
import { storage } from "../../../firebase";
// import { entityList } from '../../../services/ApiService'
import { EmployeeContext } from "../../../services/EmployeeContext";


function Document(props) {
  const [state, setState] = React.useContext(EmployeeContext);
    console.log(state, "Document");
  const [updateValue, setUpdateValue] = useState({});

  const [files, setFiles] = useState({
    adhaar: "",
    voter: "",
    passport: "",
    license: "",
    pancard: "",
  });

  const formik = useFormik({
    initialValues: {
      adhaarId: "",
      voter: "",
      pancardId: "",
      driving: "",
      passport: "",
      validTo1: "",
      validTo: "",
    },
    validationSchema: yup.object({
      adhaarId: yup.string().required("Adhaar is Required"),
      pancardId: yup.string().required("Pan No is Required"),
    }),
    onSubmit: (userInputData) => {
      console.log(userInputData);
    },
  });

  // const handleFileUpload = (event) => {
  //     // this.setState({ WAHTEVETKEYYOUNEED: event.currentTarget.files[0] })
  //     console.log(event.currentTarget.files[0])
  // };
  useEffect(() => {
    if (state._id) {
      console.log(setUpdateValue);
      if (state.documents) {
        if (state.documents.documentDetails) {
          let x = state.documents.documentDetails;
          if (x.aadhaarNo) {
            formik.values.adhaarId = x.aadhaarNo;
          }
          if (x.drivingLicenseNo) {
            formik.values.driving = x.drivingLicenseNo;
          }
          if (x.panNo) {
            formik.values.pancardId = state.documents.documentDetails.panNo;     
          }
          if (x.passportNo) {
            formik.values.passport = state.documents.documentDetails.passportNo;
          }
          if (x.voterIdNo) {
            formik.values.voter = state.documents.documentDetails.voterIdNo;
          }
          if (x.aadhaarImage) {
            setFiles({
              ...files,adhaar: state.documents.documentDetails.aadhaarImage
            })     
          }
          if (x.voterIdImage) {
            setFiles({...files, voter: state.documents.documentDetails.voterIdImage})
          }
          if (x.passportImage) {
            setFiles({...files, passport: state.documents.documentDetails.passportImage})
          }
          if (x.drivingLicenseImage) {
            setFiles({...files, license: state.documents.documentDetails.drivingLicenseImage})
          }
          if (x.panImage) {
            setFiles({...files,pancard: state.documents.documentDetails.panImage})
          }
        }
      }
    }
    console.log(state, updateValue, ".A.A.A.A.A.A.A.");
  }, [])

  const isEnabled = formik.values.adhaarId && formik.values.pancardId;

  const handleSave = async (file, folder) => {
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
            if (folder === "Adhaar") {
              setFiles({ ...files, adhaar: url });
            }
            if (folder === "VoterId") {
              setFiles({ ...files, voter: url });
            }
            if (folder === "PanCard") {
              setFiles({ ...files, pancard: url });
            }
            if (folder === "DrivingLicense") {
              setFiles({ ...files, license: url });
            }
            if (folder === "Passport") {
              setFiles({ ...files, passport: url });
            }
          });
      }
    );
  };

  const Employee = async () => {
    let documentDetails = {
      aadhaarNo: formik.values.adhaarId,
      aadhaarImage: files.adhaar,
      panNo: formik.values.pancardId,
      panImage: files.pancard,
      voterIdNo: formik.values.voter,
      voterIdImage: files.voter,
      drivingLicenseNo: formik.values.driving,
      drivingLicenseImage: files.license,
      dlValidity: formik.values.validTo1,
      passportNo: formik.values.passport,
      passportImage: files.passport,
      passportValidity: formik.values.validTo,
    };
     await setState({...state, documentDetails:documentDetails});
     formik.handleReset({});
     // window.location.pathname = ('/tabslist#Address')
     await props.onActive("Address");
   };

  return (
    <div>
      <div style={{ padding: "2%" }}>
        <CCard className={"document-card-container"}>
          <CRow style={{ paddingTop: "1%", paddingLeft: "2%" }}>
            <CCol md="12" className={"document-role-heading-7"}>
              Document Upload
            </CCol>
          </CRow>

          <CForm autoComplete="off" onSubmit={formik.handleSubmit}>
            <CRow className={"document-role-form-container"}>
              <CCol md="12" lg="12" sm="12">
                <CRow className={"seperator-7"}>
                  <CCol md="2">
                    <CLabel className={"document-form-labels"}>
                      Adhaar Card 
                      <span className={"text-danger"}> *</span>
                    </CLabel>
                  </CCol>
                  <CCol md="4">
                    <CInput
                      type={"text"}
                      name={"adhaarId"}
                      onChange={formik.handleChange}
                      value={formik.values.adhaarId}
                      placeholder="Enter Adhar Card"
                    />
                    {formik.errors.adhaarId ? (
                      <div className="text-danger">
                        {""}
                        {formik.errors.adhaarId}
                      </div>
                    ) : null}
                  </CCol>

                  <CCol md="3">
                    <input
                      id="file"
                      name="file"
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        handleSave(e.target.files[0], "Adhaar");
                      }}
                    />
                  </CCol>
                </CRow>

                <CRow className={"seperator-7"}>
                  <CCol md="2">
                    <CLabel className={"document-form-labels"}>
                      Pan Number 
                      <span className={"text-danger"}> *</span>
                    </CLabel>
                  </CCol>
                  <CCol md="4">
                    <CInput
                      type={"text"}
                      name={"pancardId"}
                      onChange={formik.handleChange}
                      value={updateValue.pancardId ? updateValue.pancardId : formik.values.pancardId}
                      placeholder="Enter Pan No"
                    />
                    {formik.errors.pancardId ? (
                      <div className="text-danger">
                        {" "}
                        {formik.errors.pancardId}
                      </div>
                    ) : null}
                  </CCol>
                  <CCol md="3">
                    <input
                      id="file"
                      name="file"
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        handleSave(e.target.files[0], "PanCard");
                      }}
                    />
                  </CCol>
                </CRow>

                <CRow className={"seperator-7"}>
                  <CCol md="2">
                    <CLabel className={"document-form-labels"}>
                      Voter ID{" "}
                    </CLabel>
                  </CCol>
                  <CCol md="4">
                    <CInput
                      type={"text"}
                      name={"voter"}
                      onChange={formik.handleChange}
                      value={updateValue.voter ? updateValue.voter : formik.values.voter}
                      placeholder="Enter Voter ID"
                    />
                  </CCol>
                  <CCol md="3">
                    <input
                      id="file"
                      name="file"
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        handleSave(e.target.files[0], "VoterId");
                      }}
                    />
                  </CCol>
                </CRow>

                <CRow className={"seperator-7"}>
                  <CCol md="2">
                    <CLabel className={"document-form-labels"}>
                      Driving License{" "}
                    </CLabel>
                  </CCol>
                  <CCol md="4">
                    <CInput
                      type={"text"}
                      name={"driving"}
                      onChange={formik.handleChange}
                      value={updateValue.driving ? updateValue.driving : formik.values.driving}
                      placeholder="Enter Driving License "
                    />  
                  </CCol>
                  <CCol md="1.5">
                    <CLabel className={"document-form-labels"}>
                      Valid Upto{" "}
                    </CLabel>
                  </CCol>
                  <CCol md="3">
                    <CInput
                      type={"date"}
                      name={"validTo1"}
                      onChange={formik.handleChange}
                      value={updateValue.validTo1 ? updateValue.validTo1 : formik.values.validTo1}
                    />
                  </CCol>
                  <CCol md="1">
                    <input
                      id="file"
                      name="file"
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        handleSave(e.target.files[0], "DrivingLicense");
                      }}
                    />
                  </CCol>
                </CRow>

                <CRow className={"seperator-7"}>
                  <CCol md="2">
                    <CLabel className={"document-form-labels"}>
                      Passport Number{" "}
                    </CLabel>
                  </CCol>
                  <CCol md="4">
                    <CInput
                      type={"text"}
                      name={"passport"}
                      onChange={formik.handleChange}
                      value={updateValue.passport ? updateValue.passport : formik.values.passport}
                      placeholder="Enter Passport Number"
                    />
                  </CCol>
                  <CCol md="1.5">
                    <CLabel className={"document-form-labels"}>
                      Valid Upto{" "}
                    </CLabel>
                  </CCol>
                  <CCol md="3">
                    <CInput
                      type={"date"}
                      name={"validTo"}
                      onChange={formik.handleChange}
                      value={updateValue.validTo ? updateValue.validTo : formik.values.validTo}

                      placeholder="Default "
                    />
                  </CCol>
                  <CCol md="1">
                    <input
                      id="file"
                      name="file"
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        handleSave(e.target.files[0], "Passport");
                      }}
                    />
                  </CCol>
                </CRow>

                <CCol md="10"></CCol>
              </CCol>
            </CRow>
          </CForm>
          <CRow>
            <CRow style={{ paddingLeft: "84%" }}>
              <div className="add">
                <CCol md="12">
                  <CButton
                    shape={"pill"}
                    className={"saveBtn"}
                    disabled={!isEnabled}
                    onClick={Employee}
                  >
                    Next
                  </CButton>
                </CCol>
              </div>
              <div className="adds">
                <CCol md="12">
                  <CButton
                    shape={"pill"}
                    className={"cancelBtn"}
                    onClick={() => {
                      props.onActive("EducationDetails");
                    }}
                  >
                    {" "}
                    Back
                  </CButton>
                </CCol>
              </div>
            </CRow>
          </CRow>
        </CCard>
      </div>
    </div>
  );
}

export default Document;
