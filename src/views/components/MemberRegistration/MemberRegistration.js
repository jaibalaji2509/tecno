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
import "./MemberRegistration.css"
import AddMemberRegister from "./AddMemberRegister";
// import { colors } from "react-select/src/theme";

function MemberRegistration() {
  const history = useHistory();
  const userData = [

  ];
  const [hide, setHide] = useState(false)
  const [memberhide, setMemberHide] = useState(true)
  const fields = [
    { key: "SNo", label: "S.NO", _style: { width: "10%" },sorter: false,
    filter: false, },
    { key: "Name of Member", label: "Name of Member", _style: { width: "10%" } },
    { key: "State", label: "State", _style: { width: "10%" } },
    { key: "District", label: "District", _style: { width: "10%" } },
    { key: "Area", label: "Area / Locality", _style: { width: "10%" } },
    { key: "Street", label: "Street", _style: { width: "10%" } },
    {
      label: "Action",
      key: "show_details",

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

            <CButton
              id={"memberregisteraddbutton"}
              className={"saveBtn"}
              onClick={enableCreate}
              style={{
                marginLeft: "2.5%%",
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
          </div>
        )}

        {hide && (
          <div>
            <AddMemberRegister />
          </div>
        )}
      </CCard>
    </div>
  )
}

export default MemberRegistration
