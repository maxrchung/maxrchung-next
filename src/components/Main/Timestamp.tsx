import { Small, majorScale } from "evergreen-ui";

interface TimestampProps {
  time: Date | string | number;
}

// This component is typically used as a caption label under media
export default function Timestamp({ time }: TimestampProps) {
  const date = new Date(time);
  const display = date.toLocaleDateString();

  return <Small marginTop={majorScale(-1)}>{display}</Small>;
}
