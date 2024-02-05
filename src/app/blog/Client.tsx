"use client";

import { Pane, majorScale } from "evergreen-ui";
import { blogConfigs } from "./blogConfigs";
import Timestamp from "@/components/Main/Timestamp";
import MainLink from "@/components/Main/MainLink";
import Header from "@/components/Main/Header";

export default function Client() {
  const data = Object.entries(blogConfigs);

  return (
    <>
      <Header is="h1" size={900}>
        Blog
      </Header>

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
