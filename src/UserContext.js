import React, { createContext } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  let token = false;

  return (
    <UserContext.Provider value={{ token }}>{children}</UserContext.Provider>
  );
};
