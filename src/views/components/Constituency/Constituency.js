import { CButton, CCard, CCol, CInput, CLabel, CRow } from "@coreui/react";
import React, { useState } from "react";
import CDataTable from "../../CoreComponents/table/CDataTable";
import Select from "react-select";


function Constituency() {
  const [error,] = useState("");
  const [municipalListadd, setMunicipalListadd] = useState(true);
  const [municipalList, setMunicipalList] = useState(true);
  const [MunicipalCreate, setmunicipalCreate] = useState(false);
  const [MunicipalCreateadd, setmunicipalCreateadd] = useState(false);
  const [ParliamentaryConstituency,] = useState({});
  const [municipalName,] = useState("");

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
  const CancelStateadd = async () => {

    setPassing("");
    await setMunicipalListadd(true);
    await setmunicipalCreateadd(false);
  };

  const [passing, setPassing] = useState("");
  const userData = [
    {
      SNo: "1",
      Street: "Golden Avenue",
      Area: "Minjur",
      Ward: "Ponneri",
      Total: "25081",
      Male: "62%",
      female: "35%",
      Transgender: "3%",
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
    { key: "Area", label: "Area / Village ", _style: { width: "10%" } },
    { key: "Ward", label: "Ward", _style: { width: "10%" } },
    { key: "Street", label: "Street Name", _style: { width: "10%" } },
    { key: "Total", label: "Total  ", _style: { width: "10%" } },
    { key: "Male", label: "Male ", _style: { width: "10%" } },
    { key: "female", label: "Female", _style: { width: "10%" } },
    { key: "Transgender", label: "Transgender", _style: { width: "10%" } },

    {
      key: "show_details1", label: "Action", _style: { width: "10%" }, sorter: false,
      filter: false,
    },
  ];
  const select = [
    { value: "tamil", label: "Tamilnadu" },
    { value: "chennai", label: "Chennai" },
    { value: "chennaicentral", label: "Sriperumbudur" },
    { value: "anna", label: "Ponneri" },
    { value: "Kollathur", label: "Minjur" },
    { value: "anna", label: "Golden Avenue" },
    { value: "anna", label: "Ponneri" },
  ]

  const userDataview = [
    {
      SNo: "1.",
      Street: "Belly Nagar",
      Parliamentary: "Chennai-Central",
      Legislative: "Anna Nagar",
      Village: "Egmore",
    },


  ];
  const [hide, setHide] = useState(false)
  const [memberhide, setMemberHide] = useState(true)
  const fieldsview = [
    {
      key: "SNo", label: "S.NO", _style: { width: "1%" }, sorter: false,
      filter: false,
    },
    { key: "Parliamentary", label: "Parliamentary Constituency", _style: { width: "10%" } },
    { key: "Legislative", label: "Legislative Assembly constituency", _style: { width: "10%" } },
    { key: "Village", label: "Village / Ward", _style: { width: "10%" } },
    { key: "Street", label: "Street", _style: { width: "10%" } },

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
  const cancelview = () => {
    setHide(false);
    setMemberHide(true)
  }

  return (
    <React.Fragment>
      {memberhide && (
        <div>
          <CCard className={"cardSave"}>
            <div className={"main-headerlabel"}>
              <span className={"header-label"}>Constituency</span>
            </div>
            <CRow className={"row-alignment"} md="12" sm="12" lg="12">
              <CButton
                style={{
                  float: "right",
                  marginRight: "764px",
                  marginTop: "30px",
                  width: "200px",
                  marginLeft: "75px",
                }}
                id={"addconstituency"}
                onClick={viewcreate}
                className={"saveBtn"}
              >
                Add Constituency
              </CButton>{" "}
              <CCol className={"column-align"} md="4">
                <CLabel className={"label-name"}>
                  State
                  <span className={"text-danger"}>*</span>
                </CLabel>
                <Select
                  styles={{ marginLeft: "50px" }}
                  type={"text"}
                  id={"constituency"}
                  className={"input-align"}
                  placeholder="Select the State"
                  options={select}
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
                  id={"constituencycity"}
                  className={"input-align"}
                  placeholder="Select the District / City "
                  options={select}
                />
              </CCol>
            </CRow>

            <CRow className={"row-alignment"} md="12" sm="12" lg="12">
              <CCol className={"column-align"} md="4">
                <CLabel className={"label-name"}>
                  Parliamentary Constituency
                  <span className={"text-danger"}> *</span>
                </CLabel>
                <Select
                  placeholder="Select Parliamentary Constituency"
                  id={"parliamentaryconstituency"}
                  type={"text"}
                  className={"input-align"}
                  style={{ marginLeft: "5px" }}
                  options={select}
                />
              </CCol>
              <CCol className={"column-align"} md="4">
                <CLabel className={"label-name"}>
                  Legislative Assembly Constituency
                  <span className={"text-danger"}> *</span>
                </CLabel>
                <Select
                  placeholder="Select Legislative Assembly Constituency"
                  id={"legislativeAssemblyconstitue"}
                  type={"text"}
                  className={"input-align"}
                  style={{ marginLeft: "5px" }}
                  options={select}
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
                    top: "120px",
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
                              style={{
                                marginRight: "5px",
                                color: "#3480e2",
                                cursor: "pointer",
                              }}
                              id={"constituencyediticon"}
                              className="fas fa-edit"
                            ></i>
                            <i
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
                                marginLeft: "5px",
                                color: "#3480e2",
                                cursor: "pointer",
                              }}
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
                  <CRow className={"row-alignment"} md="12" sm="12" lg="12" style={{ marginLeft: "-6px" }}>
                    <CCol className={"column-align"} md="4">
                      <CLabel className={"label-name"}>
                        State
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <Select
                        styles={{ marginLeft: "50px" }}
                        type={"text"}
                        id={"constituency"}
                        options={select}
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
                        id={"constituencycity"}
                        className={"input-align"}
                        options={select}
                        placeholder="Select the District / City "
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
                          <Select
                            placeholder="Select Parliamentary Constituency"
                            id={"parliamentaryconstituency"}
                            type={"text"}
                            options={select}
                          />
                        </CCol>
                        <CCol className={"column-align"} md={1} lg={1}>
                          <CButton
                            shape={"pill"}
                            id={"addparliamentaryconstituency"}
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
                        <CRow className={"row-alignment"} style={{ marginLeft: "45px", marginTop: "20px" }} sm={12} md={12} lg={12}>
                          <CCol md="3">
                            <CLabel className={"label-name-1"}>
                              Parliamentary
                              <span className={"text-danger"}> *</span>
                            </CLabel>

                            <CInput
                              id={"parliamentarydconstituency"}
                              name={"Parliamentary Constituency"}
                              placeholder="Enter Parliamentary Constituency"
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
                              id={"parliamentaryconstituencyabrreviation"}
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
                              id={"parliamentaryconstituencycode"}
                              name={"code"}
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
                          <Select
                            placeholder="Select the Legislative Assembly"
                            id={"legislative"}
                            type={"text"}
                            options={select}
                          />
                        </CCol>
                        <CCol className={"column-align"} md={1} lg={1}>
                          <CButton
                            shape={"pill"}
                            id={"addlegislative"}
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
                                id={"legislativeedit"}
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
                        <CRow className={"row-alignment"} style={{ marginLeft: "45px", marginTop: "20px" }} sm={12} md={12} lg={12}>
                          <CCol md="3">
                            <CLabel className={"label-name-1"}>
                              Legislative Assembly
                              <span className={"text-danger"}> *</span>
                            </CLabel>
                            <CInput
                              id={"legislative"}
                              name={"Legislative"}
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
                              id={"legislativeabbreviation"}
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
                              id={"legislativecode"}
                              name={"Legislativecode"}
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
                        Select Street
                      </CLabel>
                    </CCol>
                  </CRow>

                  <CRow className={"row-alignment"} md="12" sm="12" lg="12" style={{ marginLeft: "-16px" }}>
                    <CCol className={"column-align"} md="4">
                      <CLabel className={"label-name"}>
                        Area / Village
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <Select
                        type={"text"}
                        id={"constituencyarea"}
                        className={"input-align"}
                        placeholder="Select the Area / Village"
                        options={select}
                      />
                    </CCol>

                    <CCol className={"column-align"} md="4">
                      <CLabel className={"label-name"}>
                        Ward Name
                        <span className={"text-danger"}> *</span>
                      </CLabel>
                      <Select
                        type={"text"}
                        id={"constituencyward"}
                        className={"input-align"}
                        placeholder="Select the Ward"
                        options={select}

                      />
                    </CCol>
                  </CRow>
                  <CRow className={"row-alignment"} md="12" sm="12" lg="12" style={{ marginLeft: "-16px" }}>
                    <CCol className={"column-align"} md="4">
                      <CLabel className={"label-name"}>
                        Street Name
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <Select
                        type={"text"}
                        id={"constituencystreet"}
                        className={"input-align"}
                        placeholder="Select the Street "
                        options={select}
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
                          onClick={cancelview}
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
                                    id={"constituencyediticon"}
                                    className="fas fa-edit"
                                  ></i>
                                  <i
                                    id={"constituencydelete"}
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
              </CCol>
            </CRow>
          </CCard>
        </div>
      )}
    </React.Fragment>
  )
}
export default Constituency
