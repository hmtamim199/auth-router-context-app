import React, { createContext } from 'react';

const authContext = createContext();

const UserContext = ({children}) => {
  const user = {displayName:'akash'}
  const userInfo = {user}
  return (
    <authContext.Provider value={userInfo}>
      {children}
    </authContext.Provider>
  );
};

export default UserContext;