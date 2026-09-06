import type { Metadata } from "next";
import { Bitter, Work_Sans, Caveat } from "next/font/google";
import "./globals.css";

const bitter = Bitter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-bitter",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-work-sans",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mike Robbins — Developer & Housing Case Manager",
  description: "Portfolio and case files: projects, writing, and the work behind them.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${bitter.variable} ${workSans.variable} ${caveat.variable}`}
    >
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
