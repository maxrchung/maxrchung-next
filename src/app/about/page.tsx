// We need this page component because need "use client" for Evergreen
"use client";

import Content from "./content.mdx";
import "./style.scss";

import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export default function Page() {
  return <Content />;
}
