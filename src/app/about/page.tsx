"use client";

import { Avatar, Pane, majorScale } from "evergreen-ui";
import NavLink from "../NavLink";
import Link from "next/link";
import NavIcon from "../NavIcon";

export default function About() {
  return (
    <Pane
      display="flex"
      alignItems="center"
      background="yellowTint"
      height={majorScale(7)}
      padding={majorScale(2)}
    >
      <Pane display="flex" alignItems="center" gap={majorScale(2)}>
        <Avatar is={Link} href="/" src="/daboi.jpg" size={majorScale(4)} />
        <NavLink href="blog" name="Blog" />
        <NavLink href="projects" name="Projects" />
        <NavLink href="about" name="About" />

        <NavIcon href="mailto:maxrchung@gmail.com" src="/gmail-logo.png" />
        <NavIcon href="mailto:maxrchung@gmail.com" src="/linkedin-logo.png" />
        <NavIcon href="mailto:maxrchung@gmail.com" src="/github-logo.png" />
        <NavIcon href="mailto:maxrchung@gmail.com" src="/x-logo.png" />
        <NavIcon href="mailto:maxrchung@gmail.com" src="/osu-logo.png" />
      </Pane>
    </Pane>
  );
}
