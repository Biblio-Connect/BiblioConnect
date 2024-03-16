import { useEffect } from "react";
import { useTheme } from "../contexts/themeContext";

function Home() {
  const { theme } = useTheme();
  useEffect(() => {
    document.title = "Home - BiblioConnect";
  }, []);

  return (
    <div
      className={`flex justify-center ${theme === "light" ? "bg-light-mode text-ultra-dark-mode" : "bg-dark-mode text-light-mode"}`}
    >
      <div className="w-full">
        <div className="flex flex-col items-center text-center">
          <p className="mb-4 mx-4 text-4xl font-bold">
            BiblioConnect
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <p className="mb-4 mx-4 font-bold">
            Find your next favorite book with just a few swipes
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
