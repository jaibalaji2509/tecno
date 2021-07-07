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
// import { useFormik } from "formik";
// import * as yup from "yup";
import "./LocationLibrary.css";
import ReactTooltip from "react-tooltip";
import {
  getCountry,
  getState,
  getCity,
  getArea,
  // getAreaSchema,
  // createState,
  // createCity,
  // createArea,
  // updateState,
  // updateCity,
  // updateArea,
} from "../../../services/ApiService";
import Select, { components } from "react-select";
import { Dropdown, Menu } from "antd";
import 'antd/dist/antd.css';
import { CSVLink } from 'react-csv';
import * as XLSX from "xlsx";
import SheetJSFT from "../../../Tools/excelupload/SheetJSFT"
import { make_cols } from "../../../Tools/excelupload/MakeColumn"

function LocationLibrary(props) {
  const [excelupload, setExcelUpload] = React.useState({ file: {}, data: [], cols: [] });
  const [error, ] = useState("");
  // const [, setPassing] = useState("");
  const [, setArea] = useState([]);
  // const [, setAreas] = useState([]);
  const [selected, setSelected] = useState([]);
  const [selected1, setSelected1] = useState([]);
  const [selected2, setSelected2] = useState([]);
  const [selected3, setSelected3] = useState([]);
  const [selected4, setSelected4] = useState([]);
  const [villageHide, setVillageHide] = useState({ districtpanchayat: true, panchayatunion: false, area: false })
  const [, setCity] = useState([]);
  const [, setState] = useState([]);
  const [, setCountry] = useState([]);
  // const [, setAreaCreate] = useState(false);
  // const [, setStreetCreate] = useState(false);
  // const [, setDoorCreate] = useState(false);
  const [AreaList, ] = useState(true);
  const [StreetList, ] = useState(true);
  const [DoorList, ] = useState(true);
  // const [, setCityCreate] = useState(false);
  const [CityList, ] = useState(true);
  const [, setStateCreate] = useState(false);
  const [StateList, setStateList] = useState(true);
  const [countryName, ] = useState("");
  // const [, setAddHide] = useState(true);
  // const [, setSaveHide] = useState(false);
  const [stateName, ] = useState("");
  const [cityName, ] = useState("");
  const [,] = useState("");
  // const [areaName, setAreaName] = useState("");


  // const [states, setStates] = useState({
  //   statename: "",
  //   abbreviation: "",
  //   code: "",
  // });
  // const [citys,] = useState({
  //   cityName: "",
  //   abbreviation: "",
  //   code: "",
  // });
  // const [areas,] = useState({
  //   areaName: "",
  //   abbreviation: "",
  //   code: "",
  // });
  // const [stated, setStated] = useState({ value: "" });
  // useEffect(() => {
  //   setError("");
  //   setPassing("");
  // }, []);

  // const formik = useFormik({
  //   initialValues: {
  //     StateName: "",
  //     CountryName: "",
  //     CityName: "",
  //     AreaName: "",
  //     DoorNo: "",
  //     Abbreviation1: "",
  //     Code1: "",
  //     Abbreviation2: "",
  //     Code2: "",
  //     Abbreviation3: "",
  //     Code3: "",
  //     Abbreviation4: "",
  //     Code4: "",
  //     Pincode: "",
  //   },
  //   validationSchema: yup.object().shape({
  //     CountryName: yup.string().required(" Country Name is Required"),
  //     StateName: yup.string().required("State Name is Required"),
  //     CityName: yup.string().required("City Name is Required"),
  //     AreaName: yup.string().required("Area Name is Required"),
  //     Abbreviation1: yup
  //       .string()
  //       .required("Abbreviation is Required")
  //       .min(5, "Min 5 Character is Required"),
  //     Code1: yup
  //       .string()
  //       .required(" Code  is Required")
  //       .min(5, "Min 5 Character is Required")
  //       .max(5, "Max 5 Character is Required"),
  //     Abbreviation2: yup
  //       .string()
  //       .required("Abbreviation is Required")
  //       .min(5, "Min 5 Character is Required")
  //       .max(5, "Max 5 Character is Required"),
  //     Code2: yup
  //       .string()
  //       .required(" Code  is Required")
  //       .min(5, "Min 5 Character is Required")
  //       .max(5, "Max 5 Character is Required"),
  //     Abbreviation3: yup
  //       .string()
  //       .required("Abbreviation is Required")
  //       .min(5, "Min 5 Character is Required")
  //       .max(3, "Max 5 Character is Required"),
  //     Code3: yup
  //       .string()
  //       .required(" Code  is Required")
  //       .min(5, "Min 5 Character is Required")
  //       .max(5, "Max 5 Character is Required"),
  //     Abbreviation4: yup
  //       .string()
  //       .required("Abbreviation is Required")
  //       .min(5, "Min 5 Character is Required")
  //       .max(3, "Max 5 Character is Required"),
  //     Code4: yup
  //       .string()
  //       .required(" Code  is Required")
  //       .min(5, "Min 5 Character is Required")
  //       .max(5, "Max 5 Character is Required"),
  //     Pincode: yup.string().required(" Pincode  is Required"),
  //   }),
  //   onSubmit: (userInputData) => { },
  // });
  const [variable,] = useState([])

  const menusgrid = (item) => {
    return (
      variable.map((x, i) => (
        <tr key={i}>
          <td>{x.SNO}</td>
          <td>{x.MENU1}</td>
          <td>{x.NUMBER1}</td>
          <td>{x.MENU2}</td>
          <td>{x.NUMBER2}</td>
        </tr>
    ))
    )
  }


  const csvData = [
    ['firstname', 'lastname', 'email'],
    ['John', 'Doe', 'john.doe@xyz.com'],
    ['Jane', 'Doe', 'jane.doe@xyz.com']
  ];

  // const CancelCity = async () => {
  //   formik.values.Abbreviation3 = "";
  //   formik.values.Code3 = "";
  //   formik.values.CityName = "";
  //   setPassing("");
  //   await setCityList(true);
  //   await setCityCreate(false);
  // };

  // const Canceldoor = async () => {
  //   formik.values.DoorNo = "";
  //   setPassing("");
  //   await setDoorList(true);
  //   await setDoorCreate(false);
  // }

  const SelectMenuButtonstate = (props) => {
    return (
      <components.MenuList  {...props}>
        {props.children}
        <div style={{ marginTop: "-57px", minHeight: "80px" }} >
          <CLink className={"saveBtn"} onClick={handleClickstate} style={{ marginLeft: "300px" }}>Add</CLink>
          <CLink className={"saveBtn"} onClick={bulkhandleClickstate} style={{ marginLeft: "10px" }}>Bulk Upload </CLink>
        </div>
      </components.MenuList>
    )
  }
  const SelectMenuButtoncity = (props) => {
    return (
      <components.MenuList  {...props}>
        {props.children}
        <div style={{ marginTop: "-57px", minHeight: "80px" }} >
          <CLink className={"saveBtn"} onClick={handleClickcity} style={{ marginLeft: "300px" }}>Add</CLink>
          <CLink className={"saveBtn"} onClick={bulkhandleClickcity} style={{ marginLeft: "10px" }}>Bulk Upload </CLink>
        </div>
      </components.MenuList>
    )
  }
  const SelectMenuButtonarea = (props) => {
    return (
      <components.MenuList  {...props}>
        {props.children}
        <div style={{ marginTop: "-57px", minHeight: "80px" }} >
          <CLink className={"saveBtn"} onClick={handleClickarea} style={{ marginLeft: "300px" }}>Add</CLink>
          <CLink className={"saveBtn"} onClick={bulkhandleClickarea} style={{ marginLeft: "10px" }}>Bulk Upload </CLink>
        </div>
      </components.MenuList>
    )
  }
  const SelectMenuButtonstreet = (props) => {
    return (
      <components.MenuList  {...props}>
        {props.children}
        <div style={{ marginTop: "-57px", minHeight: "80px" }} >
          <CLink className={"saveBtn"} onClick={handleClickstreet} style={{ marginLeft: "300px" }}>Add</CLink>
          <CLink className={"saveBtn"} onClick={bulkhandleClickstreet} style={{ marginLeft: "10px" }}>Bulk Upload </CLink>
        </div>
      </components.MenuList>
    )
  }
  const SelectMenuButtondoor = (props) => {
    return (
      <components.MenuList  {...props}>
        {props.children}
        <div style={{ marginTop: "-57px", minHeight: "80px" }} >
          <CLink className={"saveBtn"} onClick={handleClickdoor} style={{ marginLeft: "300px" }}>Add</CLink>
          <CLink className={"saveBtn"} onClick={bulkhandleClickdoor} style={{ marginLeft: "10px" }}>Bulk Upload </CLink>
        </div>
      </components.MenuList>
    )
  }

  const [menu, setMenu] = useState({
    style: "menu2",
    menuStatus: "open",
    // style3: "menu2",
  });

  const [sideBar1, setSideBar1] = useState(false);
  const [sideBar2, setSideBar2] = useState(false);
  const [sideBar3, setSideBar3] = useState(false);
  const [sideBar4, setSideBar4] = useState(false);
  const [sideBar5, setSideBar5] = useState(false);

  const handleClickstate = () => {

    switch (menu.menuStatus) {
      case "open":
        default:
        setMenu({
          menuStatus: "close",
          style: "menu active1",

        });

        setTimeout(() => {
          setSideBar1(true);
        }, 1000);
        setSideBarup1(false)
        setSideBarup2(false)
        setSideBarup3(false)
        setSideBarup4(false)
        setSideBarup5(false)
        break;
      case "close":
        setMenu({
          menuStatus: "open",
          style: "menu active2",

        });
        setTimeout(() => {
          setSideBar1(false);
        }, 1000);
        break;
    }
  };
  const handleClickcity = () => {

    switch (menu.menuStatus) {
      case "open":
        default:
        setMenu({
          menuStatus: "close",
          style: "menu active1",

        });

        setTimeout(() => {
          setSideBar2(true);
        }, 1000);
        setSideBar1(false);
        setSideBarup1(false)
        setSideBarup2(false)
        setSideBarup3(false)
        setSideBarup4(false)
        setSideBarup5(false)

        break;
      case "close":
        setMenu({
          menuStatus: "open",
          style: "menu active2",

        });
        setTimeout(() => {
          setSideBar2(false);
        }, 1000);
        break;
    }
  };
  const handleClickarea = () => {

    switch (menu.menuStatus) {
      case "open":
        default:
        setMenu({
          menuStatus: "close",
          style: "menu active1",

        });

        setTimeout(() => {
          setSideBar3(true);
        }, 1000);
        setSideBar2(false);
        setSideBarup1(false)
        setSideBarup2(false)
        setSideBarup3(false)
        setSideBarup4(false)
        setSideBarup5(false)

        break;
      case "close":
        setMenu({
          menuStatus: "open",
          style: "menu active2",

        });
        setTimeout(() => {
          setSideBar3(false);
        }, 1000);
        break;
    }
  };
  const handleClickstreet = () => {

    switch (menu.menuStatus) {
      case "open":
        default:
        setMenu({
          menuStatus: "close",
          style: "menu active1",

        });

        setTimeout(() => {
          setSideBar4(true);
        }, 1000);
        setSideBar3(false);
        setSideBarup1(false)
        setSideBarup2(false)
        setSideBarup3(false)
        setSideBarup4(false)
        setSideBarup5(false)

        break;
      case "close":
        setMenu({
          menuStatus: "open",
          style: "menu active2",

        });
        setTimeout(() => {
          setSideBar4(false);
        }, 1000);
        break;
    }
  };
  const handleClickdoor = () => {

    switch (menu.menuStatus) {
      case "open":
        default:
        setMenu({
          menuStatus: "close",
          style: "menu active1",

        });

        setTimeout(() => {
          setSideBar5(true);
        }, 1000);
        setSideBar4(false);
        setSideBarup1(false)
        setSideBarup2(false)
        setSideBarup3(false)
        setSideBarup4(false)
        setSideBarup5(false)

        break;
      case "close":
        setMenu({
          menuStatus: "open",
          style: "menu active2",

        });
        setTimeout(() => {
          setSideBar5(false);
        }, 1000);
        break;
    }
  };
  const [, setSideBarup] = useState(false)
  const [sideBarup1, setSideBarup1] = useState(false)
  const [sideBarup2, setSideBarup2] = useState(false)
  const [sideBarup3, setSideBarup3] = useState(false)
  const [sideBarup4, setSideBarup4] = useState(false)
  const [sideBarup5, setSideBarup5] = useState(false)

  const bulkhandleClickstate = () => {

    switch (menu.menuStatus) {
      case "open":
        default:
        setMenu({
          menuStatus: "close",

          style1: "menu active1",

        });
        setSideBarup1(true);
        setSideBarup5(false)
        setSideBar1(false)
        setSideBar2(false)
        setSideBar3(false)
        setSideBar4(false)
        setSideBar5(false)

        break;
      case "close":
        setMenu({
          menuStatus: "open",
          style1: "menu active2",

        });
        setTimeout(() => {

          setSideBarup1(false);
        }, 1000);
        break;
    }
  };
  const bulkhandleClickcity = () => {

    switch (menu.menuStatus) {
      case "open":
        default:
        setMenu({
          menuStatus: "close",

          style1: "menu active1",

        });
        setSideBarup2(true);
        setSideBarup1(false)
        setSideBarup5(false)
        setSideBar1(false)
        setSideBar2(false)
        setSideBar3(false)
        setSideBar4(false)
        setSideBar5(false)

        break;
      case "close":
        setMenu({
          menuStatus: "open",
          style1: "menu active2",

        });
        setTimeout(() => {

          setSideBarup2(false);
        }, 1000);
        break;
    }
  }; const bulkhandleClickarea = () => {

    switch (menu.menuStatus) {
      case "open":
        default:
        setMenu({
          menuStatus: "close",

          style1: "menu active1",

        });
        setSideBarup3(true);
        setSideBarup2(false)
        setSideBarup5(false)
        setSideBar1(false)
        setSideBar2(false)
        setSideBar3(false)
        setSideBar4(false)
        setSideBar5(false)

        break;
      case "close":
        setMenu({
          menuStatus: "open",
          style1: "menu active2",

        });
        setTimeout(() => {

          setSideBarup3(false);
        }, 1000);
        break;
    }
  }; const bulkhandleClickstreet = () => {

    switch (menu.menuStatus) {
      case "open":
        default:
        setMenu({
          menuStatus: "close",

          style1: "menu active1",

        });
        setSideBarup4(true);
        setSideBarup3(false)
        setSideBarup5(false)
        setSideBar1(false)
        setSideBar2(false)
        setSideBar3(false)
        setSideBar4(false)
        setSideBar5(false)

        break;
      case "close":
        setMenu({
          menuStatus: "open",
          style1: "menu active2",

        });
        setTimeout(() => {

          setSideBarup4(false);
        }, 1000);
        break;
    }
  }; const bulkhandleClickdoor = () => {

    switch (menu.menuStatus) {
      case "open":
        default:
        setMenu({
          menuStatus: "close",

          style1: "menu active1",

        });
        setSideBarup5(true);
        setSideBarup4(false)
        setSideBar1(false)
        setSideBar2(false)
        setSideBar3(false)
        setSideBar4(false)
        setSideBar5(false)

        break;
      case "close":
        setMenu({
          menuStatus: "open",
          style1: "menu active2",

        });
        setTimeout(() => {

          setSideBarup5(false);
        }, 1000);
        break;
    }
  };
  const bulkhandleClick = () => {

    switch (menu.menuStatus) {
      case "open":
        default:
        setMenu({
          menuStatus: "close",

          style1: "menu active1",

        });
        setSideBarup(true);



        break;
      case "close":
        setMenu({
          menuStatus: "open",
          style1: "menu active2",

        });
        setTimeout(() => {

          setSideBarup(false);
        }, 1000);
        break;
    }
  };
  // const CancelState = async () => {
  //   setStated({ ...stated, StateName: "", Code2: "", Abbreviation2: "" });
  //   formik.values.Abbreviation2 = "";
  //   formik.values.Code2 = "";
  //   formik.values.StateName = "";
  //   setPassing("");
  //   await setStateList(true);
  //   await setStateCreate(false);
  // };

  // const CancelArea = async () => {
  //   setStated({
  //     ...stated,
  //     AreaName: "",
  //     Code4: "",
  //     Pincode: "",
  //     Abbreviation4: "",
  //   });
  //   formik.values.Abbreviation4 = "";
  //   formik.values.Code4 = "";
  //   formik.values.AreaName = "";
  //   formik.values.Pincode = "";
  //   setPassing("");
  //   await setAreaList(true);
  //   await setAreaCreate(false);
  // };



  // const State = async () => {
  //   if (passing === "") {
  //     var response;
  //     let body = formik.values;
  //     body = {
  //       statename: states.statename,
  //       abbreviation: states.abbreviation,
  //       code: states.code,
  //     };
  //     try {
  //       response = await createState(JSON.stringify(body));
  //       if (response.success === true) {
  //         response.State.label = response.State.stateName;
  //         toast.success(response.message, { autoClose: 1000 });
  //         setTimeout(() => {
  //           setStateCreate(false);
  //           setStateList(true);
  //         }, 1300);
  //         formik.handleReset({});
  //         setState([...stateSchema, response.State]);
  //         formik.values = {};

  //         return 0;
  //       }

  //       toast.error(response.error);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   } else {
  //     try {
  //       response = await updateState(
  //         formik.values.StateName,
  //         formik.values.Abbreviation2,
  //         formik.values.Code2,
  //         passing
  //       );
  //       getAllAreas();
  //       if (response.success === true) {
  //         toast.success(response.message, { autoClose: 1000 });
  //         setTimeout(() => {
  //           setStateCreate(false);
  //           setStateList(true);
  //         }, 1300);
  //         setStateName("");
  //         setCityName("");
  //         setAreaName("");
  //         setCity([]);
  //         setArea([]);
  //         getAllState();
  //         const elementsIndex = stateSchema.findIndex(
  //           (element) => element._id === passing
  //         );
  //         let newArray = [...stateSchema];
  //         response.updateOfficeType = {
  //           ...response.updateOfficeType,
  //           valu: response.updateOfficeType._id,
  //           label: response.updateOfficeType.stateNAme,
  //         };
  //         newArray[elementsIndex] = response.updateOfficeType;
  //         setState([...stateSchema, newArray]);
  //       }
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   }
  // };

  // const City = async () => {
  //   if (passing === "") {
  //     var response;
  //     let body = formik.values;
  //     body = {
  //       cityname: citys.cityname,
  //       abbreviation: citys.abbreviation,
  //       code: citys.code,
  //     };
  //     try {
  //       response = await createCity(JSON.stringify(body));
  //       if (response.success === true) {
  //         getAllAreas();
  //         toast.success(response.message, { autoClose: 1000 });
  //         setTimeout(() => {
  //           setCityCreate(false);
  //           setCityList(true);
  //         }, 1300);

  //         response.City = {
  //           ...response.City,
  //           value: response.City._id,
  //           label: response.City.cityName,
  //         };
  //         formik.handleReset({});
  //         setCity([...citySchema, response.City]);
  //         formik.values = {};

  //         return 0;
  //       }
  //       toast.error(response.error);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   } else {
  //     try {
  //       response = await updateCity(
  //         formik.values.CityName,
  //         formik.values.Abbreviation3,
  //         formik.values.Code3,
  //         passing
  //       );
  //       if (response.success === true) {
  //         toast.success(response.message, { autoClose: 1000 });
  //         setCityName("");
  //         setAreaName("");
  //         setArea([]);
  //         getAllCity();
  //         getAllAreas();
  //         setTimeout(() => {
  //           setCityCreate(false);
  //           setCityList(true);
  //         }, 1300);
  //         const elementsIndex = citySchema.findIndex(
  //           (element) => element._id === passing
  //         );
  //         let newArray = [...citySchema];
  //         response.updateOfficeType = {
  //           ...response.updateOfficeType,
  //           value: response.updateOfficeType._id,
  //           label: response.updateOfficeType.cityName,
  //         };
  //         newArray[elementsIndex] = response.updateOfficeType;
  //         setCity(newArray);
  //       }
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   }
  // };

  // const Area = async () => {
  //   if (passing === "") {
  //     var response;
  //     let body = formik.values;
  //     body = {
  //       areaname: areas.areaname,
  //       abbreviation: citys.abbreviation,
  //       code: citys.code,
  //     };
  //     try {
  //       response = await createArea(JSON.stringify(body));
  //       if (response.success === true) {
  //         formik.values = {};
  //         toast.success(response.message, { autoClose: 1000 });
  //         setTimeout(() => {
  //           setAreaCreate(false);
  //           setAreaList(true);
  //         }, 1300);
  //         formik.handleReset({});
  //         setArea("");
  //         getAllArea();
  //         getAllAreas();
  //         formik.values = {};
  //         return 0;
  //       }
  //       toast.error(response.error);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   } else {
  //     try {
  //       response = await updateArea(
  //         formik.values.AreaName,
  //         formik.values.Abbreviation4,
  //         formik.values.Code4,
  //         formik.values.Pincode,
  //         passing
  //       );
  //       if (response.success === true) {
  //         getAllAreas();
  //         formik.values.CountryName = "";
  //         formik.values.AreaName = "";
  //         formik.values.Abbreviation4 = "";
  //         formik.values.Code4 = "";
  //         formik.values.Pincode = "";
  //         setPassing("");
  //         toast.success(response.message);
  //         setTimeout(() => {
  //           setAreaCreate(false);
  //           setAreaList(true);
  //         }, 2000);
  //         setAreaName("");
  //         const elementsIndex = areasSchema.findIndex(
  //           (element) => element._id === passing
  //         );
  //         let newArray = [...areasSchema];
  //         response.updateOfficeType = {
  //           ...response.updateOfficeType,
  //           value: response.updateOfficeType._id,
  //           label: response.updateOfficeType.areaName,
  //         };
  //         newArray[elementsIndex] = response.updateOfficeType;
  //         setArea(newArray);
  //         getAllAreas();
  //       }
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   }
  // };
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
    } catch (e) { }
    return 0;
  };

  useEffect(() => {
    getAllArea();
    getAllCountry();
    getAllState();
    getAllCity();
  }, );

  // const getAllAreas = async () => {
  //   var response;
  //   try {
  //     response = await getAreaSchema();
  //     if (response) {
  //       if (response.Area) {
  //         response.Area.map((x, i) => {
  //           x.value = x._id;
  //           x.label = `${capitalize(x.state.stateName)}, ${capitalize(
  //             x.city.cityName
  //           )}, ${capitalize(x.areaName)}, ${x.pincode}`;
  //           x.cityName = x.city.cityName;
  //           x.stateName = x.state.stateName;
  //           x.countryName = x.country.countryName;
  //           x.sNo = i + 1;
  //           return 0;
  //         });
  //       }
  //       setAreas(response.Area);
  //     }
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  const capitalize = (x) => {
    let s = x.toLowerCase();
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  };
  const enableCreate = async () => {
    await setStateList(false);
    await setStateCreate(true);
  };


  // const addStreet = async () => {
  //   await setStreetList(false);
  //   await setStreetCreate(true);
  // }
  // const addDoor = async () => {
  //   await setDoorList(false);
  //   await setDoorCreate(true);
  // }


  // const [details, setDetails] = useState([]);
  // useEffect(() => {
  //   let val1 = formik.values.Code1;
  //   formik.values.Code1 = val1.toUpperCase();
  //   let val2 = formik.values.Code2;
  //   formik.values.Code2 = val2.toUpperCase();
  //   let val3 = formik.values.Code3;
  //   formik.values.Code3 = val3.toUpperCase();
  //   let val4 = formik.values.Code4;
  //   formik.values.Code4 = val4.toUpperCase();
  // }, [formik.values]);

  const selectState = [
    {
      span: (
        <CLink
          className={"saveBtn"}
          style={{ marginLeft: "200px" }}
        >
          Add{" "}
        </CLink>
      ),
     
    },
    { value: "TamilNadu", label: "TamilNadu" }]

  const selectCity = [
    {
      span: (
        <CLink
          className={"saveBtn"}
          style={{ marginLeft: "200px" }}
        >
          Add{" "}
        </CLink>
      ),
     
    },
    { value: "Chennai", label: "Chennai" }]

  const selectStreet = [
    {
      span: (
        <CLink
          className={"saveBtn"}
          style={{ marginLeft: "200px" }}
        >
          Add{" "}
        </CLink>
      ),
     
    },
    { value: "Pondy Baza", label: "Kuttu Road" }]

  const selectDoor = [
    {
      span: (
        <CLink
          className={"saveBtn"}
          style={{ marginLeft: "200px" }}
        >
          Add{" "}
        </CLink>
      ),
     
    },
    { value: "Pondy Baza", label: "119" }]

  const selectVillage = [
    {
      span: (
        <CLink
          className={"saveBtn"}
          style={{ marginLeft: "200px" }}
        >
          Add{" "}
        </CLink>
      ),
     
    },
    { value: "TNagar", label: "Vadapalani" }]

  const userData = [
    { sNo: "1", stateName: "TamlNadu", cityName: "Chennai", areaName: "Velachery", pincode: "600042", Street: "Yamuna Street", door: "302" },
    { sNo: "2", stateName: "TamlNadu", cityName: "Chennai", areaName: "Guindy", pincode: "600032", Street: "Inner Ring Road", door: "1/52" },
    { sNo: "3", stateName: "TamlNadu", cityName: "Chennai", areaName: "TNagar", pincode: "600017", Street: "Pondy Bazar", door: "110" },
    { sNo: "4", stateName: "TamlNadu", cityName: "Chennai", areaName: "Vadapalani", pincode: "600026", Street: "Kuturoad", door: "119" },
    { sNo: "5", stateName: "TamlNadu", cityName: "Chennai", areaName: "Vadapalani", pincode: "600026", Street: "Kamaraj Nagar", door: "3/240" },
  ]

  const fields = [
    {
      key: "sNo", _style: { width: "10%" }, sorter: false,
      filter: false,
    },
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

  const fields1 = [
    {
      key: "sNo", _style: { width: "10%" }, sorter: false,
      filter: false,
    },
    { key: "State", label: "State Name ", _style: { width: "20%" } },
    {
      label: "Action",
      key: "show_details3",

      _style: { width: "1%" },
      sorter: false,
      filter: false,
    },
  ]
  const fields2 = [
    {
      key: "sNo", _style: { width: "10%" }, sorter: false,
      filter: false,
    },
    { key: "city", label: "City Name ", _style: { width: "20%" } },
    {
      label: "Action",
      key: "show_details3",

      _style: { width: "1%" },
      sorter: false,
      filter: false,
    },
  ]
  const fields3 = [
    {
      key: "sNo", _style: { width: "10%" }, sorter: false,
      filter: false,
    },
    { key: "Area", label: "Area Name ", _style: { width: "20%" } },
    {
      label: "Action",
      key: "show_details3",

      _style: { width: "1%" },
      sorter: false,
      filter: false,
    },
  ]
  const fields4 = [
    {
      key: "sNo", _style: { width: "10%" }, sorter: false,
      filter: false,
    },
    { key: "Street", label: "Street Name ", _style: { width: "20%" } },
    {
      label: "Action",
      key: "show_details3",

      _style: { width: "1%" },
      sorter: false,
      filter: false,
    },
  ]

  const fields5 = [
    {
      key: "sNo", _style: { width: "10%" }, sorter: false,
      filter: false,
    },
    { key: "door", label: "Door No ", _style: { width: "20%" } },
    {
      label: "Action",
      key: "show_details3",

      _style: { width: "1%" },
      sorter: false,
      filter: false,
    },
  ]

  // const editState = async () => {
  //   await setStateList(false);
  //   await setStateCreate(true);
  //   formik.values.StateName = stateName.stateName;
  //   formik.values.Abbreviation2 = stateName.abbreviation;
  //   formik.values.Code2 = stateName.code;
  //   setPassing(stateName._id);
  // };

  // const editDoor = async () => {
  //   await setDoorList(false);
  //   await setDoorCreate(true);
  //   formik.values.StateName = stateName.stateName;
  //   formik.values.Abbreviation2 = stateName.abbreviation;
  //   formik.values.Code2 = stateName.code;
  //   setPassing(stateName._id);
  // };

  // const editCity = async () => {
  //   await setCityList(false);
  //   await setCityCreate(true);
  //   formik.values.CityName = cityName.cityName;
  //   formik.values.Abbreviation3 = cityName.abbreviation;
  //   formik.values.Code3 = cityName.code;
  //   setPassing(cityName._id);
  // };

  // const editArea = async () => {
  //   await setAreaList(false);
  //   await setAreaCreate(true);
  //   formik.values.AreaName = areaName.areaName;
  //   formik.values.Pincode = areaName.pincode;
  //   formik.values.Abbreviation4 = areaName.abbreviation;
  //   formik.values.Code4 = areaName.code;
  //   setPassing(areaName._id);
  // };

  // const CancelEdit = async () => {
  //   await setCountryName("");
  //   await setStateName("");
  //   await setCityName("");
  //   await setAreaName("");

  //   await setAddHide(true);
  //   await setSaveHide(false);
  // };


  // const statechangeHandler = (e) => {
  //   setStates({ ...states, [e.target.name]: e.target.value });
  // };
  const menus = (details) => {
    return (
      <Menu>
        <Menu.Item>
          <a href>Edit</a>
        </Menu.Item>
        <Menu.Item>
          <a href>Delete</a>
        </Menu.Item>
      </Menu>
    )
  }

  const [inputList, setInputList] = useState([{ name: "", abbreviation: "", code: "" }]);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };
  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1)
    setInputList(list);
  }


  const handleAddClick = (e) => {
    e.preventDefault()
    setInputList([...inputList, { name: "", abbreviation: "", code: "" }]);
  }
  // const [manual, setManual] = useState(false)




  const handleChange = (e) => {
    const files = e.target.files;
    if (files && files[0]) setExcelUpload({ file: files[0] });

  };

  const handleFile = () => {
    /* Boilerplate to set up FileReader */
    const reader = new FileReader();
    const rABS = !!reader.readAsBinaryString;

    reader.onload = (e) => {
      const bstr = e.target.result;
      const wb = XLSX.read(bstr, { type: rABS ? 'binary' : 'array', bookVBA: true });
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      const data = XLSX.utils.sheet_to_json(ws);
      setExcelUpload({ data: data, cols: make_cols(ws['!ref']) });
      setIsValue(true)
      console.log(JSON.stringify(data, null, 2));
      console.log(data, "data")
    };

    if (rABS) {
      reader.readAsBinaryString(excelupload.file);
    } else {
      reader.readAsArrayBuffer(excelupload.file);
    };
  }
  const [isValue, setIsValue] = useState(false)

  const changedistrictpanchayat = (e) => {
    setSelected(e)
    setVillageHide({ ...villageHide, districtpanchayat: true, panchayatunion: false, area: false, street: false, door: false })
  }
  const changePanchayatUnion = (e) => {
    setSelected1(e)
    setVillageHide({ ...villageHide, districtpanchayat: false, panchayatunion: true, area: false, street: false, door: false })
  }
  const changeArea = (e) => {
    setSelected2(e)
    setVillageHide({ ...villageHide, districtpanchayat: false, panchayatunion: false, area: true, street: false, door: false })
  }
  const changeStreet = (e) => {
    setSelected3(e)
    setVillageHide({ ...villageHide, districtpanchayat: false, panchayatunion: false, area: false, street: true, door: false })
  }
  const changeDoor = (e) => {
    setSelected4(e)
    setVillageHide({ ...villageHide, districtpanchayat: false, panchayatunion: false, area: false, street: false, door: true })
  }
  return (
    <div className={menu.style3}>
      {sideBar1 && (
        <div className={menu.style} style={{ marginLeft: "-108px" }}>

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
                  ADDING STATE NAME{" "}
                </span>
              </div>
            </CCol>
          </CRow>


          {inputList.map((x, i) => {
            return (

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
                    id={"stateName"}
                    name={"statename"}
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
                    id={"stateabrreviation"}
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
                    id={"statecode"}
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
                          marginTop: "35px",

                          fontSize: "1.25rem",
                          color: "#3273e9",
                        }}
                        onClick={handleAddClick}
                        class={"fa fa-plus"}

                      />
                    }
                  </CCol>

                  <CCol md="3">
                    {inputList.length !== 1 &&
                      <i
                        style={{
                          marginLeft: "0px",
                          marginTop: "35px",

                          fontSize: "1.25rem",
                          color: "black",
                        }}
                        onClick={() => handleRemoveClick(i)}
                        class={"fa fa-remove"}

                      />}
                  </CCol>
                </CRow>
              </CRow>


            )
          })}

          <CRow style={{ marginLeft: "250px" }}>

            <CCol md="3">
              <CButton
                style={{
                  marginLeft: "10px",
                  marginTop: "35px",

                }}
                onClick={enableCreate}
                className={"saveBtn"}

              > Save</CButton>
              <CButton
                shape={"pill"}
                id={"statecancel"}
                style={{ marginTop: "-59px", marginLeft: "90px" }}
                className={"cancelBtn"}
                onClick={handleClickstate}
              >
                CANCEL
              </CButton>
              {error !== "" ? <p>{error}</p> : null}
            </CCol>
          </CRow>


          <CButton
            style={{ position: "absolute", top: "15px", backgroundColor: "green", border: "1px solid green", right: "15px" }}
            className={"cancelBtn"}
            onClick={() => {
              handleClickstate();
            }}
          >
            Back
          </CButton>
        </div>

      )}

      <div className={menu.style3}>
        {sideBar2 && (
          <div className={menu.style} style={{ marginLeft: "-108px" }}>

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
                    ADDING CITY NAME{" "}
                  </span>
                </div>
              </CCol>
            </CRow>
            <CRow
              className={"row-alignment"}
              style={{ marginLeft: "5px", marginTop: "20px" }}
              sm={12}
              md={12}
              lg={12}
            >
              <CCol>
                <CLabel
                  style={{ position: "relative", marginLeft: "5px", fontSize: "23px", fontWeight: "650", cursor: "pointer" }}
                  className={"form-labels-6"}
                >
                  State:
                </CLabel>
                <span style={{ marginTop: "13px", marginLeft: "5px", }}>TamilNadu</span>
              </CCol>
            </CRow>

            {inputList.map((x, i) => {
              return (

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
                      id={"cityName"}
                      name={"statename"}
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
                      id={"cityabrreviation"}
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
                      id={"citycode"}
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
                            marginTop: "35px",

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
                            marginTop: "35px",

                            fontSize: "1.25rem",
                            color: "black",
                          }}
                          onClick={() => handleRemoveClick(i)}
                          class={"fa fa-remove"}

                        />}
                    </CCol>
                  </CRow>
                </CRow>
              )
            })}

            <CRow style={{ marginLeft: "250px" }}>

              <CCol md="3">
                <CButton
                  style={{
                    marginLeft: "10px",
                    marginTop: "35px",

                  }}
                  onClick={enableCreate}
                  className={"saveBtn"}

                > Save</CButton>
                <CButton
                  shape={"pill"}
                  id={"citycancel"}
                  style={{ marginTop: "-59px", marginLeft: "90px" }}
                  className={"cancelBtn"}
                  onClick={handleClickcity}
                >
                  CANCEL
                </CButton>
                {error !== "" ? <p>{error}</p> : null}
              </CCol>
            </CRow>


            <CButton
              style={{ position: "absolute", top: "15px", right: "15px", backgroundColor: "green", border: "1px solid green" }}
              className={"cancelBtn"}
              onClick={() => {
                handleClickcity();
              }}
            >
              Back
            </CButton>
          </div>

        )}
        <div className={menu.style3}>
          {sideBar3 && (
            <div className={menu.style} style={{ marginLeft: "-108px" }}>

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
                      ADDING AREA NAME{" "}
                    </span>
                  </div>
                </CCol>
              </CRow>
              <CRow
                className={"row-alignment"}
                style={{ marginLeft: "5px", marginTop: "20px" }}
                sm={12}
                md={12}
                lg={12}
              >
                <CCol>
                  <CLabel
                    style={{ position: "relative", marginLeft: "5px", fontSize: "23px", fontWeight: "650", cursor: "pointer" }}
                    className={"form-labels-6"}
                  >
                    State:
                  </CLabel>
                  <span style={{ marginTop: "13px", marginLeft: "5px", }}>TamilNadu</span>
                </CCol>
                <CCol>
                  <CLabel
                    style={{ position: "relative", marginLeft: "5px", fontSize: "23px", fontWeight: "650", cursor: "pointer" }}
                    className={"form-labels-6"}
                  >
                    District / City:
                  </CLabel>
                  <span style={{ marginTop: "13px", marginLeft: "5px", }}>Chennai</span>
                </CCol>
              </CRow>


              {inputList.map((x, i) => {
                return (

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
                        id={"areaName"}
                        name={"areaname"}
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
                        id={"areaabrreviation"}
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
                        id={"areacode"}
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
                        id={"areaabrreviation"}
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
                              marginTop: "35px",

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
                              marginTop: "35px",

                              fontSize: "1.25rem",
                              color: "black",
                            }}
                            onClick={() => handleRemoveClick(i)}
                            class={"fa fa-remove"}

                          />}
                      </CCol>
                    </CRow>
                  </CRow>
                )
              })}

              <CRow style={{ marginLeft: "250px" }}>

                <CCol md="3">
                  <CButton
                    style={{
                      marginLeft: "10px",
                      marginTop: "35px",

                    }}
                    onClick={enableCreate}
                    className={"saveBtn"}

                  > Save</CButton>
                  <CButton
                    shape={"pill"}
                    id={"areacancel"}
                    style={{ marginTop: "-59px", marginLeft: "90px" }}
                    className={"cancelBtn"}
                    onClick={handleClickarea}
                  >
                    CANCEL
                  </CButton>
                  {error !== "" ? <p>{error}</p> : null}
                </CCol>
              </CRow>


              <CButton
                style={{ position: "absolute", top: "15px", right: "15px", backgroundColor: "green", border: "1px solid green" }}
                className={"cancelBtn"}
                onClick={() => {
                  handleClickarea();
                }}
              >
                Back
              </CButton>
            </div>

          )}

          <div className={menu.style3}>
            {sideBar4 && (
              <div className={menu.style} style={{ marginLeft: "-108px" }}>

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
                        ADDING STREET NAME{" "}
                      </span>
                    </div>
                  </CCol>
                </CRow>
                <CRow
                  className={"row-alignment"}
                  style={{ marginLeft: "5px", marginTop: "20px" }}
                  sm={12}
                  md={12}
                  lg={12}
                >
                  <CCol>
                    <CLabel
                      style={{ position: "relative", marginLeft: "5px", fontSize: "23px", fontWeight: "650", cursor: "pointer" }}
                      className={"form-labels-6"}
                    >
                      State:
                    </CLabel>
                    <span style={{ marginTop: "13px", marginLeft: "5px", }}>TamilNadu</span>
                  </CCol>
                  <CCol>
                    <CLabel
                      style={{ position: "relative", marginLeft: "5px", fontSize: "23px", fontWeight: "650", cursor: "pointer" }}
                      className={"form-labels-6"}
                    >
                      Village / Area / Locality:
                    </CLabel>
                    <span style={{ marginTop: "13px", marginLeft: "5px", }}>Vadapalani</span>
                  </CCol>
                </CRow>
                <CRow
                  className={"row-alignment"}
                  style={{ marginLeft: "5px", marginTop: "5px" }}
                  sm={12}
                  md={12}
                  lg={12}
                >
                  <CCol>
                    <CLabel
                      style={{ position: "relative", marginLeft: "5px", fontSize: "23px", fontWeight: "650", cursor: "pointer" }}
                      className={"form-labels-6"}
                    >
                      District / City:
                    </CLabel>
                    <span style={{ marginTop: "13px", marginLeft: "5px", }}>Chennai</span>
                  </CCol>
                </CRow>

                {inputList.map((x, i) => {
                  return (
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
                          id={"streetName"}
                          name={"streetname"}
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
                          id={"stateabrreviation"}
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
                          id={"streetcode"}
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
                                marginTop: "35px",

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
                                marginTop: "35px",

                                fontSize: "1.25rem",
                                color: "black",
                              }}
                              onClick={() => handleRemoveClick(i)}
                              class={"fa fa-remove"}

                            />}
                        </CCol>
                      </CRow>
                    </CRow>
                  )
                })}

                <CRow style={{ marginLeft: "250px" }}>

                  <CCol md="3">
                    <CButton
                      style={{
                        marginLeft: "10px",
                        marginTop: "35px",

                      }}
                      onClick={enableCreate}
                      className={"saveBtn"}

                    > Save</CButton>
                    <CButton
                      shape={"pill"}
                      id={"streetcancel"}
                      style={{ marginTop: "-59px", marginLeft: "90px" }}
                      className={"cancelBtn"}
                      onClick={handleClickstreet}
                    >
                      CANCEL
                    </CButton>
                    {error !== "" ? <p>{error}</p> : null}
                  </CCol>
                </CRow>

                <CButton
                  style={{ position: "absolute", top: "15px", right: "15px", backgroundColor: "green", border: "1px solid green" }}
                  className={"cancelBtn"}
                  onClick={() => {
                    handleClickstreet();
                  }}
                >
                  Back
                </CButton>
              </div>
            )}
            <div className={menu.style3}>
              {sideBar5 && (
                <div className={menu.style} style={{ marginLeft: "-108px" }}>

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
                          ADDING DOOR NO.{" "}
                        </span>
                      </div>
                    </CCol>
                  </CRow>

                  <CRow
                    className={"row-alignment"}
                    style={{ marginLeft: "5px", marginTop: "20px" }}
                    sm={12}
                    md={12}
                    lg={12}
                  >
                    <CCol>
                      <CLabel
                        style={{ position: "relative", marginLeft: "5px", fontSize: "23px", fontWeight: "650", cursor: "pointer" }}
                        className={"form-labels-6"}
                      >
                        State:
                      </CLabel>
                      <span style={{ marginTop: "13px", marginLeft: "5px", }}>TamilNadu</span>
                    </CCol>
                    <CCol>
                      <CLabel
                        style={{ position: "relative", marginLeft: "5px", fontSize: "23px", fontWeight: "650", cursor: "pointer" }}
                        className={"form-labels-6"}
                      >
                        Village / Area / Locality:
                      </CLabel>
                      <span style={{ marginTop: "13px", marginLeft: "5px", }}>Vadapalani</span>
                    </CCol>
                  </CRow>
                  <CRow
                    className={"row-alignment"}
                    style={{ marginLeft: "5px", marginTop: "5px" }}
                    sm={12}
                    md={12}
                    lg={12}
                  >
                    <CCol>
                      <CLabel
                        style={{ position: "relative", marginLeft: "5px", fontSize: "23px", fontWeight: "650", cursor: "pointer" }}
                        className={"form-labels-6"}
                      >
                        District / City:
                      </CLabel>
                      <span style={{ marginTop: "13px", marginLeft: "5px", }}>Chennai</span>
                    </CCol>
                    <CCol>
                      <CLabel
                        style={{ position: "relative", marginLeft: "5px", fontSize: "23px", fontWeight: "650", cursor: "pointer" }}
                        className={"form-labels-6"}
                      >
                        Street:
                      </CLabel>
                      <span style={{ marginTop: "13px", marginLeft: "5px", }}>Kamaraj Nagar</span>
                    </CCol>
                  </CRow>

                  {inputList.map((x, i) => {
                    return (

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
                            id={"doorName"}
                            name={"doorname"}
                            placeholder="Enter Door no."
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
                                  marginTop: "35px",

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
                                  marginTop: "35px",

                                  fontSize: "1.25rem",
                                  color: "black",
                                }}
                                onClick={() => handleRemoveClick(i)}
                                class={"fa fa-remove"}

                              />}
                          </CCol>
                        </CRow>
                      </CRow>
                    )
                  })}
                  <CRow style={{ marginLeft: "250px" }}>
                    <CCol md="3">
                      <CButton
                        style={{
                          marginLeft: "10px",
                          marginTop: "35px",

                        }}
                        onClick={enableCreate}
                        className={"saveBtn"}

                      > Save</CButton>
                      <CButton
                        shape={"pill"}
                        id={"doorcancel"}
                        style={{ marginTop: "-59px", marginLeft: "90px" }}
                        className={"cancelBtn"}
                        onClick={handleClickdoor}
                      >
                        CANCEL
                      </CButton>
                      {error !== "" ? <p>{error}</p> : null}
                    </CCol>
                  </CRow>

                  <CButton
                    style={{ position: "absolute", top: "15px", right: "15px" }}
                    className={"cancelBtn"}
                    onClick={() => {
                      handleClickdoor();
                    }}
                  >
                    Back
                  </CButton>
                </div>
              )}

              {sideBarup1 && (
                <div className={menu.style1} style={{ marginLeft: "-108px" , overflow:"auto" }}>

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
                          ADDING STATE NAME{" "}
                        </span>
                      </div>
                    </CCol>
                  </CRow>

                  <CRow md="12"
                    style={{ marginLeft: "10px", marginTop: "15px" }}
                  >
                    <CCol md="6" id={"createRoleUploadTemplate"}
                      onClick={() => {
                        document.getElementById("uploadRoleTemplate").click();
                      }}>
                      <span style={{ fontSize: "20px", cursor: "pointer", color: "blue" }}>
                        <i className="fas fa-upload"></i>&nbsp;
                      </span>

                      <CLabel
                        style={{
                          position: "relative",
                          marginLeft: "20px",
                          cursor: "pointer",
                        }}
                        className={"form-labels-6"}
                      >
                        Upload
                      </CLabel>
                      <CInput
                        id={"uploadRoleTemplate"}
                        style={{ display: "none" }}
                        type={"file"}
                        onChange={handleChange}
                        accept={SheetJSFT}
                      />
                    </CCol>
                    <CCol md="6" style={{ marginLeft: "150px", marginTop: "-38px" }}>
                      <CSVLink data={csvData}>
                        <span style={{ fontSize: "20px", cursor: "pointer", color: "red" }}>
                          <i className="fas fa-download">
                          </i>&nbsp;
                        </span>

                        <CLabel
                          style={{
                            position: "relative",
                            marginLeft: "20px",
                            cursor: "pointer",
                            color: "black"
                          }}
                          className={"form-labels-6"}
                        >
                          Download
                        </CLabel>
                      </CSVLink>

                    </CCol>
                  </CRow>
                  <CRow>
                    <CCol md="3">
                      <CButton
                        style={{
                          marginLeft: "30px",
                          marginTop: "25px",
                        }}
                        onClick={handleFile}
                        className={"saveBtn"}
                      >
                        {" "}
                        Confirm
                      </CButton>


                      <CButton
                        style={{ position: "absolute", top: "-95px", right: "-660px", marginLeft: "30px", backgroundColor: "green", border: "1px solid green" }}
                        className={"cancelBtn"}
                        onClick={() => {
                          bulkhandleClick();
                        }}
                      >
                        Back
                      </CButton>
                    </CCol>
                  </CRow>



                  {isValue && excelupload.data !== 0 ? (
                    <div>
                      <CRow
                        style={{
                          padding: "4%",
                          marginTop: "1.5%",
                          marginLeft: "-45px",

                        }}
                      >
                        <CDataTable
                          items={excelupload.data}
                          fields={fields1}
                          columnFilter
                          tableFilter
                          tableLabel={"List of State"}
                          itemsPerPageSelect
                          itemsPerPage={5}
                          hover
                          sorter
                          pagination
                          scopedSlots={{
                            show_details3: (item, index) => {
                              return (
                                <td className="py-1">
                                  <CRow>
                                    <CCol style={{ fontSize: "1rem" }} md="16">

                                      <i
                                        style={{
                                          marginLeft: "35px",
                                          color: "black",
                                        }}
                                        className="fa fa-remove"
                                        bsStyle="overlay"
                                        onClick={() => menusgrid(item)}
                                      />
                                    </CCol>
                                  </CRow>
                                </td>
                              );
                            },
                            details: (item, index) => { },
                          }}
                        />
                      </CRow>
                      <CRow style={{ paddingLeft: "180px" }}>

                        <CCol md="3">
                          <CButton
                            type="file"
                            style={{
                              marginLeft: "450px",
                              marginTop: "35px",

                            }}
                            onClick={enableCreate}
                            className={"saveBtn"}

                          > Save</CButton>
                          <CButton
                            shape={"pill"}
                            id={"bulkstatecancel"}
                            style={{ marginTop: "-60px", marginLeft: "550px" }}
                            className={"cancelBtn"}
                            onClick={bulkhandleClick}
                          >
                            Cancel
                          </CButton>
                        </CCol>
                      </CRow>
                    </div>
                  ) : null}
                </div>
              )}
              {sideBarup2 && (
                <div className={menu.style1} style={{ marginLeft: "-108px" , overflow:"auto" }}>

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
                          ADDING CITY NAME{" "}
                        </span>
                      </div>
                    </CCol>
                  </CRow>

                  <CRow
                    className={"row-alignment"}
                    style={{ marginLeft: "5px", marginTop: "20px" }}
                    sm={12}
                    md={12}
                    lg={12}
                  >
                    <CCol>
                      <CLabel
                        style={{ position: "relative", marginLeft: "5px", fontSize: "23px", fontWeight: "650", cursor: "pointer" }}
                        className={"form-labels-6"}
                      >
                        State:
                      </CLabel>
                      <span style={{ marginTop: "13px", marginLeft: "5px", }}>TamilNadu</span>
                    </CCol>
                  </CRow>

                  <CRow md="12"
                    style={{ marginLeft: "10px", marginTop: "15px" }}

                  >
                    <CCol md="6" id={"createRoleUploadTemplate"}
                      onClick={() => {
                        document.getElementById("uploadRoleTemplate").click();
                      }}>
                      <span style={{ fontSize: "20px", cursor: "pointer", color: "blue" }}>
                        <i className="fas fa-upload"></i>&nbsp;
                      </span>

                      <CLabel
                        style={{
                          position: "relative",
                          marginLeft: "20px",
                          cursor: "pointer",
                        }}
                        className={"form-labels-6"}
                      >
                        Upload
                      </CLabel>
                      <CInput
                        id={"uploadRoleTemplate"}
                        style={{ display: "none" }}
                        type={"file"}
                        onChange={handleChange}
                        accept={SheetJSFT}
                      />
                    </CCol>
                    <CCol md="6" style={{ marginLeft: "150px", marginTop: "-38px" }}>
                      <CSVLink data={csvData}>
                        <span style={{ fontSize: "20px", cursor: "pointer", color: "red" }}>
                          <i className="fas fa-download">
                          </i>&nbsp;

                        </span>

                        <CLabel
                          style={{
                            position: "relative",
                            marginLeft: "20px",
                            cursor: "pointer",
                            color: "black"

                          }}
                          className={"form-labels-6"}
                        >
                          Download
                        </CLabel>
                      </CSVLink>

                    </CCol>
                  </CRow>
                  <CRow>
                    <CCol md="3">
                      <CButton
                        style={{
                          marginLeft: "30px",
                          marginTop: "25px",
                        }}
                        onClick={handleFile}
                        className={"saveBtn"}
                      >
                        {" "}
                        Confirm
                      </CButton>


                      <CButton
                        style={{ position: "absolute", top: "-160px", right: "-660px", marginLeft: "30px", backgroundColor: "green", border: "1px solid green" }}
                        className={"cancelBtn"}
                        onClick={() => {
                          bulkhandleClick();
                        }}
                      >
                        Back
                      </CButton>
                    </CCol>
                  </CRow>

                  {isValue && excelupload.data !== 0 ? (
                    <div>
                      <CRow
                        style={{
                          padding: "4%",
                          marginTop: "1.5%",
                          marginLeft: "-45px",

                        }}
                      >
                        <CDataTable
                          items={excelupload.data}
                          fields={fields2}
                          columnFilter
                          tableFilter
                          tableLabel={"List of City"}
                          itemsPerPageSelect
                          itemsPerPage={5}
                          hover
                          sorter
                          pagination
                          scopedSlots={{
                            show_details3: (item, index) => {
                              return (
                                <td className="py-1">
                                  <CRow>
                                    <CCol style={{ fontSize: "1rem" }} md="16">

                                      <i
                                        style={{
                                          marginLeft: "35px",
                                        }}
                                        className="fa fa-remove"
                                        bsStyle="overlay"
                                        onClick={() => menusgrid(item)}
                                      />
                                    </CCol>
                                  </CRow>
                                </td>
                              );
                            },
                            details: (item, index) => { },
                          }}
                        />
                      </CRow>
                      <CRow style={{ paddingLeft: "180px" }}>

                        <CCol md="3">
                          <CButton
                            type="file"
                            style={{
                              marginLeft: "450px",
                              marginTop: "35px",

                            }}
                            onClick={enableCreate}
                            className={"saveBtn"}

                          > Save</CButton>
                          <CButton
                            shape={"pill"}
                            id={"citycancel"}
                            style={{ marginTop: "-60px", marginLeft: "550px" }}
                            className={"cancelBtn"}
                            onClick={bulkhandleClick}
                          >
                            Cancel
                          </CButton>
                        </CCol>
                      </CRow>
                    </div>

                  ) : null}
                </div>
              )}
              {sideBarup3 && (
                <div className={menu.style1} style={{ marginLeft: "-108px", overflow:"auto" }}>

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
                          ADDING AREA NAME{" "}
                        </span>
                      </div>
                    </CCol>
                  </CRow>
                  <CRow
                    className={"row-alignment"}
                    style={{ marginLeft: "5px", marginTop: "20px" }}
                    sm={12}
                    md={12}
                    lg={12}
                  >
                    <CCol>
                      <CLabel
                        style={{ position: "relative", marginLeft: "5px", fontSize: "23px", fontWeight: "650", cursor: "pointer" }}
                        className={"form-labels-6"}
                      >
                        State:
                      </CLabel>
                      <span style={{ marginTop: "13px", marginLeft: "5px", }}>TamilNadu</span>
                    </CCol>
                    <CCol>
                      <CLabel
                        style={{ position: "relative", marginLeft: "5px", fontSize: "23px", fontWeight: "650", cursor: "pointer" }}
                        className={"form-labels-6"}
                      >
                        District / City:
                      </CLabel>
                      <span style={{ marginTop: "13px", marginLeft: "5px", }}>Chennai</span>
                    </CCol>
                  </CRow>

                  <CRow md="12"
                    style={{ marginLeft: "10px", marginTop: "15px" }}
                  >
                    <CCol md="6" id={"createRoleUploadTemplate"}
                      onClick={() => {
                        document.getElementById("uploadRoleTemplate").click();
                      }}>
                      <span style={{ fontSize: "20px", cursor: "pointer", color: "blue" }}>
                        <i className="fas fa-upload"></i>&nbsp;
                      </span>

                      <CLabel
                        style={{
                          position: "relative",
                          marginLeft: "20px",
                          cursor: "pointer",
                        }}
                        className={"form-labels-6"}
                      >
                        Upload
                      </CLabel>
                      <CInput
                        id={"uploadRoleTemplate"}
                        style={{ display: "none" }}
                        type={"file"}
                        onChange={handleChange}
                        accept={SheetJSFT}
                      />
                    </CCol>
                    <CCol md="6" style={{ marginLeft: "150px", marginTop: "-38px" }}>
                      <CSVLink data={csvData}>
                        <span style={{ fontSize: "20px", cursor: "pointer", color: "red" }}>
                          <i className="fas fa-download">
                          </i>&nbsp;
                        </span>

                        <CLabel
                          style={{
                            position: "relative",
                            marginLeft: "20px",
                            cursor: "pointer",
                            color: "black"
                          }}
                          className={"form-labels-6"}
                        >
                          Download
                        </CLabel>
                      </CSVLink>
                    </CCol>
                  </CRow>
                  <CRow>
                    <CCol md="3">
                      <CButton
                        style={{
                          marginLeft: "30px",
                          marginTop: "25px",
                        }}
                        onClick={handleFile}
                        className={"saveBtn"}
                      >
                        {" "}
                        Confirm
                      </CButton>

                      <CButton
                        style={{ position: "absolute", top: "-160px", right: "-660px", marginLeft: "30px", backgroundColor: "green", border: "1px solid green" }}
                        className={"cancelBtn"}
                        onClick={() => {
                          bulkhandleClick();
                        }}
                      >
                        Back
                      </CButton>
                    </CCol>
                  </CRow>

                  {isValue && excelupload.data !== 0 ? (
                    <div>
                      <CRow
                        style={{
                          padding: "4%",
                          marginTop: "1.5%",
                          marginLeft: "-45px",
                        }}
                      >
                        <CDataTable
                          items={excelupload.data}
                          fields={fields3}
                          columnFilter
                          tableFilter
                          tableLabel={"List of Area"}
                          itemsPerPageSelect
                          itemsPerPage={5}
                          hover
                          sorter
                          pagination
                          scopedSlots={{
                            show_details3: (item, index) => {
                              return (
                                <td className="py-1">
                                  <CRow>
                                    <CCol style={{ fontSize: "1rem" }} md="16">

                                      <i
                                        style={{
                                          marginLeft: "35px",

                                        }}
                                        className="fa fa-remove"
                                        bsStyle="overlay"
                                        onClick={() => menusgrid(item)}
                                      />
                                    </CCol>
                                  </CRow>
                                </td>
                              );
                            },
                            details: (item, index) => { },
                          }}
                        />
                      </CRow>
                      <CRow style={{ paddingLeft: "180px" }}>

                        <CCol md="3">
                          <CButton
                            type="file"
                            style={{
                              marginLeft: "450px",
                              marginTop: "35px",

                            }}
                            onClick={enableCreate}
                            className={"saveBtn"}

                          > Save</CButton>
                          <CButton
                            shape={"pill"}
                            id={"areacancel"}
                            style={{ marginTop: "-60px", marginLeft: "550px" }}
                            className={"cancelBtn"}
                            onClick={bulkhandleClick}
                          >
                            Cancel
                          </CButton>
                        </CCol>
                      </CRow>
                    </div>
                  ) : null}
                </div>
              )}
              {sideBarup4 && (
                <div className={menu.style1} style={{ marginLeft: "-108px" , overflow:"auto" }}
                >
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
                          ADDING STREET NAME{" "}
                        </span>
                      </div>
                    </CCol>
                  </CRow>
                  <CRow
                    className={"row-alignment"}
                    style={{ marginLeft: "5px", marginTop: "20px" }}
                    sm={12}
                    md={12}
                    lg={12}
                  >
                    <CCol>
                      <CLabel
                        style={{ position: "relative", marginLeft: "5px", fontSize: "23px", fontWeight: "650", cursor: "pointer" }}
                        className={"form-labels-6"}
                      >
                        State:
                      </CLabel>
                      <span style={{ marginTop: "13px", marginLeft: "5px", }}>TamilNadu</span>
                    </CCol>
                    <CCol>
                      <CLabel
                        style={{ position: "relative", marginLeft: "5px", fontSize: "23px", fontWeight: "650", cursor: "pointer" }}
                        className={"form-labels-6"}
                      >
                        Village / Area / Locality:
                      </CLabel>
                      <span style={{ marginTop: "13px", marginLeft: "5px", }}>Vadapalani</span>
                    </CCol>
                  </CRow>
                  <CRow
                    className={"row-alignment"}
                    style={{ marginLeft: "5px", marginTop: "5px" }}
                    sm={12}
                    md={12}
                    lg={12}
                  >
                    <CCol>
                      <CLabel
                        style={{ position: "relative", marginLeft: "5px", fontSize: "23px", fontWeight: "650", cursor: "pointer" }}
                        className={"form-labels-6"}
                      >
                        District / City:
                      </CLabel>
                      <span style={{ marginTop: "13px", marginLeft: "5px", }}>Chennai</span>
                    </CCol>
                    <CCol>
                    </CCol>
                  </CRow>
                  <CRow md="12"
                    style={{ marginLeft: "10px", marginTop: "15px" }}
                  >
                    <CCol md="6" id={"createRoleUploadTemplate"}
                      onClick={() => {
                        document.getElementById("uploadRoleTemplate").click();
                      }}>
                      <span style={{ fontSize: "20px", cursor: "pointer", color: "blue" }}>
                        <i className="fas fa-upload"></i>&nbsp;
                      </span>

                      <CLabel
                        style={{
                          position: "relative",
                          marginLeft: "20px",
                          cursor: "pointer",
                        }}
                        className={"form-labels-6"}
                      >
                        Upload
                      </CLabel>

                      <CInput
                        id={"uploadRoleTemplate"}
                        style={{ display: "none" }}
                        type={"file"}
                        onChange={handleChange}
                        accept={SheetJSFT}
                      />
                    </CCol>
                    <CCol md="6" style={{ marginLeft: "150px", marginTop: "-38px" }}>
                      <CSVLink data={csvData}>
                        <span style={{ fontSize: "20px", cursor: "pointer", color: "red" }}>
                          <i className="fas fa-download">
                          </i>&nbsp;
                        </span>
                        <CLabel
                          style={{
                            position: "relative",
                            marginLeft: "20px",
                            cursor: "pointer",
                            color: "black"
                          }}
                          className={"form-labels-6"}
                        >
                          Download
                        </CLabel>
                      </CSVLink>
                    </CCol>
                  </CRow>
                  <CRow>
                    <CCol md="3">
                      <CButton
                        style={{
                          marginLeft: "30px",
                          marginTop: "25px",
                        }}
                        onClick={handleFile}
                        className={"saveBtn"}
                      >
                        {" "}
                        Confirm
                      </CButton>

                      <CButton
                        style={{ position: "absolute", top: "-210px", right: "-660px", marginLeft: "10px", backgroundColor: "green", border: "1px solid green" }}
                        className={"cancelBtn"}
                        onClick={() => {
                          bulkhandleClick();
                        }}
                      >
                        Back
                      </CButton>
                    </CCol>
                  </CRow>

                  {isValue && excelupload.data !== 0 ? (
                    <div>
                      <CRow
                        style={{
                          padding: "4%",
                          marginTop: "1.5%",
                          marginLeft: "-45px",

                        }}
                      >
                        <CDataTable
                          items={excelupload.data}
                          fields={fields4}
                          columnFilter
                          tableFilter
                          tableLabel={"List of Street"}
                          itemsPerPageSelect
                          itemsPerPage={5}
                          hover
                          sorter
                          pagination
                          scopedSlots={{
                            show_details3: (item, index) => {
                              return (
                                <td className="py-1">
                                  <CRow>
                                    <CCol style={{ fontSize: "1rem" }} md="16">
                                      <i
                                        style={{
                                          marginLeft: "35px",
                                        }}
                                        className="fa fa-remove"
                                        bsStyle="overlay"
                                        onClick={() => menusgrid(item)}
                                      />
                                    </CCol>
                                  </CRow>
                                </td>
                              );
                            },
                            details: (item, index) => { },
                          }}
                        />
                      </CRow>
                      <CRow style={{ paddingLeft: "180px" }}>
                        <CCol md="3">
                          <CButton
                            type="file"
                            style={{
                              marginLeft: "450px",
                              marginTop: "35px",
                            }}
                            onClick={enableCreate}
                            className={"saveBtn"}
                          > Save</CButton>
                          <CButton
                            shape={"pill"}
                            id={"streetcancel"}
                            style={{ marginTop: "-60px", marginLeft: "550px" }}
                            className={"cancelBtn"}
                            onClick={bulkhandleClick}
                          >
                            Cancel
                          </CButton>
                        </CCol>
                      </CRow>
                    </div>
                  ) : null}
                </div>
              )}
              {sideBarup5 && (
                <div className={menu.style1} style={{ marginLeft: "-108px", overflow:"auto" }}>
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
                          ADDING DOOR NO.{" "}
                        </span>
                      </div>
                    </CCol>
                  </CRow>
                  <CRow
                    className={"row-alignment"}
                    style={{ marginLeft: "5px", marginTop: "20px" }}
                    sm={12}
                    md={12}
                    lg={12}
                  >
                    <CCol>
                      <CLabel
                        style={{ position: "relative", marginLeft: "5px", fontSize: "23px", fontWeight: "650", cursor: "pointer" }}
                        className={"form-labels-6"}
                      >
                        State:
                      </CLabel>
                      <span style={{ marginTop: "13px", marginLeft: "5px", }}>TamilNadu</span>
                    </CCol>
                    <CCol>
                      <CLabel
                        style={{ position: "relative", marginLeft: "5px", fontSize: "23px", fontWeight: "650", cursor: "pointer" }}
                        className={"form-labels-6"}
                      >
                        Village / Area / Locality:
                      </CLabel>
                      <span style={{ marginTop: "13px", marginLeft: "5px", }}>Vadapalani</span>
                    </CCol>
                  </CRow>
                  <CRow
                    className={"row-alignment"}
                    style={{ marginLeft: "5px", marginTop: "5px" }}
                    sm={12}
                    md={12}
                    lg={12}
                  >
                    <CCol>
                      <CLabel
                        style={{ position: "relative", marginLeft: "5px", fontSize: "23px", fontWeight: "650", cursor: "pointer" }}
                        className={"form-labels-6"}
                      >
                        District / City:
                      </CLabel>
                      <span style={{ marginTop: "13px", marginLeft: "5px", }}>Chennai</span>
                    </CCol>
                    <CCol>
                      <CLabel
                        style={{ position: "relative", marginLeft: "5px", fontSize: "23px", fontWeight: "650", cursor: "pointer" }}
                        className={"form-labels-6"}
                      >
                        Street:
                      </CLabel>
                      <span style={{ marginTop: "13px", marginLeft: "5px", }}>Kamaraj Nagar</span>
                    </CCol>
                  </CRow>

                  <CRow md="12"
                    style={{ marginLeft: "10px", marginTop: "15px" }}
                  >
                    <CCol md="6" id={"createRoleUploadTemplate"}
                      onClick={() => {
                        document.getElementById("uploadRoleTemplate").click();
                      }}>
                      <span style={{ fontSize: "20px", cursor: "pointer", color: "blue" }}>
                        <i className="fas fa-upload"></i>&nbsp;
                      </span>
                      <CLabel
                        style={{
                          position: "relative",
                          marginLeft: "20px",
                          cursor: "pointer",
                        }}
                        className={"form-labels-6"}
                      >
                        Upload
                      </CLabel>
                      <CInput
                        id={"uploadRoleTemplate"}
                        style={{ display: "none" }}
                        type={"file"}
                        onChange={handleChange}
                        accept={SheetJSFT}
                      />
                    </CCol>
                    <CCol md="6" style={{ marginLeft: "150px", marginTop: "-38px" }}>
                      <CSVLink data={csvData}>
                        <span style={{ fontSize: "20px", cursor: "pointer", color: "red" }}>
                          <i className="fas fa-download">
                          </i>&nbsp;
                        </span>
                        <CLabel
                          style={{
                            position: "relative",
                            marginLeft: "20px",
                            cursor: "pointer",
                            color: "black"
                          }}
                          className={"form-labels-6"}
                        >
                          Download
                        </CLabel>
                      </CSVLink>
                    </CCol>
                  </CRow>
                  <CRow>
                    <CCol md="3">
                      <CButton
                        style={{
                          marginLeft: "30px",
                          marginTop: "25px",
                        }}
                        onClick={handleFile}
                        className={"saveBtn"}
                      >
                        {" "}
                        Confirm
                      </CButton>
                      <CButton
                        style={{ position: "absolute", top: "-210px", right: "-660px", marginLeft: "10px", backgroundColor: "green", border: "1px solid green" }}
                        className={"cancelBtn"}
                        onClick={() => {
                          bulkhandleClick();
                        }}
                      >
                        Back
                      </CButton>
                    </CCol>
                  </CRow>
                  {isValue && excelupload.data !== 0 ? (
                    <div>
                      <CRow
                        style={{
                          padding: "4%",
                          marginTop: "1.5%",
                          marginLeft: "-45px",
                        }}
                      >
                        <CDataTable
                          items={excelupload.data}
                          fields={fields5}
                          columnFilter
                          tableFilter
                          tableLabel={"List of Door No."}
                          itemsPerPageSelect
                          itemsPerPage={5}
                          hover
                          sorter
                          pagination
                          scopedSlots={{
                            show_details3: (item, index) => {
                              return (
                                <td className="py-1">
                                  <CRow>
                                    <CCol style={{ fontSize: "1rem" }} md="16">
                                      <i
                                        style={{
                                          marginLeft: "35px",
                                        }}
                                        className="fa fa-remove"
                                        bsStyle="overlay"
                                        onClick={() => menusgrid(item)}
                                      />
                                    </CCol>
                                  </CRow>
                                </td>
                              );
                            },
                            details: (item, index) => { },
                          }}
                        />
                      </CRow>
                      <CRow style={{ paddingLeft: "180px" }}>
                        <CCol md="3">
                          <CButton
                            type="file"
                            style={{
                              marginLeft: "450px",
                              marginTop: "35px",
                            }}
                            onClick={enableCreate}
                            className={"saveBtn"}
                          > Save</CButton>
                          <CButton
                            shape={"pill"}
                            id={"doorcancel"}
                            style={{ marginTop: "-60px", marginLeft: "550px" }}
                            className={"cancelBtn"}
                            onClick={bulkhandleClick}
                          >
                            Cancel
                          </CButton>
                        </CCol>
                      </CRow>
                    </div>
                  ) : null}
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
                                    onChange={changedistrictpanchayat}
                                    options={selectState}
                                    components={{ MenuList: SelectMenuButtonstate }}
                                  />

                                  {villageHide.districtpanchayat && selected.length !== 0 ? (
                                    <div
                                      style={{
                                        width: 300,
                                        marginLeft: "446px",
                                        marginTop: "-40px",
                                        padding: 10,
                                      }}
                                    >
                                      <i
                                        className={"editIcon"}
                                        id={"locationlibrary"}
                                        class="fas fa-edit"
                                      />
                                      <div
                                        style={{
                                          width: 300,
                                          marginLeft: "26px",
                                          marginTop: "-30px",
                                          padding: 10,
                                          color: "red",
                                        }}
                                      >
                                        <i
                                          className={"editIcon"}
                                          id={"officeLocationEdit"}
                                          class="fas fa-trash"
                                        />
                                      </div>
                                    </div>
                                  ) : null}
                                </CCol>                               
                              </React.Fragment>
                            )}                            
                            <CRow style={{ marginLeft: "1300px", position: "absolute", marginTop: "10px" }}>
                              <CCol sm="6" lg="3" style={{ marginLeft: "-30px" }}>
                              <p data-tip="State">
                                <CWidgetDropdown
                                  style={{
                                    width: "280px",
                                    textAlign: "center",
                                    fontSize: "30px",
                                    float: "right",
                                    height: "100px",
                                    marginRight: "85px"
                                  }}

                                  header=""
                                  text=""
                                >
                                  <span style={{ marginLeft: "-30px", color: "blue", fontSize: "24px", fontWeight: "700" }}>
                                    State
                                  </span>
                                  <span
                                    style={{ marginLeft: "-155px", color: "blue", marginTop: "30px", fontSize: "24px", fontWeight: "700" }}
                                  >
                                    2
                                  </span>
                                  <br />
                                  <br />
                                </CWidgetDropdown>
                                </p>
                                <ReactTooltip/>
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
                                    onChange={changePanchayatUnion}
                                    options={selectCity}                                    
                                    components={{ MenuList: SelectMenuButtoncity }}

                                  />

                                  {villageHide.panchayatunion && selected1.length !== 0 ? (
                                    <div
                                      style={{
                                        width: 300,
                                        marginLeft: "446px",
                                        marginTop: "-40px",
                                        padding: 10,
                                      }}

                                    >
                                      <i
                                        className={"editIcon"}

                                        id={"locationlibrarycityedit"}
                                        class="fas fa-edit"
                                      />
                                      <div
                                        style={{
                                          width: 300,
                                          marginLeft: "26px",
                                          marginTop: "-30px",
                                          padding: 10,
                                          color: "red",
                                        }}
                                      >
                                        <i
                                          className={"editIcon"}

                                          id={"locationlibrarycitydelete"}
                                          class="fas fa-trash"
                                        />
                                      </div>
                                    </div>
                                  ) : null}
                                </CCol>
                              </React.Fragment>
                            )}                            
                            <CRow style={{ marginTop: "40px", marginLeft: "1300px", position: "absolute" }}>
                              <CCol sm="3" lg="3" style={{ marginLeft: "-30px" }}>
                              <p data-tip="District / City">
                                <CWidgetDropdown
                                  style={{
                                    width: "280px",
                                    textAlign: "center",
                                    fontSize: "30px",
                                    float: "right",
                                    height: "100px",
                                    marginRight: "85px"
                                  }}

                                  header=""
                                  text=""
                                >
                                  <span style={{ marginLeft: "-70px", color: "DodgerBlue", fontSize: "24px", fontWeight: "700" }}>
                                    District / City
                                  </span>
                                  <span
                                    style={{ marginLeft: "-185px", color: "DodgerBlue", marginTop: "30px", fontSize: "24px", fontWeight: "700" }}
                                  >
                                    2
                                  </span>
                                  <br />
                                  <br />
                                </CWidgetDropdown>
                                </p>
                                <ReactTooltip/>
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
                                    onChange={changeArea}
                                    options={selectVillage}
                                    components={{ MenuList: SelectMenuButtonarea }}
                                  />
                                  {villageHide.area && selected2.length !== 0 ? (
                                    <div
                                      style={{
                                        width: 300,
                                        marginLeft: "446px",
                                        marginTop: "-40px",
                                        padding: 10,
                                      }}
                                    >
                                      <i
                                        className={"editIcon"}
                                        id={"locationLibraryAreaEdit"}
                                        class="fas fa-edit"
                                      />
                                      <div
                                        style={{
                                          width: 300,
                                          marginLeft: "26px",
                                          marginTop: "-30px",
                                          padding: 10,
                                          color: "red",
                                        }}
                                      >
                                        <i
                                          className={"editIcon"}

                                          id={"locationLibraryAreadelete"}
                                          class="fas fa-trash"
                                        />
                                      </div>
                                    </div>
                                  ) : null}
                                </CCol>                            
                              </React.Fragment>
                            )}                            
                            <CRow style={{ marginTop: "70px", marginLeft: "1300px", position: "absolute" }}>
                              <CCol sm="3" lg="3" style={{ marginLeft: "-30px" }}>
                              <p data-tip="Village / Area">
                                <CWidgetDropdown
                                  style={{
                                    width: "280px",
                                    textAlign: "center",
                                    fontSize: "30px",
                                    float: "right",
                                    height: "100px",
                                    marginRight: "85px"
                                  }}
                                  header=""
                                  text=""
                                >
                                  <span style={{ marginLeft: "-70px", color: "Orange", fontSize: "24px", fontWeight: "700" }}>
                                    Village / Area
                                  </span>
                                  <span
                                    style={{ marginLeft: "-190px", color: "Orange", marginTop: "30px", fontSize: "24px", fontWeight: "700" }}
                                  >
                                    2
                                  </span>
                                  <br />
                                  <br />
                                </CWidgetDropdown>
                                </p>
                                <ReactTooltip/>
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
                                    id={"locationLibraryStreet"}                                   
                                    onChange={changeStreet}
                                    components={{ MenuList: SelectMenuButtonstreet }}
                                    options={selectStreet}                                  
                                  />
                                  {villageHide.street && selected3.length !== 0 ? (
                                    <div
                                      style={{
                                        width: 300,
                                        marginLeft: "446px",
                                        marginTop: "-40px",
                                        padding: 10,
                                      }}

                                    >
                                      <i
                                        className={"editIcon"}

                                        id={"locationLibraryStreetedit"}
                                        class="fas fa-edit"
                                      />
                                      <div
                                        style={{
                                          width: 300,
                                          marginLeft: "26px",
                                          marginTop: "-30px",
                                          padding: 10,
                                          color: "red",
                                        }}
                                      >
                                        <i
                                          className={"editIcon"}

                                          id={"locationLibraryStreetdelete"}
                                          class="fas fa-trash"
                                        />
                                      </div>
                                    </div>
                                  ) : null}
                                </CCol>                               
                              </React.Fragment>
                            )}                            
                            <CRow style={{ marginTop: "100px", marginLeft: "1300px", position: "absolute" }}>
                              <CCol sm="3" lg="3" style={{ marginLeft: "-30px" }}>
                              <p data-tip="Street">
                                <CWidgetDropdown
                                  style={{
                                    width: "280px",
                                    textAlign: "center",
                                    fontSize: "30px",
                                    float: "right",
                                    height: "100px",
                                    marginRight: "85px"
                                  }}
                                  header=""
                                  text=""
                                >
                                  <span style={{ marginLeft: "-40px", color: "red", fontSize: "24px", fontWeight: "700" }}>
                                    Street
                                  </span>
                                  <span
                                    style={{ marginLeft: "-157px", color: "red", marginTop: "30px", fontSize: "24px", fontWeight: "700" }}
                                  >
                                    2
                                  </span>
                                  <br />
                                  <br />
                                </CWidgetDropdown>
                                </p>
                                <ReactTooltip/>
                              </CCol>
                            </CRow>
                          </CRow>
                          <CRow className={"row-alignment"}>
                            {DoorList && (
                              <React.Fragment>
                                <CCol className={"column-align"} md={4} lg={4} style={{ marginLeft: "50px", }}>
                                  <CLabel className={"label-name-1"}>
                                    Door No.
                                    <span className={"text-danger"}> *</span>
                                  </CLabel>
                                  <Select
                                    placeholder="Select the Door No."
                                    id={"locationLibrarydoor"}
                                    onChange={changeDoor}
                                    components={{ MenuList: SelectMenuButtondoor }}
                                    options={selectDoor}                                
                                  />
                                  {villageHide.door && selected4.length !== 0 ? (
                                    <div
                                      style={{
                                        width: 300,
                                        marginLeft: "446px",
                                        marginTop: "-40px",
                                        padding: 10,
                                      }}
                                    >
                                      <i
                                        className={"editIcon"}

                                        id={"locationLibrarydooredit"}
                                        class="fas fa-edit"
                                      />
                                      <div
                                        style={{
                                          width: 300,
                                          marginLeft: "26px",
                                          marginTop: "-30px",
                                          padding: 10,
                                          color: "red",
                                        }}
                                      >
                                        <i
                                          className={"editIcon"}

                                          id={"locationLibrarydoordelete"}
                                          class="fas fa-trash"
                                        />
                                      </div>
                                    </div>
                                  ) : null}
                                </CCol>                               
                              </React.Fragment>
                            )}                            
                          </CRow>
                        </CCol>
                      </CRow>

                      <CRow
                        style={{ padding: "1%", marginTop: "-1.5%", marginLeft: "27px" }}
                      >
                        <CRow style={{ marginLeft: "450px" }}>
                          <div >
                            <CCol style={{ fontSize: "1.55rem" }} md={12} sm={12} lg={12}>
                              <p data-tip="print">
                                <i
                                  id="locationLibrarypirnt"
                                  style={{
                                    position: "absolute",
                                    top: "74px",
                                    marginLeft: "470px",
                                    marginBottom: "20px",
                                    color: "black",
                                  }}
                                  className="fa fa-print"
                                >
                                </i>
                              </p>
                              <ReactTooltip />
                              {/* </Tippy> */}
                            </CCol>
                          </div>
                          <CCol style={{ fontSize: "1.55rem" }} md={12} sm={12} lg={12}>
                            <p data-tip="share">
                              <i
                                id={"locationLibraryshare"}
                                style={{
                                  position: "absolute",
                                  top: "74px",
                                  marginLeft: "560px",
                                  marginBottom: "910px",
                                  color: "black",
                                }}
                                className="fa fa-share-alt"
                              ></i>
                            </p>
                            <ReactTooltip />
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
                                        <a href
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
                            details: (item, index) => { },
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
