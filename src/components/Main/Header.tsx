import { Heading, HeadingProps, majorScale } from "evergreen-ui";
import { ElementType } from "react";

// Some funky stuff going on with "is" so I'm kind of overriding
interface HeaderProps extends Omit<HeadingProps, "is"> {
  is: ElementType<any, keyof JSX.IntrinsicElements>;
}

// This component is a simple wrapper around Evergreen's Heading. The only
// change it does it alter the margin bottom so that it's clearer what section a
// heading is responsible for.
export default function Header({ is, ...rest }: HeaderProps) {
  return <Heading is={is} marginBottom={majorScale(-1)} {...rest} />;
}
