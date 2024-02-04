"use client";

// Some wacko stuff: https://github.com/wojtekmaj/react-pdf?tab=readme-ov-file#use-external-cdn
import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

import Content from "./Content.mdx";

export default function Client() {
  return <Content />;
}
