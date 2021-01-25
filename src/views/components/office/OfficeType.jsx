import React, { useState, useEffect, useMemo } from "react";
import {
  AutoSizer,
  Table,
  Column,
  SortDirection,
  InfiniteLoader,
} from "react-virtualized";
import "react-virtualized/styles.css";
import State from "../../images/images18.png";
import { Button, Icon, Label } from 'semantic-ui-react'
import {
  CRow,
  CCard,
  CCol,
  CButton,
  CForm,
  CSelect,
  CCollapse,
  CCardBody,
  CDataTable,
  CBadge,
  CLabel,
  CInput,
  CFormText,
  CModal,
  CModalBody,
  CPagination,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";

import HierarchyViewerchart from "../../hierarchyviewer/HierarchyViewerchart";

import {
  useFormik,

} from "formik";
import * as yup from "yup";
import "./Office.css";
import {
  createOfficeType,
  getOfficeType,
  updateOfficeType,
  deleteOfficeType,
  getHierarchy,
  getAllOfficeTypePaginate
} from "../../../services/ApiService";
import { ToastContainer, toast } from "react-toastify";

import OrgChart from "../ChartOne/myChart";
import "react-toastify/dist/ReactToastify.css";
import OrganizationChart from "@dabeng/react-orgchart";
import "react-orgchart/index.css";
import Select from 'react-select'
import ConfirmDelete from "../confirmMessage/confirmDelete";

function OfficeType(data) {
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [passing, setPassing] = useState("");
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState([]);
  const [RoleCreate, setRoleCreate] = useState(false);
  const [RoleList, setRoleList] = useState(true);
  const [primary, setPrimary] = useState(false);
  const [modalresult, setModalresult] = useState(false);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [limit, setLimit] = useState({ value: 5, label: 5 });
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [deleteId, setDeleteId] = useState({ id: "", show: false });
  const ds1 = {
    office: "Head Office",
    role: "Cheif Engineer",
    name: "Head Office",
    children: [
      {
        office: "Chennai Circle Office",
        role: "Superintendent Engineer",
        name: "Circle Office",
        children: [
          {
            office: "North Chennai Division",
            role: "Executive Engineer",
            name: "Zonal Office",
            children: [
              {
                office: "Chromepet Sub-Division",
                role: "Assitant Executive",
                name: "Regional Office",
                children: [
                  {
                    office: "Chromepet Sub-Division",
                    role: "Assitant Engineer",
                    name: "Branch Office",
                  },
                ],
              },
            ],
          },
        ],
      },
      //   {
      //     office: "Madurai Circle Office",
      //     role: "Superintendent Engineer",
      //     name: "Sridhar"
      //   },
      //   {
      //     office: "Coimbatore Circle Office",
      //     role: "Superintendent Engineer",
      //     name: "Sakthi Nandha Kumar"
      //   }
    ],
  };


  const [hierarchy, setHierarchy] = useState([]);

  useEffect(() => {
    getHierarchyFuc()
    getAllOfficeType();
    setError("");
    setMessage("");
  }, [])

  const getHierarchyFuc = async () => {
    let result
    try {
      result = await getHierarchy();
      console.log('resultnbvnbvhsdgfgufjdsfdfjdjfg');
      if (result.success) {

        setHierarchy(result.office)
        console.log(result.office[0], 'gfgf');
      }
    }
    catch (e) {
      console.log(e)
    }
  }

  const title = "OFFICE LOCATION HIERARCHY CHART OF TAMIL NADU PWD";

  const formik = useFormik({
    initialValues: {
      OfficeType: "",
      Abbreviation: "",
      ReportingTo: "",
      Code: "",
    },
    validationSchema: yup.object({
      OfficeType: yup.string().required(" OfficeType is Required"),
      Abbreviation: yup.string().required("Abbreviation is Required"),
      ReportingTo: yup.string().required("Reporting To is Required"),
      Code: yup.string().required("Code is Required"),
    }),
    onSubmit: (userInputData) => {
      console.log(userInputData);
    },
  });

  const OfficeType = async () => {
    console.log("object");
    if (passing === "") {
      var response;
      let body = formik.values;
      body = { ...body, Code: body.Code.toUpperCase() };
      console.log(body);
      try {
        response = await createOfficeType(JSON.stringify(body));
        if (response.success === true) {
          toast.success(response.message);
          formik.values.OfficeType = "";
          formik.values.Abbreviation = "";
          formik.values.ReportingTo = "";
          setTimeout(() => {
            setRoleCreate(false);
            setRoleList(true);
          }, 1500);
          getAllOfficeType();
          formik.values = {};
          formik.handleReset({});

          return 0;
        }
        // setError(response.error)
        // showErrorPopUp();

        toast.error(response.error);
      } catch (e) {
        console.log(e);
      }
    } else {
      var responce;
      // let body = formik.values
      try {
        response = await updateOfficeType(
          formik.values.OfficeType,
          formik.values.Abbreviation,
          formik.values.Code,
          formik.values.ReportingTo,
          passing
        );
        if (response.success === true) {
          getAllOfficeType();
          toast.success(response.message);
          setTimeout(() => {
            setRoleCreate(false);
            setRoleList(true);
          }, 2000);
          getPaginate()
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  const getPaginate = async () => {
    var response;
    // let body = formik.values
    try {
      response = await getAllOfficeTypePaginate(`page=${page}&limit=${limit.value}`);
      if (response) {
        if (response.OfficeTypes) {
          let array = [];
          response.OfficeTypes.docs.map((x) => {
            let reporting = "----"
            if (x.reportingTo) {
              reporting = x.reportingTo.officeType
            }
            array.push({ ...x, reportingToName: reporting })
          });
          console.log(array, "909297");
          setPost(array);
          setTotalPage(array);
        }
      }
    } catch (e) {
      console.log(e);
    }
  }

  const EditOfficeType = async (data) => {
    // (data)
    console.log(data);
    await setRoleList(false);
    await setRoleCreate(true);
    formik.values.OfficeType = data.officeType;
    formik.values.Abbreviation = data.abbreviation;
    formik.values.Code = data.code;
    if (data.reportingTo) {
      formik.values.ReportingTo = data.reportingTo._id;
    }
    setPassing(data._id);
  };

  const CancelEditOfficeType = async () => {
    if (passing === "") {
      formik.values.OfficeType = "";
      formik.values.Abbreviation = "";
      formik.values.ReportingTo = "";
    } else {
      formik.values.OfficeType = "";
      formik.values.Abbreviation = "";
      formik.values.ReportingTo = "";
      setPassing("");
    }
    await setRoleList(true);
    await setRoleCreate(false);
  };

  const Delete = async () => {
    var response;
    let body = formik.values;
    try {
      response = await deleteOfficeType(deleteId.id);
      if (response.success === true) {
        toast.success(response.message);
        getAllOfficeType();
        cancelConfirmDlete();
      }
    } catch (e) {
      toast.success(e);
      console.log(e);
    }
  };

  useEffect(() => {
    // formik.values.ReportingTo = "";
    getPaginate();
  }, [limit, page]);

  const getAllOfficeType = async () => {
    var response;
    // let body = formik.values
    try {
      response = await getOfficeType();
      if (response) {

        if (response.OfficeTypes) {
          response.OfficeTypes.map((x) => {
            if (x.reportingTo) {
              x.reportingToName = x.reportingTo.officeType;
            }
          });
          setPosts(response.OfficeTypes);

        }
      }
    } catch (e) {
      console.log(e);
    }
  };


  // const data = () => {

  // }

  const enableCreate = async () => {
    await setRoleList(false);
    await setRoleCreate(true);
  };

  const CancelhandleSubmit = (e) => {
    setModalresult(true);
    // modalresult=false
    console.log("cancel - " + modalresult);
  };
  const deleteConfirmations = async (index) => {
    var response;
    let body = {};
    setModalresult(false);

    console.log("ok - " + modalresult);

    try {

    } catch (error) {

    }
  };
  const handleChanges = (event) => {
    setSearchTerm(event.target.value);
  };

  const MIN_TABLE_WIDTH = 1000;
  const MIN_TABLE_HEIGHT = 200;


  const [details, setDetails] = useState([])


  const fields = [
    { key: 'officeType',label:'Type of Party Office', _style: { width: '10%' } },
    { key: 'abbreviation', _style: { width: '10%' } },
    { key: 'code', _style: { width: '10%' } },
    { key: 'reportingToName',label:'Reporting To', _style: { width: '10%' } },
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

  const deletemodal = (id,name) => {
    setDeleteId({ id: id, name: name,show: true })
  }
  const cancelConfirmDlete = () => {
    setDeleteId({ id: "", name: "",show: false })
  }
  return (
    <div>
      {/* <div id="tree" ref={this.divRef}></div>; */}
      <ConfirmDelete details={deleteId} confirm={Delete} cancel={cancelConfirmDlete} />

      {RoleList && (
        <div style={{ padding: "1%" }}>
          <CCard className={"Office-card-container"}>
            <CRow
              style={{
                padding: "10px",
                paddingLeft: "20px",
                paddingRight: "20px",
                top: "500px",
              }}
            >
              <CCol md="8" className={"role-heading-6"}>
                Type of Party Office
              </CCol>
            </CRow>
            <CModal
               arial-labelledby="contained-modal-title-right"
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
                style={{ display: "flex", width: "1200px",    height: "101px",  color:"black",   backgroundColor :"white", justifyContent: "left" }}
              >
                <CModalTitle><span className={'font7'} >Hierarchy Chart for Type Of Party Office</span> <span > <img style={{width:"40px", height:"40px", marginLeft:'375PX' }} src={State} alt={"logo"}/> </span> <br/><span className={'font8'}> State Bank of India</span></CModalTitle>
              </CModalHeader>
              <CModalBody>
                {hierarchy && hierarchy.map((x, i) => (
                  <HierarchyViewerchart key={i} datasource={x} />
                ))}
              </CModalBody>

              {/* <CModalFooter>
                        <CButton color="success" onClick={() => setPrimary(deleteConfirmations)}>
                            OK
                </CButton>{' '}
                        <CButton color="secondary" onClick={() => setPrimary(CancelhandleSubmit)}>
                            Cancel
                </CButton>
                    </CModalFooter> */}
            </CModal>

            <CRow style={{ padding: "15px", paddingLeft: "3%" }}>
              <CCol md="10">
               
                  <CButton  className={"btn btn btn-primary"} onClick={enableCreate} >+ Add</CButton>
              
              </CCol>
              <CCol md="2" style={{ paddingLeft: "10px", marginBottom: "20px" }}>
                  <CRow>
                    <CCol style={{ paddingTop: "15px" }}>
                      <img
                        // className={"box3"}
                        src={
                          "https://img.icons8.com/fluent/2x/organization-chart-people.png"
                        }
                        style={{ height: "40px", width: "40px",marginLeft:"50px",marginBottom: "-77px" }}
                        onClick={() => setPrimary(!primary)}
                      />
                    </CCol>
                    {/* <CCol>
                      <span style={{ fontSize: '11px', fontWeight: 'bold', textAlign: 'center' }}>No.Of.Rows</span>
                      <Select
                        options={[
                          { label: 5, value: 5 },
                          { label: 10, value: 10 },
                          { label: 20, value: 20 },
                          { label: 50, value: 50 },
                          { label: 100, value: 100 },
                        ]}
                        value={limit}
                        onChange={(e) => setLimit(e)}
                      />
                    </CCol> */}
                  </CRow>
                </CCol>
            </CRow>

            <CRow style={{ padding: '3%' }}>
              <CCol>
                <CDataTable
                  size={1000}
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
                                    EditOfficeType(posts[index])
                                  }
                                  className="fas fa-edit"
                                ></i>
                                <i
                                  onClick={() => deletemodal(posts[index]._id,posts[index].officeType)}
                                  style={{
                                    marginLeft: "5px",
                                    color: "#e85654",
                                  }}
                                  className="fas fa-trash"
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
              </CCol>
            </CRow>
            {/* <CRow>
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
            </CRow> */}
          </CCard>
        </div>
      )}

      {RoleCreate && (
        <div style={{ padding: "3%" }}>
          <CCard className={"Office-card-container-6"}>
            <CRow
              style={{
                padding: "10px",
                paddingLeft: "20px",
                paddingRight: "20px",
              }}
            >
              <CCol md="10" className={"role-heading-6"}>
              Adding Type of Party Office{" "}
              </CCol>
            </CRow>
            <CForm>
              <CRow className={"role-form-container-6"}>
                <CCol md="12" lg="12" sm="12">
                  <CRow className={"seperator-6"}>
                    <CCol md="5">
                      <CLabel className={"form-labels-6"}>
                        Type of Party Office
                    <span className={"text-danger"}> *</span>
                      </CLabel>
                      <CInput
                        name={"OfficeType"}
                        onChange={formik.handleChange}
                        value={formik.values.OfficeType}
                        placeholder="Office Type"
                      />
                      {formik.errors.OfficeType ? (
                        <div className="text-danger">
                          {" "}
                          {formik.errors.OfficeType}
                        </div>
                      ) : null}
                    </CCol>

                    <CCol md="5">
                      <CLabel className={"form-labels-6"}>Abbreviation
                      <span className={"text-danger"}> *</span>
                      </CLabel>

                      <CInput
                        name={"Abbreviation"}
                        onChange={formik.handleChange}
                        value={formik.values.Abbreviation}
                        placeholder="Abbreviation"
                      />
                      {formik.errors.Abbreviation ? (
                        <div className="text-danger">
                          {" "}
                          {formik.errors.Abbreviation}
                        </div>
                      ) : null}
                    </CCol>
                  </CRow>

                  <CRow className={"seperator-6"}>
                    <CCol md="5">
                      <CLabel className={"form-labels-6"}>Code
                      <span className={"text-danger"}> *</span>
                      </CLabel>
                      <CInput
                        name={"Code"}
                        onChange={formik.handleChange}
                        style={{ textTransform: "uppercase" }}
                        value={formik.values.Code}
                        placeholder="Code"
                      />
                      {formik.errors.Code ? (
                        <div className="text-danger"> {formik.errors.Code}</div>
                      ) : null}
                    </CCol>
                    <CCol md="5">
                      <CLabel className={"form-labels-6"}>ReportingTo
                      <span className={"text-danger"}> *</span>
                      </CLabel>
                      <CSelect
                        name={"ReportingTo"}
                        onChange={formik.handleChange}
                        value={formik.values.ReportingTo}
                        placeholder="ReportingTo"
                      >
                        <option key={""}>ReportingTo</option>
                        {posts.map((post) =>
                          formik.values.officeType !== post.officeType ? (
                            formik.values.reportingTo ? (
                              formik.values.reportingTo === post._id ? (
                                <option
                                  selected
                                  key={post._id}
                                  value={post._id}
                                >
                                  {post.officeType}
                                </option>
                              ) : (
                                  <option key={post._id} value={post._id}>
                                    {post.officeType}
                                  </option>
                                )
                            ) : (
                                <option key={post._id} value={post._id}>
                                  {post.officeType}
                                </option>
                              )
                          ) : null
                        )}
                      </CSelect>
                      {formik.errors.ReportingTo ? (
                        <div className="text-danger">
                          {" "}
                          {formik.errors.ReportingTo}
                        </div>
                      ) : null}
                    </CCol>
                  </CRow>
                  <CRow>
                    {/* <div className="centerd-7"> */}
                    <CCol md="10">
                      <CButton
                        className={"btn btn-info btn-sm"}

                        onClick={OfficeType}
                      >
                        {passing !== "" ? "Update" : "Save"}
                      </CButton>{" "}
                    </CCol>
                    {/* </div> */}
                    {/* <div className="center-6"> */}
                    <CCol md="10">
                      <CButton
                        className={"btn btn-danger btn-sm"}
                        onClick={CancelEditOfficeType}
                      >
                        Cancel
                        </CButton>{" "}
                    </CCol>
                    {/* </div> */}
                  </CRow>
                </CCol>
              </CRow>
            </CForm>
            {error !== "" ? <p>{error}</p> : null}
            {message !== "" ? <p>{message}</p> : null}
          </CCard>{" "}
        </div>
      )}
      <ToastContainer autoClose={1000}></ToastContainer>
    </div>
  );
}

export default OfficeType;
