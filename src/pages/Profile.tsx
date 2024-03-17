import { useEffect, useState } from "react";
import { useTheme } from "../contexts/themeContext";
import { FaArrowRight } from "react-icons/fa";
import LinkButton from "../components/LinkButton";

function Profile() {
  const { theme } = useTheme();
  const [genres, setGenres] = useState<string[]>([]);

  useEffect(() => {
    document.title = "Profile - BiblioConnect";
    const email = localStorage.getItem("email");
    if (!email) {
      window.location.href = "/login";
    }

    const recommendedBooks = async () => {
      const response = await fetch("http://localhost:3333/api/");
      const data = await response.json();
      console.log(data);
    }
    recommendedBooks();
  }, []);

  return (
    <div
      className={`flex justify-center ${theme === "light" ? "bg-light-mode text-ultra-dark-mode" : "bg-dark-mode text-light-mode"}`}
    >
      <div className="w-full flex flex-col items-center text-center">
        <div>
          <p className="mb-4 mx-4 font-bold">Email</p>
        </div>
        <div>
          <p className="mb-4 mx-4 font-bold">Books you might like</p>
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
