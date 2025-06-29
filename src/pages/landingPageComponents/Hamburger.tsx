// HamburgerMenu.tsx
import { useState } from "react";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsOpen(false); // Close menu after navigation
  };

  return (
    <>
      {/* Hamburger Button */}
      <div className="hamburger-button">
        <Button
          type="text"
          icon={isOpen ? <CloseOutlined /> : <MenuOutlined />}
          onClick={toggleMenu}
          size="large"
          className="menu-trigger"
        />
      </div>

      {/* Overlay */}
      {isOpen && <div className="menu-overlay" onClick={toggleMenu}></div>}

      {/* Side Menu */}
      <div className={`side-menu ${isOpen ? "side-menu-open" : ""}`}>
        <div className="menu-header">
          <h3>Menu</h3>
        </div>

        <div className="menu-items">
          <div
            className="menu-item"
            onClick={() => handleNavigation("/find-filter")}
          >
            <span>🔍 Find & Filter</span>
          </div>

          <div className="menu-item" onClick={() => handleNavigation("/about")}>
            <span>👥 About Us</span>
          </div>

          <div className="menu-item" onClick={() => handleNavigation("/")}>
            <span>🏠 Home</span>
          </div>

          <div className="menu-item" onClick={() => handleNavigation("/login")}>
            <span>👤 Log In/Register</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;
