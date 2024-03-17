import React, { useEffect, useState } from "react";
import { useTheme } from "../contexts/themeContext";
import { useNavigate } from "react-router-dom";

interface LinkButtonProps {
  link: string;
  children: React.ReactNode;
}

const LinkButton: React.FC<LinkButtonProps> = ({ link, children }) => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const buttonClass = `flex items-center justify-center mx-2 my-1 px-4 py-2 text-2xl font-medium border border-transparent rounded-lg hover:border-indigo-600 cursor-pointer transition-colors duration-200 ${
    theme === "light"
      ? "bg-ultra-light-mode text-ultra-dark-mode"
      : "bg-ultra-dark-mode text-light-mode"
  } ${isSmallScreen ? "text-4xl px-8 py-4" : ""}`;

  const goToPage = () => {
    navigate(link);
  };

  return (
    <button className={buttonClass} onClick={goToPage}>
      {children}
    </button>
  );
};

export default LinkButton;
