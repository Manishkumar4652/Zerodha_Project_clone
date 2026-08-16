import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const DashboardAuthContext = createContext(null);

export const useDashboardAuth = () => useContext(DashboardAuthContext);

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
  document.cookie = `${name}=${value || ""}${expires}; path=/; SameSite=Lax`;
};

// Helper to clear cookie
const clearCookie = (name) => {
  document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
};

const ProtectedRoute = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const logout = () => {
    // Clear cookie and redirect to login page
    clearCookie("token");
    window.location.href = `${process.env.REACT_APP_FRONTEND_URL || "http://localhost:3000"}/login`;
  };

  useEffect(() => {
    const checkAuth = async () => {
      // Check if token is in URL query parameters (useful for cross-domain redirect)
      const urlParams = new URLSearchParams(window.location.search);
      let token = urlParams.get("token");
      if (token) {
        setCookie("token", token, 1);
        // Clear token from URL to keep it clean
        window.history.replaceState({}, document.title, window.location.pathname);
      } else {
        token = getCookie("token");
      }

      if (!token) {
        window.location.href = `${process.env.REACT_APP_FRONTEND_URL || "http://localhost:3000"}/login`;
        return;
      }

      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL || "http://localhost:3002"}/api/auth/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (res.data && res.data.user) {
          axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
          setUser(res.data.user);
        } else {
          logout();
        }
      } catch (err) {
        console.error("Auth check failed:", err.message);
        logout();
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (loading) {
    return (
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
      }}>
        <div style={{
          width: "40px",
          height: "40px",
          border: "4px solid #f3f3f3",
          borderTop: "4px solid #387ed1",
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
          marginBottom: "15px"
        }}></div>
        <p style={{ color: "#666" }}>Loading your account...</p>
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <DashboardAuthContext.Provider value={{ user, logout }}>
      {children}
    </DashboardAuthContext.Provider>
  );
};

export default ProtectedRoute;
