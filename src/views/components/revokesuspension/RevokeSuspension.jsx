import React, { useState } from 'react'
import { AutoSizer, Table, Column,} from 'react-virtualized'
// import "../suspend/node_modules/react-virtualized/styles.css";
import {
    CRow, CCard,
    CCol, CButton,
     CModal,
    CModalBody,
    CModalFooter,
    CModalHeader,
    CModalTitle,
    
} from '@coreui/react'
// import { Card } from '@material-ui/core'
import Edit from '../../images/image 2.svg'
import Remove from '../../images/image 15.svg'
import { useSnackbar } from "notistack";
import './RevokeSuspension.css'
import { revokeSuspension } from '../../../services/ApiService'
function RevokeSuspension() {

    const [Roles, setRoles] = useState([{
        SlNO: 1, relation: 'Mother',
        // location:'Chennai', 
        name: 'Ramya',
        age: '52',

    }, {
        SlNO: 1, relation: 'Father',

        name: 'Karthick',
        age: '50',

    }, {
        SlNO: 1,
        relation: 'Brother',
        name: 'Vinoth',
        age: '25',

    },])
    // const {enqueueSnackbar} = useSnackbar()
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const [primary, setPrimary] = useState("")
    const [RoleList, setRoleList] = useState(true)
    const [modalresult, setModalresult] = useState(false)

    const _noContentRenderer = () => {
        return <div>No Office type.</div>
    }


    const confirmRevokeSuspension = async (index) => {
        let body = {}
        try {
            const response = await revokeSuspension(index, JSON.stringify(body))
        } catch (error) {
            return enqueueSnackbar(error.message, { variant: "error" });
        }
    }

    const CancelhandleSubmit = (e) => {
        setModalresult(true)
        // modalresult=false
        console.log('cancel - ' + modalresult)
    }

    return (

        <div>


            {RoleList && <div ><CCard className={'Roles-card-container'}>
                <CRow style={{ paddingTop: '2%', paddingLeft: '2%' }}>
                    <CCol md='12' className={'role-heading'}>
                        Revoke Suspension  </CCol>
                </CRow>
                <CModal
                    show={primary}
                    onClose={() => setPrimary(!primary)}
                // color="primary"
                >
                    <CModalHeader closeButton>
                        <CModalTitle>Revoke Suspension ?</CModalTitle>
                    </CModalHeader>
                    <CModalBody>

                        <h4>Are You Sure want to Revoke ?</h4>


                    </CModalBody>
                    <CModalFooter>
                        <CButton color="success" onClick={() => setPrimary(confirmRevokeSuspension)}>
                            OK
                </CButton>{' '}
                        <CButton color="secondary" onClick={() => setPrimary(CancelhandleSubmit)}>
                            Cancel
                </CButton>
                    </CModalFooter>
                </CModal>

                <CRow style={{ padding: '2%' }}>
                    <CCol md='4'>
                        {/* <CLabel className={'form-labels'}>Employee Name</CLabel>
                    <CInput type = {"text"} name={'description'} 
                    placeholder='' /> */}

                    </CCol>


                </CRow>

                <CRow style={{ padding: '2%' }}>
                    <CCol md='12'>
                        <div style={{ width: '100%', height: '200px' }}>
                            <AutoSizer>
                                {({ width, height }) => {
                                    return <Table
                                        rowClassName='table-row'
                                        headerStyle={{ textTransform: 'capitalize' }}
                                        rowStyle={{ borderBottom: '1px solid lightgrey' }}
                                        width={width}
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

                                        <Column dataKey={'relation'} label={'Relation Type'} width={300} />
                                        <Column dataKey={'name'} label={'Person Name'} width={300} />
                                        <Column dataKey={'age'} label={'Age'} width={300} />
                                        <Column dataKey={'id'} label={'Actions'} cellRenderer={
                                            (row) => (
                                                <CRow>
                                                    <CCol md='5'><img alt="" className={'icon-role-list'} src={Edit} /></CCol>
                                                    <CCol md='5'><img alt="" className={'icon-role-list'} src={Remove} onClick={() => setPrimary(!primary)} /></CCol>
                                                </CRow>
                                            )
                                        } width={100} />
                                    </Table>
                                }}
                            </AutoSizer>
                        </div></CCol>
                </CRow>
                {/* <CRow  style={{padding:'2%'}}>
                    <CCol md='5'>
                        <CRow>
                           
                            <CCol md='5'>
                            <CSelect name={'relation'} onChange={formik.handleChange}>
                            <option style={{fontSize:'11px'}}value = {formik.values.relation} disabled selected>Select Relation</option>
                            <option name='department' value='Mother'>Mother</option>
                             <option name='department' value='Father'>Father</option>
                            </CSelect>
                            {formik.errors.relation ?
                    <div className="text-danger"> {formik.errors.relation}</div>
                     :null
                    }
                            </CCol>
                            <CCol md='7'>
                                 <CRow  style={{paddingLeft:'62%'}}>
                            <CInput className={'box'}  type = {"text"} name={'name'} 
                    onChange={formik.handleChange} value = {formik.values.name}
                    placeholder='Enter Name' />
                    {formik.errors.name ?
                    <div className="text-danger"> {formik.errors.name}</div>
                     :null
                    }
                            </CRow>
                            </CCol>
                        </CRow>
                        
                    </CCol>
                    
                    <CCol  md='5'>
                    <CRow  style={{paddingLeft:'40%'}}>
                            <CCol md='6'>
                                <CInput className={'box'}  type = {"text"} name={'age'} 
                    onChange={formik.handleChange} value = {formik.values.age}
                    placeholder='Enter Age' />
                    {formik.errors.age ?
                    <div className="text-danger"> {formik.errors.age}</div>
                     :null
                    }
                            </CCol>
                        </CRow>
                    </CCol>
                    
                    <CRow  style={{paddingLeft:'5%'}}>
                     <div>
                    <CCol md='16'><CButton  shape={'pill'}  className={'btnShadow blueColor-btns'} onClick={formik.handleSubmit}>+ Add Relation</CButton></CCol>
                </div> 
                </CRow>
                </CRow> */}

                <CRow style={{ padding: '1%' }}>
                    <div class="center">
                        <CCol md='12'><CButton shape={'pill'} className={'btnShadow blueColor-btns'} onClick={""}> Next</CButton></CCol>
                    </div>
                </CRow>
                <CRow style={{ padding: '1%' }}>
                    <div class="centerd">
                        <CCol md='12'><CButton shape={'pill'} className={'btnShadow whiteColor-btn'} onClick={""}>Back</CButton></CCol>
                    </div>
                </CRow>


                {/* <CRow >
                    <CCol md='8'></CCol>
                    <CCol md='4' style={{paddingLeft:'14%'}}>
                        <CCard style={{width:'165px',height:'35px',padding: '3%',textAlign: 'center'}} className={'Role-card-container'} >
                          Showing 1-10 of 100
                        </CCard>
                    </CCol>
                </CRow> */}
            </CCard></div>}
            {/* )} */}
            {/* </AutoSizer>
                          
                          </div> */}
            {/* )} */}
            {/* </InfiniteLoader> */}
        </div>
    )
}

export default RevokeSuspension
