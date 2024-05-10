"use client";

// import type { Metadata } from "next";
import Header from "./_components/header";
import "./globals.css";
import ThemeSwitch from "./_components/themeSwitch";
import ThemeContextProvider from "./_context/themeContext";
import { poppins } from "./fonts";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Kimberly Wu's Portfolio</title>
        <meta
          name="description"
          content="Kimberly is a senior software developer with 8 years of experience, specializing in Front end and Product design"
        />
      </head>
      <body className={`${poppins.className} bg-gray-100 text-[##030712]`}>
        <ThemeContextProvider>
          {/* gradient */}
          <div
            className="bg-[#ffebec] x
            absolute top-[-6rem] 
            right-[11rem] h-[31.25rem] 
            w-[31.25rem] rounded-full 
            blur-[10rem]"
          ></div>
          <div
            className="bg-[#d9f1ff] 
            absolute top-[-6rem] 
            left-[11rem] h-[31.25rem] 
            w-[31.25rem] rounded-full 
            blur-[10rem]"
          ></div>
          <Header />

          {children}

          <ThemeSwitch />

          <div>
            This site was sketched out in Figma, coded in Visual Studio by yours
            truly, prettied up with Tailwind and Framer, and deployed on Github
          </div>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
