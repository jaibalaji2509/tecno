import React, { useState, useContext, useEffect, update } from 'react'
import { AutoSizer, Table, Column, SortDirection, InfiniteLoader } from 'react-virtualized'
// import "../suspend/node_modules/react-virtualized/styles.css";
import { CRow, CCard, CCol, CButton, CForm, CSelect, cRadio, CFormGroup, CLabel, CInput, CFormText } from '@coreui/react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import Edit from '../../images/image 2.svg'
import Remove from '../../images/image 15.svg'
import './Reporting.css'
import { createOfficeType, getOfficeType, updateOfficeType, deleteOfficeType } from '../../../services/ApiService'
import { EmployeeContext } from '../../../services/EmployeeContext';
import RoleHierarchyChart from '../officeTypeHierarchy/OfficeTypeHierarchyChart'
import RolesHierarchyChart from '../rolesHierarchy/RolesHierarchyChart'

function Reporting(props) {

    // const [state, setState] = useContext(EmployeeContext)
    const [primary, setPrimary] = useState("")
    const [modalresult, setModalresult] = useState(false)
    const [Roles, setRoles] = useState([{
        SlNO: 1, officeType: ' Head office ',
        // location:'Chennai', 
        Abbreviation: 'Chennai',
        officeName: 'State Bank of India',
        department: 'Administartion',
        designation: 'Deputy General Manager',
        role: 'System Officer',
        id: ''

    }, {
        SlNO: 1, officeType: ' Branch office ',
        // location:'Chennai', 
        Abbreviation: 'Madurai',
        officeName: 'State Bank of India',
        department: 'Accounts',
        designation: 'Assistant General Manager',
        role: 'supervision',
        id: ''

    }, {
        SlNO: 1, officeType: ' Divisonal office ',
        // location:'Chennai', 
        Abbreviation: 'Salem',
        officeName: 'State Bank of India',
        department: '-',
        designation: 'Chief Manager',
        role: 'Monitoring sales targets',
        id: ''

    },])
   
    const [posts, setPost] = useState([])

    const [RoleList, setRoleList] = useState(true)

    const [CreateRoleSchema, setPosts] = useState([])

    // const [state, setState] = React.useContext(EmployeeContext);

    // console.log(state, );

    // const _noContentRenderer = () => {
    //     return <div>No Office types.</div>
    // }

    const formik = useFormik({
      initialValues: {
        typeOfOffice: "",
        department: "",
        locationRole: "",
        designationRole: "",
        reportingRole: "",
      },
      validationSchema: yup.object({
        typeOfOffice: yup.string().required("Office Type Required"),
        department: yup.string().required("Department Required"),
        locationRole: yup.string().required("Office Location Required"),
        designationRole: yup.string().required("Designation Required"),
        reportingRole: yup.string().required("Role Required"),
      }),
      onSubmit: (userInputData) => {
        console.log(userInputData);
      },
    });

    useEffect(() => {
        async function getAllOfficeType() {
            var response
            // let body = formik.values
            try {
                response = await getOfficeType()

                if (response) {

                    setPost(response.OfficeTypes)
                }
            } catch (e) {
                console.log(e)
            }
        }

        getAllOfficeType();
    }, []);

    const Employee = async () => {
        // await setState({ ...state,...formik.values });
        // console.log(state,formik.values,"reporting");
        formik.handleReset()
        // window.location.pathname = ('/tabslist#Address')
        await props.onActive('FamilyDetails');
    };
    const CancelhandleSubmit = (e) => {
        setModalresult(true)
        // modalresult=false
        console.log('cancel - ' + modalresult)
    }
    const deleteConfirmations = async (index) => {
        var response
        let body = {

        }
        setModalresult(false)

        console.log('ok - ' + modalresult)

        try {
            // response = await deleteConfirmation(index, JSON.stringify(body))
        } catch (error) {
            // return enqueueSnackbar(error.message, { variant: "error" });
        }

    }
    const ds2 = {
        office: "Head Office",
        role: "Cheif Engineer",
        name: "Vinod Kandan",
        children: [
            {
                office: "Chennai Circle Office",
                role: "Superintendent Engineer",
                name: "Rajini Manimaran",
                children: [{
                    office: "North Chennai Division",
                    role: "Executive Engineer",
                    name: "Joseph Vijay",
                    children: [{
                        office: "Chromepet Sub-Division",
                        role: "Assitant Executive",
                        name: "Rahul",
                        children: [{
                            office: "Chromepet Sub-Division",
                            role: "Assitant Engineer",
                            name: "Sathish Kumar"
                        },
                        {
                            office: "Chromepet Sub-Division",
                            role: "Assitant Engineer",
                            name: "Sabanathan"
                        }]
                    }]
                },
                {
                    office: "South Chennai Division",
                    role: "Executive Engineer",
                    name: "Ayyappan"
                }]
            },
            {
                office: "Madurai Circle Office",
                role: "Superintendent Engineer",
                name: "Sridhar"
            },
            {
                office: "Coimbatore Circle Office",
                role: "Superintendent Engineer",
                name: "Sakthi Nandha Kumar"
            }

        ]
    };
    return (
        <div>
            <div style={{ padding: '2%' }}>
                <CCard className={'reporting-card-container'}>
                    <CRow style={{ padding: '10px', paddingLeft: '20px', paddingRight: '20px' }}>
                        <CCol md='12' className={'reporting-heading'}>
                            Create Role</CCol>
                    </CRow>

                    <CModal
                     arial-labelledby="contained-modal-title-center"
                     centered
                        style={{ display: 'flex', justifyContent: 'left', width: '1000px', right: '100px', }}
                        show={primary}
                        onClose={() => setPrimary(!primary)}>

                        <CModalHeader closeButton style={{ display: 'flex', justifyContent: 'left' }} >
                            <CModalTitle> Role Hierarchy Chart </CModalTitle>
                        </CModalHeader>
                        <CModalBody>

                            <RolesHierarchyChart datasource={ds2} />


                        </CModalBody>
                        {/* <CModalFooter>
                            <CButton color="success" onClick={() => setPrimary(deleteConfirmations)}>
                                OK
                </CButton>{' '}
                            <CButton color="secondary" onClick={() => setPrimary(CancelhandleSubmit)}>
                                Cancel
                </CButton>
                        </CModalFooter> */}
                    </CModal>
                    <CCol >
                        <img className={'box4'} src={"https://img.icons8.com/fluent/2x/organization-chart-people.png"} style={{ height: '40px', width: '40px' }} onClick={() => setPrimary(!primary)} />
                    </CCol>
                    <CForm autoComplete='off' onSubmit={formik.handleSubmit}>
                        <CRow style={{ padding: '10px', paddingLeft: '20px', paddingRight: '20px' }}>
                            <CCol md='12' lg='12' sm='12'>

                                <CRow md='5' className={'seperator-report'}>
                                    <CCol>
                                        <CLabel className={'form-labels10'}>Type of Office</CLabel>
                                        <CSelect name={'typeOfOffice'} onChange={formik.handleChange} >  
                                         <option value={formik.values.typeOfOffice} disabled selected>Select Office</option>
                                            {posts.map(post => (

                                                <option value={post.id}>{post.officeType}</option>
                                            ))}
                                        </CSelect>

                                        {formik.errors.typeOfOffice ?
                                            <div className="text-danger"> {formik.errors.typeOfOffice}</div>
                                            : null
                                        }
                                    </CCol>
                                    <CCol>
                                        <CLabel className={'form-labels10'}>Department</CLabel>
                                        <CSelect name={'department'} onChange={formik.handleChange} >                                          
                                            <option value={formik.values.department} disabled selected>Select Department</option>
                                        </CSelect>
                                        {formik.errors.department ?
                                            <div className="text-danger"> {formik.errors.department}</div>
                                            : null
                                        }
                                    </CCol>
                                </CRow>


                                <CRow md='5' className={'seperator-report'}>

                                    <CCol>
                                        <CLabel className={'form-labels10'}>Office Location </CLabel>
                                        <CSelect name={'locationRole'} onChange={formik.handleChange} >
                                            <option value={formik.values.locationRole} disabled selected>Select Office Location</option>                                            
                                        </CSelect>
                                        {formik.errors.locationRole ?
                                            <div className="text-danger"> {formik.errors.locationRole}</div>
                                            : null
                                        }
                                    </CCol>

                                    <CCol>
                                        <CLabel className={'form-labels10'}>Designation </CLabel>
                                        <CSelect name={'designation'} onChange={formik.handleChange} >
                                            <option value={formik.values.designation} disabled selected>Select Designation</option>                                           
                                        </CSelect>
                                        {formik.errors.designation ?
                                            <div className="text-danger"> {formik.errors.designation}</div>
                                            : null
                                        }
                                    </CCol>

                                </CRow>

                                <CRow className={'seperator-report'}>
                                    <CCol md='6'>
                                        <CLabel className={'form-labels10'}>Role </CLabel>
                                        <CSelect name={'reportingRole'} onChange={formik.handleChange}>
                                            <option value={formik.values.reportingRole} disabled selected>Select Role</option>                                            
                                        </CSelect>
                                        {formik.errors.role ?
                                            <div className="text-danger"> {formik.errors.role}</div>
                                            : null
                                        }
                                    </CCol>
                                </CRow>

                                <CCol md='10'></CCol>

                            </CCol>
                        </CRow>
                        {/* 
                        <CRow  >
                            <div class="centerd-1">
                                <CCol md='12'><CButton shape={'pill'} className={'btnShadow blueColor-btn'} onClick={formik.handleSubmit}>+ Create</CButton></CCol>
                            </div>
                        </CRow> */}
                    </CForm>

                </CCard>
            </div>

            <div style={{ paddingTop: '-17%' }}>
               <CCard className={'reporting-card-container-1'}>
                    <CRow style={{ paddingTop: '2%', paddingLeft: '2%' }}>
                        <CCol md='12' className={'reporting-heading'}>
                            Administrative Reporting </CCol>
                    </CRow>


                    <CRow style={{ padding: '2%' }}>
                        <CCol md='12'>
                            <div style={{ width: '100%', height: '200px' }}>
                                <AutoSizer>
                                    {({ width, height }) => {
                                        return <Table

                                            headerStyle={{ textTransform: 'capitalize' }}
                                            rowStyle={{ borderBottom: '1px solid lightgrey' }}
                                            width={width}
                                            height={height}
                                            headerHeight={50}
                                            rowHeight={50}
                                            rowCount={CreateRoleSchema.length}
                                            //    sort={_sort}
                                            //    sortBy={sortBy}
                                            overscanColumnCount={1}
                                            overscanRowCount={1}
                                            // noContentRenderer={_noContentRenderer}
                                            //    sortDirection={sortDirection}
                                            rowGetter={({ index }) => CreateRoleSchema[index]}
                                        >

                                            <Column dataKey={'type'} label={'Type of Office'} width={200} />
                                            <Column dataKey={'department'} label={'Department'} width={150} />
                                            <Column dataKey={'location'} label={'Office Location'} width={200} />
                                            <Column dataKey={'designation'} label={'Designation'} width={210} />
                                            <Column dataKey={'office'} label={'Office Name'} width={200} />
                                            <Column dataKey={'role'} label={'Role'} width={120} />

                                            <Column dataKey={''} label={'Actions'} cellRenderer={
                                                (row) => (
                                                    <CRow>
                                                        <CCol md='5'><img className={'icon-role-list'} src={Edit} /></CCol>
                                                        <CCol md='5'><img className={'icon-role-list'} src={Remove} /></CCol>
                                                    </CRow>
                                                )
                                            } width={100} />
                                        </Table>
                                    }}
                                </AutoSizer>
                            </div></CCol>
                    </CRow>
                    <CRow style={{ padding: '2%', paddingLeft: '5%', paddingTop: '0%', paddingRight: '5%' }}>

                    </CRow>
                    <CRow style={{ padding: '2%', paddingLeft: '5%', paddingTop: '0%', paddingRight: '5%' }}>

                        <CCol md='9'></CCol>
                        {/* <CCol md='3'><CButton shape={'pill'} className={'btnShadow blueColor-btn'} onClick={enableCreate}>+ Create Reporting</CButton></CCol> */}
                    </CRow>

                </CCard>
            </div>        
    

            {RoleList && <div ><CCard className={'reporting-card-container-2'}>
                <CRow style={{ paddingTop: '2%', paddingLeft: '2%' }}>
                    <CCol md='12' className={'reporting-heading'}>
                        Functional Reporting</CCol>
                </CRow>


                <CRow style={{ paddingTop: '2%', padding: '2%' }}>
                    <CCol md='5'>
                        <CRow>
                            <CCol md='3'>
                                <CInput className={'box'} placeholder={'Filter Type'} />
                            </CCol>
                            <CCol md='4'>
                                <CSelect >
                                    <option style={{ fontSize: '11px' }} value="" disabled selected>Filter Location</option>
                                </CSelect>
                            </CCol>
                            <CCol md='5'>
                                <CInput className={'box'} placeholder={'Filter Office name'} />
                            </CCol>
                        </CRow>
                    </CCol>
                    <CCol md='5'>
                        <CRow >
                            <CCol md='4'>
                                <CInput className={'box'} placeholder={'Department'} />
                            </CCol>
                            <CCol md='4'>
                                <CSelect className={'boxSelect'} >
                                    <option value="" disabled selected>Designation</option>
                                </CSelect>
                            </CCol>
                            <CCol md='3'>
                                <CInput className={'box'} placeholder={'Role'} />
                            </CCol>
                        </CRow>
                    </CCol>


                </CRow>




                <CRow style={{ padding: '2%' }}>
                    <CCol md='12'>
                        <div style={{ width: '100%', height: '200px' }}>
                            <AutoSizer>
                                {({ width, height }) => {
                                    return <Table

                                        headerStyle={{ textTransform: 'capitalize' }}
                                        rowStyle={{ borderBottom: '1px solid lightgrey' }}
                                        width={width}
                                        height={height}
                                        headerHeight={50}
                                        rowHeight={50}
                                        rowCount={posts.length}
                                        //    sort={_sort}
                                        //    sortBy={sortBy}
                                        overscanColumnCount={1}
                                        overscanRowCount={1}
                                        // noContentRenderer={_noContentRenderer}
                                        //    sortDirection={sortDirection}
                                        rowGetter={({ index }) => posts[index]}
                                    >

                                        <Column dataKey={'officeType'} label={'OfficeType'} width={110} />
                                        <Column dataKey={'Abbreviation'} label={'Location'} width={150} />
                                        <Column dataKey={'officeName'} label={'Name of the Office'} width={210} />
                                        <Column dataKey={'department'} label={'Department'} width={160} />
                                        <Column dataKey={'designation'} label={'Designation'} width={170} />
                                        <Column dataKey={'office'} label={'Role'} width={200} />
                                        <Column dataKey={'id'} label={'Actions'} cellRenderer={
                                            (row) => (
                                                <CRow>
                                                    <CCol md='5'><img className={'icon-role-list'} src={Edit} /></CCol>
                                                    <CCol md='5'><img className={'icon-role-list'} src={Remove} /></CCol>
                                                </CRow>
                                            )
                                        } width={100} />
                                    </Table>
                                }}
                            </AutoSizer>
                        </div></CCol>
                </CRow>

                <CRow >
                    <CCol md='8'></CCol>
                    <CCol md='4' style={{ paddingLeft: '14%' }}>
                        <CCard style={{ width: '165px', height: '35px', padding: '3%', textAlign: 'center' }} className={'Role-card-container'} >
                            Showing 1-10 of 100
                        </CCard>
                    </CCol>
                </CRow>
                <CRow>
                    <div class="add">
                        <CCol md='12'><CButton shape={'pill'} className={'btnShadow blueColor float-right'} onClick={Employee}>Next</CButton></CCol>
                    </div>
                </CRow>
                <CRow style={{ paddingLeft: '85%' }} >
                    <div class="adds">
                        <CCol md='12'><CButton shape={'pill'} className={'btn btn-danger'} onClick={''}> Back</CButton></CCol>
                    </div>
                </CRow>
            </CCard>


            </div>}

        </div>

    )
}

export default Reporting
