"use client";

import { useParams } from "next/navigation";
import { blogConfigs } from "../blogConfigs";
import Timestamp from "@/components/Main/Timestamp";
import dynamic from "next/dynamic";
import Header from "@/components/Main/Header";
import BreadcrumbLink from "@/components/Main/BreadcrumbLink";

export default function Client() {
  const params = useParams<{ slug: string }>();
  const { title, time } = blogConfigs[params.slug];

  const Content = dynamic(() => import(`./${params.slug}.mdx`));

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
