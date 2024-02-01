import { Link as EvergreenLink, Strong, minorScale } from "evergreen-ui";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  name: string;
}

export default function NavLink({ href, name }: NavLinkProps) {
  const pathname = usePathname();
  // Stealing this from evergreen-ui doc site: https://github.com/segmentio/evergreen/blob/cce2742921d0ff0a4372503883eee89d00b508c4/docs/components/TopNav.tsx#L11
  const section = pathname.split("/")[1]?.toLowerCase();

  return (
    <EvergreenLink
      is={Link}
      href={href}
      color={section !== href ? "neutral" : undefined}
      size={500}
      padding={minorScale(1)}
    >
      {section === href ? <Strong size={500}>{name}</Strong> : name}
    </EvergreenLink>
  );
}
