"use client";

// We have to import Content like this because we need to specify "use client" for Evergreen
import Content from "./content.mdx";
import "./style.scss";

export default function Page() {
  return <Content />;
}
