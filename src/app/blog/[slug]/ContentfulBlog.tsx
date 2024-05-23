import { BlogPostSkeleton } from "../blogConfigs";
import { Spinner } from "evergreen-ui";
import { evaluate } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
import { Fragment, useEffect, useState } from "react";
import { MDXModule } from "mdx/types";
import { useMDXComponents } from "@/mdx-components";
import { createClient } from "contentful";

interface ClientProps {
  slug: string;
}

export default function ContentfulBlog({ slug }: ClientProps) {
  const [content, setContent] = useState<MDXModule>();
  const Content = content ? content.default : Spinner;

  useEffect(() => {
    (async () => {
      const client = createClient({
        // For dev, use a .env file
        // For production and for reference, see the Amplify configuration
        space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE ?? "",
        accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN ?? "",
      });

      const entry = await client.getEntries<BlogPostSkeleton>({
        content_type: "blogPost",
        limit: 1,
        "fields.id": slug,
      });

      console.log(entry);

      setContent(
        await evaluate(entry.items[0].fields.content, {
          ...runtime,
          Fragment,
          useMDXComponents: () => useMDXComponents({}),
        })
      );
    })();
  }, [slug]);

  return <Content />;
}
