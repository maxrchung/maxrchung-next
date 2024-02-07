import Client from "./Client";
import { projectConfigs } from "../projectConfigs";

interface ProjectProps {
  params: {
    slug: string;
  };
}

export default function Page({ params: { slug } }: ProjectProps) {
  return <Client slug={slug} />;
}

export function generateMetadata({ params: { slug } }: ProjectProps) {
  const projectConfig = projectConfigs[slug];
  return {
    title: `${projectConfig.title} - maxrchung`,
  };
}

export function generateStaticParams() {
  const params = Object.keys(projectConfigs).map((slug) => ({ slug }));
  return params;
}
