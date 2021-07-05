// import Axios from "axios";
import { toast } from "react-toastify";



export async function getAllRole(query) {
  let querys = query || ``;
  const token = localStorage.getItem(`token`);
  const response = await fetch(`/role/getAllRoles?${querys}`, {
    method: `get`,
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
  if (response.status === 200) {
    return await response.json();
  } else if (response.status === 401) {
    localStorage.removeItem("token");
    window.location.pathname = "/login";
    throw new Error(`User Unauthorized. Please login again.`);
  } else {
    let errorResponse = await response.json();
    throw new Error(errorResponse.error);
  }
}
export async function getFutureJob(body) {
  try {
    let bodys = body || ``;
    const token = localStorage.getItem(`token`);
    const response = await fetch(`/employeeMovement/future?${bodys}`, {
      method: `get`,
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    if (response.status === 200) {
      return await response.json();
    } else if (response.status === 401) {
      localStorage.removeItem("token");
      window.location.pathname = "/login";
      throw new Error(`User Unauthorized. Please login again.`);
    } else {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }
  } catch (e) {
    throw e;
  }
}
export async function getTree(query) {
  try {
    let token = localStorage.getItem("token");
    const response = await fetch(`/officeLocation/tree${query}`, {
      method: `get`,
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    if (response.status === 401) {
      localStorage.removeItem("token");
      window.location.pathname = "/login";
      throw new Error(`User Unauthorized. Please login again.`);
    }
    return await response.json();
  } catch (e) {
    throw e;
  }
}
export async function addPromoteEmployee(body) {
  let data = body;
  let token = localStorage.getItem("token");
  let response;
  try {
    response = await fetch("/employeeMovement/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
      body: JSON.stringify(data),
    });
    if (response.status === 401) {
      localStorage.removeItem("token");
      window.location.pathname = "/login";
      throw new Error(`User Unauthorized. Please login again.`);
    }
    return response.json();
  } catch (e) {
    throw e;
  }
}
export async function getAllDepartment() {
  const token = localStorage.getItem(`token`);
  const response = await fetch(`/department/getAll`, {
    method: `get`,
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
  if (response.status === 200) {
    return await response.json();
  } else if (response.status === 401) {
    localStorage.removeItem("token");
    window.location.pathname = "/login";
    throw new Error(`User Unauthorized. Please login again.`);
  } else {
    let errorResponse = await response.json();
    throw new Error(errorResponse.error);
  }
}
export async function getAllDesignation(id) {
  const token = localStorage.getItem(`token`);
  const response = await fetch(`/designation/getAll`, {
    method: `get`,
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
  if (response.status === 200) {
    return await response.json();
  } else if (response.status === 401) {
    localStorage.removeItem("token");
    window.location.pathname = "/login";
    throw new Error(`User Unauthorized. Please login again.`);
  } else {
    let errorResponse = await response.json();
    throw new Error(errorResponse.error);
  }
}
export async function getAllEmployeeMovement(body) {
  try {
    let bodys = body || ``;
    const token = localStorage.getItem(`token`);
    const response = await fetch(`/employeeMovement/getAll?${bodys}`, {
      method: `get`,
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    if (response.status === 200) {
      return await response.json();
    } else if (response.status === 401) {
      localStorage.removeItem("token");
      window.location.pathname = "/login";
      throw new Error(`User Unauthorized. Please login again.`);
    } else {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }
  } catch (e) {
    throw e;
  }
}
export async function getAllRoleMaster(query) {
  let querys = query || ``;
  const token = localStorage.getItem(`token`);
  const response = await fetch(`/roleMaster/getAll?${querys}`, {
    method: `get`,
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
  if (response.status === 200) {
    return await response.json();
  } else if (response.status === 401) {
    localStorage.removeItem("token");
    window.location.pathname = "/login";
    throw new Error(`User Unauthorized. Please login again.`);
  } else {
    let errorResponse = await response.json();
    throw new Error(errorResponse.error);
  }
}

export async function getRoleByUser(query) {
  let querys = query || ``;
  const token = localStorage.getItem(`token`);
  const response = await fetch(`/role/getRoleByUser?${querys}`, {
    method: `get`,
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
  if (response.status === 200) {
    return await response.json();
  } else if (response.status === 401) {
    localStorage.removeItem("token");
    window.location.pathname = "/login";
    throw new Error(`User Unauthorized. Please login again.`);
  } else {
    let errorResponse = await response.json();
    throw new Error(errorResponse.error);
  }
}

export async function updateEmployeeMovement(body) {
  let data = JSON.stringify(body);
  let token = localStorage.getItem("token");
  try {
    const response = await fetch(`/employeeMovement/update`, {
      method: `put`,
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: data,
    });
    if (response.status === 401) {
      localStorage.removeItem("token");
      window.location.pathname = "/login";
      throw new Error(`User Unauthorized. Please login again.`);
    }
    return await response.json();
  } catch (e) {
    throw e;
  }
}

export async function createOfficeType(body) {
  try {
    let token = localStorage.getItem("token");
    const response = await fetch(`/saveOfficeType`, {
      method: `post`,
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: body,
    });
    if (response.status === 401) {
      localStorage.removeItem("token");
      window.location.pathname = "/login";
      throw new Error(`User Unauthorized. Please login again.`);
    }
    return await response.json();
  } catch (e) {
    throw e;
  }
}
export async function deleteOfficeType(id) {
  try {
    const token = localStorage.getItem(`token`);
    const response = await fetch(`/deleteOfficeType/${id}`, {
      method: `delete`,
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    if (response.status === 200) {
      return await response.json();
    } else if (response.status === 401) {
      localStorage.removeItem("token");
      window.location.pathname = "/login";
      throw new Error(`User Unauthorized. Please login again.`);
    } else {
      var errorResponse = await response.json();
      throw errorResponse.error;
    }
  } catch (e) {
    throw e;
  }
}
export async function getOfficeType(query) {
  const token = localStorage.getItem(`token`);
  let querys = query || "";
  const response = await fetch(`/getAllOfficeType?${querys}`, {
    method: `get`,
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
  if (response.status === 200) {
    return await response.json();
  } else if (response.status === 401) {
    localStorage.removeItem("token");
    window.location.pathname = "/login";
    throw new Error(`User Unauthorized. Please login again.`);
  } else {
    let errorResponse = await response.json();
    throw new Error(errorResponse.error);
  }
}
export async function updateOfficeType(
  OfficeType,
  Abbreviation,
  Code,
  ReportingTo,
  id
) {
  let token = localStorage.getItem("token");
  let Report;
  if (ReportingTo.value) {
    Report = ReportingTo.value;
  }
  const response = await fetch(`/updateOfficeType`, {
    method: `put`,
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify({
      officeType: OfficeType,
      abbreviation: Abbreviation,
      code: Code,
      reportingTo: Report,
      id: id,
    }),
  });
  if (response.status === 200) {
    return await response.json();
  } else if (response.status === 401) {
    localStorage.removeItem("token");
    window.location.pathname = "/login";
    throw new Error(`User Unauthorized. Please login again.`);
  } else {
    let errorResponse = await response.json();
    throw new Error(errorResponse.error);
  }
}
export async function getAllConfigurationList(token) {
  try {
    const response = await fetch(`/config/get`, {
      method: `get`,
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    if (response.status === 401) {
      localStorage.removeItem("token");
      window.location.pathname = "/login";
      throw new Error(`User Unauthorized. Please login again.`);
    }
    return await response.json();
  } catch (e) {
    throw e;
  }
}
export async function getEntityList(query, token) {
  const tokens = token || localStorage.getItem(`token`);
  let querys = query || "";
  const response = await fetch(`/entity/getByClient?${querys}`, {
    method: `get`,
    headers: {
      "Content-Type": "application/json",
      Authorization: tokens,
    },
  });
  if (response.status === 200) {
    return await response.json();
  } else {
    let errorResponse = await response.json();
    throw new Error(errorResponse.error);
  }
}
export async function getProfile(token) {
  try {
    const response = await fetch(`/admin/profile`, {
      method: `get`,
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    if (response.status === 200) {
      return await response.json();
    } else if (response.status === 401) {
      localStorage.removeItem("token");
      window.location.pathname = "/login";
      throw new Error(`User Unauthorized. Please login again.`);
    } else {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }
  } catch (e) {
    console.log(e);
    throw e;
  }
}
export async function createOfficeLocation(body) {
  try {
    let token = await localStorage.getItem("token");
    const response = await fetch(`/saveOfficeLocation`, {
      method: `post`,
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: body,
    });
    if (response.status === 401) {
      localStorage.removeItem("token");
      window.location.pathname = "/login";
      throw new Error(`User Unauthorized. Please login again.`);
    }
    if (response.status === 200) {
      return await response.json();
    } else {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }
  } catch (e) {
    toast.error(`${e}`);
  }
}
export async function deleteOfficeLocation(id) {
  try {
    const token = localStorage.getItem(`token`);
    const response = await fetch(`/deleteOfficeLocation/${id}`, {
      method: `delete`,
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    if (response.status === 200) {
      return await response.json();
    } else if (response.status === 401) {
      localStorage.removeItem("token");
      window.location.pathname = "/login";
      throw new Error(`User Unauthorized. Please login again.`);
    } else {
      var errorResponse = await response.json();
      throw errorResponse.error;
    }
  } catch (error) {
    throw error;
  }
}
export async function getHierarchyOffice() {
  try {
    const token = localStorage.getItem(`token`);
    const response = await fetch(`/officeLocation/getHierarchy`, {
      method: `GET`,
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    if (response.status === 200) {
      return await response.json();
    } else if (response.status === 401) {
      localStorage.removeItem("token");
      window.location.pathname = "/login";
      throw new Error(`User Unauthorized. Please login again.`);
    } else {
      var errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }
  } catch (e) {
    console.log(e);
  }
}
export async function getOfficeLocation(query) {
  const token = localStorage.getItem(`token`);
  let querys = query || ``;
  const response = await fetch(`/getAllOfficeLocation?${querys}`, {
    method: `get`,
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
  if (response.status === 200) {
    return await response.json();
  } else if (response.status === 401) {
    localStorage.removeItem("token");
    window.location.pathname = "/login";
    throw new Error(`User Unauthorized. Please login again.`);
  } else {
    let errorResponse = await response.json();
    throw new Error(errorResponse.error);
  }
}
export async function updateOfficeLocation(body) {
  const token = localStorage.getItem(`token`);
  const response = await fetch(`/updateOfficeLocation`, {
    method: `PUT`,
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(body),
  });
  if (response.status === 200) {
    return response.json();
  } else if (response.status === 401) {
    localStorage.removeItem("token");
    window.location.pathname = "/login";
    throw new Error(`User Unauthorized. Please login again.`);
  } else {
    return response.json();
  }
}


export async function getHierarchy() {
  try {
    const token = localStorage.getItem(`token`);
    const response = await fetch(`/officeType/getHierarchy`, {
      method: `GET`,
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    if (response.status === 200) {
      return await response.json();
    } else if (response.status === 401) {
      localStorage.removeItem("token");
      window.location.pathname = "/login";
      throw new Error(`User Unauthorized. Please login again.`);
    } else {
      var errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }
  } catch (e) {
    console.log(e);
  }
}

export async function saveCreateMemberRegister(body) {
  try {
 
    const response = await fetch(`/location`, {
      method: `post`,
      headers: {
        "Content-Type": "application/json",
    
      },
      body:body,
    });
    if (response.status === 401) {
      localStorage.removeItem("token");
      window.location.pathname = "/login";
      throw new Error(`User Unauthorized. Please login again.`);
    }
    return await response.json();
  } catch (e) {
    throw e;
  }
}
  export async function saveCreateCorporation(body) {
    try {
    //   let token = await localStorage.getItem("token");
      const response = await fetch(`/location`, {
        method: `post`,
        headers: {
          "Content-Type": "application/json",
        //   Authorization: token,
        },
        body:body,
      });
      if (response.status === 401) {
        localStorage.removeItem("token");
        window.location.pathname = "/login";
        throw new Error(`User Unauthorized. Please login again.`);
      }
      return await response.json();
    } catch (e) {
      throw e;
    }
  }
  export async function createCountry(body) {
    try {
      // let token = localStorage.getItem("token");
      const response = await fetch(`/saveCountry`, {
        method: `post`,
        headers: {
          "Content-Type": "application/json",
          // Authorization: token,
        },
        body: body,
      });
      if (response.status === 401) {
        localStorage.removeItem("token");
        window.location.pathname = "/login";
        throw new Error(`User Unauthorized. Please login again.`);
      }
      return await response.json();
    } catch (e) {
      throw e;
    }
  }

  
export async function updateCountry(CountryName, Abbreviation1, Code1, id) {
  // const token = localStorage.getItem("token");
  const response = await fetch(`/updateCountry`, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
      // Authorization: token,
    },
    body: JSON.stringify({
      countryName: CountryName,
      abbreviation: Abbreviation1,
      code: Code1,
      id: id,
    }),
  });
  if (response.status === 200) {
    return await response.json();
  } else if (response.status === 401) {
    localStorage.removeItem("token");
    window.location.pathname = "/login";
    throw new Error(`User Unauthorized. Please login again.`);
  } else {
    let errorResponse = await response.json();
    throw new Error(errorResponse.error);
  }
}

export async function createArea(body) {
  try {
    // let token = localStorage.getItem("token");
    const response = await fetch(`/saveArea`, {
      method: `post`,
      headers: {
        "Content-Type": "application/json",
        // Authorization: token,
      },
      body: body,
    });
    if (response.status === 401) {
      localStorage.removeItem("token");
      window.location.pathname = "/login";
      throw new Error(`User Unauthorized. Please login again.`);
    }
    return await response.json();
  } catch (e) {
    throw e;
  }
}


export async function createCity(body) {
  try {
    // const token = localStorage.getItem(`token`);
    const response = await fetch(`/saveCity`, {
      method: `post`,
      headers: {
        "Content-Type": "application/json",
        // Authorization: token,
      },
      body: body,
    });
    if (response.status === 401) {
      localStorage.removeItem("token");
      window.location.pathname = "/login";
      throw new Error(`User Unauthorized. Please login again.`);
    }
    return await response.json();
  } catch (e) {
    throw e;
  }
}

export async function createState(body) {
  try {
    // const token = localStorage.getItem(`token`);
    const response = await fetch(`/saveState`, {
      method: `post`,
      headers: {
        "Content-Type": "application/json",
        // Authorization: token,
      },
      body: body,
    });
    if (response.status === 401) {
      localStorage.removeItem("token");
      window.location.pathname = "/login";
      throw new Error(`User Unauthorized. Please login again.`);
    }
    return await response.json();
  } catch (e) {
    throw e;
  }
}

export async function updateArea(AreaName, Abbreviation4, Code4, Pincode, id) {
  // const token = localStorage.getItem("token");
  const response = await fetch(`/updateArea`, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
      // Authorization: token,
    },
    body: JSON.stringify({
      areaName: AreaName,
      abbreviation: Abbreviation4,
      code: Code4,
      pincode: Pincode,
      id: id,
    }),
  });
  if (response.status === 200) {
    return await response.json();
  } else if (response.status === 401) {
    localStorage.removeItem("token");
    window.location.pathname = "/login";
    throw new Error(`User Unauthorized. Please login again.`);
  } else {
    let errorResponse = await response.json();
    throw new Error(errorResponse.error);
  }
}

export async function updateCity(CityName, Abbreviation3, Code3, id) {
  // const token = localStorage.getItem(`token`);
  const response = await fetch(`/updateCity`, {
    method: `put`,
    headers: {
      "Content-Type": "application/json",
      // Authorization: token,
    },
    body: JSON.stringify({
      cityName: CityName,
      abbreviation: Abbreviation3,
      code: Code3,
      id: id,
    }),
  });
  if (response.status === 200) {
    return await response.json();
  } else if (response.status === 401) {
    localStorage.removeItem("token");
    window.location.pathname = "/login";
    throw new Error(`User Unauthorized. Please login again.`);
  } else {
    let errorResponse = await response.json();
    throw new Error(errorResponse.error);
  }
}

export async function updateState(StateName, Abbreviation2, Code2, id) {
  // const token = localStorage.getItem(`token`);
  const response = await fetch(`/updateState`, {
    method: `put`,
    headers: {
      "Content-Type": "application/json",
      // Authorization: token,
    },
    body: JSON.stringify({
      stateName: StateName,
      abbreviation: Abbreviation2,
      code: Code2,
      id: id,
    }),
  });
  if (response.status === 200) {
    return await response.json();
  } else if (response.status === 401) {
    localStorage.removeItem("token");
    window.location.pathname = "/login";
    throw new Error(`User Unauthorized. Please login again.`);
  } else {
    let errorResponse = await response.json();
    throw new Error(errorResponse.error);
  }
}


export async function getAreaSchema() {
  // const token = localStorage.getItem(`token`);
  const response = await fetch(`/getAllAreas`, {
    method: `get`,
    headers: {
      "Content-Type": "application/json",
      // Authorization: token,
    },
  });
  if (response.status === 200) {
    return await response.json();
  } else if (response.status === 401) {
    localStorage.removeItem("token");
    window.location.pathname = "/login";
    throw new Error(`User Unauthorized. Please login again.`);
  } else {
    let errorResponse = await response.json();
    throw new Error(errorResponse.error);
  }
}

export async function getState(id) {
  // const token = localStorage.getItem(`token`);
  const response = await fetch(`/getAllState?country=${id}`, {
    method: `GET`,
    headers: {
      "Content-Type": "application/json",
      // Authorization: token,
    },
  });

  if (response.status === 200) {
    return await response.json();
  } else if (response.status === 401) {
    localStorage.removeItem("token");
    window.location.pathname = "/login";
    throw new Error(`User Unauthorized. Please login again.`);
  } else {
    let errorResponse = await response.json();
    throw errorResponse;
  }
}

export async function getArea(id) {
  // const token = localStorage.getItem(`token`);
  const response = await fetch(`/getAllArea?id=${id}`, {
    method: `get`,
    headers: {
      "Content-Type": "application/json",
      // Authorization: token,
    },
  });
  if (response.status === 200) {
    return await response.json();
  } else if (response.status === 401) {
    localStorage.removeItem("token");
    window.location.pathname = "/login";
    throw new Error(`User Unauthorized. Please login again.`);
  } else {
    let errorResponse = await response.json();
    throw new Error(errorResponse.error);
  }
}

export async function getCountry() {
  // const token = localStorage.getItem(`token`);
  const response = await fetch(`/getAllCountry`, {
    method: `get`,
    headers: {
      "Content-Type": "application/json",
      // Authorization: token,
    },
  });
  if (response.status === 200) {
    return await response.json();
  } else if (response.status === 401) {
    localStorage.removeItem("token");
    window.location.pathname = "/login";
    throw new Error(`User Unauthorized. Please login again.`);
  } else {
    let errorResponse = await response.json();
    throw new Error(errorResponse.error);
  }
}
export async function getCity(id) {
  try {
    // const token = localStorage.getItem(`token`);
    const response = await fetch(`/getAllCity?state=${id}`, {
      method: `get`,
      headers: {
        "Content-Type": "application/json",
        // Authorization: token,
      },
    });
    if (response.status === 401) {
      localStorage.removeItem("token");
      window.location.pathname = "/login";
      throw new Error(`User Unauthorized. Please login again.`);
    }
    return await response.json();
  } catch (e) {
    throw e;
  }
}
