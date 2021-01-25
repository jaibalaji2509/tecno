import React, { useState, useContext } from 'react'
import { CRow, CCol, CButton, CForm, CSelect, CLabel, CInput,} from '@coreui/react'
import { AutoSizer, Table, Column, } from 'react-virtualized'
// import Edit from '../../images/image 2.svg'
// import Remove from '../../images/image 15.svg'
// import { useSnackbar } from 'notistack'
// import { useFormik } from 'formik'
// import * as yup from 'yup'
import { Card } from '@material-ui/core'
// import { GlobalContext } from '../../../services/GlobalContext'
import { AuthContext } from '../../../services/auth/AuthContext'
// import "../suspend/node_modules/react-virtualized/styles.css";
import './AddPosting.css'
// const { elements } = this.props;
// const { filterStr } = this.state;


const AddPosting = (props) => {
    const [OfficeDetails, setTrasnferEmployee] = useState([
        { name: 'Construction', location: 'Chennai', office: 'Head Office',division: 'Head Office', 
        department: 'Civil', desigination: 'Engineer', Role: 'Building', employee: 'Nandha', id: 'gwee' },
        { name: 'Construction', location: 'Chennai', office: 'Head Office',division: 'Head Office', 
        department: 'Civil', desigination: 'Engineer', Role: 'Building', employee: 'Mani', id: 'gwee' },

    ])

    // const {enqueueSnackbar} = useSnackbar()
    const [Selected, setSelected] = useState({})
    const [RoleCreate, setRoleCreate] = useState(false)
    const [RoleList, setRoleList] = useState(true)
    const [name, setName] = useState('')
    const [nameError, setNameError] = useState('')
    const [type, setType] = useState('')
    const [typeError, setTypeError] = useState('')
    const [location, setlocation] = useState('')
    const [locationError, setlocationError] = useState('')
    const [circle, setcircle] = useState('')
    const [circleError, setcircleError] = useState('')
    const [division, setdivision] = useState('')
    const [divisionError, setdivisionError] = useState('')
    const [department, setdepartment] = useState('')
    const [departmentError, setdepartmentError] = useState('')
    const [dist, setdist] = useState('')
    const [distError, setdistError] = useState('')
    const [role, setrole] = useState('')
    const [roleError, setroleError] = useState('')
    const [pincode, setpin] = useState('')
    const [pinError, setpinError] = useState('')
    const [formError, setFormError] = useState('')

    // const global = useContext(GlobalContext)
    const auth = useContext(AuthContext)

    const changeHandler = async (e) => {
        await setSelected({ ...Selected, [e.target.name]: e.target.value })
    }
    const _noContentRenderer = () => {
        return <div>No Office types.</div>
    }

    const onChangeName = (event) => {
        const name = event.target.value
        // console.log(name)
        if (name === '' || name.length < 2) {
            setNameError('Please enter at least 3 characters')
        } else {
            setName(name)
            setNameError(null)
        }
    }

    const onChangetype = (event) => {
        const type = event.target.value
        console.log(type)
        if (type === '' || type.length < 2) {
            setTypeError('Please enter at least 3 characters')
        } else {
            setType(type)
            setTypeError(null)
        }
    }

    const onChangelocation = (event) => {
        const location = event.target.value
        console.log(location)
        if (location === '' || location.length < 1) {
            setlocationError('Please enter at least 3 characters')
        } else {
            setlocation(location)
            setlocationError(null)
        }
    }

    const onChangecircle = (event) => {
        const circle = event.target.value
        console.log(circle)
        if (circle === '' || circle.length < 1) {
            setcircleError('Please enter at least 3 characters')
        } else {
            setcircle(circle)
            setcircleError(null)
        }
    }

    const onChangedivision = (event) => {
        const division = event.target.value
        console.log(division)
        if (division === '' || division.length < 1) {
            setdivisionError('Please enter at least 3 characters')
        } else {
            setdivision(division)
            setdivisionError(null)
        }
    }

    const onChangedepartment = (event) => {
        const department = event.target.value
        console.log(department)
        if (department === '' || department.length < 1) {
            setdepartmentError('Please enter at least 3 characters')
        } else {
            setdepartment(department)
            setdepartmentError(null)
        }
    }

    const onChangeDist = (event) => {
        const dist = event.target.value
        console.log(dist)
        if (dist === '' || dist.length < 1) {
            setdistError('Please enter at least 3 characters')
        } else {
            setdist(dist)
            setdistError(null)
        }
    }

    const onChangerole = (event) => {
        const role = event.target.value
        console.log(role)
        if (role === '' || role.length < 1) {
            setroleError('Please enter at least 3 characters')
        } else {
            setrole(role)
            setroleError(null)
        }
    }

    const MIN_TABLE_WIDTH = 1400;


    const onSubmit = async (event) => {
        console.log('Clicked')
        event.preventDefault()

        var response
        try {
            response = await auth.addPosting(name, type, location, circle, division, department, dist, role)
        } catch (e) {
            return setFormError(e.message)
        }

        if (response.success) {

            console.log('please enter all field')

        } else {
            setFormError('Error. Please try again later')
        }
    }

    return (

        <div>

            <Card className={'Role-card-container-1'}>
                <CRow style={{ padding: '10px', paddingLeft: '20px', paddingRight: '20px' }}>
                    <CCol md='12' className={'role-heading-1'}>
                        Posting </CCol>
                </CRow>


                <CForm autoComplete="off" onSubmit={(e) => onSubmit(e)}>
                    <CRow className={'role-form-container-1'}>
                        <CCol md='12' lg='12' sm='12'>

                            <CRow className={'seperator-1'}>

                                <CCol md='5'>
                                    <CLabel className={'form-labels-1'}>Employee Name </CLabel>
                                    <CInput valid={nameError !== '' && !nameError} invalid={!!nameError}
                                        onChange={evt => onChangeName(evt)}
                                        placeholder='Enter office name' />

                                </CCol>

                                <CCol md='5'>
                                    <CLabel className={'form-labels-1'}>Office Type </CLabel>
                                    <CSelect valid={typeError !== '' && !typeError} invalid={!!typeError}
                                        onChange={evt => onChangetype(evt)}>
                                        <option value=''> Select Office Type</option>
                                        <option value='Software Company'>Software Company</option>
                                        <option value='Coprate Company'>Coprate Company</option>

                                    </CSelect>
                                </CCol>
                            </CRow>

                            <CRow className={'seperator-1'}>


                                <CCol md='5'>
                                    <CLabel className={'form-labels-1'}>Location </CLabel>
                                    <CSelect valid={locationError !== '' && !locationError} invalid={!!locationError}
                                        onChange={evt => onChangelocation(evt)}>
                                        <option value=''> Select Location</option>
                                        <option value='chennai'>chennai</option>
                                        <option value='chengalpet'>chengalpet</option>

                                    </CSelect>
                                </CCol>

                                <CCol md='5'>
                                    <CLabel className={'form-labels-1'}>Name of Circle Office </CLabel>
                                    <CSelect valid={circleError !== '' && !circleError} invalid={!!circleError}
                                        onChange={evt => onChangecircle(evt)}>
                                        <option value=''> Select Circle Office</option>
                                        <option value='Software Company'>Software Company</option>
                                        <option value='Coprate Company'>Coprate Company</option>

                                    </CSelect>
                                </CCol>
                            </CRow>

                            <CRow className={'seperator-1'}>

                                <CCol md='5'>
                                    <CLabel className={'form-labels-1'}>Name of Division Office </CLabel>
                                    <CSelect valid={divisionError !== '' && !divisionError} invalid={!!divisionError}
                                        onChange={evt => onChangedivision(evt)}>
                                        <option value=''> Select Division Office</option>
                                        <option value='Head Office'>India</option>
                                        <option value='Private Office'>India</option>

                                    </CSelect>

                                </CCol>


                                <CCol md='5'>
                                    <CLabel className={'form-labels-1'}>Department </CLabel>
                                    <CSelect valid={departmentError !== '' && !departmentError} invalid={!!departmentError}
                                        onChange={evt => onChangedepartment(evt)}>
                                        <option value=''> Select Department</option>
                                        <option value='Design'>Tamil Nadu</option>
                                        <option value='Development'>Punjab</option>
                                        <option value='Testing'>Gujarat</option>
                                    </CSelect>

                                </CCol>

                            </CRow>

                            <CRow className={'seperator-1'}>

                                <CCol md='5'>
                                    <CLabel className={'form-labels-1'}>Designation </CLabel>
                                    <CSelect valid={distError !== '' && !distError} invalid={!!distError}
                                        onChange={evt => onChangeDist(evt)} >
                                        <option value=''> Select Designation</option>
                                        <option value='CEO'>Chennai</option>
                                        <option value='Manager'>Chengalpet</option>
                                        <option value='Head of team'>Trichy</option>
                                    </CSelect>

                                </CCol>

                                <CCol md='5'>
                                    <CLabel className={'form-labels-1'}>Role </CLabel>
                                    <CSelect valid={roleError !== '' && !roleError} invalid={!!roleError}
                                        onChange={evt => onChangerole(evt)}  >
                                        <option value=''> Select Role</option>
                                        <option value='Developer'>Anna Nagar</option>
                                        <option value='Designer'>Anna salai</option>
                                        <option value='Amman Kovil'>Amman Kovil</option>
                                    </CSelect>
                                </CCol>
                            </CRow>

                            <CCol md='10'>
                                <div class="center-1">
                                    <CCol md='12'><CButton shape={'pill'} className={'btnShadow '}> Back</CButton></CCol>
                                </div>

                                <div class="centerd-1">
                                    <CCol md='12'><CButton type="submit" color={'primary'} shape={'pill'} className={'btnShadow blueColor'} >+ Next</CButton></CCol>
                                </div>
                            </CCol>
                        </CCol>
                    </CRow>
                </CForm>            
            </Card>



            <Card className={'Role-card-container-1'}>
            <CRow style={{ paddingTop: '2%', paddingLeft: '2%' }}>
                    <CCol md='12' className={'role-heading-1'}>
                        Detail for Administative Reporting</CCol>
                </CRow>
                
                <CRow style={{ padding: '2%' }}>
                    <CCol>
                        <div style={{ height: '200px', overflow: 'scroll' }}>
                            <AutoSizer>
                                {({ width, height }) => {
                                    return <Table

                                        headerStyle={{ textTransform: 'capitalize' }}
                                        rowStyle={{ borderBottom: '1px solid lightgrey' }}
                                        // width={width}
                                        width={width < MIN_TABLE_WIDTH ? MIN_TABLE_WIDTH : width}
                                        height={height}
                                        headerHeight={50}
                                        rowHeight={50}
                                        rowCount={OfficeDetails.length}
                                        //    sort={_sort}
                                        //    sortBy={sortBy}
                                        overscanColumnCount={1}
                                        overscanRowCount={1}
                                        noContentRenderer={_noContentRenderer}
                                        //    sortDirection={sortDirection}
                                        rowGetter={({ index }) => OfficeDetails[index]}
                                    >
                                        <Column dataKey={'name'} label={'Office Type'} width={width} />
                                        <Column dataKey={'location'} label={'Location'} width={width} />
                                        <Column dataKey={'office'} label={'Name of Circle Office'} width={width} />
                                        <Column dataKey={'division'} label={'Name of Division Office'} width={width} />
                                        <Column dataKey={'department'} label={'Department'} width={width} />
                                        <Column dataKey={'desigination'} label={'Designation'} width={width} />
                                        <Column dataKey={'Role'} label={'Role'} width={width} />
                                        <Column dataKey={'employee'} label={'Name of the Employee'} width={width} />
                                      
                                    </Table>
                                }}
                            </AutoSizer>
                        </div></CCol>
                </CRow>

                <CRow style={{ paddingTop: '2%', paddingLeft: '2%' }}>
                    <CCol md='12' className={'role-heading-1'}>
                        Detail for Functional Reporting</CCol>
                </CRow>
                
                <CRow style={{ padding: '2%' }}>
                    <CCol>
                        <div style={{ height: '200px', overflow: 'scroll' }}>
                            <AutoSizer>
                                {({ width, height }) => {
                                    return <Table

                                        headerStyle={{ textTransform: 'capitalize' }}
                                        rowStyle={{ borderBottom: '1px solid lightgrey' }}
                                        // width={width}
                                        width={width < MIN_TABLE_WIDTH ? MIN_TABLE_WIDTH : width}
                                        height={height}
                                        headerHeight={50}
                                        rowHeight={50}
                                        rowCount={OfficeDetails.length}
                                        //    sort={_sort}
                                        //    sortBy={sortBy}
                                        overscanColumnCount={1}
                                        overscanRowCount={1}
                                        noContentRenderer={_noContentRenderer}
                                        //    sortDirection={sortDirection}
                                        rowGetter={({ index }) => OfficeDetails[index]}
                                    >
                                        <Column dataKey={'name'} label={'Office Type'} width={width} />
                                        <Column dataKey={'location'} label={'Location'} width={width} />
                                        <Column dataKey={'office'} label={'Name of Circle Office'} width={width} />
                                        <Column dataKey={'division'} label={'Name of Division Office'} width={width} />
                                        <Column dataKey={'department'} label={'Department'} width={width} />
                                        <Column dataKey={'desigination'} label={'Designation'} width={width} />
                                        <Column dataKey={'Role'} label={'Role'} width={width} />
                                        <Column dataKey={'employee'} label={'Name of the Employee'} width={width} />
                                      
                                    </Table>
                                }}
                            </AutoSizer>
                        </div></CCol>
                </CRow>

                </Card>

        </div>
    )
}

export default AddPosting
