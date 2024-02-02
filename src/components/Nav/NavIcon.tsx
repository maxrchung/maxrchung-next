import { Pane, majorScale } from "evergreen-ui";
import Link from "next/link";

interface NavIconProps {
  href: string;
  src: string;
}

export default function NavIcon({ href, src }: NavIconProps) {
  return (
    <Pane is={Link} href={href} display="flex" alignItems="center">
      <Pane is="img" src={src} width={majorScale(3)} />
    </Pane>
  );
}
