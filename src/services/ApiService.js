import Axios from "axios";
import { toast } from "react-toastify";


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
