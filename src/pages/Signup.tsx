import React from "react";
import SignupForm from "../components/SignupForm";
import { useTheme } from "../contexts/themeContext";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

interface LinkButtonProps {
  link: string;
  children: React.ReactNode;
}

const LinkButton: React.FC<LinkButtonProps> = ({ link, children }) => {
  const navigate = useNavigate();
  const { theme } = useTheme();

  const buttonClass = `flex items-center justify-center w-full my-1 py-2 font-medium border border-transparent rounded-lg hover:border-indigo-600 cursor-pointer transition-colors duration-200 ${
    theme === "light"
      ? "bg-ultra-light-mode text-ultra-dark-mode"
      : "bg-ultra-dark-mode text-light-mode"
  }`;

  const goToPage = () => {
    navigate(link);
  };

  return (
    <button className={buttonClass} onClick={goToPage}>
      {children}
    </button>
  );
};

const handleSignup = async (
  email: string,
  password: string,
  go: () => void,
) => {
  try {
    const response = await fetch("http://localhost:3333/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    if (response.status === 401) {
      console.error("Server error");
      return;
    }
    const data = await response.json();
    console.log(
      "Data from API",
      JSON.stringify({ email: data.email, message: data.message }),
    );
    console.log(JSON.stringify(data));
    if (data.message === "Registration successful") {
      console.log("Registered successfully with token:", data.email);
      go();
    } else {
      console.log("Registration Failed", data.message);
    }
  } catch (err) {
    console.error("Error during signup:", err);
    console.error("An error occurred. Please try again.");
  }
};

const Signup = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="flex justify-center items-center h-full">
      <div
        className={`max-w-md w-full p-6 rounded-md shadow-md ${theme === "light" ? "bg-ultra-light-mode text-ultra-dark-mode" : "bg-ultra-dark-mode text-light-mode"}`}
      >
        <h2 className="text-2xl font-semibold text-center">Sign Up</h2>
        <SignupForm
          onSignup={(email, password) =>
            handleSignup(email, password, () => goToLogin())
          }
        />
        <LinkButton link="/login">
          <FaArrowRight className="mr-2" />
          Already have an account? Login
        </LinkButton>
      </div>
    </div>
  );
};

export default Signup;
