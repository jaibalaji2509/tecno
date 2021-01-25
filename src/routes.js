import React from 'react';
// import CreateRole from './views/components/CreateRole/CreateRole';
import OfficeLocation from './views/components/office/OfficeLocation';
import EmployeeData from './views/components/EmployeeData/EmployeeData'


const Toaster = React.lazy(() => import('./views/notifications/toaster/Toaster'));
const Tables = React.lazy(() => import('./views/base/tables/Tables'));

const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'));
const Cards = React.lazy(() => import('./views/base/cards/Cards'));
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'));
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'));
const BasicForms = React.lazy(() => import('./views/base/forms/BasicForms'));

const Jumbotrons = React.lazy(() => import('./views/base/jumbotrons/Jumbotrons'));
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'));
const Navbars = React.lazy(() => import('./views/base/navbars/Navbars'));
const Navs = React.lazy(() => import('./views/base/navs/Navs'));
const Paginations = React.lazy(() => import('./views/base/paginations/Pagnations'));
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'));
const ProgressBar = React.lazy(() => import('./views/base/progress-bar/ProgressBar'));
const Switches = React.lazy(() => import('./views/base/switches/Switches'));

const Tabs = React.lazy(() => import('./views/base/tabs/Tabs'));
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'));
const BrandButtons = React.lazy(() => import('./views/buttons/brand-buttons/BrandButtons'));
const ButtonDropdowns = React.lazy(() => import('./views/buttons/button-dropdowns/ButtonDropdowns'));
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'));
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'));
const Charts = React.lazy(() => import('./views/charts/Charts'));
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const HierarchyViewer = React.lazy(() => import('./views/hierarchyviewer/HierarchyViewer'));
const HierarchyViewerchart = React.lazy(() => import('./views/hierarchyviewer/HierarchyViewerchart'));
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'));
const Flags = React.lazy(() => import('./views/icons/flags/Flags'));
const Brands = React.lazy(() => import('./views/icons/brands/Brands'));
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'));
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'));
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'));
const Colors = React.lazy(() => import('./views/theme/colors/Colors'));
const Typography = React.lazy(() => import('./views/theme/typography/Typography'));
const Widgets = React.lazy(() => import('./views/widgets/Widgets'));
const Users = React.lazy(() => import('./views/users/Users'));
const User = React.lazy(() => import('./views/users/User'));

const CreateRole = React.lazy(() => import('./views/components/CreateRole/CreateRole'));
const OfficeType = React.lazy(() => import('./views/components/office/OfficeType'));
// const OfficeLocation = React.lazy(() => import('./views/components/office/OfficeLocation'));
const AddPosting = React.lazy(() => import('./views/components/Posting/AddPosting'));
const AddExperienceDetails = React.lazy(() => import('./views/components/ExperienceDetails/AddExperienceDetails'));
const AddSuspendEmployee = React.lazy(() => import('./views/components/suspend/AddSuspendEmployee'));
const AddTransferEmployee = React.lazy(() => import('./views/components/Transfer/AddTransferEmployee'));
const TransferEmployee = React.lazy(() => import('./views/components/Transfer/TransferEmployee'));
const PromoteEmployee = React.lazy(() => import('./views/components/Promote/PromoteEmployee'));
const AddPromoteEmployee = React.lazy(() => import('./views/components/Promote/AddPromoteEmployee'));
const ViewSuspendEmployee = React.lazy(() => import('./views/components/suspend/ViewSuspendEmployee'));
const Terminate = React.lazy(()=> import('./views/components/terminate/ViewTerminateEmployee'));
// const AddTerminate = React.lazy(()=> import('./views/components/terminate/AddTerminateEmployee'));
// const ViewSuspendEmployee = React.lazy(() => import('./views/components/Suspend/ViewSuspendEmployee'));
const EntityList = React.lazy(() => import('./views/components/Entity/EntityList'));
const EmployeeMaster = React.lazy(() => import('./views/components/EmployeeMaster/EmployeeMaster'));
const Chart = React.lazy(() => import('./views/components/ChartOne/Chart'));


// const Roles = React.lazy(() => import('./views/components/Roles/Roles'));


const RoleCreation =  React.lazy(() => import('./views/components/RoleCreation/RoleCreation'));
const Reporting =  React.lazy(() => import('./views/components/role/Role'));
const FunctionalReporting =  React.lazy(() => import('./views/components/functionalreporting/FunctionalReporting'));
const FamilyList =  React.lazy(() => import('./views/components/familylist/FamilyList'));
const EducationDetails =  React.lazy(() => import('./views/components/educationdetails/EducationDetails'));
const DeleteConfirmation =  React.lazy(() => import('./views/components/deleteconfirmation/DeleteConfirmation'));
const AddEmployee =  React.lazy(() => import('./views/components/addemployee/AddEmployee'));
const OfficeTypeHierarchyChart =  React.lazy(() => import('./views/components/officeTypeHierarchy/OfficeTypeHierarchyChart'));
// const Suspend =  React.lazy(() => import('./views/components/suspend/Suspend'));
const RevokeSuspension =  React.lazy(() => import('./views/components/revokesuspension/RevokeSuspension'));
const Address =  React.lazy(() => import('./views/components/address/Address'));
const BulkDetails =  React.lazy(() => import('./views/components/bulkdetails/BulkDetails'));
const RevokeEmployee =  React.lazy(() => import('./views/components/revokeemployee/RevokeEmployee'));
// const TabsList =  React.lazy(() => import('./views/components/tabslist/TabsList'));
const OrganizationalSetup =  React.lazy(() => import('./views/components/OrganizationalSetups/OrganizationalSetup'));
const Country =  React.lazy(() => import('./views/components/country/Country'));
const State =  React.lazy(() => import('./views/components/state/State'));
const City =  React.lazy(() => import('./views/components/city/City'));
const Area =  React.lazy(() => import('./views/components/area/Area'));
const Location =  React.lazy(() => import('./views/components/locations/Location'));
const RevokeEmployeeList =  React.lazy(() => import('./views/components/revokemployeelist/RevokeEmployeeList'));
const OfficeLocationHierarchy =  React.lazy(() => import('./views/components/officeLocationHierarchy/OfficeLocationHierarchy'));
const RolesHierarchyChart =  React.lazy(() => import('./views/components/rolesHierarchy/RolesHierarchyChart'));
// const EntityList =  React.lazy(() => import('./views/components/entitylist/EntityList'));
const TabsList =  React.lazy(() => import('./views/components/tabslist/TabsList'));
const EmployeeHierarchy =  React.lazy(() => import('./views/components/employeeHierarchyChart/EmployeeHierarchy'));
const OrganisationalSetup =  React.lazy(() => import('./views/components/organizationalsetup/OrganisationalSetup'));
// const OrganisationalSetup =  React.lazy(() => import('./views/components/organizationalsetup/OrganisationalSetup'));

// const OfficeLocation =  React.lazy(() => import('./views/components/office/OfficeLocation'));
const Document = React.lazy(() => import('./views/components/Document/Document'));
const HierarchyNew = React.lazy(() => import('./views/components/hierarchyNew/HierarchyChart'));
const ClientDetail = React.lazy(() => import('./views/components/client/ClientDetail'));
const BulkUpload = React.lazy(()=> import('./views/components/BulkUpload/BulkUpload'));
const OfficeLocationUpload = React.lazy(()=> import('./views/components/office/OfficeLocationUpload'));
const StateUpload = React.lazy(()=> import('./views/components/state/StateUpload'));
const EmployeeUpload = React.lazy(()=> import('./views/components/EmployeeData/EmployeeUpload'));
const RoleCopy = React.lazy(() => import('./views/components/rolecopy/RoleCopy'));


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/hierarchyviewer', name: 'HierarchyViewer', component: HierarchyViewer },
  { path: '/hierarchyviewer', name: 'HierarchyViewerchart', component: HierarchyViewerchart },
  { path: '/theme', name: 'Theme', component: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', component: Colors },
  { path: '/theme/typography', name: 'Typography', component: Typography },
  { path: '/base', name: 'Base', component: Cards, exact: true },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', component: Cards },
  { path: '/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/base/forms', name: 'Forms', component: BasicForms },
  { path: '/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  { path: '/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/base/navbars', name: 'Navbars', component: Navbars },
  { path: '/base/navs', name: 'Navs', component: Navs },
  { path: '/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
  { path: '/base/switches', name: 'Switches', component: Switches },
  { path: '/base/tables', name: 'Tables', component: Tables },
  { path: '/base/tabs', name: 'Tabs', component: Tabs },
  { path: '/base/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/buttons', name: 'Buttons', component: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/buttons/button-dropdowns', name: 'Dropdowns', component: ButtonDropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  { path: '/charts', name: 'Charts', component: Charts },
  { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', component: Flags },
  { path: '/icons/brands', name: 'Brands', component: Brands },
  { path: '/notifications', name: 'Notifications', component: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/notifications/badges', name: 'Badges', component: Badges },
  { path: '/notifications/modals', name: 'Modals', component: Modals },
  { path: '/notifications/toaster', name: 'Toaster', component: Toaster },
  { path: '/widgets', name: 'Widgets', component: Widgets },
  { path: '/users', exact: true, name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },
  { path: '/CreateRole', exact: true, name: 'Create Role', component: CreateRole },
  { path: '/OfficeType', exact: true, name: 'Office Type', component: OfficeType },
  { path: '/OfficeLocation', exact: true, name: 'Office Location', component: OfficeLocation },
  { path: '/AddPosting', exact: true, name: 'Add Posting', component: AddPosting },
  { path: '/AddExperienceDetails', exact: true, name: 'Add Posting', component: AddExperienceDetails },
  { path: '/AddSuspendEmployee', exact: true, name: 'Suspend Employee', component: AddSuspendEmployee },
  { path: '/AddTransferEmployee', exact: true, name: 'Transfer Employee', component: AddTransferEmployee },
  { path: '/TransferEmployee', exact: true, name: 'Transfer Employee', component: TransferEmployee },
  { path: '/PromoteEmployee', exact: true, name: 'Promote Employee', component: PromoteEmployee },
  { path: '/AddPromoteEmployee', exact: true, name: 'Promote Employee', component: AddPromoteEmployee },
  { path: '/ViewSuspendEmployee', exact: true, name: 'View Suspend Employee', component: ViewSuspendEmployee },
  { path: '/EntityList', exact: true, name: 'Entity List', component: EntityList },
  { path: '/PartyMemberMastert', exact: true, name: 'Party Member Mastert ', component: EmployeeMaster },
  { path: '/PartyMemberData', exact: true, name: 'Party Member Data', component: EmployeeData },
  { path: '/BulkUpload', exact: true, name:'Bulk Upload', component: BulkUpload },
  { path: '/officeLocationUpload', exact: true, name:'Office Location BulkUpload', component: OfficeLocationUpload },
  { path: '/stateUpload', exact: true, name:'State BulkUpload', component: StateUpload },
  { path: '/employeeUpload', exact: true, name:'Employee BulkUpload', component: EmployeeUpload },
 


  { path: '/Document', exact: true, name: 'Document ', component: Document },
  
  // { path: '/Roles', exact: true, name: 'Roles ', component: Roles },
 
  {path: '/RoleCreation', exact: true,  name: 'Role Creation', component: RoleCreation},
  {path: '/reporting', exact: true, name: 'Reporting', component: Reporting},
  {path: '/terminate', exact: true, name: 'Terminate', component: Terminate},
  {path: '/functionalreporting', exact: true,  name: 'FunctionalReporting', component: FunctionalReporting},
  {path: '/AddPartyMember', exact: true,  name: 'Add Employee', component: AddEmployee},
  // {path: '/tabslist/addemployee', exact: true,  name: 'Add Employee', component: AddEmployee},
  {path: '/familylist', exact: true,  name: 'Family List', component: FamilyList},
  {path: '/educationdetails', exact: true,  name: 'Education Details', component: EducationDetails},
  {path: '/deleteconfirmation', exact: true,  name: 'Delete Confirmation', component: DeleteConfirmation},
  // {path: '/suspend', exact: true,  name: 'Suspend', component: Suspend},
  // {path: '/transfer', exact: true,  name: 'Transfer', component: Transfer},
  {path: '/revokesuspension', exact: true,  name: 'Revoke Suspension', component: RevokeSuspension},
  {path: '/address', exact: true,  name: 'Address', component: Address},
  {path: '/PoliticalPartySetup', exact: true,  name: 'Political Party Setup', component: OrganizationalSetup},
  {path: '/country', exact: true,  name: 'Country', component: Country},
  {path: '/state', exact: true,  name: 'Locations', component: State},
  {path: '/city', exact: true,  name: 'City', component: City},
  {path: '/area', exact: true,  name: 'Area', component: Area},
  {path: '/locations', exact: true,  name: 'Location', component: Location},
  {path: '/tabslist/address', exact: true,  name: 'Address', component: Address},
  {path: '/bulkdetails', exact: true,  name: 'Bulk Details', component: BulkDetails},
  {path: '/tabslist/bulkdetails', exact: true,  name: 'Bulk Details', component: BulkDetails},
  {path: '/revokeemployee', exact: true,  name: 'Revoke Employee', component: RevokeEmployee},
  {path: '/revokemployeelist', exact: true,  name: 'Revoke EmployeeList', component: RevokeEmployeeList},
  // {path: '/entitylist', exact: true,  name: 'Entity List', component: EntityList},
  { path: '/PartyMemberData/AddPartyMember', exact: true,  name: 'Party Member Management', component: TabsList},
  {path: '/ChartOne', exact: true,  name: 'Chart', component: Chart},
  {path: '/officeTypeHierarchy', exact: true,  name: 'Office Type Hierarchy', component: OfficeTypeHierarchyChart},
  {path: '/officeLocationHierarchy', exact: true,  name: 'OfficeLocationHierarchy', component: OfficeLocationHierarchy},
  {path: '/rolesHierarchy', exact: true,  name: 'RolesHierarchyChart', component: RolesHierarchyChart},
  {path: '/employeeHierarchyChart', exact: true,  name: 'EmployeeHierarchy', component: EmployeeHierarchy},
  {path: '/hierarchyNew', exact: true,  name: 'HierarchyNew', component: HierarchyNew},
  {path: '/client', exact: true,  name: 'ClientDetail', component: ClientDetail},
  {path: '/rolecopy', exact: true,  name: 'RoleCopy', component: RoleCopy},
  
  
];

export default routes;





