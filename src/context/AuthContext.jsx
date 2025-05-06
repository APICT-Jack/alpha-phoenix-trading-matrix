// src/context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';
import { login, signup, logout, checkAuth } from '../services/authService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        const userData = await checkAuth();
        setUser(userData);
      } catch (err) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    verifyAuth();
  }, []);

  const signIn = async (email, password) => {
    try {
      const userData = await login(email, password);
      setUser(userData);
      setError(null);
      return true;
    } catch (err) {
      setError(err.message || 'Login failed');
      return false;
    }
  };

  const register = async (name, email, password) => {
    try {
      const userData = await signup(name, email, password);
      setUser(userData);
      setError(null);
      return true;
    } catch (err) {
      setError(err.message || 'Signup failed');
      return false;
    }
  };

  const signOut = async () => {
    try {
      await logout();
      setUser(null);
      setError(null);
    } catch (err) {
      setError(err.message || 'Logout failed');
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        error,
        signIn,
        register,
        signOut,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);