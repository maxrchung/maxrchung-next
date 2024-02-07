"use client";

import "./reset.scss";
import "./global.scss";
import NavBar from "@/components/Nav/Nav";
import { ReactNode, useEffect, useState } from "react";
import Main from "@/components/Main/Main";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  // Meme solution to fix initial flicker xD
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  useEffect(() => {
    setIsInitialLoad(false);
  }, []);

  return (
    <html lang="en">
      <body>
        {!isInitialLoad && (
          <>
            <NavBar />
            <Main>{children}</Main>
          </>
        )}
      </body>
    </html>
  );
}
