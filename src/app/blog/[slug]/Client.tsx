"use client";

import blogConfigs from "../blogConfigs";
import Timestamp from "@/components/Main/Timestamp";
import dynamic from "next/dynamic";
import Header from "@/components/Main/Header";
import BreadcrumbLink from "@/components/Main/BreadcrumbLink";
import { Spinner } from "evergreen-ui";

interface ClientProps {
  slug: string;
}

export default function Client({ slug }: ClientProps) {
  const { title, time } = blogConfigs[slug];

  const Content = dynamic(() => import(`./${slug}.mdx`), {
    loading: () => <Spinner />,
  });

  return (
    <>
      <BreadcrumbLink href="/blog" name="Blog" />

      <Header is="h1" size={900}>
        {title}
      </Header>
      <Timestamp time={time} />

      <Content />
    </>
  );
}
