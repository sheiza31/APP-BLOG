import type { Metadata } from "next";
import { Inter,Newsreader } from "next/font/google";
import "./globals.css";

const NewsreaderFont = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  axes: ["opsz"]
})

const InterFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "The Insight - Login",
  description: "Login to The Insight",
};

export default function LoginLayout({ children }: any) {
  return (
    <html
      lang="en"
      className={`${InterFont.variable} ${NewsreaderFont.variable} h-full antialiased`}
      
    >
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" />
      </head>
      <body className="bg-background min-h-screen font-body-md text-body-md text-on-surface antialiased">
        {children}
      </body>
    </html>
  );
}
