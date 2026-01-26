import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mike Robbins | Developer Portfolio",
  description: "Portfolio showcasing projects and skills",
};

export default function RootLayout({
  children,}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

