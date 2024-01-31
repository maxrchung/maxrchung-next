"use client";

import { Button, Link, Pane, Text, majorScale } from "evergreen-ui";

export default function About() {
  return (
    <Pane
      display="flex"
      alignItems="center"
      background="yellowTint"
      height={majorScale(7)}
      padding={majorScale(1)}
    >
      <Pane display="flex" alignItems="center" gap={majorScale(3)}>
        <Link href="/">Home</Link>
        <Link href="blog">Blog</Link>
        <Link href="projects">Projects</Link>
        <Link href="about">About</Link>
      </Pane>
    </Pane>
  );
}
