import {
  ChevronLeftIcon,
  Link as EvergreenLink,
  Pane,
  majorScale,
} from "evergreen-ui";
import Link from "next/link";

interface BreadcrumbLinkProps {
  href: string;
  name: string;
}

// For returning back to list page
export default function BreadcrumbLink({ href, name }: BreadcrumbLinkProps) {
  return (
    <Pane
      display="flex"
      gap={2}
      marginBottom={majorScale(-2)}
      alignItems="center"
    >
      <ChevronLeftIcon />

      <EvergreenLink is={Link} href={href}>
        {name}
      </EvergreenLink>
    </Pane>
  );
}
