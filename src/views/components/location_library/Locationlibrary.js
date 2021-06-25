import React, { useState, useEffect } from "react";
import CDataTable from "../../CoreComponents/table/CDataTable";
import {
  CRow,
  CCard,
  CCol,
  CButton,
  CLabel,
  CWidgetDropdown,
  CInput,
  CLink,
} from "@coreui/react";
import { useFormik } from "formik";
import * as yup from "yup";
import "./LocationLibrary.css";
import {
  getCountry,
  getState,
  getCity,
  getArea,
  getAreaSchema,
  createCountry,
  createState,
  createCity,
  createArea,
  updateCountry,
  updateState,
  updateCity,
  updateArea,
} from "../../../services/ApiService";
import { toast } from "react-toastify";
import FormValidation from "../../../Tools/FormValidation/FormValidation";
import Select,{components} from "react-select";
import { Dropdown, Menu } from "antd";
import 'antd/dist/antd.css';
import {CSVLink, CSVDownload} from 'react-csv';
import ReactFileReader from 'react-file-reader';
import MultiSelect from "react-multi-select-component";

function LocationLibrary(props) {
  const [error, setError] = useState("");
  const [passing, setPassing] = useState("");
  const [, setArea] = useState([]);
  const [areasSchema, setAreas] = useState([]);
  const [citySchema, setCity] = useState([]);
  const [stateSchema, setState] = useState([]);
  const [countrySchema, setCountry] = useState([]);
  const [AreaCreate, setAreaCreate] = useState(false);
  const [StreetCreate, setStreetCreate] = useState(false);
  const [DoorCreate, setDoorCreate] = useState(false);
  const [AreaList, setAreaList] = useState(true);
  const [StreetList,setStreetList ] = useState(true);
  const [DoorList,setDoorList ] = useState(true);
  const [CountryCreate, setCountryCreate] = useState(false);
  const [, setCountryList] = useState(true);
  const [CityCreate, setCityCreate] = useState(false);
  const [CityList, setCityList] = useState(true);
  const [StateCreate, setStateCreate] = useState(false);
  const [StateList, setStateList] = useState(true);
  const [countryName, setCountryName] = useState("");
  const [, setAddHide] = useState(true);
  const [saveHide, setSaveHide] = useState(false);
  const [stateName, setStateName] = useState("");
  const [cityName, setCityName] = useState("");
  const [streetName, setStreetName] = useState("");
  const [doorName, setDoorName] = useState("");
  const [areaName, setAreaName] = useState("");
  const [, setDeleteId] = useState({ id: "", show: false });
  const [countrys, ] = useState({
    countryname: "",
    abbreviation: "",
    code: "",
  });
  const [states, setStates] = useState({
    statename: "",
    abbreviation: "",
    code: "",
  });
  const [citys, ] = useState({
    cityName: "",
    abbreviation: "",
    code: "",
  });
  const [areas, ] = useState({
    areaName: "",
    abbreviation: "",
    code: "",
  });
  const [stated, setStated] = useState({ value: "" });
  useEffect(() => {
    setError("");
    setPassing("");
  }, []);

  const formik = useFormik({
    initialValues: {
      StateName: "",
      CountryName: "",
      CityName: "",
      AreaName: "",
      DoorNo:"",
      Abbreviation1: "",
      Code1: "",
      Abbreviation2: "",
      Code2: "",
      Abbreviation3: "",
      Code3: "",
      Abbreviation4: "",
      Code4: "",
      Pincode: "",
    },
    validationSchema: yup.object().shape({
      CountryName: yup.string().required(" Country Name is Required"),
      StateName: yup.string().required("State Name is Required"),
      CityName: yup.string().required("City Name is Required"),
      AreaName: yup.string().required("Area Name is Required"),
      Abbreviation1: yup
        .string()
        .required("Abbreviation is Required")
        .min(5, "Min 5 Character is Required"),
      Code1: yup
        .string()
        .required(" Code  is Required")
        .min(5, "Min 5 Character is Required")
        .max(5, "Max 5 Character is Required"),
      Abbreviation2: yup
        .string()
        .required("Abbreviation is Required")
        .min(5, "Min 5 Character is Required")
        .max(5, "Max 5 Character is Required"),
      Code2: yup
        .string()
        .required(" Code  is Required")
        .min(5, "Min 5 Character is Required")
        .max(5, "Max 5 Character is Required"),
      Abbreviation3: yup
        .string()
        .required("Abbreviation is Required")
        .min(5, "Min 5 Character is Required")
        .max(3, "Max 5 Character is Required"),
      Code3: yup
        .string()
        .required(" Code  is Required")
        .min(5, "Min 5 Character is Required")
        .max(5, "Max 5 Character is Required"),
      Abbreviation4: yup
        .string()
        .required("Abbreviation is Required")
        .min(5, "Min 5 Character is Required")
        .max(3, "Max 5 Character is Required"),
      Code4: yup
        .string()
        .required(" Code  is Required")
        .min(5, "Min 5 Character is Required")
        .max(5, "Max 5 Character is Required"),
      Pincode: yup.string().required(" Pincode  is Required"),
    }),
    onSubmit: (userInputData) => {},
  });

  const CancelCity = async () => {
    formik.values.Abbreviation3 = "";
    formik.values.Code3 = "";
    formik.values.CityName = "";
    setPassing("");
    await setCityList(true);
    await setCityCreate(false);
  };

  const Canceldoor = async () => {
    formik.values.DoorNo = "";
    setPassing("");
    await setDoorList(true);
    await setDoorCreate(false);
  }

  const SelectMenuButtonstate = (props) => {
    return (
        <components.MenuList  {...props} >
            {props.children}
            <CRow md="12"  >
            <CCol md="6">
              <CLink className={"saveBtn"} onClick={handleClick1} style={{paddingLeft:"20px"}}>Add</CLink>
              </CCol>
            <CCol md="6" >
            <CLink className={"saveBtn"} onClick={handleClick1} style={{marginLeft:"100px"}}>Bulk Upload </CLink> 
            </CCol>
            </CRow>
            
        </components.MenuList >
    ) }
    const SelectMenuButtoncity = (props) => {
      return (
          <components.MenuList  {...props} >
              {props.children}
              <CRow md="12"  >
              <CCol md="6">     <CLink className={"saveBtn"} onClick={handleClick2} style={{paddingLeft:"20px"}}>Add </CLink></CCol>
              <CCol md="6" > 
              <CLink className={"saveBtn"} onClick={handleClick2} style={{marginLeft:"100px"}}>Bulk Upload </CLink> 
              </CCol>
              </CRow>
              
          </components.MenuList >
      ) }
      const SelectMenuButtonarea = (props) => {
        return (
            <components.MenuList  {...props} >
                {props.children}
                <CRow md="12"  >
                <CCol md="6">     <CLink className={"saveBtn"} onClick={handleClick3} style={{paddingLeft:"20px"}}>Add </CLink></CCol>
                <CCol md="6" > 
                <CLink className={"saveBtn"} onClick={handleClick3} style={{marginLeft:"100px"}}>Bulk Upload </CLink> 
                </CCol>
                </CRow>
                
            </components.MenuList >
        ) }
        const SelectMenuButtonstreet = (props) => {
          return (
              <components.MenuList  {...props} >
                  {props.children}
                  <CRow md="12"  >
                  <CCol md="6">     <CLink className={"saveBtn"} onClick={handleClick4} style={{paddingLeft:"20px"}}>Add </CLink></CCol>
                  <CCol md="6" > 
                  <CLink className={"saveBtn"} onClick={handleClick4} style={{marginLeft:"100px"}}>Bulk Upload </CLink> 
                  </CCol>
                  </CRow>
                  
              </components.MenuList >
          ) }
          const SelectMenuButtondoor = (props) => {
            return (
                <components.MenuList  {...props} >
                    {props.children}
                    <CRow md="12"  >
                    <CCol md="6">     <CLink className={"saveBtn"} onClick={handleClick5} style={{paddingLeft:"20px"}}>Add </CLink></CCol>
                    <CCol md="6" > 
                    <CLink className={"saveBtn"} onClick={handleClick5} style={{marginLeft:"100px"}}>Bulk Upload </CLink> 
                    </CCol>
                    </CRow>
                    
                </components.MenuList >
            ) }
                    
    const [menu, setMenu] = useState({
      style: "menu2",
      menuStatus: "open",
      style3: "menu2",
    });
    const [sideBar1, setSideBar1] = useState(false);
    const [sideBar2, setSideBar2] = useState(false);
    const [sideBar3, setSideBar3] = useState(false);
    const [sideBar4, setSideBar4] = useState(false);
    const [sideBar5, setSideBar5] = useState(false);

    const handleClick1 = () => {
    
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
    const handleClick2 = () => {
    
      switch (menu.menuStatus) {
        case "open":
          setMenu({
            menuStatus: "close",
            // style3: "menu2",
            style: "menu active1",
            
          });
        
          setTimeout(() => {
            setSideBar2(true);
          }, 1000);
          break;
        case "close":
          setMenu({
            menuStatus: "open",
            // style3: "menu2",
            style: "menu active2",
            
          });
          setTimeout(() => {
            setSideBar2(false);
          }, 1000);
          break;
      }
    };
    const handleClick3 = () => {
    
      switch (menu.menuStatus) {
        case "open":
          setMenu({
            menuStatus: "close",
            // style3: "menu2",
            style: "menu active1",
            
          });
        
          setTimeout(() => {
            setSideBar3(true);
          }, 1000);
          break;
        case "close":
          setMenu({
            menuStatus: "open",
            // style3: "menu2",
            style: "menu active2",
            
          });
          setTimeout(() => {
            setSideBar3(false);
          }, 1000);
          break;
      }
    };
    const handleClick4 = () => {
    
      switch (menu.menuStatus) {
        case "open":
          setMenu({
            menuStatus: "close",
            // style3: "menu2",
            style: "menu active1",
            
          });
        
          setTimeout(() => {
            setSideBar4(true);
          }, 1000);
          break;
        case "close":
          setMenu({
            menuStatus: "open",
            // style3: "menu2",
            style: "menu active2",
            
          });
          setTimeout(() => {
            setSideBar4(false);
          }, 1000);
          break;
      }
    };
    const handleClick5 = () => {
    
      switch (menu.menuStatus) {
        case "open":
          setMenu({
            menuStatus: "close",
            // style3: "menu2",
            style: "menu active1",
            
          });
        
          setTimeout(() => {
            setSideBar5(true);
          }, 1000);
          break;
        case "close":
          setMenu({
            menuStatus: "open",
            // style3: "menu2",
            style: "menu active2",
            
          });
          setTimeout(() => {
            setSideBar5(false);
          }, 1000);
          break;
      }
    };
  
  const CancelState = async () => {
    setStated({ ...stated, StateName: "", Code2: "", Abbreviation2: "" });
    formik.values.Abbreviation2 = "";
    formik.values.Code2 = "";
    formik.values.StateName = "";
    setPassing("");
    await setStateList(true);
    await setStateCreate(false);
  };

  const CancelArea = async () => {
    setStated({
      ...stated,
      AreaName: "",
      Code4: "",
      Pincode: "",
      Abbreviation4: "",
    });
    formik.values.Abbreviation4 = "";
    formik.values.Code4 = "";
    formik.values.AreaName = "";
    formik.values.Pincode = "";
    setPassing("");
    await setAreaList(true);
    await setAreaCreate(false);
  };

 

  const State = async () => {
    if (passing === "") {
      var response;
      let body = formik.values;
      body = {
        statename: states.statename,
        abbreviation: states.abbreviation,
        code: states.code,
      };
      try {
        response = await createState(JSON.stringify(body));
        if (response.success === true) {
          response.State.label = response.State.stateName;
          toast.success(response.message, { autoClose: 1000 });
          setTimeout(() => {
            setStateCreate(false);
            setStateList(true);
          }, 1300);
          formik.handleReset({});
          setState([...stateSchema, response.State]);
          formik.values = {};

          return 0;
        }

        toast.error(response.error);
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        response = await updateState(
          formik.values.StateName,
          formik.values.Abbreviation2,
          formik.values.Code2,
          passing
        );
        getAllAreas();
        if (response.success === true) {
          toast.success(response.message, { autoClose: 1000 });
          setTimeout(() => {
            setStateCreate(false);
            setStateList(true);
          }, 1300);
          setStateName("");
          setCityName("");
          setAreaName("");
          setCity([]);
          setArea([]);
          getAllState();
          const elementsIndex = stateSchema.findIndex(
            (element) => element._id === passing
          );
          let newArray = [...stateSchema];
          response.updateOfficeType = {
            ...response.updateOfficeType,
            valu: response.updateOfficeType._id,
            label: response.updateOfficeType.stateNAme,
          };
          newArray[elementsIndex] = response.updateOfficeType;
          setState([...stateSchema, newArray]);
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  const City = async () => {
    if (passing === "") {
      var response;
      let body = formik.values;
      body = {
        cityname: citys.cityname,
        abbreviation: citys.abbreviation,
        code: citys.code,
      };
      try {
        response = await createCity(JSON.stringify(body));
        if (response.success === true) {
          getAllAreas();
          toast.success(response.message, { autoClose: 1000 });
          setTimeout(() => {
            setCityCreate(false);
            setCityList(true);
          }, 1300);

          response.City = {
            ...response.City,
            value: response.City._id,
            label: response.City.cityName,
          };
          formik.handleReset({});
          setCity([...citySchema, response.City]);
          formik.values = {};

          return 0;
        }
        toast.error(response.error);
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        response = await updateCity(
          formik.values.CityName,
          formik.values.Abbreviation3,
          formik.values.Code3,
          passing
        );
        if (response.success === true) {
          toast.success(response.message, { autoClose: 1000 });
          setCityName("");
          setAreaName("");
          setArea([]);
          getAllCity();
          getAllAreas();
          setTimeout(() => {
            setCityCreate(false);
            setCityList(true);
          }, 1300);
          const elementsIndex = citySchema.findIndex(
            (element) => element._id === passing
          );
          let newArray = [...citySchema];
          response.updateOfficeType = {
            ...response.updateOfficeType,
            value: response.updateOfficeType._id,
            label: response.updateOfficeType.cityName,
          };
          newArray[elementsIndex] = response.updateOfficeType;
          setCity(newArray);
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  const Area = async () => {
    if (passing === "") {
      var response;
      let body = formik.values;
      body = {
        areaname: areas.areaname,
        abbreviation: citys.abbreviation,
        code: citys.code,
      };
      try {
        response = await createArea(JSON.stringify(body));
        if (response.success === true) {
          formik.values = {};
          toast.success(response.message, { autoClose: 1000 });
          setTimeout(() => {
            setAreaCreate(false);
            setAreaList(true);
          }, 1300);
          formik.handleReset({});
          setArea("");
          getAllArea();
          getAllAreas();
          formik.values = {};
          return 0;
        }
        toast.error(response.error);
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        response = await updateArea(
          formik.values.AreaName,
          formik.values.Abbreviation4,
          formik.values.Code4,
          formik.values.Pincode,
          passing
        );
        if (response.success === true) {
          getAllAreas();
          formik.values.CountryName = "";
          formik.values.AreaName = "";
          formik.values.Abbreviation4 = "";
          formik.values.Code4 = "";
          formik.values.Pincode = "";
          setPassing("");
          toast.success(response.message);
          setTimeout(() => {
            setAreaCreate(false);
            setAreaList(true);
          }, 2000);
          setAreaName("");
          const elementsIndex = areasSchema.findIndex(
            (element) => element._id === passing
          );
          let newArray = [...areasSchema];
          response.updateOfficeType = {
            ...response.updateOfficeType,
            value: response.updateOfficeType._id,
            label: response.updateOfficeType.areaName,
          };
          newArray[elementsIndex] = response.updateOfficeType;
          setArea(newArray);
          getAllAreas();
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  const getAllCountry = async () => {
    var response;
    try {
      response = await getCountry();
      response.Country.map((x) => {
        x.value = x._id;
        x.label = x.countryName;
        return 0;
      });
      if (response) {
        setCountry(response.Country);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const getAllState = async () => {
    var response;
    try {
      response = await getState(countryName._id);
      if (response) {
        response.State.map((x) => {
          x.value = x._id;
          x.label = x.stateName;
          return 0;
        });

        setState(response.State);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const getAllCity = async () => {
    var response;
    try {
      response = await getCity(stateName._id);

      if (response) {
        response.City.map((x) => {
          x.value = x._id;
          x.label = x.cityName;
          return 0;
        });

        setCity(response.City);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const getAllArea = async () => {
    var response;
    try {
      response = await getArea(cityName._id);
      if (response) {
        if (response.Area) {
          response.Area.map((x) => {
            x.value = x._id;
            x.label = `${capitalize(x.state.stateName)}, ${capitalize(
              x.city.cityName
            )}, ${capitalize(x.areaName)}, ${x.pincode}`;
            x.cityName = x.city.cityName;
            x.stateName = x.state.stateName;
            x.countryName = x.country.countryName;
            return 0;
          });
        }
        setArea(response.Area);
      }
    } catch (e) {}
    return 0;
  };

  useEffect(() => {
    getAllArea();
    getAllCountry();
    getAllState();
    getAllCity();
  }, [countryName, stateName, cityName, areaName]);

  const getAllAreas = async () => {
    var response;
    try {
      response = await getAreaSchema();
      if (response) {
        if (response.Area) {
          response.Area.map((x, i) => {
            x.value = x._id;
            x.label = `${capitalize(x.state.stateName)}, ${capitalize(
              x.city.cityName
            )}, ${capitalize(x.areaName)}, ${x.pincode}`;
            x.cityName = x.city.cityName;
            x.stateName = x.state.stateName;
            x.countryName = x.country.countryName;
            x.sNo = i + 1;
            return 0;
          });
        }
        setAreas(response.Area);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const capitalize = (x) => {
    let s = x.toLowerCase();
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  };
  const enableCreate = async () => {
    await setStateList(false);
    await setStateCreate(true);
  };
  const cityCreate = async () => {
    await setCityList(false);
    await setCityCreate(true);
  };
  const areaCreate = async () => {
    await setAreaList(false);
    await setAreaCreate(true);
  };
const addStreet = async()=>{
  await setStreetList(false);
    await setStreetCreate(true);
}
const addDoor = async()=>{
  await setDoorList(false);
    await setDoorCreate(true);
}

const EditCountry = async (data) => {
    await setAddHide(false);
    await setSaveHide(true);
    setCountryName({
      label: data.country.countryName,
      value: data.country._id,
      edit: false,
    });
    setStateName({
      label: data.state.stateName,
      value: data.state._id,
      edit: false,
    });
    setCityName({
      label: data.city.cityName,
      value: data.city._id,
      edit: false,
    });
    setAreaName({ label: data.areaName, value: data._id, edit: false });

    setPassing(data._id);
  };
  const [details, setDetails] = useState([]);
  useEffect(() => {
    let val1 = formik.values.Code1;
    formik.values.Code1 = val1.toUpperCase();
    let val2 = formik.values.Code2;
    formik.values.Code2 = val2.toUpperCase();
    let val3 = formik.values.Code3;
    formik.values.Code3 = val3.toUpperCase();
    let val4 = formik.values.Code4;
    formik.values.Code4 = val4.toUpperCase();
  }, [formik.values]);

  const selectState = [{value:"TamilNadu", label:"TamilNadu"}]
  
  const selectCity = [{value:"Chennai", label:"Chennai"}]
  
  const selectStreet = [{value:"Pondy Baza", label:"Pondy Bazar"}]

  const selectDoor = [{value:"Pondy Baza", label:"117"}]

  const selectVillage = [{value:"TNagar", label:"TNagar"}]

  const userData =[{sNo:"1",stateName:"TamlNadu",cityName:"Chennai",areaName:"Alwarpet", pincode:"600018",Street:"St Marys Road",door:"3/90"},
  {sNo:"2",stateName:"TamlNadu",cityName:"Chennai",areaName:"TNagar", pincode:"600017",Street:"Pondy Bazar",door:"117"}

]
  const fields = [
    { key: "sNo", _style: { width: "10%" },    sorter: false,
    filter: false, },
    { key: "stateName", label: "State ", _style: { width: "20%" } },
    { key: "cityName", label: "District / City", _style: { width: "15%" } },
    {
      key: "areaName",
      label: "Village / Area / Locality",
      _style: { width: "20%" },
    },
    { key: "pincode", label: "Pincode", _style: { width: "10%" } },
    { key: "Street", label: "Street ", _style: { width: "20%" } },
    { key: "door", label: "Door No", _style: { width: "20%" } },

    {
      label: "Action",
      key: "show_details",

      _style: { width: "1%" },
      sorter: false,
      filter: false,
    },
  ];

  const toggleDetails = (index) => {
    const position = details.indexOf(index);
    let newDetails = details.slice();
    if (position !== -1) {
      newDetails.splice(position, 1);
    } else {
      newDetails = [...details, index];
    }
    setDetails(newDetails);
  };
  const deleteConfirm = (id) => {
    setDeleteId({ id: id, show: true });
  };

  const editState = async () => {
    await setStateList(false);
    await setStateCreate(true);
    formik.values.StateName = stateName.stateName;
    formik.values.Abbreviation2 = stateName.abbreviation;
    formik.values.Code2 = stateName.code;
    setPassing(stateName._id);
     };

     const editDoor = async () => {
      await setDoorList(false);
    await setDoorCreate(true);
      formik.values.StateName = stateName.stateName;
      formik.values.Abbreviation2 = stateName.abbreviation;
      formik.values.Code2 = stateName.code;
      setPassing(stateName._id);
       };
  
  const editCity = async () => {
    await setCityList(false);
    await setCityCreate(true);
    formik.values.CityName = cityName.cityName;
    formik.values.Abbreviation3 = cityName.abbreviation;
    formik.values.Code3 = cityName.code;
    setPassing(cityName._id);
     };

  const editArea = async () => {
    await setAreaList(false);
    await setAreaCreate(true);
    formik.values.AreaName = areaName.areaName;
    formik.values.Pincode = areaName.pincode;
    formik.values.Abbreviation4 = areaName.abbreviation;
    formik.values.Code4 = areaName.code;
    setPassing(areaName._id);
     };

  const CancelEdit = async () => {
    await setCountryName("");
    await setStateName("");
    await setCityName("");
    await setAreaName("");

    await setAddHide(true);
    await setSaveHide(false);
  };

  
  const statechangeHandler = (e) => {
    setStates({ ...states, [e.target.name]: e.target.value });
  };
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

  const [inputList, setInputList] = useState([{ name: "", abbreviation: "",code: "" }]);

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
    setInputList([...inputList, { name: "", abbreviation: "" ,code:""}]);
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
        <div className={menu.style} style={{marginLeft:"-400px"}}>
        
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
                ADDING LOCATION LIBRARY{" "}
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
                                      State 
                                      <span className={"text-danger"}> *</span>
                                    </CLabel>
        
                                    <CInput
                                      id={"MunicipalName"}
                                      name={"municipalname"}
                                      placeholder="Enter State Name"
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
                              onClick={handleClick1}
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
              handleClick1();
              // handleClick2();
            }}
          >
            Back
          </CButton>
        </div>

)}

<div className={menu.style3}>
       {sideBar2 && (
        <div className={menu.style} style={{marginLeft:"-400px"}}>
        
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
                ADDING LOCATION LIBRARY{" "}
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
                                     City 
                                      <span className={"text-danger"}> *</span>
                                    </CLabel>
        
                                    <CInput
                                      id={"MunicipalName"}
                                      name={"municipalname"}
                                      placeholder="Enter City Name"
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
                              onClick={handleClick2}
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
              handleClick2();
              // handleClick2();
            }}
          >
            Back
          </CButton>
        </div>

)}
    <div className={menu.style3}>
       {sideBar3 && (
        <div className={menu.style} style={{marginLeft:"-400px"}}>
        
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
                ADDING LOCATION LIBRARY{" "}
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
                                      Area 
                                      <span className={"text-danger"}> *</span>
                                    </CLabel>
        
                                    <CInput
                                      id={"MunicipalName"}
                                      name={"municipalname"}
                                      placeholder="Enter Area Name"
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
                                  <CCol md="2">
                                    <CLabel className={"label-name-1"}>
                                      Pincode
                                      <span className={"text-danger"}> *</span>
                                    </CLabel>
                                    <CInput
                                      id={"municipalabrreviation"}
                                      name={"abbreviation"}
                                      placeholder="Enter Pincode"
                                      maxlength="7"
                                      size="7"
                                      value={x.panchayatabbreviation}
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
                              onClick={handleClick3}
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
              handleClick3();
              // handleClick2();
            }}
          >
            Back
          </CButton>
        </div>

)}
    <div className={menu.style3}>
       {sideBar4 && (
        <div className={menu.style} style={{marginLeft:"-400px"}}>
        
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
                ADDING LOCATION LIBRARY{" "}
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
                                      Street
                                      <span className={"text-danger"}> *</span>
                                    </CLabel>
        
                                    <CInput
                                      id={"MunicipalName"}
                                      name={"municipalname"}
                                      placeholder="Enter Street Name"
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
                              onClick={handleClick4}
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
              handleClick4();
              // handleClick2();
            }}
          >
            Back
          </CButton>
        </div>

)}
    <div className={menu.style3}>
       {sideBar5 && (
        <div className={menu.style} style={{marginLeft:"-400px"}}>
        
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
                ADDING LOCATION LIBRARY{" "}
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
                                      Door no.
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
                              onClick={handleClick5}
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
              handleClick5();
              // handleClick2();
            }}
          >
            Back
          </CButton>
        </div>

)}

<div>
      <div>
        <CCard className={"cardSave"}>
          <div>
            <div className={"main-headerlabel"}>
              <span style={{ marginLeft: "15px" }} className={"header-label"}>
                Location Library
              </span>
            </div>

            <CRow className={"row-alignment"} style={{ marginLeft: "-76px" }}>
              <CCol className={"column-align"} md="12" lg="12" sm="12">
                <p className="mandatory_txt" style={{ marginLeft: "50px" }}>
                  Mandatory fields are marked with an asterisk (*)
                </p>

                <CRow className={"row-alignment"}>
                  {StateList && (
                    <React.Fragment>
                      <CCol className={"column-align"} md={4} lg={4}>
                        <CLabel className={"label-name-1"}>
                          State
                          <span className={"text-danger"}> *</span>
                        </CLabel>
                        <Select
                          placeholder="Select the State Name"
                          id={"locationLibraryState"}
                          type={"text"}
                          // onChange={(e) => {
                          //   if (stateName.label) {
                          //     setStateName({ ...e, edit: countryName.edit });
                          //   } else {
                          //     setStateName({ ...e, edit: true });
                          //   }
                          // }}
                          // value={stateName}
                          options={selectState}
                          components={{ MenuList: SelectMenuButtonstate }}
                          // isDisabled={CountryCreate || CityCreate || AreaCreate}
                        />
                      </CCol>
                      {/* <CCol className={"column-align"} md={1} lg={1}>
                        <CButton
                          shape={"pill"}
                          id={"locationLibraryStateAdd"}
                          style={{ marginTop: "30px" }}
                          className={"saveBtn"}
                          onClick={enableCreate}
                          disabled={CountryCreate || CityCreate || AreaCreate}
                        >
                          ADD
                        </CButton>
                      </CCol>
                      {countryName.edit && <React.Fragment></React.Fragment>} */}

                      {stateName.edit === true ? (
                        <React.Fragment>
                          <CCol md={3} lg={3} className={"column-align"} style={{marginLeft:"-20px"}}> 
                            <CButton
                              style={{
                                marginTop: "30px",
                              }}
                              id={"locationLibraryStateEdit"}
                              className={"btn btn-success"}
                              onClick={editState}
                              disabled={
                                CountryCreate || CityCreate || AreaCreate
                              }
                            >
                              EDIT
                            </CButton>
                          </CCol>
                        </React.Fragment>
                      ) : null}
                    </React.Fragment>
                  )}
                  {StateCreate && (
                    <React.Fragment>
                      <CRow className={"column-align3"} sm={12} md={12} lg={12}>
                        <CCol md="3">
                          <CLabel className={"label-name-3"}>
                            State Name
                            <span className={"text-danger"}> *</span>
                          </CLabel>
                          <CInput
                            onKeyPress={(e) =>
                              FormValidation.value_Without_Number_Symbols(e)
                            }
                            id={"locationLibraryStateName"}
                            name={"statename"}
                            value={states.statename}
                            onChange={statechangeHandler}
                            placeholder="State Name"
                            maxlength="60"
                            size="60"
                          />
                          {formik.errors.StateName ? (
                            <div className="text-danger">
                              {" "}
                              {formik.errors.StateName}
                            </div>
                          ) : null}
                        </CCol>

                        <CCol md="3">
                          <CLabel className={"label-name-3"}>
                            Abbreviation
                            <span className={"text-danger"}> *</span>
                          </CLabel>
                          <CInput
                            onKeyPress={(e) =>
                              FormValidation.value_Without_Number_Without_Symbols_Without_Space(
                                e
                              )
                            }
                            id={"locationLibraryStateAbbreviation"}
                            name={"abbreviation"}
                            value={states.abbreviation}
                            onChange={statechangeHandler}
                            placeholder="Enter Abbreviation"
                            maxlength="5"
                            size="5"
                          />
                          {formik.errors.Abbreviation2 ? (
                            <div className="text-danger">
                              {" "}
                              {formik.errors.Abbreviation2}
                            </div>
                          ) : null}
                        </CCol>
                        <CCol md="3">
                          <CLabel className={"label-name-3"}>
                            Code
                            <span className={"text-danger"}> *</span>
                          </CLabel>
                          <CInput
                            id={"locationLibraryStateCode"}
                            onKeyPress={(e) =>
                              FormValidation.value_Without_Number_Without_Symbols_Without_Space(
                                e
                              )
                            }
                            name={"code"}
                            value={states.code}
                            onChange={statechangeHandler}
                            style={{ textTransform: "uppercase" }}
                            placeholder="Enter Code"
                            maxlength="5"
                            size="5"
                          />
                          {formik.errors.Code2 ? (
                            <div className="text-danger">
                              {" "}
                              {formik.errors.Code2}
                            </div>
                          ) : null}
                        </CCol>
                        <CCol md="3">
                          <CButton
                            shape={"pill"}
                            id={"locationLibraryStateSave"}
                            style={{ marginTop: "30px" }}
                            className={"saveBtn"}
                            onClick={State}
                          >
                            {passing !== "" ? "UPDATE" : "SAVE"}
                          </CButton>
                          <CButton
                            shape={"pill"}
                            id={"locationLibraryStateCancel"}
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
                  <CRow style={{ marginLeft:"1300px",position:"absolute" ,marginTop:"10px"}}>
                    <CCol sm="6" lg="3" style={{ marginLeft: "10px" }}>
                      <CWidgetDropdown
                        style={{
                          width: "280px",
                          textAlign: "center",
                          fontSize: "30px",
                          float: "right",
                          height:"100px",
                          marginRight:"85px"
                        }}
                        color="gradient-primary"
                        header=""
                        text=""
                      >
                        <span style={{ marginLeft: "10px", fontSize: "24px",fontWeight:"700" }}>
                          State
                        </span>
                        <span
                          style={{ marginLeft: "-129px", marginTop: "30px" ,fontSize: "24px",fontWeight:"700" }}
                        >
                          2
                        </span>
                        <br />
                        <br />
                      
                      </CWidgetDropdown>
                    </CCol>
                  </CRow>
                </CRow>
                <CRow className={"row-alignment"}>
                  {CityList && (
                    <React.Fragment>
                      <CCol className={"column-align"} md={4} lg={4}>
                        <CLabel className={"label-name-1"}>
                          District / City
                          <span className={"text-danger"}> *</span>
                        </CLabel>
                        <Select
                          placeholder="Select the City Name"
                          id={"locationLibraryCity"}
                          type={"text"}
                          // onChange={(e) => {
                          //   if (cityName.label) {
                          //     setCityName({ ...e, edit: stateName.edit });
                          //   } else {
                          //     setCityName({ ...e, edit: true });
                          //   }
                          // }}
                          // value={cityName}
                          options={selectCity}
                          // 
                          components={{ MenuList: SelectMenuButtoncity }}

                        />
                      </CCol>

                      {/* {stateName.edit && (
                        <React.Fragment>
                          <CCol className={"column-align"} md={1} lg={1}>
                            <CButton
                              id={"locationLibraryCityAdd"}
                              shape={"pill"}
                              style={{ marginTop: "30px" }}
                              className={"saveBtn"}
                              onClick={cityCreate}
                              disabled={
                                CountryCreate || StateCreate || AreaCreate
                              }
                            >
                              ADD
                            </CButton>
                          </CCol>
                        </React.Fragment>
                      )} */}

                      {cityName.edit === true && (
                        <React.Fragment>
                          <CCol md={3} lg={3} className={"column-align"} style={{marginLeft:"-20px"}}> 
                            <CButton
                              style={{ marginTop: "30px" }}
                              className={"btn btn-success"}
                              onClick={editCity}
                              disabled={
                                CountryCreate || StateCreate || AreaCreate
                              }
                              id={"locationLibraryCityEdit"}
                            >
                              EDIT
                            </CButton>
                          </CCol>
                        </React.Fragment>
                      )}
                    </React.Fragment>
                  )}
                  {CityCreate && (
                    <React.Fragment>
                      <CRow className={"column-align3"} sm={12} md={12} lg={12}>
                        <CCol md="3">
                          <CLabel className={"label-name-3"}>
                            City Name
                            <span className={"text-danger"}> *</span>
                          </CLabel>
                          <CInput
                            onKeyPress={(e) =>
                              FormValidation.value_Without_Number_Symbols(e)
                            }
                            id={"locationLibraryCityName"}
                            name={"CityName"}
                            value={formik.values.CityName}
                            onChange={formik.handleChange}
                            placeholder="City Name"
                            maxlength="60"
                            size="60"
                          />
                          {formik.errors.CityName ? (
                            <div className="text-danger">
                              {" "}
                              {formik.errors.CityName}
                            </div>
                          ) : null}
                        </CCol>

                        <CCol md="3">
                          <CLabel className={"label-name-3"}>
                            Abbreviation
                            <span className={"text-danger"}> *</span>
                          </CLabel>
                          <CInput
                            onKeyPress={(e) =>
                              FormValidation.value_Without_Number_Without_Symbols_Without_Space(
                                e
                              )
                            }
                            id={"locationLibraryCityAbbreviation"}
                            name={"Abbreviation3"}
                            value={formik.values.Abbreviation3}
                            onChange={formik.handleChange}
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
                            onKeyPress={(e) =>
                              FormValidation.value_Without_Number_Without_Symbols_Without_Space(
                                e
                              )
                            }
                            id={"locationLibraryCityCode"}
                            name={"Code3"}
                            value={formik.values.Code3}
                            onChange={formik.handleChange}
                            style={{ textTransform: "uppercase" }}
                            placeholder="Enter Code"
                            maxlength="5"
                            size="5"
                          />
                         
                        </CCol>
                        <CCol  md="3">
                          <CButton
                            shape={"pill"}
                            style={{ marginTop: "30px" }}
                            className={"saveBtn"}
                            onClick={City}
                            id={"locationLibraryCitySave"}
                          >
                            {passing !== "" ? "UPDATE" : "SAVE"}
                          </CButton>
                          <CButton
                            shape={"pill"}
                            style={{ marginTop: "30px", marginLeft: "20px" }}
                            className={"cancelBtn"}
                            onClick={CancelCity}
                            id={"locationLibraryCityCancel"}
                          >
                            CANCEL
                          </CButton>
                          {error !== "" ? <p>{error}</p> : null}
                        </CCol>
                      </CRow>
                    </React.Fragment>
                  )}
                    <CRow style={{marginTop:"40px", marginLeft:"1300px",position:"absolute" }}>
                    <CCol sm="3" lg="3" style={{ marginLeft: "10px" }}>
                      <CWidgetDropdown
                        style={{
                          width: "280px",
                          textAlign: "center",
                          fontSize: "30px",
                          float: "right",
                          height:"100px",
                          marginRight:"85px"
                        }}
                        color="gradient-info"
                        header=""
                        text=""
                      >
                        <span style={{ marginLeft: "-40px", fontSize: "24px",fontWeight:"700" }}>
                          District / City
                        </span>
                        <span
                          style={{ marginLeft: "-159px", marginTop: "30px" ,fontSize: "24px",fontWeight:"700" }}
                        >
                          2
                        </span>
                        <br />
                        <br />
                      
                      </CWidgetDropdown>
                    </CCol>
                  </CRow>
                
                </CRow>
                <CRow className={"row-alignment"}>
                  {AreaList && (
                    <React.Fragment>
                      <CCol className={"column-align"} md={4} lg={4}>
                        <CLabel className={"label-name-1"}>
                          Village / Area / Locality
                          <span className={"text-danger"}> *</span>
                        </CLabel>
                        <Select
                          placeholder="Select the Area Name"
                          id={"locationLibraryArea"}
                         
                          options={selectVillage}
                          components={{ MenuList: SelectMenuButtonarea }}

                        />
                      </CCol>

                      {/* {cityName.edit && (
                        <React.Fragment>
                          <CCol className={"column-align"} md={1} lg={1}>
                            <CButton
                              id={"locationLibraryAreaAdd"}
                              shape={"pill"}
                              style={{ marginTop: "30px" }}
                              className={"saveBtn"}
                              onClick={areaCreate}
                              disabled={
                                CountryCreate || StateCreate || CityCreate || StreetCreate
                              }
                            >
                              ADD
                            </CButton>
                          </CCol>
                        </React.Fragment>
                      )} */}
                      {areaName.edit && (
                        <React.Fragment>
                           <CCol md={3} lg={3} className={"column-align"} style={{marginLeft:"-20px"}}> 
                            <CButton
                              id={"locationLibraryAreaEdit"}
                              style={{ marginTop: "30px" }}
                              className={"btn btn-success"}
                              onClick={editArea}
                              disabled={
                                CountryCreate || StateCreate || CityCreate || StreetCreate
                              }
                            >
                              EDIT
                            </CButton>
                          </CCol>
                        </React.Fragment>
                      )}
                      {saveHide && (
                        <React.Fragment>
                          <CCol className={"column-align"} md="2">
                            <CButton
                              style={{ marginTop: "30px" }}
                              className={"saveBtn"}
                              id={"locationLibraryAreaSave"}
                            >
                              SAVE
                            </CButton>

                            <CButton
                              style={{ marginTop: "30px", marginLeft: "20px" }}
                              className={"cancelBtn"}
                              onClick={CancelEdit}
                              id={"locationLibraryAreaCancel"}
                            >
                              CANCEL
                            </CButton>
                            {error !== "" ? <p>{error}</p> : null}
                          </CCol>
                        </React.Fragment>
                      )}
                    </React.Fragment>
                  )}
                  {AreaCreate && (
                    <React.Fragment>
                      <CRow className={"column-align3"} sm={12} md={12} lg={12}>
                        <CCol md="2">
                          <CLabel className={"label-name-3"}>
                            Area Name
                            <span className={"text-danger"}> *</span>
                          </CLabel>
                          <CInput
                            onKeyPress={(e) =>
                              FormValidation.value_Without_Number_Symbols(e)
                            }
                            id={"locationLibraryAreaName"}
                            name={"AreaName"}
                            value={formik.values.AreaName}
                            onChange={formik.handleChange}
                            placeholder="Area Name"
                            maxlength="60"
                            size="60"
                          />
                         
                        </CCol>

                        <CCol md="2">
                          <CLabel className={"label-name-3"}>
                            Abbreviation
                            <span className={"text-danger"}> *</span>
                          </CLabel>
                          <CInput
                            onKeyPress={(e) =>
                              FormValidation.value_Without_Number_Without_Symbols_Without_Space(
                                e
                              )
                            }
                            id={"locationLibraryAreaAbbreviation"}
                            name={"Abbreviation4"}
                            value={formik.values.Abbreviation4}
                            onChange={formik.handleChange}
                            placeholder="Enter Abbreviation"
                            maxlength="5"
                            size="5"
                          />
                         
                        </CCol>
                        <CCol md="2">
                          <CLabel className={"label-name-3"}>
                            Code
                            <span className={"text-danger"}> *</span>
                          </CLabel>
                          <CInput
                            onKeyPress={(e) =>
                              FormValidation.value_Without_Number_Without_Symbols_Without_Space(
                                e
                              )
                            }
                            id={"locationLibraryAreaCode"}
                            name={"Code4"}
                            value={formik.values.Code4}
                            onChange={formik.handleChange}
                            style={{ textTransform: "uppercase" }}
                            placeholder="Enter Code"
                            maxlength="5"
                            size="5"
                          />
                         
                        </CCol>
             <CCol md="2">
             <CLabel className={"label-name-1"}>
                      Pincode
                      <span className={"text-danger"}> *</span>
                    </CLabel>
                    <CInput
                      onKeyPress={(e) => FormValidation.value_Only_Number(e)}
                      name={"Pincode"}
                      type={"text"}
                      id={"locationLibraryAreaPincode"}
                      onChange={formik.handleChange}
                      value={formik.values.Pincode}
                      placeholder="Enter Pincode"
                      autoComplete="none"
                      maxlength="6"
                      size="6"
                    />
             </CCol>
                        <CCol md="2">
                          <CButton
                            style={{ marginTop: "30px" }}
                            className={"saveBtn"}
                            onClick={Area}
                            id={"locationLibraryAreaSave"}
                          >
                            SAVE
                          </CButton>
                          <CButton
                            style={{ marginTop: "-50px", marginLeft: "80px" }}
                            className={"cancelBtn"}
                            onClick={CancelArea}
                            id={"locationLibraryAreaCancel"}
                          >
                            CANCEL
                          </CButton>
                          {error !== "" ? <p>{error}</p> : null}
                        </CCol>
                      </CRow>
                    </React.Fragment>
                  )}
                  <CRow style={{marginTop:"70px", marginLeft:"1300px",position:"absolute" }}>
                    <CCol sm="3" lg="3" style={{ marginLeft: "10px" }}>
                      <CWidgetDropdown
                        style={{
                          width: "280px",
                          textAlign: "center",
                          fontSize: "30px",
                          float: "right",
                          height:"100px",
                          marginRight:"85px"
                        }}
                        color="gradient-warning"  
                        header=""
                        text=""
                      >
                        <span style={{ marginLeft: "-40px", fontSize: "24px",fontWeight:"700" }}>
                          Village / Area
                        </span>
                        <span
                          style={{ marginLeft: "-169px", marginTop: "30px" ,fontSize: "24px",fontWeight:"700" }}
                        >
                          2
                        </span>
                        <br />
                        <br />
                      
                      </CWidgetDropdown>
                    </CCol>
                  </CRow>
                </CRow>
             

                <CRow className={"row-alignment"}>
                  {StreetList && (
                    <React.Fragment>
                      <CCol className={"column-align"} md={4} lg={4}>
                        <CLabel className={"label-name-1"}>
                          Street
                          <span className={"text-danger"}> *</span>
                        </CLabel>
                        <Select
                          placeholder="Select the Street Name"
                          id={"locationLibraryArea"}
                          // onChange={(e) => {
                          //   if (streetName.label) {
                          //     setStreetName({ ...e, edit: areaName.edit });
                          //   } else {
                          //     setStreetName({ ...e, edit: true });
                          //   }
                          // }}
                          // value={streetName.value ? streetName : null}
                          components={{ MenuList: SelectMenuButtonstreet }}
                          options={selectStreet}
                          // isDisabled={
                          //   CountryCreate || StateCreate || CityCreate || AreaCreate
                          // }
                        />
                      </CCol>

                      {/* {streetName.edit && (
                        <React.Fragment>
                          <CCol className={"column-align"} md={1} lg={1}>
                            <CButton
                              id={"locationLibrarystreetAdd"}
                              shape={"pill"}
                              style={{ marginTop: "30px" }}
                              className={"saveBtn"}
                              onClick={addStreet}
                              disabled={
                                CountryCreate || StateCreate || CityCreate || AreaCreate
                              }
                            >
                              ADD
                            </CButton>
                          </CCol>
                        </React.Fragment>
                      )} */}
                      {streetName.edit && (
                        <React.Fragment>
                          <CCol md={3} lg={3} className={"column-align"} style={{marginLeft:"-20px"}}> 
                            <CButton
                              id={"locationLibraryAreaEdit"}
                              style={{ marginTop: "30px" }}
                              className={"btn btn-success"}
                              onClick={addStreet}
                              disabled={
                                CountryCreate || StateCreate || CityCreate || AreaCreate
                              }
                            >
                              EDIT
                            </CButton>
                          </CCol>
                        </React.Fragment>
                      )}
                      {saveHide && (
                        <React.Fragment>
                           
                        </React.Fragment>
                      )}
                    </React.Fragment>
                    
                  )}
                  {StreetCreate && (
                    <React.Fragment>
                      <CRow className={"column-align3"} sm={12} md={12} lg={12}>
                        <CCol md="3">
                          <CLabel className={"label-name-3"}>
                            Street Name
                            <span className={"text-danger"}> *</span>
                          </CLabel>
                          <CInput
                            onKeyPress={(e) =>
                              FormValidation.value_Without_Number_Symbols(e)
                            }
                            id={"locationLibraryAreaName"}
                            name={"StreetName"}
                            value={formik.values.streetName}
                            onChange={formik.handleChange}
                            placeholder="Area Name"
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
                            onKeyPress={(e) =>
                              FormValidation.value_Without_Number_Without_Symbols_Without_Space(
                                e
                              )
                            }
                            id={"locationLibraryAreaAbbreviation"}
                            name={"Abbreviation4"}
                            value={formik.values.Abbreviation4}
                            onChange={formik.handleChange}
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
                            onKeyPress={(e) =>
                              FormValidation.value_Without_Number_Without_Symbols_Without_Space(
                                e
                              )
                            }
                            id={"locationLibraryAreaCode"}
                            name={"Code4"}
                            value={formik.values.Code4}
                            onChange={formik.handleChange}
                            style={{ textTransform: "uppercase" }}
                            placeholder="Enter Code"
                            maxlength="5"
                            size="5"
                          />
                          
                        </CCol>
                        <CCol md="2">
                          <CButton
                            style={{ marginTop: "30px" }}
                            className={"saveBtn"}
                            onClick={Area}
                            id={"locationLibraryAreaSave"}
                          >
                            SAVE
                          </CButton>
                          <CButton
                            style={{ marginTop: "-55px", marginLeft: "80px" }}
                            className={"cancelBtn"}
                            onClick={CancelArea}
                            id={"locationLibraryAreaCancel"}
                          >
                            CANCEL
                          </CButton>
                          {error !== "" ? <p>{error}</p> : null}
                        </CCol>
                      </CRow>
                    </React.Fragment>
                  )}

                  
                   <CRow style={{marginTop:"100px", marginLeft:"1300px",position:"absolute" }}>
                    <CCol sm="3" lg="3" style={{ marginLeft: "10px" }}>
                      <CWidgetDropdown
                        style={{
                          width: "280px",
                          textAlign: "center",
                          fontSize: "30px",
                          float: "right",
                          height:"100px",
                          marginRight:"85px"
                        }}
                        color="gradient-danger"
                        header=""
                        text=""
                      >
                        <span style={{ marginLeft: "-10px", fontSize: "24px",fontWeight:"700" }}>
                          Street
                        </span>
                        <span
                          style={{ marginLeft: "-129px", marginTop: "30px" ,fontSize: "24px",fontWeight:"700" }}
                        >
                          2
                        </span>
                        <br />
                        <br />
                      
                      </CWidgetDropdown>
                    </CCol>
                  </CRow>
                </CRow>
              </CCol>
            </CRow>

<CRow className={"row-alignment"}>
                  {DoorList && (
                    <React.Fragment>
                      <CCol className={"column-align"} md={4} lg={4} style={{marginLeft:"40px"}}>
                        <CLabel className={"label-name-1"}>
                          Door No.
                          <span className={"text-danger"}> *</span>
                        </CLabel>
                        <Select
                          placeholder="Select the Door No."
                          id={"locationLibraryArea"}
                          // onChange={(e) => {
                          //   if (doorName.label) {
                          //     setDoorName({ ...e, edit: streetName.edit });
                          //   } else {
                          //     setDoorName({ ...e, edit: true });
                          //   }
                          // }}
                          // value={doorName.value ? doorName : null}
                          components={{ MenuList: SelectMenuButtondoor }}
                          options={selectDoor}
                          // isDisabled={
                          //   CountryCreate || StateCreate || CityCreate
                          // }
                        />
                      </CCol>

                      {doorName.edit && (
                        <React.Fragment>
                          <CCol className={"column-align"} md={1} lg={1}>
                            <CButton
                              id={"locationLibraryAreaAdd"}
                              shape={"pill"}
                              style={{ marginTop: "30px",marginLeft:"22px" }}
                              className={"saveBtn"}
                              onClick={addDoor}
                              disabled={
                                CountryCreate || StateCreate || CityCreate
                              }
                            >
                              ADD
                            </CButton>
                          </CCol>
                        </React.Fragment>
                      )}
                      {doorName.edit && (
                        <React.Fragment>
                          <CCol md={3} lg={3} className={"column-align"} style={{marginLeft:"10px"}}> 
                          <CButton
                              style={{
                                marginTop: "30px",
                              }}
                              id={"locationLibraryStateEdit"}
                              className={"btn btn-success"}
                              onClick={editDoor}
                              disabled={
                                CountryCreate || CityCreate || AreaCreate
                              }
                            >
                              EDIT
                            </CButton>
                          </CCol>
                        </React.Fragment>
                      )}
                      {saveHide && (
                        <React.Fragment>
                           
                        </React.Fragment>
                      )}
                    </React.Fragment>
                    
                  )}
                  {DoorCreate && (
                    <React.Fragment>
                      <CRow className={"column-align3"} sm={12} md={12} lg={12}>
                        <CCol md="3">
                          <CLabel className={"label-name-3"}>
                            Door No.
                            <span className={"text-danger"}> *</span>
                          </CLabel>
                          <CInput
                            onKeyPress={(e) =>
                              FormValidation.value_Only_Number(e)
                            }
                            id={"locationLibraryAreaName"}
                            name={"StreetName"}
                            value={formik.values.streetName}
                            onChange={formik.handleChange}
                            placeholder=" Door No."
                            maxlength="10"
                            size="10"
                            style={{width:"300px"}}
                          />
                          
                        </CCol>
                       
                        <CCol md="2">
                        <CButton
                            shape={"pill"}
                            id={"locationLibraryStateSave"}
                            style={{ marginTop: "32px",marginLeft:"155px" ,marginBottom:"-2px"}}
                            className={"saveBtn"}
                            onClick={State}
                          >
                            {passing !== "" ? "UPDATE" : "SAVE"}
                          </CButton>
                          <CButton
                            style={{ marginTop: "-55px", marginLeft: "250px" }}
                            className={"cancelBtn"}
                            onClick={Canceldoor}
                            id={"locationLibraryAreaCancel"}
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
              style={{ padding: "1%", marginTop: "4.5%", marginLeft: "27px" }}
            >
              <CRow style={{marginLeft:"350px"}}>
              
              <CCol style={{ fontSize: "1.55rem" }} md={12} sm={12} lg={12}>
                <i
                  id={"locationLibraryDelete"}
                  style={{
                    position: "absolute",
                    top: "40px",
                    marginLeft: "350px",
                    marginBottom: "20px",
                    color: "black",
                  }}
                  className="fa fa-print"
                ></i>
              </CCol>
              <CCol style={{ fontSize: "1.55rem" }} md={12} sm={12} lg={12}>
                <i
                  id={"locationLibraryDelete"}
                  style={{
                    position: "absolute",
                    top: "40px",
                    marginLeft: "500px",
                    marginBottom: "910px",
                    color: "black",
                  }}
                  className="fa fa-share-alt"
                ></i>
              </CCol>
              </CRow>
              <CDataTable
                items={userData}
                fields={fields}
                columnFilter
                tableFilter
                tableLabel={"List of Locations"}
                itemsPerPageSelect
                itemsPerPage={5}
                hover
                sorter
                pagination
                scopedSlots={{
                  show_details: (item, index) => {
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
        </CCard>
        </div>
        </div>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default LocationLibrary;
