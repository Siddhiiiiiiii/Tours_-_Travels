import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
 
    setUser(userData);
  };

  const logout = () => {
 
    setUser(null);
  };

  const isAuthenticated = () => {
    return !!user; 
  };

  const value = {
    user,
    login,
    logout,
    isAuthenticated, 
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
