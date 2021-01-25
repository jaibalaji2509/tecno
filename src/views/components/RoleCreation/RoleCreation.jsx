
    import React,{useState} from 'react'
    import {CRow, CCol, CButton, CForm, CSelect, CLabel, CInput,CCard}  from '@coreui/react'
    import { AutoSizer, Table, Column, } from 'react-virtualized'
    import Edit from '../../images/image 2.svg'
    import Remove from '../../images/image 15.svg'
    import { useSnackbar } from 'notistack'
    import { Card } from '@material-ui/core'
    import './role.css'
    function RoleCreation() {
        const {enqueueSnackbar} = useSnackbar()
        const [Selected, setSelected] = useState({})
        const [RoleCreate, setRoleCreate] = useState(false)
        const [RoleList, setRoleList] = useState(true)
        const [Roles, setRoles] = useState([{officeType:'fwf', Abbreviation:'sdfsd', officeName:'sasf', department:'dfdf', designation:'fdfsd', role:'asasd', id:'lh' }])

        // error States
        const [OT, setOT] = useState(false)
        const [Loc, setLoc] = useState(false)
        const [ON, setON] = useState(false)
        const [Dept, setDept] = useState(false)
        const [Design, setDesign] = useState(false)
        const [Role, setRole] = useState(false)
        const changeHandler = async (e) =>{
            await setSelected({...Selected, [e.target.name]:e.target.value})
        }
        const _noContentRenderer = () => {
            return <div>No Office types.</div>
        }
        const submitHandler = async()=>{
            if(Selected.officeType === undefined || Selected.officeType === ''){
                await setOT(true)
            }
            if(Selected.location === undefined || Selected.location ===''){
                await setLoc(true)
            }
            if(Selected.officeName === undefined || Selected.officeName ===''){
                await setON(true)
            }
            if(Selected.department === undefined || Selected.department === ''){
                await setDept(true)
            }
            if(Selected.designation === undefined || Selected.designation ===''){
                await setDesign(true)
            }
            if(Selected.role === undefined || Selected.role === ''){
                await setRole(true)
            }
        else{

            await Roles.push(Selected)
            await setRoles([...Roles])
        }
        }
        const enableCreate =async ()=>{
            await setRoleList(false)
            await setRoleCreate(true)
        }
        return (
            <div>
            {RoleCreate && <div style={{padding:'3%'}}>
                <Card className={'Role-card-container'}>
                <CRow style={{padding:'2%'}}>
                    <CCol md='12' className={'role-heading'}>
                Create Role </CCol>
                    </CRow>
                    <CForm>
                <CRow className={'role-form-container '}>
                <CCol md='12'lg='12' sm='12'>
                        <CRow className={'seperator'}>
                        <CCol md='6' lg='6' sm='6'>
                            <CLabel className={'form-labels'}>Type of Office</CLabel>
                        </CCol>
                        <CCol md='6' lg='6' sm='6'>
                            <CSelect className={OT===true?'custom-select is-invalid stretching':'stretching'} name={'officeType'} onchange={changeHandler}>
                            <option value="" disabled selected>Select Office type</option>
                                </CSelect>
                                {OT && <p className={'errorRes'}>Please Select Office Type</p>}
                        </CCol>
                        </CRow>
                    
                        <CRow className={'seperator'}>
                        <CCol md='6' lg='6' sm='6'>
                            <CLabel className={'form-labels'}>Ofice Location</CLabel>
                        </CCol>
                        <CCol md='6' lg='6' sm='6'>
                            <CSelect name={'location'} className={Loc === true?'custom-select is-invalid stretching':'stretching'} >
                            <option value="" disabled selected>Select Location</option>
                                </CSelect>
                                {Loc && <p className={'errorRes'}>Please Select Location</p>}
                        </CCol>
                        </CRow>
                    
                        <CRow className={'seperator'}>
                        <CCol md='6' lg='6' sm='6'>
                            <CLabel className={'form-labels'}>Name Of the Office</CLabel>
                        </CCol>
                        <CCol md='6' lg='6' sm='6'>
                            <CSelect name={'officeName'} className={ON === true?'custom-select is-invalid stretching':'stretching'} >
                            <option value="" disabled selected>Select the Office name</option>
                                </CSelect> 
                                {ON && <p className={'errorRes'}>Please Select Office Name</p>}
                        </CCol>
                        </CRow>

                        <CRow className={'seperator'}> 
                        <CCol md='6' lg='6' sm='6'>
                            <CLabel className={'form-labels'}>Department</CLabel>
                        </CCol>
                        <CCol md='6' lg='6' sm='6'>
                            <CSelect name={'department'} className={Dept === true ?'custom-select is-invalid stretching':'stretching'} >
                            <option value="" disabled selected>Select the Department</option>
                                </CSelect>
                                {Dept && <p className={'errorRes'}>Please Select Department</p>}
                        </CCol>
                        </CRow>

                        <CRow className={'seperator'}>
                        <CCol md='6' lg='6' sm='6'>
                            <CLabel className={'form-labels'}>Designation</CLabel>
                        </CCol>
                        <CCol md='6' lg='6' sm='6'>
                            <CSelect name={'designation'} className={Design === true?'custom-select is-invalid stretching':'stretching'} >
                            <option value="" disabled selected>Select Designation</option>
                                </CSelect> 
                                {Design && <p className={'errorRes'}>Please Select Designation</p> }
                        </CCol>
                        </CRow>

                        <CRow className={'seperator'}>
                        <CCol md='6' lg='6' sm='6'>
                            <CLabel className={'form-labels'}>Role</CLabel>
                        </CCol>
                        <CCol md='6' lg='6' sm='6'>
                            <CSelect name={'role'} className={Role===true?'custom-select is-invalid stretching':'stretching'} >
                            <option value="" disabled selected>Select</option>
                                </CSelect>
                                {Role && <p className={'errorRes'}>Please Select Role</p>}
                        </CCol>
                        </CRow>

                        <CRow className={'seperator'}>
                        <CCol md='6' lg='6' sm='6'>
                            <CLabel name={'description'} className={'form-labels'}>Description</CLabel>
                        </CCol>
                        <CCol md='6' lg='6' sm='6'>
                            <textarea class="form-control" rows="3" placeholder={'optional'} />
                            

                        </CCol>
                        </CRow>
                        <CRow className={'seperator btn-container-role'}>
                        <CCol md='6' lg='6' sm='6'>
                        <CButton className={'cancel-btn'}>Cancel</CButton>
                        </CCol>
                        <CCol md='6' lg='6' sm='6'>
                        <CButton className={'blueColor-btn'} onClick={submitHandler}>Create</CButton>
                            

                        </CCol>
                        </CRow>
                        </CCol>
                
                </CRow>  </CForm>
                </Card> </div>}
                {RoleList && <div ><CCard className={'Roles-card-container'}>
                <CRow style={{paddingTop:'2%',paddingLeft:'2%'}}>
                    <CCol md='12' className={'role-heading'}>
                    Roles </CCol>
                    </CRow>
                    <CRow  style={{padding:'2%'}}>
                        <CCol md='5'>
                            <CRow>
                                <CCol md='3'>
                                    <CInput className={'box'} placeholder={'Filter Type'} />
                                </CCol>
                                <CCol md='4'>
                                <CSelect >
                                <option style={{fontSize:'11px'}} value="" disabled selected>Filter Location</option>
                                </CSelect>
                                </CCol>
                                <CCol md='5'>
                                <CInput className={'box'} placeholder={'Filter Office name'} />
                                </CCol>
                            </CRow>
                        </CCol>
                        <CCol  md='5'>
                        <CRow >
                                <CCol md='4'>
                                    <CInput className={'box'} placeholder={'Department'} />
                                </CCol>
                                <CCol md='4'>
                                <CSelect className={'boxSelect'} >
                                <option    value="" disabled selected>Designation</option>
                                </CSelect>
                                </CCol>
                                <CCol md='3'>
                                <CInput className={'box'} placeholder={'Role'} />
                                </CCol>
                            </CRow>
                        </CCol>
                    </CRow>
                 
                </CCard></div>}
            </div>
        )
    }

    export default RoleCreation
