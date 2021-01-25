import React, { useState, useEffect } from "react";
import {
  CRow,
  CCol,
  CButton,
  CBadge,
  CPagination,
  CDataTable,
} from "@coreui/react";
import { AutoSizer, Table, Column } from "react-virtualized";
import Select from "react-select";
import Edit from "../../images/image 2.svg";
import Remove from "../../images/image 15.svg";
import { Card } from "@material-ui/core";
import "./TerminateEmployee.css";
import {
  getAllEmployeeMovement,
  deleteEmployeeMovement,
} from "../../../services/ApiService";
import { toast, ToastContainer } from "react-toastify";
import ConfirmDelete from "../confirmMessage/confirmDelete";

const ViewSuspendEmployee = (props) => {
  const [OfficeDetails, setTrasnferEmployee] = useState([]);
  const [limit, setLimit] = useState({ value: 5, label: 5 });
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [deleteId, setDeleteId] = useState({ id: "", show: false, name: "" });
  useEffect(() => {
    getPromote();
  }, [limit, page]);

  const getPromote = async () => {
    try {
      const promote = await getAllEmployeeMovement(`movementType=TE`);
      if (promote) {
        if (promote.data) {
          let array = [];
          promote.data.map((x) => {
            array.push({
              ...x,
              value: x,
              office: x.roleId.typeOfOffice.officeType,
              locationName: x.roleId.officeLocation.locationName,
              location: `${x.roleId.officeLocation.state.stateName}, ${x.roleId.officeLocation.city.cityName}, ${x.roleId.officeLocation.area.areaName}`,
              departmentName: x.roleId.department.name,
              designationName: x.roleId.designation.name,
              roleName: x.roleId.roleName,
              enteredBy: "Admin",
              employeeName: x.employeeId.firstName,
              createdAt: dateConvert(x.createdAt),
              dor: x.dor,
              doj: x.doj,
            });
          });
          setTrasnferEmployee(array);
          // setTotalPage(promote.data.totalPages);
        }
      }
    } catch (e) {
      console.log(e);
    }
  };
  const dateConvert = (val) => {
    var data = new Date(val);
    return `${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`;
  };

  const deletePromote = async () => {
    try {
      const deletePromotes = await deleteEmployeeMovement(deleteId.id);
      if (deletePromotes) {
        if (deletePromotes.success === true) {
          cancelConfirmDlete();
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

  const _noContentRenderer = () => {
    return <div>No Termination's.</div>;
  };

  const MIN_TABLE_WIDTH = 2000;
  const MIN_TABLE_HEIGHT = 350;
  const [details, setDetails] = useState([]);

  const fields = [
    { key: "office", label: "Type of Party Office", _style: { width: "150px" } },
    { key: "locationName", label: "Location Name", _style: { width: "150px" } },
    { key: "location", label: "Party Office Location", _style: { width: "300px" } },
    { key: "departmentName", _style: { width: "300px" } },
    { key: "designationName", _style: { width: "200px" } },
    { key: "roleName", _style: { width: "200px" } },
    { key: "employeeName", label: "Party Member", _style: { width: "150px" } },
    { key: "dor", _style: { width: "100px" } },
    { key: "enteredBy", _style: { width: "150px" } },
    { key: "createdAt", _style: { width: "100px" } },
    {
      label: "Action",
      key: "show_details",

      _style: { width: "1%" },
      sorter: false,
      filter: false,
    },
  ];

  const getBadge = (status) => {
    switch (status) {
      case "Active":
        return "success";
      case "Inactive":
        return "secondary";
      case "Pending":
        return "warning";
      case "Banned":
        return "danger";
      default:
        return "primary";
    }
  };
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

  const deletemodal = (id,name) => {
    setDeleteId({ id: id, show: true, name: name });
  };
  const cancelConfirmDlete = () => {
    setDeleteId({ id: "", show: false, name: "" });
  };
  return (
    <div>
      <ConfirmDelete
        details={deleteId}
        confirm={deletePromote}
        cancel={cancelConfirmDlete}
      />
      <Card className={"Role-card-container-3"}>
        <CRow style={{ padding: "15px" }}>
          <CCol md="12" className={"role-heading-3"}>
            List Terminated Party Members{" "}
          </CCol>
        </CRow>
        <CRow style={{ padding: "15px" }}>
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
              items={OfficeDetails}
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
                status: (item) => (
                  <td>
                    <CBadge color={getBadge(item.status)}>{item.status}</CBadge>
                  </td>
                ),
                show_details: (item, index) => {
                  return (
                    <td className="py-2">
                      <CRow>
                        <CCol style={{ fontSize: "1.15rem" }} md="12">
                          <i
                            onClick={() => {
                              toggleDetails(index);
                            }}
                          ></i>
                          <i
                            style={{
                              marginRight: "5px",
                              color: "#3480e2",
                            }}
                            onClick={() => props.change(OfficeDetails[index])}
                            class="fas fa-edit"
                          ></i>
                          <i
                            onClick={() =>
                              deletemodal(OfficeDetails[index]._id , `${OfficeDetails[index].employeeName} Termination Details`)
                            }
                            style={{
                              marginLeft: "5px",
                              color: "#e85654",
                            }}
                            class="fas fa-trash"
                          ></i>
                        </CCol>
                      </CRow>
                    </td>
                  );
                },
                details: (item, index) => {},
              }}
            />
          </CCol>
        </CRow>
     
 
      </Card>
      <ToastContainer autoClose={2000}></ToastContainer>
    </div>
  );
};

export default ViewSuspendEmployee;
