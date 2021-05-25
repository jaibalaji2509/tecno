import React, { useState, useEffect } from "react";
import { CImg, 
  CRow, 
  CCard,
  CCol,
  CButton, 
  CLabel, 
  CInput, 
  CWidgetDropdown,
  CInput,
  CInputRadio,
  CDropdown,
  CSelect,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle } from "@coreui/react";
  import CIcon from '@coreui/icons-react'
import CDataTable from "../../CoreComponents/table/CDataTable";
import { saveCreateMemberRegister } from "../../../services/ApiService";
import { useHistory } from "react-router-dom";
import "./MemberRegistration.css"
import Select from "react-select";
// import { colors } from "react-select/src/theme";

function MemberRegistration() {
  const [show, setShow] = useState(false)
	const [ward, setWard] = useState("")
  const [files, setFiles] = useState("");
  const [steetSchema, setStreet] = useState([]);
  const [Education, setEducation] = useState([]);
  const [Occupation, setOccupation] = useState([]);
  const history = useHistory();

  
	// const pinchange = (e) => {
	// 	setWard(e.target.value)
	// 	if (ward.length > 4) {
	// 		setShow(true)
	// 	}
	// }
  const userData1 = [

  ];

  const fields1 = [
    { key: "SNo", label: "S.NO", _style: { width: "10%" }, sorter: false,
    filter: false, },
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
    // {
    //   key: "show_details",
    //   label: "Select",
    //   _style: { width: "3%" },
    //   name: <div>Email <input type={"checkbox"} onClick={""} /></div>,
    //   sorter: false,
    //   filter: false,
    // },
    { key: "SNo", label: "S.NO", _style: { width: "1%" },sorter: false,
    filter: false, },
    { key: "Name of Member", label: "Name of Member", _style: { width: "10%" } },
    { key: "gende", label: "Gender", _style: { width: "10%" } },
    { key: "age", label: "Age", _style: { width: "10%" } },
    { key: "education", label: "Education", _style: { width: "10%" } },
    { key: "occupation", label: "Occupation", _style: { width: "10%" } },
    {
      label: "Action",
      key: "show_details1",

      _style: { width: "10%" },
      sorter: false,
      filter: false,
    },
  ];

  const enableCreate = () => {
    setHide(true);
    setMemberHide(false)
  }
  return (
    <div>
      
      <CCard className={"cardSave"}>
      {memberhide && (        
          <div>
        
        <div className={"main-headerlabel"}>
          <span className={"header-label"}>Member Registration</span>
        </div>
        <CRow style={{marginTop:"30px"}} >
      <CCol sm="6" lg="3" style={{marginLeft:"10px"}}>
        <CWidgetDropdown
         style={{width:"280px", textAlign:"center", fontSize:"30px", float:"right"}}
         color="gradient-primary"
          header=""         
          text=""
        >
          <span style={{marginLeft:"-50px", fontSize:"30px",}}>Male</span>
          <span style={{marginLeft:"-162px", marginTop:"30px"}}>2</span>
   <br/><br/>
          {/* <CImg style={{width:"20px",height:"20px"}} src="https://icons.iconarchive.com/icons/custom-icon-design/flatastic-7/512/Male-icon.png"/> */}
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3" style={{marginLeft:"10px"}}>
        <CWidgetDropdown
 style={{width:"280px", fontSize:"30px",}}

color="gradient-info"
          header=""
          text=""
        >
                    <span style={{marginLeft:"-30px", fontSize:"30px",}}>Female</span>
                    <span style={{marginLeft:"-165px", marginTop:"30px"}}>2</span>
          <br/><br/>
                    {/* <CImg style={{width:"20px", height:"20px"}} src="https://icons.iconarchive.com/icons/custom-icon-design/flatastic-7/512/Female-icon.png"/> */}
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3" style={{marginLeft:"-10px"}}>
        <CWidgetDropdown
 style={{width:"280px", fontSize:"30px",}}

color="gradient-warning"
          header=""
          text=""
        >         
                  <span style={{marginLeft:"-75px", fontSize:"30px",}}>TransGender</span>
                  <span style={{marginLeft:"-200px", marginTop:"30px"}}>1</span>
         <br/><br/>
          {/* <CImg style={{width:"20px", height:"20px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/A_TransGender-Symbol_Plain3.svg/878px-A_TransGender-Symbol_Plain3.svg.png"/> */}
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3" style={{marginLeft:"-10px"}}>
        <CWidgetDropdown
 style={{width:"280px", fontSize:"30px",}}

color="gradient-danger"
          header=""
          text=""
        >
           <span style={{marginLeft:"-73px", fontSize:"30px",}}>Total Count</span>
           <span style={{marginLeft:"-204px", marginTop:"30px"}}>5</span>
   <br/><br/>
          {/* <CImg style={{width:"20px", height:"20px"}} src="https://p.kindpng.com/picc/s/265-2652987_persons-png-transparent-png.png"/> */}
        </CWidgetDropdown>
      </CCol>
    </CRow>

    <CRow className={"row-alignment"} md="12" sm="12" lg="12" style={{ marginLeft: "-16px" }}>


<CCol className={"column-align"} md="5">
  <CLabel className={"label-name"}>
    State
 <span className={"text-danger"}>*</span>
  </CLabel>
  <CSelect
    styles={{ marginLeft: "50px" }}
    type={"text"}
    id={"CONSTITUENCY"}
    className={"input-align"}
    placeholder="Select the State"
  />
</CCol>
<CCol className={"column-align"} md="5">
  <CLabel className={"label-name"}>
    District / City
 <span className={"text-danger"}>*</span>
  </CLabel>
  <CSelect
    styles={{ marginLeft: "50px" }}
    type={"text"}
    id={"CONSTITUENCYcity"}
    className={"input-align"}
    placeholder="CSelect the District / City "
  />
</CCol>
</CRow>

<CRow className={"row-alignment"} md="12" sm="12" lg="12" style={{ marginLeft: "-16px" }}>


<CCol className={"column-align"} md="5">
  <CLabel className={"label-name"}>
    Area / Village
 <span className={"text-danger"}>*</span>
  </CLabel>
  <CSelect
    styles={{ marginLeft: "50px" }}
    type={"text"}
    id={"CONSTITUENCY"}
    className={"input-align"}
    placeholder="Select the Area"
  />
</CCol>
<CCol className={"column-align"} md="5">
  <CLabel className={"label-name"}>
   Street
 <span className={"text-danger"}>*</span>
  </CLabel>
  <CSelect
    styles={{ marginLeft: "50px" }}
    type={"text"}
    id={"CONSTITUENCYcity"}
    className={"input-align"}
    placeholder="CSelect the Street"
  />
</CCol>
</CRow>


            <CButton
              id={"memberregisteraddbutton"}
              className={"saveBtn"}
              onClick={enableCreate}
              style={{
                marginLeft: "2.5%",
                width: "120px",
                cursor: "pointer",
                marginTop: "50px",
                marginBottom:"-50px"
              }}
            >

              Add Member
                  </CButton>

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
                      <td className="py-2">
                        <CInput
                          type={"checkbox"}
                          value={"select"}
                          // onClick={() => {
                          //   let data = item._id;
                          //   if (`${checked}` === `${data}`) {
                          //     setChecked("");
                          //   } else {
                          //     getToRoleEmpMovement(item);
                          //   }
                          // }}
                          // checked={checked === `${item._id}`}
                          style={{
                            width: "15px",
                            height: "15px",
                            marginLeft: "30px",
                            marginBottom: "10px",
                          }}
                        />
                        <CRow>
                          <CCol style={{ fontSize: "1.15rem" }} md="12">
                            <i
                              onClick={() => {
                                //   toggleDetails(index);
                              }}
                            ></i>
                            {/* <i
                                style={{
                                  marginRight: "5px",
                                  color: "#3480e2",
                                  cursor: "pointer",
                                }}
                                id={"locationLibraryEdit"}
                                onClick={() => EditCountry(item)}
                                className="fas fa-edit"
                              ></i>
                              <i
                                onClick={() => deleteConfirm(item._id)}
                                id={"locationLibraryDelete"}
                                style={{
                                  marginLeft: "5px",
                                  color: "#e85654",
                                  cursor: "pointer",
                                }}
                                className="fa fa-trash"
                              ></i> */}
                          </CCol>
                        </CRow>
                      </td>
                    );
                  },
                  show_details1: (item, index) => {
                    return (
                      <td className="py-2">
                        <CRow>

                          <CCol style={{ fontSize: "1.15rem" }} md="12">
                            <i
                              onClick={() => {
                                //   toggleDetails(index);
                              }}
                            ></i>
                            <i
                              style={{
                                marginRight: "5px",
                                color: "#3480e2",
                                cursor: "pointer",
                              }}
                              id={"constituencyEditicon"}
                              // onClick={() => EditCountry(item)}
                              className="fas fa-edit"
                            ></i>
                            <i
                              // onClick={() => deleteConfirm(item._id)}
                              id={"constituencyDelete"}
                              style={{
                                marginLeft: "5px",
                                color: "#e85654",
                                cursor: "pointer",
                              }}
                              className="fa fa-trash"
                            ></i>
                            <i
                             style={{
                              marginRight: "5px",
                              marginLeft:"10px",
                              color: "#3480e2",
                              cursor: "pointer",

                            }}
                            id={"constituencyEditicon"}
                            className="fa fa-eye"
                            ></i>
                            <i
                             style={{
                              marginRight: "5px",
                              marginLeft:"8px",
                              color: "#3480e2",
                              cursor: "pointer",

                            }}
                            id={"constituencyEditicon"}
                             className="fa fa-history"
                             ></i>
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
      {/* <CRow className={"row-alignment"} md="12" sm="12" lg="12"> */}
      {/* 

      </CRow> */}

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
{/*                 
        <CCol className={"column-align"} md="3">
          <CInput
          type={"file"}
            className={"input-align"}
            id={"memberregisterprofileImage"}
            name={"file"}
            type={"file"}
            id={"profileImage"}
            accept={"image/*"}
            style={{ display: "none" }}

          />

          <div
            id={"memberregisterhandleclick"}
            style={{
              height: "80px",
              width: "80px",
              border: "1px dashed black",
              marginLeft: "20px",
            }}

          >
            <img
              alt=""
              style={{
                width: "100%",
                height: "100%",
                position: "acsolute",
              }}
            />
          </div>
          <CLabel className={"label-name"}>
            Upload Image
      </CLabel>


        </CCol> */}
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
          styles={{marginLeft:"50px"}}
            type={"text"}
            id={"memberregisterEducationQualification"}
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
            id={"memberregisterOccupation"}
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
            Door No.
                  <span className={"text-danger"}> *</span>

          </CLabel>
          <CInput
            className={"input-align"}
            name={"Address"}
            id={"memberregisteraddress1"}
            placeholder="Address Line 1"
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
            // value={ward}
            // onChange={pinchange}
          />
        </CCol>

     {/* {show && ( */}


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
            id={"memberregisterDistrict"}
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
            id={"memberregisterArea"}
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


     {/* )}/ */}


    
     



    </div>
    <CRow>
      <CCol md="10">
        <CCol
          md="5"
          style={{
            marginTop: "18px",
            float: "right",
          }}
        >
          <CButton
            style={{
              float: "right",
            }}
            id={"cancelAbbreviationConfigureCode"}
            className={"cancelBtn"}
          onClick={()=> history.push("/MemberRegistration")}
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
            // onClick={() => {
            //   MemberRegiter();
            // }}
          >
            Save
          </CButton>{" "}
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
              <td className="py-2">
                <CRow>
                  <CCol style={{ fontSize: "1.15rem" }} md="12">
                    <i
                      onClick={() => {
                        //   toggleDetails(index);
                      }}
                    ></i>

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
