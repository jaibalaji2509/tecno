import React, { useState, useEffect, useContext, } from 'react'
import { CRow, CCol, CButton, CForm, CSelect, CLabel, CInput, } from '@coreui/react'
// import { AutoSizer, Table, Column, SortDirection, InfiniteLoader } from 'react-virtualized'
// import Edit from '../../images/image 2.svg'
// import Remove from '../../images/image 15.svg'
// import { useSnackbar } from 'notistack'
// import { useFormik } from 'formik'
// import * as yup from 'yup'
import { Card } from '@material-ui/core'
import Select from "react-select";
// import { GlobalContext } from '../../../services/GlobalContext'
import { AuthContext } from '../../../services/auth/AuthContext'
// import "./node_modules/react-virtualized/styles.css";
import './SuspendEmployee.css'
import { addPromoteEmployee, getAllRole, updateEmployeeMovement } from '../../../services/ApiService'
import RevokeEmployee from '../revokeemployee/RevokeEmployee';
import { toast } from 'react-toastify';
// const { elements } = this.props;
// const { filterStr } = this.state;


const AddSuspendEmployee = (props) => {

    const [selected, setSelected] = useState({})
    const [updateValue, setUpdateValue] = useState({});
    const [roleList, setRoleList] = useState([]);
    const [value, setValue] = useState("")
    const [desigination2, setdesigination2] = useState('')
    const [desigination2Error, setdesigination2Error] = useState('')
    const [from, setfrom] = useState('')
    const [fromError, setfromError] = useState('')

    const [duration1, setDuration] = useState(0);
    const [durationError, setDurationError] = useState('');
    const [to, setTo] = useState('')
    const [toError, settoError] = useState('')
    const [description1, setdescription1] = useState('')
    const [description1Error, setdescription1Error] = useState('')
    const [posts, setPosts] = useState('')
    const [suspendEmployeeSchema, setSuspendEmployeeSchema] = useState([])
    const [error, setError] = useState('')


    // const global = useContext(GlobalContext)
    const auth = useContext(AuthContext)

    useEffect(() => {
        if (props.data !== {}) {
            setUpdateValue(props.data)
            setfrom(props.data.dor)
            setdesigination2(props.data.reason)
            setDuration(props.data.duration)
            setTo(props.data.doj)
            setdescription1(props.data.remarks)
            setPosts(props.data._id)
            console.log(props.data.doj,to,"aaaaaaaaa");
        }
    }, [])

    useEffect(() => {
        console.log(updateValue, "success2");
    }, [updateValue])

    const onChangedesigination2 = (event) => {
        const desigination2 = event 
        console.log(desigination2)
        if (desigination2 === '' || desigination2.length < 1) {
            setdesigination2Error('Please enter at least 3 characters')
            setdesigination2(desigination2)
        } else {
                setdesigination2(desigination2)
            setdesigination2Error(null)
        }
    }

    const onChangefrom = (event) => {
        const from = event.target.value
        setSelected({ ...selected, updateValue: { ...selected.updateValue, dor: from } })

        console.log(from)
        if (from === '' || from.length < 1) {
            setfromError('Please enter at least 3 characters')
            setfrom(from)
        } else {
                setfrom(from)
            setfromError(null)
        }
    }

    const onChangeDuration = (event) => {
        console.log(props.data.doj,to,"aaaaaaaaa");
        const duration1 = event.target.value
        if (duration1 === '' || duration1.length < 1) {
            setdescription1Error('Please enter at least 3 characters')
            setDuration(duration1)
        } else {
                setDuration(duration1)
            setDurationError(null)
        }
    }

    const onChangeto = (event) => {
        const to = event.target.value
        if (to === '' || to.length < 1) {
            settoError('Please enter at least 3 characters')
            setTo(to)
        } else {
                setTo(to)
            settoError(null)
        }
    }

    const onChangedescription1 = (event) => {
        const description1 = event.target.value
        if (description1 === '' || description1.length < 1) {
            setdescription1Error('Please enter at least 3 characters')
            setdescription1(description1)
        } else {
                setdescription1(description1)
            setdescription1Error(null)
        }
    }
    const SuspendEmployees = async () => {

        console.log('Test Suspend');

        if (posts === "" || posts === undefined) {
            var response;
            let body = {
                movementType: 'S',
                dor: from,
                doj: to,
                reason: desigination2,
                remarks: description1,
                duration: duration1,
                employeeId: selected.assignedTo._id,
                roleId: selected._id
            }
            console.log(body);
            try {
               const response = await addPromoteEmployee(body)
                if (response.success === true) {
                 toast.success(response.message)
                 setTimeout(() => {
                     props.change()
                 }, 2000);
                    console.log(response.EmployeeMovement);
                    setPosts([...posts, response.EmployeeMovement])
                    return 0;

                }
                setError(response.error)
                console.log(error);
            } catch (e) {
                console.log(e, "sssss")
            }

        }
        else {
            var responce
            let body = { id: updateValue._id, dor: from, doj: to, reason: desigination2, remarks: description1, duration: duration1, }
            try {
              const response = await updateEmployeeMovement(body)
                if (response.success === true) {
                    toast.success(response.message);
                    const elementsIndex = suspendEmployeeSchema.findIndex(element => element._id === posts)
                    let newArray = [...suspendEmployeeSchema]
                    newArray[elementsIndex] = response.updateSuspendEmployee;
                    console.log(newArray, "ddddddd");
                    setTimeout(() => {
                        props.change();
                      }, 3000);
                    setPosts(newArray);

                }
            } catch (e) {
                console.log(e)
            }
        }
    };

    const capitalize = (x) => {
        let s = x.toLowerCase();
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }


    const handleChanges = (event) => {
        setValue(event);
    }

    useEffect(() => {
        const getAllRoles = async () => {
            try {
                const roleResponse = await getAllRole("assigned=true");
                if (roleResponse) {
                    if (roleResponse.data) {
                        setRoleList(roleResponse.data);
                    }
                }
            } catch (e) {
                console.log(e);
            }
        };
        getAllRoles();
    }, []);



    useEffect(() => {
        if(roleList.length>0){
         roleList && roleList.map((x) => {
            x.label = `${x.typeOfOffice.officeType}, ${x.officeLocation.state.stateName}, ${x.officeLocation.city.cityName}, ${x.officeLocation.area.areaName}, ${x.department.name}, ${x.designation.name}, ${x.roleName} - ${x.assignedTo && x.assignedTo.firstName ? x.assignedTo.firstName : ""}`;
            x.employee = { _id: "5f9fa8a70e1cae3cd8f9fb88", name: "Manoj Kumar" };
            x.value = x;
        });
    }
    }, [roleList]);

    const fileChangedHandler = (event) => {
        const file = event.target.files[0]
    }

    Date.prototype.addDays = function (dates, days) {
        var date = new Date(dates);
        date.setDate(date.getDate() + days);
        return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
    }

    
    useEffect(() => {
        if (from !== "" && duration1 !== 0 && !updateValue) {
            var date = new Date();
            setTo(date.addDays(from, duration1))
        }
    }, [from])
    useEffect(() => {
        var date = new Date();
        if (from !== "" && duration1 !== 0 && !updateValue) {
            console.log(date.addDays(from, duration1));
            setTo(date.addDays(from, duration1))
            console.log(to, "aaa")
        }
    }, [duration1])
    const options = [
        { value: 'Improper Work', label: 'Improper Work' },
        { value: 'Continous Leave', label: 'Continous Leave' },
        // { value: 'vanilla', label: 'Vanilla' }
      ]
    return (

        <div style={{ padding: '2%' }}>
            <Card className={'Roless-card-container-6'}>
                <CRow style={{ padding: '2%', paddingLeft: '2%' }}>
                    <CCol md='12' className={'role-heading-3'}>
                        Suspend From </CCol>
                </CRow >

                <CRow className={'role-form-container-3'}>
                    <CCol md='5'>
                        <CLabel className={'form-labels-3'}>Search 
                        <span className={"text-danger"}> *</span>
                        </CLabel>
                        <Select
                            onChange={(e) => {
                                setSelected(e);
                            }}
                            options={roleList}
                        />
                    </CCol>
                    {/* <CRow style={{ padding: '2%', paddingRight: '30%' }}>
                        <CCol md='20'><CButton type="submit" color={'primary'} shape={'pill'} className={'btnShadow blueColor-btn'} > OK</CButton></CCol>
                    </CRow> */}
                </CRow>

                <CForm >
                    <CRow className={'role-form-container-3'}>
                        <CCol md='12' lg='12' sm='12'>
                        <CRow className={"seperator-2"}>
                <CCol className={"image-12"}>
                  <img
                    type="text"
                    src={
                      selected.assignedTo
                        ? selected.assignedTo.profileImage
                        : ""
                    }
                    style={{
                      width: "150px",
                      height: "160px",
                      position: "relative",
                      right: "15px",
                    }}
                  />
                  <h6
                    style={{
                      width: "100%",
                      textAlign: "center",
                      paddingTop: "35%",
                    }}
                  >
                    No Image
                  </h6>
                </CCol>
              </CRow>
                            <CRow className={'seperator-3'}>
                                <CCol md='5'>
                                    <CLabel className={'form-labels-3'}>Name of the Party Member  </CLabel>
                                    <br />
                                    <CLabel
                                        className={"form-labels-3"}
                                        style={{ color: "#424c6190" }}
                                    >
                                        {updateValue.employeeId ? updateValue.employeeId.firstName : selected.assignedTo
                                            ? selected.assignedTo.firstName
                                            : "Enter Party Member details"}
                                    </CLabel>



                                </CCol>

                            </CRow>


                            <CRow className={"seperator-3"}>
                                <CCol md="5">
                                    <CLabel className={"form-labels-3"}>
                                        D.C.C Description{" "}
                                    </CLabel>
                                    <br />
                                    <CLabel
                                        className={"form-labels-3"}
                                        style={{ color: "#424c6190" }}
                                    >
                                        {updateValue.roleId ? updateValue.roleId.dccDescription : selected.dccDescription
                                            ? selected.dccDescription
                                            : "Enter DCC Description"}
                                    </CLabel>
                                </CCol>

                                <CCol md="5">
                                    <CLabel className={"form-labels-3"}>Department </CLabel>
                                    <br />
                                    <CLabel
                                        className={"form-labels-3"}
                                        style={{ color: "#424c6190" }}
                                    >
                                        {updateValue.roleId ? updateValue.roleId.designation.name : selected.department
                                            ? selected.department.name
                                            : "Enter Department Details"}
                                    </CLabel>
                                </CCol>
                            </CRow>

                            <CRow className={"seperator-3"}>
                                <CCol md="5">
                                    <CLabel className={"form-labels-3"}>D.C.C ID </CLabel>
                                    <br />
                                    <CLabel
                                        className={"form-labels-3"}
                                        style={{ color: "#424c6190" }}
                                    >
                                        {updateValue.roleId ? updateValue.roleId.dccId : selected.dccId ? selected.dccId : "Enter DCC ID"}
                                    </CLabel>
                                </CCol>

                                <CCol md="5">
                                    <CLabel className={"form-labels-3"}>Desigination </CLabel>
                                    <br />
                                    <CLabel
                                        className={"form-labels-3"}
                                        style={{ color: "#424c6190" }}
                                    >
                                        {updateValue.roleId ? updateValue.roleId.designation.name : selected.designation
                                            ? selected.designation.name
                                            : "Enter Designation Details"}
                                    </CLabel>
                                </CCol>
                            </CRow>
                            <CRow className={"seperator-3"}>
                                <CCol md="5">
                                    <CLabel className={"form-labels-3"}>Type of Party Office </CLabel>
                                    <br />
                                    <CLabel
                                        className={"form-labels-3"}
                                        style={{ color: "#424c6190" }}
                                    >
                                        {updateValue.roleId ? updateValue.roleId.typeOfOffice.officeType : selected.typeOfOffice
                                            ? selected.typeOfOffice.officeType
                                            : "Enter Type Party Office"}
                                    </CLabel>
                                </CCol>

                                <CCol md="5">
                                    <CLabel className={"form-labels-3"}>Role </CLabel>
                                    <br />
                                    <CLabel
                                        className={"form-labels-3"}
                                        style={{ color: "#424c6190" }}
                                    >
                                        {updateValue.roleId ? updateValue.roleId.roleName : selected.roleName ? selected.roleName : "Enter Role"}
                                    </CLabel>
                                </CCol>
                            </CRow>

                            <CRow className={"seperator-3"}>
                                <CCol md="5">
                                    <CLabel className={"form-labels-3"}>Location </CLabel>
                                    <br />
                                    <CLabel
                                        className={"form-labels-3"}
                                        style={{ color: "#424c6190" }}
                                    >
                                          {updateValue.roleId ? `${updateValue.roleId.officeLocation.locationName}` : selected.officeLocation
                                            ? `${selected.officeLocation.locationName} `
                                            : "Enter Location Name"}<br/>
                                        {updateValue.roleId ? `${updateValue.roleId.officeLocation.area.areaName},${updateValue.roleId.officeLocation.city.cityName},${updateValue.roleId.officeLocation.state.stateName},${updateValue.roleId.officeLocation.country.countryName}` : selected.officeLocation
                                            ? `${selected.officeLocation.area.areaName} ,${selected.officeLocation.city.cityName} ,${selected.officeLocation.state.stateName}, ${selected.officeLocation.country.countryName}`
                                            : "Enter Party Office Location Details"}
                                    </CLabel>
                                </CCol>
                            </CRow>

                        </CCol>
                    </CRow>

                    <CRow className={'role-form-container-3'}>
                        <CCol md='12' lg='12' sm='12'>

                            <CRow className={'seperator-3'}>
                                <CCol md='5'>
                                    <CLabel className={'form-labels-3'}>Reason For Suspension 
                                    <span className={"text-danger"}> *</span>
                                    </CLabel>
                                    <Select valid={desigination2Error !== '' && !desigination2Error} invalid={!!desigination2Error}
                                        value={desigination2} onChange={evt => onChangedesigination2(evt)} options={options}>
                                        
                                    </Select>
                                </CCol>
                                <CCol md='5'>
                                    <CLabel className={'form-labels-3'}>Suspend From
                                    <span className={"text-danger"}> *</span>
                                    </CLabel>
                                    <CInput type='date' valid={fromError !== '' && !fromError} invalid={!!fromError}
                                        value={from} onChange={evt => onChangefrom(evt)}
                                        placeholder='Enter Suspend From'>
                                    </CInput>
                                </CCol>

                            </CRow>

                            <CRow className={'seperator-3'}>
                                <CCol md='5'>
                                    <CLabel className={'form-labels-3'}>Duration
                                    <span className={"text-danger"}> *</span>
                                    </CLabel>
                                    <CInput type={'number'} valid={fromError !== '' && !fromError} invalid={!!fromError}
                                        value={duration1} onChange={evt => onChangeDuration(evt)}
                                        placeholder='Enter Suspend From'>
                                    </CInput>
                                </CCol>

                                <CCol md='5'>
                                    <CLabel className={'form-labels-3'}>Suspend to 
                                    <span className={"text-danger"}> *</span>
                                    </CLabel>
                                    <CInput type='date' valid={toError !== '' && !toError} invalid={!!toError}
                                        value={to}
                                        onChange={evt => onChangeto(evt)}
                                        placeholder='Enter Suspend To'>

                                    </CInput>
                                </CCol>
                            </CRow>

                            <CRow className={'seperator-3'}>
                                <CCol md='5'>
                                    <CLabel className={'form-labels-3'}>Remarks
                                    <span className={"text-danger"}> *</span>
                                    </CLabel>
                                    <CInput valid={description1Error !== '' && !description1Error} invalid={!!description1Error}
                                        value={description1}
                                        onChange={evt => onChangedescription1(evt)}
                                        placeholder='Enter Description' style={{ height: '80px' }}>

                                    </CInput>
                                </CCol>
                            </CRow>

                            <CRow >
                                <CCol md='10'>
                                    <div className="center-3">
                                        <CCol md='12'><CButton type="submit" color={'primary'} shape={'pill'} className={'btn btn-info'} onClick={SuspendEmployees} >Confirm</CButton></CCol>
                                    </div>
                                    <div className="centerd-3">
                                        <CCol md='12'><CButton shape={'pill'} onClick={() => props.change()} className={'btn btn-danger'}> Cancel</CButton></CCol>
                                    </div>
                                </CCol>
                            </CRow>

                        </CCol>
                    </CRow>
                </CForm>

            </Card>
        </div>
    )
}

export default AddSuspendEmployee
