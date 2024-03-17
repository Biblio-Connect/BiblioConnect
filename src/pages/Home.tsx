import { useEffect, useState } from "react";
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
    navigate("/signup");
  };

  return (
    <button className={buttonClass} onClick={goToPage}>
      {children}
    </button>
  );
};


function Home() {
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
          <p className="mb-4 mx-4 text-4xl font-bold">BiblioConnect</p>
        </div>
        <div>
          <p className="mb-4 mx-4 font-bold">
            Find your next favorite book with just a few swipes
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

export default Home;
