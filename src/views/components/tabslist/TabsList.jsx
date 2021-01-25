import React, { useState, useEffect, useContext } from 'react'
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
} from '@coreui/react'
import AddEmployee from '../addemployee/AddEmployee'
import Address from '../address/Address'
import EducationDetails from '../educationdetails/EducationDetails'
import BulkDetails from '../bulkdetails/BulkDetails'
import FamilyList from '../familylist/FamilyList'
// import Role from '../role/Role'
import AddExperienceDetails from '../ExperienceDetails/AddExperienceDetails'
import Document from '../Document/Document'



import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useHistory } from 'react-router-dom'
// import { address } from '../../../services/ApiService'

import Role from '../role/Role';

const TabsList = () => {
    // const [state,setState] = useContext(EmployeeContext);
    const [active, setActive] = useState("AddPartyMember");
    console.log(active, 'active');

    const activeTabHandler = (val) => {
        console.log(val, 'vLaaa');
        setActive(val);
    }
    // const [state, setState] = useContext(EmployeeContext);
    // console.log(state,'tabs');
    const history = useHistory()
    function Addres(props) {
        return <h2 onClick={() => props.history.push('AddEmployee')}>About</h2>;
    }

    function Topics({ match }) {
        return <h3>Requested Param: {match.params.id}</h3>;
    }
    useEffect(() => {
        return history.listen((location) => {
            console.log(`You changed the page to: ${location.BulkDetails}`)
        })
    }, [history])

    const setValue = (data) => {
        // setState({...state,...data});
        console.log(data);
    }
    return (

            <CRow>
                <div>
                    <Router>
                        <Route exact path="/" component={AddEmployee} />
                        <Route path="/AddPartyMember" component={Addres} />
                    </Router>
                </div>
                <CCol >
                    <CCard>

                        <CCardBody>

                            <CTabs activeTab={active}>

                                <CNav variant="tabs">

                                    <CNavItem>
                                        <CNavLink data-tab="AddPartyMember">
                                            Add Party Member </CNavLink>
                                    </CNavItem>

                                    <CNavItem>
                                        <CNavLink data-tab="Role">
                                            Role </CNavLink>
                                    </CNavItem>

                                    <CNavItem>
                                        <CNavLink data-tab="FamilyDetails">
                                            Family Details </CNavLink>
                                    </CNavItem>

                                    {/* <CNavItem>
                                        <CNavLink data-tab="AddExperienceDetails">
                                            Experience Details </CNavLink>
                                    </CNavItem> */}

                                    <CNavItem>
                                        <CNavLink data-tab="EducationDetails">
                                            Education Qualification </CNavLink>
                                    </CNavItem>
                                    <CNavItem>
                                        <CNavLink data-tab="Document">
                                           Documents </CNavLink>
                                    </CNavItem>
                                    <CNavItem>
                                        <CNavLink data-tab="Address">
                                            Address </CNavLink>
                                    </CNavItem>

                                    {/* <CNavItem>
                                        <CNavLink data-tab="BulkDetails">
                                            Bulk Upload </CNavLink>
                                    </CNavItem> */}
                                </CNav>

                                <CTabContent>
                                    <CTabPane data-tab="AddPartyMember">
                                        <AddEmployee onActive={activeTabHandler} />
                                    </CTabPane>
                                    <CTabPane data-tab="Address">
                                        <Address  onActive={activeTabHandler} />
                                    </CTabPane>
                                    <CTabPane data-tab="Role">
                                        <Role onActive={activeTabHandler} value={setValue} />
                                    </CTabPane>
                                    {/* <CTabPane data-tab="AddExperienceDetails">
                                        <AddExperienceDetails onActive={activeTabHandler} />
                                    </CTabPane> */}
                                    <CTabPane data-tab="EducationDetails">
                                        <EducationDetails onActive={activeTabHandler} />
                                    </CTabPane>
                                    <CTabPane data-tab="FamilyDetails">
                                        <FamilyList onActive={activeTabHandler} />
                                    </CTabPane>
                                    <CTabPane data-tab="Document">
                                        <Document onActive={activeTabHandler} />
                                    </CTabPane>
                                    {/* <CTabPane data-tab="BulkDetails">
                                        <BulkDetails />
                                    </CTabPane> */}
                                </CTabContent>
                            </CTabs>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
    )
}

export default TabsList
