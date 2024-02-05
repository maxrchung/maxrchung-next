import Client from "./Client";
import { projectConfigs } from "../projectConfigs";

export default function Page() {
  return <Client />;
}

interface ProjectParams {
  params: {
    slug: string;
  };
}

export function generateMetadata({ params: { slug } }: ProjectParams) {
  const projectConfig = projectConfigs[slug];
  return {
    title: `maxrchung - ${projectConfig.title}`,
  };
}
