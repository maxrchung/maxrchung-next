import { Small, majorScale } from "evergreen-ui";

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

  const display = `(${startDisplay} - ${endDisplay})`;

  return <Small marginTop={majorScale(-1)}>{display}</Small>;
}
