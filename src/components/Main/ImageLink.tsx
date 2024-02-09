import { Image, Link as EvergreenLink, majorScale } from "evergreen-ui";
import Link from "next/link";

interface ImageLinkProps {
  href: string;
  src: string;
  alt?: string;
  width: number;
}

export default function ImageLink({ href, src, alt, width }: ImageLinkProps) {
  return (
    <EvergreenLink
      is={Link}
      href={href}
      width={width}
      display="flex"
      flexShrink={0}
      borderRadius={majorScale(1)}
    >
      {src && (
        <Image
          src={src}
          alt={alt}
          width={width}
          // Counteract main styling, this looks pretty bad >_<
          style={{
            maxWidth: "100%",
          }}
        />
      )}
    </EvergreenLink>
  );
}
