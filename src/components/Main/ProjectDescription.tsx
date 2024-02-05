import { ProjectConfig } from "@/app/projects/projectConfigs";
import {
  Image,
  Link as EvergreenLink,
  Pane,
  majorScale,
  Paragraph,
} from "evergreen-ui";
import MainLink from "./MainLink";
import TimeRange from "./TimeRange";
import Link from "next/link";

interface ProjectDescriptionProps {
  projectEntry: [string, ProjectConfig];
}

export default function ProjectDescription({
  projectEntry: [slug, { thumbnail, title, description, start, end }],
}: ProjectDescriptionProps) {
  return (
    <Pane
      key={slug}
      display="flex"
      gap={majorScale(2)}
      alignItems="center"
      flexShrink={0}
    >
      <EvergreenLink
        is={Link}
        href={`/projects/${slug}`}
        width={128}
        height={128}
        flexShrink={0}
      >
        {thumbnail && (
          <Image
            src={thumbnail}
            alt={title}
            width={128}
            height={128}
            // Counteract main styling, this looks pretty bad >_<
            style={{
              maxWidth: "100%",
            }}
          />
        )}
      </EvergreenLink>

      <Pane
        display="flex"
        flexDirection="column"
        gap={majorScale(3)}
        alignItems="start"
      >
        <MainLink href={`projects/${slug}`} name={title} />
        <TimeRange start={start} end={end} />
        <Paragraph marginTop={majorScale(-1)}>{description}</Paragraph>
      </Pane>
    </Pane>
  );
}
