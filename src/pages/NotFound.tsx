import React, { useEffect } from "react";
import { useTheme } from "../contexts/themeContext";
import { FaArrowLeft } from "react-icons/fa";
import LinkButton from "../components/LinkButton";

const NotFound: React.FC = () => {
  const { theme } = useTheme();

  useEffect(() => {
    document.title = "Error 404 - BiblioConnect";
  }, []);

  return (
    <div
      className={`flex justify-center w-full flex-col items-center text-center ${theme === "light" ? "bg-light-mode text-ultra-dark-mode" : "bg-dark-mode text-light-mode"}`}
    >
      <p className="mt-20 mb-12 text-7xl font-extrabold">
        Error 404 - Page Not Found
      </p>
      <p className="mb-4 mx-4 font-bold">
        The page you are looking for does not exist
      </p>
      <LinkButton link="/">
        <FaArrowLeft className="mr-2" />
        Go back to safety
      </LinkButton>
    </div>
  );
};

export default NotFound;
