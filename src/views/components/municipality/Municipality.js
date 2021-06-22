import {
  CButton,
  CCard,
  CCol,
  CInput,
  CLabel,
  CRow,
  
} from "@coreui/react";
import React, { useState } from "react";
import Select  from "react-select";
import CDataTable from "../../CoreComponents/table/CDataTable";
import { saveCreateCorporation } from "../../../services/ApiService";
import { toast } from "react-toastify";
const Municipality = () => {
  const [locations, setLocations] = useState({
    state: "",
    district: "",
    city: "",
    ward: "",
    area: "",
    street: "",
    pincode: "",
  });
  const [municipalList, setMunicipalList] = useState(true);
  const [MunicipalCreate, setmunicipalCreate] = useState(false);
  const [municipalListadd, setMunicipalListadd] = useState(true);
  const [MunicipalCreateadd, setmunicipalCreateadd] = useState(false);
  const [municipalCorporation, ] = useState({});
  const [municipalName, ] = useState("");

  const [locationHide, setLocationHide] = useState({
    corporation: true,
    municipalLocation: false,
    districtPanchayat: false,
    townPanchayat: false,
    villagePanchayat: false,
    cityLocation: false,
  });
  const userData = [
    {
      SNo: "1",
      Street: "Rangaswamykulam Street",
      Ward:"0098",
      EnteredBy:"sathishKumar",
      EnteredOn:"11/06/2021"
    },
    {
      SNo: "2",
      Street: "Kamarajar Street",
      Ward:"0098",
      EnteredBy:"sathishKumar",
      EnteredOn:"11/06/2021"
    },
    {
      SNo: "3",
      Street: " Stpachayapas College sreet",
      Ward:"0098",
      EnteredBy:"sathishKumar",
      EnteredOn:"11/06/2021"
    },
  ];
  const fields = [
    // {
    //   key: "show_details1",
    //   label: "Select",
    //   _style: { width: "3%" },
     
    //   sorter: false,
    //   filter: false,
     
    // },
    { key: "SNo", label: "S.NO", _style: { width: "5%" },    sorter: false,
    filter: false, },
   
    { key: "Street", label: "Street Name", _style: { width: "10%" } },
    { key: "Ward", label: "Ward Name", _style: { width: "10%" } },
    { key: "EnteredBy", label: "Entered By", _style: { width: "10%" } },
    { key: "EnteredOn", label: "Entered On", _style: { width: "10%" } },
   
    { key: "show_details", label: "Action", _style: { width: "10%" },    sorter: false,
    filter: false, },
  ];
  const [passing, setPassing] = useState("");
  const [error, ] = useState("");
  const saveCorporation = async () => {
    setLocationHide({
      ...locationHide,
      municipalLocation: true,
      corporation: false,
    });

    if (passing === "") {
      let body = {
        state: locations.state,
        district: locations.district,
        city: locations.city,
        area: locations.area,
        ward: locations.ward,
        street: locations.street,
      };
      console.log(body);
      try {
        const response = await saveCreateCorporation(JSON.stringify(body));
        console.log(body, "createfirst");
        if (response) {
          toast.success(response);
        }
      } catch (error) {
        toast.error(error);
      }
    }
  };
  const changeHandler = (e) => {
    setLocations({ ...locations, [e.target.name]: e.target.value });
  };
  const enableCreate = async () => {
    await setMunicipalList(false);
    await setmunicipalCreate(true);
  };

  const enableCreateadd = async () => {
    await setMunicipalListadd(false);
    await setmunicipalCreateadd(true);
  };

  const editState = async () => {
    await setMunicipalList(false);
    await setmunicipalCreate(true);
  };
  
  const editStateadd = async () => {
    await setMunicipalListadd(false);
    await setmunicipalCreateadd(true);
  };
  const CancelState = async () => {
    setPassing("");
    await setMunicipalList(true);
    await setmunicipalCreate(false);
  };
  const[hideMappingMunicipality, setHideMappingMunicipality] =useState(true)
  const[hideMunicipality, setMunicipality] =useState(false)
  const changeMunicipality = ()=>{
    setHideMappingMunicipality(false)
    setMunicipality(true)
  }
  const cancelmunici = ()=>{
    setHideMappingMunicipality(true)
    setMunicipality(false)
  }

  const CancelStateadd = async () => {
    setPassing("");
    await setMunicipalListadd(true);
    await setmunicipalCreateadd(false);
  };
  const selectState = [{ value: "TamilNadu", label: "TamilNadu" }];
  const selectDistrict = [{ value: "Kacnhipuram", label: "Kacnhipuram" }];
  const selectMunicipalcorporation = [
    { value: "Wallajabhad", label: "Wallajabhad" },
    { value: "NazharathPet", label: "NazharathPet" },
  ];
  const selectArea = [
    { value: "Kavanthandalam", label: "Kavanthandalam" },
    { value: "Thammanur ", label: "Thammanur " },
  ];
  const selectWard = [{ value: "0097", label: "0097" },{ value: "0098", label: "0098" }];
  return (
    <div>
        {hideMappingMunicipality && (
         <div>
         <CCard className={"cardSave"}>
           <div className={"main-headerlabel"}>
             <span className={"header-label"}>Municipality</span>
           </div>
           {locationHide.corporation && (
             <div>
               <div style={{ marginLeft: "-26px" }}>
                
                 <CRow style={{marginTop:"45px"}}>
                 <CCol >
                   <CCol
                     md="5"
                     style={{
                       marginLeft: "5px",
                       float: "right",
                       marginTop:"-20px"
                     }}
                   >
        
                     <CButton
                       style={{
                         float: "right",
                         marginRight: "1100px",
                       }}
                       id={"saveAbbreviationConfigureCode"}
                       className={"saveBtn"}
                       onClick={changeMunicipality}
                     >
                      Add Municipality 
                     </CButton>{" "}
                   </CCol>
                 </CCol>
               </CRow>
                 <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                
                
                <CCol className={"column-align"} md="3">
                  <CLabel className={"label-name-1"}>
                  State
                    <span className={"text-danger"}>*</span>
                  </CLabel>
                  <Select
                  
                    id={"municipalstatename"}
                    name={"state"}
                    placeholder={"Select State"}
                   options={selectState}
                  />
                </CCol>
                <CCol className={"column-align"} md="3">
                     <CLabel className={"label-name-1"}>
                       District / City
                       <span className={"text-danger"}>*</span>
                     </CLabel>
                     <Select
                     
                       id={"municipaldistrict"}
                       name={"city"}
                       placeholder={" Corporation Name"}
                    
                       options={selectDistrict}
                     />
                   </CCol>
                
                   <CCol className={"column-align"} md="3">
                  <CLabel className={"label-name-1"}>
                  Municipality
                    <span className={"text-danger"}>*</span>
                  </CLabel>
                  <Select
                  
                    id={"municipaldistrict"}
                    name={"Municipality"}
                    placeholder={" Select Municipality"}
                  options={selectMunicipalcorporation}
                  />
                </CCol>
              </CRow>
                 
                 <CRow className={"row-alignment"} md="12" sm="12" lg="12">
            
                   <CCol className={"column-align"} md="3">
                  <CLabel className={"label-name-1"}>
                  Area
                    <span className={"text-danger"}>*</span>
                  </CLabel>
                  <Select
                 
                    id={"municipaldistrict"}
                    name={"Area"}
                    placeholder={"Select Area"}
                  options={selectArea}
                  />
                </CCol>
                   <CCol className={"column-align"} md="3">
                     <CLabel className={"label-name-1"}>
                     Ward
                       <span className={"text-danger"}>*</span>
                     </CLabel>
                     <Select
                       
                       id={"municipalstatename"}
                       name={"Ward"}
                       placeholder={"Select Ward"}
                      options={selectWard}
                     />
                   </CCol>
                 </CRow>
                
                
               </div>
              
               <CRow style={{ padding: "4%", marginTop: "-1.5%" ,marginLeft:"-40px"}}>
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
                   checked
                   pagination
                   scopedSlots={{
                     show_details: (item, index) => {
                       return (
                         <td className="py-2">
                           <CRow>
                             <CCol style={{ fontSize: "1.15rem" }} md="12">
                             <i
                                  id={"locationLibraryDelete"}
                                  style={{
                                    marginLeft: "5px",
                                    color: "blue",
                                    cursor: "pointer",
                                  }}
                                  className="fa fa-edit"
                                ></i>

                                <i
                                  id={"locationLibraryDelete"}
                                  style={{
                                    marginLeft: "5px",
                                    marginLeft: "10px",
                                    color: "red",
                                    cursor: "pointer",
                                  }}
                                  className="fa fa-trash"
                                ></i>
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
                            <CInput type="checkbox" style={{width:"20px"}}/>

                              
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
           )}
   
         </CCard>
       </div>
      )}

      {hideMunicipality && (
        <div>
           <CCard className={"cardSave"}>
        <div className={"main-headerlabel"}>
          <span className={"header-label"}> Adding Municipality</span>
        </div>
        {locationHide.corporation && (
          <div>
            <div style={{ marginLeft: "-26px" }}>
             
              <CRow className={"row-alignment"} style={{ marginLeft: "5px" }}>
                {municipalList && (
                  <React.Fragment>
                    <CCol className={"column-align"} md={4} lg={4}>
                      <CLabel className={"label-name-1"}>
                        Municipality
                        <span className={"text-danger"}> *</span>
                      </CLabel>
                      <Select
                        placeholder="Select Municipality"
                        id={"municipalcorporation"}
                        type={"text"}
                       options={selectMunicipalcorporation}
                      />
                    </CCol>
                    <CCol className={"column-align"} md={1} lg={1}>
                      <CButton
                        shape={"pill"}
                        id={"addmunicipalcorporation"}
                        style={{ marginTop: "30px" }}
                        className={"saveBtn"}
                        onClick={enableCreate}
                      >
                        ADD
                      </CButton>
                    </CCol>

                    {municipalName.edit === true ? (
                      <React.Fragment>
                        <CCol md={3} lg={3}>
                          <CButton
                            style={{
                              marginTop: "30px",
                            }}
                            id={"locationLibraryStateEdit"}
                            className={"btn btn-success"}
                            onClick={editState}
                          >
                            EDIT
                          </CButton>
                        </CCol>
                      </React.Fragment>
                    ) : null}
                  </React.Fragment>
                )}
                {MunicipalCreate && (
                  <React.Fragment>
                    <CRow className={"row-alignment"} style={{marginLeft:"45px", marginTop:"20px"}} sm={12} md={12} lg={12}>
                      <CCol md="3">
                        <CLabel className={"label-name-1"}>
                          Municipality Name
                          <span className={"text-danger"}> *</span>
                        </CLabel>

                        <CInput
                          id={"MunicipalName"}
                          name={"municipalname"}
                          placeholder="Enter Municipality Name"
                          maxlength="60"
                          size="60"
                        />
                      </CCol>

                      <CCol md="3">
                        <CLabel className={"label-name-1"}>
                          Abbreviation
                          <span className={"text-danger"}> *</span>
                        </CLabel>
                        <CInput
                          id={"municipalabrreviation"}
                          name={"abbreviation"}
                          placeholder="Enter Abbreviation"
                          maxlength="5"
                          size="5"
                        />
                      </CCol>
                      <CCol md="3">
                        <CLabel className={"label-name-1"}>
                          Code
                          <span className={"text-danger"}> *</span>
                        </CLabel>
                        <CInput
                          id={"municipalcode"}
                          name={"code"}
                            placeholder="Enter Code"
                          maxlength="5"
                          size="5"
                        />
                      </CCol>
                      <CCol md="3">
                        <CButton
                          shape={"pill"}
                          id={"municipalsave"}
                          style={{ marginTop: "30px" }}
                          className={"saveBtn"}
                        >
                          {passing !== "" ? "UPDATE" : "SAVE"}
                        </CButton>
                        <CButton
                          shape={"pill"}
                          id={"municipalcancel"}
                          style={{ marginTop: "30px", marginLeft: "20px" }}
                          className={"cancelBtn"}
                          onClick={CancelState}
                        >
                          CANCEL
                        </CButton>
                        {error !== "" ? <p>{error}</p> : null}
                      </CCol>
                    </CRow>
                  </React.Fragment>
                )}
              </CRow>

              <CRow className={"row-alignment"} style={{ marginLeft: "5px" }}>
                {municipalListadd && (
                  <React.Fragment>
                    <CCol className={"column-align"} md={4} lg={4}>
                      <CLabel className={"label-name-1"}>
                        Ward Number
                        <span className={"text-danger"}> *</span>
                      </CLabel>
                      <Select
                        placeholder="Select Ward Number"
                        id={"municipalcorporation"}
                        type={"text"}
                        options={selectWard}
                      />
                    </CCol>
                    <CCol className={"column-align"} md={1} lg={1}>
                      <CButton
                        shape={"pill"}
                        id={"addmunicipalcorporation"}
                        style={{ marginTop: "30px" }}
                        className={"saveBtn"}
                        onClick={enableCreateadd}
                      >
                        ADD
                      </CButton>
                    </CCol>

                    {municipalName.edit === true ? (
                      <React.Fragment>
                        <CCol md={3} lg={3}>
                          <CButton
                            style={{
                              marginTop: "30px",
                            }}
                            id={"locationLibraryStateEdit"}
                            className={"btn btn-success"}
                            onClick={editStateadd}
                          >
                            EDIT
                          </CButton>
                        </CCol>
                      </React.Fragment>
                    ) : null}
                  </React.Fragment>
                )}
                {MunicipalCreateadd && (
                  <React.Fragment>
                    <CRow className={"row-alignment"} style={{marginLeft:"45px", marginTop:"20px"}} sm={12} md={12} lg={12}>
                      <CCol md="3">
                        <CLabel className={"label-name-1"}>
                          Ward Number
                          <span className={"text-danger"}> *</span>
                        </CLabel>

                        <CInput
                          id={"wardname"}
                          name={"municipalname"}
                          placeholder="State Name"
                          maxlength="60"
                          size="60"
                        />
                      </CCol>

                      <CCol md="3">
                        <CLabel className={"label-name-1"}>
                          Abbreviation
                          <span className={"text-danger"}> *</span>
                        </CLabel>
                        <CInput
                          id={"wardabbreviation"}
                          name={"abbreviation"}
                          placeholder="Enter Abbreviation"
                          maxlength="5"
                          size="5"
                        />
                      </CCol>
                      <CCol md="3">
                        <CLabel className={"label-name-1"}>
                          Code
                          <span className={"text-danger"}> *</span>
                        </CLabel>
                        <CInput
                          id={"wardcode"}
                          name={"wardcode"}
                          placeholder="Enter Code"
                          maxlength="5"
                          size="5"
                        />
                      </CCol>
                      <CCol md="3">
                        <CButton
                          shape={"pill"}
                          id={"wardsave"}
                          style={{ marginTop: "30px" }}
                          className={"saveBtn"}
                        >
                          {passing !== "" ? "UPDATE" : "SAVE"}
                        </CButton>
                        <CButton
                          shape={"pill"}
                          id={"wardcancel"}
                          style={{ marginTop: "30px", marginLeft: "20px" }}
                          className={"cancelBtn"}
                          onClick={CancelStateadd}
                        >
                          CANCEL
                        </CButton>
                        {error !== "" ? <p>{error}</p> : null}
                      </CCol>
                    </CRow>
                  </React.Fragment>
                )}
              </CRow>
              <CCol>
                <CLabel
                  style={{
                    fontSize: "20PX",
                    fontFamily: "Open Sans",
                    fontWeight: "700",
                    marginLeft: "55px",
                    marginTop: "20px",
                  }}
                >
                  Selection Area
                </CLabel>
              </CCol>
              <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                <CCol className={"column-align"} md="4">
                  <CLabel className={"label-name"}>
                    State
                    <span className={"text-danger"}>*</span>
                  </CLabel>
                  <Select
                    className={"input-align"}
                    id={"municipalstatename"}
                    name={"state"}
                    placeholder={"Select State"}
                   options={selectState}
                  />
                </CCol>
                <CCol className={"column-align"} md="4">
                  <CLabel className={"label-name"}>
                    District / City
                    <span className={"text-danger"}>*</span>
                  </CLabel>
                  <Select
                    className={"input-align"}
                    id={"municipaldistrict"}
                    name={"city"}
                    placeholder={" Corporation Name"}
                   options={selectDistrict}
                  />
                </CCol>
              </CRow>
              <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                <CCol className={"column-align"} md="4">
                  <CLabel className={"label-name"}>
                    Area
                    <span className={"text-danger"}>*</span>
                  </CLabel>
                  <Select
                    className={"input-align"}
                    id={"municipalarea"}
                    name={"area"}
                    placeholder={" Corporation Name"}
                    options={selectArea}
                  />
                </CCol>
              </CRow>
           
            </div>
            <CRow style={{ marginTop: "30px" }}>
              <CCol md="10">
                <CCol
                  md="5"
                  style={{
                    marginLeft: "255px",
                    position:"absolute",
                    float: "right",
                    marginTop: "-65px",
                  }}
                >
                  <CButton
                    style={{
                      float: "right",
                    }}
                    id={"cancelAbbreviationConfigureCode"}
                    className={"cancelBtn"}
                    onClick={cancelmunici}
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
                    onClick={saveCorporation}
                  >
                    Save
                  </CButton>{" "}
                </CCol>
              </CCol>
            </CRow>
            <CRow style={{ padding: "4%", marginTop: "-3.5%" }}>
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
                checked
                pagination
                scopedSlots={{
                  show_details1: (item, index) => {
                    return (
                      <td className="py-2">
                        <CRow>
                          <CInput
                            type={"checkbox"}
                            style={{
                              width: "15px",
                              height: "15px",
                              marginLeft: "30px",
                              marginBottom: "10px",
                            }}
                          />
                          <CCol style={{ fontSize: "1.15rem" }} md="12">
                          </CCol>
                        </CRow>
                      </td>
                    );
                  },
                  show_details: (item, index) => {
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
                                id={"locationLibraryEdit"}
                                className="fas fa-edit"
                              ></i>
                              <i
                                id={"locationLibraryDelete"}
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
                  details: (item, index) => {},
                }}
              />
            </CRow>
          </div>
        )}

    
       
      </CCard>
        </div>
      )}
     
    </div>
  );
};

export default Municipality;
