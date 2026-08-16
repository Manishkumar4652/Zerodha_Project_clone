import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  // Helper to get cookie value
  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
    return null;
  };

  // Helper to set cookie
  const setCookie = (name, value, days = 1) => {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = `; expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value || ""}${expires}; path=/; domain=localhost; SameSite=Lax`;
  };

  // Helper to clear cookie
  const clearCookie = (name) => {
    document.cookie = `${name}=; Max-Age=0; path=/; domain=localhost; SameSite=Lax`;
  };

  // Verify auth on mount
  useEffect(() => {
    const verifyUser = async () => {
      const token = getCookie("token");
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const res = await axios.get("http://localhost:3002/api/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (res.data && res.data.user) {
          axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
          setUser(res.data.user);
          setIsAuthenticated(true);
        } else {
          clearCookie("token");
          delete axios.defaults.headers.common["Authorization"];
        }
      } catch (err) {
        console.error("Auth verification failed:", err.message);
        clearCookie("token");
        delete axios.defaults.headers.common["Authorization"];
      } finally {
        setLoading(false);
      }
    };

    verifyUser();
  }, []);

  const signup = async (username, email, password) => {
    try {
      const res = await axios.post("http://localhost:3002/api/auth/signup", {
        username,
        email,
        password,
      });
      return res.data;
    } catch (err) {
      throw err.response?.data?.message || "Signup failed. Please try again.";
    }
  };

  const login = async (email, password) => {
    try {
      const res = await axios.post("http://localhost:3002/api/auth/login", {
        email,
        password,
      });
      if (res.data && res.data.token) {
        setCookie("token", res.data.token, 1);
        axios.defaults.headers.common["Authorization"] = `Bearer ${res.data.token}`;
        setUser(res.data.user);
        setIsAuthenticated(true);
        return res.data;
      } else {
        throw new Error("No token returned");
      }
    } catch (err) {
      throw err.response?.data?.message || "Login failed. Please check credentials.";
    }
  };

  const logout = async () => {
    try {
      const token = getCookie("token");
      if (token) {
        await axios.post("http://localhost:3002/api/auth/logout", {}, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
      }
    } catch (err) {
      console.error("Backend logout error:", err.message);
    } finally {
      clearCookie("token");
      delete axios.defaults.headers.common["Authorization"];
      setUser(null);
      setIsAuthenticated(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, loading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
