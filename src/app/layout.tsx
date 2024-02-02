// Required for evergreen-ui
"use client";

import { Inter } from "next/font/google";
import "./reset.css";
import "./global.css";
import NavBar from "@/components/Nav/Nav";
import { Pane, majorScale } from "evergreen-ui";
import { ReactNode } from "react";

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
        <Pane width="768px" margin="auto" padding={majorScale(4)}>
          {children}
        </Pane>
      </body>
    </html>
  );
}
