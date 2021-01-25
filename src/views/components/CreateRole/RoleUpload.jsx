import { ExportCSV } from "../BulkUpload/ExportCSV.jsx";
import { CCol, CInput, CLabel, CRow } from "@coreui/react";
import React, { useState, useEffect } from "react";
import Select from "react-select";
import * as XLSX from "xlsx";
import readXlsxFile from "read-excel-file";
import {
  getAllDepartment,
  getDesignation,
  getOfficeLocation,
  getOfficeType,
  RoleUploadData,
} from "../../../services/ApiService";
import { toast } from "react-toastify";

const RoleUpload = () => {
  const reader = new FileReader();
  const [files, setFiles] = useState({});
  const [fileName, setFileName] = useState("");
  const [customers, setCustomers] = useState([]);
  const [excelData, setExcelData] = useState([]);
  const [officeType, setOfficeType] = useState([]);
  const [officeLocation, setOfficeLocation] = useState([]);
  const [department, setDepartment] = useState([]);
  const [designation, setDesignation] = useState([]);
  const [templateData, setTemplateData] = useState([]);

  const capitalize = (val) => {
    var string = val;
    return `${string[0].toUpperCase()}${string.slice(1)}`;
  };

  const lowerCaseLetters = (val) => {
    var string = val;
    return `${string.toLowerCase()}`;
  };

  const upperCaseLetter = (val) => {
    var string = val;
    return `${string.toUpperCase()}`;
  };

  useEffect(() => {
    getAllOfficeTypes();
  }, []);

  const getAllOfficeTypes = async () => {
    try {
      const response = await getOfficeType();
      if (response) {
        if (response.OfficeTypes) {
          setOfficeType(response.OfficeTypes);
        }
      }
    } catch (e) {
      console.log(e);
    }
    try {
      const responseL = await getOfficeLocation();

      if (responseL) {
        if (responseL.OfficeLocation) {
          setOfficeLocation(responseL.OfficeLocation);
        }
      }
    } catch (e) {
      console.log(e);
    }
    try {
      const responseD = await getAllDepartment();
      if (responseD) {
        if (responseD.department) {
          setDepartment(responseD.department);
          console.log(responseD.department);
        }
      }
    } catch (e) {
      console.log(e);
    }
    try {
      const responseDe = await getDesignation();
      if (responseDe) {
        if (responseDe.data) {
          setDesignation(responseDe.data);
          console.log(responseDe.data);
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (
      officeType.length > 0 &&
      officeLocation.length > 0 &&
      department.length > 0 &&
      designation.length > 0
    ) {
      setOfficeTypeDatas();
    }
  }, [officeType, officeLocation, department, designation]);

  const setOfficeTypeDatas = () => {
    let data = [
      [
        "S_NO",
        "Office_Type",
        "Office_Code",
        "",
        "Office_Id",
        "",
        "S_NO",
        "Country_Name",
        "State_Name",
        "City_Name",
        "Area_Name",
        "Pincode",
        "Address_1",
        "Address_2",
        "",
        "Office_Location_Id",
        "",
        "S_NO",
        "Department_Name",
        "Department_Code",
        "Department_Abbreviation",
        "",
        "S_NO",
        "Designation_Name",
        "Designation_Code",
        "Designation_Abbreviation",
        "",
      ],
      [],
    ];

    let length = 0;
    length = officeType.length;
    length = length < officeLocation.length ? officeLocation.length : length;
    length = length < department.length ? department.length : length;
    length = length < designation.length ? designation.length : length;

    console.log(length, "length");

    for (let index = 0; index < length; index++) {
      data.push([
        officeType[index] ? index + 1 : "",
        officeType[index] ? officeType[index].officeType : "",
        officeType[index] ? officeType[index].code : "",
        "",
        officeType[index] ? officeType[index]._id : "",
        "",
        officeLocation[index] ? index + 1 : "",
        officeLocation[index] ? officeLocation[index].country.countryName : "",
        officeLocation[index] ? officeLocation[index].state.stateName : "",
        officeLocation[index] ? officeLocation[index].city.cityName : "",
        officeLocation[index] ? officeLocation[index].area.areaName : "",
        officeLocation[index] ? officeLocation[index].area.pincode : "",
        officeLocation[index] ? officeLocation[index].address1 : "",
        officeLocation[index] ? officeLocation[index].address2 : "",
        "",
        officeLocation[index] ? officeLocation[index]._id : "",
        "",
        department[index] ? index + 1 : "",
        department[index] ? department[index].name : "",
        department[index] ? department[index].code : "",
        department[index] ? department[index].abbreviation : "",
        "",
        designation[index] ? index + 1 : "",
        designation[index] ? designation[index].name : "",
        designation[index] ? designation[index].code : "",
        designation[index] ? designation[index].abbreviation : "",
      ]);
    }

    setTemplateData(data);
  };

  useEffect(() => {
    var f = files;
    if (f.name) {
      readXlsxFile(f).then((rows) => {
        let keys = rows[1];
        rows.shift();
        rows.shift();
        if (rows.length > 0) {
          let datas = [];
          let data = {};
          rows.map((x, j) => {
            x.map((y, i) => {
              data[keys[i]] = y;
            });
            data.sNo = j + 1;
            datas.push(data);
          });
          console.log(datas);
          setExcelData(datas);
        }
      });
    }
  }, [files]);

  useEffect(() => {
    let custs = [
      [
        "Office_Type",
        "Office_Type_Id",
        "Office_Location_Area",
        "Office_Location_Pincode",
        "Office_Location_Id",
        "Department_Name",
        "Department_Code",
        "Department_Abbreviation",
        "Designation_Name",
        "Designation_Code",
        "Designation_Abbreviation",
        "Role_Name",
        "Role_Code",
        "Role_Abbreviation",
      ],
      [],
    ];
    setCustomers(custs);
    setFileName("RoleCreation");
  }, []);

  useEffect(() => {
    if (excelData.length > 0) {
      const bulkUpload = async () => {
        try {
          const response = await RoleUploadData(excelData);
          if (response) {
            if (response.data) {
              toast.success("Role copy was posted successfully");
            }
          }
        } catch (e) {
          console.log(e);
        }
      };
      bulkUpload();
    }
  }, [excelData]);

  return (
    <div className="OfficeLocationUpload">
      <CRow>
        <CCol className={"role-heading-6"}>Role Bulk Upload</CCol>
      </CRow>
      <CRow style={{ marginTop: "40px" }}>
        <CCol md={"6"}>
          <CRow>
            <CCol md={12}>
              <ExportCSV
                csvData={[customers, templateData]}
                fileName={fileName}
              />
            </CCol>
          </CRow>
        </CCol>
        <CCol md={"6"}>
          <CRow
            onClick={() => {
              document.getElementById("uploadRoleTemplate").click();
            }}
          >
            <CCol md={1}>
              <span style={{ fontSize: "20px" }}>
                <i class="fas fa-upload"></i>
              </span>
            </CCol>
            <CCol md={6}>
              <CLabel
                style={{ position: "relative", right: "25px", top: "5px" }}
                className={"form-labels-6"}
              >
                Upload Template
              </CLabel>
              <CInput
                id={"uploadRoleTemplate"}
                style={{ display: "none" }}
                type={"file"}
                onChange={(e) => {
                  setFiles(e.target.files[0]);
                }}
                accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
              />
            </CCol>
          </CRow>
        </CCol>
      </CRow>
      {/* application/vnd.openxmlformats-officedocument.spreadsheetml.sheet */}
    </div>
  );
};

export default RoleUpload;
