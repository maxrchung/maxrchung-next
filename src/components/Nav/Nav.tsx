import { Pane, majorScale, Popover, Position, MenuIcon } from "evergreen-ui";
import NavIcon from "./NavIcon";
import NavLink from "./NavLink";
import MenuLink from "./MenuLink";
import Link from "next/link";

export default function NavBar() {
  const navIcons = (
    <Pane display="flex" alignItems="center" gap={majorScale(2)}>
      <NavIcon href="mailto:maxrchung@gmail.com" src="/gmail-logo.png" />
      <NavIcon
        href="https://www.linkedin.com/in/maxrchung/"
        src="/linkedin-logo.png"
      />
      <NavIcon href="https://github.com/maxrchung" src="/github-logo.png" />
      <NavIcon href="https://x.com/maxrchung" src="/x-logo.png" />
      <NavIcon href="https://osu.ppy.sh/users/S2VX" src="/osu-logo.png" />
    </Pane>
  );

  return (
    <Pane
      is="nav"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      background="yellowTint"
      height={majorScale(7)}
      padding={majorScale(2)}
      position="sticky"
      top={0}
      zIndex={10} // Otherwise images apparently show over this
    >
      <Pane display="flex" alignItems="center" gap={majorScale(2)}>
        <Pane is={Link} href="/">
          <Pane
            is="img"
            src="/the-boy.jpg"
            width={majorScale(4)}
            borderRadius="100%"
          />
        </Pane>

        <div className="is-hidden-mobile">
          <Pane display="flex" alignItems="center" gap={majorScale(2)}>
            <NavLink href="/projects" name="Projects" />
            <NavLink href="/blog" name="Blog" />
            <NavLink href="/about" name="About" />
          </Pane>
        </div>

        <Pane className="is-hidden-tablet">{navIcons}</Pane>
      </Pane>

      <Pane className="is-hidden-mobile">{navIcons}</Pane>

      <Popover
        position={Position.BOTTOM_RIGHT}
        minWidth="auto"
        content={
          <Pane display="flex" flexDirection="column">
            <MenuLink href="/projects" name="Projects" />
            <MenuLink href="/blog" name="Blog" />
            <MenuLink href="/about" name="About" />
          </Pane>
        }
      >
        <MenuIcon className="is-hidden-tablet" />
      </Popover>
    </Pane>
  );
}
