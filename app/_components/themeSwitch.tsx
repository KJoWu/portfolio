"use client";
import { useTheme } from "../_context/themeContext";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { isDarkTheme, toggleTheme } = useTheme();
  return (
    <button
      className="fixed top-5 right-5 w-[4rem] h-[4rem]"
      onClick={toggleTheme}
    >
      {isDarkTheme ? <BsMoon /> : <BsSun />}
    </button>
  );
}
