"use client";

import { Heading, Link, Pane, majorScale } from "evergreen-ui";
import { blogConfigs } from "./blogConfigs";
import Timestamp from "@/components/Main/Timestamp";
import MainLink from "@/components/Main/MainLink";

export default function Client() {
  const data = Object.entries(blogConfigs);

  return (
    <>
      <Heading is="h1" size={900}>
        Blog
      </Heading>

      {data.map(([slug, { title, lastUpdate }]) => (
        <Pane
          key={slug}
          display="flex"
          flexDirection="column"
          gap={majorScale(3)}
          alignItems="start"
        >
          <MainLink href={`blog/${slug}`} name={title} />
          <Timestamp time={lastUpdate} />
        </Pane>
      ))}
    </>
  );
}
