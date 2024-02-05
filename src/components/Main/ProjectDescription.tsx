import { ProjectConfig } from "@/app/projects/projectConfigs";
import { Image, Pane, majorScale, Paragraph } from "evergreen-ui";
import MainLink from "./MainLink";
import TimeRange from "./TimeRange";

interface ProjectDescriptionProps {
  projectEntry: [string, ProjectConfig];
}

export default function ProjectDescription({
  projectEntry: [slug, { thumbnail, title, description, start, end }],
}: ProjectDescriptionProps) {
  return (
    <Pane key={slug} display="flex" gap={majorScale(2)} alignItems="center">
      <Image src={thumbnail} alt={title} width={128} />

      <Pane display="flex" flexDirection="column" gap={majorScale(3)}>
        <MainLink href={`projects/${slug}`} name={title} />
        <TimeRange start={start} end={end} />
        <Paragraph marginTop={majorScale(-1)}>{description}</Paragraph>
      </Pane>
    </Pane>
  );
}
