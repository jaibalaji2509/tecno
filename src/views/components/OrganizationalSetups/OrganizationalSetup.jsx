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
import CIcon from '@coreui/icons-react'

import AddEmployee from '../addemployee/AddEmployee'
import Address from '../address/Address'
import EducationDetails from '../educationdetails/EducationDetails'
import BulkDetails from '../bulkdetails/BulkDetails'
import FamilyList from '../familylist/FamilyList'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useHistory } from 'react-router-dom'
import AddPosting from '../Posting/AddPosting'
import OfficeType from '../office/OfficeType'
import OfficeLocation from '../office/OfficeLocation'
import { createAllRole } from '../../../services/ApiService'
import CreateRole from '../CreateRole/CreateRole'
import Reporting from '../CreateRole/CreateRole'
import EntityList from '../Entity/EntityList'
import HierarchyViewer from '../../hierarchyviewer/HierarchyViewer'
import RoleCopy from '../rolecopy/RoleCopy'
const OrganizationalSetup = () => {
    const [active, setActive] = useState(0)
    const lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.'
    const history = useHistory()
    function Addres(props) {
        return <h2 onClick ={() => props.history.push('AddEmployee')}>About</h2>;
      }
      
      function Topics({ match }) {
        return <h3>Requested Param: {match.params.id}</h3>;
      }
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
        <Route path="/addemployee" component={AddEmployee} />
      </Router>
      </div>
            <CCol >
                <CCard>
                    {/* <CCardHeader>
                        Controlled tabs
                     </CCardHeader> */}
                    <CCardBody>
                        <CTabs activeTab={active} onActiveTabChange={idx => setActive(idx)}>
                            
                            <CNav variant="tabs">

                                <CNavItem>
                                    <CNavLink href='#PartyOfficeType'>
                                        <CTabs eventKey="home" title="Home">
                                            Type of Party Office
                                      </CTabs>
                                    </CNavLink> 
                                </CNavItem>
                                <CNavItem>
                                    <CNavLink  href='#PartyOfficelocation'>
                                        <CTabs eventKey="home" title="Home">
                                            Party Office location
                                      </CTabs>
                                    </CNavLink>
                                </CNavItem>
                              
                                <CNavItem>
                                    <CNavLink  href='#Rolecreation'>
                                    <CTabs eventKey="home" title="Home">
                                     Role creation
                                      </CTabs>  
                                    </CNavLink>
                                </CNavItem>

                                <CNavItem>
                                    <CNavLink  href='#Rolecreation'>
                                    <CTabs eventKey="home" title="Home">
                                    Copy Posting
                                      </CTabs>  
                                    </CNavLink>
                                </CNavItem>
                                {/* <CNavItem>
                                    <CNavLink  href='#EntityList'>
                                    <CTabs eventKey="home" title="Home">
                                     Entity
                                      </CTabs>  
                                    </CNavLink>
                                </CNavItem> */}
                                {/* <CNavItem>
                                    <CNavLink  href='#EducationDetails'>
                                    <CTabs eventKey="home" title="Home">
                                      Office Location Chart
                                      </CTabs>
                                    </CNavLink>
                                </CNavItem> */}
                            </CNav>
                            <CTabContent>
                                <CTabPane>
                                    <OfficeType />
                                </CTabPane>
                                <CTabPane>
                                    <OfficeLocation />
                                </CTabPane>
                                <CTabPane>
                              <Reporting/>
                                </CTabPane>
                                <CTabPane>
                                    <RoleCopy/>
                                </CTabPane>
                                {/* <CTabPane>
                              <EntityList/>
                                </CTabPane> */}
                                {/* <CTabPane>
                                    <HierarchyViewer/>
                                      </CTabPane> */}
                            </CTabContent>
                        </CTabs>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default OrganizationalSetup 
