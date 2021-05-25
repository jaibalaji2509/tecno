import React from "react";
// import State from "../views/components/state/State";
import {
  getEntityList,
  getProfile,
  getAllConfigurationList,
} from "./ApiService";
import GlobalReducer from "./GlobalReducer";

let initialState = { entity: { typeOfOffice: "Office Type" } };

export const GlobalContext = React.createContext(initialState);
const Global = ({ children }) => {
  const [state, dispatch] = React.useReducer(GlobalReducer, initialState);

  React.useEffect(() => {
    getAllProfile();
    getConfigurationList();
  }, []);

  const getAllProfile = async () => {
    var response;
    const Token = await localStorage.getItem("token");
    if (Token) {
      try {
        response = await getProfile(Token);

        if (response) {
          if (response.success) {
            await dispatch({
              type: "PROFILE",
              value: response.data,
              token: Token,
            });
            getAllEntityList(response.data.client._id);
          }
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  const getAllEntityList = async (val) => {
    var response;
    try {
      response = await getEntityList(`client=${val}`);
      if (response) {
        if (response.data) {
          await dispatch({ type: "ENTITY", value: response.data });
        }
      }
    } catch (e) {
      console.log(e);
    }
  };
  const getConfigurationList = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      var response;
      try {
        response = await getAllConfigurationList(token);
        if (response.success) {
          await dispatch({
            type: "PAGEHEADERCONFIGURATION",
            value: response.data,
          });
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <GlobalContext.Provider value={{ State: state, StateDispatch: dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default Global;
