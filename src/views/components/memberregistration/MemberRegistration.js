import React, { useState } from "react";
import {
  CRow,
  CCard,
  CCol,
  CButton,
  CLabel,
  CWidgetDropdown,
  CInput,
  CInputRadio,
  CFormGroup,
} from "@coreui/react";
import CDataTable from "../../CoreComponents/table/CDataTable";
import "./MemberRegistration.css"
import Select from "react-select";
import DEFAULT_IMAGE from "../../../assets/img/download (1).png";
import { toast } from "react-toastify";
import { Dropdown, Menu } from "antd";
import 'antd/dist/antd.css';
import ImageUploading from "react-images-uploading";
import ReactTooltip from 'react-tooltip';

function MemberRegistration() {
  const [, setSelected] = useState({});
  const [steetSchema,] = useState([]);
  const [Education,] = useState([]);
  const [Occupation,] = useState([]);
  const [, setPI] = useState("");
  const [sideBar1, setSideBar1] = useState(false);
  const [files, setFiles ] = useState("");

  const [menu, setMenu] = useState({
    style: "menu",
    style1: "menu1",
    menuStatus: "open",
    style3: "menu1",
  });

  const userData1 = [

  ];

  const fields1 = [
    {
      key: "SNo", label: "S.NO", _style: { width: "10%" }, sorter: false,
      filter: false,
    },
    { key: "Member Name", label: "Member Name", _style: { width: "10%" } },
    { key: "Gender", label: "Gender", _style: { width: "10%" } },
    { key: "Mobile Number", label: "Mobile Number", _style: { width: "10%" } },
    { key: "Street Name", label: "Street Name", _style: { width: "10%" } },
    { key: "Area Name", label: "Area Name / Locality", _style: { width: "10%" } },
    { key: "District Name", label: "District / City Name", _style: { width: "10%" } },
    { key: "State Name", label: "State Name", _style: { width: "10%" } },
    {
      label: "Action",
      key: "show_details",

      _style: { width: "1%" },
      sorter: false,
      filter: false,
    },
  ];

  const handleSave = async (file, folder) => {
    if (file === undefined) {
      let e = "cancelled";
      return console.log(e);
    }
    if (file.size > 1048576) {
      return toast.warning("Please choose below 1 MB file");
    } else {
      const imgUri = URL.createObjectURL(file);
      setPI(file);
      setFiles(imgUri);
    }
  };

  const handleClick = (e) => {
    document.getElementById("profileImage").click();
  };

  const [images, setImages] = React.useState([]);
  const maxNumber = 69;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
  const handleClickhis = () => {
    switch (menu.menuStatus) {
      case "open":
        default:
        setMenu({
          menuStatus: "close",
          style3: "menu2",
          style: "menu active",
          style1: "menu1",
        });
        setSideBar1(true);
        break;
      case "close":
        setMenu({
          menuStatus: "open",
          style3: "menu1",
          style: "menu",
          style1: "menu1",
        });
        setTimeout(() => {
          setSideBar1(false);
        }, 1000);
        break;
    }
  };
  const [, setSideBar2] = useState(false);

  const handleClickback = () => {
    switch (menu.menuStatus) {
      case "open":
        default:
        setMenu({
          menuStatus: "close",
          style3: "menu2",
          style: "menu active",
          style1: "menu active",
        });
        setSideBar2(true);
        break;
      case "close":
        setMenu({
          menuStatus: "open",
          style3: "menu1",
          style: "menu",
          style1: "menu1",
        });
        setTimeout(() => {
          setSideBar2(false);
        }, 1000);
        break;
    }
  };

  const userData = [
    {
      SNo: "1",
      WingOffice: "HEAD OFFICE",
      NAMEOFWINGOFFICE: "HEADOFFICEMUMBAI",
      ReportingTo: "---",
      address: "State Bank Bhavan",
      area: "MADAM CAMMA ROAD",
      city: "MUMBAI",
      pinccode: "400021",

    },
  ];
  const [hide, setHide] = useState(false)
  const [memberhide, setMemberHide] = useState(true)
  const fields = [
    {
      key: "SNo", label: "S.NO", _style: { width: "1%" }, sorter: false,
      filter: false,
    },
    { key: "Name of Member", label: "Name of Member", _style: { width: "10%" } },
    { key: "gende", label: "Gender", _style: { width: "10%" } },
    { key: "age", label: "Age", _style: { width: "10%" } },
    { key: "education", label: "Education", _style: { width: "10%" } },
    { key: "occupation", label: "Occupation", _style: { width: "10%" } },
    {
      label: "Action",
      key: "show_details",

      _style: { width: "10%" },
      sorter: false,
      filter: false,
    },
  ];

  const enableCreate = () => {
    setHide(true);
    setMemberHide(false)
  }
  const cancelCreate = () => {
    setHide(false);
    setMemberHide(true)
    setFiles("");
  }
  // const [gridShow, setGridShow] = useState({
  //   view1: false,
  //   view2: false,
  //   view3: false,
  //   view4: false
  // });
  const menus = (details) => {
    return (
      <Menu>
        <Menu.Item>
          <a href>Edit</a>
        </Menu.Item>
        <Menu.Item>
          <a href>Delete</a>
        </Menu.Item>
        <Menu.Item>
          <a href>View</a>
        </Menu.Item>
        <Menu.Item>
          <a href
            onClick={() => {
              setSelected(details);
              handleClickhis();
            }}
          >History</a>
        </Menu.Item>
      </Menu>
    )
  } 

  return (
    <div className={menu.style3}>
      {sideBar1 && (
        <div className={menu.style} style={{overflow:"auto"}}>
          <CRow className={""}>
            <CCol md="12" lg="12" sm="12">
              <div>
                <span
                  style={{
                    fontSize: "22px",
                    fontWeight: "700",
                    marginLeft: "20px",
                  }}
                >
                  Member History{" "}
                </span>
              </div>
            </CCol>
          </CRow>

          <CRow className={"row-alignment"} style={{ marginLeft: "-61px" }}>
            <CCol className={"column-align"} md="4">
              <CLabel className={"label-name"}>
                Name
                <span style={{ fontSize: "14px", fontFamily: "normal" }}>
                  {" "}
                  - Arun Kumar
                </span>
              </CLabel>
            </CCol>
            <CCol className={"column-align"} md="4">
              <CLabel className={"label-name"}>
                Gender
                <span style={{ fontSize: "14px", fontFamily: "normal" }}>
                  {" "}
                  - Male
                </span>
              </CLabel>
            </CCol>
            <CCol>
              <img
                type="text"
                alt=""
                src={files !== "" ? files : DEFAULT_IMAGE}
                style={{
                  width: "150px",
                  height: "200px",
                  position: "relative",
                  background: "#fff",
                  left: "-40%",
                  top: "-3%",
                }}
              />
            </CCol>
          </CRow>

          <CRow className={"row-alignment"} style={{ marginLeft: "-61px" }}>
            <CCol
              className={"column-align"}
              md="4"
              style={{ marginTop: "-120px" }}
            >
              <CLabel className={"label-name"}>
                DOB
                <span style={{ fontSize: "14px", fontFamily: "normal" }}>
                  {" "}
                  - 23/05/1990
                </span>
              </CLabel>
            </CCol>
          </CRow>
          <CDataTable
            tableLabel={"Details of Party Posting"}
            columnFilter
            tableFilter
            hover
            sorter
            scopedSlots={{
              status: (item) => <td></td>,
            }}
            items={[
              {
                SNo: "1",
                NameofParty: "Youth Wing Association",
                TypeofOffice: "District Office",
                Department: " Youth Wings",
                designation: "Chairman",
                Role: "General",
                FromDate: "12/08/2010",
                ToDate: "25/06/2020",
                Status: "Retired",
              },
            ]}
          />

          <CButton
            style={{ position: "absolute", top: "15px", right: "15px" }}
            className={"cancelBtn"}
            onClick={() => {
              handleClickhis();
              handleClickback();
            }}
          >
            Back
          </CButton>

        </div>
      )}

      <CCard className={"cardSave"}>
        {memberhide && (
          <div>
            <div className={"main-headerlabel"}>
              <span className={"header-label"} style={{marginLeft:"-80px"}}>Member Registration</span>
            </div>
            {/* <CRow style={{ marginTop: "30px" }} >
              <CCol sm="6" lg="3" style={{ marginLeft: "10px" }}>
              <p data-tip="Male">
                <CWidgetDropdown
                  style={{ width: "280px", textAlign: "center", fontSize: "30px", float: "right" }}
                  color="gradient-primary"
                  header=""
                  text=""
                >
                  <span style={{ marginLeft: "-50px", fontSize: "24px", fontWeight:"700" }}>Male</span>
                  <span style={{ marginLeft: "-162px", marginTop: "30px",fontSize: "24px", fontWeight:"700" }}>2</span>
                  <br /><br />
                </CWidgetDropdown>
                </p>
                <ReactTooltip/>
              </CCol>

              <CCol sm="6" lg="3" style={{ marginLeft: "10px" }}>
              <p data-tip="Female">
                <CWidgetDropdown
                  style={{ width: "280px", fontSize: "30px", }}

                  color="gradient-info"
                  header=""
                  text=""
                >
                  <span style={{ marginLeft: "-30px",fontSize: "24px",fontWeight:"700" }}>Female</span>
                  <span style={{ marginLeft: "-165px", marginTop: "30px",fontSize: "24px",fontWeight:"700" }}>2</span>
                  <br /><br />
                </CWidgetDropdown>
                </p>
                <ReactTooltip/>
              </CCol>

              <CCol sm="6" lg="3" style={{ marginLeft: "-10px" }}>
              <p data-tip="TransGender">
                <CWidgetDropdown
                  style={{ width: "280px", fontSize: "30px", }}

                  color="gradient-warning"
                  header=""
                  text=""
                >
                  <span style={{ marginLeft: "-75px", fontSize: "24px",fontWeight:"700" }}>TransGender</span>
                  <span style={{ marginLeft: "-200px", marginTop: "30px",fontSize: "24px",fontWeight:"700" }}>1</span>
                  <br /><br />
                </CWidgetDropdown>
                </p>
                <ReactTooltip/>
              </CCol>

              <CCol sm="6" lg="3" style={{ marginLeft: "-10px" }}>
              <p data-tip="Total Count">
                <CWidgetDropdown
                  style={{ width: "280px", fontSize: "30px", }}

                  color="gradient-danger"
                  header=""
                  text=""
                >
                  <span style={{ marginLeft: "-73px",fontSize: "24px",fontWeight:"700" }}>Total Count</span>
                  <span style={{ marginLeft: "-204px", marginTop: "30px",fontSize: "24px",fontWeight:"700" }}>5</span>
                  <br /><br />
                </CWidgetDropdown>
                </p>
                <ReactTooltip/>
              </CCol>
            </CRow> */}
  <div style={{ marginTop: "-30px" }}>
              <CRow
                style={{
                  marginTop: "65px",
                  marginLeft: "240px",
                  position: "absolute",
                }}
              >
                <CCol sm="3" lg="3" style={{ marginLeft: "-150px" }}>
                  
                  <span
                    style={{
                      position: "absolute",
                      marginLeft: "45px",
                      fontSize: "22px",
                      fontWeight: "700",
                      color: "#134e5e",
                    }}
                  >
                    Male
                  </span>
                  <span
                    style={{
                      display: "block",
                      marginLeft: "-41px",
                      marginTop: "-75px",
                      padding: "100px",
                      fontSize: "24px",
                      fontWeight: "500",
                      color: "grey",
                    }}
                  >
                    2
                  </span>
                  <span class="divider" />
                  <br />
                  <br></br>
                  <br />
                  
                </CCol>
                <CCol
                  sm="3"
                  lg="3"
                  style={{ marginLeft: "300px", display: "flex" }}
                >
                  

                  <span
                    style={{
                      marginLeft: "-294px",
                      fontSize: "22px",
                      fontWeight: "700",
                      color: "#4cb8c4 ",
                    }}
                  >
                    Female
                  </span>
                  <span
                    style={{
                      marginLeft: "-55px",
                      marginTop: "28px",
                      fontSize: "24px",
                      fontWeight: "500",
                      color: "grey",
                    }}
                  >
                    2
                  </span>
                  <span className={"divider1"} />
                  <br />

                  <br />
                  
                </CCol>
                <CCol
                  sm="3"
                  lg="3"
                  style={{
                    marginLeft: "400px",
                    position: "relative",
                    display: "flex",
                  }}
                >
                  
                  <span
                    style={{
                      marginTop: "-228px",
                      left: "-21px",
                      fontSize: "22px",
                      fontWeight: "700",
                      color: "#30a961",
                      marginLeft:"25px"
                    }}
                  >
                    TransGender
                  </span>
                  <br />
                  <span
                    style={{
                      marginLeft: "-75px",
                      marginTop: "-201px",
                      fontSize: "24px",
                      fontWeight: "500",
                      color: "grey",
                    }}
                  >
                    1
                  </span>
                  <span className={"divider2"} />
                  <br />
                  <br />
                 
                </CCol>
                <CCol
                  sm="3"
                  lg="3"
                  style={{
                    marginLeft: "800px",
                    position: "relative",
                    display: "flex",
                    top:"-45px"
                  }}
                >
                  
                  <span
                    style={{
                      marginTop: "-228px",
                      left: "-21px",
                      fontSize: "22px",
                      fontWeight: "700",
                      color: "#ec6f66",
                    }}
                  >
                    Total
                  </span>
                  <br />
                  <span
                    style={{
                      marginLeft: "-32px",
                      marginTop: "-201px",
                      fontSize: "24px",
                      fontWeight: "500",
                      color: "grey",
                    }}
                  >
                    5
                  </span>
                  <span className={"divider3"} />
                  <br />
                  <br />
                 
                </CCol>
              </CRow>
            </div> 
            <CRow style={{marginLeft:"4.5%",marginTop:"210px"}}>
              <CCol>

              <CButton
              id={"memberregisteraddCButton"}
              className={"saveBtn"}
              onClick={enableCreate}
              style={{               
                width: "120px",
                cursor: "pointer",                
              }}
            >
              Add Member
            </CButton>
              </CCol>
            </CRow>                      

            <CRow className={"row-alignment"} md="12" sm="12" lg="12" style={{ marginLeft: "-16px", marginTop: "10px" }}>
              <CCol className={"column-align"} md="5">
                <CLabel className={"label-name"}>
                  State
                  <span className={"text-danger"}>*</span>
                </CLabel>
                <Select
                  styles={{ marginLeft: "50px" }}
                  type={"text"}
                  id={"memberregister"}
                  className={"input-align"}
                  placeholder="Select the State"
                />
              </CCol>
              <CCol className={"column-align"} md="5">
                <CLabel className={"label-name"}>
                  District / City
                  <span className={"text-danger"}>*</span>
                </CLabel>
                <Select
                  styles={{ marginLeft: "50px" }}
                  type={"text"}
                  id={"memberregistercity"}
                  className={"input-align"}
                  placeholder="Select the District / City "
                />
              </CCol>
            </CRow>

            <CRow className={"row-alignment"} md="12" sm="12" lg="12" style={{ marginLeft: "-16px" }}>


              <CCol className={"column-align"} md="5">
                <CLabel className={"label-name"}>
                  Area / Village
                  <span className={"text-danger"}>*</span>
                </CLabel>
                <Select
                  styles={{ marginLeft: "50px" }}
                  type={"text"}
                  id={"memberregisterarea"}
                  className={"input-align"}
                  placeholder="Select the Area"
                />
              </CCol>
              <CCol className={"column-align"} md="5">
                <CLabel className={"label-name"}>
                  Street
                  <span className={"text-danger"}>*</span>
                </CLabel>
                <Select
                  styles={{ marginLeft: "50px" }}
                  type={"text"}
                  id={"memberregisterstreet"}
                  className={"input-align"}
                  placeholder="Select the Street"
                />
              </CCol>
            </CRow>

            <CRow style={{ padding: "4%", marginTop: "1.5%" }}>
              <CDataTable
                items={userData}
                fields={fields}
                columnFilter
                tableFilter
                tableLabel={"List of Register members"}
                itemsPerPageSelect
                itemsPerPage={5}
                hover
                sorter
                pagination
                scopedSlots={{
                  show_details: (item, index) => {
                    return (
                      <td className="py-1">
                        <CRow>
                          <CCol style={{ fontSize: "1.15rem" }} md="16">

                            <Dropdown
                              className={"ant-dropdown-cutomize-by-me"}
                              overlay={() => menus(item)}
                            >
                              <a href
                                className="ant-dropdown-link"
                                onClick={(e) => e.preventDefault()}
                              >
                                <i
                                  style={{
                                    marginLeft: "35px",
                                    color: "black",
                                  }}
                                  className="fa fa-ellipsis-v"
                                  bsStyle="overlay"
                                  onClick={menus}
                                />
                              </a>
                            </Dropdown>
                          </CCol>
                        </CRow>
                      </td>
                    );
                  },
                  details: (item, index) => { },
                }}
              />
            </CRow>
          </div>
        )}

        {hide && (
          <div>
            <CCard className={"cardSave"}>

              <div className={"main-headerlabel"}>
                <span className={"header-label"}>Member Registration</span>
              </div>
              <CRow className={"row-alignment"} style={{ marginLeft: "-76px" }}>
                <CCol className={"column-align"} md="12" lg="12" sm="12">
                  <p className="mandatory_txt" style={{ marginLeft: "50px" }}>
                    Mandatory fields are marked with an asterisk (*)
                  </p>
                  <div style={{ marginLeft: "-26px" }}>

                    <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                      <CCol className={"column-align"} md={3}>
                        <CLabel className={"label-name"}>
                          First Name
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <CInput
                          type={"text"}
                          className={"input-align"}
                          name={"First Name"}
                          id={"memberregisterfname"}
                          placeholder="First Name"
                        />
                      </CCol>

                      <CCol className={"column-align"} md={3}>
                        <CLabel className={"label-name"}>
                          Last Name
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <CInput
                          type={"text"}
                          className={"input-align"}
                          name={"Last Name"}
                          id={"memberregisterlname"}
                          placeholder="Last Name"
                        />
                      </CCol>
                    </CRow>

                    <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                      <CCol className={"column-align"} md={3}>
                        <CLabel className={"label-name"}>
                          Date of Birth
                          <span className={"text-danger"}>*</span>
                        </CLabel>

                        <CInput
                          type={"date"}
                          className={"input-align"}
                          name={"Date of Birth"}
                          id={"memberregisterdob"}
                          placeholder="DD/MM/YYYY"
                        />
                      </CCol>
                      <CCol className={"column-align"} md={5}>
                        <CLabel className={"label-name"}>
                          Gender
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <CCol md="9">
                          <CFormGroup variant="custom-radio" inline>
                            <CInputRadio custom id="inline-radio1" name="inline-radios" value="option1" />
                            <CLabel variant="custom-checkbox" htmlFor="inline-radio1">Male</CLabel>
                          </CFormGroup>
                          <CFormGroup variant="custom-radio" inline>
                            <CInputRadio custom id="inline-radio2" name="inline-radios" value="option2" />
                            <CLabel variant="custom-checkbox" htmlFor="inline-radio2">Female</CLabel>
                          </CFormGroup>
                          <CFormGroup variant="custom-radio" inline>
                            <CInputRadio custom id="inline-radio3" name="inline-radios" value="option3" />
                            <CLabel variant="custom-checkbox" htmlFor="inline-radio3">Transgender</CLabel>
                          </CFormGroup>
                        </CCol>
                      </CCol>
                    </CRow>
                    <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                      <CCol className={"column-align"} md="3">
                        <CLabel className={"label-name"}>
                          Education Qualification
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <Select
                          styles={{ marginLeft: "50px" }}
                          type={"text"}
                          id={"memberregistereducationqualification"}
                          className={"select"}
                          placeholder="Select the Education Qualification"
                          options={Education}
                        />
                      </CCol>
                      <CCol className={"column-align"} md="3">
                        <CLabel className={"label-name"}>
                          Occupation
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <Select
                          type={"text"}
                          id={"memberregisteroccupation"}
                          className={"select"}
                          placeholder="Select the Occupation"
                          options={Occupation}
                        />
                      </CCol>
                    </CRow>

                    <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                      <CCol className={"column-align"} md="3">
                        <CLabel className={"label-name"}>
                          Mobile Number
                          <span className={"text-danger"}> *</span>
                        </CLabel>
                        <CInput
                          className={"input-align"}
                          name={"Phone number"}
                          id={"memberregisterphonenumber"}
                          placeholder="Mobile Number"
                        />
                      </CCol>
                      <CCol className={"column-align"} md="3">
                        <CLabel className={"label-name"}>
                          Voter Id
                        </CLabel>
                        <CInput
                          className={"input-align"}
                          id={"memberregistervoterid"}
                          name={"voterid"}
                          placeholder={"Voter Id"}
                        />
                      </CCol>
                    </CRow>

                    <div className={"row-headerlabel"}>
                      <span style={{ marginLeft: "70px" }} className={"header-label"}>
                        {" "}
                        Address for Communication {" "}
                      </span>
                    </div>
                    <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                      <CCol className={"column-align"} md="3">
                        <CLabel className={"label-name"}>
                          Address line
                          <span className={"text-danger"}> *</span>

                        </CLabel>
                        <CInput
                          className={"input-align"}
                          name={"Address"}
                          id={"memberregisteraddress1"}
                          placeholder="Address Line"
                        />

                      </CCol>
                      <CCol className={"column-align"} md="3">
                        <CLabel className={"label-name"}>
                          Pincode
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <CInput
                          className={"input-align"}
                          id={"memberregisterpincode"}
                          name={"Pincode"}
                          placeholder={"Pincode"}
                        />
                      </CCol>

                      <CCol className={"column-align"} md="3">
                        <CLabel className={"label-name"}>
                          State
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <CInput
                          className={"input-align"}
                          id={"memberregisterState"}
                          name={"state"}
                          placeholder={"State Name"}
                        />
                      </CCol>
                    </CRow>

                    <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                      <CCol className={"column-align"} md="3">
                        <CLabel className={"label-name"}>
                          District
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <CInput
                          className={"input-align"}
                          id={"memberregisterdistrict"}
                          name={"district"}
                          placeholder={" District/City Name"}
                        />
                      </CCol>

                      <CCol className={"column-align"} md="3">
                        <CLabel className={"label-name"}>
                          Area Name
                          <span className={"text-danger"}> *</span>
                        </CLabel>
                        <Select
                          type={"text"}
                          id={"memberregisterarea"}
                          className={"select"}
                          placeholder="Select the Area"
                          options={Occupation}
                        />
                      </CCol>

                      <CCol className={"column-align"} md="3">
                        <CLabel className={"label-name"}>
                          Street Name
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <Select
                          type={"text"}
                          id={"memberregisterstreet"}
                          className={"select"}
                          placeholder="Select the Street Name"
                          options={steetSchema}
                        />
                      </CCol>
                    </CRow>
                  </div>
                  
                  <CRow>
                    <CCol md="10">
                      <CCol
                        md="5"
                        style={{
                          marginTop: "30px",
                          float: "right",
                        }}
                      >
                        <CButton
                          style={{
                            float: "right",
                          }}
                          id={"cancelabbreviationconfigurecode"}
                          className={"cancelBtn"}
                          onClick={cancelCreate}
                        >
                          CANCEL
                        </CButton>
                        <CButton
                          style={{
                            float: "right",
                            marginRight: "15px",
                          }}
                          id={"saveAbbreviationConfigureCode"}
                          className={"saveBtn"}
                        >
                          Save
                        </CButton>{" "}
                      </CCol>
                    </CCol>
                  </CRow>

                  <CRow style={{ marginLeft: "900px", position: "absolute", marginTop: "-561px" }}>
                    <CCol sm="6" lg="3" style={{ marginLeft: "10px" }}>
                      <CCol md="3">                        
<ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps
        }) => (
         
          <div className="upload__image-wrapper">
           
               <CCol md="3">
              <CInput
                name="file"
                type="file"
                id="profileImage"
                accept="image/*"
                style={{ display: "none" }}
                onChange={(e) => {
                  handleSave(e.target.files[0], "profileImage");
                }}
              />
            </CCol>
            <div
              id={"addEmployeehandleClick"}
              style={{
                height: "100px",
                width: "100px",
                // border: "1px dashed black",
              }}
              onClick={() => handleClick()}
            >
              <img
                alt=""
                src={files !== "" ? files : DEFAULT_IMAGE}
                style={{
                  width: "100%",
                  height: "100%",
                  position: "acsolute",
                }}
              />
            </div>
            <CLabel className={"form-label1"} style={{width:"142px",position:"absolute"}}>
              Click to Upload Image
            </CLabel>
            
            {/* <CButton
              // style={isDragging ? { color: "red", } : null}
              style={{ width:"145px", height:"40px", marginLeft:"125px",marginTop:"-275px", border:"1px solid #00ff5a"}}
              className={"saveBtn"}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </CButton> */}
            &nbsp;
            {/* <CButton onClick={onImageRemoveAll}>Remove all images</CButton> */}
            {/* {imageList.map((image, index) => (
              <div key={index} className="image-item" style={{marginLeft:"135px",marginTop:"-130px"}}>
                <img src={image.data_url } alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <CButton className={"saveBtn"} onClick={() => onImageUpdate(index)} >Update</CButton>
                  <CButton className={"cancelBtn"} onClick={() => onImageRemove(index)} >Remove</CButton>
                </div>
              </div>
            ))} */}
          </div>
        )}
      </ImageUploading>
                      </CCol>
                    </CCol>
                  </CRow>


                  <CRow style={{ padding: "4%", marginTop: "1.5%" }}>
                    <CDataTable
                      items={userData1}
                      fields={fields1}
                      columnFilter
                      tableFilter
                      tableLabel={"List of Locations"}
                      itemsPerPageSelect
                      itemsPerPage={5}
                      hover
                      sorter
                      pagination
                      scopedSlots={{
                        show_details: (item, index) => {
                          return (
                            <td className="py-1">
                              <CRow>
                                <CCol style={{ fontSize: "1.15rem" }} md="16">

                                  <Dropdown
                                    className={"ant-dropdown-cutomize-by-me"}
                                    overlay={() => menus(item)}
                                  >
                                    <a href
                                      className="ant-dropdown-link"
                                      onClick={(e) => e.preventDefault()}
                                    >
                                      <i
                                        style={{
                                          marginLeft: "35px",
                                          color: "black",
                                        }}
                                        className="fa fa-ellipsis-v"
                                        bsStyle="overlay"
                                        onClick={menus}
                                      />
                                    </a>
                                  </Dropdown>
                                </CCol>
                              </CRow>
                            </td>
                          );

                        },

                        details: (item, index) => { },
                      }}
                    />
                  </CRow>
                </CCol>
              </CRow>
            </CCard>

          </div>
        )}
      </CCard>
    </div>
  )
}

export default MemberRegistration
