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
      className={`min-w-screen flex flex-col justify-center items-center text-center ${theme === "light" ? "bg-light-mode text-ultra-dark-mode" : "bg-dark-mode text-light-mode"}`}
    >
      <div>
        <div className="my-10 text-7xl text-center font-bold ">Rules</div>

        <div className="mb-1 text-3xl font-serif font-bold">General Rules:</div>
        <div className="mb-1 ml-3 text-lg font-mono">
          • The web-app is one person, outside help is allowed.
          <br />
          • Click "Green" if you like the books, "Red" if you dont like it.
          <br />
          • Click on it until there is no more left!
          <br />
          <br />
          <br />
        </div>
      </div>

      <div className="mb-1 ml-3 text-3xl font-serif font-bold">Gameplay:</div>
      <div className="mb-1 ml-3 text-lg font-mono">
        <div>
          • You get certain amounts of books.
          <br />
          • Click green or red depending on your preferences.
          <br />
          • Do it again and again until there is none left.
          <br />
          <br />
          <br />
        </div>
      </div>

      <div className="mb-1 text-3xl font-serif font-bold">Ending:</div>
      <div className="mb-1 text-lg font-mono">
        Once you are done, we will show you 2 recommendations of books you might
        like. <br />
        <br />
        <br />
      </div>
      <Button>
        <FaArrowRight className="mr-2" />
        Get started
      </Button>
    </div>
  );
};

export default Rules;
