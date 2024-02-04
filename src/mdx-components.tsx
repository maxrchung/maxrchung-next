import {
  Code,
  CodeProps,
  Heading,
  HeadingProps,
  Link,
  LinkProps,
  ListItem,
  ListItemProps,
  OrderedList,
  OrderedListProps,
  Paragraph,
  ParagraphProps,
  Pre,
  PreProps,
  Strong,
  StrongProps,
  UnorderedList,
  UnorderedListProps,
  majorScale,
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
    h1: (props) => (
      <Heading
        is="h1"
        size={900}
        marginBottom={majorScale(-1)}
        {...(props as HeadingProps)}
      />
    ),
    h2: (props) => (
      <Heading
        is="h2"
        size={800}
        marginBottom={majorScale(-1)}
        {...(props as HeadingProps)}
      />
    ),
    h3: (props) => (
      <Heading
        is="h3"
        size={700}
        marginBottom={majorScale(-1)}
        {...(props as HeadingProps)}
      />
    ),
    h4: (props) => (
      <Heading
        is="h4"
        size={600}
        marginBottom={majorScale(-1)}
        {...(props as HeadingProps)}
      />
    ),
    h5: (props) => (
      <Heading
        is="h5"
        size={500}
        marginBottom={majorScale(-1)}
        {...(props as HeadingProps)}
      />
    ),
    h6: (props) => (
      <Heading
        is="h6"
        size={400}
        marginBottom={majorScale(-1)}
        {...(props as HeadingProps)}
      />
    ),
    p: (props) => <Paragraph {...(props as ParagraphProps)} />,
    a: (props) => <Link {...(props as LinkProps)} />,
    strong: (props) => <Strong {...(props as StrongProps)} />,
    pre: (props) => <Pre {...(props as PreProps)} />,
    code: (props) => <Code {...(props as CodeProps)} />,
    ol: (props) => (
      <OrderedList
        marginTop={majorScale(-2)}
        {...(props as OrderedListProps)}
      />
    ),
    ul: (props) => (
      <UnorderedList
        marginTop={majorScale(-2)}
        {...(props as UnorderedListProps)}
      />
    ),
    li: (props) => <ListItem {...(props as ListItemProps)} />,
    ...components,
  };
}
