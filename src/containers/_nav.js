import img from '../assets/icons/location.svg'
import React from 'react'
import { CImg } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { MdAddLocation } from 'react-icons/md'
// import { HiOutlineOfficeBuilding } from 'react-icons/hi'
import { TiGroup } from 'react-icons/ti'
import { MdLocationOn } from 'react-icons/md'
import { AiFillSetting } from 'react-icons/ai'
import { FaDatabase,FaIdCard,FaDove,FaBuilding } from 'react-icons/fa'
import { GrStackOverflow } from 'react-icons/gr'

export default [
  // {
  //    _tag: 'CSidebarNavItem',
  //    name: 'OrganizationalSetup',
  //    to: '/OrganizationalSetups',
  //    icon: <AiFillSetting className={'c-sidebar-nav-icon'} />,
  //  },
   {
     _tag: 'CSidebarNavItem',
     name: 'User Liscence Management',
     to: '/UserLiscenceManagement',
     icon: <FaIdCard className={'c-sidebar-nav-icon'} />,
   },
   {
     _tag: 'CSidebarNavItem',
     name: 'Location Library',
     to: '/state',
     icon: <MdLocationOn className={'c-sidebar-nav-icon'} />,
   },
  //  {
  //    _tag: 'CSidebarNavItem',
  //    name: 'Organization Setup',
  //    to: '/CompanyPolicy',
  //    icon: 'cil-industry',
  //  },
  // <CImg src={`${img}`} className={'c-sidebar-nav-icon'} width={20}/>
  //  {
  //    _tag: 'CSidebarNavItem',
  //    name: 'Organization Setup',
  //    to: '/OrganisationalSetup',
  //    icon: 'cil-industry',
  //  },
  
  
 
  {
    _tag: 'CSidebarNavItem',
    name: 'Political Party Setup',
    to: '/PoliticalPartySetup',
    icon: <FaBuilding className={'c-sidebar-nav-icon'} />,
  },
  
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Employee Management',
  //  to: '/EmployeeMaster',
  //   icon: 'cil-people',
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Employee Data',
  //   to: '/tabslist',
  //   icon: 'cil-equalizer',
  // },
  
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'KPost Management ',
  //   to: '/EmployeseMaster',
  
  //   icon: 'cil-equalizer',
  // },
  //  {
  //    _tag: 'CSidebarNavItem',
  //    name: 'Office Location',
  //    to: '/OfficeLocation',
  //    icon: 'cil-industry',
  //  },
  // {
  //    _tag: 'CSidebarNavItem',
  //    name: 'Roles',
  //    to: '/reporting',
  //    icon: 'cil-industry',
  //  }, 
  //  {
  //    _tag: 'CSidebarNavItem',
  //    name: 'Entity',
  //    to: '/EntityList',
  //    icon: 'cil-industry',
  //  },
   {
     _tag: 'CSidebarNavItem',
     name: 'Party Member Management',
    to: '/PartyMemberMastert',
     icon: <TiGroup  className={'c-sidebar-nav-icon'} />,
   },
   {
     _tag: 'CSidebarNavItem',
     name: 'Party Member Data',
     to: '/PartyMemberData',
     icon: <FaDatabase className={'c-sidebar-nav-icon'} />,
   },
   {
     _tag: 'CSidebarNavItem',
     name: 'Bulk Upload',
     to: '/BulkUpload',
     icon: <GrStackOverflow className={'c-sidebar-nav-icon'} />,
   },
  //  {
   //   _tag: 'CSidebarNavItem',
   //   name: 'Suspend',
   //   to: '/entityList',
   //   icon: 'cil-equalizer',
   // },
   // {
   //   _tag: 'CSidebarNavItem',
   //   name: 'Transfer',
   //   to: '/entity List',
   //   icon: 'cil-equalizer',
   // },
   // {
   //   _tag: 'CSidebarNavItem',
   //   name: 'Terminate ',
   //   to: '/entity List',
   //   icon: 'cil-equalizer',
   // },
  
   // {
   //   _tag: 'CSidebarNavItem',
   //   name: 'Revoke',
   //   to: '/revokeemployee',
   //   icon: 'cil-equalizer',
   // },
   {
     _tag: 'CSidebarNavItem',
     name: 'KPost Management ',
     to: '/EmployeseMaster',
     icon: <FaDove className={'c-sidebar-nav-icon'} />,
   },
   // {
   //   _tag: 'CSidebarNavItem',
   //   name: 'Employee Managements ',
   //   to: '/tabslist',
   //   icon: 'cil-equalizer',
   // },
 
  
   // {
   //   _tag: 'CSidebarNavItem',
   //   name: 'Office Location',
   //   to: '/Officelocation',
   //   icon: 'cil-equalizer',
   // },
   // {
   //   _tag: 'CSidebarNavItem',
   //   name: 'Entity List ',
   //   to: '/EntityList',
   //   icon: 'cil-equalizer',
   // },
   // {
   //   _tag: 'CSidebarNavItem',
   //   name: 'Experience Details',
   //   to: '/AddExperienceDetails',
   //   icon: 'cil-equalizer',
   // },
   // {
   //   _tag: 'CSidebarNavItem',
   //   name: 'Roles',
   //   to: '/RoleCreation',
   //   icon: 'cil-equalizer',
   // },
   // {
   //   _tag: 'CSidebarNavItem',
   //   name: 'Employee Master',
   //   to: '/EmployeeMaster',
   //   icon: 'cil-equalizer',
   // },
   // {
   //   _tag: 'CSidebarNavItem',
   //   name: 'Posting',
   //   to: '/AddPosting',
   //   icon: 'cil-equalizer',
   // },
   
   // {
   //   _tag: 'CSidebarNavItem',
   //   name: 'Suspend',
   //   to: '/AddSuspendEmployee',
   //   icon: 'cil-equalizer',
   // },
   // {
   //   _tag: 'CSidebarNavItem',
   //   name: 'Suspend List ',
   //   to: '/ViewSuspendEmployee',
   //   icon: 'cil-equalizer',
   // },
   // {
   //   _tag: 'CSidebarNavItem',
   //   name: 'Promotion',
   //   to: '/AddPromoteEmployee',
   //   icon: 'cil-equalizer',
   // },
   // {
   //   _tag: 'CSidebarNavItem',
   //   name: 'Promotion List ',
   //   to: '/PromoteEmployee',
   //   icon: 'cil-equalizer',
   // },
   // {
   //   _tag: 'CSidebarNavItem',
   //   name: 'Transfer ',
   //   to: '/AddTransferEmployee',
   //   icon: 'cil-equalizer',
   // },
   // {
   //   _tag: 'CSidebarNavItem',
   //   name: 'Transfer List ',
   //   to: '/TransferEmployee',
   //   icon: 'cil-equalizer',
   // },
   
 
   // {
   //   _tag: 'CSidebarNavTitle',
   // },
   // {
   //   _tag: 'CSidebarNavItem',
   //   name: 'Colors',
   //   to: '/theme/colors',
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
 ]


