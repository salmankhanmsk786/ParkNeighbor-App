import React, { createContext, useState, useContext } from 'react';

const UserModeContext = createContext({
  isHostMode: false,
  setIsHostMode: () => {},
});

export const useUserMode = () => useContext(UserModeContext);

export const UserModeProvider = ({ children }) => {
  const [isHostMode, setIsHostMode] = useState(false);

  return (
    <UserModeContext.Provider value={{ isHostMode, setIsHostMode }}>
      {children}
    </UserModeContext.Provider>
  );
};

export default UserModeContext; 