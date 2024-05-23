import dynamic from "next/dynamic";
import { Spinner } from "evergreen-ui";

interface MdxBlogProps {
  slug: string;
}

export default function MdxBlog({ slug }: MdxBlogProps) {
  const Content = dynamic(() => import(`./${slug}.mdx`), {
    loading: () => <Spinner />,
  });

  return <Content />;
}
