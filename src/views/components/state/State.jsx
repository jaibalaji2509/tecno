import React, { useState, useEffect } from 'react'
import { AutoSizer, Table, Column, SortDirection, InfiniteLoader } from 'react-virtualized'
import "react-virtualized/styles.css";
import { CRow, CCard, CDataTable, CCol, CBadge, CButton, CForm, CPagination, cRadio, CFormGroup, CLabel, CInput, CFormText } from '@coreui/react'
import { useFormik, Formik } from 'formik'
import * as yup from 'yup'
import './State.css'
import { createCountry, getState, getAllAreaPaginate, updateState, updateCity, getAreaSchema, updateArea, createCity, createArea, getArea, getCity, createState, getCountry, updateCountry, deleteLocation } from '../../../services/ApiService'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Select from "react-select";
import ConfirmDelete from '../confirmMessage/confirmDelete';
function State(props) {


    const [error, setError] = useState("")
    const [board, setBoard] = useState("")
    const [passing, setPassing] = useState("")
    const [passings, setPassings] = useState("")
    const [state, setStates] = useState("")
    const [city, setCitys] = useState("")
    const [areaSchema, setArea] = useState([])
    const [areasSchema, setAreas] = useState([])
    const [citySchema, setCity] = useState([])
    const [stateSchema, setState] = useState([])
    const [countrySchema, setCountry] = useState([])
    const [AreaCreate, setAreaCreate] = useState(false)
    const [AreaList, setAreaList] = useState(true)
    const [CountryCreate, setCountryCreate] = useState(false)
    const [CountryList, setCountryList] = useState(true)
    const [CityCreate, setCityCreate] = useState(false)
    const [CityList, setCityList] = useState(true)
    const [StateCreate, setStateCreate] = useState(false)
    const [StateList, setStateList] = useState(true)
    const [showResults, setShowResults] = React.useState(false)
    const [value, setValue] = useState({});
    const [countryName, setCountryName] = useState({});

    const [stateName, setStateName] = useState({});
    const [cityName, setCityName] = useState({});
    const [areaName, setAreaName] = useState({});
    const [limit, setLimit] = useState({ value: 5, label: 5 });
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);
    const [deleteId, setDeleteId] = useState({ id: "", show: false });
    useEffect(() => {
        setError("");
        setPassing("");
        console.log(board, showResults);
    }, [])

    const formik = useFormik({
        initialValues: {
            StateName: '',
            CountryName: '',
            CityName: '',
            AreaName: '',
            Abbreviation1: '',
            Code1: '',
            Abbreviation2: '',
            Code2: '',
            Abbreviation3: '',
            Code3: '',
            Abbreviation4: '',
            Code4: '',
            Pincode: '',
        },
        validationSchema: yup.object({

            // .min(5 , "Minimum 5 charcter" )
            CountryName: yup.string()
                .required(" CountryName is Required"),
            // .min(5 , "Minimum 5 charcter" )
            StateName: yup.string()
                .required(" StateName is Required"),
            CityName: yup.string()
                .required("CityName is Required"),
            AreaName: yup.string()
                .required("AreaName is Required"),
            Abbreviation1: yup.string()
                .required("Abbreviation is Required"),
            Code1: yup.string()
                .required(" Code  is Required"),
            Abbreviation2: yup.string()
                .required("Abbreviation is Required"),
            Code2: yup.string()
                .required(" Code  is Required"),
            Abbreviation3: yup.string()
                .required("Abbreviation is Required"),
            Code3: yup.string()
                .required(" Code  is Required"),
            Abbreviation4: yup.string()
                .required("Abbreviation is Required"),
            Code4: yup.string()
                .required(" Code  is Required"),
            Pincode: yup.string()
                .required(" Pincode  is Required"),

        }),
        onSubmit: (userInputData) => {
            console.log(userInputData)

        }
    })



    const CancelCountry = async () => {
        formik.values.Abbreviation1 = "";
        formik.values.Code1 = "";
        formik.values.CountryName = "";
        await setCountryList(true)
        await setCountryCreate(false)
    }

    const CancelCity = async () => {
        formik.values.Abbreviation3 = "";
        formik.values.Code3 = "";
        formik.values.CityName = "";
        await setCityList(true)
        await setCityCreate(false)
    }

    const CancelState = async () => {
        formik.values.Abbreviation2 = "";
        formik.values.Code2 = "";
        formik.values.StateName = "";
        await setStateList(true)
        await setStateCreate(false)
    }

    const CancelArea = async () => {
        formik.values.Abbreviation4 = "";
        formik.values.Code4 = "";
        formik.values.AreaName = "";
        formik.values.Pincode = "";
        await setAreaList(true)
        await setAreaCreate(false)
    }

    // const Delete = async (id) => {

    //     var response
    //     let body = formik.values
    //     try {
    //         response = await deleteCountry(id)
    //         if (response.success === true) {
    //             setBoard(response)
    //         }

    //     } catch (e) {
    //         console.log(e)
    //     }

    // };

    const Country = async () => {

        if (passings === "") {
            var response
            // let body = {
            //     country: value.country._id,
            // }
            let body = formik.values

            body = { ...body, Code: body.Code1.toUpperCase() }
            console.log(body);
            try {
                response = await createCountry(JSON.stringify(body))
                if (response.success === true) {
                    toast.success(response.message, { autoClose: 1000 });
                    setTimeout(() => {
                        setCountryCreate(false);
                        setCountryList(true);
                    }, 1300)
                    response.Country = { ...response.Country, value: response.Country._id, label: response.Country.countryName }

                    setCountry([...countrySchema, response.Country])
                    formik.values = {}
                    formik.handleReset({})
                    // await setCountryCreate(false)
                    // await setCountryList(true)
                    return (0);

                }
                // setError(response.error)
                // showErrorPopUp();
                toast.error(response.error);


            } catch (e) {
                console.log(e)
            }

        }
        else {
            var responce
            // let body = formik.values
            try {
                responce = await updateCountry(formik.values.CountryName.name, formik.values.Abbreviation1, formik.values.Code1, passings)
                if (responce.success) {
                    console.log("JKJJKJK");
                    toast.success(responce.message, { autoClose: 1000 });
                    setTimeout(() => {
                        setCountryCreate(false);
                        setCountryList(true);
                    }, 1300)
                    responce.updateOfficeType = { ...responce.updateOfficeType, value: responce.updateOfficeType._id, label: responce.updateOfficeType.countryName }
                    const elementsIndex = countrySchema.findIndex(element => element._id === passings)
                    let newArray = [...countrySchema];
                    newArray[elementsIndex] = responce.updateOfficeType;
                    console.log(countrySchema)
                    console.log(newArray, "ddddddd");
                    setCountry(newArray);
                    formik.handleReset({})
                    getAllArea()
                    getAllAreas()
                }
            } catch (e) {
                console.log(e)
            }
        }
    };

    const State = async () => {
        console.log(formik.values.CountryName);
        if (state === "") {
            var response
            let body = formik.values;
            body = { ...body, Code2: body.Code2.toUpperCase(), CountryName: countryName };
            console.log(body);
            try {
                response = await createState(JSON.stringify(body))
                if (response.success === true) {
                    response.State.value = response.State._id;
                    response.State.label = response.State.stateName;
                    toast.success(response.message, { autoClose: 1000 });
                    setTimeout(() => {
                        setStateCreate(false)
                        setStateList(true)
                    }, 1300)
                    formik.handleReset({})
                    console.log(response.State);
                    setState([...stateSchema, response.State])
                    formik.values = {}


                    return (0);

                }
                // setError(response.error)
                // showErrorPopUp();
                toast.error(response.error);


            } catch (e) {
                console.log(e)
            }

        }
        else {
            var response
            let body = formik.values
            try {
                response = await updateState(formik.values.StateName, formik.values.Abbreviation2, formik.values.Code2, state)
                if (response.success === true) {
                    toast.success(response.message, { autoClose: 1000 });
                    setTimeout(() => {
                        setStateCreate(false)
                        setStateList(true)
                    }, 1300)
                    const elementsIndex = stateSchema.findIndex(element => element._id === state)
                    let newArray = [...stateSchema]
                    response.updateOfficeType = { ...response.updateOfficeType, valu: response.updateOfficeType._id, label: response.updateOfficeType.stateNAme }
                    newArray[elementsIndex] = response.updateOfficeType;
                    console.log(newArray, "ddddddd");
                    setState(newArray);
                    getAllAreas()
                }
            } catch (e) {
                console.log(e)
            }
        }
    };


    const City = async () => {

        if (city === "") {
            var response
            let body = formik.values
            body = { ...body, Code3: body.Code3.toUpperCase(), stateName: stateName, countryName: countryName }
            console.log(body);
            try {
                response = await createCity(JSON.stringify(body))
                if (response.success === true) {
                    getAllAreas();
                    toast.success(response.message,{autoClose: 1000});
                    setTimeout(()=>{
                        setCityCreate(false)
                        setCityList(true)
                    }, 1300)
                    response.City = { ...response.City, value: response.City._id, label: response.City.cityName };
                    formik.handleReset({})
                    console.log(response.City);
                    setCity([...citySchema, response.City])
                    formik.values = {}

                    return (0);

                }
                // setError(response.error)
                // showErrorPopUp();
                toast.error(response.error);


            } catch (e) {
                console.log(e)
            }

        }
        else {
            var response
            let body = formik.values
            try {
                response = await updateCity(formik.values.CityName, formik.values.Abbreviation3, formik.values.Code3, city)
                if (response.success === true) {
                    toast.success(response.message,{autoClose: 1000});
                    getAllAreas();
                    setTimeout(()=>{
                        setCityCreate(false)
                        setCityList(true)
                    }, 1300)
                    const elementsIndex = citySchema.findIndex(element => element._id === city)
                    let newArray = [...citySchema]
                    response.updateOfficeType = { ...response.updateOfficeType, value: response.updateOfficeType._id, label: response.updateOfficeType.cityName }
                    newArray[elementsIndex] = response.updateOfficeType;
                    console.log(newArray, "ddddddd");
                    setCity(newArray);
                    getAllAreas()

                }
            } catch (e) {
                console.log(e)
            }
        }
    };

    const Area = async () => {

        if (passing === "") {
            var response
            let body = formik.values;
            body = { ...body, Code4: body.Code4.toUpperCase(), CityName: cityName, StateName: stateName, CountryName: countryName }

            console.log(body);
            try {
                response = await createArea(JSON.stringify(body))
                if (response.success === true) {
                    formik.values = {};
                    setCityName({});
                    setStateName({});
                    setCountryName({});
                    toast.success(response.message, { autoClose: 1000 });
                    setTimeout(() => {
                        setAreaCreate(false)
                        setAreaList(true)
                    }, 1300)
                    formik.handleReset({})
                    // console.log(response.Area);
                    // setArea([...areaSchema, response.Area])
                    getAllArea();
                    getAllAreas();
                    formik.values = {}

                    return (0);

                }
                // setError(response.error)
                // showErrorPopUp();
                toast.error(response.error);


            } catch (e) {
                console.log(e)
            }

        }
        else {
            var response
            // let body = formik.AreaName._id
            try {
                response = await updateArea(formik.values.CountryName, formik.values.AreaName, formik.values.Abbreviation4, formik.values.Code4, formik.values.Pincode, passing)
                if (response.success === true) {
                    getAllAreas();
                    formik.values.CountryName = "";
                    formik.values.AreaName = "";
                    formik.values.Abbreviation4 = "";
                    formik.values.Code4 = "";
                    formik.values.Pincode = "";
                    setPassing("");
                    toast.success(response.message)
                    setTimeout(() => {
                        setAreaCreate(false)
                        setAreaList(true)
                    }, 2000);
                    const elementsIndex = areasSchema.findIndex(element => element._id === passing)
                    let newArray = [...areasSchema]
                    response.updateOfficeType = { ...response.updateOfficeType, value: response.updateOfficeType._id, label: response.updateOfficeType.areaName };
                    newArray[elementsIndex] = response.updateOfficeType;
                    console.log(newArray, "ddddddd");
                    setArea(newArray);
                    getAllAreas()
                }
            } catch (e) {
                console.log(e)
            }
        }
    };

    useEffect(() => {

        async function getAllCountry() {
            var response
            // let body = formik.values
            try {
                response = await getCountry()
                console.log(response, "sdf");
                response.Country.map(x => {
                    x.value = x._id;
                    x.label = x.countryName;
                })
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

    useEffect(() => {

        async function getAllState() {
            var response
            // let body = formik.Country.id
            try {
                response = await getState(countryName._id);
                console.log(response, "sdf");

                if (response) {
                    response.State.map(x => {
                        x.value = x._id;
                        x.label = x.stateName;
                    })
                    console.log(response, 'Response');

                    setState(response.State)
                }
            } catch (e) {
                console.log(e)
            }
        }

        getAllState();
    }, [countryName]);

    useEffect(() => {

        async function getAllCity() {
            var response
            // let body = formik.values
            try {
                response = await getCity(stateName._id)
                console.log(response, "sdf");
                if (response) {
                    response.City.map(x => {
                        x.value = x._id;
                        x.label = x.cityName;
                    })
                    console.log(response, 'Response');

                    setCity(response.City)
                }
            } catch (e) {
                console.log(e)
            }
        }

        getAllCity();
    }, [stateName]);

    useEffect(() => {
        getAllArea();
    }, [cityName]);

    const getAllArea = async () => {
        var response
        // let body = formik.values
        try {
            response = await getArea(cityName._id)
            console.log(response, "sdf");
            if (response) {

                console.log(response, 'Response');
                if (response.Area) {
                    response.Area.map(x => {
                        x.value = x._id;
                        x.label = `${capitalize(x.state.stateName)}, ${capitalize(x.city.cityName)}, ${capitalize(x.areaName)}, ${x.pincode}`;
                        x.cityName = x.city.cityName;
                        x.stateName = x.state.stateName;
                        x.countryName = x.country.countryName;
                    })
                }
                setArea(response.Area)
            }

        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getAllAreas();
    }, []);

    const getAllAreas = async () => {
        var response
        // let body = formik.values
        try {
            response = await getAreaSchema()
            console.log(response, "sdf");
            if (response) {
                if (response.Area) {
                    response.Area.map(x => {
                        x.value = x._id;
                        x.label = `${capitalize(x.state.stateName)}, ${capitalize(x.city.cityName)}, ${capitalize(x.areaName)}, ${x.pincode}`;
                        x.cityName = x.city.cityName;
                        x.stateName = x.state.stateName;
                        x.countryName = x.country.countryName;
                    })
                }
                setAreas(response.Area)
            }
        } catch (e) {
            console.log(e)
        }
    }
    // useEffect(() => {
    //     getPaginate();
    // }, [limit, page]);
    // const getPaginate = async () => {
    //     var response;
    //     // let body = formik.values
    //     try {
    //         response = await getAllAreaPaginate(`page=${page}&limit=${limit.value}`);
    //         if (response) {
    //             if (response.Area) {
    //                 response.Area.docs.map(x => {
    //                     x.value = x._id;
    //                     x.label = `${capitalize(x.state.stateName)}, ${capitalize(x.city.cityName)}, ${capitalize(x.areaName)}, ${x.pincode}`;
    //                     x.cityName = x.city.cityName;
    //                     x.stateName = x.state.stateName;
    //                     x.countryName = x.country.countryName;
    //                 })
    //             }
    //             // setAreas(response.Area.docs)
    //             setTotalPage(response.Area.totalPages)
    //         }


    //     } catch (e) {
    //         console.log(e);
    //     }
    // }


    const capitalize = (x) => {
        let s = x.toLowerCase();
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }
    const enableCreate = async () => {
        await setStateList(false)
        await setStateCreate(true)
    }
    const cityCreate = async () => {
        await setCityList(false)
        await setCityCreate(true)
    }
    const countryCreate = async () => {
        await setCountryList(false)
        await setCountryCreate(true)
    }
    const areaCreate = async () => {
        await setAreaList(false)
        await setAreaCreate(true)
    }
    const MIN_TABLE_WIDTH = 1000;

    const EditCountry = async (data) => {
        console.log(data, "asasasasasas");
        await setCountryList(false)
        await setCountryCreate(true)
        await setStateList(false)
        await setStateCreate(true)
        await setCityList(false)
        await setCityCreate(true)
        await setAreaList(false)
        await setAreaCreate(true)
        formik.values.CountryName = data.countryName
        formik.values.StateName = data.stateName
        formik.values.CityName = data.cityName
        formik.values.AreaName = data.areaName
        formik.values.Abbreviation1 = data.country.abbreviation;
        formik.values.Code1 = data.country.code;
        formik.values.Abbreviation2 = data.state.abbreviation;
        formik.values.Code2 = data.state.code;
        formik.values.Abbreviation3 = data.city.abbreviation;
        formik.values.Code3 = data.city.code;
        formik.values.Abbreviation4 = data.abbreviation;
        formik.values.Code4 = data.code;
        formik.values.Pincode = data.pincode
        setPassing(data._id);   
        setPassings(data.country._id);
        setStates(data.state._id);
        setCitys(data.city._id);
    }
    const Delete = async () => {

        var response
        let body = formik.values
        try {
            response = await deleteLocation(deleteId.id)
            if (response.success === true) {
                // setBoard(response)
                getAllAreas()
                cancelConfirmDelete();
            }

        } catch (e) {
            console.log(e)
            cancelConfirmDelete();
        }

    };
    const [details, setDetails] = useState([])
    useEffect(() => {
        let val1 = formik.values.Code1
        formik.values.Code1 = val1.toUpperCase();
        let val2 = formik.values.Code2
        formik.values.Code2 = val2.toUpperCase();
        let val3 = formik.values.Code3
        formik.values.Code3 = val3.toUpperCase();
        let val4 = formik.values.Code4
        formik.values.Code4 = val4.toUpperCase();
    }, [formik.values])
    const fields = [
        { key: 'countryName', _style: { width: '20%' } },
        { key: 'stateName', _style: { width: '20%' } },
        { key: 'cityName', _style: { width: '20%' } },
        { key: 'areaName', _style: { width: '20%' } },
        { key: 'pincode', _style: { width: '20%' } },
        
        {
            label: 'Action',
            key: 'show_details',

            _style: { width: '1%' },
            sorter: false,
            filter: false
        }
    ]

    const getBadge = (status) => {
        switch (status) {
            case 'Active': return 'success'
            case 'Inactive': return 'secondary'
            case 'Pending': return 'warning'
            case 'Banned': return 'danger'
            default: return 'primary'
        }
    }
    const toggleDetails = (index) => {
        const position = details.indexOf(index);
        let newDetails = details.slice();
        if (position !== -1) {
            newDetails.splice(position, 1);
        } else {
            newDetails = [...details, index];
        }
        setDetails(newDetails);
    };
    const deleteConfirm = (id) =>{
        setDeleteId({id:id,show:true})
    }
const cancelConfirmDelete  =()=>{
    setDeleteId({id:"", show:false})
}
    return (

        <div>
<ConfirmDelete details={deleteId} confirm={Delete} cancel={cancelConfirmDelete}/>
            <div ><CCard className={'StateList-card-container'}>
                <CRow style={{ padding: '10px', paddingLeft: '20px', paddingRight: '20px' }}>
                    <CCol md='12' className={'role-heading-2'}>
                        Location Library</CCol>
                </CRow>



                <CRow className={'role-form-container-6'}>
                    <CCol md='12' lg='12' sm='12'>
                        <CRow className={'seperator-6'}>
                            {CountryList && <React.Fragment><CCol md={5} lg={5}><CLabel className={'form-labels-6'}>Country Name</CLabel>
                                <Select
                                    type={"text"}
                                    placeholder='CountryName'
                                    onChange={(e) => setCountryName(e)}
                                    value={countryName.value ? countryName : null}
                                    options={countrySchema}
                                />
                                {/* <Select
                        type={"text"}
                        placeholder="Country,State,City,Area"
                        // onChange={handleChanges}
                        options={countrySchema}
                      /> */}

                            </CCol>
                                <CCol md={3} lg={3}>
                                    <CButton shape={'pill'} style={{ paddingTop: '2%', marginTop: '30px' }} className={'saveBtn'} onClick={countryCreate}>ADD</CButton>
                                </CCol>
                            </React.Fragment>}
                            {CountryCreate && <React.Fragment>
                                <CCol md='3'>
                                    <CLabel className={'form-labels-6'}>Country Name
                                    <span className={"text-danger"}> *</span>
                                    </CLabel>
                                    <CInput name={'CountryName'}
                                        onChange={formik.handleChange} value={formik.values.CountryName}
                                        placeholder='CountryName' />
                                    {formik.errors.CountryName ?
                                        <div className="text-danger"> {formik.errors.CountryName}</div>
                                        : null
                                    }


                                </CCol>


                                <CCol md='3'>
                                    <CLabel className={'form-labels-6'}>Abbreviation
                                    <span className={"text-danger"}> *</span>
                                    </CLabel>
                                    <CInput name={'Abbreviation1'}
                                        onChange={formik.handleChange} value={formik.values.Abbreviation1}
                                        placeholder='Abbreviation' />
                                    {formik.errors.Abbreviation1 ?
                                        <div className="text-danger"> {formik.errors.Abbreviation1}</div>
                                        : null
                                    }


                                </CCol>
                                <CCol md='3'>
                                    <CLabel className={'form-labels-6'}>Code
                                    <span className={"text-danger"}> *</span>
                                    </CLabel>
                                    <CInput name={'Code1'}
                                        onChange={formik.handleChange} value={formik.values.Code1} style={{ textTransform: 'uppercase' }}
                                        placeholder='Code' />
                                    {formik.errors.Code1 ?
                                        <div className="text-danger"> {formik.errors.Code1}</div>
                                        : null
                                    }


                                </CCol>
                                <CCol md='3'>
                                    <CButton shape={'pill'} style={{ marginTop: '30px' }} className={'saveBtn'} onClick={Country}>Save</CButton>
                                    <CButton shape={'pill'} style={{ marginTop: '30px', marginLeft: '20px' }} className={'cancelBtn'} onClick={CancelCountry}>Cancel</CButton>
                                    {error !== "" ? <p>{error}</p> : null}
                                    <ToastContainer autoClose={5000} className="toast--warning" style={{ width: "300px" }} />
                                </CCol>
                            </React.Fragment>}
                        </CRow>
                        <CRow className={'seperator-6'}>
                            {StateList && <React.Fragment>
                                <CCol md={5} lg={5}>
                                    <CLabel className={'form-labels-6'}>State Name</CLabel>
                                    <Select
                                        type={"text"}
                                        placeholder="Select State"
                                        onChange={(e) => setStateName(e)}
                                        value={stateName.value ? stateName : null}
                                        options={stateSchema}
                                    />

                                </CCol>
                                <CCol md={3} lg={3}>
                                    <CButton shape={'pill'} style={{ paddingTop: '2%', marginTop: "30px" }} className={'saveBtn'} onClick={enableCreate}>ADD</CButton>
                                </CCol>
                            </React.Fragment>}
                            {StateCreate && <React.Fragment><CCol md='3'>
                                <CLabel className={'form-labels-6'}>State Name
                                <span className={"text-danger"}> *</span>
                                </CLabel>
                                <CInput name={'StateName'}
                                    onChange={formik.handleChange} 
                                    value={formik.values.StateName}
                                    placeholder='StateName' />
                                {formik.errors.StateName ?
                                    <div className="text-danger"> {formik.errors.StateName}</div>
                                    : null
                                }


                            </CCol>



                                <CCol md='3'>
                                    <CLabel className={'form-labels-6'}>Abbreviation
                                    <span className={"text-danger"}> *</span>
                                    </CLabel>
                                    <CInput name={'Abbreviation2'}
                                        onChange={formik.handleChange} value={formik.values.Abbreviation2}
                                        placeholder='Abbreviation' />
                                    {formik.errors.Abbreviation2 ?
                                        <div className="text-danger"> {formik.errors.Abbreviation2}</div>
                                        : null
                                    }


                                </CCol>
                                <CCol md='3'>
                                    <CLabel className={'form-labels-6'}>Code
                                    <span className={"text-danger"}> *</span>
                                    </CLabel>
                                    <CInput name={'Code2'}
                                        onChange={formik.handleChange} value={formik.values.Code2} style={{ textTransform: 'uppercase' }}
                                        placeholder='Code' />
                                    {formik.errors.Code2 ?
                                        <div className="text-danger"> {formik.errors.Code2}</div>
                                        : null
                                    }


                                </CCol>
                                <CCol md='3'>
                                    <CButton shape={'pill'} style={{ marginTop: '30px' }} className={'saveBtn'} onClick={State}>Save</CButton>
                                    <CButton shape={'pill'} style={{ marginTop: '30px', marginLeft: '20px' }} className={'cancelBtn'} onClick={CancelState}>Cancel</CButton>
                                    {error !== "" ? <p>{error}</p> : null}
                                    <ToastContainer autoclose={5000} className="toast--warning " style={{ width: "300px" }} />
                                    {/* {message!==""?<p>{message}</p>:null}
                                    <ToastContainer className="success" style={{widath:'200px'}}/> */}

                                </CCol></React.Fragment>}
                        </CRow>
                        <CRow className={'seperator-6'}>
                            {CityList && <React.Fragment><CCol md={5} lg={5}><CLabel className={'form-labels-6'}>City Name</CLabel>
                                <Select
                                    type={"text"}
                                    placeholder="Select City"
                                    // onChange={(e) => { setCityName(e); formik.values.CityName = e }}
                                    onChange={(e) => setCityName(e)}
                                    value={cityName.value ? cityName : null}
                                    options={citySchema} />

                                {formik.errors.CityName ?
                                    <div className="text-danger"> {formik.errors.CityName}</div>
                                    : null
                                }
                            </CCol>
                                <CCol md={3} lg={3}>
                                    <CButton shape={'pill'} style={{ paddingTop: '2%', marginTop: '30px' }} className={'saveBtn'} onClick={cityCreate}>ADD</CButton>
                                </CCol>
                            </React.Fragment>}
                            {CityCreate && <React.Fragment><CCol md='3'>
                                <CLabel className={'form-labels-6'}>City Name
                                <span className={"text-danger"}> *</span>
                                </CLabel>
                                <CInput name={'CityName'}
                                    onChange={formik.handleChange} 
                                    value={formik.values.CityName}
                                    placeholder='CityName' />
                                {formik.errors.CityName ?
                                    <div className="text-danger"> {formik.errors.CityName}</div>
                                    : null
                                }


                            </CCol>


                                <CCol md='3'>
                                    <CLabel className={'form-labels-6'}>Abbreviation
                                    <span className={"text-danger"}> *</span>
                                    </CLabel>
                                    <CInput name={'Abbreviation3'}
                                        onChange={formik.handleChange} value={formik.values.Abbreviation3}
                                        placeholder='Abbreviation' />
                                    {formik.errors.Abbreviation3 ?
                                        <div className="text-danger"> {formik.errors.Abbreviation3}</div>
                                        : null
                                    }


                                </CCol>
                                <CCol md='3'>
                                    <CLabel className={'form-labels-6'}>Code
                                    <span className={"text-danger"}> *</span>
                                    </CLabel>
                                    <CInput name={'Code3'}
                                        onChange={formik.handleChange} value={formik.values.Code3} style={{ textTransform: 'uppercase' }}
                                        placeholder='Code' />
                                    {formik.errors.Code3 ?
                                        <div className="text-danger"> {formik.errors.Code3}</div>
                                        : null
                                    }


                                </CCol>
                                <CCol md='3'>
                                    <CButton shape={'pill'} style={{ marginTop: '30px' }} className={'saveBtn'} onClick={City}>Save</CButton>
                                    <CButton shape={'pill'} style={{ marginTop: '30px', marginLeft: '20px' }} className={'cancelBtn'} onClick={CancelCity}>Cancel</CButton>
                                    {error !== "" ? <p>{error}</p> : null}
                                    <ToastContainer autoclose={5000} className="toast--warning   " style={{ width: "300px" }} />

                                </CCol></React.Fragment>}
                        </CRow>
                        <CRow className={'seperator-6'}>
                            {AreaList && <React.Fragment><CCol md={5} lg={5}><CLabel className={'form-labels-6'}>Area Name</CLabel>
                                <Select
                                    placeholder='Select Area'
                                    onChange={(e) => setAreaName(e)}
                                    value={areaName.value ? areaName : null}
                                    options={areaSchema}
                                />

                                {formik.errors.AreaName ?
                                    <div className="text-danger"> {formik.errors.AreaName}</div>
                                    : null
                                }
                            </CCol>
                                <CCol md={3} lg={3}>
                                    <CButton shape={'pill'} style={{ paddingTop: '2%', marginTop: '30px' }} className={'saveBtn'} onClick={areaCreate}>ADD</CButton>
                                </CCol>
                            </React.Fragment>}
                            {AreaCreate && <React.Fragment><CCol md='3'>
                                <CLabel className={'form-labels-6'}>Area Name
                                <span className={"text-danger"}> *</span>
                                </CLabel>
                                <CInput name={'AreaName'}
                                    onChange={formik.handleChange} value={formik.values.AreaName}
                                    placeholder='AreaName' />
                                {formik.errors.AreaName ?
                                    <div className="text-danger"> {formik.errors.AreaName}</div>
                                    : null
                                }


                            </CCol>

                                <CCol md='2'>
                                    <CLabel className={'form-labels-6'}>Pincode
                                    <span className={"text-danger"}> *</span>
                                    </CLabel>
                                    <CInput name={'Pincode'}
                                        onChange={formik.handleChange} value={formik.values.Pincode}
                                        placeholder='Pincode' />
                                    {formik.errors.Pincode ?
                                        <div className="text-danger"> {formik.errors.Pincode}</div>
                                        : null
                                    }


                                </CCol>
                                <CCol md='2'>
                                    <CLabel className={'form-labels-6'}>Abbreviation
                                    <span className={"text-danger"}> *</span>
                                    </CLabel>
                                    <CInput name={'Abbreviation4'}
                                        onChange={formik.handleChange} value={formik.values.Abbreviation4}
                                        placeholder='Abbreviation' />
                                    {formik.errors.Abbreviation4 ?
                                        <div className="text-danger"> {formik.errors.Abbreviation4}</div>
                                        : null
                                    }


                                </CCol>
                                <CCol md='2'>
                                    <CLabel className={'form-labels-6'}>Code
                                    <span className={"text-danger"}> *</span>
                                    </CLabel>
                                    <CInput name={'Code4'}
                                        onChange={formik.handleChange} value={formik.values.Code4} style={{ textTransform: 'uppercase' }}
                                        placeholder='Code' />
                                    {formik.errors.Code4 ?
                                        <div className="text-danger"> {formik.errors.Code4}</div>
                                        : null
                                    }


                                </CCol>
                                <CCol md='2'>
                                    <CButton shape={'pill'} style={{ marginTop: '30px' }} className={'saveBtn'} onClick={Area}>Save</CButton>
                                    <CButton shape={'pill'} style={{ marginTop: '30px', }} className={'cancelBtn'} onClick={CancelArea}>Cancel</CButton>
                                    {error !== "" ? <p>{error}</p> : null}
                                    <ToastContainer autoclose={5000} className="toast--warning   " style={{ width: "300px" }} />

                                </CCol></React.Fragment>}
                        </CRow>



                        <CRow style={{ padding: '10px', paddingLeft: '4px', paddingRight: '20px' }}>
                            <CCol md='12' className={'role-heading-2'}>
                                List of Locations</CCol>
                        </CRow>

                        <CRow style={{ padding: "15px", paddingLeft: "2%" }}>
                            <CCol md="10">

                            </CCol>

                        </CRow>
                        <CRow style={{ padding: '1%' }}>
                            <CDataTable
                                items={areasSchema}
                                fields={fields}
                                columnFilter
                                tableFilter
                                footer
                                itemsPerPageSelect
                                itemsPerPage={5}
                                hover
                                sorter
                                pagination
                                scopedSlots={{
                                    'status':
                                        (item) => (
                                            <td>
                                                <CBadge color={getBadge(item.status)}>
                                                    {item.status}
                                                </CBadge>
                                            </td>
                                        ),
                                    'show_details':
                                        (item, index) => {
                                            return (
                                                <td className="py-2">
                                                    {/* <CButton
                            color="primary"
                            variant="outline"
                            shape="square"
                            size="sm"
                         
                          >
                            {details.includes(index) ? 'Hide' : 'Show'}
                          </CButton> */}
                                                    <CRow>
                                                        <CCol style={{ fontSize: "1.15rem" }} md="12">
                                                            <i onClick={() => { toggleDetails(index) }}></i>
                                                            <i
                                                                style={{
                                                                    marginRight: "5px",
                                                                    color: "#3480e2",
                                                                }}
                                                                onClick={() =>
                                                                    EditCountry(areasSchema[index])
                                                                }

                                                                class="fas fa-edit"
                                                            ></i>
                                                            <i
                                                                onClick={() => deleteConfirm(areasSchema[index]._id)}
                                                                style={{
                                                                    marginLeft: "5px",
                                                                    color: "#e85654",
                                                                }}
                                                                class="fas fa-trash"
                                                            ></i>
                                                        </CCol>

                                                    </CRow>
                                                </td>
                                            )
                                        },
                                    'details':
                                        (item, index) => {


                                        }
                                }}
                            />
                        </CRow>

                    </CCol>
                </CRow>
                <CRow>

                </CRow>
            </CCard></div>



        </div>

    )
}

export default State