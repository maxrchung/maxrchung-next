import { Link as EvergreenLink, majorScale } from "evergreen-ui";
import Link from "next/link";

interface MenuLinkProps {
  href: string;
  name: string;
}

export default function MenuLink({ href, name }: MenuLinkProps) {
  return (
    <EvergreenLink is={Link} href={href} padding={majorScale(1)}>
      {name}
    </EvergreenLink>
  );
}
