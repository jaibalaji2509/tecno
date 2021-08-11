import React from "react";
import {
  CWidgetDropdown,
  CRow,
  CCol,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle,
} from "@coreui/react";
import { useHistory } from "react-router-dom";

function PartywingForm() {
    const history = useHistory();
    return (
        <>
          <CRow>
        <CCol sm="6" lg="3">
          <CWidgetDropdown
            color="gradient-info"
            // header="Total"
            // text="10"
            footerSlot={
              <span
                style={{
                  fontSize: "23px",
                  fontWeight: "600",
                  textAlign: "center",
                  marginTop: "65px",
                  marginLeft: "-130px",
                }}
              ></span>
            }
            style={{ height: "135px", cursor: "pointer" }}
            
          >
            <span
              style={{
                 fontSize: "23px",
                fontWeight: "600",
                marginTop: "-5px",
                marginLeft: "-38px",
              }}
              onClick={() => history.push("/FormVolunteer")}
            >
            	Volunteer Team
            </span>
            <span
              style={{
                 fontSize: "18px",
                fontWeight: "600",
                textAlign: "center",
                marginTop: "60px",
                marginLeft: "-190px",
              }}
              onClick={() => history.push("/FormVolunteer")}
            >
              200
            </span>
            <CDropdown>
              <CDropdownToggle color="transparent">
                <i class="fa fa-share-alt" style={{ color: "white" }} />
              </CDropdownToggle>
              <CDropdownMenu className="pt-0" placement="bottom-end">
                <CDropdownItem>SMS</CDropdownItem>
                <CDropdownItem>Katchup</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          </CWidgetDropdown>
        </CCol>
        <CCol sm="6" lg="3">
          <CWidgetDropdown
            color="gradient-success"
            // header="Total"
            // text="10"
            footerSlot={
              <span
                style={{
                   fontSize: "23px",
                  fontWeight: "600",
                  textAlign: "center",
                  marginTop: "65px",
                  marginLeft: "-130px",
                }}
              ></span>
            }
            style={{ height: "135px", cursor: "pointer" }}
           
          >
            <span
              style={{
                fontSize: "23px",
                fontWeight: "600",
                marginTop: "-5px",
                marginLeft: "-38px",
              }}
            onClick={() => history.push("/YouthForm")}
            >
              	Youth Team
            </span>
            <span
              style={{
                 fontSize: "18px",
                fontWeight: "600",
                textAlign: "center",
                marginTop: "60px",
                marginLeft: "-190px",
              }}
            onClick={() => history.push("/YouthForm")}
            >
              200
            </span>
           <CDropdown>
              <CDropdownToggle color="transparent">
                <i class="fa fa-share-alt" style={{ color: "white" }} />
              </CDropdownToggle>
              <CDropdownMenu className="pt-0" placement="bottom-end">
                <CDropdownItem>SMS</CDropdownItem>
                <CDropdownItem>Katchup</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          </CWidgetDropdown>
        </CCol>   
        <CCol sm="6" lg="3">
          <CWidgetDropdown
            color="gradient-danger"
            // header="Total"
            // text="10"
            footerSlot={
              <span
                style={{
                   fontSize: "23px",
                  fontWeight: "600",
                  textAlign: "center",
                  marginTop: "65px",
                  marginLeft: "-130px",
                }}
              ></span>
            }
            style={{ height: "135px", cursor: "pointer" }}
          >
            <span
              style={{
                fontSize: "23px",
                fontWeight: "600",
                marginTop: "-5px",
                marginLeft: "-38px",
              }}
            onClick={() => history.push("/FormWomen")}

            >
              Women’s Team
            </span>
            <span
              style={{
                 fontSize: "18px",
                fontWeight: "600",
                textAlign: "center",
                marginTop: "60px",
                marginLeft: "-190px",
              }}
            onClick={() => history.push("/FormWomen")}

            >
              200
            </span>
            <CDropdown>
              <CDropdownToggle color="transparent">
                <i class="fa fa-share-alt" style={{ color: "white" }} />
              </CDropdownToggle>
              <CDropdownMenu className="pt-0" placement="bottom-end">
                <CDropdownItem>SMS</CDropdownItem>
                <CDropdownItem>Katchup</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          </CWidgetDropdown>
        </CCol>   
        <CCol sm="6" lg="3">
          <CWidgetDropdown
            color="gradient-dark"
            // header="Total"
            // text="10"
            footerSlot={
              <span
                style={{
                   fontSize: "23px",
                  fontWeight: "600",
                  textAlign: "center",
                  marginTop: "65px",
                  marginLeft: "-130px",
                }}
              ></span>
            }
            style={{ height: "135px", cursor: "pointer" }}
           
          >
            <span
              style={{
                fontSize: "23px",
                fontWeight: "600",
                marginTop: "-5px",
                marginLeft: "-50px",
              }}
              onClick={() => history.push("/FormEngineerTeam")}
            >
              Engineer Team
            </span>
            <span
              style={{
                 fontSize: "18px",
                fontWeight: "600",
                textAlign: "center",
                marginTop: "60px",
                marginLeft: "-190px",
              }}
              onClick={() => history.push("/FormEngineerTeam")}
            >
              200
            </span>
           <CDropdown>
              <CDropdownToggle color="transparent">
                <i class="fa fa-share-alt" style={{ color: "white" }} />
              </CDropdownToggle>
              <CDropdownMenu className="pt-0" placement="bottom-end">
                <CDropdownItem>SMS</CDropdownItem>
                <CDropdownItem>Katchup</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          </CWidgetDropdown>
        </CCol>       
      </CRow>
        </>
    )
}
export default PartywingForm