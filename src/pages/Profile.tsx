import { useEffect } from "react";
import { useTheme } from "../contexts/themeContext";
import { FaArrowRight } from "react-icons/fa";
import LinkButton from "../components/LinkButton";

function Profile() {
  const { theme } = useTheme();

  useEffect(() => {
    document.title = "Profile - BiblioConnect";
    const email = localStorage.getItem("email");
    if (!email) {
      window.location.href = "/login";
    }
  }, []);

  return (
    <div
      className={`${theme === "light" ? "bg-light-mode text-ultra-dark-mode" : "bg-dark-mode text-light-mode"}`}
    >
      <div className="min-h-screen flex flex-col items-center">
        <p className="mb-4 mx-4 font-bold">Email</p>
        <p className="mb-4 mx-4 font-bold">{localStorage.getItem("email")}</p>
        <div className=" flex flex-row items-center my-4 justify-center w-full">
          <div className=" shadow-lg rounded-lg overflow-hidden flex justify-center items-center">
            <img
              src={
                "https://m.media-amazon.com/images/I/51-OsLmkHBL._SY445_SX342_.jpg"
              }
              alt="Placeholder"
              className="object-cover"
            />
          </div>
        </div>
        <div className="p-4">
          <h2
            className={`text-center font-semibold text-6xl mb-2 ${theme === "light" ? "bg-light-mode text-gray-600" : "bg-dark-mode text-gray-300"}`}
          >
            {"Rebecca"}
          </h2>
          <p
            className={`mb-2 ${theme === "light" ? "bg-light-mode text-gray-600" : "bg-dark-mode text-gray-300"}`}
          >
            {"Daphne du Maurier"}
          </p>
          <p
            className={`mb-2 ${theme === "light" ? "bg-light-mode text-gray-600" : "bg-dark-mode text-gray-300"}`}
          >
            {"Thriller"}
          </p>
          <p
            className={`mb-2 ${theme === "light" ? "bg-light-mode text-gray-600" : "bg-dark-mode text-gray-300"}`}
          >
            Chapters: {"27"}
          </p>
          <p
            className={`mb-2 ${theme === "light" ? "bg-light-mode text-gray-600" : "bg-dark-mode text-gray-300"}`}
          >
            {
              "A young woman marries a wealthy widower, but the shadow of his deceased wife looms large."
            }
          </p>
        </div>
        <LinkButton link="/howitworks">
          <FaArrowRight className="mr-2" />
          Get started
        </LinkButton>
      </div>
    </div>
  );
}

export default Profile;
