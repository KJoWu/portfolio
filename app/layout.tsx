"use client";

// import type { Metadata } from "next";
import Header from "./_components/header";
import "./globals.css";
import ThemeSwitch from "./_components/themeSwitch";
import ThemeContextProvider from "./_context/themeContext";
import { poppins, inter } from "./fonts";


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
      <body className={`${poppins.className} text-[##030712]`}>
        <ThemeContextProvider>
          <Header />

          {children}

          <ThemeSwitch />

          <div className={`p-3 text-center text-gray-600 font-light ${poppins.className} text-sm tracking-wide bg-white`}>
          &copy; Kim 2024. This site was designed in Figma, coded in Next JS by yours truly, styled with Tailwind and Framer, and deployed on GitHub.
          </div>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
