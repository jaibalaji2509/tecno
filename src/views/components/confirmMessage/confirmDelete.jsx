import React from "react";
import { CModal,CButton, CModalHeader, CModalBody, CModalFooter } from "@coreui/react";

const ConfirmDelete = (props) => {
  return (
    <React.Fragment>
      <div>
        <CModal style={{margin:'5px solid #e55354'}} title="Modal title" color="danger" show={props.details.show}>
            <CModalHeader><span style={{fontSize:'19px',fontWeight:'900'}}>Confirm Delete</span></CModalHeader>
            <CModalBody>
                <span style={{fontSize:'15px',fontWeight:'bold'}}>Are you sure want do remove {props.details.name} ?</span>
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
