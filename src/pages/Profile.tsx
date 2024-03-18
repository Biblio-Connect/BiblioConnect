import { useEffect, useState } from "react";
import { useTheme } from "../contexts/themeContext";
import { FaArrowRight, FaSignOutAlt } from "react-icons/fa";
// import { MdDelete } from "react-icons/md";
import LinkButton from "../components/LinkButton";

// interface DelAccButtonProps {
//   children: React.ReactNode;
// }

// const DelAccButton: React.FC = () => {
//   const { theme } = useTheme();
//   const navigate = useNavigate();

//   const deleteAccount = async () => {
//     try {
//       const response = await fetch("http://localhost:3333/api/delete-account", {
//         method: "DELETE",
//         headers: {
//           "Authorization": `Bearer ${localStorage.getItem("token")}`,
//         },
//       });

//       if (response.ok) {
//         localStorage.removeItem("email");
//         localStorage.removeItem("token");
//         navigate("/signup");
//       } else {
//         console.error("Failed to delete account");
//       }
//     } catch (error) {
//       console.error("Error deleting account:", error);
//     }
//   };

//   return (
//     <button className={buttonClass} onClick={delAcc}>
//       {children}
//     </button>
//   );
// };

interface LogoutButtonProps {
  children: React.ReactNode;
}

const LogoutButton: React.FC<LogoutButtonProps> = ({ children }) => {
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

  const logout = () => {
    localStorage.removeItem("email");
    window.location.href = "/login";
  };

  return (
    <button className={buttonClass} onClick={logout}>
      {children}
    </button>
  );
};

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
      <div className="mt-10 min-h-screen flex flex-col items-center">
        <p className="my-2 mx-4 text-3xl font-bold">Email</p>
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
        <LogoutButton>
          <FaSignOutAlt className="mr-2" />
          Log out
        </LogoutButton>
        {/* <DelAccButton>
          <MdDelete className="mr-2" />
          Delete account
        </DelAccButton> */}
      </div>
    </div>
  );
}

export default Profile;
