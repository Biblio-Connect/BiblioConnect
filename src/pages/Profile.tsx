import { useEffect } from "react";
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

function Profile() {
  const { theme } = useTheme();
  useEffect(() => {
    document.title = "Home - BiblioConnect";
  }, []);

  return (
    <div
      className={`flex justify-center ${theme === "light" ? "bg-light-mode text-ultra-dark-mode" : "bg-dark-mode text-light-mode"}`}
    >
      <div className="w-full flex flex-col items-center text-center">
        <div>
        <p className="mb-4 mx-4 font-bold">
            Name
          </p>
        </div>
        <div>
          <p className="mb-4 mx-4 font-bold">
            Email
          </p>
        </div>
        <div>
          <p className="mb-4 mx-4 font-bold">
            Books you might like
          </p>
        </div>
        <Button>
          <FaArrowRight className="mr-2" />
          Get started
        </Button>
      </div>
    </div>
  );
}

export default Profile;
