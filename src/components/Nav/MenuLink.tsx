import { Link as EvergreenLink, Pane, majorScale } from "evergreen-ui";
import Link from "next/link";

interface MenuLinkProps {
  href: string;
  name: string;
  onClick: () => void;
}

export default function MenuLink({ href, name, onClick }: MenuLinkProps) {
  return (
    <Pane padding={majorScale(1)}>
      <EvergreenLink is={Link} href={href} onClick={onClick}>
        {name}
      </EvergreenLink>
    </Pane>
  );
}
