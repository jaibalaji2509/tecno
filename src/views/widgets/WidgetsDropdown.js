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
import CIcon from "@coreui/icons-react";
import { useHistory } from "react-router-dom";
import ChartLineSimple from "../charts/ChartLineSimple";
import ChartBarSimple from "../charts/ChartBarSimple";

const WidgetsDropdown = () => {
  const history = useHistory();
  // render
  return (
    <CRow>
      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-primary"
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
              marginLeft: "30px",
            }}
          onClick={() => history.push("/Form")}
          >
            Total
          </span>
          <span
            style={{
               fontSize: "18px",
              fontWeight: "600",
              textAlign: "center",
              marginTop: "60px",
              marginLeft: "-127px",
            }}
          onClick={() => history.push("/Form")}
          >
            4000
          </span>
          <CDropdown>
          <CDropdownToggle caret className="text-white" color="transparent">
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
          color="gradient-info"
          // header="Male"
          // text="05"
          footerSlot={
            <span
              style={{
                 fontSize: "18px",
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
            style={{ fontSize: "23px", fontWeight: "600", marginTop: "-5px" }}
          >
            Male
          </span>
          <span
            style={{
               fontSize: "18px",
              fontWeight: "600",
              textAlign: "center",
              marginTop: "65px",
              marginLeft: "-130px",
            }}
          >
            05
          </span>
          <CDropdown>
          <CDropdownToggle caret className="text-white" color="transparent">
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
          color="gradient-warning"
          // header="Female"
          // text="03"
          footerSlot={
            <span
              style={{
                 fontSize: "18px",
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
            style={{ fontSize: "23px", fontWeight: "600", marginTop: "-5px" }}
          >
            Female
          </span>
          <span
            style={{
               fontSize: "18px",
              fontWeight: "600",
              textAlign: "center",
              marginTop: "60px",
              marginLeft: "-130px",
            }}
          >
            03
          </span>
          <CDropdown>
          <CDropdownToggle caret className="text-white" color="transparent">
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
          // header="Tansgender"
          // text="02"
          footerSlot={
            <span
              style={{
                 fontSize: "18px",
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
          >
            Transgender
          </span>
          <span
            style={{
               fontSize: "18px",
              fontWeight: "600",
              textAlign: "center",
              marginTop: "60px",
              marginLeft: "-180px",
            }}
          >
            02
          </span>
          <CDropdown>
          <CDropdownToggle caret className="text-white" color="transparent">
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
          color="gradient-info"
          // header="Tansgender"
          // text="02"
          footerSlot={
            <span
              style={{
                 fontSize: "18px",
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
            onClick={() => history.push("/PartypostingForm")}
          >
            Party Posting
          </span>
          <span
            style={{
               fontSize: "18px",
              fontWeight: "600",
              textAlign: "center",
              marginTop: "60px",
              marginLeft: "-180px",
            }}
            onClick={() => history.push("/PartypostingForm")}
          >
            700
          </span>
          <CDropdown>
          <CDropdownToggle caret className="text-white" color="transparent">
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
          // header="Tansgender"
          // text="02"
          footerSlot={
            <span
              style={{
                 fontSize: "18px",
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
              marginLeft: "-61px",
            }}
            onClick={() => history.push("/PartywingForm")}
          >
            Party Wings Posting
          </span>
          <span
            style={{
               fontSize: "18px",
              fontWeight: "600",
              textAlign: "center",
              marginTop: "60px",
              marginLeft: "-180px",
            }}
            onClick={() => history.push("/PartywingForm")}
          >
            800
          </span>
          <CDropdown>
            <CDropdownToggle caret className="text-white" color="transparent">
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
        </CCol>
        <CCol sm="6" lg="3"></CCol>
      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-success"
          // header="Tansgender"
          // text="02"
          footerSlot={
            <span
              style={{
                 fontSize: "18px",
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
              marginLeft: "5px",
            }}
            onClick={() => history.push("/Form1")}
          >
            MP
          </span>
          <span
            style={{
               fontSize: "18px",
              fontWeight: "600",
              textAlign: "center",
              marginTop: "60px",
              marginLeft: "-125px",
            }}
            onClick={() => history.push("/Form1")}
          >
            20
          </span>
          <CDropdown>
            <CDropdownToggle caret className="text-white" color="transparent">
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
          color="gradient-warning"
          // header="Tansgender"
          // text="02"
          footerSlot={
            <span
              style={{
                 fontSize: "18px",
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
              marginLeft: "5px",
            }}
            onClick={() => history.push("/MLAForm")}
          >
            MLA
          </span>
          <span
            style={{
               fontSize: "18px",
              fontWeight: "600",
              textAlign: "center",
              marginTop: "60px",
              marginLeft: "-125px",
            }}
            onClick={() => history.push("/MLAForm")}
          >
            80
          </span>
          <CDropdown>
            <CDropdownToggle caret className="text-white" color="transparent">
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
          // header="Tansgender"
          // text="02"
          footerSlot={
            <span
              style={{
                 fontSize: "18px",
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
              marginLeft: "20px",
              position: "absolute",
            }}
            onClick={() => history.push("/FormCouncul")}
          >
            Legistative Council
          </span>
          <span
            style={{
               fontSize: "18px",
              fontWeight: "600",
              textAlign: "center",
              marginTop: "60px",
              marginLeft: "8px",
            }}
            onClick={() => history.push("/FormCouncul")}
          >
            500
          </span>
          <CDropdown>
            <CDropdownToggle caret className="text-white" color="transparent">
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
          color="gradient-primary"
          // header="Tansgender"
          // text="02"
          footerSlot={
            <span
              style={{
                 fontSize: "18px",
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
              marginLeft: "11px",
              position: "absolute",
            }}
            onClick={() => history.push("/FormPanchayatMember")}
          >
            Panchayat Member
          </span>
          <span
            style={{
               fontSize: "18px",
              fontWeight: "600",
              textAlign: "center",
              marginTop: "60px",
              marginLeft: "8px",
            }}
            onClick={() => history.push("/FormPanchayatMember")}
          >
            500
          </span>
          <CDropdown>
            <CDropdownToggle caret className="text-white" color="transparent">
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
          // header="Tansgender"
          // text="02"
          footerSlot={
            <span
              style={{
                 fontSize: "18px",
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
              marginLeft: "-58px",
              color: "white",
            }}
            onClick={() => history.push("/Formstate")}
          >
            State Minister
          </span>
          <span
            style={{
               fontSize: "18px",
              fontWeight: "600",
              textAlign: "center",
              marginTop: "60px",
              marginLeft: "-192px",
              color: "white",
            }}
            onClick={() => history.push("/Formstate")}
          >
            05
          </span>
          <CDropdown>
            <CDropdownToggle caret className="text-white" color="transparent">
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
          color="gradient-info"
          // header="Tansgender"
          // text="02"
          footerSlot={
            <span
              style={{
                 fontSize: "18px",
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
              marginLeft: "-52px",
            }}
            onClick={() => history.push("/FormCentral")}
          >
            Central Minister
          </span>
          <span
            style={{
               fontSize: "18px",
              fontWeight: "600",
              textAlign: "center",
              marginTop: "60px",
              marginLeft: "-192px",
            }}
            onClick={() => history.push("/FormCentral")}
          >
            05
          </span>
          <CDropdown>
            <CDropdownToggle caret className="text-white" color="transparent">
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
  );
};
export default WidgetsDropdown;