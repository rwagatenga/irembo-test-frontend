/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useState } from 'react';

import { User } from '../interfaces/User';
// Define the type for the AuthContext
type AuthContextType = {
  isAuthenticated: boolean;
  user: User | null;
  register: (accessToken: string, user: User) => void;
  login: (accessToken: string, user: User) => void;
  logout: () => void;
};

// Create the AuthContext
export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  user: null,
  register: () => {},
  login: () => {},
  logout: () => {},
});

// Create the AuthProvider
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const register = (accessToken: string, user: User) => {
    localStorage.setItem('accessToken', accessToken);
    setIsAuthenticated(true);
    setUser(user);
  };

  const login = (accessToken: string, user: User) => {
    console.log('Triggered');
    localStorage.setItem('accessToken', accessToken);
    setIsAuthenticated(true);
    setUser(user);
  };

  const logout = () => {
    localStorage.removeItem('accessToken');
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, register, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
