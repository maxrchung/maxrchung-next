"use client";

import blogConfigs from "../blogConfigs";
import Timestamp from "@/components/Main/Timestamp";
import Header from "@/components/Main/Header";
import BreadcrumbLink from "@/components/Main/BreadcrumbLink";
import ContentfulBlog from "./ContentfulBlog";
import MdxBlog from "./MdxBlog";

interface ClientProps {
  slug: string;
}

export default function Client({ slug }: ClientProps) {
  const { title, time, source } = blogConfigs[slug];

  return (
    <>
      <BreadcrumbLink href="/blog" name="Blog" />

      <Header is="h1" size={900}>
        {title}
      </Header>
      <Timestamp time={time} />

      {source === "contentful" ? (
        <ContentfulBlog slug={slug} />
      ) : (
        <MdxBlog slug={slug} />
      )}
    </>
  );
}
