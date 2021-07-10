import { CButton, CCard, CCol, CLabel, CRow } from '@coreui/react'
import React, { useState } from 'react'
import CDataTable from '../../CoreComponents/table/CDataTable'
import { saveCreateCorporation } from '../../../services/ApiService'
import { toast } from 'react-toastify'
import DEFAULT_IMAGE from '../../../assets/img/No-image-icon.png'
import Select from 'react-select'
import { Dropdown, Menu } from 'antd'
import 'antd/dist/antd.css'
const AssignPartyPosting = () => {
  // const [mobilenumber, setMobileNumber] = useState("");
  // const [, setOtpHide] = useState(false);
  const [locations, setLocations] = useState({
    state: '',
    district: '',
    city: '',
    ward: '',
    area: '',
    street: '',
    pincode: '',
  })
  const [files] = useState('')
  // const [, setMunicipalList] = useState(true);
  // const [, setmunicipalCreate] = useState(false);
  // const [, setMunicipalListadd] = useState(true);
  // const [, setmunicipalCreateadd] = useState(false);
  // // const [municipalCorporation, setMunicipalCorporation] = useState({});
  // // const [municipalName, setMuniicipalName] = useState("");
  // const [, setDepartmentList] = useState(true);
  // const [, setDepartmentCreate] = useState(false);
  // const [, setDesignationList] = useState(true);
  // const [, setDesignationCreate] = useState(false);
  // const [, setRoleList] = useState(true);
  // const [, setRoleCreate] = useState(false);
  const [locationHide, setLocationHide] = useState({
    corporation: true,
    municipalLocation: false,
    districtPanchayat: false,
    townPanchayat: false,
    villagePanchayat: false,
    cityLocation: false,
  })
  const [typeofOfficess, setTypeofOfficess] = useState('')
  // const [, setPI] = useState("");
  const userData = [
    {
      SNo: '1',
      Name: 'Volunteer Team',
      Type: 'Head Quaters',
      Department: 'Voluntery',
      Designation: 'Secretary',
      Role: 'General',
      Status: 'Assigned',
      EnteredBy: '01/06/2021',
      EnteredOn: '06/06/2021',
    },
  ]

  const fields = [
    {
      key: 'SNo',
      label: 'S.NO',
      _style: { width: '3%' },
      sorter: false,
      filter: false,
    },

    { key: 'Name', label: 'Name of Party Office', _style: { width: '10%' } },
    { key: 'Type', label: 'Type of Office', _style: { width: '10%' } },
    { key: 'Department', label: 'Department', _style: { width: '10%' } },
    { key: 'Designation', label: 'Designation', _style: { width: '10%' } },
    { key: 'Role', label: 'Role', _style: { width: '10%' } },
    { key: 'Status', label: 'Status', _style: { width: '10%' } },
    { key: 'EnteredBy', label: ' From Date', _style: { width: '10%' } },
    { key: 'EnteredOn', label: ' To Date', _style: { width: '10%' } },

    {
      key: 'show_details',
      label: 'Action',
      _style: { width: '10%' },
      sorter: false,
      filter: false,
    },
  ]
  const userDatamemberposting = [
    {
      SNo: '1',
      Name: 'Volunteer Team',
      Type: 'Head Quaters',
      Department: 'Voluntery',
      Designation: 'Secretary',
      Role: 'General',
      Status: 'Assigned',
      Member: 'Arun',
      EnteredBy: 'Sathiskumar',
      EnteredOn: '01/06/2021',
    },
    {
      SNo: '2',
      Name: 'Lawyers Association',
      Type: 'District Branch Office',
      Department: 'Lawyers',
      Designation: 'Vice President',
      Role: 'General',
      Status: 'Assigned',
      Member: 'Sathish',
      EnteredBy: 'Sathiskumar',
      EnteredOn: '01/06/2021',
    },
  ]
  const fields1memberposting = [
    {
      key: 'SNo',
      label: 'S.NO',
      _style: { width: '3%' },
      sorter: false,
      filter: false,
    },
    { key: 'Type', label: 'Type of Office', _style: { width: '10%' } },
    { key: 'Name', label: 'Name of Office', _style: { width: '10%' } },
    { key: 'Department', label: 'Department', _style: { width: '10%' } },
    { key: 'Designation', label: 'Designation', _style: { width: '10%' } },
    { key: 'Role', label: 'Role', _style: { width: '10%' } },

    { key: 'Member', label: 'Name of the Member', _style: { width: '10%' } },

    { key: 'EnteredBy', label: 'Assigned By', _style: { width: '10%' } },
    { key: 'EnteredOn', label: 'Assigned On', _style: { width: '10%' } },

    {
      key: 'show_details',
      label: 'Action',
      _style: { width: '10%' },
      sorter: false,
      filter: false,
    },
  ]
  const [passing] = useState('')
  // const [, setError] = useState("");
  const saveCorporation = async () => {
    setLocationHide({
      ...locationHide,
      municipalLocation: true,
      corporation: false,
    })

    if (passing === '') {
      let body = {
        state: locations.state,
        district: locations.district,
        city: locations.city,
        area: locations.area,
        ward: locations.ward,
        street: locations.street,
      }
      console.log(body)
      try {
        const response = await saveCreateCorporation(JSON.stringify(body))
        console.log(body, 'createfirst')
        if (response) {
          toast.success(response)
        }
      } catch (error) {
        toast.error(error)
      }
    }
  }
  const selectTypeofOffice = [
    { value: 'Head Quaters', label: 'Head Quaters' },
    { value: 'District Party Office', label: 'District Party Office' },
  ]
  const selectDepartment = [
    { value: 'Physician', label: 'Physician' },
    { value: 'Weaver', label: 'Weaver' },
  ]
  const selectDesignation = [
    { value: 'Team Leader', label: 'Team Leader' },
    { value: 'Vice President', label: 'Vice President' },
  ]
  const selectTypeofParty = [
    { value: 'Youth Wings Association', label: 'Youth Wings Association' },
    { value: 'Lawyers Wings Association', label: 'Lawyers Wings Association' },
  ]
  const selectLocation = [
    {
      value: 'Chennai Youth Wings Office ',
      label: 'Chennai Youth Wings Office ',
    },
    {
      value: 'Chennai Lawyers Wings Office ',
      label: 'Chennai Lawyers Wings Office',
    },
  ]
  const selectRole = [
    { value: 'General', label: 'General' },
    { value: 'General', label: 'General' },
  ]
  // const selectAdministartive = [
  //   {
  //     value: "Head Quaters Chennai Physician Under Secretary General ",
  //     label: "Head Quaters Chennai Physician Under Secretary General",
  //   },
  // ];
  // const selectFunctional = [
  //   {
  //     value: "Head Quaters Chennai Physician  Secretary General ",
  //     label: "Head Quaters Chennai Physician  Secretary General",
  //   },
  // ];
  // const saveMunicipalLocation = () => {
  //   setLocationHide({
  //     ...locationHide,
  //     municipalLocation: false,
  //     districtPanchayat: true,
  //   });
  // };
  // const saveDistrictPanchayat = () => {
  //   console.log(locationHide, "hidr");
  //   setLocationHide({
  //     ...locationHide,
  //     districtPanchayat: false,
  //     townPanchayat: true,
  //   });
  // };
  // const savetownPanchayat = () => {
  //   console.log(locationHide, "hidr");
  //   setLocationHide({
  //     ...locationHide,
  //     villagePanchayat: true,
  //     townPanchayat: false,
  //   });
  // };
  // const saveVillagePanchayat = () => {
  //   console.log(locationHide, "hidr");
  //   setLocationHide({
  //     ...locationHide,
  //     villagePanchayat: false,
  //     cityLocation: true,
  //   });
  // };
  // const cityLocation = () => {
  //   setLocationHide({
  //     ...locationHide,
  //     cityLocation: true,
  //     townPanchayat: false,
  //   });
  // };
  // const cancelcityLocation = () => {
  //   setLocationHide({
  //     ...locationHide,
  //     cityLocation: false,
  //     corporation: true,
  //   });
  // };
  const changeHandler = (e) => {
    setLocations({ ...locations, [e.target.name]: e.target.value })
  }
  // const otpChangeHandle = (e) => {
  //   setMobileNumber(e.target.value);
  //   if (mobilenumber.length > 8) {
  //     setOtpHide(true);
  //   } else {
  //     setError("enter valid data");
  //   }
  // };
  // const addDepartment = async () => {
  //   await setDepartmentList(false);
  //   await setDepartmentCreate(true);
  // };
  // const addDesignation = async () => {
  //   await setDesignationList(false);
  //   await setDesignationCreate(true);
  // };
  // const addRole = async () => {
  //   await setRoleList(false);
  //   await setRoleCreate(true);
  // };
  // const editState = async () => {
  //   await setMunicipalList(false);
  //   await setmunicipalCreate(true);
  //   // formik.values.StateName = stateName.stateName;
  //   // formik.values.Abbreviation2 = stateName.abbreviation;
  //   // formik.values.Code2 = stateName.code;
  //   // setPassing(stateName._id);
  //   // getState();
  //   // getAllAreas();
  // };
  // const CancelState = async () => {
  //   setPassing("");
  //   await setMunicipalList(true);
  //   await setmunicipalCreate(false);
  // };
  // const enableCreateadd = async () => {
  //   await setMunicipalListadd(false);
  //   await setmunicipalCreateadd(true);
  // };
  const selectName = [{ value: 'Sathishkumar', label: 'SathishKumar' }]
  // const editStateadd = async () => {
  //   await setMunicipalListadd(false);
  //   await setmunicipalCreateadd(true);
  //   // formik.values.StateName = stateName.stateName;
  //   // formik.values.Abbreviation2 = stateName.abbreviation;
  //   // formik.values.Code2 = stateName.code;
  //   // setPassing(stateName._id);
  //   // getState();
  //   // getAllAreas();
  // };
  // const CancelStateadd = async () => {
  //   setPassing("");
  //   await setMunicipalListadd(true);
  //   await setmunicipalCreateadd(false);
  // };

  const [hideMappingMunicipal, setHideMappingmunicipal] = useState(true)
  const [hideCorporation, setHideCorporation] = useState(false)
  const changeMunicipalCorporation = () => {
    setHideMappingmunicipal(false)
    setHideCorporation(true)
  }
  const cancelMunicipalCorporation = () => {
    setHideMappingmunicipal(true)
    setHideCorporation(false)
  }

  const menus = (details) => {
    return (
      <Menu>
        <Menu.Item>
          <a href>Edit</a>
        </Menu.Item>
        <Menu.Item>
          <a href>Delete</a>
        </Menu.Item>
      </Menu>
    )
  }

  return (
    <div>
      {hideMappingMunicipal && (
        <div>
          <CCard className={'cardSave'}>
            <div className={'main-headerlabel'}>
              <span className={'header-label'}>
                View Assigned Party Posting
              </span>
            </div>
            {locationHide.corporation && (
              <div>
                <div style={{ marginLeft: '-26px' }}>
                  <CRow style={{ marginTop: '45px' }}>
                    <CCol>
                      <CCol md="5">
                        <CButton
                          style={{
                            marginLeft: '35px',
                          }}
                          id={'assinpartypostingadding'}
                          className={'saveBtn'}
                          onClick={changeMunicipalCorporation}
                        >
                          Assign Party Posting
                        </CButton>{' '}
                      </CCol>
                    </CCol>
                  </CRow>
                  <CRow className={'row-alignment'} md="12" sm="12" lg="12">
                    <CCol className={'column-align'} md="4">
                      <CLabel className={'label-name-1'}>
                        Type of Office
                        <span className={'text-danger'}>*</span>
                      </CLabel>
                      <Select
                        id={'assinpartypostingtypeofoffice'}
                        name={'state'}
                        placeholder={'Select Type of Office'}
                        value={locations.district}
                        onChange={changeHandler}
                      />
                    </CCol>
                    <CCol className={'column-align'} md="4">
                      <CLabel className={'label-name-1'}>
                        Type of Party / Party Wings Office
                        <span className={'text-danger'}>*</span>
                      </CLabel>
                      <Select
                        className={'input-align'}
                        id={'assinpartypostingwings'}
                        name={'city'}
                        placeholder={' Select Type of Party '}
                        value={locations.city}
                        onChange={changeHandler}
                      />
                    </CCol>
                  </CRow>

                  <CRow className={'row-alignment'} md="12" sm="12" lg="12">
                    <CCol className={'column-align'} md="4">
                      <CLabel className={'label-name-1'}>
                        Name of the Office Location
                        <span className={'text-danger'}>*</span>
                      </CLabel>
                      <Select
                        id={'assinpartypostingofficelocation'}
                        name={'city'}
                        placeholder={' Select Office Location'}
                        value={locations.city}
                        onChange={changeHandler}
                      />
                    </CCol>
                  </CRow>
                </div>

                <CRow
                  style={{
                    padding: '4%',
                    marginTop: '-1.5%',
                    marginLeft: '-40px',
                  }}
                >
                  <CDataTable
                    items={userDatamemberposting}
                    fields={fields1memberposting}
                    columnFilter
                    tableFilter
                    tableLabel={'List of Member with Posting'}
                    itemsPerPageSelect
                    itemsPerPage={5}
                    hover
                    sorter
                    pagination
                    scopedSlots={{
                      show_details: (item, index) => {
                        return (
                          <td className="py-1">
                            <CRow>
                              <CCol style={{ fontSize: '1.15rem' }} md="16">
                                <Dropdown
                                  className={'ant-dropdown-cutomize-by-me'}
                                  overlay={() => menus(item)}
                                >
                                  <a
                                    href
                                    className="ant-dropdown-link"
                                    onClick={(e) => e.preventDefault()}
                                  >
                                    <i
                                      style={{
                                        marginLeft: '35px',
                                        color: 'black',
                                      }}
                                      className="fa fa-ellipsis-v"
                                      bsStyle="overlay"
                                      onClick={menus}
                                    />
                                  </a>
                                </Dropdown>
                              </CCol>
                            </CRow>
                          </td>
                        )
                      },
                      details: (item, index) => {},
                    }}
                  />
                </CRow>
              </div>
            )}
          </CCard>
        </div>
      )}

      {hideCorporation && (
        <div>
          <CCard className={'cardSave'}>
            <div className={'main-headerlabel'}>
              <span className={'header-label'}>Assign Party Posting</span>
            </div>
            {locationHide.corporation && (
              <div>
                <div style={{ marginLeft: '-26px' }}>
                  {/* <div className={"row-headerlabel"}>
                    <span
                      style={{ marginLeft: "70px" }}
                      className={"header-label"}
                    >
                      {" "}
                      Assign Party Posting{" "}
                    </span>
                  </div> */}

                  <CRow
                    className={'row-alignment'}
                    md="12"
                    sm="12"
                    lg="12"
                    style={{ marginLeft: '7px' }}
                  >
                    <CCol className={'column-align'} md="4">
                      <CLabel className={'label-name-1'}>
                        Type of Office
                        <span className={'text-danger'}>*</span>
                      </CLabel>
                      <Select
                        // className={"input-align"}
                        id={'assignpartypostingtypeofoffice'}
                        // name={"municipalTypeofOffice"}
                        placeholder={'Select Type of Office'}
                        value={typeofOfficess}
                        onChange={(e) => setTypeofOfficess(e)}
                        options={selectTypeofOffice}
                      />
                    </CCol>

                    <CCol className={'column-align'} md={4} lg={4}>
                      <CLabel className={'label-name-1'}>
                        Department Name
                        <span className={'text-danger'}> *</span>
                      </CLabel>
                      <Select
                        // className={"input-align"}
                        id={'assignpartypostingdepartment'}
                        name={'municipalDepartment'}
                        placeholder={'Select Department'}
                        value={locations.district}
                        onChange={(e) => setLocations(e)}
                        options={selectDepartment}
                      />
                    </CCol>
                  </CRow>
                  <CRow
                    className={'row-alignment'}
                    md="12"
                    sm="12"
                    lg="12"
                    style={{ marginLeft: '7px' }}
                  >
                    <CCol className={'column-align'} md="4">
                      <CLabel className={'label-name-1'}>
                        Type of Party / Party Wings Office
                        <span className={'text-danger'}>*</span>
                      </CLabel>
                      <Select
                        // className={"input-align"}
                        id={'assignpartypostingdepartmentwings'}
                        name={'partyPostingTypeofWings'}
                        placeholder={' Select Office Location'}
                        value={locations.city}
                        onChange={(e) => setLocations(e)}
                        options={selectTypeofParty}
                      />
                    </CCol>

                    <CCol className={'column-align'} md={4} lg={4}>
                      <CLabel className={'label-name-1'}>
                        Designation Name
                        <span className={'text-danger'}> *</span>
                      </CLabel>
                      <Select
                        //   className={"input-align"}
                        placeholder="Select Designation "
                        id={'assignpartypostingdesignation'}
                        type={'text'}
                        value={locations.city}
                        onChange={(e) => setLocations(e)}
                        options={selectDesignation}
                        // isDisabled={CountryCreate || CityCreate || AreaCreate}
                      />
                    </CCol>
                  </CRow>
                  <CRow
                    className={'row-alignment'}
                    style={{ marginLeft: '7px' }}
                  >
                    <CCol className={'column-align'} md="4">
                      <CLabel className={'label-name-1'}>
                        Name of the Office Location
                        <span className={'text-danger'}>*</span>
                      </CLabel>
                      <Select
                        // className={"input-align"}
                        id={'assignpartypostingnamelocationoffice'}
                        name={'partyPostingOfficeLocation'}
                        placeholder={'Select Office Location'}
                        value={locations.district}
                        onChange={(e) => setLocations(e)}
                        options={selectLocation}
                      />
                    </CCol>

                    <CCol className={'column-align'} md={4} lg={4}>
                      <CLabel className={'label-name-1'}>
                        Role Name
                        <span className={'text-danger'}> *</span>
                      </CLabel>
                      <Select
                        // className={"input-align"}
                        placeholder="Select Role Name"
                        id={'assignpartypostingrolename'}
                        name={'partyPostingrole   '}
                        type={'text'}
                        value={locations.district}
                        onChange={(e) => setLocations(e)}
                        options={selectRole}
                      />
                    </CCol>
                  </CRow>

                  <CRow md="10">
                    <CCol
                      md="5"
                      style={{
                        marginLeft: '500px',
                        float: 'right',
                        marginTop: '30px',
                        position: 'absolute',
                      }}
                    >
                      <CButton
                        style={{
                          float: 'right',
                          cursor: 'pointer',
                        }}
                        id={'assignpartypostingcancel'}
                        className={'cancelBtn'}
                        onClick={cancelMunicipalCorporation}
                      >
                        CANCEL
                      </CButton>{' '}
                      <CButton
                        style={{
                          float: 'right',
                          marginRight: '15px',
                        }}
                        id={'assignpartypostingsave'}
                        className={'saveBtn'}
                        onClick={saveCorporation}
                      >
                        Assign
                      </CButton>{' '}
                    </CCol>
                  </CRow>
                  <CRow>
                    <CCol style={{ marginTop: '60px',  marginLeft: '65px',}}>
                      <CLabel
                        style={{
                          fontSize: '20PX',
                          fontFamily: 'Open Sans',
                          fontWeight: '700',
                        
                         
                         
                        }}
                      >
                        Select Party Member
                      </CLabel>
                    </CCol>
                  </CRow>

                  <CRow className={'row-alignment'}>
                    <CCol className={'column-align'} md="6">
                      <CLabel className={'label-name'}>
                        Name of the Member
                        <span className={'text-danger'}>*</span>
                      </CLabel>
                      <Select
                        className={'input-align'}
                        id={'nameofmemberassignpartyposting'}
                        name={'state'}
                        placeholder={'Select Type of Office'}
                        value={locations.district}
                        onChange={(e) => setLocations(e)}
                        options={selectName}
                      />
                    </CCol>
                  </CRow>

                  <CRow className={'row-alignment'}>
                    <CCol className={'column-align'} md="4">
                      <CLabel className={'label-name'}>
                        Name
                        <span
                          style={{ fontSize: '14px', fontFamily: 'normal' }}
                        >
                          {' '}
                          - SathishKumar
                        </span>
                      </CLabel>
                    </CCol>
                    <CCol className={'column-align'} md="4">
                      <CLabel className={'label-name'}>
                        Gender
                        <span
                          style={{ fontSize: '14px', fontFamily: 'normal' }}
                        >
                          {' '}
                          - Male
                        </span>
                      </CLabel>
                    </CCol>
                    <CCol>
                      <img
                        type="text"
                        alt=""
                        src={files !== '' ? files : DEFAULT_IMAGE}
                        style={{
                          width: '150px',
                          height: '200px',
                          position: 'relative',
                          background: '#fff',
                          left: '-40%',
                          top: '-3%',
                        }}
                      />
                    </CCol>
                  </CRow>
                  <CRow
                    className={'row-alignment'}
                    style={{ marginTop: '-140px' }}
                  >
                    <CCol className={'column-align'} md="4">
                      <CLabel className={'label-name'}>
                        DOB
                        <span
                          style={{ fontSize: '14px', fontFamily: 'normal' }}
                        >
                          {' '}
                          - 22/07/1996
                        </span>
                      </CLabel>
                    </CCol>
                    <CCol className={'column-align'} md="4">
                      <CLabel className={'label-name'}>
                        Education
                        <span
                          style={{ fontSize: '14px', fontFamily: 'normal' }}
                        >
                          {' '}
                          - Mechanical Engineer
                        </span>
                      </CLabel>
                    </CCol>
                  </CRow>
                  <CRow className={'row-alignment'}>
                    <CCol className={'column-align'} md="4">
                      <CLabel className={'label-name'}>
                        Occupation{' '}
                        <span
                          style={{ fontSize: '14px', fontFamily: 'normal' }}
                        >
                          {' '}
                          - Software Developer
                        </span>{' '}
                        <span>-</span>
                      </CLabel>
                    </CCol>
                  </CRow>
                </div>

                <CRow
                  style={{
                    padding: '4%',
                    marginTop: '-2.5%',
                    marginLeft: '-10px',
                  }}
                >
                  <CDataTable
                    items={userData}
                    fields={fields}
                    columnFilter
                    tableFilter
                    tableLabel={
                      'List of Other Party Posting Held By - Sathish  '
                    }
                    itemsPerPageSelect
                    itemsPerPage={5}
                    hover
                    sorter
                    pagination
                    scopedSlots={{
                      show_details: (item, index) => {
                        return (
                          <td className="py-1">
                            <CRow>
                              <CCol style={{ fontSize: '1.15rem' }} md="16">
                                <Dropdown
                                  className={'ant-dropdown-cutomize-by-me'}
                                  overlay={() => menus(item)}
                                >
                                  <a
                                    href
                                    className="ant-dropdown-link"
                                    onClick={(e) => e.preventDefault()}
                                  >
                                    <i
                                      style={{
                                        marginLeft: '35px',
                                        color: 'black',
                                      }}
                                      className="fa fa-ellipsis-v"
                                      bsStyle="overlay"
                                      onClick={menus}
                                    />
                                  </a>
                                </Dropdown>
                              </CCol>
                            </CRow>
                          </td>
                        )
                      },
                      details: (item, index) => {},
                    }}
                  />
                </CRow>
              </div>
            )}
          </CCard>
        </div>
      )}
    </div>
  )
}

export default AssignPartyPosting
