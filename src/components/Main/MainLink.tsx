import { Link as EvergreenLink, Strong } from "evergreen-ui";
import Link from "next/link";

interface MainLinkProps {
  href: string;
  name: string;
}

// Larger link that's used for blog and project list titles
export default function MainLink({ href, name }: MainLinkProps) {
  return (
    <EvergreenLink is={Link} href={href} size={600}>
      {name}
    </EvergreenLink>
  );
}
