import React, { useState, useEffect, useContext } from "react";
import "react-virtualized/styles.css";
import {
  CRow,
  CCard,
  CCol,
  CButton,
  CSelect,
  CLabel,
  CInput,
  CDataTable,
  CBadge,
} from "@coreui/react";
import { useFormik } from "formik";
import * as yup from "yup";
import "./EducationDetails.css";
import {
  getEducation,
} from "../../../services/ApiService";
import { EmployeeContext } from "../../../services/EmployeeContext";
import { toast, ToastContainer } from "react-toastify";
import ConfirmDelete from "../confirmMessage/confirmDelete";
import Select from "react-select";

function EducationDetails(props) {
  const [state, setState] = useContext(EmployeeContext);
  const [updateValue, setUpdateValue] = useState({});
  const [educationList, setEducationList] = useState([]);

  const [RoleList, setRoleList] = useState([]);

  const [deleteId, setDeleteId] = useState({ id: "", name: "", show: false });
  const [posts, setPosts] = useState([]);
  const [board, setBoard] = useState("");
  const [passings, setPassing] = useState({
    qualification: "",
    schoolAndCollege: "",
    StateBoardandUniversity: "",
    yearOfPassing: "",
    percentage: "",
  });

  useEffect(() => {
    let datas = [];
    state.education.map((x) => {
      datas.push({
        ...x,
        qualification: { label: x.qualification, value: x.qualification },
      });
    });
    setPosts(datas);
    setEducationList([
      { value: "10th", label: "10th" },
      { value: "12th", label: "12th" },
      { value: "BE", label: "BE" },
      { value: "B.Tech", label: "B.Tech" },
    ]);
  }, []);

  const formik = useFormik({
    initialValues: {
      qualification: "",
      schoolAndCollege: "",
      StateBoardandUniversity: "",
      yearOfPassing: "",
      percentage: "",
    },
    validationSchema: yup.object({
      qualification: yup.string().required(" Qualification is Required"),
      schoolAndCollege: yup.string().required("School/College is Required"),
      StateBoardandUniversity: yup
        .string()
        .required("Board/University Required"),
      yearOfPassing: yup.string().required("Passing is Required"),
      percentage: yup.string().required("Percentage is Required"),
    }),
    onSubmit: (userInputData) => {
      console.log(userInputData);
    },
  });

  useEffect(() => {
    setRoleList(true);
  }, []);

  useEffect(() => {
    console.log(posts);
  }, [posts]);

  const Education = async () => {
    formik.handleReset({});
    passings.qualification = passings.qualification.value;
    let field = [
      "qualification",
      "schoolAndCollege",
      "StateBoardandUniversity",
      "yearOfPassing",
      "percentage",
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
        let data = posts;
        data.push({
          ...passings,
          _id: `${
            Math.random() * Math.random() * Math.random() * 10000000000000000
          }`,
        });
        if (data.length > 0) {
          console.log(data);
          setPosts(data);
        }
        setPassing({
          qualification: "",
          schoolAndCollege: "",
          StateBoardandUniversity: "",
          yearOfPassing: "",
          percentage: "",
        });
      } else {
        let data = posts;
        let elementIndex = data.findIndex((x) => {
          return x._id === passings._id;
        });
        data[elementIndex] = passings;
        setPosts(data);
        setPassing({
          qualification: "",
          schoolAndCollege: "",
          StateBoardandUniversity: "",
          yearOfPassing: "",
          percentage: "",
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
    async function getAllEducation() {
      var response;
      try {
        response = await getEducation();
        console.log(response, "sdf");
        if (response) {
          if (response) {
            setPosts(response.educationalDetails.qualification);
          }
        }
      } catch (e) {
        console.log(e);
      }
    }

    getAllEducation();
  }, [board]);

  const Delete = async () => {
    let newArray = posts.filter((x) => {
      return x._id !== deleteId.id;
    });
    setPosts(newArray);
    toast.success("Deleted Sucessfully")
    setTimeout(() => {
       setDeleteId(false);
    }, 10);
  };

  useEffect(() => {
    if (state._id) {
      setUpdateValue({ _id: state._id });
      if (state.educationalDetails) {
        if (state.educationalDetails.qualification) {
          setPosts(state.educationalDetails.qualification);
        }
      }
    }
  }, []);

  const employee = async () => {
    posts.map((x) => {
      delete x._id;
    });
    await setState({ ...state, education: posts });
    formik.handleReset({});
    console.log(state);
    await props.onActive("Document");
  };

  const Cancel = () => {
    formik.handleReset({});
  };
  const [details, setDetails] = useState([]);

  const fields = [
    { key: "qualification", _style: { width: "10%" } },
    { key: "schoolAndCollege", _style: { width: "10%" } },
    { key: "StateBoardandUniversity", _style: { width: "20%" } },
    { key: "yearOfPassing", _style: { width: "10%" } },
    { key: "percentage", _style: { width: "10%" } },
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

  const deletemodal = (id,name) => {
    setDeleteId({ id: id, show: true, name:name });
  };
  const cancelConfirmDlete = () => {
    setDeleteId({ id: "", show: false });
  };
  return (
    <div>
      {RoleList && (
        <div>
          <CCard className={"education-card-container"}>
            <CRow
              style={{
                padding: "10px",
                paddingLeft: "20px",
                paddingRight: "20px",
              }}
            >
              <CCol md="12" className={"educationdetail-heading"}>
                Education Qualification
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
                <CRow className={"seperator-3"}>
                  <CCol md="3">
                    <CLabel className={"form-labels5"}>Qualification </CLabel>
                    <Select
                      options={educationList}
                      value={passings.qualification}
                      onChange={(e) =>
                        setPassing({
                          ...passings,
                          qualification: e,
                        })
                      }
                    />
                    {formik.errors.qualification ? (
                      <div className="text-danger">
                        {" "}
                        {formik.errors.qualification}
                      </div>
                    ) : null}
                  </CCol>
                  <CCol md="3">
                    <CLabel className={"form-labels5"}>School/College </CLabel>
                    <CInput
                      type={"text"}
                      name={"schoolAndCollege"}
                      onChange={(e) =>
                        setPassing({
                          ...passings,
                          schoolAndCollege: e.target.value,
                        })
                      }
                      value={passings.schoolAndCollege}
                      placeholder="Enter School/College"
                    />
                    {formik.errors.schoolAndCollege ? (
                      <div className="text-danger">
                        {" "}
                        {formik.errors.schoolAndCollege}
                      </div>
                    ) : null}
                  </CCol>

                  <CCol md="3">
                    <CLabel className={"form-labels5"}>
                      Board/University{" "}
                    </CLabel>
                    <CInput
                      type={"text"}
                      name={"StateBoardandUniversity"}
                      onChange={(e) =>
                        setPassing({
                          ...passings,
                          StateBoardandUniversity: e.target.value,
                        })
                      }
                      value={passings.StateBoardandUniversity}
                      placeholder="Enter Board/university"
                    />
                    {formik.errors.StateBoardandUniversity ? (
                      <div className="text-danger">
                        {" "}
                        {formik.errors.StateBoardandUniversity}
                      </div>
                    ) : null}
                  </CCol>
                </CRow>

                <CRow className={"seperator-3"}>
                  <CCol md="3">
                    <CLabel className={"form-labels5"}>Year of Passing </CLabel>
                    <CInput
                      type={"text"}
                      name={"yearOfPassing"}
                      onChange={(e) =>
                        setPassing({
                          ...passings,
                          yearOfPassing: e.target.value,
                        })
                      }
                      value={
                        passings
                          ? passings.yearOfPassing
                          : formik.values.yearOfPassing
                      }
                      placeholder="Enter Year of Passing"
                    />
                    {formik.errors.yearOfPassing ? (
                      <div className="text-danger">
                        {" "}
                        {formik.errors.yearOfPassing}
                      </div>
                    ) : null}
                  </CCol>
                  <CCol md="3">
                    <CLabel className={"form-labels5"}>Percentage </CLabel>
                    <CInput
                      type={"text"}
                      name={"percentage"}
                      onChange={(e) =>
                        setPassing({
                          ...passings,
                          percentage: e.target.value,
                        })
                      }
                      value={passings.percentage}
                      placeholder="Enter Percentage"
                    />
                    {formik.errors.percentage ? (
                      <div className="text-danger">
                        {" "}
                        {formik.errors.percentage}
                      </div>
                    ) : null}
                  </CCol>
                </CRow>

                <CRow style={{ paddingLeft: "64%" }}>
                  <div>
                    <CCol md="12">
                      <CButton
                        shape={"pill"}
                        className={"saveBtn"}
                        type={"submit"}
                        onClick={Education}
                      >
                        {passings !== "" ? "Save" : "+ Add "}
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
              </CCol>
            </CRow>
            <CRow style={{ paddingTop: "2%", paddingLeft: "2%" }}>
              <CCol md="12" className={"Education-heading"}>
                Education List{" "}
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
                                  setPassing({
                                    ...posts[index],
                                    qualification: {
                                      value: posts[index].qualification,
                                      label: posts[index].qualification,
                                    },
                                  })
                                }
                                class="fas fa-edit"
                              ></i>
                              <i
                                onClick={() => deletemodal(posts[index]._id,posts[index].qualification)}
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
              <div className="add">
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
              <div className="adds">
                <CCol md="12">
                  <CButton
                    className={"cancelBtn"}
                    onClick={() => {
                      props.onActive("AddExperienceDetails");
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
export default EducationDetails;
