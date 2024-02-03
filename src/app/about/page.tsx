// We need this page component because need "use client" for Evergreen
"use client";

// Some wacko stuff: https://github.com/wojtekmaj/react-pdf?tab=readme-ov-file#use-external-cdn
import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

import Content from "./content.mdx";

export default function Page() {
  return <Content />;
}
