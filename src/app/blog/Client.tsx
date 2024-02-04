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

      {data.map((_, index) => {
        // Go in reverse order because using number as config key will always
        // force ascending key order
        const [slug, { title, time }] = data[data.length - 1 - index];
        return (
          <Pane
            key={slug}
            display="flex"
            flexDirection="column"
            gap={majorScale(3)}
            alignItems="start"
          >
            <MainLink href={`blog/${slug}`} name={title} />
            <Timestamp time={time} />
          </Pane>
        );
      })}
    </>
  );
}
