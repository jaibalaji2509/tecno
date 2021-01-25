import React, { useState } from 'react'
import { AutoSizer, Table, Column, } from 'react-virtualized'
// import "./node_modules/react-virtualized/styles.css";
import {
    CRow,
    CCard,
    CCol,
    CButton,
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
import './Terminate.css'
import { suspendEmployees } from '../../../services/ApiService'


function Suspend() {

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
    const [items, setItems] = useState([{ name: "", quantity: "", unit: "" }]);

    const _noContentRenderer = () => {
        return <div>No Office types.</div>
    }

    const confirmSuspendEmployee = async (index) => {
        var response
        let body = {

        }

        try {
            response = await suspendEmployees(index, JSON.stringify(body))
        } catch (error) {
            return enqueueSnackbar(error.message, { variant: "error" });
        }

    }



    const OkhandleSubmit = (e) => {

        // modalresult=true
        setModalresult(false)

        console.log('ok - ' + modalresult)
    }
    const CancelhandleSubmit = (e) => {
        setModalresult(true)
        // modalresult=false
        console.log('cancel - ' + modalresult)
    }

    return (

        <div>


            {RoleList && <div ><CCard className={'Roles-card-container-3'}>
                <CRow style={{ paddingTop: '2%', paddingLeft: '2%' }}>
                    <CCol md='12' className={'role-heading-3'}>
                        Suspend Employee  </CCol>
                </CRow>
                <CModal
                    show={primary}
                    onClose={() => setPrimary(!primary)}
                // color="primary"
                >
                    <CModalHeader closeButton>
                        <CModalTitle>Suspend Employee </CModalTitle>
                    </CModalHeader>
                    <CModalBody>

                        <h4>Are You Sure want to Suspend ?</h4>


                    </CModalBody>
                    <CModalFooter>
                        <CButton color="success" onClick={() => setPrimary(confirmSuspendEmployee)}>
                            OK
                </CButton>
                        <CButton color="secondary" onClick={() => setPrimary(CancelhandleSubmit)}>
                            Cancel
                </CButton>
                    </CModalFooter>
                </CModal>

                <CRow style={{ padding: '2%' }}>
                    <CCol md='4'>
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
                                                    <CCol md='5'><img className={'icon-role-list'} src={Edit} /></CCol>
                                                    <CCol md='5'><img className={'icon-role-list'} src={Remove} onClick={() => setPrimary(!primary)} /></CCol>
                                                </CRow>
                                            )
                                        } width={100} />
                                    </Table>
                                }}
                            </AutoSizer>
                        </div></CCol>
                </CRow>


                <CRow style={{ padding: '1%' }}>
                    <div class="center-3">
                        <CCol md='12'><CButton shape={'pill'} className={'btnShadow blueColor-btns'} onClick={""}> Next</CButton></CCol>
                    </div>
                </CRow>
                <CRow style={{ padding: '1%' }}>
                    <div class="centerd-3">
                        <CCol md='12'><CButton shape={'pill'} className={'btnShadow whiteColor-btn'} onClick={""}>Back</CButton></CCol>
                    </div>
                </CRow>


            </CCard></div>}

        </div>
    )
}

export default Suspend
