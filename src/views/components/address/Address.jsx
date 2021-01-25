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
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import "./Address.css";
import { addAllEmployee, updateEmployee } from "../../../services/ApiService";
import { EmployeeContext } from "../../../services/EmployeeContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IconGroup } from "semantic-ui-react";

function Address(props) {
  const history = useHistory();
  const [state, setState] = React.useContext(EmployeeContext);
  const [permanent, setPermanent] = useState(false);
  const [error, setError] = useState("");
  const [updateValue, setUpdateValue] = useState({});
  const [posts, setPosts] = useState([]);

  console.log(state, "address");

  const formik = useFormik({
    initialValues: {
      t_address1: "",
      // t_address2: '',
      t_country: "",
      t_pincode: "",
      t_state: "",
      t_city: "",
      t_area: "",
      t_mobileNo: "",
      t_email: "",

      p_address1: "",
      // p_address2: '',
      p_country: "",
      p_pincode: "",
      p_state: "",
      p_city: "",
      p_area: "",
      p_mobileNo: "",
      p_email: "",
    },

    validationSchema: yup.object({
      t_address1: yup.string().required("Address 1 is Required"),
      // .min(5 , "Minimum 5 charcter" )
      // t_address2: yup.string()
      //   .required("Address 2 is Required"),
      t_country: yup.string().required("Country is Required"),
      t_pincode: yup
        .string()
        .required("Pincode is Required")
        .min(6, "Minimum 6 charcter")
        .max(6, "Minimum 6 charcter"),
      t_state: yup.string().required("State is Required"),
      t_city: yup.string().required("City is Required"),
      t_area: yup.string().required("Area is Required"),
      t_mobileNo: yup
        .string()
        .required("Phone Number is Required")
        .min(10, "Minimum 10 charcter")
        .max(13, "Minimum 13 charcter"),
      t_email: yup
        .string()
        .required("Email Id is Required")
        .email("Please enter valid email"),

      p_address1: yup.string().required("Address 1 is Required"),
      // .min(5 , "Minimum 5 charcter" )
      // p_address2: yup.string()
      //   .required("Address 2 is Required"),
      p_country: yup.string().required("Country is Required"),
      p_pincode: yup.string().required("Pincode is Required"),
      p_state: yup.string().required("State is Required"),
      p_city: yup.string().required("City is Required"),
      p_area: yup.string().required("Area is Required"),
      p_mobileNo: yup.string().required("Phone Number is Required"),
      p_email: yup.string().required("Email Id is Required"),
    }),
    onSubmit: (userInputData) => {
      console.log(userInputData);
    },
  });

  const isEnabled =
    formik.values.t_address1 &&
    formik.values.t_country &&
    formik.values.t_pincode &&
    formik.values.t_state &&
    formik.values.t_city &&
    formik.values.t_area &&
    formik.values.t_mobileNo &&
    formik.values.t_email &&
    formik.values.p_address1 &&
    formik.values.p_country &&
    formik.values.p_state &&
    formik.values.p_city &&
    formik.values.p_area &&
    formik.values.p_mobileNo &&
    formik.values.p_email;

  const checkPermenat = () => {
    console.log("hello");
    setPermanent(!permanent);

    // let val = formik.values;

    formik.values.p_address1 = formik.values.t_address1;
    formik.values.p_address2 = formik.values.t_address2;
    formik.values.p_country = formik.values.t_country;
    formik.values.p_state = formik.values.t_state;
    formik.values.p_city = formik.values.t_city;
    formik.values.p_area = formik.values.t_area;
    formik.values.p_pincode = formik.values.t_pincode;
    formik.values.p_mobileNo = formik.values.t_mobileNo;
    formik.values.p_email = formik.values.t_email;

    console.log(formik.values.p_address1);
    console.log(formik.values.p_address2);
  };

  const addAddress = async () => {
    let temp = {
      address1: formik.values.t_address1,
      address2: formik.values.t_address2,
      country: formik.values.t_country,
      state: formik.values.t_state,
      city: formik.values.t_city,
      area: formik.values.t_area,
      pincode: formik.values.t_pincode,
      mobileNo: formik.values.t_mobileNo,
      email: formik.values.t_email,
    };
    let perm = {
      address1: formik.values.p_address1,
      address2: formik.values.p_address2,
      country: formik.values.p_country,
      state: formik.values.p_state,
      city: formik.values.p_city,
      area: formik.values.p_area,
      pincode: formik.values.p_pincode,
      mobileNo: formik.values.p_mobileNo,
      email: formik.values.p_email,
    };

    let addresses;
    if (permanent) {
      addresses = {
        temproaryAddress: temp,
        permanentAddress: perm,
        isSameAddress: permanent,
      };
    } else {
      addresses = {
        temproaryAddress: temp,
        permanentAddress: temp,
        isSameAddress: permanent,
      };
    }
    if (!state._id) {
      try {
        let response, roles;
        if (state.employeeRole._id) {
          roles = state.employeeRole._id;
        } else {
          roles = state.employeeRole;
        }
        response = await addAllEmployee({
          ...state,
          addresses: { ...addresses },
          id: state._id,
          employeeRole: roles,
        });
        console.log(response,"xxx123");
        if (response) {
            if (response.success) {
              toast.success(response.message, { autoClose: 1000 });
              formik.handleReset({});
              setState({
                family: [],
                experience: [],
                education: [],
                document: [],
              });
              setTimeout(() => {
                history.push("/EmployeeData");
              }, 1500);
            }
        }
      } catch (e) {
        console.log(e);
        toast.error(e.error, { autoClose: 1000 });
      }
    } else {
      try {
        let response;
        let role;
        if (state.employeeRole) {
          if (state.employeeRole._id) {
            role = state.employeeRole._id;
          } else {
            role = state.employeeRole;
          }
        }
        response = await updateEmployee({
          ...state,
          addresses,
          employeeRole: role,
        });
        if (response) {
          if (response.data) {
            if (response.data.success === true) {
              toast.success(response.data.message, { autoClose: 1000 });
              formik.handleReset({});
              setState({
                family: [],
                experience: [],
                education: [],
                document: [],
              });
              setTimeout(() => {
                history.push("/EmployeeData");
              }, 1500);
            }
          }
        }
      } catch (e) {
        console.log(e);
        toast.error(e.error, { autoClose: 1000 });
      }
    }
  };

  useEffect(() => {
    setError("");
  }, []);

  useEffect(() => {
    if (state._id) {
      console.log(setUpdateValue);
      if (state.addressDetails) {
        if (state.addressDetails.temproaryAddress) {
          formik.values.t_address1 =
            state.addressDetails.temproaryAddress.address1;
          formik.values.t_address2 =
            state.addressDetails.temproaryAddress.address2;
          formik.values.t_country =
            state.addressDetails.temproaryAddress.country;
          formik.values.t_state = state.addressDetails.temproaryAddress.state;
          formik.values.t_city = state.addressDetails.temproaryAddress.city;
          formik.values.t_area = state.addressDetails.temproaryAddress.area;
          formik.values.t_pincode =
            state.addressDetails.temproaryAddress.pincode;
          formik.values.t_mobileNo =
            state.addressDetails.temproaryAddress.mobileNo;
          formik.values.t_email = state.addressDetails.temproaryAddress.email;
        }
        if (state.addressDetails.permanentAddress) {
          formik.values.p_address1 =
            state.addressDetails.permanentAddress.address1;
          formik.values.p_address2 =
            state.addressDetails.permanentAddress.address2;
          formik.values.p_country =
            state.addressDetails.permanentAddress.country;
          formik.values.p_state = state.addressDetails.permanentAddress.state;
          formik.values.p_city = state.addressDetails.permanentAddress.city;
          formik.values.p_area = state.addressDetails.permanentAddress.area;
          formik.values.p_pincode =
            state.addressDetails.permanentAddress.pincode;
          formik.values.p_mobileNo =
            state.addressDetails.permanentAddress.mobileNo;
          formik.values.p_email = state.addressDetails.permanentAddress.email;
        }
        if (state.addressDetails.isSameAddress) {
          setPermanent(state.addressDetails.isSameAddress);
        }
      }
    }
    console.log(state, updateValue, "testing");
  }, []);

  const Cancel = () => {
    formik.handleReset({});
  };

  return (
    <div>
      <div style={{ padding: "2%" }}>
        <CCard className={"Address-card-container"}>
          <CRow style={{ paddingTop: "1%", paddingLeft: "2%" }}>
            <CCol md="12" className={"address-heading"}>
              Communication Address{" "}
            </CCol>
          </CRow>

          <CForm autoComplete="off">
            <CRow className={"address-form-container "}>
              <CCol md="12" lg="12" sm="12">
                {/* <CRow className={'seperator'}>
                  <CCol md='4'>
                    <CLabel className={'form-labels3'}>Employee Name</CLabel>
                    <CInput type={"text"} name={'description'}
                      placeholder='' />

                  </CCol>
                </CRow> */}

                <CRow className={"seperator"}>
                  <CCol>
                    <h4>Temproary Address</h4>
                  </CCol>

                  <CCol className={"checkbox"}>
                    <CInput
                      type="checkbox"
                      className={"checkbox"}
                      checked={permanent}
                      onClick={checkPermenat}
                    />
                    <div className={"text"}>
                      <h4>Permanent Address</h4>
                    </div>
                    <div className={"texts"}>
                      <h6>
                        (select if permanent address same as the temproary
                        address)
                      </h6>
                    </div>
                  </CCol>
                </CRow>

                <CRow className={"seperator"}>
                  <CCol>
                    <CLabel className={"form-labels3"}>
                      Address 1<span className={"text-danger"}> *</span>
                    </CLabel>
                    <CInput
                      type={"text"}
                      name={"t_address1"}
                      onChange={formik.handleChange}
                      value={
                        updateValue.t_address1
                          ? updateValue.t_address1
                          : formik.values.t_address1
                      }
                      placeholder="Enter Address 1"
                    />
                    {formik.errors.t_address1 ? (
                      <div className="text-danger">
                        {" "}
                        {formik.errors.t_address1}
                      </div>
                    ) : null}
                  </CCol>

                  <CCol>
                    <CLabel className={"form-labels3"}>
                      Address 1<span className={"text-danger"}> *</span>
                    </CLabel>
                    <CInput
                      type={"text"}
                      name={"p_address1"}
                      onChange={formik.handleChange}
                      value={
                        permanent === true
                          ? formik.values.t_address1
                          : formik.values.p_address1
                      }
                      // disabled={  === true ? true : false}
                      placeholder="Enter Address "
                    />
                    {/* {formik.errors.p_address1 ?
                      <div className="text-danger"> {formik.errors.p_address1}</div>
                      : null
                    } */}
                  </CCol>
                </CRow>

                <CRow className={"seperator"}>
                  <CCol>
                    <CLabel className={"form-labels3"}>Address 2 </CLabel>
                    <CInput
                      type={"text"}
                      name={"t_address2"}
                      onChange={formik.handleChange}
                      value={
                        updateValue.t_address2
                          ? updateValue.t_address2
                          : formik.values.t_address2
                      }
                      placeholder="Enter Address 2"
                    />
                    {/* {formik.errors.t_address2 ?
                      <div className="text-danger"> {formik.errors.t_address2}</div>
                      : null
                    } */}
                  </CCol>

                  <CCol>
                    <CLabel className={"form-labels3"}>Address 2 </CLabel>
                    <CInput
                      type={"text"}
                      name={"p_address2"}
                      onChange={formik.handleChange}
                      value={
                        permanent === true
                          ? formik.values.t_address2
                          : formik.values.p_address2
                      }
                      // disabled={permanent === true ? true : false}
                      placeholder="Enter Address 2"
                    />
                    {/* {formik.errors.p_address2 ?
                      <div className="text-danger"> {formik.errors.p_address2}</div>
                      : null
                    } */}
                  </CCol>
                </CRow>

                <CRow className={"seperator"}>
                  <CCol>
                    <CLabel className={"form-labels3"}>
                      Country
                      <span className={"text-danger"}> *</span>
                    </CLabel>
                    <CInput
                      type={"text"}
                      name={"t_country"}
                      onChange={formik.handleChange}
                      value={
                        updateValue.t_country
                          ? updateValue.t_country
                          : formik.values.t_country
                      }
                      placeholder="Enter Country"
                    />
                    {formik.errors.t_country ? (
                      <div className="text-danger">
                        {" "}
                        {formik.errors.t_country}
                      </div>
                    ) : null}
                  </CCol>

                  <CCol>
                    <CLabel className={"form-labels3"}>
                      Country
                      <span className={"text-danger"}> *</span>
                    </CLabel>
                    <CInput
                      type={"text"}
                      name={"p_country"}
                      onChange={formik.handleChange}
                      value={
                        permanent === true
                          ? formik.values.t_country
                          : formik.values.p_country
                      }
                      placeholder="Enter Country"
                    />
                    {/* {formik.errors.p_country ?
                      <div className="text-danger"> {formik.errors.p_country}</div>
                      : null
                    } */}
                  </CCol>
                </CRow>

                <CRow className={"seperator "}>
                  <CCol>
                    <CLabel className={"form-labels3"}>
                      State
                      <span className={"text-danger"}> *</span>
                    </CLabel>
                    <CInput
                      type={"text"}
                      name={"t_state"}
                      onChange={formik.handleChange}
                      value={
                        updateValue.t_state
                          ? updateValue.t_state
                          : formik.values.t_state
                      }
                      placeholder="Enter State"
                    />
                    {formik.errors.t_state ? (
                      <div className="text-danger">
                        {" "}
                        {formik.errors.t_state}
                      </div>
                    ) : null}
                  </CCol>

                  <CCol>
                    <CLabel className={"form-labels3"}>
                      State
                      <span className={"text-danger"}> *</span>
                    </CLabel>
                    <CInput
                      type={"text"}
                      name={"p_state"}
                      onChange={formik.handleChange}
                      value={
                        permanent === true
                          ? formik.values.t_state
                          : formik.values.p_state
                      }
                      placeholder="Enter State"
                    />
                    {/* {formik.errors.p_state ?
                      <div className="text-danger"> {formik.errors.p_state}</div>
                      : null
                    } */}
                  </CCol>
                </CRow>

                <CRow className={"seperator "}>
                  <CCol>
                    <CLabel className={"form-labels3"}>
                      City
                      <span className={"text-danger"}> *</span>
                    </CLabel>
                    <CInput
                      type={"text"}
                      name={"t_city"}
                      onChange={formik.handleChange}
                      value={
                        updateValue.t_city
                          ? updateValue.t_city
                          : formik.values.t_city
                      }
                      placeholder="Enter City"
                    />
                    {formik.errors.t_city ? (
                      <div className="text-danger"> {formik.errors.t_city}</div>
                    ) : null}
                  </CCol>

                  <CCol>
                    <CLabel className={"form-labels3"}>
                      City
                      <span className={"text-danger"}> *</span>
                    </CLabel>
                    <CInput
                      type={"text"}
                      name={"p_city"}
                      onChange={formik.handleChange}
                      value={
                        permanent === true
                          ? formik.values.t_city
                          : formik.values.p_city
                      }
                      placeholder="Enter City"
                    />
                    {/* {formik.errors.p_city ?
                      <div className="text-danger"> {formik.errors.p_city}</div>
                      : null
                    } */}
                  </CCol>
                </CRow>

                <CRow className={"seperator "}>
                  <CCol>
                    <CLabel className={"form-labels3"}>
                      Area
                      <span className={"text-danger"}> *</span>
                    </CLabel>
                    <CInput
                      type={"text"}
                      name={"t_area"}
                      onChange={formik.handleChange}
                      value={
                        updateValue.t_area
                          ? updateValue.t_area
                          : formik.values.t_area
                      }
                      placeholder="Enter Area"
                    />
                    {formik.errors.t_area ? (
                      <div className="text-danger"> {formik.errors.t_area}</div>
                    ) : null}
                  </CCol>

                  <CCol>
                    <CLabel className={"form-labels3"}>
                      Area
                      <span className={"text-danger"}> *</span>
                    </CLabel>
                    <CInput
                      type={"text"}
                      name={"p_area"}
                      onChange={formik.handleChange}
                      value={
                        permanent === true
                          ? formik.values.t_area
                          : formik.values.p_area
                      }
                      placeholder="Enter Area"
                    />
                    {/* {formik.errors.p_area ?
                      <div className="text-danger"> {formik.errors.p_area}</div>
                      : null
                    } */}
                  </CCol>
                </CRow>

                <CRow className={"seperator "}>
                  <CCol>
                    <CLabel className={"form-labels3"}>
                      Pincode
                      <span className={"text-danger"}> *</span>
                    </CLabel>
                    <CInput
                      type={"number"}
                      name={"t_pincode"}
                      onChange={formik.handleChange}
                      value={
                        updateValue.t_pincode
                          ? updateValue.t_pincode
                          : formik.values.t_pincode
                      }
                      placeholder="Enter Pincode"
                    />
                    {formik.errors.t_pincode ? (
                      <div className="text-danger">
                        {" "}
                        {formik.errors.t_pincode}
                      </div>
                    ) : null}
                  </CCol>

                  <CCol>
                    <CLabel className={"form-labels3"}>
                      Pincode
                      <span className={"text-danger"}> *</span>
                    </CLabel>
                    <CInput
                      type={"number"}
                      name={"p_pincode"}
                      onChange={formik.handleChange}
                      value={
                        permanent === true
                          ? formik.values.t_pincode
                          : formik.values.p_pincode
                      }
                      placeholder="Enter Pincode "
                    />
                    {/* {formik.errors.p_pincode ?
                      <div className="text-danger"> {formik.errors.p_pincode}</div>
                      : null
                    } */}
                  </CCol>
                </CRow>

                <CRow className={"seperator "}>
                  <CCol>
                    <CLabel className={"form-labels3"}>
                      Phone Number
                      <span className={"text-danger"}> *</span>
                    </CLabel>
                    <CInput
                      type={"number"}
                      name={"t_mobileNo"}
                      onChange={formik.handleChange}
                      value={
                        updateValue.t_mobileNo
                          ? updateValue.t_mobileNo
                          : formik.values.t_mobileNo
                      }
                      placeholder="Enter Phone Number"
                    />
                    {formik.errors.t_mobileNo ? (
                      <div className="text-danger">
                        {" "}
                        {formik.errors.t_mobileNo}
                      </div>
                    ) : null}
                  </CCol>

                  <CCol>
                    <CLabel className={"form-labels3"}>
                      Phone Number
                      <span className={"text-danger"}> *</span>
                    </CLabel>
                    <CInput
                      type={"number"}
                      name={"p_mobileNo"}
                      onChange={formik.handleChange}
                      value={
                        permanent === true
                          ? formik.values.t_mobileNo
                          : formik.values.p_mobileNo
                      }
                      placeholder="Enter Phone Number"
                    />
                    {/* {formik.errors.p_mobileNo ?
                      <div className="text-danger"> {formik.errors.p_mobileNo}</div>
                      : null
                    } */}
                  </CCol>
                </CRow>

                <CRow className={"seperator "}>
                  <CCol>
                    <CLabel className={"form-labels3"}>
                      Email ID
                      <span className={"text-danger"}> *</span>
                    </CLabel>
                    <CInput
                      type={"text"}
                      name={"t_email"}
                      onChange={formik.handleChange}
                      value={
                        updateValue.t_email
                          ? updateValue.t_email
                          : formik.values.t_email
                      }
                      placeholder="Enter Email ID"
                    />
                    {formik.errors.t_email ? (
                      <div className="text-danger">
                        {" "}
                        {formik.errors.t_email ? "Email is-invalid" : ""}
                      </div>
                    ) : null}
                  </CCol>

                  <CCol>
                    <CLabel className={"form-labels3"}>
                      Email ID
                      <span className={"text-danger"}> *</span>
                    </CLabel>
                    <CInput
                      type={"text"}
                      name={"p_email"}
                      onChange={formik.handleChange}
                      value={
                        permanent === true
                          ? formik.values.t_email
                          : formik.values.p_email
                      }
                      placeholder="Enter Email ID"
                    />
                    {/* {formik.errors.p_email ?
                      <div className="text-danger"> {formik.errors.p_email}</div>
                      : null
                    } */}
                  </CCol>
                </CRow>
              </CCol>
            </CRow>

            {/* <CRow style={{ paddingLeft: "50%" }}>
              <div class="address">
                <CCol md="12">
                  <CButton
                    // shape={"pill"}
                    className={"btn btn-pill btn-danger"}
                    href={"./EmployeeData"}
                    onClick={""}
                  >
                    {" "}
                    Back
                  </CButton>
                </CCol>
              </div>
            </CRow> */}
            <CRow>
              {/* <CCol md="12">
                  <CButton
                    shape={"pill"}
                    className={"btn btn-info"}
                    onClick={addAddress}
                  >
                    + Save
                  </CButton>
                </CCol> */}
              <CRow style={{ paddingLeft: "68%" }}>
                <div>
                  <CCol md="12">
                    <CButton
                      shape={"pill"}
                      className={"saveBtn"}
                      disabled={!isEnabled}
                      onClick={addAddress}
                    >
                      + Save
                    </CButton>
                  </CCol>
                </div>

                <div>
                  <CCol md="12">
                    <CButton
                      // shape={"pill"}
                      className={"cancelBtn"}
                      onClick={Cancel}
                    >
                      {" "}
                      Cancel
                    </CButton>
                  </CCol>
                </div>

                <div>
                  <CCol md="12">
                    <CButton
                      // shape={"pill"}
                      className={"cancelBtn"}
                      onClick={() => {
                        history.push("/EmployeeData");
                      }}
                    >
                      {" "}
                      Back
                    </CButton>
                  </CCol>
                </div>
              </CRow>
              {error !== "" ? <p>{error}</p> : null}
              <ToastContainer
                className="toast--warning"
                autoClose={1000}
                style={{ width: "300px" }}
              />
            </CRow>
          </CForm>
        </CCard>
      </div>
    </div>
  );
}

export default Address;
