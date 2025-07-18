import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SENG CHANTHEA",
  description: "Portfolio of Seng Chanthea - DevOps engineer.",
  keywords: ["Seng Chanthea", "DevOps"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900 min-h-screen flex flex-col`}
      >
        <header className="max-w-5xl mx-auto w-full p-4 flex justify-between items-center border-b border-gray-300">
          <h1 className="text-xl font-semibold">SENG CHANTHEA</h1>
          <nav className="space-x-4">
            <Link href="/" className="text-blue-600 hover:underline">
              Home
            </Link>
            <Link href="/resume" className="text-blue-600 hover:underline">
              Resume
            </Link>
          </nav>
        </header>
        <main className="flex-grow max-w-5xl mx-auto w-full p-6">
          {children}
        </main>
        <footer className="max-w-5xl mx-auto w-full p-4 text-center text-sm text-gray-500 border-t border-gray-300">
          © {new Date().getFullYear()} Seng Chanthea. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
