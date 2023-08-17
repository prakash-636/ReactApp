import React, { createContext, useContext, useReducer } from "react";

// Create a context
const GlobalStateContext = createContext();

// Define a reducer function to manage state changes
const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

// Create a provider component
const GlobalStateProvider = ({ children }) => {
  const [login, setLogin] = useReducer(reducer, true);

  return (
    <GlobalStateContext.Provider value={{ login, setLogin }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

// Custom hook to access the global state and dispatch actions
const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error("useGlobalState must be used within a GlobalStateProvider");
  }
  return context;
};

export { GlobalStateProvider, useGlobalState };
