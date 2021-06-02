import { CFormGroup,CInputRadio,CButton, CCard, CCol, CInput, CLabel, CRow, CSelect, CContainer } from "@coreui/react";
import React, { useState } from "react";
import Select from "react-select";
import CDataTable from "../../CoreComponents/table/CDataTable";
import DEFAULT_IMAGE from "../../../assets/img/No-image-icon.png";
import { toast } from "react-toastify";


const ConstituencyMember = () => {
    const [show, setShow] = useState(false);
    const [files, setFiles] = useState("");

const[pi,setPI] = useState("");
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
            {show === false ? (
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
                            onClick={() => {
                                setShow(true);
                            }}
                            style={{ margin: "40px 40px", marginLeft:"55px" }}
                        >
                            Add Member to Constituency
                  </CButton>

                        <CRow className={"row-alignment"} md="12" sm="12" lg="12" style={{ marginLeft: "-16px",marginTop:"-30px" }}>
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

                                },]}
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
                                { key: "member", label: "Name of the Member", _style: { width: "10%" } },
                                { key: "from", label: "From Date", _style: { width: "10%" } },
                                { key: "to", label: "To Date", _style: { width: "5%" } },
                                { key: "status", label: "Status", _style: { width: "5%" } },
                                {
                                    key: "show_details1",
                                    label: "Action",
                                    _style: { width: "15%" },
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
                                                                marginLeft: "10px",
                                                                color: "green",
                                                                cursor: "pointer",
                                                            }}
                                                            id={"removeicon"}
                                                            className="fas fa-eraser"></i>
                                                        <i
                                                            style={{
                                                                marginRight: "5px",
                                                                marginLeft: "10px",
                                                                color: "#3480e2",
                                                                cursor: "pointer",

                                                            }}
                                                            id={"memberregisterediticon"}
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
            ) : (
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
                      />
                    </CCol>
                  </CRow>

                  <CRow className={"row-alignment"}>
                    <CCol className={"column-align"} md="4">
                      <CLabel className={"label-name"}>
                        Name
                        <span>-</span>
                      </CLabel>
                    </CCol>

                    <CCol className={"column-align"} md="4">
                      <CLabel className={"label-name"}>
                        Department
                        <span>-</span>
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
                    left: "1%",
                    top: "-20%",
                  }}
                />
              </CCol>
              <CRow
              className={"row-alignment"}
              style={{ marginTop: "-140px" }}
            >
              <CCol className={"column-align"} style={{marginLeft:"62px"}}md="4">
                <CLabel className={"label-name"}>
                Name of the Party / Party Wings Office
                        <span>-</span>
                </CLabel>
              </CCol>
              <CCol className={"column-align"} style={{marginLeft:"200px",fontWeight:900}}md="4">
                <CLabel className={"label-name"}>
                Type of Party / Party Wings Office
                        <span>-</span>
                </CLabel>
              </CCol>
            </CRow>
           </CRow>
                  <CCol style={{marginTop:"-70px"}}>
                    <CLabel
                      style={{
                        fontSize: "20PX",
                        fontFamily: "Open Sans",
                        fontWeight: "700",
                        marginLeft: "55px",
                        marginTop: "60px",
                      }}
                    >
                      Member details Display
                    </CLabel>
                  </CCol>

                  <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                  
        <CCol className={"column-align"} md={5}>
          <CLabel className={"label-name"}>
             Name
            <span className={"text-danger"}>*</span>
          </CLabel>
          <CInput
            type={"text"}
            className={"input-align"}
            name={"First Name"}
            id={"constituencymemname"}
            placeholder="Name"
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
        <CCol className={"column-align"} md={5}>
          <CLabel className={"label-name"}>
            Age
            <span className={"text-danger"}>*</span>
          </CLabel>
          <CInput
            type={"text"}
            className={"input-align"}
            name={"First Name"}
            id={"constituencymemage"}
            placeholder="Age"
          />
        </CCol>
</CRow>


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
              <CCol className={"column-align"} style={{marginLeft:"640px",marginTop:"-62px"}} md={5}>
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
                  onClick={() => {
                    setShow(false);
                  }}
                  style={{ float: "right", margin: "10px" }}
                >
                  Cancel
                  </CButton>
                <CButton
                  shape={"pill"}
                  id={"constituencymembutton"}
                  className={"saveBtn"}
                  onClick={() => {
                    setShow(false);
                  }}
                  style={{ float: "right", margin: "10px" }}
                >
                  Save
                  </CButton>
              </CCol>
            </CRow>

                    </CContainer>

                </CCard>
            )}
        </React.Fragment>

    )
}

export default ConstituencyMember
