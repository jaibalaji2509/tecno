import { CButton, CCard, CCol, CInput, CLabel, CRow, CSelect } from "@coreui/react";
import React, { useState } from "react";
import Toaster from "src/views/notifications/toaster/Toaster";
import CDataTable from "../../CoreComponents/table/CDataTable";
import { saveCreateCorporation } from "../../../services/ApiService";
import { toast } from "react-toastify";

function ViewConstituency() {

    const userData = [

    ];
    const [hide, setHide] = useState(false)
    const [memberhide, setMemberHide] = useState(true)
    const fields = [
      { key: "SNo", label: "S.NO", _style: { width: "10%" },sorter: false,
      filter: false, },
      { key: "Area", label: "Area / Locality", _style: { width: "10%" } },
      { key: "ward", label: "Ward", _style: { width: "10%" } },
      { key: "streetcount", label: "Street Count", _style: { width: "10%" } },
      { key: "Malecount", label: "Male Count", _style: { width: "10%" } },
      { key: "Femalecount", label: "Female Count", _style: { width: "10%" } },
      { key: "transgendecount", label: "TransGender Count", _style: { width: "10%" } },
      { key: "total", label: "Total Count", _style: { width: "10%" } },

      {
        label: "Action",
        key: "show_details",
  
        _style: { width: "1%" },
        sorter: false,
        filter: false,
      },
    ];
  
    return (
        <div>
              <CCard className={"cardSave"}>
        <div className={"main-headerlabel"}>
          <span className={"header-label"}>Constituency</span>
        </div>


        <CButton
              id={"memberregisteraddbutton"}
              className={"saveBtn"}
            //   onClick={enableCreate}
              style={{
                marginLeft: "2.5%",
                width: "150px",
                cursor: "pointer",
                marginTop: "50px",
                marginBottom:"-50px"
              }}
            >

              View Constituency
                  </CButton>

              <CRow className={"row-alignment"} md="12" sm="12" lg="12" style={{ marginLeft: "-16px" , marginTop:"40px"}}>


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

              <CRow className={"row-alignment"}  md="12" sm="12" lg="12" style={{ marginLeft: "5px" }}>
               
              <CCol className={"column-align"} md="5">
                      <CLabel className={"label-name-1"}>
                        Parliamentary Constituency
                        <span className={"text-danger"}> *</span>
                      </CLabel>
                      <CSelect
                        placeholder="Select Parliamentary Constituency"
                        id={"ParliamentaryConstituency"}
                        type={"text"}
                       
                      // isDisabled={CountryCreate || CityCreate || AreaCreate}
                      />
                    </CCol>
                    <CCol className={"column-align"} md="5">
                      <CLabel className={"label-name-1"}>
                      Legislative Assembly Constituency 
                        <span className={"text-danger"}> *</span>
                      </CLabel>
                      <CSelect
                        placeholder="Select Legislative Assembly Constituency"
                        id={"LegislativeAssemblyConstitue"}
                        type={"text"}
                     style={{marginLeft:"5px"}}                      // isDisabled={CountryCreate || CityCreate || AreaCreate}
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



      </CCard>
        </div>
    )
}

export default ViewConstituency
