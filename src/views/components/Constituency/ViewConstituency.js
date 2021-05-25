import { CButton, CCard, CCol, CInput, CLabel, CRow, CSelect } from "@coreui/react";
import React, { useState } from "react";
import Toaster from "src/views/notifications/toaster/Toaster";
import CDataTable from "../../CoreComponents/table/CDataTable";
import { saveCreateCorporation } from "../../../services/ApiService";
import { toast } from "react-toastify";

function ViewConstituency() {
  const [error, setError] = useState("");
  const [municipalListadd, setMunicipalListadd] = useState(true);
  const [municipalList, setMunicipalList] = useState(true);
  const [MunicipalCreate, setmunicipalCreate] = useState(false);
  const [MunicipalCreateadd, setmunicipalCreateadd] = useState(false);
  const [ParliamentaryConstituency, setParliamentaryConstituency] = useState({});
  const [municipalName, setMuniicipalName] = useState("");

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
    // formik.values.StateName = stateName.stateName;
    // formik.values.Abbreviation2 = stateName.abbreviation;
    // formik.values.Code2 = stateName.code;
    // setPassing(stateName._id);
    // getState();
    // getAllAreas();
  };
  const editStateadd = async () => {
    await setMunicipalListadd(false);
    await setmunicipalCreateadd(true);
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
  const CancelStateadd = async () => {

    setPassing("");
    await setMunicipalListadd(true);
    await setmunicipalCreateadd(false);
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
      name: <div>Email <input type={"checkbox"} onClick={""} /></div>,
      sorter: false,
      filter: false,
    },
    {
      key: "SNo", label: "S.NO", _style: { width: "10%" }, sorter: false,
      filter: false,
    },
    { key: "State", label: "State", _style: { width: "10%" } },
    { key: "District", label: "District", _style: { width: "10%" } },
    { key: "Parliamentary", label: "Parliamentary Constituency ", _style: { width: "10%" } },
    { key: "Legislative", label: "Legislative Assembly Constituency", _style: { width: "10%" } },

    { key: "Area", label: "Area ", _style: { width: "10%" } },
    // { key: "female", label: "Female", _style: { width: "10%" } },
    {
      key: "show_details1", label: "Action", _style: { width: "10%" }, sorter: false,
      filter: false,
    },
  ];


    const userDataview = [
      {
        SNo: "1.",
        //   State: "TamilNadu",
        //   District: "chennai",
        //   Area: "TNagar",
        Street: "Pondy Bazar",
      },
        

    ];
    const [hide, setHide] = useState(false)
    const [memberhide, setMemberHide] = useState(true)
    const fieldsview = [
      { key: "SNo", label: "S.NO", _style: { width: "1%" },sorter: false,
      filter: false, },
      { key: "Area", label: "Area / Locality", _style: { width: "10%" } },
      { key: "ward", label: "Ward", _style: { width: "10%" } },
      { key: "streetcount", label: "Street Name", _style: { width: "10%" } },
      { key: "total", label: "Total Count", _style: { width: "10%" } },
      { key: "Malecount", label: "Male Count", _style: { width: "10%" } },
      { key: "Femalecount", label: "Female Count", _style: { width: "10%" } },
      { key: "transgendecount", label: "TransGender Count", _style: { width: "10%" } },

      {
        label: "Action",
        key: "show_detailsview",
  
        _style: { width: "10%" },
        sorter: false,
        filter: false,
      },
    ];
    
  const viewcreate = () => {
    setHide(true);
    setMemberHide(false)
  }
  
    return (
        <div>
               {memberhide && (        
          <div>
              <CCard className={"cardSave"}>
        <div className={"main-headerlabel"}>
          <span className={"header-label"}>Constituency</span>
        </div>


        {/* <CButton
              id={"memberregisteraddbutton"}
              className={"saveBtn"}
              onClick={viewcreate}
              style={{
                marginLeft: "2.5%",
                width: "150px",
                cursor: "pointer",
                marginTop: "50px",
                marginBottom:"-50px"
              }}
            > */}
{/* 
              Add Constituency
                  </CButton> */}

              <CRow className={"row-alignment"} md="12" sm="12" lg="12" style={{ marginLeft: "-16px" , marginTop:"40px"}}>


                <CCol className={"column-align"} md="5">
                  <CLabel className={"label-name"}>
                    State
                 <span className={"text-danger"}>*</span>
                  </CLabel>
                  <CSelect
                    styles={{ marginLeft: "50px" }}
                    type={"text"}
                    id={"constituency"}
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
                    id={"constituencycity"}
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
                        id={"parliamentaryconstituency"}
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
                        id={"legislativeAssemblyconstitue"}
                        type={"text"}
                     style={{marginLeft:"5px"}}                      // isDisabled={CountryCreate || CityCreate || AreaCreate}
                      />
                    </CCol>
                    </CRow>
                    <CRow style={{ padding: "4%", marginTop: "1.5%" }}>
              <CDataTable
                items={userDataview}
                fields={fieldsview}
                columnFilter
                tableFilter
                tableLabel={"List of Constituency"}
                itemsPerPageSelect
                itemsPerPage={5}
                hover
                sorter
                pagination
                scopedSlots={{
                  show_detailsview: (item, index) => {
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
                              id={"constituencyediticon"}
                              // onClick={() => EditCountry(item)}
                              className="fas fa-edit"
                            ></i>
                            <i
                              // onClick={() => deleteConfirm(item._id)}
                              id={"constituencydelete"}
                              style={{
                                marginLeft: "5px",
                                color: "#e85654",
                                cursor: "pointer",
                              }}
                              className="fa fa-trash"
                            ></i>
                            <i 
                             style={{
                              marginLeft: "5px",
                              color: "green",
                              cursor: "pointer",
                            }}
                            id={"removeicon"}
                            className="fas fa-eraser"></i>
                              <i
                           style={{
                            marginRight: "5px",
                            marginLeft:"5px",
                            color: "#3480e2",
                            cursor: "pointer",

                          }}
                          onClick={viewcreate}
                          id={"viewicon"}
                          className="fa fa-eye"
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
 {hide && (
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
                <span style={{ marginLeft: "70px" }} className={"header-label"}>
                  {" "}
                  Adding CONSTITUENCY{" "}
                </span>
              </div>
              <CRow className={"row-alignment"} md="12" sm="12" lg="12" style={{ marginLeft: "-16px" }}>


                <CCol className={"column-align"} md="4">
                  <CLabel className={"label-name"}>
                    State
                 <span className={"text-danger"}>*</span>
                  </CLabel>
                  <CSelect
                    styles={{ marginLeft: "50px" }}
                    type={"text"}
                    id={"constituency"}
                    className={"input-align"}
                    placeholder="Select the State"
                  />
                </CCol>
                <CCol className={"column-align"} md="4">
                  <CLabel className={"label-name"}>
                    District / City
                 <span className={"text-danger"}>*</span>
                  </CLabel>
                  <CSelect
                    styles={{ marginLeft: "50px" }}
                    type={"text"}
                    id={"constituencycity"}
                    className={"input-align"}
                    placeholder="CSelect the District / City "
                  />
                </CCol>
              </CRow>

              <CRow className={"row-alignment"} style={{ marginLeft: "5px" }}>
                {municipalList && (
                  <React.Fragment>
                    <CCol className={"column-align"} md={4} lg={4}>
                      <CLabel className={"label-name-1"}>
                        Parliamentary Constituency
                        <span className={"text-danger"}> *</span>
                      </CLabel>
                      <CSelect
                        placeholder="Select Municipal Corporation"
                        id={"parliamentaryconstituency"}
                        type={"text"}
                        value={ParliamentaryConstituency}
                      // isDisabled={CountryCreate || CityCreate || AreaCreate}
                      />
                    </CCol>
                    <CCol className={"column-align"} md={1} lg={1}>
                      <CButton
                        shape={"pill"}
                        id={"addparliamentaryconstituency"}
                        style={{ marginTop: "30px" }}
                        className={"saveBtn"}
                        onClick={enableCreate}
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
                              marginTop: "30px",
                            }}
                            id={"parliamentaryconstituencyedit"}
                            className={"btn btn-success"}
                            onClick={editState}
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
                {MunicipalCreate && (
                  <React.Fragment>
                    <CRow className={"column-align3"} sm={12} md={12} lg={12}>
                      <CCol md="3">
                        <CLabel className={"label-name-3"}>
                          Parliamentary
                          <span className={"text-danger"}> *</span>
                        </CLabel>

                        <CInput
                          // onKeyPress={(e) =>
                          //   FormValidation.value_Without_Number_Symbols(e)
                          // }
                          id={"parliamentarydconstituency"}
                          name={"Parliamentary Constituency"}
                          // value={states.statename}
                          // onChange={statechangeHandler}
                          placeholder="Enter Parliamentary Constituency"
                          maxlength="60"
                          size="60"
                        />
                      </CCol>

                      <CCol md="3">
                        <CLabel className={"label-name-3"}>
                          Abbreviation
                          <span className={"text-danger"}> *</span>
                        </CLabel>
                        <CInput
                          // onKeyPress={(e) =>
                          //   FormValidation.value_Without_Number_Without_Symbols_Without_Space(
                          //     e
                          //   )
                          // }
                          id={"parliamentaryconstituencyabrreviation"}
                          name={"abbreviation"}
                          // value={states.abbreviation}
                          // onChange={statechangeHandler}
                          placeholder="Enter Abbreviation"
                          maxlength="5"
                          size="5"
                        />
                      </CCol>
                      <CCol md="3">
                        <CLabel className={"label-name-3"}>
                          Code
                          <span className={"text-danger"}> *</span>
                        </CLabel>
                        <CInput
                          id={"parliamentaryconstituencycode"}
                          // onKeyPress={(e) =>
                          //   FormValidation.value_Without_Number_Without_Symbols_Without_Space(
                          //     e
                          //   )
                          // }
                          name={"code"}
                          // value={states.code}
                          // onChange={statechangeHandler}
                          // style={{ textTransform: "uppercase" }}
                          placeholder="Enter Code"
                          maxlength="5"
                          size="5"
                        />
                      </CCol>
                      <CCol md="3">
                        <CButton
                          shape={"pill"}
                          id={"parliamentaryconstituencysave"}
                          style={{ marginTop: "30px" }}
                          className={"saveBtn"}
                        // onClick={State}
                        >
                          {passing !== "" ? "UPDATE" : "SAVE"}
                        </CButton>
                        <CButton
                          shape={"pill"}
                          id={"parliamentaryconstituencylcancel"}
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
                        Legislative Assembly Constituency
                        <span className={"text-danger"}> *</span>
                      </CLabel>
                      <CSelect
                        placeholder="Select the State Name"
                        id={"legislative"}
                        type={"text"}

                      // isDisabled={CountryCreate || CityCreate || AreaCreate}
                      />
                    </CCol>
                    <CCol className={"column-align"} md={1} lg={1}>
                      <CButton
                        shape={"pill"}
                        id={"addlegislative"}
                        style={{ marginTop: "30px" }}
                        className={"saveBtn"}
                        onClick={enableCreateadd}
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
                              marginTop: "30px",
                            }}
                            id={"legislativeedit"}
                            className={"btn btn-success"}
                            onClick={editStateadd}
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
                {MunicipalCreateadd && (
                  <React.Fragment>
                    <CRow className={"column-align3"} sm={12} md={12} lg={12}>
                      <CCol md="3">
                        <CLabel className={"label-name-3"}>
                          Legislative Assembly
                          
                          <span className={"text-danger"}> *</span>
                        </CLabel>

                        <CInput
                          // onKeyPress={(e) =>
                          //   FormValidation.value_Without_Number_Symbols(e)
                          // }
                          id={"legislative"}
                          name={"Legislative"}
                          // value={states.statename}
                          // onChange={statechangeHandler}
                          placeholder="State Name"
                          maxlength="60"
                          size="60"
                        />
                      </CCol>

                      <CCol md="3">
                        <CLabel className={"label-name-3"}>
                          Abbreviation
                          <span className={"text-danger"}> *</span>
                        </CLabel>
                        <CInput
                          // onKeyPress={(e) =>
                          //   FormValidation.value_Without_Number_Without_Symbols_Without_Space(
                          //     e
                          //   )
                          // }
                          id={"legislativeabbreviation"}
                          name={"abbreviation"}
                          // value={states.abbreviation}
                          // onChange={statechangeHandler}
                          placeholder="Enter Abbreviation"
                          maxlength="5"
                          size="5"
                        />
                      </CCol>
                      <CCol md="3">
                        <CLabel className={"label-name-3"}>
                          Code
                          <span className={"text-danger"}> *</span>
                        </CLabel>
                        <CInput
                          id={"legislativecode"}
                          // onKeyPress={(e) =>
                          //   FormValidation.value_Without_Number_Without_Symbols_Without_Space(
                          //     e
                          //   )
                          // }
                          name={"Legislativecode"}
                          // value={states.code}
                          // onChange={statechangeHandler}
                          // style={{ textTransform: "uppercase" }}
                          placeholder="Enter Code"
                          maxlength="5"
                          size="5"
                        />
                      </CCol>
                      <CCol md="3">
                        <CButton
                          shape={"pill"}
                          id={"legislativesave"}
                          style={{ marginTop: "30px" }}
                          className={"saveBtn"}
                        // onClick={State}
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

              <CRow>
                <CCol>
                  <CLabel style={{ fontSize: "20PX", fontFamily: "Open Sans", fontWeight: "700", marginLeft: "71px", marginTop: "20px" }}>
                    Selection Area
  </CLabel>
                </CCol>
              </CRow>

              <CRow className={"row-alignment"} md="12" sm="12" lg="12" style={{ marginLeft: "-16px" }}>
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
              <CRow className={"row-alignment"} md="12" sm="12" lg="12" style={{ marginLeft: "-16px" }}>
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
                      marginLeft: "285px"
                    }}
                  >
                    <CButton
                      style={{
                        float: "right",
                      }}
                      id={"cancelconstituency"}
                      className={"cancelBtn"}
                    >
                      CANCEL
                  </CButton>
                    <CButton
                      style={{
                        float: "right",
                        marginRight: "15px",
                      }}
                      id={"saveconstituencyabbreviationconfigurecode"}
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
                                id={"constituencyediticon"}
                                // onClick={() => EditCountry(item)}
                                className="fas fa-edit"
                              ></i>
                              <i
                                // onClick={() => deleteConfirm(item._id)}
                                id={"constituencydelete"}
                                style={{
                                  marginLeft: "5px",
                                  color: "#e85654",
                                  cursor: "pointer",
                                }}
                                className="fa fa-trash"
                              ></i>
                              {/* <i 
                               style={{
                                marginLeft: "5px",
                                color: "green",
                                cursor: "pointer",
                              }}
                              id={"removeicon"}
                              className="fas fa-eraser"></i>
                                <i
                             style={{
                              marginRight: "5px",
                              marginLeft:"5px",
                              color: "#3480e2",
                              cursor: "pointer",

                            }}
                            id={"viewicon"}
                            className="fa fa-eye"
                            ></i> */}
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
          </CCol>
        </CRow>
      </CCard>
        </div>
            )}
                   </div>     
    )
}

export default ViewConstituency
