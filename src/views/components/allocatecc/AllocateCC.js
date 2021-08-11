import React, { useState } from "react";
import {
  CButton,
  CCard,
  CCol,
  CContainer,
  CLabel,
  CInput,
  CRow,
} from "@coreui/react";
import Select from "react-select";
import FormValidation from "../../../Tools/FormValidation/FormValidation";
import CDataTable from "src/views/CoreComponents/table/DataTable";
import { Dropdown, Menu } from "antd";
import "./Allocatecc.css";
import "antd/dist/antd.css";

function AllocateCC() {
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
    );
  };

  const typty = [
    { value: "Type of Party Office", label: "Type of Party Office" },
    { value: "Type of Party wing Office", label: "Type of Party Wing Office" },
  ];
  const [bacbut, setbacbut] = useState(false);
  const [desig, setDesig] = useState(false);
  const [mem, setMem] = useState(false);
  const [minit, setminit] = useState(false);
  const [minits, setminits] = useState(false);
  const [chiefstate, setchiefstate] = useState(false);
  const [Chiefg, setChiefg] = useState(false);
  const [Chiefgg, setChiefgg] = useState(false);
  const [wardg1, setwardg1] = useState(false);
  const [wardg2, setwardg2] = useState(false);
  const [memg, setMemg] = useState(false);
  const [desigg, setDesigg] = useState(false);
  const [pubrep, setPubrep] = useState(false);
  const [minitta, setminitta] = useState(false);
  const [minittac, setminittac] = useState(false);
  const [publeg, setpubleg] = useState(false);
  const [councorp, setcouncorp] = useState(false);
  const [councorpg, setcouncorpg] = useState(false);
  const [counmunig, setcounmunig] = useState(false);
  const [countowng, setcountowng] = useState(false);
  const [publegg, setpublegg] = useState(false);
  const [primeminig, setprimeminig] = useState(false);
  const [primeminigg, setprimeminigg] = useState(false);
  const [addfirst, setaddfirst] = useState(false);
  const [addsecond, setaddsecond] = useState(false);
  const [addthird, setaddthird] = useState(false);
  const [addfourth, setaddfourth] = useState(false);
  const [addfivth, setaddfivth] = useState(false);
  const [addsixth, setaddsixth] = useState(false);
  const [addseventh, setaddseventh] = useState(false);
  const [addeight, setaddeight] = useState(false);
  const [addninth, setaddninth] = useState(false);
  const [addtenth, setaddtenth] = useState(false);


  const sowmember = () => {
    setShow(false);
    setShow1(true);
    setbacbut(true);
  };

  const cancelsowmember = () => {
    setPubrep(false);
    setShow(true);
    setShow1(false);
    setaddfirst(false);
    setaddsecond(false);
    setaddthird(false);
    setaddfourth(false);
    setaddfivth(false);
    setaddsixth(false);
    setaddseventh(false);
    setMem(false);
    setMemg(false);
    setDesig(false);
    setDesigg(false);
    setPubrep(false);
    setpubleg(false);
    setpublegg(false);
    setcouncorp(false);
    setcouncorpg(false);
    setcounmunig(false);
    setcountowng(false);
    setminit(false);
    setminits(false);
    setprimeminig(false);
    setprimeminigg(false);
    setChiefg(false);
    setChiefgg(false);
    setwardg1(false);
    setwardg2(false);
    setchiefstate(false);
    setaddninth(false);
    setaddtenth(false);
    setbacbut(false);
  }

  // First
  const cahange = (e) => {
    if (e.value === "Member") {
      setMem(true);
      setMemg(true);
      setDesigg(false);
      setDesig(false);
      setPubrep(false);
      setpubleg(false);
      setpublegg(false);
      setcouncorp(false);
      setcouncorpg(false);
      setcounmunig(false);
      setcountowng(false);
      setminit(false);
      setminits(false);
      setprimeminig(false);
      setprimeminigg(false);
      setChiefg(false);
      setChiefgg(false);
      setwardg1(false);
      setwardg2(false);
      setchiefstate(false);
      setbacbut(false);
    }
    if (e.value === "role") {
      setDesig(true);
      setDesigg(true);
      setMemg(false);
      setMem(false);
      setPubrep(false);
      setpubleg(false);
      setpublegg(false);
      setcouncorp(false);
      setcouncorpg(false);
      setcounmunig(false);
      setcountowng(false);
      setminit(false);
      setminits(false);
      setprimeminig(false);
      setprimeminigg(false);
      setChiefg(false);
      setChiefgg(false);
      setwardg1(false);
      setwardg2(false);
      setchiefstate(false);
    }
    if (e.value === "public") {
      setMem(false);
      setMemg(false);
      setDesig(false);
      setDesigg(false);
      setPubrep(true);
      setpubleg(false);
      setpublegg(false);
      setcouncorp(false);
      setcouncorpg(false);
      setcounmunig(false);
      setcountowng(false);
      setminit(false);
      setminits(false);
      setprimeminig(false);
      setprimeminigg(false);
      setChiefg(false);
      setChiefgg(false);
      setwardg1(false);
      setwardg2(false);
      setchiefstate(false);
    }
    if (e.value === "CMinister") {
      setMem(false);
      setMemg(false);
      setDesig(false);
      setDesigg(false);
      setPubrep(false);
      setpubleg(false);
      setpublegg(false);
      setcouncorp(false);
      setcouncorpg(false);
      setcounmunig(false);
      setcountowng(false);
      setminit(true);
      setprimeminig(false);
      setprimeminigg(false);
      setminits(false);
      setChiefg(false);
      setChiefgg(false);
      setwardg1(false);
      setwardg2(false);
      setchiefstate(false);
    }
    if (e.value === "SMinister") {
      setMem(false);
      setMemg(false);
      setDesig(false);
      setDesigg(false);
      setPubrep(false);
      setpubleg(false);
      setpublegg(false);
      setcouncorp(false);
      setcouncorpg(false);
      setcounmunig(false);
      setcountowng(false);
      setminit(false);
      setminits(true);
      setprimeminig(false);
      setprimeminigg(false);
      setChiefg(false);
      setChiefgg(false);
      setwardg1(false);
      setwardg2(false);
      setchiefstate(false);
    }
  };

  // second
  const pubchn = (e) => {
    if (e.value === "Memberleg") {
      setMem(false);
      setMemg(false);
      setDesigg(false);
      setDesig(false);
      setPubrep(false);
      setpubleg(true);
      setpublegg(true);
      setcouncorp(false);
      setcouncorpg(false);
      setcounmunig(false);
      setcountowng(false);
      setminit(false);
      setminits(false);
      setprimeminig(false);
      setChiefg(false);
      setprimeminigg(false);
      setChiefgg(false);
      setwardg1(false);
      setwardg2(false);
      setchiefstate(false);
    }
    if (e.value === "memberparli") {
      setMem(false);
      setMemg(false);
      setDesigg(false);
      setDesig(false);
      setPubrep(false);
      setpubleg(true);
      setpublegg(true);
      setcouncorp(false);
      setcouncorpg(false);
      setcounmunig(false);
      setminits(false);
      setcountowng(false);
      setChiefg(false);
      setminit(false);
      setprimeminig(false);
      setprimeminigg(false);
      setChiefgg(false);
      setwardg1(false);
      setwardg2(false);
      setchiefstate(false);
    }
    if (e.value === "membercouncicorp") {
      setMem(false);
      setMemg(false);
      setDesigg(false);
      setDesig(false);
      setPubrep(false);
      setpubleg(false);
      setpublegg(false);
      setcouncorp(true);
      setcouncorpg(true);
      setcounmunig(false);
      setcountowng(false);
      setminit(false);
      setprimeminig(false);
      setChiefg(false);
      setminits(false);
      setprimeminigg(false);
      setChiefgg(false);
      setwardg1(false);
      setwardg2(false);
      setchiefstate(false);
    }
    if (e.value === "membercouncimuni") {
      setMem(false);
      setMemg(false);
      setDesigg(false);
      setDesig(false);
      setPubrep(false);
      setpubleg(false);
      setpublegg(false);
      setcouncorp(true);
      setcouncorpg(false);
      setcounmunig(true);
      setcountowng(false);
      setminit(false);
      setprimeminig(false);
      setprimeminigg(false);
      setminits(false);
      setChiefg(false);
      setChiefgg(false);
      setwardg1(false);
      setwardg2(false);
      setchiefstate(false);
    }
    if (e.value === "membercouncitown") {
      setMem(false);
      setMemg(false);
      setDesigg(false);
      setDesig(false);
      setPubrep(false);
      setpubleg(false);
      setpublegg(false);
      setcouncorp(true);
      setcouncorpg(false);
      setcounmunig(false);
      setcountowng(true);
      setminit(false);
      setprimeminigg(false);
      setprimeminig(false);
      setminits(false);
      setChiefg(false);
      setChiefgg(false);
      setwardg1(false);
      setwardg2(false);
      setchiefstate(false);
    }
    if (e.value === "distward") {
      setMem(false);
      setMemg(false);
      setDesigg(false);
      setDesig(false);
      setPubrep(false);
      setpubleg(false);
      setpublegg(false);
      setcouncorp(true);
      setcouncorpg(false);
      setcounmunig(false);
      setcountowng(false);
      setminit(false);
      setprimeminigg(false);
      setprimeminig(false);
      setminits(false);
      setChiefg(false);
      setChiefgg(false);
      setwardg1(true);
      setwardg2(false);
      setchiefstate(false);
    }
    if (e.value === "townward") {
      setMem(false);
      setMemg(false);
      setDesigg(false);
      setDesig(false);
      setPubrep(false);
      setpubleg(false);
      setpublegg(false);
      setcouncorp(true);
      setcouncorpg(false);
      setcounmunig(false);
      setcountowng(false);
      setminit(false);
      setprimeminigg(false);
      setprimeminig(false);
      setminits(false);
      setChiefg(false);
      setChiefgg(false);
      setwardg1(false);
      setwardg2(true);
      setchiefstate(false);
    }
  };
  // third
  const primrchn = (e) => {
    if (e.value === "pmini") {
      setMem(false);
      setMemg(false);
      setDesig(false);
      setDesigg(false);
      setPubrep(false);
      setpubleg(false);
      setpublegg(false);
      setcouncorp(false);
      setcouncorpg(false);
      setcounmunig(false);
      setcountowng(false);
      setminit(true);
      setprimeminig(true);
      setprimeminigg(false);
      setminits(false);
      setChiefg(false);
      setChiefgg(false);
      setwardg1(false);
      setwardg2(false);
      setchiefstate(false);
    }
    if (e.value === "counmini") {
      setMem(false);
      setMemg(false);
      setDesig(false);
      setDesigg(false);
      setPubrep(false);
      setpubleg(false);
      setpublegg(false);
      setcouncorp(false);
      setcouncorpg(false);
      setcounmunig(false);
      setcountowng(false);
      setminit(true);
      setprimeminig(false);
      setprimeminigg(true);
      setminits(false);
      setChiefg(false);
      setChiefgg(false);
      setwardg1(false);
      setwardg2(false);
      setchiefstate(false);
    }
  };
  const chiefchn = (e) => {
    if (e.value === "cmini") {
      setMem(false);
      setMemg(false);
      setDesig(false);
      setDesigg(false);
      setPubrep(false);
      setpubleg(false);
      setpublegg(false);
      setcouncorp(false);
      setcouncorpg(false);
      setcounmunig(false);
      setcountowng(false);
      setminit(false);
      setprimeminig(false);
      setprimeminigg(false);
      setminits(true);
      setChiefg(true);
      setChiefgg(false);
      setwardg1(false);
      setwardg2(false);
      setchiefstate(true);
    }
    if (e.value === "counminic") {
      setMem(false);
      setMemg(false);
      setDesig(false);
      setDesigg(false);
      setPubrep(false);
      setpubleg(false);
      setpublegg(false);
      setcouncorp(false);
      setcouncorpg(false);
      setcounmunig(false);
      setcountowng(false);
      setminit(false);
      setprimeminig(false);
      setprimeminigg(false);
      setminits(true);
      setChiefg(false);
      setChiefgg(true);
      setwardg1(false);
      setwardg2(false);
      setchiefstate(true);
    }
  };
  // fourthddd
  const partroleaddchng = (e) => {
    if (e.value === "Membera") {
      setaddfirst(true);
      setbacbut(false);
      setaddsecond(false);
      setaddthird(false);
      setPubrep(false);
      setaddfourth(false);
      setaddfivth(false);
      setaddsixth(false);
      setaddseventh(false);
      setminitta(false);
      setaddeight(false);
      setminittac(false);
      setaddninth(false);
      setaddtenth(false);
    }

    if (e.value === "rolea") {
      setaddfirst(false);
      setaddsecond(true);
      setbacbut(false);
      setaddthird(false);
      setPubrep(false);
      setaddfourth(false);
      setaddfivth(false);
      setaddsixth(false);
      setaddseventh(false);
      setminitta(false);
      setaddeight(false);
      setminittac(false);
      setaddninth(false);
      setaddtenth(false);
    }

    if (e.value === "publica") {
      setaddfirst(false);
      setaddsecond(false);
      setaddthird(false);
      setPubrep(true);
      setaddfourth(false);
      setaddfivth(false);
      setbacbut(false);
      setaddsixth(false);
      setaddseventh(false);
      setminitta(false);
      setaddeight(false);
      setminittac(false);
      setaddninth(false);
      setaddtenth(false);
    }

    if (e.value === "CMinistera") {
      setaddfirst(false);
      setaddsecond(false);
      setaddthird(false);
      setbacbut(false);
      setPubrep(false);
      setaddfourth(false);
      setaddfivth(false);
      setaddsixth(false);
      setaddseventh(false);
      setminitta(true);
      setaddeight(false);
      setaddninth(false);
      setminittac(false);
      setaddtenth(false);
    }
    if (e.value === "SMinistera") {
      setaddfirst(false);
      setaddsecond(false);
      setaddthird(false);
      setbacbut(false);
      setPubrep(false);
      setaddfourth(false);
      setaddfivth(false);
      setaddsixth(false);
      setaddseventh(false);
      setminitta(false);
      setaddeight(false);
      setminittac(true);
      setaddninth(false);
      setaddtenth(false);
    }
  };
  // fivith
  const partroleaddsub = (e) => {
    if (e.value === "Memberlega") {
      setaddfirst(false);
      setaddsecond(false);
      setaddthird(true);
      setPubrep(true);
      setaddfourth(false);
      setaddfivth(false);
      setaddsixth(false);
      setaddseventh(false);
      setbacbut(false);
      setminitta(false);
      setaddeight(false);
      setminittac(false);
      setaddninth(false);
      setaddtenth(false);
    }
    if (e.value === "memberparlia") {
      setaddfirst(false);
      setaddsecond(false);
      setaddthird(false);
      setPubrep(true);
      setaddfourth(true);
      setbacbut(false);
      setaddfivth(false);
      setaddsixth(false);
      setminitta(false);
      setaddseventh(false);
      setaddeight(false);
      setminittac(false);
      setaddninth(false);
      setaddtenth(false);
    }
    if (e.value === "membercouncicorpa") {
      setaddfirst(false);
      setaddsecond(false);
      setaddthird(false);
      setPubrep(true);
      setaddfourth(false);
      setbacbut(false);
      setaddfivth(true);
      setaddsixth(false);
      setaddseventh(false);
      setminitta(false);
      setaddeight(false);
      setminittac(false);
      setaddninth(false);
      setaddtenth(false);
    }
    if (e.value === "membercouncimunia") {
      setaddfirst(false);
      setaddsecond(false);
      setbacbut(false);
      setaddthird(false);
      setPubrep(true);
      setaddfourth(false);
      setaddfivth(false);
      setaddsixth(true);
      setaddseventh(false);
      setminitta(false);
      setaddeight(false);
      setminittac(false);
      setaddninth(false);
      setaddtenth(false);
    }
    if (e.value === "membercouncitowna") {
      setaddfirst(false);
      setaddsecond(false);
      setaddthird(false);
      setPubrep(true);
      setbacbut(false);
      setaddfourth(false);
      setaddfivth(false);
      setaddsixth(false);
      setaddseventh(true);
      setminitta(false);
      setaddeight(false);
      setaddninth(false);
      setminittac(false);
      setaddtenth(false);
    }
    if (e.value === "distwarda") {
      setaddfirst(false);
      setaddsecond(false);
      setbacbut(false);
      setaddthird(false);
      setPubrep(true);
      setaddfourth(false);
      setaddfivth(false);
      setaddsixth(false);
      setaddseventh(false);
      setminitta(false);
      setaddeight(false);
      setminittac(false);
      setaddninth(false);
      setaddtenth(true);
    }
    if (e.value === "townwarda") {
      setaddfirst(false);
      setbacbut(false);
      setaddsecond(false);
      setaddthird(false);
      setPubrep(true);
      setaddfourth(false);
      setaddfivth(false);
      setaddsixth(false);
      setaddseventh(false);
      setminitta(false);
      setaddeight(false);
      setaddninth(false);
      setminittac(false);
      setaddtenth(true);
    }
  };

  const primeeaddsub = (e) => {
    if (e.value === "pminia") {
      setaddfirst(false);
      setbacbut(false);
      setaddsecond(false);
      setaddthird(false);
      setPubrep(false);
      setaddfourth(false);
      setaddfivth(false);
      setaddsixth(false);
      setaddseventh(false);
      setminitta(true);
      setaddeight(true);
      setminittac(false);
      setaddninth(false);
      setaddtenth(false);
    }
    if (e.value === "counminia") {
      setaddfirst(false);
      setaddsecond(false);
      setaddthird(false);
      setbacbut(false);
      setPubrep(false);
      setaddfourth(false);
      setaddfivth(false);
      setaddsixth(false);
      setaddseventh(false);
      setminitta(true);
      setaddeight(true);
      setminittac(false);
      setaddtenth(false);
      setaddninth(false);
    }
  };

  const chiefsubaa = (e) => {
    if(e.value === "cminia" ){
      setaddfirst(false);
      setaddsecond(false);
      setaddthird(false);
      setbacbut(false);
      setPubrep(false);
      setaddfourth(false);
      setaddfivth(false);
      setaddsixth(false);
      setaddseventh(false);
      setminitta(false);
      setaddeight(false);
      setminittac(true);
      setaddninth(true);
      setaddtenth(false);
    }
    if(e.value === "counminica" ){
      setaddfirst(false);
      setaddsecond(false);
      setaddthird(false);
      setPubrep(false);
      setaddfourth(false);
      setbacbut(false);
      setaddfivth(false);
      setaddsixth(false);
      setaddseventh(false);
      setminitta(false);
      setaddeight(false);
      setminittac(true);
      setaddninth(true);
      setaddtenth(false);
    }
  };

  // const handleClick = () => {
  //   setSideBar1(true);
  //   setShow(false);
  // };
  // const styles = {
  //   valueContainer: (base) => ({
  //     ...base,
  //     paddingLeft: 24,
  //   }),
  // };

  const select = [
    { value: "Member", label: "Party Member" },
    { value: "role", label: "Party Role" },
    { value: "public", label: "Public Representative" },
    { value: "CMinister", label: "Central Minister" },
    { value: "SMinister", label: "State Minister" },
  ];

  const selectadh = [
    { value: "Membera", label: "Party Member" },
    { value: "rolea", label: "Party Role" },
    { value: "publica", label: "Public Representative" },
    { value: "CMinistera", label: "Central Minister" },
    { value: "SMinistera", label: "State Minister" },
  ];

  const primeselect = [
    { value: "pmini", label: "Prime Minister" },
    { value: "counmini", label: "Council of Minister" },
  ];
  const chiefselect = [
    { value: "cmini", label: "Chief Minister" },
    { value: "counminic", label: "Council of Minister" },
  ];
  const chiefselecta = [
    { value: "cminia", label: "Chief Minister" },
    { value: "counminica", label: "Council of Minister" },
  ];
  const primeselecta = [
    { value: "pminia", label: "Prime Minister" },
    { value: "counminia", label: "Council of Minister" },
  ];
  const publicselect = [
    { value: "memberparli", label: "Member of Parliament Assembly" },
    { value: "Memberleg", label: "Member of Legistative Assembly" },
    { value: "membercouncicorp", label: "Member of Council for Corporation" },
    { value: "membercouncimuni", label: "Member of Council for Municipality" },
    {
      value: "membercouncitown",
      label: "Member of Council for Town Panchayat",
    },
    { value: "distward", label: "District Panchayat Ward Member" },
    { value: "townward", label: "Panchayat Union Ward Member" },
  ];

  const publicselecta = [
    { value: "memberparlia", label: "Member of Parliament Assembly" },
    { value: "Memberlega", label: "Member of Legistative Assembly" },
    { value: "membercouncicorpa", label: "Member of Council for Corporation" },
    { value: "membercouncimunia", label: "Member of Council for Municipality" },
    {
      value: "membercouncitowna",
      label: "Member of Council for Town Panchayat",
    },
    { value: "distwarda", label: "District Panchayat Ward Member" },
    { value: "townwarda", label: "Panchayat Union Ward Member" },
  ];

  const userData1 = [
    {
      SNo: "1",
      member: "Ravi",
      gender: "Administration",
      address: "Manager",
      role: "General",
      office: "Youth Wing Office",
      type: "Party Wings Office",
    },
  ];

  const fieldsleg = [
    {
      key: "SNo",
      label: "S.NO",
      _style: { width: "3%" },
      sorter: false,
      filter: false,
    },
    {
      key: "consti",
      label: "Name of the Constituency",
      _style: { width: "10%" },
    },
    { key: "member", label: "Name of the Member", _style: { width: "10%" } },
    { key: "by", label: "Allocated By", _style: { width: "10%" } },
    { key: "on", label: "Allocated On", _style: { width: "10%" } },
    {
      key: "show_details",
      label: "Action",
      _style: { width: "10%" },
      sorter: false,
      filter: false,
    },
  ];
  const userData = [
    {
      SNo: "1",
      member: "RajNidhi",
      gender: "Male",
      address: "Tamilnadu,Chennai,Mylapore,Nadvanam road-60004",
      by: "Jai Balaji",
      on: "27/07/2021",
    },
    {
      SNo: "2",
      member: "Kali",
      gender: "Male",
      address: "Tamilnadu,Chennai,Guindy,Kuyil kuppam road-600015",
      by: "Jai Balaji",
      on: "27/07/2021",
    },
  ];
  // const [communication, setCommunication] = useState("");
  // const closedCommunication = (e) => {
  //   setCommunication(e)
  //   if(e.value ==="role")
  //   setCommunication(history.push("/DesignationAllocateCC"));
  //   if(e.value ==="public")
  //   setCommunication(history.push("/PublicAllocate"));
  // };fieldscorp
  const userDatacorp = [];
  const fieldsmuni = [
    {
      key: "SNo",
      label: "S.NO",
      _style: { width: "3%" },
      sorter: false,
      filter: false,
    },
    {
      key: "corp",
      label: "Name of the Municipality ",
      _style: { width: "10%" },
    },
    { key: "ward", label: "Name of the Ward Number", _style: { width: "10%" } },
    { key: "member", label: "Name of the Member", _style: { width: "10%" } },
    { key: "by", label: "Allocated By", _style: { width: "10%" } },
    { key: "on", label: "Allocated On", _style: { width: "10%" } },
    {
      key: "show_details",
      label: "Action",
      _style: { width: "10%" },
      sorter: false,
      filter: false,
    },
  ];
  const fieldstown = [
    {
      key: "SNo",
      label: "S.NO",
      _style: { width: "3%" },
      sorter: false,
      filter: false,
    },
    {
      key: "corp",
      label: "Name of the Town Panchayat ",
      _style: { width: "10%" },
    },
    { key: "ward", label: "Name of the Ward Number", _style: { width: "10%" } },
    { key: "member", label: "Name of the Member", _style: { width: "10%" } },
    { key: "by", label: "Allocated By", _style: { width: "10%" } },
    { key: "on", label: "Allocated On", _style: { width: "10%" } },
    {
      key: "show_details",
      label: "Action",
      _style: { width: "10%" },
      sorter: false,
      filter: false,
    },
  ];
  const fieldsprime = [
    {
      key: "SNo",
      label: "S.NO",
      _style: { width: "3%" },
      sorter: false,
      filter: false,
    },
    {
      key: "corp",
      label: "Name of the Ministry ",
      _style: { width: "10%" },
    },
    { key: "member", label: "Name of the Member", _style: { width: "10%" } },
    { key: "by", label: "Allocated By", _style: { width: "10%" } },
    { key: "on", label: "Allocated On", _style: { width: "10%" } },
    {
      key: "show_details",
      label: "Action",
      _style: { width: "10%" },
      sorter: false,
      filter: false,
    },
  ];
  const fieldscorp = [
    {
      key: "SNo",
      label: "S.NO",
      _style: { width: "3%" },
      sorter: false,
      filter: false,
    },
    { key: "corp", label: "Name of the Corporation", _style: { width: "10%" } },
    { key: "ward", label: "Name of the Ward Number", _style: { width: "10%" } },
    { key: "member", label: "Name of the Member", _style: { width: "10%" } },
    { key: "by", label: "Allocated By", _style: { width: "10%" } },
    { key: "on", label: "Allocated On", _style: { width: "10%" } },
    {
      key: "show_details",
      label: "Action",
      _style: { width: "10%" },
      sorter: false,
      filter: false,
    },
  ];

  const fieldwarddist = [
    {
      key: "SNo",
      label: "S.NO",
      _style: { width: "3%" },
      sorter: false,
      filter: false,
    },
    {


      key: "ward",
      label: "Number of the Ward",
      _style: { width: "10%" },
    },
    { key: "member", label: "Name of the Member", _style: { width: "10%" } },
    { key: "by", label: "Allocated By", _style: { width: "10%" } },
    { key: "on", label: "Allocated On", _style: { width: "10%" } },
    {
      key: "show_details",
      label: "Action",
      _style: { width: "10%" },
      sorter: false,
      filter: false,
    },
  ];
  const fieldschief = [
    {
      key: "SNo",
      label: "S.NO",
      _style: { width: "3%" },
      sorter: false,
      filter: false,
    },
    {
      key: "ministry",
      label: "Name of the Ministry",
      _style: { width: "10%" },
    },
    { key: "member", label: "Name of the Member", _style: { width: "10%" } },
    { key: "by", label: "Allocated By", _style: { width: "10%" } },
    { key: "on", label: "Allocated On", _style: { width: "10%" } },
    {
      key: "show_details",
      label: "Action",
      _style: { width: "10%" },
      sorter: false,
      filter: false,
    },
  ];
  const fields = [
    {
      key: "SNo",
      label: "S.NO",
      _style: { width: "3%" },
      sorter: false,
      filter: false,
    },
    { key: "member", label: "Name of the Member", _style: { width: "10%" } },
    { key: "gender", label: "Gender", _style: { width: "10%" } },
    { key: "address", label: "Address", _style: { width: "10%" } },
    { key: "by", label: "Allocated By", _style: { width: "10%" } },
    { key: "on", label: "Allocated On", _style: { width: "10%" } },
    {
      key: "show_details",
      label: "Action",
      _style: { width: "10%" },
      sorter: false,
      filter: false,
    },
  ];
  const userdatat = [];
  const fieldsdegi = [
    {
      key: "SNo",
      label: "S.NO",
      _style: { width: "3%" },
      sorter: false,
      filter: false,
    },
    { key: "office", label: "Name of the Office", _style: { width: "10%" } },
    { key: "type", label: "Type of Office", _style: { width: "10%" } },
    { key: "gender", label: "Department", _style: { width: "10%" } },
    { key: "address", label: "Designation", _style: { width: "10%" } },
    { key: "role", label: "Role", _style: { width: "10%" } },
    { key: "member", label: "Name of the Member", _style: { width: "10%" } },
    { key: "by", label: "Allocated By", _style: { width: "10%" } },
    { key: "on", label: "Allocated On", _style: { width: "10%" } },
    {
      key: "show_details",
      label: "Action",
      _style: { width: "10%" },
      sorter: false,
      filter: false,
    },
  ];
  const fields1 = [
    {
      key: "SNo",
      label: "S.NO",
      _style: { width: "3%" },
      sorter: false,
      filter: false,
    },
    { key: "office", label: "Name of the Office", _style: { width: "10%" } },
    { key: "type", label: "Type of Office", _style: { width: "10%" } },
    { key: "gender", label: "Department", _style: { width: "10%" } },
    { key: "address", label: "Designation", _style: { width: "10%" } },
    { key: "role", label: "Role", _style: { width: "10%" } },
    { key: "member", label: "Name of the Member", _style: { width: "10%" } },

    {
      key: "show_details",
      label: "Action",
      _style: { width: "10%" },
      sorter: false,
      filter: false,
    },
  ];
  const [show, setShow] = useState(true);
  const [show1, setShow1] = useState(false);

  return (
    <div>
      <React.Fragment>
        {show && (
          <div>
            <CCard
              className={"cardSave"}
              style={{
                overflow: "auto",
                overflowX: "hidden",
              }}
            >
              <div className={"main-headerlabel"}>
                <span className={"header-label"}>
                  Allocate Closed Communication Channel
                </span>
              </div>
              <CContainer>
                <CRow sm="12" md="12" lg="12">
                  <CCol>
                    <CButton
                      shape={"pill"}
                      id={"suspendButton"}
                      className={"saveBtn"}
                      onClick={sowmember}
                      style={{ marginLeft: "1em", marginTop: "2em" }}
                    >
                      Allocate Closed CC
                    </CButton>
                  </CCol>
                </CRow>

                <CRow sm="12" md="12" lg="12">
                  <CCol>
                    <CContainer>
                      <CRow
                        sm="12"
                        md="12"
                        lg="12"
                        style={{ padding: "10px 0px" }}
                      >
                        <CCol>
                          <CLabel>
                            <b>Closed CC for</b>
                          </CLabel>
                          <Select options={select} onChange={cahange} />
                        </CCol>
                      </CRow>
                    </CContainer>
                  </CCol>

                  <CCol>
                    {mem && (
                      <div>
                        <CContainer>
                          <CRow
                            sm="12"
                            md="12"
                            lg="12"
                            style={{ padding: "10px 0px" }}
                          >
                            <CCol>
                              <CLabel>
                                <b>State</b>
                              </CLabel>
                              <Select />
                            </CCol>
                          </CRow>
                          <CRow
                            sm="12"
                            md="12"
                            lg="12"
                            style={{ padding: "10px 0px" }}
                          >
                            <CCol>
                              <CLabel>
                                <b>District / City</b>
                              </CLabel>
                              <Select />
                            </CCol>
                          </CRow>
                          <CRow
                            sm="12"
                            md="12"
                            lg="12"
                            style={{ padding: "10px 0px" }}
                          >
                            <CCol>
                              <CLabel>
                                <b>Area / Village</b>
                              </CLabel>
                              <Select />
                            </CCol>
                          </CRow>
                        </CContainer>
                      </div>
                    )}

                    {desig && (
                      <div>
                        <CContainer>
                          <CRow
                            sm="12"
                            md="12"
                            lg="12"
                            style={{ padding: "10px 0px" }}
                          >
                            <CCol>
                              <CLabel>
                                <b>Type of Office</b>
                              </CLabel>
                              <Select options={typty} />
                            </CCol>
                          </CRow>
                          <CRow
                            sm="12"
                            md="12"
                            lg="12"
                            style={{ padding: "10px 0px" }}
                          >
                            <CCol>
                              <CLabel>
                                <b>Type of Party / Party Wings Office</b>
                              </CLabel>
                              <Select />
                            </CCol>
                          </CRow>
                          <CRow
                            sm="12"
                            md="12"
                            lg="12"
                            style={{ padding: "10px 0px" }}
                          >
                            <CCol>
                              <CLabel>
                                <b>Name of the Office Location</b>
                              </CLabel>
                              <Select />
                            </CCol>
                          </CRow>
                        </CContainer>
                      </div>
                    )}
                    {pubrep && (
                      <div>
                        <CContainer>
                          <CRow
                            sm="12"
                            md="12"
                            lg="12"
                            style={{ padding: "10px 0px" }}
                          >
                            <CCol>
                              <CLabel>
                                <b>Type of Public Representative</b>
                              </CLabel>
                              <Select
                                options={publicselect}
                                onChange={pubchn}
                              />
                            </CCol>
                          </CRow>
                        </CContainer>
                      </div>
                    )}

                    {minit && (
                      <div>
                        <CContainer>
                          <CRow
                            sm="12"
                            md="12"
                            lg="12"
                            style={{ padding: "10px 0px" }}
                          >
                            <CCol>
                              <CLabel>
                                <b>Type of Minister</b>
                              </CLabel>
                              <Select
                                options={primeselect}
                                onChange={primrchn}
                              />
                            </CCol>
                          </CRow>
                        </CContainer>
                      </div>
                    )}
                    {minits && (
                      <div>
                        <CContainer>
                          <CRow
                            sm="12"
                            md="12"
                            lg="12"
                            style={{ padding: "10px 0px" }}
                          >
                            <CCol>
                              <CLabel>
                                <b>Type of Minister</b>
                              </CLabel>
                              <Select
                                options={chiefselect}
                                onChange={chiefchn}
                              />
                            </CCol>
                          </CRow>
                        </CContainer>
                      </div>
                    )}
                     {chiefstate && (
                      <div>
                        <CContainer>
                          <CRow
                            sm="12"
                            md="12"
                            lg="12"
                            style={{ padding: "10px 0px" }}
                          >
                            <CCol>
                              <CLabel>
                                <b>State</b>
                              </CLabel>
                              <Select />
                            </CCol>
                          </CRow>                         
                        </CContainer>
                      </div>
                    )}

                    {publeg && (
                      <div>
                        <CContainer>
                          <CRow
                            sm="12"
                            md="12"
                            lg="12"
                            style={{ padding: "10px 0px" }}
                          >
                            <CCol>
                              <CLabel>
                                <b>Type of Public Representative</b>
                              </CLabel>
                              <Select
                                options={publicselect}
                                onChange={pubchn}
                              />
                            </CCol>
                          </CRow>
                          <CRow
                            sm="12"
                            md="12"
                            lg="12"
                            style={{ padding: "10px 0px" }}
                          >
                            <CCol>
                              <CLabel>
                                <b>State</b>
                              </CLabel>
                              <Select />
                            </CCol>
                          </CRow>
                        </CContainer>
                      </div>
                    )}
                    {councorp && (
                      <div>
                        <CContainer>
                          <CRow
                            sm="12"
                            md="12"
                            lg="12"
                            style={{ padding: "10px 0px" }}
                          >
                            <CCol>
                              <CLabel>
                                <b>Type of Public Representative</b>
                              </CLabel>
                              <Select
                                options={publicselect}
                                onChange={pubchn}
                              />
                            </CCol>
                          </CRow>
                          <CRow
                            sm="12"
                            md="12"
                            lg="12"
                            style={{ padding: "10px 0px" }}
                          >
                            <CCol>
                              <CLabel>
                                <b>State</b>
                              </CLabel>
                              <Select />
                            </CCol>
                          </CRow>
                          <CRow
                            sm="12"
                            md="12"
                            lg="12"
                            style={{ padding: "10px 0px" }}
                          >
                            <CCol>
                              <CLabel>
                                <b>District / City</b>
                              </CLabel>
                              <Select />
                            </CCol>
                          </CRow>
                        </CContainer>
                      </div>
                    )}
                  </CCol>
                </CRow>
              </CContainer>

              {memg && (
                <div>
                
                  <CRow
                    sm="12"
                    md="12"
                    lg="12"
                    style={{
                      padding: "4%",
                      marginTop: "-8%",
                      marginLeft: "-10px",
                    }}
                  >
                      <CContainer>
                    <CRow md="12" lg="12" sm="12">
                      <CCol md="12">
                        <CLabel className={"header-label22"}>
                          LIST of ALLOCATED CLOSED CC FOR{" "}
                          <span style={{ color: "#EC6EAD" }}>PARTY MEMBER</span>
                        </CLabel>
                      </CCol>
                    </CRow>
                  </CContainer>
                    <CDataTable
                      items={userData}
                      fields={fields}
                      columnFilter
                      tableFilter
                      // tableLabel={table}
                      itemsPerPageSelect
                      itemsPerPage={5}
                      hover
                      sorter
                      pagination
                      scopedSlots={{
                        show_details: (item, index) => {
                          return (
                            <td className="py-1">
                              <CRow sm="12" md="12" lg="12">
                                <CCol style={{ fontSize: "1.15rem" }} md="16">
                                  <Dropdown
                                    className={"ant-dropdown-cutomize-by-me"}
                                    overlay={() => menus(item)}
                                  >
                                    <a
                                      href
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
              {Chiefg && (
                <div>
                 
                  <CRow
                    sm="12"
                    md="12"
                    lg="12"
                    style={{
                      padding: "4%",
                      marginTop: "1%",
                      marginLeft: "-10px",
                    }}
                  >
                     <CContainer>
                    <CRow md="12" lg="12" sm="12">
                      <CCol md="12">
                        <CLabel
                          className={"header-label22"}                          
                        >
                          LIST of ALLOCATED CLOSED CC FOR{" "}
                          <span style={{ color: "#EC6EAD" }}>
                            Chief Minister
                          </span>
                        </CLabel>
                      </CCol>
                    </CRow>
                  </CContainer>
                    <CDataTable
                      items={userData}
                      fields={fieldschief}
                      columnFilter
                      tableFilter
                      // tableLabel={table}
                      itemsPerPageSelect
                      itemsPerPage={5}
                      hover
                      sorter
                      pagination
                      scopedSlots={{
                        show_details: (item, index) => {
                          return (
                            <td className="py-1">
                              <CRow sm="12" md="12" lg="12">
                                <CCol style={{ fontSize: "1.15rem" }} md="16">
                                  <Dropdown
                                    className={"ant-dropdown-cutomize-by-me"}
                                    overlay={() => menus(item)}
                                  >
                                    <a
                                      href
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


              {Chiefgg && (
                <div>
                
                  <CRow
                    sm="12"
                    md="12"
                    lg="12"
                    style={{
                      padding: "4%",
                      marginTop: "1%",
                      marginLeft: "-10px",
                    }}
                  >
                      <CContainer>
                    <CRow md="12" lg="12" sm="12">
                      <CCol md="12">
                        <CLabel
                          className={"header-label22"}                          
                        >
                          LIST of ALLOCATED CLOSED CC FOR{" "}
                          <span style={{ color: "#EC6EAD" }}>
                            Council of Minister
                          </span>
                        </CLabel>
                      </CCol>
                    </CRow>
                  </CContainer>
                    <CDataTable
                      items={userData}
                      fields={fieldschief}
                      columnFilter
                      tableFilter
                      // tableLabel={table}
                      itemsPerPageSelect
                      itemsPerPage={5}
                      hover
                      sorter
                      pagination
                      scopedSlots={{
                        show_details: (item, index) => {
                          return (
                            <td className="py-1">
                              <CRow sm="12" md="12" lg="12">
                                <CCol style={{ fontSize: "1.15rem" }} md="16">
                                  <Dropdown
                                    className={"ant-dropdown-cutomize-by-me"}
                                    overlay={() => menus(item)}
                                  >
                                    <a
                                      href
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
               {wardg1 && (
                <div>
                
                  <CRow
                    sm="12"
                    md="12"
                    lg="12"
                    style={{
                      padding: "4%",
                      marginTop: "1%",
                      marginLeft: "-10px",
                    }}
                  >
                      <CContainer>
                    <CRow md="12" lg="12" sm="12">
                      <CCol md="12">
                        <CLabel
                          className={"header-label22"}                          
                        >
                          LIST of ALLOCATED CLOSED CC FOR{" "}
                          <span style={{ color: "#EC6EAD" }}>
                            District Panchayat Ward Member
                          </span>
                        </CLabel>
                      </CCol>
                    </CRow>
                  </CContainer>
                    <CDataTable
                      items={userData}
                      fields={fieldwarddist}
                      columnFilter
                      tableFilter
                      // tableLabel={table}
                      itemsPerPageSelect
                      itemsPerPage={5}
                      hover
                      sorter
                      pagination
                      scopedSlots={{
                        show_details: (item, index) => {
                          return (
                            <td className="py-1">
                              <CRow sm="12" md="12" lg="12">
                                <CCol style={{ fontSize: "1.15rem" }} md="16">
                                  <Dropdown
                                    className={"ant-dropdown-cutomize-by-me"}
                                    overlay={() => menus(item)}
                                  >
                                    <a
                                      href
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
              {wardg2 && (
                <div>
                
                  <CRow
                    sm="12"
                    md="12"
                    lg="12"
                    style={{
                      padding: "4%",
                      marginTop: "1%",
                      marginLeft: "-10px",
                    }}
                  >
                      <CContainer>
                    <CRow md="12" lg="12" sm="12">
                      <CCol md="12">
                        <CLabel
                          className={"header-label22"}                          
                        >
                          LIST of ALLOCATED CLOSED CC FOR{" "}
                          <span style={{ color: "#EC6EAD" }}>
                            Town Panchayat Ward Member
                          </span>
                        </CLabel>
                      </CCol>
                    </CRow>
                  </CContainer>
                    <CDataTable
                      items={userData}
                      fields={fieldwarddist}
                      columnFilter
                      tableFilter
                      // tableLabel={table}
                      itemsPerPageSelect
                      itemsPerPage={5}
                      hover
                      sorter
                      pagination
                      scopedSlots={{
                        show_details: (item, index) => {
                          return (
                            <td className="py-1">
                              <CRow sm="12" md="12" lg="12">
                                <CCol style={{ fontSize: "1.15rem" }} md="16">
                                  <Dropdown
                                    className={"ant-dropdown-cutomize-by-me"}
                                    overlay={() => menus(item)}
                                  >
                                    <a
                                      href
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
              {councorpg && (
                <div>
                
                  <CRow
                    sm="12"
                    md="12"
                    lg="12"
                    style={{
                      padding: "4%",
                      marginTop: "-1%",
                      marginLeft: "-10px",
                    }}
                  >
                      <CContainer>
                    <CRow md="12" lg="12" sm="12">
                      <CCol md="12">
                        <CLabel className={"header-label22"}>
                          LIST ALLOCATED CLOSED CC FOR{" "}
                          <span style={{ color: "#EC6EAD" }}>CORPORATION</span>
                        </CLabel>
                      </CCol>
                    </CRow>
                  </CContainer>
                    <CDataTable
                      items={userDatacorp}
                      fields={fieldscorp}
                      columnFilter
                      tableFilter
                      // tableLabel={"List of Allocate Closed CC"}
                      itemsPerPageSelect
                      itemsPerPage={5}
                      hover
                      sorter
                      pagination
                      scopedSlots={{
                        show_details: (item, index) => {
                          return (
                            <td className="py-1">
                              <CRow sm="12" md="12" lg="12">
                                <CCol style={{ fontSize: "1.15rem" }} md="16">
                                  <Dropdown
                                    className={"ant-dropdown-cutomize-by-me"}
                                    overlay={() => menus(item)}
                                  >
                                    <a
                                      href
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
              {counmunig && (
                <div>
                  
                  <CRow
                    sm="12"
                    md="12"
                    lg="12"
                    style={{
                      padding: "4%",
                      marginTop: "-1%",
                      marginLeft: "-10px",
                    }}
                  >
                    <CContainer>
                    <CRow md="12" lg="12" sm="12">
                      <CCol md="12">
                        <CLabel className={"header-label22"}>
                          LIST ALLOCATED CLOSED CC FOR{" "}
                          <span style={{ color: "#EC6EAD" }}>MUNICIPALITY</span>
                        </CLabel>
                      </CCol>
                    </CRow>
                  </CContainer>
                    <CDataTable
                      items={userDatacorp}
                      fields={fieldsmuni}
                      columnFilter
                      tableFilter
                      // tableLabel={"List of Allocate Closed CC"}
                      itemsPerPageSelect
                      itemsPerPage={5}
                      hover
                      sorter
                      pagination
                      scopedSlots={{
                        show_details: (item, index) => {
                          return (
                            <td className="py-1">
                              <CRow sm="12" md="12" lg="12">
                                <CCol style={{ fontSize: "1.15rem" }} md="16">
                                  <Dropdown
                                    className={"ant-dropdown-cutomize-by-me"}
                                    overlay={() => menus(item)}
                                  >
                                    <a
                                      href
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
              {countowng && (
                <div>
                 
                  <CRow
                    sm="12"
                    md="12"
                    lg="12"
                    style={{
                      padding: "4%",
                      marginTop: "-1%",
                      marginLeft: "-10px",
                    }}
                  >
                     <CContainer>
                    <CRow md="12" lg="12" sm="12">
                      <CCol md="12">
                        <CLabel className={"header-label22"}>
                          LIST ALLOCATED CLOSED CC FOR{" "}
                          <span style={{ color: "#EC6EAD" }}>
                            Town Panchayat
                          </span>
                        </CLabel>
                      </CCol>
                    </CRow>
                  </CContainer>
                    <CDataTable
                      items={userDatacorp}
                      fields={fieldstown}
                      columnFilter
                      tableFilter
                      // tableLabel={"List of Allocate Closed CC"}
                      itemsPerPageSelect
                      itemsPerPage={5}
                      hover
                      sorter
                      pagination
                      scopedSlots={{
                        show_details: (item, index) => {
                          return (
                            <td className="py-1">
                              <CRow sm="12" md="12" lg="12">
                                <CCol style={{ fontSize: "1.15rem" }} md="16">
                                  <Dropdown
                                    className={"ant-dropdown-cutomize-by-me"}
                                    overlay={() => menus(item)}
                                  >
                                    <a
                                      href
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
              {desigg && (
                <div>
                
                    <CRow md="12" lg="12" sm="12">
                      <CCol md="12">
                        <CLabel className={"header-label23"}>
                          LIST ALLOCATED CLOSED CC FOR{" "}
                          <span style={{ color: "#EC6EAD" }}>-PARTY ROLE</span>
                        </CLabel>
                      </CCol>
                    </CRow>
                 
                  <CRow
                    sm="12"
                    md="12"
                    lg="12"
                    style={{
                      padding: "4%",
                      marginTop: "-8%",
                      marginLeft: "-10px",
                    }}
                  >
                    <CDataTable
                      items={userdatat}
                      fields={fieldsdegi}
                      columnFilter
                      tableFilter
                      itemsPerPageSelect
                      itemsPerPage={5}
                      hover
                      sorter
                      pagination
                      scopedSlots={{
                        show_details: (item, index) => {
                          return (
                            <td className="py-1">
                              <CRow sm="12" md="12" lg="12">
                                <CCol style={{ fontSize: "1.15rem" }} md="16">
                                  <Dropdown
                                    className={"ant-dropdown-cutomize-by-me"}
                                    overlay={() => menus(item)}
                                  >
                                    <a
                                      href
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
              {publegg && (
                <div>
                  
                  <CRow
                    sm="12"
                    md="12"
                    lg="12"
                    style={{
                      padding: "4%",
                      marginTop: "-1%",
                      marginLeft: "-10px",
                    }}
                  >
                    <CContainer>
                    <CRow md="12" lg="12" sm="12">
                      <CCol md="12">
                        <CLabel className={"header-label22"}>
                          LIST ALLOCATED CLOSED CC FOR{" "}
                          <span style={{ color: "#EC6EAD" }}>ASSEMBLY</span>
                        </CLabel>
                      </CCol>
                    </CRow>
                  </CContainer>
                    <CDataTable
                      items={userdatat}
                      fields={fieldsleg}
                      columnFilter
                      tableFilter
                      itemsPerPageSelect
                      itemsPerPage={5}
                      hover
                      sorter
                      pagination
                      scopedSlots={{
                        show_details: (item, index) => {
                          return (
                            <td className="py-1">
                              <CRow sm="12" md="12" lg="12">
                                <CCol style={{ fontSize: "1.15rem" }} md="16">
                                  <Dropdown
                                    className={"ant-dropdown-cutomize-by-me"}
                                    overlay={() => menus(item)}
                                  >
                                    <a
                                      href
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
              {primeminig && (
                <div>
                
                  <CRow
                    sm="12"
                    md="12"
                    lg="12"
                    style={{
                      padding: "4%",
                      marginTop: "1%",
                      marginLeft: "-10px",
                    }}
                  >
                      <CContainer>
                    <CRow md="12" lg="12" sm="12">
                      <CCol md="12">
                        <CLabel
                          className={"header-label22"}
                          
                        >
                          LIST ALLOCATED CLOSED CC FOR{" "}
                          <span style={{ color: "#EC6EAD" }}>
                            Prime Minister
                          </span>
                        </CLabel>
                      </CCol>
                    </CRow>
                  </CContainer>
                    <CDataTable
                      items={userDatacorp}
                      fields={fieldsprime}
                      columnFilter
                      tableFilter
                      // tableLabel={"List of Allocate Closed CC"}
                      itemsPerPageSelect
                      itemsPerPage={5}
                      hover
                      sorter
                      pagination
                      scopedSlots={{
                        show_details: (item, index) => {
                          return (
                            <td className="py-1">
                              <CRow sm="12" md="12" lg="12">
                                <CCol style={{ fontSize: "1.15rem" }} md="16">
                                  <Dropdown
                                    className={"ant-dropdown-cutomize-by-me"}
                                    overlay={() => menus(item)}
                                  >
                                    <a
                                      href
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
              {primeminigg && (
                <div>
                  
                  <CRow
                    sm="12"
                    md="12"
                    lg="12"
                    style={{
                      padding: "4%",
                      marginTop: "1%",
                      marginLeft: "-10px",
                    }}
                  >
                    <CContainer>
                    <CRow md="12" lg="12" sm="12">
                      <CCol md="12">
                        <CLabel
                          className={"header-label22"}                          
                        >
                          LIST ALLOCATED CLOSED CC FOR{" "}
                          <span style={{ color: "#EC6EAD" }}>
                            Council of Minister
                          </span>
                        </CLabel>
                      </CCol>
                    </CRow>
                  </CContainer>
                    <CDataTable
                      items={userDatacorp}
                      fields={fieldsprime}
                      columnFilter
                      tableFilter
                      // tableLabel={"List of Allocate Closed CC"}
                      itemsPerPageSelect
                      itemsPerPage={5}
                      hover
                      sorter
                      pagination
                      scopedSlots={{
                        show_details: (item, index) => {
                          return (
                            <td className="py-1">
                              <CRow sm="12" md="12" lg="12">
                                <CCol style={{ fontSize: "1.15rem" }} md="16">
                                  <Dropdown
                                    className={"ant-dropdown-cutomize-by-me"}
                                    overlay={() => menus(item)}
                                  >
                                    <a
                                      href
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

        {show1 && (
          <div>
            <CCard
              className={"cardSave"}
              style={{
                overflow: "auto",
                overflowX: "hidden",
              }}
            >
              <div className={"main-headerlabel"}>
                <span className={"header-label"}>
                  Allocate Closed Communication Channel
                </span>
              </div>
              <CContainer>
                <CRow sm="12" md="12" lg="12">
                  <CCol>
                    <CContainer>
                      <CRow
                        sm="12"
                        md="12"
                        lg="12"
                        style={{ marginLeft: "-4.8em" }}
                      >
                        <CCol className={"column-align"} md="3">
                          <CLabel>
                            <b>Closed CC for</b>
                          </CLabel>
                          <Select
                            options={selectadh}
                            onChange={partroleaddchng}
                          />
                        </CCol>
                        {bacbut && (
                        <div>
                          <CCol>
                            <CButton
                              style={{
                                position: "absolute",
                                top: "-20px",
                                backgroundColor: "green",
                                border: "1px solid green",
                                right: "-880px",
                              }}
                              className={"cancelBtn"}
                              onClick={cancelsowmember}
                            >
                              Back
                            </CButton>
                          </CCol>
                        </div>
                      )}
                      </CRow>
                    </CContainer>

                    {pubrep && (
                      <div>
                        <CContainer>
                          <CRow
                            sm="12"
                            md="12"
                            lg="12"
                            style={{ padding: "10px 0px" }}
                          >
                            <CCol
                              className={"column-align"}
                              md="3"
                              style={{ marginLeft: "27em", marginTop: "-5em" }}
                            >
                              <CLabel>
                                <b>Type of Public Representative</b>
                              </CLabel>
                              <Select
                                options={publicselecta}
                                onChange={partroleaddsub}
                              />
                            </CCol>
                          </CRow>
                        </CContainer>
                      </div>
                    )}

                    {minitta && (
                      <div>
                        <CContainer>
                          <CRow
                            sm="12"
                            md="12"
                            lg="12"
                            style={{ padding: "10px 0px" }}
                          >
                            <CCol
                              className={"column-align"}
                              md="3"
                              style={{ marginLeft: "27em", marginTop: "-5em" }}
                            >
                              <CLabel>
                                <b>Type of Minister</b>
                              </CLabel>
                              <Select
                                options={primeselecta}
                                onChange={primeeaddsub}
                              />
                            </CCol>
                          </CRow>
                        </CContainer>
                      </div>
                    )}
                      {minittac && (
                      <div>
                        <CContainer>
                          <CRow
                            sm="12"
                            md="12"
                            lg="12"
                            style={{ padding: "10px 0px" }}
                          >
                            <CCol
                              className={"column-align"}
                              md="3"
                              style={{ marginLeft: "27em", marginTop: "-5em" }}
                            >
                              <CLabel>
                                <b>Type of Minister</b>
                              </CLabel>
                              <Select
                                options={chiefselecta}
                                onChange={chiefsubaa}
                              />
                            </CCol>
                          </CRow>
                        </CContainer>
                      </div>
                    )}
                  </CCol>
                </CRow>

                {addfirst && (
                  <div>
                   
                      <CCol style={{ top: "2em" }}>
                        <CLabel
                          style={{
                            fontSize: "18px",
                            fontFamily: "Open Sans",
                            fontWeight: "700",
                          }}
                        >
                          Select Locations
                        </CLabel>
                      </CCol>
                      <CRow
                        sm="12"
                        md="12"
                        lg="12"
                        style={{ marginLeft: "-3.5em", marginTop: "15px" }}
                      >
                        <CCol className={"column-align"} md="3">
                          <CLabel className={"label-name-1"}>
                            State
                            <span className={"text-danger"}>*</span>
                          </CLabel>
                          <Select
                            id={"municipalstatename"}
                            name={"state"}
                            placeholder={"Select State"}
                          />
                        </CCol>
                        <CCol className={"column-align"} md="3">
                          <CLabel className={"label-name-1"}>
                            District / City
                            <span className={"text-danger"}>*</span>
                          </CLabel>
                          <Select
                            id={"municipalcorporation"}
                            name={"city"}
                            placeholder={"Select District / City"}
                          />
                        </CCol>

                        <CCol className={"column-align"} md="3">
                          <CLabel className={"label-name-1"}>
                            Area / Village
                            <span className={"text-danger"}>*</span>
                          </CLabel>
                          <Select
                            id={"municipalwardename"}
                            name={"Ward"}
                            placeholder={"Select Area / Village"}
                          />
                        </CCol>
                      </CRow>

                      <div>
                    <CRow sm="12" md="12" lg="12">
                      <CCol md="9">
                      <CRow
                        sm="12"
                        md="12"
                        lg="12"
                        className={"row-alignment"}
                        style={{ marginLeft: "-5em" }}
                      >
                        <CCol className={"column-align"} md="7">
                          <CLabel className={"label-name"}>
                            Name of the Member
                            <span className={"text-danger"}>*</span>
                          </CLabel>
                          <Select
                            className={"input-align-2"}
                            id={"nameofmemberassignpartyposting"}
                            name={"state"}
                            placeholder={"Select Name of the Member"}
                          />
                        </CCol>
                      </CRow>
                  

                    <CCol style={{ top: "2em", marginLeft: "20.5em" }}>
                      <CLabel
                        style={{
                          fontSize: "18px",
                          fontFamily: "Open Sans",
                          fontWeight: "700",
                          color: "#4592d8",
                        }}
                      >
                        Or
                      </CLabel>
                    </CCol>

                    <CContainer>
                      <CRow sm="12" md="12" lg="12">
                        <CCol style={{ marginTop: "2em", marginLeft: "1em" }}>
                          <CLabel
                            style={{
                              fontSize: "18px",
                              fontFamily: "Open Sans",
                              fontWeight: "700",
                            }}
                          >
                            Word Search
                          </CLabel>
                        </CCol>
                      </CRow>
                      <CRow
                        sm="12"
                        md="12"
                        lg="12"
                        className={"row-alignment"}
                        style={{ marginLeft: "-5em" }}
                      >
                        <CCol className={"column-align"} md="7">
                          <CLabel className={"label-name"}>
                            Name of the Member
                            <span className={"text-danger"}>*</span>
                          </CLabel>
                          <Select
                            className={"input-align-2"}
                            id={"nameofmemberassignpartyposting"}
                            name={"member"}
                            placeholder={"Select Name of the Member"}
                          />
                        </CCol>
                      </CRow>
                    
                    </CContainer>
                    <CContainer>
                      <CRow sm="12" md="12" lg="12">
                        <CCol
                          style={{ marginTop: "2.5em", marginLeft: "1em" }}
                        >
                          <CLabel
                            style={{
                              fontSize: "18px",
                              fontFamily: "Open Sans",
                              fontWeight: "700",
                            }}
                          >
                            Details of Closed CC
                          </CLabel>
                        </CCol>
                      </CRow>
                      <CRow
                        sm="12"
                        md="12"
                        lg="12"
                        className={"seperator-1"}
                        style={{ marginTop: "0.2em", marginLeft: "0.5em" }}
                      >
                        <CCol
                          md="3"
                          style={{ marginLeft: "0em", marginTop: "16px" }}
                        >
                          <CLabel className={"form-labels-1"}>
                            {" "}
                            {
                              <span
                                style={{ color: "black" }}
                                className={"form-labels-6"}
                              >
                                C.C Description
                              </span>
                            }
                            <span className={"text-danger"}> *</span>{" "}
                          </CLabel>
                          <CInput
                            name={"dccDescription"}
                            style={{ textTransform: "uppercase" }}
                            id={"createRoleDccDescription"}
                            onKeyPress={(e) =>
                              FormValidation.value_Without_Symbols(e)
                            }
                            maxLength="30"
                          />
                        </CCol>
                        <CCol
                          className={"column-align"}
                          md="3"
                          style={{ marginLeft: "-1em" }}
                        >
                          <CLabel className={"form-labels-1"}>
                            {" "}
                            {
                              <span
                                style={{ color: "black" }}
                                className={"form-labels-6"}
                              >
                                C.C ID
                              </span>
                            }
                            <span className={"text-danger"}> *</span>{" "}
                          </CLabel>
                          <CInput
                            name={"dccID"}
                            id={"createRoleDccidCode"}
                            readOnly={true}
                            onKeyPress={(e) =>
                              FormValidation.value_Without_Symbols(e)
                            }
                            maxLength="30"
                          />
                        </CCol>
                      </CRow>
                    </CContainer>
                    <CRow sm="12" lg="12" md="10">
                      <CCol
                        md="5"
                        style={{
                          marginLeft: "25em",
                          float: "right",
                          marginTop: "-2.5em",
                          position: "absolute",
                        }}
                      >
                        <CButton
                          style={{
                            float: "right",
                            cursor: "pointer",
                          }}
                          id={"assignpartypostingcancel"}
                          className={"cancelBtn"}
                          onClick={cancelsowmember}
                        >
                          CANCEL
                        </CButton>{" "}
                        <CButton
                          style={{
                            float: "right",
                            marginRight: "15px",
                          }}
                          id={"assignpartypostingsave"}
                          className={"saveBtn"}
                        >
                          Allocate
                        </CButton>{" "}
                      </CCol>
                    </CRow>
                    </CCol>
                    <CCol md="3">
                    <CRow
                        sm="12"
                        md="12"
                        lg="12"
                        style={{ marginLeft: "-150px", marginTop: "50px" }}
                      >
                        <CCol>
                          {/* <ProfileUi
                            imgUrl="https://previews.123rf.com/images/solargaria/solargaria1709/solargaria170900007/85362512-user-icon-male-avatar-in-business-suit-businessman-flat-icon-man-in-business-suit-avatar-of-business.jpg"
                            
                            name="Name"
                            // designation="Gender"
                            born="dob"
                          /> */}
                          <CCard className={"card-container"}>
                            <header>
                              <img
                                src="https://raw.githubusercontent.com/ritaxcorreia/react-profile-card/3b562dc1f28cd3630508d4628aab1e85e25c2682/src/images/bg-pattern-card.svg"
                                alt="male icon"
                                style={{
                                  marginLeft: "0em",
                                  minWidth: "270px",
                                  maxWidth: "270px",
                                  borderRadius: "14px",
                                }}
                              />
                            </header>
                            <img
                              src="https://i.pinimg.com/736x/5f/40/6a/5f406ab25e8942cbe0da6485afd26b71.jpg"
                              alt="member"
                              className={"img"}
                              style={{ marginTop: "-85px" }}
                            />
                            <h2
                              style={{
                                fontSize: "30px",

                                textAlign: "center",
                                textTransform: "uppercase",
                              }}
                            >
                              Name{" "}
                            </h2>
                            <h3
                              style={{
                                fontSize: "20px",
                                textAlign: "center",
                                textTransform: "uppercase",
                              }}
                            >
                              Gender{" "}
                            </h3>
                            <h4
                              style={{
                                fontSize: "18px",
                                textAlign: "center",
                                textTransform: "uppercase",
                              }}
                            >
                              DoB{" "}
                            </h4>
                          </CCard>
                        </CCol>
                      </CRow>
                    </CCol>
                    </CRow>
                    </div>
                    <CRow
                      sm="12"
                      md="12"
                      lg="12"
                      style={{
                        padding: "4%",
                        marginTop: "1.5%",
                        marginLeft: "-10px",
                      }}
                    >
                      <CDataTable
                        items={userData1}
                        fields={fields1}
                        columnFilter
                        tableFilter
                        tableLabel={"Default Allocating Contacts List"}
                        itemsPerPageSelect
                        itemsPerPage={5}
                        hover
                        sorter
                        pagination
                        scopedSlots={{
                          show_details: (item, index) => {
                            return (
                              <td className="py-1">
                                <CRow sm="12" md="12" lg="12">
                                  <CCol style={{ fontSize: "1.15rem" }} md="16">
                                    <Dropdown
                                      className={"ant-dropdown-cutomize-by-me"}
                                      overlay={() => menus(item)}
                                    >
                                      <a
                                        href
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
              </CContainer>
              {addsecond && (
                <div>
                  <CContainer>
                    <CRow
                      sm="12"
                      md="12"
                      lg="12"
                      style={{ marginLeft: "-3em", marginTop: "15px" }}
                    >
                      <CCol className={"column-align"} md="3">
                        <CLabel className={"label-name-1"}>
                          Type of Office
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <Select
                          id={"municipalstatename"}
                          name={"state"}
                          placeholder={"Select Type of Office"}
                          options={typty}
                        />
                      </CCol>
                      <CCol className={"column-align"} md="3">
                        <CLabel className={"label-name-1"}>
                        Type of Party / Party Wings Office
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <Select
                          id={"municipalcorporation"}
                          name={"wings"}
                          placeholder={"Select Party / Party Wings Office"}
                        />
                      </CCol>

                      <CCol className={"column-align"} md="3">
                        <CLabel className={"label-name-1"}>
                          Name of the Office Location
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <Select
                          id={"municipalwardename"}
                          name={"Ward"}
                          placeholder={"Select Name of the Office Location"}
                        />
                      </CCol>
                    </CRow>
                    <div>
                      <CRow>
                        <CCol>
                          <CRow
                      sm="12"
                      md="12"
                      lg="12"
                      className={"row-alignment"}
                      style={{ marginLeft: "-3em" }}
                    >
                      <CCol className={"column-align"} md="7">
                        <CLabel className={"label-name-1"}>
                          Name of the Member with Party Role
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <Select
                          // className={"input-align-2"}
                          id={"nameofmemberassignpartyposting"}
                          name={"state"}
                          placeholder={"Select Name of the Member"}
                        />
                      </CCol>
                    </CRow>
                

                  <CCol style={{ top: "2em", marginLeft: "20.5em" }}>
                    <CLabel
                      style={{
                        fontSize: "18px",
                        fontFamily: "Open Sans",
                        fontWeight: "700",
                        color: "#4592d8",
                      }}
                    >
                      Or
                    </CLabel>
                  </CCol>

                  <CContainer>
                    <CRow sm="12" md="12" lg="12">
                      <CCol style={{ marginTop: "2em", marginLeft: "1em" }}>
                        <CLabel
                          style={{
                            fontSize: "18px",
                            fontFamily: "Open Sans",
                            fontWeight: "700",
                          }}
                        >
                          Word Search
                        </CLabel>
                      </CCol>
                    </CRow>
                    <CRow
                      sm="12"
                      md="12"
                      lg="12"
                      className={"row-alignment"}
                      style={{ marginLeft: "-5em", marginTop: "-1.5em" }}
                    >
                      <CCol className={"column-align"} md="7">
                        <CLabel className={"label-name"}>
                          Name of the Member with Party Role
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <Select
                          className={"input-align-2"}
                          id={"nameofmemberassignpartyposting"}
                          name={"state"}
                          placeholder={"Select Name of the Member"}
                        />
                      </CCol>
                    </CRow>
                   
                  </CContainer>

                  <CContainer>
                    <CRow sm="12" md="12" lg="12">
                      <CCol style={{ marginTop: "2.5em", marginLeft: "1em" }}>
                        <CLabel
                          style={{
                            fontSize: "18px",
                            fontFamily: "Open Sans",
                            fontWeight: "700",
                          }}
                        >
                          Details of Closed CC
                        </CLabel>
                      </CCol>
                    </CRow>
                    <CRow
                      sm="12"
                      md="12"
                      lg="12"
                      className={"seperator-1"}
                      style={{ marginTop: "0.2em", marginLeft: "0.5em" }}
                    >
                      <CCol
                        md="3"
                        style={{ marginLeft: "0em", marginTop: "16px" }}
                      >
                        <CLabel className={"form-labels-1"}>
                          {" "}
                          {
                            <span
                              style={{ color: "black" }}
                              className={"form-labels-6"}
                            >
                              C.C Description
                            </span>
                          }
                          <span className={"text-danger"}> *</span>{" "}
                        </CLabel>
                        <CInput
                          name={"dccDescription"}
                          style={{ textTransform: "uppercase" }}
                          id={"createRoleDccDescription"}
                          onKeyPress={(e) =>
                            FormValidation.value_Without_Symbols(e)
                          }
                          maxLength="30"
                        />
                      </CCol>
                      <CCol
                        className={"column-align"}
                        md="3"
                        style={{ marginLeft: "-1em" }}
                      >
                        <CLabel className={"form-labels-1"}>
                          {" "}
                          {
                            <span
                              style={{ color: "black" }}
                              className={"form-labels-6"}
                            >
                              C.C ID
                            </span>
                          }
                          <span className={"text-danger"}> *</span>{" "}
                        </CLabel>
                        <CInput
                          name={"dccID"}
                          id={"createRoleDccidCode"}
                          readOnly={true}
                          onKeyPress={(e) =>
                            FormValidation.value_Without_Symbols(e)
                          }
                          maxLength="30"
                        />
                      </CCol>
                    </CRow>
                  </CContainer>
                  <CRow sm="12" lg="12" md="10">
                    <CCol
                      md="5"
                      style={{
                        marginLeft: "23em",
                        float: "right",
                        marginTop: "-2.5em",
                        position: "absolute",
                      }}
                    >
                      <CButton
                        style={{
                          float: "right",
                          cursor: "pointer",
                        }}
                        id={"assignpartypostingcancel"}
                        className={"cancelBtn"}
                        onClick={cancelsowmember}
                      >
                        CANCEL
                      </CButton>{" "}
                      <CButton
                        style={{
                          float: "right",
                          marginRight: "15px",
                        }}
                        id={"assignpartypostingsave"}
                        className={"saveBtn"}
                      >
                        Allocate
                      </CButton>{" "}
                    </CCol>
                  </CRow>
                  </CCol>
                  <CCol md="3">

                  <CRow
                      sm="12"
                      md="12"
                      lg="12"
                      style={{ marginLeft: "-150px", marginTop: "100px" }}
                    >
                      <CCol>
                        {/* <ProfileUi
                            imgUrl="https://previews.123rf.com/images/solargaria/solargaria1709/solargaria170900007/85362512-user-icon-male-avatar-in-business-suit-businessman-flat-icon-man-in-business-suit-avatar-of-business.jpg"
                            
                            name="Name"
                            // designation="Gender"
                            born="dob"
                          /> */}
                        <CCard className={"card-container"}>
                          <header>
                            <img
                              src="https://raw.githubusercontent.com/ritaxcorreia/react-profile-card/3b562dc1f28cd3630508d4628aab1e85e25c2682/src/images/bg-pattern-card.svg"
                              alt="male icon"
                              style={{
                                marginLeft: "0em",
                                minWidth: "270px",
                                maxWidth: "270px",
                                borderRadius: "14px",
                              }}
                            />
                          </header>
                          <img
                            src="https://i.pinimg.com/736x/5f/40/6a/5f406ab25e8942cbe0da6485afd26b71.jpg"
                            className={"img"}
                            alt="member"
                            style={{ marginTop: "-85px" }}
                          />
                          <h2
                            style={{
                              fontSize: "30px",

                              textAlign: "center",
                              textTransform: "uppercase",
                            }}
                          >
                            Name{" "}
                          </h2>
                          <h3
                            style={{
                              fontSize: "20px",
                              textAlign: "center",
                              textTransform: "uppercase",
                            }}
                          >
                            Gender{" "}
                          </h3>
                          <h4
                            style={{
                              fontSize: "18px",
                              textAlign: "center",
                              textTransform: "uppercase",
                            }}
                          >
                            DoB{" "}
                          </h4>
                        </CCard>
                      </CCol>
                    </CRow>
                  </CCol>
                  </CRow>
                  </div>
                  <CRow
                    sm="12"
                    md="12"
                    lg="12"
                    style={{
                      padding: "4%",
                      marginTop: "1.5%",
                      marginLeft: "-10px",
                    }}
                  >
                    <CDataTable
                      items={userData1}
                      fields={fields1}
                      columnFilter
                      tableFilter
                      tableLabel={"Default Allocating Contacts List"}
                      itemsPerPageSelect
                      itemsPerPage={5}
                      hover
                      sorter
                      pagination
                      scopedSlots={{
                        show_details: (item, index) => {
                          return (
                            <td className="py-1">
                              <CRow sm="12" md="12" lg="12">
                                <CCol style={{ fontSize: "1.15rem" }} md="16">
                                  <Dropdown
                                    className={"ant-dropdown-cutomize-by-me"}
                                    overlay={() => menus(item)}
                                  >
                                    <a
                                      href
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
                  </CContainer>
                </div>
              )}
              {addthird && (
                <div>
                  <CContainer>
                    <CRow
                      sm="12"
                      md="12"
                      lg="12"
                      style={{ marginLeft: "-3.5em", marginTop: "15px" }}
                    >
                      <CCol className={"column-align"} md="3">
                        <CLabel className={"label-name-1"}>
                          State
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <Select
                          id={"municipalstatename"}
                          name={"state"}
                          placeholder={"Select State"}
                        />
                      </CCol>
                    </CRow>
                   

                       <div>
                         <CRow  sm="12"
                      md="12"
                      lg="12">
                           <CCol md="9">
                    <CRow
                      sm="12"
                      md="12"
                      lg="12"
                      className={"row-alignment"}
                      style={{ marginLeft: "-5em" }}
                    >
                      <CCol className={"column-align"} md="7">
                        <CLabel className={"label-name"}>
                          Name of the Constituency and Elected Member
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <Select
                          className={"input-align-2"}
                          id={"nameofmemberassignpartyposting"}
                          name={"state"}
                          placeholder={"Select Name of the Member"}
                        />
                      </CCol>
                    </CRow>
                 

                  <CContainer>

                  </CContainer>
                  <CContainer>
                    <CRow sm="12" md="12" lg="12">
                      <CCol style={{ marginTop: "2.5em", marginLeft: "1em" }}>
                        <CLabel
                          style={{
                            fontSize: "18px",
                            fontFamily: "Open Sans",
                            fontWeight: "700",
                          }}
                        >
                          Details of Closed CC
                        </CLabel>
                      </CCol>
                    </CRow>
                    <CRow
                      sm="12"
                      md="12"
                      lg="12"
                      className={"seperator-1"}
                      style={{ marginTop: "0.2em", marginLeft: "0.5em" }}
                    >
                      <CCol
                        md="3"
                        style={{ marginLeft: "0em", marginTop: "16px" }}
                      >
                        <CLabel className={"form-labels-1"}>
                          {" "}
                          {
                            <span
                              style={{ color: "black" }}
                              className={"form-labels-6"}
                            >
                              C.C Description
                            </span>
                          }
                          <span className={"text-danger"}> *</span>{" "}
                        </CLabel>
                        <CInput
                          name={"dccDescription"}
                          style={{ textTransform: "uppercase" }}
                          id={"createRoleDccDescription"}
                          onKeyPress={(e) =>
                            FormValidation.value_Without_Symbols(e)
                          }
                          maxLength="30"
                        />
                      </CCol>
                      <CCol
                        className={"column-align"}
                        md="3"
                        style={{ marginLeft: "-1em" }}
                      >
                        <CLabel className={"form-labels-1"}>
                          {" "}
                          {
                            <span
                              style={{ color: "black" }}
                              className={"form-labels-6"}
                            >
                              C.C ID
                            </span>
                          }
                          <span className={"text-danger"}> *</span>{" "}
                        </CLabel>
                        <CInput
                          name={"dccID"}
                          id={"createRoleDccidCode"}
                          readOnly={true}
                          onKeyPress={(e) =>
                            FormValidation.value_Without_Symbols(e)
                          }
                          maxLength="30"
                        />
                      </CCol>
                    </CRow>
                  </CContainer>
                  <CRow sm="12" lg="12" md="10">
                    <CCol
                      md="5"
                      style={{
                        marginLeft: "23em",
                        float: "right",
                        marginTop: "-2.5em",
                        position: "absolute",
                      }}
                    >
                      <CButton
                        style={{
                          float: "right",
                          cursor: "pointer",
                        }}
                        id={"assignpartypostingcancel"}
                        className={"cancelBtn"}
                        onClick={cancelsowmember}
                      >
                        CANCEL
                      </CButton>{" "}
                      <CButton
                        style={{
                          float: "right",
                          marginRight: "15px",
                        }}
                        id={"assignpartypostingsave"}
                        className={"saveBtn"}
                      >
                        Allocate
                      </CButton>{" "}
                    </CCol>
                  </CRow>
                  </CCol>
                  <CCol>
                                        <CRow
                      sm="12"
                      md="12"
                      lg="12"
                      style={{ marginLeft: "-100px", marginTop: "-100px" }}
                    >
                      <CCol>
                        {/* <ProfileUi
                            imgUrl="https://previews.123rf.com/images/solargaria/solargaria1709/solargaria170900007/85362512-user-icon-male-avatar-in-business-suit-businessman-flat-icon-man-in-business-suit-avatar-of-business.jpg"
                            
                            name="Name"
                            // designation="Gender"
                            born="dob"
                          /> */}
                        <CCard className={"card-container"}>
                          <header>
                            <img
                              src="https://raw.githubusercontent.com/ritaxcorreia/react-profile-card/3b562dc1f28cd3630508d4628aab1e85e25c2682/src/images/bg-pattern-card.svg"
                              alt="male icon"
                              style={{
                                marginLeft: "0em",
                                minWidth: "270px",
                                maxWidth: "270px",
                                borderRadius: "14px",
                              }}
                            />
                          </header>
                          <img
                            src="https://i.pinimg.com/736x/5f/40/6a/5f406ab25e8942cbe0da6485afd26b71.jpg"
                            className={"img"}
                            alt="member"
                            style={{ marginTop: "-85px" }}
                          />
                          <h2
                            style={{
                              fontSize: "30px",

                              textAlign: "center",
                              textTransform: "uppercase",
                            }}
                          >
                            Name{" "}
                          </h2>
                          <h3
                            style={{
                              fontSize: "20px",
                              textAlign: "center",
                              textTransform: "uppercase",
                            }}
                          >
                            Gender{" "}
                          </h3>
                          <h4
                            style={{
                              fontSize: "18px",
                              textAlign: "center",
                              textTransform: "uppercase",
                            }}
                          >
                            DoB{" "}
                          </h4>
                        </CCard>
                      </CCol>
                    </CRow>
                  </CCol>
                      </CRow>
                    </div>
                  <CRow
                    sm="12"
                    md="12"
                    lg="12"
                    style={{
                      padding: "4%",
                      marginTop: "1.5%",
                      marginLeft: "-10px",
                    }}
                  >
                    <CDataTable
                      items={userdatat}
                      fields={fieldsleg}
                      columnFilter
                      tableFilter
                      tableLabel={"Default Allocating Contacts List"}
                      itemsPerPageSelect
                      itemsPerPage={5}
                      hover
                      sorter
                      pagination
                      scopedSlots={{
                        show_details: (item, index) => {
                          return (
                            <td className="py-1">
                              <CRow sm="12" md="12" lg="12">
                                <CCol style={{ fontSize: "1.15rem" }} md="16">
                                  <Dropdown
                                    className={"ant-dropdown-cutomize-by-me"}
                                    overlay={() => menus(item)}
                                  >
                                    <a
                                      href
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
                  </CContainer>
                </div>
              )}
              {addfourth && (
                <div>
                  <CContainer>
                  <CContainer>
                    <CRow
                      sm="12"
                      md="12"
                      lg="12"
                      style={{ marginLeft: "-3.5em", marginTop: "15px" }}
                    >
                      <CCol className={"column-align"} md="3">
                        <CLabel className={"label-name-1"}>
                          State
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <Select
                          id={"municipalstatename"}
                          name={"state"}
                          placeholder={"Select State"}
                        />
                      </CCol>
                    </CRow>

                    <div>
                      <CRow
                      sm="12"
                      md="12"
                      lg="12">
                        <CCol md="9">
                    <CRow
                      sm="12"
                      md="12"
                      lg="12"
                      className={"row-alignment"}
                      style={{ marginLeft: "-5em" }}
                    >
                      <CCol className={"column-align"} md="7">
                        <CLabel className={"label-name"}>
                          Name of the Constituency and Elected Member
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <Select
                          className={"input-align-2"}
                          id={"nameofmemberassignpartyposting"}
                          name={"state"}
                          placeholder={"Select Name of the Member"}
                        />
                      </CCol>
                    </CRow>
                 

                  <CContainer>
                   
                  </CContainer>
                  <CContainer>
                    <CRow sm="12" md="12" lg="12">
                      <CCol style={{ marginTop: "2.5em", marginLeft: "1em" }}>
                        <CLabel
                          style={{
                            fontSize: "18px",
                            fontFamily: "Open Sans",
                            fontWeight: "700",
                          }}
                        >
                          Details of Closed CC
                        </CLabel>
                      </CCol>
                    </CRow>
                    <CRow
                      sm="12"
                      md="12"
                      lg="12"
                      className={"seperator-1"}
                      style={{ marginTop: "0.2em", marginLeft: "0.5em" }}
                    >
                      <CCol
                        md="3"
                        style={{ marginLeft: "0em", marginTop: "16px" }}
                      >
                        <CLabel className={"form-labels-1"}>
                          {" "}
                          {
                            <span
                              style={{ color: "black" }}
                              className={"form-labels-6"}
                            >
                              C.C Description
                            </span>
                          }
                          <span className={"text-danger"}> *</span>{" "}
                        </CLabel>
                        <CInput
                          name={"dccDescription"}
                          style={{ textTransform: "uppercase" }}
                          id={"createRoleDccDescription"}
                          onKeyPress={(e) =>
                            FormValidation.value_Without_Symbols(e)
                          }
                          maxLength="30"
                        />
                      </CCol>
                      <CCol
                        className={"column-align"}
                        md="3"
                        style={{ marginLeft: "-1em" }}
                      >
                        <CLabel className={"form-labels-1"}>
                          {" "}
                          {
                            <span
                              style={{ color: "black" }}
                              className={"form-labels-6"}
                            >
                              C.C ID
                            </span>
                          }
                          <span className={"text-danger"}> *</span>{" "}
                        </CLabel>
                        <CInput
                          name={"dccID"}
                          id={"createRoleDccidCode"}
                          readOnly={true}
                          onKeyPress={(e) =>
                            FormValidation.value_Without_Symbols(e)
                          }
                          maxLength="30"
                        />
                      </CCol>
                    </CRow>
                  </CContainer>
                  <CRow sm="12" lg="12" md="10">
                    <CCol
                      md="5"
                      style={{
                        marginLeft: "23em",
                        float: "right",
                        marginTop: "-2.5em",
                        position: "absolute",
                      }}
                    >
                      <CButton
                        style={{
                          float: "right",
                          cursor: "pointer",
                        }}
                        id={"assignpartypostingcancel"}
                        className={"cancelBtn"}
                        onClick={cancelsowmember}
                      >
                        CANCEL
                      </CButton>{" "}
                      <CButton
                        style={{
                          float: "right",
                          marginRight: "15px",
                        }}
                        id={"assignpartypostingsave"}
                        className={"saveBtn"}
                      >
                        Allocate
                      </CButton>{" "}
                    </CCol>
                  </CRow>

                  </CCol>
                  <CCol md="3">
                  <CRow
                      sm="12"
                      md="12"
                      lg="12"
                      style={{ marginLeft: "-100px", marginTop: "-100px" }}
                    >
                      <CCol>
                        {/* <ProfileUi
                            imgUrl="https://previews.123rf.com/images/solargaria/solargaria1709/solargaria170900007/85362512-user-icon-male-avatar-in-business-suit-businessman-flat-icon-man-in-business-suit-avatar-of-business.jpg"
                            
                            name="Name"
                            // designation="Gender"
                            born="dob"
                          /> */}
                        <CCard className={"card-container"}>
                          <header>
                            <img
                              src="https://raw.githubusercontent.com/ritaxcorreia/react-profile-card/3b562dc1f28cd3630508d4628aab1e85e25c2682/src/images/bg-pattern-card.svg"
                              alt="male icon"
                              style={{
                                marginLeft: "0em",
                                minWidth: "270px",
                                maxWidth: "270px",
                                borderRadius: "14px",
                              }}
                            />
                          </header>
                          <img
                            src="https://i.pinimg.com/736x/5f/40/6a/5f406ab25e8942cbe0da6485afd26b71.jpg"
                            className={"img"}
                            alt="member"
                            style={{ marginTop: "-85px" }}
                          />
                          <h2
                            style={{
                              fontSize: "30px",

                              textAlign: "center",
                              textTransform: "uppercase",
                            }}
                          >
                            Name{" "}
                          </h2>
                          <h3
                            style={{
                              fontSize: "20px",
                              textAlign: "center",
                              textTransform: "uppercase",
                            }}
                          >
                            Gender{" "}
                          </h3>
                          <h4
                            style={{
                              fontSize: "18px",
                              textAlign: "center",
                              textTransform: "uppercase",
                            }}
                          >
                            DoB{" "}
                          </h4>
                        </CCard>
                      </CCol>
                    </CRow>
                  </CCol>
                      </CRow>
                    </div>
                  <CRow
                    sm="12"
                    md="12"
                    lg="12"
                    style={{
                      padding: "4%",
                      marginTop: "1.5%",
                      marginLeft: "-10px",
                    }}
                  >
                    <CDataTable
                      items={userdatat}
                      fields={fieldsleg}
                      columnFilter
                      tableFilter
                      tableLabel={"Default Allocating Contacts List"}
                      itemsPerPageSelect
                      itemsPerPage={5}
                      hover
                      sorter
                      pagination
                      scopedSlots={{
                        show_details: (item, index) => {
                          return (
                            <td className="py-1">
                              <CRow sm="12" md="12" lg="12">
                                <CCol style={{ fontSize: "1.15rem" }} md="16">
                                  <Dropdown
                                    className={"ant-dropdown-cutomize-by-me"}
                                    overlay={() => menus(item)}
                                  >
                                    <a
                                      href
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
                  </CContainer>
                  </CContainer>
                </div>
              )}
              {addfivth && (
                <div>
                  <CContainer>
                 
                    <CRow
                      sm="12"
                      md="12"
                      lg="12"
                      style={{ marginLeft: "-3.5em", marginTop: "15px" }}
                    >
                      <CCol className={"column-align"} md="3">
                        <CLabel className={"label-name-1"}>
                          State
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <Select
                          id={"municipalstatename"}
                          name={"state"}
                          placeholder={"Select State"}
                        />
                      </CCol>
                      <CCol className={"column-align"} md="3">
                        <CLabel className={"label-name-1"}>
                          District / City
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <Select
                          id={"municipalcorporation"}
                          name={"city"}
                          placeholder={"Select District / City"}
                        />
                      </CCol>
                      <CCol className={"column-align"} md="3">
                        <CLabel className={"label-name-1"}>
                          Name of Corporation
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <Select
                          id={"municipalcorporation"}
                          name={"constituency"}
                          placeholder={"Select Name of Corporation"}
                        />
                      </CCol>
                    </CRow>

                    <div>
                      <CRow
                      sm="12"
                      md="12"
                      lg="12">
                        <CCol md="9">                        
                    <CRow
                      sm="12"
                      md="12"
                      lg="12"
                      className={"row-alignment"}
                      style={{ marginLeft: "-5em" }}
                    >
                      <CCol className={"column-align"} md="7">
                        <CLabel className={"label-name"}>
                          Name of the Ward and Elected Member
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <Select
                          className={"input-align-2"}
                          id={"nameofmemberassignpartyposting"}
                          name={"state"}
                          placeholder={"Select Name of the Member"}
                        />
                      </CCol>
                    </CRow>
                 

                  <CCol style={{ top: "2em", marginLeft: "20.5em" }}>
                    <CLabel
                      style={{
                        fontSize: "18px",
                        fontFamily: "Open Sans",
                        fontWeight: "700",
                        color: "#4592d8",
                      }}
                    >
                      Or
                    </CLabel>
                  </CCol>

                  <CContainer>
                    <CRow sm="12" md="12" lg="12">
                      <CCol style={{ marginTop: "2em", marginLeft: "1em" }}>
                        <CLabel
                          style={{
                            fontSize: "18px",
                            fontFamily: "Open Sans",
                            fontWeight: "700",
                          }}
                        >
                          Word Search
                        </CLabel>
                      </CCol>
                    </CRow>
                    <CRow
                      sm="12"
                      md="12"
                      lg="12"
                      className={"row-alignment"}
                      style={{ marginLeft: "-5em", marginTop: "-1.5em" }}
                    >
                      <CCol className={"column-align"} md="7">
                        <CLabel className={"label-name"}>
                          Name of the Ward and Elected Member
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <Select
                          className={"input-align-2"}
                          id={"nameofmemberassignpartyposting"}
                          name={"state"}
                          placeholder={"Select Name of the Member"}
                        />
                      </CCol>
                    </CRow>
                   
                  </CContainer>
                  <CContainer>
                    <CRow sm="12" md="12" lg="12">
                      <CCol style={{ marginTop: "2.5em", marginLeft: "1em" }}>
                        <CLabel
                          style={{
                            fontSize: "18px",
                            fontFamily: "Open Sans",
                            fontWeight: "700",
                          }}
                        >
                          Details of Closed CC
                        </CLabel>
                      </CCol>
                    </CRow>
                    <CRow
                      sm="12"
                      md="12"
                      lg="12"
                      className={"seperator-1"}
                      style={{ marginTop: "0.2em", marginLeft: "0.5em" }}
                    >
                      <CCol
                        md="3"
                        style={{ marginLeft: "0em", marginTop: "16px" }}
                      >
                        <CLabel className={"form-labels-1"}>
                          {" "}
                          {
                            <span
                              style={{ color: "black" }}
                              className={"form-labels-6"}
                            >
                              C.C Description
                            </span>
                          }
                          <span className={"text-danger"}> *</span>{" "}
                        </CLabel>
                        <CInput
                          name={"dccDescription"}
                          style={{ textTransform: "uppercase" }}
                          id={"createRoleDccDescription"}
                          onKeyPress={(e) =>
                            FormValidation.value_Without_Symbols(e)
                          }
                          maxLength="30"
                        />
                      </CCol>
                      <CCol
                        className={"column-align"}
                        md="3"
                        style={{ marginLeft: "-1em" }}
                      >
                        <CLabel className={"form-labels-1"}>
                          {" "}
                          {
                            <span
                              style={{ color: "black" }}
                              className={"form-labels-6"}
                            >
                              C.C ID
                            </span>
                          }
                          <span className={"text-danger"}> *</span>{" "}
                        </CLabel>
                        <CInput
                          name={"dccID"}
                          id={"createRoleDccidCode"}
                          readOnly={true}
                          onKeyPress={(e) =>
                            FormValidation.value_Without_Symbols(e)
                          }
                          maxLength="30"
                        />
                      </CCol>
                    </CRow>
                  </CContainer>
                  <CRow sm="12" lg="12" md="10">
                    <CCol
                      md="5"
                      style={{
                        marginLeft: "23em",
                        float: "right",
                        marginTop: "-2.5em",
                        position: "absolute",
                      }}
                    >
                      <CButton
                        style={{
                          float: "right",
                          cursor: "pointer",
                        }}
                        id={"assignpartypostingcancel"}
                        className={"cancelBtn"}
                        onClick={cancelsowmember}
                      >
                        CANCEL
                      </CButton>{" "}
                      <CButton
                        style={{
                          float: "right",
                          marginRight: "15px",
                        }}
                        id={"assignpartypostingsave"}
                        className={"saveBtn"}
                      >
                        Allocate
                      </CButton>{" "}
                    </CCol>
                  </CRow>
                  </CCol>
                  <CCol md="3">
                  <CRow
                      sm="12"
                      md="12"
                      lg="12"
                      style={{ marginLeft: "-100px", marginTop: "50px" }}
                    >
                      <CCol>
                        {/* <ProfileUi
                            imgUrl="https://previews.123rf.com/images/solargaria/solargaria1709/solargaria170900007/85362512-user-icon-male-avatar-in-business-suit-businessman-flat-icon-man-in-business-suit-avatar-of-business.jpg"
                            
                            name="Name"
                            // designation="Gender"
                            born="dob"
                          /> */}
                        <CCard className={"card-container"}>
                          <header>
                            <img
                              src="https://raw.githubusercontent.com/ritaxcorreia/react-profile-card/3b562dc1f28cd3630508d4628aab1e85e25c2682/src/images/bg-pattern-card.svg"
                              alt="male icon"
                              style={{
                                marginLeft: "0em",
                                minWidth: "270px",
                                maxWidth: "270px",
                                borderRadius: "14px",
                              }}
                            />
                          </header>
                          <img
                            src="https://i.pinimg.com/736x/5f/40/6a/5f406ab25e8942cbe0da6485afd26b71.jpg"
                            className={"img"}
                            alt="member"
                            style={{ marginTop: "-85px" }}
                          />
                          <h2
                            style={{
                              fontSize: "30px",

                              textAlign: "center",
                              textTransform: "uppercase",
                            }}
                          >
                            Name{" "}
                          </h2>
                          <h3
                            style={{
                              fontSize: "20px",
                              textAlign: "center",
                              textTransform: "uppercase",
                            }}
                          >
                            Gender{" "}
                          </h3>
                          <h4
                            style={{
                              fontSize: "18px",
                              textAlign: "center",
                              textTransform: "uppercase",
                            }}
                          >
                            DoB{" "}
                          </h4>
                        </CCard>
                      </CCol>
                    </CRow>
                  </CCol>
                      </CRow>
                    </div>
                  <CRow
                    sm="12"
                    md="12"
                    lg="12"
                    style={{
                      padding: "4%",
                      marginTop: "1.5%",
                      marginLeft: "-10px",
                    }}
                  >
                    <CDataTable
                      items={userdatat}
                      fields={fieldscorp}
                      columnFilter
                      tableFilter
                      tableLabel={"Default Allocating Contacts List"}
                      itemsPerPageSelect
                      itemsPerPage={5}
                      hover
                      sorter
                      pagination
                      scopedSlots={{
                        show_details: (item, index) => {
                          return (
                            <td className="py-1">
                              <CRow sm="12" md="12" lg="12">
                                <CCol style={{ fontSize: "1.15rem" }} md="16">
                                  <Dropdown
                                    className={"ant-dropdown-cutomize-by-me"}
                                    overlay={() => menus(item)}
                                  >
                                    <a
                                      href
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
                  </CContainer>
                </div>
              )}
              {addsixth && (
                <div>
                  <CContainer>
                 
                    <CRow
                      sm="12"
                      md="12"
                      lg="12"
                      style={{ marginLeft: "-3.5em", marginTop: "15px" }}
                    >
                      <CCol className={"column-align"} md="3">
                        <CLabel className={"label-name-1"}>
                          State
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <Select
                          id={"municipalstatename"}
                          name={"state"}
                          placeholder={"Select State"}
                        />
                      </CCol>
                      <CCol className={"column-align"} md="3">
                        <CLabel className={"label-name-1"}>
                          District / City
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <Select
                          id={"municipalcorporation"}
                          name={"city"}
                          placeholder={"Select District / City"}
                        />
                      </CCol>
                      <CCol className={"column-align"} md="3">
                        <CLabel className={"label-name-1"}>
                          Name of Municipality
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <Select
                          id={"municipalcorporation"}
                          name={"constituency"}
                          placeholder={"Select Name of Municipality"}
                        />
                      </CCol>
                    </CRow>
                    <div>
                      <CRow
                      sm="12"
                      md="12"
                      lg="12">
                        <CCol md="9">

                        
                    <CRow
                      sm="12"
                      md="12"
                      lg="12"
                      className={"row-alignment"}
                      style={{ marginLeft: "-5em" }}
                    >
                      <CCol className={"column-align"} md="7">
                        <CLabel className={"label-name"}>
                          Name of the Ward and Elected Member
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <Select
                          className={"input-align-2"}
                          id={"nameofmemberassignpartyposting"}
                          name={"state"}
                          placeholder={"Select Name of the Member"}
                        />
                      </CCol>
                    </CRow>
                 

                  <CCol style={{ top: "2em", marginLeft: "20.5em" }}>
                    <CLabel
                      style={{
                        fontSize: "18px",
                        fontFamily: "Open Sans",
                        fontWeight: "700",
                        color: "#4592d8",
                      }}
                    >
                      Or
                    </CLabel>
                  </CCol>

                  <CContainer>
                    <CRow sm="12" md="12" lg="12">
                      <CCol style={{ marginTop: "2em", marginLeft: "1em" }}>
                        <CLabel
                          style={{
                            fontSize: "18px",
                            fontFamily: "Open Sans",
                            fontWeight: "700",
                          }}
                        >
                          Word Search
                        </CLabel>
                      </CCol>
                    </CRow>
                    <CRow
                      sm="12"
                      md="12"
                      lg="12"
                      className={"row-alignment"}
                      style={{ marginLeft: "-5em", marginTop: "-1.5em" }}
                    >
                      <CCol className={"column-align"} md="7">
                        <CLabel className={"label-name"}>
                          Name of the Ward and Elected Member
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <Select
                          className={"input-align-2"}
                          id={"nameofmemberassignpartyposting"}
                          name={"state"}
                          placeholder={"Select Name of the Member"}
                        />
                      </CCol>
                    </CRow>
                   
                  </CContainer>
                  <CContainer>
                    <CRow sm="12" md="12" lg="12">
                      <CCol style={{ marginTop: "2.5em", marginLeft: "1em" }}>
                        <CLabel
                          style={{
                            fontSize: "18px",
                            fontFamily: "Open Sans",
                            fontWeight: "700",
                          }}
                        >
                          Details of Closed CC
                        </CLabel>
                      </CCol>
                    </CRow>
                    <CRow
                      sm="12"
                      md="12"
                      lg="12"
                      className={"seperator-1"}
                      style={{ marginTop: "0.2em", marginLeft: "0.5em" }}
                    >
                      <CCol
                        md="3"
                        style={{ marginLeft: "0em", marginTop: "16px" }}
                      >
                        <CLabel className={"form-labels-1"}>
                          {" "}
                          {
                            <span
                              style={{ color: "black" }}
                              className={"form-labels-6"}
                            >
                              C.C Description
                            </span>
                          }
                          <span className={"text-danger"}> *</span>{" "}
                        </CLabel>
                        <CInput
                          name={"dccDescription"}
                          style={{ textTransform: "uppercase" }}
                          id={"createRoleDccDescription"}
                          onKeyPress={(e) =>
                            FormValidation.value_Without_Symbols(e)
                          }
                          maxLength="30"
                        />
                      </CCol>
                      <CCol
                        className={"column-align"}
                        md="3"
                        style={{ marginLeft: "-1em" }}
                      >
                        <CLabel className={"form-labels-1"}>
                          {" "}
                          {
                            <span
                              style={{ color: "black" }}
                              className={"form-labels-6"}
                            >
                              C.C ID
                            </span>
                          }
                          <span className={"text-danger"}> *</span>{" "}
                        </CLabel>
                        <CInput
                          name={"dccID"}
                          id={"createRoleDccidCode"}
                          readOnly={true}
                          onKeyPress={(e) =>
                            FormValidation.value_Without_Symbols(e)
                          }
                          maxLength="30"
                        />
                      </CCol>
                    </CRow>
                  </CContainer>
                  <CRow sm="12" lg="12" md="10">
                    <CCol
                      md="5"
                      style={{
                        marginLeft: "23em",
                        float: "right",
                        marginTop: "-2.5em",
                        position: "absolute",
                      }}
                    >
                      <CButton
                        style={{
                          float: "right",
                          cursor: "pointer",
                        }}
                        id={"assignpartypostingcancel"}
                        className={"cancelBtn"}
                        onClick={cancelsowmember}
                      >
                        CANCEL
                      </CButton>{" "}
                      <CButton
                        style={{
                          float: "right",
                          marginRight: "15px",
                        }}
                        id={"assignpartypostingsave"}
                        className={"saveBtn"}
                      >
                        Allocate
                      </CButton>{" "}
                    </CCol>
                  </CRow>
                  </CCol>
                  <CCol md="3">
                  <CRow
                      sm="12"
                      md="12"
                      lg="12"
                      style={{ marginLeft: "-150px", marginTop: "50px" }}
                    >
                      <CCol>
                        {/* <ProfileUi
                            imgUrl="https://previews.123rf.com/images/solargaria/solargaria1709/solargaria170900007/85362512-user-icon-male-avatar-in-business-suit-businessman-flat-icon-man-in-business-suit-avatar-of-business.jpg"
                            
                            name="Name"
                            // designation="Gender"
                            born="dob"
                          /> */}
                        <CCard className={"card-container"}>
                          <header>
                            <img
                              src="https://raw.githubusercontent.com/ritaxcorreia/react-profile-card/3b562dc1f28cd3630508d4628aab1e85e25c2682/src/images/bg-pattern-card.svg"
                              alt="male icon"
                              style={{
                                marginLeft: "0em",
                                minWidth: "270px",
                                maxWidth: "270px",
                                borderRadius: "14px",
                              }}
                            />
                          </header>
                          <img
                            src="https://i.pinimg.com/736x/5f/40/6a/5f406ab25e8942cbe0da6485afd26b71.jpg"
                            className={"img"}
                            alt="member"
                            style={{ marginTop: "-85px" }}
                          />
                          <h2
                            style={{
                              fontSize: "30px",

                              textAlign: "center",
                              textTransform: "uppercase",
                            }}
                          >
                            Name{" "}
                          </h2>
                          <h3
                            style={{
                              fontSize: "20px",
                              textAlign: "center",
                              textTransform: "uppercase",
                            }}
                          >
                            Gender{" "}
                          </h3>
                          <h4
                            style={{
                              fontSize: "18px",
                              textAlign: "center",
                              textTransform: "uppercase",
                            }}
                          >
                            DoB{" "}
                          </h4>
                        </CCard>
                        {/* <div className="background">
			<div className="bg-pattern-top"></div>
			<div className="bg-pattern-bottom"></div>

			<ProfileCard
				name="Rita Correia"
				age="32"
				city="London"
				followers="80K"
				likes="803K"
				photos="1.4K"
			></ProfileCard>
		</div> */}
                      </CCol>
                    </CRow>
                  </CCol>
                      </CRow>
                    </div>
                  <CRow
                    sm="12"
                    md="12"
                    lg="12"
                    style={{
                      padding: "4%",
                      marginTop: "1.5%",
                      marginLeft: "-10px",
                    }}
                  >
                    <CDataTable
                      items={userdatat}
                      fields={fieldsmuni}
                      columnFilter
                      tableFilter
                      tableLabel={"Default Allocating Contacts List"}
                      itemsPerPageSelect
                      itemsPerPage={5}
                      hover
                      sorter
                      pagination
                      scopedSlots={{
                        show_details: (item, index) => {
                          return (
                            <td className="py-1">
                              <CRow sm="12" md="12" lg="12">
                                <CCol style={{ fontSize: "1.15rem" }} md="16">
                                  <Dropdown
                                    className={"ant-dropdown-cutomize-by-me"}
                                    overlay={() => menus(item)}
                                  >
                                    <a
                                      href
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
                  </CContainer>
                </div>
              )}
              {addseventh && (
                <div>
                  <CContainer>
                  <CContainer>
                    <CRow
                      sm="12"
                      md="12"
                      lg="12"
                      style={{ marginLeft: "-3.5em", marginTop: "15px" }}
                    >
                      <CCol className={"column-align"} md="3">
                        <CLabel className={"label-name-1"}>
                          State
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <Select
                          id={"municipalstatename"}
                          name={"state"}
                          placeholder={"Select State"}
                        />
                      </CCol>
                      <CCol className={"column-align"} md="3">
                        <CLabel className={"label-name-1"}>
                          District / City
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <Select
                          id={"municipalcorporation"}
                          name={"city"}
                          placeholder={"Select District / City"}
                        />
                      </CCol>
                      <CCol className={"column-align"} md="3">
                        <CLabel className={"label-name-1"}>
                          Name of Town Panchayat
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <Select
                          id={"municipalcorporation"}
                          name={"constituency"}
                          placeholder={"Select Name of Town Panchayat"}
                        />
                      </CCol>
                    </CRow>
                    <CRow
                      sm="12"
                      md="12"
                      lg="12"
                      className={"row-alignment"}
                      style={{ marginLeft: "-5em" }}
                    >
                      <CCol className={"column-align"} md="7">
                        <CLabel className={"label-name"}>
                          Name of the Ward and Elected Member
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <Select
                          className={"input-align-2"}
                          id={"nameofmemberassignpartyposting"}
                          name={"state"}
                          placeholder={"Select Name of the Member"}
                        />
                      </CCol>
                    </CRow>
                  </CContainer>

                  <CCol style={{ top: "2em", marginLeft: "20.5em" }}>
                    <CLabel
                      style={{
                        fontSize: "18px",
                        fontFamily: "Open Sans",
                        fontWeight: "700",
                        color: "#4592d8",
                      }}
                    >
                      Or
                    </CLabel>
                  </CCol>

                  <CContainer>
                    <CRow sm="12" md="12" lg="12">
                      <CCol style={{ marginTop: "2em", marginLeft: "1em" }}>
                        <CLabel
                          style={{
                            fontSize: "18px",
                            fontFamily: "Open Sans",
                            fontWeight: "700",
                          }}
                        >
                          Word Search
                        </CLabel>
                      </CCol>
                    </CRow>
                    <CRow
                      sm="12"
                      md="12"
                      lg="12"
                      className={"row-alignment"}
                      style={{ marginLeft: "-5em", marginTop: "-1.5em" }}
                    >
                      <CCol className={"column-align"} md="7">
                        <CLabel className={"label-name"}>
                          Name of the Ward and Elected Member
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <Select
                          className={"input-align-2"}
                          id={"nameofmemberassignpartyposting"}
                          name={"state"}
                          placeholder={"Select Name of the Member"}
                        />
                      </CCol>
                    </CRow>
                    <CRow
                      sm="12"
                      md="12"
                      lg="12"
                      style={{ marginLeft: "850px", marginTop: "-230px" }}
                    >
                      <CCol>
                        {/* <ProfileUi
                            imgUrl="https://previews.123rf.com/images/solargaria/solargaria1709/solargaria170900007/85362512-user-icon-male-avatar-in-business-suit-businessman-flat-icon-man-in-business-suit-avatar-of-business.jpg"
                            
                            name="Name"
                            // designation="Gender"
                            born="dob"
                          /> */}
                        <CCard className={"card-container"}>
                          <header>
                            <img
                              src="https://raw.githubusercontent.com/ritaxcorreia/react-profile-card/3b562dc1f28cd3630508d4628aab1e85e25c2682/src/images/bg-pattern-card.svg"
                              alt="male icon"
                              style={{
                                marginLeft: "0em",
                                minWidth: "270px",
                                maxWidth: "270px",
                                borderRadius: "14px",
                              }}
                            />
                          </header>
                          <img
                            src="https://i.pinimg.com/736x/5f/40/6a/5f406ab25e8942cbe0da6485afd26b71.jpg"
                            className={"img"}
                            alt="member"
                            style={{ marginTop: "-85px" }}
                          />
                          <h2
                            style={{
                              fontSize: "30px",

                              textAlign: "center",
                              textTransform: "uppercase",
                            }}
                          >
                            Name{" "}
                          </h2>
                          <h3
                            style={{
                              fontSize: "20px",
                              textAlign: "center",
                              textTransform: "uppercase",
                            }}
                          >
                            Gender{" "}
                          </h3>
                          <h4
                            style={{
                              fontSize: "18px",
                              textAlign: "center",
                              textTransform: "uppercase",
                            }}
                          >
                            DoB{" "}
                          </h4>
                        </CCard>
                        {/* <div className="background">
			<div className="bg-pattern-top"></div>
			<div className="bg-pattern-bottom"></div>

			<ProfileCard
				name="Rita Correia"
				age="32"
				city="London"
				followers="80K"
				likes="803K"
				photos="1.4K"
			></ProfileCard>
		</div> */}
                      </CCol>
                    </CRow>
                  </CContainer>
                  <CContainer>
                    <CRow sm="12" md="12" lg="12">
                      <CCol style={{ marginTop: "-3.5em", marginLeft: "1em" }}>
                        <CLabel
                          style={{
                            fontSize: "18px",
                            fontFamily: "Open Sans",
                            fontWeight: "700",
                          }}
                        >
                          Details of Closed CC
                        </CLabel>
                      </CCol>
                    </CRow>
                    <CRow
                      sm="12"
                      md="12"
                      lg="12"
                      className={"seperator-1"}
                      style={{ marginTop: "0.2em", marginLeft: "0.5em" }}
                    >
                      <CCol
                        md="3"
                        style={{ marginLeft: "0em", marginTop: "16px" }}
                      >
                        <CLabel className={"form-labels-1"}>
                          {" "}
                          {
                            <span
                              style={{ color: "black" }}
                              className={"form-labels-6"}
                            >
                              C.C Description
                            </span>
                          }
                          <span className={"text-danger"}> *</span>{" "}
                        </CLabel>
                        <CInput
                          name={"dccDescription"}
                          style={{ textTransform: "uppercase" }}
                          id={"createRoleDccDescription"}
                          onKeyPress={(e) =>
                            FormValidation.value_Without_Symbols(e)
                          }
                          maxLength="30"
                        />
                      </CCol>
                      <CCol
                        className={"column-align"}
                        md="3"
                        style={{ marginLeft: "-1em" }}
                      >
                        <CLabel className={"form-labels-1"}>
                          {" "}
                          {
                            <span
                              style={{ color: "black" }}
                              className={"form-labels-6"}
                            >
                              C.C ID
                            </span>
                          }
                          <span className={"text-danger"}> *</span>{" "}
                        </CLabel>
                        <CInput
                          name={"dccID"}
                          id={"createRoleDccidCode"}
                          readOnly={true}
                          onKeyPress={(e) =>
                            FormValidation.value_Without_Symbols(e)
                          }
                          maxLength="30"
                        />
                      </CCol>
                    </CRow>
                  </CContainer>
                  <CRow sm="12" lg="12" md="10">
                    <CCol
                      md="5"
                      style={{
                        marginLeft: "23em",
                        float: "right",
                        marginTop: "-2.5em",
                        position: "absolute",
                      }}
                    >
                      <CButton
                        style={{
                          float: "right",
                          cursor: "pointer",
                        }}
                        id={"assignpartypostingcancel"}
                        className={"cancelBtn"}
                        onClick={cancelsowmember}
                      >
                        CANCEL
                      </CButton>{" "}
                      <CButton
                        style={{
                          float: "right",
                          marginRight: "15px",
                        }}
                        id={"assignpartypostingsave"}
                        className={"saveBtn"}
                      >
                        Allocate
                      </CButton>{" "}
                    </CCol>
                  </CRow>
                  <CRow
                    sm="12"
                    md="12"
                    lg="12"
                    style={{
                      padding: "4%",
                      marginTop: "1.5%",
                      marginLeft: "-10px",
                    }}
                  >
                    <CDataTable
                      items={userdatat}
                      fields={fieldstown}
                      columnFilter
                      tableFilter
                      tableLabel={"Default Allocating Contacts List"}
                      itemsPerPageSelect
                      itemsPerPage={5}
                      hover
                      sorter
                      pagination
                      scopedSlots={{
                        show_details: (item, index) => {
                          return (
                            <td className="py-1">
                              <CRow sm="12" md="12" lg="12">
                                <CCol style={{ fontSize: "1.15rem" }} md="16">
                                  <Dropdown
                                    className={"ant-dropdown-cutomize-by-me"}
                                    overlay={() => menus(item)}
                                  >
                                    <a
                                      href
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
                  </CContainer>
                </div>
              )}
              {addeight && (
                <div>
                  <CContainer>
                  <CContainer>
                    <CRow
                      sm="12"
                      md="12"
                      lg="12"
                      style={{ marginLeft: "-3.5em", marginTop: "15px" }}
                    ></CRow>
                    <CRow
                      sm="12"
                      md="12"
                      lg="12"
                      className={"row-alignment"}
                      style={{ marginLeft: "-5em" }}
                    >
                      <CCol className={"column-align"} md="7">
                        <CLabel className={"label-name"}>
                          Name of the Minister with Ministry
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <Select
                          className={"input-align-2"}
                          id={"nameofmemberassignpartyposting"}
                          name={"state"}
                          placeholder={"Select Name of the Member"}
                        />
                      </CCol>
                    </CRow>
                  </CContainer>

                 

                  <CContainer>                                       
                    <CRow
                      sm="12"
                      md="12"
                      lg="12"
                      style={{ marginLeft: "850px", marginTop: "-180px" }}
                    >
                      <CCol>
                        <CCard className={"card-container"}>
                          <header>
                            <img
                              src="https://raw.githubusercontent.com/ritaxcorreia/react-profile-card/3b562dc1f28cd3630508d4628aab1e85e25c2682/src/images/bg-pattern-card.svg"
                              alt="male icon"
                              style={{
                                marginLeft: "0em",
                                minWidth: "270px",
                                maxWidth: "270px",
                                borderRadius: "14px",
                              }}
                            />
                          </header>
                          <img
                            src="https://i.pinimg.com/736x/5f/40/6a/5f406ab25e8942cbe0da6485afd26b71.jpg"
                            className={"img"}
                            alt="member"
                            style={{ marginTop: "-85px" }}
                          />
                          <h2
                            style={{
                              fontSize: "30px",

                              textAlign: "center",
                              textTransform: "uppercase",
                            }}
                          >
                            Name{" "}
                          </h2>
                          <h3
                            style={{
                              fontSize: "20px",
                              textAlign: "center",
                              textTransform: "uppercase",
                            }}
                          >
                            Gender{" "}
                          </h3>
                          <h4
                            style={{
                              fontSize: "18px",
                              textAlign: "center",
                              textTransform: "uppercase",
                            }}
                          >
                            DoB{" "}
                          </h4>
                        </CCard>
                      </CCol>
                    </CRow>
                  </CContainer>
                  <CContainer>
                    <CRow sm="12" md="12" lg="12">
                      <CCol style={{ marginTop: "-3.5em", marginLeft: "1em" }}>
                        <CLabel
                          style={{
                            fontSize: "18px",
                            fontFamily: "Open Sans",
                            fontWeight: "700",
                          }}
                        >
                          Details of Closed CC
                        </CLabel>
                      </CCol>
                    </CRow>
                    <CRow
                      sm="12"
                      md="12"
                      lg="12"
                      className={"seperator-1"}
                      style={{ marginTop: "0.2em", marginLeft: "0.5em" }}
                    >
                      <CCol
                        md="3"
                        style={{ marginLeft: "0em", marginTop: "16px" }}
                      >
                        <CLabel className={"form-labels-1"}>
                          {" "}
                          {
                            <span
                              style={{ color: "black" }}
                              className={"form-labels-6"}
                            >
                              C.C Description
                            </span>
                          }
                          <span className={"text-danger"}> *</span>{" "}
                        </CLabel>
                        <CInput
                          name={"dccDescription"}
                          style={{ textTransform: "uppercase" }}
                          id={"createRoleDccDescription"}
                          onKeyPress={(e) =>
                            FormValidation.value_Without_Symbols(e)
                          }
                          maxLength="30"
                        />
                      </CCol>
                      <CCol
                        className={"column-align"}
                        md="3"
                        style={{ marginLeft: "-1em" }}
                      >
                        <CLabel className={"form-labels-1"}>
                          {" "}
                          {
                            <span
                              style={{ color: "black" }}
                              className={"form-labels-6"}
                            >
                              C.C ID
                            </span>
                          }
                          <span className={"text-danger"}> *</span>{" "}
                        </CLabel>
                        <CInput
                          name={"dccID"}
                          id={"createRoleDccidCode"}
                          readOnly={true}
                          onKeyPress={(e) =>
                            FormValidation.value_Without_Symbols(e)
                          }
                          maxLength="30"
                        />
                      </CCol>
                    </CRow>
                  </CContainer>
                  <CRow sm="12" lg="12" md="10">
                    <CCol
                      md="5"
                      style={{
                        marginLeft: "23em",
                        float: "right",
                        marginTop: "-2.5em",
                        position: "absolute",
                      }}
                    >
                      <CButton
                        style={{
                          float: "right",
                          cursor: "pointer",
                        }}
                        id={"assignpartypostingcancel"}
                        className={"cancelBtn"}
                        onClick={cancelsowmember}
                      >
                        CANCEL
                      </CButton>{" "}
                      <CButton
                        style={{
                          float: "right",
                          marginRight: "15px",
                        }}
                        id={"assignpartypostingsave"}
                        className={"saveBtn"}
                      >
                        Allocate
                      </CButton>{" "}
                    </CCol>
                  </CRow>
                  <CRow
                    sm="12"
                    md="12"
                    lg="12"
                    style={{
                      padding: "4%",
                      marginTop: "1.5%",
                      marginLeft: "-10px",
                    }}
                  >
                    <CDataTable
                      items={userdatat}
                      fields={fieldsprime}
                      columnFilter
                      tableFilter
                      tableLabel={"Default Allocating Contacts List"}
                      itemsPerPageSelect
                      itemsPerPage={5}
                      hover
                      sorter
                      pagination
                      scopedSlots={{
                        show_details: (item, index) => {
                          return (
                            <td className="py-1">
                              <CRow sm="12" md="12" lg="12">
                                <CCol style={{ fontSize: "1.15rem" }} md="16">
                                  <Dropdown
                                    className={"ant-dropdown-cutomize-by-me"}
                                    overlay={() => menus(item)}
                                  >
                                    <a
                                      href
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
                  </CContainer>
                </div>
              )}
               {addninth && (
                <div>
                  <CContainer>
                  <CContainer>
                    <CRow
                      sm="12"
                      md="12"
                      lg="12"
                      style={{ marginLeft: "-3.5em", marginTop: "15px" }}
                    > 
                    <CCol className={"column-align"} md="3">
                      <CLabel className={"label-name-1"}>
                        State
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <Select
                        id={"municipalstatename"}
                        name={"state"}
                        placeholder={"Select State"}
                      />
                    </CCol></CRow>
                    <CRow
                      sm="12"
                      md="12"
                      lg="12"
                      className={"row-alignment"}
                      style={{ marginLeft: "-5em" }}
                    >
                      <CCol className={"column-align"} md="7">
                        <CLabel className={"label-name"}>
                          Name of the Minister with Ministry
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <Select
                          className={"input-align-2"}
                          id={"nameofmemberassignpartyposting"}
                          name={"state"}
                          placeholder={"Select Name of the Member"}
                        />
                      </CCol>
                    </CRow>
                  </CContainer>

                

                  <CContainer>                   
                    <CRow
                      sm="12"
                      md="12"
                      lg="12"
                      style={{ marginLeft: "850px", marginTop: "-230px" }}
                    >
                      <CCol>
                        <CCard className={"card-container"}>
                          <header>
                            <img
                              src="https://raw.githubusercontent.com/ritaxcorreia/react-profile-card/3b562dc1f28cd3630508d4628aab1e85e25c2682/src/images/bg-pattern-card.svg"
                              alt="male icon"
                              style={{
                                marginLeft: "0em",
                                minWidth: "270px",
                                maxWidth: "270px",
                                borderRadius: "14px",
                              }}
                            />
                          </header>
                          <img
                            src="https://i.pinimg.com/736x/5f/40/6a/5f406ab25e8942cbe0da6485afd26b71.jpg"
                            className={"img"}
                            alt="member"
                            style={{ marginTop: "-85px" }}
                          />
                          <h2
                            style={{
                              fontSize: "30px",

                              textAlign: "center",
                              textTransform: "uppercase",
                            }}
                          >
                            Name{" "}
                          </h2>
                          <h3
                            style={{
                              fontSize: "20px",
                              textAlign: "center",
                              textTransform: "uppercase",
                            }}
                          >
                            Gender{" "}
                          </h3>
                          <h4
                            style={{
                              fontSize: "18px",
                              textAlign: "center",
                              textTransform: "uppercase",
                            }}
                          >
                            DoB{" "}
                          </h4>
                        </CCard>
                      </CCol>
                    </CRow>
                  </CContainer>
                  <CContainer>
                    <CRow sm="12" md="12" lg="12">
                      <CCol style={{ marginTop: "-3.5em", marginLeft: "1em" }}>
                        <CLabel
                          style={{
                            fontSize: "18px",
                            fontFamily: "Open Sans",
                            fontWeight: "700",
                          }}
                        >
                          Details of Closed CC
                        </CLabel>
                      </CCol>
                    </CRow>
                    <CRow
                      sm="12"
                      md="12"
                      lg="12"
                      className={"seperator-1"}
                      style={{ marginTop: "0.2em", marginLeft: "0.5em" }}
                    >
                      <CCol
                        md="3"
                        style={{ marginLeft: "0em", marginTop: "16px" }}
                      >
                        <CLabel className={"form-labels-1"}>
                          {" "}
                          {
                            <span
                              style={{ color: "black" }}
                              className={"form-labels-6"}
                            >
                              C.C Description
                            </span>
                          }
                          <span className={"text-danger"}> *</span>{" "}
                        </CLabel>
                        <CInput
                          name={"dccDescription"}
                          style={{ textTransform: "uppercase" }}
                          id={"createRoleDccDescription"}
                          onKeyPress={(e) =>
                            FormValidation.value_Without_Symbols(e)
                          }
                          maxLength="30"
                        />
                      </CCol>
                      <CCol
                        className={"column-align"}
                        md="3"
                        style={{ marginLeft: "-1em" }}
                      >
                        <CLabel className={"form-labels-1"}>
                          {" "}
                          {
                            <span
                              style={{ color: "black" }}
                              className={"form-labels-6"}
                            >
                              C.C ID
                            </span>
                          }
                          <span className={"text-danger"}> *</span>{" "}
                        </CLabel>
                        <CInput
                          name={"dccID"}
                          id={"createRoleDccidCode"}
                          readOnly={true}
                          onKeyPress={(e) =>
                            FormValidation.value_Without_Symbols(e)
                          }
                          maxLength="30"
                        />
                      </CCol>
                    </CRow>
                  </CContainer>
                  <CRow sm="12" lg="12" md="10">
                    <CCol
                      md="5"
                      style={{
                        marginLeft: "23em",
                        float: "right",
                        marginTop: "-2.5em",
                        position: "absolute",
                      }}
                    >
                      <CButton
                        style={{
                          float: "right",
                          cursor: "pointer",
                        }}
                        id={"assignpartypostingcancel"}
                        className={"cancelBtn"}
                        onClick={cancelsowmember}
                      >
                        CANCEL
                      </CButton>{" "}
                      <CButton
                        style={{
                          float: "right",
                          marginRight: "15px",
                        }}
                        id={"assignpartypostingsave"}
                        className={"saveBtn"}
                      >
                        Allocate
                      </CButton>{" "}
                    </CCol>
                  </CRow>
                  <CRow
                    sm="12"
                    md="12"
                    lg="12"
                    style={{
                      padding: "4%",
                      marginTop: "1.5%",
                      marginLeft: "-10px",
                    }}
                  >
                    <CDataTable
                      items={userdatat}
                      fields={fieldsprime}
                      columnFilter
                      tableFilter
                      tableLabel={"Default Allocating Contacts List"}
                      itemsPerPageSelect
                      itemsPerPage={5}
                      hover
                      sorter
                      pagination
                      scopedSlots={{
                        show_details: (item, index) => {
                          return (
                            <td className="py-1">
                              <CRow sm="12" md="12" lg="12">
                                <CCol style={{ fontSize: "1.15rem" }} md="16">
                                  <Dropdown
                                    className={"ant-dropdown-cutomize-by-me"}
                                    overlay={() => menus(item)}
                                  >
                                    <a
                                      href
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
                  </CContainer>
                </div>
              )}
               {addtenth && (
                <div>
                  <CContainer>
                  <CContainer>
                    <CRow
                      sm="12"
                      md="12"
                      lg="12"
                      style={{ marginLeft: "-3.5em", marginTop: "15px" }}
                    > 
                    <CCol className={"column-align"} md="3">
                      <CLabel className={"label-name-1"}>
                        State
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <Select
                        id={"municipalstatename"}
                        name={"state"}
                        placeholder={"Select State"}
                      />
                    </CCol>
                    <CCol className={"column-align"} md="3">
                      <CLabel className={"label-name-1"}>
                        District / City
                        <span className={"text-danger"}>*</span>
                      </CLabel>
                      <Select
                        id={"municipalstatename"}
                        name={"state"}
                        placeholder={"Select District / City"}
                      />
                    </CCol>
                    </CRow>
                    <CRow
                      sm="12"
                      md="12"
                      lg="12"
                      className={"row-alignment"}
                      style={{ marginLeft: "-5em" }}
                    >
                      <CCol className={"column-align"} md="7">
                        <CLabel className={"label-name"}>
                          Name of the Ward with Elected Member
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <Select
                          className={"input-align-2"}
                          id={"nameofmemberassignpartyposting"}
                          name={"state"}
                          placeholder={"Select Name of the Member"}
                        />
                      </CCol>
                    </CRow>
                  </CContainer>
                  <CCol style={{ top: "2em", marginLeft: "20.5em" }}>
                    <CLabel
                      style={{
                        fontSize: "18px",
                        fontFamily: "Open Sans",
                        fontWeight: "700",
                        color: "#4592d8",
                      }}
                    >
                      Or
                    </CLabel>
                  </CCol>

                  <CContainer>
                    <CRow sm="12" md="12" lg="12">
                      <CCol style={{ marginTop: "2em", marginLeft: "1em" }}>
                        <CLabel
                          style={{
                            fontSize: "18px",
                            fontFamily: "Open Sans",
                            fontWeight: "700",
                          }}
                        >
                          Word Search
                        </CLabel>
                      </CCol>
                    </CRow>
                    <CRow
                      sm="12"
                      md="12"
                      lg="12"
                      className={"row-alignment"}
                      style={{ marginLeft: "-5em", marginTop: "-1.5em" }}
                    >
                      <CCol className={"column-align"} md="7">
                        <CLabel className={"label-name"}>
                          Name of the Ward with Elected Member
                          <span className={"text-danger"}>*</span>
                        </CLabel>
                        <Select
                          className={"input-align-2"}
                          id={"nameofmemberassignpartyposting"}
                          name={"state"}
                          placeholder={"Select Name of the Member"}
                        />
                      </CCol>
                    </CRow>                                               
                    <CRow
                      sm="12"
                      md="12"
                      lg="12"
                      style={{ marginLeft: "850px", marginTop: "-230px" }}
                    >
                      <CCol>
                        <CCard className={"card-container"}>
                          <header>
                            <img
                              src="https://raw.githubusercontent.com/ritaxcorreia/react-profile-card/3b562dc1f28cd3630508d4628aab1e85e25c2682/src/images/bg-pattern-card.svg"
                              alt="male icon"
                              style={{
                                marginLeft: "0em",
                                minWidth: "270px",
                                maxWidth: "270px",
                                borderRadius: "14px",
                              }}
                            />
                          </header>
                          <img
                            src="https://i.pinimg.com/736x/5f/40/6a/5f406ab25e8942cbe0da6485afd26b71.jpg"
                            className={"img"}
                            alt="member"
                            style={{ marginTop: "-85px" }}
                          />
                          <h2
                            style={{
                              fontSize: "30px",

                              textAlign: "center",
                              textTransform: "uppercase",
                            }}
                          >
                            Name{" "}
                          </h2>
                          <h3
                            style={{
                              fontSize: "20px",
                              textAlign: "center",
                              textTransform: "uppercase",
                            }}
                          >
                            Gender{" "}
                          </h3>
                          <h4
                            style={{
                              fontSize: "18px",
                              textAlign: "center",
                              textTransform: "uppercase",
                            }}
                          >
                            DoB{" "}
                          </h4>
                        </CCard>
                      </CCol>
                    </CRow>
                  </CContainer>
                  <CContainer>
                    <CRow sm="12" md="12" lg="12">
                      <CCol style={{ marginTop: "-3.5em", marginLeft: "1em" }}>
                        <CLabel
                          style={{
                            fontSize: "18px",
                            fontFamily: "Open Sans",
                            fontWeight: "700",
                          }}
                        >
                          Details of Closed CC
                        </CLabel>
                      </CCol>
                    </CRow>
                    <CRow
                      sm="12"
                      md="12"
                      lg="12"
                      className={"seperator-1"}
                      style={{ marginTop: "0.2em", marginLeft: "0.5em" }}
                    >
                      <CCol
                        md="3"
                        style={{ marginLeft: "0em", marginTop: "16px" }}
                      >
                        <CLabel className={"form-labels-1"}>
                          {" "}
                          {
                            <span
                              style={{ color: "black" }}
                              className={"form-labels-6"}
                            >
                              C.C Description
                            </span>
                          }
                          <span className={"text-danger"}> *</span>{" "}
                        </CLabel>
                        <CInput
                          name={"dccDescription"}
                          style={{ textTransform: "uppercase" }}
                          id={"createRoleDccDescription"}
                          onKeyPress={(e) =>
                            FormValidation.value_Without_Symbols(e)
                          }
                          maxLength="30"
                        />
                      </CCol>
                      <CCol
                        className={"column-align"}
                        md="3"
                        style={{ marginLeft: "-1em" }}
                      >
                        <CLabel className={"form-labels-1"}>
                          {" "}
                          {
                            <span
                              style={{ color: "black" }}
                              className={"form-labels-6"}
                            >
                              C.C ID
                            </span>
                          }
                          <span className={"text-danger"}> *</span>{" "}
                        </CLabel>
                        <CInput
                          name={"dccID"}
                          id={"createRoleDccidCode"}
                          readOnly={true}
                          onKeyPress={(e) =>
                            FormValidation.value_Without_Symbols(e)
                          }
                          maxLength="30"
                        />
                      </CCol>
                    </CRow>
                  </CContainer>
                  <CRow sm="12" lg="12" md="10">
                    <CCol
                      md="5"
                      style={{
                        marginLeft: "23em",
                        float: "right",
                        marginTop: "-2.5em",
                        position: "absolute",
                      }}
                    >
                      <CButton
                        style={{
                          float: "right",
                          cursor: "pointer",
                        }}
                        id={"assignpartypostingcancel"}
                        className={"cancelBtn"}
                        onClick={cancelsowmember}
                      >
                        CANCEL
                      </CButton>{" "}
                      <CButton
                        style={{
                          float: "right",
                          marginRight: "15px",
                        }}
                        id={"assignpartypostingsave"}
                        className={"saveBtn"}
                      >
                        Allocate
                      </CButton>{" "}
                    </CCol>
                  </CRow>
                  <CRow
                    sm="12"
                    md="12"
                    lg="12"
                    style={{
                      padding: "4%",
                      marginTop: "1.5%",
                      marginLeft: "-10px",
                    }}
                  >
                    <CDataTable
                      items={userdatat}
                      fields={fieldwarddist}
                      columnFilter
                      tableFilter
                      tableLabel={"Default Allocating Contacts List"}
                      itemsPerPageSelect
                      itemsPerPage={5}
                      hover
                      sorter
                      pagination
                      scopedSlots={{
                        show_details: (item, index) => {
                          return (
                            <td className="py-1">
                              <CRow sm="12" md="12" lg="12">
                                <CCol style={{ fontSize: "1.15rem" }} md="16">
                                  <Dropdown
                                    className={"ant-dropdown-cutomize-by-me"}
                                    overlay={() => menus(item)}
                                  >
                                    <a
                                      href
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
                  </CContainer>
                </div>
              )}
            </CCard>
          </div>
        )}
      </React.Fragment>
    </div>
  );
}

export default AllocateCC;
