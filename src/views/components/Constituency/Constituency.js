import { CButton, CCard, CCol, CInput, CLabel, CRow, CSelect } from "@coreui/react";
import React, { useState } from "react";
import Toaster from "src/views/notifications/toaster/Toaster";
import CDataTable from "../../CoreComponents/table/CDataTable";
import { saveCreateCorporation } from "../../../services/ApiService";
import { toast } from "react-toastify";

function Constituency() {

    const [municipalList, setMunicipalList] = useState(true);
    const [MunicipalCreate, setmunicipalCreate] = useState(false);
    const[municipalName, setMuniicipalName] =useState("")

    const enableCreate = async () => {
        await setMunicipalList(false);
        await setmunicipalCreate(true);
      };
    
      const editState = async () => {
        await setMunicipalList(false);
        await setmunicipalCreate(true);
        // formik.values.StateName = stateName.stateName;
        // formik.values.Abbreviation2 = stateName.abbreviation;
        // formik.values.Code2 = stateName.code;
        // setPassing(stateName._id);
        // getState();
        // getAllAreas();
      };
      const CancelState = async () => {
       
        setPassing("");
        await setMunicipalList(true);
        await setmunicipalCreate(false);
      };
      const [passing, setPassing] = useState("");
      const userData = [
        {
          SNo: "1",
        //   State: "TamilNadu",
        //   District: "chennai",
        //   Area: "TNagar",
          Street: "Pondy Bazar",
        },
      ];
      const fields = [
        {
            key: "show_details",
            label: "Select",
            _style: { width: "3%" },
            name: <div>Email <input type={"checkbox"} onClick={""}/></div>,
            sorter: false,
            filter: false,
          },
        { key: "SNo", label: "S.NO", _style: { width: "10%" } },
        // { key: "State", label: "State", _style: { width: "10%" } },
        // { key: "District", label: "District", _style: { width: "10%" } },
        // { key: "Area", label: "Ward", _style: { width: "10%" } },
        { key: "Street", label: "Name of the Street", _style: { width: "10%" } },
      
        // { key: "male", label: "Male", _style: { width: "10%" } },
        // { key: "female", label: "Female", _style: { width: "10%" } },
        { key: "Action", label: "Action", _style: { width: "10%" } },
      ];
    
    return (
        <div>
            <CCard className={"cardSave"}>
        <div className={"main-headerlabel"}>
          <span className={"header-label"}>Constituency</span>
        </div>
        <CRow className={"row-alignment"} style={{ marginLeft: "-76px" }}>
          <CCol className={"column-align"} md="12" lg="12" sm="12">
            <p className="mandatory_txt" style={{ marginLeft: "50px" }}>
              Mandatory fields are marked with an asterisk (*)
                </p>

           <div style={{ marginLeft: "-20px" }}>
              <div className={"row-headerlabel"}>
                <span  style={{marginLeft:"70px"}} className={"header-label"}>
                  {" "}
                  Adding CONSTITUENCY{" "}
                </span>
              </div>
              <CRow className={"row-alignment"} style={{marginLeft:"-16px"}}>
              {municipalList && (
                      <React.Fragment>
                      <CCol className={"column-align"} md={4} lg={4}>
                        <CLabel  className={"label-name"}>
                        Parliamentary Constituency
                          <span className={"text-danger"}> *</span>
                        </CLabel>
                        <CSelect
                          placeholder="CSelect Parliamentary Constituency"
                          id={"CONSTITUENCYParliamentary"}
                          type={"text"}
                          className={"input-align"}
                        />
                      </CCol>
                      <CCol className={"column-align"} md={1} lg={1}>
                        <CButton
                          shape={"pill"}
                          id={"addconstituency"}
                          style={{ marginTop: "30px" }}
                          className={"saveBtn"}
                          
                          // disabled={CountryCreate || CityCreate || AreaCreate}
                        >
                          ADD
                        </CButton>
                      </CCol>
                      {/* {countryName.edit && <React.Fragment></React.Fragment>} */}

                      {municipalName.edit === true ? (
                        <React.Fragment>
                          <CCol md={3} lg={3}>
                            <CButton
                              style={{
                                marginTop: "60px",
                              }}
                              id={"editconstituency"}
                              className={"btn btn-success"}
                             
                              // disabled={
                              //   CountryCreate || CityCreate || AreaCreate
                              // }
                            >
                              EDIT
                            </CButton>
                          </CCol>
                        </React.Fragment>
                      ) : null}
                    </React.Fragment>
                     )}
           </CRow>
        
           <CRow className={"row-alignment"} style={{marginLeft:"-16px"}}>
           
                                 <React.Fragment>
                      <CCol className={"column-align"} md={4} lg={4}>
                        <CLabel  className={"label-name"}>
                      Legislative Assembly Constituency
                          <span className={"text-danger"}> *</span>
                        </CLabel>
                        <CSelect
                          placeholder="CSelect  Legislative Assembly Constituency"
                          id={"CONSTITUENCYLegislativeAssembly"}
                          type={"text"}
                          className={"input-align"}
                        />
                      </CCol>
                      <CCol className={"column-align"} md={1} lg={1}>
                        <CButton
                          shape={"pill"}
                          id={"add2constituency"}
                          style={{ marginTop: "30px" }}
                          className={"saveBtn"}
                          
                          // disabled={CountryCreate || CityCreate || AreaCreate}
                        >
                          ADD
                        </CButton>
                      </CCol>
                      {/* {countryName.edit && <React.Fragment></React.Fragment>} */}

            
                        
                  
                    </React.Fragment>
            
           </CRow>
           <CRow>
        <CCol>
  <CLabel style={{fontSize:"20PX", fontFamily:"Open Sans", fontWeight:"700", marginLeft:"71px", marginTop:"20px"}}>
    Selection Area
  </CLabel>
</CCol>
</CRow>
<CRow className={"row-alignment"} md="12" sm="12" lg="12"  style={{marginLeft:"-16px"}}>
             

             <CCol className={"column-align"} md="4">
               <CLabel className={"label-name"}>
               State
                 <span className={"text-danger"}>*</span>
               </CLabel>
               <CSelect
                  styles={{marginLeft:"50px"}}
                    type={"text"}
                    id={"CONSTITUENCYstate"}
                    className={"input-align"}
                    placeholder="CSelect the State"
                  />
             </CCol>
             <CCol className={"column-align"} md="4">
               <CLabel className={"label-name"}>
                 District / City
                 <span className={"text-danger"}>*</span>
               </CLabel>
               <CSelect
                  styles={{marginLeft:"50px"}}
                    type={"text"}
                    id={"CONSTITUENCYcity"}
                    className={"input-align"}
                    placeholder="CSelect the District / City "
                  />
             </CCol>
             
           </CRow>

           <CRow className={"row-alignment"} md="12" sm="12" lg="12" style={{marginLeft:"-16px"}}>
           <CCol className={"column-align"} md="4">
                                 <CLabel className={"label-name"}>
                  Area / Village
                    <span className={"text-danger"}>*</span>
                  </CLabel>
                  <CSelect
                    type={"text"}
                    id={"constituencyarea"}
                    className={"input-align"}
                    placeholder="CSelect the Area / Village"
                  />
                </CCol>
              
                <CCol className={"column-align"} md="4">
                  <CLabel className={"label-name"}>
                  Ward Name
                          <span className={"text-danger"}> *</span>
                  </CLabel>
                  <CSelect
                    type={"text"}
                    id={"constituencyward"}
                    className={"input-align"}
                    placeholder="CSelect the Ward"
                   
                  />
               </CCol>
               </CRow>
               <CRow className={"row-alignment"} md="12" sm="12" lg="12"  style={{marginLeft:"-16px"}}>
               <CCol className={"column-align"} md="4">
                  <CLabel className={"label-name"}>
                  Street Name
                    <span className={"text-danger"}>*</span>
                  </CLabel>
                  <CSelect
                    type={"text"}
                    id={"constituencystreet"}
                    className={"input-align"}
                    placeholder="CSelect the Street "
                  
                  />
                </CCol>
</CRow>
<CRow>
              <CCol md="10">
                <CCol
                  md="5"
                  style={{
                    marginTop: "-35px",
                    marginLeft:"285px"
                  }}
                >
                  <CButton
                    style={{
                      float: "right",
                    }}
                    id={"cancelAbbreviationConfigureCode"}
                    className={"cancelBtn"}
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
            <CRow style={{ padding: "6%", marginTop: "-3.5%" }}>
              <CDataTable
                items={userData}
                fields={fields}
                columnFilter
                tableFilter
                tableLabel={"List of Streets"}
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
                  details: (item, index) => {},
                }}
              />
            </CRow>

           </div>
</CCol>
</CRow>
        </CCard>
        </div>
    )
}

export default Constituency
