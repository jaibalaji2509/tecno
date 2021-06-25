import { CButton, CCard, CCol, CInput,CLink, CLabel, CRow } from "@coreui/react";
import React, { useState,useCounter } from "react";
import Select,{components} from "react-select";
import CDataTable from "../../CoreComponents/table/CDataTable";
import { saveCreateCorporation } from "../../../services/ApiService";
import { toast } from "react-toastify";
import { Dropdown, Menu } from "antd";
import {CSVLink, CSVDownload} from 'react-csv';
import ReactFileReader from 'react-file-reader';
import MultiSelect from "react-multi-select-component";
import "./VillagePanchayat.css"
const VillagePanchayat = () => {
  const [locations, setLocations] = useState({
    state: "",
    district: "",
    city: "",
    ward: "",
    area: "",
    street: "",
    pincode: "",
  });
  const [selected, setSelected] = useState([]);
  const [municipalList, setMunicipalList] = useState(true);
  const [MunicipalCreate, setmunicipalCreate] = useState(false);
  const [municipalCorporation] = useState({});
  const [sideBar1, setSideBar1] = useState(false);
  const [municipalName] = useState("");
  const [villageList, setvillageList] = useState(true);
  const [villageCreate, setVillageCreate] = useState(false);
  const [panchayatList, setPanchayatlist] = useState(true);
  const [panchayatCreate, setpanchayatCreate] = useState(false);
  const [wardList, setWardList] = useState(true);
  const [wardCreate, setWardCreate] = useState(false);
  const [locationHide, setLocationHide] = useState({
    corporation: true,
    municipalLocation: false,
    districtPanchayat: false,
    townPanchayat: false,
    villagePanchayat: false,
    cityLocation: false,
  });
  const [gridShow, setGridShow] = useState({
    view1: false,
    view2: false,
    view3: false,
    view4: false,
  });
  const select = [
    { value: "tamil", label: "Tamilnadu" },
    { value: "Chengalpattu", label: "Chengalpattu" },
    { value: "Chunampedu", label: "Chunampedu" },
    { value: "Vanniyallur", label: "Vanniyallur" },
    { value: "Agaem", label: "Agaram kuturoad" },
    { value: "porpanthel", label: "porpanthal" },
    { value: "5", label: "018" },
    { value: "5", label: "019" },
  ];
  const userData = [
    {
      SNo: "1.",
      Street: "Agaram kuturoad",
      Ward: "018",
      by: "Jai Balaji",
      on: "10/06/2021",
    },
    {
      SNo: "2.",
      Street: "Achari street",
      Ward: "019",
      by: "Jai Balaji",
      on: "10/06/2021",
    },
    {
      SNo: "3.",
      Street: "Achari street",
      Ward: "019",
      by: "Jai Balaji",
      on: "10/06/2021",
    },
    {
      SNo: "4.",
      Street: "Achari street",
      Ward: "019",
      by: "Jai Balaji",
      on: "10/06/2021",
    },
    {
      SNo: "5.",
      Street: "Achari street",
      Ward: "019",
      by: "Jai Balaji",
      on: "10/06/2021",
    },
  ];
  const fields = [
    { key: "SNo", label: "S.NO", _style: { width: "5%" } },
    { key: "Ward", label: "Ward Number", _style: { width: "10%" } },
    { key: "Street", label: "Street Name", _style: { width: "10%" } },
    { key: "by", label: "Entered By", _style: { width: "10%" } },
    { key: "on", label: "Entered On", _style: { width: "10%" } },

    { key: "show_details1", label: "Action", _style: { width: "10%" } },
  ];
  const fields1 = [
    {
      key: "show_details",
      label: "Select",
      _style: { width: "3%" },
      name: (
        <div>
          Email <input type={"checkbox"} onClick={""} />
        </div>
      ),
      sorter: false,
      filter: false,
    },
    { key: "SNo", label: "S.NO", _style: { width: "5%" } },

    { key: "Street", label: "Street Name", _style: { width: "10%" } },
  ];

  const [passing, setPassing] = useState("");
  const [error] = useState("");
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

  const addPanchayat = async () => {
    await setPanchayatlist(false);
    await setpanchayatCreate(true);
  };
  const addVillage = async () => {
    await setvillageList(false);
    await setVillageCreate(true);
  };
  const addWard = async () => {
    await setWardList(false);
    await setWardCreate(true);
  };
  const editState = async () => {
    await setMunicipalList(false);
    await setmunicipalCreate(true);
  };
  const CancelState = async () => {
    setPassing("");
    await setMunicipalList(true);
    await setmunicipalCreate(false);
  };
  const cancelVillage = async () => {
    setPassing("");
    await setvillageList(true);
    await setVillageCreate(false);
  };
  const cancelWard = async () => {
    setPassing("");
    await setWardList(true);
    await setWardCreate(false);
  };
  const cancelPanchayat = async () => {
    setPassing("");
    await setPanchayatlist(true);
    await setpanchayatCreate(false);
  };
  const [hideMappingVillage, setHideMappingVillage] = useState(true);
  const [hideVillagePanchayat, setHideVillagePanchayat] = useState(false);
  const changeVillagePanchayat = () => {
    setHideMappingVillage(false);
    setHideVillagePanchayat(true);
  };
  const cancelchange = () => {
    setHideMappingVillage(true);
    setHideVillagePanchayat(false);
  };
  const [state, setState] =useState([])
  const  onChangeFile = (event) => {
    
    //   var file = event.target.files[0];
    //   console.log(file);
    // setState(file); /// if you want to upload latter
  }
  const csvData =[
    ['firstname', 'lastname', 'email'] ,
    ['John', 'Doe' , 'john.doe@xyz.com'] ,
    ['Jane', 'Doe' , 'jane.doe@xyz.com']
  ];

  const handleFiles = files => {
    var reader = new FileReader();
    reader.onload = function(e) {
        // Use reader.result
        setState(reader.result);
      console.log(reader.result);
    }
    reader.readAsText(files[0]);
}
const menus = (details) => {
  return(
    <Menu>
    <Menu.Item>
      <a>Edit</a>
    </Menu.Item>
    <Menu.Item>
      <a>Delete</a>
    </Menu.Item>
  </Menu>
  )
}
const [menu, setMenu] = useState({
  style: "menu2",
  menuStatus: "open",
  style3: "menu2",
});
const SelectMenuButton = (props) => {
  return (
      <components.MenuList  {...props} >
          {props.children}
          <CRow md="12"  >
          <CCol md="6">     <CLink className={"saveBtn"} onClick={handleClick} style={{paddingLeft:"210px"}}>Add </CLink></CCol>
          <CCol md="6" > 
          <CLink className={"saveBtn"} onClick={handleClick} style={{marginLeft:"100px"}}>Bulk Upload </CLink> 
          </CCol>
          </CRow>
          
      </components.MenuList >
  ) }

  const handleClick = () => {
    
    switch (menu.menuStatus) {
      case "open":
        setMenu({
          menuStatus: "close",
          // style3: "menu2",
          style: "menu active1",
          
        });
      
        setTimeout(() => {
          setSideBar1(true);
        }, 1000);
        break;
      case "close":
        setMenu({
          menuStatus: "open",
          // style3: "menu2",
          style: "menu active2",
          
        });
        setTimeout(() => {
          setSideBar1(false);
        }, 1000);
        break;
    }
  };
  const [counter,setCount] = useState(0);
  const onChangeValue =()=>{
    setCount(counter+1)
  }
  const [inputList, setInputList] = useState([{ panchayatname: "", panchayatabbreviation: "",panchayatcode: "" }]);
  
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };
 
  const handleRemoveClick = (index)=>{
    const list =[...inputList];
    list.splice(index,1)
    setInputList(list);
  }
 
 
  // handle click event of the Add button
  const handleAddClick = (e) => {
    e.preventDefault()
    setInputList([...inputList, { panchayatname: "", panchayatabbreviation: "" ,panchayatcode:""}]);
  }
  const [manual, setManual] =useState(false)
  const menuToggle = (e) =>{
    e.stopPropagation();
    setManual({
      isOpen: !manual.isOpen
    });
  }
  return (
    <div className={menu.style3}>
       {sideBar1 && (
        <div className={menu.style}>
        
          <CRow className={""}>
            <CCol md="12" lg="12" sm="12">
              <div>
                <span
                  style={{
                    fontSize: "18px",
                    fontWeight: "700",
                    marginLeft: "20px",
                  }}
                >
                ADDING VILLAGE PANCHAYAT{" "}
                </span>
              </div>
            </CCol>
          </CRow>
   
         
     {inputList.map ((x,i) =>{
       return(
      
        <CRow
                                  className={"row-alignment"}
                                  style={{ marginLeft: "5px", marginTop: "20px" }}
                                  sm={12}
                                  md={12}
                                  lg={12}
                                >
                                  <CCol md="2">
                                    <CLabel className={"label-name-1"}>
                                      District panchayat
                                      <span className={"text-danger"}> *</span>
                                    </CLabel>
        
                                    <CInput
                                      id={"MunicipalName"}
                                      name={"municipalname"}
                                      placeholder="Enter District Panchayat Name"
                                      maxlength="60"
                                      size="60"
                                      value={x.panchayatname}
                                      onChange={e => handleInputChange(e, i)}
                                    />
                                  </CCol>
        
                                  <CCol md="2">
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
                                      value={x.panchayatabbreviation}
                                      onChange={e => handleInputChange(e, i)}
                                    />
                                  </CCol>
                                  <CCol md="2">
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
                                      value={x.panchayatcode}
                                      onChange={e => handleInputChange(e, i)}
                                    />
                                  </CCol>

<CRow>
<CCol md="3">
                                  {inputList.length - 1 === i &&
                                  <i
                          style={{
                            marginLeft: "0px",
                            marginTop:"35px",
                          
                            fontSize: "1.25rem",
                            color: "#3273e9",
                          }}
                          onClick={handleAddClick}
                          class={"fa fa-plus"}
                        
                        />}
                         
                         
                                     
                                    
                                  </CCol>
                                  <CCol md="3">
                                  {inputList.length !== 1 &&
                                  <i
                          style={{
                            marginLeft: "0px",
                            marginTop:"35px",
                           
                            fontSize: "1.25rem",
                            color: "black",
                          }}
                          onClick={()=>handleRemoveClick(i)}
                          class={"fa fa-remove"}
                        
                        />}
                         
                         
                                     
                                    
                                  </CCol>
        
</CRow>
                                 
                                 
                                </CRow>

       
       ) })}
    
         
       
         
      <CRow style={{marginLeft:"580px"}}>
        
      <CCol md="3">
                          <CButton
                  style={{
                    marginLeft: "30px",
                    marginTop:"35px",
                  
                  }}
                  onClick={enableCreate}
                 className={"saveBtn"}
                
                > Save</CButton>
                            <CButton
                              shape={"pill"}
                              id={"municipalcancel"}
                              style={{ marginTop: "30px", marginLeft: "20px" }}
                              className={"cancelBtn"}
                              onClick={handleClick}
                            >
                              CANCEL
                            </CButton>
                            {error !== "" ? <p>{error}</p> : null}
                          </CCol>
      </CRow>

         
          <CButton
            className={"menu"}
            style={{ position: "absolute", top: "15px", right: "15px" }}
            className={"cancelBtn"}
            onClick={() => {
              handleClick();
              // handleClick2();
            }}
          >
            Back
          </CButton>
        </div>
      )}
      {hideMappingVillage && (
        <div>
          <CCard className={"cardSave"}>
            <div className={"main-headerlabel"}>
              <span className={"header-label"}>Village panchayat</span>
            </div>
            {locationHide.corporation && (
              <div>
                <div style={{ marginLeft: "-26px" }}>
                  <CRow style={{ marginTop: "45px" }}>
                    <CCol md="10">
                      <CCol md="5">
                        <CButton
                          style={{
                            marginLeft: "45px",
                          }}
                          id={"saveAbbreviationConfigureCode"}
                          className={"saveBtn"}
                          onClick={changeVillagePanchayat}
                        >
                          Add Village panchayat
                        </CButton>{" "}
                      </CCol>
                    </CCol>
                  </CRow>
                  
                  <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                    <CCol className={"column-align"} md="3">
                      <CLabel className={"label-name"}>
                        State
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <Select
                        className={"input-align"}
                        id={"municipalstatename"}
                        name={"state"}
                        placeholder={"Select State"}
                        // value={locations.district}
                        // onChange={changeHandler}
                        options={select}
                      />
                    </CCol>
                  
                    <CCol className={"column-align"} md="3">
                      <CLabel className={"label-name"}>
                        District panchayat
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <Select
                      
                        className={"input-align"}
                        id={"municipaldistrict"}
                        name={"city"}
                        placeholder={"Select District panchayat"}
                        options={select}
                      />
                    </CCol>

                    <CCol className={"column-align"} md="3">
                      <CLabel className={"label-name"}>
                        Village Panchayat
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      -{" "}
                      <Select
                        className={"input-align"}
                        id={"municipaldistrict"}
                        name={"city"}
                        placeholder={"Select Village panchayat"}
                        options={select}
                      />
                    </CCol>
                  </CRow>

                  <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                    <CCol className={"column-align"} md="3">
                      <CLabel className={"label-name"}>
                        District / City
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <Select
                        className={"input-align"}
                        id={"municipalpanchayatunion"}
                        name={"state"}
                        placeholder={"Select City Name"}
                        options={select}
                      />
                    </CCol>
                    <CCol className={"column-align"} md="3">
                      <CLabel className={"label-name"}>
                        Panchayat Union
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <Select
                        className={"input-align"}
                        id={"municipalvillagepanchayat"}
                        name={"city"}
                        placeholder={"Select Panchayat Union"}
                        options={select}
                      />
                    </CCol>
                    <CCol className={"column-align"} md="3">
                      <CLabel className={"label-name"}>
                        Ward No
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      -{" "}
                      <Select
                        className={"input-align"}
                        id={"municipalwardno"}
                        name={"city"}
                        placeholder={"Select Ward No"}
                        options={select}
                      />
                    </CCol>
                  </CRow>
                </div>

                <CRow
                  style={{
                    padding: "4%",
                    marginTop: "-2.5%",
                    marginLeft: "-30px",
                  }}
                >
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
                      show_details1: (item, index) => {
                        return (
                          <td className="py-1">
                            <CRow>
                              <CCol style={{ fontSize: "1.15rem" }} md="16">
                              
                                <Dropdown
                                  className={"ant-dropdown-cutomize-by-me"}
                                  overlay={() => menus(item)}
                                >
                                  <a
                                    className="ant-dropdown-link"
                                    onClick={(e) => e.preventDefault()}
                                  >
                                    <i
                                      style={{
                                        marginLeft: "35px",
                                        color: "black",
                                      }}
                                      className="fa fa-ellipsis-v"
                                      bsStyle="overlay"
                                      onClick={menus}
                                    />
                                  </a>
                                </Dropdown>
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

      {hideVillagePanchayat && (
        <div>
          <CCard className={"cardSave"}>
            <div className={"main-headerlabel"}>
              <span className={"header-label"}>Adding Village Panchayat</span>
            </div>
            {locationHide.corporation && (
              <div>
                <div style={{ marginLeft: "-26px" }}>
                  <CRow
                    className={"row-alignment"}
                    md="12"
                    sm="12"
                    lg="12"
                    style={{ marginLeft: "-5px" }}
                  >
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
                        options={select}
                      />
                    </CCol>
                    {municipalList && (
                      <React.Fragment>
                        <CCol className={"column-align"} md={4} lg={4}>
                          <CLabel className={"label-name-1"}>
                            District Panchayat
                            <span className={"text-danger"}> *</span>
                          </CLabel>
                    
                          <Select
                        
                          //  isMulti
                          //  isChecked
                          //  closeMenuOnSelect={false}
                            placeholder="Select District Panchayat"
                            id={"municipalcorporation"}
                            type={"text"}
                            // value={selected}
                            // onChange={(e) => setSelected(e)}
                            components={{ MenuList: SelectMenuButton }}
                            options={select}
                            // labelledBy={"Select"}
                          />
                        </CCol>
                        {/* <CCol className={"column-align"} md={1} lg={1}>
                          <CButton
                            shape={"pill"}
                            id={"addmunicipalcorporation"}
                            style={{ marginTop: "30px" }}
                            className={"saveBtn"}
                            onClick={enableCreate}
                          >
                            ADD
                          </CButton>
                        </CCol> */}
                          {/* <CCol md={1} lg={1}>
                <CButton
                  style={{
                    marginLeft: "0px",
                    marginTop:"51px",
                    backgroundColor: "#3273e9",
                    borderLine: "5px !important",
                    borderColor: "white",
                    fontSize: "1.25rem",
                    color: "#ffff",
                  }}
                  onClick={enableCreate}
                  class={"fa fa-plus"}
                
                ></CButton>
              </CCol>
              <CCol md={1} lg={1}>
                <i
                  style={{
                    marginLeft: "-77px",
                    marginTop: "53px",

                    fontSize: "1.45rem",
                    color: "#3cd3ad",
                  }}
                  class={"fa fa-eye"}
                 
                ></i>
              </CCol>
                        <CCol md={1} lg={1} style={{marginTop:"50px",marginLeft:"-163px"}}>
                    <ReactFileReader handleFiles={handleFiles} fileTypes={'.CSV'}>
                    <i className="fa fa-upload" style={{fontSize:"1.45rem"}} />
                    <CSVLink data={state} ><i className="fa fa-download" style={{fontSize:"1.45rem",marginLeft:"25px",color:"#ea384d"}}/></CSVLink>
                    </ReactFileReader>
                    
                    </CCol> */}
                  

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
                        <CRow
                          className={"row-alignment"}
                          style={{ marginLeft: "45px", marginTop: "20px" }}
                          sm={12}
                          md={12}
                          lg={12}
                        >
                          <CCol md="3">
                            <CLabel className={"label-name-1"}>
                              District panchayat
                              <span className={"text-danger"}> *</span>
                            </CLabel>

                            <CInput
                              id={"MunicipalName"}
                              name={"municipalname"}
                              placeholder="Enter District Panchayat Name"
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
                  <CRow
                    className={"row-alignment"}
                    md="12"
                    sm="12"
                    lg="12"
                    style={{ marginLeft: "-5px" }}
                  >
                    <CCol className={"column-align"} md="4">
                      <CLabel className={"label-name"}>
                        District / City
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <Select
                        className={"input-align"}
                        id={"municipaldistrict"}
                        name={"city"}
                        placeholder={"Select City Name"}
                        options={select}
                      />
                    </CCol>
                    {panchayatList && (
                      <React.Fragment>
                        <CCol className={"column-align"} md={4} lg={4}>
                          <CLabel className={"label-name-1"}>
                            Panchayat Union
                            <span className={"text-danger"}> *</span>
                          </CLabel>
                          <Select
                            placeholder="Select Panchayat Union"
                            id={"municipalcorporation"}
                            type={"text"}
                            options={select}
                          />
                        </CCol>
                        {/* <CCol className={"column-align"} md={1} lg={1}>
                          <CButton
                            shape={"pill"}
                            id={"addmunicipalcorporation"}
                            style={{ marginTop: "30px" }}
                            className={"saveBtn"}
                            onClick={addPanchayat}
                          >
                            ADD
                          </CButton>
                        </CCol> */}
  
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
                    {panchayatCreate && (
                      <React.Fragment>
                        <CRow
                          className={"row-alignment"}
                          style={{ marginLeft: "45px", marginTop: "20px" }}
                          sm={12}
                          md={12}
                          lg={12}
                        >
                          <CCol md="3">
                            <CLabel className={"label-name-1"}>
                              Panchayat Union
                              <span className={"text-danger"}> *</span>
                            </CLabel>

                            <CInput
                              id={"MunicipalName"}
                              name={"municipalname"}
                              placeholder="Enter panchayat Union Name"
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
                              onClick={cancelPanchayat}
                            >
                              CANCEL
                            </CButton>
                            {error !== "" ? <p>{error}</p> : null}
                          </CCol>
                        </CRow>
                      </React.Fragment>
                    )}
                  </CRow>
                  <CRow
                    className={"row-alignment"}
                    md="12"
                    sm="12"
                    lg="12"
                    style={{ marginLeft: "-5px" }}
                  >
                    <CCol className={"column-align"} md="4"></CCol>
                    {villageList && (
                      <React.Fragment>
                        <CCol className={"column-align"} md={4} lg={4}>
                          <CLabel className={"label-name-1"}>
                            Village Panchayat
                            <span className={"text-danger"}> *</span>
                          </CLabel>
                          <Select
                            placeholder="Select Village Panchayat"
                            id={"municipalcorporation"}
                            type={"text"}
                            options={select}
                          />
                        </CCol>
                        {/* <CCol className={"column-align"} md={1} lg={1}>
                          <CButton
                            shape={"pill"}
                            id={"addmunicipalcorporation"}
                            style={{ marginTop: "30px" }}
                            className={"saveBtn"}
                            onClick={addVillage}
                          >
                            ADD
                          </CButton>
                        </CCol> */}

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
                    {villageCreate && (
                      <React.Fragment>
                        <CRow
                          className={"row-alignment"}
                          style={{ marginLeft: "45px", marginTop: "20px" }}
                          sm={12}
                          md={12}
                          lg={12}
                        >
                          <CCol md="3">
                            <CLabel className={"label-name-1"}>
                              Village Panchayat
                              <span className={"text-danger"}> *</span>
                            </CLabel>

                            <CInput
                              id={"MunicipalName"}
                              name={"municipalname"}
                              placeholder="Enter Village Panchayat Name"
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
                              onClick={cancelVillage}
                            >
                              CANCEL
                            </CButton>
                            {error !== "" ? <p>{error}</p> : null}
                          </CCol>
                        </CRow>
                      </React.Fragment>
                    )}
                  </CRow>

                  <CRow
                    className={"row-alignment"}
                    md="12"
                    sm="12"
                    lg="12"
                    style={{ marginLeft: "-5px" }}
                  >
                    <CCol className={"column-align"} md="4"></CCol>
                    {wardList && (
                      <React.Fragment>
                        <CCol className={"column-align"} md={4} lg={4}>
                          <CLabel className={"label-name-1"}>
                            Ward Number
                            <span className={"text-danger"}> *</span>
                          </CLabel>
                          <Select
                            placeholder="Select the Ward Number"
                            id={"municipalcorporation"}
                            type={"text"}
                            options={select}
                          />
                        </CCol>
                        {/* <CCol className={"column-align"} md={1} lg={1}>
                          <CButton
                            shape={"pill"}
                            id={"addmunicipalcorporation"}
                            style={{ marginTop: "30px" }}
                            className={"saveBtn"}
                            onClick={addWard}
                          >
                            ADD
                          </CButton>
                        </CCol> */}
                       

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
                    {wardCreate && (
                      <React.Fragment>
                        <CRow
                          className={"row-alignment"}
                          style={{ marginLeft: "45px", marginTop: "20px" }}
                          sm={12}
                          md={12}
                          lg={12}
                        >
                          <CCol md="3">
                            <CLabel className={"label-name-1"}>
                              Ward Number
                              <span className={"text-danger"}> *</span>
                            </CLabel>

                            <CInput
                              id={"wardname"}
                              name={"municipalname"}
                              placeholder="Enter Ward Number"
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
                              onClick={cancelWard}
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
                      Select Street
                    </CLabel>
                  </CCol>
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
                        placeholder={"Select Area Name"}
                        options={select}
                      />
                    </CCol>
                  </CRow>
                </div>
                <CRow style={{ marginTop: "30px", marginLeft: "650px" }}>
                  <CCol md="10">
                    <CCol
                      md="5"
                      style={{
                        position: "absolute",
                        marginLeft: "-190px",
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
                        onClick={cancelchange}
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
                {/* <CRow>
                  <CInput
                    type={"checkbox"}
                    style={{
                      width: "15px",
                      height: "15px",
                      marginLeft: "78px",
                      marginBottom: "10px",
                      marginTop: "180px",
                    }}
                  />
                  <CCol style={{ fontSize: "1.15rem" }} md="12"></CCol>
                </CRow> */}

                <CRow style={{ padding: "4%", marginTop: "-4.5%" }}>
                  <CDataTable
                    items={userData}
                    fields={fields1}
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
                              <CCol
                                style={{ fontSize: "1.15rem" }}
                                md="12"
                              ></CCol>
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
                                  id={"constimemDelete"}
                                  style={{
                                    marginLeft: "5px",
                                    color: "black",
                                    cursor: "pointer",
                                  }}
                                  className="fa fa-remove"
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

export default VillagePanchayat;
