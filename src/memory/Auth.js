import React, { createContext, useReducer } from "react";

const initState = {
  token: '',
  authenticated: false
};

function reductor(state, action) {
  switch (action.type) {
    case "place": {
      const newState = {
        token: action.token,
        authenticated: true
      };
      return newState;
    }

    default:
      throw new Error();
  }
}

export let ContextAuth = createContext(null);

function AuthMemory({ children }) {
  const value = useReducer(reductor, initState);
  return <ContextAuth.Provider value={value}>{children}</ContextAuth.Provider>;
}

export default AuthMemory;
