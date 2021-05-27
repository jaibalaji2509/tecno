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
  CSelect,
   } from "@coreui/react";
  import CDataTable from "../../CoreComponents/table/CDataTable";
import "./MemberRegistration.css"
import Select from "react-select";
// import DEFAULT_IMAGE from "../../../assets/img/camera-icon.png";
import { toast } from "react-toastify";

             
function MemberRegistration() {
  const [, setSelected] = useState({});
  const [steetSchema, ] = useState([]);
  const [Education, ] = useState([]);
  const [Occupation, ] = useState([]);
  const [, setFiles] = useState("");
  const [, setPI] = useState("");
  const [sideBar1, setSideBar1] = useState(false);
  const [menu, setMenu] = useState({
    style: 'menu',
    menuStatus: 'open',
    style3: 'menu1',
});

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
  const handleClickhistory = () => {
    switch (menu.menuStatus) {
         case 'open':
              setMenu({
                   menuStatus: 'close',
                   style3: 'menu2',
                   style: 'menu active',
              });
              setSideBar1(true);
              break;
         case 'close':
              setMenu({
                   menuStatus: 'open',
                   style3: 'menu1',
                   style: 'menu',
              });
              setTimeout(() => {
                   setSideBar1(false);
              }, 1000);
              break;
    }
};

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
  const cancelCreate = () => {
    setHide(false);
    setMemberHide(true)
  }

  return (
    <div>
        {sideBar1 && (
                    <div>
                   <CCard>
                         <CRow className={''}>
                              <CCol md='12' lg='12' sm='12'>
                                   <div>
                                        <span style={{ fontSize: '22px', fontWeight: '700' }}>Member History </span>
                                   </div>
                              </CCol>
                         </CRow>
                         <CRow>
                              <CCol md='2' lg='2' sm='2'>
                                   <img
                                        alt={''}
                                        type='text'
                                        // src={selected ? selected.profileImage : DEFAULT_NOIMAGE}
                                        style={{
                                             width: '150px',
                                             height: '160px',
                                             position: 'relative',
                                             background: '#fff',
                                             left: '0%',
                                             top: '9%',
                                             
                                        }}
                                   />
                              </CCol>
                              <CCol md='10' lg='10' sm='10' style={{ marginTop: '4%' }}>
                                   <CRow className={'LengthDataw'}>
                                        <CCol>
                                             <CLabel className={'form-labels-9 col-md-5 reAssign-Label'}>Name of the Member :</CLabel>

                                             <CLabel className={'reAssign-Detail'}></CLabel>
                                        </CCol>

                                        <CCol>
                                             <CLabel className={'form-labels-9 col-md-5 reAssign-Label'}>Address : </CLabel>

                                             <CLabel className={'reAssign-Detail'} style={{ marginLeft: '-41px' }}>
                                                  {/* {selected.employeeRole ? selected.employeeRole.dccDescription : '-'} */}
                                             </CLabel>
                                        </CCol>
                                   </CRow>


                              </CCol>
                         </CRow>
                         <CRow>
              <CCol style={{ fontSize: "1.55rem" }} md="12">
                <i
                  id={"locationLibraryDelete"}
                  style={{
                    position: "absolute",
                    top: "80px",
                    marginLeft: "955px",
                    marginBottom: "20px",
                    color: "#0072ff",
                  }}
                  className="fa fa-print"
                ></i>
              </CCol>
              <CCol style={{ fontSize: "1.55rem" }} md="12">
                <i
                  id={"locationLibraryDelete"}
                  style={{
                    position: "absolute",
                    top: "80px",
                    marginLeft: "1000px",
                    marginBottom: "20px",
                    color: "green",
                  }}
                  className="fa fa-share-alt"
                ></i>
              </CCol>
            </CRow>


                         <CRow>
                              <CCol
                                   style={{
                                        margin: '20px 0px 10px 10px',
                                        maxHeight: '290px',
                                        minHeight: '290px',
                                        overflow: 'auto',
                                   }}>
                                            <CDataTable
                                        tableLabel={'List of Party Posts'}
                                        columnFilter
                                        footer
                                        tableFilter
                                        hover
                                        sorter
                                        scopedSlots={{
                                             status: (item) => <td></td>,
                                        }}
                                        items={[
                                             {
                                                  name1: 'sadasd',
                                                  name6: 'sadasd',
                                                  name5: 'sadasd',
                                                  name4: 'sadasd',
                                                  name3: 'sadasd',
                                                  name2: 'sadasd',
                                             },
                                             {
                                                  name1: 'sadasd',
                                                  name6: 'sadasd',
                                                  name5: 'sadasd',
                                                  name4: 'sadasd',
                                                  name3: 'sadasd',
                                                  name2: 'sadasd',
                                             },
                                             {
                                                  name1: 'sadasd',
                                                  name6: 'sadasd',
                                                  name5: 'sadasd',
                                                  name4: 'sadasd',
                                                  name3: 'sadasd',
                                                  name2: 'sadasd',
                                             },
                                             {
                                                  name1: 'sadasd',
                                                  name6: 'sadasd',
                                                  name5: 'sadasd',
                                                  name4: 'sadasd',
                                                  name3: 'sadasd',
                                                  name2: 'sadasd',
                                             },
                                             {
                                                  name1: 'sadasd',
                                                  name6: 'sadasd',
                                                  name5: 'sadasd',
                                                  name4: 'sadasd',
                                                  name3: 'sadasd',
                                                  name2: 'sadasd',
                                             },
                                             {
                                                  name1: 'sadasd',
                                                  name6: 'sadasd',
                                                  name5: 'sadasd',
                                                  name4: 'sadasd',
                                                  name3: 'sadasd',
                                                  name2: 'sadasd',
                                             },
                                             {
                                                  name1: 'sadasd',
                                                  name6: 'sadasd',
                                                  name5: 'sadasd',
                                                  name4: 'sadasd',
                                                  name3: 'sadasd',
                                                  name2: 'sadasd',
                                             },
                                             {
                                                  name1: 'sadasd',
                                                  name6: 'sadasd',
                                                  name5: 'sadasd',
                                                  name4: 'sadasd',
                                                  name3: 'sadasd',
                                                  name2: 'sadasd',
                                             },
                                             {
                                                  name1: 'sadasd',
                                                  name6: 'sadasd',
                                                  name5: 'sadasd',
                                                  name4: 'sadasd',
                                                  name3: 'sadasd',
                                                  name2: 'sadasd',
                                             },
                                             {
                                                  name1: 'sadasd',
                                                  name6: 'sadasd',
                                                  name5: 'sadasd',
                                                  name4: 'sadasd',
                                                  name3: 'sadasd',
                                                  name2: 'sadasd',
                                             },
                                             {
                                                  name1: 'sadasd',
                                                  name6: 'sadasd',
                                                  name5: 'sadasd',
                                                  name4: 'sadasd',
                                                  name3: 'sadasd',
                                                  name2: 'sadasd',
                                             },
                                             {
                                                  name1: 'sadasd',
                                                  name6: 'sadasd',
                                                  name5: 'sadasd',
                                                  name4: 'sadasd',
                                                  name3: 'sadasd',
                                                  name2: 'sadasd',
                                             },
                                        ]}
                                        fields={[
                                             { key: 'name1' },
                                             { key: 'name2' },
                                             { key: 'name3' },
                                             { key: 'name4' },
                                             { key: 'name5' },
                                             { key: 'name6' },
                                        ]}
                                   />
                              </CCol>
                         </CRow>
                         <CButton
                              style={{ position: 'absolute', top: '15px', right: '15px' }}
                              className={'cancelBtn'}
                              onClick={handleClickhistory}>
                              Back
                         </CButton>
                         </CCard>
                    </div>
               )}

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
  <CSelect
    styles={{ marginLeft: "50px" }}
    type={"text"}
    id={"memberregistercity"}
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
  <CSelect
    styles={{ marginLeft: "50px" }}
    type={"text"}
    id={"memberregisterstreet"}
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
                  <CRow>
              <CCol style={{ fontSize: "1.55rem" }} md="12">
                <i
                  id={"locationLibraryDelete"}
                  style={{
                    position: "absolute",
                    top: "80px",
                    marginLeft: "955px",
                    marginBottom: "20px",
                    color: "#0072ff",
                  }}
                  className="fa fa-print"
                ></i>
              </CCol>
              <CCol style={{ fontSize: "1.55rem" }} md="12">
                <i
                  id={"locationLibraryDelete"}
                  style={{
                    position: "absolute",
                    top: "80px",
                    marginLeft: "1000px",
                    marginBottom: "20px",
                    color: "green",
                  }}
                  className="fa fa-share-alt"
                ></i>
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
                      <td className="py-2">
                        <CInput
                          type={"checkbox"}
                          value={"select"}
                          style={{
                            width: "15px",
                            height: "15px",
                            marginLeft: "30px",
                            marginBottom: "10px",
                          }}
                        />
                        <CRow>
                          <CCol style={{ fontSize: "1.15rem" }} md="12">
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
                              style={{
                                marginRight: "5px",
                                color: "#3480e2",
                                cursor: "pointer",
                              }}
                              id={"memberregisterediticon"}
                              className="fas fa-edit"
                            ></i>
                            <i
                              id={"memberregisterdelete"}
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
                            id={"memberregisterediticon"}
                            className="fa fa-eye"
                            ></i>
                            <i
                             style={{
                              marginRight: "5px",
                              marginLeft:"8px",
                              color: "#3480e2",
                              cursor: "pointer",

                            }}
                            id={"memberregisterediticon"}
                             className="fa fa-history"
                             onClick={() => {
                              setSelected();
                              handleClickhistory();
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
          styles={{marginLeft:"50px"}}
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
            marginTop: "18px",
            float: "right",
          }}
        >
          <CButton
            style={{
              float: "right",
            }}
            id={"cancelabbreviationconfigurecode"}
            className={"cancelBtn"}
            onClick={cancelCreate}          >
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

    <CRow style={{ marginLeft:"1200px",position:"absolute" ,marginTop:"30px"}}>
                    <CCol sm="6" lg="3" style={{ marginLeft: "10px" }}>
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
                border: "1px dashed black",
                marginTop:"-670px",
                marginLeft:"-300px"
              }}
              onClick={() => handleClick()}
            >
              <img
                alt=""
                // src={files !== "" ? files : DEFAULT_IMAGE}
                style={{
                  width: "100%",
                  height: "100%",
                  position: "acsolute",
                }}
              />
            </div>

            <CLabel className={"form-label1"}
            style={{
              marginLeft:"-300px"
            }}
            >
              Upload Image
              <span className={"text-danger"}> *</span>
            </CLabel>


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
