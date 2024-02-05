"use client";

import projectConfigs from "./projectConfigs";
import Header from "@/components/Main/Header";
import ProjectDescription from "@/components/Main/ProjectDescription";

export default function Client() {
  const data = Object.entries(projectConfigs);

  const current = data.filter(([_, { end }]) => !end);
  const past = data.filter(([_, { end }]) => !!end);

  return (
    <>
      <Header is="h1" size={900}>
        Projects
      </Header>

      {current.map((projectEntry) => (
        <ProjectDescription key={projectEntry[0]} projectEntry={projectEntry} />
      ))}

      <Header is="h2" size={800}>
        Past
      </Header>

      {past.map((projectEntry) => (
        <ProjectDescription key={projectEntry[0]} projectEntry={projectEntry} />
      ))}
    </>
  );
}
