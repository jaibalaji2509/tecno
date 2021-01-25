import React, { useEffect, useState, useContext } from "react";
import {
  CRow,
  CCol,
  CPagination,
  CDataTable,
  CBadge,
  CButton,
  CInput,
  CCard,
} from "@coreui/react";
import Select from "react-select";
import { AutoSizer, Table, Column } from "react-virtualized";
import Edit from "../../images/image 2.svg";
import Remove from "../../images/image 15.svg";
import { Card } from "@material-ui/core";
import { AuthContext } from "../../../services/auth/AuthContext";
import "./SuspendEmployee.css";
import {
  deleteSuspendEmployee,
  getAllEmployeeMovement,
  deleteEmployeeMovement,
} from "../../../services/ApiService";
import ConfirmDelete from "../confirmMessage/confirmDelete";
import { toast } from "react-toastify";
const ViewSuspendEmployee = (props) => {
  const [suspendEmployeeSchema, setSuspendEmployeeSchema] = useState([]);
  const [limit, setLimit] = useState({ value: 5, label: 5 });
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [deleteId, setDeleteId] = useState({ id: "", show: false });
  const _noContentRenderer = () => {
    return <div>No Suspends.</div>;
  };

  const MIN_TABLE_WIDTH = 2000;

  const MIN_TABLE_HEIGHT = 300;

  const capitalize = (x) => {
    let s = x.toLowerCase();
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  const dateConvert = (dates) => {
    var date = new Date(dates);
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
  };

  useEffect(() => {
    getSuspend();
  }, []);

  const getSuspend = async () => {
    try {
      const roleResponse = await getAllEmployeeMovement(`movementType=S`);
      if (roleResponse) {
        if (roleResponse.data) {
          let array = [];
          roleResponse.data.map((x) => {
            x.OfficeName = x.roleId.officeLocation.locationName;
            x.value = x._id;
            x.location = `
            ${capitalize(
              x.roleId.officeLocation.state.stateName
            )}, ${capitalize(
              x.roleId.officeLocation.country.countryName
            )}, ${capitalize(
              x.roleId.officeLocation.city.cityName
            )}, ${capitalize(x.roleId.officeLocation.area.areaName)}`;
            x.department = `${capitalize(x.roleId.department.name)},`;
            x.officeType = `${capitalize(x.roleId.typeOfOffice.officeType)},`;
            x.designation = `${capitalize(x.roleId.designation.name)},`;
            x.role = `${capitalize(x.roleId.roleName)},`;
            x.description = `${capitalize(x.roleId.dccDescription)},`;
            x.descriptionId = `${capitalize(x.roleId.dccId)},`;
            x.name = `${capitalize(x.roleId.dccId)},`;
            x.employee = `${capitalize(x.employeeId.firstName)},`;
            x.reason = x.reason.label || x.reason;
            array.push(x);
            return 0;
          });
          setSuspendEmployeeSchema(roleResponse.data);
          // setTotalPage(roleResponse.data.totalPages);
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  const Delete = async (id) => {
    try {
      const deleteSuspends = await deleteEmployeeMovement(deleteId.id);
      if (deleteSuspends) {
        if (deleteSuspends.success === true) {
          getSuspend();
          toast.success(deleteSuspends.message);
          setTimeout(() => {
            cancelConfirmDlete();
          }, 10);
        }
      }
    } catch (e) {
      toast.error(e);
      console.log(e);
    }
  };

  const dateDuration = (val) => {
    var date1 = new Date(val);
    var date2 = new Date(Date.now());
    var Difference_In_Time = date2.getTime() - date1.getTime();
    var Difference_In_Days = Math.floor(
      Difference_In_Time / (1000 * 3600 * 24)
    );
    return Difference_In_Days;
  };
  const [details, setDetails] = useState([]);

  const fields = [
    { key: "OfficeName", label: "Location Name", _style: { width: "200px" } },
    { key: "Party Member", label: "Party Member",_style: { width: "150px" } },
    { key: "officeType", label: "Type Of Party Office",_style: { width: "150px" } },
    { key: "location", label: "Party Office Location",_style: { width: "300px" } },
    { key: "department", _style: { width: "150px" } },
    { key: "designation", _style: { width: "150px" } },
    { key: "descriptionId", _style: { width: "150px" } },
    { key: "reason", _style: { width: "150px" } },
    { key: "remarks", _style: { width: "150px" } },
    { key: "dor", _style: { width: "150px" } },
    { key: "doj", _style: { width: "150px" } },
    { key: "duration", _style: { width: "150px" } },
    { key: "createdAt", _style: { width: "200px" } },
    { key: "createdBy", _style: { width: "150px" } },
    // { key: 'stateName', _style: { width: '10%' } },
    // { key: 'cityName', _style: { width: '10%' } },
    // { key: 'areaName', _style: { width: '10%' } },
    // { key: 'pincode', _style: { width: '10%' } },
    // {
    //   label: 'Action', key: 'Action', _style: { width: '20%' },

    //   class: "fas fa-trash"

    // },
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

  const deletemodal = (id, name) => {
    setDeleteId({ id: id, show: true, name: name });
  };
  const cancelConfirmDlete = () => {
    setDeleteId({ id: "", show: false, name: "" });
  };

  return (
    <div>
      <ConfirmDelete
        details={deleteId}
        confirm={Delete}
        cancel={cancelConfirmDlete}
      />
      <Card className={"Role-card-container-3"}>
        <CRow style={{ padding: "15px" }}>
          <CCol md="12" className={"role-heading-2"}>
            List of Suspended Party Members{" "}
          </CCol>
        </CRow>

        <CRow style={{ padding: "15px" }}>
          <CCol md="10">
            <CButton
              className={"saveBtn"}
              style={{ marginLeft: "16px" }}
              onClick={() => {
                props.change({});
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
              items={suspendEmployeeSchema}
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
                      {/* <CButton
                            color="primary"
                            variant="outline"
                            shape="square"
                            size="sm"
                            onClick={() => { toggleDetails(index) }}
                          >
                            {details.includes(index) ? 'Hide' : 'Show'}
                          </CButton> */}
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
                            onClick={() =>
                              props.change(suspendEmployeeSchema[index])
                            }
                            class="fas fa-edit"
                          ></i>
                          <i
                            onClick={() =>
                              deletemodal(
                                suspendEmployeeSchema[index]._id,
                                `${suspendEmployeeSchema[index].employee} Suspend Details`
                              )
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
    </div>
  );
};

export default ViewSuspendEmployee;
