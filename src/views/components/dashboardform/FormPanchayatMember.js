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

function FormPanchayatMember() {
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
                  fontSize: "30px",
                  fontWeight: "600",
                  textAlign: "center",
                  marginTop: "65px",
                  marginLeft: "-130px",
                }}
              ></span>
            }
            style={{ height: "135px", cursor: "pointer" }}
            onClick={() => history.push("/FormDP")}
          >
            <span
              style={{
                fontSize: "23px",
                fontWeight: "600",
                marginTop: "-5px",
                marginLeft: "-41px",
              }}
            >
              District Panchayat
            </span>
            <span
              style={{
                fontSize: "18px",
                fontWeight: "600",
                textAlign: "center",
                marginTop: "60px",
                marginLeft: "-190px",
              }}
            >
              100
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
            onClick={() => history.push("/FormPU")}
          >
            <span
              style={{
                fontSize: "23px",
                fontWeight: "600",
                marginTop: "-5px",
                marginLeft: "-35px",
              }}
            >
              Panchayat Union
            </span>
            <span
              style={{
                fontSize: "18px",
                fontWeight: "600",
                textAlign: "center",
                marginTop: "60px",
                marginLeft: "-190px",
              }}
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
export default FormPanchayatMember