import React, { useState } from 'react'
import { AutoSizer, Table, Column } from 'react-virtualized'
// import "../suspend/node_modules/react-virtualized/styles.css";
import { CRow, CCard, CCol, CButton, CForm, CSelect, CLabel, CInput } from '@coreui/react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import Edit from '../../images/image 2.svg'
import Remove from '../../images/image 15.svg'
import './RevokeEmployeeList.css'
// import { revokeEmployeeList } from '../../../services/ApiService'
function RevokeEmployeeList() {

    const [Roles, setRoles] = useState([{
        SlNO: 1, officeType: ' Head office ',
        // location:'Chennai', 
        Abbreviation: 'Chennai',
        officeName: 'Office Executive Engineer',
        department: 'Administartion',
        designation: 'Executive Engineer',
        role: '-',
        id: '',
        name: 'Prem',
        doj: '13-08-2019',
        createdby: 'Vinoth',
        createdon: '16-09-2019'
    }, {
        SlNO: 1, officeType: ' Head office ',
        // location:'Chennai', 
        Abbreviation: 'Madurai',
        officeName: 'Office Engineer',
        department: 'Administartion',
        designation: 'Chief Engineer',
        role: '1',
        id: '',
        name: 'Murugan',
        doj: '22-05-2020',
        createdby: 'Aravindh',
        createdon: '26-10-2019'
    }, {
        SlNO: 1, officeType: ' Head office ',
        // location:'Chennai', 
        Abbreviation: 'Salem',
        officeName: 'Office Engineer',
        department: 'Civil',
        designation: 'Assistant Engineer',
        role: '1',
        id: '',
        name: 'Aravindh',
        doj: '15-09-2019',
        createdby: 'Karthick',
        createdon: '26-10-2019'
    },])
    // const {enqueueSnackbar} = useSnackbar()
    // const [Selected, setSelected] = useState({})
    // const [designation, setDesignation] = useState({})
    // const [description, setDescrption] = useState({})
    // const [department, setDepartment] = useState({})
    // const [id, setId] = useState({})
    // const [office, setOffice] = useState({})
    // const [location, setLocation] = useState({})
    // const [name, setName] = useState({})
    // const [Role, setRole] = useState(false)
    // const [RoleList, setRoleList] = useState(true)



    const MIN_TABLE_WIDTH = 2100;
    const _noContentRenderer = () => {
        return <div>No Office types.</div>
    }
    const revoke = useFormik({
        initialValues: {
            name: '',
            department: '',
            location: '',
            designation: '',
            office: '',
            circle: '',
            role: '',

        },
        validationSchema: yup.object({
            name: yup.string()
                .required("Office Type Required"),
            // .min(5 , "Minimum 5 charcter" )
            department: yup.string()
                .required("Department Required"),
            location: yup.string()
                .required("Office Location Required"),
            designation: yup.string()
                .required("Designation Required"),
            office: yup.string()
                .required("Office Name Required"),
            circle: yup.string()
                .required("Circle Name Required"),
            role: yup.string()
                .required("Role Required"),


        }),
        onSubmit: (userInputData) => {
            console.log(userInputData)

        }
    })
    // const revokeEmployeesList = async (index) => {
    //     var response
    //     let body = {
    //         typeofOffice: name,
    //         Departments: department,
    //         OfficeLocation: location,
    //         Designation: designation,
    //         officeName: office,
    //         Role: Role,
    //         Description: description,
    //         ID: id,
    //     }
    //     try {
    //         response = await revokeEmployeeList(index, JSON.stringify(body))
    //     } catch (e) {
    //         console.log(e)
    //     }
    // }

    return (

        <div>
            <div style={{ padding: '2%' }}>
                <CCard className={'Roless-card-container'}>
                    <CRow style={{ paddingTop: '1%', paddingLeft: '2%' }}>
                        <CCol md='12' className={'role-heading'}>
                            Revoke</CCol>
                    </CRow>

                    <CForm autoComplete='off' onSubmit={revoke.handleSubmit}>
                        <CRow className={'role-form-container '}>
                            <CCol md='12' lg='12' sm='12'>

                                <CRow className={'seperator'}>
                                    <CCol>
                                        <CLabel className={'form-labels'}>Office Type</CLabel>
                                        <CSelect name={'name'} onChange={revoke.handleChange} >
                                            <option value={revoke.values.name} disabled selected>Select Office Type</option>
                                            <option name='department' value='Head Office'>Head Office</option>
                                            <option name='department' value='Branch Office'>Branch Office</option>

                                        </CSelect>

                                        {revoke.errors.name ?
                                            <div className="text-danger"> {revoke.errors.name}</div>
                                            : null
                                        }
                                    </CCol>
                                    <CCol>
                                        <CLabel className={'form-labels'}>Location </CLabel>
                                        <CSelect name={'location'} onChange={revoke.handleChange} >
                                            <option value={revoke.values.location} disabled selected>Select Office Location</option>
                                            <option name='department' value='Chennai'>Chennai</option>
                                            <option name='department' value='Madurai'>Madurai</option>
                                        </CSelect>
                                        {revoke.errors.location ?
                                            <div className="text-danger"> {revoke.errors.location}</div>
                                            : null
                                        }
                                    </CCol>
                                </CRow>
                                <CRow className={'seperator'}>

                                    <CCol>
                                        <CLabel className={'form-labels'}>Name of the Office </CLabel>
                                        <CSelect name={'office'} onChange={revoke.handleChange}>
                                            <option value={revoke.values.office} disabled selected>Select Office Name</option>
                                            <option name='department' value='Office Chief Engineer'>Office Chief Engineer</option>
                                            <option name='department' value='Executive Engineer'>Executive Engineer</option>
                                        </CSelect>
                                        {revoke.errors.office ?
                                            <div className="text-danger"> {revoke.errors.office}</div>
                                            : null
                                        }
                                    </CCol>

                                    <CCol>
                                        <CLabel className={'form-labels'}>Name of the Circle Office </CLabel>
                                        <CSelect name={'circle'} onChange={revoke.handleChange} >
                                            <option value={revoke.values.circle} disabled selected>Select Circle Office Name</option>
                                            <option name='department' value='Office Chief Engineer'>Office Chief Engineer</option>
                                            <option name='department' value='Executive Engineer'>Executive Engineer</option>
                                        </CSelect>
                                        {revoke.errors.circle ?
                                            <div className="text-danger"> {revoke.errors.circle}</div>
                                            : null
                                        }
                                    </CCol>

                                </CRow>


                                <CRow className={'seperator'}>

                                    <CCol>
                                        <CLabel className={'form-labels'}>Department</CLabel>
                                        <CSelect name={'department'} onChange={revoke.handleChange} >
                                            <option value={revoke.values.department} disabled selected>Select Department</option>
                                            <option name='department' value='Administrative'>Administrative</option>
                                            <option name='department' value='Civil'>Civil</option>
                                        </CSelect>
                                        {revoke.errors.department ?
                                            <div className="text-danger"> {revoke.errors.department}</div>
                                            : null
                                        }
                                    </CCol>

                                    <CCol>
                                        <CLabel className={'form-labels'}>Designation </CLabel>
                                        <CSelect name={'designation'} onChange={revoke.handleChange} >
                                            <option value={revoke.values.designation} disabled selected>Select Designation</option>
                                            <option name='department' value='Chief Engineer'>Chief Engineer</option>
                                            <option name='department' value='Executive Engineer'>Executive Engineer</option>
                                        </CSelect>
                                        {revoke.errors.designation ?
                                            <div className="text-danger"> {revoke.errors.designation}</div>
                                            : null
                                        }
                                    </CCol>

                                </CRow>

                                <CRow className={'seperator'}>


                                    <CCol>
                                        <CLabel className={'form-labels'}>Role </CLabel>
                                        <CSelect name={'role'} onChange={revoke.handleChange}>
                                            <option value={revoke.values.role} disabled selected>Select Role</option>
                                            <option name='department' value='1'>1</option>
                                            <option name='department' value='2'>2</option>
                                        </CSelect>
                                        {revoke.errors.role ?
                                            <div className="text-danger"> {revoke.errors.role}</div>
                                            : null
                                        }
                                    </CCol>
                                    <CCol>

                                    </CCol>

                                </CRow>

                                <CCol md='10'></CCol>

                            </CCol>
                        </CRow>

                        <CRow>
                            <div class="centerd">
                                <CCol md='12'><CButton shape={'pill'} className={'btnShadow blueColor-btn'} onClick={revoke.handleSubmit}>View</CButton></CCol>
                            </div>
                        </CRow>
                    </CForm>

                    <CRow style={{ paddingTop: '3%', paddingLeft: '1%' }}>
                        <CCol md='12' className={'role-heading'}>
                            List of Revoked Employees</CCol>
                    </CRow>
                    <CRow style={{ padding: '4%', paddingLeft: '1%' }}>
                        <CCol md='12'>
                            <CRow>
                                <CCol md='1'>
                                    <CInput className={'box'} placeholder={'Filter Type'} />
                                </CCol>
                                <CCol md='1'>
                                    <CInput className={'box'} placeholder={' Location'} />
                                </CCol>
                                <CCol md='2'>
                                    <CInput className={'box'} placeholder={'Filter Office Type'} />
                                </CCol>
                                <CCol md='1'>
                                    <CInput className={'box'} placeholder={'Department'} />
                                </CCol>

                                <CCol md='1'>
                                    <CInput className={'box'} placeholder={'Designation '} />
                                </CCol>
                                <CCol md='1'>
                                    <CInput className={'box'} placeholder={'Role '} />
                                </CCol>

                                <CCol md='2'>
                                    <CInput className={'box'} placeholder={'Filter Employee'} />
                                </CCol>

                                <CCol md='1'>
                                    <CInput className={'box'} placeholder={'Filter Date '} />
                                </CCol>
                                <CCol md='1'>
                                    <CInput className={'box'} placeholder={'Created By'} />
                                </CCol>

                                <CCol md='1'>
                                    <CInput className={'box'} placeholder={'Created On '} />
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
                                            <Column dataKey={'officeType'} label={'Office Type'} width={width} />
                                            <Column dataKey={'Abbreviation'} label={'Location'} width={width} />
                                            <Column dataKey={'officeName'} label={'Name of the Office'} width={width} />
                                            <Column dataKey={'department'} label={'Department'} width={width} />
                                            <Column dataKey={'designation'} label={'Designation'} width={width} />
                                            <Column dataKey={'role'} label={'Role'} width={width} />
                                            <Column dataKey={'name'} label={'Name of the Employee'} width={width} />
                                            <Column dataKey={'doj'} label={'Date of Joining'} width={width} />
                                            <Column dataKey={'createdby'} label={'Created By'} width={width} />
                                            <Column dataKey={'createdon'} label={'Created On'} width={width} />
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
                            <CCard style={{ width: '165px', height: '35px', padding: '3%', textAlign: 'center' }} className={'Role-card-container'} >
                                Showing 1-10 of 100
                        </CCard>
                        </CCol>
                    </CRow>
                </CCard>
            </div>
        </div>
    )
}

export default RevokeEmployeeList
