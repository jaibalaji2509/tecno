import React, { useState, useEffect } from "react";
    import { CImg, 
      CRow, 
      CCard,
      CCol,
      CButton, 
      CLabel, 
      CInput, 
      CWidgetDropdown,
      CDropdown,
      CDropdownMenu,
      CDropdownItem,
      CDropdownToggle } from "@coreui/react";
      import CIcon from '@coreui/icons-react'
    import CDataTable from "../../CoreComponents/table/CDataTable";
    import { saveCreateMemberRegister } from "../../../services/ApiService";
    import { useHistory } from "react-router-dom";
    import "./Office.css"
import WingOffice from "./WingOffice";
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
        { key: "Reporting To", label: "Reporting To", _style: { width: "10%" } },
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
              <span className={"header-label"}>Type of Wing Office</span>
            </div>
         
                <CButton
                  id={"memberregisteraddbutton"}
                  className={"saveBtn"}
                  onClick={enableCreate}
                  style={{
                    marginLeft: "2.5%",
                    width: "150px",
                    cursor: "pointer",
                    marginTop: "50px",
                    marginBottom:"-50px",
                    height: "35px",
                  }}
                >
    
                  Add WING OFFICE
                      </CButton>
    
                <CRow style={{ padding: "4%", marginTop: "1.5%" }}>
                  <CDataTable
                    items={userData}
                    fields={fields}
                    columnFilter
                    tableFilter
                    tableLabel={"List of TYPE OF WING OFFICE"}
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
              </div>
            )}
    
            {hide && (
              <div>
                <WingOffice />
              </div>
            )}
          </CCard>
        </div>
      )
    }
    
    export default OfficeType
 