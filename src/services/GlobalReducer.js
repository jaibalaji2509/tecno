const GlobalReducer = (state, action) => {
    switch (action.type) {
      case "ENTITY":
        return {
          ...state,
          entity: action.value,
        };
      case "TOKEN":
        return {
          ...state,
          token: action.value,
        };
  
      case "PROFILE":
        return {
          ...state,
          profile: action.value,
          token: action.token,
        };
  
      case "PAGEHEADERCONFIGURATION":
        return {
          ...state,
          pageheaderconfiguration: action.value,
        };
        
        case "EMPLOYEEDATA":
          return {
            ...state,
            employeedata: action.value,
          };
  
      case "RemoveEmployeeData":
        return {
          ...state,
          employeedata: {},
        };
      default:
        return {
          ...state,
        };
    }
  };
  
  export default GlobalReducer;
  