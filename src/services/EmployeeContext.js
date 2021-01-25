import React from 'react';

const initialState = {
  family: [],
  experience: [],
  education:[],
  document:[]
};

export const EmployeeContext = React.createContext(initialState);
export default  ({children}) => {
  const [state, setState] = React.useState(initialState);
  console.log(state,"empolyeeeContext121");

  return (
    <EmployeeContext.Provider value={[state, setState]}>
      {children}
    </EmployeeContext.Provider>
  );
};