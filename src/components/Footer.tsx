import React from "react";
import { useTheme } from "../contexts/themeContext";

const Footer: React.FC = () => {
  const { theme } = useTheme();

  const openLinkInNewTab = (url: string) => {
    window.open(url, "_blank");
  };

  const getLinkElement = (url: string, text: string) => (
    <span
      className="font-medium text-indigo-500 hover:text-indigo-600"
      onClick={() => openLinkInNewTab(url)}
    >
      {text}
    </span>
  );

  return (
    <footer
      className={`relative bottom-0 py-4 w-full text-center ${theme === "light" ? "bg-light-mode text-dark-mode" : "bg-dark-mode text-light-mode"}`}
    >
      <p>
        Made by {getLinkElement("https://github.com/nwhee", "Jonathan Ding")},{" "}
        {getLinkElement("https://seanfinch.com", "Sean Finch")},{" "}
        {getLinkElement("https://github.com/EricHuang05", "Eric Huang")}, and{" "}
        {getLinkElement("https://shishirpokhrel.com", "Shishir Pokhrel")} • Made
        for {getLinkElement("https://web.archive.org/web/20241229024348/https://pawhacks.io/", "PawHacks 2024")}
      </p>
    </footer>
  );
};

export default Footer;
