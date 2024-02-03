import { Text, majorScale } from "evergreen-ui";
import { ReactNode } from "react";

interface CaptionProps {
  children: ReactNode;
}

// This component is typically used as a caption label under media
export default function Caption({ children }: CaptionProps) {
  return (
    <Text alignSelf="center" marginTop={majorScale(-1)}>
      {children}
    </Text>
  );
}
