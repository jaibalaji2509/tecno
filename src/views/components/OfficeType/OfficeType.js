import React, { useState, useEffect } from "react";
    import { CImg, 
      CRow, 
      CCard,
      CCol,
      CButton, 
      CLabel, 
      CInput, 
      CInput,
      CDropdown,
      CDropdownMenu,
      CDropdownItem,
      CDropdownToggle } from "@coreui/react";
      import CIcon from '@coreui/icons-react'
      import Select from "react-select";
    import CDataTable from "../../CoreComponents/table/CDataTable";
    import { saveCreateMemberRegister } from "../../../services/ApiService";
    import { useHistory } from "react-router-dom";
    import "./Office.css"
    // import { colors } from "react-select/src/theme";
    
    function OfficeType() {
      const history = useHistory();
      const userData = [
        {
            SNo: "1",
             WingOffice: "HEAD OFFICE",
          Abbreviation: "heo",
          Code: "HO",
          },
      ];
      const [hide, setHide] = useState(false)
      const [memberhide, setMemberHide] = useState(true)
      const fields = [
        {
            key: "show_details",
            label: "Select",
            _style: { width: "3%" },
            name: <div>Email <input type={"checkbox"} onClick={""}/></div>,
            sorter: false,
            filter: false,
          },
        { key: "SNo", label: "S.NO", _style: { width: "10%" },sorter: false,
        filter: false, },
        { key: "WingOffice", label: "Type of Wing Office", _style: { width: "10%" } },
        { key: "Abbreviation", label: "Abbreviation", _style: { width: "10%" } },
        { key: "Code", label: "Code", _style: { width: "10%" } },
        { key: "ReportingTo", label: "Hierarchy ReportingTo", _style: { width: "10%" } },
        {
          label: "Action",
          key: "show_details1",
    
          _style: { width: "1%" },
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
              <span className={"header-label"}>Wing Office</span>
            </div>
         
        
               <div style={{ marginLeft: "-26px" }}>
                 <div className={"row-headerlabel"}>
                   <span  style={{marginLeft:"70px"}} className={"header-label"}>
                     {" "}
                     ADD NEW TYPE OF WING OFFICE{" "}
                   </span>
                 </div>
     <CRow className={"row-alignment"} style={{ marginLeft: "-76px" }}>
  <CCol className={"column-align"} md="12" lg="12" sm="12">
    <p className="mandatory_txt" style={{ marginLeft: "90px" }}>
      Mandatory fields are marked with an asterisk (*)
        </p>
        </CCol>
        </CRow>

</div>

<CRow className={"row-alignment"} md="12" sm="12" lg="12">
                <CCol className={"column-align"} md={4} >
                  <CLabel className={"label-name"}>
                    Type of Wing Office
                    <span className={"text-danger"}>*</span>
                  </CLabel>
                  <CInput
                    type={"text"}
                    className={"input-align"}
                    name={"Type of Wing Office"}
                    id={"wingofficename"}
                    placeholder="Type of Wing Office"
                  />
                </CCol>

                <CCol className={"column-align"} md={4} >
                  <CLabel className={"label-name"}>
                  Abbreviation 
                    <span className={"text-danger"}>*</span>
                  </CLabel>
                  <CInput
                    type={"text"}
                    className={"input-align"}
                    name={"Abbreviation"}
                    id={"WingAbbreviation "}
                    placeholder="Enter the Abbreviation"
                  />
                </CCol>
            
              </CRow>

              <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                <CCol className={"column-align"} md={4}>
                  <CLabel className={"label-name"}>
                    Code
                    <span className={"text-danger"}>*</span>
                  </CLabel>
                  <CInput
                    type={"text"}
                    className={"input-align"}
                    name={"Code"}
                    id={"wingcode"}
                    placeholder="Enter the Code"
                  />
                </CCol>

                <CCol className={"column-align"} md={4}>
                  <CLabel className={"label-name"}>
                  Hierarchy ReportingTo 
                    <span className={"text-danger"}>*</span>
                  </CLabel>
                  <Select
                    type={"text"}
                    id={"wingReportingTo"}
                    className={"select"}
                    placeholder="Select the Hierarchy ReportingTo"
                   
                  />
                </CCol>
            
              </CRow>
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
                    id={"cancelwing"}
                    className={"cancelBtn"}
                  >
                    CANCEL
                  </CButton>
                  <CButton
                    style={{
                      float: "right",
                      marginRight: "15px",
                    }}
                    id={"savewing"}
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
           
        

              </div>
            )}
      
 
                <CRow style={{ padding: "4%", marginTop: "1.5%" }}>
                  <CDataTable
                    items={userData}
                    fields={fields}
                    columnFilter
                    tableFilter
                    tableLabel={"List of TYPE OF Party WING OFFICE"}
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
                              </CCol>
                            </CRow>
                          </td>
                        );
                      },
                     
                      details: (item, index) => { },
                    }}
                  />
                </CRow>
                </CCard>
              </div>
 
            )}
  
    export default OfficeType
 