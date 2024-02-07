import Client from "./Client";
import blogConfigs from "../blogConfigs";

interface BlogProps {
  params: {
    slug: string;
  };
}

export default function Page({ params: { slug } }: BlogProps) {
  return <Client slug={slug} />;
}

export function generateMetadata({ params: { slug } }: BlogProps) {
  const blogConfig = blogConfigs[slug];
  return {
    title: `${blogConfig.title} - maxrchung`,
  };
}

export function generateStaticParams() {
  const params = Object.keys(blogConfigs).map((slug) => ({ slug }));
  return params;
}
