import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([{ name: 'Admin', permissions: ['Read', 'Write', 'Delete'] }, { name: 'User', permissions: ['Read'] }]);

  return (
    <AppContext.Provider value={{ users, setUsers, roles, setRoles }}>
      {children}
    </AppContext.Provider>
  );
};
