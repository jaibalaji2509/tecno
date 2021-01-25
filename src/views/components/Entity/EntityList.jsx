
import React, { useState } from 'react'
// import { AutoSizer, Table, Column, SortDirection, InfiniteLoader } from 'react-virtualized'
import Refresh from '../../images/image 7.png'
// import "../suspend/node_modules/react-virtualized/styles.css";
import { CRow, CCard, CCol, CButton, CForm, CLabel, CInput } from '@coreui/react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import './Entity.css'
// import { entityList } from '../../../services/ApiService'
function EntityList() {


    // const {enqueueSnackbar} = useSnackbar()
    const [designation, setDesignation] = useState({})
    const [description, setDescrption] = useState({})
    const [department, setDepartment] = useState({})
    const [id, setId] = useState({})
    const [office, setOffice] = useState({})
    const [location, setLocation] = useState({})
    const [name, setName] = useState({})
    const [Role, setRole] = useState(false)
    // const [RoleList, setRoleList] = useState(true)

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

    const entityList = async (index) => {
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

    return (

        <div>
            <div style={{ padding: '2%' }}>
                <CCard className={'Roless-card-container-7'}>
                    <CRow style={{ paddingTop: '1%', paddingLeft: '2%' }}>
                        <CCol md='12' className={'role-heading-7'}>
                            EntityList</CCol>
                    </CRow>

                    <CForm autoComplete='off' onSubmit={formik.handleSubmit}>
                        <CRow className={'role-form-container-7'}>
                            <CCol md='12' lg='12' sm='12'>


                                <CRow className={'seperator-7'}>
                                    <CCol md='3'>
                                        <CLabel className={'form-labels-7'}>Type of Office</CLabel>

                                    </CCol>
                                    <CCol md='5'>

                                        <CInput type={"text"} name={'office'}
                                            onChange={formik.handleChange} value={formik.values.office}
                                            placeholder='Default' />
                                        {formik.errors.office ?
                                            <div className="text-danger"> {formik.errors.office}</div>
                                            : null
                                        }
                                    </CCol>

                                    <CCol md='3'>
                                        {/* <div className ="centerd-7">
                                            <CCol ><img className={'icon-refresh'} src={Refresh} /></CCol>
                                        </div> */}
                                        <CCol >
                                            <CCol><CButton type="submit" color={'primary'} shape={'pill'} className={'btn-container-role-7'} > Save</CButton></CCol>
                                        </CCol>
                                    </CCol>

                                </CRow>

                                <CRow className={'seperator-7'}>
                                    <CCol md='3'>
                                        <CLabel className={'form-labels-7'}>Name of the Office  </CLabel>

                                    </CCol>
                                    <CCol md='5'>

                                        <CInput type={"text"} name={'circle'}
                                            onChange={formik.handleChange} value={formik.values.circle}
                                            placeholder='Default' />
                                        {formik.errors.circle ?
                                            <div className="text-danger"> {formik.errors.circle}</div>
                                            : null
                                        }
                                    </CCol>
                                    <CCol md='3'>
                                        {/* <div className="centerd-7">
                                            <CCol ><img className={'icon-refresh'} src={Refresh} /></CCol>
                                        </div> */}
                                        <CCol >
                                            <CCol><CButton type="submit" color={'primary'} shape={'pill'} className={'btn-container-role-7'} > Save</CButton></CCol>
                                        </CCol>
                                    </CCol>
                                </CRow>

                                <CRow className={'seperator-7'}>
                                    <CCol md='3'>
                                        <CLabel className={'form-labels-7'}>Department </CLabel>

                                    </CCol>
                                    <CCol md='5'>

                                        <CInput type={"text"} name={'department'}
                                            onChange={formik.handleChange} value={formik.values.department}
                                            placeholder='Default' />
                                        {formik.errors.department ?
                                            <div className="text-danger"> {formik.errors.department}</div>
                                            : null
                                        }
                                    </CCol>
                                    <CCol md='3'>
                                        {/* <div className="centerd-7">
                                            <CCol ><img className={'icon-refresh'} src={Refresh} /></CCol>
                                        </div> */}
                                        <CCol >
                                            <CCol><CButton type="submit" color={'primary'} shape={'pill'} className={'btn-container-role-7'} > Save</CButton></CCol>
                                        </CCol>
                                    </CCol>

                                </CRow>

                                <CRow className={'seperator-7'}>
                                    <CCol md='3'>
                                        <CLabel className={'form-labels-7'}>Designation </CLabel>

                                    </CCol>
                                    <CCol md='5'>

                                        <CInput type={"text"} name={'designation'}
                                            onChange={formik.handleChange} value={formik.values.designation}
                                            placeholder='Default ' />
                                        {formik.errors.designation ?
                                            <div className="text-danger"> {formik.errors.designation}</div>
                                            : null
                                        }
                                    </CCol>
                                    <CCol md='3'>
                                        {/* <div className="centerd-7">
                                            <CCol ><img className={'icon-refresh'} src={Refresh} /></CCol>
                                        </div> */}
                                        <CCol >
                                            <CCol><CButton type="submit" color={'primary'} shape={'pill'} className={'btn-container-role-7'} > Save</CButton></CCol>
                                        </CCol>
                                    </CCol>
                                </CRow>

                                <CRow className={'seperator-7'}>
                                    <CCol md='3'>
                                        <CLabel className={'form-labels-7'}>Role </CLabel>

                                    </CCol>
                                    <CCol md='5'>

                                        <CInput type={"text"} name={'role'}
                                            onChange={formik.handleChange} value={formik.values.role}
                                            placeholder='Default ' />
                                        {formik.errors.role ?
                                            <div className="text-danger"> {formik.errors.role}</div>
                                            : null
                                        }
                                    </CCol>
                                    <CCol md='3'>
                                        {/* <div className="centerd-7">
                                            <CCol ><img className={'icon-refresh'} src={Refresh} /></CCol>
                                        </div> */}
                                        <CCol >
                                            <CCol><CButton type="submit" color={'primary'} shape={'pill'} className={'btn-container-role-7'} > Save</CButton></CCol>
                                        </CCol>
                                    </CCol>
                                </CRow>

                                {/* <CRow className={'seperator-7'}>
                                    <CCol md='3'>
                                        <CLabel className={'form-labels-7'}>D.C.C Description </CLabel>

                                    </CCol>
                                    <CCol md='5'>

                                        <CInput type={"text"} name={'description'}
                                            onChange={formik.handleChange} value={formik.values.description}
                                            placeholder='Default ' />
                                        {formik.errors.description ?
                                            <div className="text-danger"> {formik.errors.description}</div>
                                            : null
                                        }
                                    </CCol>
                                    <CCol md='3'>
                                        <div className="centerd-7">
                                            <CCol ><img className={'icon-refresh'} src={Refresh} /></CCol>
                                        </div>
                                        <CCol >
                                            <CCol><CButton type="submit" color={'primary'} shape={'pill'} className={'btn-container-role-7'} > Save</CButton></CCol>
                                        </CCol>
                                    </CCol>
                                </CRow> */}

                                <CCol md='10'></CCol>

                            </CCol>
                        </CRow>
                    </CForm>

                </CCard>
            </div>
        </div>
    )
}

export default EntityList

