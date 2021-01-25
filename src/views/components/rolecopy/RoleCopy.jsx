import React, { useState, useEffect } from "react";
import {
    AutoSizer,
    Table,
    Column
} from "react-virtualized";
import { ToastContainer, toast } from "react-toastify";
import ReactMultiSelectCheckboxes from "react-multiselect-checkboxes";
import MultiSelect from "react-multi-select-component";
import {
    CRow,
    CCard,
    CCol,
    CButton,
    CForm,
    CSelect,
    CLabel,
    CInput,
    CDataTable,
    CBadge,
    CCollapse,
    CCardBody,

} from "@coreui/react";
import Select, { components } from "react-select";
import { useFormik } from "formik";
import * as yup from "yup";
import Edits from "../../images/image 2.svg";
import Remove from "../../images/image 15.svg";
import "./RoleCopy.css";
import {
    departmentCreate,
    designationCreate,
    getAllRoleCopy,
    getAllDepartment,
    getAllRoleData,
    getDesignation,
    getOfficeLocation,
    getOfficeType,
    createRoleConfirm,
    getAllRole,
    getAllRoleLocation
} from "../../../services/ApiService";
import { Label } from "react-konva";
import { setTimeout } from "core-js";

function RoleCopy(props) {
    const [officeLocation, setOfficeLocation] = useState([]);
    const [locationRole, setLocationRole] = useState("");
    const [officeTypes, setOfficeTypes] = useState("");
    const [officeType, setOfficeType] = useState([]);
    const [RoleList, setRoleList] = useState([]);
    const [final, setFinal] = useState([]);
    const [toLocation, setTolocation] = useState([]);
    const [selected, setSelected] = useState([]);
    const [roleCopy, setRoleCopy] = useState([]);
    const [to, setTo] = useState([]);

    const formik = useFormik({
        initialValues: {
            officetype: {},
            departmentRole: "",
            locationRole: {},
            designationRole: "",
            office: "",
            roleName: "",
            abbreviation: "",
            code: "",
            dccDescription: "",
            dccID: "",
        },
        validationSchema: yup.object({
            officetype: yup.string().required("Office Type Required"),
            // .min(5 , "Minimum 5 charcter" )
            departmentRole: yup.string().required("Department Required"),
            locationRole: yup.string().required("Party Office Location Required"),
            designationRole: yup.string().required("Designation Required"),
            office: yup.string().required("Office Name Required"),
            roleName: yup.string().required("Role Name Required"),
            abbreviation: yup.string().required("Role Abbreviation required"),
            code: yup.string().required("Role Code is required"),
        }),
        onSubmit: (userInputData) => {
            console.log(userInputData);
        },
    });

    const getOfficeLocations = async (id) => {
        let query = `officeType=${id}`;
        try {
            const responseO = await getOfficeLocation(query);
            if (responseO) {
                if (responseO.OfficeLocation) {
                    let data = [];
                    responseO.OfficeLocation.map(x => {
                        x.officeLocationName = x.locationName;
                        data.push({ ...x, locationName: x.locationName, value: x._id, label: `${x.address1}, ${x.address2}, ${x.area.areaName} - ${x.pincode}` })
                    })
                    console.log(data);
                    setOfficeLocation(data);
                }
            }
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        async function getAllOfficeLocation() {
            var responseT;
            try {
                responseT = await getOfficeType();
                if (responseT) {
                    responseT.OfficeTypes.map(x => {
                        x.value = x._id;
                        x.label = x.officeType;
                    })
                    setOfficeType(responseT.OfficeTypes);
                }
            } catch (e) {
                console.log(e);
            }
        }

        getAllOfficeLocation();
    }, []);

    const handleOfficeType = (y) => {
        setOfficeTypes(y);
        getOfficeLocations(y._id);
    };

    const getToLocation = async (val) => {
        if (selected.length !== 0) {
            let ids = [];
            selected.map(x => {
                if (!ids.includes(x._id)) {
                    ids.push(x._id)
                }
            })
            var roleResponse
            try {
                roleResponse = await getAllRoleLocation(ids, officeTypes);
                if (roleResponse) {
                    if (roleResponse.data) {
                        let data = [];
                        roleResponse.data.map(y => {
                            data.push({ ...y, value: y._id, label: `${y.address1}, ${y.address2}, ${y.area.areaName} - ${y.pincode}` })
                        })
                        setTolocation(data);

                    }
                }
            } catch (e) {
                console.log(e);
            }
        } else {
            console.log("object");
        }
    }

    const _noContentRenderer = () => {
        return <div>No Office types.</div>;
    };


    const getRoles = async (id) => {
        setLocationRole(id);
        var roleResponse
        try {
            roleResponse = await getAllRoleData(id._id);
            if (roleResponse) {
                console.log(roleResponse.data, "datadatadatadatadatadatadatadata");
                roleResponse.data.map((x) => {
                    x.value = x._id;
                    x.label = `${(x.department.name)},${(x.designation.name)},${(x.roleName)}`;
                    // x.typeOfOfficeName=`${x.typeOfOffice.officeType}`
                    x.typeOfOfficeName = x.typeOfOffice.officeType;
                    // return 0;
                })
                setRoleList(roleResponse.data);

            }
        } catch (e) {
            console.log(e);
        }
    };
    // useEffect(() => {
    //     getRoleCopy();
    // }, []);

    // const getRoleCopy = async (id) => {
    //     var roleResponse
    //     try {
    //         roleResponse = await getAllRoleData(id);
    //         if (roleResponse) {
    //             if (roleResponse.data) {
    //                 roleResponse.data.map((x) => {
    //                     x.value = x._id;
    //                     x.label = `${x.typeOfOffice.officeType}, ${x.officeLocation.state.stateName}, ${x.officeLocation.city.cityName}, ${x.officeLocation.area.areaName}, ${x.department.name}, ${x.designation.name}, ${x.roleName}`;
    //                     x.typeOfOfficeName = x.typeOfOffice.officeType;
    //                     x.locationName = x.officeLocation.area.areaName;
    //                     x.departmentName = x.department.name;
    //                     x.designationName = x.designation.name;
    //                     x.role = x.roleName
    //                     console.log(x);
    //                     return 0;
    //                 });
    //             }
    //             setRoleList(roleResponse.data);

    //         }
    //     } catch (e) {
    //         console.log(e);
    //     }
    // };
    const roleCancel = () => {
        formik.values.officetype = {};
        setFinal([])
        setOfficeTypes("");
        setLocationRole("");
        setOfficeLocation([]);
        setRoleList([]);
        setTolocation([]);
        setSelected([]);
        setRoleCopy([]);
        setTo([]);
    }
    const roleConfirm = async () => {
        var response

        try {
            response = await createRoleConfirm(final);
            if (response) {
                if (response.data) {
                    formik.values.officetype = {};
                    setFinal([])
                    setOfficeTypes("");
                    setLocationRole("");
                    setOfficeLocation([]);
                    setRoleList([]);
                    setTolocation([]);
                    setSelected([]);
                    setRoleCopy([]);
                    setTo([]);
                    toast.success(response.message);
                    console.log(response.data, "123456");
                }
                // if(response.success.false){}
            }
        } catch (e) {
            toast.error(`${e}`);
            console.log(e);
        }
    };


    const handleToLocation = async () => {
        if (to.length < 0) {
            toast.warning("Please Select the role!");
            return 0;
        }
        let val = to;
        let arrays = [];
        let dataArrays = [];
        val.map(z => {
            let array = [];
            let dataArray = [];
            let datas = []
            selected.map((x) => {
                delete x._id;
                array.push({
                    ...x,
                    officeLocation: z._id,
                    dccId: `${x.typeOfOffice.code}${z.country.code}${z.state.code}${z.city.code}${z.area.code}${x.department.code}${x.designation.code}${x.code}`,
                    dccDescription: `${x.typeOfOffice.abbreviation}${z.country.abbreviation}${z.state.abbreviation}${z.city.abbreviation}${z.area.abbreviation}${x.department.abbreviation}${x.designation.abbreviation}${x.abbreviation}`,
                    typeOfOffice: x.typeOfOffice._id,
                    department: x.department._id,
                    designation: x.designation._id,
                })
                if (datas.includes(x._id)) {
                    let index = dataArray.findIndex(y => {
                        return y.Location === `${z.area.areaName}, ${z.city.cityName}`;
                    })
                    dataArray[index] = {
                        ...dataArray[index], NoofRolesCopied: (dataArray[index].NoofRolesCopied + 1), value: [...dataArray[index].value, {
                            Designation: x.designation.name,
                            Department: x.department.name,
                            Role: x.roleName
                        }]
                    }
                } else {
                    dataArray.push({
                        Location: `${z.area.areaName}, ${z.city.cityName}`, NoofRolesCopied: 1, value: [{
                            Designation: x.designation.name,
                            Department: x.department.name,
                            Role: x.roleName
                        }]
                    })
                }
                datas.push(x._id);
            })
            array.map(x => {
                arrays.push(x)
            })
            dataArray.map(x => {
                dataArrays.push(...dataArray)
            })
        })
        setRoleCopy(dataArrays);
        setFinal(arrays);
        toast.success("Role was copied!")
        console.log(to, arrays);
    }

    const MIN_TABLE_WIDTH = 1000;


    const [details, setDetails] = useState([])
    // const [items, setItems] = useState(usersData)

    const toggleDetails = (index) => {
        const position = details.indexOf(index)
        let newDetails = details.slice()
        if (position !== -1) {
            newDetails.splice(position, 1)
        } else {
            newDetails = [...details, index]
        }
        setDetails(newDetails)
    }


    const fields = [
        { key: 'Location', label: 'Party Office Location', _style: { width: '45%' } },
        { key: 'NoofRolesCopied', _style: { width: '45%' }, },
        {
            key: 'show_details',
            label: '',
            _style: { width: '10%' },
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

    const cancel = () => {
        setLocationRole("");
        setOfficeLocation([]);
        setRoleList([]);
        setSelected("");
        setTo([]);
        setTolocation("")
    }
    const Option = props => {
        return (
            <div style={{ display: "block" }}>
                <components.Option {...props} >
                    <p>{props.data.locationName}</p>
                    <p>{props.data.label}aaaa</p>
                </components.Option>
            </div>
        );
    }
    return (
        <div>
            <div style={{ padding: "4%" }}>
                <CCard className={"Roless-card-container-1"}>
                    <CRow style={{
                        padding: "10px",
                        paddingLeft: "20px",
                        paddingRight: "20px",
                    }}>
                        <CCol md="10" className={"role-heading-1"}>
                            Copy From
                                </CCol>
                    </CRow>

                    <CForm autoComplete="off" onSubmit={formik.handleSubmit}>
                        <CRow className={"role-form-container-1"}>
                            <CCol md="12" lg="12" sm="12">
                                <CRow className={"seperator-1"}>
                                    <CCol md="5">
                                        <CLabel className={"form-labels-1"}>
                                            Type of Party Office
                                                </CLabel>
                                        <Select
                                            name={"officetype"}
                                            value={officeTypes}
                                            onChange={handleOfficeType}
                                            options={officeType}
                                            placeholder="Select Office Type"
                                        />
                                        {formik.errors.officetype &&
                                            formik.values.officetype === "" ? (
                                                <div className="text-danger">
                                                    {" "}
                                                    {formik.errors.officetype}
                                                </div>
                                            ) : null}
                                    </CCol>
                                    <CCol md="5">
                                        <CLabel className={"form-labels-1"}>
                                            Party Office Location{" "}
                                        </CLabel>
                                        <Select
                                            name={"locationRole"}
                                            value={locationRole}
                                            options={officeLocation}
                                            components={{ Option }}
                                            onChange={(e) => getRoles(e)}
                                            placeholder={"Select Party Office Location..."}

                                        />
                                        {formik.errors.locationRole &&
                                            formik.values.locationRole === "" ? (
                                                <div className="text-danger">
                                                    {" "}
                                                    {formik.errors.locationRole}
                                                </div>
                                            ) : null}
                                    </CCol>

                                </CRow>

                                <CRow className={"seperator-1"}>
                                    <CCol md="5">
                                        <CLabel className={"form-labels-1"}>
                                            List of Roles
                                                </CLabel>
                                        <MultiSelect
                                            type='checkbox'
                                            isMulti
                                            closeMenuOnSelect={false}
                                            onChange={(e) => setSelected(e)}
                                            isMulti
                                            options={RoleList}
                                            isChecked
                                            value={selected}
                                            placeholder={"Select Role..."}
                                            labelledBy={"Select"}
                                        />

                                        {formik.errors.officetype &&
                                            formik.values.officetype === "" ? (
                                                <div className="text-danger">
                                                    {" "}
                                                    {formik.errors.officetype}
                                                </div>
                                            ) : null}

                                    </CCol>
                                    <CRow style={{ padding: '3%' }}>
                                        <CCol>
                                            <CButton shape={'pill'} className={'saveBtn'} onClick={() => getToLocation(selected)}>Next</CButton>
                                        </CCol>
                                    </CRow>
                                </CRow>

                                <CCol md="10"></CCol>
                            </CCol>
                        </CRow>

                        <CRow style={{
                            padding: "10px",
                            paddingLeft: "20px",
                            paddingRight: "20px",
                        }}>
                            <CCol md="10" className={"role-heading-1"}>
                                Copy To
                                     </CCol>
                        </CRow>

                        <CRow className={"seperator-1"} style={{ paddingLeft: '2%' }}>
                            <CCol md="5">
                                <CLabel className={"form-labels-1"}>
                                    Copied To{" "}
                                </CLabel>   
                                <MultiSelect
                                    options={toLocation}
                                    onChange={(e) => setTo(e)}
                                    value={to}
                                    labelledBy={"Select Copy To Location"}
                                    
                                />
                                {formik.errors.locationRole &&
                                    formik.values.locationRole === "" ? (
                                        <div className="text-danger">
                                            {" "}
                                            {formik.errors.locationRole}
                                        </div>
                                    ) : null}
                            </CCol>
                        </CRow>
                        <CRow style={{ paddingLeft: '150px' }}>
                            <div className="centerd-7">
                                <CCol md="10">
                                    <CButton
                                        className={"saveBtn"}
                                        disabled={final.length > 0 ? false : true}
                                        onClick={roleConfirm}
                                    >
                                        Confirm
                                            </CButton>
                                </CCol>
                            </div>

                            <div className="centerd-8">
                                <CCol md="10">
                                    <CButton
                                        className={"saveBtn"}
                                        onClick={handleToLocation}
                                    >
                                        Copy
                                            </CButton>
                                </CCol>
                            </div>
                            <div className="center-6">
                                <CCol md="10">
                                    <CButton
                                        shape={"pill"}
                                        className={"cancelBtn"}
                                        onClick={roleCancel}


                                    >
                                        {" "}
                                                Cancel
                                            </CButton>
                                </CCol>
                            </div>
                        </CRow>
                        {final.length !== 0 ? (
                            <CRow style={{ padding: '4%' }}>
                                <CDataTable
                                    items={roleCopy}
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
                                                        <CButton
                                                            color="primary"
                                                            variant="outline"
                                                            shape="square"
                                                            size="sm"
                                                            onClick={() => { toggleDetails(index) }}
                                                        >
                                                            {details.includes(index) ? 'Hide' : 'Show'}
                                                        </CButton>
                                                    </td>
                                                )
                                            },
                                        'details':
                                            (item, index) => {
                                                return (
                                                    <CCollapse show={details.includes(index)}>
                                                        <CCardBody>
                                                            <CRow>
                                                                <CCol><b>Department</b></CCol>
                                                                <CCol><b>Designation</b></CCol>
                                                                <CCol><b>Role</b></CCol>
                                                                <CCol><b>Action</b></CCol>
                                                            </CRow>
                                                        </CCardBody>
                                                        {roleCopy[index].value.map(x => (
                                                            <CCardBody>
                                                                <CRow>
                                                                    <CCol>{x.Department}</CCol>
                                                                    <CCol>{x.Designation}</CCol>
                                                                    <CCol>{x.Role}</CCol>
                                                                    <CCol style={{ fontSize: "1.15rem", }}>

                                                                        <i

                                                                            style={{
                                                                                left: "774px",
                                                                                color: "#e85654",
                                                                            }}
                                                                            className="fas fa-trash"
                                                                        ></i>
                                                                    </CCol>
                                                                </CRow>
                                                            </CCardBody>
                                                        ))}
                                                    </CCollapse>
                                                )
                                            }
                                    }}
                                />
                            </CRow>
                        ) : (null)}
                    </CForm>
                </CCard>
            </div>
            <ToastContainer
                className="toast--warning   "
                style={{ width: "300px" }}
            />
        </div >
    );
}

export default RoleCopy;

