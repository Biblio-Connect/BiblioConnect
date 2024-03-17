import React, { useState, useEffect } from "react";
import { useTheme } from "../contexts/themeContext";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

interface ButtonProps {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
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
    navigate("/binder");
  };

  return (
    <button className={buttonClass} onClick={goToPage}>
      {children}
    </button>
  );
};

const HowItWorks: React.FC = () => {
  const { theme } = useTheme();
  return (
    <div
      className={`min-w-screen flex flex-col justify-center items-center text-center ${theme === "light" ? "bg-light-mode text-ultra-dark-mode" : "bg-dark-mode text-light-mode"}`}
    >
      <div className="my-10 text-7xl text-center font-bold ">How It Works</div>
      <div>
        <div className="my-4 text-3xl font-bold">To start:</div>
        <div className="mb-10 text-lg font-mono">
          • Signup/Login with your email and password.
          <br />• Read these guidelines!
        </div>
      </div>

      <div>
        <div className="my-4 text-3xl font-bold">
          When you're ready to start getting suggestions:
        </div>
        <div className="mb-10 text-lg font-mono">
          • Press "Get Started" at the bottom of this page.
          <br />
          • You will be presented with a book and some information about it.
          <br />
          • Click the "check mark" if you might like the book shown based on
          that information, or the "X" if you dont like it.
          <br />• Continue until there are no more left!
        </div>
      </div>

      <div>
        <div className="my-4 text-3xl font-bold">Once you are done:</div>
        <div className="mb-10 text-lg font-mono">
          We will give you 2 recommendations of books you might like based on
          your choices.
        </div>
      </div>
      <Button>
        <FaArrowRight className="mr-2" />
        Get started
      </Button>
    </div>
  );
};

export default HowItWorks;
