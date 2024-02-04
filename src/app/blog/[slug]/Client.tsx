"use client";

import { useParams } from "next/navigation";
import { blogConfigs } from "../blogConfigs";
import { Heading } from "evergreen-ui";
import Timestamp from "@/components/Main/Timestamp";
import dynamic from "next/dynamic";

export default function Client() {
  const params = useParams<{ slug: string }>();
  const { title, time } = blogConfigs[params.slug];

  const Content = dynamic(() => import("./Content.mdx"));

  return (
    <>
      <Heading is="h1" size={900}>
        {title}
      </Heading>
      <Timestamp time={time} />

      <Content />
    </>
  );
}
