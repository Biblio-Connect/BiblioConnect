import React from "react";
import { useTheme } from "../contexts/themeContext";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

type Book = {
  BookID: number;
  Author: string;
  Chapters: string;
  Description: string;
  Genres: string;
  ImageURL: string;
  Name: string;
  Guidance: string;
};

const Binder: React.FC = () => {
  const [bookIndex, setBookIndex] = useState(0);
  const [books, setBooks] = useState<Book[]>([{
    Author: "undef",
    Chapters: "undef",
    Description: "undef",
    Genres: "undef",
    ImageURL: "undef",
    Name: "undef",
    Guidance: "undef",
    BookID: 0
  }]);

  const getBooks = async () => {
    const response = await fetch("http://localhost:3333/api/items");
    const data = await response.json();
    console.log(data);
    setBooks(data);
  };

  useEffect(() => {
    getBooks();
  }, []);

  const nextBook = () => {
    if(bookIndex === books.length - 1){
      return;
    }
    if(books.length > 0 && bookIndex < books.length - 1){
      setBookIndex((prevIndex) => (prevIndex + 1) % books.length);
    }
  };

  const sendLikedBook = async () => {
    const emailFromStorage = localStorage.getItem("email");
    if(!emailFromStorage){
      console.log("No email in local storage");
      return;
    }
    if(books.length === 0 || bookIndex >= books.length || bookIndex < 0){
      console.log("No books in array or index out of bounds");
      return;
    }
    const response = await fetch("http://localhost:3333/api/likedBooks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ book_id: books[bookIndex].BookID, email: localStorage.getItem("email") }),
    });
    const data = await response.json();
    console.log(data);
  };


  const { theme } = useTheme();

  return (
    <div
      className={`${theme === "light" ? "bg-light-mode text-ultra-dark-mode" : "bg-dark-mode text-light-mode"}`}
    >
      <div className="min-h-screen flex flex-col items-center">
        <div className=" flex flex-row items-center my-4 justify-center w-full">
          <div className="flex-grow flex justify-center">
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => nextBook()}>
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
              src={books[bookIndex].ImageURL}
              alt="Placeholder"
              className="object-cover"
            />
          </div>
          <div className="flex-grow flex justify-center">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={() => {sendLikedBook(); nextBook()}}>
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
            {books[bookIndex].Name}
          </h2>
          <p
            className={`mb-2 ${theme === "light" ? "bg-light-mode text-gray-600" : "bg-dark-mode text-gray-300"}`}
          >
            {books[bookIndex].Author}
          </p>
          <p
            className={`mb-2 ${theme === "light" ? "bg-light-mode text-gray-600" : "bg-dark-mode text-gray-300"}`}
          >
            {books[bookIndex].Genres}
          </p>
          <p
            className={`mb-2 ${theme === "light" ? "bg-light-mode text-gray-600" : "bg-dark-mode text-gray-300"}`}
          >
            `Chapters ${books[bookIndex].Chapters}`
          </p>
          <p
            className={`mb-2 ${theme === "light" ? "bg-light-mode text-gray-600" : "bg-dark-mode text-gray-300"}`}
          >
            {books[bookIndex].Description}
          </p>
        </div>
      </div>
      </div>
  );
};

export default Binder;
