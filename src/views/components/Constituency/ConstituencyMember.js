import { CFormGroup, CInputRadio, CButton, CCard, CCol, CInput, CTextarea, CModal, CModalHeader, CModalTitle, CModalBody, CLabel, CRow, CBadge, CContainer } from "@coreui/react";
import React, { useState } from "react";
import Select from "react-select";
import CDataTable from "../../CoreComponents/table/CDataTable";
import DEFAULT_IMAGE from "../../../assets/img/No-image-icon.png";
import { toast } from "react-toastify";
import DEFAULT_NOIMAGE from '../../../assets/img/No-image-icon.png';
import { GlobalContext } from '../../../services/GlobalContext';
// import DEFAULT_IMAGE from "../../../assets/img/camera-icon.png";


const ConstituencyMember = () => {
  const [show, setShow] = useState(false);
  const [hide, setHide] = useState(false)
  const [hidehis, setHidehis] = useState(false)
  const [hide1, setHide1] = useState(false)
  const [memberhide, setMemberHide] = useState(true)
  const [files, setFiles] = useState("");
  const enableCreate = () => {
    setHide(true);
    setMemberHide(false)
  }
  const cancelCreate = () => {
    setHide(false);
    setMemberHide(true)
  }
  const cancelCreate1 = () => {
    setHide1(false);
    setMemberHide(true)
  }
  const cancelCreatehis = () => {
    setHidehis(false);
    setMemberHide(true)
  }
  const enableCreate1 = () => {
    setHide1(true);
    setMemberHide(false)
  }
  const enableCreatehis = () => {
    setHidehis(true);
    setMemberHide(false)
  }
  const getBadge = (status) => {
    switch (status) {
      case 'Active':
        return 'success';
      case 'Inactive':
        return 'secondary';
      case 'Pending':
        return 'warning';
      case 'Banned':
        return 'danger';
      default:
        return 'primary';
    }
  };
  const SelectType = [
    { value: "All", label: "All" },
    { value: "Parliamentry Assembly", label: "Parlimentry Assemblly" },
    { value: "legistative", label: "Legistative Assembly" },
  ];
  const Selectstatus = [
    { value: "all", label: "All" },
    { value: "active", label: "Active" },
    { value: "retired", label: "Retired" },
    { value: "resigned", label: "Resigned" },
    { value: "died", label: "Died" },
  ];
  const selectstate=[
    {value:'tamilnadu',label:"Tamilnadu"},
  ];
  const selectcity=[
    {value:"chennai",label:"Chennai"},
  ]
  const selectname=[
    {value:"ambattur",label:"Ambattur"},
    {value:"chepauk",label:"Chepauk-Thiruvallikeni constituency"}
  ]
  const searchmember=[
    {value:"	O. Panneerselvam, AIADMK since 11 May 2021",label:"	O. Panneerselvam, AIADMK since 11 May 2021"},
{value:"stalin",label:"Udhayanidhi Youth Wing Secretary of DMK, 	25/9, Chittaranjan Road, Cenotaph Road, Alwarpet, Chennai - 600018, Tamil Nadu, India"}
  ]
  const [pi, setPI] = useState("");
  // const handleSave = async (file, folder) => {
  //   if (file === undefined) {
  //     let e = "cancelled";
  //     return console.log(e);
  //   }
  //   if (file.size > 1048576) {
  //     return toast.warning("Please choose below 1 MB file");
  //   } else {
  //     const imgUri = URL.createObjectURL(file);
  //     setPI(file);
  //     setFiles(imgUri);
  //   }
  // };
  const scrollLeft = (element, change, duration) => {
    var start = element.scrollLeft,
      currentTime = 0,
      increment = 20;
    var animateScroll = function () {
      currentTime += increment;
      var val = Math.easeInOutQuad(currentTime, start, change, duration);
      element.scrollLeft = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };
    animateScroll();
  };

  Math.easeInOutQuad = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  const [allEmployees, setAllEmployees] = useState([]);
  const [colors, setColors] = useState([]);
  const [hover, setHover] = useState({ index: -1, data: [] });
  const [width, setWidth] = useState({ w1: 0, w2: 0 });
  const [sideBar1, setSideBar1] = useState(false);
  const [selected, setSelected] = useState({});
  const [menu, setMenu] = useState({
    style: 'menu',
    menuStatus: 'open',
    style3: 'menu1',
  });
  const { State, StateDispatch } = React.useContext(GlobalContext);
  const selectestatusupdate = [{
    value: "register", label: "Registration"
  },
  { value: "die", label: "Died" },
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

  return (
    <React.Fragment>

      {memberhide && (
        <div>
          <CCard>
            <CContainer>
              <div className={"main-headerlabel"}>
                <span className={"header-label"}>Constituency Member</span>
              </div>

              <CButton
                id={"constituencymembutton"}
                shape={"pill"}
                id={"suspendButton"}
                className={"saveBtn"}
                onClick={enableCreate}
                style={{ margin: "40px 40px", marginLeft: "55px" }}
              >
                Add Member to Constituency
                  </CButton>

              <CRow className={"row-alignment"} md="12" sm="12" lg="12" style={{ marginLeft: "-16px", marginTop: "-30px" }}>
                <CCol className={"column-align"} md="4">
                  <CLabel className={"label-name"}>
                    Type of Constituency
                             <span className={"text-danger"}>*</span>
                  </CLabel>
                  <Select
                    styles={{ marginLeft: "50px" }}
                    type={"text"}
                    id={"constituencymemtype"}
                    className={"input-align"}
                    placeholder="Select...."
                    options={SelectType}
                  />
                </CCol>
                <CCol className={"column-align"} md="4">
                  <CLabel className={"label-name"}>
                    Status
                            <span className={"text-danger"}>*</span>
                  </CLabel>
                  <Select
                    styles={{ marginLeft: "50px" }}
                    type={"text"}
                    id={"constituencymemstatus"}
                    className={"input-align"}
                    placeholder="Select...."
                    options={Selectstatus}
                  />
                </CCol>


              </CRow>

              <CRow className={"row-alignment"} md="12" sm="12" lg="12" style={{ marginLeft: "-16px" }}>

                <CCol className={"column-align"} md="4">
                  <CLabel className={"label-name"}>
                    State
                            <span className={"text-danger"}>*</span>
                  </CLabel>
                  <Select
                    styles={{ marginLeft: "50px" }}
                    type={"text"}
                    id={"constituencymemstate"}
                    className={"input-align"}
                    placeholder="Select the State"
                    options={selectstate}
                  />
                </CCol>
                <CCol className={"column-align"} md="4">
                  <CLabel className={"label-name"}>
                    District / City
                                <span className={"text-danger"}>*</span>
                  </CLabel>
                  <Select
                    styles={{ marginLeft: "50px" }}
                    type={"text"}
                    id={"constituencymemcity"}
                    className={"input-align"}
                    options={selectcity}
                    placeholder="Select the District / City "
                  />
                </CCol>

              </CRow>



              <CRow>
                <CCol style={{ fontSize: "1.55rem" }} md="12">
                  <i
                    id={"locationLibraryDelete"}
                    style={{
                      position: "absolute",
                      top: "120px",
                      marginLeft: "940px",
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
                      top: "120px",
                      marginLeft: "980px",
                      marginBottom: "20px",
                      color: "green",
                    }}
                    className="fa fa-share-alt"
                  ></i>
                </CCol>
              </CRow>



              <CRow style={{ padding: "4%", marginTop: "1.5%" }}>
                <CDataTable
                  items={[{
                    sNo: "1",
                    typeconstituency: "Legistative Assembly",
                    name: "Ambattur",
                    state: "TamilNadu",
                    city: "Chennai",
                    member: "Joseph Samuel",
                    from: "27/3/2021",
                    to: "27/3/2026",
                    status: "Active",
                  },
                {
                  sNo: "2",
                  typeconstituency: "Legistative Assembly",
                  name: "Ambattur",
                  state: "TamilNadu",
                  city: "Chennai",
                  member: "K. Anbazhagan",
                  from: "7/3/1967",
                  to: "7/3/1971",
                  status: "Died",
                }
                ]}
                  fields={[{ key: "sNo", label: "Sl. No", _style: { width: "1%" } },
                  {
                    key: "typeconstituency",
                    label: "Type of Constituency",
                    _style: { width: "19%" },
                  },
                  {
                    key: "name",
                    label: "Name of Constituency",
                    _style: { width: "10%" },
                  },
                  {
                    key: "state",
                    label: "State",
                    _style: { width: "10%" },
                  },
                  {
                    key: "city",
                    label: "District / City",
                    _style: { width: "10%" },
                  },
                  { key: "member", label: "Name of the Member", _style: { width: "15%" } },
                  { key: "from", label: "From Date", _style: { width: "10%" } },
                  { key: "to", label: "To Date", _style: { width: "5%" } },
                  { key: "status", label: "Status", _style: { width: "5%" } },
                  {
                    key: "show_details1",
                    label: "Action",
                    _style: { width: "20%" },
                  },
                  ]}
                  columnFilter
                  tableFilter
                  tableLabel={"List of Member of Constituency"}
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
                              {/* <i
                                  id={"memberregisterdelete"}
                                  style={{
                                    marginLeft: "5px",
                                    color: "#e85654",
                                    cursor: "pointer",
                                  }}
                                  className="fa fa-trash"
                                ></i> */}
                              <img
                                src="https://previews.123rf.com/images/tmricons/tmricons1707/tmricons170700289/81206333-delete-sign-icon-remove-button.jpg" style={{ width: "30px", height: "30px", cursor: "pointer" }} />
                              <img
                                onClick={enableCreate1}
                                src="https://previews.123rf.com/images/faysalfarhan/faysalfarhan1502/faysalfarhan150200697/36248315-update-icon-glassy-green-button.jpg" style={{ height: "30px", width: "30px", cursor: "pointer" }} />
                              <i
                                style={{
                                                                
                                  color: "#3480e2",
                                  cursor: "pointer",

                                }}
                                id={"memberregisterediticon"}
                                onClick={enableCreatehis}
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
            </CContainer>
          </CCard>
        </div>
      )}





      {hide && (
        <div>


          <CCard>
            <CContainer>
              <div className={"main-headerlabel"}>
                <span className={"header-label"}>Adding Member to Constituency</span>
              </div>

              <CRow className={"row-alignment"} md="12" sm="12" lg="12" style={{ marginLeft: "-16px" }}>
                <CCol className={"column-align"} md="4">
                  <CLabel className={"label-name"}>
                    Type of Constituency
                             <span className={"text-danger"}>*</span>
                  </CLabel>
                  <Select
                    styles={{ marginLeft: "50px" }}
                    type={"text"}
                    id={"constituencymemtype"}
                    className={"input-align"}
                    placeholder="Select...."
                    options={SelectType}
                  />
                </CCol>
                <CCol className={"column-align"} md="4">
                  <CLabel className={"label-name"}>
                    State
                            <span className={"text-danger"}>*</span>
                  </CLabel>
                  <Select
                    styles={{ marginLeft: "50px" }}
                    type={"text"}
                    id={"constituencymemstate"}
                    className={"input-align"}
                    placeholder="Select the State"
                    options={selectstate}
                  />
                </CCol>
              </CRow>

              <CRow className={"row-alignment"} md="12" sm="12" lg="12" style={{ marginLeft: "-16px" }}>


                <CCol className={"column-align"} md="4">
                  <CLabel className={"label-name"}>
                    District / City
                                <span className={"text-danger"}>*</span>
                  </CLabel>
                  <Select
                    styles={{ marginLeft: "50px" }}
                    type={"text"}
                    id={"constituencymemcity"}
                    className={"input-align"}
                    placeholder="Select the District / City "
                    options={selectcity}
                  />
                </CCol>
                <CCol className={"column-align"} md="4">
                  <CLabel className={"label-name"}>
                    Name of the Constituency
                            <span className={"text-danger"}>*</span>
                  </CLabel>
                  <Select
                    styles={{ marginLeft: "50px" }}
                    type={"text"}
                    id={"constituencymemname"}
                    className={"input-align"}
                    placeholder="Select....."
                    options={selectname}
                  />
                </CCol>

              </CRow>
              <CCol>
                <CLabel
                  style={{
                    fontSize: "20PX",
                    fontFamily: "Open Sans",
                    fontWeight: "700",
                    marginLeft: "55px",
                    marginTop: "60px",
                  }}
                >
                  Select Member
                    </CLabel>
              </CCol>

              <CRow className={"row-alignment"}>
                <CCol className={"column-align"} md="6">
                  <CLabel className={"label-name"}>
                    Search Member
                        <span className={"text-danger"}>*</span>
                  </CLabel>
                  <Select
                    className={"input-align"}
                    id={"municipalstatename"}
                    name={"state"}
                    placeholder={"Select Type of Office"}
                  options={searchmember}
                  />
                </CCol>
              </CRow>

              <CCol>
                <CLabel
                  style={{
                    fontSize: "20PX",
                    fontFamily: "Open Sans",
                    fontWeight: "700",
                    marginLeft: "55px",
                    marginTop: "60px",
                  }}
                >
                  Member details
                    </CLabel>
              </CCol>

              
            <CCol md="12" lg="12" sm="12" style={{ marginTop: "1.5%" }}>
            <CRow className={"row-alignment"}>
                  <CCol className={"column-align"} md="4">
                  <CLabel className={"form-labels-9 col-md-5 reAssign-Label"}>
                    Name :
                                      </CLabel>
<span>Udhayanidhi Stalin</span>
                  <CLabel className={"reAssign-Detail"}>
                  </CLabel>
                </CCol>

               
                  <CCol className={"column-align"} md="4">
                  <CLabel className={"form-labels-9 col-md-5 reAssign-Label"}>
                  Gender :{" "}
                  </CLabel>
                  <span>Male</span>
                  <CLabel className={"reAssign-Detail"}>
                  </CLabel>
                </CCol>
                <CCol>
                  <img src="https://m.media-amazon.com/images/M/MV5BNmM0ZTZjYWUtYWQ0Yy00OTllLTliMDItODNmMTVhYmQ2MWNmXkEyXkFqcGdeQXVyMjYwMDk5NjE@._V1_.jpg"/>
                </CCol>
              </CRow>
              <CRow className={"row-alignment"}>
                  <CCol className={"column-align"} md="4">
                  <CLabel className={"form-labels-9 col-md-5 reAssign-Label"}>
                  
                     Age :
                  </CLabel>
                  <span>43</span>
                  <CLabel className={"reAssign-Detail"}>
                  </CLabel>
                </CCol>
              </CRow>
            </CCol>
          
              <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                <CCol className={"column-align"} md="5">
                  <CLabel className={"label-name"}>
                    Date of Appointment
                  <span className={"text-danger"}>*</span>
                  </CLabel>
                  <CInput
                    type={"date"}
                    className={"input-align"}
                    id={"constituencymemappointment"}
                    name={"state"}
                    placeholder="dd-mm-yyyy"
                  />

                </CCol>
                <CCol className={"column-align"} style={{ marginLeft: "640px", marginTop: "-62px" }} md={5}>
                  <CLabel className={"label-name"}>
                    Date of Retirement
                  <span className={"text-danger"}>*</span>
                    <span style={{ color: "green" }}>-</span>
                  </CLabel>
                  <CInput
                    type={"date"}
                    className={"input-align"}
                    id={"constituencymemrfetirement"}
                    name={"state"}
                    placeholder="dd-mm-yyyy"
                  />

                </CCol>
              </CRow>
              <CRow>
                <CCol>
                  <CButton
                    shape={"pill"}
                    id={"constituencymembutton"}
                    className={"cancelBtn"}
                    onClick={cancelCreate}
                    style={{ float: "right", margin: "10px" }}
                  >
                    Cancel
                  </CButton>
                  <CButton
                    shape={"pill"}
                    id={"constituencymembutton"}
                    className={"saveBtn"}

                    style={{ float: "right", margin: "10px" }}
                  >
                    Save
                  </CButton>
                </CCol>
              </CRow>

            </CContainer>

          </CCard>
        </div>
      )}
      {hide1 && (
        <div>
          <React.Fragment>
            <CCard style={{ minHeight: "600px" }}>
              <CContainer>
                <div className={"main-headerlabel"}>
                  <span className={"header-label"}>Update Status</span>
                </div>
                <CRow className={"role-form-container-3"}>
           
            <CCol md="12" lg="12" sm="12" style={{ marginTop: "1.5%" }}>
            <CRow className={"row-alignment"}>
                  <CCol className={"column-align"} md="4">
                  <CLabel className={"form-labels-9 col-md-5 reAssign-Label"}>
                    Name :
                                      </CLabel>
<span>K. Anbazhagan</span>
                  <CLabel className={"reAssign-Detail"}>
                  </CLabel>
                </CCol>

               
                  <CCol className={"column-align"} md="4">
                  <CLabel className={"form-labels-9 col-md-5 reAssign-Label"}>
                  Gender :{" "}
                  </CLabel>
                  <span>Male</span>
                  <CLabel className={"reAssign-Detail"}>
                  </CLabel>
                </CCol>
                <CCol>
                  <img src="https://static.theprint.in/wp-content/uploads/2020/03/Anbazhagan-696x392.png" />
                </CCol>
              </CRow>
              <CRow className={"row-alignment"}>
                  <CCol className={"column-align"} md="4">
                  <CLabel className={"form-labels-9 col-md-5 reAssign-Label"}>
                  
                     Age :
                  </CLabel>
                  <span>98</span>
                  <CLabel className={"reAssign-Detail"}>
                  </CLabel>
                </CCol>
              </CRow>
            </CCol>
          </CRow>
{/* 
                <CRow className={"row-alignment"}>
                  <CCol className={"column-align"} md="4">
                    <CLabel className={"label-name"}>
                      Name
                        <span>- Kamal Nath</span>
                    </CLabel>
                  </CCol>
                  <CCol className={"column-align"} md="4">
                    <CLabel className={"label-name"}>
                      Gender
                        <span>- Male</span>
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
                <CRow
                  className={"row-alignment"}
                  style={{ marginTop: "-140px" }}
                >
                  <CCol className={"column-align"} md="4">
                    <CLabel className={"label-name"}>
                      Age
                        <span>- 75</span>
                    </CLabel>
                  </CCol>
                </CRow> */}
                <CCol>
                  <CLabel
                    style={{
                      fontSize: "20PX",
                      fontFamily: "Open Sans",
                      fontWeight: "700",
                      marginLeft: "55px",
                      marginTop: "60px",
                    }}
                  >
                    No of Times as Mp
                   </CLabel>
                </CCol>
                <CRow className={"row-alignment"} md="12" sm="12" lg="12" style={{ marginLeft: "-16px", marginTop: "-30px" }}>

                  <CCol className={"column-align"} md="4">
                    <CLabel className={"label-name"}>
                      Status
                            <span className={"text-danger"}>*</span>
                    </CLabel>
                    <Select
                      styles={{ marginLeft: "70px" }}
                      type={"text"}
                      id={"constituencymemstatus"}
                      className={"input-align"}
                      options={selectestatusupdate}
                      placeholder="Select...."
                    />
                  </CCol>
                  <CCol className={"column-align"} md="4">
                    <CLabel className={"label-name"}>
                      Note
                    <span className={"text-danger"}> *</span>
                    </CLabel>
                    <CTextarea
                      id={"contimemnote"}
                      placeholder="Enter Description for Termination"
                      style={{ height: "80px", marginLeft: "10px" }}

                      min="10"
                      max="500"
                    ></CTextarea>
                  </CCol>
                </CRow>
                <CRow>
                  <CCol>
                    <CButton
                      shape={"pill"}
                      id={"constituencymembutton"}
                      className={"cancelBtn"}
                      onClick={cancelCreate1}
                      style={{ float: "right", margin: "10px" }}
                    >
                      Back
                  </CButton>
                    <CButton
                      shape={"pill"}
                      id={"constituencymembutton"}
                      className={"saveBtn"}

                      style={{ float: "right", margin: "10px" }}
                    >
                      Save
                  </CButton>
                  </CCol>
                </CRow>

              </CContainer>
            </CCard>
          </React.Fragment>
        </div>
      )}

      {hidehis && (
        <div>
          <React.Fragment>
            <CCard>
              <CContainer>

                <div className={"main-headerlabel"}>
                  <span className={"header-label"}>History Page</span>
                </div>

                <CRow>
                  <CCol>
                    <CButton
                      shape={"pill"}
                      id={"constituencymembutton"}
                      className={"cancelBtn"}
                      onClick={cancelCreatehis}
                      style={{ float: "right", margin: "10px" }}
                    >
                      Back
                  </CButton>

                  </CCol>
                </CRow>

                <CRow className={"role-form-container-3"}>
           
           <CCol md="12" lg="12" sm="12" style={{ marginTop: "1.5%" }}>
           <CRow className={"row-alignment"}>
                 <CCol className={"column-align"} md="4">
                 <CLabel className={"form-labels-9 col-md-5 reAssign-Label"}>
                   Name :
                                     </CLabel>
<span>K. Anbazhagan</span>
                 <CLabel className={"reAssign-Detail"}>
                 </CLabel>
               </CCol>

              
                 <CCol className={"column-align"} md="4">
                 <CLabel className={"form-labels-9 col-md-5 reAssign-Label"}>
                 Gender :{" "}
                 </CLabel>
                 <span>Male</span>
                 <CLabel className={"reAssign-Detail"}>
                 </CLabel>
               </CCol>
               <CCol>
                 <img src="https://static.theprint.in/wp-content/uploads/2020/03/Anbazhagan-696x392.png" style={{height:"170px",marginLeft:"-100px"}}/>
               </CCol>
             </CRow>
             <CRow className={"row-alignment"}>
                 <CCol className={"column-align"} md="4" style={{marginTop:"-70px"}}>
                 <CLabel className={"form-labels-9 col-md-5 reAssign-Label"}>
                 
                    Age :
                 </CLabel>
                 <span>98</span>
                 <CLabel className={"reAssign-Detail"}>
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
                        top: "145px",
                        marginLeft: "940px",
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
                        top: "145px",
                        marginLeft: "980px",
                        marginBottom: "20px",
                        color: "green",
                      }}
                      className="fa fa-share-alt"
                    ></i>
                  </CCol>
                </CRow>



                <CRow style={{ padding: "6%", marginTop: "1.5%" }}>
                  <CDataTable
                    items={[{
                      sNo: "1",

                    },
                  {  sNo: "2"},
                  {  sNo: "3"},
                  {  sNo: "4"},
                  {  sNo: "5"},
                  {  sNo: "6"},
                ]}
                    fields={[{ key: "sNo", label: "Sl. No", _style: { width: "1%" } },
                    {
                      key: "typeconstituency",
                      label: "Name of Party / Party Wings Office",
                      _style: { width: "19%" },
                    },
                    {
                      key: "name",
                      label: "Type of Office",
                      _style: { width: "10%" },
                    },
                    {
                      key: "state",
                      label: "Department",
                      _style: { width: "10%" },
                    },
                    {
                      key: "city",
                      label: "Designation",
                      _style: { width: "10%" },
                    },
                    { key: "member", label: "Role", _style: { width: "10%" } },
                    { key: "from", label: "From Date", _style: { width: "10%" } },
                    { key: "to", label: "To Date", _style: { width: "5%" } },
                    ]}
                    columnFilter
                    tableFilter
                    tableLabel={"Details of Party Posting"}
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

                      details: (item, index) => { },
                    }}
                  />
                </CRow>

                <CRow>
                  <CCol style={{ fontSize: "1.55rem" }} md="12">
                    <i
                      id={"locationLibraryDelete"}
                      style={{
                        position: "absolute",
                        top: "145px",
                        marginLeft: "940px",
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
                        top: "145px",
                        marginLeft: "980px",
                        marginBottom: "20px",
                        color: "green",
                      }}
                      className="fa fa-share-alt"
                    ></i>
                  </CCol>
                </CRow>



                <CRow style={{ padding: "6%", marginTop: "1.5%" }}>
                  <CDataTable
                    items={[{
                      sNo: "1",

                    },
                  {  sNo: "2"},
                  {  sNo: "3"},
                  {  sNo: "4"},
                  {  sNo: "5"},
                  {  sNo: "6"},
                ]}
                    fields={[{ key: "sNo", label: "Sl. No", _style: { width: "1%" } },

                    {
                      key: "name",
                      label: "Name of Representative Posting",
                      _style: { width: "10%" },
                    },
                    { key: "from", label: "From Date", _style: { width: "10%" } },
                    { key: "to", label: "To Date", _style: { width: "5%" } },
                    { key: "status", label: "Status", _style: { width: "5%" } },
                    ]}
                    columnFilter
                    tableFilter
                    tableLabel={"Details of Public Representative Posting"}
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

                      details: (item, index) => { },
                    }}
                  />
                </CRow>

                <CRow>
                  <CCol style={{ fontSize: "1.55rem" }} md="12">
                    <i
                      id={"locationLibraryDelete"}
                      style={{
                        position: "absolute",
                        top: "145px",
                        marginLeft: "940px",
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
                        top: "145px",
                        marginLeft: "980px",
                        marginBottom: "20px",
                        color: "green",
                      }}
                      className="fa fa-share-alt"
                    ></i>
                  </CCol>
                </CRow>



                <CRow style={{ padding: "6%", marginTop: "1.5%" }}>
                  <CDataTable
                    items={[{
                      sNo: "1",

                    },
                  {  sNo: "2"},
                  {  sNo: "3"},
                  {  sNo: "4"},
                  {  sNo: "5"},
                  {  sNo: "6"},
                ]}
                    fields={[{ key: "sNo", label: "Sl. No", _style: { width: "1%" } },
                    {
                      key: "typeconstituency",
                      label: "Name of the Ministry",
                      _style: { width: "19%" },
                    },
                    {
                      key: "name",
                      label: "Portfolio",
                      _style: { width: "10%" },
                    },

                    { key: "from", label: "From Date", _style: { width: "10%" } },
                    { key: "to", label: "To Date", _style: { width: "5%" } },
                    ]}
                    columnFilter
                    tableFilter
                    tableLabel={"Details of State Ministry Portfolio"}
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

                      details: (item, index) => { },
                    }}
                  />
                </CRow>

                <CRow>
                  <CCol style={{ fontSize: "1.55rem" }} md="12">
                    <i
                      id={"locationLibraryDelete"}
                      style={{
                        position: "absolute",
                        top: "145px",
                        marginLeft: "940px",
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
                        top: "145px",
                        marginLeft: "980px",
                        marginBottom: "20px",
                        color: "green",
                      }}
                      className="fa fa-share-alt"
                    ></i>
                  </CCol>
                </CRow>



                <CRow style={{ padding: "6%", marginTop: "1.5%" }}>
                  <CDataTable
                    items={[{
                      sNo: "1",

                    },
                  {  sNo: "2"},
                  {  sNo: "3"},
                  {  sNo: "4"},
                  {  sNo: "5"},
                  {  sNo: "6"},
                ]}
                    fields={[{ key: "sNo", label: "Sl. No", _style: { width: "1%" } },
                    {
                      key: "typeconstituency",
                      label: "Name of the Ministry",
                      _style: { width: "19%" },
                    },
                    {
                      key: "name",
                      label: "Portfolio",
                      _style: { width: "10%" },
                    },

                    { key: "from", label: "From Date", _style: { width: "10%" } },
                    { key: "to", label: "To Date", _style: { width: "5%" } },


                    ]}
                    columnFilter
                    tableFilter
                    tableLabel={"Details of Central Ministers Portfolio"}
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
                      details: (item, index) => { },
                    }}
                  />
                </CRow>

              </CContainer>
            </CCard>
          </React.Fragment>
        </div>
      )}
    </React.Fragment>

  )
}

export default ConstituencyMember