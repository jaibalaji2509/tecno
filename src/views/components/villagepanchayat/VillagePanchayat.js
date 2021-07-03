import {
  CButton,
  CCard,
  CCol,
  CInput,
  CLink,
  CLabel,
  CRow,
} from "@coreui/react";
import React, { useState, useEffect } from "react";
import Select, { components } from "react-select";
import CDataTable from "../../CoreComponents/table/CDataTable";
import { saveCreateCorporation } from "../../../services/ApiService";
import { toast } from "react-toastify";
import { Dropdown, Menu } from "antd";
import "antd/dist/antd.css";
import "./VillagePanchayat.css";
import { CSVLink, CSVDownload } from "react-csv";

import * as XLSX from "xlsx";
import "./VillagePanchayat.css";
import SheetJSFT from "../../../Tools/excelupload/SheetJSFT";
import { make_cols } from "../../../Tools/excelupload/MakeColumn";

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
  const [excelupload, setExcelUpload] = React.useState({
    file: {},
    data: [],
    cols: [],
  });

  const [municipalList, setMunicipalList] = useState(true);
  const [MunicipalCreate, setmunicipalCreate] = useState(false);
  const [selected, setSelected] = useState([]);
  const [selected1, setSelected1] = useState([]);
  const [selected2, setSelected2] = useState([]);
  const [selected3, setSelected3] = useState([]);
  const [villageHide, setVillageHide] = useState({ districtpanchayat: true, panchayatunion: false })
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

  const select = [

    {
      span: (
        <CLink
          className={"saveBtn"}
          onClick={handleClickdistrict}
          style={{ marginLeft: "200px" }}
        >
          Add{" "}
        </CLink>
      ),
      span: (
        <CLink
          className={"saveBtn"}
          onClick={handleClickdistrict}
          style={{ marginLeft: "200px" }}
        >
          Add{" "}
        </CLink>
      ),
    },
    { value: "tamil", label: "Tamilnadu", id: "1" },
    { value: "Chengalpattu", label: "Chengalpattu", id: "2" },
    { value: "Chunampedu", label: "Chunampedu", id: "3" },
    { value: "Vanniyallur", label: "Vanniyallur" },
    { value: "Agaem", label: "Agaram kuturoad" },
    { value: "porpanthel", label: "porpanthal" },
    { value: "5", label: "018" },
    { value: "5", label: "019" },
  ];
  const userData = [
    // {
    //   SNo: "1.",
    //   Street: "Agaram kuturoad",
    //   Ward: "0019",
    //   by: "Jai Balaji",
    //   on: "10/06/2021",
    // },
    // {
    //   SNo: "2.",
    //   Street: "Achari street",
    //   Ward: "0019",
    //   by: "Jai Balaji",
    //   on: "10/06/2021",
    // },
    // {
    //   SNo: "3.",
    //   Street: "Sathya Sai Nagar",
    //   Ward: "0019",
    //   by: "Jai Balaji",
    //   on: "10/06/2021",
    // },
    // {
    //   SNo: "4.",
    //   Street: "Agathiyar Avenue",
    //   Ward: "0019",
    //   by: "Jai Balaji",
    //   on: "10/06/2021",
    // },
    // {
    //   SNo: "5.",
    //   Street: "Santhosapuram street",
    //   Ward: "0019",
    //   by: "Jai Balaji",
    //   on: "10/06/2021",
    // },
  ];
  const userData1 = [
    {
      _id: "00001",
      SNo: "1.",
      DistrictPanchayat: "Chennai",
    },
    {
      _id: "00002",
      SNo: "2.",
      DistrictPanchayat: "Salem",
    },
    {
      _id: "00003",
      SNo: "3.",
      DistrictPanchayat: "Madurai",
    },
    {
      _id: "00004",
      SNo: "4.",
      DistrictPanchayat: "Trichy",
    },
    {
      _id: "00005",
      SNo: "5.",
      DistrictPanchayat: "Thiruvarur",
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

  const fieldss1 = [
    {
      key: "SNO",
      label: "S.NO",
      _style: { width: "1%" },
      sorter: false,
      filter: false,
    },

    { key: "MENU1", label: "District Panchayat", _style: { width: "1%" } },
    {
      key: "show_details3",
      label: "Action",
      _style: { width: "1%" },

      sorter: false,
      filter: false,
    },
  ];
  const fields2 = [
    {
      key: "SNO",
      label: "S.NO",
      _style: { width: "1%" },
      sorter: false,
      filter: false,
    },

    { key: "MENU2", label: "Panchayat Union", _style: { width: "1%" } },
    {
      key: "show_details3",
      label: "Action",
      _style: { width: "1%" },

      sorter: false,
      filter: false,
    },
  ];
  const fields3 = [
    {
      key: "SNO",
      label: "S.NO",
      _style: { width: "1%" },
      sorter: false,
      filter: false,
    },

    { key: "MENU3", label: "Village Panchayat", _style: { width: "1%" } },
    {
      key: "show_details3",
      label: "Action",
      _style: { width: "1%" },

      sorter: false,
      filter: false,
    },
  ];
  const fields4 = [
    {
      key: "SNO",
      label: "S.NO",
      _style: { width: "1%" },
      sorter: false,
      filter: false,
    },

    { key: "MENU4", label: "Ward Number", _style: { width: "1%" } },
    {
      key: "show_details3",
      label: "Action",
      _style: { width: "1%" },

      sorter: false,
      filter: false,
    },
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

  const enableCreate = async () => {
    await setMunicipalList(false);
    await setmunicipalCreate(true);
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

  const csvData = [
    ["firstname", "lastname", "email"],
    ["John", "Doe", "john.doe@xyz.com"],
    ["Jane", "Doe", "jane.doe@xyz.com"],
  ];
  const [variable, setVariable] = useState([]);

  const menus = (details) => {
    return (
      <Menu>
        <Menu.Item>
          <a>Edit</a>
        </Menu.Item>
        <Menu.Item>
          <a>Delete</a>
        </Menu.Item>
      </Menu>
    );
  };
  const [menu, setMenu] = useState({
    style: "menu2",
    style1: "menu1",
    menuStatus: "open",

    style3: "menu2",
  });
  const SelectMenuButtondistrict = (props) => {
    return (
      <components.MenuList {...props}>
        {props.children}
        <div
          style={{
            marginTop: "-325px",
            marginBottom: "-50px",
            minHeight: "300px",
          }}
        >
          <CLink
            className={"saveBtn"}
            onClick={handleClickdistrict}
            style={{ marginLeft: "200px" }}
          >
            Add{" "}
          </CLink>
          <CLink
            className={"saveBtn"}
            onClick={bulkhandleClickdistrict}
            style={{ marginLeft: "50px" }}
          >
            Bulk Upload{" "}
          </CLink>
        </div>
      </components.MenuList>
    );
  };
  const SelectMenuButtonpanchayat = (props) => {
    return (
      <components.MenuList {...props}>
        {props.children}
        <div
          style={{
            marginTop: "-133px",
            marginBottom: "-50px",
            minHeight: "500px",
          }}
        >
          <CLink
            className={"saveBtn"}
            onClick={handleClickpanchayat}
            style={{ marginLeft: "200px" }}
          >
            Add{" "}
          </CLink>
          <CLink
            className={"saveBtn"}
            onClick={bulkhandleClickpanchayat}
            style={{ marginLeft: "50px" }}
          >
            Bulk Upload{" "}
          </CLink>
        </div>
      </components.MenuList>
    );
  };
  const SelectMenuButtonvillage = (props) => {
    return (
      <components.MenuList {...props}>
        {props.children}
        <div
          style={{
            marginTop: "-325px",
            marginBottom: "-50px",
            minHeight: "300px",
          }}
        >
          <CLink
            className={"saveBtn"}
            onClick={handleClickvillage}
            style={{ marginLeft: "200px" }}
          >
            Add{" "}
          </CLink>
          <CLink
            className={"saveBtn"}
            onClick={bulkhandleClickvillage}
            style={{ marginLeft: "50px" }}
          >
            Bulk Upload{" "}
          </CLink>
        </div>
      </components.MenuList>
    );
  };
  const SelectMenuButtonward = (props) => {
    return (
      <components.MenuList {...props}>
        {props.children}
        <div
          style={{
            marginTop: "-325px",
            marginBottom: "-50px",
            minHeight: "300px",
          }}
        >
          <CLink
            className={"saveBtn"}
            onClick={handleClickward}
            style={{ marginLeft: "200px" }}
          >
            Add{" "}
          </CLink>
          <CLink
            className={"saveBtn"}
            onClick={bulkhandleClickward}
            style={{ marginLeft: "50px" }}
          >
            Bulk Upload{" "}
          </CLink>
        </div>
      </components.MenuList>
    );
  };
  const [sideBar1, setSideBar1] = useState(false);
  const [sideBar2, setSideBar2] = useState(false);
  const [sideBar3, setSideBar3] = useState(false);
  const [sideBar4, setSideBar4] = useState(false);
  const handleClickdistrict = () => {

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
        setSideBarup1(false)
        setSideBarup2(false)
        setSideBarup3(false)
        setSideBarup4(false)
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
  const handleClickpanchayat = () => {
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
        setSideBar1(false)
        setSideBarup1(false)
        setSideBarup2(false)
        setSideBarup3(false)
        setSideBarup4(false)
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
  const handleClickvillage = () => {
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
        setSideBar1(false)
        setSideBar2(false)
        setSideBarup1(false)
        setSideBarup2(false)
        setSideBarup3(false)
        setSideBarup4(false)
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
  const handleClickward = () => {
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
        setSideBar1(false)
        setSideBar3(false)
        setSideBarup1(false)
        setSideBarup2(false)
        setSideBarup3(false)
        setSideBarup4(false)
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
  const handleClick = () => {
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
  const [sideBarup, setSideBarup] = useState(false)
  const [sideBarup1, setSideBarup1] = useState(false)
  const [sideBarup2, setSideBarup2] = useState(false)
  const [sideBarup3, setSideBarup3] = useState(false)
  const [sideBarup4, setSideBarup4] = useState(false)
  const bulkhandleClickdistrict = () => {
    switch (menu.menuStatus) {
      case "open":
        setMenu({
          menuStatus: "close",
          // style3: "menu2",

          style1: "menu active1",
        });
        setSideBarup1(true);
        setSideBar1(false)
        setSideBar2(false)
        setSideBar3(false)
        setSideBar4(false)
        setSideBarup2(false)
        setSideBarup3(false)
        setSideBarup4(false)
        break;
      case "close":
        setMenu({
          menuStatus: "open",
          // style3: "menu2",
          style1: "menu active2",
        });
        setTimeout(() => {
          setIsValue(false);
          setSideBarup1(false);
        }, 1000);
        break;
    }

  };
  const bulkhandleClickpanchayat = () => {
    switch (menu.menuStatus) {
      case "open":
        setMenu({
          menuStatus: "close",
          // style3: "menu2",

          style1: "menu active1",
        });
        setSideBarup2(true);
        setSideBar1(false)
        setSideBar2(false)
        setSideBar3(false)
        setSideBar4(false)
        setSideBarup1(false)
        setSideBarup3(false)
        setSideBarup4(false)
        break;
      case "close":
        setMenu({
          menuStatus: "open",
          // style3: "menu2",
          style1: "menu active2",
        });
        setTimeout(() => {
          setIsValue(false);
          setSideBarup2(false);
        }, 1000);
        break;
    }

  };
  const bulkhandleClickvillage = () => {
    switch (menu.menuStatus) {
      case "open":
        setMenu({
          menuStatus: "close",
          // style3: "menu2",

          style1: "menu active1",
        });
        setSideBarup3(true);
        setSideBar1(false)
        setSideBar2(false)
        setSideBar3(false)
        setSideBar4(false)
        setSideBarup2(false)
        setSideBarup1(false)
        setSideBarup4(false)
        break;
      case "close":
        setMenu({
          menuStatus: "open",
          // style3: "menu2",
          style1: "menu active2",
        });
        setTimeout(() => {
          setIsValue(false);
          setSideBarup3(false);
        }, 1000);
        break;
    }

  };
  const bulkhandleClickward = () => {
    switch (menu.menuStatus) {
      case "open":
        setMenu({
          menuStatus: "close",
          // style3: "menu2",

          style1: "menu active1",
        });
        setSideBarup4(true);
        setSideBar1(false)
        setSideBar2(false)
        setSideBar3(false)
        setSideBar4(false)
        setSideBarup2(false)
        setSideBarup3(false)
        setSideBarup1(false)
        break;
      case "close":
        setMenu({
          menuStatus: "open",
          // style3: "menu2",
          style1: "menu active2",
        });
        setTimeout(() => {
          setIsValue(false);
          setSideBarup4(false);
        }, 1000);
        break;
    }

  };
  const bulkhandleClick = () => {
    switch (menu.menuStatus) {
      case "open":
        setMenu({
          menuStatus: "close",
          // style3: "menu2",

          style1: "menu active1",
        });
        setSideBarup(true);

        break;
      case "close":
        setMenu({
          menuStatus: "open",
          // style3: "menu2",
          style1: "menu active2",
        });
        setTimeout(() => {
          setIsValue(false);
          setSideBarup(false);
        }, 1000);
        break;
    }

  };
  const [counter, setCount] = useState(0);

  const [inputList, setInputList] = useState([
    { panchayatname: "", panchayatabbreviation: "", panchayatcode: "" },
  ]);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  const menusremoveicon = (item) => {
    return variable.map((x, i) => {
      <tr key={i}>
        <td>{x.SNO}</td>
        <td>{x.MENU1}</td>
        <td>{x.NUMBER1}</td>
        <td>{x.MENU2}</td>
        <td>{x.NUMBER2}</td>
      </tr>;
    });
  };
  // handle click event of the Add button
  const handleAddClick = (e) => {
    e.preventDefault();
    setInputList([
      ...inputList,
      { panchayatname: "", panchayatabbreviation: "", panchayatcode: "" },
    ]);
  };

  const selectWard = [
    {
      span: (
        <CLink
          className={"saveBtn"}
          onClick={handleClickward}
          style={{ marginLeft: "200px" }}
        >
          Add{" "}
        </CLink>
      ),
      span: (
        <CLink
          className={"saveBtn"}
          onClick={handleClickward}
          style={{ marginLeft: "200px" }}
        >
          Add{" "}
        </CLink>
      ),
    },
    { value: "0019", label: "0019" },
    { value: "0018", label: "0018" },
    { value: "0024", label: "0024" },
    { value: "0020", label: "0020" },
    { value: "0019", label: "0019" },
    { value: "0022", label: "0022" },
    { value: "0023", label: "0023" },
    { value: "0025", label: "0025" },
  ];

  const handleChange = (e) => {
    const files = e.target.files;
    if (files && files[0]) setExcelUpload({ file: files[0] });
  };

  const handleFile = () => {
    /* Boilerplate to set up FileReader */
    const reader = new FileReader();
    const rABS = !!reader.readAsBinaryString;

    reader.onload = (e) => {
      /* Parse data */
      const bstr = e.target.result;
      const wb = XLSX.read(bstr, {
        type: rABS ? "binary" : "array",
        bookVBA: true,
      });
      /* Get first worksheet */
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      /* Convert array of arrays */
      const data = XLSX.utils.sheet_to_json(ws);
      /* Update state */
      setExcelUpload({ data: data, cols: make_cols(ws["!ref"]) });
      setIsValue(true);
      console.log(JSON.stringify(data, null, 2));
      console.log(data, "data");
    };

    if (rABS) {
      reader.readAsBinaryString(excelupload.file);
    } else {
      reader.readAsArrayBuffer(excelupload.file);
    }
  };
  const [isValue, setIsValue] = useState(false);
  const [style, setStyle] = useState({ display: "none" });

  const selectPanchayat = [
    {
      span: (
        <CLink
          className={"saveBtn"}
          onClick={handleClickpanchayat}
          style={{ marginLeft: "200px" }}
        >
          Add{" "}
        </CLink>
      ),
      span: (
        <CLink
          className={"saveBtn"}
          onClick={handleClickpanchayat}
          style={{ marginLeft: "200px" }}
        >
          Add{" "}
        </CLink>
      ),
    },
    { value: "chennai", label: "chennai" }, { value: "salem", label: "salem" }, { value: "madurai", label: "madurai" }]

  const [mobilenumber, setMobileNumber] = useState("")
  const [validerror, setValidError] = useState("")
  switch (mobilenumber) {
    case (mobilenumber.length > 10):
      return console.log("more than 5 digit number", "track");
      break;

    default:
      console.log("more than 10 digit number", "track  ")
  }
  // if(mobilenumber.length > 10){
  //   setValidError("this is longer","track")
  // }

  const changePanchayatUnion = (e) => {
    setSelected1(e)
    setVillageHide({ ...villageHide, districtpanchayat: false, panchayatunion: true,village: false,ward: false  })
  }
  const changeVillage = (e) => {
    setSelected2(e)
    setVillageHide({ ...villageHide, districtpanchayat: false, panchayatunion: false, village: true,ward: false })
  }
  const changeWard = (e) => {
    setSelected3(e)
    setVillageHide({ ...villageHide, districtpanchayat: false, panchayatunion: false, village: false, ward: true })
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
                  ADDING District Panchayat{" "}
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

                <CCol md="2" style={{ minHeight: "10px" }}>
                  <CLabel
                    className={"label-name-1"}
                    style={{ fontSize: "block", marginLeft: "-25px" }}
                  >
                    District Panchayat
                    <span className={"text-danger"}> *</span>
                  </CLabel>

                  <CInput
                    id={"DistrictName"}
                    name={"Districtname"}
                    placeholder="Enter District Panchayat"
                    maxlength="60"
                    size="60"
                    style={{ marginLeft: "-20px", width: "120px" }}
                    value={x.panchayatname}
                    onChange={(e) => handleInputChange(e, i)}
                  />

                </CCol>

                <CCol md="2">
                  <CLabel className={"label-name-1"}>
                    Abbreviation
                    <span className={"text-danger"}> *</span>
                  </CLabel>
                  <CInput
                    id={"Districtabrreviation"}
                    name={"abbreviation"}
                    placeholder="Enter Abbreviation"
                    maxlength="5"
                    size="5"
                    value={x.panchayatabbreviation}
                    onChange={(e) => handleInputChange(e, i)}
                  />
                </CCol>
                <CCol md="2">
                  <CLabel className={"label-name-1"}>
                    Code
                    <span className={"text-danger"}> *</span>
                  </CLabel>
                  <CInput
                    id={"Districtcode"}
                    name={"code"}
                    placeholder="Enter Code"
                    maxlength="5"
                    size="5"
                    value={x.panchayatcode}
                    onChange={(e) => handleInputChange(e, i)}
                  />
                </CCol>

                <CRow>
                  <CCol md="3">
                    {inputList.length - 1 === i && (
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
                    )}
                  </CCol>
                  <CCol md="3">
                    {inputList.length !== 1 && (
                      <i
                        style={{
                          marginLeft: "0px",
                          marginTop: "35px",

                          fontSize: "1.25rem",
                          color: "black",
                        }}
                        onClick={() => handleRemoveClick(i)}
                        class={"fa fa-remove"}
                      />
                    )}
                  </CCol>
                </CRow>
              </CRow>
            );
          })}

          <CRow style={{ marginLeft: "185px" }}>
            <CCol md="3">
              <CButton
                style={{
                  marginLeft: "30px",
                  marginTop: "35px",
                }}
                onClick={enableCreate}
                className={"saveBtn"}
              >
                {" "}
                Save
              </CButton>
              <CButton
                shape={"pill"}
                id={"Districtcancel"}
                style={{ marginTop: "-60px", marginLeft: "130px" }}
                className={"cancelBtn"}
                onClick={""}
              >
                CANCEL
              </CButton>
              {error !== "" ? <p>{error}</p> : null}
            </CCol>
          </CRow>

          <CRow>
            <CCol md="6">
              <CButton
                style={{
                  position: "absolute",
                  top: "-100px",
                  right: "-660px",
                  marginLeft: "330px",
                  backgroundColor: "green",
                  border: "1px solid green",
                  color: "white",
                }}
                onClick={() => {
                  handleClick();
                }}
              >
                Back
              </CButton>
            </CCol>
          </CRow>
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
                    ADDING Panchayat Union{" "}
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
                  District Panchayat:
                </CLabel>
                <span style={{ marginTop: "13px", marginLeft: "5px", }}></span>
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
                    <CLabel className={"label-name-1"} style={{ marginLeft: "-20px" }}>
                      Panchayat Union
                      <span className={"text-danger"}> *</span>
                    </CLabel>

                    <CInput
                      id={"PanchayatName"}
                      name={"Panchayatname"}
                      placeholder="Enter Panchayat Union Name"
                      maxlength="60"
                      size="60"
                      style={{ marginLeft: "-20px", width: "120px" }}
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
                      id={"muPanchayatabrreviation"}
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
                      id={"Panchayatcode"}
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

            <CRow style={{ marginLeft: "580px" }}>

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
                  id={"Panchayatalcancel"}
                  style={{ marginTop: "-59px", marginLeft: "90px" }}
                  className={"cancelBtn"}
                  onClick={handleClickpanchayat}
                >
                  CANCEL
                </CButton>
                {error !== "" ? <p>{error}</p> : null}
              </CCol>
            </CRow>


            <CButton
              className={"menu"}
              style={{ position: "absolute", top: "15px", right: "15px",backgroundColor: "green", border: "1px solid green" }}
              className={"cancelBtn"}
              onClick={() => {
                handleClickpanchayat();
                // handleClickpanchayat();
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
                      ADDING Village Panchayat{" "}
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
                    District Panchayat:
                  </CLabel>
                  <span style={{ marginTop: "13px", marginLeft: "5px", }}></span>
                </CCol>
                <CCol>
                  <CLabel
                    style={{ position: "relative", marginLeft: "5px", fontSize: "23px", fontWeight: "650", cursor: "pointer" }}
                    className={"form-labels-6"}
                  >
                    Panchayat Union:
                  </CLabel>
                  <span style={{ marginTop: "13px", marginLeft: "5px", }}></span>
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
                      <CLabel className={"label-name-1"} style={{ marginLeft: "-20px" }}>
                        Village Panchayat
                        <span className={"text-danger"}> *</span>
                      </CLabel>

                      <CInput
                        id={"VillageName"}
                        name={"Villagename"}
                        placeholder="Enter Village Panchayat Name"
                        maxlength="60"
                        size="60"
                        style={{ marginLeft: "-20px", width: "120px" }}
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
                        id={"Villagebrreviation"}
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
                        id={"Villagelcode"}
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

              <CRow style={{ marginLeft: "580px" }}>

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
                    id={"Villageancel"}
                    style={{ marginTop: "-59px", marginLeft: "90px" }}
                    className={"cancelBtn"}
                    onClick={handleClickvillage}
                  >
                    CANCEL
                  </CButton>
                  {error !== "" ? <p>{error}</p> : null}
                </CCol>
              </CRow>


              <CButton
                className={"menu"}
                style={{ position: "absolute", top: "15px", right: "15px",backgroundColor: "green", border: "1px solid green" }}
                className={"cancelBtn"}
                onClick={() => {
                  handleClickvillage();
                  // handleClickpanchayat();
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
                        ADDING Ward Number{" "}
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
                      District Panchayat:
                    </CLabel>
                    <span style={{ marginTop: "13px", marginLeft: "5px", }}></span>
                  </CCol>
                  <CCol>
                    <CLabel
                      style={{ position: "relative", marginLeft: "5px", fontSize: "23px", fontWeight: "650", cursor: "pointer" }}
                      className={"form-labels-6"}
                    >
                      Village Panchayat:
                    </CLabel>
                    <span style={{ marginTop: "13px", marginLeft: "5px", }}></span>
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
                      Panchayat Union:
                    </CLabel>
                    <span style={{ marginTop: "13px", marginLeft: "5px", }}></span>
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
                          Ward Number
                          <span className={"text-danger"}> *</span>
                        </CLabel>

                        <CInput
                          id={"WardName"}
                          name={"municipalname"}
                          placeholder="Enter Ward Number Name"
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
                          id={"Wardabrreviation"}
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
                          id={"Wardcode"}
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




                <CRow style={{ marginLeft: "580px" }}>

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
                      id={"Wardcancel"}
                      style={{ marginTop: "-59px", marginLeft: "90px" }}
                      className={"cancelBtn"}
                      onClick={handleClickward}
                    >
                      CANCEL
                    </CButton>
                    {error !== "" ? <p>{error}</p> : null}
                  </CCol>
                </CRow>


                <CButton
                  className={"menu"}
                  style={{ position: "absolute", top: "15px", right: "15px", backgroundColor: "green", border: "1px solid green"}}
                  className={"cancelBtn"}
                  onClick={() => {
                    handleClickward();
                    // handleClickpanchayat();
                  }}
                >
                  Back
                </CButton>
              </div>

            )}

            {sideBarup1 && (
              <div className={menu.style1} style={{ marginLeft: "-108px" }}>

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
                        ADDING District Panchayat{" "}
                      </span>
                    </div>
                  </CCol>
                </CRow>

                <CRow md="12"
            style={{ marginLeft: "10px", marginTop: "15px" }}
         
          >
            <CCol md="6"    id={"createRoleUploadTemplate"}
            onClick={() => {
              document.getElementById("uploadRoleTemplate").click();
            }}>
              <span style={{ fontSize: "20px", cursor: "pointer",color:"blue" }}>
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
            <CCol md="6" style={{marginLeft:"150px",marginTop:"-38px"}}> 
            <CSVLink data={csvData}>
            <span style={{ fontSize: "20px", cursor: "pointer", color:"red" }}>
                <i className="fas fa-download">
                </i>&nbsp;
             
             </span>
           
              <CLabel
                style={{
                  position: "relative",
                  marginLeft: "20px",
                  cursor: "pointer",
                  color:"black"
                
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
                className={"menu"}
                style={{
                  position: "absolute",
                  top: "-100px",
                  right: "-660px",
                  marginLeft: "30px",
                  backgroundColor: "green",
                  border: "1px solid green",
                }}
                className={"cancelBtn"}
                onClick={() => {
                  bulkhandleClick();
                  // handleClick2();
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
                        fields={fieldss1}
                        columnFilter
                        tableFilter
                        tableLabel={"List of District Panchayat"}
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
                                      onClick={() => menusremoveicon(item)}
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
                          id={"Districtcancel"}
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
              <div className={menu.style1} style={{ marginLeft: "-108px" }}>

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
                        ADDING Panchayat Union{" "}
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
                      District Panchayat:
                    </CLabel>
                    <span style={{ marginTop: "13px", marginLeft: "5px", }}></span>
                  </CCol>
                </CRow>

                <CRow md="12"
            style={{ marginLeft: "10px", marginTop: "15px" }}
         
          >
            <CCol md="6"    id={"createRoleUploadTemplate"}
            onClick={() => {
              document.getElementById("uploadRoleTemplate").click();
            }}>
              <span style={{ fontSize: "20px", cursor: "pointer",color:"blue" }}>
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
            <CCol md="6" style={{marginLeft:"150px",marginTop:"-38px"}}> 
            <CSVLink data={csvData}>
            <span style={{ fontSize: "20px", cursor: "pointer", color:"red" }}>
                <i className="fas fa-download">
                </i>&nbsp;
             
             </span>
           
              <CLabel
                style={{
                  position: "relative",
                  marginLeft: "20px",
                  cursor: "pointer",
                  color:"black"
                
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
                className={"menu"}
                style={{
                  position: "absolute",
                  top: "-165px",
                  right: "-660px",
                  marginLeft: "30px",
                  backgroundColor: "green",
                  border: "1px solid green",
                }}
                className={"cancelBtn"}
                onClick={() => {
                  bulkhandleClick();
                  // handleClick2();
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
                        tableLabel={"List of Panchayat Union"}
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
                                      onClick={() => menusremoveicon(item)}
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
                          id={"Panchayatcancel"}
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
              <div className={menu.style1} style={{ marginLeft: "-108px" }}>

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
                        ADDING Village Panchayat{" "}
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
                      District Panchayat:
                    </CLabel>
                    <span style={{ marginTop: "13px", marginLeft: "5px", }}></span>
                  </CCol>
                  <CCol>
                    <CLabel
                      style={{ position: "relative", marginLeft: "5px", fontSize: "23px", fontWeight: "650", cursor: "pointer" }}
                      className={"form-labels-6"}
                    >
                      Panchayat Union:
                    </CLabel>
                    <span style={{ marginTop: "13px", marginLeft: "5px", }}></span>
                  </CCol>
                </CRow>

                <CRow md="12"
            style={{ marginLeft: "10px", marginTop: "15px" }}
         
          >
            <CCol md="6"    id={"createRoleUploadTemplate"}
            onClick={() => {
              document.getElementById("uploadRoleTemplate").click();
            }}>
              <span style={{ fontSize: "20px", cursor: "pointer",color:"blue" }}>
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
            <CCol md="6" style={{marginLeft:"150px",marginTop:"-38px"}}> 
            <CSVLink data={csvData}>
            <span style={{ fontSize: "20px", cursor: "pointer", color:"red" }}>
                <i className="fas fa-download">
                </i>&nbsp;
             
             </span>
           
              <CLabel
                style={{
                  position: "relative",
                  marginLeft: "20px",
                  cursor: "pointer",
                  color:"black"
                
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
                className={"menu"}
                style={{
                  position: "absolute",
                  top: "-165px",
                  right: "-660px",
                  marginLeft: "30px",
                  backgroundColor: "green",
                  border: "1px solid green",
                }}
                className={"cancelBtn"}
                onClick={() => {
                  bulkhandleClick();
                  // handleClick2();
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
                        tableLabel={"List of Village Panchayat"}
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
                                      onClick={() => menusremoveicon(item)}
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
                          id={"Villagecancel"}
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
              <div className={menu.style1} style={{ marginLeft: "-108px" }}>

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
                        ADDING Ward Number{" "}
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
                      District Panchayat:
                    </CLabel>
                    <span style={{ marginTop: "13px", marginLeft: "5px", }}></span>
                  </CCol>
                  <CCol>
                    <CLabel
                      style={{ position: "relative", marginLeft: "5px", fontSize: "23px", fontWeight: "650", cursor: "pointer" }}
                      className={"form-labels-6"}
                    >
                      Village Panchayat:
                    </CLabel>
                    <span style={{ marginTop: "13px", marginLeft: "5px", }}></span>
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
                      Panchayat Union:
                    </CLabel>
                    <span style={{ marginTop: "13px", marginLeft: "5px", }}></span>
                  </CCol>
                  <CCol>
                  </CCol>
                </CRow>
                <CRow md="12"
            style={{ marginLeft: "10px", marginTop: "15px" }}
         
          >
            <CCol md="6"    id={"createRoleUploadTemplate"}
            onClick={() => {
              document.getElementById("uploadRoleTemplate").click();
            }}>
              <span style={{ fontSize: "20px", cursor: "pointer",color:"blue" }}>
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
            <CCol md="6" style={{marginLeft:"150px",marginTop:"-38px"}}> 
            <CSVLink data={csvData}>
            <span style={{ fontSize: "20px", cursor: "pointer", color:"red" }}>
                <i className="fas fa-download">
                </i>&nbsp;
             
             </span>
           
              <CLabel
                style={{
                  position: "relative",
                  marginLeft: "20px",
                  cursor: "pointer",
                  color:"black"
                
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
                className={"menu"}
                style={{
                  position: "absolute",
                  top: "-210px",
                  right: "-660px",
                  marginLeft: "30px",
                  backgroundColor: "green",
                  border: "1px solid green",
                }}
                className={"cancelBtn"}
                onClick={() => {
                  bulkhandleClick();
                  // handleClick2();
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
                        tableLabel={"List of Ward Number"}
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
                                      onClick={() => menusremoveicon(item)}
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
                          id={"Wardcancel"}
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
                                id={"Villageadd"}
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
                              id={"Villagestatename"}
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
                              id={"Villagedistrict"}
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
                              id={"Village"}
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
                              id={"Villagecity"}
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
                              id={"villagepanchyatunion"}
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
                              id={"Villageward"}
                              name={"city"}
                              placeholder={"Select Ward No"}
                              options={selectWard}
                            />
                          </CCol>
                        </CRow>
                      </div>

                      <CRow
                        style={{
                          padding: "4%",
                          marginTop: "-3.5%",
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
                            details: (item, index) => { },
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
                              id={"Villagestate"}
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
                                  id={"Villagedistrict"}
                                  type={"text"}
                                  value={selected}
                                  onChange={(e) => setSelected(e)}
                                  components={{ MenuList: SelectMenuButtondistrict }}
                                  options={select}
                                // labelledBy={"Select"}
                                />


                                {villageHide.districtpanchayat && selected.length !== 0 ? (
                                  <div
                                    style={{
                                      width: 300,
                                      marginLeft: "426px",
                                      marginTop: "-40px",
                                      padding: 10,
                                    }}

                                  >
                                    <i
                                      className={"editIcon"}

                                      id={"Districtedit"}
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

                                        id={"Districtdelete"}
                                        class="fas fa-trash"
                                      />
                                    </div>
                                  </div>
                                ) : null}
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
                                      id={"Districtedit"}
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
                                  id={"Panchayat"}
                                  type={"text"}
                                  value={selected1}
                                  components={{ MenuList: SelectMenuButtonpanchayat }}
                                  onChange={changePanchayatUnion}
                                  options={selectPanchayat}
                                />
                                {villageHide.panchayatunion && selected1.length !== 0 ? (
                                  <div
                                    style={{
                                      width: 300,
                                      marginLeft: "426px",
                                      marginTop: "-40px",
                                      padding: 10,
                                    }}

                                  >
                                    <i
                                      className={"editIcon"}

                                      id={"Panchayatedit"}
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

                                        id={"Panchayatdelete"}
                                        class="fas fa-trash"
                                      />
                                    </div>
                                  </div>
                                ) : null}
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
                                      id={"PanchayatEdit"}
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
                                    id={"Panchayat"}
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
                                    id={"Panchayatabbreviation"}
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
                                    id={"abbreviationcode"}
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
                                    id={"abbreviationcancel"}
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
                                  id={"VillageSelect"}
                                  type={"text"}
                                  components={{ MenuList: SelectMenuButtonvillage }}
                                  onChange={changeVillage}
                                  options={select}
                                />
                                {villageHide.village && selected2.length !== 0 ? (
                                  <div
                                    style={{
                                      width: 300,
                                      marginLeft: "426px",
                                      marginTop: "-40px",
                                      padding: 10,
                                    }}

                                  >
                                    <i
                                      className={"editIcon"}

                                      id={"Villageedit"}
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

                                        id={"villagedelete"}
                                        class="fas fa-trash"
                                      />
                                    </div>
                                  </div>
                                ) : null}
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
                                      id={"VillageEdit"}
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
                                    id={"VillageName"}
                                    name={"Villagename"}
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
                                    id={"Villageabrreviation"}
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
                                    id={"Villagecode"}
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
                                    id={"Villagecancel"}
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
                                  id={"Ward"}
                                  type={"text"}
                                  components={{ MenuList: SelectMenuButtonward }}
                                  onChange={changeWard}
                                  options={selectWard}
                                />
                                {villageHide.ward && selected3.length !== 0 ? (
                                  <div
                                    style={{
                                      width: 300,
                                      marginLeft: "426px",
                                      marginTop: "-40px",
                                      padding: 10,
                                    }}

                                  >
                                    <i
                                      className={"editIcon"}

                                      id={"WardEdit"}
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

                                        id={"Warddelete"}
                                        class="fas fa-trash"
                                      />
                                    </div>
                                  </div>
                                ) : null}
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
                                      id={"WardeEdit"}
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
                                    name={"Wardname"}
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
                              id={"Villagearea"}
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
                              id={"villagecancelAbbreviationConfigureCode"}
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

                      <CRow style={{ padding: "4%" }}>
                        <CDataTable
                          items={userData}
                          fields={fields1}
                          columnFilter
                          tableFilter
                          tableLabel={"List of Streets"}
                          itemsPerPageSelect
                          itemsPerPage={5}
                          selectAll={true}
                          checkedAll={userData.length === selected.length}
                          onSelectAll={(val) => {
                            console.log(val, userData);
                            if (userData.length === selected.length) {
                              setSelected([]);
                            } else {
                              let ids = [];
                              val.map((x) => {
                                ids.push(`${x._id}`);
                              });
                              setSelected(ids);
                            }
                          }}
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
                                      onClick={() => {
                                        if (selected.includes(`${item._id}`)) {
                                          let values = selected.filter((x) => {
                                            return `${x}` !== `${item._id}`;
                                          });
                                          setSelected(values);
                                        } else {
                                          setSelected([...selected, `${item._id}`]);
                                        }
                                      }}
                                      checked={selected.includes(`${item._id}`)}
                                    />
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
                            details: (item, index) => { },
                          }}
                        />
                      </CRow>
                    </div>
                  )}
                </CCard>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VillagePanchayat;
