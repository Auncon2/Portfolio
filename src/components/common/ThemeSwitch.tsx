
"use client";
import { Switch } from "@nextui-org/switch";
import { useTheme } from "next-themes";
import { LuSunMedium } from "react-icons/lu";
import { FiMoon } from "react-icons/fi";
import { useEffect, useState } from "react";

const ThemeSwitch = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Ensure that the component is mounted before rendering the UI to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setIsDark(resolvedTheme === "dark");
  }, [resolvedTheme]);

  const handleThemeToggle = () => {
    setTheme(isDark ? "light" : "dark");
  };

  // If the component is not mounted yet, return null (don't render the Switch)
  if (!mounted) {
    return null;
  }

  return (
    <Switch
    className={isDark ?  "bg-dark" : "bg-light" }
      isSelected={isDark}
      size="lg"
      color="secondary"
      onChange={() => {
        handleThemeToggle();
        setIsDark(!isDark);
      }}
      thumbIcon={({ isSelected }) =>
        isSelected ? 
        <FiMoon color="white" />
       : 
        <LuSunMedium color="white" /> 
      }
    />
  );
};

export default ThemeSwitch;
