import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useTheme } from "../contexts/themeContext";
import { FaMoon, FaSun } from "react-icons/fa";

const links = [
  { to: "/", text: "Home" },
  { to: "/profile", text: "Profile" },
];

const Links: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  const location = useLocation();

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          className={`py-4 px-4 text-center hover:font-extrabold text-4xl md:text-lg ${
            location.pathname === link.to ? "font-extrabold" : ""
          }`}
          onClick={onClick}
          style={{ width: "100px" }}
        >
          {link.text}
        </Link>
      ))}
    </>
  );
};

const ThemeToggleButton: React.FC<{ onClick: () => void; theme: string }> = ({
  onClick,
  theme,
}) => (
  <button onClick={onClick} className="text-5xl md:text-3xl md:ml-4">
    {theme === "light" ? <FaMoon /> : <FaSun />}
  </button>
);

const Navbar: React.FC = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const getThemeCSS = () => {
    return theme === "light"
      ? "bg-ultra-light-mode text-ultra-dark-mode"
      : "bg-ultra-dark-mode text-light-mode";
  };

  const getStyleForMobileNavbar = (): string => {
    const mobileNavbarStyle = `fixed top-24 left-0 w-screen rounded-br-lg rounded-bl-lg ${getThemeCSS()} flex flex-col transition-opacity transition-height`;
    return isMobile
      ? `${mobileNavbarStyle} ${isOpen ? "opacity-100 h-auto" : "opacity-0 h-0"}`
      : "w-full flex justify-center space-x-4 items-center";
  };

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`w-full text-center flex justify-between px-4 h-24 md:h-16 items-center ${getThemeCSS()}`}
    >
      <div className="flex justify-between w-full items-center">
        <div className="items-center">
          {isMobile && (
            <button className="text-6xl" onClick={handleMenuClick}>
              ☰
            </button>
          )}
          {!isMobile && (
            <img
              src={`/BiblioConnect${theme === "light" ? "Light" : "Dark"}.svg`}
              alt="Logo"
              className="max-h-14"
            />
          )}
        </div>
        <div className={`items-center ${getStyleForMobileNavbar()}`}>
          {(isOpen || !isMobile) && <Links onClick={handleMenuClick} />}
        </div>
        <div className="items-center">
          {isMobile ? (
            <ThemeToggleButton onClick={toggleTheme} theme={theme} />
          ) : (
            <ThemeToggleButton onClick={toggleTheme} theme={theme} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
