// import React, { useState, useEffect } from 'react'
// import {
//     CCol,
//     CNav,
//     CNavItem,
//     CNavLink,
//     CRow,
//     CTabContent,
//     CTabPane,
//     CCard,
//     CCardBody,
//     CTabs,
//     CCardHeader
// } from '@coreui/react'
// import CIcon from '@coreui/icons-react'

// import AddEmployee from '../addemployee/AddEmployee'
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import { useHistory } from 'react-router-dom'
// import Country from '../country/Country'
// import State from '../state/State'
// import City from '../city/City'
// import Area from '../area/Area'


// const Location = () => {
//     const [active, setActive] = useState(1)
//     const lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.'
//     const history = useHistory()
//     function Addres(props) {
//         return <h2 onClick={() => props.history.push('AddEmployee')}>About</h2>;
//     }

//     function Topics({ match }) {
//         return <h3>Requested Param: {match.params.id}</h3>;
//     }
//     useEffect(() => {
//         return history.listen((location) => {
//             console.log(`You changed the page to: ${location.BulkDetails}`)
//         })
//     }, [history])
//     return (
//         <CRow>

//             <div>
//                 <Router>
//                     <Route exact path="/" component={Addres} />
//                     <Route path="/addemployee" component={AddEmployee} />
//                 </Router>
//             </div>
//             <CCol >
//                 <CCard>

//                     <CCardBody>
//                         <CTabs activeTab={active} onActiveTabChange={idx => setActive(idx)}>

//                             <CNav variant="tabs">

//                                 <CNavItem>
//                                     <CNavLink href='#Country'>
//                                         <CTabs eventKey="home" title="Home">
//                                             Country
//                                       </CTabs>
//                                     </CNavLink>
//                                 </CNavItem>
//                                 <CNavItem>
//                                     <CNavLink href='#State'>
//                                         <CTabs eventKey="home" title="Home">
//                                             State
//                                       </CTabs>
//                                     </CNavLink>
//                                 </CNavItem>

//                                 <CNavItem>
//                                     <CNavLink href='#City'>
//                                         <CTabs eventKey="home" title="Home">
//                                             City
//                                       </CTabs>
//                                     </CNavLink>
//                                 </CNavItem>
//                                 <CNavItem>
//                                     <CNavLink href='#Area'>
//                                         <CTabs eventKey="home" title="Home">
//                                             Area
//                                       </CTabs>
//                                     </CNavLink>
//                                 </CNavItem>

//                             </CNav>
//                             <CTabContent>
//                                 <CTabPane>
//                                     <Country />
//                                 </CTabPane>
//                                 <CTabPane>
//                                     <State />
//                                 </CTabPane>
//                                 <CTabPane>
//                                     <City />
//                                 </CTabPane>
//                                 <CTabPane>
//                                     <Area />
//                                 </CTabPane>

//                             </CTabContent>
//                         </CTabs>
//                     </CCardBody>
//                 </CCard>
//             </CCol>
//         </CRow>
//     )
// }

// export default Location
