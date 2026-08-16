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

// Helper to clear cookie
const clearCookie = (name) => {
  document.cookie = `${name}=; Max-Age=0; path=/; domain=localhost; SameSite=Lax`;
};

const ProtectedRoute = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const logout = () => {
    // Clear cookie and redirect to login page on port 3000
    clearCookie("token");
    window.location.href = "http://localhost:3000/login";
  };

  useEffect(() => {
    const checkAuth = async () => {
      const token = getCookie("token");
      if (!token) {
        window.location.href = "http://localhost:3000/login";
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
