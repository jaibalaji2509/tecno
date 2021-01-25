import React, { useState, useEffect } from 'react'
import { AutoSizer, Table, Column } from 'react-virtualized'
import "react-virtualized/styles.css";
import { CRow, CCard, CCol, CButton, CForm, CSelect, CLabel, CInput } from '@coreui/react'
import Edits from '../../images/image 2.svg'
import Remove from '../../images/image 15.svg'
import {
    useFormik
} from 'formik'
import * as yup from 'yup'
import './Area.css'
import { getCountry, deleteCountry } from '../../../services/ApiService'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Area(props) {

    // const [Roles, setRoles] = useState([{
    //     SlNO: 1, qualification: 'Head Office',
    //     // location:'Chennai', 
    //     school: 'HO',
    //     board: '-',
    //     passing: '12-07-2019',
    //     percentage: 'Admin',

    // }, {
    //     SlNO: 1, qualification: 'Head Office',
    //     // location:'Chennai', 
    //     school: 'HO',
    //     board: '',
    //     passing: '17-08-2019',
    //     percentage: 'Admin',

    // }, {
    //     SlNO: 1,
    //     qualification: 'IT Office',
    //     // location:'Chennai', 
    //     school: 'IT',
    //     board: 'Head Office',
    //     passing: '19-08-2020',
    //     percentage: 'Admin',

    // },])
    // const {enqueueSnackbar} = useSnackbar()
    // const [AreaList, setIsLoading] = useState(true)
    // const [qualification, setQualification] = useState("")
    // const [school, setSchool] = useState("")
    const [error, setError] = useState("")
    const [board, setBoard] = useState("")
    const [passing, setPassing] = useState("")
    const [countrySchema, setCountry] = useState([])
    const [AreaCreate, SetAreaCreate] = useState(false)
    const [AreaList, SetAreaList] = useState(true)
    // const [isLoading, setIsLoading] = useState(true);
    // const { match } = props;
    // let { code } = match.params;
    const _noContentRenderer = () => {
        return <div>No Office types.</div>
    }

    const formik = useFormik({
        initialValues: {
            CountryName: '',
            Abbreviation: '',
            Code: '',
        },
        validationSchema: yup.object({
            CountryName: yup.string()
                .required(" CountryName is Required"),
            // .min(5 , "Minimum 5 charcter" )
            Abbreviation: yup.string()
                .required("Abbreviation is Required"),
            Code: yup.string()
                .required("Country Code  is Required"),

        }),
        onSubmit: (userInputData) => {
            console.log(userInputData)

        }
    })

    useEffect(() => {
        setError("");
        console.log(board);
    },[])


    // const deleteStudent = () => {

    //  axios.delete('http://localhost:2000/updateOfficeType')
    //  .then( (res) => {
    //      console.log (res);
    //     //  setPosts(res.data)
    //      console.log('Data has been Changed !')
    // })
    // .catch ((err) => {
    //     console.log (err);
    // })
    // }   
    // const    notify = () => toast("Wow so easy !");

 


    const EditCountry = async (data) => {

        // (data)
        console.log(data);
        await SetAreaList(false);
        await SetAreaCreate(true);
        formik.values.CountryName = data.CountryName
        formik.values.Abbreviation = data.Abbreviation
        formik.values.Code = data.Code

        setPassing(data._id);

    };

    const CancelCountry = async () => {
        if (passing === "") {
            formik.values.CountryName = "";
            formik.values.Abbreviation = "";
            formik.values.Code = "";
        }
        else {
            formik.values.CountryName = "";
            formik.values.Abbreviation = "";
            formik.values.Code = "";
            setPassing("");

        }
        await SetAreaList(true)
        await SetAreaCreate(false)
    }

    const Delete = async (id) => {

        var response
        // let body = formik.values
        try {
            response = await deleteCountry(id)
            if (response.success === true) {
                setBoard(response)
            }

        } catch (e) {
            console.log(e)
        }

    };


    useEffect(() => {

        async function getAllCountry() {
            var response
            // let body = formik.values
            try {
                response = await getCountry()
                console.log(response, "sdf");
                if (response) {

                    console.log(response, 'Response');

                    setCountry(response.Country)
                }
            } catch (e) {
                console.log(e)
            }
        }

        getAllCountry();
    }, []);


  
    const enableCreate = async () => {
        await SetAreaList(false)
        await SetAreaCreate(true)
    }
    return (

        <div>

            {AreaList && <div ><CCard className={'AreaList-card-container'}>
                <CRow style={{ paddingTop: '2%', paddingLeft: '2%' }}>
                    <CCol md='12' className={'role-heading-6'}>
                        Area</CCol>
                </CRow>
                <CRow style={{ padding: '15px', paddingRight: '92%' }}>

                    <CCol md='12' >
                        <CButton color={'primary'} shape={'pill'} className={'btnShadow blueColor float-right'} onClick={enableCreate} >+ Add</CButton></CCol>
                </CRow>
                <CRow style={{ padding: '2%' }}>
                    <CCol md='12'>
                        <CRow>
                            <CCol md='2'>
                                <CInput className={'box'} type={"text"} name={'Country Name'}
                                    onChange={formik.handleChange} value={formik.values.Country}
                                    placeholder='Filter CountryName' />

                            </CCol>
                            <CCol md='2' >
                                <CInput className={'box'} type={"text"} name={'State'}
                                    onChange={formik.handleChange} value={formik.values.States}
                                    placeholder='Filter State' />

                            </CCol>
                            <CCol md='2'>
                                <CInput className={'box'} type={"text"} name={'City'}
                                    onChange={formik.handleChange} value={formik.values.City}
                                    placeholder='Filter City ' />
                            </CCol>
                            <CCol md='2'>
                                <CInput className={'box'} type={"text"} name={'City'}
                                    onChange={formik.handleChange} value={formik.values.City}
                                    placeholder='Filter Area ' />
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
                                        rowClassName='table-row1'
                                        headerStyle={{ textTransform: 'capitalize' }}
                                        rowStyle={{ borderBottom: '1px solid lightgrey' }}
                                        width={width}
                                        height={height}
                                        headerHeight={50}
                                        rowHeight={50}
                                        rowCount={countrySchema.length}
                                        //    sort={_sort}
                                        //    sortBy={sortBy}
                                        overscanColumnCount={1}
                                        overscanRowCount={1}
                                        noContentRenderer={_noContentRenderer}
                                        //    sortDirection={sortDirection}
                                        rowGetter={({ index }) => countrySchema[index]}
                                    >

                                        <Column dataKey={'CountryName'} label={'Country'} width={200} />
                                        <Column dataKey={'StateName'} label={'State'} width={200} />
                                        <Column dataKey={'CityName'} label={'City'} width={200} />
                                        <Column dataKey={'AreaName'} label={'Area'} width={200} />
                                        <Column dataKey={'Abbreviation'} label={'Abbreviation'} width={200} />
                                        <Column dataKey={'Code'} label={'Code'} width={200} />

                                        <Column dataKey={'id'} label={'Actions'} cellRenderer={
                                            (row) => (
                                                <CRow>


                                                    <CCol md='5'><img src={Edits} alt={'edit'} onClick={() => EditCountry(row.rowData)} /> </CCol>
                                                    <CCol md='5'><img src={Remove} alt={'remove'} onClick={() => Delete(row.rowData._id)} /></CCol>
                                                </CRow>
                                            )
                                        } width={100} />
                                    </Table>
                                }}
                            </AutoSizer>
                        </div></CCol>
                </CRow>
            </CCard></div>}


            {AreaCreate && <div style={{ padding: '3%' }}>
                <CCard className={'Office-card-container-6'}>
                    <CRow style={{ padding: '10px', paddingLeft: '20px', paddingRight: '20px' }}>
                        <CCol md='10' className={'role-heading-6'}>
                            Create Area </CCol>
                    </CRow>
                    <CForm >
                        <CRow className={'role-form-container-6'}>
                            <CCol md='12' lg='12' sm='12'>

                                <CRow className={'seperator-6'}>

                                    <CCol md='5'>
                                        <CLabel className={'form-labels-6'}>Country Name</CLabel>
                                        <CSelect name={'CountryName'}
                                            onChange={formik.handleChange} value={formik.values.CountryName}
                                            placeholder='CountryName'>
                                                <option key={""}>Select Country</option>
                                            {countrySchema.map(post => (

                                                <option key={post.id}>{post.CountryName}</option>
                                            ))}
                                        </CSelect>
                                        {formik.errors.CountryName ?
                                            <div className="text-danger"> {formik.errors.CountryName}</div>
                                            : null
                                        }
                                    </CCol>

                                    <CCol md='5'>
                                        <CLabel className={'form-labels-6'}>State Name </CLabel>
                                        <CSelect name={'State'}
                                            onChange={formik.handleChange} value={formik.values.State}
                                            placeholder='State' />
                                        {formik.errors.State ?
                                            <div className="text-danger"> {formik.errors.State}</div>
                                            : null
                                        }
                                    </CCol>
                                </CRow>


                                <CRow className={'seperator-6'}>
                                    <CCol md='5'>
                                        <CLabel className={'form-labels-6'}>City</CLabel>
                                        <CSelect name={'City'}
                                            onChange={formik.handleChange}  value={formik.values.City}
                                            placeholder='City' />
                                        {formik.errors.City ?
                                            <div className="text-danger"> {formik.errors.City}</div>
                                            : null
                                        }
                                    </CCol>
                                    <CCol md='5'>
                                        <CLabel className={'form-labels-6'}>Area </CLabel>
                                        <CInput name={'Area'} onChange={formik.handleChange}  value={formik.values.Area}
                                            placeholder='Area' />



                                        {formik.errors.Area ?
                                            <div className="text-danger"> {formik.errors.Area}</div>
                                            : null
                                        }
                                    </CCol>
                                </CRow>

                                <CRow className={'seperator-6'}>
                                <CCol md='5'>
                                        <CLabel className={'form-labels-6'}>Abbreviation </CLabel>
                                        <CInput name={'Abbreviation'} onChange={formik.handleChange} style={{ textTransform: 'uppercase' }} value={formik.values.Abbreviation}
                                            placeholder='Abbreviation' />



                                        {formik.errors.Abbreviation ?
                                            <div className="text-danger"> {formik.errors.Abbreviation}</div>
                                            : null
                                        }
                                    </CCol>
                                    <CCol md='5'>
                                        <CLabel className={'form-labels-6'}>Code </CLabel>
                                        <CInput name={'Code'} onChange={formik.handleChange} value={formik.values.Code}
                                            placeholder='Code' />



                                        {formik.errors.Code ?
                                            <div className="text-danger"> {formik.errors.Code}</div>
                                            : null
                                        }
                                    </CCol>
                                </CRow>

                                <CRow >
                                    <div className="centerd-7">
                                        <CCol md='10'><CButton shape={'pill'} style={{ width: "80px" }} className={'btnShadow blueColor-btn2'} onClick={"Country"}>{passing !== "" ? "Update" : "+ Create"}</CButton> </CCol>
                                        {error !== "" ? <p>{error}</p> : null}
                                        <ToastContainer className="toast--warning   " style={{ width: "300px" }} />
                                    </div>
                                    <div className="center-6">
                                        <CCol md='10'>
                                            <CButton shape={'pill'} className={'btnShadow blueColor-btns1'} onClick={CancelCountry}>Cancel</CButton> </CCol>
                                    </div>
                                </CRow>
                            </CCol>
                        </CRow>
                    </CForm>
                </CCard> </div>}

        </div>
    )
}

export default Area
