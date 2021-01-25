import React from 'react'
import Button from 'react-bootstrap/Button';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { CLabel,CRow,CCol } from '@coreui/react';

export const ExportCSV = ({csvData, fileName}) => {

    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';

    const sheetNameFunc = (data) => {
      let names = [];
      data.map((x,i)=>{
        names.push(`sheet${(i+1)}`);
      })
      return names
    }

    const sheetFunc = (data) => {
      let sheets = {};
      data.map((x,i)=>{
        const ws = XLSX.utils.json_to_sheet(x)
        if(i === 0){
          sheets[`sheet${(i+1)}`] = ws;
        }else{
                  sheets[`sheet${(i+1)}`] = ws;
        }
      })
      return sheets;
    }

    const exportToCSV = (csvData, fileName) => {
        const wb = { Sheets: sheetFunc(csvData), SheetNames: sheetNameFunc(csvData) };
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const data = new Blob([excelBuffer], {type: fileType});
        FileSaver.saveAs(data, fileName + fileExtension);
    }

    return (
        <CRow style={{fontSize:'20px'}}>
        <CCol md={1}>
        <i class="fas fa-download" onClick={(e) => exportToCSV(csvData,fileName)}></i>
        </CCol>
        <CCol md={6}>
          <CLabel style={{position:'relative',right:'25px'}}  onClick={(e) => exportToCSV(csvData,fileName)} className={"form-labels-6"}>Download Template</CLabel>
        </CCol>
      </CRow>
        
    )
}