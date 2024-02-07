import { Link as EvergreenLink, Pane, majorScale } from "evergreen-ui";
import Link from "next/link";

interface MenuLinkProps {
  href: string;
  name: string;
}

export default function MenuLink({ href, name }: MenuLinkProps) {
  return (
    <Pane padding={majorScale(1)}>
      <EvergreenLink is={Link} href={href}>
        {name}
      </EvergreenLink>
    </Pane>
  );
}
