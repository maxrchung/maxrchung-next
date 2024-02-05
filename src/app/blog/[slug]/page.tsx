import Client from "./Client";
import blogConfigs from "../blogConfigs";

export default function Page() {
  return <Client />;
}

interface BlogParams {
  params: {
    slug: string;
  };
}

export function generateMetadata({ params: { slug } }: BlogParams) {
  const blogConfig = blogConfigs[slug];
  return {
    title: `maxrchung - ${blogConfig.title}`,
  };
}
