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
          <p className="mt-20 mb-12 text-7xl font-extrabold">
            BiblioConnect
          </p>
          <p className="mb-4 mx-4 font-bold">
            Find your next favorite book with just a few swipes
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
