import {
  getArea,
  getAreaSchema,
  getOfficeLocation,
  getOfficeType,
  locationUpload,
} from "../../../services/ApiService";
import { ExportCSV } from "../BulkUpload/ExportCSV.jsx";
import { CCol, CInput, CLabel, CRow,CButton } from "@coreui/react";
import React, { useState, useEffect } from "react";
import Select from "react-select";
import * as XLSX from "xlsx";
import "./Office.css";
import readXlsxFile from "read-excel-file";

const OfficeLocationUpload = () => {
  const reader = new FileReader();
  const [area, setArea] = useState([]);
  const [areaData, setAreaData] = useState([]);
  const [files, setFiles] = useState({});
  const [fileName, setFileName] = useState("");
  const [selected, setSelected] = useState({});
  const [customers, setCustomers] = useState([]);
  const [excelDatas, setExcelDatas] = useState([]);
  const [officeTypes, setOfficeTypes] = useState([]);
  const [invalidData, setInvalidData] = useState([]);
  const [officeTypeDetails, setOfficeTypeDetails] = useState({
    officeType: "",
    code: "",
    id: "",
  });

  useEffect(() => {
    getAllOfficeTypes();
  }, []);

  useEffect(() => {
    var f = files;
    if (f.name) {
      readXlsxFile(f).then((rows) => {
        setOfficeTypeDetails({
          officeType: rows[2][1],
          code: rows[3][1],
          id: rows[4][1],
        });
        let keys = rows[5];
        for (var i = 0; i <= 5; i++) {
          rows.shift();
        }
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
          setExcelDatas(datas);
        }
      });
    }
  }, [files]);

  const uploadBulk = async () => {
    if (excelDatas.length > 0) {
      let data = {
        OfficeId: officeTypeDetails.id,
        data: excelDatas,
      };
      try {
        const response = await locationUpload(data);
        if (response) {
          if (response.data) {
            setInvalidData(response.inValidData);
          }
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  const getAllOfficeTypes = async () => {
    try {
      const response = await getOfficeType();
      if (response) {
        if (response.OfficeTypes) {
          response.OfficeTypes.map((x) => {
            x.value = x._id;
            x.label = x.officeType;
          });
          setOfficeTypes(response.OfficeTypes);
        }
      }
    } catch (e) {
      console.log(e);
    }

    try {
      const response = await getAreaSchema();
      if (response) {
        if (response.Area) {
          setArea(response.Area);
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    let data = [
      [],
      ["OfficeType", selected.officeType],
      ["officeCode", selected.code],
      ["officeId", selected._id],
      [],
    ];
    let custs = [
      ["Property", "Value"],
      ...data,
      ["Address_1", "Address_2", "Area_Id", "Area_Name", "Pincode"],
    ];

    let data2 = [
      ["Area Details"],
      [
        "S.No",
        "Country Name",
        "State Name",
        "City Name",
        "Area Name",
        "Pincode",
        "",
        "Area Id",
      ],
      [],
    ];

    area.map((x, i) => {
      console.log(i, "iiiiiiiii");
      data2.push([
        i + 1,
        x.country.countryName,
        x.state.stateName,
        x.city.cityName,
        x.areaName,
        x.pincode,
        "",
        x._id,
      ]);
    });

    setCustomers(custs);
    setAreaData(data2);
    setFileName("OfficeLocation");
  }, [selected]);

  return (
    <div className="OfficeLocationUpload">
      <CRow>
        <CCol className={"role-heading-6"}>Party Office Location Bulk Upload</CCol>
      </CRow>
      <CRow style={{ marginTop: "40px" }}>
        <CCol md={5}>
          <CLabel className={"form-labels-6"}>Office Types</CLabel>
          <Select
            options={officeTypes}
            onChange={(e) => {
              setSelected(e);
            }}
          />
        </CCol>
      </CRow>
      <CRow style={{ marginTop: "40px" }}>
        <CCol md={"6"}>
          <CRow>
            <CCol md={12}>
              <ExportCSV csvData={[customers, areaData]} fileName={fileName} />
            </CCol>
          </CRow>
        </CCol>
        <CCol md={"6"}>
          <CRow
            onClick={() => {
              document.getElementById("uploadTemplate").click();
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
                id={"uploadTemplate"}
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
      <CRow style={{ paddingTop: "50px" }}>
        <CCol md={6}></CCol>
        <CCol md={6}>
          <CButton onClick={uploadBulk} className={"saveBtn"}>
            Confirm
          </CButton>
        </CCol>
      </CRow>
    </div>
  );
};

export default OfficeLocationUpload;
