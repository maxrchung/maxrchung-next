// Required for evergreen-ui
"use client";

import { Inter } from "next/font/google";
import "./reset.scss";
import "./global.scss";
import NavBar from "@/components/Nav/Nav";
import { ReactNode } from "react";
import Main from "@/components/Main/Main";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <Main>{children}</Main>
      </body>
    </html>
  );
}
