import React, { useEffect, useState } from "react";
import { CRow, CCol,CPagination,CDataTable,CBadge, CButton, CInput, CCard } from "@coreui/react";
import { useFormik } from "formik";
import * as yup from "yup";
import Select from 'react-select'
import { Card } from "@material-ui/core";
import "./Transfer.css";
import {
  getOfficeType,
  getOfficeLocation,
  getAllDepartment,
  getAllRole,
  getAllEmployeeMovement,
  deleteEmployeeMovement,
} from "../../../services/ApiService";
import { toast, ToastContainer } from "react-toastify";
import ConfirmDelete from "../confirmMessage/confirmDelete";

const PromoteEmployees = (props) => {
  const [officeType, setOfficeType] = useState([]);
  const [officeLocation, setOfficeLocation] = useState([]);
  const [department, setDepartment] = useState([]);
  const [roleList, setRoleList] = useState([]);
  const [deleteId, setDeleteId] =useState({id:"", show:false})
  const [promoteEmployee, setPromoteEmployee] = useState([]);
  const [transferEmployee, setAllPromoteEmployee] = useState([]);

  useEffect(() => {
    getPromote();
  }, []);

  const getPromote = async () => {
    try {
      const promote = await getAllEmployeeMovement(`movementType=TR`);
      if (promote) {
        if (promote.data) {
          let Datas = [];
          promote.data.map((x) => {
            Datas.push({
              ...x,
              value: x,
              office: x.toRoleId.typeOfOffice.officeType,
              locationName: x.toRoleId.officeLocation.locationName,
              location: `${x.toRoleId.officeLocation.state.stateName}, ${x.toRoleId.officeLocation.city.cityName}, ${x.toRoleId.officeLocation.area.areaName}`,
              departmentName: x.toRoleId.department.name,
              designationName: x.toRoleId.designation.name,
              roleName: x.toRoleId.roleName,
              enteredBy: "Admin",
              employeeName: x.employeeId.firstName,
              createdAt: dateConvert(x.createdAt),
              dor: x.dor,
              doj: x.doj
            })
            return 0;
          });
          setAllPromoteEmployee(Datas);
          setPromoteEmployee(Datas);
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  const dateConvert = (val) => {
    var data = new Date(val);
    console.log(roleList, department, officeLocation, officeType);
    return `${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`;
  };

  const deletePromote = async (id) => {
    try {
      const deletePromotes = await deleteEmployeeMovement(deleteId.id);
      if (deletePromotes) {
        if (deletePromotes.success === true) {
          toast.success(deletePromotes.message);
         setTimeout(() => {
          setDeleteId(false) 
         }, 10);
        }
      }
    } catch (e) {
      toast.error(e);
      console.log(e);
    }
  };

  useEffect(() => {
    async function getAllData() {
      var responseO, responseT, responseL;
      try {
        const roleResponse = await getAllRole();
        if (roleResponse.data) {
          setRoleList(roleResponse.data);
        }
      } catch (e) {
        console.log(e);
      }
      try {
        responseO = await getOfficeLocation();

        if (responseO) {
          setOfficeLocation(responseO.OfficeLocation);
        }
      } catch (e) {
        console.log(e);
      }
      try {
        responseT = await getOfficeType();

        if (responseT) {
          setOfficeType(responseT.OfficeTypes);
        }
      } catch (e) {
        console.log(e);
      }
      try {
        responseL = await getAllDepartment();
        if (responseL) {
          setDepartment(responseL.department);
          console.log(responseL.department);
        }
      } catch (e) {
        console.log(e);
      }
    }

    getAllData();
  }, []);

  const [details, setDetails] = useState([])
  

  const fields = [
    { key: 'locationName',label:'Location Name', _style: { width: '150px' } },
    { key: 'Party Member', label: "Party Member", _style: { width: '150px' } },
    { key: 'office', label: "Type Of Party Office", _style: { width: '250px' } },
    { key: 'location', label: "Party Office Location",style: { width: '300px' } },
    { key: 'departmentName', _style: { width: '250px' } },
    { key: 'designationName', _style: { width: '250px' } },
    { key: 'roleName', _style: { width: '300px' } },
    { key: 'dor', _style: { width: '100px' } },
    { key: 'doj', _style: { width: '100px' } },
    { key: 'enteredBy', _style: { width: '150px' } },
    { key: 'createdAt', _style: { width: '150px' } },
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

const deletemodal= (id)=>{
  setDeleteId({id:id, show:true})
}
 const cancelConfirmDlete =()=>{
   setDeleteId({id:"", show:false})
 }

  return (
    <div>
      <ConfirmDelete details={deleteId} confirm={deletePromote}  cancel={cancelConfirmDlete}/>
      <Card className={"Role-card-container-3"}>
        <CRow
          style={{ padding: "15px" }}
        >
          <CCol md="12" className={"role-heading-2"}>
            List of Transfered Party Member{" "}
          </CCol>
        </CRow>
        <CRow style={{ padding: "15px"}}>
          <CCol md="10">
            <CButton
              className={"saveBtn"}
              style={{ marginLeft: "16px" }}
              onClick={() => {
                props.change();
              }}
            >
              + Add
            </CButton>
          </CCol>
        
        </CRow>   
        <CRow>
              <CCol>
                
              <CDataTable
              size={1500}
                items={promoteEmployee}
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
                          <CRow>
                            <CCol style={{ fontSize: "1.15rem" }} md="12">
                              <i onClick={() => { toggleDetails(index) }}></i>
                              <i
                                style={{
                                  marginRight: "5px",
                                  color: "#3480e2",
                                }}
                                onClick={() =>
                                  props.change(promoteEmployee[index])
                                }
                                className="fas fa-edit"
                              ></i>
                              <i
                                onClick={() => deletemodal(promoteEmployee[index]._id,`${promoteEmployee[index].employeeName} Transfer Details`)}
                                style={{
                                  marginLeft: "5px",
                                  color: "#e85654",
                                }}
                                className="fas fa-trash"
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
              </CCol>
            </CRow>
           
       
        
      </Card>
      <ToastContainer autoClose={1000}></ToastContainer>
    </div>
  );
};

export default PromoteEmployees;
