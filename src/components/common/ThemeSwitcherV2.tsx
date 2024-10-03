"use client";

import React, { useEffect } from "react";
import { useTheme } from "next-themes";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

const ThemeSwitcherV2 = () => {
  const { theme, setTheme } = useTheme();
  const isDarkTheme = theme === "dark";



  // Set theme attribute for custom styling
  useEffect(() => {
    const currentTheme = isDarkTheme ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", currentTheme);
  }, [isDarkTheme]);

  // Handle theme toggle and update localStorage
  const handleThemeToggle = () => {
    const newTheme = isDarkTheme ? "light" : "dark";
    setTheme(newTheme); // Toggle theme using `setTheme`
  
    document.documentElement.setAttribute("data-theme", newTheme); // Update theme attribute
  };

  return (

    <div className="theme-toggle">
      <input
        type="checkbox"
        id="theme-switch"
        checked={isDarkTheme}
        onChange={handleThemeToggle}
      />
      <label htmlFor="theme-switch" className="switch">
        <span className="slider"></span>
        {isDarkTheme ? (
          <BsFillSunFill className="icon sun" />
        ) : (
          <BsFillMoonStarsFill className="icon moon" />
        )}
      </label>
    </div>

  );
};

export default ThemeSwitcherV2;


