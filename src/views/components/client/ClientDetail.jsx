import React, { useState, useEffect } from 'react'
import {
  CRow, CCard, CCol, CButton, CForm, CSelect, cRadio, CFormGroup, CLabel, CInput, CFormText, CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from '@coreui/react'
import './ClientDetail.css'
import 'react-virtualized/styles.css';
import { AutoSizer, Table, Column, SortDirection, InfiniteLoader } from 'react-virtualized'
import {
  Formik,
  useFormik,
  // Formik
} from 'formik'
import * as yup from 'yup'
import { createClientDetail, getAreaSchema, updateClientDetail, getClientDetails, deleteClientDetail } from '../../../services/ApiService'
import { ToastContainer, toast } from 'react-toastify';
import { storage } from "../../../firebase";
import Select from "react-select";
// import { for } from 'core-js/fn/symbol';
function ClientDetail(props) {
  const [ClientList, SetClientList] = useState(true)
  const [ClientCreate, SetClientCreate] = useState(false)
  const [primary, setPrimary] = useState("")
  const [files, setFiles] = useState("")
  const [State, setState] = useState("")
  const [error, setError] = useState("")
  const [passing, SetPassing] = useState("")
  const [areaSchema, setArea] = useState([]);
  const [value, setValue] = useState({});
  const [clientSchema, setClients] = useState([]);
  const [posts, setPosts] = useState([]);
  const [board, setBoard] = useState("");
  const post = [{
    SNo: '1',
    clientName: 'SBI Bank',
    createdBy: '15/11/2020',
    createdOn: '15/11/2020'


  }]

  const formik = useFormik({
    initialValues: {
      clientName: '',
      firstName: '',
      lastName: '',
      department: '',
      designation: '',
      mobileNumber: '',
      emailId: '',
      address1: '',
      address2: '',
    },
    validationSchema: yup.object({
      clientName: yup.string()
        .required(" clientName is Required"),
      firstName: yup.string()
        .required(" firstName is Required"),
      // .min(5 , "Minimum 5 charcter" )
      lastName: yup.string()
        .required("lastName is Required"),
      department: yup.string()
        .required("department To is Required"),
      designation: yup.string()
        .required("designation is Required"),
      mobileNumber: yup.string()
        .required("mobileNumber is Required"),
      emailId: yup.string()
        .required("emailId is Required"),
      address1: yup.string()
        .required("address1 is Required"),
      address2: yup.string()
        .required("address2 is Required"),

    }),
    onSubmit: (userInputData) => {
      console.log(userInputData)
      let data = posts;
      data.push({
        clientName: formik.values.clientName
      });
      if (data) {
        setPosts(data);
        // setState({ ...state, education: data })
      }

    }
  })
  const handleSave = async (file, folder) => {
    console.log(file, folder);
    let bucketName = "HRmoodule";
    let uploadFile = file;
    var data = new Date();
    let imageName = `${data.getDate()}-${data.getMonth() + 1
      }-${data.getFullYear()}-${Math.floor(
        Math.random() * Math.random() * Math.random() * 1000000
      )}${uploadFile.name}`;
    let storageRef = storage.ref(`${bucketName}/${imageName}`);
    let uploadImage = storageRef.put(uploadFile);
    uploadImage.on(
      "state_changed",
      (snapshot) => { },
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
  const Cancel = () => {
    formik.handleReset({});
  };

  const Employee = async () => {
    await setState({ ...formik.values, profileImage: files });
    // formik.handleReset({});
    // window.location.pathname = ('/tabslist#Address')
    await props.onActive("Reporting");
  };

  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);

  const enableCreate = async () => {
    await SetClientList(false)
    await SetClientCreate(true)
  }
  const MIN_TABLE_WIDTH = 100;
  const MIN_TABLE_HEIGHT = 200;

  const CancelClient = async () => {
    // if (formik.values.clientName = "" && formik.values.firstName != "" && formik.values.lastName != "")
    formik.handleReset({});
    await SetClientList(true)
    await SetClientCreate(false)
  }
  const handleChanges = (event) => {
    setValue(event);

  };
  const OfficeType = async () => {
    if (passing === "") {
      var response;
      let body = {
        clientName: formik.values.clientName,
        firstName: formik.values.firstName,
        lastName: formik.values.lastName,
        department: formik.values.department,
        designation: formik.values.department,
        mobileNumber: formik.values.mobileNumber,
        emailId: formik.values.emailId,
        address1: formik.values.address1,
        address2: formik.values.address2,
        country: value.country._id,
        state: value.state._id,
        city: value.city._id,
        area: value._id,
        pincode: value.pincode,
      };

      // console.log(body);
      try {
        response = await createClientDetail(JSON.stringify(body));
        formik.handleReset({});
        console.log(response, response.success);
        if (response.success === true) {

          console.log(response.Client);
          setClients([...clientSchema, response.Client]);
          formik.values = {}
          await SetClientList(true)
          await SetClientCreate(false)
          // Cancel();
          return 0;
        } else {
          setError(response.error);
          console.log(error);
        }
        // showErrorPopUp();
        // toast(response.error);
      } catch (e) {
        console.log(e, "sssss");
        toast(`${e}`);
      }
    }
    else {
      var responce;
      let body = { ...formik.values, id: passing };
      try {
        responce = await updateClientDetail(formik.values.clientName, formik.values.firstName, formik.values.lastName, formik.values.department,
          formik.values.designation, formik.values.mobileNumber, formik.values.emailId, formik.values.address1, formik.values.address2, passing);
          formik.handleReset({});
          if (responce.success === true) {
          // setBoard(response)
          const elementsIndex = clientSchema.findIndex(
            (element) => element._id === passing
          );
          let newArray = [...clientSchema];
          newArray[elementsIndex] = responce.updateClientDetail;
          console.log(newArray, "ddddddd");
          setPosts(newArray);
          await SetClientList(true)
          await SetClientCreate(false)
        }
      } catch (e) {
        console.log(e);
      }
    }
  };
  useEffect(() => {
    async function getAllArea() {
      var response;
      // let body = formik.values
      try {
        response = await getAreaSchema();
        console.log(response, "sdf");
        if (response) {
          if (response.Area) {
            let array = [];
            response.Area.map((x) => {
              x.value = x._id;
              x.label = `${capitalize(x.state.stateName)}, ${capitalize(
                x.city.cityName
              )}, ${capitalize(x.areaName)}, ${x.pincode}`;
              x.cityName = x.city.cityName;
              x.stateName = x.state.stateName;
              x.countryName = x.country.countryName;
              x.areaName = x.areaName;
              array.push(x);
            });
            console.log(array, "area");
            setArea(array);
          }
        }
      } catch (e) {
        console.log(e);
      }
    }

    getAllArea();
  }, []);

  const capitalize = (x) => {
    let s = x.toLowerCase();
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  const dateConvert = (val) => {
    var data = new Date(val);
    return `${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`;
    // console.log(`${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`)
  };

  useEffect(() => {

    async function getAllClientDetails() {
      var response
      // let body = formik.values
      try {
        response = await getClientDetails()
        console.log(response, "sdf");
        if (response) {

          console.log(response, 'Response');

          console.log(response.Client, '112233');
          setClients(response.Client)
          // x.allocatedAt = dateConvert(x.createdAt);

        }
      } catch (e) {
        console.log(e)
      }
    }

    getAllClientDetails();
  }, [board]);

  const EditClientDetails = async (data) => {
    formik.handleReset({});
    console.log(data);
    await SetClientList(false)
    await SetClientCreate(true)
    // formik.values.officeType = data.officeType._id;
    formik.values.clientName = data.clientName;
    formik.values.firstName = data.firstName;
    formik.values.lastName = data.lastName;
    formik.values.department = data.department;
    formik.values.designation = data.designation;
    formik.values.mobileNumber = data.mobileNumber;
    formik.values.emailId = data.emailId;
    formik.values.address1 = data.address1;
    formik.values.address2 = data.address2;
    // formik.values.country = data.countryName;
    // formik.values.state = data.stateName;
    // formik.values.city = data.cityName;
    // formik.values.area = data.areaName;
    // formik.values.pincode = data.pincode;
    value.countryName = data.country.countryName;
    value.stateName = data.state.stateName;
    value.cityName = data.city.cityName;
    value.areaName = data.area.areaName;
    value.pincode = data.pincode;

    console.log(data.reportingToLocation, "localocalocalocaloca");
    console.log(value, "value");

    // console.log(data.reportingToLocation,"reportingLocations")

    SetPassing(data._id);
  };
  const Delete = async (id) => {
    var response;
    let body = formik.values;
    try {
      response = await deleteClientDetail(id);
      if (response.success === true) {
        setBoard(response);
      }
    } catch (e) {
      console.log(e);
    }
  };
  let serial = 0;
  const getSerial = () => {
    return ++serial;
  }
  return (
    <div>
      {ClientList && <div>
        <CCard className={'AddEmployee-card-container1'}>
          <CRow style={{ paddingTop: '1%', paddingLeft: '2%' }}>
            <CCol md='10' className={'role-heading-6'}>
              List of Client Details</CCol>
          </CRow>

          <CRow style={{ padding: '15px', paddingLeft: '3%' }}>

            <CCol md='12' >
              <CButton shape={'pill'} className={'btn btn-info'} onClick={enableCreate} >+ Add</CButton></CCol>
          </CRow>

          <CRow style={{ padding: '2%' }}>
            <CCol>
              <div style={{ height: '300px', overflow: 'scroll', overflow: 'hidden' }}>
                <AutoSizer>
                  {({ width, height }) => {
                    return <React.Fragment>
                      <CRow style={{ paddingTop: '3%', paddingLeft: '3%', width: 'max-content' }}>
                        <CCol>
                          <CRow>
                            {/* <CCol>
                                                            <CInput className={'box'} placeholder={'Filter Type of Office'} width={width}
                                                              />
                                                        </CCol>
                                                        <CCol>
                                                            <CInput className={'box'} placeholder={'Abbreviation'} width={width} />
                                                        </CCol>
                                                        <CCol >
                                                            <CInput className={'box'} placeholder={'Code'} width={width} />
                                                        </CCol>

                                                        <CCol >
                                                            <CInput className={'box'} placeholder={'Reporting To'} width={width} />
                                                        </CCol> */}


                          </CRow>
                        </CCol>
                      </CRow>
                      <Table

                        headerStyle={{ textTransform: 'capitalize' }}
                        rowStyle={{ borderBottom: '1px solid lightgrey' }}
                        // width={width}
                        width={width < MIN_TABLE_WIDTH ? MIN_TABLE_WIDTH : width}
                        height={height > MIN_TABLE_HEIGHT ? MIN_TABLE_HEIGHT : height
                        }
                        headerHeight={50}
                        rowHeight={50}
                        rowCount={clientSchema.length}
                        //    sort={_sort}
                        //    sortBy={sortBy}
                        overscanColumnCount={1}
                        overscanRowCount={1}
                        // noContentRenderer={_noContentRenderer}
                        //    sortDirection={sortDirection}
                        rowGetter={({ index }) => clientSchema[index]}>
                        <Column
                          label={'S.NO'}
                          width={width}
                          disableSort
                          dataKey={'serial'}
                          cellDataGetter={() => getSerial()}
                        />
                        {/* <Column dataKey={'SNo'} label={'S.NO'} width={width} /> */}
                        <Column dataKey={'clientName'} label={'Client Name'} width={width} />
                        <Column dataKey={'createdAt'} label={'Created By'} width={width} />
                        <Column dataKey={'updatedAt'} label={'Created On'} width={width} />
                        {/* <Column dataKey={'code'} label={'Entered By'} width={width} />
                        <Column dataKey={'reportingToName'} label={'Entered On'} width={width} /> */}


                        <Column dataKey={'id'} label={'Actions'} cellRenderer={
                          (row) => (
                            <CRow>
                              <div >
                                <CCol style={{ fontSize: "1.15rem" }}
                                  md="12"
                                ><i style={{
                                  marginRight: "5px",
                                  color: "#3480e2",
                                }}
                                  onClick={() =>
                                    EditClientDetails(row.rowData)
                                  }
                                  class="fas fa-edit"></i>
                                  <i style={{
                                    marginLeft: "5px",
                                    color: "#e85654",
                                  }}
                                    onClick={() => Delete(row.rowData._id)}
                                    class="fas fa-trash"
                                  ></i>
                                </CCol>
                              </div>
                            </CRow>
                          )
                        }
                          minWidth={'75px'} />
                      </Table>
                    </React.Fragment>
                  }}
                </AutoSizer>
              </div></CCol>
          </CRow>
        </CCard>
      </div>
      }
      {ClientCreate && <div>
        <CCard className={"AddEmployee-card-container"}>
          <CRow style={{ paddingTop: "1%", paddingLeft: "2%" }}>
            <CCol md="12" className={"addemployee-heading"}>
              Add Client Detail
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
                background: "url(35D7p)",
                background: "#C4C4C4",

                border: "1px dashed black",
              }}
              onClick={() => handleClick()}
            >
              <img
                src={
                  files !== ""
                    ? files
                    : uploadedImage
                }
                style={{
                  width: "100%",
                  height: "100%",
                  position: "acsolute",
                }}
              />
            </div>

            <CLabel className={"form-label1"}> Logo</CLabel>
          </div>

          <CForm autoComplete="off">
            <CRow className={"addemployee-form-container "}>
              <CCol md="12" lg="12" sm="12">
                <CRow className={"seperator"}>
                  <CCol>
                    <CLabel className={"form-label1"}>Client Name</CLabel>
                    <CInput
                      type={"text"}
                      name={"clientName"}
                      onChange={formik.handleChange}
                      value={formik.values.clientName}
                      placeholder="Enter Client Name"
                    />
                    {formik.errors.clientName ? (
                      <div className="text-danger">
                        {" "}
                        {formik.errors.clientName}
                      </div>
                    ) : null}
                  </CCol>

                  <CCol>
                    {/* <CLabel className={"form-label1"}>Last Name </CLabel>
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
                    ) : null} */}
                  </CCol>
                </CRow>

                <CRow style={{}}>
                  <CCol md="12" className={"addemployee-heading1"}>
                    Details of Super Admin
                         </CCol>
                </CRow>


                <CRow className={"seperator "}>
                  <CCol>
                    <CLabel className={"form-label1"}>First Name</CLabel>
                    <CInput
                      type={"text"}
                      name={"firstName"}
                      onChange={formik.handleChange}
                      value={formik.values.firstName}
                      placeholder="Enter First Name"
                    />
                    {formik.errors.firstName ? (
                      <div className="text-danger"> {formik.errors.firstName}</div>
                    ) : null}
                  </CCol>

                  <CCol>
                    <CLabel className={"form-label1"}>Last Name </CLabel>
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
                    <CLabel className={"form-label1"}>Department</CLabel>
                    <CInput
                      type={"text"}
                      name={"department"}
                      onChange={formik.handleChange}
                      value={formik.values.department}
                      placeholder="Enter Department"
                    />
                    {formik.errors.department ? (
                      <div className="text-danger"> {formik.errors.department}</div>
                    ) : null}
                  </CCol>

                  <CCol>
                    <CLabel className={"form-label1"}>Designation </CLabel>
                    <CInput
                      type={"text"}
                      name={"designation"}
                      onChange={formik.handleChange}
                      value={formik.values.designation}
                      placeholder="Enter Designation"
                    />
                    {formik.errors.designation ? (
                      <div className="text-danger">
                        {" "}
                        {formik.errors.designation}
                      </div>
                    ) : null}
                  </CCol>
                </CRow>

                <CRow className={"seperator "}>
                  <CCol>
                    <CLabel className={"form-label1"}>Mobile Number</CLabel>
                    <CInput
                      type={"text"}
                      name={"mobileNumber"}
                      onChange={formik.handleChange}
                      value={formik.values.mobileNumber}
                      placeholder="Enter Mobile Number"
                    />
                    {formik.errors.mobileNumber ? (
                      <div className="text-danger"> {formik.errors.mobileNumber}</div>
                    ) : null}
                  </CCol>

                  <CCol>
                    <CLabel className={"form-label1"}>Email Id </CLabel>
                    <CInput
                      type={"text"}
                      name={"emailId"}
                      onChange={formik.handleChange}
                      value={formik.values.emailId}
                      placeholder="Enter Email Id"
                    />
                    {formik.errors.emailId ? (
                      <div className="text-danger">
                        {" "}
                        {formik.errors.emailId}
                      </div>
                    ) : null}
                  </CCol>
                </CRow>


                <CRow style={{}}>
                  <CCol md="12" className={"addemployee-heading1"}>
                    Communication Address
                         </CCol>
                </CRow>


                <CRow className={"seperator "}>
                  <CCol md="5">
                    <CLabel className={"form-label1"}>Search Location</CLabel>
                    <Select
                      type={"text"}
                      placeholder="Country,State,City,Area"
                      onChange={handleChanges}
                      options={areaSchema}
                    />
                  </CCol>

                  <CCol>
                    {/* <CLabel className={"form-label1"}>Last Name </CLabel>
                    <CInput
                      type={"text"}
                      name={"bloodGroup"}
                      onChange={formik.handleChange}
                      value={formik.values.bloodGroup}
                      placeholder="Enter Last Name"
                    />
                    {formik.errors.bloodGroup ? (
                      <div className="text-danger">
                        {" "}
                        {formik.errors.bloodGroup}
                      </div>
                    ) : null} */}
                  </CCol>
                </CRow>



                <CRow className={"seperator "}>
                  <CCol md="5">
                    <CLabel className={"form-label1"}>Address1</CLabel>
                    <CInput
                      type={"text"}
                      name={"address1"}
                      onChange={formik.handleChange}
                      value={formik.values.address1}
                      placeholder="Enter Address1"
                    />
                    {formik.errors.address1 ? (
                      <div className="text-danger"> {formik.errors.address1}</div>
                    ) : null}
                  </CCol>

                  <CCol md="5">
                    <CLabel className={"form-label1"}>Address2 </CLabel>
                    <CInput
                      type={"text"}
                      name={"address2"}
                      onChange={formik.handleChange}
                      value={formik.values.address2}
                      placeholder="Enter Address2"
                    />
                    {formik.errors.address2 ? (
                      <div className="text-danger">
                        {" "}
                        {formik.errors.address2}
                      </div>
                    ) : null}
                  </CCol>
                </CRow>
                <CRow className={"seperator-6"}>
                  <CCol md="5">
                    <CLabel className={"form-labels-6"}>Country </CLabel>
                    <CInput
                      name={"Country"}
                      value={value.countryName || ""}
                      disabled
                      name={"Country"}
                      placeholder="Country"
                    />
                  </CCol>

                  <CCol md="5">
                    <CLabel className={"form-labels-6"}>State </CLabel>
                    <CInput
                      name={"State"}
                      value={value.stateName || ""}
                      disabled
                      name={"State"}
                      placeholder="State"
                    />
                  </CCol>
                </CRow>

                <CRow className={"seperator-6"}>
                  <CCol md="5">
                    <CLabel className={"form-labels-6"}>City </CLabel>
                    <CInput
                      name={"city"}
                      value={value.cityName || ""}
                      disabled
                      name={"city"}
                      placeholder="city"
                    />
                  </CCol>

                  <CCol md="5">
                    <CLabel className={"form-labels-6"}>Area </CLabel>
                    <CInput
                      name={"Area"}
                      value={value.areaName || ""}
                      disabled
                      name={"Area"}
                      placeholder="Area"
                    />
                  </CCol>
                </CRow>

                {/* <CRow className={'seperator-6'}> */}

                <CRow className={"seperator-6"}>
                  <CCol md="5">
                    <CLabel className={"form-labels-6"}>Pincode </CLabel>
                    <CInput
                      name={"Pincode"}
                      value={value.pincode || ""}
                      disabled
                      name={"Pincode"}
                      placeholder="Pincode"
                    />
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
                    className={"btn btn-info"}
                    onClick={OfficeType}
                  >
                    Save
                  </CButton>
                </CCol>
              </div>
            </CRow>
            <CRow style={{ paddingLeft: "86%" }}>
              <div class="adds">
                <CCol md="12">
                  <CButton
                    // shape={"pill"}
                    className={"btn btn-pill btn-danger"}
                    onClick={CancelClient}
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
      }
    </div>
  )
}
export default ClientDetail