import { useEffect } from "react";
import { useTheme } from "../contexts/themeContext";
import { FaArrowRight } from "react-icons/fa";
import LinkButton from "../components/LinkButton";

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
        <LinkButton link="/signup">
          <FaArrowRight className="mr-2" />
          Get started
        </LinkButton>
      </div>
    </div>
  );
}

export default Home;
