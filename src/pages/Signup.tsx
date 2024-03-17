import React from "react";
import SignupForm from "../components/SignupForm";
import { useTheme } from "../contexts/themeContext";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

interface ButtonProps {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  const navigate = useNavigate();
  const { theme } = useTheme();

  const buttonClass = `flex items-center justify-center w-full my-1 py-2 text-base font-medium border border-transparent rounded-lg hover:border-indigo-600 cursor-pointer transition-colors duration-200 ${
    theme === "light"
      ? "bg-ultra-light-mode text-ultra-dark-mode"
      : "bg-ultra-dark-mode text-light-mode"
  }`;

  const goToPage = () => {
    navigate("/login");
  };

  return (
    <button className={buttonClass} onClick={goToPage}>
      {children}
    </button>
  );
};

interface SignupProps {
  onSignup: (email: string, password: string) => void;
}

const Signup: React.FC<SignupProps> = ({ onSignup }) => {
  const { theme } = useTheme();
  return (
    <div className="flex justify-center items-center h-screen">
      <div
        className={`max-w-md w-full p-6 rounded-md shadow-md ${theme === "light" ? "bg-ultra-light-mode text-ultra-dark-mode" : "bg-ultra-dark-mode text-light-mode"}`}
      >
        <h2 className="text-2xl font-semibold text-center">Sign Up</h2>
        <SignupForm onSignup={onSignup} />
        <Button>
          <FaArrowRight className="mr-2" />
          Already have an account? Login
        </Button>
      </div>
    </div>
  );
};

export default Signup;
