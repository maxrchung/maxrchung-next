import { Paragraph, majorScale } from "evergreen-ui";
import { ReactNode } from "react";

interface CaptionProps {
  // Note: I purposely don't want to use children because MDX has quirk to it
  // where it tries to convert children if its on its own line. We can end up
  // with nested <p> elements.
  value: ReactNode;
}

// This component is typically used as a caption label under media
export default function Caption({ value }: CaptionProps) {
  return (
    <Paragraph alignSelf="center" marginTop={majorScale(-2)}>
      {value}
    </Paragraph>
  );
}
