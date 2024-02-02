"use client";

// We have to import Content like this because we need to specify "use client" for Evergreen
import Content from "./content.mdx";
import "./style.module.css";

export default function Page() {
  return <Content />;
}
