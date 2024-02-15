import { Image, Paragraph } from "evergreen-ui";
import style from "./viewer.module.scss";
import { useEffect, useState } from "react";
import { GalleryConfig } from "./Gallery";

interface ViewerProps {
  galleryConfigs: GalleryConfig[];
  index: number;
  onClose: () => void;
}

export default function Viewer({
  galleryConfigs,
  index,
  onClose,
}: ViewerProps) {
  const [state, setState] = useState("");

  // Hide scrollbar when viewer is open, based on some code here:
  // https://github.com/segmentio/evergreen/blob/cce2742921d0ff0a4372503883eee89d00b508c4/src/lib/prevent-body-scroll.js#L10
  // ^ This actually doesn't really work for me so I followed v
  // https://stackoverflow.com/a/56382662
  useEffect(() => {
    if (index !== -1) {
      const previous = document.body.clientWidth;
      document.body.style.overflow = "hidden";
      const updated = document.body.clientWidth;
      const diff = updated - previous;
      document.body.style.paddingRight = diff + "px";

      setState("loading");
    } else {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0";

      setState("fadeout");
      setTimeout(() => setState(""), 200);
    }
  }, [index]);

  if (!state) {
    return null;
  }

  return (
    <div
      onClick={onClose}
      className={`${style.viewer} ${
        state === "loaded" || state === "loading" ? style["fade-in"] : ""
      }`}
    >
      {index !== -1 && (
        <>
          <Image
            src={galleryConfigs[index].src}
            alt={galleryConfigs[index].src}
            maxWidth="80%"
            maxHeight="80%"
            className={style.image}
            onLoad={() => setState("loaded")}
          />
          {
            // This reduces some flickering where text may flicker from middle
            // screen to bottom while waiting for image to laod
            state === "loaded" && (
              <Paragraph color="white" maxWidth="80%" maxHeight="80%">
                {galleryConfigs[index].caption}
              </Paragraph>
            )
          }
        </>
      )}
    </div>
  );
}
