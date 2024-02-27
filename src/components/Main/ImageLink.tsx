import { Image, Link as EvergreenLink, majorScale } from "evergreen-ui";
import Link from "next/link";

interface ImageLinkProps {
  href: string;
  src: string;
  width: number;
}

export default function ImageLink({ href, src, width }: ImageLinkProps) {
  return (
    <EvergreenLink
      is={Link}
      href={href}
      width={width}
      display="flex"
      borderRadius={majorScale(1)}
      alignSelf="center"
      maxWidth="80%"
      target="_blank"
    >
      <Image
        src={src}
        width={width}
        // Counteract main styling, this looks pretty bad >_<
        style={{
          maxWidth: "100%",
        }}
      />
    </EvergreenLink>
  );
}
