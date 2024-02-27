import Link from "next/link";
import { Link as EvergreenLink, majorScale } from "evergreen-ui";

interface VideoLinkProps {
  href: string;
  src: string;
  width: number;
}

export default function VideoLink({ href, src, width }: VideoLinkProps) {
  return (
    <EvergreenLink
      is={Link}
      href={href}
      width={width}
      display="flex"
      borderRadius={majorScale(1)}
      alignSelf="center"
      maxWidth="80%"
    >
      <video
        src={src}
        width={width}
        // Counteract main styling, this looks pretty bad >_<
        style={{
          maxWidth: "100%",
        }}
        autoPlay
        playsInline
        muted
        loop
      />
    </EvergreenLink>
  );
}
