import { Image, Paragraph } from "evergreen-ui";
import style from "./viewer.module.scss";
import { useEffect, useState } from "react";

interface ViewerProps {
  // If src is non-empty then we show the viewer
  src: string;
  onClose: () => void;
}

export default function Viewer({ src, onClose }: ViewerProps) {
  const [state, setState] = useState("");

  // Hide scrollbar when viewer is open, based on some code here:
  // https://github.com/segmentio/evergreen/blob/cce2742921d0ff0a4372503883eee89d00b508c4/src/lib/prevent-body-scroll.js#L10
  // ^ This actually doesn't really work for me so I followed v
  // https://stackoverflow.com/a/56382662
  useEffect(() => {
    if (src) {
      const previous = document.body.clientWidth;
      document.body.style.overflow = "hidden";
      const updated = document.body.clientWidth;
      const diff = updated - previous;
      document.body.style.paddingRight = diff + "px";

      setState("active");
    } else {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0";

      setState("fadeout");
      setTimeout(() => setState(""), 200);
    }
  }, [src]);

  // Yeah this is not the greatest but yolo
  const hiRes = src.replace("-preview.", ".");

  if (!state) {
    return null;
  }

  return (
    <div
      onClick={onClose}
      className={`${style.viewer} ${
        state === "active" ? style["fade-in"] : ""
      }`}
    >
      {hiRes && (
        <>
          <Image
            src={hiRes}
            alt={hiRes}
            maxWidth="80%"
            maxHeight="80%"
            className={style.image}
          />
          <Paragraph color="white" maxWidth="80%" maxHeight="80%">
            Pretty neat
          </Paragraph>
        </>
      )}
    </div>
  );
}
