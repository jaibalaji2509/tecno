import React, { useContext, useState, useEffect } from "react";
import { AutoSizer, Table, Column } from "react-virtualized";
import "react-virtualized/styles.css";
import {
  CRow,
  CCard,
  CCol,
  CDataTable,
  CBadge,
  CButton,
  CLabel,
  CInput,
} from "@coreui/react";
import {
  // Formik,
  useFormik,
} from "formik";
import * as yup from "yup";
import "./ExperienceDetails.css";
import {
  getExperience,
  updateExperience,
  deleteExperience,
} from "../../../services/ApiService";
// import { propTypes } from 'react-bootstrap/esm/Image';
import { EmployeeContext } from "../../../services/EmployeeContext";
import { toast, ToastContainer } from "react-toastify";
import ConfirmDelete from "../confirmMessage/confirmDelete";

function ExperienceDetails(props) {
  const [RoleList] = useState(true);
  const [state, setState] = useContext(EmployeeContext);
  const [updateValue, setUpdateValue] = useState({});
  const [deleteId, setDeleteId] = useState({ id: "", name: "", show: false });
  const _noContentRenderer = () => {
    return <div>No Office types.</div>;
  };

  // const [details, setdetails] = useState("")
  const [posts, setPosts] = useState([]);
  const [board, setBoard] = useState("");
  const [passings, setPassing] = useState({
    nameOfCompany: "",
    officeLocation: "",
    department: "",
    designation: "",
    role: "",
    dateOfJoining: "",
    dateOfRelieving: "",
    experienceDuration: "",
  });

  useEffect(() => {
    console.log(state.experience, "1111");
    setPosts(state.experience);
  }, []);

  const formik = useFormik({
    initialValues: {
      nameOfCompany: "",
      officeLocation: "",
      department: "",
      designation: "",
      role: "",
      dateOfJoining: "",
      dateOfRelieving: "",
      experienceDuration: "",
    },
    validationSchema: yup.object({
      nameOfCompany: yup.string().required(" Company name is Required"),
      // .min(5 , "Minimum 5 charcter" )
      officeLocation: yup.string().required("Office location is Required"),
      department: yup.string().required("Department is Required"),
      designation: yup.string().required("Designation is Required"),
      role: yup.string().required("Role is Required"),
      dateOfJoining: yup.string().required("Joining date is Required"),
      dateOfRelieving: yup.string().required("Relieving date is Required"),
      experienceDuration: yup.string().required("Experience is Required"),
    }),
    onSubmit: (userInputData, { resetForm }) => {
      console.log(userInputData);
      resetForm({ userInputData: "" });
    },
  });

  const Experience = async ({ resetForm }) => {
    let field = [
      "nameOfCompany",
      "officeLocation",
      "department",
      "designation",
      "role",
      "dateOfJoining",
      "dateOfRelieving",
      "experienceDuration",
    ];
    let invalid = field.filter((x) => {
      return (
        passings[x] === "" ||
        passings[x] === null ||
        passings[x] === undefined ||
        passings[x] === "undefined"
      );
    });
    console.log(invalid);
    if (invalid.length === 0) {
      if (!passings._id) {
        console.log(passings);
        let data = posts;
        data.push({
          ...passings,
          _id: Math.random() * Math.random() * Math.random() * 10000,
        });
        setPosts(data);
        setPassing({
          nameOfCompany: "",
          officeLocation: "",
          department: "",
          designation: "",
          role: "",
          dateOfJoining: "",
          dateOfRelieving: "",
          experienceDuration: "",
        });
      } else {
        let data = posts;
        let elementIndex = data.findIndex((x) => {
          return x._id === passings._id;
        });
        data[elementIndex] = passings;
        setPosts(data);
        // console.log(setPassing,"data");
        setPassing({
          nameOfCompany: "",
          officeLocation: "",
          department: "",
          designation: "",
          role: "",
          dateOfJoining: "",
          dateOfRelieving: "",
          experienceDuration: "",
        });
      }
    } else {
      let data = "";
      invalid.map((x) => {
        data = `${data}, ${x}`;
      });
      toast.warning(`Please enter value for ${data} fields`, {
        autoClose: 2000,
      });
    }
  };

  useEffect(() => {
    async function getAllExperience() {
      var responses;
      // let body = formik.values
      try {
        responses = await getExperience();
        console.log(responses, "sdf");
        if (responses) {
          setPosts(responses.experienceDetails.organisationDetails);
        }
      } catch (e) {
        console.log(e);
      }
    }

    getAllExperience();
  }, [board]);

  // console.log(passings, 'editdata');

  const Delete = async () => {
    let newArray = posts.filter((x) => {
      return x._id !== deleteId.id;
    });
    setPosts(newArray);
    toast.success("Deleted Sucessfully");
    setTimeout(() => {
      setDeleteId(false);
    }, 10);
  };

  const employee = async () => {
    posts.map((x) => {
      delete x._id;
    });
    await setState({ ...state, experience: posts });
    formik.handleReset({});
    console.log(state, "employee");
    await props.onActive("EducationDetails");
  };

  const Cancel = () => {
    formik.handleReset({});
  };

  useEffect(() => {
    if (state._id) {
      setUpdateValue({ _id: state._id });
      if (state.experienceDetails) {
        if (state.experienceDetails.organisationDetails) {
          setPosts(state.experienceDetails.organisationDetails);
        }
      }
    }
  }, []);

  const [details, setDetails] = useState([]);

  const fields = [
    { key: "nameOfCompany", _style: { width: "10%" } },
    { key: "officeLocation", _style: { width: "10%" } },
    { key: "department", _style: { width: "20%" } },
    { key: "designation", _style: { width: "10%" } },
    { key: "role", _style: { width: "10%" } },
    { key: "dateOfJoining", _style: { width: "20%" } },
    { key: "dateOfRelieving", _style: { width: "10%" } },
    { key: "experienceDuration", _style: { width: "20%" } },

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

  const deletemodal = (id, name) => {
    setDeleteId({ id: id, show: true, name: name });
  };
  const cancelConfirmDlete = () => {
    setDeleteId({ id: "", show: false });
  };
  return (
    <div>
      {RoleList && (
        <div>
          <CCard className={"experience-card-container"}>
            <CRow style={{ padding: "2%" }}>
              <CCol md="12" className={"educationdetail-heading"}>
                Experience Details{" "}
              </CCol>
            </CRow>

            <CRow style={{ padding: "2%" }}>
              <CCol md="3">
                <CLabel className={"form-labels4"}>Name of Company</CLabel>
                <CInput
                  type={"text"}
                  name={"nameOfCompany"}
                  onChange={(e) =>
                    setPassing({
                      ...passings,
                      nameOfCompany: e.target.value,
                    })
                  }
                  value={passings.nameOfCompany}
                  placeholder="Enter Company"
                />
                {formik.errors.nameOfCompany ? (
                  <div className="text-danger">
                    {" "}
                    {formik.errors.nameOfCompany}
                  </div>
                ) : null}
              </CCol>

              <CCol md="3">
                <CLabel className={"form-labels4"}>Office Location</CLabel>
                <CInput
                  type={"text"}
                  name={"officeLocation"}
                  onChange={(e) =>
                    setPassing({
                      ...passings,
                      officeLocation: e.target.value,
                    })
                  }
                  value={passings.officeLocation}
                  placeholder="Enter Location"
                />
                {formik.errors.officeLocation ? (
                  <div className="text-danger">
                    {" "}
                    {formik.errors.officeLocation}
                  </div>
                ) : null}
              </CCol>

              <CCol md="3">
                <CLabel className={"form-labels4"}>Department</CLabel>
                <CInput
                  type={"text"}
                  name={"department"}
                  onChange={(e) =>
                    setPassing({
                      ...passings,
                      department: e.target.value,
                    })
                  }
                  value={passings.department}
                  placeholder="Enter department"
                />
                {formik.errors.department ? (
                  <div className="text-danger"> {formik.errors.department}</div>
                ) : null}
              </CCol>
            </CRow>

            <CRow style={{ padding: "2%" }}>
              <CCol md="3">
                <CLabel className={"form-labels4"}>Desigination</CLabel>
                <CInput
                  type={"text"}
                  name={"designation"}
                  onChange={(e) =>
                    setPassing({
                      ...passings,
                      designation: e.target.value,
                    })
                  }
                  value={passings.designation}
                  placeholder="Enter Name"
                />
                {formik.errors.designation ? (
                  <div className="text-danger">
                    {" "}
                    {formik.errors.designation}
                  </div>
                ) : null}
              </CCol>

              <CCol md="3">
                <CLabel className={"form-labels4"}>Role</CLabel>
                <CInput
                  type={"text"}
                  name={"role"}
                  onChange={(e) =>
                    setPassing({ ...passings, role: e.target.value })
                  }
                  value={passings ? passings.role : formik.values.role}
                  placeholder="Enter Role"
                />
                {formik.errors.role ? (
                  <div className="text-danger"> {formik.errors.role}</div>
                ) : null}
              </CCol>

              <CCol md="3">
                <CLabel className={"form-labels4"}>Date of Joining</CLabel>
                <CInput
                  type={"date"}
                  name={"dateOfJoining"}
                  onChange={(e) =>
                    setPassing({
                      ...passings,
                      dateOfJoining: e.target.value,
                    })
                  }
                  value={passings.dateOfJoining}
                  placeholder="Enter Joining"
                />
                {formik.errors.dateOfJoining ? (
                  <div className="text-danger">
                    {" "}
                    {formik.errors.dateOfJoining}
                  </div>
                ) : null}
              </CCol>
            </CRow>
            <CRow style={{ padding: "2%" }}>
              <CCol md="3">
                <CLabel className={"form-labels4"}>Date of Relieving</CLabel>
                <CInput
                  type={"date"}
                  name={"dateOfRelieving"}
                  onChange={(e) =>
                    setPassing({
                      ...passings,
                      dateOfRelieving: e.target.value,
                    })
                  }
                  value={passings.dateOfRelieving}
                  placeholder="Enter Name"
                />
                {formik.errors.dateOfRelieving ? (
                  <div className="text-danger">
                    {" "}
                    {formik.errors.dateOfRelieving}
                  </div>
                ) : null}
              </CCol>

              <CCol md="3">
                <CLabel className={"form-labels4"}>Experience</CLabel>
                <CInput
                  type={"text"}
                  name={"experienceDuration"}
                  onChange={(e) =>
                    setPassing({
                      ...passings,
                      experienceDuration: e.target.value,
                    })
                  }
                  value={passings.experienceDuration}
                  placeholder="Enter Experience"
                />
                {formik.errors.experienceDuration ? (
                  <div className="text-danger">
                    {" "}
                    {formik.errors.experienceDuration}
                  </div>
                ) : null}
              </CCol>
            </CRow>
            <CRow style={{ paddingLeft: "60%" }}>
              <div>
                <CCol md="12">
                  <CButton
                    shape={"pill"}
                    className={"saveBtn"}
                    onClick={Experience}
                  >
                    {passings._id !== "" ? "Save" : "+ Add"}
                  </CButton>
                </CCol>
              </div>

              <div class="adds">
                <CCol md="12">
                  <CButton className={"cancelBtn"} onClick={Cancel}>
                    {" "}
                    Cancel
                  </CButton>
                </CCol>
              </div>
            </CRow>

            <CRow style={{ paddingTop: "2%", paddingLeft: "2%" }}>
              <CCol md="12" className={"Experience-heading"}>
                Experience Detail List
              </CCol>
            </CRow>

            <CRow
              style={{
                padding: "10px",
                paddingLeft: "20px",
                paddingRight: "20px",
              }}
            >
              <CCol md="12">
                <CRow></CRow>
              </CCol>
            </CRow>
            <CRow style={{ padding: "4%" }}>
              <CCol>
                <CDataTable
                  items={posts}
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
                          {/* <CButton
                            color="primary"
                            variant="outline"
                            shape="square"
                            size="sm"
                            onClick={() => { toggleDetails(index) }}
                          >
                            {details.includes(index) ? 'Hide' : 'Show'}
                          </CButton> */}
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
                                onClick={() => setPassing(posts[index])}
                                class="fas fa-edit"
                              ></i>
                              <i
                                onClick={() =>
                                  deletemodal(
                                    posts[index]._id,
                                    posts[index].nameOfCompany
                                  )
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
                    details: (item, index) => {},
                  }}
                />
              </CCol>
            </CRow>
            <CRow>
              <div class="add">
                <CCol md="12">
                  <CButton
                    shape={"pill"}
                    className={"saveBtn"}
                    onClick={employee}
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
                    className={"cancelBtn"}
                    onClick={() => {
                      props.onActive("FamilyDetails");
                    }}
                  >
                    {" "}
                    Back
                  </CButton>
                </CCol>
              </div>
            </CRow>
            <ToastContainer autoClose={2000}></ToastContainer>
          </CCard>
        </div>
      )}
      <ConfirmDelete
        details={deleteId}
        confirm={Delete}
        cancel={cancelConfirmDlete}
      />
    </div>
  );
}

export default ExperienceDetails;
