import React from "react";
import CIcon from "@coreui/icons-react";
// import { TiGroup } from "react-icons/ti";
// import { MdLocationOn,MdContactMail,MdAssignmentTurnedIn } from "react-icons/md";
const _nav = [
  {
    _tag: "CSidebarNavItem",
    name: "Dashboard",
    to: "/dashboard",
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
    badge: {
      color: "info",
      text: "NEW",
    },
  },
  {
    _tag: "CSidebarNavItem",
    name: "Location Library",
    to: "/locationlibrary",
    icon: "cil-drop",
  },
  {
    id: "AdminSetupSideBar",
    _tag: "CSidebarNavDropdown",
    name: "Ward Library",
    route: "/AdminSetup",
    icon: "cil-drop",
    _children: [
      {
        id: "CSidebarNavItemSideBar",
        _tag: "CSidebarNavItem",
        name: "Municipal Corporation",
        to: "/Municipalcorporation",
        icon: <CIcon className={"c-sidebar-nav-icon"} />,
      },
      {
        id: "AdminandSubAdminSideBar",
        _tag: "CSidebarNavItem",
        name: "Municipality",
        to: "/municipality",
        icon: <CIcon className={"c-sidebar-nav-icon"} />,
      },
      {
        id: "EntityListSideBar",
        _tag: "CSidebarNavItem",
        name: "Town Panchayat",
        to: "/townpanchayat",
        icon: <CIcon className={"c-sidebar-nav-icon"} />,
      },
      {
        id: "LocationLibrarySideBar",
        _tag: "CSidebarNavItem",
        name: "Village Panchayat",
        to: "/villagepanchayat",
        icon: <CIcon className={"c-sidebar-nav-icon"} />,
      },
      {
        id: "AdminandSubAdminSideBar",
        _tag: "CSidebarNavItem",
        name: "Constituency",
        to: "/Constituency",
        icon: <CIcon className={"c-sidebar-nav-icon"} />,
      },
    ],
  },
  {
    id: "AdminSetupSideBar",
    _tag: "CSidebarNavDropdown",
    name: "Party Organization Setup",
    route: "/AdminSetup",
    icon: "cil-drop",
    _children: [
     
      {
        id: "CSidebarNavItemSideBar",
        _tag: "CSidebarNavItem",
        name: "Type of Party Wing Office",
        to: "/WingsofficeType",
        icon: <CIcon className={"c-sidebar-nav-icon"} />,
      },
      {
        id: "CSidebarNavItemSideBar",
        _tag: "CSidebarNavItem",
        name: "Type of Party Office Location",
        to: "/partyofficelocation",
        icon: <CIcon className={"c-sidebar-nav-icon"} />,
      },

      {
        id: "AdminandSubAdminSideBar",
        _tag: "CSidebarNavItem",
        name: 'Party   Wings Office Location',
        to: "/PartyWingsOfficeLocation",
        icon: <CIcon className={"c-sidebar-nav-icon"} />,
      },
      {
        id: "AdminandSubAdminSideBar",
        _tag: "CSidebarNavItem",
        name: "Party Posting",
        to: "/partyposting",
        icon: <CIcon className={"c-sidebar-nav-icon"} />,
      },
      {
        id:"AdminandSubAdminSideBar",
        _tag: "CSidebarNavItem",
        name: "Assign Party Posting",
        to: "/assignpartyposting",
        icon: <CIcon className={"c-sidebar-nav-icon"} />,
      },
    ],
  },

  

  {
    id: "AdminSetupSideBar",
    _tag: "CSidebarNavDropdown",
    name: "Party Member Managrmrnt",
    route: "/partyMember",    
    icon: 'cil-drop',
   
  
    _children: [
      {
        id: "AdminSetupSideBar",
        _tag: "CSidebarNavDropdown",
        name: "Map Publc Representative",
        route: "/rajyasabha1",
        icon: 'cil-drop',
        _children: [
          {
            _tag: "CSidebarNavItem",
            name: "Rajya Sabha",
            to: "/rajyasabha",
          },
          {
            _tag: "CSidebarNavItem",
            name: "Constituency Member  ",
            to: "/ConstituencyMember",
          },
          {
            id: "CSidebarNavItemSideBar",
            _tag: "CSidebarNavItem",
            name: "Member Town Panchayat",
            to: "/MemberTownPanchayat",
            icon: <CIcon className={"c-sidebar-nav-icon"} />,
          
          },
          {
            id: "CSidebarNavItemSideBar",
            _tag: "CSidebarNavItem",
            name: "Member of Municipality ",
            to: "/MemberofMunicipality",
            icon: <CIcon className={"c-sidebar-nav-icon"} />,
          
          },
          {
            id: "CSidebarNavItemSideBar",
            _tag: "CSidebarNavItem",
            name: "Member Corporation",
            to: "/corporation",
            icon: <CIcon className={"c-sidebar-nav-icon"} />,
          
          },
          {
            id: "CSidebarNavItemSideBar",
            _tag: "CSidebarNavItem",
            name: "State Minister",
            to: "/stateminister",
            icon: <CIcon className={"c-sidebar-nav-icon"} />,
          
          },
          {
            id: "CSidebarNavItemSideBar",
            _tag: "CSidebarNavItem",
            name: "Central Minister",
            to: "/centralminister",
            icon: <CIcon className={"c-sidebar-nav-icon"} />,
          
          },
        ]

      },
     
      {
        id: "CSidebarNavItemSideBar",
        _tag: "CSidebarNavItem",
        name: "Promote Party Member",
        to: "/memberPromote",
        icon: <CIcon className={"c-sidebar-nav-icon"} />,
      },
      {
        id: "CSidebarNavItemSideBar",
        _tag: "CSidebarNavItem",
        name: 'Terminate Party Member ',
        to: '/Terminate',
        icon: <CIcon className={"c-sidebar-nav-icon"} />,
      },
      {
        id: "CSidebarNavItemSideBar",
        _tag: "CSidebarNavItem",
        name: "Suspend Party Member",
        to: "/memberSuspend",
        icon: <CIcon className={"c-sidebar-nav-icon"} />,
      },
      {
        id: "CSidebarNavItemSideBar",
        _tag: "CSidebarNavItem",
        name: "Transfer Party Member",
        to: "/memberTransfer",
        icon: <CIcon className={"c-sidebar-nav-icon"} />,
      },
      {
        id: "CSidebarNavItemSideBar",
        _tag: "CSidebarNavItem",
        name: "Revoke Party Member",
        to: "/memberRevoke",
        icon: <CIcon className={"c-sidebar-nav-icon"} />,
      },
    ],
  },
  {
    id: "AdminSetupSideBar",
    _tag: "CSidebarNavDropdown",
    name: "Party Member Registration",
    route: "/AdminSetup",
    icon: 'cil-drop',
    _children: [
      {
        id:"CSidebarNavItemSideBar",
        _tag: "CSidebarNavItem",
        name: 'Member Registration',
        to: '/MemberRegistration',
        icon: <CIcon className={"c-sidebar-nav-icon"} />,
      },    
      {
        id:"CSidebarNavItemSideBar",
        _tag: "CSidebarNavItem",
        name: 'Member Count',
        to: '/',
        icon: <CIcon className={"c-sidebar-nav-icon"} />,
      },
    ],
  },
  
     
    
  

 
];

export default _nav;
