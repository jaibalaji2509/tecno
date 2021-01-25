import React, { useState, useEffect } from 'react'
import { AutoSizer, Table, Column, SortDirection, InfiniteLoader } from 'react-virtualized'
// import "react-virtualized/styles.css";
import { CRow, CCard, CCol, CButton, CForm, CSelect, cRadio, CFormGroup, CLabel, CInput, CFormText } from '@coreui/react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import './EntityList.css'
import { entityList } from '../../../services/ApiService'
function EntityList() {

    const [Roles, setRoles] = useState([{
        SlNO: 1, officeType: ' Head office ',
        // location:'Chennai', 
        Abbreviation: 'Chennai',
        officeName: 'Office Executive Engineer',
        department: 'Administartion',
        designation: 'Executive Engineer',
        role: '-',
        id: ''

    }, {
        SlNO: 1, officeType: ' Head office ',
        // location:'Chennai', 
        Abbreviation: 'Madurai',
        officeName: 'Office Engineer',
        department: 'Administartion',
        designation: 'Chief Engineer',
        role: '1',
        id: ''

    }, {
        SlNO: 1, officeType: ' Head office ',
        // location:'Chennai', 
        Abbreviation: 'Salem',
        officeName: 'Office Engineer',
        department: 'Civil',
        designation: 'Assistant Engineer',
        role: '1',
        id: ''

    },])
    // const {enqueueSnackbar} = useSnackbar()
    const [designation, setDesignation] = useState({})
    const [description, setDescrption] = useState({})
    const [department, setDepartment] = useState({})
    const [id, setId] = useState({})
    const [office, setOffice] = useState({})
    const [location, setLocation] = useState({})
    const [name, setName] = useState({})
    const [Role, setRole] = useState(false)
    const [RoleList, setRoleList] = useState(true)


    const enableCreate = async () => {
        // await setRoleList(false)
        // await setRoleCreate(true)
    }
    const formik = useFormik({
        initialValues: {
            office: '',
            circle: '',
            department: '',
            designation: '',
            role: '',
            description: '',

        },
        validationSchema: yup.object({
            office: yup.string()
                .required("Office Name is Required"),
            // .min(5 , "Minimum 5 charcter" )
            circle: yup.string()
                .required("Circle Name is Required"),
            department: yup.string()
                .required("Department is Required"),
            designation: yup.string()
                .required("Designation Group is Required"),
            role: yup.string()
                .required("Role is Required"),
            description: yup.string()
                .required("Description is Required"),


        }),
        onSubmit: (userInputData) => {
            console.log(userInputData)

        }
    })

    const entityLists = async (index) => {
        var response
        let body = {
            typeofOffice: name,
            Departments: department,
            OfficeLocation: location,
            Designation: designation,
            officeName: office,
            Role: Role,
            Description: description,
            ID: id,
        }
        try {
            response = await entityList(index, JSON.stringify(body))
        } catch (e) {
            console.log(e)
        }
    }

    const fileChangedHandler = (event) => {
        const file = event.target.files[0]
    }
    const uploadHandler = () => { }

    return (

        <div>
            <div style={{ padding: '2%' }}>
                <CCard className={'Roless-card-container'}>
                    <CRow style={{ paddingTop: '1%', paddingLeft: '2%' }}>
                        <CCol md='12' className={'role-heading'}>
                            EntityList</CCol>
                    </CRow>

                    <CForm autoComplete='off' onSubmit={formik.handleSubmit}>
                        <CRow className={'role-form-container '}>
                            <CCol md='12' lg='12' sm='12'>


                                <CRow className={'seperator '}>
                                    <CCol md='3'>
                                        <CLabel className={'form-labels'}>Type of Office</CLabel>

                                    </CCol>
                                    <CCol md='5'>

                                        <CInput type={"text"} name={'office'}
                                            onChange={formik.handleChange} value={formik.values.office}
                                            placeholder='Enter Office Name' />
                                        {formik.errors.office ?
                                            <div className="text-danger"> {formik.errors.office}</div>
                                            : null
                                        }
                                    </CCol>

                                </CRow>

                                <CRow className={'seperator '}>
                                    <CCol md='3'>
                                        <CLabel className={'form-labels'}>Name of the Office Circle </CLabel>

                                    </CCol>
                                    <CCol md='5'>

                                        <CInput type={"text"} name={'circle'}
                                            onChange={formik.handleChange} value={formik.values.circle}
                                            placeholder='Enter Circle Office Name' />
                                        {formik.errors.circle ?
                                            <div className="text-danger"> {formik.errors.circle}</div>
                                            : null
                                        }
                                    </CCol>
                                </CRow>

                                <CRow className={'seperator '}>
                                    <CCol md='3'>
                                        <CLabel className={'form-labels'}>Department </CLabel>

                                    </CCol>
                                    <CCol md='5'>

                                        <CInput type={"text"} name={'department'}
                                            onChange={formik.handleChange} value={formik.values.department}
                                            placeholder='Enter Department ' />
                                        {formik.errors.department ?
                                            <div className="text-danger"> {formik.errors.department}</div>
                                            : null
                                        }
                                    </CCol>
                                </CRow>

                                <CRow className={'seperator '}>
                                    <CCol md='3'>
                                        <CLabel className={'form-labels'}>Designation </CLabel>

                                    </CCol>
                                    <CCol md='5'>

                                        <CInput type={"text"} name={'designation'}
                                            onChange={formik.handleChange} value={formik.values.designation}
                                            placeholder='Enter Designation ' />
                                        {formik.errors.designation ?
                                            <div className="text-danger"> {formik.errors.designation}</div>
                                            : null
                                        }
                                    </CCol>
                                </CRow>

                                <CRow className={'seperator '}>
                                    <CCol md='3'>
                                        <CLabel className={'form-labels'}>Role </CLabel>

                                    </CCol>
                                    <CCol md='5'>

                                        <CInput type={"text"} name={'role'}
                                            onChange={formik.handleChange} value={formik.values.role}
                                            placeholder='Enter Role ' />
                                        {formik.errors.role ?
                                            <div className="text-danger"> {formik.errors.role}</div>
                                            : null
                                        }
                                    </CCol>
                                </CRow>

                                <CRow className={'seperator '}>
                                    <CCol md='3'>
                                        <CLabel className={'form-labels'}>D.C.C Description </CLabel>

                                    </CCol>
                                    <CCol md='5'>

                                        <CInput type={"text"} name={'description'}
                                            onChange={formik.handleChange} value={formik.values.description}
                                            placeholder='Enter Description ' />
                                        {formik.errors.description ?
                                            <div className="text-danger"> {formik.errors.description}</div>
                                            : null
                                        }
                                    </CCol>
                                </CRow>

                                <CCol md='10'></CCol>

                            </CCol>
                        </CRow>



                        <CRow>
                            <div class="center">
                                <CCol md='12'><CButton shape={'pill'} className={'btnShadow blueColor-btn'} onClick={formik.handleSubmit}>Save</CButton></CCol>
                            </div>
                        </CRow>
                        <CRow  >
                            <div class="centerd">
                                <CCol md='12'><CButton shape={'pill'} className={'btnShadow blueColor-btns'} onClick={enableCreate}> Cancel</CButton></CCol>
                            </div>
                        </CRow>
                    </CForm>

                </CCard>
            </div>


        </div>
    )
}

export default EntityList
