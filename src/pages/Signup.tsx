import React from "react";
import SignupForm from "../components/SignupForm";
import { useTheme } from "../contexts/themeContext";

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
      </div>
    </div>
  );
};

export default Signup;
