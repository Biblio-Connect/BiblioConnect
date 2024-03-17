import React from "react";
import { useTheme } from "../contexts/themeContext";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

interface ButtonProps {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  const navigate = useNavigate();
  const { theme } = useTheme();

  const buttonClass = `flex items-center justify-center mx-2 my-1 px-4 py-2 text-base font-medium border border-transparent rounded-lg hover:border-indigo-600 cursor-pointer transition-colors duration-200 ${
    theme === "light"
      ? "bg-ultra-light-mode text-ultra-dark-mode"
      : "bg-ultra-dark-mode text-light-mode"
  }`;

  const goToPage = () => {
    navigate("/binder");
  };

  return (
    <button className={buttonClass} onClick={goToPage}>
      {children}
    </button>
  );
};

const Rules: React.FC = () => {
  const { theme } = useTheme();
  return (
    <div
      className={`min-w-screen  ${theme === "light" ? "bg-light-mode text-ultra-dark-mode" : "bg-dark-mode text-light-mode"}`}
    >
      <div>
        <h1 className= "">Rules:</h1>

        <h2>General Rules</h2>
        <ol>
          <li>The web-app is one person, outside help is allowed.</li>
          <li>
            Click "Green" if you like the books, "Red" if you dont like it.
          </li>
          <li>Click on it until there is no more left!</li>
        </ol>

        <h2>Setup</h2>
        <p>Describe the initial setup of the game.</p>

        <h2>Gameplay</h2>
        <ol>
          <li>You get certain amounts of books.</li>
          <li>Click green or red depending on your preferences.</li>
          <li>Do it again and again until there is none left.</li>
        </ol>

        <h2>Ending</h2>
        <p>
          Once you are done, we will show you 2 recommendations of books you
          might{" "}
        </p>
      </div>
      <Button>
        <FaArrowRight className="mr-2" />
        Get started
      </Button>
    </div>
  );
};

export default Rules;
