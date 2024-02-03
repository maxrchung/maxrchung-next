import {
  Code,
  CodeProps,
  Heading,
  HeadingProps,
  Image,
  ImageProps,
  Link,
  LinkProps,
  ListItem,
  ListItemProps,
  OrderedList,
  OrderedListProps,
  Pane,
  Paragraph,
  ParagraphProps,
  Pre,
  PreProps,
  Small,
  SmallProps,
  Strong,
  StrongProps,
  UnorderedList,
  UnorderedListProps,
} from "evergreen-ui";
import type { MDXComponents } from "mdx/types";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    // Following Evergreen Typography: https://evergreen.segment.com/foundations/typography#pre_component
    h1: (props) => <Heading is="h1" size={900} {...(props as HeadingProps)} />,
    h2: (props) => <Heading is="h2" size={800} {...(props as HeadingProps)} />,
    h3: (props) => <Heading is="h3" size={700} {...(props as HeadingProps)} />,
    h4: (props) => <Heading is="h4" size={600} {...(props as HeadingProps)} />,
    h5: (props) => <Heading is="h5" size={500} {...(props as HeadingProps)} />,
    h6: (props) => <Heading is="h6" size={400} {...(props as HeadingProps)} />,
    p: (props) => <Paragraph {...(props as ParagraphProps)} />,
    a: (props) => <Link {...(props as LinkProps)} />,
    strong: (props) => <Strong {...(props as StrongProps)} />,
    small: (props) => <Small {...(props as SmallProps)} />,
    pre: (props) => <Pre {...(props as PreProps)} />,
    code: (props) => <Code {...(props as CodeProps)} />,
    ol: (props) => <OrderedList {...(props as OrderedListProps)} />,
    ul: (props) => <UnorderedList {...(props as UnorderedListProps)} />,
    li: (props) => <ListItem {...(props as ListItemProps)} />,
    img: (props) => <Image alignSelf="center" {...(props as ImageProps)} />,
    ...components,
  };
}
