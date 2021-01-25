import React, { useContext, useState, useEffect } from "react";
import { AutoSizer, Table, Column } from "react-virtualized";
// import "../suspend/node_modules/react-virtualized/styles.css";
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
import Edit from "../../images/image 2.svg";
import Remove from "../../images/image 15.svg";
import {
  // Formik,
  useFormik,
} from "formik";
import * as yup from "yup";
import "./FamilyList.css";
import {
  getFamily,
  updateFamily,
  deleteFamily,
} from "../../../services/ApiService";
// import { propTypes } from 'react-bootstrap/esm/Image';
import { EmployeeContext } from "../../../services/EmployeeContext";
import Select from "react-select";
import { array } from "prop-types";
import { toast, ToastContainer } from "react-toastify";
import ConfirmDelete from "../confirmMessage/confirmDelete";

function FamilyList(props) {
  const [RoleList] = useState(true);
  const [state, setState] = useContext(EmployeeContext);
  const [updateValue, setUpdateValue] = useState({});
  const [deleteId, setDeleteId] = useState({ id: "", name: "", show: false });
  const [posts, setPosts] = useState([]);
  const [board, setBoard] = useState("");
  const [passings, setPassing] = useState({
    typeOfRelation: "",
    name: "",
    age: "",
  });

  useEffect(() => {
    if (state._id) {
      if (state.familyDetails && state.familyDetails.length > 0) {
        setPosts(state.familyDetails);
        console.log(state.familyDetails,"familyfamily");
      }
    }
  }, []);

  console.log(posts, "fam");

  const formik = useFormik({
    initialValues: {
      typeOfRelation: "",
      name: "",
      age: "",
    },
    validationSchema: yup.object({
      typeOfRelation: yup.string().required(" Relation is Required"),
      name: yup.string().required("Name is Required"),
      age: yup.string().required("Age is Required"),
    }),
    onSubmit: (userInputData, { resetForm }) => {
      console.log(userInputData);
      resetForm({ userInputData: "" });
    },
  });
  // const RemovePeople = (e) =>{
  //   let name =formik.value;
  //   setDeleteId(deleteId.filter((e)=>(e !== name)))
  //   };

  const Family = async () => {
    let field = ["name", "typeOfRelation", "age"];
    console.log(passings);
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
          _id: Math.random() * Math.random() * Math.random() * 10000,
        });
        setPosts(data);
        setPassing({
          typeOfRelation: "",
          name: "",
          age: "",
        });
      } else {
        let data = posts;
        let elementIndex = data.findIndex((x) => {
          return x._id === passings._id;
        });
        data[elementIndex] = passings;
        setPosts(data);
        setPassing({
          typeOfRelation: "",
          name: "",
          age: "",
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
    async function getAllFamily() {
      var responses;
      // let body = formik.values
      try {
        responses = await getFamily();
        console.log(responses, "sdf");
        if (responses) {
          setPosts(responses.Experience.persons);
          console.log(posts, "helo");
        }
      } catch (e) {
        console.log(e);
      }
    }

    getAllFamily();
  }, [board]);

  const employee = async () => {
    posts.map((x) => {
      delete x._id;
    });
    console.log(state, "employeeeeeContext");
    await setState({ ...state, family: posts });
    formik.handleReset({});
    console.log(state, "employee");
    await props.onActive("AddExperienceDetails");
  };

  const Cancel = () => {
    formik.handleReset({});
  };

  // console.log(passings, 'editdata');

  const Delete = async () => {
    let newArray = posts.filter((x) => {
      return x._id !== deleteId.id
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
      if (state.familyDetails) {
        if (state.familyDetails.persons) {
          setPosts(state.familyDetails.persons);
        }
      }
    }
  }, []);

  const options = [
    {
      label: "Father",
    },
    {
      label: "Mother",
    },
  ];
  const [details, setDetails] = useState([]);

  const fields = [
    { key: "typeOfRelation", _style: { width: "30%" } },
    { key: "name", _style: { width: "30%" } },
    { key: "age", _style: { width: "20%" } },
    {
      label: "Action",
      key: "show_details",

      _style: { width: "20%" },
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
    setDeleteId({ id: id, show: true, name: name });
  };
  const cancelConfirmDlete = () => {
    setDeleteId({ id: "", show: false });
  };
  return (
    <div>
      {RoleList && (
        <div>
          <CCard className={"family-card-container"}>
            <CRow style={{ padding: "2%" }}>
              <CCol md="12" className={"educationdetail-heading"}>
                Family Details{" "}
              </CCol>
            </CRow>

            <CRow style={{ padding: "2%" }}>
              <CCol md="3">
                <CLabel className={"form-labels-6"}>Type of Relation </CLabel>
                <CSelect
                  type={"text"}
                  placeholder="Select Relation"
                  name={"typeOfRelation"}
                  onChange={
                    (formik.handleChange,
                    (e) =>
                      setPassing({
                        ...passings,
                        typeOfRelation: e.target.value,
                      }))
                  }
                  value={passings.typeOfRelation}
                >
                  <option style={{ fontSize: "11px" }}>Select Relation</option>
                  <option value="Father">Father</option>
                  <option value="Mother">Mother</option>
                  <option value="Brother">Brother</option>
                  <option value="Sister">Sister</option>
                  <option value="Grand Father">Grand Father</option>
                  <option value="Grand Mother">Grand Mother</option>
                </CSelect>
              </CCol>

              <CCol md="3">
                <CLabel className={"form-labels4"}>Name of the Person</CLabel>
                <CInput
                  type={"text"}
                  name={"name"}
                  onChange={
                    (formik.handleChange,
                    (e) => {
                      formik.values.name = e.target.value;
                      setPassing({ ...passings, name: e.target.value });
                    })
                  }
                  value={passings.name}
                  // value={updateValue}
                  placeholder="Enter Name"
                />
                {formik.errors.name ? (
                  <div className="text-danger"> {formik.errors.name}</div>
                ) : null}
              </CCol>

              <CCol md="3">
                <CLabel className={"form-labels4"}>Age</CLabel>
                <CInput
                  type={"number"}
                  name={"age"}
                  onChange={
                    (formik.handleChange,
                    (e) => setPassing({ ...passings, age: e.target.value }))
                  }
                  value={passings.age}
                  placeholder="Enter Age"
                />
                {formik.errors.age ? (
                  <div className="text-danger"> {formik.errors.age}</div>
                ) : null}
              </CCol>
            </CRow>

            <CRow style={{ paddingLeft: "65%" }}>
              <div>
                {/* <CCol md='16'><CButton shape={'pill'} className={'btnShadow blueColor-btns1'} type={'reset'} onClick={Education} >+ Add Relation</CButton></CCol> */}
                <CCol md="12">
                  <CButton
                    shape={"pill"}
                    className={"saveBtn"}
                    onClick={Family}
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

            <CRow style={{ padding: "2%" }}>
              <CCol md="12" className={"educationdetail-heading"}>
                Family List{" "}
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
                                  onClick={() => setPassing(posts[index])}
                                  class="fas fa-edit"
                                ></i>
                                <i
                                  onClick={() => deletemodal(posts[index]._id,posts[index].name)}
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
                      props.onActive("Reporting");
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

export default FamilyList;
