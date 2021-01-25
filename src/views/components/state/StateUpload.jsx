import { areaUpload } from "../../../services/ApiService";
import { ExportCSV } from "../BulkUpload/ExportCSV.jsx";
import { CButton, CCol, CInput, CLabel, CRow } from "@coreui/react";
import React, { useState, useEffect } from "react";
import Select from "react-select";
import * as XLSX from "xlsx";
import readXlsxFile from "read-excel-file";
import BulkUpload from "../BulkUpload/BulkUpload";

const RoleUpload = () => {
  const reader = new FileReader();
  const [files, setFiles] = useState({});
  const [fileName, setFileName] = useState("");
  const [customers, setCustomers] = useState([]);
  const [excelData, setExcelData] = useState([]);

  const capitalize = (val) => {
    var string = val;
    return `${string[0].toUpperCase()}${string.slice(1)}`;
  }

  const lowerCaseLetters = (val) => {
    var string = val;
    return `${string.toLowerCase()}`;
  }

  const upperCaseLetter = (val) => {
    var string = val;
    return `${string.toUpperCase()}`;
  }

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
          rows.map((x,j) => {
            x.map((y, i) => {
              data[keys[i]] = y;
            });
            data.sNo = (j+1);
            datas.push(data);
          });
          setExcelData(datas);
        }
      });
    }
  }, [files]);



  const uploadBulk = async () => {
    try {
      const response = await areaUpload(excelData);
      if (response) {
        if (response.data) {
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    let custs = [
      [
        "Country_Name",
        "Country_Code",
        "Country_Abbreviation",
        "State_Name",
        "State_Code",
        "State_Abbreviation",
        "City_Name",
        "City_Code",
        "City_Abbreviation",
        "Area_Name",
        "Area_Code",
        "Area_Abbreviation",
        "Pincode"
      ],
      []
    ];

    setCustomers(custs);
    setFileName("AreaLibrary");
  }, []);

  return (
    <div className="OfficeLocationUpload">
      <CRow>
        <CCol className={"role-heading-6"}>Location Bulk Upload</CCol>
      </CRow>
      <CRow style={{ marginTop: "40px" }}>
        <CCol md={"6"}>
          <CRow>
            <CCol md={12}>
              <ExportCSV csvData={[customers]} fileName={fileName} />
            </CCol>
          </CRow>
        </CCol>
        <CCol md={"6"}>
          <CRow onClick={() => { document.getElementById("uploadAreaTemplate").click() }}>
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
                id={"uploadAreaTemplate"}
                style={{ display: 'none' }}
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
      <CRow style={{paddingTop: '50px'}}>
            <CCol md={6}></CCol>
            <CCol md={6} >
              <CButton onClick={uploadBulk} className={'saveBtn'}>Confirm</CButton>
            </CCol>
          </CRow>
      {/* application/vnd.openxmlformats-officedocument.spreadsheetml.sheet */}
    </div>
  );
};

export default RoleUpload;
