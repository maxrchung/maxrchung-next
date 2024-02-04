"use client";

import { Heading, Link } from "evergreen-ui";
import metadata from "./metadata";
import Timestamp from "@/components/Main/Timestamp";

export default function Client() {
  const data = Object.entries(metadata);

  return (
    <>
      <Heading is="h1" size={900}>
        Projects
      </Heading>

      {data.map(([slug, { title, lastUpdate }]) => (
        <>
          <Link size={600} href={`blog/${slug}`}>
            {title}
          </Link>
          <Timestamp time={lastUpdate} />
        </>
      ))}
    </>
  );
}
