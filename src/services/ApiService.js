import Axios from "axios";
import axios from "axios";
import { json } from "d3";
import { toast } from "react-toastify";

const api = `http://localhost:6403/api`;
export async function signIn(email, password) {
  const response = await fetch(`v1/user/login`, {
    method: `post`,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });
  console.log(`Response`, response);
  if (response.status === 200) {
    return await response.json();
  } else {
    let errorResponse = await response.json();
    throw new Error(errorResponse.error);
  }
}

export async function signUp(name, email, password) {
  const response = await fetch(`v1/user`, {
    method: `post`,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
      password: password,
    }),
  });
  console.log(`Response`, response);
  if (response.status === 201) {
    return await response.json();
  } else {
    let errorResponse = await response.json();
    throw new Error(errorResponse.error);
  }
}

export async function createOfficeLocation(body) {
  try {
    const response = await fetch(`${api}/saveOfficeLocation`, {
      method: `post`,
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    });
    console.log(`Response`, response.body);
    if (response.status === 200) {
      return await response.json();
    } else {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }
  } catch (e) {
    console.log(e);
    toast.error(`${e}`);
  }
}
// export async function createOfficeLocation(body) {
//   const response = await fetch(`${api}/saveOfficeLocation`, {
//     method: `post`,
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: body,
//   });
//   console.log(`Response`, response.body);
//   if (response.status === 201) {
//     return await response.json();
//   } else {
//     let errorResponse = await response.json();
//     throw new Error(errorResponse.error);
//   }
// }
export async function addTransferEmployee(
  employee,
  office,
  description,
  department,
  Id,
  desigination1,
  type,
  role,
  location,
  vacancy
) {
  const response = await fetch(
    ` http://echo.jsontest.com/title/ipsum/content/blah`,
    {
      method: `post`,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Employee: employee,
        Office: office,
        Description: description,
        Department: department,
        Id: Id,
        Desigination: desigination1,
        Type: type,
        Role: role,
        Location: location,
        Vacancy: vacancy,
      }),
    }
  );
  console.log(`Response`, response.body);
  if (response.status === 201) {
    return await response.json();
  } else {
    let errorResponse = await response.json();
    throw new Error(errorResponse.error);
  }
}
export async function transferEmployeeList(
  employee,
  office,
  description,
  department,
  Id,
  desigination1,
  type,
  role,
  location
) {
  const response = await fetch(
    ` http://echo.jsontest.com/title/ipsum/content/blah`,
    {
      method: `post`,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Employee: employee,
        Office: office,
        Description: description,
        Department: department,
        Id: Id,
        Desigination: desigination1,
        Type: type,
        Role: role,
        Location: location,
      }),
    }
  );
  console.log(`Response`, response.body);
  if (response.status === 201) {
    return await response.json();
  } else {
    let errorResponse = await response.json();
    throw new Error(errorResponse.error);
  }
}

export async function viewSuspendEmployee(
  employee,
  office,
  description,
  department,
  Id,
  desigination1,
  type,
  role,
  location
) {
  const response = await fetch(
    ` http://echo.jsontest.com/title/ipsum/content/blah`,
    {
      method: `post`,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Employee: employee,
        Office: office,
        Description: description,
        Department: department,
        Id: Id,
        Desigination: desigination1,
        Type: type,
        Role: role,
        Location: location,
      }),
    }
  );
  console.log(`Response`, response.body);
  if (response.status === 201) {
    return await response.json();
  } else {
    let errorResponse = await response.json();
    throw new Error(errorResponse.error);
  }
}

export async function verify(email, code) {
  const response = await fetch(`v1/verify/email`, {
    method: `post`,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      code: code,
    }),
  });
  console.log(`Response`, response);
  if (response.status === 200) {
    return await response.json();
  } else {
    let errorResponse = await response.json();
    throw new Error(errorResponse.error);
  }
}

export async function getUser() {
  const token = localStorage.getItem(`token`);
  const response = await fetch(`v1/user`, {
    method: `get`,
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
  console.log(`Response`, response);
  if (response.status === 200) {
    return await response.json();
  } else if (response.status === 401) {
    throw new Error(`User Unauthorized. Please login again.`);
  } else {
    let errorResponse = await response.json();
    throw new Error(errorResponse.error);
  }
}

export async function updateUser(body) {
  console.log(`updateuser`, body);
  const token = localStorage.getItem(`token`);
  const response = await fetch(`v1/user`, {
    method: `put`,
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(body),
  });
  console.log(`updateUser Response`, response);
  if (response.status === 200) {
    return await response.json();
  } else if (response.status === 401) {
    throw new Error(`User Unauthorized. Please login again.`);
  } else {
    let errorResponse = await response.json();
    throw new Error(errorResponse.error);
  }
}

export const updateProfile = (BlogPostSchema) => {
  return axios
    .put(`customer/update`, {
      qualification: BlogPostSchema.qualification,
      school: BlogPostSchema.school,
      board: BlogPostSchema.board,
      passing: BlogPostSchema.passing,
      percantage: BlogPostSchema.percantage,
      token: BlogPostSchema.token,
    })
    .then((res) => {
      localStorage.removeItem(`usertoken`);
      // window.location = `${api}/login`
    })
    .catch((err) => {
      console.log(err);
    });
};
export async function passwordResetRequest(email) {
  try {
    const response = await fetch(`v1/passwordreset`, {
      method: `post`,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
    });
    console.log(`verifyCode-Response`, response);
    return await response.json();
  } catch (e) {
    throw e;
  }
}

export async function createAllRole(body) {
  // const token = localStorage.getItem(`token`);

  try {
    const response = await fetch(
      `http://dummy.restapiexample.com/api/v1/employees`,
      {
        method: `post`,
        headers: {
          "Content-Type": "application/json",
          // Authorization: token,
        },
        body: body,
      }
    );
    console.log(`addSection-Response`, response);
    return await response.json();
  } catch (e) {
    throw e;
  }
}

export async function addAllEmployees(body) {
  console.log(body, `apiservice`);
  try {
    const response = await fetch(`${api}/saveEmployee`, {
      method: `post`,
      headers: {
        "Content-Type": "application/json",
        // Authorization: token,
      },
      body: JSON.stringify(body),
    });
    console.log(`addSection-Response`, response);
    return await response.json();
  } catch (e) {
    throw e;
  }
}

export async function addAllEmployee(body) {
  console.log(body, `apiservice`);
  try {
    const response = await Axios.post(`${api}/saveEmployee`, body);
    console.log(`addSection-Response`, response);
    if (response.status === 200) {
      return await response.data;
    } else if (response.status === 401) {
      throw new Error(`User Unauthorized. Please login again.`);
    } else {
      let errorResponse = await response.data.error;
      throw new Error(errorResponse.data.error);
    }
  } catch (e) {
    throw e;
  }
}

export async function createAllFamilyList(body) {
  // const token = localStorage.getItem(`token`);

  try {
    const response = await fetch(
      `http://dummy.restapiexample.com/api/v1/employees`,
      {
        method: `post`,
        headers: {
          "Content-Type": "application/json",
          // Authorization: token,
        },
        body: body,
      }
    );
    console.log(`addSection-Response`, response);
    return await response.json();
  } catch (e) {
    throw e;
  }
}

export async function AddPosting(
  name,
  type,
  location,
  circle,
  division,
  department,
  dist,
  role
) {
  const response = await fetch(
    ` http://echo.jsontest.com/title/ipsum/content/blah`,
    {
      method: `post`,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        type: type,
        adress: location,
        adress1: circle,
        country: division,
        state: department,
        dist: dist,
        area: role,
      }),
    }
  );
  console.log(`Response`, response.body);
  if (response.status === 201) {
    return await response.json();
  } else {
    let errorResponse = await response.json();
    throw new Error(errorResponse.error);
  }
}

export async function addExperienceDetails(
  employee,
  name,
  type,
  location,
  circle,
  division,
  department,
  dist,
  role
) {
  const response = await fetch(
    ` http://echo.jsontest.com/title/ipsum/content/blah`,
    {
      method: `post`,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        employee: employee,
        name: name,
        type: type,
        adress: location,
        adress1: circle,
        country: division,
        state: department,
        dist: dist,
        area: role,
      }),
    }
  );
  console.log(`Response`, response.body);
  if (response.status === 201) {
    return await response.json();
  } else {
    let errorResponse = await response.json();
    throw new Error(errorResponse.error);
  }
}

export async function createOfficeType(body) {
  // const token = localStorage.getItem(`token`);
  console.log(body);
  try {
    const response = await fetch(`${api}/saveOfficeType`, {
      method: `post`,
      headers: {
        "Content-Type": "application/json",
        // Authorization: token,
      },
      body: body,
    });
    console.log(`addSection-Response`, response);
    return await response.json();
  } catch (e) {
    throw e;
  }
}
export async function createCountry(body) {
  // const token = localStorage.getItem(`token`);
  console.log(body);
  try {
    const response = await fetch(`${api}/saveCountry`, {
      method: `post`,
      headers: {
        "Content-Type": "application/json",
        // Authorization: token,
      },
      body: body,
    });
    console.log(`addSection-Response`, response);
    return await response.json();
  } catch (e) {
    throw e;
  }
}

export async function createArea(body) {
  // const token = localStorage.getItem(`token`);
  console.log(body);
  try {
    const response = await fetch(`${api}/saveArea`, {
      method: `post`,
      headers: {
        "Content-Type": "application/json",
        // Authorization: token,
      },
      body: body,
    });
    console.log(`addSection-Response`, response);
    return await response.json();
  } catch (e) {
    throw e;
  }
}

export async function createEducation(body) {
  // const token = localStorage.getItem(`token`);
  console.log(body);
  try {
    const response = await fetch(`${api}/saveEducation`, {
      method: `post`,
      headers: {
        "Content-Type": "application/json",
        // Authorization: token,
      },
      body: body,
    });
    console.log(`addSection-Response`, response);
    return await response.json();
  } catch (e) {
    throw e;
  }
}

export async function createExperience(body) {
  // const token = localStorage.getItem(`token`);
  console.log(body);
  try {
    const response = await fetch(`${api}/saveExperience`, {
      method: `post`,
      headers: {
        "Content-Type": "application/json",
        // Authorization: token,
      },
      body: body,
    });
    console.log(`addSection-Response`, response);
    return await response.json();
  } catch (e) {
    throw e;
  }
}

export async function createFamily(body) {
  // const token = localStorage.getItem(`token`);
  console.log(body);
  try {
    const response = await fetch(`${api}/saveFamily`, {
      method: `post`,
      headers: {
        "Content-Type": "application/json",
        // Authorization: token,
      },
      body: body,
    });
    console.log(`addSection-Response`, response);
    return await response.json();
  } catch (e) {
    throw e;
  }
}

// export async function deleteConfirmation(body) {
//   // const token = localStorage.getItem(`token`);
//   console.log(body);
//   try {
//     const response = await fetch(`${api}/saveFamily`, {
//       method: `post`,
//       headers: {
//         "Content-Type": "application/json",
//         // Authorization: token,
//       },
//       body: body,
//     });
//     console.log(`addSection-Response`, response);
//     return await response.json();
//   } catch (e) {
//     throw e;
//   }
// }

export async function deleteConfirmation(body) {
  // const token = localStorage.getItem(`token`);
  console.log(body);
  try {
    const response = await fetch(`${api}/saveFamily`, {
      method: `post`,
      headers: {
        "Content-Type": "application/json",
        // Authorization: token,
      },
      body: body,
    });
    console.log(`addSection-Response`, response);
    return await response.json();
  } catch (e) {
    throw e;
  }
}

export async function deleteEducation(id) {
  // const token = localStorage.getItem(`token`);
  // console.log(body)
  try {
    const response = await fetch(`${api}/deleteEducation/${id}`, {
      method: `delete`,
      headers: {
        "Content-Type": "application/json",
        // Authorization: token,
      },
    });
    console.log(`addSection-Response`, response);
    return await response.json();
  } catch (e) {
    throw e;
  }
}

export async function getEducation(body) {
  // const token = localStorage.getItem(`token`);
  console.log(body);
  try {
    const response = await fetch(`${api}/getAllEducation`, {
      method: `get`,
      headers: {
        "Content-Type": "application/json",
        // Authorization: token,
      },
      body: body,
    });
    console.log(`addSection-Response`, response);
    return await response.json();
  } catch (e) {
    throw e;
  }
}

export async function getFamily(body) {
  // const token = localStorage.getItem(`token`);
  console.log(body);
  try {
    const response = await fetch(`${api}/getAllFamily`, {
      method: `get`,
      headers: {
        "Content-Type": "application/json",
        // Authorization: token,
      },
      body: body,
    });
    console.log(`addSection-Response`, response);
    return await response.json();
  } catch (e) {
    throw e;
  }
}

export async function getClientDetails(body) {
  // const token = localStorage.getItem(`token`);
  console.log(body);
  try {
    const response = await fetch(`${api}/client/getAll`, {
      mode: "navigate",
      method: `get`,
      headers: {
        "Content-Type": "application/json",
        // Authorization: token,
      },
      body: body,
    });
    console.log(`addSection-Response`, response);
    return await response.json();
  } catch (e) {
    throw e;
  }
}

export async function deleteExperience(body) {
  // const token = localStorage.getItem(`token`);
  console.log(body);
  try {
    const response = await fetch(`${api}/deleteExperience`, {
      method: `delete`,
      headers: {
        "Content-Type": "application/json",
        // Authorization: token,
      },
      body: body,
    });
    console.log(`addSection-Response`, response);
    return await response.json();
  } catch (e) {
    throw e;
  }
}

export async function updateEducation(body) {
  // const token = localStorage.getItem(`token`);
  console.log(body);
  try {
    const response = await fetch(`${api}/updateEducation`, {
      method: `put`,
      headers: {
        "Content-Type": "application/json",
        // Authorization: token,
      },
      body: body,
    });
    console.log(`addSection-Response`, response);
    return await response.json();
  } catch (e) {
    throw e;
  }
}

export async function updateOfficeType(
  OfficeType,
  Abbreviation,
  Code,
  ReportingTo,
  id
) {
  console.log(OfficeType, Abbreviation, Code, ReportingTo, id);
  // const token = localStorage.getItem(`token`)
  const response = await fetch(`${api}/updateOfficeType`, {
    method: `put`,
    headers: {
      "Content-Type": "application/json",
      // `Authorization`: token,
    },
    body: JSON.stringify({
      officeType: OfficeType,
      abbreviation: Abbreviation,
      code: Code,
      reportingTo: ReportingTo,
      id: id,
    }),
  });
  console.log(`updateUser Response`, response);
  if (response.status === 200) {
    return await response.json();
  } else if (response.status === 401) {
    throw new Error(`User Unauthorized. Please login again.`);
  } else {
    let errorResponse = await response.json();
    throw new Error(errorResponse.error);
  }
}
// export async function updateRevokeEmployee( body) {
//   // const token = localStorage.getItem(`token`);
//   console.log(body);
//   try {
//     const response = await fetch(`${api}/employeeMovement`, {
//       method: `put`,
//       headers: {
//         "Content-Type": "application/json",
//         // Authorization: token,
//       },
//       body: JSON.stringify(body),
//     })
//     console.log(`addSection-Response`, response);
//     return await response.json();
//   } catch (e) {
//     throw e;
//   }
// }

export async function updateSuspendEmployee(body) {
  console.log("123123123123123123123123123123123123", "Test");
  // const token = localStorage.getItem(`token`);
  console.log(body);
  try {
    const response = await fetch(`${api}/employeeMovement`, {
      method: `put`,
      headers: {
        "Content-Type": "application/json",
        // Authorization: token,
      },
      body: JSON.stringify(body),
    });
    console.log(`addSection-Response`, response);
    return await response.json();
  } catch (e) {
    throw e;
  }
}

export async function updateEmployee(body) {
  try {
    const response = await axios.put(`${api}/updateEmployee`, body);
    console.log(`updateEmployee`, response);
    return await response;
  } catch (e) {
    throw e;
  }
}

export async function deleteFamily(id) {
  // const token = localStorage.getItem(`token`);
  try {
    const response = await fetch(`${api}/deleteFamily}`, {
      method: `delete`,
      headers: {
        "Content-Type": "application/json",
        // Authorization: token,
      },
    });
    console.log(`addSection-Response`, response);
    return await response.json();
  } catch (e) {
    throw e;
  }
}

export async function deleteSuspendEmployee(id) {
  // const token = localStorage.getItem(`token`);
  try {
    const response = await fetch(`${api}/employeeMovement/delete?id=${id}`, {
      method: `put`,
      headers: {
        "Content-Type": "application/json",
        // Authorization: token,
      },
    });
    console.log(`addSection-Response`, response);
    return await response.json();
  } catch (e) {
    throw e;
  }
}

export async function deleteRevokeEmployee(id) {
  // const token = localStorage.getItem(`token`);
  try {
    const response = await fetch(`${api}/employeeMovement/delete?id=${id}`, {
      method: `put`,
      headers: {
        "Content-Type": "application/json",
        // Authorization: token,
      },
    });
    console.log(`addSection-Response`, response);
    return await response.json();
  } catch (e) {
    throw e;
  }
}

export async function getCity(id) {
  // const token = localStorage.getItem(`token`);
  console.log(id, `CONID`);
  try {
    const response = await fetch(`${api}/getAllCity?id=${id}`, {
      method: `get`,
      headers: {
        "Content-Type": "application/json",
        // Authorization: token,
      },
    });
    console.log(`addSection-Response`, response);
    return await response.json();
  } catch (e) {
    throw e;
  }
}

export async function getExperience(body) {
  // const token = localStorage.getItem(`token`);
  console.log(body);
  try {
    const response = await fetch(`${api}/getAllExperience`, {
      method: `get`,
      headers: {
        "Content-Type": "application/json",
        // Authorization: token,
      },
      body: body,
    });
    console.log(`addSection-Response`, response);
    return await response.json();
  } catch (e) {
    throw e;
  }
}

export async function getEmployeeData(body) {
  // const token = localStorage.getItem(`token`);
  console.log(body);
  try {
    const response = await fetch(`${api}/getAllEmployeeData`, {
      method: `get`,
      headers: {
        "Content-Type": "application/json",
        // Authorization: token,
      },
      body: body,
    });
    console.log(`addSection-Response`, response);
    return await response.json();
  } catch (e) {
    throw e;
  }
}

export async function revokeEmployeeList(body) {
  // const token = localStorage.getItem(`token`);
  console.log(body);
  try {
    const response = await fetch(`${api}/getFamily`, {
      method: `get`,
      headers: {
        "Content-Type": "application/json",
        // Authorization: token,
      },
      body: body,
    });
    console.log(`addSection-Response`, response);
    return await response.json();
  } catch (e) {
    throw e;
  }
}

export async function updateExperience(body) {
  // const token = localStorage.getItem(`token`);
  console.log(body);
  try {
    const response = await fetch(`${api}/updateExperience`, {
      method: `put`,
      headers: {
        "Content-Type": "application/json",
        // Authorization: token,
      },
      body: body,
    });
    console.log(`addSection-Response`, response);
    return await response.json();
  } catch (e) {
    throw e;
  }
}

export async function updateFamily(body) {
  // const token = localStorage.getItem(`token`);
  console.log(body);
  try {
    const response = await fetch(`${api}/updateFamily`, {
      method: `put`,
      headers: {
        "Content-Type": "application/json",
        // Authorization: token,
      },
      body: body,
    });
    console.log(`addSection-Response`, response);
    return await response.json();
  } catch (e) {
    throw e;
  }
}

export async function createState(body) {
  // const token = localStorage.getItem(`token`);
  console.log(body);
  try {
    const response = await fetch(`${api}/saveState`, {
      method: `post`,
      headers: {
        "Content-Type": "application/json",
        // Authorization: token,
      },
      body: body,
    });
    console.log(`addSection-Response`, response);
    return await response.json();
  } catch (e) {
    throw e;
  }
}

// export async function createEducation(body) {

export async function createCity(body) {
  // const token = localStorage.getItem(`token`);
  console.log(body);
  try {
    const response = await fetch(`${api}/saveCity`, {
      method: `post`,
      headers: {
        "Content-Type": "application/json",
        // Authorization: token,
      },
      body: body,
    });
    console.log(`addSection-Response`, response);
    return await response.json();
  } catch (e) {
    throw e;
  }
}

export async function createSuspendEmployee(body) {
  // const token = localStorage.getItem(`token`);
  console.log(body);
  try {
    const response = await fetch(`${api}/employeeMovement/create`, {
      method: `post`,
      headers: {
        "Content-Type": "application/json",
        // Authorization: token,
      },
      body: body,
    });
    console.log(`addSection-Response`, response);
    return await response.json();
  } catch (e) {
    throw e;
  }
}

export async function updateArea(
  CountryName,
  AreaName,
  Abbreviation4,
  Code4,
  Pincode,
  id
) {
  console.log(CountryName, AreaName, Abbreviation4, Code4, id);
  // const token = localStorage.getItem('token')
  const response = await fetch(`${api}/updateArea`, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
      // `Authorization`: token,
    },
    body: JSON.stringify({
      countryName: CountryName,
      areaName: AreaName,
      abbreviation: Abbreviation4,
      code: Code4,
      pincode: Pincode,
      id: id,
    }),
  });
  console.log(`updateUser Response`, response);
  if (response.status === 200) {
    return await response.json();
  } else if (response.status === 401) {
    throw new Error(`User Unauthorized. Please login again.`);
  } else {
    let errorResponse = await response.json();
    throw new Error(errorResponse.error);
  }
}
export async function updateCountry(CountryName, Abbreviation1, Code1, id) {
  console.log(CountryName, Abbreviation1, Code1, id);
  // const token = localStorage.getItem('token')
  const response = await fetch(`${api}/updateCountry`, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
      // `Authorization`: token,
    },
    body: JSON.stringify({
      countryName: CountryName,
      abbreviation: Abbreviation1,
      code: Code1,
      id: id,
    }),
  });
  console.log(`updateUser Response`, response);
  if (response.status === 200) {
    return await response.json();
  } else if (response.status === 401) {
    throw new Error(`User Unauthorized. Please login again.`);
  } else {
    let errorResponse = await response.json();
    throw new Error(errorResponse.error);
  }
}

export async function updateState(StateName, Abbreviation2, Code2, id) {
  console.log(StateName, Abbreviation2, Code2, id);
  // const token = localStorage.getItem(`token`)
  const response = await fetch(`${api}/updateState`, {
    method: `put`,
    headers: {
      "Content-Type": "application/json",
      // `Authorization`: token,
    },
    body: JSON.stringify({
      stateName: StateName,
      abbreviation: Abbreviation2,
      code: Code2,
      id: id,
    }),
  });
  console.log(`updateUser Response`, response);
  if (response.status === 200) {
    return await response.json();
  } else if (response.status === 401) {
    throw new Error(`User Unauthorized. Please login again.`);
  } else {
    let errorResponse = await response.json();
    throw new Error(errorResponse.error);
  }
}

export async function updateCity(CityName, Abbreviation3, Code3, id) {
  console.log(CityName, Abbreviation3, Code3, id);
  // const token = localStorage.getItem(`token`)
  const response = await fetch(`${api}/updateCity`, {
    method: `put`,
    headers: {
      "Content-Type": "application/json",
      // `Authorization`: token,
    },
    body: JSON.stringify({
      cityName: CityName,
      abbreviation: Abbreviation3,
      code: Code3,
      id: id,
    }),
  });
  console.log(`updateUser Response`, response);
  if (response.status === 200) {
    return await response.json();
  } else if (response.status === 401) {
    throw new Error(`User Unauthorized. Please login again.`);
  } else {
    let errorResponse = await response.json();
    throw new Error(errorResponse.error);
  }
}

export async function updateOfficeLocation(body) {
  // console.log(OfficeType, Address1, Address2, id);
  // const token = localStorage.getItem(`token`)
  const response = await fetch(`${api}/updateOfficeLocation`, {
    method: `PUT`,
    headers: {
      "Content-Type": "application/json",
      // `Authorization`: token,
    },
    body: JSON.stringify(body),
  });
  if (response.status === 200) {
    console.log("update location response xxx" , await response.json())
    return response;
  } else if (response.status === 401) {
    throw new Error(`User Unauthorized. Please login again.`);
  } else {
    let errorResponse = await response.json();
    throw new Error(errorResponse.error);
  }
}
export async function deleteOfficeType(id) {
  try {
    // const token = localStorage.getItem(`token`);
    const response = await fetch(`${api}/deleteOfficeType/${id}`, {
      method: `delete`,
      headers: {
        "Content-Type": "application/json",
        // Authorization: token,
      },
    });
    console.log(`delete school response...`, response);
    if (response.status === 200) {
      return await response.json();
    } else if (response.status === 401) {
      throw new Error(`User Unauthorized. Please login again.`);
    } else {
      var errorResponse = await response;
      throw new Error(errorResponse.error);
    }
  } catch (e) {
    console.log(e);
  }
}

//   console.log(`Response`, response);
//   if (response.status === 200) {
//     return await response.json();
//   } else if (response.status === 401) {
//     throw new Error(`User Unauthorized. Please login again.`);
//   } else {
//     let errorResponse = await response.json();
//     console.log(`officeType fetching failed`, errorResponse.error);
//   }
// }

export async function getState(id) {
  console.log(id, `CONID`);
  // const token = localStorage.getItem(`token`);
  const response = await fetch(`${api}/getAllState?id=${id}`, {
    method: `GET`,
    headers: {
      "Content-Type": "application/json",
      // Authorization: token,
    },
  });

  console.log(`Response`, response);
  if (response.status === 200) {
    return await response.json();
  } else if (response.status === 401) {
    throw new Error(`User Unauthorized. Please login again.`);
  } else {
    let errorResponse = await response.json();
    console.log(`officeType fetching failed`, errorResponse.error);
  }
}

export async function getArea(id) {
  // const token = localStorage.getItem(`token`);
  const response = await fetch(`${api}/getAllArea?id=${id}`, {
    method: `get`,
    headers: {
      "Content-Type": "application/json",
      // Authorization: token,
    },
  });
  console.log(`Response`, response);
  if (response.status === 200) {
    return await response.json();
  } else if (response.status === 401) {
    throw new Error(`User Unauthorized. Please login again.`);
  } else {
    let errorResponse = await response.json();
    throw new Error(errorResponse.error);
  }
}

export async function getAreaSchema() {
  // const token = localStorage.getItem(`token`);
  const response = await fetch(`${api}/getAllAreas`, {
    method: `get`,
    headers: {
      "Content-Type": "application/json",
      // Authorization: token,
    },
  });
  console.log(`Response`, response);
  if (response.status === 200) {
    return await response.json();
  } else if (response.status === 401) {
    throw new Error(`User Unauthorized. Please login again.`);
  } else {
    let errorResponse = await response.json();
    throw new Error(errorResponse.error);
  }
}

export async function getAllEmployeeMovement(body) {
  try {
    let bodys = body || ``;
    const response = await fetch(`${api}/employeeMovement/getAll?${bodys}`, {
      method: `get`,
      headers: {
        "Content-Type": "application/json",
        // Authorization: token,
      },
    });
    console.log(`future-Response`, response);
    if (response.status === 200) {
      return await response.json();
    } else if (response.status === 401) {
      throw new Error(`User Unauthorized. Please login again.`);
    } else {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }
  } catch (e) {
    throw e;
  }
}
export async function getOfficeType(query) {
  // const token = localStorage.getItem(`token`);
  let querys = query || "";
  const response = await fetch(`${api}/getAllOfficeType?${querys}`, {
    method: `get`,
    headers: {
      "Content-Type": "application/json",
      // Authorization: token,
    },
  });
  console.log(`Response`, response);
  if (response.status === 200) {
    return await response.json();
  } else if (response.status === 401) {
    throw new Error(`User Unauthorized. Please login again.`);
  } else {
    let errorResponse = await response.json();
    throw new Error(errorResponse.error);
  }
}

export async function getAllOfficeTypePaginate(query) {
  // const token = localStorage.getItem(`token`);
  let querys = query || "";
  const response = await fetch(`${api}/getAllOfficeTypePaginate?${querys}`, {
    method: `get`,
    headers: {
      "Content-Type": "application/json",
      // Authorization: token,
    },
  });
  console.log(`Response`, response);
  if (response.status === 200) {
    return await response.json();
  } else if (response.status === 401) {
    throw new Error(`User Unauthorized. Please login again.`);
  } else {
    let errorResponse = await response.json();
    throw new Error(errorResponse.error);
  }
}

export async function getAllOfficeLocationPaginate(query) {
  // const token = localStorage.getItem(`token`);
  let querys = query || "";
  const response = await fetch(
    `${api}/getAllOfficeLocationPaginate?${querys}`,
    {
      method: `get`,
      headers: {
        "Content-Type": "application/json",
        // Authorization: token,
      },
    }
  );
  console.log(`Response`, response);
  if (response.status === 200) {
    return await response.json();
  } else if (response.status === 401) {
    throw new Error(`User Unauthorized. Please login again.`);
  } else {
    let errorResponse = await response.json();
    throw new Error(errorResponse.error);
  }
}

export async function getAllAreaPaginate(query) {
  // const token = localStorage.getItem(`token`);
  let querys = query || "";
  const response = await fetch(`${api}/getAllAreaPaginate?${querys}`, {
    method: `get`,
    headers: {
      "Content-Type": "application/json",
      // Authorization: token,
    },
  });
  console.log(`Response`, response);
  if (response.status === 200) {
    return await response.json();
  } else if (response.status === 401) {
    throw new Error(`User Unauthorized. Please login again.`);
  } else {
    let errorResponse = await response.json();
    throw new Error(errorResponse.error);
  }
}

export async function getCountry() {
  // const token = localStorage.getItem(`token`);
  const response = await fetch(`${api}/getAllCountry`, {
    method: `get`,
    headers: {
      "Content-Type": "application/json",
      // Authorization: token,
    },
  });
  console.log(`Response`, response);
  if (response.status === 200) {
    return await response.json();
  } else if (response.status === 401) {
    throw new Error(`User Unauthorized. Please login again.`);
  } else {
    let errorResponse = await response.json();
    throw new Error(errorResponse.error);
  }
}

// export async function updateOfficeType(
//   OfficeType,
//   Abbreviation,
//   Code,
//   ReportingTo,
//   id
// ) {
//   console.log(OfficeType, Abbreviation, Code, ReportingTo, id);
//   // const token = localStorage.getItem(`token`)
//   const response = await fetch(`${api}/updateOfficeType`, {
//     method: `put`,
//     headers: {
//       "Content-Type": "application/json",
//       // `Authorization`: token,
//     },
//     body: JSON.stringify({
//       officeType: OfficeType,
//       abbreviation: Abbreviation,
//       code: Code,
//       reportingTo: ReportingTo,
//       id: id,
//     }),
//   });
//   console.log(`updateUser Response`, response);
//   if (response.status === 200) {
//     return await response.json();
//   } else if (response.status === 401) {
//     throw new Error(`User Unauthorized. Please login again.`);
//   } else {
//     let errorResponse = await response.json();
//     throw new Error(errorResponse.error);
//   }
// }

// export async function updateCountry(CountryName, Abbreviation, Code, id) {
//   console.log(CountryName, Abbreviation, Code, id);
//   // const token = localStorage.getItem(`token`)
//   const response = await fetch(`${api}/updateCountry`, {
//     method: `put`,
//     headers: {
//       "Content-Type": "application/json",
//       // `Authorization`: token,
//     },
//     body: JSON.stringify({
//       CountryName: CountryName,
//       Abbreviation: Abbreviation,
//       Code: Code,
//       id: id,
//     }),
//   });
//   console.log(`updateUser Response`, response);
//   if (response.status === 200) {
//     return await response.json();
//   } else if (response.status === 401) {
//     throw new Error(`User Unauthorized. Please login again.`);
//   } else {
//     let errorResponse = await response.json();
//     throw new Error(errorResponse.error);
//   }
// }

// export async function updateOfficeLocation(OfficeType, Address1, Address2, id) {
//   console.log(OfficeType, Address1, Address2, id);
//   // const token = localStorage.getItem(`token`)
//   const response = await fetch(
//     `${api}/updateOfficeLocation`,
//     {
//       method: `put`,
//       headers: {
//         "Content-Type": "application/json",
//         // `Authorization`: token,
//       },
//       body: JSON.stringify({
//         OfficeType: OfficeType,
//         Address1: Address1,
//         Address2: Address2,
//         id: id,
//       }),
//     }
//   );
//   console.log(`updateUser Response`, response);
//   if (response.status === 200) {
//     return await response.json();
//   } else if (response.status === 401) {
//     throw new Error(`User Unauthorized. Please login again.`);
//   } else {
//     let errorResponse = await response.json();
//     throw new Error(errorResponse.error);
//   }
// }
// export async function deleteOfficeType(id) {
//   try {
//     // const token = localStorage.getItem(`token`);
//     const response = await fetch(
//       `${api}/deleteOfficeType/${id}`,
//       {
//         method: `delete`,
//         headers: {
//           "Content-Type": "application/json",
//           // Authorization: token,
//         },
//       }
//     );
//     console.log(`delete school response...`, response);
//     if (response.status === 200) {
//       return await response.json();
//     } else if (response.status === 401) {
//       throw new Error(`User Unauthorized. Please login again.`);
//     } else {
//       var errorResponse = await response.json();
//       throw new Error(errorResponse.error);
//     }
//   } catch (error) { }
// }
export async function deleteCountry(id) {
  try {
    // const token = localStorage.getItem(`token`);
    const response = await fetch(`${api}/deleteCountry/${id}`, {
      method: `delete`,
      headers: {
        "Content-Type": "application/json",
        // Authorization: token,
      },
    });
    console.log(`delete school response...`, response);
    if (response.status === 200) {
      return await response.json();
    } else if (response.status === 401) {
      throw new Error(`User Unauthorized. Please login again.`);
    } else {
      var errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }
  } catch (error) {}
}
export async function deleteOfficeLocation(id) {
  try {
    // const token = localStorage.getItem(`token`);
    const response = await fetch(`${api}/deleteOfficeLocation/${id}`, {
      method: `delete`,
      headers: {
        "Content-Type": "application/json",
        // Authorization: token,
      },
    });
    console.log(`delete school response...`, response);
    if (response.status === 200) {
      return await response.json();
    } else if (response.status === 401) {
      throw new Error(`User Unauthorized. Please login again.`);
    } else {
      var errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }
  } catch (error) {}
}

export async function deleteLocation(id) {
  try {
    // const token = localStorage.getItem(`token`);
    const response = await fetch(`${api}/deleteArea/${id}`, {
      method: `delete`,
      headers: {
        "Content-Type": "application/json",
        // Authorization: token,
      },
    });
    console.log(`delete school response...`, response);
    if (response.status === 200) {
      return await response.json();
    } else if (response.status === 401) {
      throw new Error(`User Unauthorized. Please login again.`);
    } else {
      var errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }
  } catch (error) {}
}

export async function suspendEmployees(body) {
  // const token = localStorage.getItem(`token`);

  try {
    const response = await fetch(
      `http://dummy.restapiexample.com/api/v1/employees`,
      {
        method: `post`,
        headers: {
          "Content-Type": "application/json",
          // Authorization: token,
        },
        body: body,
      }
    );
    console.log(`addSection-Response`, response);
    return await response.json();
  } catch (e) {
    throw e;
  }
}
export async function transferEmployee(body) {
  // const token = localStorage.getItem(`token`);

  try {
    const response = await fetch(
      `http://dummy.restapiexample.com/api/v1/employees`,
      {
        method: `post`,
        headers: {
          "Content-Type": "application/json",
          // Authorization: token,
        },
        body: body,
      }
    );
    console.log(`addSection-Response`, response);
    return await response.json();
  } catch (e) {
    throw e;
  }
}

export async function revokeSuspension(body) {
  // const token = localStorage.getItem(`token`);

  try {
    const response = await fetch(
      `http://dummy.restapiexample.com/api/v1/employees`,
      {
        method: `post`,
        headers: {
          "Content-Type": "application/json",
          // Authorization: token,
        },
        body: body,
      }
    );
    console.log(`addSection-Response`, response);
    return await response.json();
  } catch (e) {
    throw e;
  }
}

export async function revokeEmployee(body) {
  // const token = localStorage.getItem(`token`);

  try {
    const response = await fetch(`${api}/employeeMovement/revoke`, {
      method: `put`,
      headers: {
        "Content-Type": "application/json",
        // Authorization: token,
      },
      body: body,
    });
    console.log(`addSection-Response`, response);
    return await response.json();
  } catch (e) {
    throw e;
  }
}
export async function suspendEmployee(
  employee,
  office,
  description,
  department,
  Id,
  desigination1,
  type,
  role,
  location,
  desigination2,
  from,
  desigination3,
  to,
  description1
) {
  const response = await fetch(
    ` http://echo.jsontest.com/title/ipsum/content/blah`,
    {
      method: `post`,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Employee: employee,
        Office: office,
        Description: description,
        Department: department,
        Id: Id,
        Desigination: desigination1,
        Type: type,
        Role: role,
        Location: location,
        Desigination: desigination2,
        SupendFrom: from,
        Desigination: desigination3,
        Supendto: to,
        Description: description1,
      }),
    }
  );
  console.log(`Response`, response.body);
  if (response.status === 201) {
    return await response.json();
  } else {
    let errorResponse = await response.json();
    throw new Error(errorResponse.error);
  }
}
// export async function revokeEmployee(body) {
//   // const token = localStorage.getItem(`token`);

//   try {
//     const response = await fetch(`http://dummy.restapiexample.com/api/v1/employees`, {
//       method: `post`,
//       headers: {
//         "Content-Type": "application/json",
//         // Authorization: token,
//       },
//       body: body,
//     });
//     console.log(`addSection-Response`, response);
//     return await response.json();
//   } catch (e) {
//     throw e;
//   }
// }

export async function entityList(body) {
  // const token = localStorage.getItem(`token`);

  try {
    const response = await fetch(
      `http://dummy.restapiexample.com/api/v1/employees`,
      {
        method: `post`,
        headers: {
          "Content-Type": "application/json",
        },
        body: body,
      }
    );
    console.log(`addSection-Response`, response);
    return await response.json();
  } catch (e) {
    throw e;
  }
}
export async function address(body) {
  // const token = localStorage.getItem(`token`);

  try {
    const response = await fetch(
      `http://dummy.restapiexample.com/api/v1/employees`,
      {
        method: `post`,
        headers: {
          "Content-Type": "application/json",
          // Authorization: token,
        },
        body: body,
      }
    );
    console.log(`addSection-Response`, response);
    return await response.json();
  } catch (e) {
    throw e;
  }
}

export async function passwordReset(email, code, password) {
  try {
    const response = await fetch(`${api}/v1/verify/passwordreset`, {
      method: `post`,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        code: code,
        newPassword: password,
      }),
    });
    console.log(`passwordReset-Response`, response);
    return await response.json();
  } catch (e) {
    throw e;
  }
}

export async function verifyCode(email, code) {
  try {
    const response = await fetch(`${api}/v1/verify/email`, {
      method: `post`,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        code: code,
      }),
    });
    console.log(`verifyCode-Response`, response);
    return await response.json();
  } catch (e) {
    throw e;
  }
}

export async function sendOtp(phone) {
  try {
    const response = await fetch(`v1/user/otp`, {
      method: `post`,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phone: phone,
      }),
    });
    console.log(`sendOtp-Response`, response);
    return await response.json();
  } catch (e) {
    throw e;
  }
}

export async function resendOtp(userId) {
  try {
    const response = await fetch(`v1/user/resendOtp`, {
      method: `post`,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userid: userId,
      }),
    });
    console.log(`resendOtp-Response`, response);
    return await response.json();
  } catch (e) {
    throw e;
  }
}

export async function setEmailPassword(otp, phone, email, password) {
  try {
    const response = await fetch(`v1/user/email`, {
      method: `post`,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        otp: otp,
        phone: phone,
        email: email,
        password: password,
      }),
    });
    console.log(`setEmailPassword-Response`, response);
    return await response.json();
  } catch (e) {
    throw e;
  }
}

export async function getAllDepartment() {
  // const token = localStorage.getItem(`token`);
  const response = await fetch(`${api}/department/getAll`, {
    method: `get`,
    headers: {
      "Content-Type": "application/json",
      // Authorization: token,
    },
  });
  console.log(`Response`, response);
  if (response.status === 200) {
    return await response.json();
  } else if (response.status === 401) {
    throw new Error(`User Unauthorized. Please login again.`);
  } else {
    let errorResponse = await response.json();
    throw new Error(errorResponse.error);
  }
}

export async function getDesignation() {
  const response = await fetch(`${api}/designation/getAll`, {
    method: `get`,
    headers: {
      "Content-Type": "application/json",
      // Authorization: token,
    },
  });
  console.log(`Response`, response);
  if (response.status === 200) {
    return await response.json();
  } else if (response.status === 401) {
    throw new Error(`User Unauthorized. Please login again.`);
  } else {
    let errorResponse = await response.json();
    throw new Error(errorResponse.error);
  }
}

export async function getAllDesignation(id) {
  const response = await fetch(`${api}/designation/getAll`, {
    method: `get`,
    headers: {
      "Content-Type": "application/json",
      // Authorization: token,
    },
  });
  console.log(`Response`, response);
  if (response.status === 200) {
    return await response.json();
  } else if (response.status === 401) {
    throw new Error(`User Unauthorized. Please login again.`);
  } else {
    let errorResponse = await response.json();
    throw new Error(errorResponse.error);
  }
}

export async function createRole(body, administative, functional) {
  let datas = {
    roleName: body.roleName,
    abbreviation: body.abbreviation,
    code: body.code,
    typeOfOffice: body.officetype,
    department: body.departmentRole,
    designation: body.designationRole,
    officeLocation: body.locationRole,
    dccDescription: body.dccDescription,
    dccId: body.dccID,
  };
  if (functional) {
    let data = [];
    functional.map((x) => {
      let y = {
        department: x.department._id,
        designation: x.designation._id,
        role: x._id,
        officeLocation: x.officeLocation._id,
        typeOfOffice: x.typeOfOffice._id,
      };
      data.push(y);
    });

    datas = {
      ...datas,
      functionalReporting: data,
    };
  }

  if (administative) {
    let aDatas = {
      department: administative.department._id,
      designation: administative.designation._id,
      role: administative._id,
      officeLocation: administative.officeLocation._id,
      typeOfOffice: administative.typeOfOffice._id,
    };

    datas = {
      ...datas,
      administativeReporting: aDatas,
    };
  }
  const response = await fetch(`${api}/role/create`, {
    method: `post`,
    headers: {
      "Content-Type": "application/json",
      // Authorization: token,
    },
    body: JSON.stringify(datas),
  });
  console.log(`Response`, response);
  if (response.status === 200) {
    return await response.json();
  } else if (response.status === 401) {
    throw new Error(`User Unauthorized. Please login again.`);
  } else {
    let errorResponse = await response.json();
    throw new Error(errorResponse.error);
  }
}

export async function createDepartment(body) {
  const response = await fetch(`${api}/department/create`, {
    method: `post`,
    headers: {
      "Content-Type": "application/json",
      // Authorization: token,
    },
    body: JSON.stringify(body),
  });
  console.log(`Response`, response);
  if (response.status === 200) {
    return await response.json();
  } else if (response.status === 401) {
    throw new Error(`User Unauthorized. Please login again.`);
  } else {
    let errorResponse = await response.json();
    throw new Error(errorResponse.error);
  }
}

// export async function createOfficeType(body) {
//   // const token = localStorage.getItem(`token`);
//   console.log(body);
//   try {
//     const response = await fetch(`${api}/saveOfficeType`, {
//       method: `post`,
//       headers: {
//         "Content-Type": "application/json",
//         // Authorization: token,
//       },
//       body: body,
//     });
//     console.log(`addSection-Response`, response);
//     return await response.json();
//   } catch (e) {
//     throw e;
//   }
// }

export async function createClientDetail(body) {
  const response = await fetch(`${api}/client/create`, {
    method: `post`,
    headers: {
      "Content-Type": "application/json",
      // Authorization: token,
    },
    body: body,
  });
  console.log(`Response`, response);
  if (response.status === 200) {
    return await response.json();
  } else if (response.status === 401) {
    throw new Error(`User Unauthorized. Please login again.`);
  } else {
    let errorResponse = await response.json();
    throw new Error(errorResponse.error);
  }
}

export async function createDesignation(body) {
  const response = await fetch(`${api}/designation/create`, {
    method: `post`,
    headers: {
      "Content-Type": "application/json",
      // Authorization: token,
    },
    body: JSON.stringify(body),
  });
  console.log(`Response`, response);
  if (response.status === 200) {
    return await response.json();
  } else if (response.status === 401) {
    throw new Error(`User Unauthorized. Please login again.`);
  } else {
    let errorResponse = await response.json();
    throw new Error(errorResponse.error);
  }
}

// export async function createRoleConfirm (body) {
//   const response = await fetch(`${api}/rolecopy/create`, {
//     method: `post`,
//     headers: {
//       "Content-Type": "application/json",
//       // Authorization: token,
//     },
//     body: JSON.stringify(body),
//   });
//   console.log(`Response`, response);
//   if (response.status === 200) {
//     return await response.json();
//   } else if (response.status === 401) {
//     throw new Error(`User Unauthorized. Please login again.`);
//   } else {
//     let errorResponse = await response.json();
//     throw new Error(errorResponse.error);
//   }
// }

export async function roleDelete(id) {
  const response = await fetch(`${api}/role/delete`, {
    method: `put`,
    headers: {
      "Content-Type": "application/json",
      // Authorization: token,
    },
    body: JSON.stringify({
      id: id,
    }),
  });
  console.log(`Response`, response);
  if (response.status === 200) {
    return await response.json();
  } else if (response.status === 401) {
    throw new Error(`User Unauthorized. Please login again.`);
  } else {
    let errorResponse = await response.json();
    throw new Error(errorResponse.error);
  }
}

export async function getAllRole(query) {
  let querys = query || ``;
  const response = await fetch(`${api}/role/getAllRoles?${querys}`, {
    method: `get`,
    headers: {
      "Content-Type": "application/json",
      // Authorization: token,
    },
  });
  console.log(`Response111`, response);
  if (response.status === 200) {
    return await response.json();
  } else if (response.status === 401) {
    throw new Error(`User Unauthorized. Please login again.`);
  } else {
    let errorResponse = await response.json();
    throw new Error(errorResponse.error);
  }
}

export async function getAllRolePaginate(query) {
  let querys = query || ``;
  const response = await fetch(`${api}/role/getAllRolesPaginate?${querys}`, {
    method: `get`,
    headers: {
      "Content-Type": "application/json",
      // Authorization: token,
    },
  });
  console.log(`Response111`, response);
  if (response.status === 200) {
    return await response.json();
  } else if (response.status === 401) {
    throw new Error(`User Unauthorized. Please login again.`);
  } else {
    let errorResponse = await response.json();
    throw new Error(errorResponse.error);
  }
}

// export async function getAllRoleCopy(query) {
//   let querys = query || ``;
//   const response = await fetch(
//     `${api}/role/copyRole/getAll?${querys}`,
//     {
//       method: `get`,
//       headers: {
//         "Content-Type": "application/json",
//         // Authorization: token,
//       },
//     }
//   );
//   console.log(`Response111`, response);
//   if (response.status === 200) {
//     return await response.json();
//   } else if (response.status === 401) {
//     throw new Error(`User Unauthorized. Please login again.`);
//   } else {
//     let errorResponse = await response.json();
//     throw new Error(errorResponse.error);
//   }
// }

export async function getAllRoleData(id) {
  console.log(id);
  const response = await fetch(`${api}/role/getAllRole?id=${id}`, {
    method: `get`,
    headers: {
      "Content-Type": "application/json",
      // Authorization: token,
    },
  });
  console.log(`Response111`, response);
  if (response.status === 200) {
    return await response.json();
  } else if (response.status === 401) {
    throw new Error(`User Unauthorized. Please login again.`);
  } else {
    let errorResponse = await response.json();
    throw new Error(errorResponse.error);
  }
}

export async function getAllRoleLocation(id, officeType) {
  console.log(id);
  let data = {
    id: id,
    officeType: officeType,
  };
  const response = await axios.post(`${api}/role/getLocationNotExist`, data);
  console.log(`Response111`, response);
  if (response.status === 200) {
    return await response.data;
  } else if (response.status === 401) {
    throw new Error(`User Unauthorized. Please login again.`);
  } else {
    let errorResponse = await response.data;
    throw new Error(errorResponse.error);
  }
}

export async function getOfficeLocation(query) {
  // const token = localStorage.getItem(`token`);
  let querys = query || ``;
  const response = await fetch(`${api}/getAllOfficeLocation?${querys}`, {
    method: `get`,
    headers: {
      "Content-Type": "application/json",
      // Authorization: token,
    },
  });
  console.log(`Response`, response);
  if (response.status === 200) {
    return await response.json();
  } else if (response.status === 401) {
    throw new Error(`User Unauthorized. Please login again.`);
  } else {
    let errorResponse = await response.json();
    throw new Error(errorResponse.error);
  }
}

export async function updateRole(body, administative, functional, id) {
  console.log(
    body,
    administative,
    functional,
    `alallalalalallalalallalalalallalalalallalalalalla`
  );
  let data = [];
  functional.map((x) => {
    let y = {
      department: x.department._id,
      designation: x.designation._id,
      role: x.role ? x.role._id || x._id : x._id,
      officeLocation: x.officeLocation._id,
      typeOfOffice: x.typeOfOffice._id,
    };
    data.push(y);
  });
  const response = await fetch(`${api}/role/update`, {
    method: `put`,
    headers: {
      "Content-Type": "application/json",
      // Authorization: token,
    },
    body: JSON.stringify({
      id: id,
      roleName: body.roleName,
      abbreviation: body.abbreviation,
      code: body.code,
      typeOfOffice: body.officetype,
      department: body.departmentRole,
      designation: body.designationRole,
      officeLocation: body.locationRole,
      dccDescription: body.dccDescription,
      dccId: body.dccID,
      administativeReporting: administative,
      functionalReporting: data,
    }),
  });
  console.log(`Response`, response);
  if (response.status === 200) {
    return await response.json();
  } else if (response.status === 401) {
    throw new Error(`User Unauthorized. Please login again.`);
  } else {
    let errorResponse = await response.json();
    throw new Error(errorResponse.error);
  }
}

export async function employeeDelete(id) {
  // const token = localStorage.getItem(`token`);
  try {
    const response = await fetch(`${api}/deleteEmployee/${id}`, {
      method: `delete`,
      headers: {
        "Content-Type": "application/json",
        // Authorization: token,
      },
    });
    console.log(`addSection-Response`, response);
    return await response.json();
  } catch (e) {
    throw e;
  }
}

export async function getEmployee(body) {
  // const token = localStorage.getItem(`token`);
  console.log(body);
  try {
    const response = await fetch(`${api}/getAllEmployee`, {
      method: `get`,
      headers: {
        "Content-Type": "application/json",
        // Authorization: token,
      },
      body: body,
    });
    console.log(`addSection-Response`, response);
    return await response.json();
  } catch (e) {
    throw e;
  }
}

export async function departmentCreate(body) {
  const response = await fetch(`${api}/department/create`, {
    method: `post`,
    headers: {
      "Content-Type": "application/json",
      // Authorization: token,
    },
    body: JSON.stringify(body),
  });
  console.log(`Response`, response);
  if (response.status === 200) {
    return await response.json();
  } else if (response.status === 401) {
    throw new Error(`User Unauthorized. Please login again.`);
  } else {
    let errorResponse = await response.json();
    throw new Error(errorResponse.error);
  }
}

export async function designationCreate(body) {
  const response = await fetch(`${api}/designation/create`, {
    method: `post`,
    headers: {
      "Content-Type": "application/json",
      // Authorization: token,
    },
    body: JSON.stringify(body),
  });
  console.log(`Response`, response);
  if (response.status === 200) {
    return await response.json();
  } else if (response.status === 401) {
    throw new Error(`User Unauthorized. Please login again.`);
  } else {
    let errorResponse = await response.json();
    throw new Error(errorResponse.error);
  }
}

export async function getByOfficeLocation(id) {
  try {
    const response = await fetch(`${api}/getByOfficeType/${id}`, {
      method: `get`,
      headers: {
        "Content-Type": "application/json",
        // Authorization: token,
      },
    });
    console.log(`addSection-Response`, response);
    if (response.status === 200) {
      return await response.json();
    } else if (response.status === 401) {
      throw new Error(`User Unauthorized. Please login again.`);
    } else {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }
  } catch (e) {
    console.log(e);
  }
}
export async function addPromoteEmployee(body) {
  console.log("123123123123123123123123123123123123");
  try {
    let data = body;
    const response = await axios.post(`${api}/employeeMovement/create`, data);
    if (response.status === 200) {
      console.log(response.data);
      return await response.data;
    } else if (response.status === 401) {
      throw new Error(`User Unauthorized. Please login again.`);
    } else {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }
  } catch (e) {
    throw e;
  }
}

export async function getFutureJob(body) {
  try {
    let bodys = body || ``;
    const response = await fetch(`${api}/employeeMovement/future?${bodys}`, {
      method: `get`,
      headers: {
        "Content-Type": "application/json",
        // Authorization: token,
      },
    });
    console.log(`addSection-Response`, response);
    if (response.status === 200) {
      return await response.json();
    } else if (response.status === 401) {
      throw new Error(`User Unauthorized. Please login again.`);
    } else {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }
  } catch (e) {
    console.log(e);
  }
}

export async function getDepartmentByLocation(id) {
  try {
    const response = await fetch(
      `${api}/department/getAll?officeLocation=${id}`,
      {
        method: `get`,
        headers: {
          "Content-Type": "application/json",
          // Authorization: token,
        },
      }
    );
    console.log(`future-Response`, response);
    if (response.status === 200) {
      return await response.json();
    } else if (response.status === 401) {
      throw new Error(`User Unauthorized. Please login again.`);
    } else {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }
  } catch (e) {
    throw e;
  }
}

// export async function getAllEmployeePaginate() {
//   try {
//     // let bodys = body || ``;
//     const response = await fetch(
//       `${api}/getEmployee/getAllPaginate`,
//       {
//         method: `get`,
//         headers: {
//           "Content-Type": "application/json",
//           // Authorization: token,
//         },
//       }
//     );
//     console.log(`future-Response`, response);
//     if (response.status === 200) {
//       return await response.json();
//     } else if (response.status === 401) {
//       throw new Error(`User Unauthorized. Please login again.`);
//     } else {
//       let errorResponse = await response.json();
//       throw new Error(errorResponse.error);
//     }
//   } catch (e) {
//     throw e;
//   }
// }

export async function getAllEmployeePaginate(query) {
  // const token = localStorage.getItem(`token`);
  let querys = query || "";
  const response = await fetch(`${api}/getEmployee/getAllPaginate?${querys}`, {
    method: `get`,
    headers: {
      "Content-Type": "application/json",
      // Authorization: token,
    },
  });
  console.log(`Response`, response);
  if (response.status === 200) {
    return await response.json();
  } else if (response.status === 401) {
    throw new Error(`User Unauthorized. Please login again.`);
  } else {
    let errorResponse = await response.json();
    throw new Error(errorResponse.error);
  }
}

export async function roleCreate(body, administative, functional) {
  let datas = {
    roleName: body.roleName,
    abbreviation: body.abbreviation,
    code: body.code,
    typeOfOffice: body.officetype,
    department: body.departmentRole,
    designation: body.designationRole,
    officeLocation: body.locationRole,
    dccDescription: body.dccDescription,
    dccId: body.dccID,
  };
  if (functional) {
    let data = [];
    functional.map((x) => {
      let y = {
        department: x.department._id,
        designation: x.designation._id,
        role: x._id,
        officeLocation: x.officeLocation._id,
        typeOfOffice: x.typeOfOffice._id,
      };
      data.push(y);
    });

    datas = {
      ...datas,
      functionalReporting: data,
    };
  }

  if (administative) {
    datas = {
      ...datas,
      administativeReporting: administative,
    };
  }
  const response = await fetch(`${api}/role/create`, {
    method: `post`,
    headers: {
      "Content-Type": "application/json",
      // Authorization: token,
    },
    body: JSON.stringify(datas),
  });
  console.log(`Response`, response);
  if (response.status === 200) {
    return await response.json();
  } else if (response.status === 401) {
    throw new Error(`User Unauthorized. Please login again.`);
  } else {
    let errorResponse = await response;
    throw new Error(errorResponse.error);
  }
}

export async function createRoleConfirm(data) {
  let body = {
    datas: data,
  };

  const response = await fetch(`${api}/role/copyRole`, {
    method: `post`,
    headers: {
      "Content-Type": "application/json",
      // Authorization: token,
    },
    body: JSON.stringify(body),
  });
  console.log(`Response`, response);
  if (response.status === 200) {
    return await response.json();
  } else if (response.status === 401) {
    throw new Error(`User Unauthorized. Please login again.`);
  } else {
    let errorResponse = await response.json();
    throw new Error(errorResponse.error);
  }
}

export async function getRoleByDesignation(val) {
  const response = await fetch(`${api}/role/getAllRoles?${val}`, {
    method: `get`,
    headers: {
      "Content-Type": "application/json",
      // Authorization: token,
    },
  });
  console.log(`Response`, response);
  if (response.status === 200) {
    return await response.json();
  } else if (response.status === 401) {
    throw new Error(`User Unauthorized. Please login again.`);
  } else {
    let errorResponse = await response.json();
    throw new Error(errorResponse.error);
  }
}

export async function getAllSuspend() {
  // console.log(id, `CONID`);
  // const token = localStorage.getItem(`token`);
  const response = await fetch(
    `${api}/employeeMovement/getAll?movementType=S`,
    {
      method: `GET`,
      headers: {
        "Content-Type": "application/json",
        // Authorization: token,
      },
    }
  );

  console.log(`Response`, response);
  if (response.status === 200) {
    return await response.json();
  } else if (response.status === 401) {
    throw new Error(`User Unauthorized. Please login again.`);
  } else {
    let errorResponse = await response.json();
    console.log(`officeType fetching failed`, errorResponse.error);
  }
}

export async function getOneRole(id) {
  try {
    const response = await fetch(`${api}/role/getOne?id=${id}`, {
      method: `get`,
      headers: {
        "Content-Type": "application/json",
        // Authorization: token,
      },
    });
    console.log(`future-Response`, response);
    if (response.status === 200) {
      return await response.json();
    } else if (response.status === 401) {
      throw new Error(`User Unauthorized. Please login again.`);
    } else {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }
  } catch (e) {
    throw e;
  }
}

export async function deleteEmployeeMovement(body) {
  try {
    let id = body;
    const response = await fetch(`${api}/employeeMovement/delete?id=${id}`, {
      method: `put`,
    });

    console.log(`Response`, response);
    if (response.status === 200) {
      return await response.json();
    } else if (response.status === 401) {
      throw new Error(`User Unauthorized. Please login again.`);
    } else {
      let errorResponse = await response.json();
      console.log(`officeType fetching failed`, errorResponse.error);
    }
  } catch (e) {
    throw e;
  }
}

export async function getAllRevoke() {
  try {
    // console.log(id, `CONID`);
    // const token = localStorage.getItem(`token`);
    const response = await fetch(
      `${api}/employeeMovement/getAll?movementType=R`,
      {
        method: `GET`,
        headers: {
          "Content-Type": "application/json",
          // Authorization: token,
        },
      }
    );
    console.log(`future-Response`, response);
    if (response.status === 200) {
      return await response.json();
    } else if (response.status === 401) {
      throw new Error(`User Unauthorized. Please login again.`);
    } else {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }
  } catch (e) {
    throw e;
  }
}

export async function updateEmployeeMovement(body) {
  // const token = localStorage.getItem(`token`);
  console.log(body);
  let data = JSON.stringify(body);
  try {
    const response = await fetch(`${api}/employeeMovement/update`, {
      method: `put`,
      headers: {
        "Content-Type": "application/json",
        // Authorization: token,
      },
      body: data,
    });
    console.log(`addSection-Response`, response);
    return await response.json();
  } catch (e) {
    throw e;
  }
}

export const updateEmployeeData = async (id) => {
  let response;
  try {
    response = await fetch(`${api}/getEmployee?id=${id}`, {
      method: `GET`,
      headers: {
        "Content-Type": "application/json",
        // Authorization: token,
      },
    });
    console.log(`delete school response...`, response);
    if (response.status === 200) {
      return await response.json();
    } else if (response.status === 401) {
      throw new Error(`User Unauthorized. Please login again.`);
    } else {
      var errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }
  } catch (e) {
    console.log(e);
  }
};

export async function updateClientDetail(
  clientName,
  firstName,
  lastName,
  department,
  designation,
  mobileNumber,
  emailId,
  address1,
  address2,
  id
) {
  console.log(
    clientName,
    firstName,
    lastName,
    department,
    designation,
    mobileNumber,
    emailId,
    address1,
    address2,
    id
  );
  // const token = localStorage.getItem(`token`)
  const response = await fetch(`${api}/client/update`, {
    method: `put`,
    headers: {
      "Content-Type": "application/json",
      // `Authorization`: token,
    },
    body: JSON.stringify({
      clientName: clientName,
      firstName: firstName,
      lastName: lastName,
      department: department,
      designation: designation,
      mobileNumber: mobileNumber,
      emailId: emailId,
      address1: address1,
      address2: address2,
      id: id,
    }),
  });
  console.log(`updateUser Response`, response);
  if (response.status === 200) {
    return await response.json();
  } else if (response.status === 401) {
    throw new Error(`User Unauthorized. Please login again.`);
  } else {
    let errorResponse = await response.json();
    throw new Error(errorResponse.error);
  }
}

export async function deleteClientDetail(id) {
  try {
    // const token = localStorage.getItem(`token`);
    const response = await fetch(`${api}/client/delete/${id}`, {
      method: `delete`,
      headers: {
        "Content-Type": "application/json",
        // Authorization: token,
      },
    });
    console.log(`delete school response...`, response);
    if (response.status === 200) {
      return await response.json();
    } else if (response.status === 401) {
      throw new Error(`User Unauthorized. Please login again.`);
    } else {
      var errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }
  } catch (e) {
    console.log(e);
  }
}

export async function locationUpload(data) {
  try {
    // const token = localStorage.getItem(`token`);
    const response = await fetch(`${api}/officeLocation/bulkUpload`, {
      method: `post`,
      headers: {
        "Content-Type": "application/json",
        // Authorization: token,
      },
      body: JSON.stringify(data),
    });
    console.log(`delete school response...`, response);
    if (response.status === 200) {
      return await response.json();
    } else if (response.status === 401) {
      throw new Error(`User Unauthorized. Please login again.`);
    } else {
      var errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }
  } catch (e) {
    console.log(e);
  }
}
//getHierarchy

export async function getHierarchy() {
  try {
    const response = await fetch(`${api}/officeType/getHierarchy`, {
      method: `GET`,
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      return await response.json();
    } else if (response.status === 401) {
      throw new Error(`User Unauthorized. Please login again.`);
    } else {
      var errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }
  } catch (e) {
    console.log(e);
  }
}

export async function getEmployeeHierarchy(officeId, locationId) {
  try {
    const response = await fetch(
      `${api}/role/getHierarchy/type/${officeId}/${locationId}`,
      {
        method: `GET`,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.status === 200) {
      return await response.json();
    } else if (response.status === 401) {
      throw new Error(`User Unauthorized. Please login again.`);
    } else {
      var errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }
  } catch (e) {
    console.log(e);
  }
}

export async function getEmployeeDataHierarchy(officeId, locationId) {
  try {
    const response = await fetch(
      `${api}/role/employee/getHierarchy/type/${officeId}/${locationId}`,
      {
        method: `GET`,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.status === 200) {
      return await response.json();
    } else if (response.status === 401) {
      throw new Error(`User Unauthorized. Please login again.`);
    } else {
      var errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }
  } catch (e) {
    console.log(e);
  }
}

export async function areaUpload(data) {
  try {
    // const token = localStorage.getItem(`token`);
    const response = await fetch(`${api}/area/bulkUpload`, {
      method: `post`,
      headers: {
        "Content-Type": "application/json",
        // Authorization: token,
      },
      body: JSON.stringify(data),
    });
    console.log(`delete school response...`, response);
    if (response.status === 200) {
      return await response;
    } else if (response.status === 401) {
      throw new Error(`User Unauthorized. Please login again.`);
    } else {
      var errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }
  } catch (e) {
    console.log(e);
  }
}

export async function getHierarchyOffice() {
  try {
    const response = await fetch(`${api}/officeLocation/getHierarchy`, {
      method: `GET`,
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      return await response.json();
    } else if (response.status === 401) {
      throw new Error(`User Unauthorized. Please login again.`);
    } else {
      var errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }
  } catch (e) {
    console.log(e);
  }
}

export async function RoleUploadData(data) {
  try {
    // const token = localStorage.getItem(`token`);
    const response = await fetch(`${api}/role/bulkUpload`, {
      method: `post`,
      headers: {
        "Content-Type": "application/json",
        // Authorization: token,
      },
      body: JSON.stringify(data),
    });
    console.log(`delete school response...`, response);
    if (response.status === 200) {
      return await response.json();
    } else if (response.status === 401) {
      throw new Error(`User Unauthorized. Please login again.`);
    } else {
      var errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }
  } catch (e) {
    console.log(e);
  }
}

