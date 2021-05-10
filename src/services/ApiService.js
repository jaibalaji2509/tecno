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
