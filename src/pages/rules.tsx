import React from "react";
import { useTheme } from "../contexts/themeContext";

const Rules: React.FC = () => {
    const { theme } = useTheme();
    return (
      <div
        className={`min-w-screen  ${theme === "light" ? "bg-light-mode text-ultra-dark-mode" : "bg-dark-mode text-light-mode"}`}>
        <div>
        <h1>Rules:</h1>

        <h2>General Rules</h2>
        <ol>
            <li>The web-app is one person, outside help is allowed.</li>
            <li>Click "Green" if you like the books, "Red" if you dont like it.</li>
            <li>Click on it until there is no more left!</li>
        </ol>

        <h2>Setup</h2>
        <p>Describe the initial setup of the game.</p>

        <h2>Gameplay</h2>
        <ol>
            <li>You get certain amounts of books.</li>
            <li>Click green or red depending on your preferences.</li>
            <li>Do it again and again until there is none left.</li>
        </ol>

        <h2>Ending</h2>
        <p>Once you are done, we will show you 2 recommendations of books you might </p>
        </div>
    </div>
  );
};


export default Rules;