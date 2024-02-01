// Required for evergreen-ui
"use client";

import { Inter } from "next/font/google";
import "./reset.css";
import "./global.css";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
