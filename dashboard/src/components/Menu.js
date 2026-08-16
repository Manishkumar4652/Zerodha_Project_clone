// React ko import kar rahe hain.
// useState ek React Hook hai jo component ke andar state manage karta hai.
import React, { useState } from "react";

// React Router se Link import kar rahe hain.
// Link ka use page reload kiye bina ek route se dusre route par jane ke liye hota hai.
import { Link } from "react-router-dom";

import { useDashboardAuth } from "./ProtectedRoute";

// Material UI Icons
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

// Menu naam ka React Functional Component bana rahe hain.
const Menu = () => {
  const { user, logout } = useDashboardAuth();
  // selectedMenu me currently selected menu item ka index store hoga.
  // Initially 0 hai, matlab Dashboard selected hai.
  //
  // setSelectedMenu ka use selectedMenu ki value change karne ke liye hota hai.
  const [selectedMenu, setSelectedMenu] = useState(0);

  // Ye state batati hai ki profile dropdown open hai ya closed.
  // Initially false hai, matlab dropdown closed hai.
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  // Mobile menu display state.
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Jab kisi menu item par click hoga,
  // ye function selected menu ka index update karega.
  const handleMenuClick = (index) => {
    setSelectedMenu(index);
    setIsMobileMenuOpen(false); // Close mobile menu on selection
  };

  // Profile section par click hone par ye function chalega.
  const handleProfileClick = (index) => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  // Normal menu item ke liye CSS class.
  const menuClass = "menu";

  // Selected/active menu item ke liye CSS class.
  // Isme "selected" class extra add ho rahi hai.
  const activeMenuClass = "menu selected";

  // Component ka UI yahan se return hoga.
  return (
    // Pura menu/sidebar/navbar ka main container.
    <div className="menu-container">
      {/* 
        Logo display kar rahe hain.
      */}
      <div className="logo-wrapper">
        <img src="logo.png" alt="Logo" style={{ width: "50px" }} />
        
        {/* Mobile menu toggle button */}
        <button 
          className="mobile-toggle-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "5px"
          }}
        >
          {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* 
        Saare menu items aur profile section ko
        "menus" container ke andar rakh rahe hain.
      */}
      <div className={isMobileMenuOpen ? "menus mobile-open" : "menus"}>
        {/* Menu items ki unordered list */}
        <ul>
          {/* ================= DASHBOARD ================= */}

          <li>
            {/* 
              Link React Router ka component hai.

              to="/" -> Dashboard ke route par jayega.
              onClick -> click hone par selectedMenu ko 0 karega.
            */}
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(0)}
            >
              {/* 
                Agar selectedMenu 0 hai,
                to "menu selected" class lagegi.

                Otherwise sirf "menu" class lagegi.
              */}
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>

          {/* ================= ORDERS ================= */}

          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleMenuClick(1)}
            >
              {/* Orders selected hai ya nahi check kar rahe hain */}
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>

          {/* ================= HOLDINGS ================= */}

          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            >
              {/* Holdings selected hai ya nahi check kar rahe hain */}
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>

          {/* ================= POSITIONS ================= */}

          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
              {/* Positions selected hai ya nahi check kar rahe hain */}
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>

          {/* ================= FUNDS ================= */}

          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="funds"
              onClick={() => handleMenuClick(4)}
            >
              {/* Funds selected hai ya nahi check kar rahe hain */}
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>

          {/* ================= APPS ================= */}

          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => handleMenuClick(6)}
            >
              {/* Apps selected hai ya nahi check kar rahe hain */}
              <p className={selectedMenu === 6 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>

        {/* 
          Menu items ke neeche horizontal line create kar raha hai.
        */}
        <hr />

        {/* ================= PROFILE ================= */}

        {/* 
          Profile section par click karne se
          handleProfileClick function execute hoga.
        */}
        {(() => {
          const initials = user?.username
            ? user.username.split(" ").map(n => n[0]).join("").substring(0, 2).toUpperCase()
            : "ZU";
          return (
            <div className="profile" onClick={handleProfileClick} style={{ position: "relative", cursor: "pointer" }}>
              {/* 
                User ka avatar.
              */}
              <div className="avatar">{initials}</div>

              {/* Username display kar rahe hain */}
              <p className="username">{user?.username || "User"}</p>

              {isProfileDropdownOpen && (
                <div style={{
                  position: "absolute",
                  bottom: "70px",
                  left: "10px",
                  backgroundColor: "white",
                  border: "1px solid #e0e0e0",
                  borderRadius: "4px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                  padding: "15px",
                  width: "200px",
                  zIndex: 1000,
                  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                  textAlign: "left"
                }}
                onClick={(e) => e.stopPropagation()}
                >
                  <div style={{ marginBottom: "12px", borderBottom: "1px solid #f0f0f0", paddingBottom: "10px" }}>
                    <p style={{ margin: 0, fontWeight: "bold", fontSize: "0.9rem", color: "#333" }}>{user?.username}</p>
                    <p style={{ margin: "2px 0 0 0", fontSize: "0.8rem", color: "#888", wordBreak: "break-all" }}>{user?.email}</p>
                  </div>
                  <button 
                    onClick={logout}
                    style={{
                      width: "100%",
                      padding: "8px 12px",
                      backgroundColor: "#df514c",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                      fontWeight: "500",
                      fontSize: "0.85rem",
                      transition: "background-color 0.2s"
                    }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#c93d39"}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#df514c"}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          );
        })()}
      </div>
    </div>
  );
};

// Menu component ko export kar rahe hain.
// Isse hum kisi doosri file me import karke use kar sakte hain.
export default Menu;
