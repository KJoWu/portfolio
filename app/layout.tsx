"use client";

import Script from "next/script";
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6RT3NB54XL"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6RT3NB54XL');
          `}
        </Script>
        <title>Kimberly Wu's Portfolio</title>
        <meta
          name="description"
          content="Kimberly is a senior software developer with 8 years of experience, specializing in Front end and Product design"
        />
      </head>
      <body className={`${poppins.className} text-[##030712]`}>
        <ThemeProvider>

          {children}

        </ThemeProvider>
      </body>
    </html>
  );
}
