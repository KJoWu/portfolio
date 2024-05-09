"use client";
import { useTheme } from "../_context/themeContext";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
    const { isDarkTheme, toggleTheme } = useTheme();
    return (
        <button
            className="fixed bottom-5 right-5 p-2 bg-white w-[3rem] h-[3rem] bg-opacity-80 back-blue-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
            onClick={toggleTheme}
        >
            {isDarkTheme ?<p>Part Time  <BsMoon className="text-3xl"/> </p>: <BsSun className="text-3xl "/>}
        </button>
    );
}