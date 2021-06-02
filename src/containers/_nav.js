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
        name: "Type of Party Office",
        to: "/TypeOfpartyOffice",
        icon: <CIcon className={"c-sidebar-nav-icon"} />,
      },
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
    name: "Party Member",
    route: "/partyMember",    
    icon: 'cil-drop',

    _children: [
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

  {
    id: "AdminSetupSideBar",
    _tag: "CSidebarNavDropdown",
    name: "Party Member Management",
    route: "/AdminSetup",
    icon: 'cil-drop',
    _children: [
      {
        id:"CSidebarNavItemSideBar",
        _tag: "CSidebarNavItem",
        name: 'Map Public Representative',
        to: '/ConstituencyMember',
        icon: <CIcon className={"c-sidebar-nav-icon"} />,
      },    
     
    ],
  },

  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Member Registration',
  //   to: '/MemberRegistration',
  //   icon: 'cil-drop',
  // },

  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Typography',
  //   to: '/theme/typography',
  //   icon: 'cil-pencil',
  // },
  // {
  //   _tag: 'CSidebarNavTitle',
  //   _children: ['Components']
  // },
  // {
  //   _tag: 'CSidebarNavDropdown',
  //   name: 'Base',
  //   route: '/base',
  //   icon: 'cil-puzzle',
  //   _children: [
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Breadcrumb',
  //       to: '/base/breadcrumbs',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Cards',
  //       to: '/base/cards',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Carousel',
  //       to: '/base/carousels',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Collapse',
  //       to: '/base/collapses',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Forms',
  //       to: '/base/forms',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Jumbotron',
  //       to: '/base/jumbotrons',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'List group',
  //       to: '/base/list-groups',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Navs',
  //       to: '/base/navs',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Navbars',
  //       to: '/base/navbars',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Pagination',
  //       to: '/base/paginations',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Popovers',
  //       to: '/base/popovers',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Progress',
  //       to: '/base/progress-bar',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Switches',
  //       to: '/base/switches',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Tables',
  //       to: '/base/tables',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Tabs',
  //       to: '/base/tabs',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Tooltips',
  //       to: '/base/tooltips',
  //     },
  //   ],
  // },
  // {
  //   _tag: 'CSidebarNavDropdown',
  //   name: 'Buttons',
  //   route: '/buttons',
  //   icon: 'cil-cursor',
  //   _children: [
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Buttons',
  //       to: '/buttons/buttons',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Brand buttons',
  //       to: '/buttons/brand-buttons',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Buttons groups',
  //       to: '/buttons/button-groups',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Dropdowns',
  //       to: '/buttons/button-dropdowns',
  //     }
  //   ],
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Charts',
  //   to: '/charts',
  //   icon: 'cil-chart-pie'
  // },
  // {
  //   _tag: 'CSidebarNavDropdown',
  //   name: 'Icons',
  //   route: '/icons',
  //   icon: 'cil-star',
  //   _children: [
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'CoreUI Free',
  //       to: '/icons/coreui-icons',
  //       badge: {
  //         color: 'success',
  //         text: 'NEW',
  //       },
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'CoreUI Flags',
  //       to: '/icons/flags',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'CoreUI Brands',
  //       to: '/icons/brands',
  //     },
  //   ],
  // },
  // {
  //   _tag: 'CSidebarNavDropdown',
  //   name: 'Notifications',
  //   route: '/notifications',
  //   icon: 'cil-bell',
  //   _children: [
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Alerts',
  //       to: '/notifications/alerts',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Badges',
  //       to: '/notifications/badges',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Modal',
  //       to: '/notifications/modals',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Toaster',
  //       to: '/notifications/toaster'
  //     }
  //   ]
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Widgets',
  //   to: '/widgets',
  //   icon: 'cil-calculator',
  //   badge: {
  //     color: 'info',
  //     text: 'NEW',
  //   },
  // },
  // {
  //   _tag: 'CSidebarNavDivider'
  // },
  // {
  //   _tag: 'CSidebarNavTitle',
  //   _children: ['Extras'],
  // },
  // {
  //   _tag: 'CSidebarNavDropdown',
  //   name: 'Pages',
  //   route: '/pages',
  //   icon: 'cil-star',
  //   _children: [
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Login',
  //       to: '/login',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Register',
  //       to: '/register',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Error 404',
  //       to: '/404',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Error 500',
  //       to: '/500',
  //     },
  //   ],
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Disabled',
  //   icon: 'cil-ban',
  //   badge: {
  //     color: 'secondary',
  //     text: 'NEW',
  //   },
  //   addLinkClass: 'c-disabled',
  //   'disabled': true
  // },
  // {
  //   _tag: 'CSidebarNavDivider',
  //   className: 'm-2'
  // },
  // {
  //   _tag: 'CSidebarNavTitle',
  //   _children: ['Labels']
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Label danger',
  //   to: '',
  //   icon: {
  //     name: 'cil-star',
  //     className: 'text-danger'
  //   },
  //   label: true
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Label info',
  //   to: '',
  //   icon: {
  //     name: 'cil-star',
  //     className: 'text-info'
  //   },
  //   label: true
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Label warning',
  //   to: '',
  //   icon: {
  //     name: 'cil-star',
  //     className: 'text-warning'
  //   },
  //   label: true
  // },
  // {
  //   _tag: 'CSidebarNavDivider',
  //   className: 'm-2'
  // }
];

export default _nav;
