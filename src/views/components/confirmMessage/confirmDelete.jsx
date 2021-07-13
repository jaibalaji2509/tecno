import React from "react";
import { CModal,CButton, CModalHeader, CModalBody, CModalFooter } from "@coreui/react";
import './confirmDelete.css'

const ConfirmDelete = (props) => {
  return (
    <React.Fragment>
      <div className="button-delete">
        <CModal  onClose={()=>{props.cancel(false)}}  title="Modal title" color="danger" show={props.details.show}>
            <CModalHeader><span >{props.heading || `Delete Confirmation`}</span></CModalHeader>
            <CModalBody>
                <span style={{fontSize:'15px',fontWeight:'600',color:'#000'}}>{props.body ||`Are you sure want do delete `}{props.details.name} ?</span>
            </CModalBody>
            <CModalFooter>
            <CButton className={'cancelBtn'} onClick={()=>{props.cancel(false)}} >No</CButton>
                <CButton className={'saveBtn'} onClick={()=>{props.confirm()}} >Yes</CButton>
            </CModalFooter>
        </CModal>
      </div>
    </React.Fragment>
  );
};

export default ConfirmDelete;
