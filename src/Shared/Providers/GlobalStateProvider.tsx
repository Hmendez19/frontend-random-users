import React, { useState, ReactNode } from 'react';
import { GlobalStateContext } from '../Contexts/GlobalStateContext';
export const GlobalStateProvider:React.FC<{children:ReactNode}> = ({ children }) => {
  const [globalState, setGlobalState] = useState({
    users:[]
  });

  const updateGlobalState = (newState:object) => {
    setGlobalState((prevGlobalState) => ({
      ...prevGlobalState,
      ...newState,
    }));
  };

  return (
    <GlobalStateContext.Provider value={{ globalState, updateGlobalState }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

