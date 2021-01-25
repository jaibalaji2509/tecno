import React, { useState,useEffect  } from 'react'
import {
    CCol,
    CNav,
    CNavItem,
    CNavLink,
    CRow,
    CTabContent,
    CTabPane,
    CCard,
    CCardBody,
    CTabs,
    CCardHeader
} from '@coreui/react'
// import CIcon from '@coreui/icons-react'


import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useHistory } from 'react-router-dom'
// import { address } from '../../../services/ApiService'
import OfficeType from '../office/OfficeType'
import OfficeLocation from '../office/OfficeLocation'
import EntityList from '../Entity/EntityList'
// import RoleCreation from '../RoleCreation/RoleCreation';
import Reporting from '../CreateRole/CreateRole';
const OrganisationalSetup = () => {
    const [active, setActive] = useState(1)
    // const lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.'
    const history = useHistory()
    function Addres(props) {
        return <h2 onClick ={() => props.history.push('AddEmployee')}>About</h2>;
      }
      
    //   function Topics({ match }) {
    //     return <h3>Requested Param: {match.params.id}</h3>;
    //   }
    useEffect(() => {
        return history.listen((location) => {
            console.log(`You changed the page to: ${location.BulkDetails}`)
        })
    },[history])
    return (
        <CRow>

<div>
      <Router>
        <Route exact path="/" component={Addres} />
      
      </Router>
      </div>
            <CCol >
                <CCard>
                    <CCardHeader>
                        Organisational Setup
                     </CCardHeader>
                    <CCardBody>
                        <CTabs activeTab={active} onActiveTabChange={idx => setActive(idx)}>
                            
                            <CNav variant="tabs">

                                <CNavItem>
                                    <CNavLink href='#OfficeType'>
                                        <CTabs eventKey="home" title="Home">
                                           Office Type
                                      </CTabs>
                                    </CNavLink> 
                                </CNavItem>
                                <CNavItem>
                                    <CNavLink  href='#OfficeLocation'>
                                        <CTabs eventKey="home" title="Home">
                                          Office Location
                                      </CTabs>
                                    </CNavLink>
                                </CNavItem>
                                <CNavItem>
                                    <CNavLink  href='#CreateRole'>
                                    <CTabs eventKey="home" title="Home">
                                      Create Role
                                      </CTabs>
                                    </CNavLink>
                                </CNavItem>
                                <CNavItem>
                                    <CNavLink href='#EntityList'>
                                    <CTabs eventKey="home" title="Home">
                                      Entity List
                                      </CTabs>  
                                    </CNavLink>
                                </CNavItem>
                            </CNav>
                            <CTabContent>
                                <CTabPane>
                                    <OfficeType/>
                                </CTabPane>
                                <CTabPane>
                                    <OfficeLocation />
                                </CTabPane>
                                <CTabPane>
                                    
                              <Reporting/>
                                </CTabPane>
                                <CTabPane>
                              <EntityList/>
                                </CTabPane>
                              
                            </CTabContent>
                        </CTabs>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default OrganisationalSetup
