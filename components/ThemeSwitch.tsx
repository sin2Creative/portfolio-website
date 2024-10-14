"use client";

import React, { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

type themeType = "light" | "dark";

export default function ThemeSwitch() {
  const [theme, setTheme] = useState<themeType>("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const storedTheme =
      (window.localStorage.getItem("theme") as themeType) || null;
    if (storedTheme) {
      setTheme(storedTheme);
      if (storedTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else if (window.matchMedia("(prefers=color-scheme:dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);
  return (
    <button
      className="group fixed flex items-center justify-center text-lg bottom-5 right-5 bg-white bg-opacity-80 backdrop-blur-[0.5rem] w-[3rem] h-[3rem] rounded-full border border-white border-opacity-40 shadow-xl hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-900"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
