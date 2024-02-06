import { ArrowRightIcon, Small, majorScale, minorScale } from "evergreen-ui";

interface TimeRangeProps {
  start: Date | string | number;
  end?: Date | string | number;
}

// This component is typically used as a caption label under media
export default function TimeRange({ start, end }: TimeRangeProps) {
  const startDisplay = new Date(start).toLocaleString(undefined, {
    month: "short",
    year: "numeric",
  });

  const endDisplay = end
    ? new Date(end).toLocaleString(undefined, {
        month: "short",
        year: "numeric",
      })
    : "Present";

  const display =
    startDisplay === endDisplay
      ? startDisplay
      : `${startDisplay} - ${endDisplay}`;

  return (
    <Small fontSize={minorScale(3)} marginTop={majorScale(-1)}>
      {display}
    </Small>
  );
}
