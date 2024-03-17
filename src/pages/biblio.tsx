import React from "react";
import { useTheme } from "../contexts/themeContext";

const Binder: React.FC = () => {
  const { theme } = useTheme();
  return (
    <div
      className={`min-w-screen  ${theme === "light" ? "bg-light-mode text-ultra-dark-mode" : "bg-dark-mode text-light-mode"}`}
    >
      <div className="min-h-screen flex flex-col items-center w-screen">
        <div className=" flex flex-row items-center justify-center w-full">
          <div className="flex-grow flex justify-center">
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-20 h-20"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className=" shadow-lg rounded-lg overflow-hidden flex justify-center items-center">
            <img
              src="https://m.media-amazon.com/images/I/71u2rYjpD8L._SY522_.jpg"
              alt="Placeholder"
              className="object-cover"
            />
          </div>
          <div className="flex-grow flex justify-center">
            <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-20 h-20"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="p-4">
          <h2
            className={`text-center font-semibold text-6xl mb-2 ${theme === "light" ? "bg-light-mode text-gray-600" : "bg-dark-mode text-gray-300"}`}
          >
            Name
          </h2>
          <p
            className={`mb-2 ${theme === "light" ? "bg-light-mode text-gray-600" : "bg-dark-mode text-gray-300"}`}
          >
            Author
          </p>
          <p
            className={`mb-2 ${theme === "light" ? "bg-light-mode text-gray-600" : "bg-dark-mode text-gray-300"}`}
          >
            Genres
          </p>
          <p
            className={`mb-2 ${theme === "light" ? "bg-light-mode text-gray-600" : "bg-dark-mode text-gray-300"}`}
          >
            Chapter
          </p>
          <p
            className={`mb-2 ${theme === "light" ? "bg-light-mode text-gray-600" : "bg-dark-mode text-gray-300"}`}
          >
            Description
          </p>
        </div>
      </div>
    </div>
  );
};

export default Binder;
