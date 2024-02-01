import {
  Pane,
  majorScale,
  Avatar,
  Link,
  Popover,
  Position,
  MenuIcon,
  Menu,
} from "evergreen-ui";
import NavIcon from "./NavIcon";
import NavLink from "./NavLink";
import MenuLink from "./MenuLink";

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
    >
      <Pane display="flex" alignItems="center" gap={majorScale(2)}>
        <Avatar
          is={Link}
          href="/"
          src="/daboi.jpg"
          size={majorScale(4)}
          borderRadius="99999px"
        />

        <div className="is-hidden-mobile">
          <Pane display="flex" alignItems="center" gap={majorScale(2)}>
            <NavLink href="blog" name="Blog" />
            <NavLink href="projects" name="Projects" />
            <NavLink href="about" name="About" />
          </Pane>
        </div>

        <div className="is-hidden-tablet">{navIcons}</div>
      </Pane>

      <div className="is-hidden-mobile">{navIcons}</div>

      <Popover
        position={Position.BOTTOM_RIGHT}
        minWidth="auto"
        content={
          <Pane display="flex" flexDirection="column">
            <MenuLink href="blog" name="Blog" />
            <MenuLink href="projects" name="Projects" />
            <MenuLink href="about" name="About" />
          </Pane>
        }
      >
        <MenuIcon className="is-hidden-tablet" />
      </Popover>
    </Pane>
  );
}
