import React,{useState} from 'react'
import { AutoSizer, Table, Column, } from 'react-virtualized'
// import "../suspend/node_modules/react-virtualized/styles.css";
import {CRow,CCard, CCol, CButton, CForm, CSelect, CLabel, CInput}  from '@coreui/react'
import { Card } from '@material-ui/core'
// import Edit from '../../images/image 2.svg'
import Remove from '../../images/image 15.svg'
import './FunctionalReporting.css'
function FunctionalReporting() {
   
    const [Roles, setRoles] = useState( [{SlNO:1, officeType:' Head office ', 
    // location:'Chennai', 
    Abbreviation:'Chennai', 
    officeName:'Office Executive Engineer',
    department:'Administartion',
    designation:'Executive Engineer',
    role:'-',
    id: ''

    },{SlNO:1, officeType:' Head office ', 
    // location:'Chennai', 
    Abbreviation:'Madurai', 
    officeName:'Office Engineer',
    department:'Administartion',
    designation:'Chief Engineer',
    role:'1',
    id: ''

    },{SlNO:1, officeType:' Head office ', 
    // location:'Chennai', 
    Abbreviation:'Salem', 
    officeName:'Office Engineer',
    department:'Civil',
    designation:'Assistant Engineer',
    role:'1',
    id: ''

    },] )    
    // const {enqueueSnackbar} = useSnackbar()
    const [Selected, setSelected] = useState({})
    const [RoleCreate, setRoleCreate] = useState(false)
    const [RoleList, setRoleList] = useState(true)  
    // const [Roles, setRoles] = useState([{officeType:'fwf', Abbreviation:'sdfsd', officeName:'sasf', department:'dfdf', designation:'fdfsd', role:'asasd', id:'lh' }])                                                 
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
            <CRow style={{padding:'1%'}}>
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
              Functional Reporting</CCol>
                </CRow>
              
                 
                <CRow  style={{paddingTop:'2%',padding:'2%'}}>
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

                <CRow style={{padding:'2%'}}>
                <CCol md='12'>
                    <div style={{width:'100%' , height:'200px'}}>
                        <AutoSizer>
                            {({width, height})=>{
                                return <Table 
                               
                                headerStyle={{textTransform:'capitalize'}}
                                rowStyle={{borderBottom:'1px solid lightgrey'}}
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
                                    
                                    <Column dataKey={'officeType'} label={'OfficeType'}  width={110} />
                                    <Column dataKey={'Abbreviation'} label={'Location'}  width={150} />
                                    <Column dataKey={'officeName'} label={'Name of the Office'} width={210} />
                                    <Column dataKey={'department'} label={'Department'} width={160} />
                                    <Column dataKey={'designation'} label={'Designation'} width={170} />
                                    <Column dataKey={'role'} label={'Role'} width={200} />
                                    <Column dataKey={'id'} label={'Actions'}   cellRenderer={
                                        (row) =>(
                                            <CRow>
                                                 <div class="centers">
                                                 {/* <CCol md='5'><img className={'icon-role-list'} src={Edit}/></CCol> */}
                                                <CCol  md='12'><img alt="" src={Remove}/></CCol>
                                                </div>
                                            </CRow>
                                        )
                                    } width={100} />
                                </Table>
                            }}
                        </AutoSizer>
                    </div></CCol>
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
                    
                    <CRow  >
                    <div class="center">
                    {/* <CCol md='12'></CCol> */}
                    <CCol md='12'><CButton  shape={'pill'}  className={'btnShadow blueColor-btn'} onClick={enableCreate}>+ Add</CButton></CCol>
                </div>
                </CRow>
                </CRow>
                
                <CRow >
                    <CCol md='8'></CCol>
                    <CCol md='4' style={{paddingLeft:'14%'}}>
                        <CCard style={{width:'165px',height:'35px',padding: '3%',textAlign: 'center'}} className={'Role-card-container'} >
                          Showing 1-10 of 100
                        </CCard>
                    </CCol>
                </CRow>
            </CCard></div>}
        </div>
    )
}

export default FunctionalReporting
