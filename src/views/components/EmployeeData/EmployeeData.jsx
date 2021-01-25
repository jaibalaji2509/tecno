import React, { useState, useEffect, useContext } from "react";
import {
  CRow,
  CLabel,
  CCol,
  CButton,
  CDataTable,
  CCard,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CBadge,
} from "@coreui/react";
import Select from 'react-select';
import { useHistory } from "react-router-dom";
import State from "../../images/images18.png";
import { useFormik } from "formik";
import * as yup from "yup";
import "react-virtualized/styles.css";
import "./EmployeeData.css";
import { getEmployee, getEmployeeDataHierarchy, getOfficeLocation, updateEmployeeData, getOfficeType, employeeDelete, getAllEmployeePaginate } from "../../../services/ApiService";
import { EmployeeContext } from "../../../services/EmployeeContext";
import EmployeeHierarchyChart from "../employeeHierarchyChart/EmployeeHierarchyChart";
import ConfirmDelete from "../confirmMessage/confirmDelete";
import { toast, ToastContainer } from "react-toastify";

const EmployeeData = (props) => {
  const history = useHistory();
  const [state, setState] = useContext(EmployeeContext);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [limit, setLimit] = useState({ value: 5, label: 5 });
  const [deleteId, setDeleteId] = useState({ id: "", name: "", show: false });

  const [posts, setPosts] = useState([]);
  const [board, setBoard] = useState("");
  const [passings, setPassing] = useState("");
  const [primary, setPrimary] = useState("");
  const [hierarchy, setHierarchy] = useState([]);
  const [modalOfficeType, setModalOfficeType] = useState({});
  const [modalOfficeLocation, setModalOfficeLocation] = useState({});
  const [officeLocation, setOfficeLocation] = useState([]);
  const [officeType, setOfficeType] = useState([]);
  const [rolehierarchy, setRoleHierarchy] = useState({});

  const _noContentRenderer = () => {
    return <div>No Office types.</div>;
  };

  const MIN_TABLE_WIDTH = 1700;
  const MIN_TABLE_HEIGHT = 300;

  const formik = useFormik({
    initialValues: {
      officetype: "",
      departmentRole: "",

    },
    validationSchema: yup.object({
      officetype: yup.string().required("Office Type Required"),
      departmentRole: yup.string().required("Department Required"),

    }),
    onSubmit: (userInputData) => {
      console.log(userInputData);
    },
  });

  useEffect(() => {
    async function getAllEmployee() {
      var responses;
      // let body = formik.values
      try {
        responses = await getEmployee();
        if (responses) {
          responses.employees.map((x) => {

            if (x.employeeRole !== null) {
              x.locationName=x.employeeRole.officeLocation.locationName;
              x.typeOfOfficeName = x.employeeRole.typeOfOffice.officeType;
              x.location = `${x.employeeRole.officeLocation.country.countryName}, ${x.employeeRole.officeLocation.state.stateName}, ${x.employeeRole.officeLocation.city.cityName}, ${x.employeeRole.officeLocation.area.areaName}`;
              x.locationName = x.employeeRole.officeLocation.locationName;
              x.departmentName = x.employeeRole.department.name;
              x.designationName = x.employeeRole.designation.name;
              x.roleName = x.employeeRole.roleName;
              x.createdBy = "Admin";
              x.allocatedAt = dateConvert(x.createdAt);
            } else {
              x.locationName="----";
              x.typeOfOfficeName = "----";
              x.locationName = `----`;
              x.location = `----`;
              x.departmentName = "----";
              x.designationName = "----";
              x.roleName = "----";
              x.createdBy = "Admin";
              x.allocatedAt = dateConvert(x.createdAt);
            }
          });

          console.log(responses.employees, "datasdats");
          setPosts(responses.employees);
        }
      } catch (e) {
        console.log(e);
      }
    }

    getAllEmployee();
  }, [board]);

  useEffect(() => {
    getEmployeepaginate();
  }, [limit, page]);

  const getEmployeepaginate = async () => {
    var responses;
    // let body = formik.values
    try {
      responses = await getAllEmployeePaginate(`page=${page}&limit=${limit.value}`);
      if (responses.employees) {
        responses.employees.docs.map((x) => {

          if (x.employeeRole !== null) {
            x.typeOfOfficeName = x.employeeRole.typeOfOffice.officeType;
            x.location = `${x.employeeRole.officeLocation.country.countryName}, ${x.employeeRole.officeLocation.state.stateName}, ${x.employeeRole.officeLocation.city.cityName}, ${x.employeeRole.officeLocation.area.areaName}`;
            x.departmentName = x.employeeRole.department.name;
            x.designationName = x.employeeRole.designation.name;
            x.roleName = x.employeeRole.roleName;
            x.createdBy = "Admin";
            x.allocatedAt = dateConvert(x.createdAt);
          } else {
            x.typeOfOfficeName = "----";
            x.location = `----`;
            x.departmentName = "----";
            x.designationName = "----";
            x.roleName = "----";
            x.createdBy = "Admin";
            x.allocatedAt = dateConvert(x.createdAt);
          }
        });

        console.log(responses.employees, "datasdats");
        // setPosts(responses.employees.docs);
        setTotalPage(responses.employees.totalPages)
      }
    } catch (e) {
      console.log(e);
    }
  };

  const dateConvert = (val) => {
    var data = new Date(val);
    return `${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`;
    // console.log(`${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`)
  };

  const ds2 = {
    id: "n1",
    name: "Managing Director",
    title: "HEAD OFFICE CHENNAI",
    img:
      "https://ef.ca/wp-content/uploads/2018/02/teamphotos_0011_Devin-Couvrette-Eclipse_Final_3189.jpg",
    // img: 'Emp1.png',
    children: [
      {
        id: "n2",
        name: "Manager",
        title: "CIRCLE OFFICE CHENNAI",
        img:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQGfw_up9hc6DdutRh6GRH1J-nyxgsDl-2ldg&usqp=CAU",
      },
      {
        id: "n3",
        name: "Manager",
        title: "CIRCLE OFFICE COIMBATORE",
        img:
          "data:image/jpeg;base64,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",
        children: [
          {
            id: "n4",
            name: "Assistant Manager",
            title: "DIVISIONAL OFFICE ERODE",
            img:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQGfw_up9hc6DdutRh6GRH1J-nyxgsDl-2ldg&usqp=CAU",
          },
          {
            id: "n5",
            name: "Assistant Manager",
            title: "DIVISIONAL OFFICE COIMBATORE",
            img:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQAJk04QhRdrjlRT81ouhDrwgfc5QPys_TGGg&usqp=CAU",
            children: [
              {
                id: "n6",
                name: "Chief Vigilance Officer",
                title: "SUB DIVISION OFFICE METTUPALAYAM",
                img:
                  "https://image.shutterstock.com/image-photo/portrait-handsome-young-man-260nw-76916683.jpg",
              },
              {
                id: "n7",
                name: "Chief Vigilance Officer",
                title: "SUB DIVISION OFFICE POLLACHI",
                img:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTGJrPcUpiaL5SPn2o0aD84S1sRvr4V9_J7KQ&usqp=CAU",
              },
            ],
          },
        ],
      },
      {
        id: "n9",
        name: "Manager",
        title: "CIRCLE OFFICE MADURAI",
        img:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRPitFRaxtC5wYac4C6ArdIcbzqH2cxszVEzw&usqp=CAU",
      },
    ],
  };

  const editEmployeeData = async (id) => {
    let response;
    try {
      response = await updateEmployeeData(id);
      if (response) {
        console.log(
          response.EmployeeData,
          "defaultEmployee"
        );
        setState({ ...state, ...response.EmployeeData });
      }

      history.push("/EmployeeData/EmployeeRole")

    } catch (error) {
      throw error;
    }
  }

  const Delete = async () => {

    var response
    // let body = formik.values
    try {
      response = await employeeDelete(deleteId.id)
      if (response.success === true) {
        toast.success("Employee Deleted Successfully...!")
        setBoard(response);
        cancelConfirmDlete();
      }

    } catch (e) {
      toast.error("Employee Delete Failed!")
      console.log(e);
      cancelConfirmDlete();
    }

  };

  const deleteConfirm = (id, name) => {
    setDeleteId({ id: id, name: name, show: true })
  }

  useEffect(() => {
    setState({
      family: [],
      experience: [],
      education: [],
      document: []
    })
  }, [])

  useEffect(() => {
    getHierarchyEmployee()
    // getAllOfficeType();

  }, [])

  const getHierarchyEmployee = async (location) => {
    let result
    console.log(modalOfficeType, location);
    try {
      result = await getEmployeeDataHierarchy(modalOfficeType._id, location);
      console.log(result.roles[0], 'xxzzzzzzzhhh');
      if (result.success) {

        if (result.roles.length > 0) {
          setRoleHierarchy(result.roles[0])
        }
        console.log(result.roles[0], 'gfgf');
      }
    }
    catch (e) {
      console.log(e)
    }
  }
  const getOfficeLocations = async (id) => {
    let query = `officeType=${id}`;
    try {
      const responseO = await getOfficeLocation(query);

      if (responseO) {
        let officeLocations = []
        responseO.OfficeLocation.map((x) => {
          officeLocations.push({ ...x, label: `${(x.address1)},${(x.address2)},${(x.area.areaName)}`, value: x._id })
        })
        setOfficeLocation(officeLocations);
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    async function getAllOfficeLocation() {
      var responseT, responseL;
      try {
        responseT = await getOfficeType();

        if (responseT) {
          let officeTypes = []
          responseT.OfficeTypes.map((x) => {
            officeTypes.push({ ...x, label: x.officeType, value: x._id })
          })
          setOfficeType(officeTypes);
        }
      } catch (e) {
        console.log(e);
      }


    }

    getAllOfficeLocation();
  }, []);
  const handleModalOfficeType = (e) => {
    console.log(e);
    setRoleHierarchy({});
    setModalOfficeType(e);
    getOfficeLocations(e._id);
  }

  const handleModalOfficeLocation = (e) => {
    setRoleHierarchy({});
    setModalOfficeLocation(e);
    getHierarchyEmployee(e._id);
  }
  const cancelConfirmDlete = () => {
    setDeleteId({ id: "", name: "", show: false })
  }
  const [details, setDetails] = useState([])


  const fields = [
    { key: 'typeOfOfficeName', label: "Type Of Party Office", _style: { width: '200px' } },
    { key: 'locationName', _style: { width: '200px' } },
    { key: 'location', label: "Party Office Location", _style: { width: '400px' } },
    { key: 'departmentName', _style: { width: '300px' } },
    { key: 'designationName', _style: { width: '300px' } },
    { key: 'roleName', _style: { width: '300px' } },
    { key: 'firstName', label: "Party Member", _style: { width: '250px' } },
    { key: 'allocatedAt', _style: { width: '200px' } },
    { key: 'createdBy', _style: { width: '200px' } },

    // {
    //   label: 'Action', key: 'Action', _style: { width: '20%' },


    //   class: "fas fa-trash"

    // },
    {
      label: 'Action',
      key: 'show_details',

      _style: { width: '1%' },
      sorter: false,
      filter: false
    }
  ]

  const getBadge = (status) => {
    switch (status) {
      case 'Active': return 'success'
      case 'Inactive': return 'secondary'
      case 'Pending': return 'warning'
      case 'Banned': return 'danger'
      default: return 'primary'
    }
  }
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


  return (
    <div>
      <ConfirmDelete details={deleteId} confirm={Delete} cancel={cancelConfirmDlete} />
      <CCard className={"employee-card-container"}>

        <CRow style={{ padding: "15px" }}>
          <CCol md="10">
            <CButton
              className={"saveBtn"}
              style={{ marginLeft: "16px" }}
              onClick={() => {
                history.push("/PartyMemberData/AddPartyMember");

              }}
            >
              + Add
            </CButton>
          </CCol>
          <CCol md="2" style={{ paddingLeft: "10px", marginBottom: "20px" }}>
                  <CRow>
                    <CCol style={{ paddingTop: "15px" }}>
                      <img
                        // className={"box3"}
                        src={
                          "https://img.icons8.com/fluent/2x/organization-chart-people.png"
                        }
                        style={{ height: "40px", width: "40px",marginLeft:"72px",marginBottom: "-215px" }}
                        onClick={() => setPrimary(!primary)}
                      />
                    </CCol>
                  </CRow>
                </CCol>
        </CRow>

        <CModal
          arial-labelledby="contained-modal-title-right"
          Right
          style={{
            display: "flex",
            justifyContent: "left",
            width: "1200px",
            right: "300px",
          }}
          show={primary}
          onClose={() => setPrimary(!primary)}
        >
          <CModalHeader
            closeButton
            style={{ display: "flex", width: "1198px",height: '120px',  color:"black",   backgroundColor :"#fff", justifyContent: "left" }}
          >
           <CModalTitle><span class={'font7'} > Employee Master Hierarchy Chart</span> <span><img className={"centerImage"} src={State} alt={"logo"}/> </span> <br/><span class={'font8'}> State Bank of India</span> </CModalTitle>
          </CModalHeader>
          <CModalBody style={{ height: "500px",padding: '30px 30px 0px 40px' }}>
            <CRow className={'seperator1'}>
              <CCol md="5">
                <CLabel className={'form-labels-2'}>Type of Office
                <span className={'text-danger'}> *</span>
                </CLabel>
                <Select

                  options={officeType}
                  value={modalOfficeType}
                  onChange={handleModalOfficeType}
                />



                {formik.errors.officetype &&
                  formik.values.officetype === "" ? (
                    <div className="text-danger">
                      {" "}
                      {formik.errors.officetype}
                    </div>
                  ) : null}
              </CCol>

              <CCol md="5">
                <CLabel className={"form-labels-2"}>
                  Select Office Location
                  <span className={'text-danger'}> *</span>
                </CLabel>
                <Select
                  name={'officeLocation'}
                  value={modalOfficeLocation}
                  onChange={handleModalOfficeLocation}
                  options={officeLocation}
                />
              </CCol>
            </CRow>
            <CRow style={{padding:"10px"}}>
              <CCol>
                <CLabel className={"form-labels-4"}>
                <span style={{color:"#02b4f0"}}>  EMPLOYEE HIERARCHY CHART OF </span>
                  <span style={{color:"#3c3d73" }}>
                    {modalOfficeType
                      ? modalOfficeLocation.area
                        ? `-${modalOfficeType.officeType},${modalOfficeLocation.area.areaName},${modalOfficeLocation.city.cityName}`
                        : " - No Reporting"
                      : ""}{" "}
                  </span>
                </CLabel>
              </CCol>

            </CRow>
            {rolehierarchy.roleName ? <EmployeeHierarchyChart datasource={rolehierarchy} /> : null}

          </CModalBody>
        </CModal>
        <CRow
          style={{ padding: "10px", paddingLeft: "22px", paddingRight: "20px", paddingBottom: "10px" }}
        >
          <CCol md="12" className={"role-heading-2"}>
            List of Employee
          </CCol>
        </CRow>
        <CRow style={{ padding: '4%' }}>
          <CCol>
            {/* <div
              style={{
                height: "auto",
                overflow: "hidden",
              }}
            > */}

              <CDataTable
                size={"1500px"}
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
                  'status':
                    (item) => (
                      <td>
                        <CBadge color={getBadge(item.status)}>
                          {item.status}
                        </CBadge>
                      </td>
                    ),
                  'show_details':
                    (item, index) => {
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
                              <i onClick={() => { toggleDetails(index) }}></i>
                              <i
                                style={{
                                  marginRight: "5px",
                                  color: "#3480e2",
                                }}
                                onClick={() =>
                                  editEmployeeData(posts[index]._id)
                                }
                                class="fas fa-edit"
                              ></i>
                              <i
                                onClick={() => deleteConfirm(posts[index]._id,posts[index].firstName)}
                                style={{
                                  marginLeft: "5px",
                                  color: "#e85654",
                                }}
                                class="fas fa-trash"
                              ></i>
                            </CCol>

                          </CRow>
                        </td>
                      )
                    },
                  'details':
                    (item, index) => {


                    }
                }}
              />
            {/* </div> */}
          </CCol>
        </CRow>
      </CCard>
      <ToastContainer autoClose={1000}/>
    </div>
  );
};

export default EmployeeData;
