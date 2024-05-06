import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/header";
import Intro from "./mainPage/intro";
import Projects from "./mainPage/projects";
import Skills from "./mainPage/skills";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kimberly Wu's Portfolio",
  description:
    "Kimberly is a full stack developer with 8 years of experience, specializing in Front end development and Product design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100 text-gray-950`}>
        <div
          className="bg-[#ffebec] 
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
        <Intro />
        <Skills />
        <Projects />



        <div>
          This site was designed in Figma, coded in Visual Studio by yours truly, Built with Next.JS + Tailwind + Framer and deployed on Github</div>
      </body>
    </html>
  );
}
