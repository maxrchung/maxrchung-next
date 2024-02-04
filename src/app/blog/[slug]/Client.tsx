"use client";

import { useParams } from "next/navigation";
import { blogConfigs } from "../blogConfigs";
import { Heading } from "evergreen-ui";
import Timestamp from "@/components/Main/Timestamp";

export default function Client() {
  const params = useParams<{ slug: string }>();
  const { title, lastUpdate } = blogConfigs[params.slug];

  return (
    <>
      <Heading is="h1" size={900}>
        {title}
      </Heading>
      <Timestamp time={lastUpdate} />
    </>
  );
}
