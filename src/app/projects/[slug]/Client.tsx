"use client";

import projectConfigs from "../projectConfigs";
import dynamic from "next/dynamic";
import Header from "@/components/Main/Header";
import BreadcrumbLink from "@/components/Main/BreadcrumbLink";
import TimeRange from "@/components/Main/TimeRange";
import { Spinner } from "evergreen-ui";

interface ClientProps {
  slug: string;
}

export default function Client({ slug }: ClientProps) {
  const { title, start, end } = projectConfigs[slug];

  const Content = dynamic(() => import(`./${slug}.mdx`), {
    loading: () => <Spinner />,
  });

  return (
    <>
      <BreadcrumbLink href="/projects" name="Projects" />

      <Header is="h1" size={900}>
        {title}
      </Header>

      <TimeRange start={start} end={end} />

      <Content />
    </>
  );
}
