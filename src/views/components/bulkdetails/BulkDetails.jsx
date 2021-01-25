import React, { useState } from 'react'
import { AutoSizer, Table, Column } from 'react-virtualized'
// import "../suspend/node_modules/react-virtualized/styles.css";
import { CRow, CCard, CCol, CButton, CLabel, CInput } from '@coreui/react'
import Edit from '../../images/image 2.svg'
import Remove from '../../images/image 15.svg'
import './BulkDetails.css'
import { createAllFamilyList } from '../../../services/ApiService'

function BulkDetails() {

    const [Roles, setRoles] = useState([{
        fname: 'Mani',
        lname: 'Raj',
        gender: 'Male',
        dob: '25 july 1995',
        marital: 'Unmarried',
        bgroup: 'o+ve',
        pan: 'AASHBJ45A45J',
        adhar: 'AASHBJ45A45J',
        passport: 'AASHBJ45A45J',
        cell: '9878987845',
        mail: 'mani@gmail.com',

    }, {
        fname: 'Karthick',
        lname: 'Raj',
        gender: 'Male',
        dob: '25 july 1995',
        marital: 'Unmarried',
        bgroup: 'o+ve',
        pan: 'AASHBJ45A45J',
        adhar: 'AASHBJ45A45J',
        passport: 'AASHBJ45A45J',
        cell: '9878987845',
        mail: 'karthi@gmail.com',

    }, {
        fname: 'Vimal',
        lname: 'Kumar',
        gender: 'Male',
        dob: '25 july 1995',
        marital: 'Unmarried',
        bgroup: 'o+ve',
        pan: 'AASHBJ45A45J',
        adhar: 'AASHBJ45A45J',
        passport: 'AASHBJ45A45J',
        cell: '9878987845',
        mail: 'vimal@gmail.com',

    },])
    // const {enqueueSnackbar} = useSnackbar()
    const [RoleList, setRoleList] = useState(true)
    // const [relation, setRelation] = useState(false)
    // const [name, setName] = useState(false)
    // const [age, setAge] = useState(false)

    const MIN_TABLE_WIDTH = 2000;
    const _noContentRenderer = () => {
        return <div>No Office types.</div>
    }

    // const createFamilyList = async (index) => {
    //     let body = {
    //         Relation: relation,
    //         Name: name,
    //         Age: age,
    //     }
    //     try {
    //        const response = await createAllFamilyList(index, JSON.stringify(body))
    //     } catch (e) {
    //         console.log(e)
    //     }
    // }
    
    return (

        <div>


            {RoleList && <div style={{ padding: '2%', paddingLeft: '2%' }}><CCard className={'Bulk-card-container'}>
                <CRow style={{ paddingTop: '2%', paddingLeft: '2%' }}>
                    <CCol md='12' className={'bulk-heading'}>
                        Bulk Details</CCol>
                </CRow>



                <CRow style={{ padding: '2%', paddingLeft: '2%', paddingTop: '4%' }}>
                    <CCol md='3'>

                        <CLabel className={'form-label'}>Excel Template</CLabel>
                        <CButton style={{ marginLeft: '10%' }} shape={'pill'} className={'btnShadow blueColor-btns'} onClick={""}> Download</CButton>

                    </CCol>
                </CRow>

                <CRow style={{ paddingLeft: '55%', marginTop: '-4%' }}>
                    <CLabel className={'form-labels'}>Excel Template</CLabel>
                    <CCol md='3'>


                        <CButton style={{ marginRight: '-15%' }} shape={'pill'} className={'btnShadow blueColor-btns'} onClick={""}> Upload</CButton>

                    </CCol>

                </CRow>

                <CCard className={'BulkDetail-card-container'}>
                    <h3 style={{ padding: '4%', paddingTop: '5%', fontWeight: "bold" }}>Bulk Upload</h3>
                    <h6 style={{ width: '100%', paddingLeft: '4%', paddingTop: '-2%', }}>Employee Details Uploaded Sucessfully</h6>
                    <CButton style={{ marginLeft: '77%', marginTop: '2%'}} shape={'pill'} className={'btnShadow blueColor-btns'} onClick={""}> OK</CButton>
                </CCard>



            </CCard></div>}
            {RoleList && <div ><CCard className={'BulkDetails-card-container'}>
                <CRow style={{ paddingTop: '2%', paddingLeft: '2%' }}>
                    <CCol md='12' className={'bulk-heading'}>
                        Bulk Details</CCol>
                </CRow>



                <CRow style={{ padding: '2%', paddingLeft: '2%', paddingTop: '4%' }}>
                    <CCol md='3'>

                        <CLabel className={'form-label'}>Excel Template</CLabel>
                        <CButton style={{ marginRight: '5%' }} shape={'pill'} className={'btnShadow blueColor-btns'} onClick={""}> Download</CButton>

                    </CCol>

                    <CCol md='3'>

                        <CLabel className={'form-labels'}>Excel Template</CLabel>
                        <CButton style={{ marginRight: '5%' }} shape={'pill'} className={'btnShadow blueColor-btns'} onClick={""}> Upload</CButton>

                    </CCol>

                </CRow>
                <CRow style={{ padding: '2%', paddingLeft: '2%' }}>
                    <CCol md='12'>
                        <CRow>
                            <CCol md='1'>
                                <CInput className={'box'} placeholder={'First name'} />
                            </CCol>
                            <CCol md='1'>
                                <CInput className={'box'} placeholder={'Last name'} />
                            </CCol>
                            <CCol md='1'>
                                <CInput className={'box'} placeholder={'Gender'} />
                            </CCol>
                            <CCol md='1'>
                                <CInput className={'box'} placeholder={'DOB'} />
                            </CCol>

                            <CCol md='1'>
                                <CInput className={'box'} placeholder={'Marital '} />
                            </CCol>
                            <CCol md='1'>
                                <CInput className={'box'} placeholder={'Blood Group'} />
                            </CCol>

                            <CCol md='1'>
                                <CInput className={'box'} placeholder={'PAN No'} />
                            </CCol>

                            <CCol md='1'>
                                <CInput className={'box'} placeholder={'Adhar No '} />
                            </CCol>

                            <CCol md='1'>
                                <CInput className={'box'} placeholder={'Passport No'} />
                            </CCol>

                            <CCol md='1'>
                                <CInput className={'box'} placeholder={'Cell No'} />
                            </CCol>
                            <CCol md='1'>
                                <CInput className={'box'} placeholder={'Mail Id'} />
                            </CCol>
                            <CCol md='1'>
                                {/* <CInput className={'box'} placeholder={'Role'} /> */}
                            </CCol>
                        </CRow>
                    </CCol>

                </CRow>
                <CRow style={{ padding: '1%', paddingLeft: '1%' }}>
                    <CCol>
                        <div style={{ height: '250px', overflow: 'scroll' }}>
                            <AutoSizer>
                                {({ width, height }) => {
                                    return <Table

                                        headerStyle={{ textTransform: 'capitalize' }}
                                        rowStyle={{ borderBottom: '1px solid lightgrey' }}
                                        width={width < MIN_TABLE_WIDTH ? MIN_TABLE_WIDTH : width}
                                        height={height}
                                        headerHeight={50}
                                        rowHeight={50}
                                        rowCount={Roles.length}
                                        //    sort={_sort}
                                        //    sortBy={sortBy}
                                        overscanColumnCount={1}
                                        overscanRowCount={1}
                                        noContentRenderer={_noContentRenderer}
                                        //    sortDirection={sortDirection}
                                        rowGetter={({ index }) => Roles[index]}
                                    >
                                        <Column dataKey={'fname'} label={'First Name'} width={width} />
                                        <Column dataKey={'lname'} label={'Last Name'} width={width} />
                                        <Column dataKey={'gender'} label={'Gender'} width={width} />
                                        <Column dataKey={'dob'} label={'DOB'} width={width} />
                                        <Column dataKey={'marital'} label={'Marital Status'} width={width} />
                                        <Column dataKey={'bgroup'} label={'Blood Group'} width={width} />
                                        <Column dataKey={'pan'} label={'PAN Number'} width={width} />
                                        <Column dataKey={'adhar'} label={'Adhar Number'} width={width} />
                                        <Column dataKey={'passport'} label={'Passport Number'} width={width} />
                                        <Column dataKey={'cell'} label={'Phone Number'} width={width} />
                                        <Column dataKey={'mail'} label={'Mail Id'} width={width} />
                                        <Column dataKey={'id'} label={'Actions'} cellRenderer={
                                            (row) => (
                                                <CRow>
                                                    <div >
                                                        <CCol md='12'><img alt="" className={'icon-role-list'} src={Edit} /><img alt="" className={'icon-role-list'} src={Remove} /></CCol>
                                                    </div>
                                                </CRow>
                                            )
                                        }
                                            minWidth={'75px'} />
                                    </Table>
                                }}
                            </AutoSizer>
                        </div></CCol>
                </CRow>

                <CRow >
                    <CCol md='8'></CCol>
                    <CCol md='4' style={{ padding: '2%', paddingLeft: '16%' }}>
                        <CCard style={{ width: '165px', height: '35px', padding: '3%', textAlign: 'center' }} className={'bulks-card-container'} >
                            Showing 1-10 of 100
                        </CCard>
                    </CCol>
                </CRow>

                {/* <CRow >
                    <CCol md='8'></CCol>
                    <CCol md='3' style={{ padding: '2%', paddingLeft: '17%' }}>
                        <CCard style={{ width: '165px', height: '35px', float: 'left', padding: '3%', textAlign: 'center' }} className={'Role-card-container'} >
                            Showing 1-10 of 100
                        </CCard>
                    </CCol>
                </CRow> */}
            </CCard></div>}

        </div>

    )
}

export default BulkDetails
