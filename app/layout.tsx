"use client";

// import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./_context/themeContext";
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
        <ThemeProvider>

          {children}

          <div className={`p-3 text-center text-gray-600 font-light ${poppins.className} text-sm tracking-wide bg-white`}>
          &copy; Kim 2024. This site was designed in Figma, coded in Next JS by yours truly, styled with Tailwind and deployed on Vercel.
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
